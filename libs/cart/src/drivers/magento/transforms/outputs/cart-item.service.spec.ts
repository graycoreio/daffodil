import { TestBed } from '@angular/core/testing';

import {
  MagentoCartItemFactory,
  DaffCartItemFactory
} from '@daffodil/cart/testing';

import { DaffMagentoCartItemTransformer } from './cart-item.service';

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
    let rowTotal;
    let discount;
    let discountedPrice;
		let url;
		let label;

    beforeEach(() => {
      sku = 'sku';
      qty = 3;
      price = 3.34;
      discount = 1;
      rowTotal = price * qty;
      discountedPrice = rowTotal - discount;
			url = 'url';
			label = 'label';

      mockMagentoCartItem.product.sku = sku;
      mockMagentoCartItem.quantity = qty;
      mockMagentoCartItem.prices.price.value = price;
      mockMagentoCartItem.prices.row_total.value = rowTotal;
			mockMagentoCartItem.prices.total_item_discount.value = discount;
			mockMagentoCartItem.product.image = {
				url: url,
				label: label
			}

      transformedCartItem = service.transform(mockMagentoCartItem);
    });

    it('should return an object with the correct values', () => {
      expect(transformedCartItem.sku).toEqual(sku);
      expect(transformedCartItem.qty).toEqual(qty);
      expect(transformedCartItem.price).toEqual(price);
      expect(transformedCartItem.discounted_row_total).toEqual(discountedPrice);
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
