import { DaffCategoryFilterOptionBase } from '../../category-filter-option-base';
import { DaffCategoryFilterRangeOption } from './option';

/**
 * An pair of options of the category range filter.
 * Specifies a pair of min and max values.
 */
export interface DaffCategoryFilterRangePair<T> extends DaffCategoryFilterOptionBase {
  /**
   * The range pair is always set to applied, because a filter range pair exists if it is applied and does not exist if it is not applied.
   */
  applied: true;
  /**
   * The minimum range option of the filter range pair.
   */
  min: DaffCategoryFilterRangeOption<T>;
  /**
   * The maximum range option of the filter range pair.
   */
  max: DaffCategoryFilterRangeOption<T>;
}
