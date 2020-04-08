import { DaffNavigationReducerState } from '../reducers/navigation/navigation-reducer-state.interface';
import { DaffGenericNavigationTree } from '../models/generic-navigation-tree';

export interface DaffNavigationReducersState<T extends DaffGenericNavigationTree<T>> {
  navigation: DaffNavigationReducerState<T>;
}
