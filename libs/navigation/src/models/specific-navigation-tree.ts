import { DaffNavigationTree } from './navigation-tree';

/**
 * This model is needed as a reference in concrete classes, because the DaffNavigationTree is recursive. This model
 * serves as the usable model for concrete classes. The DaffNavigationTree should be used only in extension when defining
 * a new model.
 */
export interface DaffSpecificNavigationTree extends DaffNavigationTree<DaffSpecificNavigationTree> {}