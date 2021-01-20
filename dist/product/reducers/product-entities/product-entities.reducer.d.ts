import { EntityState } from '@ngrx/entity';
import { DaffProductGridActions } from '../../actions/product-grid.actions';
import { DaffProductActions } from '../../actions/product.actions';
import { DaffBestSellersActions } from '../../actions/best-sellers.actions';
import { DaffProduct } from '../../models/product';
/**
 * Reducer function that catches actions and changes/overwrites product entities state.
 *
 * @param state current State of the redux store
 * @param action ProductGrid, BestSellers, or Product actions
 * @returns Product entities state
 */
export declare function daffProductEntitiesReducer<T extends DaffProduct>(state: EntityState<T>, action: DaffProductGridActions<T> | DaffBestSellersActions<T> | DaffProductActions<T>): EntityState<T>;
