import { TestBed } from '@angular/core/testing';
import {
  StoreModule,
  Store,
} from '@ngrx/store';

import { DaffCustomerClearErrors } from '@daffodil/customer/state';

import { DaffCustomerClearErrorsGuard } from './clear-errors.guard';

describe('@daffodil/customer/routing | DaffCustomerClearErrorsGuard', () => {
  let guard: DaffCustomerClearErrorsGuard;
  let store: Store<any>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        StoreModule.forRoot({}),
      ],
    });

    guard = TestBed.inject(DaffCustomerClearErrorsGuard);
    store = TestBed.inject(Store);

    spyOn(store, 'dispatch');
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });

  describe('canDeactivate', () => {
    it('should dispatch DaffCustomerClearErrors', () => {
      const expected = new DaffCustomerClearErrors();
      expect(guard.canDeactivate()).toBeTrue();
      expect(<any>store.dispatch).toHaveBeenCalledWith(expected);
    });
  });
});
