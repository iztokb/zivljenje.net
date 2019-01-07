import { EntityState } from '@ngrx/entity';

/**
 * @description
 * Module navigation interface
 */
export interface INavigation {
  id: number;
  name: string;
  description: string;
  icon: string;
  url: string;
}

/**
 * @description
 * Navigation list state
 */
export interface INavigationState extends EntityState<INavigation> {

}
