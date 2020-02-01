import { TestBed } from '@angular/core/testing';

import { DaffShopifyCartAddressTransformerService } from './cart-address-transformer.service';
import { MailingAddressFactory } from '../testing/factories/mailing-address.factory';
import { DaffCartShippingRateTransformer } from '../../injection-tokens/cart-shipping-rate-transformer.token';
import { MailingAddress } from '../models/mailing-address';

describe('DaffShopifyCartAddressTransformerService', () => {
  let service: DaffShopifyCartAddressTransformerService;
  let mockResponse: MailingAddress;

  const factory = new MailingAddressFactory();

  const shopifyCartShippingRateTransformerServiceSpy = jasmine.createSpyObj('DaffShopifyCartShippingRateTransformerService', ['transform']);

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        DaffShopifyCartAddressTransformerService,
        {
          provide: DaffCartShippingRateTransformer,
          useValue: shopifyCartShippingRateTransformerServiceSpy
        },
      ]
    });

    service = TestBed.get(DaffShopifyCartAddressTransformerService);

    mockResponse = factory.create();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('transform', () => {
    it('should return an object with the correct values', () => {
      const id = Number(mockResponse.id);
      const city = mockResponse.city;
      const telephone = mockResponse.phone;

      const transformedCartAddress = service.transform(mockResponse);

      expect(transformedCartAddress.address_id).toEqual(id);
      expect(transformedCartAddress.city).toEqual(city);
      expect(transformedCartAddress.telephone).toEqual(telephone);
    });
  })
});
