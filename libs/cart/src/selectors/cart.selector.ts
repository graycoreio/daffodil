import {
  createFeatureSelector,
  createSelector,
  MemoizedSelector
} from '@ngrx/store';

import {
  DaffCartReducersState,
  DaffCartReducerState
} from '../reducers';
import { DaffCartErrorType } from '../reducers/cart-error-type.enum';

/**
 * Cart DaffCartReducersState
 */
export const selectCartState = createFeatureSelector<DaffCartReducersState>('cart');

export const cartStateSelector: MemoizedSelector<object, DaffCartReducersState['cart']> = createSelector(
  selectCartState,
  (state: DaffCartReducersState) => state.cart
)

export const selectCartValue: MemoizedSelector<object, DaffCartReducerState['cart']> = createSelector(
  cartStateSelector,
  (state: DaffCartReducerState) => state.cart
)

export const selectCartLoading: MemoizedSelector<object, DaffCartReducerState['loading']> = createSelector(
  cartStateSelector,
  (state: DaffCartReducerState) => state.loading
)

export const selectCartErrors: MemoizedSelector<object, DaffCartReducerState['errors'][DaffCartErrorType.Cart]> = createSelector(
  cartStateSelector,
  (state: DaffCartReducerState) => state.errors[DaffCartErrorType.Cart]
)

export const selectBillingAddressErrors: MemoizedSelector<object, DaffCartReducerState['errors'][DaffCartErrorType.BillingAddress]> = createSelector(
  cartStateSelector,
  (state: DaffCartReducerState) => state.errors[DaffCartErrorType.BillingAddress]
)

export const selectShippingAddressErrors: MemoizedSelector<object, DaffCartReducerState['errors'][DaffCartErrorType.ShippingAddress]> = createSelector(
  cartStateSelector,
  (state: DaffCartReducerState) => state.errors[DaffCartErrorType.ShippingAddress]
)

export const selectShippingInformationErrors: MemoizedSelector<object, DaffCartReducerState['errors'][DaffCartErrorType.ShippingInformation]> = createSelector(
  cartStateSelector,
  (state: DaffCartReducerState) => state.errors[DaffCartErrorType.ShippingInformation]
)

export const selectShippingMethodsErrors: MemoizedSelector<object, DaffCartReducerState['errors'][DaffCartErrorType.ShippingMethods]> = createSelector(
  cartStateSelector,
  (state: DaffCartReducerState) => state.errors[DaffCartErrorType.ShippingMethods]
)

export const selectPaymentErrors: MemoizedSelector<object, DaffCartReducerState['errors'][DaffCartErrorType.Payment]> = createSelector(
  cartStateSelector,
  (state: DaffCartReducerState) => state.errors[DaffCartErrorType.Payment]
)

export const selectPaymentMethodsErrors: MemoizedSelector<object, DaffCartReducerState['errors'][DaffCartErrorType.PaymentMethods]> = createSelector(
  cartStateSelector,
  (state: DaffCartReducerState) => state.errors[DaffCartErrorType.PaymentMethods]
)

export const selectItemErrors: MemoizedSelector<object, DaffCartReducerState['errors'][DaffCartErrorType.Item]> = createSelector(
  cartStateSelector,
  (state: DaffCartReducerState) => state.errors[DaffCartErrorType.Item]
)

export const selectCartId: MemoizedSelector<object, DaffCartReducerState['cart']['id']> = createSelector(
  selectCartValue,
  (state: DaffCartReducerState['cart']) => state.id
)

export const selectCartSubtotal: MemoizedSelector<object, DaffCartReducerState['cart']['subtotal']> = createSelector(
  selectCartValue,
  (state: DaffCartReducerState['cart']) => state.subtotal
)

export const selectCartGrandTotal: MemoizedSelector<object, DaffCartReducerState['cart']['grand_total']> = createSelector(
  selectCartValue,
  (state: DaffCartReducerState['cart']) => state.grand_total
)

export const selectCartCoupons: MemoizedSelector<object, DaffCartReducerState['cart']['coupons']> = createSelector(
  selectCartValue,
  (state: DaffCartReducerState['cart']) => state.coupons
)

export const selectCartItems: MemoizedSelector<object, DaffCartReducerState['cart']['items']> = createSelector(
  selectCartValue,
  (state: DaffCartReducerState['cart']) => state.items
)

export const selectCartBillingAddress: MemoizedSelector<object, DaffCartReducerState['cart']['billing_address']> = createSelector(
  selectCartValue,
  (state: DaffCartReducerState['cart']) => state.billing_address
)

export const selectCartShippingAddress: MemoizedSelector<object, DaffCartReducerState['cart']['shipping_address']> = createSelector(
  selectCartValue,
  (state: DaffCartReducerState['cart']) => state.shipping_address
)

export const selectCartPayment: MemoizedSelector<object, DaffCartReducerState['cart']['payment']> = createSelector(
  selectCartValue,
  (state: DaffCartReducerState['cart']) => state.payment
)

export const selectCartTotals: MemoizedSelector<object, DaffCartReducerState['cart']['totals']> = createSelector(
  selectCartValue,
  (state: DaffCartReducerState['cart']) => state.totals
)

export const selectCartShippingInformation: MemoizedSelector<object, DaffCartReducerState['cart']['shipping_information']> = createSelector(
  selectCartValue,
  (state: DaffCartReducerState['cart']) => state.shipping_information
)

export const selectCartAvailableShippingMethods: MemoizedSelector<object, DaffCartReducerState['cart']['available_shipping_methods']> = createSelector(
  selectCartValue,
  (state: DaffCartReducerState['cart']) => state.available_shipping_methods
)

export const selectCartAvailablePaymentMethods: MemoizedSelector<object, DaffCartReducerState['cart']['available_payment_methods']> = createSelector(
  selectCartValue,
  (state: DaffCartReducerState['cart']) => state.available_payment_methods
)
