import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { Observable } from 'rxjs';

import { DaffCartWithStoreCredit } from '@daffodil/cart-store-credit';
import { DaffCartWithStoreCreditFactory } from '@daffodil/cart-store-credit/testing';

import { DaffCartStoreCreditInMemoryDriver } from './store-credit.service';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';

describe('@daffodil/cart-store-credit/driver/in-memory | DaffCartStoreCreditInMemoryDriver', () => {
  let service: DaffCartStoreCreditInMemoryDriver;
  let httpMock: HttpTestingController;
  let storeCreditFactory: DaffCartWithStoreCreditFactory;
  let mockCartWithStoreCredit: DaffCartWithStoreCredit;

  beforeEach(() => {
    TestBed.configureTestingModule({
    imports: [],
    providers: [
        DaffCartStoreCreditInMemoryDriver,
        provideHttpClient(withInterceptorsFromDi()),
        provideHttpClientTesting(),
    ]
});

    httpMock = TestBed.inject(HttpTestingController);
    service = TestBed.inject(DaffCartStoreCreditInMemoryDriver);
    storeCreditFactory = TestBed.inject(DaffCartWithStoreCreditFactory);

    mockCartWithStoreCredit = storeCreditFactory.create();
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('apply', () => {
    let url: string;
    let result: Observable<DaffCartWithStoreCredit>;

    beforeEach(() => {
      url = service.url;
      result = service.apply(mockCartWithStoreCredit.id);
    });

    it('should send a post request and return a store credit response', done => {
      result.subscribe((resp) => {
        expect(resp).toEqual(mockCartWithStoreCredit);
        done();
      });

      const req = httpMock.expectOne(`${url}/${mockCartWithStoreCredit.id}`);
      expect(req.request.method).toBe('POST');

      req.flush(mockCartWithStoreCredit);
    });
  });

  describe('remove', () => {
    let url: string;
    let result: Observable<DaffCartWithStoreCredit>;

    beforeEach(() => {
      url = service.url;
      result = service.remove(mockCartWithStoreCredit.id);
    });

    it('should send a delete request and return a store credit response', done => {
      result.subscribe((resp) => {
        expect(resp).toEqual(mockCartWithStoreCredit);
        done();
      });

      const req = httpMock.expectOne(`${url}/${mockCartWithStoreCredit.id}`);
      expect(req.request.method).toBe('DELETE');

      req.flush(mockCartWithStoreCredit);
    });
  });
});
