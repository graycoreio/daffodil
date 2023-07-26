import { DaffIdentifiable } from '@daffodil/core';
import { DaffCustomerPaymentAuthorizeNetApplyRequest } from '@daffodil/customer-payment-authorizenet';
import { DaffPersonalAddress } from '@daffodil/geography';
import { DaffPaymentGenerateToken } from '@daffodil/payment/state';

export enum DaffCustomerPaymentAuthorizeNetActionTypes {
  ApplyPaymentAction = '[@daffodil/customer-payment-authorizenet] Apply Payment',
}

/**
 * Triggers the application of an authorize.net payment.
 */
export class DaffCustomerPaymentAuthorizeNetApplyPayment implements DaffPaymentGenerateToken<DaffCustomerPaymentAuthorizeNetApplyRequest> {
  readonly type = DaffCustomerPaymentAuthorizeNetActionTypes.ApplyPaymentAction;

  constructor(
    public request: DaffCustomerPaymentAuthorizeNetApplyRequest,
    public address?: DaffPersonalAddress | DaffIdentifiable,
  ) {};
}

export type DaffCustomerPaymentAuthorizeNetActions =
	| DaffCustomerPaymentAuthorizeNetApplyPayment;
