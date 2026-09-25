import { TestBed } from '@angular/core/testing';

import { DaffCartWithStoreCreditFactory } from '@daffodil/cart-store-credit/testing';
import { runMarbles } from '@daffodil/jasmine';

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
      runMarbles(({ expectObservable }) => {
        expectObservable(service.apply()).toBe('(a|)', { a: jasmine.anything() });
      });
    });
  });

  describe('remove', () => {
    it('should return a DaffCartWithStoreCredit', () => {
      runMarbles(({ expectObservable }) => {
        expectObservable(service.remove()).toBe('(a|)', { a: jasmine.anything() });
      });
    });
  });
});
