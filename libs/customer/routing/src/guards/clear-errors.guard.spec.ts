import { TestBed } from '@angular/core/testing';
import {
  StoreModule,
  Store,
} from '@ngrx/store';

import { DaffCustomerClearErrors } from '@daffodil/customer/state';

import { DaffClearErrorsGuard } from './clear-errors.guard';

describe('@daffodil/customer/routing | DaffClearErrorsGuard', () => {
  let guard: DaffClearErrorsGuard;
  let store: Store<any>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        StoreModule.forRoot({}),
      ],
    });

    guard = TestBed.inject(DaffClearErrorsGuard);
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
      expect(store.dispatch).toHaveBeenCalledWith(expected);
    });
  });
});
