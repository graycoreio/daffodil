import { TestBed } from '@angular/core/testing';

import {
  MagentoShippingAddressFactory,
  DaffCartAddressFactory
} from '@daffodil/cart/testing';

import { DaffMagentoCartAddressTransformer } from './cart-address.service';
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

    service = TestBed.get(DaffMagentoShippingAddressTransformer);

    cartAddressTransformerSpy = TestBed.get(DaffMagentoCartAddressTransformer);

    daffCartAddressFactory = TestBed.get(DaffCartAddressFactory);
    magentoShippingAddressFactory = TestBed.get(MagentoShippingAddressFactory);

    mockDaffShippingAddress = daffCartAddressFactory.create();
    mockMagentoShippingAddress = magentoShippingAddressFactory.create();

    cartAddressTransformerSpy.transform.withArgs(mockMagentoShippingAddress).and.returnValue(mockDaffShippingAddress);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('transform | transforming a shipping address', () => {
    let transformedShippingAddress;
    let passThrough;

    beforeEach(() => {
      passThrough = 'passThrough';

      mockMagentoShippingAddress.passThrough = passThrough;
      mockDaffShippingAddress.passThrough = passThrough;

      transformedShippingAddress = service.transform(mockMagentoShippingAddress);
    });

    it('should return an object with the correct values', () => {
      expect(transformedShippingAddress.address_type).toEqual('shipping');
    });

    it('should call the cart address transformer with the address', () => {
      expect(cartAddressTransformerSpy.transform).toHaveBeenCalledWith(mockMagentoShippingAddress);
    });

    it('should pass through values not touched by the transformer', () => {
      expect(transformedShippingAddress.passThrough).toEqual(passThrough);
    });
  })
});
