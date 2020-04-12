import { createSelector, MemoizedSelector } from '@ngrx/store';
import { Dictionary, EntityState } from '@ngrx/entity';

import { DaffGenericCategory } from '../../models/generic-category';
import { DaffCategoryRequest } from '../../models/requests/category-request';
import { DaffCategoryPageConfigurationState } from '../../models/category-page-configuration-state';
import { DaffCategoryReducersState } from '../../reducers/category-reducers.interface';
import { daffCategoryEntitiesAdapter } from '../../reducers/category-entities/category-entities-adapter';
import { getDaffCategoryFeatureSelector } from '../category-feature.selector';

export interface DaffCategoryEntitiesMemoizedSelectors<V extends DaffGenericCategory<V>> {
	selectCategoryEntitiesState: MemoizedSelector<object, EntityState<V>>;
	selectCategoryIds: MemoizedSelector<object, EntityState<V>['ids']>;
	selectCategoryEntities: MemoizedSelector<object, Dictionary<V>>;
	selectAllCategories: MemoizedSelector<object, V[]>;
	selectCategoryTotal: MemoizedSelector<object, number>;
}

const createCategoryFeatureSelectors = <T extends DaffCategoryRequest, V extends DaffGenericCategory<V>, U extends DaffCategoryPageConfigurationState<T>>(): DaffCategoryEntitiesMemoizedSelectors<V> => {

	const entitiesSelectors = daffCategoryEntitiesAdapter<V>().getSelectors();
	const categoryFeatureState = getDaffCategoryFeatureSelector<T, V, U>().selectCategoryFeatureState;
	/**
	 * Category Entities State
	 */
	const selectCategoryEntitiesState = createSelector(
		categoryFeatureState,
		(state: DaffCategoryReducersState<T, V, U>) => state.categoryEntities
	);

	const selectCategoryIds = createSelector(
		selectCategoryEntitiesState,
		entitiesSelectors.selectIds
	);

	const selectCategoryEntities = createSelector(
		selectCategoryEntitiesState,
		entitiesSelectors.selectEntities
	);

	const selectAllCategories = createSelector(
		selectCategoryEntitiesState,
		entitiesSelectors.selectAll
	);

	const selectCategoryTotal = createSelector(
		selectCategoryEntitiesState,
		entitiesSelectors.selectTotal
	);

	return {
		selectCategoryEntitiesState,
		selectCategoryIds,
		selectCategoryEntities,
		selectAllCategories,
		selectCategoryTotal
	}
}

export const getDaffCategoryEntitiesSelectors = (() => {
	let cache;
	return <T extends DaffCategoryRequest, V extends DaffGenericCategory<V>, U extends DaffCategoryPageConfigurationState<T>>(): DaffCategoryEntitiesMemoizedSelectors<V> => cache = cache 
		? cache 
		: createCategoryFeatureSelectors<T, V, U>();
})();
