import { DaffCategoryFilterType } from '../category-filter-type';

/**
 * A request used to toggle the applied status of a {@link DaffCategoryFilterEqual}.
 */
export interface DaffCategoryFilterEqualToggleRequest {
  /**
   * The type of filter request.
   */
  type: DaffCategoryFilterType.Equal;
  /**
   * The name of the filter; e.g. color.
   */
  name: string;
  /**
   * The value of the filter option; e.g. red.
   */
  value: string;
}
