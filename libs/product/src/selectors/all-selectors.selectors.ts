import { DaffProduct } from '../models/product';
import { DaffProductPageMemoizedSelectors, daffProductPageSelectors } from './product.selectors';
import { DaffBestSellersMemoizedSelectors, getDaffBestSellersSelectors } from './best-sellers.selectors';
import { DaffProductEntitiesMemoizedSelectors, getDaffProductEntitiesSelectors } from './product-entities.selectors';
import { DaffProductGridMemoizedSelectors, daffProductGridSelectors } from './product-grid.selectors';
import { DaffProductFeatureMemoizedSelector, getDaffProductFeatureSelector } from './product-feature.selector';

export interface DaffProductAllSelectors<T extends DaffProduct> extends 
	DaffProductPageMemoizedSelectors<T>, 
	DaffBestSellersMemoizedSelectors<T>, 
	DaffProductEntitiesMemoizedSelectors<T>, 
	DaffProductGridMemoizedSelectors<T>,
	DaffProductFeatureMemoizedSelector<T> { }

export const daffProductSelectors = <T extends DaffProduct>(): DaffProductAllSelectors<T> => {
	return {
		...getDaffBestSellersSelectors<T>(),
		...daffProductPageSelectors<T>(),
		...daffProductGridSelectors<T>(),
		...getDaffProductEntitiesSelectors<T>(),
		...getDaffProductFeatureSelector<T>()
	}
};