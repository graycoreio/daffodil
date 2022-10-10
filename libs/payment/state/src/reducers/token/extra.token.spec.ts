import { TestBed } from '@angular/core/testing';
import { ActionReducer } from '@ngrx/store';

import { DaffPaymentReducersState } from '@daffodil/payment/state';

import {
  daffPaymentProvideExtraReducers,
  DAFF_PAYMENT_EXTRA_REDUCERS,
} from './extra.token';

describe('daffPaymentProvideExtraReducers', () => {
  let reducers: ActionReducer<DaffPaymentReducersState>[];
  let result: ActionReducer<DaffPaymentReducersState>[];

  beforeEach(() => {
    reducers = [
      (state, action) => state,
      (state, action) => state,
    ];

    TestBed.configureTestingModule({
      providers: [
        ...daffPaymentProvideExtraReducers(...reducers),
      ],
    });

    result = TestBed.inject(DAFF_PAYMENT_EXTRA_REDUCERS);
  });

  it('should provide the reducers to the token', () => {
    reducers.forEach(reducer => {
      expect(result).toContain(reducer);
    });
  });
});
