import { DaffFilterType } from '../filter-type';
import { DaffFilterRangeRequestBase } from '../range/public_api';

/**
 * Describes filter range requests for numbers; i.e. prices.
 */
export interface DaffFilterRangeNumericRequest extends DaffFilterRangeRequestBase<number> {
  /**
   * The filter type.
   */
  type: DaffFilterType.RangeNumeric;
}
