import { TestBed } from '@angular/core/testing';
import {
  StoreModule,
  Store,
} from '@ngrx/store';

import { DaffCartStoreCreditClearErrors } from '@daffodil/cart-store-credit/state';

import { DaffCartStoreCreditClearErrorsGuard } from './clear-errors.guard';

describe('@daffodil/cart-store-credit/routing | DaffCartStoreCreditClearErrorsGuard', () => {
  let guard: DaffCartStoreCreditClearErrorsGuard;
  let store: Store<any>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        StoreModule.forRoot({}),
      ],
    });

    guard = TestBed.inject(DaffCartStoreCreditClearErrorsGuard);
    store = TestBed.inject(Store);

    spyOn(store, 'dispatch');
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });

  describe('canDeactivate', () => {
    it('should dispatch DaffCartStoreCreditClearErrors', () => {
      const expected = new DaffCartStoreCreditClearErrors();
      expect(guard.canDeactivate()).toBeTrue();
      expect(<any>store.dispatch).toHaveBeenCalledWith(expected);
    });
  });
});
