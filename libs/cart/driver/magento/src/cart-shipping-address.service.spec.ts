import { TestBed } from '@angular/core/testing';
import { InMemoryCache } from '@apollo/client/core';
import { addTypenameToDocument } from '@apollo/client/utilities';
import {
  ApolloTestingController,
  ApolloTestingModule,
  APOLLO_TESTING_CACHE,
} from 'apollo-angular/testing';
import { GraphQLError } from 'graphql';
import { catchError } from 'rxjs/operators';

import {
  DaffCart,
  DaffCartAddress,
} from '@daffodil/cart';
import { DaffCartDriverErrorCodes } from '@daffodil/cart/driver';
import {
  MagentoCart,
  MagentoShippingAddress,
  MagentoShippingAddressInput,
  MagentoUpdateShippingAddressResponse,
  MagentoUpdateShippingAddressWithEmailResponse,
  MagentoGetShippingAddressResponse,
  DaffMagentoCartTransformer,
  DaffMagentoShippingAddressTransformer,
  DaffMagentoShippingAddressInputTransformer,
  getShippingAddress,
  updateShippingAddressWithEmail,
  updateShippingAddress,
} from '@daffodil/cart/driver/magento';
import {
  MagentoCartFactory,
  MagentoShippingAddressFactory,
  MagentoCartAddressInputFactory,
} from '@daffodil/cart/driver/magento/testing';
import {
  DaffCartFactory,
  DaffCartAddressFactory,
} from '@daffodil/cart/testing';
import { DaffError } from '@daffodil/core';
import { schema } from '@daffodil/driver/magento';

import { DaffMagentoCartShippingAddressService } from './cart-shipping-address.service';

