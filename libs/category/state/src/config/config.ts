import { InjectionToken } from '@angular/core';

/**
 * A token to define the default category page size on a category page load. This value is 12 by default.
 */
export const DaffCategoryStateConfigurationToken = new InjectionToken<DaffCategoryStateConfiguration>('DaffCategoryStateConfigurationToken');

/**
 * The configuration object used to configure the `@daffodil/category/state`
 * package.
 */
export interface DaffCategoryStateConfiguration {
  /**
   * The default size of the number of items to retrieve for a category
   */
  defaultPageSize: number;
}

/**
 * The default configuration object used to configure the `@daffodil/category/state`
 * package.
 */
export const defaultDaffCategoryStateConfiguration: DaffCategoryStateConfiguration = {
  defaultPageSize: 12,
};
