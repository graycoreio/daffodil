/**
 * The request option represents the minimum and maximum values that
 * are going to be filtered as defined by a {@link DaffFilterRangeRequestBase}.
 */
export interface DaffFilterRangeRequestOption<T> {
  /**
   * The minimum value of the filter range.
   */
  min: T;
  /**
   * The maximum value of the filter range.
   */
  max: T;
}
