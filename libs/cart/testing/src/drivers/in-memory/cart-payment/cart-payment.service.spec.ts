import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import {
  DaffCart,
  DaffCartPaymentMethod,
  DaffCartAddress
} from '@daffodil/cart';
import {
  DaffCartFactory,
  DaffCartPaymentFactory,
  DaffCartAddressFactory
} from '@daffodil/cart/testing';

import { DaffInMemoryCartPaymentService } from './cart-payment.service';

describe('Driver | In Memory | Cart | CartPaymentService', () => {
  let cartPaymentService: DaffInMemoryCartPaymentService;
  let httpMock: HttpTestingController;
  let cartFactory: DaffCartFactory;
  let cartPaymentFactory: DaffCartPaymentFactory;
  let cartAddressFactory: DaffCartAddressFactory;

  let mockCart: DaffCart;
  let mockPayment: DaffCartPaymentMethod
  let mockCartAddress: DaffCartAddress;
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
    cartAddressFactory = TestBed.get(DaffCartAddressFactory);

    mockCart = cartFactory.create();
    mockPayment = cartPaymentFactory.create();
    mockCartAddress = cartAddressFactory.create();
    mockCart.billing_address = mockCartAddress;
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
      expect(req.request.body).toEqual({payment: mockPayment});

      mockCart.payment = mockPayment;

      req.flush(mockCart);
    });
  });

  describe('updateWithBilling | updating a cart\'s payment and billing address', () => {
    beforeEach(() => {
      mockCart.payment = null;
      mockCart.billing_address = null;
    });

    it('should send a put request', done => {
      cartPaymentService.updateWithBilling(cartId, mockPayment, mockCartAddress).subscribe(cart => {
        done();
      });

      const req = httpMock.expectOne(`${cartPaymentService.url}/${cartId}`);

      expect(req.request.method).toBe('PUT');
      expect(req.request.body).toEqual({
        payment: mockPayment,
        address: mockCartAddress
      });

      mockCart.payment = mockPayment;
      mockCart.billing_address = mockCartAddress;

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
