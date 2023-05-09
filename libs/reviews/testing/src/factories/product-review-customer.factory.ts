import { Injectable } from '@angular/core';
import { faker } from '@faker-js/faker/locale/en_US';

import { DaffModelFactory } from '@daffodil/core/testing';
import { DaffProductReviewCustomer } from '@daffodil/reviews';

/**
 * Mocked {@link DaffProductReviewCustomer} object.
 */
export class MockProductReviewCustomer implements DaffProductReviewCustomer {
  name = faker.random.word();
}

/**
 * Factory for creating DaffProductReviewCustomers.
 */
@Injectable({
  providedIn: 'root',
})
export class DaffProductReviewCustomerFactory extends DaffModelFactory<DaffProductReviewCustomer>{
  constructor() {
    super(MockProductReviewCustomer);
  }
}
