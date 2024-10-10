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
import { of } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { DaffCart } from '@daffodil/cart';
import { DaffCartNotFoundError } from '@daffodil/cart/driver';
import { DaffCartFactory } from '@daffodil/cart/testing';

import { DaffInMemoryCartService } from './cart.service';

describe('@daffodil/cart/driver/in-memory | DaffInMemoryCartService', () => {
  let service: DaffInMemoryCartService;
  let httpMock: HttpTestingController;
  let cartFactory: DaffCartFactory;

  let mockCart: DaffCart;
  let cartId;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [],
      providers: [
        DaffInMemoryCartService,
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
    cartFactory = TestBed.inject(DaffCartFactory);
    service = TestBed.inject(DaffInMemoryCartService);

    mockCart = cartFactory.create();
    cartId = mockCart.id;
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('get | getting a cart', () => {
    it('should send a get request and return the cart in the response', done => {
      service.get(cartId).subscribe(({ response }) => {
        expect(response).toEqual(mockCart);
        done();
      });

      const req = httpMock.expectOne(`${service['url']}/${cartId}`);

      expect(req.request.method).toBe('GET');
      req.flush(mockCart);
    });

    it('should throw a daffodil error when it receives an error', (done) => {
      service.get(cartId).pipe(
        catchError((error) => {
          expect(error).toEqual(new DaffCartNotFoundError(error.message));
          done();
          return of(null);
        }),
      ).subscribe();

      const req = httpMock.expectOne(`${service['url']}/${cartId}`);

      expect(req.request.method).toBe('GET');
      req.error(new ErrorEvent('404'));
    });
  });

  describe('addToCart', () => {
    let productId;
    let qty;

    beforeEach(() => {
      productId = 'productId';
      qty = 1;
    });

    describe('a successful addToCart request', () => {
      it('should send a post request to `api/cart/addToCart` and respond with a cart', done => {
        service.addToCart(productId, qty).subscribe(cart => {
          expect(cart).toEqual(mockCart);
          done();
        });

        const req = httpMock.expectOne(`${service['url']}/addToCart`);

        expect(req.request.method).toBe('POST');
        expect(req.request.body).toEqual({
          productId,
          qty,
        });

        req.flush(mockCart);
      });
    });
  });

  describe('clear | removing all items from the cart', () => {
    it('should send a post request and return the cart that has no items', done => {
      service.clear(cartId).subscribe(result => {
        expect(result).toEqual(mockCart);
        done();
      });

      const req = httpMock.expectOne(`${service['url']}/${cartId}/clear`);

      expect(req.request.method).toBe('POST');

      mockCart.items = [];

      req.flush(mockCart);
    });
  });

  describe('merge', () => {
    it('should send a post request and return the cart', done => {
      service.merge(cartId).subscribe(result => {
        expect(result.response).toEqual(mockCart);
        done();
      });

      const req = httpMock.expectOne(`${service['url']}/${cartId}/merge`);

      expect(req.request.method).toBe('POST');

      req.flush(mockCart);
    });
  });

  describe('create | creating a cart', () => {
    it('should send a post request and return the cart', done => {
      service.create().subscribe(result => {
        expect(result).toEqual(jasmine.objectContaining({ id: cartId }));
        done();
      });

      const req = httpMock.expectOne(`${service['url']}`);

      expect(req.request.method).toBe('POST');

      req.flush({
        id: cartId,
      });
    });
  });
});
