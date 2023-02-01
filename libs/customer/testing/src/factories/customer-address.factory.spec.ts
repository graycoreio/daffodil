import { TestBed } from '@angular/core/testing';

import { DaffCustomerAddress } from '@daffodil/customer';

import { DaffCustomerAddressFactory } from './customer-address.factory';

describe('@daffodil/customer/testing | DaffCustomerAddressFactory', () => {
  let customerFactory: DaffCustomerAddressFactory;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DaffCustomerAddressFactory],
    });

    customerFactory = TestBed.inject(DaffCustomerAddressFactory);
  });

  it('should be created', () => {
    expect(customerFactory).toBeTruthy();
  });

  describe('create', () => {
    let result: DaffCustomerAddress;

    beforeEach(() => {
      result = customerFactory.create();
    });

    it('should return', () => {
      expect(result).toBeDefined();
    });

    it('should define all the required fields', () => {
      expect(result.id).toBeDefined();
      expect(result.defaultBilling).toBeDefined();
      expect(result.defaultShipping).toBeDefined();
    });
  });
});
