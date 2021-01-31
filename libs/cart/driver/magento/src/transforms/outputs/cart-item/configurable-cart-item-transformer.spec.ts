import { DaffConfigurableCartItem } from '@daffodil/cart';
import { MagentoConfigurableCartItem } from '@daffodil/cart/driver/magento';
import { MagentoConfigurableCartItemFactory } from '@daffodil/cart/driver/magento/testing';

import { transformMagentoConfigurableCartItem } from './configurable-cart-item-transformer';

describe('transformMagentoConfigurableCartItem', () => {
  let stubMagentoConfigurableCartItem: MagentoConfigurableCartItem;
  let transformedCartItem: DaffConfigurableCartItem;

  beforeEach(() => {
    stubMagentoConfigurableCartItem = new MagentoConfigurableCartItemFactory().create();
    transformedCartItem = transformMagentoConfigurableCartItem(stubMagentoConfigurableCartItem);
  });

  it('should return the expected composite product', () => {
    expect(transformedCartItem.attributes[0].attribute_label).toEqual(stubMagentoConfigurableCartItem.configurable_options[0].option_label);
    expect(transformedCartItem.attributes[0].value_label).toEqual(stubMagentoConfigurableCartItem.configurable_options[0].value_label);
  });
});
