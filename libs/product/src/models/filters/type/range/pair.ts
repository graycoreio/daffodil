import { DaffProductFilterOptionBase } from '../../filter-option-base';
import { DaffProductFilterRangeOption } from './option';

/**
 * An pair of options of the product range filter.
 * Specifies a pair of min and max values.
 */
export interface DaffProductFilterRangePair<T> extends DaffProductFilterOptionBase {
  /**
   * The range pair is always set to applied, because a filter range pair exists if it is applied and does not exist if it is not applied.
   */
  applied: true;
  /**
   * The minimum range option of the filter range pair.
   */
  min: DaffProductFilterRangeOption<T>;
  /**
   * The maximum range option of the filter range pair.
   */
  max: DaffProductFilterRangeOption<T>;
}
