import { TestBed } from '@angular/core/testing';
import { HttpTestingController, HttpClientTestingModule } from '@angular/common/http/testing';

import { DaffInMemoryPaypalService } from './paypal.service';
import { DaffPaypalTokenResponseFactory } from '../../factories/paypal-token-response.factory';

describe('Testing | Drivers | InMemory | PaypalService', () => {
  let paypalService;
  let httpMock: HttpTestingController;
  let paypalTokenResponseFactory: DaffPaypalTokenResponseFactory;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ],
      providers: [
        DaffInMemoryPaypalService
      ]
    });

    httpMock = TestBed.get(HttpTestingController);
    paypalService = TestBed.get(DaffInMemoryPaypalService);
    paypalTokenResponseFactory = TestBed.get(DaffPaypalTokenResponseFactory);
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

      paypalService.generateToken({cartId: 'cartId'}).subscribe(paypalTokenResponse => {
        expect(paypalTokenResponse).toEqual(stubPaypalTokenResponse);
      });

      const req = httpMock.expectOne(`${paypalService.url}cartId`);
      expect(req.request.method).toBe('GET');

      req.flush(stubPaypalTokenResponse);
    });
  });
});
