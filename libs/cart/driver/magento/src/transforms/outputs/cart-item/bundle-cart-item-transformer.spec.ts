import { TestBed } from '@angular/core/testing';

import { DaffCompositeCartItem } from '@daffodil/cart';
import { MagentoBundleCartItem } from '@daffodil/cart/driver/magento';
import { MagentoBundleCartItemFactory } from '@daffodil/cart/driver/magento/testing';
import { MagentoProductStockStatusEnum } from '@daffodil/product/driver/magento';

import { transformMagentoBundleCartItem } from './bundle-cart-item-transformer';

describe('transformMagentoBundleCartItem', () => {
  let magentoBundleItemFactory: MagentoBundleCartItemFactory;
  let stubMagentoBundleCartItem: MagentoBundleCartItem;
  let transformedCartItem: DaffCompositeCartItem;

  beforeEach(() => {
    magentoBundleItemFactory = TestBed.inject(MagentoBundleCartItemFactory);

    stubMagentoBundleCartItem = magentoBundleItemFactory.create();
    transformedCartItem = transformMagentoBundleCartItem(stubMagentoBundleCartItem);
  });

  it('should return the expected composite product', () => {
    expect(transformedCartItem.options[0].option_id).toEqual(String(stubMagentoBundleCartItem.bundle_options[0].values[0].id));
    expect(transformedCartItem.options[0].id).toEqual(String(stubMagentoBundleCartItem.bundle_options[0].values[0].id));
    expect(transformedCartItem.options[0].option_label).toEqual(stubMagentoBundleCartItem.bundle_options[0].label);
    expect(transformedCartItem.options[0].value_label).toEqual(stubMagentoBundleCartItem.bundle_options[0].values[0].label);
  });

  describe('when some of the selected bundle item options are out of stock', () => {
    beforeEach(() => {
      stubMagentoBundleCartItem.product.items[0].options[0].product.stock_status = MagentoProductStockStatusEnum.OutOfStock;
      transformedCartItem = transformMagentoBundleCartItem(stubMagentoBundleCartItem);
    });

    it('should set `in_stock` to `false`', () => {
      expect(transformedCartItem.in_stock).toBeFalse();
    });
  });
});
