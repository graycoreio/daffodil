import { Dictionary } from '@ngrx/entity';
import {
  createSelector,
  defaultMemoize,
  MemoizedSelector,
} from '@ngrx/store';

import {
  daffOperationStateSelectorFactory,
  DaffOperationStateSelectors,
} from '@daffodil/core/state';
import {
  DaffCustomer,
  DaffCustomerAddress,
} from '@daffodil/customer';

import {
  daffCustomerAddressEntitiesAdapter,
  DaffCustomerAddressReducerState,
  DaffCustomerStateRootSlice,
} from '../../reducers/public_api';
import { daffCustomerGetSelectors } from '../customer/selector';
import { getDaffCustomerReducersStateSelector } from '../feature.selector';

/**
 * Selectors for the main part of customer state.
 */
export interface DaffCustomerAddressSelectors<T extends DaffCustomerAddress = DaffCustomerAddress> extends DaffOperationStateSelectors<DaffCustomerStateRootSlice<DaffCustomer, T>, DaffCustomerAddressReducerState> {
  /**
   * Selects the customer.
   */
  selectAddress: (id: T['id']) => MemoizedSelector<DaffCustomerStateRootSlice<DaffCustomer, T>, T>;
  selectAddresses: MemoizedSelector<DaffCustomerStateRootSlice<DaffCustomer, T>, T[]>;
}

/**
 * Creates a group of selectors for {@link DaffCustomerAddressReducerState} that use the passed state selector as the basis.
 */
const daffCustomerAddressCreateSelectors = <T extends DaffCustomerAddress = DaffCustomerAddress>(): DaffCustomerAddressSelectors<T> => {
  const { selectCustomerFeatureState } = getDaffCustomerReducersStateSelector<DaffCustomer, T>();
  const selectCustomerAddressState = createSelector(
    selectCustomerFeatureState,
    state => state.address,
  );
  const selectCustomerAddressEntitiesState = createSelector(
    selectCustomerFeatureState,
    state => state.addressEntities,
  );
  const {
    selectEntity,
    selectOptimisticList,
  } = daffCustomerAddressEntitiesAdapter<T>().getSelectors<DaffCustomerStateRootSlice<DaffCustomer, T>>(selectCustomerAddressEntitiesState);

  return {
    ...daffOperationStateSelectorFactory(selectCustomerAddressState),
    selectAddress: selectEntity,
    selectAddresses: selectOptimisticList,
  };
};

export const daffCustomerAddressGetSelectors = (() => {
  let cache;
  return <T extends DaffCustomerAddress = DaffCustomerAddress>(): DaffCustomerAddressSelectors<T> =>
    cache = cache || daffCustomerAddressCreateSelectors<T>();
})();

