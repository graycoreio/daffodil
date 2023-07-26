import { DaffOperationEntityState } from '@daffodil/core/state';
import {
  DaffCustomerPayment,
  DaffCustomerPaymentRequest,
} from '@daffodil/customer-payment';

import {
  DaffCustomerPaymentActions,
  DaffCustomerPaymentActionTypes,
} from '../../actions/payment.actions';
import { daffCustomerPaymentEntitiesAdapter } from './adapter';


/**
 * Reducer function that catches actions and changes/overwrites customer payment entities state.
 */
export function daffCustomerPaymentEntitiesReducer<
  TPayment extends DaffCustomerPayment = DaffCustomerPayment,
  TRequest extends DaffCustomerPaymentRequest = DaffCustomerPaymentRequest,
>(
  state = daffCustomerPaymentEntitiesAdapter<TPayment>().getInitialState(),
  action: DaffCustomerPaymentActions<TPayment, TRequest>): DaffOperationEntityState<TPayment> {
  const adapter = daffCustomerPaymentEntitiesAdapter<TPayment>();
  switch (action.type) {
    case DaffCustomerPaymentActionTypes.PaymentLoadAction:
      return adapter.preload(
        action.paymentId,
        state,
      );

    case DaffCustomerPaymentActionTypes.PaymentAddAction:
      return adapter.preadd(
        <TPayment>{
          method: action.payment.kind,
          data: action.payment.data,
          default: action.payment.default,
        },
        state,
        action.placeholderId,
      );

    case DaffCustomerPaymentActionTypes.PaymentDeleteAction:
      return adapter.preremove(
        action.paymentId,
        state,
      );

    case DaffCustomerPaymentActionTypes.PaymentUpdateAction:
      return adapter.preupdate(
        action.payment,
        state,
      );

    case DaffCustomerPaymentActionTypes.PaymentLoadSuccessAction:
      return adapter.load(
        action.payload,
        state,
      );

    case DaffCustomerPaymentActionTypes.PaymentListSuccessAction:
      return adapter.list(
        action.payload,
        state,
      );

    case DaffCustomerPaymentActionTypes.PaymentUpdateSuccessAction:
    case DaffCustomerPaymentActionTypes.PaymentDeleteSuccessAction:
    case DaffCustomerPaymentActionTypes.PaymentAddSuccessAction:
      return adapter.list(
        <TPayment[]>action.payload,
        state,
      );

    case DaffCustomerPaymentActionTypes.PaymentDeleteFailureAction:
    case DaffCustomerPaymentActionTypes.PaymentAddFailureAction:
    case DaffCustomerPaymentActionTypes.PaymentLoadFailureAction:
    case DaffCustomerPaymentActionTypes.PaymentUpdateFailureAction:
      return adapter.operationFailed(
        action.id,
        [action.payload],
        state,
      );

    default:
      return state;
  }
}
