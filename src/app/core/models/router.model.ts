import { Params, RouterStateSnapshot } from '@angular/router';

/**
 * @description
 * Router state interface
 */
export interface IRouterStateUrl {
  url: string;
  params: Params;
  queryParams: Params;
}
