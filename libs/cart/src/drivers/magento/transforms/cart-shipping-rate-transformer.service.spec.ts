import { TestBed } from '@angular/core/testing';

import { DaffMagentoCartShippingRateTransformerService } from './cart-shipping-rate-transformer.service';
import { CartShippingMethod } from '../models/cart-shipping-method';
import { cartShippingMethodFactory } from '../testing/factories/cart-shipping-method';

describe('DaffMagentoCartShippingRateTransformerService', () => {
  let service: DaffMagentoCartShippingRateTransformerService;
  let mockResponse: CartShippingMethod;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        DaffMagentoCartShippingRateTransformerService,
      ]
    })

    service = TestBed.get(DaffMagentoCartShippingRateTransformerService);
    mockResponse = cartShippingMethodFactory();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('transform', () => {
    it('should return an object with the correct values', () => {
      const carrier = 'testPaymentMethod';
      const code = '34';
      const price = 43.09
      mockResponse.carrier_code = carrier;
      mockResponse.method_code = code;
      mockResponse.price_incl_tax = price;

      const transformedCartShippingRate = service.transform(mockResponse);

      expect(transformedCartShippingRate.code).toEqual(code);
      expect(transformedCartShippingRate.carrier).toEqual(carrier);
      expect(transformedCartShippingRate.price).toEqual(price);
    });
  })
});
