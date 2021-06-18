import { DaffCart } from '@daffodil/cart';
import { daffCreateMetaReducer } from '@daffodil/core/state';

import { ActionTypes } from './action-types.type';
import { cartBillingAddressReducer } from './cart-billing-address/cart-billing-address.reducer';
import { cartCouponReducer } from './cart-coupon/cart-coupon.reducer';
import { initialState } from './cart-initial-state';
import { cartItemReducer } from './cart-item/cart-item.reducer';
import { cartPaymentMethodsReducer } from './cart-payment-methods/cart-payment-methods.reducer';
import { cartPaymentReducer } from './cart-payment/cart-payment.reducer';
import { cartResolveReducer } from './cart-resolve/cart-resolve.reducer';
import { cartShippingAddressReducer } from './cart-shipping-address/cart-shipping-address.reducer';
import { cartShippingInformationReducer } from './cart-shipping-information/cart-shipping-information.reducer';
import { cartShippingMethodsReducer } from './cart-shipping-methods/cart-shipping-methods.reducer';
import { DaffCartReducerState } from './cart-state.interface';
import { cartReducer } from './cart/cart.reducer';

const REDUCERS = [
  cartReducer,
  cartItemReducer,
  cartBillingAddressReducer,
  cartShippingAddressReducer,
  cartShippingMethodsReducer,
  cartShippingInformationReducer,
  cartPaymentReducer,
  cartPaymentMethodsReducer,
  cartCouponReducer,
  cartResolveReducer,
];

/**
 * Calls each of the individual cart reducers in turn,
 * passing the returned state into the next.
 */
export function daffCartReducer<T extends DaffCart = DaffCart>(
  state = initialState,
  action: ActionTypes<T>,
): DaffCartReducerState<T> {
  return daffCreateMetaReducer<DaffCartReducerState<T>, ActionTypes<T>>(REDUCERS)(state, action);
}
