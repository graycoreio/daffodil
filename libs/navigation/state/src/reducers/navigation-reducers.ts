import { ActionReducerMap } from '@ngrx/store';

import { DaffNavigationReducersState } from './navigation-reducers.interface';
import { daffNavigationReducer } from './navigation/navigation.reducer';

export const daffNavigationReducers: ActionReducerMap<DaffNavigationReducersState> = {
  navigation: daffNavigationReducer,
};
