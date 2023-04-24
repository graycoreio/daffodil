/**
 * A basic tree type supporting supplemental data on a tree node.
 *
 * Tree elements are often slightly more than just basic titles and child items.
 * There may be other important data that needs to be available at render time.
 */
export interface DaffTreeData<T> {
  title: string;
  url: string;
  id: string;
  items: DaffTreeData<T>[];
  data: T;
}
