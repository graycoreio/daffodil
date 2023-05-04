import { TestBed } from '@angular/core/testing';
import { cold } from 'jasmine-marbles';

import { DaffCartWithStoreCreditFactory } from '@daffodil/cart-store-credit/testing';

import { DaffCartStoreCreditTestingDriver } from './store-credit.service';

describe('@daffodil/cart-store-credit/driver/testing | DaffCartStoreCreditTestingDriver', () => {
  let service: DaffCartStoreCreditTestingDriver;
  let storeCreditFactory: DaffCartWithStoreCreditFactory;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        DaffCartStoreCreditTestingDriver,
      ],
    });

    service = TestBed.inject(DaffCartStoreCreditTestingDriver);
    storeCreditFactory = TestBed.inject(DaffCartWithStoreCreditFactory);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('apply', () => {
    it('should return a DaffCartWithStoreCredit', () => {
      const expected = cold('(a|)', { a: jasmine.anything() });
      expect(service.apply()).toBeObservable(expected);
    });
  });

  describe('remove', () => {
    it('should return a DaffCartWithStoreCredit', () => {
      const expected = cold('(a|)', { a: jasmine.anything() });
      expect(service.remove()).toBeObservable(expected);
    });
  });
});
