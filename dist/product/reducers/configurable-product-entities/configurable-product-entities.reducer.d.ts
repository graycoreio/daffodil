import { EntityState } from '@ngrx/entity';
import { DaffProductGridActions } from '../../actions/product-grid.actions';
import { DaffProductActions } from '../../actions/product.actions';
import { DaffBestSellersActions } from '../../actions/best-sellers.actions';
import { DaffProduct } from '../../models/product';
import { DaffConfigurableProductActions } from '../../actions/configurable-product.actions';
import { DaffConfigurableProduct } from '../../models/configurable-product';
import { DaffConfigurableProductEntity } from './configurable-product-entity';
/**
 * Reducer function that catches actions and changes/overwrites product entities state.
 *
 * @param state current State of the redux store
 * @param action ProductGrid, BestSellers, Product, or Configurable Product actions
 * @returns Product entities state
 */
export declare function daffConfigurableProductEntitiesReducer<T extends DaffProduct, V extends DaffConfigurableProduct>(state: EntityState<DaffConfigurableProductEntity>, action: DaffProductGridActions<T> | DaffBestSellersActions<T> | DaffProductActions<T> | DaffConfigurableProductActions<V>): EntityState<DaffConfigurableProductEntity>;
