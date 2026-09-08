import { TestBed } from '@angular/core/testing';
import { TestScheduler } from 'rxjs/testing';

import { DaffCustomerFactory } from '@daffodil/customer/testing';

import { DaffCustomerTestingDriver } from './customer.service';

describe('@daffodil/customer/driver/testing | DaffCustomerTestingDriver', () => {
  let service: DaffCustomerTestingDriver;
  let customerFactory: DaffCustomerFactory;

  let scheduler: TestScheduler;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        DaffCustomerTestingDriver,
      ],
    });

    service = TestBed.inject(DaffCustomerTestingDriver);
    customerFactory = TestBed.inject(DaffCustomerFactory);

    scheduler = new TestScheduler((actual, expected) => {
      expect(actual).toEqual(expected);
    });
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('get', () => {
    it('should return a DaffCustomer', () => {
      scheduler.run(({ expectObservable }) => {
        expectObservable(service.get()).toBe('(a|)', { a: jasmine.objectContaining({ id: jasmine.anything(), email: jasmine.anything() }) });
      });
    });
  });

  describe('update', () => {
    it('should return a DaffCustomer', () => {
      scheduler.run(({ expectObservable }) => {
        expectObservable(service.update(customerFactory.create())).toBe('(a|)', { a: jasmine.objectContaining({ id: jasmine.anything(), email: jasmine.anything() }) });
      });
    });
  });

  describe('changePassword', () => {
    it('should return', () => {
      scheduler.run(({ expectObservable }) => {
        expectObservable(service.changePassword('old', 'new')).toBe('(a|)', { a: undefined });
      });
    });
  });

  describe('changeEmail', () => {
    it('should return a DaffCustomer', () => {
      scheduler.run(({ expectObservable }) => {
        expectObservable(service.changeEmail('email', 'password')).toBe('(a|)', { a: jasmine.objectContaining({ id: jasmine.anything(), email: jasmine.anything() }) });
      });
    });
  });
});
