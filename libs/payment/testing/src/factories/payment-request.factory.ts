import { Injectable } from '@angular/core';
import { faker } from '@faker-js/faker/locale/en_US';

import { DaffModelFactory } from '@daffodil/core/testing';
import { DaffPaymentRequest } from '@daffodil/payment';

/**
 * Mock class for {@link DaffPaymentRequest}.
 */
export class MockPaymentRequest implements DaffPaymentRequest {
  kind = faker.random.word();
};

/**
 * Model factory for {@link DaffPaymentRequest}.
 */
@Injectable({
  providedIn: 'root',
})
export class DaffPaymentRequestFactory extends DaffModelFactory<DaffPaymentRequest>{
  constructor() {
    super(MockPaymentRequest);
  }
}
