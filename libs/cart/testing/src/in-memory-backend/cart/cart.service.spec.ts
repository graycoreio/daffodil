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

import { DaffInMemoryBackendCartService } from './cart.service';

describe('DaffInMemoryBackendCartService', () => {
  let service: DaffInMemoryBackendCartService;
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
        DaffInMemoryBackendCartService,
      ]
    });
    service = TestBed.get(DaffInMemoryBackendCartService);

    cartFactory = TestBed.get(DaffCartFactory);
    cartItemFactory = TestBed.get(DaffCartItemFactory);

    mockCart = cartFactory.create();
    mockCartItem = cartItemFactory.create();
    collection = [mockCart];
    mockCartItemInput = {
      productId: mockCartItem.product_id,
      qty: mockCartItem.qty
    };
    cartId = mockCart.id;
    baseUrl = 'api/cart/';
    cartUrl = `${baseUrl}${cartId}/`;
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

  describe('processing a get request', () => {
    let result;

    beforeEach(() => {
      reqInfoStub.url = baseUrl;

      result = service.get(reqInfoStub);
    });

    it('should return the cart', () => {
      expect(result.body).toEqual(mockCart);
    });
  });

  describe('processing a create request', () => {
    let result;

    beforeEach(() => {
      reqInfoStub.url = baseUrl;

      result = service.post(reqInfoStub);
    });

    it('should return a partial with id', () => {
      expect(result.body.id).toBeDefined();
    });
  });

  describe('processing a clear request', () => {
    let result;

    beforeEach(() => {
      mockCart.items.push(mockCartItem);
      reqInfoStub.url = `${cartUrl}clear`;

      result = service.post(reqInfoStub);
    });

    it('should remove the items in the cart', () => {
      expect(result.body.items.length).toEqual(0);
    });
  });

  describe('processing an addToCart request', () => {
    let result;

    beforeEach(() => {
      reqInfoStub.id = 'addToCart';
      reqInfoStub.req.body = mockCartItemInput;
      reqInfoStub.url = `${baseUrl}addToCart`;

      result = service.post(reqInfoStub);
    });

    it('should return an empty object', () => {
      expect(result.body).toEqual({});
    });
  });
});
