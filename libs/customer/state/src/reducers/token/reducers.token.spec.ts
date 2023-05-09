import { TestBed } from '@angular/core/testing';
import { ActionReducer } from '@ngrx/store';

import { DaffStateError } from '@daffodil/core/state';
import {
  daffCustomerProvideExtraReducers,
  DaffCustomerReducersState,
  daffCustomerInitialState,
  DaffCustomerLoadFailure,
  daffCustomerAddressInitialState,
  daffCustomerAddressEntitiesAdapter,
} from '@daffodil/customer/state';

import { DAFF_CUSTOMER_REDUCERS } from './reducers.token';

describe('@daffodil/customer/state | daffCustomerProvideExtraReducers', () => {
  let extraError: DaffStateError;

  let extraReducer: ActionReducer<DaffCustomerReducersState>;
  let reducer: ActionReducer<DaffCustomerReducersState>;
  let result: DaffCustomerReducersState;

  beforeEach(() => {
    const initialState: DaffCustomerReducersState = {
      customer: {
        ...daffCustomerInitialState,
        daffErrors: [{
          code: 'code',
          message: 'already in state',
        }],
      },
      address: daffCustomerAddressInitialState,
      addressEntities: daffCustomerAddressEntitiesAdapter().getInitialState(),
    };
    extraError = {
      code:  'code',
      message: 'an injected error',
    };
    extraReducer = (state, action) => ({
      ...state,
      customer: {
        ...state.customer,
        daffErrors: [
          ...state.customer.daffErrors,
          extraError,
        ],
      },
    });

    TestBed.configureTestingModule({
      providers: [
        ...daffCustomerProvideExtraReducers(extraReducer),
      ],
    });

    reducer = TestBed.inject(DAFF_CUSTOMER_REDUCERS);

    result = reducer(initialState, new DaffCustomerLoadFailure(extraError));
  });

  it('should run the extra reducer after the daffodil reducers', () => {
    expect(result.customer.daffErrors[1]).toEqual(extraError);
  });
});
