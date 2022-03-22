import { TestBed } from '@angular/core/testing';
import { InMemoryCache } from '@apollo/client/core';
import { addTypenameToDocument } from '@apollo/client/utilities';
import {
  ApolloTestingController,
  ApolloTestingModule,
  APOLLO_TESTING_CACHE,
} from '@damienwebdev/apollo-angular/testing';
import { GraphQLError } from 'graphql';
import { catchError } from 'rxjs/operators';

import {
  DaffCart,
  DaffCartAddress,
} from '@daffodil/cart';
import { DaffCartDriverErrorCodes } from '@daffodil/cart/driver';
import {
  MagentoCart,
  MagentoUpdateAddressResponse,
  MagentoUpdateAddressWithEmailResponse,
  MagentoShippingAddress,
  MagentoShippingAddressInput,
  DaffMagentoCartTransformer,
  DaffMagentoCartAddressInputTransformer,
  updateAddress,
  updateAddressWithEmail,
} from '@daffodil/cart/driver/magento';
import {
  MagentoCartFactory,
  MagentoCartAddressInputFactory,
  MagentoShippingAddressFactory,
} from '@daffodil/cart/driver/magento/testing';
import {
  DaffCartFactory,
  DaffCartAddressFactory,
} from '@daffodil/cart/testing';
import { DaffError } from '@daffodil/core';
import { schema } from '@daffodil/driver/magento';

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
        ApolloTestingModule,
      ],
      providers: [
        DaffMagentoCartAddressService,
        {
          provide: DaffMagentoCartTransformer,
          useValue: jasmine.createSpyObj('DaffMagentoCartTransformer', ['transform']),
        },
        {
          provide: DaffMagentoCartAddressInputTransformer,
          useValue: jasmine.createSpyObj('DaffMagentoCartAddressInputTransformer', ['transform']),
        },
        {
          provide: APOLLO_TESTING_CACHE,
          useValue: new InMemoryCache({
            addTypename: true,
            possibleTypes: schema.possibleTypes,
          }),
        },
      ],
    });

    service = TestBed.inject(DaffMagentoCartAddressService);
    controller = TestBed.inject(ApolloTestingController);

    magentoCartTransformerSpy = TestBed.inject(DaffMagentoCartTransformer);
    magentoCartAddressInputTransformerSpy = TestBed.inject(DaffMagentoCartAddressInputTransformer);

    daffCartFactory = TestBed.inject(DaffCartFactory);
    magentoCartFactory = TestBed.inject(MagentoCartFactory);
    daffCartAddressFactory = TestBed.inject(DaffCartAddressFactory);
    magentoShippingAddressFactory = TestBed.inject(MagentoShippingAddressFactory);
    magentoCartAddressInputFactory = TestBed.inject(MagentoCartAddressInputFactory);

    mockDaffCart = daffCartFactory.create();
    mockMagentoCart = magentoCartFactory.create();
    mockMagentoShippingAddress = magentoShippingAddressFactory.create();
    magentoShippingAddressFactory = TestBed.inject(MagentoShippingAddressFactory);
    mockDaffCartAddress = daffCartAddressFactory.create();
    mockMagentoShippingAddressInput = {
      address: magentoCartAddressInputFactory.create(),
    };

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
          __typename: 'Cart',
          id: cartId,
        },
      },
      setShippingAddressesOnCart: {
        __typename: 'SetShippingAddresses',
        cart: mockMagentoCart,
      },
    };
    mockUpdateAddressWithEmailResponse = {
      setBillingAddressOnCart: {
        __typename: 'SetBillingAddressOnCart',
        cart: {
          __typename: 'Cart',
          id: cartId,
        },
      },
      setShippingAddressesOnCart: {
        __typename: 'SetShippingAddresses',
        cart: {
          __typename: 'Cart',
          id: cartId,
        },
      },
      setGuestEmailOnCart: {
        __typename: 'setGuestEmailOnCart',
        cart: mockMagentoCart,
      },
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
            data: mockUpdateAddressWithEmailResponse,
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
            data: mockUpdateAddressResponse,
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
          }),
        ).subscribe();

        const op = controller.expectOne(addTypenameToDocument(updateAddressWithEmail([])));

        op.graphqlErrors([new GraphQLError(
          'Can\'t find a cart with that ID.',
          null,
          null,
          null,
          null,
          null,
          { category: 'graphql-no-such-entity' },
        )]);
      });

      describe('because the email is invalid', () => {
        it('should throw an invalid email error', done => {
          service.update(cartId, mockDaffCartAddress).pipe(
            catchError((err: DaffError) => {
              expect(err.code).toEqual(DaffCartDriverErrorCodes.INVALID_EMAIL);
              done();
              return [];
            }),
          ).subscribe();

          const op = controller.expectOne(addTypenameToDocument(updateAddressWithEmail([])));

          op.graphqlErrors([new GraphQLError(
            'Invalid email format',
            null,
            null,
            null,
            null,
            null,
            { category: 'graphql-input' },
          )]);
        });
      });
    });

    afterEach(() => {
      controller.verify();
    });
  });
});
