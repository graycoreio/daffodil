import { DaffGenericNavigationTree } from '@daffodil/navigation';

import { DaffNavigationReducerState } from '../reducers/navigation/navigation-reducer-state.interface';
import { DAFF_NAVIGATION_STORE_FEATURE_KEY } from './navigation-store-feature-key';

export interface DaffNavigationReducersState<T extends DaffGenericNavigationTree<T>> {
  navigation: DaffNavigationReducerState<T>;
}

export interface DaffNavigationStateRootSlice<T extends DaffGenericNavigationTree<T>> {
  [DAFF_NAVIGATION_STORE_FEATURE_KEY]: DaffNavigationReducersState<T>;
}
