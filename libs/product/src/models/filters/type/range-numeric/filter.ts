import { DaffProductFilterType } from '../filter-type';
import { DaffProductFilterRangeBase } from '../range/public_api';

/**
 * An interface that describes filters that are a range of numbers; i.e. prices.
 */
export interface DaffProductFilterRangeNumeric extends DaffProductFilterRangeBase<number> {
  /**
   * The type of filter.
   */
  type: DaffProductFilterType.RangeNumeric;
}
