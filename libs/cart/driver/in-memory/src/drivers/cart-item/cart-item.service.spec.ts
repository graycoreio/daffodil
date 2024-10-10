import {
  provideHttpClient,
  withInterceptorsFromDi,
} from '@angular/common/http';
import {
  HttpTestingController,
  provideHttpClientTesting,
} from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { InMemoryBackendConfig } from 'angular-in-memory-web-api';

import {
  DaffCart,
  DaffCartItem,
  DaffCartItemInputType,
  DaffCartItemInput,
} from '@daffodil/cart';
import {
  DaffCartFactory,
  DaffCartItemFactory,
} from '@daffodil/cart/testing';

import { DaffInMemoryCartItemService } from './cart-item.service';

describe('@daffodil/cart/driver/in-memory | CartItemService', () => {
  let service: DaffInMemoryCartItemService;
  let httpMock: HttpTestingController;
  let cartFactory: DaffCartFactory;
  let cartItemFactory: DaffCartItemFactory;

  let mockCart: DaffCart;
  let mockCartItem: DaffCartItem;
  let cartId;
  let itemId;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [],
      providers: [
        DaffInMemoryCartItemService,
        {
          provide: InMemoryBackendConfig,
          useValue: {
            apiBase: 'api',
          },
        },
        provideHttpClient(withInterceptorsFromDi()),
        provideHttpClientTesting(),
      ],
    });

    httpMock = TestBed.inject(HttpTestingController);
    service = TestBed.inject(DaffInMemoryCartItemService);

    cartFactory = TestBed.inject(DaffCartFactory);
    cartItemFactory = TestBed.inject(DaffCartItemFactory);

    mockCart = cartFactory.create();
    mockCartItem = cartItemFactory.create();
    mockCart.items = [mockCartItem];
    cartId = mockCart.id;
    itemId = mockCartItem.id;
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('list | getting all the cart items', () => {
    it('should send a get request', done => {
      service.list(cartId).subscribe(res => {
        done();
      });

      const req = httpMock.expectOne(`${service['url']}/${cartId}/`);

      expect(req.request.method).toBe('GET');
      req.flush(mockCart.items);
    });
  });

  describe('get | getting a cart item', () => {
    it('should send a get request with the item id', done => {
      service.get(cartId, itemId).subscribe(res => {
        done();
      });

      const req = httpMock.expectOne(`${service['url']}/${cartId}/${itemId}`);

      expect(req.request.method).toBe('GET');
      req.flush(mockCartItem);
    });
  });

  describe('add | adding an item to the cart', () => {
    let cartItemInput: DaffCartItemInput;
    let type;
    let productId;
    let qty;

    beforeEach(() => {
      type = DaffCartItemInputType.Simple;
      productId = 4;
      qty = 2;
      cartItemInput = {
        type,
        productId,
        qty,
      };
    });

    it('should send a post request', done => {
      service.add(cartId, cartItemInput).subscribe(cart => {
        done();
      });

      const req = httpMock.expectOne(`${service['url']}/${cartId}/`);

      expect(req.request.method).toBe('POST');
      expect(req.request.body).toEqual(cartItemInput);

      req.flush(mockCart);
    });
  });

  describe('update | updating a cart item', () => {
    let newCartItem: DaffCartItem;

    beforeEach(() => {
      newCartItem = cartItemFactory.create();
      newCartItem.id = itemId;
      mockCart.items = [newCartItem];
    });

    it('should send a put request', done => {
      service.update(cartId, itemId, newCartItem).subscribe(cart => {
        done();
      });

      const req = httpMock.expectOne(`${service['url']}/${cartId}/${itemId}`);

      expect(req.request.method).toBe('PUT');
      expect(req.request.body).toEqual(newCartItem);

      req.flush(mockCart);
    });
  });

  describe('delete | removing an item from the cart', () => {
    it('should send a delete request', done => {
      service.delete(cartId, itemId).subscribe(result => {
        done();
      });

      const req = httpMock.expectOne(`${service['url']}/${cartId}/${itemId}`);

      expect(req.request.method).toBe('DELETE');

      mockCart.items = [];

      req.flush(mockCart);
    });
  });
});
