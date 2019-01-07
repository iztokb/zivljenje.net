import { RouterReducerState } from '@ngrx/router-store';

import { IRouterStateUrl } from './router.model';
import { IPublicUser } from './public-user.model';


export interface IApplicationState {
  publicUser: IPublicUser;
  routerState: RouterReducerState<IRouterStateUrl>;
}
