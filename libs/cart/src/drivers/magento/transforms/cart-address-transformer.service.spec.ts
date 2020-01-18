import { TestBed } from '@angular/core/testing';

import { DaffMagentoCartAddressTransformerService } from './cart-address-transformer.service';
import { CartAddress } from '../models/cart-address';
import { cartAddressFactory } from '../testing/factories/cart-address';
import { DaffCartShippingRateTransformer } from '../../injection-tokens/cart-shipping-rate-transformer.token';

describe('DaffMagentoCartAddressTransformerService', () => {
  let service: DaffMagentoCartAddressTransformerService;
  let mockResponse: CartAddress;

  const magentoCartShippingRateTransformerServiceSpy = jasmine.createSpyObj('DaffMagentoCartShippingRateTransformerService', ['transform'])

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        DaffMagentoCartAddressTransformerService,
        {
          provide: DaffCartShippingRateTransformer,
          useValue: magentoCartShippingRateTransformerServiceSpy
        },
      ]
    });

    service = TestBed.get(DaffMagentoCartAddressTransformerService);
    mockResponse = cartAddressFactory();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('transform', () => {
    it('should return an object with the correct values', () => {
      const id = 23;
      const city = 'New York';
      const email = 'testName';
      const telephone = '959-234-5453'

      mockResponse.email = email;
      mockResponse.id = id;
      mockResponse.telephone = telephone;
      mockResponse.city = city

      const transformedCartAddress = service.transform(mockResponse);

      expect(transformedCartAddress.address_id).toEqual(id);
      expect(transformedCartAddress.email).toEqual(email);
      expect(transformedCartAddress.city).toEqual(city);
      expect(transformedCartAddress.telephone).toEqual(telephone);
    });
  })
});
