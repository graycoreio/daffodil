import { TestBed } from '@angular/core/testing';

import { MagentoOrderBundleItemSelectedOptionValue } from '@daffodil/order/driver/magento/2.4.1';

import { MagentoOrderBundleItemSelectedOptionValueFactory } from './bundle-order-item-option-value.factory';

describe('@daffodil/order/magento/2.4.1/testing | BundleOrderItemFactory', () => {
  let compositeOrderItemFactory: MagentoOrderBundleItemSelectedOptionValueFactory;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MagentoOrderBundleItemSelectedOptionValueFactory],
    });

    compositeOrderItemFactory = TestBed.inject(MagentoOrderBundleItemSelectedOptionValueFactory);
  });

  it('should be created', () => {
    expect(compositeOrderItemFactory).toBeTruthy();
  });

  describe('create', () => {

    let result: MagentoOrderBundleItemSelectedOptionValue;

    beforeEach(() => {
      result = compositeOrderItemFactory.create();
    });

    it('should return a MagentoOrderBundleItemSelectedOptionValue with all required fields defined', () => {
      expect(result.price).toBeDefined();
      expect(result.product_name).toBeDefined();
      expect(result.product_sku).toBeDefined();
      expect(result.quantity).toBeDefined();
    });
  });
});
