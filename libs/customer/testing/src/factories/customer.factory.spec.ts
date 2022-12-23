import { TestBed } from '@angular/core/testing';

import { DaffCustomer } from '@daffodil/customer';

import { DaffCustomerFactory } from './customer.factory';

describe('@daffodil/customer/testing | DaffCustomerFactory', () => {
  let customerFactory: DaffCustomerFactory;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DaffCustomerFactory],
    });

    customerFactory = TestBed.inject(DaffCustomerFactory);
  });

  it('should be created', () => {
    expect(customerFactory).toBeTruthy();
  });

  describe('create', () => {
    let result: DaffCustomer;

    beforeEach(() => {
      result = customerFactory.create();
    });

    it('should return', () => {
      expect(result).toBeDefined();
    });

    it('should define all the required fields', () => {
      expect(result.id).toBeDefined();
      expect(result.email).toBeDefined();
      expect(result.firstName).toBeDefined();
      expect(result.lastName).toBeDefined();
      expect(result.addresses).toBeDefined();
    });
  });
});
