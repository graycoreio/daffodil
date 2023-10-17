import { traverse } from './traverse-tree';
import { DaffTreeUi } from '../interfaces/tree-ui';

/**
 * Collapse the tree and its subtrees.
 */
export const collapseTree = <T>(tree: DaffTreeUi<T>): DaffTreeUi<T> =>  traverse(tree, (node) => {
  node.open = false;
  return node;
}, 'items');
