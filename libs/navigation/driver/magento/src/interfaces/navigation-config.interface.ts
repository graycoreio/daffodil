import { InjectionToken } from '@angular/core';

/**
 * The maximum depth of category children that the navigation driver will query.
 * Defaults to 3.
 */
export const MAGENTO_NAVIGATION_TREE_QUERY_DEPTH =
  new InjectionToken<number>('MAGENTO_NAVIGATION_TREE_QUERY_DEPTH', {factory: () => 3});

export interface MagentoNavigationDriverConfiguration {
  navigationTreeQueryDepth: number;
}
