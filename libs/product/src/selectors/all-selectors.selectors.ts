import { DaffProduct } from '../models/product';
import { DaffProductMemoizedSelectors, getDaffProductSelectors } from './product.selectors';
import { DaffBestSellersMemoizedSelectors, getDaffBestSellersSelectors } from './best-sellers.selectors';
import { DaffProductEntitiesMemoizedSelectors, getDaffProductEntitiesSelectors } from './product-entities.selectors';
import { DaffProductGridMemoizedSelectors, getDaffProductGridSelectors } from './product-grid.selectors';
import { DaffProductFeatureMemoizedSelectors, getDaffProductFeatureSelectors } from './product-feature.selector';

export interface DaffProductAllSelectors<T extends DaffProduct> extends 
	DaffProductMemoizedSelectors<T>, 
	DaffBestSellersMemoizedSelectors<T>, 
	DaffProductEntitiesMemoizedSelectors<T>, 
	DaffProductGridMemoizedSelectors<T>,
	DaffProductFeatureMemoizedSelectors<T> { }

export const daffProductSelectors = <T extends DaffProduct>(): DaffProductAllSelectors<T> => {
	return {
		...getDaffBestSellersSelectors<T>(),
		...getDaffProductSelectors<T>(),
		...getDaffProductGridSelectors<T>(),
		...getDaffProductEntitiesSelectors<T>(),
		...getDaffProductFeatureSelectors<T>()
	}
};