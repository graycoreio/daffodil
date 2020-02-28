import { TestBed } from '@angular/core/testing';

import {
  MagentoCartShippingMethodFactory
} from '@daffodil/cart/testing';

import { DaffMagentoCartShippingRateTransformer } from './cart-shipping-rate.service';

describe('Driver | Magento | Cart | Transformer | MagentoCartShippingRate', () => {
  let service: DaffMagentoCartShippingRateTransformer;

  let magentoShippingMethodFactory: MagentoCartShippingMethodFactory;

  let mockMagentoShippingMethod;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        DaffMagentoCartShippingRateTransformer,
      ]
    });

    service = TestBed.get(DaffMagentoCartShippingRateTransformer);

    magentoShippingMethodFactory = TestBed.get(MagentoCartShippingMethodFactory);

    mockMagentoShippingMethod = magentoShippingMethodFactory.create();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('transform | transforming a cart shipping rate', () => {
    let transformedCartShippingRate;
    let carrier;
    let price;
    let passThrough;

    beforeEach(() => {
      carrier = 'carrier';
      price = 54.30;
      passThrough = 'passThrough';

      mockMagentoShippingMethod.carrier_code = carrier;
      mockMagentoShippingMethod.amount.value = price;
      mockMagentoShippingMethod.passThrough = passThrough;

      transformedCartShippingRate = service.transform(mockMagentoShippingMethod);
    });

    it('should return an object with the correct values', () => {
      expect(transformedCartShippingRate.carrier).toEqual(carrier);
      expect(transformedCartShippingRate.price).toEqual(price);
    });

    it('should pass through values not touched by the transformer', () => {
      expect(transformedCartShippingRate.passThrough).toEqual(passThrough);
    });
  });
});
