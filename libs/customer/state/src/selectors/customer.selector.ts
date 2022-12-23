import {
  createSelector,
  MemoizedSelector,
} from '@ngrx/store';

import { DaffStateError } from '@daffodil/core/state';
import { DaffCustomer } from '@daffodil/customer';

import { DaffCustomerStateRootSlice } from '../reducers/public_api';
import { getDaffCustomerReducersStateSelector } from './feature.selector';

/**
 * Selectors for the main part of customer state.
 */
export interface DaffCustomerSelectors<T extends DaffCustomer = DaffCustomer> {
  /**
   * Selects the customer.
   */
  selectCustomer: MemoizedSelector<DaffCustomerStateRootSlice, T>;
  /**
   * Selects whether there is a pending customer operation.
   */
  selectCustomerLoading: MemoizedSelector<DaffCustomerStateRootSlice, boolean>;
  /**
   * Selects the list of customer errors, if any.
   */
  selectCustomerErrors: MemoizedSelector<DaffCustomerStateRootSlice, DaffStateError[]>;
}

/**
 * Creates a group of selectors for {@link DaffCustomerReducerState} that use the passed state selector as the basis.
 */
const daffCustomerCreateSelectors = <T extends DaffCustomer = DaffCustomer>() => {
  const { selectCustomerFeatureState } = getDaffCustomerReducersStateSelector<T>();
  const selectCustomerState = createSelector(
    selectCustomerFeatureState,
    state => state.customer,
  );

  const selectCustomer = createSelector(
    selectCustomerState,
    state => state.customer,
  );

  const selectCustomerLoading = createSelector(
    selectCustomerState,
    state => state.loading,
  );

  const selectCustomerErrors = createSelector(
    selectCustomerState,
    state => state.errors,
  );

  return {
    selectCustomer,
    selectCustomerLoading,
    selectCustomerErrors,
  };
};


export const daffCustomerGetSelectors = (() => {
  let cache;
  return <T extends DaffCustomer = DaffCustomer>(): DaffCustomerSelectors<T> =>
    cache = cache || daffCustomerCreateSelectors<T>();
})();

