import { DaffProductFilterType } from '../filter-type';
import { DaffProductFilterRangeRequestOption } from '../range/public_api';

/**
 * The base interface for range requests. Range requests have a name and a
 * single defining the min and max values between which to filter.
 */
export interface DaffProductFilterRangeRequestBase<T> {
  /**
   * The type of filter.
   */
  type: DaffProductFilterType;
  /**
   * The name/code of the filter; e.g. price.
   */
  name: string;
  /**
   * The value of the filter range.
   */
  value: DaffProductFilterRangeRequestOption<T>;
}
