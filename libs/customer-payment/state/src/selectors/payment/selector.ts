import {
  createSelector,
  MemoizedSelector,
} from '@ngrx/store';

import {
  daffOperationStateSelectorFactory,
  DaffOperationStateSelectors,
} from '@daffodil/core/state';
import { DaffCustomerPayment } from '@daffodil/customer-payment';

import {
  daffCustomerPaymentEntitiesAdapter,
  DaffCustomerPaymentReducerState,
  DaffCustomerPaymentStateRootSlice,
} from '../../reducers/public_api';
import { getDaffCustomerPaymentReducersStateSelector } from '../feature.selector';

/**
 * Selectors for the main part of customer payment state.
 */
export interface DaffCustomerPaymentSelectors<T extends DaffCustomerPayment = DaffCustomerPayment> extends DaffOperationStateSelectors<DaffCustomerPaymentStateRootSlice<T>, DaffCustomerPaymentReducerState> {
  /**
   * Selects the customer payment.
   */
  selectPayment: (id: T['id']) => MemoizedSelector<DaffCustomerPaymentStateRootSlice<T>, T>;

  /**
   * Selects all of the customer payment entities.
   */
  selectPayments: MemoizedSelector<DaffCustomerPaymentStateRootSlice<T>, T[]>;
}

/**
 * Creates a group of selectors for {@link DaffCustomerPaymentReducerState} that use the passed state selector as the basis.
 */
const daffCustomerPaymentCreateSelectors = <T extends DaffCustomerPayment = DaffCustomerPayment>(): DaffCustomerPaymentSelectors<T> => {
  const { selectCustomerPaymentFeatureState } = getDaffCustomerPaymentReducersStateSelector<T>();
  const selectCustomerPaymentState = createSelector(
    selectCustomerPaymentFeatureState,
    state => state.payment,
  );
  const selectCustomerPaymentEntitiesState = createSelector(
    selectCustomerPaymentFeatureState,
    state => state.paymentEntities,
  );
  const {
    selectEntity,
    selectOptimisticList,
  } = daffCustomerPaymentEntitiesAdapter<T>().getSelectors<DaffCustomerPaymentStateRootSlice<T>>(selectCustomerPaymentEntitiesState);

  return {
    ...daffOperationStateSelectorFactory(selectCustomerPaymentState),
    selectPayment: selectEntity,
    selectPayments: selectOptimisticList,
  };
};

export const daffCustomerPaymentGetSelectors = (() => {
  let cache;
  return <T extends DaffCustomerPayment = DaffCustomerPayment>(): DaffCustomerPaymentSelectors<T> =>
    cache = cache || daffCustomerPaymentCreateSelectors<T>();
})();

