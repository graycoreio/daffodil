import { DaffProduct } from '../models/product';
import { DaffProductPageMemoizedSelectors, getDaffProductPageSelectors } from './product/product.selectors';
import { DaffBestSellersMemoizedSelectors, getDaffBestSellersSelectors } from './best-sellers/best-sellers.selectors';
import { DaffProductEntitiesMemoizedSelectors, getDaffProductEntitiesSelectors } from './product-entities/product-entities.selectors';
import { DaffProductGridMemoizedSelectors, getDaffProductGridSelectors } from './product-grid/product-grid.selectors';
import { DaffProductFeatureMemoizedSelector, getDaffProductFeatureSelector } from './product-feature.selector';

export interface DaffProductAllSelectors<T extends DaffProduct = DaffProduct> extends 
	DaffProductPageMemoizedSelectors<T>, 
	DaffBestSellersMemoizedSelectors<T>, 
	DaffProductEntitiesMemoizedSelectors<T>, 
	DaffProductGridMemoizedSelectors<T>,
	DaffProductFeatureMemoizedSelector<T> { }

export const getDaffProductSelectors = <T extends DaffProduct = DaffProduct>(): DaffProductAllSelectors<T> => {
	return {
		...getDaffBestSellersSelectors<T>(),
		...getDaffProductPageSelectors<T>(),
		...getDaffProductGridSelectors<T>(),
		...getDaffProductEntitiesSelectors<T>(),
		...getDaffProductFeatureSelector<T>()
	}
};