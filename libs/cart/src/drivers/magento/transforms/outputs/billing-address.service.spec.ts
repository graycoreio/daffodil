import { TestBed } from '@angular/core/testing';

import {
  MagentoCartAddressFactory,
  DaffCartAddressFactory
} from '@daffodil/cart/testing';

import { DaffMagentoCartAddressTransformer } from './cart-address.service';
import { DaffMagentoBillingAddressTransformer } from './billing-address.service';

describe('Driver | Magento | Cart | Transformer | MagentoBillingAddress', () => {
  let service: DaffMagentoBillingAddressTransformer;

  let daffCartAddressFactory: DaffCartAddressFactory;
  let magentoBillingAddressFactory: MagentoCartAddressFactory;

  let mockDaffBillingAddress;
  let mockMagentoBillingAddress;

  let cartAddressTransformerSpy;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        DaffMagentoBillingAddressTransformer,
        {
          provide: DaffMagentoCartAddressTransformer,
          useValue: jasmine.createSpyObj('DaffMagentoCartAddressTransformer', ['transform'])
        }
      ]
    });

    service = TestBed.get(DaffMagentoBillingAddressTransformer);

    cartAddressTransformerSpy = TestBed.get(DaffMagentoCartAddressTransformer);

    daffCartAddressFactory = TestBed.get(DaffCartAddressFactory);
    magentoBillingAddressFactory = TestBed.get(MagentoCartAddressFactory);

    mockDaffBillingAddress = daffCartAddressFactory.create();
    mockMagentoBillingAddress = magentoBillingAddressFactory.create();

    cartAddressTransformerSpy.transform.withArgs(mockMagentoBillingAddress).and.returnValue(mockDaffBillingAddress);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('transform | transforming a billing address', () => {
    let transformedBillingAddress;

    beforeEach(() => {
      transformedBillingAddress = service.transform(mockMagentoBillingAddress);
    });

    it('should return an object with the correct values', () => {
      expect(transformedBillingAddress.address_type).toEqual('billing');
    });

    it('should call the cart address transformer with the address', () => {
      expect(cartAddressTransformerSpy.transform).toHaveBeenCalledWith(mockMagentoBillingAddress);
    });

    describe('when the argument is null', () => {
      beforeEach(() => {
        transformedBillingAddress = service.transform(null);
      });

      it('should return null and not throw an error', () => {
        expect(transformedBillingAddress).toBeNull();
      });
    });
  });
});
