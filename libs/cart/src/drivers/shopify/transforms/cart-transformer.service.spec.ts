import { TestBed } from '@angular/core/testing';

import { DaffShopifyCartTransformerService } from './cart-transformer.service';
import { DaffCartItemTransformer } from '../../injection-tokens/cart-item-transformer.token';
import { DaffCartAddressTransformer } from '../../injection-tokens/cart-address-transformer.token';
import { CartFactory } from '../testing/factories/cart.factory';
import { Cart } from '../models/cart';

describe('DaffShopifyCartTransformerService', () => {
  let service: DaffShopifyCartTransformerService;
  let mockResponse: Cart;

  const shopifyCartItemTransformerServiceSpy = jasmine.createSpyObj('DaffShopifyCartItemTransformerService', ['transform']);
  const shopifyCartAddressTransformerServiceSpy = jasmine.createSpyObj('DaffShopifyCartAddressTransformerService', ['transform']);

  const factory = new CartFactory();

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        DaffShopifyCartTransformerService,
        {
          provide: DaffCartItemTransformer,
          useValue: shopifyCartItemTransformerServiceSpy
        },
        {
          provide: DaffCartAddressTransformer,
          useValue: shopifyCartAddressTransformerServiceSpy
        }
      ]
    })

    service = TestBed.get(DaffShopifyCartTransformerService);
    mockResponse = factory.create();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('transform', () => {
    it('should return an object with the correct values', () => {
      const id = Number(mockResponse.id);
      const subtotal = mockResponse.lineItemsSubtotalPrice.amount;

      const transformedCart = service.transform(mockResponse);

      expect(transformedCart.id).toEqual(id);
      expect(transformedCart.subtotal).toEqual(subtotal);
    });
  })
});
