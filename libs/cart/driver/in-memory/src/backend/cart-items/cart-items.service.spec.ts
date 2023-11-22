import { TestBed } from '@angular/core/testing';

import {
  DaffCart,
  DaffCartItemInput,
  DaffCartItem,
  DaffCartItemInputType,
} from '@daffodil/cart';
import { DAFF_CART_IN_MEMORY_EXTRA_ATTRIBUTES_HOOK } from '@daffodil/cart/driver/in-memory';
import {
  DaffCartFactory,
  DaffCartItemFactory,
} from '@daffodil/cart/testing';
import { DaffProductTestingModule } from '@daffodil/product/testing';

import { DaffInMemoryBackendCartItemsService } from './cart-items.service';

describe('DaffInMemoryBackendCartItemsService', () => {
  let service: DaffInMemoryBackendCartItemsService;
  let cartFactory: DaffCartFactory;
  let cartItemFactory: DaffCartItemFactory;

  let mockCart: DaffCart;
  let mockCartItemInput: DaffCartItemInput;
  let mockCartItems: DaffCartItem[];
  let cartId;
  let reqInfoStub;
  let baseUrl;
  let cartUrl;
  let collection: DaffCart[];
  let extraAttributes;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        DaffProductTestingModule,
      ],
      providers: [
        DaffInMemoryBackendCartItemsService,
        {
          provide: DAFF_CART_IN_MEMORY_EXTRA_ATTRIBUTES_HOOK,
          useValue: () => extraAttributes,
        },
      ],
    });
    service = TestBed.inject(DaffInMemoryBackendCartItemsService);

    cartFactory = TestBed.inject(DaffCartFactory);
    cartItemFactory = TestBed.inject(DaffCartItemFactory);

    mockCart = cartFactory.create();
    mockCartItems = cartItemFactory.createMany(3);
    extraAttributes = {
      extraField: 'extraField',
    };
    mockCart.items = mockCartItems;
    collection = [mockCart];
    mockCartItemInput = {
      type: DaffCartItemInputType.Simple,
      productId: mockCartItems[0].product_id,
      qty: mockCartItems[0].qty,
    };
    cartId = mockCart.id;
    baseUrl = 'api/cart-items/';
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

  describe('processing a list items request', () => {
    let result;

    beforeEach(() => {
      reqInfoStub.url = cartUrl;

      result = service.get(reqInfoStub);
    });

    it('should return the cart items', () => {
      expect(result.body).toEqual(mockCartItems);
    });
  });

  describe('processing a get item request', () => {
    let result;
    let itemId;

    beforeEach(() => {
      itemId = mockCartItems[0].id;
      reqInfoStub.url = `${cartUrl}${itemId}`;

      result = service.get(reqInfoStub);
    });

    it('should return the cart item', () => {
      expect(result.body.id).toEqual(itemId);
    });
  });

  describe('processing an add item request', () => {
    let result;
    let productId;

    beforeEach(() => {
      reqInfoStub.url = cartUrl;
      reqInfoStub.req.body = mockCartItemInput;
      productId = mockCartItemInput.productId;
      result = service.post(reqInfoStub);
    });

    it('should return a cart with the added item', () => {
      expect(result.body.items).toContain(jasmine.objectContaining({ product_id: productId }));
    });

    it('should add the given qty to an existing cart item qty', () => {
      productId = reqInfoStub.collection[0].items[0].product_id;
      const cart_item_qty = reqInfoStub.collection[0].items[0].qty;
      reqInfoStub.req.body = { productId, qty: 2 };
      result = service.post(reqInfoStub);

      expect(result.body.items[0].qty).toEqual(cart_item_qty + 2);
    });

    it('should set extra_attributes to the value returned by the provided hook function', () => {
      expect(result.body.extra_attributes).toEqual(extraAttributes);
    });
  });

  describe('processing an update request', () => {
    let result;
    let qty;
    let itemId;

    beforeEach(() => {
      itemId = mockCartItems[0].id;
      reqInfoStub.url = `${cartUrl}${itemId}`;
      qty = mockCartItems[0].qty + 1;
      reqInfoStub.req.body = { qty };

      result = service.put(reqInfoStub);
    });

    it('should update the cart item', () => {
      expect(result.body.items[0].qty).toEqual(qty);
    });

    it('should set extra_attributes to the value returned by the provided hook function', () => {
      expect(result.body.extra_attributes).toEqual(extraAttributes);
    });
  });

  describe('processing an delete request', () => {
    let result;
    let itemId;

    beforeEach(() => {
      itemId = mockCartItems[0].id;
      reqInfoStub.url = `${cartUrl}${itemId}`;

      result = service.delete(reqInfoStub);
    });

    it('should remove the cart item from the cart', () => {
      expect(result.body.items.find(({ id }) => itemId === id)).toBeFalsy();
    });

    it('should set extra_attributes to the value returned by the provided hook function', () => {
      expect(result.body.extra_attributes).toEqual(extraAttributes);
    });
  });
});
