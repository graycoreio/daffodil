import { TestBed } from '@angular/core/testing';

import { DaffCartItemFactory } from '@daffodil/cart/testing';

import { DaffInMemoryBackendCartItemService } from './cart-item.service';
import { DaffInMemoryCartDataService } from '../cart-data.service';

describe('DaffInMemoryBackendCartItemService', () => {
  let service: DaffInMemoryBackendCartItemService;
	let cartItemFactory: DaffCartItemFactory;
	let cartDataService: DaffInMemoryCartDataService;

  let cartId;
  let reqInfoStub;
  let baseUrl;
  let cartUrl;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
				DaffInMemoryBackendCartItemService,
				DaffInMemoryCartDataService
      ]
    });
    service = TestBed.get(DaffInMemoryBackendCartItemService);

    cartItemFactory = TestBed.get(DaffCartItemFactory);
    cartDataService = TestBed.get(DaffInMemoryCartDataService);

    cartDataService.get().items = cartItemFactory.createMany(3);
    cartId = cartDataService.getId();
    baseUrl = 'api/cart-item/';
    cartUrl = `/${baseUrl}${cartId}/`;
    reqInfoStub = {
      id: cartId,
      resourceUrl: baseUrl,
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

  describe('processing a list items request', () => {
    let result;

    beforeEach(() => {
      reqInfoStub.url = cartUrl;

      result = service.get(reqInfoStub);
    });

    it('should return the cart items', () => {
      expect(result.body).toEqual(cartDataService.getItems());
    });
  });

  describe('processing a get item request', () => {
    let result;
    let item;

    beforeEach(() => {
      item = cartDataService.getItem(0);
      reqInfoStub.url = `${cartUrl}${item.item_id}`;

      result = service.get(reqInfoStub);
    });

    it('should return the cart item', () => {
      expect(result.body).toEqual(item);
    });
  });

  describe('processing an add item request', () => {
    let result;

    beforeEach(() => {
      reqInfoStub.url = cartUrl;
      reqInfoStub.req.body = {
				productId: 'id',
				qty: 2
			};

      result = service.post(reqInfoStub);
    });

    it('should return a cart with the added item', () => {
      expect(result.body.items).toContain(jasmine.objectContaining({product_id: 'id'}));
    });
  });

  describe('processing an update request', () => {
    let result;
    let qty;
    let itemId;

    beforeEach(() => {
			itemId = cartDataService.getItem(0).item_id;
			console.log(itemId);
      reqInfoStub.url = `${cartUrl}${itemId}`;
      qty = cartDataService.getItem(0).qty + 1;
      reqInfoStub.req.body = {
				itemId: itemId,
				item: {qty}
			};

      result = service.put(reqInfoStub);
    });

    it('should update the cart item', () => {
      expect(result.body.items[0].qty).toEqual(qty);
    });
  });

  describe('processing an delete request', () => {
    let result;
    let itemId;

    beforeEach(() => {
      itemId = cartDataService.getItem(0).item_id;
      reqInfoStub.url = `${cartUrl}${itemId}`;

      result = service.delete(reqInfoStub);
    });

    it('should remove the cart item from the cart', () => {
      expect(result.body.items.findIndex((item) => item.item_id === itemId) > -1).toBeFalsy();
    });
  });
});
