/**
 * A meta description service is responsible for managing the meta description tag for the current page.
 */
export interface DaffMetaDescriptionServiceInterface {
  /**
   * Inserts or updates, as needed, a meta description tag on the current page.
   *
   * @param content The meta tag content
   */
  upsert(content: string): void;

  /**
   * Removes the meta tag, if it exists, from the current page.
   */
  remove(): void;
}
