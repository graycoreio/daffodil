import { daffProductGridReducer } from './product-grid/product-grid.reducer';
import { daffProductReducer } from './product/product.reducer';
import { daffBestSellersReducer } from './best-sellers/best-sellers.reducer';
import { daffProductEntitiesReducer } from './product-entities/product-entities.reducer';

/**
 * Returns state values from all product related reducers.
 */
export const daffProductReducers = {
	products: daffProductEntitiesReducer,
	productGrid: daffProductGridReducer,
	product: daffProductReducer,
	bestSellers: daffBestSellersReducer
}
