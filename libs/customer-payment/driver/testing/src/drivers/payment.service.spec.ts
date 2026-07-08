import { TestBed } from '@angular/core/testing';
import { TestScheduler } from 'rxjs/testing';

import { DaffCustomerPaymentFactory } from '@daffodil/customer-payment/testing';

import { DaffCustomerPaymentTestingDriver } from './payment.service';

describe('@daffodil/customer-payment/driver/testing | DaffCustomerPaymentTestingDriver', () => {
  let service: DaffCustomerPaymentTestingDriver;
  let paymentFactory: DaffCustomerPaymentFactory;
  let scheduler: TestScheduler;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        DaffCustomerPaymentTestingDriver,
      ],
    });

    service = TestBed.inject(DaffCustomerPaymentTestingDriver);
    paymentFactory = TestBed.inject(DaffCustomerPaymentFactory);

    scheduler = new TestScheduler((actual, expected) => {
      expect(actual).toEqual(expected);
    });
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('list', () => {
    it('should return a DaffCustomerPayment', () => {
      scheduler.run(({ expectObservable }) => {
        expectObservable(service.list()).toBe('(a|)', { a: jasmine.anything() });
      });
    });
  });

  describe('get', () => {
    it('should return a DaffCustomerPayment', () => {
      scheduler.run(({ expectObservable }) => {
        expectObservable(service.get('id')).toBe('(a|)', { a: jasmine.anything() });
      });
    });
  });

  describe('update', () => {
    it('should return a DaffCustomerPayment', () => {
      scheduler.run(({ expectObservable }) => {
        expectObservable(service.update(paymentFactory.create())).toBe('(a|)', { a: jasmine.anything() });
      });
    });
  });

  describe('add', () => {
    it('should return', () => {
      scheduler.run(({ expectObservable }) => {
        expectObservable(service.add({ kind: 'kind' })).toBe('(a|)', { a: jasmine.anything() });
      });
    });
  });

  describe('delete', () => {
    it('should return a DaffCustomerPayment', () => {
      scheduler.run(({ expectObservable }) => {
        expectObservable(service.delete('id')).toBe('(a|)', { a: jasmine.anything() });
      });
    });
  });
});
