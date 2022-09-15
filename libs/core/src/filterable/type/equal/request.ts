import { DaffFilterType } from '../filter-type';

/**
 * A request used to modify the applied status of a {@link DaffFilterEqual}.
 */
export interface DaffFilterEqualRequest {
  /**
   * The type of filter request.
   */
  type: DaffFilterType.Equal;
  /**
   * The name of the filter; e.g. color.
   */
  name: string;
  /**
   * An array of filter options; e.g. green and red.
   */
  value: string[];
}
