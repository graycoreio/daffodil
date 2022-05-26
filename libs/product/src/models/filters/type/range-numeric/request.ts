import { DaffProductFilterType } from '../filter-type';
import { DaffProductFilterRangeRequestBase } from '../range/public_api';

/**
 * Describes filter range requests for numbers; i.e. prices.
 */
export interface DaffProductFilterRangeNumericRequest extends DaffProductFilterRangeRequestBase<number> {
  /**
   * The filter type.
   */
  type: DaffProductFilterType.RangeNumeric;
}
