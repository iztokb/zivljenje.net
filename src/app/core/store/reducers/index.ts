import { ActionReducer, ActionReducerMap, createFeatureSelector, createSelector, MetaReducer } from '@ngrx/store';
import { storeFreeze } from 'ngrx-store-freeze';
import { environment } from '../../../../environments/environment';

import * as fromRouter from '@ngrx/router-store';
import * as fromPublicUser from './public-user.reducer';

import { IApplicationState, IRouterStateUrl } from '../../models';


export const applicationCoreReducers: ActionReducerMap<IApplicationState> = {
  publicUser: fromPublicUser.publicUserReducer,
  routerState: fromRouter.routerReducer
}

export const metaReducers: MetaReducer<IApplicationState>[] = !environment.production ? [storeFreeze] : [];

export const getRouterState$ = createFeatureSelector<fromRouter.RouterReducerState<IRouterStateUrl>>('routerState');

