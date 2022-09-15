import { DaffFilterType } from '../filter-type';

/**
 * A request used to toggle the applied status of a {@link DaffFilterEqual}.
 */
export interface DaffFilterEqualToggleRequest {
  /**
   * The type of filter request.
   */
  type: DaffFilterType.Equal;
  /**
   * The name of the filter; e.g. color.
   */
  name: string;
  /**
   * The value of the filter option; e.g. red.
   */
  value: string;
}
