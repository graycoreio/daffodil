import { DaffGenericNavigationTree } from './generic-navigation-tree';

/**
 * This model is needed as a reference in concrete classes, because the DaffGenericNavigationTree is recursive.
 */
export interface DaffNavigationTree extends DaffGenericNavigationTree<DaffNavigationTree> {}
