import { TestBed } from '@angular/core/testing';

import { DaffShopifyCartShippingRateTransformerService } from './cart-shipping-rate-transformer.service';
import { ShippingRateNodeFactory } from '../testing/factories/shipping-rate-node.factory';
import { ShippingRateNode } from '../models/shipping-rate-node';

describe('DaffShopifyCartShippingRateTransformerService', () => {
  let service: DaffShopifyCartShippingRateTransformerService;
  let mockResponse: ShippingRateNode;

  const factory = new ShippingRateNodeFactory();

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        DaffShopifyCartShippingRateTransformerService,
      ]
    })

    service = TestBed.get(DaffShopifyCartShippingRateTransformerService);

    mockResponse = factory.create();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('transform', () => {
    it('should return an object with the correct values', () => {
      const code = mockResponse.handle;
      const price = mockResponse.priceV2.amount;

      const transformedCartShippingRate = service.transform(mockResponse);

      expect(transformedCartShippingRate.code).toEqual(code);
      expect(transformedCartShippingRate.price).toEqual(price);
    });
  })
});
