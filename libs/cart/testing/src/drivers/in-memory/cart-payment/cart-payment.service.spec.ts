import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import {
  DaffCart,
  DaffCartPaymentMethod
} from '@daffodil/cart';
import {
  DaffCartFactory,
  DaffCartPaymentFactory
} from '@daffodil/cart/testing';

import { DaffInMemoryCartPaymentService } from './cart-payment.service';

describe('Driver | In Memory | Cart | CartPaymentService', () => {
  let cartPaymentService: DaffInMemoryCartPaymentService;
  let httpMock: HttpTestingController;
  let cartFactory: DaffCartFactory;
  let cartPaymentFactory: DaffCartPaymentFactory;

  let mockCart: DaffCart;
  let mockPayment: DaffCartPaymentMethod
  let cartId;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ],
      providers: [
        DaffInMemoryCartPaymentService
      ]
    });

    httpMock = TestBed.get(HttpTestingController);
    cartPaymentService = TestBed.get(DaffInMemoryCartPaymentService);

    cartFactory = TestBed.get(DaffCartFactory);
    cartPaymentFactory = TestBed.get(DaffCartPaymentFactory);

    mockCart = cartFactory.create();
    mockPayment = cartPaymentFactory.create();
    mockCart.payment = mockPayment;
    cartId = mockCart.id;
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(cartPaymentService).toBeTruthy();
  });

  describe('get | getting a cart payment method', () => {
    it('should send a get request', done => {
      cartPaymentService.get(cartId).subscribe(res => {
        done();
      });

      const req = httpMock.expectOne(`${cartPaymentService.url}/${cartId}`);

      expect(req.request.method).toBe('GET');
      req.flush(mockPayment);
    });
  });

  describe('update | updating a cart\'s payment', () => {
    beforeEach(() => {
      mockCart.payment = null;
    });

    it('should send a put request', done => {
      cartPaymentService.update(cartId, mockPayment).subscribe(cart => {
        done();
      });

      const req = httpMock.expectOne(`${cartPaymentService.url}/${cartId}`);

      expect(req.request.method).toBe('PUT');
      expect(req.request.body).toEqual(mockPayment);

      mockCart.payment = mockPayment;

      req.flush(mockCart);
    });
  });

  describe('remove | removing the payment method from the cart', () => {
    it('should send a delete request', () => {
      cartPaymentService.remove(cartId).subscribe();

      const req = httpMock.expectOne(`${cartPaymentService.url}/${cartId}`);

      expect(req.request.method).toBe('DELETE');
    });
  });
});
