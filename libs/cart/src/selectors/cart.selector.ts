import {
  createFeatureSelector,
  createSelector,
  MemoizedSelector
} from '@ngrx/store';

import {
  DaffCartReducersState,
  DaffCartReducerState
} from '../reducers/public_api';
import { DaffCartErrorType } from '../reducers/cart-error-type.enum';
import { DaffCart } from '../models/cart';

/**
 * Cart DaffCartReducersState
 */
export function selectCartState<T extends DaffCart>(): 
	MemoizedSelector<object, DaffCartReducersState<T>> {
		return createFeatureSelector<DaffCartReducersState<T>>('cart');
	}

export function cartStateSelector<T extends DaffCart>():
	MemoizedSelector<object, DaffCartReducersState<T>['cart']> {
		return createSelector(
			selectCartState(),
			(state: DaffCartReducersState<T>) => state.cart
		)
	}

export function selectCartValue<T extends DaffCart>():
	MemoizedSelector<object, DaffCartReducerState<T>['cart']> {
		return createSelector(
			cartStateSelector(),
			(state: DaffCartReducerState<T>) => state.cart
		)
	}

export function selectCartLoading<T extends DaffCart>():
	MemoizedSelector<object, DaffCartReducerState<T>['loading']> {
		return createSelector(
			cartStateSelector(),
			(state: DaffCartReducerState<T>) => state.loading
		)
	}

export function selectCartErrorsObject<T extends DaffCart>():
	MemoizedSelector<object, DaffCartReducerState<T>['errors']> {
		return createSelector(
			cartStateSelector(),
			(state: DaffCartReducerState<T>) => state.errors
		)
	}

export function selectCartErrors<T extends DaffCart>():
	MemoizedSelector<object, DaffCartReducerState<T>['errors'][DaffCartErrorType.Cart]> {
		return createSelector(
			selectCartErrorsObject(),
			(state: DaffCartReducerState<T>['errors']) => state[DaffCartErrorType.Cart]
		)
	}

export function selectBillingAddressErrors<T extends DaffCart>():
	MemoizedSelector<object, DaffCartReducerState<T>['errors'][DaffCartErrorType.BillingAddress]> {
		return createSelector(
			selectCartErrorsObject(),
			(state: DaffCartReducerState<T>['errors']) => state[DaffCartErrorType.BillingAddress]
		)
	}

export function selectShippingAddressErrors<T extends DaffCart>():
	MemoizedSelector<object, DaffCartReducerState<T>['errors'][DaffCartErrorType.ShippingAddress]> {
		return createSelector(
			selectCartErrorsObject(),
			(state: DaffCartReducerState<T>['errors']) => state[DaffCartErrorType.ShippingAddress]
		)
	}

export function selectShippingInformationErrors<T extends DaffCart>():
	MemoizedSelector<object, DaffCartReducerState<T>['errors'][DaffCartErrorType.ShippingInformation]> {
		return createSelector(
			selectCartErrorsObject(),
			(state: DaffCartReducerState<T>['errors']) => state[DaffCartErrorType.ShippingInformation]
		)
	}

export function selectShippingMethodsErrors<T extends DaffCart>():
	MemoizedSelector<object, DaffCartReducerState<T>['errors'][DaffCartErrorType.ShippingMethods]> {
		return createSelector(
			selectCartErrorsObject(),
			(state: DaffCartReducerState<T>['errors']) => state[DaffCartErrorType.ShippingMethods]
		)
	}

export function selectPaymentErrors<T extends DaffCart>():
	MemoizedSelector<object, DaffCartReducerState<T>['errors'][DaffCartErrorType.Payment]> {
		return createSelector(
			selectCartErrorsObject(),
			(state: DaffCartReducerState<T>['errors']) => state[DaffCartErrorType.Payment]
		)
	}

export function selectPaymentMethodsErrors<T extends DaffCart>():
	MemoizedSelector<object, DaffCartReducerState<T>['errors'][DaffCartErrorType.PaymentMethods]> {
		return createSelector(
			selectCartErrorsObject(),
			(state: DaffCartReducerState<T>['errors']) => state[DaffCartErrorType.PaymentMethods]
		)
	}

