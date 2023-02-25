import { TestBed } from '@angular/core/testing';
import { cold } from 'jasmine-marbles';

import { DaffCustomerAddressFactory } from '@daffodil/customer/testing';

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
      const expected = cold('(a|)', { a: jasmine.arrayContaining([jasmine.objectContaining({ id: jasmine.anything(), street: jasmine.anything() })]) });
      expect(service.list()).toBeObservable(expected);
    });
  });

  describe('get', () => {
    it('should return a DaffCustomerAddress', () => {
      const expected = cold('(a|)', { a: jasmine.anything() });
      expect(service.get('id')).toBeObservable(expected);
    });
  });

  describe('update', () => {
    it('should return a DaffCustomerAddress', () => {
      const expected = cold('(a|)', { a: jasmine.anything() });
      expect(service.update(customerFactory.create())).toBeObservable(expected);
    });
  });

  describe('add', () => {
    it('should return', () => {
      const expected = cold('(a|)', { a: jasmine.anything() });
      expect(service.add(customerFactory.create())).toBeObservable(expected);
    });
  });

  describe('delete', () => {
    it('should return a DaffCustomerAddress', () => {
      const expected = cold('(a|)', { a: jasmine.anything() });
      expect(service.delete('id')).toBeObservable(expected);
    });
  });
});
