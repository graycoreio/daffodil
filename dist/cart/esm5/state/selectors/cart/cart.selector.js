/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { createSelector } from '@ngrx/store';
import { daffSubtract } from '@daffodil/core';
import { DaffLoadingState } from '@daffodil/core/state';
import { daffComparePersonalAddresses } from '@daffodil/geography';
import { DaffCartTotalTypeEnum } from '@daffodil/cart';
import { getDaffCartFeatureSelector } from '../cart-feature.selector';
import { DaffCartOperationType } from '../../reducers/public_api';
import { DaffCartItemLoadingState } from '../../reducers/loading/cart-loading.type';
import { getDaffCartItemEntitiesSelectors } from '../cart-item-entities/cart-item-entities.selectors';
/**
 * @record
 * @template T
 */
export function DaffCartStateMemoizedSelectors() { }
if (false) {
    /** @type {?} */
    DaffCartStateMemoizedSelectors.prototype.selectCartState;
    /** @type {?} */
    DaffCartStateMemoizedSelectors.prototype.selectCartValue;
    /** @type {?} */
    DaffCartStateMemoizedSelectors.prototype.selectCartResolved;
    /**
     * The object that holds all the loading states for cart operations.
     * @type {?}
     */
    DaffCartStateMemoizedSelectors.prototype.selectCartLoadingObject;
    /**
     * Selects whether there is any cart operation in progress.
     * This includes operations specifically for cart subfields.
     * @type {?}
     */
    DaffCartStateMemoizedSelectors.prototype.selectCartFeatureLoading;
    /**
     * Selects whether there is any cart resolve operation in progress.
     * This includes operations for cart subfields.
     * This pertains only to requests that do not mutate data such as "load" or "list".
     * @type {?}
     */
    DaffCartStateMemoizedSelectors.prototype.selectCartFeatureResolving;
    /**
     * Selects whether there is any cart mutate operation in progress.
     * This includes operations for cart subfields.
     * This pertains only to requests that mutate data such as "update".
     * @type {?}
     */
    DaffCartStateMemoizedSelectors.prototype.selectCartFeatureMutating;
    /**
     * Selects whether there is a cart operation in progress.
     * This does not include operations specifically for cart subfields.
     * @type {?}
     */
    DaffCartStateMemoizedSelectors.prototype.selectCartLoading;
    /**
     * Selects whether there is a cart resolve operation in progress.
     * This does not include operations specifically for cart subfields.
     * This pertains only to requests that do not mutate data such as "load" or "list".
     * @type {?}
     */
    DaffCartStateMemoizedSelectors.prototype.selectCartResolving;
    /**
     * Selects whether there is a cart mutate operation in progress.
     * This does not include operations specifically for cart subfields.
     * This pertains only to requests that mutate data such as "update".
     * @type {?}
     */
    DaffCartStateMemoizedSelectors.prototype.selectCartMutating;
    /**
     * Selects whether there is a cart billing address operation in progress.
     * @type {?}
     */
    DaffCartStateMemoizedSelectors.prototype.selectBillingAddressLoading;
    /**
     * Selects whether there is a cart billing address resolve operation in progress.
     * This pertains only to requests that do not mutate data such as "load" or "list".
     * @type {?}
     */
    DaffCartStateMemoizedSelectors.prototype.selectBillingAddressResolving;
    /**
     * Selects whether there is a cart billing address mutate operation in progress.
     * This pertains only to requests that mutate data such as "update".
     * @type {?}
     */
    DaffCartStateMemoizedSelectors.prototype.selectBillingAddressMutating;
    /**
     * Selects whether there is a cart shipping address operation in progress.
     * @type {?}
     */
    DaffCartStateMemoizedSelectors.prototype.selectShippingAddressLoading;
    /**
     * Selects whether there is a cart shipping address resolve operation in progress.
     * This pertains only to requests that do not mutate data such as "load" or "list".
     * @type {?}
     */
    DaffCartStateMemoizedSelectors.prototype.selectShippingAddressResolving;
    /**
     * Selects whether there is a cart shipping address mutate operation in progress.
     * This pertains only to requests that mutate data such as "update".
     * @type {?}
     */
    DaffCartStateMemoizedSelectors.prototype.selectShippingAddressMutating;
    /**
     * Selects whether there is a cart shipping information operation in progress.
     * @type {?}
     */
    DaffCartStateMemoizedSelectors.prototype.selectShippingInformationLoading;
    /**
     * Selects whether there is a cart shipping information resolve operation in progress.
     * This pertains only to requests that do not mutate data such as "load" or "list".
     * @type {?}
     */
    DaffCartStateMemoizedSelectors.prototype.selectShippingInformationResolving;
    /**
     * Selects whether there is a cart shipping information mutate operation in progress.
     * This pertains only to requests that mutate data such as "update".
     * @type {?}
     */
    DaffCartStateMemoizedSelectors.prototype.selectShippingInformationMutating;
    /**
     * Selects whether there is a cart shipping methods operation in progress.
     * @type {?}
     */
    DaffCartStateMemoizedSelectors.prototype.selectShippingMethodsLoading;
    /**
     * Selects whether there is a cart shipping methods resolve operation in progress.
     * This pertains only to requests that do not mutate data such as "load" or "list".
     * @type {?}
     */
    DaffCartStateMemoizedSelectors.prototype.selectShippingMethodsResolving;
    /**
     * Selects whether there is a cart payment operation in progress.
     * @type {?}
     */
    DaffCartStateMemoizedSelectors.prototype.selectPaymentLoading;
    /**
     * Selects whether there is a cart payment resolve operation in progress.
     * This pertains only to requests that do not mutate data such as "load" or "list".
     * @type {?}
     */
    DaffCartStateMemoizedSelectors.prototype.selectPaymentResolving;
    /**
     * Selects whether there is a cart payment mutate operation in progress.
     * This pertains only to requests that mutate data such as "update".
     * @type {?}
     */
    DaffCartStateMemoizedSelectors.prototype.selectPaymentMutating;
    /**
     * Selects whether there is a cart payment methods operation in progress.
     * @type {?}
     */
    DaffCartStateMemoizedSelectors.prototype.selectPaymentMethodsLoading;
    /**
     * Selects whether there is a cart payment methods resolve operation in progress.
     * This pertains only to requests that do not mutate data such as "load" or "list".
     * @type {?}
     */
    DaffCartStateMemoizedSelectors.prototype.selectPaymentMethodsResolving;
    /**
     * Selects whether there is a cart coupon operation in progress.
     * @type {?}
     */
    DaffCartStateMemoizedSelectors.prototype.selectCouponLoading;
    /**
     * Selects whether there is a cart coupon resolve operation in progress.
     * This pertains only to requests that do not mutate data such as "load" or "list".
     * @type {?}
     */
    DaffCartStateMemoizedSelectors.prototype.selectCouponResolving;
    /**
     * Selects whether there is a cart coupon mutate operation in progress.
     * This pertains only to requests that mutate data such as "update".
     * @type {?}
     */
    DaffCartStateMemoizedSelectors.prototype.selectCouponMutating;
    /**
     * Selects whether there is a cart item operation in progress.
     * @type {?}
     */
    DaffCartStateMemoizedSelectors.prototype.selectItemLoading;
    /**
     * Selects whether there is a cart item add operation in progress.
     * @type {?}
     */
    DaffCartStateMemoizedSelectors.prototype.selectItemAdding;
    /**
     * Selects whether there is a cart item resolve operation in progress.
     * This pertains only to requests that do not mutate data such as "load" or "list".
     * @type {?}
     */
    DaffCartStateMemoizedSelectors.prototype.selectItemResolving;
    /** @type {?} */
    DaffCartStateMemoizedSelectors.prototype.selectCartErrorsObject;
    /** @type {?} */
    DaffCartStateMemoizedSelectors.prototype.selectCartErrors;
    /** @type {?} */
    DaffCartStateMemoizedSelectors.prototype.selectBillingAddressErrors;
    /** @type {?} */
    DaffCartStateMemoizedSelectors.prototype.selectShippingAddressErrors;
    /** @type {?} */
    DaffCartStateMemoizedSelectors.prototype.selectShippingInformationErrors;
    /** @type {?} */
    DaffCartStateMemoizedSelectors.prototype.selectShippingMethodsErrors;
    /** @type {?} */
    DaffCartStateMemoizedSelectors.prototype.selectPaymentErrors;
    /** @type {?} */
    DaffCartStateMemoizedSelectors.prototype.selectPaymentMethodsErrors;
    /** @type {?} */
    DaffCartStateMemoizedSelectors.prototype.selectCouponErrors;
    /** @type {?} */
    DaffCartStateMemoizedSelectors.prototype.selectItemErrors;
    /** @type {?} */
    DaffCartStateMemoizedSelectors.prototype.selectCartId;
    /** @type {?} */
    DaffCartStateMemoizedSelectors.prototype.selectCartSubtotal;
    /** @type {?} */
    DaffCartStateMemoizedSelectors.prototype.selectCartGrandTotal;
    /** @type {?} */
    DaffCartStateMemoizedSelectors.prototype.selectCartSubtotalExcludingTax;
    /** @type {?} */
    DaffCartStateMemoizedSelectors.prototype.selectCartSubtotalIncludingTax;
    /** @type {?} */
    DaffCartStateMemoizedSelectors.prototype.selectCartSubtotalWithDiscountExcludingTax;
    /** @type {?} */
    DaffCartStateMemoizedSelectors.prototype.selectCartSubtotalWithDiscountIncludingTax;
    /** @type {?} */
    DaffCartStateMemoizedSelectors.prototype.selectCartTotalTax;
    /**
     * Selects the DaffCartTotals for cart discounts. These are discounts associated with coupon codes.
     * @type {?}
     */
    DaffCartStateMemoizedSelectors.prototype.selectCartDiscountTotals;
    /** @type {?} */
    DaffCartStateMemoizedSelectors.prototype.selectCartShippingTotal;
    /** @type {?} */
    DaffCartStateMemoizedSelectors.prototype.selectCartCoupons;
    /**
     * @deprecated use getDaffCartItemEntitiesSelectors().selectAllCartItems instead.
     * @type {?}
     */
    DaffCartStateMemoizedSelectors.prototype.selectCartItems;
    /** @type {?} */
    DaffCartStateMemoizedSelectors.prototype.selectCartHasOutOfStockItems;
    /** @type {?} */
    DaffCartStateMemoizedSelectors.prototype.selectCartBillingAddress;
    /** @type {?} */
    DaffCartStateMemoizedSelectors.prototype.selectCartShippingAddress;
    /** @type {?} */
    DaffCartStateMemoizedSelectors.prototype.selectCartPayment;
    /** @type {?} */
    DaffCartStateMemoizedSelectors.prototype.selectCartTotals;
    /** @type {?} */
    DaffCartStateMemoizedSelectors.prototype.selectCartShippingInformation;
    /** @type {?} */
    DaffCartStateMemoizedSelectors.prototype.selectCartAvailableShippingMethods;
    /** @type {?} */
    DaffCartStateMemoizedSelectors.prototype.selectCartAvailablePaymentMethods;
    /** @type {?} */
    DaffCartStateMemoizedSelectors.prototype.selectIsCartEmpty;
    /** @type {?} */
    DaffCartStateMemoizedSelectors.prototype.selectCartItemDiscountedRowTotal;
    /**
     * Selects whether the cart's shipping address equals the billing address.
     * Returns false if either address is null or undefined.
     * @type {?}
     */
    DaffCartStateMemoizedSelectors.prototype.selectIsBillingSameAsShipping;
    /** @type {?} */
    DaffCartStateMemoizedSelectors.prototype.selectHasBillingAddress;
    /** @type {?} */
    DaffCartStateMemoizedSelectors.prototype.selectHasShippingAddress;
    /** @type {?} */
    DaffCartStateMemoizedSelectors.prototype.selectHasShippingMethod;
    /** @type {?} */
    DaffCartStateMemoizedSelectors.prototype.selectHasPaymentMethod;
    /** @type {?} */
    DaffCartStateMemoizedSelectors.prototype.selectCanPlaceOrder;
}
/** @type {?} */
var createCartSelectors = (/**
 * @template T, V, U
 * @return {?}
 */
function () {
    /** @type {?} */
    var selectCartFeatureState = getDaffCartFeatureSelector().selectCartFeatureState;
    var selectCartItemMutating = getDaffCartItemEntitiesSelectors().selectCartItemMutating;
    /** @type {?} */
    var selectCartState = createSelector(selectCartFeatureState, (/**
     * @param {?} state
     * @return {?}
     */
    function (state) { return state.cart; }));
    /** @type {?} */
    var selectCartValue = createSelector(selectCartState, (/**
     * @param {?} state
     * @return {?}
     */
    function (state) { return state.cart; }));
    /** @type {?} */
    var selectCartResolved = createSelector(selectCartState, (/**
     * @param {?} state
     * @return {?}
     */
    function (state) { return state.resolved; }));
    /** @type {?} */
    var selectCartLoadingObject = createSelector(selectCartState, (/**
     * @param {?} state
     * @return {?}
     */
    function (state) { return state.loading; }));
    /** @type {?} */
    var selectCartLoading = createSelector(selectCartLoadingObject, (/**
     * @param {?} loadingObject
     * @return {?}
     */
    function (loadingObject) { return loadingObject[DaffCartOperationType.Cart] !== DaffLoadingState.Complete; }));
    /** @type {?} */
    var selectCartResolving = createSelector(selectCartLoadingObject, (/**
     * @param {?} loadingObject
     * @return {?}
     */
    function (loadingObject) { return loadingObject[DaffCartOperationType.Cart] === DaffLoadingState.Resolving; }));
    /** @type {?} */
    var selectCartMutating = createSelector(selectCartLoadingObject, (/**
     * @param {?} loadingObject
     * @return {?}
     */
    function (loadingObject) { return loadingObject[DaffCartOperationType.Cart] === DaffLoadingState.Mutating; }));
    /** @type {?} */
    var selectBillingAddressLoading = createSelector(selectCartLoadingObject, (/**
     * @param {?} loadingObject
     * @return {?}
     */
    function (loadingObject) { return loadingObject[DaffCartOperationType.BillingAddress] !== DaffLoadingState.Complete; }));
    /** @type {?} */
    var selectBillingAddressResolving = createSelector(selectCartLoadingObject, (/**
     * @param {?} loadingObject
     * @return {?}
     */
    function (loadingObject) { return loadingObject[DaffCartOperationType.BillingAddress] === DaffLoadingState.Resolving; }));
    /** @type {?} */
    var selectBillingAddressMutating = createSelector(selectCartLoadingObject, (/**
     * @param {?} loadingObject
     * @return {?}
     */
    function (loadingObject) { return loadingObject[DaffCartOperationType.BillingAddress] === DaffLoadingState.Mutating; }));
    /** @type {?} */
    var selectShippingAddressLoading = createSelector(selectCartLoadingObject, (/**
     * @param {?} loadingObject
     * @return {?}
     */
    function (loadingObject) { return loadingObject[DaffCartOperationType.ShippingAddress] !== DaffLoadingState.Complete; }));
    /** @type {?} */
    var selectShippingAddressResolving = createSelector(selectCartLoadingObject, (/**
     * @param {?} loadingObject
     * @return {?}
     */
    function (loadingObject) { return loadingObject[DaffCartOperationType.ShippingAddress] === DaffLoadingState.Resolving; }));
    /** @type {?} */
    var selectShippingAddressMutating = createSelector(selectCartLoadingObject, (/**
     * @param {?} loadingObject
     * @return {?}
     */
    function (loadingObject) { return loadingObject[DaffCartOperationType.ShippingAddress] === DaffLoadingState.Mutating; }));
    /** @type {?} */
    var selectShippingInformationLoading = createSelector(selectCartLoadingObject, (/**
     * @param {?} loadingObject
     * @return {?}
     */
    function (loadingObject) { return loadingObject[DaffCartOperationType.ShippingInformation] !== DaffLoadingState.Complete; }));
    /** @type {?} */
    var selectShippingInformationResolving = createSelector(selectCartLoadingObject, (/**
     * @param {?} loadingObject
     * @return {?}
     */
    function (loadingObject) { return loadingObject[DaffCartOperationType.ShippingInformation] === DaffLoadingState.Resolving; }));
    /** @type {?} */
    var selectShippingInformationMutating = createSelector(selectCartLoadingObject, (/**
     * @param {?} loadingObject
     * @return {?}
     */
    function (loadingObject) { return loadingObject[DaffCartOperationType.ShippingInformation] === DaffLoadingState.Mutating; }));
    /** @type {?} */
    var selectShippingMethodsLoading = createSelector(selectCartLoadingObject, (/**
     * @param {?} loadingObject
     * @return {?}
     */
    function (loadingObject) { return loadingObject[DaffCartOperationType.ShippingMethods] !== DaffLoadingState.Complete; }));
    /** @type {?} */
    var selectShippingMethodsResolving = createSelector(selectCartLoadingObject, (/**
     * @param {?} loadingObject
     * @return {?}
     */
    function (loadingObject) { return loadingObject[DaffCartOperationType.ShippingMethods] === DaffLoadingState.Resolving; }));
    /** @type {?} */
    var selectPaymentLoading = createSelector(selectCartLoadingObject, (/**
     * @param {?} loadingObject
     * @return {?}
     */
    function (loadingObject) { return loadingObject[DaffCartOperationType.Payment] !== DaffLoadingState.Complete; }));
    /** @type {?} */
    var selectPaymentResolving = createSelector(selectCartLoadingObject, (/**
     * @param {?} loadingObject
     * @return {?}
     */
    function (loadingObject) { return loadingObject[DaffCartOperationType.Payment] === DaffLoadingState.Resolving; }));
    /** @type {?} */
    var selectPaymentMutating = createSelector(selectCartLoadingObject, (/**
     * @param {?} loadingObject
     * @return {?}
     */
    function (loadingObject) { return loadingObject[DaffCartOperationType.Payment] === DaffLoadingState.Mutating; }));
    /** @type {?} */
    var selectPaymentMethodsLoading = createSelector(selectCartLoadingObject, (/**
     * @param {?} loadingObject
     * @return {?}
     */
    function (loadingObject) { return loadingObject[DaffCartOperationType.PaymentMethods] !== DaffLoadingState.Complete; }));
    /** @type {?} */
    var selectPaymentMethodsResolving = createSelector(selectCartLoadingObject, (/**
     * @param {?} loadingObject
     * @return {?}
     */
    function (loadingObject) { return loadingObject[DaffCartOperationType.PaymentMethods] === DaffLoadingState.Resolving; }));
    /** @type {?} */
    var selectItemLoading = createSelector(selectCartLoadingObject, (/**
     * @param {?} loadingObject
     * @return {?}
     */
    function (loadingObject) { return loadingObject[DaffCartOperationType.Item] !== DaffCartItemLoadingState.Complete; }));
    /** @type {?} */
    var selectItemAdding = createSelector(selectCartLoadingObject, (/**
     * @param {?} loadingObject
     * @return {?}
     */
    function (loadingObject) { return loadingObject[DaffCartOperationType.Item] === DaffCartItemLoadingState.Adding; }));
    /** @type {?} */
    var selectItemResolving = createSelector(selectCartLoadingObject, (/**
     * @param {?} loadingObject
     * @return {?}
     */
    function (loadingObject) { return loadingObject[DaffCartOperationType.Item] === DaffCartItemLoadingState.Resolving; }));
    /** @type {?} */
    var selectCouponLoading = createSelector(selectCartLoadingObject, (/**
     * @param {?} loadingObject
     * @return {?}
     */
    function (loadingObject) { return loadingObject[DaffCartOperationType.Coupon] !== DaffLoadingState.Complete; }));
    /** @type {?} */
    var selectCouponResolving = createSelector(selectCartLoadingObject, (/**
     * @param {?} loadingObject
     * @return {?}
     */
    function (loadingObject) { return loadingObject[DaffCartOperationType.Coupon] === DaffLoadingState.Resolving; }));
    /** @type {?} */
    var selectCouponMutating = createSelector(selectCartLoadingObject, (/**
     * @param {?} loadingObject
     * @return {?}
     */
    function (loadingObject) { return loadingObject[DaffCartOperationType.Coupon] === DaffLoadingState.Mutating; }));
    /** @type {?} */
    var selectCartFeatureLoading = createSelector(selectCartLoadingObject, (/**
     * @param {?} loadingObject
     * @return {?}
     */
    function (loadingObject) { return [
        selectCartLoading,
        selectBillingAddressLoading,
        selectShippingAddressLoading,
        selectShippingInformationLoading,
        selectShippingMethodsLoading,
        selectPaymentLoading,
        selectPaymentMethodsLoading,
        selectCouponLoading,
        selectItemLoading,
    ].map((/**
     * @param {?} selector
     * @return {?}
     */
    function (selector) {
        return selector.projector(loadingObject);
    })).reduce((/**
     * @param {?} acc
     * @param {?} loading
     * @return {?}
     */
    function (acc, loading) { return acc || loading; }), false); }));
    /** @type {?} */
    var selectCartFeatureResolving = createSelector(selectCartLoadingObject, (/**
     * @param {?} loadingObject
     * @return {?}
     */
    function (loadingObject) { return [
        selectCartResolving,
        selectBillingAddressResolving,
        selectShippingAddressResolving,
        selectShippingInformationResolving,
        selectShippingMethodsResolving,
        selectPaymentResolving,
        selectPaymentMethodsResolving,
        selectCouponResolving,
        selectItemResolving,
    ].map((/**
     * @param {?} selector
     * @return {?}
     */
    function (selector) {
        return selector.projector(loadingObject);
    })).reduce((/**
     * @param {?} acc
     * @param {?} resolving
     * @return {?}
     */
    function (acc, resolving) { return acc || resolving; }), false); }));
    /** @type {?} */
    var selectCartFeatureMutating = createSelector(selectCartLoadingObject, selectCartItemMutating, (/**
     * @param {?} loadingObject
     * @param {?} cartItemMutating
     * @return {?}
     */
    function (loadingObject, cartItemMutating) { return [
        selectCartMutating,
        selectBillingAddressMutating,
        selectShippingAddressMutating,
        selectShippingInformationMutating,
        selectPaymentMutating,
        selectCouponMutating,
        selectItemAdding
    ].map((/**
     * @param {?} selector
     * @return {?}
     */
    function (selector) {
        return selector.projector(loadingObject);
    })).reduce((/**
     * @param {?} acc
     * @param {?} mutating
     * @return {?}
     */
    function (acc, mutating) { return acc || mutating; }), false) || cartItemMutating; }));
    /** @type {?} */
    var selectCartErrorsObject = createSelector(selectCartState, (/**
     * @param {?} state
     * @return {?}
     */
    function (state) { return state.errors; }));
    /** @type {?} */
    var selectCartErrors = createSelector(selectCartErrorsObject, (/**
     * @param {?} state
     * @return {?}
     */
    function (state) { return state[DaffCartOperationType.Cart]; }));
    /** @type {?} */
    var selectBillingAddressErrors = createSelector(selectCartErrorsObject, (/**
     * @param {?} state
     * @return {?}
     */
    function (state) { return state[DaffCartOperationType.BillingAddress]; }));
    /** @type {?} */
    var selectShippingAddressErrors = createSelector(selectCartErrorsObject, (/**
     * @param {?} state
     * @return {?}
     */
    function (state) { return state[DaffCartOperationType.ShippingAddress]; }));
    /** @type {?} */
    var selectShippingInformationErrors = createSelector(selectCartErrorsObject, (/**
     * @param {?} state
     * @return {?}
     */
    function (state) { return state[DaffCartOperationType.ShippingInformation]; }));
    /** @type {?} */
    var selectShippingMethodsErrors = createSelector(selectCartErrorsObject, (/**
     * @param {?} state
     * @return {?}
     */
    function (state) { return state[DaffCartOperationType.ShippingMethods]; }));
    /** @type {?} */
    var selectPaymentErrors = createSelector(selectCartErrorsObject, (/**
     * @param {?} state
     * @return {?}
     */
    function (state) { return state[DaffCartOperationType.Payment]; }));
    /** @type {?} */
    var selectPaymentMethodsErrors = createSelector(selectCartErrorsObject, (/**
     * @param {?} state
     * @return {?}
     */
    function (state) { return state[DaffCartOperationType.PaymentMethods]; }));
    /** @type {?} */
    var selectItemErrors = createSelector(selectCartErrorsObject, (/**
     * @param {?} state
     * @return {?}
     */
    function (state) { return state[DaffCartOperationType.Item]; }));
    /** @type {?} */
    var selectCouponErrors = createSelector(selectCartErrorsObject, (/**
     * @param {?} state
     * @return {?}
     */
    function (state) { return state[DaffCartOperationType.Coupon]; }));
    /** @type {?} */
    var selectCartId = createSelector(selectCartValue, (/**
     * @param {?} state
     * @return {?}
     */
    function (state) { return state.id; }));
    /**
     * @deprecated use selectCartSubtotalExcludingTax selector instead.
     * @type {?}
     */
    var selectCartSubtotal = createSelector(selectCartValue, (/**
     * @param {?} state
     * @return {?}
     */
    function (state) {
        /** @type {?} */
        var subtotalObject = state.totals.find((/**
         * @param {?} total
         * @return {?}
         */
        function (total) { return total.name === DaffCartTotalTypeEnum.subtotalExcludingTax; }));
        return subtotalObject ? subtotalObject.value : null;
    }));
    /** @type {?} */
    var selectCartGrandTotal = createSelector(selectCartValue, (/**
     * @param {?} state
     * @return {?}
     */
    function (state) {
        /** @type {?} */
        var grandTotalObject = state.totals.find((/**
         * @param {?} total
         * @return {?}
         */
        function (total) { return total.name === DaffCartTotalTypeEnum.grandTotal; }));
        return grandTotalObject ? grandTotalObject.value : null;
    }));
    /** @type {?} */
    var selectCartSubtotalExcludingTax = createSelector(selectCartValue, (/**
     * @param {?} state
     * @return {?}
     */
    function (state) {
        /** @type {?} */
        var subtotalExcludingTaxObject = state.totals.find((/**
         * @param {?} total
         * @return {?}
         */
        function (total) { return total.name === DaffCartTotalTypeEnum.subtotalExcludingTax; }));
        return subtotalExcludingTaxObject ? subtotalExcludingTaxObject.value : null;
    }));
    /** @type {?} */
    var selectCartSubtotalIncludingTax = createSelector(selectCartValue, (/**
     * @param {?} state
     * @return {?}
     */
    function (state) {
        /** @type {?} */
        var subtotalIncludingTaxObject = state.totals.find((/**
         * @param {?} total
         * @return {?}
         */
        function (total) { return total.name === DaffCartTotalTypeEnum.subtotalIncludingTax; }));
        return subtotalIncludingTaxObject ? subtotalIncludingTaxObject.value : null;
    }));
    /** @type {?} */
    var selectCartSubtotalWithDiscountExcludingTax = createSelector(selectCartValue, (/**
     * @param {?} state
     * @return {?}
     */
    function (state) {
        /** @type {?} */
        var subtotalWithDiscountExcludingTaxObject = state.totals.find((/**
         * @param {?} total
         * @return {?}
         */
        function (total) { return total.name === DaffCartTotalTypeEnum.subtotalWithDiscountExcludingTax; }));
        return subtotalWithDiscountExcludingTaxObject ? subtotalWithDiscountExcludingTaxObject.value : null;
    }));
    /** @type {?} */
    var selectCartSubtotalWithDiscountIncludingTax = createSelector(selectCartValue, (/**
     * @param {?} state
     * @return {?}
     */
    function (state) {
        /** @type {?} */
        var subtotalWithDiscountIncludingTaxObject = state.totals.find((/**
         * @param {?} total
         * @return {?}
         */
        function (total) { return total.name === DaffCartTotalTypeEnum.subtotalWithDiscountIncludingTax; }));
        return subtotalWithDiscountIncludingTaxObject ? subtotalWithDiscountIncludingTaxObject.value : null;
    }));
    /** @type {?} */
    var selectCartTotalTax = createSelector(selectCartValue, (/**
     * @param {?} state
     * @return {?}
     */
    function (state) {
        /** @type {?} */
        var taxObject = state.totals.find((/**
         * @param {?} total
         * @return {?}
         */
        function (total) { return total.name === DaffCartTotalTypeEnum.tax; }));
        return taxObject ? taxObject.value : null;
    }));
    /** @type {?} */
    var selectCartDiscountTotals = createSelector(selectCartValue, (/**
     * @param {?} state
     * @return {?}
     */
    function (state) {
        /** @type {?} */
        var discounts = state.totals.filter((/**
         * @param {?} total
         * @return {?}
         */
        function (total) { return total.name === DaffCartTotalTypeEnum.discount; }));
        return discounts ? discounts : [];
    }));
    /** @type {?} */
    var selectCartShippingTotal = createSelector(selectCartValue, (/**
     * @param {?} state
     * @return {?}
     */
    function (state) {
        /** @type {?} */
        var shippingTotalObject = state.totals.find((/**
         * @param {?} total
         * @return {?}
         */
        function (total) { return total.name === DaffCartTotalTypeEnum.shipping; }));
        return shippingTotalObject ? shippingTotalObject.value : null;
    }));
    /** @type {?} */
    var selectCartCoupons = createSelector(selectCartValue, (/**
     * @param {?} state
     * @return {?}
     */
    function (state) { return state.coupons; }));
    /** @type {?} */
    var selectCartItems = createSelector(selectCartValue, (/**
     * @param {?} state
     * @return {?}
     */
    function (state) { return state.items; }));
    /** @type {?} */
    var selectCartHasOutOfStockItems = createSelector(selectCartValue, (/**
     * @param {?} state
     * @return {?}
     */
    function (state) { return state.items.reduce((/**
     * @param {?} acc
     * @param {?} item
     * @return {?}
     */
    function (acc, item) { return (acc || !item.in_stock); }), false); }));
    /** @type {?} */
    var selectCartBillingAddress = createSelector(selectCartValue, (/**
     * @param {?} state
     * @return {?}
     */
    function (state) { return state.billing_address; }));
    /** @type {?} */
    var selectCartShippingAddress = createSelector(selectCartValue, (/**
     * @param {?} state
     * @return {?}
     */
    function (state) { return state.shipping_address; }));
    /** @type {?} */
    var selectCartPayment = createSelector(selectCartValue, (/**
     * @param {?} state
     * @return {?}
     */
    function (state) { return state.payment; }));
    /** @type {?} */
    var selectCartTotals = createSelector(selectCartValue, (/**
     * @param {?} state
     * @return {?}
     */
    function (state) { return state.totals; }));
    /** @type {?} */
    var selectCartShippingInformation = createSelector(selectCartValue, (/**
     * @param {?} state
     * @return {?}
     */
    function (state) { return state.shipping_information; }));
    /** @type {?} */
    var selectCartAvailableShippingMethods = createSelector(selectCartValue, (/**
     * @param {?} state
     * @return {?}
     */
    function (state) { return state.available_shipping_methods; }));
    /** @type {?} */
    var selectCartAvailablePaymentMethods = createSelector(selectCartValue, (/**
     * @param {?} state
     * @return {?}
     */
    function (state) { return state.available_payment_methods; }));
    /** @type {?} */
    var selectIsCartEmpty = createSelector(selectCartValue, (/**
     * @param {?} cart
     * @return {?}
     */
    function (cart) { return !cart || !cart.items || cart.items.length === 0; }));
    /** @type {?} */
    var selectCartItemDiscountedRowTotal = createSelector(selectCartItems, (/**
     * @param {?} cartItems
     * @param {?} props
     * @return {?}
     */
    function (cartItems, props) {
        /** @type {?} */
        var cartItem = cartItems.find((/**
         * @param {?} item
         * @return {?}
         */
        function (item) { return item.item_id === props.id; }));
        return daffSubtract(cartItem.row_total, cartItem.total_discount);
    }));
    /** @type {?} */
    var selectIsBillingSameAsShipping = createSelector(selectCartShippingAddress, selectCartBillingAddress, (/**
     * @param {?} shippingAddress
     * @param {?} billingAddress
     * @return {?}
     */
    function (shippingAddress, billingAddress) { return daffComparePersonalAddresses(shippingAddress, billingAddress); }));
    /** @type {?} */
    var selectHasBillingAddress = createSelector(selectCartBillingAddress, (/**
     * @param {?} billingAddress
     * @return {?}
     */
    function (billingAddress) { return !!billingAddress; }));
    /** @type {?} */
    var selectHasShippingAddress = createSelector(selectCartShippingAddress, (/**
     * @param {?} shippingAddress
     * @return {?}
     */
    function (shippingAddress) { return !!shippingAddress; }));
    /** @type {?} */
    var selectHasShippingMethod = createSelector(selectCartShippingInformation, (/**
     * @param {?} shippingMethod
     * @return {?}
     */
    function (shippingMethod) { return !!shippingMethod; }));
    /** @type {?} */
    var selectHasPaymentMethod = createSelector(selectCartPayment, (/**
     * @param {?} paymentMethod
     * @return {?}
     */
    function (paymentMethod) { return !!paymentMethod && paymentMethod.method !== ''; }));
    /** @type {?} */
    var selectCanPlaceOrder = createSelector(selectIsCartEmpty, selectHasBillingAddress, selectHasShippingAddress, selectHasShippingMethod, selectHasPaymentMethod, (/**
     * @param {?} isCartEmpty
     * @param {?} hasBillingAddress
     * @param {?} hasShippingAddress
     * @param {?} hasShippingMethod
     * @param {?} hasPaymentMethod
     * @return {?}
     */
    function (isCartEmpty, hasBillingAddress, hasShippingAddress, hasShippingMethod, hasPaymentMethod) { return !isCartEmpty
        && hasBillingAddress
        && hasShippingAddress
        && hasShippingMethod
        && hasPaymentMethod; }));
    return {
        selectCartState: selectCartState,
        selectCartValue: selectCartValue,
        selectCartResolved: selectCartResolved,
        selectCartLoadingObject: selectCartLoadingObject,
        selectCartFeatureLoading: selectCartFeatureLoading,
        selectCartFeatureResolving: selectCartFeatureResolving,
        selectCartFeatureMutating: selectCartFeatureMutating,
        selectCartLoading: selectCartLoading,
        selectCartResolving: selectCartResolving,
        selectCartMutating: selectCartMutating,
        selectBillingAddressLoading: selectBillingAddressLoading,
        selectBillingAddressResolving: selectBillingAddressResolving,
        selectBillingAddressMutating: selectBillingAddressMutating,
        selectShippingAddressLoading: selectShippingAddressLoading,
        selectShippingAddressResolving: selectShippingAddressResolving,
        selectShippingAddressMutating: selectShippingAddressMutating,
        selectShippingInformationLoading: selectShippingInformationLoading,
        selectShippingInformationResolving: selectShippingInformationResolving,
        selectShippingInformationMutating: selectShippingInformationMutating,
        selectShippingMethodsLoading: selectShippingMethodsLoading,
        selectShippingMethodsResolving: selectShippingMethodsResolving,
        selectPaymentLoading: selectPaymentLoading,
        selectPaymentResolving: selectPaymentResolving,
        selectPaymentMutating: selectPaymentMutating,
        selectPaymentMethodsLoading: selectPaymentMethodsLoading,
        selectPaymentMethodsResolving: selectPaymentMethodsResolving,
        selectCouponLoading: selectCouponLoading,
        selectCouponResolving: selectCouponResolving,
        selectCouponMutating: selectCouponMutating,
        selectItemLoading: selectItemLoading,
        selectItemAdding: selectItemAdding,
        selectItemResolving: selectItemResolving,
        selectCartErrorsObject: selectCartErrorsObject,
        selectCartErrors: selectCartErrors,
        selectBillingAddressErrors: selectBillingAddressErrors,
        selectShippingAddressErrors: selectShippingAddressErrors,
        selectShippingInformationErrors: selectShippingInformationErrors,
        selectShippingMethodsErrors: selectShippingMethodsErrors,
        selectPaymentErrors: selectPaymentErrors,
        selectPaymentMethodsErrors: selectPaymentMethodsErrors,
        selectItemErrors: selectItemErrors,
        selectCouponErrors: selectCouponErrors,
        selectCartId: selectCartId,
        selectCartSubtotal: selectCartSubtotal,
        selectCartGrandTotal: selectCartGrandTotal,
        selectCartSubtotalExcludingTax: selectCartSubtotalExcludingTax,
        selectCartSubtotalIncludingTax: selectCartSubtotalIncludingTax,
        selectCartSubtotalWithDiscountExcludingTax: selectCartSubtotalWithDiscountExcludingTax,
        selectCartSubtotalWithDiscountIncludingTax: selectCartSubtotalWithDiscountIncludingTax,
        selectCartDiscountTotals: selectCartDiscountTotals,
        selectCartTotalTax: selectCartTotalTax,
        selectCartShippingTotal: selectCartShippingTotal,
        selectCartCoupons: selectCartCoupons,
        selectCartItems: selectCartItems,
        selectCartHasOutOfStockItems: selectCartHasOutOfStockItems,
        selectCartBillingAddress: selectCartBillingAddress,
        selectCartShippingAddress: selectCartShippingAddress,
        selectCartPayment: selectCartPayment,
        selectCartTotals: selectCartTotals,
        selectCartShippingInformation: selectCartShippingInformation,
        selectCartAvailableShippingMethods: selectCartAvailableShippingMethods,
        selectCartAvailablePaymentMethods: selectCartAvailablePaymentMethods,
        selectIsCartEmpty: selectIsCartEmpty,
        selectCartItemDiscountedRowTotal: selectCartItemDiscountedRowTotal,
        selectIsBillingSameAsShipping: selectIsBillingSameAsShipping,
        selectHasBillingAddress: selectHasBillingAddress,
        selectHasShippingAddress: selectHasShippingAddress,
        selectHasShippingMethod: selectHasShippingMethod,
        selectHasPaymentMethod: selectHasPaymentMethod,
        selectCanPlaceOrder: selectCanPlaceOrder
    };
});
var ɵ0 = createCartSelectors;
var ɵ1 = /**
 * @return {?}
 */
