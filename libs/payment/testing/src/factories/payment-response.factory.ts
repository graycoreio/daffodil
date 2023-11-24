import { Injectable } from '@angular/core';
import { faker } from '@faker-js/faker/locale/en_US';

import { DaffModelFactory } from '@daffodil/core/testing';
import { DaffPaymentResponse } from '@daffodil/payment';

/**
 * Mock class for {@link DaffPaymentResponse}.
 */
export class MockPaymentResponse implements DaffPaymentResponse {
  method = faker.random.word();
};

/**
 * Model factory for {@link DaffPaymentResponse}.
 */
@Injectable({
  providedIn: 'root',
})
export class DaffPaymentResponseFactory extends DaffModelFactory<DaffPaymentResponse, typeof MockPaymentResponse>{
  constructor() {
    super(MockPaymentResponse);
  }
}
