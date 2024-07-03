import { TestBed } from '@angular/core/testing';

import { MagentoCustomerOrders } from '@daffodil/customer-order/driver/magento/2-4-5';

import { MagentoCustomerOrdersFactory } from './orders.factory';

describe('@daffodil/customer-order/driver/magento/2-4-5/testing | MagentoCustomerOrdersFactory', () => {
  let factory: MagentoCustomerOrdersFactory;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MagentoCustomerOrdersFactory],
    });

    factory = TestBed.inject(MagentoCustomerOrdersFactory);
  });

  it('should be created', () => {
    expect(factory).toBeTruthy();
  });

  describe('create', () => {
    let result: MagentoCustomerOrders;

    beforeEach(() => {
      result = factory.create();
    });

    it('should return', () => {
      expect(result.items).toBeDefined();
      expect(result.page_info).toBeDefined();
    });
  });
});
