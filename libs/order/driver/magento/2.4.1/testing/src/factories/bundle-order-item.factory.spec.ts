import { TestBed } from '@angular/core/testing';

import { MagentoOrderBundleItem } from '@daffodil/order/driver/magento/2.4.1';

import { MagentoOrderBundleItemFactory } from './bundle-order-item.factory';

describe('@daffodil/order/magento/2.4.1/testing | BundleOrderItemFactory', () => {
  let compositeOrderItemFactory: MagentoOrderBundleItemFactory;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MagentoOrderBundleItemFactory],
    });

    compositeOrderItemFactory = TestBed.inject(MagentoOrderBundleItemFactory);
  });

  it('should be created', () => {
    expect(compositeOrderItemFactory).toBeTruthy();
  });

  describe('create', () => {
    let result: MagentoOrderBundleItem;

    beforeEach(() => {
      result = compositeOrderItemFactory.create();
    });

    it('should return a MagentoOrderBundleItem with all required fields defined', () => {
      expect(result.bundle_options).toBeDefined();
    });
  });
});
