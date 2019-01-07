
/**
 * @description
 * Available (supported) language codes
 */
export type LanguageCode = 'sl-SI' | 'en-US';

/**
 * @description
 * Public user interface
 */
export interface IPublicUser {
  languageCode: LanguageCode
}
