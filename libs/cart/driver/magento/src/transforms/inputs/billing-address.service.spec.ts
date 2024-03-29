import { TestBed } from '@angular/core/testing';

import { DaffCartAddress } from '@daffodil/cart';
import {
  DaffMagentoCartAddressInputTransformer,
  MagentoBillingAddressInput,
} from '@daffodil/cart/driver/magento';
import { MagentoCartAddressInputFactory } from '@daffodil/cart/driver/magento/testing';
import { DaffCartAddressFactory } from '@daffodil/cart/testing';

import { DaffMagentoBillingAddressInputTransformer } from './billing-address.service';

describe('@daffodil/cart/driver/magento | DaffMagentoBillingAddressInputTransformer', () => {
  let service: DaffMagentoBillingAddressInputTransformer;

  let daffCartAddressFactory: DaffCartAddressFactory;
  let magentoCartAddressInputFactory: MagentoCartAddressInputFactory;

  let mockDaffBillingAddress: DaffCartAddress;
  let mockMagentoCartAddressInput;

  let cartAddressTransformerSpy;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        DaffMagentoBillingAddressInputTransformer,
        {
          provide: DaffMagentoCartAddressInputTransformer,
          useValue: jasmine.createSpyObj('DaffMagentoCartAddressInputTransformer', ['transform']),
        },
      ],
    });

    service = TestBed.inject(DaffMagentoBillingAddressInputTransformer);

    cartAddressTransformerSpy = TestBed.inject(DaffMagentoCartAddressInputTransformer);

    daffCartAddressFactory = TestBed.inject(DaffCartAddressFactory);
    magentoCartAddressInputFactory = TestBed.inject(MagentoCartAddressInputFactory);

    mockDaffBillingAddress = daffCartAddressFactory.create();
    mockMagentoCartAddressInput = magentoCartAddressInputFactory.create();

    cartAddressTransformerSpy.transform.and.returnValue(mockMagentoCartAddressInput);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('transform | transforming a shipping address input', () => {
    let transformedBillingAddress;

    describe('when id is set', () => {
      let addressId: MagentoBillingAddressInput['customer_address_id'];

      beforeEach(() => {
        addressId = 15;

        mockDaffBillingAddress.id = String(addressId);

        transformedBillingAddress = service.transform(mockDaffBillingAddress);
      });

      it('should return an object with the correct customer_address_id', () => {
        expect(transformedBillingAddress.customer_address_id).toEqual(addressId);
      });

      it('should return an object without the address field set', () => {
        expect(transformedBillingAddress.address).toBeFalsy();
      });
    });

    describe('when id is not set', () => {
      beforeEach(() => {
        mockDaffBillingAddress.id = null;

        transformedBillingAddress = service.transform(mockDaffBillingAddress);
      });

      it('should call the cart address transformer with the address', () => {
        expect(cartAddressTransformerSpy.transform).toHaveBeenCalledWith(mockDaffBillingAddress);
      });

      it('should return an object without the customer_address_id field set', () => {
        expect(transformedBillingAddress.customer_address_id).toBeFalsy();
      });
    });
  });
});
