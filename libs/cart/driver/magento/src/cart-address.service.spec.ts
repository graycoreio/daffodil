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
} from '@daffodil/cart';
import {
  MagentoCart,
  updateAddress,
  updateAddressWithEmail,
  MagentoUpdateAddressResponse,
  MagentoUpdateAddressWithEmailResponse,
  MagentoShippingAddress,
  MagentoShippingAddressInput,
  DaffMagentoCartTransformer,
  DaffMagentoCartAddressInputTransformer,
} from '@daffodil/cart/driver/magento';
import {
  MagentoCartFactory,
  MagentoCartAddressInputFactory,
  MagentoShippingAddressFactory
} from '@daffodil/cart/driver/magento/testing';
import { DaffCartFactory, DaffCartAddressFactory } from '@daffodil/cart/testing';

import { DaffMagentoCartAddressService } from './cart-address.service';

describe('Driver | Magento | Cart | CartAddressService', () => {
  let service: DaffMagentoCartAddressService;
  let controller: ApolloTestingController;

  let daffCartFactory: DaffCartFactory;
  let magentoCartFactory: MagentoCartFactory;
  let magentoShippingAddressFactory: MagentoShippingAddressFactory;
  let daffCartAddressFactory: DaffCartAddressFactory;
  let magentoCartAddressInputFactory: MagentoCartAddressInputFactory;

  let magentoCartTransformerSpy;
  let magentoCartAddressInputTransformerSpy;

  let cartId;
  let email;
  let mockDaffCart: DaffCart;
  let mockMagentoCart: MagentoCart;
  let mockMagentoShippingAddress: MagentoShippingAddress;
  let mockDaffCartAddress: DaffCartAddress;
  let mockMagentoShippingAddressInput: MagentoShippingAddressInput;
  let mockUpdateAddressResponse: MagentoUpdateAddressResponse;
  let mockUpdateAddressWithEmailResponse: MagentoUpdateAddressWithEmailResponse;

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
          provide: DaffMagentoCartAddressInputTransformer,
          useValue: jasmine.createSpyObj('DaffMagentoCartAddressInputTransformer', ['transform'])
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
    magentoCartAddressInputTransformerSpy = TestBed.get(DaffMagentoCartAddressInputTransformer);

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
        cart: {
          id: cartId
        }
      },
      setShippingAddressesOnCart: {
        __typename: 'SetShippingAddresses',
        cart: mockMagentoCart
      },
    };
    mockUpdateAddressWithEmailResponse = {
      setBillingAddressOnCart: {
				__typename: 'SetBillingAddressOnCart',
        cart: {
          id: cartId
        }
      },
      setShippingAddressesOnCart: {
        __typename: 'SetShippingAddresses',
        cart: {
          id: cartId
        }
      },
      setGuestEmailOnCart: {
        __typename: 'setGuestEmailOnCart',
        cart: mockMagentoCart
      }
    };

    magentoCartTransformerSpy.transform.and.returnValue(mockDaffCart);
    magentoCartAddressInputTransformerSpy.transform.withArgs(mockDaffCartAddress).and.returnValue(mockMagentoShippingAddressInput);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('update | updates the cart\'s email, billing, and shipping address', () => {
    describe('when the call to the Magento API is successful', () => {
      describe('when the email is included', () => {
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

          const op = controller.expectOne(addTypenameToDocument(updateAddressWithEmail([])));

          op.flush({
            data: mockUpdateAddressWithEmailResponse
          });
        });
      });

      describe('when the email is not included', () => {
        let street;

        beforeEach(() => {
          street = 'updatedStreet';

          mockMagentoShippingAddress.street = [street];
          mockDaffCartAddress.street = street;
          mockDaffCartAddress.email = null;
        });

        it('should return the correct value', done => {
          service.update(cartId, mockDaffCartAddress).subscribe(result => {
            expect(result.billing_address.street).toEqual(street);
            expect(result.shipping_address.street).toEqual(street);
            done();
          });

          const op = controller.expectOne(addTypenameToDocument(updateAddress([])));

          op.flush({
            data: mockUpdateAddressResponse
          });
        });
      });
    });

    describe('when the call to the Magento API is unsuccessful', () => {
      it('should throw an Error', done => {
        service.update(cartId, mockDaffCartAddress).pipe(
          catchError(err => {
            expect(err).toEqual(jasmine.any(Error));
            done();
            return [];
          })
        ).subscribe();

        const op = controller.expectOne(addTypenameToDocument(updateAddressWithEmail([])));

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
