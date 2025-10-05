
/**
 * An interface for providing @daffodil/navigation/driver/shopify with necessary config values.
 */
export interface ShopifyNavigationDriverConfig {
  /**
   * The maximum depth of menu item children that the navigation driver will query.
   * Defaults to 3.
   */
  navigationTreeQueryDepth: number;
}
