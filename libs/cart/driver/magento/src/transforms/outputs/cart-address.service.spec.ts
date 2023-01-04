import { TestBed } from '@angular/core/testing';

import { DaffCartAddress } from '@daffodil/cart';
import { MagentoCartAddress } from '@daffodil/cart/driver/magento';
import { MagentoCartAddressFactory } from '@daffodil/cart/driver/magento/testing';

import { DaffMagentoCartAddressTransformer } from './cart-address.service';

describe('@daffodil/cart/driver/magento | Transformer | MagentoCartAddress', () => {
  let service: DaffMagentoCartAddressTransformer;

  let magentoCartAddressFactory: MagentoCartAddressFactory;

  let mockMagentoCartAddress: MagentoCartAddress;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        DaffMagentoCartAddressTransformer,
      ],
    });

    service = TestBed.inject(DaffMagentoCartAddressTransformer);

    magentoCartAddressFactory = TestBed.inject(MagentoCartAddressFactory);

    mockMagentoCartAddress = magentoCartAddressFactory.create();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('transform | transforming a cart address', () => {
    let transformedCartAddress: DaffCartAddress;
    let street;
    let street2: string;
    let city;
    let firstname;

    beforeEach(() => {
      street = 'street';
      street2 = 'street2';
      city = 'city';
      firstname = 'firstname';

      mockMagentoCartAddress.street = [street, street2];
      mockMagentoCartAddress.city = city;
      mockMagentoCartAddress.firstname = firstname;

      transformedCartAddress = service.transform(mockMagentoCartAddress);
    });

    it('should return an object with the correct values', () => {
      expect(transformedCartAddress.street).toEqual(street);
      expect(transformedCartAddress.street2).toEqual(street2);
      expect(transformedCartAddress.city).toEqual(city);
      expect(transformedCartAddress.firstname).toEqual(firstname);
      expect(transformedCartAddress.region).toEqual(String(mockMagentoCartAddress.region.region_id));
      expect(transformedCartAddress.region_code).toEqual(mockMagentoCartAddress.region.code);
    });

    describe('when the argument is null', () => {
      beforeEach(() => {
        transformedCartAddress = service.transform(null);
      });

      it('should return null and not throw an error', () => {
        expect(transformedCartAddress).toBeNull();
      });
    });
  });
});
