/**
 * The interface that describes a collection of elements that can be navigated in
 * a paged way. E.g. "Pages 1,2,3,4,5".
 *
 */
export interface DaffNumericallyPaginable {
  currentPage: number;
  totalPages: number;
  pageSize: number;
}
