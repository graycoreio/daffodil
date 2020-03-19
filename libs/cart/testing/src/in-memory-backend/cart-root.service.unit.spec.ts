import { TestBed } from '@angular/core/testing';
import { STATUS } from 'angular-in-memory-web-api';

import {
  DaffCart,
  DaffCartItemInput,
  DaffCartItem
} from '@daffodil/cart';
import {
  DaffCartFactory,
  DaffCartItemFactory
} from '@daffodil/cart/testing';

import { DaffInMemoryBackendCartRootService } from './cart-root.service';
import { DaffInMemoryBackendCartService } from './cart/cart.service';

describe('DaffInMemoryBackendCartRootService | Unit', () => {
  let service: DaffInMemoryBackendCartRootService;

  let cartBackendServiceSpy: jasmine.SpyObj<DaffInMemoryBackendCartService>;

  let cartFactory: DaffCartFactory;
  let cartItemFactory: DaffCartItemFactory;

  let mockCart: DaffCart;
  let mockCartItemInput: DaffCartItemInput;
  let mockCartItem: DaffCartItem;
  let cartId;
  let reqInfoStub;
  let baseUrl;
  let cartUrl;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        DaffInMemoryBackendCartRootService,
        {
          provide: DaffInMemoryBackendCartService,
          useValue: jasmine.createSpyObj('DaffInMemoryBackendCartService', ['get', 'post'])
        }
      ]
    });
    service = TestBed.get(DaffInMemoryBackendCartRootService);

    cartBackendServiceSpy = TestBed.get(DaffInMemoryBackendCartService);

    cartFactory = TestBed.get(DaffCartFactory);
    cartItemFactory = TestBed.get(DaffCartItemFactory);

    mockCart = cartFactory.create();
    mockCartItem = cartItemFactory.create();
    mockCartItemInput = {
      productId: mockCartItem.product_id,
      qty: mockCartItem.qty
    };
    cartId = mockCart.id;
    baseUrl = 'api/cart';
    cartUrl = `${baseUrl}/${cartId}`;
    reqInfoStub = {
      id: '',
      resourceUrl: baseUrl,
      collection: [
        mockCart
      ],
      collectionName: '',
      method: '',
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

  describe('after initialization', () => {
    let result;

    beforeEach(() => {
      result = service.createDb(reqInfoStub);
    });

    it('should have an empty array in DB', () => {
      expect(result.cart).toEqual([]);
    });
  });

  describe('processing a get request', () => {
    beforeEach(() => {
      reqInfoStub.method = 'get';
    });

    describe('when the collectionName is cart', () => {
      let result;

      beforeEach(() => {
        reqInfoStub.collectionName = 'cart';

        result = service.get(reqInfoStub);
      });

      it('should delegate the request to the cart service', () => {
        expect(cartBackendServiceSpy.get).toHaveBeenCalledWith(reqInfoStub);
      });
    });
  });

  describe('processing a post request', () => {
    beforeEach(() => {
      reqInfoStub.method = 'post';
    });

    describe('when the collectionName is cart', () => {
      let result;

      beforeEach(() => {
        reqInfoStub.collectionName = 'cart';

        result = service.post(reqInfoStub);
      });

      it('should delegate the request to the cart service', () => {
        expect(cartBackendServiceSpy.post).toHaveBeenCalledWith(reqInfoStub);
      });
    });
  });

  xdescribe('processing an put request', () => {});

  xdescribe('processing an put request', () => {});
});
