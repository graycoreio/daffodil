import {
  provideHttpClient,
  withInterceptorsFromDi,
} from '@angular/common/http';
import {
  HttpTestingController,
  provideHttpClientTesting,
} from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { DaffPaypalExpressTokenResponseFactory } from '@daffodil/paypal/testing';

import { DaffInMemoryPaypalService } from './paypal.service';

describe('@daffodil/paypal/driver/in-memory | DaffInMemoryPaypalService', () => {
  let paypalService;
  let httpMock: HttpTestingController;
  let paypalTokenResponseFactory: DaffPaypalExpressTokenResponseFactory;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [],
      providers: [
        DaffInMemoryPaypalService,
        provideHttpClient(withInterceptorsFromDi()),
        provideHttpClientTesting(),
      ],
    });

    httpMock = TestBed.inject(HttpTestingController);
    paypalService = TestBed.inject(DaffInMemoryPaypalService);
    paypalTokenResponseFactory = TestBed.inject(DaffPaypalExpressTokenResponseFactory);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(paypalService).toBeTruthy();
  });

  describe('generateToken', () => {

    it('should send a generateToken request', () => {
      const stubPaypalTokenResponse = paypalTokenResponseFactory.create();

      paypalService.generateToken({ cartId: 'cartId' }).subscribe(paypalTokenResponse => {
        expect(paypalTokenResponse).toEqual(stubPaypalTokenResponse);
      });

      const req = httpMock.expectOne(paypalService.url);
      expect(req.request.method).toBe('GET');

      req.flush(stubPaypalTokenResponse);
    });
  });
});
