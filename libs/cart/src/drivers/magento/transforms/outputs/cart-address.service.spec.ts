import { TestBed } from '@angular/core/testing';

import {
  MagentoCartAddressFactory
} from '@daffodil/cart/testing';

import { DaffMagentoCartAddressTransformer } from './cart-address.service';

describe('Driver | Magento | Cart | Transformer | MagentoCartAddress', () => {
  let service: DaffMagentoCartAddressTransformer;

  let magentoCartAddressFactory: MagentoCartAddressFactory;

  let mockMagentoCartAddress;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        DaffMagentoCartAddressTransformer
      ]
    });

    service = TestBed.get(DaffMagentoCartAddressTransformer);

    magentoCartAddressFactory = TestBed.get(MagentoCartAddressFactory);

    mockMagentoCartAddress = magentoCartAddressFactory.create();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('transform | transforming a cart address', () => {
    let transformedCartAddress;
    let street;
    let city;
    let firstname;

    beforeEach(() => {
      street = 'street';
      city = 'city';
      firstname = 'firstname';

      mockMagentoCartAddress.street = [street];
      mockMagentoCartAddress.city = city;
      mockMagentoCartAddress.firstname = firstname;

      transformedCartAddress = service.transform(mockMagentoCartAddress);
    });

    it('should return an object with the correct values', () => {
      expect(transformedCartAddress.street).toEqual(street);
      expect(transformedCartAddress.city).toEqual(city);
      expect(transformedCartAddress.firstname).toEqual(firstname);
    });

    it('should set magento_address', () => {
      expect(transformedCartAddress.magento_address).toEqual(mockMagentoCartAddress);
    });
  });
});
