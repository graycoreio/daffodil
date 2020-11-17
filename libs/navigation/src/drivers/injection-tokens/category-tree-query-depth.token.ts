import { InjectionToken } from '@angular/core';

/**
 * The maximum depth of category children that the navigation driver will query.
 * Defaults to 3.
 */
export const DaffNavigationCategoryTreeQueryDepth =
  new InjectionToken<number>('DaffNavigationCategoryTreeQueryDepth', {factory: () => 3});
