import { TestBed } from '@angular/core/testing';

import {
  DaffCart,
	DaffCartPaymentMethod,
} from '@daffodil/cart';
import {
  DaffCartFactory,
  DaffCartPaymentFactory
} from '@daffodil/cart/testing';

import { DaffInMemoryBackendCartPaymentMethodsService } from './cart-payment-methods.service';

describe('DaffInMemoryBackendCartPaymentMethodsService', () => {
  let service: DaffInMemoryBackendCartPaymentMethodsService;
  let cartFactory: DaffCartFactory;
  let cartPaymentFactory: DaffCartPaymentFactory;

  let mockCart: DaffCart;
  let mockCartPayment: DaffCartPaymentMethod;
  let cartId;
  let reqInfoStub;
  let baseUrl;
  let cartUrl;
  let collection: DaffCart[];

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        DaffInMemoryBackendCartPaymentMethodsService,
      ]
    });
    service = TestBed.get(DaffInMemoryBackendCartPaymentMethodsService);

    cartFactory = TestBed.get(DaffCartFactory);
    cartPaymentFactory = TestBed.get(DaffCartPaymentFactory);

    mockCart = cartFactory.create();
    mockCartPayment = cartPaymentFactory.create();
    mockCart.available_payment_methods = [mockCartPayment];
    collection = [mockCart];
    cartId = mockCart.id;
    baseUrl = 'api/cart-payment-methods/';
    cartUrl = `/${baseUrl}${cartId}/`;
    reqInfoStub = {
      id: cartId,
      resourceUrl: baseUrl,
      collection,
      req: {
        body: {}
      },
      utils: {
        createResponse$: func => func(),
        getJsonBody: req => req.body,
        findById: (ary, id) => ary.find(e => e.id === id)
      }
    };
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('processing a list available payment methods request', () => {
    let result;

    beforeEach(() => {
      reqInfoStub.url = cartUrl;

      result = service.get(reqInfoStub);
    });

    it('should return the cart\'s available payment methods', () => {
      expect(result.body).toEqual([mockCartPayment]);
    });
  });
});
