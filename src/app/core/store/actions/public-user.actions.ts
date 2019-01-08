import { Action } from '@ngrx/store';

import { IPublicUser, LanguageCode } from '../../models';

export enum PublicUserActionTypes {
  RESOLVE_LANGUAGE = '[Public user] Resolve language',
  SET_COOKIE_CONSENT = '[Public user] Set cookie consent',
  SET_LANGUAGE = '[Public user] Set language',
}

export class ResolveLanguage implements Action {
  readonly type = PublicUserActionTypes.RESOLVE_LANGUAGE;

  constructor(public key: string) {}
}

export class SetCookieConsent implements Action {
  readonly type = PublicUserActionTypes.SET_COOKIE_CONSENT;

  constructor(public cookieDecision: boolean) {}
}

export class SetLanguage implements Action {
  readonly type = PublicUserActionTypes.SET_LANGUAGE;

  constructor(public languageCode: LanguageCode) {}
}

export type PublicUserActions = ResolveLanguage | SetCookieConsent | SetLanguage;
