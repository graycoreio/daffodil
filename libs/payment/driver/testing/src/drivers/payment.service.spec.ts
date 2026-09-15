import { TestBed } from '@angular/core/testing';
import { TestScheduler } from 'rxjs/testing';

import { DaffPaymentRequestFactory } from '@daffodil/payment/testing';

import { DaffPaymentTestingDriver } from './payment.service';

describe('@daffodil/driver/testing | DaffPaymentTestingDriver', () => {
  let service: DaffPaymentTestingDriver;
  let requestFactory: DaffPaymentRequestFactory;
  let scheduler: TestScheduler;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        DaffPaymentTestingDriver,
      ],
    });

    service = TestBed.inject(DaffPaymentTestingDriver);
    requestFactory = TestBed.inject(DaffPaymentRequestFactory);

    scheduler = new TestScheduler((actual, expected) => {
      expect(actual).toEqual(expected);
    });
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('generateToken', () => {
    it('should return a DaffPaymentResponse', () => {
      scheduler.run(({ expectObservable }) => {
        expectObservable(service.generateToken(requestFactory.create())).toBe('(a|)', { a: jasmine.notEmpty() });
      });
    });
  });
});
