import {
  createSelector,
  MemoizedSelector,
} from '@ngrx/store';

import {
  daffOperationStateSelectorFactory,
  DaffOperationStateSelectors,
} from '@daffodil/core/state';
import { DaffCustomer } from '@daffodil/customer';

import {
  DaffCustomerReducerState,
  DaffCustomerStateRootSlice,
} from '../../reducers/public_api';
import { getDaffCustomerReducersStateSelector } from '../feature.selector';

/**
 * Selectors for the main part of customer state.
 */
export interface DaffCustomerSelectors<T extends DaffCustomer = DaffCustomer> extends DaffOperationStateSelectors<DaffCustomerStateRootSlice<T>, DaffCustomerReducerState<T>> {
  /**
   * Selects the customer.
   */
  selectCustomer: MemoizedSelector<DaffCustomerStateRootSlice<T>, T>;
}

/**
 * Creates a group of selectors for {@link DaffCustomerReducerState} that use the passed state selector as the basis.
 */
const daffCustomerCreateSelectors = <T extends DaffCustomer = DaffCustomer>(): DaffCustomerSelectors<T> => {
  const { selectCustomerFeatureState } = getDaffCustomerReducersStateSelector<T>();
  const selectCustomerState = createSelector(
    selectCustomerFeatureState,
    state => state.customer,
  );

  const selectCustomer = createSelector(
    selectCustomerState,
    state => state.customer,
  );

  return {
    ...daffOperationStateSelectorFactory(selectCustomerState),
    selectCustomer,
  };
};


export const daffCustomerGetSelectors = (() => {
  let cache;
  return <T extends DaffCustomer = DaffCustomer>(): DaffCustomerSelectors<T> =>
    cache = cache || daffCustomerCreateSelectors<T>();
})();

