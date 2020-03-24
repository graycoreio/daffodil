import { TestBed } from '@angular/core/testing';

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
import { DaffInMemoryBackendCartItemService } from './cart-item/cart-item.service';

describe('DaffInMemoryBackendCartRootService | Unit', () => {
  let service: DaffInMemoryBackendCartRootService;

  let cartBackendServiceSpy: jasmine.SpyObj<DaffInMemoryBackendCartService>;
  let cartItemsBackendServiceSpy: jasmine.SpyObj<DaffInMemoryBackendCartItemService>;

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
          provide: DaffInMemoryBackendCartItemService,
          useValue: jasmine.createSpyObj('DaffInMemoryBackendCartItemService', ['get', 'post', 'put', 'delete'])
        }
      ]
    });
    service = TestBed.get(DaffInMemoryBackendCartRootService);

    cartBackendServiceSpy = TestBed.get(DaffInMemoryBackendCartService);
    cartItemsBackendServiceSpy = TestBed.get(DaffInMemoryBackendCartItemService);

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
    collection = [mockCart];
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

    describe('when the collectionName is cart-item', () => {
      let result;

      beforeEach(() => {
        reqInfoStub.collectionName = 'cart-item';

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

    describe('when the collectionName is cart-item', () => {
      let result;

      beforeEach(() => {
        reqInfoStub.collectionName = 'cart-item';

        result = service.post(reqInfoStub);
      });

      it('should delegate the request to the cart service', () => {
        expect(cartItemsBackendServiceSpy.post).toHaveBeenCalledWith(reqInfoStub);
      });
    });
  });

  describe('processing an put request', () => {
    beforeEach(() => {
      reqInfoStub.method = 'put';
    });

    describe('when the collectionName is cart-item', () => {
      let result;

      beforeEach(() => {
        reqInfoStub.collectionName = 'cart-item';

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

    describe('when the collectionName is cart-item', () => {
      let result;

      beforeEach(() => {
        reqInfoStub.collectionName = 'cart-item';

        result = service.delete(reqInfoStub);
      });

      it('should delegate the request to the cart service', () => {
        expect(cartItemsBackendServiceSpy.delete).toHaveBeenCalledWith(reqInfoStub);
      });
    });
  });
});
