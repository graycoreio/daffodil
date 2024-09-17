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

import { DaffCustomer } from '@daffodil/customer';
import { DaffCustomerFactory } from '@daffodil/customer/testing';

import { DaffCustomerInMemoryDriver } from './customer.service';

describe('@daffodil/customer/driver/in-memory | DaffCustomerInMemoryDriver', () => {
  let service: DaffCustomerInMemoryDriver;
  let httpMock: HttpTestingController;
  let customerFactory: DaffCustomerFactory;
  let mockResponse: DaffCustomer;

  beforeEach(() => {
    TestBed.configureTestingModule({
    imports: [],
    providers: [
        DaffCustomerInMemoryDriver,
        provideHttpClient(withInterceptorsFromDi()),
        provideHttpClientTesting(),
    ],
});

    httpMock = TestBed.inject(HttpTestingController);
    service = TestBed.inject(DaffCustomerInMemoryDriver);
    customerFactory = TestBed.inject(DaffCustomerFactory);

    mockResponse = customerFactory.create();
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('get', () => {
    let url: string;
    let result: Observable<DaffCustomer>;

    beforeEach(() => {
      url = service.url;
      result = service.get();
    });

    it('should send a get request and return a customer response', done => {
      result.subscribe((resp) => {
        expect(resp).toEqual(mockResponse);
        done();
      });

      const req = httpMock.expectOne(url);
      expect(req.request.method).toBe('GET');

      req.flush(mockResponse);
    });
  });

  describe('update', () => {
    let url: string;
    let result: Observable<DaffCustomer>;

    beforeEach(() => {
      url = `${service.url}/customer`;
      result = service.update(mockResponse);
    });

    it('should send a put request and return a customer response', done => {
      result.subscribe((resp) => {
        expect(resp).toEqual(mockResponse);
        done();
      });

      const req = httpMock.expectOne(url);
      expect(req.request.method).toBe('PUT');

      req.flush(mockResponse);
    });
  });

  describe('changeEmail', () => {
    let url: string;
    let result: Observable<DaffCustomer>;

    beforeEach(() => {
      url = `${service.url}/email`;
      result = service.changeEmail('email', 'password');
    });

    it('should send a put request and return a customer response', done => {
      result.subscribe((resp) => {
        expect(resp).toEqual(mockResponse);
        done();
      });

      const req = httpMock.expectOne(url);
      expect(req.request.method).toBe('PUT');

      req.flush(mockResponse);
    });
  });

  describe('changePassword', () => {
    let url: string;
    let result: Observable<void>;

    beforeEach(() => {
      url = `${service.url}/password`;
      result = service.changePassword('old', 'new');
    });

    it('should send a put request and return void', done => {
      result.subscribe((resp) => {
        expect(resp).toBeUndefined();
        done();
      });

      const req = httpMock.expectOne(url);
      expect(req.request.method).toBe('PUT');

      req.flush(mockResponse);
    });
  });
});
