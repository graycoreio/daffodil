import { DaffFilterOptionBase } from '../../filter-option-base';
import { DaffFilterRangeOption } from './option';

/**
 * An pair of options of the range filter.
 * Specifies a pair of min and max values.
 */
export interface DaffFilterRangePair<T> extends DaffFilterOptionBase {
  /**
   * The range pair is always set to applied, because a filter range pair exists if it is applied and does not exist if it is not applied.
   */
  applied: true;
  /**
   * The minimum range option of the filter range pair.
   */
  min: DaffFilterRangeOption<T>;
  /**
   * The maximum range option of the filter range pair.
   */
  max: DaffFilterRangeOption<T>;
}
