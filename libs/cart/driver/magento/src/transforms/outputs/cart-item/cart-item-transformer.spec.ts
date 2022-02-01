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

import { DaffCartMagentoCartItemTransform } from '../../../interfaces/public_api';
import {
  daffTransformMagentoCartItem,
  transformMagentoCartItem,
} from './cart-item-transformer';

describe('@daffodil/cart/driver/magento | transformMagentoCartItem', () => {
  let stubMagentoCartItems: MagentoCartItem[];
  let transform: DaffCartMagentoCartItemTransform;
  let transformName: string;

  beforeEach(() => {
    stubMagentoCartItems = new MagentoCartItemFactory().createMany(2);
    transformName = 'transform name';
    transform = (daffItem, magentoItem) => ({
      ...daffItem,
      name: transformName,
    });
  });

  it('should invoke the passed transforms', () => {
    expect(transformMagentoCartItem(daffTransformMagentoCartItem(stubMagentoCartItems[0]), stubMagentoCartItems[0], [transform]).name).toEqual(transformName);
  });
});

describe('@daffodil/cart/driver/magento | daffTransformMagentoCartItem', () => {
  let stubMagentoCartItems: MagentoCartItem[];
  let transform: DaffCartMagentoCartItemTransform;
  let transformName: string;

  beforeEach(() => {
    stubMagentoCartItems = new MagentoCartItemFactory().createMany(2);
    transformName = 'transform name';
    transform = (daffItem, magentoItem) => ({
      ...daffItem,
      name: transformName,
    });
  });

  describe('when the product is a simple product', () => {

    it('should return a simple product', () => {
      expect(daffTransformMagentoCartItem(stubMagentoCartItems[0]).type).toEqual(DaffCartItemInputType.Simple);
    });
  });

  describe('when the product is a bundled product', () => {
    let magentoBundledCartItem: MagentoBundleCartItem;

    beforeEach(() => {
      magentoBundledCartItem = new MagentoBundleCartItemFactory().create();
    });

    it('should return a composite product', () => {
      expect(daffTransformMagentoCartItem(magentoBundledCartItem).type).toEqual(DaffCartItemInputType.Composite);
    });
  });

  describe('when the product is a configurable product', () => {
    let magentoConfigurableCartItem: MagentoConfigurableCartItem;

    beforeEach(() => {
      magentoConfigurableCartItem = new MagentoConfigurableCartItemFactory().create();
    });

    it('should return a configurable product', () => {
      expect(daffTransformMagentoCartItem(magentoConfigurableCartItem).type).toEqual(DaffCartItemInputType.Configurable);
    });
  });
});
