import {
  Inject,
  Injectable,
} from '@angular/core';
import { Dictionary } from '@ngrx/entity';
import {
  Action,
  Store,
  select,
} from '@ngrx/store';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import {
  DaffCart,
  DaffCartOrderResult,
  DaffCartTotal,
  DaffCartPaymentMethodIdMap,
  DaffConfigurableCartItemAttribute,
  DaffCompositeCartItemOption,
  DaffCartItemDiscount,
} from '@daffodil/cart';
import { DaffStateError } from '@daffodil/core/state';

import { DaffCartFacadeInterface } from './cart-facade.interface';
import {
  DaffCartItemStateEnum,
  DaffStatefulCartItem,
} from '../../models/stateful-cart-item';
import { DaffCartOperationType } from '../../reducers/cart-operation-type.enum';
import { DaffCartErrors } from '../../reducers/errors/cart-errors.type';
import { DaffCartLoading } from '../../reducers/loading/cart-loading.type';
import {
  DaffCartStateRootSlice,
  DaffCartResolveState,
} from '../../reducers/public_api';
import {
  getDaffCartSelectors,
  DaffCartMemoizedSelectors,
} from '../../selectors/public_api';

/**
 * @inheritdoc
 */
@Injectable({
  providedIn: 'root',
})
export class DaffCartFacade<
  T extends DaffCart = DaffCart,
  V extends DaffCartOrderResult = DaffCartOrderResult,
  U extends DaffStatefulCartItem = DaffStatefulCartItem
