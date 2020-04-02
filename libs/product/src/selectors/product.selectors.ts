import { createSelector } from '@ngrx/store';

import { DaffProductReducersState } from '../reducers/product-reducers-state.interface';
import { selectProductState } from './product-feature.selector';
import { DaffProductReducerState } from '../reducers/product/product-reducer-state.interface';

/**
 * Selector for the selected product.
 */
export const selectSelectedProductState = createSelector(
  selectProductState,
  (state: DaffProductReducersState) => state.product
);
/**
 * Selector for the selected product's ID.
 */
export const selectSelectedProductId = createSelector(
  selectSelectedProductState,
  (state: DaffProductReducerState) => state.selectedProductId
);
/**
 * Selector for the quantity of the product.
 */
export const selectSelectedProductQty = createSelector(
  selectSelectedProductState,
  (state: DaffProductReducerState) => state.qty
);
/**
 * Selector for the loading state of the selected product.
 */
export const selectSelectedProductLoadingState = createSelector(
  selectSelectedProductState,
  (state: DaffProductReducerState) => state.loading
);
/**
 * Selects the selected product from product state and the selected product ID.
 */
export const selectSelectedProduct = createSelector(
  selectProductState,
  selectSelectedProductId,
  (state: DaffProductReducersState, id: string) => state.products.entities[id]
);
