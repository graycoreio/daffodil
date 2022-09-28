import { TestBed } from '@angular/core/testing';
import { cold } from 'jasmine-marbles';

import { DaffPaymentRequestFactory } from '@daffodil/payment/testing';

import { DaffPaymentTestingDriver } from './payment.service';

describe('@daffodil/driver/testing | DaffPaymentTestingDriver', () => {
  let service: DaffPaymentTestingDriver;
  let requestFactory: DaffPaymentRequestFactory;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        DaffPaymentTestingDriver,
      ],
    });

    service = TestBed.inject(DaffPaymentTestingDriver);
    requestFactory = TestBed.inject(DaffPaymentRequestFactory);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('generateToken', () => {
    it('should return a DaffPaymentResponse', () => {
      const expected = cold('(a|)', { a: jasmine.notEmpty() });
      expect(service.generateToken(requestFactory.create())).toBeObservable(expected);
    });
  });
});
