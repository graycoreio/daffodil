import { TestBed } from '@angular/core/testing';
import { STATUS } from 'angular-in-memory-web-api';

import {
  DaffCart,
  DaffCartItemInput,
	DaffCartItem,
	DaffCartItemInputType
} from '@daffodil/cart';
import {
  DaffCartFactory,
  DaffCartItemFactory
} from '@daffodil/cart/testing';

import { DaffInMemoryBackendCartRootService } from './cart-root.service';
import { DaffInMemoryBackendCartService } from './cart/cart.service';
import { DaffInMemoryBackendCartItemsService } from './cart-items/cart-items.service';
import { DaffInMemoryBackendCartOrderService } from './cart-order/cart-order.service';

describe('DaffInMemoryBackendCartRootService | Unit', () => {
  let service: DaffInMemoryBackendCartRootService;

  let cartBackendServiceSpy: jasmine.SpyObj<DaffInMemoryBackendCartService>;
  let cartItemsBackendServiceSpy: jasmine.SpyObj<DaffInMemoryBackendCartItemsService>;
  let cartOrderBackendServiceSpy: jasmine.SpyObj<DaffInMemoryBackendCartOrderService>;

  let cartFactory: DaffCartFactory;
  let cartItemFactory: DaffCartItemFactory;

  let mockCart: DaffCart;
  let mockCartItemInput: DaffCartItemInput;
  let mockCartItem: DaffCartItem;
  let cartId;
  let reqInfoStub;
  let baseUrl;
  let cartUrl;
  let collection: DaffCart[];

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        DaffInMemoryBackendCartRootService,
        {
          provide: DaffInMemoryBackendCartService,
          useValue: jasmine.createSpyObj('DaffInMemoryBackendCartService', ['get', 'post'])
        },
        {
          provide: DaffInMemoryBackendCartItemsService,
          useValue: jasmine.createSpyObj('DaffInMemoryBackendCartItemsService', ['get', 'post', 'put', 'delete'])
        },
        {
          provide: DaffInMemoryBackendCartOrderService,
          useValue: jasmine.createSpyObj('DaffInMemoryBackendCartOrderService', ['post'])
        }
      ]
    });
    service = TestBed.get(DaffInMemoryBackendCartRootService);

    cartBackendServiceSpy = TestBed.get(DaffInMemoryBackendCartService);
    cartItemsBackendServiceSpy = TestBed.get(DaffInMemoryBackendCartItemsService);
    cartOrderBackendServiceSpy = TestBed.get(DaffInMemoryBackendCartOrderService);

    cartFactory = TestBed.get(DaffCartFactory);
    cartItemFactory = TestBed.get(DaffCartItemFactory);

    mockCart = cartFactory.create();
    mockCartItem = cartItemFactory.create();
    mockCartItemInput = {
			type: DaffCartItemInputType.Simple,
      productId: mockCartItem.product_id,
      qty: mockCartItem.qty
    };
    cartId = mockCart.id;
    baseUrl = 'api/cart';
    cartUrl = `${baseUrl}/${cartId}`;
    collection = [mockCart];
    service.carts = collection;
    reqInfoStub = {
      id: '',
      resourceUrl: baseUrl,
      collection,
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
      service.carts = [];
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

    describe('when the collectionName is cart-items', () => {
      let result;

      beforeEach(() => {
        reqInfoStub.collectionName = 'cart-items';

        result = service.get(reqInfoStub);
      });

      it('should delegate the request to the cart service', () => {
        expect(cartItemsBackendServiceSpy.get).toHaveBeenCalledWith(reqInfoStub);
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

    describe('when the collectionName is cart-items', () => {
      let result;

      beforeEach(() => {
        reqInfoStub.collectionName = 'cart-items';

        result = service.post(reqInfoStub);
      });

      it('should delegate the request to the cart service', () => {
        expect(cartItemsBackendServiceSpy.post).toHaveBeenCalledWith(reqInfoStub);
      });
    });

    describe('when the collectionName is cart-order', () => {
      let result;

      beforeEach(() => {
        reqInfoStub.collectionName = 'cart-order';

        result = service.post(reqInfoStub);
      });

      it('should delegate the request to the cart service', () => {
        expect(cartOrderBackendServiceSpy.post).toHaveBeenCalledWith(reqInfoStub);
      });
    });
  });

  describe('processing an put request', () => {
    beforeEach(() => {
      reqInfoStub.method = 'put';
    });

    describe('when the collectionName is cart-items', () => {
      let result;

      beforeEach(() => {
        reqInfoStub.collectionName = 'cart-items';

        result = service.put(reqInfoStub);
      });

      it('should delegate the request to the cart service', () => {
        expect(cartItemsBackendServiceSpy.put).toHaveBeenCalledWith(reqInfoStub);
      });
    });
  });

  describe('processing an delete request', () => {
    beforeEach(() => {
      reqInfoStub.method = 'delete';
    });

    describe('when the collectionName is cart-items', () => {
      let result;

      beforeEach(() => {
        reqInfoStub.collectionName = 'cart-items';

        result = service.delete(reqInfoStub);
      });

      it('should delegate the request to the cart service', () => {
        expect(cartItemsBackendServiceSpy.delete).toHaveBeenCalledWith(reqInfoStub);
      });
    });
  });
});
