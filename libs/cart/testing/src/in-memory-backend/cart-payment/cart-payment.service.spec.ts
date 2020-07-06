import { TestBed } from '@angular/core/testing';

import {
  DaffCart,
	DaffCartPaymentMethod,
  DaffCartAddress,
} from '@daffodil/cart';
import {
  DaffCartFactory,
  DaffCartPaymentFactory,
  DaffCartAddressFactory
} from '@daffodil/cart/testing';

import { DaffInMemoryBackendCartPaymentService } from './cart-payment.service';

describe('DaffInMemoryBackendCartPaymentService', () => {
  let service: DaffInMemoryBackendCartPaymentService;
  let cartFactory: DaffCartFactory;
  let cartPaymentFactory: DaffCartPaymentFactory;
  let cartAddressFactory: DaffCartAddressFactory;

  let mockCart: DaffCart;
  let mockCartPayment: DaffCartPaymentMethod;
  let mockCartAddress: DaffCartAddress;
  let cartId;
  let reqInfoStub;
  let baseUrl;
  let cartUrl;
  let collection: DaffCart[];

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        DaffInMemoryBackendCartPaymentService,
      ]
    });
    service = TestBed.get(DaffInMemoryBackendCartPaymentService);

    cartFactory = TestBed.get(DaffCartFactory);
    cartPaymentFactory = TestBed.get(DaffCartPaymentFactory);
    cartAddressFactory = TestBed.get(DaffCartAddressFactory);

    mockCart = cartFactory.create();
    mockCartPayment = cartPaymentFactory.create();
    mockCartAddress = cartAddressFactory.create();
    mockCart.billing_address = mockCartAddress;
    mockCart.payment = mockCartPayment;
    collection = [mockCart];
    cartId = mockCart.id;
    baseUrl = 'api/cart-payment/';
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

  describe('processing a get payment request', () => {
    let result;

    beforeEach(() => {
      reqInfoStub.url = cartUrl;

      result = service.get(reqInfoStub);
    });

    it('should return the cart payment', () => {
      expect(result.body).toEqual(mockCartPayment);
    });
  });

  describe('processing an update payment request', () => {
    let result;
    let newPayment: DaffCartPaymentMethod;

    beforeEach(() => {
      newPayment = cartPaymentFactory.create();
      reqInfoStub.url = cartUrl;
      reqInfoStub.req.body = {payment: newPayment};
      result = service.put(reqInfoStub);
    });

    it('should return a cart with the updated payment', () => {
      expect(result.body.payment).toEqual(newPayment);
		});
  });

  describe('processing an update payment with billing request', () => {
    let result;
    let newPayment: DaffCartPaymentMethod;

    beforeEach(() => {
      newPayment = cartPaymentFactory.create();
      reqInfoStub.url = cartUrl;
      reqInfoStub.req.body = {
        payment: newPayment,
        address: mockCartAddress
      };
      result = service.put(reqInfoStub);
    });

    it('should return a cart with the updated payment', () => {
      expect(result.body.payment).toEqual(newPayment);
      expect(result.body.billing_address).toEqual(mockCartAddress);
		});
  });

  describe('processing a remove payment request', () => {
    let result;

    beforeEach(() => {
      reqInfoStub.url = cartUrl;

      result = service.delete(reqInfoStub);
    });

    it('should return a cart with no payment', () => {
      expect(result.body.payment).toBeFalsy();
    });
  });
});
