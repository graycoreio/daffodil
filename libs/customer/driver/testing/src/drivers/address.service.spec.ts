import { TestBed } from '@angular/core/testing';

import { DaffCustomerAddressFactory } from '@daffodil/customer/testing';
import { runMarbles } from '@daffodil/jasmine';

import { DaffCustomerAddressTestingDriver } from './address.service';

describe('@daffodil/customer/driver/testing | DaffCustomerAddressTestingDriver', () => {
  let service: DaffCustomerAddressTestingDriver;
  let customerFactory: DaffCustomerAddressFactory;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        DaffCustomerAddressTestingDriver,
      ],
    });

    service = TestBed.inject(DaffCustomerAddressTestingDriver);
    customerFactory = TestBed.inject(DaffCustomerAddressFactory);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('list', () => {
    it('should return a list of DaffCustomerAddress', () => {
      runMarbles(({ expectObservable }) => {
        expectObservable(service.list()).toBe('(a|)', { a: jasmine.arrayContaining([jasmine.objectContaining({ id: jasmine.anything(), street: jasmine.anything() })]) });
      });
    });
  });

  describe('get', () => {
    it('should return a DaffCustomerAddress', () => {
      runMarbles(({ expectObservable }) => {
        expectObservable(service.get('id')).toBe('(a|)', { a: jasmine.anything() });
      });
    });
  });

  describe('update', () => {
    it('should return a DaffCustomerAddress', () => {
      runMarbles(({ expectObservable }) => {
        expectObservable(service.update(customerFactory.create())).toBe('(a|)', { a: jasmine.anything() });
      });
    });
  });

  describe('add', () => {
    it('should return', () => {
      runMarbles(({ expectObservable }) => {
        expectObservable(service.add(customerFactory.create())).toBe('(a|)', { a: jasmine.anything() });
      });
    });
  });

  describe('delete', () => {
    it('should return a DaffCustomerAddress', () => {
      runMarbles(({ expectObservable }) => {
        expectObservable(service.delete('id')).toBe('(a|)', { a: jasmine.anything() });
      });
    });
  });
});
