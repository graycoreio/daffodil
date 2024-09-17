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

import { DaffCustomerPayment } from '@daffodil/customer-payment';
import { DaffCustomerPaymentFactory } from '@daffodil/customer-payment/testing';

import { DaffCustomerPaymentInMemoryDriver } from './payment.service';

describe('@daffodil/customer-payment/driver/in-memory | DaffCustomerPaymentInMemoryDriver', () => {
  let service: DaffCustomerPaymentInMemoryDriver;
  let httpMock: HttpTestingController;
  let paymentFactory: DaffCustomerPaymentFactory;
  let mockPayment: DaffCustomerPayment;

  beforeEach(() => {
    TestBed.configureTestingModule({
    imports: [],
    providers: [
        DaffCustomerPaymentInMemoryDriver,
        provideHttpClient(withInterceptorsFromDi()),
        provideHttpClientTesting(),
    ],
});

    httpMock = TestBed.inject(HttpTestingController);
    service = TestBed.inject(DaffCustomerPaymentInMemoryDriver);
    paymentFactory = TestBed.inject(DaffCustomerPaymentFactory);

    mockPayment = paymentFactory.create();
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('list', () => {
    let url: string;
    let result: Observable<DaffCustomerPayment[]>;

    beforeEach(() => {
      url = service.url;
      result = service.list();
    });

    it('should send a get request and return a list of payments', done => {
      result.subscribe((resp) => {
        expect(resp).toEqual([mockPayment]);
        done();
      });

      const req = httpMock.expectOne(url);
      expect(req.request.method).toBe('GET');

      req.flush([mockPayment]);
    });
  });

  describe('get', () => {
    let url: string;
    let result: Observable<DaffCustomerPayment>;

    beforeEach(() => {
      url = service.url;
      result = service.get(mockPayment.id);
    });

    it('should send a get request and return an payment response', done => {
      result.subscribe((resp) => {
        expect(resp).toEqual(mockPayment);
        done();
      });

      const req = httpMock.expectOne(`${url}/${mockPayment.id}`);
      expect(req.request.method).toBe('GET');

      req.flush(mockPayment);
    });
  });

  describe('update', () => {
    let url: string;
    let result: Observable<DaffCustomerPayment[]>;

    beforeEach(() => {
      url = `${service.url}/${mockPayment.id}`;
      result = service.update(mockPayment);
    });

    it('should send a put request and return a list of payments', done => {
      result.subscribe((resp) => {
        expect(resp).toEqual([mockPayment]);
        done();
      });

      const req = httpMock.expectOne(url);
      expect(req.request.method).toBe('PUT');

      req.flush([mockPayment]);
    });
  });

  describe('add', () => {
    let url: string;
    let result: Observable<DaffCustomerPayment[]>;

    beforeEach(() => {
      url = service.url;
      result = service.add({
        kind: 'kind',
      });
    });

    it('should send a post request and return a list of payments', done => {
      result.subscribe((resp) => {
        expect(resp).toEqual([mockPayment]);
        done();
      });

      const req = httpMock.expectOne(url);
      expect(req.request.method).toBe('POST');

      req.flush([mockPayment]);
    });
  });

  describe('delete', () => {
    let url: string;
    let result: Observable<DaffCustomerPayment[]>;

    beforeEach(() => {
      url = `${service.url}/${mockPayment.id}`;
      result = service.delete(mockPayment.id);
    });

    it('should send a delete request and return a list of payments', done => {
      result.subscribe((resp) => {
        expect(resp).toEqual([mockPayment]);
        done();
      });

      const req = httpMock.expectOne(url);
      expect(req.request.method).toBe('DELETE');

      req.flush([mockPayment]);
    });
  });
});
