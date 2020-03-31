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

export function selectCartLoading():
	MemoizedSelector<object, DaffCartReducerState<DaffCart>['loading']> {
		return createSelector(
			cartStateSelector(),
			(state: DaffCartReducerState<DaffCart>) => state.loading
		)
	}

export function selectCartErrorsObject():
	MemoizedSelector<object, DaffCartReducerState<DaffCart>['errors']> {
		return createSelector(
			cartStateSelector(),
			(state: DaffCartReducerState<DaffCart>) => state.errors
		)
	}

export function selectCartErrors():
	MemoizedSelector<object, DaffCartReducerState<DaffCart>['errors'][DaffCartErrorType.Cart]> {
		return createSelector(
			selectCartErrorsObject(),
			(state: DaffCartReducerState<DaffCart>['errors']) => state[DaffCartErrorType.Cart]
		)
	}

export function selectBillingAddressErrors():
	MemoizedSelector<object, DaffCartReducerState<DaffCart>['errors'][DaffCartErrorType.BillingAddress]> {
		return createSelector(
			selectCartErrorsObject(),
			(state: DaffCartReducerState<DaffCart>['errors']) => state[DaffCartErrorType.BillingAddress]
		)
	}

export function selectShippingAddressErrors():
	MemoizedSelector<object, DaffCartReducerState<DaffCart>['errors'][DaffCartErrorType.ShippingAddress]> {
		return createSelector(
			selectCartErrorsObject(),
			(state: DaffCartReducerState<DaffCart>['errors']) => state[DaffCartErrorType.ShippingAddress]
		)
	}

export function selectShippingInformationErrors():
	MemoizedSelector<object, DaffCartReducerState<DaffCart>['errors'][DaffCartErrorType.ShippingInformation]> {
		return createSelector(
			selectCartErrorsObject(),
			(state: DaffCartReducerState<DaffCart>['errors']) => state[DaffCartErrorType.ShippingInformation]
		)
	}

export function selectShippingMethodsErrors():
	MemoizedSelector<object, DaffCartReducerState<DaffCart>['errors'][DaffCartErrorType.ShippingMethods]> {
		return createSelector(
			selectCartErrorsObject(),
			(state: DaffCartReducerState<DaffCart>['errors']) => state[DaffCartErrorType.ShippingMethods]
		)
	}

export function selectPaymentErrors():
	MemoizedSelector<object, DaffCartReducerState<DaffCart>['errors'][DaffCartErrorType.Payment]> {
		return createSelector(
			selectCartErrorsObject(),
			(state: DaffCartReducerState<DaffCart>['errors']) => state[DaffCartErrorType.Payment]
		)
	}

export function selectPaymentMethodsErrors():
	MemoizedSelector<object, DaffCartReducerState<DaffCart>['errors'][DaffCartErrorType.PaymentMethods]> {
		return createSelector(
			selectCartErrorsObject(),
			(state: DaffCartReducerState<DaffCart>['errors']) => state[DaffCartErrorType.PaymentMethods]
		)
	}

export function selectItemErrors():
	MemoizedSelector<object, DaffCartReducerState<DaffCart>['errors'][DaffCartErrorType.Item]> {
		return createSelector(
			selectCartErrorsObject(),
			(state: DaffCartReducerState<DaffCart>['errors']) => state[DaffCartErrorType.Item]
		)
	}

export function selectCartId():
	MemoizedSelector<object, DaffCartReducerState<DaffCart>['cart']['id']> {
		return createSelector(
			selectCartValue(),
			(state: DaffCartReducerState<DaffCart>['cart']) => state.id
		)
	}

export function selectCartSubtotal():
	MemoizedSelector<object, DaffCartReducerState<DaffCart>['cart']['subtotal']> {
		return createSelector(
			selectCartValue(),
			(state: DaffCartReducerState<DaffCart>['cart']) => state.subtotal
		)
	}

export function selectCartGrandTotal():
	MemoizedSelector<object, DaffCartReducerState<DaffCart>['cart']['grand_total']> {
		return createSelector(
			selectCartValue(),
			(state: DaffCartReducerState<DaffCart>['cart']) => state.grand_total
		)
	}

export function selectCartCoupons():
	MemoizedSelector<object, DaffCartReducerState<DaffCart>['cart']['coupons']> {
		return createSelector(
			selectCartValue(),
			(state: DaffCartReducerState<DaffCart>['cart']) => state.coupons
		)
	}

export function selectCartItems():
	MemoizedSelector<object, DaffCartReducerState<DaffCart>['cart']['items']> {
		return createSelector(
			selectCartValue(),
			(state: DaffCartReducerState<DaffCart>['cart']) => state.items
		)
	}

export function selectCartBillingAddress():
	MemoizedSelector<object, DaffCartReducerState<DaffCart>['cart']['billing_address']> {
		return createSelector(
			selectCartValue(),
			(state: DaffCartReducerState<DaffCart>['cart']) => state.billing_address
		)
	}

export function selectCartShippingAddress():
	MemoizedSelector<object, DaffCartReducerState<DaffCart>['cart']['shipping_address']> {
		return createSelector(
			selectCartValue(),
			(state: DaffCartReducerState<DaffCart>['cart']) => state.shipping_address
		)
	}

export function selectCartPayment():
	MemoizedSelector<object, DaffCartReducerState<DaffCart>['cart']['payment']> {
		return createSelector(
			selectCartValue(),
			(state: DaffCartReducerState<DaffCart>['cart']) => state.payment
		)
	}

export function selectCartTotals():
	MemoizedSelector<object, DaffCartReducerState<DaffCart>['cart']['totals']> {
		return createSelector(
			selectCartValue(),
			(state: DaffCartReducerState<DaffCart>['cart']) => state.totals
		)
	}

export function selectCartShippingInformation():
	MemoizedSelector<object, DaffCartReducerState<DaffCart>['cart']['shipping_information']> {
		return createSelector(
			selectCartValue(),
			(state: DaffCartReducerState<DaffCart>['cart']) => state.shipping_information
		)
	}

export function selectCartAvailableShippingMethods():
	MemoizedSelector<object, DaffCartReducerState<DaffCart>['cart']['available_shipping_methods']> {
		return createSelector(
			selectCartValue(),
			(state: DaffCartReducerState<DaffCart>['cart']) => state.available_shipping_methods
		)
	}

export function selectCartAvailablePaymentMethods():
	MemoizedSelector<object, DaffCartReducerState<DaffCart>['cart']['available_payment_methods']> {
		return createSelector(
			selectCartValue(),
			(state: DaffCartReducerState<DaffCart>['cart']) => state.available_payment_methods
		)
	}

export function selectIsCartEmpty():
	MemoizedSelector<object, boolean> {
		return createSelector(
			selectCartValue(),
			cart => !cart || !cart.items || cart.items.length === 0
		)
	}
