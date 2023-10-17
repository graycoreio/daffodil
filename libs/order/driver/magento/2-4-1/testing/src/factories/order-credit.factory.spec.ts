import { TestBed } from '@angular/core/testing';

import { MagentoOrderCredit } from '@daffodil/order/driver/magento/2-4-1';

import { MagentoOrderCreditFactory } from './order-credit.factory';

describe('@daffodil/order/magento/2-4-1/testing | MagentoOrderCreditFactory', () => {
  let factory: MagentoOrderCreditFactory;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MagentoOrderCreditFactory],
    });

    factory = TestBed.inject(MagentoOrderCreditFactory);
  });

  it('should be created', () => {
    expect(factory).toBeTruthy();
  });

  describe('create', () => {
    let result: MagentoOrderCredit;

    beforeEach(() => {
      result = factory.create();
    });

    it('should return a MagentoOrderCredit with all the fields defined', () => {
      expect(result).toBeDefined();
      expect(result.items).toBeDefined();
      expect(result.total).toBeDefined();
    });
  });
});
