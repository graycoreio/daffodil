import { TestBed } from '@angular/core/testing';

import { MagentoCustomer } from '@daffodil/customer/driver/magento';

import { MagentoCustomerFactory } from './customer.factory';

describe('@daffodil/customer/driver/magento/testing | MagentoCustomerFactory', () => {
  let factory: MagentoCustomerFactory;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MagentoCustomerFactory],
    });

    factory = TestBed.inject(MagentoCustomerFactory);
  });

  it('should be created', () => {
    expect(factory).toBeTruthy();
  });

  describe('create', () => {
    let result: MagentoCustomer;

    beforeEach(() => {
      result = factory.create();
    });

    it('should return', () => {
      expect(result.email).toBeDefined();
      expect(result.firstname).toBeDefined();
      expect(result.lastname).toBeDefined();
      expect(result.addresses).toBeDefined();
    });
  });
});
