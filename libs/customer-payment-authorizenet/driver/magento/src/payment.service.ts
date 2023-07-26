import {
  Inject,
  Injectable,
} from '@angular/core';
import {
  Observable,
  of,
} from 'rxjs';

import { DaffAuthorizeNetPaymentId } from '@daffodil/authorizenet/driver';
import { DaffCustomerPaymentAuthorizeNetApplyRequest } from '@daffodil/customer-payment-authorizenet';
import { DaffCustomerPaymentAuthorizeNetPaymentDriverInterface } from '@daffodil/customer-payment-authorizenet/driver';
import { DaffPaymentResponse } from '@daffodil/payment';

@Injectable({
  providedIn: 'root',
})
export class DaffCustomerPaymentAuthorizeNetMagentoPaymentService implements DaffCustomerPaymentAuthorizeNetPaymentDriverInterface {
  constructor(
    @Inject(DaffAuthorizeNetPaymentId) private authorizeNetPaymentId: string,
  ) {}

  generateToken(request: DaffCustomerPaymentAuthorizeNetApplyRequest): Observable<DaffPaymentResponse> {
    return of({
      method: this.authorizeNetPaymentId,
      data: {
        code: this.authorizeNetPaymentId,
        tokenbase_data: {
          card_id: request.data.id,
          cc_cid: request.data.securityCode,
        },
      },
    });
  }
}
