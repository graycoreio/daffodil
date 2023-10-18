import { TestBed } from '@angular/core/testing';

import { MagentoOrderPayment } from '@daffodil/order/driver/magento/2-4-1';

import { MagentoOrderPaymentFactory } from './order-payment.factory';

describe('@daffodil/order/magento/2-4-1/testing | OrderPaymentFactory', () => {

  let orderPaymentFactory: MagentoOrderPaymentFactory;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MagentoOrderPaymentFactory],
    });

    orderPaymentFactory = TestBed.inject(MagentoOrderPaymentFactory);
  });

  it('should be created', () => {
    expect(orderPaymentFactory).toBeTruthy();
  });

  describe('create', () => {

    let result: MagentoOrderPayment;

    beforeEach(() => {
      result = orderPaymentFactory.create();
    });

    it('should return a MagentoOrderPayment with all required fields defined', () => {
      expect(result.name).toBeDefined();
      expect(result.type).toBeDefined();
      expect(result.additional_data).toBeDefined();
    });
  });
});
