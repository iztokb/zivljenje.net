import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ServiceWorkerModule } from '@angular/service-worker';
import { FlexLayoutModule } from '@angular/flex-layout';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreRouterConnectingModule } from '@ngrx/router-store';

import { AppRoutingModule } from './app-routing.module';
import { ZivCoreModule } from './core/ziv-core.module';
import { AppComponent } from './app.component';
import { environment } from '../environments/environment';

import { applicationCoreReducers, metaReducers } from './core/store'
import { CustomSerializer } from './core/utils/router-serializer.util'


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    // Angular modules
    BrowserAnimationsModule,
    BrowserModule,
    FlexLayoutModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    // Libs modules
    StoreModule.forRoot(applicationCoreReducers, {
      metaReducers
    }),
    !environment.production
      ? StoreDevtoolsModule.instrument({
          maxAge: 25
        })
      : [],
    StoreRouterConnectingModule.forRoot({
      serializer: CustomSerializer
    }),
    // Application modules
    AppRoutingModule,
    ZivCoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
