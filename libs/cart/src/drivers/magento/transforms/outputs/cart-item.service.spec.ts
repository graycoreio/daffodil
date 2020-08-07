import { TestBed } from '@angular/core/testing';

import {
  MagentoCartItemFactory,
  DaffCartItemFactory
} from '@daffodil/cart/testing';

import { DaffMagentoCartItemTransformer } from './cart-item.service';
import { DaffCartItemInputType } from '../../../../models/cart-item-input';

describe('Driver | Magento | Cart | Transformer | MagentoCartItem', () => {
  let service: DaffMagentoCartItemTransformer;

  let daffCartItemFactory: DaffCartItemFactory;
  let magentoCartItemFactory: MagentoCartItemFactory;

  let mockDaffCartItem;
  let mockMagentoCartItem;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        DaffMagentoCartItemTransformer
      ]
    });

    service = TestBed.get(DaffMagentoCartItemTransformer);

    daffCartItemFactory = TestBed.get(DaffCartItemFactory);
    magentoCartItemFactory = TestBed.get(MagentoCartItemFactory);

    mockDaffCartItem = daffCartItemFactory.create();
    mockMagentoCartItem = magentoCartItemFactory.create();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('transform | transforming a cart item', () => {
    let transformedCartItem;
    let sku;
    let qty;
    let price;
    let discount;
		let url;
		let label;

    beforeEach(() => {
      sku = 'sku';
      qty = 3;
      price = 3.34;
      discount = 1;
			url = 'url';
			label = 'label';

      mockMagentoCartItem.product.sku = sku;
      mockMagentoCartItem.quantity = qty;
      mockMagentoCartItem.prices.price.value = price;
			mockMagentoCartItem.prices.total_item_discount.value = discount;
			mockMagentoCartItem.product.thumbnail = {
				url: url,
				label: label
			}

      transformedCartItem = service.transform(mockMagentoCartItem);
    });

    it('should return an object with the correct values', () => {
			expect(transformedCartItem.type).toEqual(DaffCartItemInputType.Simple);
      expect(transformedCartItem.sku).toEqual(sku);
      expect(transformedCartItem.qty).toEqual(qty);
      expect(transformedCartItem.price).toEqual(price);
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
        transformedCartItem = service.transform(null);
      });

      it('should return null and not throw an error', () => {
        expect(transformedCartItem).toBeNull();
      });
    });
  });
});
