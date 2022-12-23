import {
  HttpTestingController,
  HttpClientTestingModule,
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
      imports: [
        HttpClientTestingModule,
      ],
      providers: [
        DaffCustomerInMemoryDriver,
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
});
