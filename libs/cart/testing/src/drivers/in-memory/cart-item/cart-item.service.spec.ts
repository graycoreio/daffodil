import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { DaffCart, DaffCartItem } from '@daffodil/cart';

import { DaffCartFactory } from '../../../factories/cart.factory';
import { DaffInMemoryCartItemService } from './cart-item.service';
import { DaffCartItemFactory } from '@daffodil/cart/testing';
import { DaffCartItemInput } from 'dist/cart/models/cart-item-input';

describe('Driver | In Memory | Cart | CartItemService', () => {
  let cartItemService: DaffInMemoryCartItemService;
  let httpMock: HttpTestingController;
  let cartFactory: DaffCartFactory;
  let cartItemFactory: DaffCartItemFactory;

  let mockCart: DaffCart;
  let mockCartItem: DaffCartItem;
  let cartId;
  let itemId;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ],
      providers: [
        DaffInMemoryCartItemService
      ]
    });

    httpMock = TestBed.get(HttpTestingController);
    cartItemService = TestBed.get(DaffInMemoryCartItemService);

    cartFactory = TestBed.get(DaffCartFactory);
    cartItemFactory = TestBed.get(DaffCartItemFactory);

    mockCart = cartFactory.create();
    mockCartItem = cartItemFactory.create();
    mockCart.items = [mockCartItem];
    cartId = mockCart.id;
    itemId = mockCartItem.item_id;
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(cartItemService).toBeTruthy();
  });

  describe('list | getting all the cart items', () => {
    it('should send a get request and return the cart item', done => {
      cartItemService.list(cartId).subscribe(res => {
        expect(res).toEqual(mockCart.items);
        done();
      });

      const req = httpMock.expectOne(`${cartItemService.url}/${cartId}/`);

      expect(req.request.method).toBe('GET');
      req.flush(mockCart.items);
    });
  });

  describe('get | getting a cart item', () => {
    it('should send a get request and return the cart item', done => {
      cartItemService.get(cartId, itemId).subscribe(res => {
        expect(res).toEqual(jasmine.objectContaining(mockCartItem));
        done();
      });

      const req = httpMock.expectOne(`${cartItemService.url}/${cartId}/${itemId}`);

      expect(req.request.method).toBe('GET');
      req.flush(mockCartItem);
    });
  });

  describe('add | adding an item to the cart', () => {
    let cartItemInput: DaffCartItemInput;
    let expected: DaffCartItem;
    let productId;
    let qty;

    beforeEach(() => {
      productId = 4;
      qty = 2;
      cartItemInput = {
        productId,
        qty
      };
      expected = cartItemFactory.create();
      expected.product_id = productId;
      mockCart.items.push(expected);
    });

    it('should send a post request and respond with a cart containing the new item', done => {
      cartItemService.add(cartId, cartItemInput).subscribe(cart => {
        expect(cart.items).toContain(jasmine.objectContaining(expected));
        done();
      });

      const req = httpMock.expectOne(`${cartItemService.url}/${cartId}/`);

      expect(req.request.method).toBe('POST');
      expect(req.request.body).toEqual(cartItemInput);

      req.flush(mockCart);
    });
  });

  describe('update | updating a cart item', () => {
    let newCartItem: DaffCartItem;

    beforeEach(() => {
      newCartItem = cartItemFactory.create();
      newCartItem.item_id = itemId;
      mockCart.items = [newCartItem];
    });

    it('should send a put request and respond with an updated cart', done => {
      cartItemService.update(cartId, itemId, newCartItem).subscribe(cart => {
        expect(cart).toEqual(jasmine.objectContaining(mockCart));
        done();
      });

      const req = httpMock.expectOne(`${cartItemService.url}/${cartId}/${itemId}`);

      expect(req.request.method).toBe('PUT');
      expect(req.request.body).toEqual(newCartItem);

      req.flush(mockCart);
    });
  });

  describe('delete | removing an item from the cart', () => {
    it('should send a delete request and return the cart without the item', done => {
      cartItemService.delete(cartId, itemId).subscribe(result => {
        expect(result.items).not.toContain(mockCartItem);
        done();
      });

      const req = httpMock.expectOne(`${cartItemService.url}/${cartId}/${itemId}`);

      expect(req.request.method).toBe('DELETE');

      mockCart.items = [];

      req.flush(mockCart);
    });
  });
});
