import { TestBed } from '@angular/core/testing';
import { ApolloTestingController, ApolloTestingModule } from 'apollo-angular/testing';

import {
  DaffCartPaymentMethod,
} from '@daffodil/cart';
import { MagentoCartPaymentMethod, MagentoListPaymentMethodsResponse, DaffMagentoCartPaymentTransformer, DAFF_CART_MAGENTO_EXTRA_CART_FRAGMENTS, daffMagentoNoopCartFragment, listPaymentMethods } from '@daffodil/cart/driver/magento';
import {
  MagentoCartPaymentMethodFactory
} from '@daffodil/cart/driver/magento/testing';
import { DaffCartPaymentFactory } from '@daffodil/cart/testing';

import { DaffMagentoCartPaymentMethodsService } from './cart-payment-methods.service';

describe('Driver | Magento | Cart | CartPaymentMethodsService', () => {
  let service: DaffMagentoCartPaymentMethodsService;
  let controller: ApolloTestingController;

  let magentoCartPaymentTransformerSpy;

  let daffCartPaymentFactory: DaffCartPaymentFactory;
  let magentoPaymentMethodFactory: MagentoCartPaymentMethodFactory;

  let cartId;
  let mockDaffCartPayment: DaffCartPaymentMethod;
  let mockMagentoPaymentMethod: MagentoCartPaymentMethod;
  let mockListCartPaymentMethodsResponse: MagentoListPaymentMethodsResponse;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        ApolloTestingModule
      ],
      providers: [
        DaffMagentoCartPaymentMethodsService,
        {
          provide: DaffMagentoCartPaymentTransformer,
          useValue: jasmine.createSpyObj('DaffMagentoCartPaymentTransformer', ['transform'])
        },
        {
          provide: DAFF_CART_MAGENTO_EXTRA_CART_FRAGMENTS,
          useValue: daffMagentoNoopCartFragment,
          multi: true
        },
      ]
    });

    service = TestBed.get(DaffMagentoCartPaymentMethodsService);
    controller = TestBed.get(ApolloTestingController);

    magentoCartPaymentTransformerSpy = TestBed.get(DaffMagentoCartPaymentTransformer);

    daffCartPaymentFactory = TestBed.get(DaffCartPaymentFactory);
    magentoPaymentMethodFactory = TestBed.get(MagentoCartPaymentMethodFactory);

    mockDaffCartPayment = daffCartPaymentFactory.create();
    // TODO: create a factory and model for MagentoAvailablePaymentMethod
    const temp = magentoPaymentMethodFactory.create();
    mockMagentoPaymentMethod = {
      code: temp.code,
      title: temp.title
    };

    cartId = '15';
    mockListCartPaymentMethodsResponse = {
      cart: {
        __typename: 'Cart',
        available_payment_methods: [mockMagentoPaymentMethod]
      }
    };

    magentoCartPaymentTransformerSpy.transform.withArgs(mockMagentoPaymentMethod).and.returnValue(mockDaffCartPayment);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('list | listing payment methods', () => {
    let method;

    beforeEach(() => {
      method = 'method';
      mockDaffCartPayment.method = method;
    });

    it('should call the transformer with the correct argument', done => {
      service.list(cartId).subscribe(() => {
        expect(magentoCartPaymentTransformerSpy.transform).toHaveBeenCalledWith(mockMagentoPaymentMethod);
        done();
      });

      const op = controller.expectOne(listPaymentMethods([daffMagentoNoopCartFragment]));

      op.flush({
        data: mockListCartPaymentMethodsResponse
      });
    });

    it('should return the correct value', done => {
      service.list(cartId).subscribe(result => {
        expect(result[0].method).toEqual(method);
        done();
      });

      const op = controller.expectOne(listPaymentMethods([daffMagentoNoopCartFragment]));

      op.flush({
        data: mockListCartPaymentMethodsResponse
      });
    });

    afterEach(() => {
      controller.verify();
    });
  });
});
