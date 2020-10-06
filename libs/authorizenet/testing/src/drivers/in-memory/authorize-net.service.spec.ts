import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { DaffAuthorizeNetTokenRequest } from '@daffodil/authorizenet';

import { DaffInMemoryAuthorizeNetService } from './authorize-net.service';

describe('Driver | In Memory | AuthorizeNet | AuthorizeNetService', () => {
  let authorizeNetService: DaffInMemoryAuthorizeNetService;
	let httpMock: HttpTestingController;
	const flushedResponse = {
		response: 'response'
	};

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ],
      providers: [
        DaffInMemoryAuthorizeNetService
      ]
    });

    httpMock = TestBed.get(HttpTestingController);
    authorizeNetService = TestBed.get(DaffInMemoryAuthorizeNetService);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(authorizeNetService).toBeTruthy();
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
						securitycode: '123'
					}
				}
        authorizeNetService.generateToken(paymentTokenRequest).subscribe(response => {
          expect(response).toEqual(flushedResponse);
          done();
        });

        const req = httpMock.expectOne(`${authorizeNetService.url}/generateToken`);

        expect(req.request.method).toBe('POST');
        expect(req.request.body).toEqual(paymentTokenRequest);

        req.flush(flushedResponse);
      });
    });
  });
});
