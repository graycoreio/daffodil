import {
  daffCompleteOperation,
  daffOperationFailed,
  daffStartMutation,
  daffStartResolution,
} from '@daffodil/core/state';
import { DaffCustomerStoreCredit } from '@daffodil/customer-store-credit';

import { daffCustomerStoreCreditInitialState } from './initial-state';
import { DaffCustomerStoreCreditReducerState } from './type';
import {
  DaffCustomerStoreCreditActions,
  DaffCustomerStoreCreditActionTypes,
  DaffCustomerStoreCreditLoadFailure,
} from '../../actions/store-credit.actions';

/**
 * The reducer for the customer store credit page state, see {@link DaffCustomerStoreCreditReducerState}.
 */
export const daffCustomerStoreCreditReducer = <T extends DaffCustomerStoreCredit = DaffCustomerStoreCredit>(
  state = daffCustomerStoreCreditInitialState,
  action: DaffCustomerStoreCreditActions<T>,
): DaffCustomerStoreCreditReducerState => {
  switch (action.type) {
    case DaffCustomerStoreCreditActionTypes.StoreCreditLoadAction:
    case DaffCustomerStoreCreditActionTypes.StoreCreditLoadAction:
      return daffStartResolution(state);

    case DaffCustomerStoreCreditActionTypes.StoreCreditLoadSuccessAction:
      return {
        ...daffCompleteOperation(state),
        storeCredit: action.payload,
      };

    case DaffCustomerStoreCreditActionTypes.StoreCreditClearErrorsAction:
      return daffCompleteOperation(state);

    case DaffCustomerStoreCreditActionTypes.StoreCreditLoadFailureAction:
      return daffOperationFailed([(<DaffCustomerStoreCreditLoadFailure>action).payload], state);

    default:
      return state;
  }
};
