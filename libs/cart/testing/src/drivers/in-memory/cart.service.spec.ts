import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { DaffCart } from '@daffodil/cart';

import { DaffCartFactory } from '../../factories/cart.factory';
import { DaffInMemoryCartService } from './cart.service';

describe('Driver | In Memory | Cart | CartService', () => {
  let cartService: DaffInMemoryCartService;
  let httpMock: HttpTestingController;
  let cartFactory: DaffCartFactory;
  let mockCart: DaffCart;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ],
      providers: [
        DaffInMemoryCartService
      ]
    });
    
    httpMock = TestBed.get(HttpTestingController);
    cartFactory = TestBed.get(DaffCartFactory);
    cartService = TestBed.get(DaffInMemoryCartService);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(cartService).toBeTruthy();
  });

  describe('get | getting a cart', () => {
    it('should send a get request', () => {
      mockCart = cartFactory.create();

      cartService.get().subscribe(cart => {
        expect(cart).toEqual(mockCart);
      });

      const req = httpMock.expectOne(`${cartService.url}`);

      expect(req.request.method).toBe('GET');
      req.flush(mockCart);
    });
  });

  describe('addToCart', () => {
    let productId;
    let qty;

    beforeEach(() => {
      productId = 'productId';
      qty = 1;

      mockCart = cartFactory.create();
    });

    describe('a successful addToCart request', () => {
      it('should send a post request to `api/cart/addToCart` and respond with a cart', () => {
        cartService.addToCart(productId, qty).subscribe(cart => {
          expect(cart).toEqual(mockCart);
        });  
  
        const req = httpMock.expectOne(`${cartService.url}/addToCart`);
  
        expect(req.request.method).toBe('POST');
        expect(req.request.body).toEqual({
          'productId': productId,
          'qty': qty
        });
        
        req.flush(mockCart);
      });
    });
  });

  describe('clear', () => {

    beforeEach(() => {
      mockCart = cartFactory.create();
    });

    describe('a successful clear request', () => {
      it('should send a post request to `api/cart/clear` and not return a value', () => {
        cartService.clear().subscribe();
        
        const req = httpMock.expectOne(`${cartService.url}/clear`);

        expect(req.request.method).toBe('POST');
        expect(req.request.body).toEqual({});

        req.flush(mockCart);
      });
    });
  });
});
