import { DaffGenericNavigationTree } from '../../models/generic-navigation-tree';

export interface DaffNavigationReducerState<T extends DaffGenericNavigationTree<T>> {
  navigationTree: T,
  loading: boolean,
  errors: string[]
}
