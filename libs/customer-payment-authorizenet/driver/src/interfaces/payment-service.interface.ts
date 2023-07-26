import { InjectionToken } from '@angular/core';
import { Observable } from 'rxjs';

import { DaffCustomerPaymentAuthorizeNetApplyRequest } from '@daffodil/customer-payment-authorizenet';
import { DaffPaymentResponse } from '@daffodil/payment';
import { DaffPaymentDriverInterface } from '@daffodil/payment/driver';

/**
 * An injection token for the customer authorize.net payment driver.
 */
export const DaffCustomerPaymentAuthorizeNetPaymentDriver = new InjectionToken<DaffCustomerPaymentAuthorizeNetPaymentDriverInterface>('DaffCustomerPaymentAuthorizeNetPaymentDriver');

/**
 * @inheritdoc
 */
export interface DaffCustomerPaymentAuthorizeNetPaymentDriverInterface extends DaffPaymentDriverInterface<DaffPaymentResponse> {
  generateToken(request: DaffCustomerPaymentAuthorizeNetApplyRequest): Observable<DaffPaymentResponse>;
}
