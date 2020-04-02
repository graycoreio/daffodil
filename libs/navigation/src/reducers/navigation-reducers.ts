import { ActionReducerMap } from '@ngrx/store';

import { DaffNavigationReducersState } from './navigation-reducers.interface';
import { daffNavigationReducer } from './navigation/navigation.reducer';
import { DaffGenericNavigationTree } from '../models/generic-navigation-tree';

export function daffNavigationReducers <T extends DaffGenericNavigationTree<T>>(): ActionReducerMap<DaffNavigationReducersState<T>> {
	return {
		navigation: daffNavigationReducer
	}
}
