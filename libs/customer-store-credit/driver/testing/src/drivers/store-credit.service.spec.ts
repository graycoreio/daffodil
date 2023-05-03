import { TestBed } from '@angular/core/testing';
import { cold } from 'jasmine-marbles';

import { DaffCustomerStoreCreditFactory } from '@daffodil/customer-store-credit/testing';

import { DaffCustomerStoreCreditTestingDriver } from './store-credit.service';

describe('@daffodil/customer-store-credit/driver/testing | DaffCustomerStoreCreditTestingDriver', () => {
  let service: DaffCustomerStoreCreditTestingDriver;
  let storeCreditFactory: DaffCustomerStoreCreditFactory;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        DaffCustomerStoreCreditTestingDriver,
      ],
    });

    service = TestBed.inject(DaffCustomerStoreCreditTestingDriver);
    storeCreditFactory = TestBed.inject(DaffCustomerStoreCreditFactory);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('get', () => {
    it('should return a DaffCustomerStoreCredit', () => {
      const expected = cold('(a|)', { a: jasmine.anything() });
      expect(service.get()).toBeObservable(expected);
    });
  });
});
