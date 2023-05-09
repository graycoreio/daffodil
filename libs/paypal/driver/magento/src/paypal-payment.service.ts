import { Injectable } from '@angular/core';
import {
  Observable,
  of,
} from 'rxjs';

import { DaffPaypalExpressPaymentRequest } from '@daffodil/paypal';
import { DaffPaypalExpressPaymentServiceInterface } from '@daffodil/paypal/driver';

import { MAGENTO_PAYPAL_EXPRESS_PAYMENT_METHOD } from './constants/public_api';
import { MagentoPaypalExpressPaymentResponse } from './models/public_api';

/**
 * @inheritdoc
 */
@Injectable({
  providedIn: 'any',
})
export class DaffMagentoPaypalPaymentService implements DaffPaypalExpressPaymentServiceInterface<DaffPaypalExpressPaymentRequest, MagentoPaypalExpressPaymentResponse> {
  generateToken(request: DaffPaypalExpressPaymentRequest): Observable<MagentoPaypalExpressPaymentResponse> {
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
