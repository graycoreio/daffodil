import { inject } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import {
  ActionReducer,
  combineReducers,
} from '@ngrx/store';

import { DaffCartPaymentMethod } from '@daffodil/cart';
import {
  daffCartProvideExtraReducers,
  DaffCartReducersState,
  daffCartReducerInitialState as cartInitialState,
  DaffCartPaymentLoadSuccess,
} from '@daffodil/cart/state';
import { DaffCartPaymentFactory } from '@daffodil/cart/testing';
import {
  daffComposeReducers,
  daffIdentityReducer,
} from '@daffodil/core/state';

import { DAFF_CART_EXTRA_REDUCERS } from './extra.token';
import {
  DAFF_CART_REDUCERS,
  provideDaffCartReducersFactory,
} from './reducers.token';
import { DAFF_CART_RETRIEVAL_ACTIONS } from '../../cart-retrieval/public_api';
import { daffCartRetrievalActionsReducerFactory } from '../cart/retrieval-actions.reducer';
import { daffCartItemEntitiesRetrievalActionsReducerFactory } from '../cart-item-entities/retrieval-actions.reducer';
import { daffCartReducers } from '../cart-reducers';

describe('@daffodil/cart/state | daffCartProvideExtraReducers', () => {
  let paymentFactory: DaffCartPaymentFactory;
  let payment: DaffCartPaymentMethod;

  let extraReducer: ActionReducer<DaffCartReducersState>;
  let reducer: ActionReducer<DaffCartReducersState>;
  let result: DaffCartReducersState;

  beforeEach(() => {
    const initialState: DaffCartReducersState = {
      cart: cartInitialState,
      cartItems: null,
      order: null,
    };
    extraReducer = (state, action) => ({
      ...state,
      cart: {
        ...state.cart,
        cart: {
          ...state.cart.cart,
          payment: {
            ...state.cart.cart.payment,
            method: `${state.cart.cart.payment.method} extra reducer`,
          },
        },
      },
    });

    TestBed.configureTestingModule({
      providers: [
        ...daffCartProvideExtraReducers(extraReducer),
        provideDaffCartReducersFactory(() => {
          const retrievalActions = inject(DAFF_CART_RETRIEVAL_ACTIONS);

          return daffComposeReducers([
            combineReducers(daffCartReducers),
            combineReducers({
              cart: daffCartRetrievalActionsReducerFactory(retrievalActions),
              cartItems: daffCartItemEntitiesRetrievalActionsReducerFactory(retrievalActions),
              order: daffIdentityReducer,
            }),
            ...inject(DAFF_CART_EXTRA_REDUCERS),
          ]);
        }),
      ],
    });

    paymentFactory = TestBed.inject(DaffCartPaymentFactory);
    reducer = TestBed.inject(DAFF_CART_REDUCERS);

    payment = paymentFactory.create();

    result = reducer(initialState, new DaffCartPaymentLoadSuccess(payment));
  });

  it('should run the extra reducer after the daffodil reducers', () => {
    expect(result.cart.cart.payment.method).toEqual(`${payment.method} extra reducer`);
  });
});
