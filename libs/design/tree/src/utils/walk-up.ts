import { DaffTreeUi } from '../interfaces/tree-ui';

/**
 * Walk up the tree from a leaf to the root applying the
 * visit function at each node along the way.
 */
export const walkUp = <T>(
  tree: DaffTreeUi<T>,
  visit: (tree: DaffTreeUi<T>) => DaffTreeUi<T>,
): DaffTreeUi<T> => {
  while(tree.parent) {
    visit(tree);
    tree = tree.parent;
  }

  return tree;
};
