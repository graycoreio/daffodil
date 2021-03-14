import { TestBed } from '@angular/core/testing';

import {
  DaffCart,
  DaffCartShippingRate,
} from '@daffodil/cart';
import {
  DaffCartFactory,
  DaffCartShippingRateFactory,
  DaffCartAddressFactory,
} from '@daffodil/cart/testing';

import { DaffInMemoryBackendCartShippingMethodsService } from './cart-shipping-methods.service';

describe('DaffInMemoryBackendCartShippingMethodsService', () => {
  let service: DaffInMemoryBackendCartShippingMethodsService;
  let cartFactory: DaffCartFactory;
  let cartShippingFactory: DaffCartShippingRateFactory;
  let cartAddressFactory: DaffCartAddressFactory;

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
      ],
    });
    service = TestBed.inject(DaffInMemoryBackendCartShippingMethodsService);

    cartFactory = TestBed.inject(DaffCartFactory);
    cartShippingFactory = TestBed.inject(DaffCartShippingRateFactory);
    cartAddressFactory = TestBed.inject(DaffCartAddressFactory);

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
        body: {},
      },
      utils: {
        createResponse$: func => func(),
        getJsonBody: req => req.body,
        findById: (ary, id) => ary.find(e => e.id === id),
      },
    };
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('processing a list available shipping methods request', () => {
    let result;

    beforeEach(() => {
      reqInfoStub.url = cartUrl;
    });

    describe('when the cart has a shipping address', () => {
      beforeEach(() => {
        mockCart.shipping_address = cartAddressFactory.create();
      });

      describe('and when the cart already has available shipping methods', () => {
        beforeEach(() => {
          mockCart.available_shipping_methods = [mockCartShippingMethod];

          result = service.get(reqInfoStub);
        });

        it('should return the cart\'s available shipping methods', () => {
          expect(result.body).toEqual([mockCartShippingMethod]);
        });
      });

      describe('and when the cart has no available shipping methods', () => {
        beforeEach(() => {
          mockCart.available_shipping_methods = [];

          result = service.get(reqInfoStub);
        });

        it('should initialize and return the cart\'s available shipping methods', () => {
          expect(result.body.length).toBeGreaterThan(0);
          expect(mockCart.available_shipping_methods.length).toBeGreaterThan(0);
        });
      });
    });

    describe('when the cart does not have a shipping address', () => {
      beforeEach(() => {
        mockCart.shipping_address = null;

        result = service.get(reqInfoStub);
      });

      it('should return an empty array', () => {
        expect(result.body).toEqual([]);
      });
    });
  });
});
