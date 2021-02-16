import { TestBed } from '@angular/core/testing';

import { MagentoDiscount } from '@daffodil/driver/magento';

import { MagentoDiscountFactory } from './discount.factory';

describe('Driver | Magento | Testing | Factories | MagentoDiscountFactory', () => {
  let factory: MagentoDiscountFactory;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MagentoDiscountFactory]
    });

    factory = TestBed.inject(MagentoDiscountFactory);
  });

  it('should be created', () => {
    expect(factory).toBeTruthy();
  });

  describe('create', () => {
    let result: MagentoDiscount;

    beforeEach(() => {
      result = factory.create();
    });

    it('should return a Discount with all required fields defined', () => {
      expect(result.amount).toBeDefined();
      expect(result.label).toBeDefined();
    });
  });
});
