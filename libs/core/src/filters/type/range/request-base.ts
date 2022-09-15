import { DaffFilterType } from '../filter-type';
import { DaffFilterRangeRequestOption } from './public_api';

/**
 * The base interface for range requests. Range requests have a name and a
 * single defining the min and max values between which to filter.
 */
export interface DaffFilterRangeRequestBase<T> {
  /**
   * The type of filter.
   */
  type: DaffFilterType;
  /**
   * The name/code of the filter; e.g. price.
   */
  name: string;
  /**
   * The value of the filter range.
   */
  value: DaffFilterRangeRequestOption<T>;
}
