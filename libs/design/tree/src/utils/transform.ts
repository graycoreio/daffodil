import { RecursiveTreeKeyOfType } from '../interfaces/recursive-key';
import { DaffTreeData } from '../interfaces/tree-data';

/**
 * Transform a tree-like structure into a {@link DaffTreeData}.
 *
 * @param tree - The data structure representing tree-like data.
 * @param transformFn - A user-supplied function that will transform the user
 *  type into a {@link DaffTreeData}
 * @param key - The property of the your tree that indicates which
 *  key contains the "children" of your tree structure.
 *
 */
export const daffTransformTree = <
  // eslint-disable-next-line @typescript-eslint/no-restricted-types
  T extends Record<any,any>,
  V
>(
  tree: T,
  transformFn: (type: T) => DaffTreeData<V>,
  key: RecursiveTreeKeyOfType<T>,
): DaffTreeData<V> => {

  const transformedTree: DaffTreeData<V> = transformFn(tree);

  const queue: { node: T; parent: DaffTreeData<V> }[] = [{ node: tree, parent: transformedTree }];

  while (queue.length > 0) {
    const { node, parent } = queue.shift();

    const childItems = node[key];
    for (const child of <T[]>childItems) {
      const transformedChild: DaffTreeData<V> = transformFn(child);
      parent.items.push(transformedChild);
      queue.push({ node: child, parent: transformedChild });
    }
  }

  return transformedTree;
};
