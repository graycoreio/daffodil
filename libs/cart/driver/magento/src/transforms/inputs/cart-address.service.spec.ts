import { TestBed } from '@angular/core/testing';

import { DaffCartAddress } from '@daffodil/cart';
import { MagentoCartAddressInput } from '@daffodil/cart/driver/magento';
import { DaffCartAddressFactory } from '@daffodil/cart/testing';

import { DaffMagentoCartAddressInputTransformer } from './cart-address.service';

describe('@daffodil/cart/driver/magento | DaffMagentoCartAddressInputTransformer', () => {
  let service: DaffMagentoCartAddressInputTransformer;

  let daffCartAddressFactory: DaffCartAddressFactory;

  let mockDaffCartAddress: DaffCartAddress;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        DaffMagentoCartAddressInputTransformer,
      ],
    });

    service = TestBed.inject(DaffMagentoCartAddressInputTransformer);

    daffCartAddressFactory = TestBed.inject(DaffCartAddressFactory);

    mockDaffCartAddress = daffCartAddressFactory.create();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('transform | transforming a cart address', () => {
    let transformedCartAddress: MagentoCartAddressInput;
    let street: string;
    let street2: string;
    let city: string;
    let firstname: string;
    let region: string;

    beforeEach(() => {
      street = 'street';
      street2 = 'street2';
      city = 'city';
      firstname = 'firstname';
      region = 'region';

      mockDaffCartAddress.street = street;
      mockDaffCartAddress.street2 = street2;
      mockDaffCartAddress.city = city;
      mockDaffCartAddress.firstname = firstname;
      mockDaffCartAddress.region = region;

      transformedCartAddress = service.transform(mockDaffCartAddress);
    });

    it('should return an object with the correct values', () => {
      expect(transformedCartAddress.street).toEqual([street, street2]);
      expect(transformedCartAddress.city).toEqual(city);
      expect(transformedCartAddress.firstname).toEqual(firstname);
      expect(transformedCartAddress.region).toEqual(region);
    });
  });
});
