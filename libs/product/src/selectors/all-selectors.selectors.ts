import { DaffProduct } from '../models/product';
import { DaffProductPageMemoizedSelectors, getDaffProductPageSelectors } from './product/product.selectors';
import { DaffBestSellersMemoizedSelectors, getDaffBestSellersSelectors } from './best-sellers/best-sellers.selectors';
import { DaffProductEntitiesMemoizedSelectors, getDaffProductEntitiesSelectors } from './product-entities/product-entities.selectors';
import { DaffProductGridMemoizedSelectors, getDaffProductGridSelectors } from './product-grid/product-grid.selectors';
import { DaffProductFeatureMemoizedSelector, getDaffProductFeatureSelector } from './product-feature.selector';
import { DaffConfigurableProductEntitiesMemoizedSelectors, getDaffConfigurableProductEntitiesSelectors } from './configurable-product-entities/configurable-product-entities.selectors';
import { DaffConfigurableProductMemoizedSelectors, getDaffConfigurableProductSelectors } from './configurable-product/configurable-product.selectors';

export interface DaffProductAllSelectors<T extends DaffProduct = DaffProduct> extends 
	DaffProductPageMemoizedSelectors<T>, 
	DaffBestSellersMemoizedSelectors<T>, 
	DaffProductEntitiesMemoizedSelectors<T>, 
	DaffProductGridMemoizedSelectors<T>,
	DaffProductFeatureMemoizedSelector<T>,
	DaffConfigurableProductEntitiesMemoizedSelectors,
	DaffConfigurableProductMemoizedSelectors { }

export const getDaffProductSelectors = <T extends DaffProduct = DaffProduct>(): DaffProductAllSelectors<T> => {
	return {
		...getDaffBestSellersSelectors<T>(),
		...getDaffProductPageSelectors<T>(),
		...getDaffProductGridSelectors<T>(),
		...getDaffProductEntitiesSelectors<T>(),
		...getDaffProductFeatureSelector<T>(),
		...getDaffConfigurableProductEntitiesSelectors(),
		...getDaffConfigurableProductSelectors()
	}
};