import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { Observable } from 'rxjs';

import { DaffCustomerStoreCredit } from '@daffodil/customer-store-credit';
import { DaffCustomerStoreCreditFactory } from '@daffodil/customer-store-credit/testing';

import { DaffCustomerStoreCreditInMemoryDriver } from './store-credit.service';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';

describe('@daffodil/customer-store-credit/driver/in-memory | DaffCustomerStoreCreditInMemoryDriver', () => {
  let service: DaffCustomerStoreCreditInMemoryDriver;
  let httpMock: HttpTestingController;
  let storeCreditFactory: DaffCustomerStoreCreditFactory;
  let mockStoreCredit: DaffCustomerStoreCredit;

  beforeEach(() => {
    TestBed.configureTestingModule({
    imports: [],
    providers: [
        DaffCustomerStoreCreditInMemoryDriver,
        provideHttpClient(withInterceptorsFromDi()),
        provideHttpClientTesting(),
    ]
});

    httpMock = TestBed.inject(HttpTestingController);
    service = TestBed.inject(DaffCustomerStoreCreditInMemoryDriver);
    storeCreditFactory = TestBed.inject(DaffCustomerStoreCreditFactory);

    mockStoreCredit = storeCreditFactory.create();
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('get', () => {
    let url: string;
    let result: Observable<DaffCustomerStoreCredit>;

    beforeEach(() => {
      url = service.url;
      result = service.get();
    });

    it('should send a get request and return a store credit response', done => {
      result.subscribe((resp) => {
        expect(resp).toEqual(mockStoreCredit);
        done();
      });

      const req = httpMock.expectOne(url);
      expect(req.request.method).toBe('GET');

      req.flush(mockStoreCredit);
    });
  });
});
