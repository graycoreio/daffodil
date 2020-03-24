import { TestBed } from '@angular/core/testing';

import {
  DaffCartItemFactory
} from '@daffodil/cart/testing';

import { DaffInMemoryBackendCartService } from './cart.service';
import { DaffInMemoryCartDataService } from '../cart-data.service';

describe('DaffInMemoryBackendCartService', () => {
  let service: DaffInMemoryBackendCartService;

  let cartId;
  let reqInfoStub;
  let baseUrl;
	let cartDataService: DaffInMemoryCartDataService;
	let cartItemFactory: DaffCartItemFactory;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
				DaffInMemoryBackendCartService,
				DaffInMemoryCartDataService
      ]
    });
		service = TestBed.get(DaffInMemoryBackendCartService);
		cartDataService = TestBed.get(DaffInMemoryCartDataService);
		cartItemFactory = TestBed.get(DaffCartItemFactory);

		cartId = cartDataService.getId();
    baseUrl = 'api/cart/';
    reqInfoStub = {
      id: cartId.toString(),
      resourceUrl: baseUrl,
      collection: [cartDataService.get()],
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
      expect(result.body).toEqual(cartDataService.get());
    });
  });

  describe('processing a create request', () => {
    let result;

    beforeEach(() => {
      reqInfoStub.url = baseUrl;

      result = service.post(reqInfoStub);
    });

    it('should return a partial with id', () => {
      expect(result.body.id).toEqual(cartDataService.getId());
    });
  });

  describe('processing a clear request', () => {
    let result;

    beforeEach(() => {
      cartDataService.getItems().push(cartItemFactory.create());
      reqInfoStub.url = '/clear';

      result = service.post(reqInfoStub);
    });

    it('should remove the items in the cart', () => {
      expect(result.body.items.length).toEqual(0);
    });
  });

  describe('processing an addToCart request', () => {
    let result;

    beforeEach(() => {
      reqInfoStub.url = '/addToCart';

      result = service.post(reqInfoStub);
    });

    it('should return an empty object', () => {
      expect(result.body).toEqual({});
    });
  });
});
