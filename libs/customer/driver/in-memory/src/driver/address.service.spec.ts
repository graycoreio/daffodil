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

import { DaffCustomerAddress } from '@daffodil/customer';
import { DaffCustomerAddressFactory } from '@daffodil/customer/testing';

import { DaffCustomerAddressInMemoryDriver } from './address.service';

describe('@daffodil/customer/driver/in-memory | DaffCustomerAddressInMemoryDriver', () => {
  let service: DaffCustomerAddressInMemoryDriver;
  let httpMock: HttpTestingController;
  let addressFactory: DaffCustomerAddressFactory;
  let mockAddress: DaffCustomerAddress;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [],
      providers: [
        DaffCustomerAddressInMemoryDriver,
        provideHttpClient(withInterceptorsFromDi()),
        provideHttpClientTesting(),
      ],
    });

    httpMock = TestBed.inject(HttpTestingController);
    service = TestBed.inject(DaffCustomerAddressInMemoryDriver);
    addressFactory = TestBed.inject(DaffCustomerAddressFactory);

    mockAddress = addressFactory.create();
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('list', () => {
    let url: string;
    let result: Observable<DaffCustomerAddress[]>;

    beforeEach(() => {
      url = service.url;
      result = service.list();
    });

    it('should send a get request and return a list of addresses', done => {
      result.subscribe((resp) => {
        expect(resp).toEqual([mockAddress]);
        done();
      });

      const req = httpMock.expectOne(url);
      expect(req.request.method).toBe('GET');

      req.flush([mockAddress]);
    });
  });

  describe('get', () => {
    let url: string;
    let result: Observable<DaffCustomerAddress>;

    beforeEach(() => {
      url = service.url;
      result = service.get(mockAddress.id);
    });

    it('should send a get request and return an address response', done => {
      result.subscribe((resp) => {
        expect(resp).toEqual(mockAddress);
        done();
      });

      const req = httpMock.expectOne(`${url}/${mockAddress.id}`);
      expect(req.request.method).toBe('GET');

      req.flush(mockAddress);
    });
  });

  describe('update', () => {
    let url: string;
    let result: Observable<DaffCustomerAddress[]>;

    beforeEach(() => {
      url = `${service.url}/${mockAddress.id}`;
      result = service.update(mockAddress);
    });

    it('should send a put request and return a list of addresses', done => {
      result.subscribe((resp) => {
        expect(resp).toEqual([mockAddress]);
        done();
      });

      const req = httpMock.expectOne(url);
      expect(req.request.method).toBe('PUT');

      req.flush([mockAddress]);
    });
  });

  describe('add', () => {
    let url: string;
    let result: Observable<DaffCustomerAddress[]>;

    beforeEach(() => {
      url = service.url;
      result = service.add(mockAddress);
    });

    it('should send a post request and return a list of addresses', done => {
      result.subscribe((resp) => {
        expect(resp).toEqual([mockAddress]);
        done();
      });

      const req = httpMock.expectOne(url);
      expect(req.request.method).toBe('POST');

      req.flush([mockAddress]);
    });
  });

  describe('delete', () => {
    let url: string;
    let result: Observable<DaffCustomerAddress[]>;

    beforeEach(() => {
      url = `${service.url}/${mockAddress.id}`;
      result = service.delete(mockAddress.id);
    });

    it('should send a delete request and return a list of addresses', done => {
      result.subscribe((resp) => {
        expect(resp).toEqual([mockAddress]);
        done();
      });

      const req = httpMock.expectOne(url);
      expect(req.request.method).toBe('DELETE');

      req.flush([mockAddress]);
    });
  });
});
