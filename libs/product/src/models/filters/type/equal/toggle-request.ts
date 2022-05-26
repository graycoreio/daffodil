import { DaffProductFilterType } from '../filter-type';

/**
 * A request used to toggle the applied status of a {@link DaffProductFilterEqual}.
 */
export interface DaffProductFilterEqualToggleRequest {
  /**
   * The type of filter request.
   */
  type: DaffProductFilterType.Equal;
  /**
   * The name of the filter; e.g. color.
   */
  name: string;
  /**
   * The value of the filter option; e.g. red.
   */
  value: string;
}
