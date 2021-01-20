import { EntityState } from '@ngrx/entity';
import { DaffProductGridActions } from '../../actions/product-grid.actions';
import { DaffProductActions } from '../../actions/product.actions';
import { DaffBestSellersActions } from '../../actions/best-sellers.actions';
import { DaffProduct } from '../../models/product';
import { DaffCompositeProductActions } from '../../actions/composite-product.actions';
import { DaffCompositeProduct } from '../../models/composite-product';
import { DaffCompositeProductEntity } from './composite-product-entity';
/**
 * Reducer function that catches actions and changes/overwrites composite product entities state.
 *
 * @param state current State of the redux store
 * @param action ProductGrid, BestSellers, Product, or Composite Product actions
 * @returns Product entities state
 */
export declare function daffCompositeProductEntitiesReducer<T extends DaffProduct, V extends DaffCompositeProduct>(state: EntityState<DaffCompositeProductEntity>, action: DaffProductGridActions<T> | DaffBestSellersActions<T> | DaffProductActions<T> | DaffCompositeProductActions<V>): EntityState<DaffCompositeProductEntity>;
