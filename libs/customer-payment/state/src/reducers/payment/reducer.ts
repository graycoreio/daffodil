import {
  daffCompleteOperation,
  daffOperationFailed,
  daffStartMutation,
  daffStartResolution,
} from '@daffodil/core/state';
import { DaffCustomerPayment } from '@daffodil/customer-payment';

import {
  DaffCustomerPaymentActions,
  DaffCustomerPaymentActionTypes,
  DaffCustomerPaymentLoadFailure,
} from '../../actions/payment.actions';
import { daffCustomerPaymentInitialState } from './initial-state';
import { DaffCustomerPaymentReducerState } from './type';

/**
 * The reducer for the customer payment page state, see {@link DaffCustomerPaymentReducerState}.
 */
export const daffCustomerPaymentReducer = <T extends DaffCustomerPayment = DaffCustomerPayment>(
  state = daffCustomerPaymentInitialState,
  action: DaffCustomerPaymentActions<T>,
): DaffCustomerPaymentReducerState => {
  switch (true) {
    case action.type === DaffCustomerPaymentActionTypes.PaymentListAction:
    case action.type === DaffCustomerPaymentActionTypes.PaymentLoadAction:
      return daffStartResolution(state);

    case action.type === DaffCustomerPaymentActionTypes.PaymentUpdateAction:
    case action.type === DaffCustomerPaymentActionTypes.PaymentAddAction:
    case action.type === DaffCustomerPaymentActionTypes.PaymentDeleteAction:
      return daffStartMutation(state);

    case action.type === DaffCustomerPaymentActionTypes.PaymentListSuccessAction:
    case action.type === DaffCustomerPaymentActionTypes.PaymentLoadSuccessAction:
    case action.type === DaffCustomerPaymentActionTypes.PaymentUpdateSuccessAction:
    case action.type === DaffCustomerPaymentActionTypes.PaymentAddSuccessAction:
    case action.type === DaffCustomerPaymentActionTypes.PaymentDeleteSuccessAction:
    case action.type === DaffCustomerPaymentActionTypes.PaymentClearErrorsAction:
    case action.type === DaffCustomerPaymentActionTypes.PaymentUpdateFailureAction:
    case action.type === DaffCustomerPaymentActionTypes.PaymentDeleteFailureAction:
      return daffCompleteOperation(state);

    case action.type === DaffCustomerPaymentActionTypes.PaymentListFailureAction:
    case action.type === DaffCustomerPaymentActionTypes.PaymentLoadFailureAction:
    case action.type === DaffCustomerPaymentActionTypes.PaymentAddFailureAction:
      return daffOperationFailed([(<DaffCustomerPaymentLoadFailure>action).payload], state);

    default:
      return state;
  }
};
