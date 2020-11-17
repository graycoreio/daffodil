import { TestBed } from '@angular/core/testing';

import { MagentoProductStockStatusEnum } from '@daffodil/product';
import { DaffCartItemInputType } from '@daffodil/cart';
import { MagentoCartItemFactory } from '@daffodil/cart/driver/magento/testing';
import {
  DaffCartItemFactory
} from '@daffodil/cart/testing';

import { transformMagentoSimpleCartItem } from './simple-cart-item-transformer';

describe('Driver | Magento | Cart | Transformer | SimpleMagentoCartItem', () => {
  let daffCartItemFactory: DaffCartItemFactory;
  let magentoCartItemFactory: MagentoCartItemFactory;

  let mockDaffCartItem;
  let mockMagentoCartItem;

  beforeEach(() => {
    daffCartItemFactory = TestBed.get(DaffCartItemFactory);
    magentoCartItemFactory = TestBed.get(MagentoCartItemFactory);

    mockDaffCartItem = daffCartItemFactory.create();
    mockMagentoCartItem = magentoCartItemFactory.create();
  });

  describe('transformMagentoSimpleCartItem', () => {
    let transformedCartItem;
    let sku;
    let qty;
    let price;
    let discount;
		let url;
		let label;
		let stock_status;

    beforeEach(() => {
      sku = 'sku';
      qty = 3;
      price = 3.34;
      discount = 1;
			url = 'url';
			label = 'label';
			stock_status = MagentoProductStockStatusEnum.InStock;

      mockMagentoCartItem.product.sku = sku;
      mockMagentoCartItem.quantity = qty;
      mockMagentoCartItem.prices.price.value = price;
			mockMagentoCartItem.prices.total_item_discount.value = discount;
			mockMagentoCartItem.product.thumbnail = {
				url: url,
				label: label
			}

      transformedCartItem = transformMagentoSimpleCartItem(mockMagentoCartItem);
    });

    it('should return an object with the correct values', () => {
			expect(transformedCartItem.type).toEqual(DaffCartItemInputType.Simple);
      expect(transformedCartItem.sku).toEqual(sku);
      expect(transformedCartItem.qty).toEqual(qty);
      expect(transformedCartItem.price).toEqual(price);
      expect(transformedCartItem.in_stock).toEqual(true);
      expect(transformedCartItem.total_discount).toEqual(discount);
      expect(transformedCartItem.image.id).toEqual(label);
      expect(transformedCartItem.image.url).toEqual(url);
      expect(transformedCartItem.image.label).toEqual(label);
    });

    it('should set magento_cart_item', () => {
      expect(transformedCartItem.magento_cart_item).toEqual(mockMagentoCartItem);
    });

    describe('when the argument is null', () => {
      beforeEach(() => {
        transformedCartItem = transformMagentoSimpleCartItem(null);
      });

      it('should return null and not throw an error', () => {
        expect(transformedCartItem).toBeNull();
      });
    });
  });
});
