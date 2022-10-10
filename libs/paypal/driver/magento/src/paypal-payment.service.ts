import { Injectable } from '@angular/core';
import {
  Observable,
  of,
} from 'rxjs';

import {
  DaffPaypalExpressPaymentRequest,
  DaffPaypalExpressPaymentResponse,
} from '@daffodil/paypal';
import { DaffPaypalExpressPaymentServiceInterface } from '@daffodil/paypal/driver';

export const MAGENTO_PAYPAL_EXPRESS_PAYMENT_METHOD: DaffPaypalExpressPaymentResponse['method'] = 'paypal_express';

/**
 * @inheritdoc
 */
@Injectable({
  providedIn: 'any',
})
export class DaffMagentoPaypalPaymentService implements DaffPaypalExpressPaymentServiceInterface {
  generateToken(request: DaffPaypalExpressPaymentRequest): Observable<DaffPaypalExpressPaymentResponse> {
    return of({
      method: MAGENTO_PAYPAL_EXPRESS_PAYMENT_METHOD,
      data: {
        code: MAGENTO_PAYPAL_EXPRESS_PAYMENT_METHOD,
        [MAGENTO_PAYPAL_EXPRESS_PAYMENT_METHOD]: {
          token: request.data.token,
          payer_id: request.data.payerId,
        },
      },
    });
  }
}