describe('@daffodil/cart/driver/magento | DaffMagentoCartShippingAddressService', () => {
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
  let mockUpdateShippingAddressWithEmailResponse: MagentoUpdateShippingAddressWithEmailResponse;
  let mockGetShippingAddressResponse: MagentoGetShippingAddressResponse;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        ApolloTestingModule,
      ],
      providers: [
        DaffMagentoCartShippingAddressService,
        {
          provide: DaffMagentoCartTransformer,
          useValue: jasmine.createSpyObj('DaffMagentoCartTransformer', ['transform']),
        },
        {
          provide: DaffMagentoShippingAddressTransformer,
          useValue: jasmine.createSpyObj('DaffMagentoShippingAddressTransformer', ['transform']),
        },
        {
          provide: DaffMagentoShippingAddressInputTransformer,
          useValue: jasmine.createSpyObj('DaffMagentoShippingAddressInputTransformer', ['transform']),
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

    service = TestBed.inject(DaffMagentoCartShippingAddressService);
    controller = TestBed.inject(ApolloTestingController);

    magentoCartTransformerSpy = TestBed.inject(DaffMagentoCartTransformer);
    magentoShippingAddressTransformerSpy = TestBed.inject(DaffMagentoShippingAddressTransformer);
    magentoShippingAddressInputTransformerSpy = TestBed.inject(DaffMagentoShippingAddressInputTransformer);

    daffCartFactory = TestBed.inject(DaffCartFactory);
    magentoCartFactory = TestBed.inject(MagentoCartFactory);
    magentoShippingAddressFactory = TestBed.inject(MagentoShippingAddressFactory);
    daffCartAddressFactory = TestBed.inject(DaffCartAddressFactory);
    magentoCartAddressInputFactory = TestBed.inject(MagentoCartAddressInputFactory);

    mockDaffCart = daffCartFactory.create();
    mockMagentoCart = magentoCartFactory.create();
    mockMagentoShippingAddress = magentoShippingAddressFactory.create();
    mockDaffCartAddress = daffCartAddressFactory.create();
    mockMagentoShippingAddressInput = {
      address: magentoCartAddressInputFactory.create(),
    };

    cartId = mockDaffCart.id;
    email = mockMagentoShippingAddress.email;
    mockMagentoCart.email = email;
    mockDaffCartAddress.email = email;
    mockDaffCart.shipping_address = mockDaffCartAddress;
    mockGetShippingAddressResponse = {
      cart: {
        __typename: 'Cart',
        shipping_addresses: [mockMagentoShippingAddress],
        email,
      },
    };
    mockUpdateShippingAddressResponse = {
      setShippingAddressesOnCart: {
        __typename: 'SetShippingAddresses',
        cart: mockMagentoCart,
      },
    };
    mockUpdateShippingAddressWithEmailResponse = {
      setShippingAddressesOnCart: {
        __typename: 'SetShippingAddresses',
        cart: mockMagentoCart,
      },
      setGuestEmailOnCart: {
        __typename: 'Cart',
        cart: {
          __typename: 'Cart',
          email,
        },
      },
    };

    magentoCartTransformerSpy.transform.withArgs(mockMagentoCart).and.returnValue(mockDaffCart);
    magentoShippingAddressTransformerSpy.transform.and.returnValue(mockDaffCartAddress);
    magentoShippingAddressInputTransformerSpy.transform.withArgs(mockDaffCartAddress).and.returnValue(mockMagentoShippingAddressInput);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('get | getting the shipping address', () => {
    describe('when the call to the Magento API is unsuccessful', () => {
      it('should throw an Error', done => {
        service.get(cartId).pipe(
          catchError(err => {
            expect(err).toEqual(jasmine.any(Error));
            done();
            return [];
          }),
        ).subscribe();

        const op = controller.expectOne(addTypenameToDocument(getShippingAddress([])));

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
    });

    it('should call the transformer with the correct argument', done => {
      service.get(cartId).subscribe(() => {
        // can't check for all args because available_shipping_methods and
        // selected_shipping_method are stripped out of the mock response by apollo
        expect(magentoShippingAddressTransformerSpy.transform).toHaveBeenCalledWith(jasmine.objectContaining({
          email,
          street: mockMagentoShippingAddress.street,
          region: mockMagentoShippingAddress.region,
        }));
        done();
      });

      const op = controller.expectOne(addTypenameToDocument(getShippingAddress([])));

      op.flush({
        data: mockGetShippingAddressResponse,
      });
    });

    it('should return the correct value', done => {
      service.get(cartId).subscribe(result => {
        expect(result).toEqual(jasmine.objectContaining(mockDaffCartAddress));
        done();
      });

      const op = controller.expectOne(addTypenameToDocument(getShippingAddress([])));

      op.flush({
        data: mockGetShippingAddressResponse,
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

        const op = controller.expectOne(addTypenameToDocument(getShippingAddress([])));

        op.flush({
          data: mockGetShippingAddressResponse,
        });
      });
    });

    afterEach(() => {
      controller.verify();
    });
  });

  describe('update | updates the cart\'s email and shipping address', () => {
    describe('when the call to the Magento API is unsuccessful', () => {
      it('should throw an Error', done => {
        service.update(cartId, mockDaffCartAddress).pipe(
          catchError(err => {
            expect(err).toEqual(jasmine.any(Error));
            done();
            return [];
          }),
        ).subscribe();

        const op = controller.expectOne(addTypenameToDocument(updateShippingAddressWithEmail([])));

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

          const op = controller.expectOne(addTypenameToDocument(updateShippingAddressWithEmail([])));

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
            expect(result.shipping_address.street).toEqual(street);
            expect(result.shipping_address.email).toEqual(email);
            done();
          });

          const op = controller.expectOne(addTypenameToDocument(updateShippingAddressWithEmail([])));

          op.flush({
            data: mockUpdateShippingAddressWithEmailResponse,
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
            expect(result.shipping_address.street).toEqual(street);
            done();
          });

          const op = controller.expectOne(addTypenameToDocument(updateShippingAddress([])));

          op.flush({
            data: mockUpdateShippingAddressResponse,
          });
        });
      });
    });

    afterEach(() => {
      controller.verify();
    });
  });
});
