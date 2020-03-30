import { DaffNavigationTree } from '../../models/navigation-tree';

export interface NavigationReducerState<T extends DaffNavigationTree<T>> {
  navigationTree: T,
  loading: boolean,
  errors: string[]
}
