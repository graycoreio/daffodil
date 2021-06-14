/**
 * The request option represents the minimum and maximum values that
 * are going to be filtered as defined by a {@link DaffCategoryFilterRangeRequestBase}.
 */
export interface DaffCategoryFilterRangeRequestOption<T> {
	/**
	 * The minimum value of the filter range.
	 */
  min: T;
	/**
	 * The maximum value of the filter range.
	 */
  max: T;
}
