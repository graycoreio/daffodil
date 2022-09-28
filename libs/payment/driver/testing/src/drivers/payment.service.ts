import { Injectable } from '@angular/core';
import {
  Observable,
  of,
} from 'rxjs';

import {
  DaffPaymentRequest,
  DaffPaymentResponse,
} from '@daffodil/payment';
import { DaffPaymentDriverInterface } from '@daffodil/payment/driver';
import { DaffPaymentResponseKindFactory } from '@daffodil/payment/testing';

/**
 * A basic payment driver that creates mock payment results of different kinds.
 * For testing purposes.
 *
 * @inheritdoc
 */
@Injectable({
  providedIn: 'root',
})
export class DaffPaymentTestingDriver implements DaffPaymentDriverInterface {

  constructor(
    private paymentResponseFactory: DaffPaymentResponseKindFactory,
  ) {}

  generateToken(request: DaffPaymentRequest): Observable<DaffPaymentResponse> {
    return of(this.paymentResponseFactory.create());
  }
}
