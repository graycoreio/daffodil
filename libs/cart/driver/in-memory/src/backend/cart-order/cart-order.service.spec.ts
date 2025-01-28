import { TestBed } from '@angular/core/testing';

import { DaffCart } from '@daffodil/cart';
import { DaffCartFactory } from '@daffodil/cart/testing';

import { DaffInMemoryBackendCartOrderService } from './cart-order.service';

describe('DaffInMemoryBackendCartOrderService', () => {
  let service: DaffInMemoryBackendCartOrderService;
  let cartFactory: DaffCartFactory;

  let mockCart: DaffCart;
  let cartId;
  let reqInfoStub;
  let baseUrl;
  let cartUrl;
  let collection: DaffCart[];

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        DaffInMemoryBackendCartOrderService,
      ],
    });
    service = TestBed.inject(DaffInMemoryBackendCartOrderService);

    cartFactory = TestBed.inject(DaffCartFactory);

    mockCart = cartFactory.create();
    collection = [mockCart];
    cartId = mockCart.id;
    baseUrl = 'api/cart-order/';
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

  describe('processing a place order request', () => {
    let result;

    beforeEach(() => {
      reqInfoStub.url = cartUrl;

      result = service.post(reqInfoStub);
    });

    it('should return the cart order result with a defined cart and order ID', () => {
      expect(result.body.orderId).toBeDefined();
      expect(result.body.cartId).toBeDefined();
    });
  });
});
