import { inject } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import {
  ActionReducer,
  combineReducers,
} from '@ngrx/store';

import {
  DaffStateError,
  daffCollectionReducerInitialState,
  daffComposeReducers,
} from '@daffodil/core/state';
import {
  daffOrderProvideExtraReducers,
  DaffOrderReducersState,
  DaffOrderLoadFailure,
  daffOrderInitialState,
  daffGetOrderAdapter,
} from '@daffodil/order/state';

import { daffOrderReducer } from '../order/order.reducer';
import { daffOrderEntitiesReducer } from '../order-entities/public_api';
import { daffOrdersCollectionReducer } from '../public_api';
import { DAFF_ORDER_EXTRA_REDUCERS } from './extra.token';
import {
  DAFF_ORDER_REDUCERS,
  provideDaffOrderReducersFactory,
} from './reducers.token';

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
        provideDaffOrderReducersFactory(() => daffComposeReducers([
          combineReducers({
            order: daffOrderReducer,
            orders: daffOrderEntitiesReducer,
            collection: daffOrdersCollectionReducer,
          }),
          ...inject(DAFF_ORDER_EXTRA_REDUCERS),
        ])),
      ],
    });

    reducer = TestBed.inject( DAFF_ORDER_REDUCERS);

    result = reducer(initialState, new DaffOrderLoadFailure(extraError));
  });

  it('should run the extra reducer after the daffodil reducers', () => {
    expect(result.order.daffErrors[1]).toEqual(extraError);
  });
});
