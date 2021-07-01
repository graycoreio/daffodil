import { TestBed } from '@angular/core/testing';
import { ActionReducer } from '@ngrx/store';

import {
  DaffCartBillingAddressLoadSuccess,
  daffCartProvidePostReducers,
  daffCartProvidePreReducers,
  DaffCartReducersState,
  initialState as cartInitialState,
} from '@daffodil/cart/state';

import { DAFF_CART_REDUCERS } from './reducers.token';

describe('daffCartProvidePostReducers', () => {
  let preReducer: ActionReducer<DaffCartReducersState>;
  let postReducer: ActionReducer<DaffCartReducersState>;

  let reducer: ActionReducer<DaffCartReducersState>;
  let result: DaffCartReducersState;

  beforeEach(() => {
    const initialState: DaffCartReducersState = {
      cart: cartInitialState,
      cartItems: null,
      order: null,
    };
    postReducer = (state, action) => ({
      ...state,
      cart: {
        ...state.cart,
        cart: {
          ...state.cart.cart,
          available_payment_methods: [
            ...state.cart.cart.available_payment_methods,
            {
              method: 'post reducer',
            },
          ],
        },
      },
    });
    preReducer = (state, action) => ({
      ...state,
      cart: {
        ...state.cart,
        cart: {
          ...state.cart.cart,
          available_payment_methods: [
            ...state.cart.cart.available_payment_methods,
            {
              method: 'pre reducer',
            },
          ],
        },
      },
    });

    TestBed.configureTestingModule({
      providers: [
        ...daffCartProvidePostReducers(postReducer),
        ...daffCartProvidePreReducers(preReducer),
      ],
    });

    reducer = TestBed.inject(DAFF_CART_REDUCERS);

    result = reducer(initialState, new DaffCartBillingAddressLoadSuccess(null));
  });

  it('should run the pre reducer first', () => {
    expect(result.cart.cart.available_payment_methods[0].method).toEqual('pre reducer');
  });

  it('should run the post reducer last', () => {
    expect(result.cart.cart.available_payment_methods[1].method).toEqual('post reducer');
  });
});
