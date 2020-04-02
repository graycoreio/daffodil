import { DaffGenericNavigationTree } from '../../models/generic-navigation-tree';

export interface DaffNavigationTransformerInterface<T extends DaffGenericNavigationTree<T>> {
  transform(navigationTree: any): T;
}
