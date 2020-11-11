import { TestBed } from '@angular/core/testing';

import { DaffMagentoCartAddressInputTransformer } from '@daffodil/cart/driver/magento';
import { MagentoCartAddressInputFactory } from '@daffodil/cart/driver/magento/testing';
import {
  DaffCartAddressFactory
} from '@daffodil/cart/testing';

import { DaffMagentoShippingAddressInputTransformer } from './shipping-address.service';

describe('Driver | Magento | Cart | Transformer | MagentoShippingAddressInput', () => {
  let service: DaffMagentoShippingAddressInputTransformer;

  let daffCartAddressFactory: DaffCartAddressFactory;
  let magentoCartAddressInputFactory: MagentoCartAddressInputFactory;

  let mockDaffShippingAddress;
  let mockMagentoCartAddressInput;

  let cartAddressTransformerSpy;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        DaffMagentoShippingAddressInputTransformer,
        {
          provide: DaffMagentoCartAddressInputTransformer,
          useValue: jasmine.createSpyObj('DaffMagentoCartAddressInputTransformer', ['transform'])
        }
      ]
    });

    service = TestBed.get(DaffMagentoShippingAddressInputTransformer);

    cartAddressTransformerSpy = TestBed.get(DaffMagentoCartAddressInputTransformer);

    daffCartAddressFactory = TestBed.get(DaffCartAddressFactory);
    magentoCartAddressInputFactory = TestBed.get(MagentoCartAddressInputFactory);

    mockDaffShippingAddress = daffCartAddressFactory.create();
    mockMagentoCartAddressInput = magentoCartAddressInputFactory.create();

    cartAddressTransformerSpy.transform.and.returnValue(mockMagentoCartAddressInput);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('transform | transforming a shipping address input', () => {
    let transformedShippingAddress;

    describe('when address_id is set', () => {
      let addressId;

      beforeEach(() => {
        addressId = '15';

        mockDaffShippingAddress.address_id = addressId;

        transformedShippingAddress = service.transform(mockDaffShippingAddress);
      });

      it('should return an object with the correct customer_address_id', () => {
        expect(transformedShippingAddress.customer_address_id).toEqual(addressId);
      });

      it('should return an object without the address field set', () => {
        expect(transformedShippingAddress.address).toBeFalsy();
      });
    });

    describe('when address_id is not set', () => {
      beforeEach(() => {
        mockDaffShippingAddress.address_id = null;

        transformedShippingAddress = service.transform(mockDaffShippingAddress);
      });

      it('should call the cart address transformer with the address', () => {
        expect(cartAddressTransformerSpy.transform).toHaveBeenCalledWith(mockDaffShippingAddress);
      });

      it('should return an object without the customer_address_id field set', () => {
        expect(transformedShippingAddress.customer_address_id).toBeFalsy();
      });
    });
  });
});
