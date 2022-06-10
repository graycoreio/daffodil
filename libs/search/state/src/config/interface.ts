
/**
 * An interface for providing @daffodil/search/state with necessary config values.
 */
export interface DaffSearchStateConfig {
  /**
   * The result limit to pass to the driver during an incremental search.
   * See {@link DaffSearchDriverOptions#limit}
   *
   * Defaults to 5.
   */
  incrementalResultLimit?: number;
  /**
   * The number of recent search queries to store.
   *
   * Defaults to 10.
   */
  // TODO: figure out how to implement
  // recentSearchLimit?: number;
}
