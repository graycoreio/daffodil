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
import { getDaffCategoryFeatureSelector } from '../category-feature.selector';

export interface DaffCategoryEntitiesMemoizedSelectors<V extends DaffGenericCategory<V> = DaffCategory> {
	selectCategoryEntitiesState: MemoizedSelector<Record<string, any>, EntityState<V>>;
	selectCategoryIds: MemoizedSelector<Record<string, any>, EntityState<V>['ids']>;
	selectCategoryEntities: MemoizedSelector<Record<string, any>, Dictionary<V>>;
	selectAllCategories: MemoizedSelector<Record<string, any>, V[]>;
	selectCategoryTotal: MemoizedSelector<Record<string, any>, number>;
}

const createCategoryFeatureSelectors = <V extends DaffGenericCategory<V>>(): DaffCategoryEntitiesMemoizedSelectors<V> => {

  const entitiesSelectors = daffCategoryEntitiesAdapter<V>().getSelectors();
  const categoryFeatureState = getDaffCategoryFeatureSelector<V>().selectCategoryFeatureState;
  /**
   * Category Entities State
   */
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

export const getDaffCategoryEntitiesSelectors = (() => {
  let cache;
  return <V extends DaffGenericCategory<V>>(): DaffCategoryEntitiesMemoizedSelectors<V> => cache = cache
    ? cache
    : createCategoryFeatureSelectors<V>();
})();
