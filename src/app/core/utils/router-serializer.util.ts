import { Params, RouterStateSnapshot } from '@angular/router';
import { RouterStateSerializer } from '@ngrx/router-store';

import { IRouterStateUrl } from '../models';

export class CustomSerializer implements RouterStateSerializer<IRouterStateUrl> {

  /**
   * @public @method serialize
   * @author iztokb
   * @since 2019-01-06
   * @description
   * Custom router serializer. As per @ngrx documentation it is used because router state snapshot is a mutable object
   * and that can cause issue with store freeze.
   * @param routerState IRouterStateUrl
   */
  serialize(routerState: RouterStateSnapshot): IRouterStateUrl {
    let route = routerState.root;

    while (route.firstChild) {
      route = route.firstChild;
    }

    const {
      url,
      root: { queryParams },
    } = routerState;
    const { params } = route;

    // Only return an object including the URL, params and query params
    // instead of the entire snapshot
    return { url, params, queryParams };
  }
}
