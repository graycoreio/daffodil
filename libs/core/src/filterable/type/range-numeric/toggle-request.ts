import { DaffFilterType } from '../filter-type';
import { DaffFilterRangeRequestBase } from '../range/request-base';

/**
 * An interface to describe toggle requests for ranged numeric filters. For example, the request could be to
 * toggle a price filter for the "10-20" range.
 */
export interface DaffFilterRangeNumericToggleRequest extends DaffFilterRangeRequestBase<number> {
  /**
   * The filter type.
   */
  type: DaffFilterType.RangeNumeric;
}
