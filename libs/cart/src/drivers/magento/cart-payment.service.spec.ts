import { TestBed } from '@angular/core/testing';
import { ApolloTestingController, ApolloTestingModule, APOLLO_TESTING_CACHE } from 'apollo-angular/testing';
import { addTypenameToDocument } from 'apollo-utilities';
import { InMemoryCache, IntrospectionFragmentMatcher } from 'apollo-cache-inmemory';
import { catchError } from 'rxjs/operators';
import { GraphQLError } from 'graphql';

import { schema } from '@daffodil/driver/magento';
import {
  DaffCart,
  DaffCartPaymentMethod,
  DaffCartAddress,
  daffMagentoNoopCartFragment
} from '@daffodil/cart';
import {
  MagentoCartFactory,
  DaffCartFactory,
  DaffCartPaymentFactory,
  MagentoCartPaymentMethodFactory,
  MagentoCartAddressFactory,
  DaffCartAddressFactory,
  MagentoCartAddressInputFactory
} from '@daffodil/cart/testing';

import { DaffMagentoCartPaymentService } from './cart-payment.service';
import {
  MagentoCart,
  MagentoCartAddress,
  MagentoCartPaymentMethod
} from './models/outputs/public_api';
import { MagentoBillingAddressInput } from './models/inputs/billing-address';
import {
  getSelectedPaymentMethod,
  setSelectedPaymentMethod,
  setSelectedPaymentMethodWithBillingAndEmail,
  setSelectedPaymentMethodWithBilling
} from './queries/public_api';
import { DaffMagentoCartTransformer } from './transforms/outputs/cart.service';
import { DaffMagentoCartPaymentTransformer } from './transforms/outputs/cart-payment.service';
import { DaffMagentoPaymentMethodInputTransformer } from './transforms/inputs/payment-method.service';
import { DaffMagentoBillingAddressInputTransformer } from './transforms/inputs/billing-address.service';
import {
  MagentoGetSelectedPaymentMethodResponse,
  MagentoSetSelectedPaymentMethodResponse,
  MagentoSetSelectedPaymentMethodWithBillingResponse,
  MagentoSetSelectedPaymentMethodWithBillingAndEmailResponse
} from './models/responses/public_api';
import { DaffMagentoExtraCartFragments } from './injection-tokens/public_api';

