import { DaffTreeUi } from '../interfaces/tree-ui';
import { traverse } from './traverse-tree';

/**
 * Expand the tree and its subtrees.
 */
export const expandTree = <T>(tree: DaffTreeUi<T>): DaffTreeUi<T> =>  traverse(tree, (node) => {
  node.open = true;
  return node;
}, 'items');
