import { TestBed } from '@angular/core/testing';
import { TestScheduler } from 'rxjs/testing';

import { DaffCustomerStoreCreditFactory } from '@daffodil/customer-store-credit/testing';

import { DaffCustomerStoreCreditTestingDriver } from './store-credit.service';

describe('@daffodil/customer-store-credit/driver/testing | DaffCustomerStoreCreditTestingDriver', () => {
  let service: DaffCustomerStoreCreditTestingDriver;
  let storeCreditFactory: DaffCustomerStoreCreditFactory;
  let scheduler: TestScheduler;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        DaffCustomerStoreCreditTestingDriver,
      ],
    });

    service = TestBed.inject(DaffCustomerStoreCreditTestingDriver);
    storeCreditFactory = TestBed.inject(DaffCustomerStoreCreditFactory);

    scheduler = new TestScheduler((actual, expected) => {
      expect(actual).toEqual(expected);
    });
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('get', () => {
    it('should return a DaffCustomerStoreCredit', () => {
      scheduler.run(({ expectObservable }) => {
        expectObservable(service.get()).toBe('(a|)', { a: jasmine.anything() });
      });
    });
  });
});
