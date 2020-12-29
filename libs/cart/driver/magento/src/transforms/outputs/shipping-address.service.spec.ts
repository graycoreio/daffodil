import { TestBed } from '@angular/core/testing';

import { DaffMagentoCartAddressTransformer } from '@daffodil/cart/driver/magento';
import { MagentoShippingAddressFactory } from '@daffodil/cart/driver/magento/testing';
import {
  DaffCartAddressFactory
} from '@daffodil/cart/testing';

import { DaffMagentoShippingAddressTransformer } from './shipping-address.service';

describe('Driver | Magento | Cart | Transformer | MagentoShippingAddress', () => {
  let service: DaffMagentoShippingAddressTransformer;

  let daffCartAddressFactory: DaffCartAddressFactory;
  let magentoShippingAddressFactory: MagentoShippingAddressFactory;

  let mockDaffShippingAddress;
  let mockMagentoShippingAddress;

  let cartAddressTransformerSpy;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        DaffMagentoShippingAddressTransformer,
        {
          provide: DaffMagentoCartAddressTransformer,
          useValue: jasmine.createSpyObj('DaffMagentoCartAddressTransformer', ['transform'])
        }
      ]
    });

    service = TestBed.inject(DaffMagentoShippingAddressTransformer);

    cartAddressTransformerSpy = TestBed.inject(DaffMagentoCartAddressTransformer);

    daffCartAddressFactory = TestBed.inject(DaffCartAddressFactory);
    magentoShippingAddressFactory = TestBed.inject(MagentoShippingAddressFactory);

    mockDaffShippingAddress = daffCartAddressFactory.create();
    mockMagentoShippingAddress = magentoShippingAddressFactory.create();

    cartAddressTransformerSpy.transform.withArgs(mockMagentoShippingAddress).and.returnValue(mockDaffShippingAddress);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('transform | transforming a shipping address', () => {
    let transformedShippingAddress;

    beforeEach(() => {
      transformedShippingAddress = service.transform(mockMagentoShippingAddress);
    });

    it('should return an object with the correct values', () => {
      expect(transformedShippingAddress.address_type).toEqual('shipping');
    });

    it('should call the cart address transformer with the address', () => {
      expect(cartAddressTransformerSpy.transform).toHaveBeenCalledWith(mockMagentoShippingAddress);
    });

    describe('when the argument is null', () => {
      beforeEach(() => {
        transformedShippingAddress = service.transform(null);
      });

      it('should return null and not throw an error', () => {
        expect(transformedShippingAddress).toBeNull();
      });
    });
  });
});
