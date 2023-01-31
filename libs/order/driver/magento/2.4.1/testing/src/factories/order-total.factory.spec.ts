import { TestBed } from '@angular/core/testing';

import { MagentoOrderTotal } from '@daffodil/order/driver/magento/2.4.1';

import { MagentoOrderTotalFactory } from './order-total.factory';

describe('@daffodil/order/magento/2.4.1/testing | MagentoOrderTotalFactory', () => {
  let factory: MagentoOrderTotalFactory;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MagentoOrderTotalFactory],
    });

    factory = TestBed.inject(MagentoOrderTotalFactory);
  });

  it('should be created', () => {
    expect(factory).toBeTruthy();
  });

  describe('create', () => {
    let result: MagentoOrderTotal;

    beforeEach(() => {
      result = factory.create();
    });

    it('should return a MagentoOrderTotal with all the fields defined', () => {
      expect(result).toBeDefined();
      expect(result.discounts).toBeDefined();
      expect(result.grand_total).toBeDefined();
      expect(result.subtotal).toBeDefined();
      expect(result.total_shipping).toBeDefined();
      expect(result.total_tax).toBeDefined();
    });
  });
});
