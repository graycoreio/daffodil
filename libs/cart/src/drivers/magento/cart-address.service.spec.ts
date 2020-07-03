import { TestBed } from '@angular/core/testing';
import { ApolloTestingController, ApolloTestingModule, APOLLO_TESTING_CACHE } from 'apollo-angular/testing';
import { addTypenameToDocument } from 'apollo-utilities';
import { InMemoryCache, IntrospectionFragmentMatcher } from 'apollo-cache-inmemory';
import { catchError } from 'rxjs/operators';
import { GraphQLError } from 'graphql';

import { schema } from '@daffodil/driver/magento';
import {
  DaffCart,
  DaffCartAddress,
  MagentoShippingAddress
} from '@daffodil/cart';
import {
  MagentoCartFactory,
  DaffCartFactory,
  DaffCartAddressFactory,
  MagentoCartAddressInputFactory,
  MagentoShippingAddressFactory
} from '@daffodil/cart/testing';

import {
  updateAddress
} from './queries/public_api';
import {
  MagentoUpdateAddressResponse,
} from './models/responses/public_api';
import { DaffMagentoCartAddressService } from './cart-address.service';
import { DaffMagentoCartTransformer } from './transforms/outputs/cart.service';
import { MagentoCart } from './models/outputs/cart';
import { DaffMagentoShippingAddressInputTransformer } from './transforms/inputs/shipping-address.service';
import { MagentoShippingAddressInput } from './models/inputs/shipping-address';
import { DaffCartNotFoundError } from '../../errors/public_api';

describe('Driver | Magento | Cart | CartAddressService', () => {
  let service: DaffMagentoCartAddressService;
  let controller: ApolloTestingController;

  let daffCartFactory: DaffCartFactory;
  let magentoCartFactory: MagentoCartFactory;
  let magentoShippingAddressFactory: MagentoShippingAddressFactory;
  let daffCartAddressFactory: DaffCartAddressFactory;
  let magentoCartAddressInputFactory: MagentoCartAddressInputFactory;

  let magentoCartTransformerSpy;
  let magentoShippingAddressInputTransformerSpy;

  let cartId;
  let email;
  let mockDaffCart: DaffCart;
  let mockMagentoCart: MagentoCart;
  let mockMagentoShippingAddress: MagentoShippingAddress;
  let mockDaffCartAddress: DaffCartAddress;
  let mockMagentoShippingAddressInput: MagentoShippingAddressInput;
  let mockUpdateAddressResponse: MagentoUpdateAddressResponse;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        ApolloTestingModule
      ],
      providers: [
        DaffMagentoCartAddressService,
        {
          provide: DaffMagentoCartTransformer,
          useValue: jasmine.createSpyObj('DaffMagentoCartTransformer', ['transform'])
        },
        {
          provide: DaffMagentoShippingAddressInputTransformer,
          useValue: jasmine.createSpyObj('DaffMagentoShippingAddressInputTransformer', ['transform'])
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

    service = TestBed.get(DaffMagentoCartAddressService);
    controller = TestBed.get(ApolloTestingController);

    magentoCartTransformerSpy = TestBed.get(DaffMagentoCartTransformer);
    magentoShippingAddressInputTransformerSpy = TestBed.get(DaffMagentoShippingAddressInputTransformer);

    daffCartFactory = TestBed.get(DaffCartFactory);
    magentoCartFactory = TestBed.get(MagentoCartFactory);
    daffCartAddressFactory = TestBed.get(DaffCartAddressFactory);
    magentoShippingAddressFactory = TestBed.get(MagentoShippingAddressFactory);
    magentoCartAddressInputFactory = TestBed.get(MagentoCartAddressInputFactory);

    mockDaffCart = daffCartFactory.create();
    mockMagentoCart = magentoCartFactory.create();
    mockMagentoShippingAddress = magentoShippingAddressFactory.create();
    magentoShippingAddressFactory = TestBed.get(MagentoShippingAddressFactory);
    mockDaffCartAddress = daffCartAddressFactory.create();
    mockMagentoShippingAddressInput = {
      address: magentoCartAddressInputFactory.create()
    }

    cartId = mockDaffCart.id;
    email = mockMagentoShippingAddress.email;
    mockMagentoCart.email = email;
    mockMagentoCart.billing_address = mockMagentoShippingAddress;
    mockMagentoCart.shipping_addresses = [mockMagentoShippingAddress];
    mockDaffCartAddress.email = email;
    mockDaffCart.billing_address = mockDaffCartAddress;
    mockDaffCart.shipping_address = mockDaffCartAddress;
    mockUpdateAddressResponse = {
      setBillingAddressOnCart: {
				__typename: 'SetBillingAddressOnCart',
        cart: mockMagentoCart
      },
      setShippingAddressesOnCart: {
        __typename: 'SetShippingAddresses',
        cart: mockMagentoCart
      },
      setGuestEmailOnCart: {
        cart: {
          email
        }
      }
    };

    magentoCartTransformerSpy.transform.and.returnValue(mockDaffCart);
    magentoShippingAddressInputTransformerSpy.transform.withArgs(mockDaffCartAddress).and.returnValue(mockMagentoShippingAddressInput);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('update | updates the cart\'s email, billing, and shipping address', () => {
    describe('when the call to the Magento API is successful', () => {
      let street;

      beforeEach(() => {
        street = 'updatedStreet';

        mockMagentoShippingAddress.street = [street];
        mockDaffCartAddress.street = street;
      });

      it('should return the correct value', done => {
        service.update(cartId, mockDaffCartAddress).subscribe(result => {
          expect(result.billing_address.street).toEqual(street);
          expect(result.shipping_address.street).toEqual(street);
          expect(result.billing_address.email).toEqual(email);
          expect(result.shipping_address.email).toEqual(email);
          done();
        });

        const op = controller.expectOne(addTypenameToDocument(updateAddress));

        op.flush({
          data: mockUpdateAddressResponse
        });
      });
    });

    describe('when the call to the Magento API is unsuccessful', () => {
      it('should throw a DaffCartNotFoundError', done => {
        service.update(cartId, mockDaffCartAddress).pipe(
          catchError(err => {
            expect(err).toEqual(jasmine.any(DaffCartNotFoundError));
            done();
            return [];
          })
        ).subscribe();

        const op = controller.expectOne(addTypenameToDocument(updateAddress));

        op.graphqlErrors([new GraphQLError(
          'Can\'t find a cart with that ID.',
          null,
          null,
          null,
          null,
          null,
          {category: 'graphql-no-such-entity'}
        )]);
      });
    });

    afterEach(() => {
      controller.verify();
    });
  });
});
