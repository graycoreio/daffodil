import { TestBed } from '@angular/core/testing';
import { cold } from 'jasmine-marbles';

import { DaffCustomerPaymentFactory } from '@daffodil/customer-payment/testing';

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
      const expected = cold('(a|)', { a: jasmine.anything() });
      expect(service.list()).toBeObservable(expected);
    });
  });

  describe('get', () => {
    it('should return a DaffCustomerPayment', () => {
      const expected = cold('(a|)', { a: jasmine.anything() });
      expect(service.get('id')).toBeObservable(expected);
    });
  });

  describe('update', () => {
    it('should return a DaffCustomerPayment', () => {
      const expected = cold('(a|)', { a: jasmine.anything() });
      expect(service.update(paymentFactory.create())).toBeObservable(expected);
    });
  });

  describe('add', () => {
    it('should return', () => {
      const expected = cold('(a|)', { a: jasmine.anything() });
      expect(service.add({ kind: 'kind' })).toBeObservable(expected);
    });
  });

  describe('delete', () => {
    it('should return a DaffCustomerPayment', () => {
      const expected = cold('(a|)', { a: jasmine.anything() });
      expect(service.delete('id')).toBeObservable(expected);
    });
  });
});
