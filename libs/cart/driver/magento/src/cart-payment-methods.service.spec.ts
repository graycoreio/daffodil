import { TestBed } from '@angular/core/testing';
import { InMemoryCache } from '@apollo/client/core';
import { addTypenameToDocument } from '@apollo/client/utilities';
import {
  ApolloTestingController,
  ApolloTestingModule,
  APOLLO_TESTING_CACHE,
} from '@damienwebdev/apollo-angular/testing';

import { DaffCartPaymentMethod } from '@daffodil/cart';
import {
  MagentoCartPaymentMethod,
  MagentoListPaymentMethodsResponse,
  DaffMagentoCartPaymentTransformer,
} from '@daffodil/cart/driver/magento';
import { MagentoCartPaymentMethodFactory } from '@daffodil/cart/driver/magento/testing';
import { DaffCartPaymentFactory } from '@daffodil/cart/testing';
import { schema } from '@daffodil/driver/magento';

import { DaffMagentoCartPaymentMethodsService } from './cart-payment-methods.service';
import { listPaymentMethods } from './queries/public_api';

describe('Driver | Magento | Cart | CartPaymentMethodsService', () => {
  let service: DaffMagentoCartPaymentMethodsService;
  let controller: ApolloTestingController;

  let magentoCartPaymentTransformerService: DaffMagentoCartPaymentTransformer;
  let magentoCartPaymentTransformerSpy: jasmine.Spy;

  let daffCartPaymentFactory: DaffCartPaymentFactory;
  let magentoPaymentMethodFactory: MagentoCartPaymentMethodFactory;

  let cartId;
  let mockDaffCartPayment: DaffCartPaymentMethod;
  let mockMagentoPaymentMethod: MagentoCartPaymentMethod;
  let mockListCartPaymentMethodsResponse: MagentoListPaymentMethodsResponse;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        ApolloTestingModule,
      ],
      providers: [
        DaffMagentoCartPaymentMethodsService,
        {
          provide: APOLLO_TESTING_CACHE,
          useValue: new InMemoryCache({
            addTypename: true,
            possibleTypes: schema.possibleTypes,
          }),
        },
      ],
    });

    service = TestBed.inject(DaffMagentoCartPaymentMethodsService);
    controller = TestBed.inject(ApolloTestingController);

    magentoCartPaymentTransformerService = TestBed.inject(DaffMagentoCartPaymentTransformer);

    daffCartPaymentFactory = TestBed.inject(DaffCartPaymentFactory);
    magentoPaymentMethodFactory = TestBed.inject(MagentoCartPaymentMethodFactory);

    mockDaffCartPayment = daffCartPaymentFactory.create();
    // TODO: create a factory and model for MagentoAvailablePaymentMethod
    const temp = magentoPaymentMethodFactory.create();
    mockMagentoPaymentMethod = {
      __typename: 'AvailablePaymentMethod',
      code: temp.code,
      title: temp.title,
    };

    cartId = '15';
    mockListCartPaymentMethodsResponse = {
      cart: {
        __typename: 'Cart',
        available_payment_methods: [mockMagentoPaymentMethod],
      },
    };

    magentoCartPaymentTransformerSpy = spyOn(magentoCartPaymentTransformerService, 'transform');
    magentoCartPaymentTransformerSpy.withArgs(mockMagentoPaymentMethod).and.returnValue(mockDaffCartPayment);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('list | listing payment methods', () => {
    let method;

    beforeEach(() => {
      method = 'method';
      mockDaffCartPayment.method = method;
      mockMagentoPaymentMethod.code = method;
    });

    it('should call the transformer with the correct argument', done => {
      service.list(cartId).subscribe(() => {
        expect(magentoCartPaymentTransformerSpy).toHaveBeenCalledWith(mockMagentoPaymentMethod);
        done();
      });

      const op = controller.expectOne(addTypenameToDocument(listPaymentMethods([])));

      op.flush({
        data: mockListCartPaymentMethodsResponse,
      });
    });

    it('should return the correct value', done => {
      service.list(cartId).subscribe(result => {
        expect(result[0].method).toEqual(method);
        done();
      });

      const op = controller.expectOne(addTypenameToDocument(listPaymentMethods([])));

      op.flush({
        data: mockListCartPaymentMethodsResponse,
      });
    });

    afterEach(() => {
      controller.verify();
    });
  });
});
