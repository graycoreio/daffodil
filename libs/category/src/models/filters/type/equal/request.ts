import { DaffCategoryFilterType } from '../category-filter-type';

/**
 * A request used to modify the applied status of a {@link DaffCategoryFilterEqual}.
 */
export interface DaffCategoryFilterEqualRequest {
  /**
   * The type of filter request.
   */
  type: DaffCategoryFilterType.Equal;
  /**
   * The name of the filter; e.g. color.
   */
  name: string;
  /**
   * An array of filter options; e.g. green and red.
   */
  value: string[];
}
