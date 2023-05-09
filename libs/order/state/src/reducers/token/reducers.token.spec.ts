import { TestBed } from '@angular/core/testing';
import { ActionReducer } from '@ngrx/store';

import {
  DaffStateError,
  daffCollectionReducerInitialState,
} from '@daffodil/core/state';
import {
  daffOrderProvideExtraReducers,
  DaffOrderReducersState,
  DaffOrderLoadFailure,
  daffOrderInitialState,
  daffGetOrderAdapter,
} from '@daffodil/order/state';

import { DAFF_ORDER_REDUCERS } from './reducers.token';

describe('@daffodil/order/state | daffOrderProvideExtraReducers', () => {
  let extraError: DaffStateError;

  let extraReducer: ActionReducer<DaffOrderReducersState>;
  let reducer: ActionReducer<DaffOrderReducersState>;
  let result: DaffOrderReducersState;

  beforeEach(() => {
    const initialState: DaffOrderReducersState = {
      order: {
        ...daffOrderInitialState,
        daffErrors: [{
          code: 'code',
          message: 'already in state',
        }],
      },
      orders: daffGetOrderAdapter().getInitialState(),
      collection: daffCollectionReducerInitialState,
    };
    extraError = {
      code:  'code',
      message: 'an injected error',
    };
    extraReducer = (state, action) => ({
      ...state,
      order: {
        ...state.order,
        daffErrors: [
          ...state.order.daffErrors,
          extraError,
        ],
      },
    });

    TestBed.configureTestingModule({
      providers: [
        ...daffOrderProvideExtraReducers(extraReducer),
      ],
    });

    reducer = TestBed.inject( DAFF_ORDER_REDUCERS);

    result = reducer(initialState, new DaffOrderLoadFailure(extraError));
  });

  it('should run the extra reducer after the daffodil reducers', () => {
    expect(result.order.daffErrors[1]).toEqual(extraError);
  });
});
