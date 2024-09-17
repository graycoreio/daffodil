import {
  provideHttpClient,
  withInterceptorsFromDi,
} from '@angular/common/http';
import {
  HttpTestingController,
  provideHttpClientTesting,
} from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { Observable } from 'rxjs';

import { DaffPaymentResponse } from '@daffodil/payment';
import {
  DaffPaymentRequestFactory,
  DaffPaymentResponseFactory,
} from '@daffodil/payment/testing';

import { DaffPaymentInMemoryDriver } from './payment.service';

describe('@daffodil/payment/driver/in-memory | DaffPaymentInMemoryDriver', () => {
  let service: DaffPaymentInMemoryDriver;
  let httpMock: HttpTestingController;
  let paymentRequestFactory: DaffPaymentRequestFactory;
  let paymentResponseFactory: DaffPaymentResponseFactory;
  let mockResponse: DaffPaymentResponse;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [],
      providers: [
        DaffPaymentInMemoryDriver,
        provideHttpClient(withInterceptorsFromDi()),
        provideHttpClientTesting(),
      ],
    });

    httpMock = TestBed.inject(HttpTestingController);
    service = TestBed.inject(DaffPaymentInMemoryDriver);
    paymentRequestFactory = TestBed.inject(DaffPaymentRequestFactory);
    paymentResponseFactory = TestBed.inject(DaffPaymentResponseFactory);

    mockResponse = paymentResponseFactory.create();
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('generateToken', () => {
    let url: string;
    let result: Observable<DaffPaymentResponse>;

    beforeEach(() => {
      url = service.url;
      result = service.generateToken(paymentRequestFactory.create());
    });

    it('should send a get request and return a token response', done => {
      result.subscribe((resp) => {
        expect(resp).toBeDefined();
        done();
      });

      const req = httpMock.expectOne(url);
      expect(req.request.method).toBe('GET');

      req.flush(mockResponse);
    });
  });
});
