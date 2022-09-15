import { DaffFilterType } from '../filter-type';
import { DaffFilterRangeBase } from '../range/public_api';

/**
 * An interface that describes filters that are a range of numbers; i.e. prices.
 */
export interface DaffFilterRangeNumeric extends DaffFilterRangeBase<number> {
  /**
   * The type of filter.
   */
  type: DaffFilterType.RangeNumeric;
}
