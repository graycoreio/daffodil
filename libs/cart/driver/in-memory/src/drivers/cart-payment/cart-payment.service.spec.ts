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
  DaffCartPaymentMethod,
  DaffCartAddress,
} from '@daffodil/cart';
import {
  DaffCartFactory,
  DaffCartPaymentFactory,
  DaffCartAddressFactory,
} from '@daffodil/cart/testing';

import { DaffInMemoryCartPaymentService } from './cart-payment.service';

describe('@daffodil/cart/driver/in-memory | CartPaymentService', () => {
  let service: DaffInMemoryCartPaymentService;
  let httpMock: HttpTestingController;
  let cartFactory: DaffCartFactory;
  let cartPaymentFactory: DaffCartPaymentFactory;
  let cartAddressFactory: DaffCartAddressFactory;

  let mockCart: DaffCart;
  let mockPayment: DaffCartPaymentMethod;
  let mockCartAddress: DaffCartAddress;
  let cartId;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [],
      providers: [
        DaffInMemoryCartPaymentService,
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
    service = TestBed.inject(DaffInMemoryCartPaymentService);

    cartFactory = TestBed.inject(DaffCartFactory);
    cartPaymentFactory = TestBed.inject(DaffCartPaymentFactory);
    cartAddressFactory = TestBed.inject(DaffCartAddressFactory);

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
    expect(service).toBeTruthy();
  });

  describe('get | getting a cart payment method', () => {
    it('should send a get request', done => {
      service.get(cartId).subscribe(res => {
        done();
      });

      const req = httpMock.expectOne(`${service['url']}/${cartId}`);

      expect(req.request.method).toBe('GET');
      req.flush(mockPayment);
    });
  });

  describe('update | updating a cart\'s payment', () => {
    beforeEach(() => {
      mockCart.payment = null;
    });

    it('should send a put request', done => {
      service.update(cartId, mockPayment).subscribe(cart => {
        done();
      });

      const req = httpMock.expectOne(`${service['url']}/${cartId}`);

      expect(req.request.method).toBe('PUT');
      expect(req.request.body).toEqual({ payment: mockPayment });

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
      service.updateWithBilling(cartId, mockPayment, mockCartAddress).subscribe(cart => {
        done();
      });

      const req = httpMock.expectOne(`${service['url']}/${cartId}`);

      expect(req.request.method).toBe('PUT');
      expect(req.request.body).toEqual({
        payment: mockPayment,
        address: mockCartAddress,
      });

      mockCart.payment = mockPayment;
      mockCart.billing_address = mockCartAddress;

      req.flush(mockCart);
    });
  });

  describe('remove | removing the payment method from the cart', () => {
    it('should send a delete request', () => {
      service.remove(cartId).subscribe();

      const req = httpMock.expectOne(`${service['url']}/${cartId}`);

      expect(req.request.method).toBe('DELETE');
    });
  });
});
