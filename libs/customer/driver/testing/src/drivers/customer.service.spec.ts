import { TestBed } from '@angular/core/testing';
import { cold } from 'jasmine-marbles';

import { DaffCustomerFactory } from '@daffodil/customer/testing';

import { DaffCustomerTestingDriver } from './customer.service';

describe('@daffodil/driver/testing | DaffCustomerTestingDriver', () => {
  let service: DaffCustomerTestingDriver;
  let customerFactory: DaffCustomerFactory;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        DaffCustomerTestingDriver,
      ],
    });

    service = TestBed.inject(DaffCustomerTestingDriver);
    customerFactory = TestBed.inject(DaffCustomerFactory);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('get', () => {
    it('should return a DaffCustomer', () => {
      const expected = cold('(a|)', { a: jasmine.objectContaining({ id: jasmine.anything(), email: jasmine.anything() }) });
      expect(service.get()).toBeObservable(expected);
    });
  });

  describe('update', () => {
    it('should return a DaffCustomer', () => {
      const expected = cold('(a|)', { a: jasmine.objectContaining({ id: jasmine.anything(), email: jasmine.anything() }) });
      expect(service.update(customerFactory.create())).toBeObservable(expected);
    });
  });

  describe('changePassword', () => {
    it('should return', () => {
      const expected = cold('(a|)', { a: undefined });
      expect(service.changePassword('old', 'new')).toBeObservable(expected);
    });
  });

  describe('changeEmail', () => {
    it('should return a DaffCustomer', () => {
      const expected = cold('(a|)', { a: jasmine.objectContaining({ id: jasmine.anything(), email: jasmine.anything() }) });
      expect(service.changeEmail('email', 'password')).toBeObservable(expected);
    });
  });
});