describe('Driver | Magento | Cart | CartPaymentMethodService', () => {
  let service: DaffMagentoCartPaymentService;
  let controller: ApolloTestingController;

  let daffCartFactory: DaffCartFactory;
  let daffCartAddressFactory: DaffCartAddressFactory;
  let daffCartPaymentFactory: DaffCartPaymentFactory;
  let magentoCartFactory: MagentoCartFactory;
  let magentoBillingAddressFactory: MagentoCartAddressFactory;
  let magentoCartAddressInputFactory: MagentoCartAddressInputFactory;
  let magentoPaymentMethodFactory: MagentoCartPaymentMethodFactory;

  let magentoCartTransformerSpy;
  let magentoBillingRateTransformerSpy;
  let magentoPaymentMethodInputTransformerSpy;
  let magentoBillingAddressInputTransformerSpy;

  let cartId;
  let email;

  let mockDaffCart: DaffCart;
  let mockDaffCartAddress: DaffCartAddress;
  let mockDaffCartPaymentMethod: DaffCartPaymentMethod;

  let mockMagentoCart: MagentoCart;
  let mockMagentoCartPaymentMethod: MagentoCartPaymentMethod;
  let mockMagentoBillingAddressInput: MagentoBillingAddressInput;
  let mockMagentoBillingAddress: MagentoCartAddress;

  let mockSetSelectedPaymentMethodResponse: MagentoSetSelectedPaymentMethodResponse;
  let mockSetSelectedPaymentMethodWithBillingResponse: MagentoSetSelectedPaymentMethodWithBillingResponse;
  let mockSetSelectedPaymentMethodWithBillingAndEmailResponse: MagentoSetSelectedPaymentMethodWithBillingAndEmailResponse;
  let mockGetSelectedPaymentMethodResponse: MagentoGetSelectedPaymentMethodResponse;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        ApolloTestingModule
      ],
      providers: [
        DaffMagentoCartPaymentService,
        {
          provide: DaffMagentoCartTransformer,
          useValue: jasmine.createSpyObj('DaffMagentoCartTransformer', ['transform'])
        },
        {
          provide: DaffMagentoCartPaymentTransformer,
          useValue: jasmine.createSpyObj('DaffMagentoCartPaymentTransformer', ['transform'])
        },
        {
          provide: DaffMagentoPaymentMethodInputTransformer,
          useValue: jasmine.createSpyObj('DaffMagentoPaymentMethodInputTransformer', ['transform'])
        },
        {
          provide: DaffMagentoBillingAddressInputTransformer,
          useValue: jasmine.createSpyObj('DaffMagentoBillingAddressInputTransformer', ['transform'])
        },
        {
          provide: DaffMagentoExtraCartFragments,
          useValue: daffMagentoNoopCartFragment,
          multi: true
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

    service = TestBed.get(DaffMagentoCartPaymentService);
    controller = TestBed.get(ApolloTestingController);

    daffCartFactory = TestBed.get(DaffCartFactory);
    daffCartPaymentFactory = TestBed.get(DaffCartPaymentFactory);
    daffCartAddressFactory = TestBed.get(DaffCartAddressFactory);
    magentoCartAddressInputFactory = TestBed.get(MagentoCartAddressInputFactory);
    magentoPaymentMethodFactory = TestBed.get(MagentoCartPaymentMethodFactory);
    magentoCartFactory = TestBed.get(MagentoCartFactory);

    magentoCartTransformerSpy = TestBed.get(DaffMagentoCartTransformer);
    magentoBillingRateTransformerSpy = TestBed.get(DaffMagentoCartPaymentTransformer);
    magentoPaymentMethodInputTransformerSpy = TestBed.get(DaffMagentoPaymentMethodInputTransformer);
    magentoBillingAddressInputTransformerSpy = TestBed.get(DaffMagentoBillingAddressInputTransformer);
    magentoBillingAddressFactory = TestBed.get(MagentoCartAddressFactory);

    mockDaffCart = daffCartFactory.create();
    mockDaffCartAddress = daffCartAddressFactory.create();
    mockDaffCartPaymentMethod = daffCartPaymentFactory.create();
    mockMagentoCart = magentoCartFactory.create();
    mockMagentoCartPaymentMethod = {
      ...magentoPaymentMethodFactory.create(),
      __typename: 'SelectedPaymentMethod'
    };
    mockMagentoBillingAddress = magentoBillingAddressFactory.create();
    mockMagentoBillingAddressInput = {
      address: magentoCartAddressInputFactory.create()
    }

    cartId = mockDaffCart.id;
    email = mockDaffCartAddress.email;
    mockDaffCart.payment = mockDaffCartPaymentMethod;
    mockDaffCart.billing_address = mockDaffCartAddress;
    mockMagentoCart.billing_address = mockMagentoBillingAddress;
    mockMagentoCart.selected_payment_method = mockMagentoCartPaymentMethod;
    mockGetSelectedPaymentMethodResponse = {
      cart: {
				__typename: 'Cart',
        selected_payment_method: mockMagentoCartPaymentMethod
      }
    };
    mockSetSelectedPaymentMethodResponse = {
      setPaymentMethodOnCart: {
				__typename: 'SetPaymentMethod',
        cart: mockMagentoCart
      }
    };
    mockSetSelectedPaymentMethodWithBillingResponse = {
      setPaymentMethodOnCart: {
				__typename: 'SetPaymentMethod',
        cart: mockMagentoCart
      },
      setBillingAddressOnCart: {
				__typename: 'SetBillingAddressOnCart',
        cart: mockMagentoCart
      },
    };
    mockSetSelectedPaymentMethodWithBillingAndEmailResponse = {
      setPaymentMethodOnCart: {
				__typename: 'SetPaymentMethod',
        cart: mockMagentoCart
      },
      setBillingAddressOnCart: {
				__typename: 'SetBillingAddressOnCart',
        cart: mockMagentoCart
      },
      setGuestEmailOnCart: {
				__typename: 'SetGuestEmail',
        cart: mockMagentoCart
      }
    };

    magentoCartTransformerSpy.transform.and.returnValue(mockDaffCart);
    magentoBillingRateTransformerSpy.transform.and.returnValue(mockDaffCartPaymentMethod)
    magentoBillingAddressInputTransformerSpy.transform.withArgs(mockDaffCartAddress).and.returnValue(mockMagentoBillingAddressInput);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('get | getting the selected payment method', () => {
    it('should call the transformer with the correct argument', done => {
      service.get(cartId).subscribe(() => {
        expect(magentoBillingRateTransformerSpy.transform).toHaveBeenCalledWith(jasmine.objectContaining(mockMagentoCartPaymentMethod));
        done();
      });

      const op = controller.expectOne(addTypenameToDocument(getSelectedPaymentMethod([daffMagentoNoopCartFragment])));

      op.flush({
        data: mockGetSelectedPaymentMethodResponse
      });
    });

    it('should return the correct value', done => {
      service.get(cartId).subscribe(result => {
        expect(result).toEqual(jasmine.objectContaining(mockDaffCartPaymentMethod));
        done();
      });

      const op = controller.expectOne(addTypenameToDocument(getSelectedPaymentMethod([daffMagentoNoopCartFragment])));

      op.flush({
        data: mockGetSelectedPaymentMethodResponse
      });
    });

    afterEach(() => {
      controller.verify();
    });
  });

  describe('update | updates the cart\'s selected payment method', () => {
    let method;

    beforeEach(() => {
      method = 'method';

      mockMagentoCartPaymentMethod.code = method;
      mockDaffCartPaymentMethod.method = method;
    });

    it('should return the correct value', done => {
      service.update(cartId, mockDaffCartPaymentMethod).subscribe(result => {
        expect(result.payment.method).toEqual(method);
        done();
      });

      const op = controller.expectOne(addTypenameToDocument(setSelectedPaymentMethod([daffMagentoNoopCartFragment])));

      op.flush({
        data: mockSetSelectedPaymentMethodResponse
      });
    });

    afterEach(() => {
      controller.verify();
    });
  });

  describe('update | updates the cart\'s selected payment method, email, and billing address', () => {
    describe('when the call to the Magento API is successful', () => {
      describe('when the email is included', () => {
        let method;
        let street;
        let newEmail;

        beforeEach(() => {
          street = 'updatedStreet';
          method = 'method';
          newEmail = 'new email';

          mockMagentoBillingAddress.street = [street];
          mockDaffCartAddress.email = newEmail;
          mockDaffCartAddress.street = street;
          mockMagentoCartPaymentMethod.code = method;
          mockDaffCartPaymentMethod.method = method;
        });

        it('should return the correct value', done => {
          service.updateWithBilling(cartId, mockDaffCartPaymentMethod, mockDaffCartAddress).subscribe(result => {
            expect(result.billing_address.street).toEqual(street);
            expect(result.billing_address.email).toEqual(newEmail);
            expect(result.payment.method).toEqual(method);
            done();
          });

          const op = controller.expectOne(addTypenameToDocument(setSelectedPaymentMethodWithBillingAndEmail([daffMagentoNoopCartFragment])));

          op.flush({
            data: mockSetSelectedPaymentMethodWithBillingAndEmailResponse
          });
        });
      });

      describe('when the email is not included', () => {
        let method;
        let street;

        beforeEach(() => {
          street = 'updatedStreet';
          method = 'method';

          mockDaffCartAddress.email = null;
          mockMagentoBillingAddress.street = [street];
          mockDaffCartAddress.street = street;
          mockMagentoCartPaymentMethod.code = method;
          mockDaffCartPaymentMethod.method = method;
        });

        it('should return the correct value', done => {
          service.updateWithBilling(cartId, mockDaffCartPaymentMethod, mockDaffCartAddress).subscribe(result => {
            expect(result.billing_address.street).toEqual(street);
            expect(result.payment.method).toEqual(method);
            done();
          });

          const op = controller.expectOne(addTypenameToDocument(setSelectedPaymentMethodWithBilling([daffMagentoNoopCartFragment])));

          op.flush({
            data: mockSetSelectedPaymentMethodWithBillingResponse
          });
        });
      });
    });

    describe('when the call to the Magento API is unsuccessful', () => {
      it('should throw an Error', done => {
        service.updateWithBilling(cartId, mockDaffCartPaymentMethod, mockDaffCartAddress).pipe(
          catchError(err => {
            expect(err).toEqual(jasmine.any(Error));
            done();
            return [];
          })
        ).subscribe();

        const op = controller.expectOne(addTypenameToDocument(setSelectedPaymentMethodWithBillingAndEmail([daffMagentoNoopCartFragment])));

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

  describe('remove | removes the cart\'s selected payment method', () => {
    beforeEach(() => {
      mockMagentoCart.selected_payment_method = null;
      mockDaffCart.payment = null;
    });

    it('should return void', done => {
      service.remove(cartId).subscribe(result => {
        expect(result).toBeUndefined();
        done();
      });

      const op = controller.expectOne(addTypenameToDocument(setSelectedPaymentMethod([daffMagentoNoopCartFragment])));

      op.flush({
        data: mockSetSelectedPaymentMethodResponse
      });
    });

    afterEach(() => {
      controller.verify();
    });
  });
});
