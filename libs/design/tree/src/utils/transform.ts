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
  // eslint-disable-next-line @typescript-eslint/ban-types
  T extends Record<any,any>,
>(
  tree: T,
  transformFn: (type: T) => DaffTreeData<unknown>,
  key: RecursiveTreeKeyOfType<T>,
): DaffTreeData<unknown> => {

  const transformedTree: DaffTreeData<unknown> = transformFn(tree);

  const queue: { node: T; parent: DaffTreeData<unknown> }[] = [{ node: tree, parent: transformedTree }];

  while (queue.length > 0) {
    const { node, parent } = queue.shift();

    const childItems = node[key];
    for (const child of <T[]>childItems) {
      const transformedChild: DaffTreeData<unknown> = transformFn(child);
      parent.items.push(transformedChild);
      queue.push({ node: child, parent: transformedChild });
    }
  }

  return transformedTree;
};
