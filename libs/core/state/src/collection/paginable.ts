/**
 * The interface that describes a collection of elements that can be navigated in
 * a paged way. E.g. "Pages 1,2,3,4,5".
 *
 */
export interface DaffNumericallyPaginable {
  current_page: number;
  total_pages: number;
  page_size: number;
}
