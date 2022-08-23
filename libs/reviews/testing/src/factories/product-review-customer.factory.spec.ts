import { TestBed } from '@angular/core/testing';

import { DaffProductReviewCustomer } from '@daffodil/reviews';

import { DaffProductReviewCustomerFactory } from './product-review-customer.factory';

describe('@daffodil/reviews/testing | DaffProductReviewCustomerFactory', () => {
  let factory: DaffProductReviewCustomerFactory;

  beforeEach(() => {
    factory = TestBed.inject(DaffProductReviewCustomerFactory);
  });

  it('should be created', () => {
    expect(factory).toBeTruthy();
  });

  describe('create', () => {

    let result: DaffProductReviewCustomer;

    beforeEach(() => {
      result = factory.create();
    });

    it('should define all required fields', () => {
      expect(result.name).toBeDefined();
    });
  });
});
