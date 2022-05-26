import { DaffProductFilterType } from '../filter-type';

/**
 * A request used to modify the applied status of a {@link DaffProductFilterEqual}.
 */
export interface DaffProductFilterEqualRequest {
  /**
   * The type of filter request.
   */
  type: DaffProductFilterType.Equal;
  /**
   * The name of the filter; e.g. color.
   */
  name: string;
  /**
   * An array of filter options; e.g. green and red.
   */
  value: string[];
}
