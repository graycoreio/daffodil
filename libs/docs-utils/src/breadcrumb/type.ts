/**
 * A breadcrumb represents a level in the navigation hierarchy of a webpage.
 * A common example is the category that contains a product, e.g. T-Shirts > Men > BallerTee.
 */
export interface DaffBreadcrumb {
  /**
   * The human-readable label.
   */
  label: string;
  /**
   * The path of the breadcrumb.
   */
  path: string;
}
