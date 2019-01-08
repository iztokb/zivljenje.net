import { createSelector } from '@ngrx/store';

import * as fromCore from '../reducers';

import { IRouterStateUrl } from '../../models';

/**
 * @description
 * Get router state selector
 */
export const getRouterState$ = createSelector(fromCore.getCoreRouterState$, state => state.state);

/**
 * @description
 * Get router navigationId
 */
export const getRouterNavigationId$ = createSelector(fromCore.getCoreRouterState$, state => state.navigationId)

/**
 * @description
 * Get router state url
 */
export const getCurrentUrl$ = createSelector(getRouterState$, state => state.url);

/**
 * @description
 * Get router state params
 */
export const getCurrentParams$ = createSelector(getRouterState$, state => state.params);

/**
 * @description
 * Get router query params
 */
export const getCurrentQuery$ = createSelector(getRouterState$, state => state.queryParams);
