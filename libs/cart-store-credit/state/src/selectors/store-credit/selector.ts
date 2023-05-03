import { createSelector } from '@ngrx/store';

import {
  daffOperationStateSelectorFactory,
  DaffOperationStateSelectors,
} from '@daffodil/core/state';

import {
  DaffCartStoreCreditReducerState,
  DaffCartStoreCreditStateRootSlice,
} from '../../reducers/public_api';
import { getDaffCartStoreCreditReducersStateSelector } from '../feature.selector';

/**
 * Selectors for the main part of cart store credit state.
 */
export type DaffCartStoreCreditSelectors = DaffOperationStateSelectors<DaffCartStoreCreditStateRootSlice, DaffCartStoreCreditReducerState>;

/**
 * Creates a group of selectors for {@link DaffCartStoreCreditReducerState} that use the passed state selector as the basis.
 */
const daffCustomerStoreCreditCreateSelectors = (): DaffCartStoreCreditSelectors => {
  const { selectCustomerStoreCreditFeatureState } = getDaffCartStoreCreditReducersStateSelector();
  const selectCustomerStoreCreditState = createSelector(
    selectCustomerStoreCreditFeatureState,
    state => state.storeCredit,
  );

  return daffOperationStateSelectorFactory(selectCustomerStoreCreditState);
};

export const daffCustomerStoreCreditGetSelectors = (() => {
  let cache;
  return (): DaffCartStoreCreditSelectors =>
    cache = cache || daffCustomerStoreCreditCreateSelectors();
})();

