import { TestBed } from '@angular/core/testing';

import {
  DaffCart,
	DaffCartShippingInformation,
} from '@daffodil/cart';
import {
  DaffCartFactory,
  DaffCartShippingRateFactory
} from '@daffodil/cart/testing';

import { DaffInMemoryBackendCartShippingInformationService } from './cart-shipping-information.service';

describe('DaffInMemoryBackendCartShippingInformationService', () => {
  let service: DaffInMemoryBackendCartShippingInformationService;
  let cartFactory: DaffCartFactory;
  let cartShippingInformationFactory: DaffCartShippingRateFactory;

  let mockCart: DaffCart;
  let mockCartShippingInformation: DaffCartShippingInformation;
  let cartId;
  let reqInfoStub;
  let baseUrl;
  let cartUrl;
  let collection: DaffCart[];

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        DaffInMemoryBackendCartShippingInformationService,
      ]
    });
    service = TestBed.get(DaffInMemoryBackendCartShippingInformationService);

    cartFactory = TestBed.get(DaffCartFactory);
    cartShippingInformationFactory = TestBed.get(DaffCartShippingRateFactory);

    mockCart = cartFactory.create();
    mockCartShippingInformation = {
      ...cartShippingInformationFactory.create(),
      address_id: 0
    };
    mockCart.shipping_information = mockCartShippingInformation;
    collection = [mockCart];
    cartId = mockCart.id;
    baseUrl = 'api/cart-shipping-information/';
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

  describe('processing a get shipping information request', () => {
    let result;

    beforeEach(() => {
      reqInfoStub.url = cartUrl;

      result = service.get(reqInfoStub);
    });

    it('should return the cart shipping information', () => {
      expect(result.body).toEqual(mockCartShippingInformation);
    });
  });

  describe('processing an update shipping information request', () => {
    let result;
    let newShippingInformation: DaffCartShippingInformation;

    beforeEach(() => {
      newShippingInformation = {
        ...cartShippingInformationFactory.create(),
        address_id: 5
      };
      reqInfoStub.url = cartUrl;
      reqInfoStub.req.body = newShippingInformation;
      result = service.put(reqInfoStub);
    });

    it('should return a cart with the updated shipping information', () => {
      expect(result.body.shipping_information).toEqual(newShippingInformation);
		});
  });

  describe('processing a remove shipping information request', () => {
    let result;

    beforeEach(() => {
      reqInfoStub.url = cartUrl;

      result = service.delete(reqInfoStub);
    });

    it('should return a cart with no shipping information', () => {
      expect(result.body.shipping_information).toBeFalsy();
    });
  });
});
