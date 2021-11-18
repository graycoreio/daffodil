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
  MagentoCartAddress,
  MagentoUpdateBillingAddressResponse,
  MagentoUpdateBillingAddressWithEmailResponse,
  MagentoGetBillingAddressResponse,
  DaffMagentoCartTransformer,
  DaffMagentoBillingAddressTransformer,
  DaffMagentoBillingAddressInputTransformer,
  getBillingAddress,
  updateBillingAddressWithEmail,
  updateBillingAddress,
} from '@daffodil/cart/driver/magento';
import {
  MagentoCartFactory,
  MagentoCartAddressFactory,
} from '@daffodil/cart/driver/magento/testing';
import {
  DaffCartFactory,
  DaffCartAddressFactory,
} from '@daffodil/cart/testing';
import { DaffError } from '@daffodil/core';
import { schema } from '@daffodil/driver/magento';

import { DaffMagentoCartBillingAddressService } from './cart-billing-address.service';

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
  let mockUpdateBillingAddressWithEmailResponse: MagentoUpdateBillingAddressWithEmailResponse;
  let mockGetBillingAddressResponse: MagentoGetBillingAddressResponse;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        ApolloTestingModule,
      ],
      providers: [
        DaffMagentoCartBillingAddressService,
        {
          provide: DaffMagentoCartTransformer,
          useValue: jasmine.createSpyObj('DaffMagentoCartTransformer', ['transform']),
        },
        {
          provide: DaffMagentoBillingAddressTransformer,
          useValue: jasmine.createSpyObj('DaffMagentoBillingAddressTransformer', ['transform']),
        },
        {
          provide: DaffMagentoBillingAddressInputTransformer,
          useValue: jasmine.createSpyObj('DaffMagentoBillingAddressInputTransformer', ['transform']),
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

    service = TestBed.inject(DaffMagentoCartBillingAddressService);
    controller = TestBed.inject(ApolloTestingController);

    magentoCartTransformerSpy = TestBed.inject(DaffMagentoCartTransformer);
    magentoBillingAddressTransformerSpy = TestBed.inject(DaffMagentoBillingAddressTransformer);
    magentoBillingAddressInputTransformerSpy = TestBed.inject(DaffMagentoBillingAddressInputTransformer);

    daffCartFactory = TestBed.inject(DaffCartFactory);
    magentoCartFactory = TestBed.inject(MagentoCartFactory);
    magentoCartAddressFactory = TestBed.inject(MagentoCartAddressFactory);
    daffCartAddressFactory = TestBed.inject(DaffCartAddressFactory);

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
        email,
      },
    };
    mockUpdateBillingAddressWithEmailResponse = {
      setBillingAddressOnCart: {
        __typename: 'SetBillingAddressOnCart',
        cart: mockMagentoCart,
      },
      setGuestEmailOnCart: {
        __typename: 'SetGuestEmailOnCart',
        cart: {
          __typename: 'Cart',
          email,
        },
      },
    };
    mockUpdateBillingAddressResponse = {
      setBillingAddressOnCart: {
        __typename: 'SetBillingAddressOnCart',
        cart: mockMagentoCart,
      },
    };

    magentoCartTransformerSpy.transform.and.returnValue(mockDaffCart);
    magentoBillingAddressTransformerSpy.transform.and.returnValue(mockDaffCartAddress);
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

      const op = controller.expectOne(addTypenameToDocument(getBillingAddress([])));

      op.flush({
        data: mockGetBillingAddressResponse,
      });
    });

    it('should return the correct value', done => {
      service.get(cartId).subscribe(result => {
        expect(result).toEqual(jasmine.objectContaining(mockDaffCartAddress));
        done();
      });

      const op = controller.expectOne(addTypenameToDocument(getBillingAddress([])));

      op.flush({
        data: mockGetBillingAddressResponse,
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

        const op = controller.expectOne(addTypenameToDocument(getBillingAddress([])));

        op.flush({
          data: mockGetBillingAddressResponse,
        });
      });
    });

    afterEach(() => {
      controller.verify();
    });
  });

  describe('update | updates the cart\'s email and billing address', () => {
    describe('when the call to the Magento API is unsuccessful', () => {
      it('should throw an Error', done => {
        service.update(cartId, mockDaffCartAddress).pipe(
          catchError(err => {
            expect(err).toEqual(jasmine.any(Error));
            done();
            return [];
          }),
        ).subscribe();

        const op = controller.expectOne(addTypenameToDocument(updateBillingAddressWithEmail([])));

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

          const op = controller.expectOne(addTypenameToDocument(updateBillingAddressWithEmail([])));

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

          mockMagentoBillingAddress.street = [street];
          mockDaffCartAddress.street = street;
        });

        it('should return the correct value', done => {
          service.update(cartId, mockDaffCartAddress).subscribe(result => {
            expect(result.billing_address.street).toEqual(street);
            expect(result.billing_address.email).toEqual(email);
            done();
          });

          const op = controller.expectOne(addTypenameToDocument(updateBillingAddressWithEmail([])));

          op.flush({
            data: mockUpdateBillingAddressWithEmailResponse,
          });
        });
      });

      describe('when the email is not included', () => {
        let street;

        beforeEach(() => {
          street = 'updatedStreet';

          mockMagentoBillingAddress.street = [street];
          mockDaffCartAddress.street = street;
          mockDaffCartAddress.email = null;
        });

        it('should return the correct value', done => {
          service.update(cartId, mockDaffCartAddress).subscribe(result => {
            expect(result.billing_address.street).toEqual(street);
            done();
          });

          const op = controller.expectOne(addTypenameToDocument(updateBillingAddress([])));

          op.flush({
            data: mockUpdateBillingAddressResponse,
          });
        });
      });
    });

    afterEach(() => {
      controller.verify();
    });
  });
});
