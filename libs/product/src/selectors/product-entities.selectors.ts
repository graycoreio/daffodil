import { createSelector } from '@ngrx/store';

import { daffProductEntitiesAdapter } from '../reducers/product-entities/product-entities-reducer-adapter';
import { selectProductState } from './product-feature.selector';
import { DaffProductReducersState } from '../reducers/product-reducers-state.interface';

/**
 * Product Entities State
 */
export const selectProductEntitiesState = createSelector(
  selectProductState,
  (state: DaffProductReducersState) => state.products
);

/**
 * Adapters created with @ngrx/entity generate
 * commonly used selector functions including
 * getting all ids in the record set, a dictionary
 * of the records by id, an array of records and
 * the total number of records. This reduces boilerplate
 * in selecting records from the entity state.
 */
const { selectIds, selectEntities, selectAll, selectTotal } = daffProductEntitiesAdapter.getSelectors();
/**
 * Selector for product IDs.
 */
export const selectProductIds = createSelector(
  selectProductEntitiesState,
	selectIds
);
/**
 * Selector for all product entities (see ngrx/entity).
 */
export const selectProductEntities = createSelector(
  selectProductEntitiesState,
  selectEntities
);
/**
 * Selector for all products on state.
 */
export const selectAllProducts = createSelector(
  selectProductEntitiesState,
  selectAll
);
/**
 * Selector for the total number of products.
 */
export const selectProductTotal = createSelector(
  selectProductEntitiesState,
  selectTotal
);


export const selectProduct = createSelector(
  selectProductEntitiesState,
  (products, props) => products.entities[props.id]
);
