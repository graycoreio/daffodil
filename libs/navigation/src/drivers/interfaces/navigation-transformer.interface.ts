import { DaffNavigationTree } from '../../models/navigation-tree';

export interface DaffNavigationTransformerInterface<T extends DaffNavigationTree<T>> {
  transform(navigationTree: any): T;
}
