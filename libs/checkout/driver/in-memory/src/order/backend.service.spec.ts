import { TestBed } from '@angular/core/testing';

import { DaffCart } from '@daffodil/cart';

import { DaffCheckoutInMemoryBackendOrderService } from './backend.service';
import { DAFF_CHECKOUT_IN_MEMORY_CHECKOUT_ORDER_COLLECTION_NAME } from '../collection-names.const';


describe('DaffCheckoutInMemoryBackendOrderService', () => {
  let service: DaffCheckoutInMemoryBackendOrderService;

  let cartId: DaffCart['id'];
  let reqInfoStub;
  let baseUrl;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        DaffCheckoutInMemoryBackendOrderService,
      ],
    });
    service = TestBed.inject(DaffCheckoutInMemoryBackendOrderService);

    cartId = 'cartId';
    baseUrl = `api/${DAFF_CHECKOUT_IN_MEMORY_CHECKOUT_ORDER_COLLECTION_NAME}/`;
    reqInfoStub = {
      id: cartId,
      resourceUrl: baseUrl,
      collection: [],
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
      reqInfoStub.url = baseUrl;
      reqInfoStub.req.body.cartId = cartId;

      result = service.post(reqInfoStub);
    });

    it('should return the cart order result with a defined cart and order ID', () => {
      expect(result.body.orderId).toBeDefined();
      expect(result.body.cartId).toBeDefined();
    });
  });
});
