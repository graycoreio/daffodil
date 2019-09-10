import { DaffNavigationTree } from '../../models/navigation-tree';

export interface NavigationReducerState {
  navigationTree: DaffNavigationTree,
  loading: boolean,
  errors: string[]
}
