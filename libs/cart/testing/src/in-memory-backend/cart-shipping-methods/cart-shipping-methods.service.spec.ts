import { TestBed } from '@angular/core/testing';

import {
  DaffCart,
	DaffCartShippingRate,
} from '@daffodil/cart';
import {
  DaffCartFactory,
  DaffCartShippingRateFactory
} from '@daffodil/cart/testing';

import { DaffInMemoryBackendCartShippingMethodsService } from './cart-shipping-methods.service';

describe('DaffInMemoryBackendCartShippingMethodsService', () => {
  let service: DaffInMemoryBackendCartShippingMethodsService;
  let cartFactory: DaffCartFactory;
  let cartShippingFactory: DaffCartShippingRateFactory;

  let mockCart: DaffCart;
  let mockCartShippingMethod: DaffCartShippingRate;
  let cartId;
  let reqInfoStub;
  let baseUrl;
  let cartUrl;
  let collection: DaffCart[];

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        DaffInMemoryBackendCartShippingMethodsService,
      ]
    });
    service = TestBed.get(DaffInMemoryBackendCartShippingMethodsService);

    cartFactory = TestBed.get(DaffCartFactory);
    cartShippingFactory = TestBed.get(DaffCartShippingRateFactory);

    mockCart = cartFactory.create();
    mockCartShippingMethod = cartShippingFactory.create();
    mockCart.available_shipping_methods = [mockCartShippingMethod];
    collection = [mockCart];
    cartId = mockCart.id;
    baseUrl = 'api/cart-shipping-methods/';
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

  describe('processing a list available shipping methods request', () => {
    let result;

    beforeEach(() => {
      reqInfoStub.url = cartUrl;

      result = service.get(reqInfoStub);
    });

    it('should return the cart\'s available shipping methods', () => {
      expect(result.body).toEqual([mockCartShippingMethod]);
    });
  });
});
