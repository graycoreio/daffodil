import { TestBed } from '@angular/core/testing';

import { DaffCustomerPaymentFactory } from '@daffodil/customer-payment/testing';
import { runMarbles } from '@daffodil/jasmine';

import { DaffCustomerPaymentTestingDriver } from './payment.service';

describe('@daffodil/customer-payment/driver/testing | DaffCustomerPaymentTestingDriver', () => {
  let service: DaffCustomerPaymentTestingDriver;
  let paymentFactory: DaffCustomerPaymentFactory;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        DaffCustomerPaymentTestingDriver,
      ],
    });

    service = TestBed.inject(DaffCustomerPaymentTestingDriver);
    paymentFactory = TestBed.inject(DaffCustomerPaymentFactory);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('list', () => {
    it('should return a DaffCustomerPayment', () => {
      runMarbles(({ expectObservable }) => {
        expectObservable(service.list()).toBe('(a|)', { a: jasmine.anything() });
      });
    });
  });

  describe('get', () => {
    it('should return a DaffCustomerPayment', () => {
      runMarbles(({ expectObservable }) => {
        expectObservable(service.get('id')).toBe('(a|)', { a: jasmine.anything() });
      });
    });
  });

  describe('update', () => {
    it('should return a DaffCustomerPayment', () => {
      runMarbles(({ expectObservable }) => {
        expectObservable(service.update(paymentFactory.create())).toBe('(a|)', { a: jasmine.anything() });
      });
    });
  });

  describe('add', () => {
    it('should return', () => {
      runMarbles(({ expectObservable }) => {
        expectObservable(service.add({ kind: 'kind' })).toBe('(a|)', { a: jasmine.anything() });
      });
    });
  });

  describe('delete', () => {
    it('should return a DaffCustomerPayment', () => {
      runMarbles(({ expectObservable }) => {
        expectObservable(service.delete('id')).toBe('(a|)', { a: jasmine.anything() });
      });
    });
  });
});
