import { TestBed } from '@angular/core/testing';

import {
  MagentoShippingAddressFactory,
  DaffCartAddressFactory
} from '@daffodil/cart/testing';

import { DaffMagentoCartAddressInputTransformer } from './cart-address.service';
import { DaffMagentoShippingAddressInputTransformer } from './shipping-address.service';

describe('Driver | Magento | Cart | Transformer | MagentoShippingAddressInput', () => {
  let service: DaffMagentoShippingAddressInputTransformer;

  let daffCartAddressFactory: DaffCartAddressFactory;
  let magentoShippingAddressFactory: MagentoShippingAddressFactory;

  let mockDaffShippingAddress;
  let mockMagentoShippingAddress;

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
    magentoShippingAddressFactory = TestBed.get(MagentoShippingAddressFactory);

    mockDaffShippingAddress = daffCartAddressFactory.create();
    mockMagentoShippingAddress = magentoShippingAddressFactory.create();

    cartAddressTransformerSpy.transform.and.returnValue(mockDaffShippingAddress);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('transform | transforming a shipping address input', () => {
    let transformedShippingAddress;
    let addressId;
    let passThrough;

    beforeEach(() => {
      addressId = '15';
      passThrough = 'passThrough';

      mockDaffShippingAddress.passThrough = passThrough;
      mockDaffShippingAddress.address_id = addressId;

      transformedShippingAddress = service.transform(mockDaffShippingAddress);
    });

    it('should return an object with the correct values', () => {
      expect(transformedShippingAddress.customer_address_id).toEqual(addressId);
    });

    it('should call the cart address transformer with the address', () => {
      expect(cartAddressTransformerSpy.transform).toHaveBeenCalledWith(mockDaffShippingAddress);
    });

    it('should pass through values not touched by the transformer', () => {
      expect(transformedShippingAddress.passThrough).toEqual(passThrough);
    });
  })
});
