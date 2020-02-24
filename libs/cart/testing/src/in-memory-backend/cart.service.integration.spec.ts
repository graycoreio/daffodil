import { TestBed } from '@angular/core/testing';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { switchMap, tap } from 'rxjs/operators';

import { DaffInMemoryBackendCartService } from './cart.service';

describe('DaffInMemoryBackendCartService | Integration', () => {
  let cartTestingService: DaffInMemoryBackendCartService;
  let httpClient: HttpClient;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule,
        HttpClientInMemoryWebApiModule.forRoot(DaffInMemoryBackendCartService)
      ],
    });

    httpClient = TestBed.get(HttpClient);
    cartTestingService = TestBed.get(DaffInMemoryBackendCartService);
  });

  describe('processing a create request', () => {
    it('should return a partial with id', done => {
      httpClient.post<any>('/api/cart', {}).subscribe(result => {
        expect(result.id).toBeDefined();
        done();
      });
    });
  });

  describe('processing a clear request', () => {
    let cartId;

    beforeEach(done => {
      httpClient.post<any>('/api/cart', {}).pipe(
        switchMap(({id}) => {
          cartId = id;
          return httpClient.post<any>('/api/cart/addToCart', {
            cartId,
            productId: 'replaceme',
            qty: 4
          });
        }),
      ).subscribe(() => done());
    });

    it('should remove the items in the cart', done => {
      httpClient.post<any>('/api/cart/clear', {cartId}).subscribe(result => {
        expect(result.items.length).toEqual(0);
        done();
      });
    });
  });

  describe('processing an addToCart request', () => {
    let cartId;
    let productIdValue;

    beforeEach(done => {
      httpClient.post<any>('/api/cart', {}).pipe(
        tap(({id}) => {
          cartId = id;
        }),
      ).subscribe(() => done());
    });

    describe('and product is unique', () => {
      it('should add an item to the cart', done => {
        httpClient.post<any>('/api/cart/addToCart', {
          cartId,
          productId: 'addToCartTest'
        }).subscribe(result => {
          expect(result.items.length).toEqual(1);
          done();
        });
      });

      it('should set qty of the cartItem to the given qty value', done => {
        const qty = 2

        httpClient.post<any>('/api/cart/addToCart', {cartId, qty, productId: 'qtyTest'}).subscribe(result => {
          expect(result.items[0].qty).toEqual(qty);
          done();
        });
      });

      it('should set productId of the cartItem to the given productId value', done => {
        productIdValue = 'productIdTest';

        httpClient.post<any>('/api/cart/addToCart', {cartId, productId: productIdValue}).subscribe(result => {
          expect(result.items[0].product_id).toEqual(productIdValue);
          done();
        });
      });

      it('should set an image on cartItem', done => {
        productIdValue = 'imageTest';

        httpClient.post<any>('/api/cart/addToCart', {cartId, productId: productIdValue}).subscribe(result => {
          expect(result.items[0].image).toBeDefined();
          done();
        });
      });
    });

    describe('and product is not unique', () => {
      it('should add given qty to existing product', done => {
        const qty = 2;
        const body = {
          cartId,
          productId: 'qtyTest',
          qty
        };

        httpClient.post<any>('/api/cart/addToCart', body).subscribe(result => {
          expect(result.items[0].qty).toEqual(qty);

          httpClient.post<any>('/api/cart/addToCart', body).subscribe(res => {
            expect(res.items[0].qty).toEqual(qty * 2);
            done();
          });
        });

      });
    });
  });

  describe('processing a get request', () => {
    let cartId;

    beforeEach(done => {
      httpClient.post<any>('/api/cart', {}).pipe(
        tap(({id}) => {
          cartId = id;
        }),
      ).subscribe(() => done());
    });


    it('should return the correct cart', done => {
      httpClient.get<any>(`/api/cart/${cartId}`).subscribe(result => {
        expect(result.id).toEqual(cartId);
        done();
      });
    });
  });
});
