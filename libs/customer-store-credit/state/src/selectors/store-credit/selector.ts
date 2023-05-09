import {
  createSelector,
  MemoizedSelector,
} from '@ngrx/store';

import {
  daffOperationStateSelectorFactory,
  DaffOperationStateSelectors,
} from '@daffodil/core/state';
import { DaffCustomerStoreCredit } from '@daffodil/customer-store-credit';

import {
  DaffCustomerStoreCreditReducerState,
  DaffCustomerStoreCreditStateRootSlice,
} from '../../reducers/public_api';
import { getDaffCustomerStoreCreditReducersStateSelector } from '../feature.selector';

/**
 * Selectors for the main part of customer store credit state.
 */
export interface DaffCustomerStoreCreditSelectors<T extends DaffCustomerStoreCredit = DaffCustomerStoreCredit> extends DaffOperationStateSelectors<DaffCustomerStoreCreditStateRootSlice<T>, DaffCustomerStoreCreditReducerState<T>> {
  /**
   * Selects the customer's current store credit balance.
   */
  selectStoreCredit: MemoizedSelector<DaffCustomerStoreCreditStateRootSlice<T>, T>;
}

/**
 * Creates a group of selectors for {@link DaffCustomerStoreCreditReducerState} that use the passed state selector as the basis.
 */
const daffCustomerStoreCreditCreateSelectors = <T extends DaffCustomerStoreCredit = DaffCustomerStoreCredit>(): DaffCustomerStoreCreditSelectors<T> => {
  const { selectCustomerStoreCreditFeatureState } = getDaffCustomerStoreCreditReducersStateSelector<T>();
  const selectCustomerStoreCreditState = createSelector(
    selectCustomerStoreCreditFeatureState,
    state => state.storeCredit,
  );
  const selectStoreCredit = createSelector(
    selectCustomerStoreCreditState,
    state => state.storeCredit,
  );

  return {
    ...daffOperationStateSelectorFactory(selectCustomerStoreCreditState),
    selectStoreCredit,
  };
};

export const daffCustomerStoreCreditGetSelectors = (() => {
  let cache;
  return <T extends DaffCustomerStoreCredit = DaffCustomerStoreCredit>(): DaffCustomerStoreCreditSelectors<T> =>
    cache = cache || daffCustomerStoreCreditCreateSelectors<T>();
})();

