/**
 * A basic tree type supporting supplemental data on a tree node.
 *
 * Tree elements are often slightly more than just basic titles and child items.
 * There may be other important data that needs to be available at render time.
 */
export interface DaffTreeData<T> {
  /**
   * The label displayed for a tree node.
   */
  title: string;

  /**
   * A URL associated with a tree node, which can be used for navigation or linking.
   */
  url: string;

  /**
   * A unique ID for a tree node.
   */
  id: string;

  /**
   * An array of child nodes, each of which is also a `DaffTreeData` item.
   */
  items: DaffTreeData<T>[];

  /**
   * Additional data associated with a tree node.
   */
  data: T;
}
