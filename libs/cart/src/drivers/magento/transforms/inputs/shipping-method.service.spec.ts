import { TestBed } from '@angular/core/testing';

import {
  DaffCartShippingRateFactory
} from '@daffodil/cart/testing';

import { DaffMagentoShippingMethodInputTransformer } from './shipping-method.service';

describe('Driver | Magento | Cart | Transformer | MagentoShippingMethodInput', () => {
  let service: DaffMagentoShippingMethodInputTransformer;

  let daffShippingRateFactory: DaffCartShippingRateFactory;

  let mockDaffShippingRate;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        DaffMagentoShippingMethodInputTransformer
      ]
    });

    service = TestBed.get(DaffMagentoShippingMethodInputTransformer);

    daffShippingRateFactory = TestBed.get(DaffCartShippingRateFactory);

    mockDaffShippingRate = daffShippingRateFactory.create();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('transform | transforming a shipping method input', () => {
    let transformedShippingMethod;
    let carrier;

    beforeEach(() => {
      carrier = 'carrier';

      mockDaffShippingRate.carrier = carrier;

      transformedShippingMethod = service.transform(mockDaffShippingRate);
    });

    it('should return an object with the correct values', () => {
      expect(transformedShippingMethod.carrier_code).toEqual(carrier);
    });
  });
});
