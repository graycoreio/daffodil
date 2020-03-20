import { TestBed } from '@angular/core/testing';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule, } from 'angular-in-memory-web-api';

import { DaffCart, DaffCartItem } from '@daffodil/cart';
import { DaffCartFactory, DaffCartItemFactory } from '@daffodil/cart/testing';

import { DaffInMemoryBackendCartRootService } from './cart-root.service';

describe('DaffInMemoryBackendCartRootService | Integration', () => {
  let httpClient: HttpClient;

  let cartFactory: DaffCartFactory;
  let cartItemFactory: DaffCartItemFactory;

  let mockCart: DaffCart;
  let mockCartItem: DaffCartItem;
  let cartId: DaffCart['id'];
  let itemId: DaffCartItem['item_id'];

  beforeEach(done => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule,
        HttpClientInMemoryWebApiModule.forRoot(DaffInMemoryBackendCartRootService, {delay: 0}),
      ],
    });

    httpClient = TestBed.get(HttpClient);

    cartFactory = TestBed.get(DaffCartFactory);
    cartItemFactory = TestBed.get(DaffCartItemFactory);

    mockCart = cartFactory.create();
    mockCartItem = cartItemFactory.create();
    cartId = mockCart.id;
    itemId = mockCartItem.item_id;
    mockCart.items.push(mockCartItem);

    httpClient.post<any>('commands/resetDb', {carts: [mockCart]}).subscribe(() => done());
  });

  // cart
  describe('processing a clear request', () => {
    it('should remove the items in the cart', done => {
      httpClient.post<any>(`api/cart/${cartId}/clear`, {}).subscribe(result => {
        expect(result.items.length).toEqual(0);
        done();
      });
    });
  });

  describe('processing a get request', () => {
    it('should return the correct cart', done => {
      httpClient.get<any>(`/api/cart/${cartId}`).subscribe(result => {
        expect(result.id).toEqual(cartId);
        done();
      });
    });
  });

  describe('processing a create request', () => {
    it('should return a partial with id', done => {
      httpClient.post<any>('/api/cart', {}).subscribe(result => {
        expect(result.id).toBeDefined();
        done();
      });
    });
  });

  describe('processing an addToCart request', () => {
    it('should return an empty object', done => {
      httpClient.post<any>('/api/cart/addToCart', {
        cartId,
        productId: 'addToCartTest'
      }).subscribe(result => {
        expect(result).toEqual({});
        done();
      });
    });
  });

  // cart-item
  describe('processing a list items request', () => {
    let result;

    beforeEach(done => {
      httpClient.get<any>(`api/cart-items/${cartId}/`).subscribe(res => {
        result = res;
        done();
      });
    });

    it('should return the items', () => {
      expect(result).toEqual(mockCart.items);
    });
  });

  describe('processing a get item request', () => {
    let productId;
    let qty;
    let result;

    beforeEach(done => {
      productId = 'productId';
      qty = 4;
      httpClient.get<any>(`api/cart-items/${cartId}/${itemId}`).subscribe(res => {
        result = res
        done();
      });
    });

    it('should return the item', () => {
      expect(result).toEqual(mockCartItem);
    });
  });

  describe('processing an update item request', () => {
    let qty;
    let result;

    beforeEach(done => {
      qty = mockCartItem.qty + 1;
      httpClient.put<any>(`api/cart-items/${cartId}/${itemId}`, {qty}).subscribe(res => {
        result = res
        done();
      });
    });

    it('should return the updated cart with the updated item', () => {
      expect(result.items[0].qty).toEqual(qty);
    });
  });

  describe('processing an add item request', () => {
    let productId;
    let qty;
    let result;

    beforeEach(done => {
      productId = mockCartItem.product_id;
      qty = mockCartItem.qty;

      httpClient.post<any>(`api/cart-items/${cartId}/`, {
        productId,
        qty
      }).subscribe(res => {
        result = res
        done();
      });
    });

    it('should return the updated cart with the added item', () => {
      expect(result.items[0].product_id).toEqual(productId);
      expect(result.items[0].qty).toEqual(qty);
    });
  });

  describe('processing a delete item request', () => {
    let result;

    beforeEach(done => {
      httpClient.delete<any>(`api/cart-items/${cartId}/${itemId}`).subscribe(res => {
        result = res
        done();
      });
    });

    it('should return the updated cart without the item', () => {
      expect(result.items.find(({item_id}) => String(item_id) === String(itemId))).toBeFalsy();
    });
  });
});
