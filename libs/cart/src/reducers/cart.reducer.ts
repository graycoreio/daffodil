import { cartReducer } from './cart/cart.reducer';
import { cartItemReducer } from './cart-item/cart-item.reducer';
import { cartBillingAddressReducer } from './cart-billing-address/cart-billing-address.reducer';
import { cartShippingAddressReducer } from './cart-shipping-address/cart-shipping-address.reducer';
import { cartShippingMethodsReducer } from './cart-shipping-methods/cart-shipping-methods.reducer';
import { cartShippingInformationReducer } from './cart-shipping-information/cart-shipping-information.reducer';
import { cartPaymentReducer } from './cart-payment/cart-payment.reducer';
import { cartPaymentMethodsReducer } from './cart-payment-methods/cart-payment-methods.reducer';
import { cartCouponReducer } from './cart-coupon/cart-coupon.reducer';

import { DaffCartReducerState } from './cart-state.interface';
import { ActionTypes } from './action-types.type';
import { initialState } from './cart-initial-state';
import { DaffCart } from '../models/cart';

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

export function daffCartReducer<T extends DaffCart = DaffCart>(
  state = initialState,
  action: ActionTypes
): DaffCartReducerState<T> {
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
      cartPaymentMethodsReducer,
      cartCouponReducer
    ]
  )
}
