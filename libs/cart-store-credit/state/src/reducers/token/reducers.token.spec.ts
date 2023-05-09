import { TestBed } from '@angular/core/testing';
import { ActionReducer } from '@ngrx/store';

import {
  daffCustomerProvideExtraReducers,
  DaffCartStoreCreditReducersState,
  daffCustomerStoreCreditInitialState,
  DaffCartStoreCreditApplyFailure,
} from '@daffodil/cart-store-credit/state';
import { DaffStateError } from '@daffodil/core/state';

import { DAFF_CART_STORE_CREDIT_REDUCERS } from './reducers.token';

describe('@daffodil/cart-store-credit/state | daffCustomerProvideExtraReducers', () => {
  let extraError: DaffStateError;

  let extraReducer: ActionReducer<DaffCartStoreCreditReducersState>;
  let reducer: ActionReducer<DaffCartStoreCreditReducersState>;
  let result: DaffCartStoreCreditReducersState;

  beforeEach(() => {
    const initialState: DaffCartStoreCreditReducersState = {
      storeCredit: {
        ...daffCustomerStoreCreditInitialState,
        daffErrors: [{
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
      storeCredit: {
        ...state.storeCredit,
        daffErrors: [
          ...state.storeCredit.daffErrors,
          extraError,
        ],
      },
    });

    TestBed.configureTestingModule({
      providers: [
        ...daffCustomerProvideExtraReducers(extraReducer),
      ],
    });

    reducer = TestBed.inject(DAFF_CART_STORE_CREDIT_REDUCERS);

    result = reducer(initialState, new DaffCartStoreCreditApplyFailure([extraError]));
  });

  it('should run the extra reducer after the daffodil reducers', () => {
    expect(result.storeCredit.daffErrors[1]).toEqual(extraError);
  });
});
