import { EntityState } from '@ngrx/entity';

import { DaffProduct } from '../models/product';
import { DaffProductGridReducerState } from './product-grid/product-grid-reducer-state.interface';
import { DaffProductReducerState } from './product/product-reducer-state.interface';
import { DaffBestSellersReducerState } from './best-sellers/best-sellers-reducer-state.interface';

/**
 * Interface for product redux store.
 */
export interface DaffProductReducersState<T extends DaffProduct> {
  products : EntityState<T>;
  productGrid: DaffProductGridReducerState<T>;
  product: DaffProductReducerState;
  bestSellers: DaffBestSellersReducerState;
}