function () {
    /** @type {?} */
    var cache;
    return (/**
     * @template T, V, U
     * @return {?}
     */
    function () { return cache = cache
        ? cache
        : createCartSelectors(); });
};
/** @type {?} */
export var getCartSelectors = ((ɵ1))();
export { ɵ0, ɵ1 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FydC5zZWxlY3Rvci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkYWZmb2RpbC9jYXJ0L3N0YXRlLyIsInNvdXJjZXMiOlsic2VsZWN0b3JzL2NhcnQvY2FydC5zZWxlY3Rvci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUNMLGNBQWMsRUFJZixNQUFNLGFBQWEsQ0FBQztBQUVyQixPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDOUMsT0FBTyxFQUFFLGdCQUFnQixFQUFrQixNQUFNLHNCQUFzQixDQUFDO0FBQ3hFLE9BQU8sRUFBRSw0QkFBNEIsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQ25FLE9BQU8sRUFBZ0QscUJBQXFCLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUVyRyxPQUFPLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUN0RSxPQUFPLEVBQStDLHFCQUFxQixFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDL0csT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sMENBQTBDLENBQUM7QUFHcEYsT0FBTyxFQUFFLGdDQUFnQyxFQUFFLE1BQU0sb0RBQW9ELENBQUM7Ozs7O0FBRXRHLG9EQXVNQzs7O0lBcE1BLHlEQUFtRTs7SUFDbEUseURBQTZDOztJQUU3Qyw0REFBbUU7Ozs7O0lBS25FLGlFQUFzRjs7Ozs7O0lBS3RGLGtFQUE0RDs7Ozs7OztJQU01RCxvRUFBOEQ7Ozs7Ozs7SUFNOUQsbUVBQTZEOzs7Ozs7SUFLN0QsMkRBQXFEOzs7Ozs7O0lBTXJELDZEQUF1RDs7Ozs7OztJQU12RCw0REFBc0Q7Ozs7O0lBSXRELHFFQUErRDs7Ozs7O0lBSy9ELHVFQUFpRTs7Ozs7O0lBS2pFLHNFQUFnRTs7Ozs7SUFJaEUsc0VBQWdFOzs7Ozs7SUFLaEUsd0VBQWtFOzs7Ozs7SUFLbEUsdUVBQWlFOzs7OztJQUlqRSwwRUFBb0U7Ozs7OztJQUtwRSw0RUFBc0U7Ozs7OztJQUt0RSwyRUFB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Q2xCLG9CQUFvQixzQkFBQTtRQUNwQiw4QkFBOEIsZ0NBQUE7UUFDOUIsOEJBQThCLGdDQUFBO1FBQzlCLDBDQUEwQyw0Q0FBQTtRQUMxQywwQ0FBMEMsNENBQUE7UUFDMUMsd0JBQXdCLDBCQUFBO1FBQ3hCLGtCQUFrQixvQkFBQTtRQUNsQix1QkFBdUIseUJBQUE7UUFDdkIsaUJBQWlCLG1CQUFBO1FBQ2pCLGVBQWUsaUJBQUE7UUFDZiw0QkFBNEIsOEJBQUE7UUFDNUIsd0JBQXdCLDBCQUFBO1FBQ3hCLHlCQUF5QiwyQkFBQTtRQUN6QixpQkFBaUIsbUJBQUE7UUFDakIsZ0JBQWdCLGtCQUFBO1FBQ2hCLDZCQUE2QiwrQkFBQTtRQUM3QixrQ0FBa0Msb0NBQUE7UUFDaEMsaUNBQWlDLG1DQUFBO1FBRW5DLGlCQUFpQixtQkFBQTtRQUNmLGdDQUFnQyxrQ0FBQTtRQUNoQyw2QkFBNkIsK0JBQUE7UUFFN0IsdUJBQXVCLHlCQUFBO1FBQ3ZCLHdCQUF3QiwwQkFBQTtRQUN4Qix1QkFBdUIseUJBQUE7UUFDdkIsc0JBQXNCLHdCQUFBO1FBQ3RCLG1CQUFtQixxQkFBQTtLQUNyQixDQUFBO0FBQ0YsQ0FBQyxDQUFBOzs7OztBQUVnQzs7UUFDNUIsS0FBSztJQUNUOzs7O0lBQU8sY0FJb0MsT0FBQSxLQUFLLEdBQUcsS0FBSztRQUN2RCxDQUFDLENBQUMsS0FBSztRQUNQLENBQUMsQ0FBQyxtQkFBbUIsRUFBVyxFQUZVLENBRVYsRUFBQztBQUNuQyxDQUFDOztBQVRELE1BQU0sS0FBTyxnQkFBZ0IsR0FBRyxNQVM5QixFQUFFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgY3JlYXRlU2VsZWN0b3IsXG4gIE1lbW9pemVkU2VsZWN0b3IsXG5cdE1lbW9pemVkU2VsZWN0b3JXaXRoUHJvcHMsXG4gIERlZmF1bHRQcm9qZWN0b3JGblxufSBmcm9tICdAbmdyeC9zdG9yZSc7XG5cbmltcG9ydCB7IGRhZmZTdWJ0cmFjdCB9IGZyb20gJ0BkYWZmb2RpbC9jb3JlJztcbmltcG9ydCB7IERhZmZMb2FkaW5nU3RhdGUsIERhZmZTdGF0ZUVycm9yIH0gZnJvbSAnQGRhZmZvZGlsL2NvcmUvc3RhdGUnO1xuaW1wb3J0IHsgZGFmZkNvbXBhcmVQZXJzb25hbEFkZHJlc3NlcyB9IGZyb20gJ0BkYWZmb2RpbC9nZW9ncmFwaHknO1xuaW1wb3J0IHsgRGFmZkNhcnQsIERhZmZDYXJ0VG90YWwsIERhZmZDYXJ0T3JkZXJSZXN1bHQsIERhZmZDYXJ0VG90YWxUeXBlRW51bSB9IGZyb20gJ0BkYWZmb2RpbC9jYXJ0JztcblxuaW1wb3J0IHsgZ2V0RGFmZkNhcnRGZWF0dXJlU2VsZWN0b3IgfSBmcm9tICcuLi9jYXJ0LWZlYXR1cmUuc2VsZWN0b3InO1xuaW1wb3J0IHsgRGFmZkNhcnRSZWR1Y2VyU3RhdGUsIERhZmZDYXJ0UmVkdWNlcnNTdGF0ZSwgRGFmZkNhcnRPcGVyYXRpb25UeXBlIH0gZnJvbSAnLi4vLi4vcmVkdWNlcnMvcHVibGljX2FwaSc7XG5pbXBvcnQgeyBEYWZmQ2FydEl0ZW1Mb2FkaW5nU3RhdGUgfSBmcm9tICcuLi8uLi9yZWR1Y2Vycy9sb2FkaW5nL2NhcnQtbG9hZGluZy50eXBlJztcbmltcG9ydCB7IERhZmZTdGF0ZWZ1bENhcnRJdGVtIH0gZnJvbSAnLi4vLi4vbW9kZWxzL3N0YXRlZnVsLWNhcnQtaXRlbSc7XG5pbXBvcnQgeyBEYWZmQ2FydFJlc29sdmVTdGF0ZSB9IGZyb20gJy4uLy4uL3JlZHVjZXJzL2NhcnQtcmVzb2x2ZS9jYXJ0LXJlc29sdmUtc3RhdGUuZW51bSc7XG5pbXBvcnQgeyBnZXREYWZmQ2FydEl0ZW1FbnRpdGllc1NlbGVjdG9ycyB9IGZyb20gJy4uL2NhcnQtaXRlbS1lbnRpdGllcy9jYXJ0LWl0ZW0tZW50aXRpZXMuc2VsZWN0b3JzJztcblxuZXhwb3J0IGludGVyZmFjZSBEYWZmQ2FydFN0YXRlTWVtb2l6ZWRTZWxlY3RvcnM8XG4gIFQgZXh0ZW5kcyBEYWZmQ2FydCA9IERhZmZDYXJ0XG4+IHtcblx0c2VsZWN0Q2FydFN0YXRlOiBNZW1vaXplZFNlbGVjdG9yPG9iamVjdCwgRGFmZkNhcnRSZWR1Y2VyU3RhdGU8VD4+O1xuICBzZWxlY3RDYXJ0VmFsdWU6IE1lbW9pemVkU2VsZWN0b3I8b2JqZWN0LCBUPjtcblxuICBzZWxlY3RDYXJ0UmVzb2x2ZWQ6IE1lbW9pemVkU2VsZWN0b3I8b2JqZWN0LCBEYWZmQ2FydFJlc29sdmVTdGF0ZT47XG5cbiAgLyoqXG4gICAqIFRoZSBvYmplY3QgdGhhdCBob2xkcyBhbGwgdGhlIGxvYWRpbmcgc3RhdGVzIGZvciBjYXJ0IG9wZXJhdGlvbnMuXG4gICAqL1xuICBzZWxlY3RDYXJ0TG9hZGluZ09iamVjdDogTWVtb2l6ZWRTZWxlY3RvcjxvYmplY3QsIERhZmZDYXJ0UmVkdWNlclN0YXRlPFQ+Wydsb2FkaW5nJ10+O1xuICAvKipcbiAgICogU2VsZWN0cyB3aGV0aGVyIHRoZXJlIGlzIGFueSBjYXJ0IG9wZXJhdGlvbiBpbiBwcm9ncmVzcy5cbiAgICogVGhpcyBpbmNsdWRlcyBvcGVyYXRpb25zIHNwZWNpZmljYWxseSBmb3IgY2FydCBzdWJmaWVsZHMuXG4gICAqL1xuICBzZWxlY3RDYXJ0RmVhdHVyZUxvYWRpbmc6IE1lbW9pemVkU2VsZWN0b3I8b2JqZWN0LCBib29sZWFuPjtcbiAgLyoqXG4gICAqIFNlbGVjdHMgd2hldGhlciB0aGVyZSBpcyBhbnkgY2FydCByZXNvbHZlIG9wZXJhdGlvbiBpbiBwcm9ncmVzcy5cbiAgICogVGhpcyBpbmNsdWRlcyBvcGVyYXRpb25zIGZvciBjYXJ0IHN1YmZpZWxkcy5cbiAgICogVGhpcyBwZXJ0YWlucyBvbmx5IHRvIHJlcXVlc3RzIHRoYXQgZG8gbm90IG11dGF0ZSBkYXRhIHN1Y2ggYXMgXCJsb2FkXCIgb3IgXCJsaXN0XCIuXG4gICAqL1xuICBzZWxlY3RDYXJ0RmVhdHVyZVJlc29sdmluZzogTWVtb2l6ZWRTZWxlY3RvcjxvYmplY3QsIGJvb2xlYW4+O1xuICAvKipcbiAgICogU2VsZWN0cyB3aGV0aGVyIHRoZXJlIGlzIGFueSBjYXJ0IG11dGF0ZSBvcGVyYXRpb24gaW4gcHJvZ3Jlc3MuXG4gICAqIFRoaXMgaW5jbHVkZXMgb3BlcmF0aW9ucyBmb3IgY2FydCBzdWJmaWVsZHMuXG4gICAqIFRoaXMgcGVydGFpbnMgb25seSB0byByZXF1ZXN0cyB0aGF0IG11dGF0ZSBkYXRhIHN1Y2ggYXMgXCJ1cGRhdGVcIi5cbiAgICovXG4gIHNlbGVjdENhcnRGZWF0dXJlTXV0YXRpbmc6IE1lbW9pemVkU2VsZWN0b3I8b2JqZWN0LCBib29sZWFuPjtcbiAgLyoqXG4gICAqIFNlbGVjdHMgd2hldGhlciB0aGVyZSBpcyBhIGNhcnQgb3BlcmF0aW9uIGluIHByb2dyZXNzLlxuICAgKiBUaGlzIGRvZXMgbm90IGluY2x1ZGUgb3BlcmF0aW9ucyBzcGVjaWZpY2FsbHkgZm9yIGNhcnQgc3ViZmllbGRzLlxuICAgKi9cbiAgc2VsZWN0Q2FydExvYWRpbmc6IE1lbW9pemVkU2VsZWN0b3I8b2JqZWN0LCBib29sZWFuPjtcbiAgLyoqXG4gICAqIFNlbGVjdHMgd2hldGhlciB0aGVyZSBpcyBhIGNhcnQgcmVzb2x2ZSBvcGVyYXRpb24gaW4gcHJvZ3Jlc3MuXG4gICAqIFRoaXMgZG9lcyBub3QgaW5jbHVkZSBvcGVyYXRpb25zIHNwZWNpZmljYWxseSBmb3IgY2FydCBzdWJmaWVsZHMuXG4gICAqIFRoaXMgcGVydGFpbnMgb25seSB0byByZXF1ZXN0cyB0aGF0IGRvIG5vdCBtdXRhdGUgZGF0YSBzdWNoIGFzIFwibG9hZFwiIG9yIFwibGlzdFwiLlxuICAgKi9cbiAgc2VsZWN0Q2FydFJlc29sdmluZzogTWVtb2l6ZWRTZWxlY3RvcjxvYmplY3QsIGJvb2xlYW4+O1xuICAvKipcbiAgICogU2VsZWN0cyB3aGV0aGVyIHRoZXJlIGlzIGEgY2FydCBtdXRhdGUgb3BlcmF0aW9uIGluIHByb2dyZXNzLlxuICAgKiBUaGlzIGRvZXMgbm90IGluY2x1ZGUgb3BlcmF0aW9ucyBzcGVjaWZpY2FsbHkgZm9yIGNhcnQgc3ViZmllbGRzLlxuICAgKiBUaGlzIHBlcnRhaW5zIG9ubHkgdG8gcmVxdWVzdHMgdGhhdCBtdXRhdGUgZGF0YSBzdWNoIGFzIFwidXBkYXRlXCIuXG4gICAqL1xuICBzZWxlY3RDYXJ0TXV0YXRpbmc6IE1lbW9pemVkU2VsZWN0b3I8b2JqZWN0LCBib29sZWFuPjtcbiAgLyoqXG4gICAqIFNlbGVjdHMgd2hldGhlciB0aGVyZSBpcyBhIGNhcnQgYmlsbGluZyBhZGRyZXNzIG9wZXJhdGlvbiBpbiBwcm9ncmVzcy5cbiAgICovXG4gIHNlbGVjdEJpbGxpbmdBZGRyZXNzTG9hZGluZzogTWVtb2l6ZWRTZWxlY3RvcjxvYmplY3QsIGJvb2xlYW4+O1xuICAvKipcbiAgICogU2VsZWN0cyB3aGV0aGVyIHRoZXJlIGlzIGEgY2FydCBiaWxsaW5nIGFkZHJlc3MgcmVzb2x2ZSBvcGVyYXRpb24gaW4gcHJvZ3Jlc3MuXG4gICAqIFRoaXMgcGVydGFpbnMgb25seSB0byByZXF1ZXN0cyB0aGF0IGRvIG5vdCBtdXRhdGUgZGF0YSBzdWNoIGFzIFwibG9hZFwiIG9yIFwibGlzdFwiLlxuICAgKi9cbiAgc2VsZWN0QmlsbGluZ0FkZHJlc3NSZXNvbHZpbmc6IE1lbW9pemVkU2VsZWN0b3I8b2JqZWN0LCBib29sZWFuPjtcbiAgLyoqXG4gICAqIFNlbGVjdHMgd2hldGhlciB0aGVyZSBpcyBhIGNhcnQgYmlsbGluZyBhZGRyZXNzIG11dGF0ZSBvcGVyYXRpb24gaW4gcHJvZ3Jlc3MuXG4gICAqIFRoaXMgcGVydGFpbnMgb25seSB0byByZXF1ZXN0cyB0aGF0IG11dGF0ZSBkYXRhIHN1Y2ggYXMgXCJ1cGRhdGVcIi5cbiAgICovXG4gIHNlbGVjdEJpbGxpbmdBZGRyZXNzTXV0YXRpbmc6IE1lbW9pemVkU2VsZWN0b3I8b2JqZWN0LCBib29sZWFuPjtcbiAgLyoqXG4gICAqIFNlbGVjdHMgd2hldGhlciB0aGVyZSBpcyBhIGNhcnQgc2hpcHBpbmcgYWRkcmVzcyBvcGVyYXRpb24gaW4gcHJvZ3Jlc3MuXG4gICAqL1xuICBzZWxlY3RTaGlwcGluZ0FkZHJlc3NMb2FkaW5nOiBNZW1vaXplZFNlbGVjdG9yPG9iamVjdCwgYm9vbGVhbj47XG4gIC8qKlxuICAgKiBTZWxlY3RzIHdoZXRoZXIgdGhlcmUgaXMgYSBjYXJ0IHNoaXBwaW5nIGFkZHJlc3MgcmVzb2x2ZSBvcGVyYXRpb24gaW4gcHJvZ3Jlc3MuXG4gICAqIFRoaXMgcGVydGFpbnMgb25seSB0byByZXF1ZXN0cyB0aGF0IGRvIG5vdCBtdXRhdGUgZGF0YSBzdWNoIGFzIFwibG9hZFwiIG9yIFwibGlzdFwiLlxuICAgKi9cbiAgc2VsZWN0U2hpcHBpbmdBZGRyZXNzUmVzb2x2aW5nOiBNZW1vaXplZFNlbGVjdG9yPG9iamVjdCwgYm9vbGVhbj47XG4gIC8qKlxuICAgKiBTZWxlY3RzIHdoZXRoZXIgdGhlcmUgaXMgYSBjYXJ0IHNoaXBwaW5nIGFkZHJlc3MgbXV0YXRlIG9wZXJhdGlvbiBpbiBwcm9ncmVzcy5cbiAgICogVGhpcyBwZXJ0YWlucyBvbmx5IHRvIHJlcXVlc3RzIHRoYXQgbXV0YXRlIGRhdGEgc3VjaCBhcyBcInVwZGF0ZVwiLlxuICAgKi9cbiAgc2VsZWN0U2hpcHBpbmdBZGRyZXNzTXV0YXRpbmc6IE1lbW9pemVkU2VsZWN0b3I8b2JqZWN0LCBib29sZWFuPjtcbiAgLyoqXG4gICAqIFNlbGVjdHMgd2hldGhlciB0aGVyZSBpcyBhIGNhcnQgc2hpcHBpbmcgaW5mb3JtYXRpb24gb3BlcmF0aW9uIGluIHByb2dyZXNzLlxuICAgKi9cbiAgc2VsZWN0U2hpcHBpbmdJbmZvcm1hdGlvbkxvYWRpbmc6IE1lbW9pemVkU2VsZWN0b3I8b2JqZWN0LCBib29sZWFuPjtcbiAgLyoqXG4gICAqIFNlbGVjdHMgd2hldGhlciB0aGVyZSBpcyBhIGNhcnQgc2hpcHBpbmcgaW5mb3JtYXRpb24gcmVzb2x2ZSBvcGVyYXRpb24gaW4gcHJvZ3Jlc3MuXG4gICAqIFRoaXMgcGVydGFpbnMgb25seSB0byByZXF1ZXN0cyB0aGF0IGRvIG5vdCBtdXRhdGUgZGF0YSBzdWNoIGFzIFwibG9hZFwiIG9yIFwibGlzdFwiLlxuICAgKi9cbiAgc2VsZWN0U2hpcHBpbmdJbmZvcm1hdGlvblJlc29sdmluZzogTWVtb2l6ZWRTZWxlY3RvcjxvYmplY3QsIGJvb2xlYW4+O1xuICAvKipcbiAgICogU2VsZWN0cyB3aGV0aGVyIHRoZXJlIGlzIGEgY2FydCBzaGlwcGluZyBpbmZvcm1hdGlvbiBtdXRhdGUgb3BlcmF0aW9uIGluIHByb2dyZXNzLlxuICAgKiBUaGlzIHBlcnRhaW5zIG9ubHkgdG8gcmVxdWVzdHMgdGhhdCBtdXRhdGUgZGF0YSBzdWNoIGFzIFwidXBkYXRlXCIuXG4gICAqL1xuICBzZWxlY3RTaGlwcGluZ0luZm9ybWF0aW9uTXV0YXRpbmc6IE1lbW9pemVkU2VsZWN0b3I8b2JqZWN0LCBib29sZWFuPjtcbiAgLyoqXG4gICAqIFNlbGVjdHMgd2hldGhlciB0aGVyZSBpcyBhIGNhcnQgc2hpcHBpbmcgbWV0aG9kcyBvcGVyYXRpb24gaW4gcHJvZ3Jlc3MuXG4gICAqL1xuICBzZWxlY3RTaGlwcGluZ01ldGhvZHNMb2FkaW5nOiBNZW1vaXplZFNlbGVjdG9yPG9iamVjdCwgYm9vbGVhbj47XG4gIC8qKlxuICAgKiBTZWxlY3RzIHdoZXRoZXIgdGhlcmUgaXMgYSBjYXJ0IHNoaXBwaW5nIG1ldGhvZHMgcmVzb2x2ZSBvcGVyYXRpb24gaW4gcHJvZ3Jlc3MuXG4gICAqIFRoaXMgcGVydGFpbnMgb25seSB0byByZXF1ZXN0cyB0aGF0IGRvIG5vdCBtdXRhdGUgZGF0YSBzdWNoIGFzIFwibG9hZFwiIG9yIFwibGlzdFwiLlxuICAgKi9cbiAgc2VsZWN0U2hpcHBpbmdNZXRob2RzUmVzb2x2aW5nOiBNZW1vaXplZFNlbGVjdG9yPG9iamVjdCwgYm9vbGVhbj47XG4gIC8qKlxuICAgKiBTZWxlY3RzIHdoZXRoZXIgdGhlcmUgaXMgYSBjYXJ0IHBheW1lbnQgb3BlcmF0aW9uIGluIHByb2dyZXNzLlxuICAgKi9cbiAgc2VsZWN0UGF5bWVudExvYWRpbmc6IE1lbW9pemVkU2VsZWN0b3I8b2JqZWN0LCBib29sZWFuPjtcbiAgLyoqXG4gICAqIFNlbGVjdHMgd2hldGhlciB0aGVyZSBpcyBhIGNhcnQgcGF5bWVudCByZXNvbHZlIG9wZXJhdGlvbiBpbiBwcm9ncmVzcy5cbiAgICogVGhpcyBwZXJ0YWlucyBvbmx5IHRvIHJlcXVlc3RzIHRoYXQgZG8gbm90IG11dGF0ZSBkYXRhIHN1Y2ggYXMgXCJsb2FkXCIgb3IgXCJsaXN0XCIuXG4gICAqL1xuICBzZWxlY3RQYXltZW50UmVzb2x2aW5nOiBNZW1vaXplZFNlbGVjdG9yPG9iamVjdCwgYm9vbGVhbj47XG4gIC8qKlxuICAgKiBTZWxlY3RzIHdoZXRoZXIgdGhlcmUgaXMgYSBjYXJ0IHBheW1lbnQgbXV0YXRlIG9wZXJhdGlvbiBpbiBwcm9ncmVzcy5cbiAgICogVGhpcyBwZXJ0YWlucyBvbmx5IHRvIHJlcXVlc3RzIHRoYXQgbXV0YXRlIGRhdGEgc3VjaCBhcyBcInVwZGF0ZVwiLlxuICAgKi9cbiAgc2VsZWN0UGF5bWVudE11dGF0aW5nOiBNZW1vaXplZFNlbGVjdG9yPG9iamVjdCwgYm9vbGVhbj47XG4gIC8qKlxuICAgKiBTZWxlY3RzIHdoZXRoZXIgdGhlcmUgaXMgYSBjYXJ0IHBheW1lbnQgbWV0aG9kcyBvcGVyYXRpb24gaW4gcHJvZ3Jlc3MuXG4gICAqL1xuICBzZWxlY3RQYXltZW50TWV0aG9kc0xvYWRpbmc6IE1lbW9pemVkU2VsZWN0b3I8b2JqZWN0LCBib29sZWFuPjtcbiAgLyoqXG4gICAqIFNlbGVjdHMgd2hldGhlciB0aGVyZSBpcyBhIGNhcnQgcGF5bWVudCBtZXRob2RzIHJlc29sdmUgb3BlcmF0aW9uIGluIHByb2dyZXNzLlxuICAgKiBUaGlzIHBlcnRhaW5zIG9ubHkgdG8gcmVxdWVzdHMgdGhhdCBkbyBub3QgbXV0YXRlIGRhdGEgc3VjaCBhcyBcImxvYWRcIiBvciBcImxpc3RcIi5cbiAgICovXG4gIHNlbGVjdFBheW1lbnRNZXRob2RzUmVzb2x2aW5nOiBNZW1vaXplZFNlbGVjdG9yPG9iamVjdCwgYm9vbGVhbj47XG4gIC8qKlxuICAgKiBTZWxlY3RzIHdoZXRoZXIgdGhlcmUgaXMgYSBjYXJ0IGNvdXBvbiBvcGVyYXRpb24gaW4gcHJvZ3Jlc3MuXG4gICAqL1xuICBzZWxlY3RDb3Vwb25Mb2FkaW5nOiBNZW1vaXplZFNlbGVjdG9yPG9iamVjdCwgYm9vbGVhbj47XG4gIC8qKlxuICAgKiBTZWxlY3RzIHdoZXRoZXIgdGhlcmUgaXMgYSBjYXJ0IGNvdXBvbiByZXNvbHZlIG9wZXJhdGlvbiBpbiBwcm9ncmVzcy5cbiAgICogVGhpcyBwZXJ0YWlucyBvbmx5IHRvIHJlcXVlc3RzIHRoYXQgZG8gbm90IG11dGF0ZSBkYXRhIHN1Y2ggYXMgXCJsb2FkXCIgb3IgXCJsaXN0XCIuXG4gICAqL1xuICBzZWxlY3RDb3Vwb25SZXNvbHZpbmc6IE1lbW9pemVkU2VsZWN0b3I8b2JqZWN0LCBib29sZWFuPjtcbiAgLyoqXG4gICAqIFNlbGVjdHMgd2hldGhlciB0aGVyZSBpcyBhIGNhcnQgY291cG9uIG11dGF0ZSBvcGVyYXRpb24gaW4gcHJvZ3Jlc3MuXG4gICAqIFRoaXMgcGVydGFpbnMgb25seSB0byByZXF1ZXN0cyB0aGF0IG11dGF0ZSBkYXRhIHN1Y2ggYXMgXCJ1cGRhdGVcIi5cbiAgICovXG4gIHNlbGVjdENvdXBvbk11dGF0aW5nOiBNZW1vaXplZFNlbGVjdG9yPG9iamVjdCwgYm9vbGVhbj47XG4gIC8qKlxuICAgKiBTZWxlY3RzIHdoZXRoZXIgdGhlcmUgaXMgYSBjYXJ0IGl0ZW0gb3BlcmF0aW9uIGluIHByb2dyZXNzLlxuICAgKi9cblx0c2VsZWN0SXRlbUxvYWRpbmc6IE1lbW9pemVkU2VsZWN0b3I8b2JqZWN0LCBib29sZWFuPjtcblx0LyoqXG4gICAqIFNlbGVjdHMgd2hldGhlciB0aGVyZSBpcyBhIGNhcnQgaXRlbSBhZGQgb3BlcmF0aW9uIGluIHByb2dyZXNzLlxuICAgKi9cbiAgc2VsZWN0SXRlbUFkZGluZzogTWVtb2l6ZWRTZWxlY3RvcjxvYmplY3QsIGJvb2xlYW4+O1xuICAvKipcbiAgICogU2VsZWN0cyB3aGV0aGVyIHRoZXJlIGlzIGEgY2FydCBpdGVtIHJlc29sdmUgb3BlcmF0aW9uIGluIHByb2dyZXNzLlxuICAgKiBUaGlzIHBlcnRhaW5zIG9ubHkgdG8gcmVxdWVzdHMgdGhhdCBkbyBub3QgbXV0YXRlIGRhdGEgc3VjaCBhcyBcImxvYWRcIiBvciBcImxpc3RcIi5cbiAgICovXG4gIHNlbGVjdEl0ZW1SZXNvbHZpbmc6IE1lbW9pemVkU2VsZWN0b3I8b2JqZWN0LCBib29sZWFuPjtcblxuXHRzZWxlY3RDYXJ0RXJyb3JzT2JqZWN0OiBNZW1vaXplZFNlbGVjdG9yPG9iamVjdCwgRGFmZkNhcnRSZWR1Y2VyU3RhdGU8VD5bJ2Vycm9ycyddPjtcblx0c2VsZWN0Q2FydEVycm9yczogTWVtb2l6ZWRTZWxlY3RvcjxvYmplY3QsIERhZmZTdGF0ZUVycm9yW10+O1xuXHRzZWxlY3RCaWxsaW5nQWRkcmVzc0Vycm9yczogTWVtb2l6ZWRTZWxlY3RvcjxvYmplY3QsIERhZmZTdGF0ZUVycm9yW10+O1xuXHRzZWxlY3RTaGlwcGluZ0FkZHJlc3NFcnJvcnM6IE1lbW9pemVkU2VsZWN0b3I8b2JqZWN0LCBEYWZmU3RhdGVFcnJvcltdPjtcblx0c2VsZWN0U2hpcHBpbmdJbmZvcm1hdGlvbkVycm9yczogTWVtb2l6ZWRTZWxlY3RvcjxvYmplY3QsIERhZmZTdGF0ZUVycm9yW10+O1xuXHRzZWxlY3RTaGlwcGluZ01ldGhvZHNFcnJvcnM6IE1lbW9pemVkU2VsZWN0b3I8b2JqZWN0LCBEYWZmU3RhdGVFcnJvcltdPjtcblx0c2VsZWN0UGF5bWVudEVycm9yczogTWVtb2l6ZWRTZWxlY3RvcjxvYmplY3QsIERhZmZTdGF0ZUVycm9yW10+O1xuXHRzZWxlY3RQYXltZW50TWV0aG9kc0Vycm9yczogTWVtb2l6ZWRTZWxlY3RvcjxvYmplY3QsIERhZmZTdGF0ZUVycm9yW10+O1xuICBzZWxlY3RDb3Vwb25FcnJvcnM6IE1lbW9pemVkU2VsZWN0b3I8b2JqZWN0LCBEYWZmU3RhdGVFcnJvcltdPjtcblx0c2VsZWN0SXRlbUVycm9yczogTWVtb2l6ZWRTZWxlY3RvcjxvYmplY3QsIERhZmZTdGF0ZUVycm9yW10+O1xuXG5cdHNlbGVjdENhcnRJZDogTWVtb2l6ZWRTZWxlY3RvcjxvYmplY3QsIFRbJ2lkJ10+O1xuXHRzZWxlY3RDYXJ0U3VidG90YWw6IE1lbW9pemVkU2VsZWN0b3I8b2JqZWN0LCBEYWZmQ2FydFRvdGFsWyd2YWx1ZSddPjtcblx0c2VsZWN0Q2FydEdyYW5kVG90YWw6IE1lbW9pemVkU2VsZWN0b3I8b2JqZWN0LCBEYWZmQ2FydFRvdGFsWyd2YWx1ZSddPjtcblx0c2VsZWN0Q2FydFN1YnRvdGFsRXhjbHVkaW5nVGF4OiBNZW1vaXplZFNlbGVjdG9yPG9iamVjdCwgRGFmZkNhcnRUb3RhbFsndmFsdWUnXT47XG5cdHNlbGVjdENhcnRTdWJ0b3RhbEluY2x1ZGluZ1RheDogTWVtb2l6ZWRTZWxlY3RvcjxvYmplY3QsIERhZmZDYXJ0VG90YWxbJ3ZhbHVlJ10+O1xuXHRzZWxlY3RDYXJ0U3VidG90YWxXaXRoRGlzY291bnRFeGNsdWRpbmdUYXg6IE1lbW9pemVkU2VsZWN0b3I8b2JqZWN0LCBEYWZmQ2FydFRvdGFsWyd2YWx1ZSddPjtcblx0c2VsZWN0Q2FydFN1YnRvdGFsV2l0aERpc2NvdW50SW5jbHVkaW5nVGF4OiBNZW1vaXplZFNlbGVjdG9yPG9iamVjdCwgRGFmZkNhcnRUb3RhbFsndmFsdWUnXT47XG5cdHNlbGVjdENhcnRUb3RhbFRheDogTWVtb2l6ZWRTZWxlY3RvcjxvYmplY3QsIERhZmZDYXJ0VG90YWxbJ3ZhbHVlJ10+O1xuXHQvKipcblx0ICogU2VsZWN0cyB0aGUgRGFmZkNhcnRUb3RhbHMgZm9yIGNhcnQgZGlzY291bnRzLiBUaGVzZSBhcmUgZGlzY291bnRzIGFzc29jaWF0ZWQgd2l0aCBjb3Vwb24gY29kZXMuXG5cdCAqL1xuXHRzZWxlY3RDYXJ0RGlzY291bnRUb3RhbHM6IE1lbW9pemVkU2VsZWN0b3I8b2JqZWN0LCBEYWZmQ2FydFRvdGFsW10+O1xuXHRzZWxlY3RDYXJ0U2hpcHBpbmdUb3RhbDogTWVtb2l6ZWRTZWxlY3RvcjxvYmplY3QsIERhZmZDYXJ0VG90YWxbJ3ZhbHVlJ10+O1xuXHRzZWxlY3RDYXJ0Q291cG9uczogTWVtb2l6ZWRTZWxlY3RvcjxvYmplY3QsIFRbJ2NvdXBvbnMnXT47XG5cdC8qKlxuXHQgKiBAZGVwcmVjYXRlZCB1c2UgZ2V0RGFmZkNhcnRJdGVtRW50aXRpZXNTZWxlY3RvcnMoKS5zZWxlY3RBbGxDYXJ0SXRlbXMgaW5zdGVhZC5cblx0ICovXG5cdHNlbGVjdENhcnRJdGVtczogTWVtb2l6ZWRTZWxlY3RvcjxvYmplY3QsIFRbJ2l0ZW1zJ10+O1xuXHRzZWxlY3RDYXJ0SGFzT3V0T2ZTdG9ja0l0ZW1zOiBNZW1vaXplZFNlbGVjdG9yPG9iamVjdCwgYm9vbGVhbj47XG5cdHNlbGVjdENhcnRCaWxsaW5nQWRkcmVzczogTWVtb2l6ZWRTZWxlY3RvcjxvYmplY3QsIFRbJ2JpbGxpbmdfYWRkcmVzcyddPjtcblx0c2VsZWN0Q2FydFNoaXBwaW5nQWRkcmVzczogTWVtb2l6ZWRTZWxlY3RvcjxvYmplY3QsIFRbJ3NoaXBwaW5nX2FkZHJlc3MnXT47XG5cdHNlbGVjdENhcnRQYXltZW50OiBNZW1vaXplZFNlbGVjdG9yPG9iamVjdCwgVFsncGF5bWVudCddPjtcblx0c2VsZWN0Q2FydFRvdGFsczogTWVtb2l6ZWRTZWxlY3RvcjxvYmplY3QsIFRbJ3RvdGFscyddPjtcblx0c2VsZWN0Q2FydFNoaXBwaW5nSW5mb3JtYXRpb246IE1lbW9pemVkU2VsZWN0b3I8b2JqZWN0LCBUWydzaGlwcGluZ19pbmZvcm1hdGlvbiddPjtcblx0c2VsZWN0Q2FydEF2YWlsYWJsZVNoaXBwaW5nTWV0aG9kczogTWVtb2l6ZWRTZWxlY3RvcjxvYmplY3QsIFRbJ2F2YWlsYWJsZV9zaGlwcGluZ19tZXRob2RzJ10+O1xuICBzZWxlY3RDYXJ0QXZhaWxhYmxlUGF5bWVudE1ldGhvZHM6IE1lbW9pemVkU2VsZWN0b3I8b2JqZWN0LCBUWydhdmFpbGFibGVfcGF5bWVudF9tZXRob2RzJ10+O1xuXG4gIHNlbGVjdElzQ2FydEVtcHR5OiBNZW1vaXplZFNlbGVjdG9yPG9iamVjdCwgYm9vbGVhbj47XG4gIHNlbGVjdENhcnRJdGVtRGlzY291bnRlZFJvd1RvdGFsOiBNZW1vaXplZFNlbGVjdG9yV2l0aFByb3BzPG9iamVjdCwgb2JqZWN0LCBudW1iZXI+O1xuICAvKipcbiAgICogU2VsZWN0cyB3aGV0aGVyIHRoZSBjYXJ0J3Mgc2hpcHBpbmcgYWRkcmVzcyBlcXVhbHMgdGhlIGJpbGxpbmcgYWRkcmVzcy5cbiAgICogUmV0dXJucyBmYWxzZSBpZiBlaXRoZXIgYWRkcmVzcyBpcyBudWxsIG9yIHVuZGVmaW5lZC5cbiAgICovXG5cdHNlbGVjdElzQmlsbGluZ1NhbWVBc1NoaXBwaW5nOiBNZW1vaXplZFNlbGVjdG9yPG9iamVjdCwgYm9vbGVhbj47XG5cbiAgc2VsZWN0SGFzQmlsbGluZ0FkZHJlc3M6IE1lbW9pemVkU2VsZWN0b3I8b2JqZWN0LCBib29sZWFuPjtcbiAgc2VsZWN0SGFzU2hpcHBpbmdBZGRyZXNzOiBNZW1vaXplZFNlbGVjdG9yPG9iamVjdCwgYm9vbGVhbj47XG4gIHNlbGVjdEhhc1NoaXBwaW5nTWV0aG9kOiBNZW1vaXplZFNlbGVjdG9yPG9iamVjdCwgYm9vbGVhbj47XG4gIHNlbGVjdEhhc1BheW1lbnRNZXRob2Q6IE1lbW9pemVkU2VsZWN0b3I8b2JqZWN0LCBib29sZWFuPjtcbiAgc2VsZWN0Q2FuUGxhY2VPcmRlcjogTWVtb2l6ZWRTZWxlY3RvcjxvYmplY3QsIGJvb2xlYW4sIERlZmF1bHRQcm9qZWN0b3JGbjxib29sZWFuPj47XG59XG5cbmNvbnN0IGNyZWF0ZUNhcnRTZWxlY3RvcnMgPSA8XG4gIFQgZXh0ZW5kcyBEYWZmQ2FydCA9IERhZmZDYXJ0LFxuXHRWIGV4dGVuZHMgRGFmZkNhcnRPcmRlclJlc3VsdCA9IERhZmZDYXJ0T3JkZXJSZXN1bHQsXG5cdFUgZXh0ZW5kcyBEYWZmU3RhdGVmdWxDYXJ0SXRlbSA9IERhZmZTdGF0ZWZ1bENhcnRJdGVtXG4+KCk6IERhZmZDYXJ0U3RhdGVNZW1vaXplZFNlbGVjdG9yczxUPiA9PiB7XG5cdGNvbnN0IHNlbGVjdENhcnRGZWF0dXJlU3RhdGUgPSBnZXREYWZmQ2FydEZlYXR1cmVTZWxlY3RvcjxULCBWLCBVPigpLnNlbGVjdENhcnRGZWF0dXJlU3RhdGU7XG5cdGNvbnN0IHsgc2VsZWN0Q2FydEl0ZW1NdXRhdGluZyB9ID0gZ2V0RGFmZkNhcnRJdGVtRW50aXRpZXNTZWxlY3RvcnM8VCwgViwgVT4oKTtcblx0Y29uc3Qgc2VsZWN0Q2FydFN0YXRlID0gY3JlYXRlU2VsZWN0b3IoXG5cdFx0c2VsZWN0Q2FydEZlYXR1cmVTdGF0ZSxcblx0XHQoc3RhdGU6IERhZmZDYXJ0UmVkdWNlcnNTdGF0ZTxULCBWLCBVPikgPT4gc3RhdGUuY2FydFxuXHQpO1xuXHRjb25zdCBzZWxlY3RDYXJ0VmFsdWUgPSBjcmVhdGVTZWxlY3Rvcihcblx0XHRzZWxlY3RDYXJ0U3RhdGUsXG5cdFx0KHN0YXRlOiBEYWZmQ2FydFJlZHVjZXJTdGF0ZTxUPikgPT4gc3RhdGUuY2FydFxuICApO1xuXG4gIGNvbnN0IHNlbGVjdENhcnRSZXNvbHZlZCA9IGNyZWF0ZVNlbGVjdG9yKFxuXHRcdHNlbGVjdENhcnRTdGF0ZSxcblx0XHQoc3RhdGU6IERhZmZDYXJ0UmVkdWNlclN0YXRlPFQ+KSA9PiBzdGF0ZS5yZXNvbHZlZFxuICApO1xuXG4gIGNvbnN0IHNlbGVjdENhcnRMb2FkaW5nT2JqZWN0ID0gY3JlYXRlU2VsZWN0b3IoXG5cdFx0c2VsZWN0Q2FydFN0YXRlLFxuXHRcdHN0YXRlID0+IHN0YXRlLmxvYWRpbmdcbiAgKTtcblx0Y29uc3Qgc2VsZWN0Q2FydExvYWRpbmcgPSBjcmVhdGVTZWxlY3Rvcihcblx0XHRzZWxlY3RDYXJ0TG9hZGluZ09iamVjdCxcblx0XHRsb2FkaW5nT2JqZWN0ID0+IGxvYWRpbmdPYmplY3RbRGFmZkNhcnRPcGVyYXRpb25UeXBlLkNhcnRdICE9PSBEYWZmTG9hZGluZ1N0YXRlLkNvbXBsZXRlXG4gICk7XG4gIGNvbnN0IHNlbGVjdENhcnRSZXNvbHZpbmcgPSBjcmVhdGVTZWxlY3Rvcihcblx0XHRzZWxlY3RDYXJ0TG9hZGluZ09iamVjdCxcblx0XHRsb2FkaW5nT2JqZWN0ID0+IGxvYWRpbmdPYmplY3RbRGFmZkNhcnRPcGVyYXRpb25UeXBlLkNhcnRdID09PSBEYWZmTG9hZGluZ1N0YXRlLlJlc29sdmluZ1xuICApO1xuICBjb25zdCBzZWxlY3RDYXJ0TXV0YXRpbmcgPSBjcmVhdGVTZWxlY3Rvcihcblx0XHRzZWxlY3RDYXJ0TG9hZGluZ09iamVjdCxcblx0XHRsb2FkaW5nT2JqZWN0ID0+IGxvYWRpbmdPYmplY3RbRGFmZkNhcnRPcGVyYXRpb25UeXBlLkNhcnRdID09PSBEYWZmTG9hZGluZ1N0YXRlLk11dGF0aW5nXG5cdCk7XG5cdGNvbnN0IHNlbGVjdEJpbGxpbmdBZGRyZXNzTG9hZGluZyA9IGNyZWF0ZVNlbGVjdG9yKFxuXHRcdHNlbGVjdENhcnRMb2FkaW5nT2JqZWN0LFxuXHRcdGxvYWRpbmdPYmplY3QgPT4gbG9hZGluZ09iamVjdFtEYWZmQ2FydE9wZXJhdGlvblR5cGUuQmlsbGluZ0FkZHJlc3NdICE9PSBEYWZmTG9hZGluZ1N0YXRlLkNvbXBsZXRlXG4gICk7XG4gIGNvbnN0IHNlbGVjdEJpbGxpbmdBZGRyZXNzUmVzb2x2aW5nID0gY3JlYXRlU2VsZWN0b3IoXG5cdFx0c2VsZWN0Q2FydExvYWRpbmdPYmplY3QsXG5cdFx0bG9hZGluZ09iamVjdCA9PiBsb2FkaW5nT2JqZWN0W0RhZmZDYXJ0T3BlcmF0aW9uVHlwZS5CaWxsaW5nQWRkcmVzc10gPT09IERhZmZMb2FkaW5nU3RhdGUuUmVzb2x2aW5nXG4gICk7XG4gIGNvbnN0IHNlbGVjdEJpbGxpbmdBZGRyZXNzTXV0YXRpbmcgPSBjcmVhdGVTZWxlY3Rvcihcblx0XHRzZWxlY3RDYXJ0TG9hZGluZ09iamVjdCxcblx0XHRsb2FkaW5nT2JqZWN0ID0+IGxvYWRpbmdPYmplY3RbRGFmZkNhcnRPcGVyYXRpb25UeXBlLkJpbGxpbmdBZGRyZXNzXSA9PT0gRGFmZkxvYWRpbmdTdGF0ZS5NdXRhdGluZ1xuXHQpO1xuXHRjb25zdCBzZWxlY3RTaGlwcGluZ0FkZHJlc3NMb2FkaW5nID0gY3JlYXRlU2VsZWN0b3IoXG5cdFx0c2VsZWN0Q2FydExvYWRpbmdPYmplY3QsXG5cdFx0bG9hZGluZ09iamVjdCA9PiBsb2FkaW5nT2JqZWN0W0RhZmZDYXJ0T3BlcmF0aW9uVHlwZS5TaGlwcGluZ0FkZHJlc3NdICE9PSBEYWZmTG9hZGluZ1N0YXRlLkNvbXBsZXRlXG4gICk7XG4gIGNvbnN0IHNlbGVjdFNoaXBwaW5nQWRkcmVzc1Jlc29sdmluZyA9IGNyZWF0ZVNlbGVjdG9yKFxuXHRcdHNlbGVjdENhcnRMb2FkaW5nT2JqZWN0LFxuXHRcdGxvYWRpbmdPYmplY3QgPT4gbG9hZGluZ09iamVjdFtEYWZmQ2FydE9wZXJhdGlvblR5cGUuU2hpcHBpbmdBZGRyZXNzXSA9PT0gRGFmZkxvYWRpbmdTdGF0ZS5SZXNvbHZpbmdcbiAgKTtcbiAgY29uc3Qgc2VsZWN0U2hpcHBpbmdBZGRyZXNzTXV0YXRpbmcgPSBjcmVhdGVTZWxlY3Rvcihcblx0XHRzZWxlY3RDYXJ0TG9hZGluZ09iamVjdCxcblx0XHRsb2FkaW5nT2JqZWN0ID0+IGxvYWRpbmdPYmplY3RbRGFmZkNhcnRPcGVyYXRpb25UeXBlLlNoaXBwaW5nQWRkcmVzc10gPT09IERhZmZMb2FkaW5nU3RhdGUuTXV0YXRpbmdcblx0KTtcblx0Y29uc3Qgc2VsZWN0U2hpcHBpbmdJbmZvcm1hdGlvbkxvYWRpbmcgPSBjcmVhdGVTZWxlY3Rvcihcblx0XHRzZWxlY3RDYXJ0TG9hZGluZ09iamVjdCxcblx0XHRsb2FkaW5nT2JqZWN0ID0+IGxvYWRpbmdPYmplY3RbRGFmZkNhcnRPcGVyYXRpb25UeXBlLlNoaXBwaW5nSW5mb3JtYXRpb25dICE9PSBEYWZmTG9hZGluZ1N0YXRlLkNvbXBsZXRlXG4gICk7XG4gIGNvbnN0IHNlbGVjdFNoaXBwaW5nSW5mb3JtYXRpb25SZXNvbHZpbmcgPSBjcmVhdGVTZWxlY3Rvcihcblx0XHRzZWxlY3RDYXJ0TG9hZGluZ09iamVjdCxcblx0XHRsb2FkaW5nT2JqZWN0ID0+IGxvYWRpbmdPYmplY3RbRGFmZkNhcnRPcGVyYXRpb25UeXBlLlNoaXBwaW5nSW5mb3JtYXRpb25dID09PSBEYWZmTG9hZGluZ1N0YXRlLlJlc29sdmluZ1xuICApO1xuICBjb25zdCBzZWxlY3RTaGlwcGluZ0luZm9ybWF0aW9uTXV0YXRpbmcgPSBjcmVhdGVTZWxlY3Rvcihcblx0XHRzZWxlY3RDYXJ0TG9hZGluZ09iamVjdCxcblx0XHRsb2FkaW5nT2JqZWN0ID0+IGxvYWRpbmdPYmplY3RbRGFmZkNhcnRPcGVyYXRpb25UeXBlLlNoaXBwaW5nSW5mb3JtYXRpb25dID09PSBEYWZmTG9hZGluZ1N0YXRlLk11dGF0aW5nXG5cdCk7XG5cdGNvbnN0IHNlbGVjdFNoaXBwaW5nTWV0aG9kc0xvYWRpbmcgPSBjcmVhdGVTZWxlY3Rvcihcblx0XHRzZWxlY3RDYXJ0TG9hZGluZ09iamVjdCxcblx0XHRsb2FkaW5nT2JqZWN0ID0+IGxvYWRpbmdPYmplY3RbRGFmZkNhcnRPcGVyYXRpb25UeXBlLlNoaXBwaW5nTWV0aG9kc10gIT09IERhZmZMb2FkaW5nU3RhdGUuQ29tcGxldGVcbiAgKTtcbiAgY29uc3Qgc2VsZWN0U2hpcHBpbmdNZXRob2RzUmVzb2x2aW5nID0gY3JlYXRlU2VsZWN0b3IoXG5cdFx0c2VsZWN0Q2FydExvYWRpbmdPYmplY3QsXG5cdFx0bG9hZGluZ09iamVjdCA9PiBsb2FkaW5nT2JqZWN0W0RhZmZDYXJ0T3BlcmF0aW9uVHlwZS5TaGlwcGluZ01ldGhvZHNdID09PSBEYWZmTG9hZGluZ1N0YXRlLlJlc29sdmluZ1xuICApO1xuXHRjb25zdCBzZWxlY3RQYXltZW50TG9hZGluZyA9IGNyZWF0ZVNlbGVjdG9yKFxuXHRcdHNlbGVjdENhcnRMb2FkaW5nT2JqZWN0LFxuXHRcdGxvYWRpbmdPYmplY3QgPT4gbG9hZGluZ09iamVjdFtEYWZmQ2FydE9wZXJhdGlvblR5cGUuUGF5bWVudF0gIT09IERhZmZMb2FkaW5nU3RhdGUuQ29tcGxldGVcbiAgKTtcbiAgY29uc3Qgc2VsZWN0UGF5bWVudFJlc29sdmluZyA9IGNyZWF0ZVNlbGVjdG9yKFxuXHRcdHNlbGVjdENhcnRMb2FkaW5nT2JqZWN0LFxuXHRcdGxvYWRpbmdPYmplY3QgPT4gbG9hZGluZ09iamVjdFtEYWZmQ2FydE9wZXJhdGlvblR5cGUuUGF5bWVudF0gPT09IERhZmZMb2FkaW5nU3RhdGUuUmVzb2x2aW5nXG4gICk7XG4gIGNvbnN0IHNlbGVjdFBheW1lbnRNdXRhdGluZyA9IGNyZWF0ZVNlbGVjdG9yKFxuXHRcdHNlbGVjdENhcnRMb2FkaW5nT2JqZWN0LFxuXHRcdGxvYWRpbmdPYmplY3QgPT4gbG9hZGluZ09iamVjdFtEYWZmQ2FydE9wZXJhdGlvblR5cGUuUGF5bWVudF0gPT09IERhZmZMb2FkaW5nU3RhdGUuTXV0YXRpbmdcblx0KTtcblx0Y29uc3Qgc2VsZWN0UGF5bWVudE1ldGhvZHNMb2FkaW5nID0gY3JlYXRlU2VsZWN0b3IoXG5cdFx0c2VsZWN0Q2FydExvYWRpbmdPYmplY3QsXG5cdFx0bG9hZGluZ09iamVjdCA9PiBsb2FkaW5nT2JqZWN0W0RhZmZDYXJ0T3BlcmF0aW9uVHlwZS5QYXltZW50TWV0aG9kc10gIT09IERhZmZMb2FkaW5nU3RhdGUuQ29tcGxldGVcbiAgKTtcbiAgY29uc3Qgc2VsZWN0UGF5bWVudE1ldGhvZHNSZXNvbHZpbmcgPSBjcmVhdGVTZWxlY3Rvcihcblx0XHRzZWxlY3RDYXJ0TG9hZGluZ09iamVjdCxcblx0XHRsb2FkaW5nT2JqZWN0ID0+IGxvYWRpbmdPYmplY3RbRGFmZkNhcnRPcGVyYXRpb25UeXBlLlBheW1lbnRNZXRob2RzXSA9PT0gRGFmZkxvYWRpbmdTdGF0ZS5SZXNvbHZpbmdcbiAgKTtcblx0Y29uc3Qgc2VsZWN0SXRlbUxvYWRpbmcgPSBjcmVhdGVTZWxlY3Rvcihcblx0XHRzZWxlY3RDYXJ0TG9hZGluZ09iamVjdCxcblx0XHRsb2FkaW5nT2JqZWN0ID0+IGxvYWRpbmdPYmplY3RbRGFmZkNhcnRPcGVyYXRpb25UeXBlLkl0ZW1dICE9PSBEYWZmQ2FydEl0ZW1Mb2FkaW5nU3RhdGUuQ29tcGxldGVcbiAgKTtcblx0Y29uc3Qgc2VsZWN0SXRlbUFkZGluZyA9IGNyZWF0ZVNlbGVjdG9yKFxuXHRcdHNlbGVjdENhcnRMb2FkaW5nT2JqZWN0LFxuXHRcdGxvYWRpbmdPYmplY3QgPT4gbG9hZGluZ09iamVjdFtEYWZmQ2FydE9wZXJhdGlvblR5cGUuSXRlbV0gPT09IERhZmZDYXJ0SXRlbUxvYWRpbmdTdGF0ZS5BZGRpbmdcbiAgKTtcbiAgY29uc3Qgc2VsZWN0SXRlbVJlc29sdmluZyA9IGNyZWF0ZVNlbGVjdG9yKFxuXHRcdHNlbGVjdENhcnRMb2FkaW5nT2JqZWN0LFxuXHRcdGxvYWRpbmdPYmplY3QgPT4gbG9hZGluZ09iamVjdFtEYWZmQ2FydE9wZXJhdGlvblR5cGUuSXRlbV0gPT09IERhZmZDYXJ0SXRlbUxvYWRpbmdTdGF0ZS5SZXNvbHZpbmdcbiAgKTtcbiAgY29uc3Qgc2VsZWN0Q291cG9uTG9hZGluZyA9IGNyZWF0ZVNlbGVjdG9yKFxuXHRcdHNlbGVjdENhcnRMb2FkaW5nT2JqZWN0LFxuXHRcdGxvYWRpbmdPYmplY3QgPT4gbG9hZGluZ09iamVjdFtEYWZmQ2FydE9wZXJhdGlvblR5cGUuQ291cG9uXSAhPT0gRGFmZkxvYWRpbmdTdGF0ZS5Db21wbGV0ZVxuICApO1xuICBjb25zdCBzZWxlY3RDb3Vwb25SZXNvbHZpbmcgPSBjcmVhdGVTZWxlY3Rvcihcblx0XHRzZWxlY3RDYXJ0TG9hZGluZ09iamVjdCxcblx0XHRsb2FkaW5nT2JqZWN0ID0+IGxvYWRpbmdPYmplY3RbRGFmZkNhcnRPcGVyYXRpb25UeXBlLkNvdXBvbl0gPT09IERhZmZMb2FkaW5nU3RhdGUuUmVzb2x2aW5nXG4gICk7XG4gIGNvbnN0IHNlbGVjdENvdXBvbk11dGF0aW5nID0gY3JlYXRlU2VsZWN0b3IoXG5cdFx0c2VsZWN0Q2FydExvYWRpbmdPYmplY3QsXG5cdFx0bG9hZGluZ09iamVjdCA9PiBsb2FkaW5nT2JqZWN0W0RhZmZDYXJ0T3BlcmF0aW9uVHlwZS5Db3Vwb25dID09PSBEYWZmTG9hZGluZ1N0YXRlLk11dGF0aW5nXG4gICk7XG4gIGNvbnN0IHNlbGVjdENhcnRGZWF0dXJlTG9hZGluZyA9IGNyZWF0ZVNlbGVjdG9yKFxuXHRcdHNlbGVjdENhcnRMb2FkaW5nT2JqZWN0LFxuXHRcdGxvYWRpbmdPYmplY3QgPT4gW1xuICAgICAgc2VsZWN0Q2FydExvYWRpbmcsXG4gICAgICBzZWxlY3RCaWxsaW5nQWRkcmVzc0xvYWRpbmcsXG4gICAgICBzZWxlY3RTaGlwcGluZ0FkZHJlc3NMb2FkaW5nLFxuICAgICAgc2VsZWN0U2hpcHBpbmdJbmZvcm1hdGlvbkxvYWRpbmcsXG4gICAgICBzZWxlY3RTaGlwcGluZ01ldGhvZHNMb2FkaW5nLFxuICAgICAgc2VsZWN0UGF5bWVudExvYWRpbmcsXG4gICAgICBzZWxlY3RQYXltZW50TWV0aG9kc0xvYWRpbmcsXG4gICAgICBzZWxlY3RDb3Vwb25Mb2FkaW5nLFxuICAgICAgc2VsZWN0SXRlbUxvYWRpbmcsXG4gICAgXS5tYXAoc2VsZWN0b3IgPT5cbiAgICAgIHNlbGVjdG9yLnByb2plY3Rvcihsb2FkaW5nT2JqZWN0KVxuICAgICkucmVkdWNlKChhY2MsIGxvYWRpbmcpID0+IGFjYyB8fCBsb2FkaW5nLCBmYWxzZSlcbiAgKTtcbiAgY29uc3Qgc2VsZWN0Q2FydEZlYXR1cmVSZXNvbHZpbmcgPSBjcmVhdGVTZWxlY3Rvcihcblx0XHRzZWxlY3RDYXJ0TG9hZGluZ09iamVjdCxcblx0XHRsb2FkaW5nT2JqZWN0ID0+IFtcbiAgICAgIHNlbGVjdENhcnRSZXNvbHZpbmcsXG4gICAgICBzZWxlY3RCaWxsaW5nQWRkcmVzc1Jlc29sdmluZyxcbiAgICAgIHNlbGVjdFNoaXBwaW5nQWRkcmVzc1Jlc29sdmluZyxcbiAgICAgIHNlbGVjdFNoaXBwaW5nSW5mb3JtYXRpb25SZXNvbHZpbmcsXG4gICAgICBzZWxlY3RTaGlwcGluZ01ldGhvZHNSZXNvbHZpbmcsXG4gICAgICBzZWxlY3RQYXltZW50UmVzb2x2aW5nLFxuICAgICAgc2VsZWN0UGF5bWVudE1ldGhvZHNSZXNvbHZpbmcsXG4gICAgICBzZWxlY3RDb3Vwb25SZXNvbHZpbmcsXG4gICAgICBzZWxlY3RJdGVtUmVzb2x2aW5nLFxuICAgIF0ubWFwKHNlbGVjdG9yID0+XG4gICAgICBzZWxlY3Rvci5wcm9qZWN0b3IobG9hZGluZ09iamVjdClcbiAgICApLnJlZHVjZSgoYWNjLCByZXNvbHZpbmcpID0+IGFjYyB8fCByZXNvbHZpbmcsIGZhbHNlKVxuICApO1xuICBjb25zdCBzZWxlY3RDYXJ0RmVhdHVyZU11dGF0aW5nID0gY3JlYXRlU2VsZWN0b3IoXG5cdFx0c2VsZWN0Q2FydExvYWRpbmdPYmplY3QsXG5cdFx0c2VsZWN0Q2FydEl0ZW1NdXRhdGluZyxcblx0XHQobG9hZGluZ09iamVjdCwgY2FydEl0ZW1NdXRhdGluZykgPT4gW1xuICAgICAgc2VsZWN0Q2FydE11dGF0aW5nLFxuICAgICAgc2VsZWN0QmlsbGluZ0FkZHJlc3NNdXRhdGluZyxcbiAgICAgIHNlbGVjdFNoaXBwaW5nQWRkcmVzc011dGF0aW5nLFxuICAgICAgc2VsZWN0U2hpcHBpbmdJbmZvcm1hdGlvbk11dGF0aW5nLFxuICAgICAgc2VsZWN0UGF5bWVudE11dGF0aW5nLFxuICAgICAgc2VsZWN0Q291cG9uTXV0YXRpbmcsXG5cdFx0XHRzZWxlY3RJdGVtQWRkaW5nXG4gICAgXS5tYXAoc2VsZWN0b3IgPT5cbiAgICAgIHNlbGVjdG9yLnByb2plY3Rvcihsb2FkaW5nT2JqZWN0KVxuICAgICkucmVkdWNlKChhY2MsIG11dGF0aW5nKSA9PiBhY2MgfHwgbXV0YXRpbmcsIGZhbHNlKSB8fCBjYXJ0SXRlbU11dGF0aW5nXG5cdCk7XG5cblx0Y29uc3Qgc2VsZWN0Q2FydEVycm9yc09iamVjdCA9IGNyZWF0ZVNlbGVjdG9yKFxuXHRcdHNlbGVjdENhcnRTdGF0ZSxcblx0XHQoc3RhdGU6IERhZmZDYXJ0UmVkdWNlclN0YXRlPFQ+KSA9PiBzdGF0ZS5lcnJvcnNcblx0KTtcblx0Y29uc3Qgc2VsZWN0Q2FydEVycm9ycyA9IGNyZWF0ZVNlbGVjdG9yKFxuXHRcdHNlbGVjdENhcnRFcnJvcnNPYmplY3QsXG5cdFx0KHN0YXRlOiBEYWZmQ2FydFJlZHVjZXJTdGF0ZTxUPlsnZXJyb3JzJ10pID0+IHN0YXRlW0RhZmZDYXJ0T3BlcmF0aW9uVHlwZS5DYXJ0XVxuXHQpO1xuXHRjb25zdCBzZWxlY3RCaWxsaW5nQWRkcmVzc0Vycm9ycyA9IGNyZWF0ZVNlbGVjdG9yKFxuXHRcdHNlbGVjdENhcnRFcnJvcnNPYmplY3QsXG5cdFx0KHN0YXRlOiBEYWZmQ2FydFJlZHVjZXJTdGF0ZTxUPlsnZXJyb3JzJ10pID0+IHN0YXRlW0RhZmZDYXJ0T3BlcmF0aW9uVHlwZS5CaWxsaW5nQWRkcmVzc11cblx0KTtcblx0Y29uc3Qgc2VsZWN0U2hpcHBpbmdBZGRyZXNzRXJyb3JzID0gY3JlYXRlU2VsZWN0b3IoXG5cdFx0c2VsZWN0Q2FydEVycm9yc09iamVjdCxcblx0XHQoc3RhdGU6IERhZmZDYXJ0UmVkdWNlclN0YXRlPFQ+WydlcnJvcnMnXSkgPT4gc3RhdGVbRGFmZkNhcnRPcGVyYXRpb25UeXBlLlNoaXBwaW5nQWRkcmVzc11cblx0KTtcblx0Y29uc3Qgc2VsZWN0U2hpcHBpbmdJbmZvcm1hdGlvbkVycm9ycyA9IGNyZWF0ZVNlbGVjdG9yKFxuXHRcdHNlbGVjdENhcnRFcnJvcnNPYmplY3QsXG5cdFx0KHN0YXRlOiBEYWZmQ2FydFJlZHVjZXJTdGF0ZTxUPlsnZXJyb3JzJ10pID0+IHN0YXRlW0RhZmZDYXJ0T3BlcmF0aW9uVHlwZS5TaGlwcGluZ0luZm9ybWF0aW9uXVxuXHQpO1xuXHRjb25zdCBzZWxlY3RTaGlwcGluZ01ldGhvZHNFcnJvcnMgPSBjcmVhdGVTZWxlY3Rvcihcblx0XHRzZWxlY3RDYXJ0RXJyb3JzT2JqZWN0LFxuXHRcdChzdGF0ZTogRGFmZkNhcnRSZWR1Y2VyU3RhdGU8VD5bJ2Vycm9ycyddKSA9PiBzdGF0ZVtEYWZmQ2FydE9wZXJhdGlvblR5cGUuU2hpcHBpbmdNZXRob2RzXVxuXHQpO1xuXHRjb25zdCBzZWxlY3RQYXltZW50RXJyb3JzID0gY3JlYXRlU2VsZWN0b3IoXG5cdFx0c2VsZWN0Q2FydEVycm9yc09iamVjdCxcblx0XHQoc3RhdGU6IERhZmZDYXJ0UmVkdWNlclN0YXRlPFQ+WydlcnJvcnMnXSkgPT4gc3RhdGVbRGFmZkNhcnRPcGVyYXRpb25UeXBlLlBheW1lbnRdXG5cdCk7XG5cdGNvbnN0IHNlbGVjdFBheW1lbnRNZXRob2RzRXJyb3JzID0gY3JlYXRlU2VsZWN0b3IoXG5cdFx0c2VsZWN0Q2FydEVycm9yc09iamVjdCxcblx0XHQoc3RhdGU6IERhZmZDYXJ0UmVkdWNlclN0YXRlPFQ+WydlcnJvcnMnXSkgPT4gc3RhdGVbRGFmZkNhcnRPcGVyYXRpb25UeXBlLlBheW1lbnRNZXRob2RzXVxuXHQpO1xuXHRjb25zdCBzZWxlY3RJdGVtRXJyb3JzID0gY3JlYXRlU2VsZWN0b3IoXG5cdFx0c2VsZWN0Q2FydEVycm9yc09iamVjdCxcblx0XHQoc3RhdGU6IERhZmZDYXJ0UmVkdWNlclN0YXRlPFQ+WydlcnJvcnMnXSkgPT4gc3RhdGVbRGFmZkNhcnRPcGVyYXRpb25UeXBlLkl0ZW1dXG4gICk7XG4gIGNvbnN0IHNlbGVjdENvdXBvbkVycm9ycyA9IGNyZWF0ZVNlbGVjdG9yKFxuXHRcdHNlbGVjdENhcnRFcnJvcnNPYmplY3QsXG5cdFx0KHN0YXRlOiBEYWZmQ2FydFJlZHVjZXJTdGF0ZTxUPlsnZXJyb3JzJ10pID0+IHN0YXRlW0RhZmZDYXJ0T3BlcmF0aW9uVHlwZS5Db3Vwb25dXG4gICk7XG5cblx0Y29uc3Qgc2VsZWN0Q2FydElkID0gY3JlYXRlU2VsZWN0b3IoXG5cdFx0c2VsZWN0Q2FydFZhbHVlLFxuXHRcdChzdGF0ZTogRGFmZkNhcnRSZWR1Y2VyU3RhdGU8VD5bJ2NhcnQnXSkgPT4gc3RhdGUuaWRcblx0KTtcblx0LyoqXG5cdCAqIEBkZXByZWNhdGVkIHVzZSBzZWxlY3RDYXJ0U3VidG90YWxFeGNsdWRpbmdUYXggc2VsZWN0b3IgaW5zdGVhZC5cblx0ICovXG5cdGNvbnN0IHNlbGVjdENhcnRTdWJ0b3RhbCA9IGNyZWF0ZVNlbGVjdG9yKFxuXHRcdHNlbGVjdENhcnRWYWx1ZSxcblx0XHQoc3RhdGU6IERhZmZDYXJ0UmVkdWNlclN0YXRlPFQ+WydjYXJ0J10pID0+IHtcblx0XHRcdGNvbnN0IHN1YnRvdGFsT2JqZWN0ID0gc3RhdGUudG90YWxzLmZpbmQodG90YWwgPT4gdG90YWwubmFtZSA9PT0gRGFmZkNhcnRUb3RhbFR5cGVFbnVtLnN1YnRvdGFsRXhjbHVkaW5nVGF4KTtcblx0XHRcdHJldHVybiBzdWJ0b3RhbE9iamVjdCA/IHN1YnRvdGFsT2JqZWN0LnZhbHVlIDogbnVsbDtcblx0XHR9XG5cdCk7XG5cdGNvbnN0IHNlbGVjdENhcnRHcmFuZFRvdGFsID0gY3JlYXRlU2VsZWN0b3IoXG5cdFx0c2VsZWN0Q2FydFZhbHVlLFxuXHRcdChzdGF0ZTogRGFmZkNhcnRSZWR1Y2VyU3RhdGU8VD5bJ2NhcnQnXSkgPT4ge1xuXHRcdFx0Y29uc3QgZ3JhbmRUb3RhbE9iamVjdCA9IHN0YXRlLnRvdGFscy5maW5kKHRvdGFsID0+IHRvdGFsLm5hbWUgPT09IERhZmZDYXJ0VG90YWxUeXBlRW51bS5ncmFuZFRvdGFsKTtcblx0XHRcdHJldHVybiBncmFuZFRvdGFsT2JqZWN0ID8gZ3JhbmRUb3RhbE9iamVjdC52YWx1ZSA6IG51bGw7XG5cdFx0fVxuXHQpO1xuXHRjb25zdCBzZWxlY3RDYXJ0U3VidG90YWxFeGNsdWRpbmdUYXggPSBjcmVhdGVTZWxlY3Rvcihcblx0XHRzZWxlY3RDYXJ0VmFsdWUsXG5cdFx0KHN0YXRlOiBEYWZmQ2FydFJlZHVjZXJTdGF0ZTxUPlsnY2FydCddKSA9PiB7XG5cdFx0XHRjb25zdCBzdWJ0b3RhbEV4Y2x1ZGluZ1RheE9iamVjdCA9IHN0YXRlLnRvdGFscy5maW5kKHRvdGFsID0+IHRvdGFsLm5hbWUgPT09IERhZmZDYXJ0VG90YWxUeXBlRW51bS5zdWJ0b3RhbEV4Y2x1ZGluZ1RheCk7XG5cdFx0XHRyZXR1cm4gc3VidG90YWxFeGNsdWRpbmdUYXhPYmplY3QgPyBzdWJ0b3RhbEV4Y2x1ZGluZ1RheE9iamVjdC52YWx1ZSA6IG51bGw7XG5cdFx0fVxuXHQpO1xuXHRjb25zdCBzZWxlY3RDYXJ0U3VidG90YWxJbmNsdWRpbmdUYXggPSBjcmVhdGVTZWxlY3Rvcihcblx0XHRzZWxlY3RDYXJ0VmFsdWUsXG5cdFx0KHN0YXRlOiBEYWZmQ2FydFJlZHVjZXJTdGF0ZTxUPlsnY2FydCddKSA9PiB7XG5cdFx0XHRjb25zdCBzdWJ0b3RhbEluY2x1ZGluZ1RheE9iamVjdCA9IHN0YXRlLnRvdGFscy5maW5kKHRvdGFsID0+IHRvdGFsLm5hbWUgPT09IERhZmZDYXJ0VG90YWxUeXBlRW51bS5zdWJ0b3RhbEluY2x1ZGluZ1RheCk7XG5cdFx0XHRyZXR1cm4gc3VidG90YWxJbmNsdWRpbmdUYXhPYmplY3QgPyBzdWJ0b3RhbEluY2x1ZGluZ1RheE9iamVjdC52YWx1ZSA6IG51bGw7XG5cdFx0fVxuXHQpO1xuXHRjb25zdCBzZWxlY3RDYXJ0U3VidG90YWxXaXRoRGlzY291bnRFeGNsdWRpbmdUYXggPSBjcmVhdGVTZWxlY3Rvcihcblx0XHRzZWxlY3RDYXJ0VmFsdWUsXG5cdFx0KHN0YXRlOiBEYWZmQ2FydFJlZHVjZXJTdGF0ZTxUPlsnY2FydCddKSA9PiB7XG5cdFx0XHRjb25zdCBzdWJ0b3RhbFdpdGhEaXNjb3VudEV4Y2x1ZGluZ1RheE9iamVjdCA9IHN0YXRlLnRvdGFscy5maW5kKHRvdGFsID0+IHRvdGFsLm5hbWUgPT09IERhZmZDYXJ0VG90YWxUeXBlRW51bS5zdWJ0b3RhbFdpdGhEaXNjb3VudEV4Y2x1ZGluZ1RheCk7XG5cdFx0XHRyZXR1cm4gc3VidG90YWxXaXRoRGlzY291bnRFeGNsdWRpbmdUYXhPYmplY3QgPyBzdWJ0b3RhbFdpdGhEaXNjb3VudEV4Y2x1ZGluZ1RheE9iamVjdC52YWx1ZSA6IG51bGw7XG5cdFx0fVxuXHQpO1xuXHRjb25zdCBzZWxlY3RDYXJ0U3VidG90YWxXaXRoRGlzY291bnRJbmNsdWRpbmdUYXggPSBjcmVhdGVTZWxlY3Rvcihcblx0XHRzZWxlY3RDYXJ0VmFsdWUsXG5cdFx0KHN0YXRlOiBEYWZmQ2FydFJlZHVjZXJTdGF0ZTxUPlsnY2FydCddKSA9PiB7XG5cdFx0XHRjb25zdCBzdWJ0b3RhbFdpdGhEaXNjb3VudEluY2x1ZGluZ1RheE9iamVjdCA9IHN0YXRlLnRvdGFscy5maW5kKHRvdGFsID0+IHRvdGFsLm5hbWUgPT09IERhZmZDYXJ0VG90YWxUeXBlRW51bS5zdWJ0b3RhbFdpdGhEaXNjb3VudEluY2x1ZGluZ1RheCk7XG5cdFx0XHRyZXR1cm4gc3VidG90YWxXaXRoRGlzY291bnRJbmNsdWRpbmdUYXhPYmplY3QgPyBzdWJ0b3RhbFdpdGhEaXNjb3VudEluY2x1ZGluZ1RheE9iamVjdC52YWx1ZSA6IG51bGw7XG5cdFx0fVxuXHQpO1xuXHRjb25zdCBzZWxlY3RDYXJ0VG90YWxUYXggPSBjcmVhdGVTZWxlY3Rvcihcblx0XHRzZWxlY3RDYXJ0VmFsdWUsXG5cdFx0KHN0YXRlOiBEYWZmQ2FydFJlZHVjZXJTdGF0ZTxUPlsnY2FydCddKSA9PiB7XG5cdFx0XHRjb25zdCB0YXhPYmplY3QgPSBzdGF0ZS50b3RhbHMuZmluZCh0b3RhbCA9PiB0b3RhbC5uYW1lID09PSBEYWZmQ2FydFRvdGFsVHlwZUVudW0udGF4KTtcblx0XHRcdHJldHVybiB0YXhPYmplY3QgPyB0YXhPYmplY3QudmFsdWUgOiBudWxsO1xuXHRcdH1cblx0KTtcblx0Y29uc3Qgc2VsZWN0Q2FydERpc2NvdW50VG90YWxzID0gY3JlYXRlU2VsZWN0b3IoXG5cdFx0c2VsZWN0Q2FydFZhbHVlLFxuXHRcdChzdGF0ZTogRGFmZkNhcnRSZWR1Y2VyU3RhdGU8VD5bJ2NhcnQnXSkgPT4ge1xuXHRcdFx0Y29uc3QgZGlzY291bnRzOiBEYWZmQ2FydFRvdGFsW10gPSBzdGF0ZS50b3RhbHMuZmlsdGVyKHRvdGFsID0+IHRvdGFsLm5hbWUgPT09IERhZmZDYXJ0VG90YWxUeXBlRW51bS5kaXNjb3VudCk7XG5cdFx0XHRyZXR1cm4gZGlzY291bnRzID8gZGlzY291bnRzIDogW107XG5cdFx0fVxuXHQpO1xuXHRjb25zdCBzZWxlY3RDYXJ0U2hpcHBpbmdUb3RhbCA9IGNyZWF0ZVNlbGVjdG9yKFxuXHRcdHNlbGVjdENhcnRWYWx1ZSxcblx0XHQoc3RhdGU6IERhZmZDYXJ0UmVkdWNlclN0YXRlPFQ+WydjYXJ0J10pID0+IHtcblx0XHRcdGNvbnN0IHNoaXBwaW5nVG90YWxPYmplY3QgPSBzdGF0ZS50b3RhbHMuZmluZCh0b3RhbCA9PiB0b3RhbC5uYW1lID09PSBEYWZmQ2FydFRvdGFsVHlwZUVudW0uc2hpcHBpbmcpO1xuXHRcdFx0cmV0dXJuIHNoaXBwaW5nVG90YWxPYmplY3QgPyBzaGlwcGluZ1RvdGFsT2JqZWN0LnZhbHVlIDogbnVsbDtcblx0XHR9XG5cdCk7XG5cdGNvbnN0IHNlbGVjdENhcnRDb3Vwb25zID0gY3JlYXRlU2VsZWN0b3IoXG5cdFx0c2VsZWN0Q2FydFZhbHVlLFxuXHRcdChzdGF0ZTogRGFmZkNhcnRSZWR1Y2VyU3RhdGU8VD5bJ2NhcnQnXSkgPT4gc3RhdGUuY291cG9uc1xuXHQpO1xuXHRjb25zdCBzZWxlY3RDYXJ0SXRlbXMgPSBjcmVhdGVTZWxlY3Rvcihcblx0XHRzZWxlY3RDYXJ0VmFsdWUsXG5cdFx0KHN0YXRlOiBEYWZmQ2FydFJlZHVjZXJTdGF0ZTxUPlsnY2FydCddKSA9PiBzdGF0ZS5pdGVtc1xuXHQpO1xuXHRjb25zdCBzZWxlY3RDYXJ0SGFzT3V0T2ZTdG9ja0l0ZW1zID0gY3JlYXRlU2VsZWN0b3IoXG5cdFx0c2VsZWN0Q2FydFZhbHVlLFxuXHRcdChzdGF0ZTogRGFmZkNhcnRSZWR1Y2VyU3RhdGU8VD5bJ2NhcnQnXSkgPT4gc3RhdGUuaXRlbXMucmVkdWNlKChhY2MsIGl0ZW0pID0+IChhY2MgfHwgIWl0ZW0uaW5fc3RvY2spLCBmYWxzZSlcblx0KVxuXHRjb25zdCBzZWxlY3RDYXJ0QmlsbGluZ0FkZHJlc3MgPSBjcmVhdGVTZWxlY3Rvcihcblx0XHRzZWxlY3RDYXJ0VmFsdWUsXG5cdFx0KHN0YXRlOiBEYWZmQ2FydFJlZHVjZXJTdGF0ZTxUPlsnY2FydCddKSA9PiBzdGF0ZS5iaWxsaW5nX2FkZHJlc3Ncblx0KTtcblx0Y29uc3Qgc2VsZWN0Q2FydFNoaXBwaW5nQWRkcmVzcyA9IGNyZWF0ZVNlbGVjdG9yKFxuXHRcdHNlbGVjdENhcnRWYWx1ZSxcblx0XHQoc3RhdGU6IERhZmZDYXJ0UmVkdWNlclN0YXRlPFQ+WydjYXJ0J10pID0+IHN0YXRlLnNoaXBwaW5nX2FkZHJlc3Ncblx0KTtcblx0Y29uc3Qgc2VsZWN0Q2FydFBheW1lbnQgPSBjcmVhdGVTZWxlY3Rvcihcblx0XHRzZWxlY3RDYXJ0VmFsdWUsXG5cdFx0KHN0YXRlOiBEYWZmQ2FydFJlZHVjZXJTdGF0ZTxUPlsnY2FydCddKSA9PiBzdGF0ZS5wYXltZW50XG5cdCk7XG5cdGNvbnN0IHNlbGVjdENhcnRUb3RhbHMgPSBjcmVhdGVTZWxlY3Rvcihcblx0XHRzZWxlY3RDYXJ0VmFsdWUsXG5cdFx0KHN0YXRlOiBEYWZmQ2FydFJlZHVjZXJTdGF0ZTxUPlsnY2FydCddKSA9PiBzdGF0ZS50b3RhbHNcblx0KTtcblx0Y29uc3Qgc2VsZWN0Q2FydFNoaXBwaW5nSW5mb3JtYXRpb24gPSBjcmVhdGVTZWxlY3Rvcihcblx0XHRzZWxlY3RDYXJ0VmFsdWUsXG5cdFx0KHN0YXRlOiBEYWZmQ2FydFJlZHVjZXJTdGF0ZTxUPlsnY2FydCddKSA9PiBzdGF0ZS5zaGlwcGluZ19pbmZvcm1hdGlvblxuXHQpO1xuXHRjb25zdCBzZWxlY3RDYXJ0QXZhaWxhYmxlU2hpcHBpbmdNZXRob2RzID0gY3JlYXRlU2VsZWN0b3IoXG5cdFx0c2VsZWN0Q2FydFZhbHVlLFxuXHRcdChzdGF0ZTogRGFmZkNhcnRSZWR1Y2VyU3RhdGU8VD5bJ2NhcnQnXSkgPT4gc3RhdGUuYXZhaWxhYmxlX3NoaXBwaW5nX21ldGhvZHNcblx0KTtcblx0Y29uc3Qgc2VsZWN0Q2FydEF2YWlsYWJsZVBheW1lbnRNZXRob2RzID0gY3JlYXRlU2VsZWN0b3IoXG5cdFx0c2VsZWN0Q2FydFZhbHVlLFxuXHRcdChzdGF0ZTogRGFmZkNhcnRSZWR1Y2VyU3RhdGU8VD5bJ2NhcnQnXSkgPT4gc3RhdGUuYXZhaWxhYmxlX3BheW1lbnRfbWV0aG9kc1xuICApO1xuXG5cdGNvbnN0IHNlbGVjdElzQ2FydEVtcHR5ID0gY3JlYXRlU2VsZWN0b3IoXG5cdFx0c2VsZWN0Q2FydFZhbHVlLFxuXHRcdGNhcnQgPT4gIWNhcnQgfHwgIWNhcnQuaXRlbXMgfHwgY2FydC5pdGVtcy5sZW5ndGggPT09IDBcbiAgKTtcblx0Y29uc3Qgc2VsZWN0Q2FydEl0ZW1EaXNjb3VudGVkUm93VG90YWwgPSBjcmVhdGVTZWxlY3Rvcihcblx0XHRzZWxlY3RDYXJ0SXRlbXMsXG5cdFx0KGNhcnRJdGVtczogRGFmZlN0YXRlZnVsQ2FydEl0ZW1bXSwgcHJvcHMpID0+IHtcblx0XHRcdGNvbnN0IGNhcnRJdGVtID0gY2FydEl0ZW1zLmZpbmQoaXRlbSA9PiBpdGVtLml0ZW1faWQgPT09IHByb3BzLmlkKVxuXHRcdFx0cmV0dXJuIGRhZmZTdWJ0cmFjdChjYXJ0SXRlbS5yb3dfdG90YWwsIGNhcnRJdGVtLnRvdGFsX2Rpc2NvdW50KTtcblx0XHR9XG4gICk7XG4gIGNvbnN0IHNlbGVjdElzQmlsbGluZ1NhbWVBc1NoaXBwaW5nID0gY3JlYXRlU2VsZWN0b3IoXG4gICAgc2VsZWN0Q2FydFNoaXBwaW5nQWRkcmVzcyxcbiAgICBzZWxlY3RDYXJ0QmlsbGluZ0FkZHJlc3MsXG4gICAgKHNoaXBwaW5nQWRkcmVzcywgYmlsbGluZ0FkZHJlc3MpID0+IGRhZmZDb21wYXJlUGVyc29uYWxBZGRyZXNzZXMoc2hpcHBpbmdBZGRyZXNzLCBiaWxsaW5nQWRkcmVzcylcbiAgKVxuXG4gIGNvbnN0IHNlbGVjdEhhc0JpbGxpbmdBZGRyZXNzID0gY3JlYXRlU2VsZWN0b3IoXG4gICAgc2VsZWN0Q2FydEJpbGxpbmdBZGRyZXNzLFxuICAgIGJpbGxpbmdBZGRyZXNzID0+ICEhYmlsbGluZ0FkZHJlc3NcbiAgKTtcblxuICBjb25zdCBzZWxlY3RIYXNTaGlwcGluZ0FkZHJlc3MgPSBjcmVhdGVTZWxlY3RvcihcbiAgICBzZWxlY3RDYXJ0U2hpcHBpbmdBZGRyZXNzLFxuICAgIHNoaXBwaW5nQWRkcmVzcyA9PiAhIXNoaXBwaW5nQWRkcmVzc1xuICApO1xuXG4gIGNvbnN0IHNlbGVjdEhhc1NoaXBwaW5nTWV0aG9kID0gY3JlYXRlU2VsZWN0b3IoXG4gICAgc2VsZWN0Q2FydFNoaXBwaW5nSW5mb3JtYXRpb24sXG4gICAgc2hpcHBpbmdNZXRob2QgPT4gISFzaGlwcGluZ01ldGhvZFxuICApO1xuXG4gIGNvbnN0IHNlbGVjdEhhc1BheW1lbnRNZXRob2QgPSBjcmVhdGVTZWxlY3RvcihcbiAgICBzZWxlY3RDYXJ0UGF5bWVudCxcbiAgICBwYXltZW50TWV0aG9kID0+ICEhcGF5bWVudE1ldGhvZCAmJiBwYXltZW50TWV0aG9kLm1ldGhvZCAhPT0gJydcbiAgKTtcblxuICBjb25zdCBzZWxlY3RDYW5QbGFjZU9yZGVyID0gY3JlYXRlU2VsZWN0b3IoXG4gICAgc2VsZWN0SXNDYXJ0RW1wdHksXG4gICAgc2VsZWN0SGFzQmlsbGluZ0FkZHJlc3MsXG4gICAgc2VsZWN0SGFzU2hpcHBpbmdBZGRyZXNzLFxuICAgIHNlbGVjdEhhc1NoaXBwaW5nTWV0aG9kLFxuICAgIHNlbGVjdEhhc1BheW1lbnRNZXRob2QsXG4gICAgKFxuICAgICAgaXNDYXJ0RW1wdHksXG4gICAgICBoYXNCaWxsaW5nQWRkcmVzcyxcbiAgICAgIGhhc1NoaXBwaW5nQWRkcmVzcyxcbiAgICAgIGhhc1NoaXBwaW5nTWV0aG9kLFxuICAgICAgaGFzUGF5bWVudE1ldGhvZFxuICAgICkgPT4gIWlzQ2FydEVtcHR5XG4gICAgICAmJiBoYXNCaWxsaW5nQWRkcmVzc1xuICAgICAgJiYgaGFzU2hpcHBpbmdBZGRyZXNzXG4gICAgICAmJiBoYXNTaGlwcGluZ01ldGhvZFxuICAgICAgJiYgaGFzUGF5bWVudE1ldGhvZFxuICApXG5cblx0cmV0dXJuIHtcblx0XHRzZWxlY3RDYXJ0U3RhdGUsXG4gICAgc2VsZWN0Q2FydFZhbHVlLFxuXG4gICAgc2VsZWN0Q2FydFJlc29sdmVkLFxuXG4gICAgc2VsZWN0Q2FydExvYWRpbmdPYmplY3QsXG4gICAgc2VsZWN0Q2FydEZlYXR1cmVMb2FkaW5nLFxuICAgIHNlbGVjdENhcnRGZWF0dXJlUmVzb2x2aW5nLFxuICAgIHNlbGVjdENhcnRGZWF0dXJlTXV0YXRpbmcsXG4gICAgc2VsZWN0Q2FydExvYWRpbmcsXG4gICAgc2VsZWN0Q2FydFJlc29sdmluZyxcbiAgICBzZWxlY3RDYXJ0TXV0YXRpbmcsXG4gICAgc2VsZWN0QmlsbGluZ0FkZHJlc3NMb2FkaW5nLFxuICAgIHNlbGVjdEJpbGxpbmdBZGRyZXNzUmVzb2x2aW5nLFxuICAgIHNlbGVjdEJpbGxpbmdBZGRyZXNzTXV0YXRpbmcsXG4gICAgc2VsZWN0U2hpcHBpbmdBZGRyZXNzTG9hZGluZyxcbiAgICBzZWxlY3RTaGlwcGluZ0FkZHJlc3NSZXNvbHZpbmcsXG4gICAgc2VsZWN0U2hpcHBpbmdBZGRyZXNzTXV0YXRpbmcsXG4gICAgc2VsZWN0U2hpcHBpbmdJbmZvcm1hdGlvbkxvYWRpbmcsXG4gICAgc2VsZWN0U2hpcHBpbmdJbmZvcm1hdGlvblJlc29sdmluZyxcbiAgICBzZWxlY3RTaGlwcGluZ0luZm9ybWF0aW9uTXV0YXRpbmcsXG4gICAgc2VsZWN0U2hpcHBpbmdNZXRob2RzTG9hZGluZyxcbiAgICBzZWxlY3RTaGlwcGluZ01ldGhvZHNSZXNvbHZpbmcsXG4gICAgc2VsZWN0UGF5bWVudExvYWRpbmcsXG4gICAgc2VsZWN0UGF5bWVudFJlc29sdmluZyxcbiAgICBzZWxlY3RQYXltZW50TXV0YXRpbmcsXG4gICAgc2VsZWN0UGF5bWVudE1ldGhvZHNMb2FkaW5nLFxuICAgIHNlbGVjdFBheW1lbnRNZXRob2RzUmVzb2x2aW5nLFxuICAgIHNlbGVjdENvdXBvbkxvYWRpbmcsXG4gICAgc2VsZWN0Q291cG9uUmVzb2x2aW5nLFxuICAgIHNlbGVjdENvdXBvbk11dGF0aW5nLFxuXHRcdHNlbGVjdEl0ZW1Mb2FkaW5nLFxuXHRcdHNlbGVjdEl0ZW1BZGRpbmcsXG4gICAgc2VsZWN0SXRlbVJlc29sdmluZyxcblxuXHRcdHNlbGVjdENhcnRFcnJvcnNPYmplY3QsXG5cdFx0c2VsZWN0Q2FydEVycm9ycyxcblx0XHRzZWxlY3RCaWxsaW5nQWRkcmVzc0Vycm9ycyxcblx0XHRzZWxlY3RTaGlwcGluZ0FkZHJlc3NFcnJvcnMsXG5cdFx0c2VsZWN0U2hpcHBpbmdJbmZvcm1hdGlvbkVycm9ycyxcblx0XHRzZWxlY3RTaGlwcGluZ01ldGhvZHNFcnJvcnMsXG5cdFx0c2VsZWN0UGF5bWVudEVycm9ycyxcblx0XHRzZWxlY3RQYXltZW50TWV0aG9kc0Vycm9ycyxcbiAgICBzZWxlY3RJdGVtRXJyb3JzLFxuICAgIHNlbGVjdENvdXBvbkVycm9ycyxcblxuXHRcdHNlbGVjdENhcnRJZCxcblx0XHRzZWxlY3RDYXJ0U3VidG90YWwsXG5cdFx0c2VsZWN0Q2FydEdyYW5kVG90YWwsXG5cdFx0c2VsZWN0Q2FydFN1YnRvdGFsRXhjbHVkaW5nVGF4LFxuXHRcdHNlbGVjdENhcnRTdWJ0b3RhbEluY2x1ZGluZ1RheCxcblx0XHRzZWxlY3RDYXJ0U3VidG90YWxXaXRoRGlzY291bnRFeGNsdWRpbmdUYXgsXG5cdFx0c2VsZWN0Q2FydFN1YnRvdGFsV2l0aERpc2NvdW50SW5jbHVkaW5nVGF4LFxuXHRcdHNlbGVjdENhcnREaXNjb3VudFRvdGFscyxcblx0XHRzZWxlY3RDYXJ0VG90YWxUYXgsXG5cdFx0c2VsZWN0Q2FydFNoaXBwaW5nVG90YWwsXG5cdFx0c2VsZWN0Q2FydENvdXBvbnMsXG5cdFx0c2VsZWN0Q2FydEl0ZW1zLFxuXHRcdHNlbGVjdENhcnRIYXNPdXRPZlN0b2NrSXRlbXMsXG5cdFx0c2VsZWN0Q2FydEJpbGxpbmdBZGRyZXNzLFxuXHRcdHNlbGVjdENhcnRTaGlwcGluZ0FkZHJlc3MsXG5cdFx0c2VsZWN0Q2FydFBheW1lbnQsXG5cdFx0c2VsZWN0Q2FydFRvdGFscyxcblx0XHRzZWxlY3RDYXJ0U2hpcHBpbmdJbmZvcm1hdGlvbixcblx0XHRzZWxlY3RDYXJ0QXZhaWxhYmxlU2hpcHBpbmdNZXRob2RzLFxuICAgIHNlbGVjdENhcnRBdmFpbGFibGVQYXltZW50TWV0aG9kcyxcblxuXHRcdHNlbGVjdElzQ2FydEVtcHR5LFxuICAgIHNlbGVjdENhcnRJdGVtRGlzY291bnRlZFJvd1RvdGFsLFxuICAgIHNlbGVjdElzQmlsbGluZ1NhbWVBc1NoaXBwaW5nLFxuXG4gICAgc2VsZWN0SGFzQmlsbGluZ0FkZHJlc3MsXG4gICAgc2VsZWN0SGFzU2hpcHBpbmdBZGRyZXNzLFxuICAgIHNlbGVjdEhhc1NoaXBwaW5nTWV0aG9kLFxuICAgIHNlbGVjdEhhc1BheW1lbnRNZXRob2QsXG4gICAgc2VsZWN0Q2FuUGxhY2VPcmRlclxuXHR9XG59XG5cbmV4cG9ydCBjb25zdCBnZXRDYXJ0U2VsZWN0b3JzID0gKCgpID0+IHtcblx0bGV0IGNhY2hlO1xuXHRyZXR1cm4gPFxuICAgIFQgZXh0ZW5kcyBEYWZmQ2FydCA9IERhZmZDYXJ0LFxuXHRcdFYgZXh0ZW5kcyBEYWZmQ2FydE9yZGVyUmVzdWx0ID0gRGFmZkNhcnRPcmRlclJlc3VsdCxcblx0XHRVIGV4dGVuZHMgRGFmZlN0YXRlZnVsQ2FydEl0ZW0gPSBEYWZmU3RhdGVmdWxDYXJ0SXRlbVxuICA+KCk6IERhZmZDYXJ0U3RhdGVNZW1vaXplZFNlbGVjdG9yczxUPiA9PiBjYWNoZSA9IGNhY2hlXG5cdFx0PyBjYWNoZVxuXHRcdDogY3JlYXRlQ2FydFNlbGVjdG9yczxULCBWLCBVPigpO1xufSkoKTtcbiJdfQ==