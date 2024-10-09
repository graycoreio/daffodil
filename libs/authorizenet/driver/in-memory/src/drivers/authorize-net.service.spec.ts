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

import { DaffAuthorizeNetTokenRequest } from '@daffodil/authorizenet';

import { DaffInMemoryAuthorizeNetService } from './authorize-net.service';

describe('@daffodil/authorizenet/driver/in-memory | AuthorizeNetService', () => {
  let service: DaffInMemoryAuthorizeNetService;
  let httpMock: HttpTestingController;
  const flushedResponse = {
    response: 'response',
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [],
      providers: [
        DaffInMemoryAuthorizeNetService,
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
    service = TestBed.inject(DaffInMemoryAuthorizeNetService);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('generateToken', () => {
    let productId;
    let qty;

    beforeEach(() => {
      productId = 'productId';
      qty = 1;
    });

    describe('a successful generateToken request', () => {
      it('should send a post request to `api/authorizenet/generateToken` and return a response', done => {
        const paymentTokenRequest: DaffAuthorizeNetTokenRequest = {
          creditCard: {
            cardnumber: '5555555555554444',
            month: 'month',
            year: 'year',
            securitycode: '123',
          },
        };
        service.generateToken(paymentTokenRequest).subscribe(response => {
          expect(response).toEqual(flushedResponse);
          done();
        });

        const req = httpMock.expectOne(`${service['url']}/generateToken`);

        expect(req.request.method).toBe('POST');
        expect(req.request.body).toEqual(paymentTokenRequest);

        req.flush(flushedResponse);
      });
    });
  });
});
