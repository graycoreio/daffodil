import { DaffCompositeCartItem } from '@daffodil/cart';
import { MagentoBundleCartItem } from '@daffodil/cart/driver/magento';
import { MagentoBundleCartItemFactory } from '@daffodil/cart/driver/magento/testing';

import { transformMagentoBundleCartItem } from './bundle-cart-item-transformer';

describe('transformMagentoBundleCartItem', () => {
  let stubMagentoBundleCartItem: MagentoBundleCartItem;
  let transformedCartItem: DaffCompositeCartItem;

  beforeEach(() => {
    stubMagentoBundleCartItem = new MagentoBundleCartItemFactory().create();
    transformedCartItem = transformMagentoBundleCartItem(stubMagentoBundleCartItem);
  });

  it('should return the expected composite product', () => {
    expect(transformedCartItem.options[0].id).toEqual(String(stubMagentoBundleCartItem.bundle_options[0].values[0].id));
    expect(transformedCartItem.options[0].option_label).toEqual(stubMagentoBundleCartItem.bundle_options[0].label);
    expect(transformedCartItem.options[0].value_label).toEqual(stubMagentoBundleCartItem.bundle_options[0].values[0].label);
  });
});
