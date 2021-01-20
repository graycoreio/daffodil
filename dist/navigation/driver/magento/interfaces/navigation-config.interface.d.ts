import { InjectionToken } from '@angular/core';
/**
 * The maximum depth of category children that the navigation driver will query.
 * Defaults to 3.
 */
export declare const MAGENTO_NAVIGATION_TREE_QUERY_DEPTH: InjectionToken<number>;
export interface MagentoNavigationDriverConfiguration {
    navigationTreeQueryDepth: number;
}
