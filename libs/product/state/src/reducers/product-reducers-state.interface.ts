import { EntityState } from '@ngrx/entity';

import { DaffProduct } from '@daffodil/product';

import { DaffBestSellersReducerState } from './best-sellers/best-sellers-reducer-state.interface';
import { DaffCompositeProductEntity } from './composite-product-entities/composite-product-entity';
import { DaffConfigurableProductEntity } from './configurable-product-entities/configurable-product-entity';
import { DaffProductGridReducerState } from './product-grid/product-grid-reducer-state.interface';
import { DaffProductReducerState } from './product/product-reducer-state.interface';

/**
 * Interface for product redux store.
 */
export interface DaffProductReducersState<T extends DaffProduct = DaffProduct> {
  products: EntityState<T>;
  productGrid: DaffProductGridReducerState<T>;
  product: DaffProductReducerState;
	bestSellers: DaffBestSellersReducerState;
	configurableProductAttributes: EntityState<DaffConfigurableProductEntity>;
	compositeProductOptions: EntityState<DaffCompositeProductEntity>;
}
