import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Action, Store, select } from '@ngrx/store';
import { Dictionary } from '@ngrx/entity';

import { DaffCart } from '../../models/cart';
import { DaffCartReducersState } from '../../reducers/public_api';
import { getDaffCartSelectors } from '../../selectors/public_api';
import { DaffCartErrors } from '../../reducers/errors/cart-errors.type';
import { DaffCartErrorType } from '../../reducers/errors/cart-error-type.enum';
import { DaffCartFacadeInterface } from './cart-facade.interface';
import { DaffCartOrderResult } from '../../models/cart-order-result';
import { DaffCartItem } from '../../models/cart-item';
import { DaffConfigurableCartItemAttribute } from '../../models/configurable-cart-item';
import { DaffCompositeCartItemOption } from '../../models/composite-cart-item';

@Injectable({
  providedIn: 'root'
})
export class DaffCartFacade<
  T extends DaffCart = DaffCart,
	V extends DaffCartOrderResult = DaffCartOrderResult,
	U extends DaffCartItem = DaffCartItem
> implements DaffCartFacadeInterface<T, V, U> {
  loading$: Observable<boolean>;
  resolved$: Observable<boolean>;
  cart$: Observable<T>;

  errors$: Observable<DaffCartErrors>;
  cartErrors$: Observable<DaffCartErrors[DaffCartErrorType.Cart]>;
  itemErrors$: Observable<DaffCartErrors[DaffCartErrorType.Item]>;
  billingAddressErrors$: Observable<DaffCartErrors[DaffCartErrorType.BillingAddress]>;
  shippingAddressErrors$: Observable<DaffCartErrors[DaffCartErrorType.ShippingAddress]>;
  shippingInformationErrors$: Observable<DaffCartErrors[DaffCartErrorType.ShippingInformation]>;
  shippingMethodsErrors$: Observable<DaffCartErrors[DaffCartErrorType.ShippingMethods]>;
  paymentErrors$: Observable<DaffCartErrors[DaffCartErrorType.Payment]>;
  paymentMethodsErrors$: Observable<DaffCartErrors[DaffCartErrorType.PaymentMethods]>;
  couponErrors$: Observable<DaffCartErrors[DaffCartErrorType.Coupon]>;

  id$: Observable<DaffCart['id']>;
  subtotal$: Observable<DaffCart['subtotal']>;
  grandTotal$: Observable<DaffCart['grand_total']>;
  coupons$: Observable<DaffCart['coupons']>;
  items$: Observable<DaffCart['items']>;
  itemDictionary$: Observable<Dictionary<U>>;
  billingAddress$: Observable<DaffCart['billing_address']>;
  shippingAddress$: Observable<DaffCart['shipping_address']>;
  payment$: Observable<DaffCart['payment']>;
  totals$: Observable<DaffCart['totals']>;
  shippingInformation$: Observable<DaffCart['shipping_information']>;
  availableShippingMethods$: Observable<DaffCart['available_shipping_methods']>;
  availablePaymentMethods$: Observable<DaffCart['available_payment_methods']>;

  isCartEmpty$: Observable<boolean>;
  isBillingSameAsShipping$: Observable<boolean>;

  hasBillingAddress$: Observable<boolean>;
  hasShippingAddress$: Observable<boolean>;
  hasShippingMethod$: Observable<boolean>;
  hasPaymentMethod$: Observable<boolean>;
  canPlaceOrder$: Observable<boolean>;

  orderResultLoading$: Observable<boolean>;
	orderResultErrors$: Observable<string[]>;
	orderResult$: Observable<V>;
	orderResultId$: Observable<V['orderId']>;
	orderResultCartId$: Observable<V['cartId']>;
  hasOrderResult$: Observable<boolean>;

	private _selectCartItemDiscountedRowTotal;
	private _selectCartItemConfiguredAttributes;
	private _selectCartItemCompositeOptions;
	private _selectIsCartItemOutOfStock;

  constructor(private store: Store<DaffCartReducersState<T, V, U>>) {
		const {
      selectCartLoading,
      selectCartResolved,
			selectCartValue,
			selectCartErrorsObject,
			selectCartErrors,
			selectItemErrors,
			selectBillingAddressErrors,
			selectShippingAddressErrors,
			selectShippingInformationErrors,
			selectShippingMethodsErrors,
			selectPaymentErrors,
      selectPaymentMethodsErrors,
      selectCouponErrors,

			selectCartId,
			selectCartSubtotal,
			selectCartGrandTotal,
			selectCartCoupons,
			selectCartItems,
			selectCartItemEntities,
			selectCartItemConfiguredAttributes,
			selectCartItemCompositeOptions,
			selectCartBillingAddress,
			selectCartShippingAddress,
			selectCartPayment,
			selectCartTotals,
			selectCartShippingInformation,
			selectCartAvailableShippingMethods,
      selectCartAvailablePaymentMethods,

      selectIsCartEmpty,
      selectIsBillingSameAsShipping,

      selectCartOrderLoading,
      selectCartOrderErrors,
      selectCartOrderValue,
			selectCartOrderId,
			selectCartOrderCartId,
      selectHasOrderResult,
      selectCartItemDiscountedRowTotal,
      selectIsCartItemOutOfStock,

      selectHasBillingAddress,
      selectHasShippingAddress,
      selectHasShippingMethod,
      selectHasPaymentMethod,
      selectCanPlaceOrder
		} = getDaffCartSelectors<T, V, U>();
		this._selectCartItemDiscountedRowTotal = selectCartItemDiscountedRowTotal;
		this._selectCartItemConfiguredAttributes = selectCartItemConfiguredAttributes;
		this._selectCartItemCompositeOptions = selectCartItemCompositeOptions;
		this._selectIsCartItemOutOfStock = selectIsCartItemOutOfStock;

    this.loading$ = this.store.pipe(select(selectCartLoading));
    this.resolved$ = this.store.pipe(select(selectCartResolved));
		this.cart$ = this.store.pipe(select(selectCartValue));
    this.errors$ = this.store.pipe(select(selectCartErrorsObject));
    this.cartErrors$ = this.store.pipe(select(selectCartErrors));
    this.itemErrors$ = this.store.pipe(select(selectItemErrors));
    this.billingAddressErrors$ = this.store.pipe(select(selectBillingAddressErrors));
    this.shippingAddressErrors$ = this.store.pipe(select(selectShippingAddressErrors));
    this.shippingInformationErrors$ = this.store.pipe(select(selectShippingInformationErrors));
    this.shippingMethodsErrors$ = this.store.pipe(select(selectShippingMethodsErrors));
    this.paymentErrors$ = this.store.pipe(select(selectPaymentErrors));
    this.paymentMethodsErrors$ = this.store.pipe(select(selectPaymentMethodsErrors));
    this.couponErrors$ = this.store.pipe(select(selectCouponErrors));

    this.id$ = this.store.pipe(select(selectCartId));
    this.subtotal$ = this.store.pipe(select(selectCartSubtotal));
    this.grandTotal$ = this.store.pipe(select(selectCartGrandTotal));
    this.coupons$ = this.store.pipe(select(selectCartCoupons));
    this.items$ = this.store.pipe(select(selectCartItems));
    this.itemDictionary$ = this.store.pipe(select(selectCartItemEntities));
    this.billingAddress$ = this.store.pipe(select(selectCartBillingAddress));
    this.shippingAddress$ = this.store.pipe(select(selectCartShippingAddress));
    this.payment$ = this.store.pipe(select(selectCartPayment));
    this.totals$ = this.store.pipe(select(selectCartTotals));
    this.shippingInformation$ = this.store.pipe(select(selectCartShippingInformation));
    this.availableShippingMethods$ = this.store.pipe(select(selectCartAvailableShippingMethods));
    this.availablePaymentMethods$ = this.store.pipe(select(selectCartAvailablePaymentMethods));

    this.isCartEmpty$ = this.store.pipe(select(selectIsCartEmpty));
    this.isBillingSameAsShipping$ = this.store.pipe(select(selectIsBillingSameAsShipping));

    this.hasBillingAddress$ = this.store.pipe(select(selectHasBillingAddress));
    this.hasShippingAddress$ = this.store.pipe(select(selectHasShippingAddress));
    this.hasShippingMethod$ = this.store.pipe(select(selectHasShippingMethod));
    this.hasPaymentMethod$ = this.store.pipe(select(selectHasPaymentMethod));
    this.canPlaceOrder$ = this.store.pipe(select(selectCanPlaceOrder));

    this.orderResultLoading$ = this.store.pipe(select(selectCartOrderLoading));
    this.orderResultErrors$ = this.store.pipe(select(selectCartOrderErrors));
    this.orderResult$ = this.store.pipe(select(selectCartOrderValue));
    this.orderResultId$ = this.store.pipe(select(selectCartOrderId));
    this.orderResultCartId$ = this.store.pipe(select(selectCartOrderCartId));
    this.hasOrderResult$ = this.store.pipe(select(selectHasOrderResult));
	}

	getConfiguredCartItemAttributes(itemId: string | number): Observable<DaffConfigurableCartItemAttribute[]> {
		return this.store.pipe(select(this._selectCartItemConfiguredAttributes, { id: itemId }))
	};

  getCompositeCartItemOptions(itemId: string | number): Observable<DaffCompositeCartItemOption[]> {
		return this.store.pipe(select(this._selectCartItemCompositeOptions, { id: itemId }));
	};

	getCartItemDiscountedTotal(itemId: string | number): Observable<number> {
		return this.store.pipe(select(this._selectCartItemDiscountedRowTotal, { id: itemId }));
	}

	isCartItemOutOfStock(itemId: DaffCartItem['item_id']): Observable<boolean> {
		return this.store.pipe(select(this._selectIsCartItemOutOfStock, { id: itemId }));
	}

  dispatch(action: Action) {
    this.store.dispatch(action);
  }
}
