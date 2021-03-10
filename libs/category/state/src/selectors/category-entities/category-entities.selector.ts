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
  DaffCategoryRequest,
  DaffCategoryPageConfigurationState,
} from '@daffodil/category';

import { daffCategoryEntitiesAdapter } from '../../reducers/category-entities/category-entities-adapter';
import { DaffCategoryReducersState } from '../../reducers/category-reducers.interface';
import { getDaffCategoryFeatureSelector } from '../category-feature.selector';

export interface DaffCategoryEntitiesMemoizedSelectors<V extends DaffGenericCategory<V> = DaffCategory> {
	selectCategoryEntitiesState: MemoizedSelector<Record<string, any>, EntityState<V>>;
	selectCategoryIds: MemoizedSelector<Record<string, any>, EntityState<V>['ids']>;
	selectCategoryEntities: MemoizedSelector<Record<string, any>, Dictionary<V>>;
	selectAllCategories: MemoizedSelector<Record<string, any>, V[]>;
	selectCategoryTotal: MemoizedSelector<Record<string, any>, number>;
}

const createCategoryFeatureSelectors = <T extends DaffCategoryRequest, V extends DaffGenericCategory<V>, U extends DaffCategoryPageConfigurationState<T>>(): DaffCategoryEntitiesMemoizedSelectors<V> => {

  const entitiesSelectors = daffCategoryEntitiesAdapter<V>().getSelectors();
  const categoryFeatureState = getDaffCategoryFeatureSelector<T, V, U>().selectCategoryFeatureState;
  /**
   * Category Entities State
   */
  const selectCategoryEntitiesState = createSelector(
    categoryFeatureState,
    (state: DaffCategoryReducersState<T, V, U>) => state.categoryEntities,
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

export const getDaffCategoryEntitiesSelectors = (() => {
  let cache;
  return <T extends DaffCategoryRequest, V extends DaffGenericCategory<V>, U extends DaffCategoryPageConfigurationState<T>>(): DaffCategoryEntitiesMemoizedSelectors<V> => cache = cache
    ? cache
    : createCategoryFeatureSelectors<T, V, U>();
})();
