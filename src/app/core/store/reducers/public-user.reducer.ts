import { Action } from '@ngrx/store';
import * as fromPublicUser from '../actions/public-user.actions';
import { IPublicUser } from '../../models';

export const PUBLIC_USER_INITIAL_STATE: IPublicUser = {
  cookieConsent: null,
  languageCode: 'sl-SI'
};

export function publicUserReducer(state = PUBLIC_USER_INITIAL_STATE, action: fromPublicUser.PublicUserActions): IPublicUser {
  switch (action.type) {
    case fromPublicUser.PublicUserActionTypes.RESOLVE_LANGUAGE: {
      return state;
    }

    case fromPublicUser.PublicUserActionTypes.SET_LANGUAGE: {
      return {
        ...state,
        languageCode: action.languageCode
      };
    }

    default: {
      return state;
    }
  }
}

/*
 * Export slices
 */
export const cookieConsent = (state: IPublicUser) => state.cookieConsent;
export const languageCode = (state: IPublicUser) => state.languageCode;
