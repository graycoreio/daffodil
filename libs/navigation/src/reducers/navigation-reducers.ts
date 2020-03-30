import { ActionReducerMap } from '@ngrx/store';

import { NavigationReducersState } from './navigation-reducers.interface';
import { daffNavigationReducer } from './navigation/navigation.reducer';
import { DaffNavigationTree } from '../models/navigation-tree';

export function navigationReducers <T extends DaffNavigationTree<T>>(): ActionReducerMap<NavigationReducersState<T>> {
	return {
		navigation: daffNavigationReducer
	}
}
