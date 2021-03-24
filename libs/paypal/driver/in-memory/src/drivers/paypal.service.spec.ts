import {
  HttpTestingController,
  HttpClientTestingModule,
} from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { DaffPaypalTokenResponseFactory } from '@daffodil/paypal/testing';

import { DaffInMemoryPaypalService } from './paypal.service';

describe('Testing | Drivers | InMemory | PaypalService', () => {
  let paypalService;
  let httpMock: HttpTestingController;
  let paypalTokenResponseFactory: DaffPaypalTokenResponseFactory;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
      ],
      providers: [
        DaffInMemoryPaypalService,
      ],
    });

    httpMock = TestBed.inject(HttpTestingController);
    paypalService = TestBed.inject(DaffInMemoryPaypalService);
    paypalTokenResponseFactory = TestBed.inject(DaffPaypalTokenResponseFactory);
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

      const req = httpMock.expectOne(`${paypalService.url}cartId`);
      expect(req.request.method).toBe('GET');

      req.flush(stubPaypalTokenResponse);
    });
  });
});
