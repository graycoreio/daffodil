import { createSelector, MemoizedSelector, MemoizedSelectorWithProps } from '@ngrx/store';
import { EntityState } from '@ngrx/entity';

import { daffProductEntitiesAdapter } from '../reducers/product-entities/product-entities-reducer-adapter';
import { getDaffProductFeatureSelector } from './product-feature.selector';
import { DaffProductReducersState } from '../reducers/product-reducers-state.interface';
import { DaffProduct } from '../models/product';

export interface DaffProductEntitiesMemoizedSelectors<T extends DaffProduct> {
	selectProductEntitiesState: MemoizedSelector<object, EntityState<T>>;
	selectProductIds: MemoizedSelector<object, EntityState<T>['ids']>;
	selectProductEntities: MemoizedSelector<object, EntityState<T>['entities']>;
	selectAllProducts: MemoizedSelector<object, T[]>;
	selectProductTotal: MemoizedSelector<object, number>;
	selectProduct: MemoizedSelectorWithProps<object, object, T>;
}

const createProductEntitiesSelectors = <T extends DaffProduct>(): DaffProductEntitiesMemoizedSelectors<T> => {
	const {
		selectProductState
	} = getDaffProductFeatureSelector<T>();
	/**
	 * Product Entities State
	 */
	const selectProductEntitiesState = createSelector(
		selectProductState,
		(state: DaffProductReducersState<T>) => state.products
	);

	/**
	 * Adapters created with @ngrx/entity generate
	 * commonly used selector functions including
	 * getting all ids in the record set, a dictionary
	 * of the records by id, an array of records and
	 * the total number of records. This reduces boilerplate
	 * in selecting records from the entity state.
	 */
	/**
	 * Selector for product IDs.
	 */
	const selectProductIds = createSelector(
		selectProductEntitiesState,
		daffProductEntitiesAdapter<T>().getSelectors().selectIds
	);

	/**
	 * Selector for all product entities (see ngrx/entity).
	 */
	const selectProductEntities = createSelector(
		selectProductEntitiesState,
		daffProductEntitiesAdapter<T>().getSelectors().selectEntities
	);

	/**
	 * Selector for all products on state.
	 */
	const selectAllProducts = createSelector(
		selectProductEntitiesState,
		daffProductEntitiesAdapter<T>().getSelectors().selectAll
	);

	/**
	 * Selector for the total number of products.
	 */
	const selectProductTotal = createSelector(
		selectProductEntitiesState,
		daffProductEntitiesAdapter<T>().getSelectors().selectTotal
	);

	const selectProduct = createSelector(
		selectProductEntitiesState,
		(products, props) => products.entities[props.id]
	);

	return { 
		selectProductEntitiesState,
		selectProductIds,
		selectProductEntities,
		selectAllProducts,
		selectProductTotal,
		selectProduct
	}
}

export const getDaffProductEntitiesSelectors = (() => {
	let cache;
	return <T extends DaffProduct>(): DaffProductEntitiesMemoizedSelectors<T> => cache = cache 
		? cache 
		: createProductEntitiesSelectors<T>();
})()
