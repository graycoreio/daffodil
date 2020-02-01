import { TestBed } from '@angular/core/testing';

import { DaffShopifyCartItemTransformerService } from './cart-item-transformer.service';
import { CartItem } from '../models/cart-item';
import { CartItemFactory } from '../testing/factories/cart-item.factory';

describe('DaffShopifyCartItemTransformerService', () => {
  let service: DaffShopifyCartItemTransformerService;
  let mockResponse: CartItem;

  const factory = new CartItemFactory();

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        DaffShopifyCartItemTransformerService
      ]
    });

    service = TestBed.get(DaffShopifyCartItemTransformerService);
    mockResponse = factory.create();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('transform', () => {
    it('should return an object with the correct values', () => {
      const item_id = Number(mockResponse.id);
      const sku = mockResponse.variant.sku;
      const name = mockResponse.title;
      const price = mockResponse.variant.priceV2.amount;

      const transformedCartItem = service.transform(mockResponse);

      expect(transformedCartItem.item_id).toEqual(item_id);
      expect(transformedCartItem.name).toEqual(name);
      expect(transformedCartItem.sku).toEqual(sku);
      expect(transformedCartItem.price).toEqual(price);
    });
  })
});
