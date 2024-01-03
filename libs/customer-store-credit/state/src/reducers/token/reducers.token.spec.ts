import { TestBed } from '@angular/core/testing';
import { ActionReducer } from '@ngrx/store';

import { DaffStateError } from '@daffodil/core/state';
import {
  daffCustomerStoreCreditProvideExtraReducers,
  DaffCustomerStoreCreditReducersState,
  daffCustomerStoreCreditInitialState,
  DaffCustomerStoreCreditLoadFailure,
} from '@daffodil/customer-store-credit/state';

import { DAFF_CUSTOMER_STORE_CREDIT_REDUCERS } from './reducers.token';

describe('@daffodil/customer-store-credit/state | daffCustomerStoreCreditProvideExtraReducers', () => {
  let extraError: DaffStateError;

  let extraReducer: ActionReducer<DaffCustomerStoreCreditReducersState>;
  let reducer: ActionReducer<DaffCustomerStoreCreditReducersState>;
  let result: DaffCustomerStoreCreditReducersState;

  beforeEach(() => {
    const initialState: DaffCustomerStoreCreditReducersState = {
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
        ...daffCustomerStoreCreditProvideExtraReducers(extraReducer),
      ],
    });

    reducer = TestBed.inject(DAFF_CUSTOMER_STORE_CREDIT_REDUCERS);

    result = reducer(initialState, new DaffCustomerStoreCreditLoadFailure(extraError));
  });

  it('should run the extra reducer after the daffodil reducers', () => {
    expect(result.storeCredit.daffErrors[1]).toEqual(extraError);
  });
});
