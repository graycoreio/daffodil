import { DaffNavigationTree } from '../../models/navigation-tree';

export interface NavigationReducerState {
  navigation: DaffNavigationTree,
  loading: boolean,
  errors: string[]
}
