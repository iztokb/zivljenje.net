/**
 * @description
 * Services interface
 */
export interface IService {
  unsubscribe(): void;
}

/**
 * @description
 * Init module service interface
 * @extends IService
 */
export interface IIInitModule extends IService {
  initModule(): void
}
