import { NavigationReducerState } from '../reducers/navigation/navigation-reducer-state.interface';
import { DaffNavigationTree } from '../models/navigation-tree';

export interface NavigationReducersState<T extends DaffNavigationTree<T>> {
  navigation: NavigationReducerState<T>;
}
