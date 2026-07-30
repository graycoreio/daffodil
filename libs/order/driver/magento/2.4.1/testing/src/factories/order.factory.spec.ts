import { TestBed } from '@angular/core/testing';

import { MagentoOrder } from '@daffodil/order/driver/magento/2.4.1';

import { MagentoOrderFactory } from './order.factory';

describe('@daffodil/order/magento/2.4.1/testing | MagentoOrderFactory', () => {

  let orderFactory: MagentoOrderFactory;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MagentoOrderFactory],
    });

    orderFactory = TestBed.inject(MagentoOrderFactory);
  });

  it('should be created', () => {
    expect(orderFactory).toBeTruthy();
  });

  describe('create', () => {
    let result: MagentoOrder;

    beforeEach(() => {
      result = orderFactory.create();
    });

    it('should return a Order', () => {
      expect(result).toBeDefined();
      expect(result.id).toBeDefined();
      expect(result.order_date).toBeDefined();
      expect(result.status).toBeDefined();
      expect(result.carrier).toBeDefined();
      expect(result.number).toBeDefined();
      expect(result.shipping_method).toBeDefined();
      expect(result.email).toBeDefined();
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
