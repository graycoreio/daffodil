import { TestBed } from '@angular/core/testing';
import { cold } from 'jasmine-marbles';

import { DaffCustomerTestingDriver } from './customer.service';

describe('@daffodil/driver/testing | DaffCustomerTestingDriver', () => {
  let service: DaffCustomerTestingDriver;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        DaffCustomerTestingDriver,
      ],
    });

    service = TestBed.inject(DaffCustomerTestingDriver);
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
});
