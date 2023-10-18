import { TestBed } from '@angular/core/testing';

import { MagentoOrderBundleItemSelectedOption } from '@daffodil/order/driver/magento/2-4-1';

import { MagentoOrderBundleItemSelectedOptionFactory } from './bundle-order-item-option.factory';

describe('@daffodil/order/magento/2-4-1/testing | BundleOrderItemFactory', () => {
  let compositeOrderItemFactory: MagentoOrderBundleItemSelectedOptionFactory;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MagentoOrderBundleItemSelectedOptionFactory],
    });

    compositeOrderItemFactory = TestBed.inject(MagentoOrderBundleItemSelectedOptionFactory);
  });

  it('should be created', () => {
    expect(compositeOrderItemFactory).toBeTruthy();
  });

  describe('create', () => {
    let result: MagentoOrderBundleItemSelectedOption;

    beforeEach(() => {
      result = compositeOrderItemFactory.create();
    });

    it('should return a MagentoOrderBundleItemSelectedOption with all required fields defined', () => {
      expect(result.label).toBeDefined();
      expect(result.values).toBeDefined();
    });
  });
});
