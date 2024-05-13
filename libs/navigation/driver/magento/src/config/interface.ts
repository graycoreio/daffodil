
/**
 * An interface for providing @daffodil/search/state with necessary config values.
 */
export interface MagentoNavigationDriverConfig {
  /**
   * The maximum depth of category children that the navigation driver will query.
   * Defaults to 3.
   */
  navigationTreeQueryDepth: number;
}
