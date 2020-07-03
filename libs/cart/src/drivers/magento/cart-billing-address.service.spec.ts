import { TestBed } from '@angular/core/testing';
import { ApolloTestingController, ApolloTestingModule, APOLLO_TESTING_CACHE } from 'apollo-angular/testing';
import { addTypenameToDocument } from 'apollo-utilities';
import { InMemoryCache, IntrospectionFragmentMatcher } from 'apollo-cache-inmemory';

import { schema } from '@daffodil/driver/magento';
import {
  DaffCart,
  DaffCartAddress
} from '@daffodil/cart';
import {
  MagentoCartFactory,
  DaffCartFactory,
  MagentoCartAddressFactory,
  DaffCartAddressFactory
} from '@daffodil/cart/testing';

import { DaffMagentoCartBillingAddressService } from './cart-billing-address.service';
import { DaffMagentoCartTransformer } from './transforms/outputs/cart.service';
import { MagentoCart } from './models/outputs/cart';
import { MagentoGetBillingAddressResponse } from './models/responses/get-billing-address';
import { getBillingAddress, updateBillingAddress } from './queries/public_api';
import { MagentoUpdateBillingAddressResponse } from './models/responses/update-billing-address';
import { DaffMagentoBillingAddressTransformer } from './transforms/outputs/billing-address.service';
import { DaffMagentoBillingAddressInputTransformer } from './transforms/inputs/billing-address.service';
import { MagentoCartAddress } from './models/outputs/cart-address';

describe('Driver | Magento | Cart | CartBillingAddressService', () => {
  let service: DaffMagentoCartBillingAddressService;
  let controller: ApolloTestingController;

  let daffCartFactory: DaffCartFactory;
  let magentoCartFactory: MagentoCartFactory;
  let magentoCartAddressFactory: MagentoCartAddressFactory;
  let daffCartAddressFactory: DaffCartAddressFactory;

  let magentoCartTransformerSpy;
  let magentoBillingAddressTransformerSpy;
  let magentoBillingAddressInputTransformerSpy;

  let cartId;
  let email;
  let mockDaffCart: DaffCart;
  let mockMagentoCart: MagentoCart;
  let mockMagentoBillingAddress: MagentoCartAddress;
  let mockDaffCartAddress: DaffCartAddress;
  let mockUpdateBillingAddressResponse: MagentoUpdateBillingAddressResponse;
  let mockGetBillingAddressResponse: MagentoGetBillingAddressResponse;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        ApolloTestingModule
      ],
      providers: [
        DaffMagentoCartBillingAddressService,
        {
          provide: DaffMagentoCartTransformer,
          useValue: jasmine.createSpyObj('DaffMagentoCartTransformer', ['transform'])
        },
        {
          provide: DaffMagentoBillingAddressTransformer,
          useValue: jasmine.createSpyObj('DaffMagentoBillingAddressTransformer', ['transform'])
        },
        {
          provide: DaffMagentoBillingAddressInputTransformer,
          useValue: jasmine.createSpyObj('DaffMagentoBillingAddressInputTransformer', ['transform'])
        },
				{
					provide: APOLLO_TESTING_CACHE,
					useValue: new InMemoryCache({
						addTypename: true,
						fragmentMatcher: new IntrospectionFragmentMatcher({
							introspectionQueryResultData: schema,
						}),
					}),
				}
      ]
    });

    service = TestBed.get(DaffMagentoCartBillingAddressService);
    controller = TestBed.get(ApolloTestingController);

    magentoCartTransformerSpy = TestBed.get(DaffMagentoCartTransformer);
    magentoBillingAddressTransformerSpy = TestBed.get(DaffMagentoBillingAddressTransformer);
    magentoBillingAddressInputTransformerSpy = TestBed.get(DaffMagentoBillingAddressInputTransformer);

    daffCartFactory = TestBed.get(DaffCartFactory);
    magentoCartFactory = TestBed.get(MagentoCartFactory);
    magentoCartAddressFactory = TestBed.get(MagentoCartAddressFactory);
    daffCartAddressFactory = TestBed.get(DaffCartAddressFactory);

    mockDaffCart = daffCartFactory.create();
    mockMagentoCart = magentoCartFactory.create();
    mockMagentoBillingAddress = magentoCartAddressFactory.create();
    mockDaffCartAddress = daffCartAddressFactory.create();

    cartId = mockDaffCart.id;
    email = mockMagentoBillingAddress.email;
    mockMagentoCart.email = email;
    mockMagentoCart.billing_address = mockMagentoBillingAddress;
    mockDaffCartAddress.email = email;
    mockDaffCart.billing_address = mockDaffCartAddress;
    mockGetBillingAddressResponse = {
      cart: {
				__typename: 'Cart',
        billing_address: mockMagentoBillingAddress,
        email
      }
    };
    mockUpdateBillingAddressResponse = {
      setBillingAddressOnCart: {
				__typename: 'SetBillingAddressOnCart',
        cart: mockMagentoCart
      },
      setGuestEmailOnCart: {
        cart: {
          email
        }
      }
    };

    magentoCartTransformerSpy.transform.and.returnValue(mockDaffCart);
    magentoBillingAddressTransformerSpy.transform.and.returnValue(mockDaffCartAddress)
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('get | getting the billing address', () => {
    it('should call the transformer with the correct argument', done => {
      service.get(cartId).subscribe(() => {
        expect(magentoBillingAddressTransformerSpy.transform).toHaveBeenCalledWith(jasmine.objectContaining(mockMagentoBillingAddress));
        done();
      });

      const op = controller.expectOne(addTypenameToDocument(getBillingAddress));

      op.flush({
        data: mockGetBillingAddressResponse
      });
    });

    it('should return the correct value', done => {
      service.get(cartId).subscribe(result => {
        expect(result).toEqual(jasmine.objectContaining(mockDaffCartAddress));
        done();
      });

      const op = controller.expectOne(addTypenameToDocument(getBillingAddress));

      op.flush({
        data: mockGetBillingAddressResponse
      });
    });

    describe('when the response is null', () => {
      beforeEach(() => {
        mockGetBillingAddressResponse.cart.billing_address = null;
      });

      it('should return null and not throw', done => {
        service.get(cartId).subscribe(result => {
          expect(result).toBeNull();
          done();
        });

        const op = controller.expectOne(addTypenameToDocument(getBillingAddress));

        op.flush({
          data: mockGetBillingAddressResponse
        });
      });
    });

    afterEach(() => {
      controller.verify();
    });
  });

  describe('update | updates the cart\'s billing address', () => {
    let street;

    beforeEach(() => {
      street = 'updatedStreet';

      mockMagentoBillingAddress.street = [street];
      mockDaffCartAddress.street = street;
    });

    it('should return the correct value', done => {
      service.update(cartId, mockDaffCartAddress).subscribe(result => {
        expect(result.billing_address.street).toEqual(street);
        expect(result.billing_address.email).toEqual(email);
        done();
      });

      const op = controller.expectOne(addTypenameToDocument(updateBillingAddress));

      op.flush({
        data: mockUpdateBillingAddressResponse
      });
    });

    afterEach(() => {
      controller.verify();
    });
  });
});
