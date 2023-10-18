import { DaffCartWithStoreCredit } from '@daffodil/cart-store-credit';
import {
  daffCompleteOperation,
  daffOperationFailed,
  daffStartMutation,
} from '@daffodil/core/state';

import { daffCustomerStoreCreditInitialState } from './initial-state';
import { DaffCartStoreCreditReducerState } from './type';
import {
  DaffCartStoreCreditActions,
  DaffCartStoreCreditActionTypes,
} from '../../actions/store-credit.actions';

/**
 * The reducer for the cart store credit page state, see {@link DaffCartStoreCreditReducerState}.
 */
export const daffCustomerStoreCreditReducer = <T extends DaffCartWithStoreCredit = DaffCartWithStoreCredit>(
  state = daffCustomerStoreCreditInitialState,
  action: DaffCartStoreCreditActions<T>,
): DaffCartStoreCreditReducerState => {
  switch (action.type) {
    case DaffCartStoreCreditActionTypes.StoreCreditApplyAction:
    case DaffCartStoreCreditActionTypes.StoreCreditRemoveAction:
      return daffStartMutation(state);

    case DaffCartStoreCreditActionTypes.StoreCreditApplySuccessAction:
    case DaffCartStoreCreditActionTypes.StoreCreditRemoveSuccessAction:
      return daffCompleteOperation(state);

    case DaffCartStoreCreditActionTypes.StoreCreditClearErrorsAction:
      return daffCompleteOperation(state);

    case DaffCartStoreCreditActionTypes.StoreCreditApplyFailureAction:
    case DaffCartStoreCreditActionTypes.StoreCreditRemoveFailureAction:
      return daffOperationFailed(action.payload, state);

    default:
      return state;
  }
};
