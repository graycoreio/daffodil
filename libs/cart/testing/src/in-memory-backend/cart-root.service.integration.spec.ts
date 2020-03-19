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
  let cartId;

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
});
