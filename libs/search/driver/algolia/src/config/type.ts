/**
 * An interface for providing `@daffodil/search/driver/algolia` with necessary config values.
 */
export interface DaffSearchAlgoliaDriverConfig {
  /**
   * The Algolia application ID.
   */
  appId: string;
  /**
   * The Algolia API key.
   */
  apiKey: string;
  /**
   * The name of the Algolia index to search.
   */
  indexName: string;
}
