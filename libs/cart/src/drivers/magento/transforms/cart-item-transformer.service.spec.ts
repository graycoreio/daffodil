import { TestBed } from '@angular/core/testing';

import { DaffMagentoCartItemTransformerService } from './cart-item-transformer.service';
import { CartItem } from '../models/cart-item';
import { cartItemFactory } from '../testing/factories/cart-item';

describe('DaffMagentoCartItemTransformerService', () => {
  let service: DaffMagentoCartItemTransformerService;
  let mockResponse: CartItem;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        DaffMagentoCartItemTransformerService
      ]
    });

    service = TestBed.get(DaffMagentoCartItemTransformerService);
    mockResponse = cartItemFactory();
  });

  it('should be created', () => {
    service = TestBed.get(DaffMagentoCartItemTransformerService);
    expect(service).toBeTruthy();
  });

  describe('transform', () => {
    it('should return an object with the correct values', () => {
      const item_id = 23;
      const sku = 'isaudnfsa76df65';
      const name = 'testName';
      const price = 109.78
      mockResponse.name = name;
      mockResponse.item_id = item_id;
      mockResponse.price = price;
      mockResponse.sku = sku

      const transformedCartItem = service.transform(mockResponse);

      expect(transformedCartItem.item_id).toEqual(item_id);
      expect(transformedCartItem.name).toEqual(name);
      expect(transformedCartItem.sku).toEqual(sku);
      expect(transformedCartItem.price).toEqual(price);
    });
  })
});
