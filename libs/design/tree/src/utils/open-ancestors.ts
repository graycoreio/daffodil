import { DaffTreeUi } from '../interfaces/tree-ui';
import { walkUp } from './walk-up';

/**
 * Open all ancestor nodes of the given node so that it becomes visible in the tree.
 */
export const daffTreeOpenAncestors = <T>(node: DaffTreeUi<T>): void => {
  walkUp(node, (ancestor) => {
    ancestor.open = true;
    return ancestor;
  });
};
