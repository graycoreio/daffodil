import { daffOperationInitialState } from '@daffodil/core/state';

import { DaffCustomerStoreCreditReducerState } from './type';

/**
 * The initial state for the main customer store credit state, see {@link DaffCustomerStoreCreditReducerState}.
 */
export const daffCustomerStoreCreditInitialState: DaffCustomerStoreCreditReducerState = {
  ...daffOperationInitialState,
  storeCredit: {
    balance: 0,
  },
};
