import { TestBed } from '@angular/core/testing';

import { DaffMagentoCartAddressTransformer } from '@daffodil/cart/driver/magento';
import { MagentoCartAddressFactory } from '@daffodil/cart/driver/magento/testing';
import { DaffCartAddressFactory } from '@daffodil/cart/testing';

import { DaffMagentoBillingAddressTransformer } from './billing-address.service';

describe('@daffodil/cart/driver/magento | Transformer | MagentoBillingAddress', () => {
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
          useValue: jasmine.createSpyObj('DaffMagentoCartAddressTransformer', ['transform']),
        },
      ],
    });

    service = TestBed.inject(DaffMagentoBillingAddressTransformer);

    cartAddressTransformerSpy = TestBed.inject(DaffMagentoCartAddressTransformer);

    daffCartAddressFactory = TestBed.inject(DaffCartAddressFactory);
    magentoBillingAddressFactory = TestBed.inject(MagentoCartAddressFactory);

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
