import { walkUp } from './walk-up';
import { DaffTreeUi } from '../interfaces/tree-ui';

/**
 * Open all ancestor nodes of the given node so that it becomes visible in the tree.
 */
export const daffTreeOpenAncestors = <T>(node: DaffTreeUi<T>): void => {
  walkUp(node, (ancestor) => {
    ancestor.open = true;
    return ancestor;
  });
};
