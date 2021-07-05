import { TestBed } from '@angular/core/testing';
import { ActionReducer } from '@ngrx/store';

import {
  DaffCartBillingAddressLoadSuccess,
  daffCartProvideExtraReducers,
  daffCartProvideBeforeReducers,
  DaffCartReducersState,
  initialState as cartInitialState,
} from '@daffodil/cart/state';

import { DAFF_CART_REDUCERS } from './reducers.token';

describe('daffCartProvideExtraReducers', () => {
  let beforeReducer: ActionReducer<DaffCartReducersState>;
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
          available_payment_methods: [
            ...state.cart.cart.available_payment_methods,
            {
              method: 'extra reducer',
            },
          ],
        },
      },
    });
    beforeReducer = (state, action) => ({
      ...state,
      cart: {
        ...state.cart,
        cart: {
          ...state.cart.cart,
          available_payment_methods: [
            ...state.cart.cart.available_payment_methods,
            {
              method: 'before reducer',
            },
          ],
        },
      },
    });

    TestBed.configureTestingModule({
      providers: [
        ...daffCartProvideExtraReducers(extraReducer),
        ...daffCartProvideBeforeReducers(beforeReducer),
      ],
    });

    reducer = TestBed.inject(DAFF_CART_REDUCERS);

    result = reducer(initialState, new DaffCartBillingAddressLoadSuccess(null));
  });

  it('should run the before reducer first', () => {
    expect(result.cart.cart.available_payment_methods[0].method).toEqual('before reducer');
  });

  it('should run the extra reducer last', () => {
    expect(result.cart.cart.available_payment_methods[1].method).toEqual('extra reducer');
  });
});
