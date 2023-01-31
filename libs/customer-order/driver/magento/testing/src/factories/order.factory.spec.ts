import { TestBed } from '@angular/core/testing';

import { MagentoCustomerOrder } from '@daffodil/customer-order/driver/magento';

import { MagentoCustomerOrderFactory } from './order.factory';

describe('@daffodil/order/magento/2.4.1/testing | MagentoCustomerOrderFactory', () => {
  let factory: MagentoCustomerOrderFactory;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MagentoCustomerOrderFactory],
    });

    factory = TestBed.inject(MagentoCustomerOrderFactory);
  });

  it('should be created', () => {
    expect(factory).toBeTruthy();
  });

  describe('create', () => {
    let result: MagentoCustomerOrder;

    beforeEach(() => {
      result = factory.create();
    });

    it('should return a Order', () => {
      expect(result).toBeDefined();
      expect(result.id).toBeDefined();
      expect(result.order_date).toBeDefined();
      expect(result.status).toBeDefined();
      expect(result.carrier).toBeDefined();
      expect(result.number).toBeDefined();
      expect(result.shipping_method).toBeDefined();
      expect(result.items).toBeDefined();
      expect(result.billing_address).toBeDefined();
      expect(result.shipping_address).toBeDefined();
      expect(result.shipments).toBeDefined();
      expect(result.payment_methods).toBeDefined();
      expect(result.credit_memos).toBeDefined();
      expect(result.invoices).toBeDefined();
      expect(result.total).toBeDefined();
    });
  });
});
