import { TestBed } from '@angular/core/testing';
import {
  StoreModule,
  Store,
} from '@ngrx/store';

import { DaffCustomerStoreCreditClearErrors } from '@daffodil/customer-store-credit/state';

import { DaffCustomerStoreCreditClearErrorsGuard } from './clear-errors.guard';

describe('@daffodil/customer-store-credit/routing | DaffCustomerStoreCreditClearErrorsGuard', () => {
  let guard: DaffCustomerStoreCreditClearErrorsGuard;
  let store: Store<any>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        StoreModule.forRoot({}),
      ],
    });

    guard = TestBed.inject(DaffCustomerStoreCreditClearErrorsGuard);
    store = TestBed.inject(Store);

    spyOn(store, 'dispatch');
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });

  describe('canDeactivate', () => {
    it('should dispatch DaffCustomerStoreCreditClearErrors', () => {
      const expected = new DaffCustomerStoreCreditClearErrors();
      expect(guard.canDeactivate()).toBeTrue();
      expect(<any>store.dispatch).toHaveBeenCalledWith(expected);
    });
  });
});
