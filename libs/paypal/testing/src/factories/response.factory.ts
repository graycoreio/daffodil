import { Injectable } from '@angular/core';
import { faker } from '@faker-js/faker';

import { DaffModelFactory } from '@daffodil/core/testing';
import { DaffPaypalExpressPaymentResponse } from '@daffodil/paypal';

import { DaffPaypalExpressTokenResponseFactory } from './paypal-token-response.factory';

export class MockDaffPaypalExpressPaymentResponse implements DaffPaypalExpressPaymentResponse {
  method = faker.random.word();
  data = this.createData();

  constructor(
    private tokenResponseFactory: DaffPaypalExpressTokenResponseFactory,
  ) {}

  private createData() {
    return this.tokenResponseFactory.create();
  }
}

@Injectable({
  providedIn: 'root',
})
export class DaffPaypalExpressPaymentResponseFactory extends DaffModelFactory<DaffPaypalExpressPaymentResponse>{
  constructor(
    tokenResponseFactory: DaffPaypalExpressTokenResponseFactory,
  ) {
    super(MockDaffPaypalExpressPaymentResponse, tokenResponseFactory);
  }
}
