import { MemoizedSelector, MemoizedSelectorWithProps, DefaultProjectorFn } from '@ngrx/store';
import { DaffStateError } from '@daffodil/core/state';
import { DaffCart, DaffCartTotal, DaffCartOrderResult } from '@daffodil/cart';
import { DaffCartReducerState } from '../../reducers/public_api';
import { DaffStatefulCartItem } from '../../models/stateful-cart-item';
import { DaffCartResolveState } from '../../reducers/cart-resolve/cart-resolve-state.enum';
export interface DaffCartStateMemoizedSelectors<T extends DaffCart = DaffCart> {
    selectCartState: MemoizedSelector<object, DaffCartReducerState<T>>;
    selectCartValue: MemoizedSelector<object, T>;
    selectCartResolved: MemoizedSelector<object, DaffCartResolveState>;
    /**
     * The object that holds all the loading states for cart operations.
     */
    selectCartLoadingObject: MemoizedSelector<object, DaffCartReducerState<T>['loading']>;
    /**
     * Selects whether there is any cart operation in progress.
     * This includes operations specifically for cart subfields.
     */
    selectCartFeatureLoading: MemoizedSelector<object, boolean>;
    /**
     * Selects whether there is any cart resolve operation in progress.
     * This includes operations for cart subfields.
     * This pertains only to requests that do not mutate data such as "load" or "list".
     */
    selectCartFeatureResolving: MemoizedSelector<object, boolean>;
    /**
     * Selects whether there is any cart mutate operation in progress.
     * This includes operations for cart subfields.
     * This pertains only to requests that mutate data such as "update".
     */
    selectCartFeatureMutating: MemoizedSelector<object, boolean>;
    /**
     * Selects whether there is a cart operation in progress.
     * This does not include operations specifically for cart subfields.
     */
    selectCartLoading: MemoizedSelector<object, boolean>;
    /**
     * Selects whether there is a cart resolve operation in progress.
     * This does not include operations specifically for cart subfields.
     * This pertains only to requests that do not mutate data such as "load" or "list".
     */
    selectCartResolving: MemoizedSelector<object, boolean>;
    /**
     * Selects whether there is a cart mutate operation in progress.
     * This does not include operations specifically for cart subfields.
     * This pertains only to requests that mutate data such as "update".
     */
    selectCartMutating: MemoizedSelector<object, boolean>;
    /**
     * Selects whether there is a cart billing address operation in progress.
     */
    selectBillingAddressLoading: MemoizedSelector<object, boolean>;
    /**
     * Selects whether there is a cart billing address resolve operation in progress.
     * This pertains only to requests that do not mutate data such as "load" or "list".
     */
    selectBillingAddressResolving: MemoizedSelector<object, boolean>;
    /**
     * Selects whether there is a cart billing address mutate operation in progress.
     * This pertains only to requests that mutate data such as "update".
     */
    selectBillingAddressMutating: MemoizedSelector<object, boolean>;
    /**
     * Selects whether there is a cart shipping address operation in progress.
     */
    selectShippingAddressLoading: MemoizedSelector<object, boolean>;
    /**
     * Selects whether there is a cart shipping address resolve operation in progress.
     * This pertains only to requests that do not mutate data such as "load" or "list".
     */
    selectShippingAddressResolving: MemoizedSelector<object, boolean>;
    /**
     * Selects whether there is a cart shipping address mutate operation in progress.
     * This pertains only to requests that mutate data such as "update".
     */
    selectShippingAddressMutating: MemoizedSelector<object, boolean>;
    /**
     * Selects whether there is a cart shipping information operation in progress.
     */
    selectShippingInformationLoading: MemoizedSelector<object, boolean>;
    /**
     * Selects whether there is a cart shipping information resolve operation in progress.
     * This pertains only to requests that do not mutate data such as "load" or "list".
     */
    selectShippingInformationResolving: MemoizedSelector<object, boolean>;
    /**
     * Selects whether there is a cart shipping information mutate operation in progress.
     * This pertains only to requests that mutate data such as "update".
     */
    selectShippingInformationMutating: MemoizedSelector<object, boolean>;
    /**
     * Selects whether there is a cart shipping methods operation in progress.
     */
    selectShippingMethodsLoading: MemoizedSelector<object, boolean>;
    /**
     * Selects whether there is a cart shipping methods resolve operation in progress.
     * This pertains only to requests that do not mutate data such as "load" or "list".
     */
    selectShippingMethodsResolving: MemoizedSelector<object, boolean>;
    /**
     * Selects whether there is a cart payment operation in progress.
     */
    selectPaymentLoading: MemoizedSelector<object, boolean>;
    /**
     * Selects whether there is a cart payment resolve operation in progress.
     * This pertains only to requests that do not mutate data such as "load" or "list".
     */
    selectPaymentResolving: MemoizedSelector<object, boolean>;
    /**
     * Selects whether there is a cart payment mutate operation in progress.
     * This pertains only to requests that mutate data such as "update".
     */
    selectPaymentMutating: MemoizedSelector<object, boolean>;
    /**
     * Selects whether there is a cart payment methods operation in progress.
     */
    selectPaymentMethodsLoading: MemoizedSelector<object, boolean>;
    /**
     * Selects whether there is a cart payment methods resolve operation in progress.
     * This pertains only to requests that do not mutate data such as "load" or "list".
     */
    selectPaymentMethodsResolving: MemoizedSelector<object, boolean>;
    /**
     * Selects whether there is a cart coupon operation in progress.
     */
    selectCouponLoading: MemoizedSelector<object, boolean>;
    /**
     * Selects whether there is a cart coupon resolve operation in progress.
     * This pertains only to requests that do not mutate data such as "load" or "list".
     */
    selectCouponResolving: MemoizedSelector<object, boolean>;
    /**
     * Selects whether there is a cart coupon mutate operation in progress.
     * This pertains only to requests that mutate data such as "update".
     */
    selectCouponMutating: MemoizedSelector<object, boolean>;
    /**
     * Selects whether there is a cart item operation in progress.
     */
    selectItemLoading: MemoizedSelector<object, boolean>;
    /**
   * Selects whether there is a cart item add operation in progress.
   */
    selectItemAdding: MemoizedSelector<object, boolean>;
    /**
     * Selects whether there is a cart item resolve operation in progress.
     * This pertains only to requests that do not mutate data such as "load" or "list".
     */
    selectItemResolving: MemoizedSelector<object, boolean>;
    selectCartErrorsObject: MemoizedSelector<object, DaffCartReducerState<T>['errors']>;
    selectCartErrors: MemoizedSelector<object, DaffStateError[]>;
    selectBillingAddressErrors: MemoizedSelector<object, DaffStateError[]>;
    selectShippingAddressErrors: MemoizedSelector<object, DaffStateError[]>;
    selectShippingInformationErrors: MemoizedSelector<object, DaffStateError[]>;
    selectShippingMethodsErrors: MemoizedSelector<object, DaffStateError[]>;
    selectPaymentErrors: MemoizedSelector<object, DaffStateError[]>;
    selectPaymentMethodsErrors: MemoizedSelector<object, DaffStateError[]>;
    selectCouponErrors: MemoizedSelector<object, DaffStateError[]>;
    selectItemErrors: MemoizedSelector<object, DaffStateError[]>;
    selectCartId: MemoizedSelector<object, T['id']>;
    selectCartSubtotal: MemoizedSelector<object, DaffCartTotal['value']>;
    selectCartGrandTotal: MemoizedSelector<object, DaffCartTotal['value']>;
    selectCartSubtotalExcludingTax: MemoizedSelector<object, DaffCartTotal['value']>;
    selectCartSubtotalIncludingTax: MemoizedSelector<object, DaffCartTotal['value']>;
    selectCartSubtotalWithDiscountExcludingTax: MemoizedSelector<object, DaffCartTotal['value']>;
    selectCartSubtotalWithDiscountIncludingTax: MemoizedSelector<object, DaffCartTotal['value']>;
    selectCartTotalTax: MemoizedSelector<object, DaffCartTotal['value']>;
    /**
     * Selects the DaffCartTotals for cart discounts. These are discounts associated with coupon codes.
     */
    selectCartDiscountTotals: MemoizedSelector<object, DaffCartTotal[]>;
    selectCartShippingTotal: MemoizedSelector<object, DaffCartTotal['value']>;
    selectCartCoupons: MemoizedSelector<object, T['coupons']>;
    /**
     * @deprecated use getDaffCartItemEntitiesSelectors().selectAllCartItems instead.
     */
    selectCartItems: MemoizedSelector<object, T['items']>;
    selectCartHasOutOfStockItems: MemoizedSelector<object, boolean>;
    selectCartBillingAddress: MemoizedSelector<object, T['billing_address']>;
    selectCartShippingAddress: MemoizedSelector<object, T['shipping_address']>;
    selectCartPayment: MemoizedSelector<object, T['payment']>;
    selectCartTotals: MemoizedSelector<object, T['totals']>;
    selectCartShippingInformation: MemoizedSelector<object, T['shipping_information']>;
    selectCartAvailableShippingMethods: MemoizedSelector<object, T['available_shipping_methods']>;
    selectCartAvailablePaymentMethods: MemoizedSelector<object, T['available_payment_methods']>;
    selectIsCartEmpty: MemoizedSelector<object, boolean>;
    selectCartItemDiscountedRowTotal: MemoizedSelectorWithProps<object, object, number>;
    /**
     * Selects whether the cart's shipping address equals the billing address.
     * Returns false if either address is null or undefined.
     */
    selectIsBillingSameAsShipping: MemoizedSelector<object, boolean>;
    selectHasBillingAddress: MemoizedSelector<object, boolean>;
    selectHasShippingAddress: MemoizedSelector<object, boolean>;
    selectHasShippingMethod: MemoizedSelector<object, boolean>;
    selectHasPaymentMethod: MemoizedSelector<object, boolean>;
    selectCanPlaceOrder: MemoizedSelector<object, boolean, DefaultProjectorFn<boolean>>;
}
export declare const getCartSelectors: <T extends DaffCart = DaffCart, V extends DaffCartOrderResult = DaffCartOrderResult, U extends DaffStatefulCartItem = DaffStatefulCartItem>() => DaffCartStateMemoizedSelectors<T>;
