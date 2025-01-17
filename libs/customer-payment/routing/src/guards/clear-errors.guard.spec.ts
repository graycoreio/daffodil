import { TestBed } from '@angular/core/testing';
import {
  StoreModule,
  Store,
} from '@ngrx/store';

import { DaffCustomerPaymentClearErrors } from '@daffodil/customer-payment/state';

import { DaffCustomerPaymentClearErrorsGuard } from './clear-errors.guard';

describe('@daffodil/customer-payment/routing | DaffCustomerPaymentClearErrorsGuard', () => {
  let guard: DaffCustomerPaymentClearErrorsGuard;
  let store: Store<any>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        StoreModule.forRoot({}),
      ],
    });

    guard = TestBed.inject(DaffCustomerPaymentClearErrorsGuard);
    store = TestBed.inject(Store);

    spyOn(store, 'dispatch');
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });

  describe('canDeactivate', () => {
    it('should dispatch DaffCustomerPaymentClearErrors', () => {
      const expected = new DaffCustomerPaymentClearErrors();
      expect(guard.canDeactivate()).toBeTrue();
      expect(<any>store.dispatch).toHaveBeenCalledWith(expected);
    });
  });
});
