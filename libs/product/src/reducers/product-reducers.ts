import { ActionReducerMap } from '@ngrx/store';

import { daffProductGridReducer } from './product-grid/product-grid.reducer';
import { daffProductReducer } from './product/product.reducer';
import { daffBestSellersReducer } from './best-sellers/best-sellers.reducer';
import { daffProductEntitiesReducer } from './product-entities/product-entities.reducer';
import { DaffProductReducersState } from './product-reducers-state.interface';
import { DaffProduct } from '../models/product';

/**
 * Returns state values from all product related reducers.
 */
export function daffProductReducers<T extends DaffProduct>(): ActionReducerMap<DaffProductReducersState<T>> {
	return {
		products: daffProductEntitiesReducer,
		productGrid: daffProductGridReducer,
		product: daffProductReducer,
		bestSellers: daffBestSellersReducer
	}
}
