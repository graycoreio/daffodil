import { TestBed } from '@angular/core/testing';
import { ApolloTestingController, ApolloTestingModule } from 'apollo-angular/testing';

import {
  DaffCart,
  DaffCartAddress
} from '@daffodil/cart';
import {
  MagentoCartFactory,
  DaffCartFactory,
  MagentoShippingAddressFactory,
  DaffCartAddressFactory,
  MagentoCartAddressInputFactory
} from '@daffodil/cart/testing';

import { DaffMagentoCartShippingAddressService } from './cart-shipping-address.service';
import { DaffMagentoCartTransformer } from './transforms/outputs/cart.service';
import { MagentoCart } from './models/outputs/cart';
import { MagentoGetShippingAddressResponse } from './models/responses/get-shipping-address';
import { getShippingAddress, updateShippingAddress } from './queries';
import { MagentoUpdateShippingAddressResponse } from './models/responses/update-shipping-address';
import { DaffMagentoShippingAddressTransformer } from './transforms/outputs/shipping-address.service';
import { DaffMagentoShippingAddressInputTransformer } from './transforms/inputs/shipping-address.service';
import { MagentoShippingAddress } from './models/outputs/shipping-address';
import { MagentoShippingAddressInput } from './models/inputs/shipping-address';

describe('Driver | Magento | Cart | CartShippingAddressService', () => {
  let service: DaffMagentoCartShippingAddressService;
  let controller: ApolloTestingController;

  let daffCartFactory: DaffCartFactory;
  let magentoCartFactory: MagentoCartFactory;
  let magentoShippingAddressFactory: MagentoShippingAddressFactory;
  let magentoCartAddressInputFactory: MagentoCartAddressInputFactory;
  let daffCartAddressFactory: DaffCartAddressFactory;

  let magentoCartTransformerSpy;
  let magentoShippingAddressTransformerSpy;
  let magentoShippingAddressInputTransformerSpy;

  let cartId;
  let email;
  let mockDaffCart: DaffCart;
  let mockMagentoCart: MagentoCart;
  let mockMagentoShippingAddress: MagentoShippingAddress;
  let mockMagentoShippingAddressInput: MagentoShippingAddressInput;
  let mockDaffCartAddress: DaffCartAddress;
  let mockUpdateShippingAddressResponse: MagentoUpdateShippingAddressResponse;
  let mockGetShippingAddressResponse: MagentoGetShippingAddressResponse;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        ApolloTestingModule
      ],
      providers: [
        DaffMagentoCartShippingAddressService,
        {
          provide: DaffMagentoCartTransformer,
          useValue: jasmine.createSpyObj('DaffMagentoCartTransformer', ['transform'])
        },
        {
          provide: DaffMagentoShippingAddressTransformer,
          useValue: jasmine.createSpyObj('DaffMagentoShippingAddressTransformer', ['transform'])
        },
        {
          provide: DaffMagentoShippingAddressInputTransformer,
          useValue: jasmine.createSpyObj('DaffMagentoShippingAddressInputTransformer', ['transform'])
        },
      ]
    });

    service = TestBed.get(DaffMagentoCartShippingAddressService);
    controller = TestBed.get(ApolloTestingController);

    magentoCartTransformerSpy = TestBed.get(DaffMagentoCartTransformer);
    magentoShippingAddressTransformerSpy = TestBed.get(DaffMagentoShippingAddressTransformer);
    magentoShippingAddressInputTransformerSpy = TestBed.get(DaffMagentoShippingAddressInputTransformer);

    daffCartFactory = TestBed.get(DaffCartFactory);
    magentoCartFactory = TestBed.get(MagentoCartFactory);
    magentoShippingAddressFactory = TestBed.get(MagentoShippingAddressFactory);
    daffCartAddressFactory = TestBed.get(DaffCartAddressFactory);
    magentoCartAddressInputFactory = TestBed.get(MagentoCartAddressInputFactory);

    mockDaffCart = daffCartFactory.create();
    mockMagentoCart = magentoCartFactory.create();
    mockMagentoShippingAddress = magentoShippingAddressFactory.create();
    mockDaffCartAddress = daffCartAddressFactory.create();
    mockMagentoShippingAddressInput = {
      address: magentoCartAddressInputFactory.create()
    }

    cartId = mockDaffCart.id;
    email = mockMagentoShippingAddress.email;
    mockMagentoCart.email = email;
    mockDaffCartAddress.email = email;
    mockDaffCart.shipping_address = mockDaffCartAddress;
    mockGetShippingAddressResponse = {
      cart: {
        shipping_addresses: [mockMagentoShippingAddress],
        email
      }
    };
    mockUpdateShippingAddressResponse = {
      setShippingAddressesOnCart: {
        cart: mockMagentoCart
      }
    };

    magentoCartTransformerSpy.transform.withArgs(mockMagentoCart).and.returnValue(mockDaffCart);
    magentoShippingAddressTransformerSpy.transform.and.returnValue(mockDaffCartAddress);
    magentoShippingAddressInputTransformerSpy.transform.withArgs(mockDaffCartAddress).and.returnValue(mockMagentoShippingAddressInput);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('get | getting the shipping address', () => {
    it('should call the transformer with the correct argument', done => {
      service.get(cartId).subscribe(() => {
        // can't check for all args because available_shipping_methods and selected_shipping_method are stripped out of the mock response by apollo
        expect(magentoShippingAddressTransformerSpy.transform).toHaveBeenCalledWith(jasmine.objectContaining({
          email,
          street: mockMagentoShippingAddress.street,
          region: mockMagentoShippingAddress.region,
        }));
        done();
      });

      const op = controller.expectOne(getShippingAddress);

      op.flush({
        data: mockGetShippingAddressResponse
      });
    });

    it('should return the correct value', done => {
      service.get(cartId).subscribe(result => {
        expect(result).toEqual(jasmine.objectContaining(mockDaffCartAddress));
        done();
      });

      const op = controller.expectOne(getShippingAddress);

      op.flush({
        data: mockGetShippingAddressResponse
      });
    });

    describe('when the response is an empty array', () => {
      beforeEach(() => {
        mockGetShippingAddressResponse.cart.shipping_addresses = [];
      });

      it('should return null and not throw', done => {
        service.get(cartId).subscribe(result => {
          expect(result).toBeNull();
          done();
        });

        const op = controller.expectOne(getShippingAddress);

        op.flush({
          data: mockGetShippingAddressResponse
        });
      });
    });

    afterEach(() => {
      controller.verify();
    });
  });

  describe('update | updates the cart\'s shipping address', () => {
    let street;

    beforeEach(() => {
      street = 'updatedStreet';

      mockMagentoShippingAddress.street = [street];
      mockDaffCartAddress.street = street;
    });

    it('should return the correct value', done => {
      service.update(cartId, mockDaffCartAddress).subscribe(result => {
        expect(result.shipping_address.street).toEqual(street);
        done();
      });

      const op = controller.expectOne(updateShippingAddress);

      op.flush({
        data: mockUpdateShippingAddressResponse
      });
    });

    afterEach(() => {
      controller.verify();
    });
  });
});
