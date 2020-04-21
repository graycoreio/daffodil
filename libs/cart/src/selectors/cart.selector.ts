import {
  createFeatureSelector,
  createSelector,
  MemoizedSelector
} from '@ngrx/store';

import {
  DaffCartReducersState,
  DaffCartReducerState,
  DaffCartOrderReducerState
} from '../reducers/public_api';
import { DaffCartErrorType } from '../reducers/cart-error-type.enum';
import { DaffCart } from '../models/cart';
import { DaffCartOrderResult } from '../models/cart-order-result';

export interface DaffCartMemoizedSelectors<
  T extends DaffCart = DaffCart,
  V extends DaffCartOrderResult = DaffCartOrderResult
> {
	selectCartFeatureState: MemoizedSelector<object, DaffCartReducersState<T, V>>;
	selectCartState: MemoizedSelector<object, DaffCartReducerState<T>>;
	selectCartValue: MemoizedSelector<object, T>;
	selectCartLoading: MemoizedSelector<object, boolean>;
	selectCartErrorsObject: MemoizedSelector<object, DaffCartReducerState<T>['errors']>;
	selectCartErrors: MemoizedSelector<object, string[]>;
	selectBillingAddressErrors: MemoizedSelector<object, string[]>;
	selectShippingAddressErrors: MemoizedSelector<object, string[]>;
	selectShippingInformationErrors: MemoizedSelector<object, string[]>;
	selectShippingMethodsErrors: MemoizedSelector<object, string[]>;
	selectPaymentErrors: MemoizedSelector<object, string[]>;
	selectPaymentMethodsErrors: MemoizedSelector<object, string[]>;
	selectItemErrors: MemoizedSelector<object, string[]>;
	selectCartId: MemoizedSelector<object, T['id']>;
	selectCartSubtotal: MemoizedSelector<object, T['subtotal']>;
	selectCartGrandTotal: MemoizedSelector<object, T['grand_total']>;
	selectCartCoupons: MemoizedSelector<object, T['coupons']>;
	selectCartItems: MemoizedSelector<object, T['items']>;
	selectCartBillingAddress: MemoizedSelector<object, T['billing_address']>;
	selectCartShippingAddress: MemoizedSelector<object, T['shipping_address']>;
	selectCartPayment: MemoizedSelector<object, T['payment']>;
	selectCartTotals: MemoizedSelector<object, T['totals']>;
	selectCartShippingInformation: MemoizedSelector<object, T['shipping_information']>;
	selectCartAvailableShippingMethods: MemoizedSelector<object, T['available_shipping_methods']>;
	selectCartAvailablePaymentMethods: MemoizedSelector<object, T['available_payment_methods']>;
  selectIsCartEmpty: MemoizedSelector<object, boolean>;

  selectCartOrderState: MemoizedSelector<object, DaffCartOrderReducerState<V>>;
  selectCartOrderLoading: MemoizedSelector<object, boolean>;
	selectCartOrderErrors: MemoizedSelector<object, DaffCartOrderReducerState<V>['errors']>;
	selectCartOrderValue: MemoizedSelector<object, DaffCartOrderReducerState<V>['cartOrderResult']>;
	selectCartOrderId: MemoizedSelector<object, DaffCartOrderReducerState<V>['cartOrderResult']['id']>;
}

const createCartFeatureSelectors = <
  T extends DaffCart = DaffCart,
  V extends DaffCartOrderResult = DaffCartOrderResult
