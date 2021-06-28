/**
 * A canonical service is responsible for managing the canonical URL for the current page.
 */
export interface DaffCanonicalServiceInterface {
  /**
   * Inserts or updates, as needed, a canonical URL on the current page.
   *
   * @param url The canonical URL
   */
  upsert(url: string): void;

  /**
   * Removes the canonical URL, if it exists, from the current page.
   */
  remove(): void;
}
