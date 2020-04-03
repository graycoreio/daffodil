import { createSelector, MemoizedSelector, MemoizedSelectorWithProps } from '@ngrx/store';
import { EntityState } from '@ngrx/entity';

import { daffProductEntitiesAdapter } from '../reducers/product-entities/product-entities-reducer-adapter';
import { selectProductState } from './product-feature.selector';
import { DaffProductReducersState } from '../reducers/product-reducers-state.interface';
import { DaffProduct } from '../models/product';

/**
 * Product Entities State
 */
export function selectProductEntitiesState<T extends DaffProduct>():
	MemoizedSelector<object, EntityState<T>> {
	return createSelector(
		selectProductState(),
		(state: DaffProductReducersState<T>) => state.products
	);
}

/**
 * Adapters created with @ngrx/entity generate
 * commonly used selector functions including
 * getting all ids in the record set, a dictionary
 * of the records by id, an array of records and
 * the total number of records. This reduces boilerplate
 * in selecting records from the entity state.
 */
// const { selectIds, selectEntities, selectAll, selectTotal } = daffProductEntitiesAdapter.getSelectors();
/**
 * Selector for product IDs.
 */
export function selectProductIds<T extends DaffProduct>():
	MemoizedSelector<object, EntityState<T>['ids']> {
	return createSelector(
		selectProductEntitiesState(),
		daffProductEntitiesAdapter<T>().getSelectors().selectIds
	);
}

/**
 * Selector for all product entities (see ngrx/entity).
 */
export function selectProductEntities<T extends DaffProduct>():
	MemoizedSelector<object, EntityState<T>['entities']> {
	return createSelector(
		selectProductEntitiesState(),
		daffProductEntitiesAdapter<T>().getSelectors().selectEntities
	);
}

/**
 * Selector for all products on state.
 */
export function selectAllProducts<T extends DaffProduct>():
	MemoizedSelector<object, T[]> {
	return createSelector(
		selectProductEntitiesState(),
		daffProductEntitiesAdapter<T>().getSelectors().selectAll
	);
}

/**
 * Selector for the total number of products.
 */
export function selectProductTotal<T extends DaffProduct>():
	MemoizedSelector<object, number> {
	return createSelector(
		selectProductEntitiesState(),
		daffProductEntitiesAdapter<T>().getSelectors().selectTotal
	);
}



export function selectProduct<T extends DaffProduct>():
	MemoizedSelectorWithProps<object, object, T> {
	return createSelector(
		selectProductEntitiesState(),
		(products, props) => products.entities[props.id]
	);
}
