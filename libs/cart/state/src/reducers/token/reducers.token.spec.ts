import { TestBed } from '@angular/core/testing';
import { ActionReducer } from '@ngrx/store';

import { DaffCartPaymentMethod } from '@daffodil/cart';
import {
  daffCartProvideExtraReducers,
  DaffCartReducersState,
  initialState as cartInitialState,
  DaffCartPaymentLoadSuccess,
} from '@daffodil/cart/state';
import { DaffCartPaymentFactory } from '@daffodil/cart/testing';

import { DAFF_CART_REDUCERS } from './reducers.token';

describe('daffCartProvideExtraReducers', () => {
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
