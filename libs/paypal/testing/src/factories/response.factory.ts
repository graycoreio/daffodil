import { Injectable } from '@angular/core';
import { faker } from '@faker-js/faker';

import { DaffModelFactory } from '@daffodil/core/testing';
import { DaffPaypalPaymentResponse } from '@daffodil/paypal';

import { DaffPaypalExpressTokenResponseFactory } from './paypal-token-response.factory';

export class MockDaffPaypalPaymentResponse implements DaffPaypalPaymentResponse {
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
export class DaffPaypalPaymentResponseFactory extends DaffModelFactory<DaffPaypalPaymentResponse>{
  constructor(
    tokenResponseFactory: DaffPaypalExpressTokenResponseFactory,
  ) {
    super(MockDaffPaypalPaymentResponse, tokenResponseFactory);
  }
}
