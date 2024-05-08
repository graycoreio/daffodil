import { ActionReducerMap } from '@ngrx/store';

import { DaffNavigationTree } from '@daffodil/navigation';

import { daffNavigationReducer } from './navigation/navigation.reducer';
import { DaffNavigationReducersState } from './navigation-reducers.interface';

export const daffNavigationReducers: ActionReducerMap<DaffNavigationReducersState<DaffNavigationTree>> = {
  navigation: daffNavigationReducer,
  // TODO: add entity state
};
