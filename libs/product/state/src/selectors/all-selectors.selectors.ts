import { DaffProduct } from '@daffodil/product';

import {
  DaffBestSellersMemoizedSelectors,
  getDaffBestSellersSelectors,
} from './best-sellers/best-sellers.selectors';
import {
  DaffCompositeProductEntitiesMemoizedSelectors,
  getDaffCompositeProductEntitiesSelectors,
} from './composite-product-entities/composite-product-entities.selectors';
import {
  DaffCompositeProductMemoizedSelectors,
  getDaffCompositeProductSelectors,
} from './composite-product/composite-product.selectors';
import {
  DaffConfigurableProductEntitiesMemoizedSelectors,
  getDaffConfigurableProductEntitiesSelectors,
} from './configurable-product-entities/configurable-product-entities.selectors';
import {
  DaffConfigurableProductMemoizedSelectors,
  getDaffConfigurableProductSelectors,
} from './configurable-product/configurable-product.selectors';
import {
  DaffProductEntitiesMemoizedSelectors,
  getDaffProductEntitiesSelectors,
} from './product-entities/product-entities.selectors';
import {
  DaffProductFeatureMemoizedSelector,
  getDaffProductFeatureSelector,
} from './product-feature.selector';
import {
  DaffProductGridMemoizedSelectors,
  getDaffProductGridSelectors,
} from './product-grid/product-grid.selectors';
import {
  DaffProductPageMemoizedSelectors,
  getDaffProductPageSelectors,
} from './product/product.selectors';

/**
 * An interface for all selectors in the entire product feature area.
 */
export interface DaffProductAllSelectors<T extends DaffProduct = DaffProduct> extends
	DaffProductPageMemoizedSelectors<T>,
	DaffBestSellersMemoizedSelectors<T>,
	DaffProductEntitiesMemoizedSelectors<T>,
	DaffProductGridMemoizedSelectors<T>,
	DaffProductFeatureMemoizedSelector<T>,
	DaffConfigurableProductEntitiesMemoizedSelectors,
	DaffConfigurableProductMemoizedSelectors,
	DaffCompositeProductEntitiesMemoizedSelectors,
	DaffCompositeProductMemoizedSelectors { }

/**
 * A function that returns all selectors in the entire product feature area.
 * Returns {@link DaffProductAllSelectors}.
 */
export const getDaffProductSelectors = <T extends DaffProduct = DaffProduct>(): DaffProductAllSelectors<T> => ({
  ...getDaffBestSellersSelectors<T>(),
  ...getDaffProductPageSelectors<T>(),
  ...getDaffProductGridSelectors<T>(),
  ...getDaffProductEntitiesSelectors<T>(),
  ...getDaffProductFeatureSelector<T>(),
  ...getDaffConfigurableProductEntitiesSelectors(),
  ...getDaffConfigurableProductSelectors(),
  ...getDaffCompositeProductEntitiesSelectors(),
  ...getDaffCompositeProductSelectors(),
});
