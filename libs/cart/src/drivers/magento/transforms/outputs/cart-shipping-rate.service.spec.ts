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

    beforeEach(() => {
      carrier = 'carrier';
      price = 54.30;

      mockMagentoShippingMethod.carrier_code = carrier;
      mockMagentoShippingMethod.amount.value = price;

      transformedCartShippingRate = service.transform(mockMagentoShippingMethod);
    });

    it('should return an object with the correct values', () => {
      expect(transformedCartShippingRate.carrier).toEqual(carrier);
      expect(transformedCartShippingRate.price).toEqual(price);
    });

    it('should set magento_shipping_method', () => {
      expect(transformedCartShippingRate.magento_shipping_method).toEqual(mockMagentoShippingMethod);
    });

    describe('when the argument is null', () => {
      beforeEach(() => {
        transformedCartShippingRate = service.transform(null);
      });

      it('should return null and not throw an error', () => {
        expect(transformedCartShippingRate).toBeNull();
      });
    });
  });
});
