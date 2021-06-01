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
import { DaffCategoryRootSlice } from '../../reducers/public_api';
import { getDaffCategoryFeatureSelector } from '../category-feature.selector';

export interface DaffCategoryEntitiesMemoizedSelectors<V extends DaffGenericCategory<V> = DaffCategory> {
	selectCategoryEntitiesState: MemoizedSelector<DaffCategoryRootSlice, EntityState<V>>;
	selectCategoryIds: MemoizedSelector<DaffCategoryRootSlice, string[] | number[]>;
	selectCategoryEntities: MemoizedSelector<DaffCategoryRootSlice, Dictionary<V>>;
	selectAllCategories: MemoizedSelector<DaffCategoryRootSlice, V[]>;
	selectCategoryTotal: MemoizedSelector<DaffCategoryRootSlice, number>;
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
