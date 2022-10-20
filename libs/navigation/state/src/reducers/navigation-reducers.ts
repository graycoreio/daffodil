import { ActionReducerMap } from '@ngrx/store';

import { DaffNavigationTree } from '@daffodil/navigation';

import { DaffNavigationReducersState } from './navigation-reducers.interface';
import { daffNavigationReducer } from './navigation/navigation.reducer';

export const daffNavigationReducers: ActionReducerMap<DaffNavigationReducersState<DaffNavigationTree>> = {
  navigation: daffNavigationReducer,
};