>(): DaffCartMemoizedSelectors<T> => {
	const selectCartFeatureState = createFeatureSelector<DaffCartReducersState<T, V>>('cart');
	const selectCartState = createSelector(
		selectCartFeatureState,
		(state: DaffCartReducersState<T, V>) => state.cart
	);
	const selectCartValue = createSelector(
		selectCartState,
		(state: DaffCartReducerState<T>) => state.cart
	);
	const selectCartLoading = createSelector(
		selectCartState,
		(state: DaffCartReducerState<T>) => state.loading
	);
	const selectCartErrorsObject = createSelector(
		selectCartState,
		(state: DaffCartReducerState<T>) => state.errors
	);
	const selectCartErrors = createSelector(
		selectCartErrorsObject,
		(state: DaffCartReducerState<T>['errors']) => state[DaffCartErrorType.Cart]
	);
	const selectBillingAddressErrors = createSelector(
		selectCartErrorsObject,
		(state: DaffCartReducerState<T>['errors']) => state[DaffCartErrorType.BillingAddress]
	);
	const selectShippingAddressErrors = createSelector(
		selectCartErrorsObject,
		(state: DaffCartReducerState<T>['errors']) => state[DaffCartErrorType.ShippingAddress]
	);
	const selectShippingInformationErrors = createSelector(
		selectCartErrorsObject,
		(state: DaffCartReducerState<T>['errors']) => state[DaffCartErrorType.ShippingInformation]
	);
	const selectShippingMethodsErrors = createSelector(
		selectCartErrorsObject,
		(state: DaffCartReducerState<T>['errors']) => state[DaffCartErrorType.ShippingMethods]
	);
	const selectPaymentErrors = createSelector(
		selectCartErrorsObject,
		(state: DaffCartReducerState<T>['errors']) => state[DaffCartErrorType.Payment]
	);
	const selectPaymentMethodsErrors = createSelector(
		selectCartErrorsObject,
		(state: DaffCartReducerState<T>['errors']) => state[DaffCartErrorType.PaymentMethods]
	);
	const selectItemErrors = createSelector(
		selectCartErrorsObject,
		(state: DaffCartReducerState<T>['errors']) => state[DaffCartErrorType.Item]
	);
	const selectCartId = createSelector(
		selectCartValue,
		(state: DaffCartReducerState<T>['cart']) => state.id
	);
	const selectCartSubtotal = createSelector(
		selectCartValue,
		(state: DaffCartReducerState<T>['cart']) => state.subtotal
	);
	const selectCartGrandTotal = createSelector(
		selectCartValue,
		(state: DaffCartReducerState<T>['cart']) => state.grand_total
	);
	const selectCartCoupons = createSelector(
		selectCartValue,
		(state: DaffCartReducerState<T>['cart']) => state.coupons
	);
	const selectCartItems = createSelector(
		selectCartValue,
		(state: DaffCartReducerState<T>['cart']) => state.items
	);
	const selectCartBillingAddress = createSelector(
		selectCartValue,
		(state: DaffCartReducerState<T>['cart']) => state.billing_address
	);
	const selectCartShippingAddress = createSelector(
		selectCartValue,
		(state: DaffCartReducerState<T>['cart']) => state.shipping_address
	);
	const selectCartPayment = createSelector(
		selectCartValue,
		(state: DaffCartReducerState<T>['cart']) => state.payment
	);
	const selectCartTotals = createSelector(
		selectCartValue,
		(state: DaffCartReducerState<T>['cart']) => state.totals
	);
	const selectCartShippingInformation = createSelector(
		selectCartValue,
		(state: DaffCartReducerState<T>['cart']) => state.shipping_information
	);
	const selectCartAvailableShippingMethods = createSelector(
		selectCartValue,
		(state: DaffCartReducerState<T>['cart']) => state.available_shipping_methods
	);
	const selectCartAvailablePaymentMethods = createSelector(
		selectCartValue,
		(state: DaffCartReducerState<T>['cart']) => state.available_payment_methods
	);
	const selectIsCartEmpty = createSelector(
		selectCartValue,
		cart => !cart || !cart.items || cart.items.length === 0
  );

  const selectCartOrderState = createSelector(
		selectCartFeatureState,
		(state: DaffCartReducersState<T, V>) => state.order
  );
  const selectCartOrderValue = createSelector(
		selectCartOrderState,
		(state: DaffCartOrderReducerState<V>) => state.cartOrderResult
  );
  const selectCartOrderId = createSelector(
		selectCartOrderValue,
		(state: DaffCartOrderReducerState<V>['cartOrderResult']) => state.id
  );
  const selectCartOrderLoading = createSelector(
		selectCartOrderState,
		(state: DaffCartOrderReducerState<V>) => state.loading
	);
	const selectCartOrderErrors = createSelector(
		selectCartOrderState,
		(state: DaffCartOrderReducerState<V>) => state.errors
  );

	return {
		selectCartFeatureState,
		selectCartState,
		selectCartValue,
		selectCartLoading,
		selectCartErrorsObject,
		selectCartErrors,
		selectBillingAddressErrors,
		selectShippingAddressErrors,
		selectShippingInformationErrors,
		selectShippingMethodsErrors,
		selectPaymentErrors,
		selectPaymentMethodsErrors,
		selectItemErrors,
		selectCartId,
		selectCartSubtotal,
		selectCartGrandTotal,
		selectCartCoupons,
		selectCartItems,
		selectCartBillingAddress,
		selectCartShippingAddress,
		selectCartPayment,
		selectCartTotals,
		selectCartShippingInformation,
		selectCartAvailableShippingMethods,
    selectCartAvailablePaymentMethods,
    selectIsCartEmpty,

    selectCartOrderState,
    selectCartOrderLoading,
    selectCartOrderErrors,
    selectCartOrderValue,
    selectCartOrderId
	}
}

export const getDaffCartSelectors = (() => {
	let cache;
	return <
    T extends DaffCart = DaffCart,
    V extends DaffCartOrderResult = DaffCartOrderResult
  >(): DaffCartMemoizedSelectors<T, V> => cache = cache
		? cache
		: createCartFeatureSelectors<T, V>();
})();
