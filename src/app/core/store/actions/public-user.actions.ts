import { Action } from '@ngrx/store';

import { IPublicUser, LanguageCode } from '../../models';

export enum PublicUserActionTypes {
  RESOLVE_LANGUAGE = '[Public user] Resolve language',
  SET_LANGUAGE = '[Public user] Set language',
}

export class ResolveLanguage implements Action {
  readonly type = PublicUserActionTypes.RESOLVE_LANGUAGE;

  constructor(public key: string) {}
}

export class SetLanguage implements Action {
  readonly type = PublicUserActionTypes.SET_LANGUAGE;

  constructor(public languageCode: LanguageCode) {}
}

export type PublicUserActions = ResolveLanguage | SetLanguage;
