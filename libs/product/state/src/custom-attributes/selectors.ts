import { Dictionary } from '@ngrx/entity';
import {
  createSelector,
  defaultMemoize,
  MemoizedSelector,
} from '@ngrx/store';

import {
  DaffOperationStateSelectors,
  daffOperationStateSelectorFactory,
} from '@daffodil/core/state';
import { DaffProductCustomAttribute } from '@daffodil/product';

import { daffProductCustomAttributesEntitiesAdapter } from './reducers/public_api';
import { DaffProductStateRootSlice } from '../reducers/public_api';
import { getDaffProductFeatureSelector } from '../selectors/public_api';

/**
 * Selectors for the product custom attributes feature state.
 */
export interface DaffProductCustomAttributesSelectors extends DaffOperationStateSelectors<DaffProductStateRootSlice> {
  /**
   * Selects all of the product custom attributes.
   */
  selectProductCustomAttributeEntities: MemoizedSelector<DaffProductStateRootSlice, Dictionary<DaffProductCustomAttribute>>;
  selectProductCustomAttributes: MemoizedSelector<DaffProductStateRootSlice, DaffProductCustomAttribute[]>;
}

const daffProductCustomAttributesCreateSelectors = (): DaffProductCustomAttributesSelectors => {
  const { selectProductState } = getDaffProductFeatureSelector();
  const selectProductCustomAttributesEntitiesState = createSelector(
    selectProductState,
    state => state.customAttributes,
  );
  const selectProductCustomAttributesOperationState = createSelector(
    selectProductState,
    state => state.customAttributesOperation,
  );
  const { selectAll, selectEntities } = daffProductCustomAttributesEntitiesAdapter().getSelectors(selectProductCustomAttributesEntitiesState);

  return {
    ...daffOperationStateSelectorFactory(selectProductCustomAttributesOperationState),
    selectProductCustomAttributes: selectAll,
    selectProductCustomAttributeEntities: selectEntities,
  };
};

/**
 * Creates a group of memoized selectors for the product custom attributes feature state.
 */
export const getDaffProductCustomAttributesSelectors: () => DaffProductCustomAttributesSelectors = defaultMemoize(daffProductCustomAttributesCreateSelectors).memoized;
