/**
 * The request option represents the minimum and maximum values that
 * are going to be filtered as defined by a {@link DaffCategoryFilterRangeRequestBase}.
 */
export interface DaffCategoryFilterRangeRequestOption<T> {
  min: T;
  max: T;
}
