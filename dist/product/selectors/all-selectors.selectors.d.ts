import { DaffProduct } from '../models/product';
import { DaffProductPageMemoizedSelectors } from './product/product.selectors';
import { DaffBestSellersMemoizedSelectors } from './best-sellers/best-sellers.selectors';
import { DaffProductEntitiesMemoizedSelectors } from './product-entities/product-entities.selectors';
import { DaffProductGridMemoizedSelectors } from './product-grid/product-grid.selectors';
import { DaffProductFeatureMemoizedSelector } from './product-feature.selector';
import { DaffConfigurableProductEntitiesMemoizedSelectors } from './configurable-product-entities/configurable-product-entities.selectors';
import { DaffConfigurableProductMemoizedSelectors } from './configurable-product/configurable-product.selectors';
import { DaffCompositeProductEntitiesMemoizedSelectors } from './composite-product-entities/composite-product-entities.selectors';
import { DaffCompositeProductMemoizedSelectors } from './composite-product/composite-product.selectors';
export interface DaffProductAllSelectors<T extends DaffProduct = DaffProduct> extends DaffProductPageMemoizedSelectors<T>, DaffBestSellersMemoizedSelectors<T>, DaffProductEntitiesMemoizedSelectors<T>, DaffProductGridMemoizedSelectors<T>, DaffProductFeatureMemoizedSelector<T>, DaffConfigurableProductEntitiesMemoizedSelectors, DaffConfigurableProductMemoizedSelectors, DaffCompositeProductEntitiesMemoizedSelectors, DaffCompositeProductMemoizedSelectors {
}
export declare const getDaffProductSelectors: <T extends DaffProduct = DaffProduct>() => DaffProductAllSelectors<T>;
