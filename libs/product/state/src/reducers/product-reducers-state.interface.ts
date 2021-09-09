import { EntityState } from '@ngrx/entity';

import { DaffProduct } from '@daffodil/product';

import { DaffBestSellersReducerState } from './best-sellers/best-sellers-reducer-state.interface';
import { DaffCompositeProductEntity } from './composite-product-entities/composite-product-entity';
import { DaffProductGridReducerState } from './product-grid/product-grid-reducer-state.interface';
import { DAFF_PRODUCT_STORE_FEATURE_KEY } from './product-store-feature-key';
import { DaffProductReducerState } from './product/product-reducer-state.interface';

/**
 * Interface for the redux store of the product feature area.
 */
export interface DaffProductReducersState<T extends DaffProduct = DaffProduct> {
  products: EntityState<T>;
  productGrid: DaffProductGridReducerState<T>;
  product: DaffProductReducerState;
	bestSellers: DaffBestSellersReducerState;
	compositeProductOptions: EntityState<DaffCompositeProductEntity>;
}

export interface DaffProductStateRootSlice<T extends DaffProduct = DaffProduct> {
  [DAFF_PRODUCT_STORE_FEATURE_KEY]: DaffProductReducersState<T>;
}
