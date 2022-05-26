import { DaffProductFilterType } from '../filter-type';
import { DaffProductFilterRangeRequestBase } from '../range/request-base';

/**
 * An interface to describe toggle requests for ranged numeric filters. For example, the request could be to
 * toggle a price filter for the "10-20" range.
 */
export interface DaffProductFilterRangeNumericToggleRequest extends DaffProductFilterRangeRequestBase<number> {
  /**
   * The filter type.
   */
  type: DaffProductFilterType.RangeNumeric;
}
