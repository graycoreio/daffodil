import { DaffTreeUi } from '../interfaces/tree-ui';
import { traverse } from './traverse-tree';

/**
 * Collapse the tree and its subtrees.
 */
export const collapseTree = <T>(tree: DaffTreeUi<T>): DaffTreeUi<T> =>  traverse(tree, (node) => {
  node.open = false;
  return node;
}, 'items');
