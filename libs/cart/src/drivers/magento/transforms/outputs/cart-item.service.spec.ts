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

    beforeEach(() => {
      sku = 'sku';
      qty = 3;
      price = 3.34;

      mockMagentoCartItem.product.sku = sku;
      mockMagentoCartItem.quantity = qty;
      mockMagentoCartItem.prices.price.value = price;

      transformedCartItem = service.transform(mockMagentoCartItem);
    });

    it('should return an object with the correct values', () => {
      expect(transformedCartItem.sku).toEqual(sku);
      expect(transformedCartItem.qty).toEqual(qty);
      expect(transformedCartItem.price).toEqual(price);
    });

    it('should set magento_cart_item', () => {
      expect(transformedCartItem.magento_cart_item).toEqual(mockMagentoCartItem);
    });
  })
});
