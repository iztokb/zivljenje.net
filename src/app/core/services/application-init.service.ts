import { Injectable } from '@angular/core';
import { Subscription, Subject } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Store, select } from '@ngrx/store';
import * as fromStore from '../store';
import { StorageService } from './storage.service';
import { IApplicationState, IIInitModule, LanguageCode } from '../models';

@Injectable({
  providedIn: 'root'
})
export class ApplicationInitService implements IIInitModule {

  private _subscriptions: Subscription[];
  private _unsubscribe: Subject<void>;

  constructor(
    private _store: Store<IApplicationState>,
    private _storageService: StorageService
  ) {
  }

  initModule() {
    console.log('*** APPLICATION INIT METHOD ***');

    // Determine if user has language stored in local storage
    const storedLanguage: LanguageCode = this._storageService.getItemFromStorage('LOCAL_STORAGE', 'language') as LanguageCode;

    // Bootstrap sequence
    this._store.pipe(
      select(fromStore.getSelectedLanguage$),
      tap(stream => {
        // If no language was stored then store default value

        // Rehydrate the state with selected language
        if (storedLanguage && stream !== storedLanguage) {
          this._store.dispatch(new fromStore.SetLanguage(storedLanguage))
        } else {
          this._store.dispatch(new fromStore.SetLanguage(stream))
        }
      })
    )

  }

  unsubscribe() {
    // Complete all subscriptions that are dependend on takeUntil operator
    this._unsubscribe.next();
    this._unsubscribe.complete();

    // Unsubscribe from all subscriptions that are dependend on subscriptions
    this._subscriptions.forEach(subscription => {
      subscription.unsubscribe()
    });
  }
}
