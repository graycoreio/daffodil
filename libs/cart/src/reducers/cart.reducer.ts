import { reducer as cartReducer } from './cart/cart.reducer';
import { reducer as cartItemReducer } from './cart-item/cart-item.reducer';
import { reducer as cartBillingAddressReducer } from './cart-billing-address/cart-billing-address.reducer';
import { reducer as cartShippingAddressReducer } from './cart-shipping-address/cart-shipping-address.reducer';
import { reducer as cartShippingMethodsReducer } from './cart-shipping-methods/cart-shipping-methods.reducer';
import { reducer as cartShippingInformationReducer } from './cart-shipping-information/cart-shipping-information.reducer';
import { reducer as cartPaymentReducer } from './cart-payment/cart-payment.reducer';
import { reducer as cartPaymentMethodsReducer } from './cart-payment-methods/cart-payment-methods.reducer';
import { CartState } from './cart-state.interface';
import { ActionTypes } from './action-types.type';
import { initialState } from './cart-initial-state';

/**
 * Recursively invoke reducers, passing the returned state from one into the next.
 */
export function composeReducers(state, action, reducers) {
  return reducers.length > 0
    // if there are still more reducers, invoke the first one and recurse on the remaining ones
    ? composeReducers(
      reducers[0](state, action),
      action,
      reducers.slice(1)
    )
    // if there are no more reducers, just return state
    : state
}

export function reducer(
  state = initialState,
  action: ActionTypes
): CartState {
  return composeReducers(
    state,
    action,
    [
      cartReducer,
      cartItemReducer,
      cartBillingAddressReducer,
      cartShippingAddressReducer,
      cartShippingMethodsReducer,
      cartShippingInformationReducer,
      cartPaymentReducer,
      cartPaymentMethodsReducer
    ]
  )
}
