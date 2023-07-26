import { TestBed } from '@angular/core/testing';
import { ActionReducer } from '@ngrx/store';

import { DaffStateError } from '@daffodil/core/state';
import {
  daffCustomerPaymentProvideExtraReducers,
  DaffCustomerPaymentReducersState,
  daffCustomerPaymentInitialState,
  DaffCustomerPaymentListFailure,
  daffCustomerPaymentEntitiesAdapter,
} from '@daffodil/customer-payment/state';

import { DAFF_CUSTOMER_PAYMENT_REDUCERS } from './reducers.token';

describe('@daffodil/customer-payment/state | daffCustomerPaymentProvideExtraReducers', () => {
  let extraError: DaffStateError;

  let extraReducer: ActionReducer<DaffCustomerPaymentReducersState>;
  let reducer: ActionReducer<DaffCustomerPaymentReducersState>;
  let result: DaffCustomerPaymentReducersState;

  beforeEach(() => {
    const initialState: DaffCustomerPaymentReducersState = {
      payment: {
        ...daffCustomerPaymentInitialState,
        daffErrors: [{
          code: 'code',
          message: 'already in state',
        }],
      },
      paymentEntities: daffCustomerPaymentEntitiesAdapter().getInitialState(),
    };
    extraError = {
      code:  'code',
      message: 'an injected error',
    };
    extraReducer = (state, action) => ({
      ...state,
      payment: {
        ...state.payment,
        daffErrors: [
          ...state.payment.daffErrors,
          extraError,
        ],
      },
    });

    TestBed.configureTestingModule({
      providers: [
        ...daffCustomerPaymentProvideExtraReducers(extraReducer),
      ],
    });

    reducer = TestBed.inject(DAFF_CUSTOMER_PAYMENT_REDUCERS);

    result = reducer(initialState, new DaffCustomerPaymentListFailure(extraError));
  });

  it('should run the extra reducer after the daffodil reducers', () => {
    expect(result.payment.daffErrors[1]).toEqual(extraError);
  });
});