export function selectItemErrors<T extends DaffCart>():
	MemoizedSelector<object, DaffCartReducerState<T>['errors'][DaffCartErrorType.Item]> {
		return createSelector(
			selectCartErrorsObject(),
			(state: DaffCartReducerState<T>['errors']) => state[DaffCartErrorType.Item]
		)
	}

export function selectCartId<T extends DaffCart>():
	MemoizedSelector<object, DaffCartReducerState<T>['cart']['id']> {
		return createSelector(
			selectCartValue(),
			(state: DaffCartReducerState<T>['cart']) => state.id
		)
	}

export function selectCartSubtotal<T extends DaffCart>():
	MemoizedSelector<object, DaffCartReducerState<T>['cart']['subtotal']> {
		return createSelector(
			selectCartValue(),
			(state: DaffCartReducerState<T>['cart']) => state.subtotal
		)
	}

export function selectCartGrandTotal<T extends DaffCart>():
	MemoizedSelector<object, DaffCartReducerState<T>['cart']['grand_total']> {
		return createSelector(
			selectCartValue(),
			(state: DaffCartReducerState<T>['cart']) => state.grand_total
		)
	}

export function selectCartCoupons<T extends DaffCart>():
	MemoizedSelector<object, DaffCartReducerState<T>['cart']['coupons']> {
		return createSelector(
			selectCartValue(),
			(state: DaffCartReducerState<T>['cart']) => state.coupons
		)
	}

export function selectCartItems<T extends DaffCart>():
	MemoizedSelector<object, DaffCartReducerState<T>['cart']['items']> {
		return createSelector(
			selectCartValue(),
			(state: DaffCartReducerState<T>['cart']) => state.items
		)
	}

export function selectCartBillingAddress<T extends DaffCart>():
	MemoizedSelector<object, DaffCartReducerState<T>['cart']['billing_address']> {
		return createSelector(
			selectCartValue(),
			(state: DaffCartReducerState<T>['cart']) => state.billing_address
		)
	}

export function selectCartShippingAddress<T extends DaffCart>():
	MemoizedSelector<object, DaffCartReducerState<T>['cart']['shipping_address']> {
		return createSelector(
			selectCartValue(),
			(state: DaffCartReducerState<T>['cart']) => state.shipping_address
		)
	}

export function selectCartPayment<T extends DaffCart>():
	MemoizedSelector<object, DaffCartReducerState<T>['cart']['payment']> {
		return createSelector(
			selectCartValue(),
			(state: DaffCartReducerState<T>['cart']) => state.payment
		)
	}

export function selectCartTotals<T extends DaffCart>():
	MemoizedSelector<object, DaffCartReducerState<T>['cart']['totals']> {
		return createSelector(
			selectCartValue(),
			(state: DaffCartReducerState<T>['cart']) => state.totals
		)
	}

export function selectCartShippingInformation<T extends DaffCart>():
	MemoizedSelector<object, DaffCartReducerState<T>['cart']['shipping_information']> {
		return createSelector(
			selectCartValue(),
			(state: DaffCartReducerState<T>['cart']) => state.shipping_information
		)
	}

export function selectCartAvailableShippingMethods<T extends DaffCart>():
	MemoizedSelector<object, DaffCartReducerState<T>['cart']['available_shipping_methods']> {
		return createSelector(
			selectCartValue(),
			(state: DaffCartReducerState<T>['cart']) => state.available_shipping_methods
		)
	}

export function selectCartAvailablePaymentMethods<T extends DaffCart>():
	MemoizedSelector<object, DaffCartReducerState<T>['cart']['available_payment_methods']> {
		return createSelector(
			selectCartValue(),
			(state: DaffCartReducerState<T>['cart']) => state.available_payment_methods
		)
	}

export function selectIsCartEmpty():
	MemoizedSelector<object, boolean> {
		return createSelector(
			selectCartValue(),
			cart => !cart || !cart.items || cart.items.length === 0
		)
	}
