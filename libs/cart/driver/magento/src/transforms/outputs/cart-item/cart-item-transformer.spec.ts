import { DaffCartItemInputType } from '@daffodil/cart';
import {
  MagentoCartItem,
  MagentoBundleCartItem,
  MagentoConfigurableCartItem,
} from '@daffodil/cart/driver/magento';
import {
  MagentoCartItemFactory,
  MagentoBundleCartItemFactory,
  MagentoConfigurableCartItemFactory,
} from '@daffodil/cart/driver/magento/testing';

import { DaffCartMagentoCartItemExtraTransform } from '../../../interfaces/public_api';
import { transformMagentoCartItem } from './cart-item-transformer';

describe('@daffodil/cart/driver/magento | transformMagentoCartItem', () => {
  let stubMagentoCartItems: MagentoCartItem[];
  let extraTransform: DaffCartMagentoCartItemExtraTransform;
  let extraTransformName: string;

  beforeEach(() => {
    stubMagentoCartItems = new MagentoCartItemFactory().createMany(2);
    extraTransformName = 'extra transform name';
    extraTransform = (daffItem, magentoItem) => ({
      ...daffItem,
      name: extraTransformName,
    });
  });

  describe('when the product is a simple product', () => {

    it('should return a simple product', () => {
      expect(transformMagentoCartItem(stubMagentoCartItems[0]).type).toEqual(DaffCartItemInputType.Simple);
    });
  });

  describe('when the product is a bundled product', () => {
    let magentoBundledCartItem: MagentoBundleCartItem;

    beforeEach(() => {
      magentoBundledCartItem = new MagentoBundleCartItemFactory().create();
    });

    it('should return a composite product', () => {
      expect(transformMagentoCartItem(magentoBundledCartItem).type).toEqual(DaffCartItemInputType.Composite);
    });
  });

  describe('when the product is a configurable product', () => {
    let magentoConfigurableCartItem: MagentoConfigurableCartItem;

    beforeEach(() => {
      magentoConfigurableCartItem = new MagentoConfigurableCartItemFactory().create();
    });

    it('should return a configurable product', () => {
      expect(transformMagentoCartItem(magentoConfigurableCartItem).type).toEqual(DaffCartItemInputType.Configurable);
    });
  });

  describe('when extra transforms are passed', () => {
    it('should invoke the extra transforms', () => {
      expect(transformMagentoCartItem(stubMagentoCartItems[0], extraTransform).name).toEqual(extraTransformName);
    });
  });
});
