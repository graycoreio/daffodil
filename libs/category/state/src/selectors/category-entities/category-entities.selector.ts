import {
  Dictionary,
  EntityState,
} from '@ngrx/entity';
import {
  createSelector,
  MemoizedSelector,
} from '@ngrx/store';

import {
  DaffGenericCategory,
  DaffCategory,
} from '@daffodil/category';

import { daffCategoryEntitiesAdapter } from '../../reducers/category-entities/category-entities-adapter';
import { DaffCategoryReducersState } from '../../reducers/category-reducers.interface';
import { DaffCategoryStateRootSlice } from '../../reducers/public_api';
import { getDaffCategoryFeatureSelector } from '../category-feature.selector';

/**
 * An interface to describe all selectors related to category ngrx entities state.
 */
export interface DaffCategoryEntitiesMemoizedSelectors<V extends DaffGenericCategory<V> = DaffCategory> {
	/**
	 * Selects ngrx category entities state.
	 */
	selectCategoryEntitiesState: MemoizedSelector<DaffCategoryStateRootSlice<V>, EntityState<V>>;
	/**
	 * Selects the ids of all categories in state.
	 */
	selectCategoryIds: MemoizedSelector<DaffCategoryStateRootSlice<V>, string[] | number[]>;
	/**
	 * Selects all categories in state as a dictionary.
	 */
	selectCategoryEntities: MemoizedSelector<DaffCategoryStateRootSlice<V>, Dictionary<V>>;
	/**
	 * Selects all categories in state as an array.
	 */
	selectAllCategories: MemoizedSelector<DaffCategoryStateRootSlice<V>, V[]>;
	/**
	 * Selects the total number of categories in state.
	 */
	selectCategoryTotal: MemoizedSelector<DaffCategoryStateRootSlice<V>, number>;
}

const createCategoryFeatureSelectors = <V extends DaffGenericCategory<V>>(): DaffCategoryEntitiesMemoizedSelectors<V> => {

  const entitiesSelectors = daffCategoryEntitiesAdapter<V>().getSelectors();
  const categoryFeatureState = getDaffCategoryFeatureSelector<V>().selectCategoryFeatureState;

  const selectCategoryEntitiesState = createSelector(
    categoryFeatureState,
    (state: DaffCategoryReducersState<V>) => state.categoryEntities,
  );

  const selectCategoryIds = createSelector(
    selectCategoryEntitiesState,
    entitiesSelectors.selectIds,
  );

  const selectCategoryEntities = createSelector(
    selectCategoryEntitiesState,
    entitiesSelectors.selectEntities,
  );

  const selectAllCategories = createSelector(
    selectCategoryEntitiesState,
    entitiesSelectors.selectAll,
  );

  const selectCategoryTotal = createSelector(
    selectCategoryEntitiesState,
    entitiesSelectors.selectTotal,
  );

  return {
    selectCategoryEntitiesState,
    selectCategoryIds,
    selectCategoryEntities,
    selectAllCategories,
    selectCategoryTotal,
  };
};

/**
 * A function that returns all selectors related to category entities.
 */
export const getDaffCategoryEntitiesSelectors = (() => {
  let cache;
  return <V extends DaffGenericCategory<V>>(): DaffCategoryEntitiesMemoizedSelectors<V> => cache = cache
    ? cache
    : createCategoryFeatureSelectors<V>();
})();
