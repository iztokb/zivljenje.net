import { createSelector } from '@ngrx/store';

import * as fromCore from '../reducers';
import * as fromPublicUser from '../reducers/public-user.reducer';

import { IApplicationState } from '../../models';

/**
 * Get public user state
 */
export const getSelectedLanguage$ = createSelector(
  fromCore.getCorePublicUserState$,
  fromPublicUser.languageCode
);

/**
 * Get cookie consent
 */
export const getCookieConsent$ = createSelector(
  fromCore.getCorePublicUserState$,
  fromPublicUser.cookieConsent
);