> implements DaffCartFacadeInterface<T, V, U> {
  cart$: Observable<T>;

  resolved$: Observable<DaffCartResolveState>;

  loadingObject$: Observable<DaffCartLoading>;
  featureLoading$: Observable<boolean>;
  featureResolving$: Observable<boolean>;
  featureMutating$: Observable<boolean>;
  loading$: Observable<boolean>;
  resolving$: Observable<boolean>;
  mutating$: Observable<boolean>;
  billingAddressLoading$: Observable<boolean>;
  billingAddressResolving$: Observable<boolean>;
  billingAddressMutating$: Observable<boolean>;
  shippingAddressLoading$: Observable<boolean>;
  shippingAddressResolving$: Observable<boolean>;
  shippingAddressMutating$: Observable<boolean>;
  shippingInformationLoading$: Observable<boolean>;
  shippingInformationResolving$: Observable<boolean>;
  shippingInformationMutating$: Observable<boolean>;
  shippingMethodsLoading$: Observable<boolean>;
  shippingMethodsResolving$: Observable<boolean>;
  paymentLoading$: Observable<boolean>;
  paymentResolving$: Observable<boolean>;
  paymentMutating$: Observable<boolean>;
  paymentMethodsLoading$: Observable<boolean>;
  paymentMethodsResolving$: Observable<boolean>;
  couponLoading$: Observable<boolean>;
  couponResolving$: Observable<boolean>;
  couponMutating$: Observable<boolean>;
  itemLoading$: Observable<boolean>;
  itemAdding$: Observable<boolean>;
  itemResolving$: Observable<boolean>;
  itemMutating$: Observable<boolean>;

  errors$: Observable<DaffCartErrors>;
  cartErrors$: Observable<DaffCartErrors[DaffCartOperationType.Cart]>;
  itemErrors$: Observable<DaffCartErrors[DaffCartOperationType.Item]>;
  billingAddressErrors$: Observable<DaffCartErrors[DaffCartOperationType.BillingAddress]>;
  shippingAddressErrors$: Observable<DaffCartErrors[DaffCartOperationType.ShippingAddress]>;
  shippingInformationErrors$: Observable<DaffCartErrors[DaffCartOperationType.ShippingInformation]>;
  shippingMethodsErrors$: Observable<DaffCartErrors[DaffCartOperationType.ShippingMethods]>;
  paymentErrors$: Observable<DaffCartErrors[DaffCartOperationType.Payment]>;
  paymentMethodsErrors$: Observable<DaffCartErrors[DaffCartOperationType.PaymentMethods]>;
  couponErrors$: Observable<DaffCartErrors[DaffCartOperationType.Coupon]>;

  id$: Observable<T['id']>;
  subtotal$: Observable<DaffCartTotal['value']>;
  grandTotal$: Observable<DaffCartTotal['value']>;
  subtotalExcludingTax$: Observable<DaffCartTotal['value']>;
  subtotalIncludingTax$: Observable<DaffCartTotal['value']>;
  subtotalWithDiscountExcludingTax$: Observable<DaffCartTotal['value']>;
  subtotalWithDiscountIncludingTax$: Observable<DaffCartTotal['value']>;
  discountTotals$: Observable<DaffCartTotal[]>;
  totalTax$: Observable<DaffCartTotal['value']>;
  shippingTotal$: Observable<DaffCartTotal['value']>;
  coupons$: Observable<T['coupons']>;
  itemEntities$: Observable<U[]>;
  items$: Observable<T['items']>;
  totalItems$: Observable<number>;
  hasOutOfStockItems$: Observable<boolean>;
  outOfStockItems$: Observable<U[]>;
  inStockItems$: Observable<U[]>;
  itemDictionary$: Observable<Dictionary<U>>;
  billingAddress$: Observable<T['billing_address']>;
  shippingAddress$: Observable<T['shipping_address']>;
  payment$: Observable<T['payment']>;
  totals$: Observable<T['totals']>;
  shippingInformation$: Observable<T['shipping_information']>;
  availableShippingMethods$: Observable<T['available_shipping_methods']>;
  availablePaymentMethods$: Observable<T['available_payment_methods']>;
  paymentId$: Observable<any>;

  isCartEmpty$: Observable<boolean>;
  isBillingSameAsShipping$: Observable<boolean>;

  hasBillingAddress$: Observable<boolean>;
  hasShippingAddress$: Observable<boolean>;
  hasShippingMethod$: Observable<boolean>;
  hasPaymentMethod$: Observable<boolean>;
  canPlaceOrder$: Observable<boolean>;

  orderResultLoading$: Observable<boolean>;
  orderResultErrors$: Observable<DaffStateError[]>;
  orderResult$: Observable<V>;
  orderResultId$: Observable<V['orderId']>;
  orderResultCartId$: Observable<V['cartId']>;
  hasOrderResult$: Observable<boolean>;

  private _selectCartItemConfiguredAttributes: DaffCartMemoizedSelectors<T, V, U>['selectCartItemConfiguredAttributes'];
  private _selectCartItemCompositeOptions: DaffCartMemoizedSelectors<T, V, U>['selectCartItemCompositeOptions'];
  private _selectIsCartItemOutOfStock: DaffCartMemoizedSelectors<T, V, U>['selectIsCartItemOutOfStock'];
  private _selectCartItemState: DaffCartMemoizedSelectors<T, V, U>['selectCartItemState'];
  private _selectCartItemPrice: DaffCartMemoizedSelectors<T, V, U>['selectCartItemPrice'];
  private _selectCartItemQuantity: DaffCartMemoizedSelectors<T, V, U>['selectCartItemQuantity'];
  private _selectCartItemRowTotal: DaffCartMemoizedSelectors<T, V, U>['selectCartItemRowTotal'];
  private _selectCartItemDiscounts: DaffCartMemoizedSelectors<T, V, U>['selectCartItemDiscounts'];
  private _selectCartItemTotalDiscount: DaffCartMemoizedSelectors<T, V, U>['selectCartItemTotalDiscount'];
  private _selectCartItemErrors: DaffCartMemoizedSelectors<T, V, U>['selectCartItemErrors'];

  constructor(
    private store: Store<DaffCartStateRootSlice<T, V, U>>,
    // typing this as `Record<string, any>` or `object` fails the build
    // because Angular explicitly types this as `Object`
    // eslint-disable-next-line @typescript-eslint/ban-types
    @Inject(DaffCartPaymentMethodIdMap) private paymentMethodMap: Object,
  ) {
    const {
      selectCartValue,

      selectCartResolved,

      selectCartLoadingObject,
      selectCartFeatureLoading,
      selectCartFeatureResolving,
      selectCartFeatureMutating,
      selectCartLoading,
      selectCartResolving,
      selectCartMutating,
      selectBillingAddressLoading,
      selectBillingAddressResolving,
      selectBillingAddressMutating,
      selectShippingAddressLoading,
      selectShippingAddressResolving,
      selectShippingAddressMutating,
      selectShippingInformationLoading,
      selectShippingInformationResolving,
      selectShippingInformationMutating,
      selectShippingMethodsLoading,
      selectShippingMethodsResolving,
      selectPaymentLoading,
      selectPaymentResolving,
      selectPaymentMutating,
      selectPaymentMethodsLoading,
      selectPaymentMethodsResolving,
      selectCouponLoading,
      selectCouponResolving,
      selectCouponMutating,
      selectItemLoading,
      selectItemAdding,
      selectItemResolving,
      selectCartItemMutating,

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
      selectCartSubtotalExcludingTax,
      selectCartSubtotalIncludingTax,
      selectCartSubtotalWithDiscountExcludingTax,
      selectCartSubtotalWithDiscountIncludingTax,
      selectCartDiscountTotals,
      selectCartTotalTax,
      selectCartShippingTotal,
      selectCartCoupons,
      selectCartItems,
      selectAllCartItems,
      selectCartHasOutOfStockItems,
      selectOutOfStockCartItems,
      selectInStockCartItems,
      selectCartItemEntities,
      selectTotalNumberOfCartItems,
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
      selectIsCartItemOutOfStock,
      selectCartItemState,

      selectHasBillingAddress,
      selectHasShippingAddress,
      selectHasShippingMethod,
      selectHasPaymentMethod,
      selectCanPlaceOrder,

      selectCartItemPrice,
      selectCartItemRowTotal,
      selectCartItemQuantity,
      selectCartItemDiscounts,
      selectCartItemTotalDiscount,
      selectCartItemErrors,
    } = getDaffCartSelectors<T, V, U>();
    this._selectCartItemConfiguredAttributes = selectCartItemConfiguredAttributes;
    this._selectCartItemCompositeOptions = selectCartItemCompositeOptions;
    this._selectIsCartItemOutOfStock = selectIsCartItemOutOfStock;
    this._selectCartItemState = selectCartItemState;
    this._selectCartItemPrice = selectCartItemPrice;
    this._selectCartItemQuantity = selectCartItemQuantity;
    this._selectCartItemRowTotal = selectCartItemRowTotal;
    this._selectCartItemDiscounts = selectCartItemDiscounts;
    this._selectCartItemTotalDiscount = selectCartItemTotalDiscount;
    this._selectCartItemErrors = selectCartItemErrors;

    this.cart$ = this.store.pipe(select(selectCartValue));

    this.resolved$ = this.store.pipe(select(selectCartResolved));

    this.loadingObject$ = this.store.pipe(select(selectCartLoadingObject));
    this.featureLoading$ = this.store.pipe(select(selectCartFeatureLoading));
    this.featureResolving$ = this.store.pipe(select(selectCartFeatureResolving));
    this.featureMutating$ = this.store.pipe(select(selectCartFeatureMutating));
    this.loading$ = this.store.pipe(select(selectCartLoading));
    this.resolving$ = this.store.pipe(select(selectCartResolving));
    this.mutating$ = this.store.pipe(select(selectCartMutating));
    this.billingAddressLoading$ = this.store.pipe(select(selectBillingAddressLoading));
    this.billingAddressResolving$ = this.store.pipe(select(selectBillingAddressResolving));
    this.billingAddressMutating$ = this.store.pipe(select(selectBillingAddressMutating));
    this.shippingAddressLoading$ = this.store.pipe(select(selectShippingAddressLoading));
    this.shippingAddressResolving$ = this.store.pipe(select(selectShippingAddressResolving));
    this.shippingAddressMutating$ = this.store.pipe(select(selectShippingAddressMutating));
    this.shippingInformationLoading$ = this.store.pipe(select(selectShippingInformationLoading));
    this.shippingInformationResolving$ = this.store.pipe(select(selectShippingInformationResolving));
    this.shippingInformationMutating$ = this.store.pipe(select(selectShippingInformationMutating));
    this.shippingMethodsLoading$ = this.store.pipe(select(selectShippingMethodsLoading));
    this.shippingMethodsResolving$ = this.store.pipe(select(selectShippingMethodsResolving));
    this.paymentLoading$ = this.store.pipe(select(selectPaymentLoading));
    this.paymentResolving$ = this.store.pipe(select(selectPaymentResolving));
    this.paymentMutating$ = this.store.pipe(select(selectPaymentMutating));
    this.paymentMethodsLoading$ = this.store.pipe(select(selectPaymentMethodsLoading));
    this.paymentMethodsResolving$ = this.store.pipe(select(selectPaymentMethodsResolving));
    this.couponLoading$ = this.store.pipe(select(selectCouponLoading));
    this.couponResolving$ = this.store.pipe(select(selectCouponResolving));
    this.couponMutating$ = this.store.pipe(select(selectCouponMutating));
    this.itemLoading$ = this.store.pipe(select(selectItemLoading));
    this.itemAdding$ = this.store.pipe(select(selectItemAdding));
    this.itemResolving$ = this.store.pipe(select(selectItemResolving));
    this.itemMutating$ = this.store.pipe(select(selectCartItemMutating));

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
    this.subtotalExcludingTax$ = this.store.pipe(select(selectCartSubtotalExcludingTax));
    this.subtotalIncludingTax$ = this.store.pipe(select(selectCartSubtotalIncludingTax));
    this.subtotalWithDiscountExcludingTax$ = this.store.pipe(select(selectCartSubtotalWithDiscountExcludingTax));
    this.subtotalWithDiscountIncludingTax$ = this.store.pipe(select(selectCartSubtotalWithDiscountIncludingTax));
    this.discountTotals$ = this.store.pipe(select(selectCartDiscountTotals));
    this.totalTax$ = this.store.pipe(select(selectCartTotalTax));
    this.shippingTotal$ = this.store.pipe(select(selectCartShippingTotal));
    this.coupons$ = this.store.pipe(select(selectCartCoupons));
    this.items$ = this.store.pipe(select(selectCartItems));
    this.itemEntities$ = this.store.pipe(select(selectAllCartItems));
    this.totalItems$ = this.store.pipe(select(selectTotalNumberOfCartItems));
    this.hasOutOfStockItems$ = this.store.pipe(select(selectCartHasOutOfStockItems));
    this.outOfStockItems$ = this.store.pipe(select(selectOutOfStockCartItems));
    this.inStockItems$ = this.store.pipe(select(selectInStockCartItems));
    this.itemDictionary$ = this.store.pipe(select(selectCartItemEntities));
    this.billingAddress$ = this.store.pipe(select(selectCartBillingAddress));
    this.shippingAddress$ = this.store.pipe(select(selectCartShippingAddress));
    this.payment$ = this.store.pipe(select(selectCartPayment));
    this.totals$ = this.store.pipe(select(selectCartTotals));
    this.shippingInformation$ = this.store.pipe(select(selectCartShippingInformation));
    this.availableShippingMethods$ = this.store.pipe(select(selectCartAvailableShippingMethods));
    this.availablePaymentMethods$ = this.store.pipe(select(selectCartAvailablePaymentMethods));
    this.paymentId$ = this.payment$.pipe(
      map(payment =>
        payment && payment.method
          ? this.paymentMethodMap[payment.method]
          : null,
      ),
    );

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

  getConfiguredCartItemAttributes(itemId: U['id']): Observable<DaffConfigurableCartItemAttribute[]> {
    return this.store.pipe(select(this._selectCartItemConfiguredAttributes(itemId)));
  };

  getCompositeCartItemOptions(itemId: U['id']): Observable<DaffCompositeCartItemOption[]> {
    return this.store.pipe(select(this._selectCartItemCompositeOptions(itemId)));
  };

  isCartItemOutOfStock(itemId: U['id']): Observable<boolean> {
    return this.store.pipe(select(this._selectIsCartItemOutOfStock(itemId)));
  }

  getCartItemState(itemId: U['id']): Observable<DaffCartItemStateEnum> {
    return this.store.pipe(select(this._selectCartItemState(itemId)));
  }

  getCartItemPrice(itemId: U['id']): Observable<number> {
    return this.store.pipe(select(this._selectCartItemPrice(itemId)));
  }

  getCartItemQuantity(itemId: U['id']): Observable<number> {
    return this.store.pipe(select(this._selectCartItemQuantity(itemId)));
  }

  getCartItemRowTotal(itemId: U['id']): Observable<number> {
    return this.store.pipe(select(this._selectCartItemRowTotal(itemId)));
  }

  getCartItemDiscounts(itemId: U['id']): Observable<DaffCartItemDiscount[]> {
    return this.store.pipe(select(this._selectCartItemDiscounts(itemId)));
  }

  getCartItemTotalDiscount(itemId: U['id']): Observable<number> {
    return this.store.pipe(select(this._selectCartItemTotalDiscount(itemId)));
  }

  getCartItemErrors(itemId: U['id']): Observable<DaffStateError[]> {
    return this.store.pipe(select(this._selectCartItemErrors(itemId)));
  };

  dispatch(action: Action) {
    this.store.dispatch(action);
  }
}
