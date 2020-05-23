import { createSelector, MemoizedSelector, MemoizedSelectorWithProps } from '@ngrx/store';
import { EntityState } from '@ngrx/entity';

import { getDaffProductFeatureSelector } from '../product-feature.selector';
import { DaffProductReducersState } from '../../reducers/product-reducers-state.interface';
import { DaffProduct } from '../../models/product';
import { daffConfigurableProductAppliedAttributesEntitiesAdapter } from '../../reducers/configurable-product-entities/configurable-product-entities-reducer-adapter';
import { DaffProductVariantAttributesDictionary } from '../../models/configurable-product';

export interface DaffConfigurableProductEntitiesMemoizedSelectors {
	selectConfigurableProductAppliedAttributesEntitiesState: MemoizedSelector<object, EntityState<DaffProductVariantAttributesDictionary>>;
	selectConfigurableProductIds: MemoizedSelector<object, EntityState<DaffProductVariantAttributesDictionary>['ids']>;
	selectConfigurableProductAppliedAttributesEntities: MemoizedSelector<object, EntityState<DaffProductVariantAttributesDictionary>['entities']>;
	selectAllConfigurableProductAppliedAttributeDictionaries: MemoizedSelector<object, DaffProductVariantAttributesDictionary[]>;
	selectConfigurableProductTotal: MemoizedSelector<object, number>;
	selectConfigurableProductAppliedAttributes: MemoizedSelectorWithProps<object, object, DaffProductVariantAttributesDictionary>;
}

const createConfigurableProductAppliedAttributesEntitiesSelectors = <T extends DaffProduct>(): DaffConfigurableProductEntitiesMemoizedSelectors => {
	const {
		selectProductState
	} = getDaffProductFeatureSelector<T>();
	const adapterSelectors = daffConfigurableProductAppliedAttributesEntitiesAdapter().getSelectors();
	/**
	 * Configurable Product Entities State
	 */
	const selectConfigurableProductAppliedAttributesEntitiesState = createSelector(
		selectProductState,
		(state: DaffProductReducersState<T>) => state.configurableProductAttributes
	);

	/**
	 * Selector for configurable product IDs.
	 */
	const selectConfigurableProductIds = createSelector(
		selectConfigurableProductAppliedAttributesEntitiesState,
		adapterSelectors.selectIds
	);

	/**
	 * Selector for all configurable product applied attributes as entities (see ngrx/entity).
	 */
	const selectConfigurableProductAppliedAttributesEntities = createSelector(
		selectConfigurableProductAppliedAttributesEntitiesState,
		adapterSelectors.selectEntities
	);

	/**
	 * Selector for all configurable product applied attributes as dictionaries.
	 */
	const selectAllConfigurableProductAppliedAttributeDictionaries = createSelector(
		selectConfigurableProductAppliedAttributesEntitiesState,
		(state) => adapterSelectors.selectAll(state)
	);

	/**
	 * Selector for the total number of configurable products.
	 */
	const selectConfigurableProductTotal = createSelector(
		selectConfigurableProductAppliedAttributesEntitiesState,
		adapterSelectors.selectTotal
	);

	/**
	 * Selector for the applied attributes of a particular configurable product.
	 */
	const selectConfigurableProductAppliedAttributes = createSelector(
		selectConfigurableProductAppliedAttributesEntitiesState,
		(products, props) => products.entities[props.id]
	);

	return { 
		selectConfigurableProductAppliedAttributesEntitiesState,
		selectConfigurableProductIds,
		selectConfigurableProductAppliedAttributesEntities,
		selectAllConfigurableProductAppliedAttributeDictionaries,
		selectConfigurableProductTotal,
		selectConfigurableProductAppliedAttributes
	}
}

export const getDaffConfigurableProductEntitiesSelectors = (() => {
	let cache;
	return <T extends DaffProduct>(): DaffConfigurableProductEntitiesMemoizedSelectors => cache = cache 
		? cache 
		: createConfigurableProductAppliedAttributesEntitiesSelectors<T>();
})()
