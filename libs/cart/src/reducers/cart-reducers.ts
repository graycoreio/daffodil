import { ActionReducerMap } from '@ngrx/store';

import { daffCartReducer } from './cart.reducer';
import { DaffCartReducersState } from './cart-reducers-state.interface';
import { DaffCart } from '../models/cart';

export function daffCartReducers <T extends DaffCart>(): ActionReducerMap<DaffCartReducersState<T>> {
	return {
		cart: daffCartReducer
	}
}
