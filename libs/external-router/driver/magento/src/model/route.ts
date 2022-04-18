export interface MagentoRoute {
  /**
   * The relative path for the route.
   */
  relative_url: string;

  /**
   * The type of route, typically PRODUCT, CATEGORY or CMS_PAGE
   */
  type: string;

  /**
   * The HTTP code for the page.
   */
  redirect_code: number;

  /**
   * In v2.4.3 this became the standard field across types
   */
  uid?: string;

  /**
   * The canonical url of the route.
   */
  canonical_url?: string;

  /**
   * The meta description of the route
   */
  meta_description?: string;

  /**
   * The name of the route
   */
  name?: string;

  /**
   * The title of the route
   */
  meta_title?: string;
}
