import { TestBed } from '@angular/core/testing';
import { ActionReducer } from '@ngrx/store';

import { DaffStateError } from '@daffodil/core/state';
import {
  daffPaymentProvideExtraReducers,
  DaffPaymentReducersState,
  daffPaymentInitialState,
  DaffPaymentGenerateTokenFailure,
} from '@daffodil/payment/state';

import { DAFF_PAYMENT_REDUCERS } from './reducers.token';

describe('daffPaymentProvideExtraReducers', () => {
  let extraError: DaffStateError;

  let extraReducer: ActionReducer<DaffPaymentReducersState>;
  let reducer: ActionReducer<DaffPaymentReducersState>;
  let result: DaffPaymentReducersState;

  beforeEach(() => {
    const initialState: DaffPaymentReducersState = {
      payment: {
        ...daffPaymentInitialState,
        errors: [{
          code: 'code',
          message: 'already in state',
        }],
      },
    };
    extraError = {
      code:  'code',
      message: 'an injected error',
    };
    extraReducer = (state, action) => ({
      ...state,
      payment: {
        ...state.payment,
        errors: [
          ...state.payment.errors,
          extraError,
        ],
      },
    });

    TestBed.configureTestingModule({
      providers: [
        ...daffPaymentProvideExtraReducers(extraReducer),
      ],
    });

    reducer = TestBed.inject(DAFF_PAYMENT_REDUCERS);

    result = reducer(initialState, new DaffPaymentGenerateTokenFailure(extraError));
  });

  it('should run the extra reducer after the daffodil reducers', () => {
    expect(result.payment.errors[1]).toEqual(extraError);
  });
});
