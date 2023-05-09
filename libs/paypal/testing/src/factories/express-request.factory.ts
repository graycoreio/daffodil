import { Injectable } from '@angular/core';
import { faker } from '@faker-js/faker/locale/en_US';

import { DaffModelFactory } from '@daffodil/core/testing';
import {
  DaffPaypalExpressPaymentRequest,
  DAFF_PAYPAL_PAYMENT_KIND,
} from '@daffodil/paypal';

import { DaffPaypalExpressPaymentDataFactory } from './express-payment-data.factory';

export class MockDaffPaypalExpressPaymentRequest implements DaffPaypalExpressPaymentRequest {
  kind: typeof DAFF_PAYPAL_PAYMENT_KIND = DAFF_PAYPAL_PAYMENT_KIND;
  data = this.createData();

  constructor(
    private requestDataFactory: DaffPaypalExpressPaymentDataFactory,
  ) {}

  private createData() {
    return this.requestDataFactory.create();
  }
}

@Injectable({
  providedIn: 'root',
})
export class DaffPaypalExpressPaymentRequestFactory extends DaffModelFactory<DaffPaypalExpressPaymentRequest>{
  constructor(
    requestDataFactory: DaffPaypalExpressPaymentDataFactory,
  ) {
    super(MockDaffPaypalExpressPaymentRequest, requestDataFactory);
  }
}
