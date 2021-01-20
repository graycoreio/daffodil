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
const createCartSelectors = (/**
 * @template T, V, U
 * @return {?}
 */
() => {
    /** @type {?} */
    const selectCartFeatureState = getDaffCartFeatureSelector().selectCartFeatureState;
    const { selectCartItemMutating } = getDaffCartItemEntitiesSelectors();
    /** @type {?} */
    const selectCartState = createSelector(selectCartFeatureState, (/**
     * @param {?} state
     * @return {?}
     */
    (state) => state.cart));
    /** @type {?} */
    const selectCartValue = createSelector(selectCartState, (/**
     * @param {?} state
     * @return {?}
     */
    (state) => state.cart));
    /** @type {?} */
    const selectCartResolved = createSelector(selectCartState, (/**
     * @param {?} state
     * @return {?}
     */
    (state) => state.resolved));
    /** @type {?} */
    const selectCartLoadingObject = createSelector(selectCartState, (/**
     * @param {?} state
     * @return {?}
     */
    state => state.loading));
    /** @type {?} */
    const selectCartLoading = createSelector(selectCartLoadingObject, (/**
     * @param {?} loadingObject
     * @return {?}
     */
    loadingObject => loadingObject[DaffCartOperationType.Cart] !== DaffLoadingState.Complete));
    /** @type {?} */
    const selectCartResolving = createSelector(selectCartLoadingObject, (/**
     * @param {?} loadingObject
     * @return {?}
     */
    loadingObject => loadingObject[DaffCartOperationType.Cart] === DaffLoadingState.Resolving));
    /** @type {?} */
    const selectCartMutating = createSelector(selectCartLoadingObject, (/**
     * @param {?} loadingObject
     * @return {?}
     */
    loadingObject => loadingObject[DaffCartOperationType.Cart] === DaffLoadingState.Mutating));
    /** @type {?} */
    const selectBillingAddressLoading = createSelector(selectCartLoadingObject, (/**
     * @param {?} loadingObject
     * @return {?}
     */
    loadingObject => loadingObject[DaffCartOperationType.BillingAddress] !== DaffLoadingState.Complete));
    /** @type {?} */
    const selectBillingAddressResolving = createSelector(selectCartLoadingObject, (/**
     * @param {?} loadingObject
     * @return {?}
     */
    loadingObject => loadingObject[DaffCartOperationType.BillingAddress] === DaffLoadingState.Resolving));
    /** @type {?} */
    const selectBillingAddressMutating = createSelector(selectCartLoadingObject, (/**
     * @param {?} loadingObject
     * @return {?}
     */
    loadingObject => loadingObject[DaffCartOperationType.BillingAddress] === DaffLoadingState.Mutating));
    /** @type {?} */
    const selectShippingAddressLoading = createSelector(selectCartLoadingObject, (/**
     * @param {?} loadingObject
     * @return {?}
     */
    loadingObject => loadingObject[DaffCartOperationType.ShippingAddress] !== DaffLoadingState.Complete));
    /** @type {?} */
    const selectShippingAddressResolving = createSelector(selectCartLoadingObject, (/**
     * @param {?} loadingObject
     * @return {?}
     */
    loadingObject => loadingObject[DaffCartOperationType.ShippingAddress] === DaffLoadingState.Resolving));
    /** @type {?} */
    const selectShippingAddressMutating = createSelector(selectCartLoadingObject, (/**
     * @param {?} loadingObject
     * @return {?}
     */
    loadingObject => loadingObject[DaffCartOperationType.ShippingAddress] === DaffLoadingState.Mutating));
    /** @type {?} */
    const selectShippingInformationLoading = createSelector(selectCartLoadingObject, (/**
     * @param {?} loadingObject
     * @return {?}
     */
    loadingObject => loadingObject[DaffCartOperationType.ShippingInformation] !== DaffLoadingState.Complete));
    /** @type {?} */
    const selectShippingInformationResolving = createSelector(selectCartLoadingObject, (/**
     * @param {?} loadingObject
     * @return {?}
     */
    loadingObject => loadingObject[DaffCartOperationType.ShippingInformation] === DaffLoadingState.Resolving));
    /** @type {?} */
    const selectShippingInformationMutating = createSelector(selectCartLoadingObject, (/**
     * @param {?} loadingObject
     * @return {?}
     */
    loadingObject => loadingObject[DaffCartOperationType.ShippingInformation] === DaffLoadingState.Mutating));
    /** @type {?} */
    const selectShippingMethodsLoading = createSelector(selectCartLoadingObject, (/**
     * @param {?} loadingObject
     * @return {?}
     */
    loadingObject => loadingObject[DaffCartOperationType.ShippingMethods] !== DaffLoadingState.Complete));
    /** @type {?} */
    const selectShippingMethodsResolving = createSelector(selectCartLoadingObject, (/**
     * @param {?} loadingObject
     * @return {?}
     */
    loadingObject => loadingObject[DaffCartOperationType.ShippingMethods] === DaffLoadingState.Resolving));
    /** @type {?} */
    const selectPaymentLoading = createSelector(selectCartLoadingObject, (/**
     * @param {?} loadingObject
     * @return {?}
     */
    loadingObject => loadingObject[DaffCartOperationType.Payment] !== DaffLoadingState.Complete));
    /** @type {?} */
    const selectPaymentResolving = createSelector(selectCartLoadingObject, (/**
     * @param {?} loadingObject
     * @return {?}
     */
    loadingObject => loadingObject[DaffCartOperationType.Payment] === DaffLoadingState.Resolving));
    /** @type {?} */
    const selectPaymentMutating = createSelector(selectCartLoadingObject, (/**
     * @param {?} loadingObject
     * @return {?}
     */
    loadingObject => loadingObject[DaffCartOperationType.Payment] === DaffLoadingState.Mutating));
    /** @type {?} */
    const selectPaymentMethodsLoading = createSelector(selectCartLoadingObject, (/**
     * @param {?} loadingObject
     * @return {?}
     */
    loadingObject => loadingObject[DaffCartOperationType.PaymentMethods] !== DaffLoadingState.Complete));
    /** @type {?} */
    const selectPaymentMethodsResolving = createSelector(selectCartLoadingObject, (/**
     * @param {?} loadingObject
     * @return {?}
     */
    loadingObject => loadingObject[DaffCartOperationType.PaymentMethods] === DaffLoadingState.Resolving));
    /** @type {?} */
    const selectItemLoading = createSelector(selectCartLoadingObject, (/**
     * @param {?} loadingObject
     * @return {?}
     */
    loadingObject => loadingObject[DaffCartOperationType.Item] !== DaffCartItemLoadingState.Complete));
    /** @type {?} */
    const selectItemAdding = createSelector(selectCartLoadingObject, (/**
     * @param {?} loadingObject
     * @return {?}
     */
    loadingObject => loadingObject[DaffCartOperationType.Item] === DaffCartItemLoadingState.Adding));
    /** @type {?} */
    const selectItemResolving = createSelector(selectCartLoadingObject, (/**
     * @param {?} loadingObject
     * @return {?}
     */
    loadingObject => loadingObject[DaffCartOperationType.Item] === DaffCartItemLoadingState.Resolving));
    /** @type {?} */
    const selectCouponLoading = createSelector(selectCartLoadingObject, (/**
     * @param {?} loadingObject
     * @return {?}
     */
    loadingObject => loadingObject[DaffCartOperationType.Coupon] !== DaffLoadingState.Complete));
    /** @type {?} */
    const selectCouponResolving = createSelector(selectCartLoadingObject, (/**
     * @param {?} loadingObject
     * @return {?}
     */
    loadingObject => loadingObject[DaffCartOperationType.Coupon] === DaffLoadingState.Resolving));
    /** @type {?} */
    const selectCouponMutating = createSelector(selectCartLoadingObject, (/**
     * @param {?} loadingObject
     * @return {?}
     */
    loadingObject => loadingObject[DaffCartOperationType.Coupon] === DaffLoadingState.Mutating));
    /** @type {?} */
    const selectCartFeatureLoading = createSelector(selectCartLoadingObject, (/**
     * @param {?} loadingObject
     * @return {?}
     */
    loadingObject => [
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
    selector => selector.projector(loadingObject))).reduce((/**
     * @param {?} acc
     * @param {?} loading
     * @return {?}
     */
    (acc, loading) => acc || loading), false)));
    /** @type {?} */
    const selectCartFeatureResolving = createSelector(selectCartLoadingObject, (/**
     * @param {?} loadingObject
     * @return {?}
     */
    loadingObject => [
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
    selector => selector.projector(loadingObject))).reduce((/**
     * @param {?} acc
     * @param {?} resolving
     * @return {?}
     */
    (acc, resolving) => acc || resolving), false)));
    /** @type {?} */
    const selectCartFeatureMutating = createSelector(selectCartLoadingObject, selectCartItemMutating, (/**
     * @param {?} loadingObject
     * @param {?} cartItemMutating
     * @return {?}
     */
    (loadingObject, cartItemMutating) => [
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
    selector => selector.projector(loadingObject))).reduce((/**
     * @param {?} acc
     * @param {?} mutating
     * @return {?}
     */
    (acc, mutating) => acc || mutating), false) || cartItemMutating));
    /** @type {?} */
    const selectCartErrorsObject = createSelector(selectCartState, (/**
     * @param {?} state
     * @return {?}
     */
    (state) => state.errors));
    /** @type {?} */
    const selectCartErrors = createSelector(selectCartErrorsObject, (/**
     * @param {?} state
     * @return {?}
     */
    (state) => state[DaffCartOperationType.Cart]));
    /** @type {?} */
    const selectBillingAddressErrors = createSelector(selectCartErrorsObject, (/**
     * @param {?} state
     * @return {?}
     */
    (state) => state[DaffCartOperationType.BillingAddress]));
    /** @type {?} */
    const selectShippingAddressErrors = createSelector(selectCartErrorsObject, (/**
     * @param {?} state
     * @return {?}
     */
    (state) => state[DaffCartOperationType.ShippingAddress]));
    /** @type {?} */
    const selectShippingInformationErrors = createSelector(selectCartErrorsObject, (/**
     * @param {?} state
     * @return {?}
     */
    (state) => state[DaffCartOperationType.ShippingInformation]));
    /** @type {?} */
    const selectShippingMethodsErrors = createSelector(selectCartErrorsObject, (/**
     * @param {?} state
     * @return {?}
     */
    (state) => state[DaffCartOperationType.ShippingMethods]));
    /** @type {?} */
    const selectPaymentErrors = createSelector(selectCartErrorsObject, (/**
     * @param {?} state
     * @return {?}
     */
    (state) => state[DaffCartOperationType.Payment]));
    /** @type {?} */
    const selectPaymentMethodsErrors = createSelector(selectCartErrorsObject, (/**
     * @param {?} state
     * @return {?}
     */
    (state) => state[DaffCartOperationType.PaymentMethods]));
    /** @type {?} */
    const selectItemErrors = createSelector(selectCartErrorsObject, (/**
     * @param {?} state
     * @return {?}
     */
    (state) => state[DaffCartOperationType.Item]));
    /** @type {?} */
    const selectCouponErrors = createSelector(selectCartErrorsObject, (/**
     * @param {?} state
     * @return {?}
     */
    (state) => state[DaffCartOperationType.Coupon]));
    /** @type {?} */
    const selectCartId = createSelector(selectCartValue, (/**
     * @param {?} state
     * @return {?}
     */
    (state) => state.id));
    /**
     * @deprecated use selectCartSubtotalExcludingTax selector instead.
     * @type {?}
     */
    const selectCartSubtotal = createSelector(selectCartValue, (/**
     * @param {?} state
     * @return {?}
     */
    (state) => {
        /** @type {?} */
        const subtotalObject = state.totals.find((/**
         * @param {?} total
         * @return {?}
         */
        total => total.name === DaffCartTotalTypeEnum.subtotalExcludingTax));
        return subtotalObject ? subtotalObject.value : null;
    }));
    /** @type {?} */
    const selectCartGrandTotal = createSelector(selectCartValue, (/**
     * @param {?} state
     * @return {?}
     */
    (state) => {
        /** @type {?} */
        const grandTotalObject = state.totals.find((/**
         * @param {?} total
         * @return {?}
         */
        total => total.name === DaffCartTotalTypeEnum.grandTotal));
        return grandTotalObject ? grandTotalObject.value : null;
    }));
    /** @type {?} */
    const selectCartSubtotalExcludingTax = createSelector(selectCartValue, (/**
     * @param {?} state
     * @return {?}
     */
    (state) => {
        /** @type {?} */
        const subtotalExcludingTaxObject = state.totals.find((/**
         * @param {?} total
         * @return {?}
         */
        total => total.name === DaffCartTotalTypeEnum.subtotalExcludingTax));
        return subtotalExcludingTaxObject ? subtotalExcludingTaxObject.value : null;
    }));
    /** @type {?} */
    const selectCartSubtotalIncludingTax = createSelector(selectCartValue, (/**
     * @param {?} state
     * @return {?}
     */
    (state) => {
        /** @type {?} */
        const subtotalIncludingTaxObject = state.totals.find((/**
         * @param {?} total
         * @return {?}
         */
        total => total.name === DaffCartTotalTypeEnum.subtotalIncludingTax));
        return subtotalIncludingTaxObject ? subtotalIncludingTaxObject.value : null;
    }));
    /** @type {?} */
    const selectCartSubtotalWithDiscountExcludingTax = createSelector(selectCartValue, (/**
     * @param {?} state
     * @return {?}
     */
    (state) => {
        /** @type {?} */
        const subtotalWithDiscountExcludingTaxObject = state.totals.find((/**
         * @param {?} total
         * @return {?}
         */
        total => total.name === DaffCartTotalTypeEnum.subtotalWithDiscountExcludingTax));
        return subtotalWithDiscountExcludingTaxObject ? subtotalWithDiscountExcludingTaxObject.value : null;
    }));
    /** @type {?} */
    const selectCartSubtotalWithDiscountIncludingTax = createSelector(selectCartValue, (/**
     * @param {?} state
     * @return {?}
     */
    (state) => {
        /** @type {?} */
        const subtotalWithDiscountIncludingTaxObject = state.totals.find((/**
         * @param {?} total
         * @return {?}
         */
        total => total.name === DaffCartTotalTypeEnum.subtotalWithDiscountIncludingTax));
        return subtotalWithDiscountIncludingTaxObject ? subtotalWithDiscountIncludingTaxObject.value : null;
    }));
    /** @type {?} */
    const selectCartTotalTax = createSelector(selectCartValue, (/**
     * @param {?} state
     * @return {?}
     */
    (state) => {
        /** @type {?} */
        const taxObject = state.totals.find((/**
         * @param {?} total
         * @return {?}
         */
        total => total.name === DaffCartTotalTypeEnum.tax));
        return taxObject ? taxObject.value : null;
    }));
    /** @type {?} */
    const selectCartDiscountTotals = createSelector(selectCartValue, (/**
     * @param {?} state
     * @return {?}
     */
    (state) => {
        /** @type {?} */
        const discounts = state.totals.filter((/**
         * @param {?} total
         * @return {?}
         */
        total => total.name === DaffCartTotalTypeEnum.discount));
        return discounts ? discounts : [];
    }));
    /** @type {?} */
    const selectCartShippingTotal = createSelector(selectCartValue, (/**
     * @param {?} state
     * @return {?}
     */
    (state) => {
        /** @type {?} */
        const shippingTotalObject = state.totals.find((/**
         * @param {?} total
         * @return {?}
         */
        total => total.name === DaffCartTotalTypeEnum.shipping));
        return shippingTotalObject ? shippingTotalObject.value : null;
    }));
    /** @type {?} */
    const selectCartCoupons = createSelector(selectCartValue, (/**
     * @param {?} state
     * @return {?}
     */
    (state) => state.coupons));
    /** @type {?} */
    const selectCartItems = createSelector(selectCartValue, (/**
     * @param {?} state
     * @return {?}
     */
    (state) => state.items));
    /** @type {?} */
    const selectCartHasOutOfStockItems = createSelector(selectCartValue, (/**
     * @param {?} state
     * @return {?}
     */
    (state) => state.items.reduce((/**
     * @param {?} acc
     * @param {?} item
     * @return {?}
     */
    (acc, item) => (acc || !item.in_stock)), false)));
    /** @type {?} */
    const selectCartBillingAddress = createSelector(selectCartValue, (/**
     * @param {?} state
     * @return {?}
     */
    (state) => state.billing_address));
    /** @type {?} */
    const selectCartShippingAddress = createSelector(selectCartValue, (/**
     * @param {?} state
     * @return {?}
     */
    (state) => state.shipping_address));
    /** @type {?} */
    const selectCartPayment = createSelector(selectCartValue, (/**
     * @param {?} state
     * @return {?}
     */
    (state) => state.payment));
    /** @type {?} */
    const selectCartTotals = createSelector(selectCartValue, (/**
     * @param {?} state
     * @return {?}
     */
    (state) => state.totals));
    /** @type {?} */
    const selectCartShippingInformation = createSelector(selectCartValue, (/**
     * @param {?} state
     * @return {?}
     */
    (state) => state.shipping_information));
    /** @type {?} */
    const selectCartAvailableShippingMethods = createSelector(selectCartValue, (/**
     * @param {?} state
     * @return {?}
     */
    (state) => state.available_shipping_methods));
    /** @type {?} */
    const selectCartAvailablePaymentMethods = createSelector(selectCartValue, (/**
     * @param {?} state
     * @return {?}
     */
    (state) => state.available_payment_methods));
    /** @type {?} */
    const selectIsCartEmpty = createSelector(selectCartValue, (/**
     * @param {?} cart
     * @return {?}
     */
    cart => !cart || !cart.items || cart.items.length === 0));
    /** @type {?} */
    const selectCartItemDiscountedRowTotal = createSelector(selectCartItems, (/**
     * @param {?} cartItems
     * @param {?} props
     * @return {?}
     */
    (cartItems, props) => {
        /** @type {?} */
        const cartItem = cartItems.find((/**
         * @param {?} item
         * @return {?}
         */
        item => item.item_id === props.id));
        return daffSubtract(cartItem.row_total, cartItem.total_discount);
    }));
    /** @type {?} */
    const selectIsBillingSameAsShipping = createSelector(selectCartShippingAddress, selectCartBillingAddress, (/**
     * @param {?} shippingAddress
     * @param {?} billingAddress
     * @return {?}
     */
    (shippingAddress, billingAddress) => daffComparePersonalAddresses(shippingAddress, billingAddress)));
    /** @type {?} */
    const selectHasBillingAddress = createSelector(selectCartBillingAddress, (/**
     * @param {?} billingAddress
     * @return {?}
     */
    billingAddress => !!billingAddress));
    /** @type {?} */
    const selectHasShippingAddress = createSelector(selectCartShippingAddress, (/**
     * @param {?} shippingAddress
     * @return {?}
     */
    shippingAddress => !!shippingAddress));
    /** @type {?} */
    const selectHasShippingMethod = createSelector(selectCartShippingInformation, (/**
     * @param {?} shippingMethod
     * @return {?}
     */
    shippingMethod => !!shippingMethod));
    /** @type {?} */
    const selectHasPaymentMethod = createSelector(selectCartPayment, (/**
     * @param {?} paymentMethod
     * @return {?}
     */
    paymentMethod => !!paymentMethod && paymentMethod.method !== ''));
    /** @type {?} */
    const selectCanPlaceOrder = createSelector(selectIsCartEmpty, selectHasBillingAddress, selectHasShippingAddress, selectHasShippingMethod, selectHasPaymentMethod, (/**
     * @param {?} isCartEmpty
     * @param {?} hasBillingAddress
     * @param {?} hasShippingAddress
     * @param {?} hasShippingMethod
     * @param {?} hasPaymentMethod
     * @return {?}
     */
    (isCartEmpty, hasBillingAddress, hasShippingAddress, hasShippingMethod, hasPaymentMethod) => !isCartEmpty
        && hasBillingAddress
        && hasShippingAddress
        && hasShippingMethod
        && hasPaymentMethod));
    return {
        selectCartState,
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
        selectCartErrorsObject,
        selectCartErrors,
        selectBillingAddressErrors,
        selectShippingAddressErrors,
        selectShippingInformationErrors,
        selectShippingMethodsErrors,
        selectPaymentErrors,
        selectPaymentMethodsErrors,
        selectItemErrors,
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
        selectCartHasOutOfStockItems,
        selectCartBillingAddress,
        selectCartShippingAddress,
        selectCartPayment,
        selectCartTotals,
        selectCartShippingInformation,
        selectCartAvailableShippingMethods,
        selectCartAvailablePaymentMethods,
        selectIsCartEmpty,
        selectCartItemDiscountedRowTotal,
        selectIsBillingSameAsShipping,
        selectHasBillingAddress,
        selectHasShippingAddress,
        selectHasShippingMethod,
        selectHasPaymentMethod,
        selectCanPlaceOrder
    };
});
const ɵ0 = createCartSelectors;
const ɵ1 = /**
 * @return {?}
 */
() => {
    /** @type {?} */
    let cache;
    return (/**
     * @template T, V, U
     * @return {?}
     */
    () => cache = cache
        ? cache
        : createCartSelectors());
};
/** @type {?} */
export const getCartSelectors = ((ɵ1))();
export { ɵ0, ɵ1 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FydC5zZWxlY3Rvci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkYWZmb2RpbC9jYXJ0L3N0YXRlLyIsInNvdXJjZXMiOlsic2VsZWN0b3JzL2NhcnQvY2FydC5zZWxlY3Rvci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUNMLGNBQWMsRUFJZixNQUFNLGFBQWEsQ0FBQztBQUVyQixPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDOUMsT0FBTyxFQUFFLGdCQUFnQixFQUFrQixNQUFNLHNCQUFzQixDQUFDO0FBQ3hFLE9BQU8sRUFBRSw0QkFBNEIsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQ25FLE9BQU8sRUFBZ0QscUJBQXFCLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUVyRyxPQUFPLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUN0RSxPQUFPLEVBQStDLHFCQUFxQixFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDL0csT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sMENBQTBDLENBQUM7QUFHcEYsT0FBTyxFQUFFLGdDQUFnQyxFQUFFLE1BQU0sb0RBQW9ELENBQUM7Ozs7O0FBRXRHLG9EQXVNQzs7O0lBcE1BLHlEQUFtRTs7SUFDbEUseURBQTZDOztJQUU3Qyw0REFBbUU7Ozs7O0lBS25FLGlFQUFzRjs7Ozs7O0lBS3RGLGtFQUE0RDs7Ozs7OztJQU01RCxvRUFBOEQ7Ozs7Ozs7SUFNOUQsbUVBQTZEOzs7Ozs7SUFLN0QsMkRBQXFEOzs7Ozs7O0lBTXJELDZEQUF1RDs7Ozs7OztJQU12RCw0REFBc0Q7Ozs7O0lBSXRELHFFQUErRDs7Ozs7O0lBSy9ELHVFQUFpRTs7Ozs7O0lBS2pFLHNFQUFnRTs7Ozs7SUFJaEUsc0VBQWdFOzs7Ozs7SUFLaEUsd0VBQWtFOzs7Ozs7SUFLbEUsdUVBQWlFOzs7OztJQUlqRSwwRUFBb0U7Ozs7OztJQUtwRSw0RUFBc0U7Ozs7OztJQUt0RSwyRUFBcUU7Ozs7O0lBSXJFLHNFQUFnRTs7Ozs7O0lBS2hFLHdFQUFrRTs7Ozs7SUFJbEUsOERBQXdEOzs7Ozs7SUFLeEQsZ0VBQTBEOzs7Ozs7SUFLMUQsK0RBQXlEOzs7OztJQUl6RCxxRUFBK0Q7Ozs7OztJQUsvRCx1RUFBaUU7Ozs7O0lBSWpFLDZEQUF1RDs7Ozs7O0lBS3ZELCtEQUF5RDs7Ozs7O0lBS3pELDhEQUF3RDs7Ozs7SUFJekQsMkRBQXFEOzs7OztJQUlwRCwwREFBb0Q7Ozs7OztJQUtwRCw2REFBdUQ7O0lBRXhELGdFQUFvRjs7SUFDcEYsMERBQTZEOztJQUM3RCxvRUFBdUU7O0lBQ3ZFLHFFQUF3RTs7SUFDeEUseUVBQTRFOztJQUM1RSxxRUFBd0U7O0lBQ3hFLDZEQUFnRTs7SUFDaEUsb0VBQXVFOztJQUN0RSw0REFBK0Q7O0lBQ2hFLDBEQUE2RDs7SUFFN0Qsc0RBQWdEOztJQUNoRCw0REFBcUU7O0lBQ3JFLDhEQUF1RTs7SUFDdkUsd0VBQWlGOztJQUNqRix3RUFBaUY7O0lBQ2pGLG9GQUE2Rjs7SUFDN0Ysb0ZBQTZGOztJQUM3Riw0REFBcUU7Ozs7O0lBSXJFLGtFQUFvRTs7SUFDcEUsaUVBQTBFOztJQUMxRSwyREFBMEQ7Ozs7O0lBSTFELHlEQUFzRDs7SUFDdEQsc0VBQWdFOztJQUNoRSxrRUFBeUU7O0lBQ3pFLG1FQUEyRTs7SUFDM0UsMkRBQTBEOztJQUMxRCwwREFBd0Q7O0lBQ3hELHVFQUFtRjs7SUFDbkYsNEVBQThGOztJQUM3RiwyRUFBNEY7O0lBRTVGLDJEQUFxRDs7SUFDckQsMEVBQW9GOzs7Ozs7SUFLckYsdUVBQWlFOztJQUVoRSxpRUFBMkQ7O0lBQzNELGtFQUE0RDs7SUFDNUQsaUVBQTJEOztJQUMzRCxnRUFBMEQ7O0lBQzFELDZEQUFvRjs7O01BR2hGLG1CQUFtQjs7OztBQUFHLEdBSVcsRUFBRTs7VUFDbEMsc0JBQXNCLEdBQUcsMEJBQTBCLEVBQVcsQ0FBQyxzQkFBc0I7VUFDckYsRUFBRSxzQkFBc0IsRUFBRSxHQUFHLGdDQUFnQyxFQUFXOztVQUN4RSxlQUFlLEdBQUcsY0FBYyxDQUNyQyxzQkFBc0I7Ozs7SUFDdEIsQ0FBQyxLQUFxQyxFQUFFLEVBQUUsQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUNyRDs7VUFDSyxlQUFlLEdBQUcsY0FBYyxDQUNyQyxlQUFlOzs7O0lBQ2YsQ0FBQyxLQUE4QixFQUFFLEVBQUUsQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUM3Qzs7VUFFSyxrQkFBa0IsR0FBRyxjQUFjLENBQ3pDLGVBQWU7Ozs7SUFDZixDQUFDLEtBQThCLEVBQUUsRUFBRSxDQUFDLEtBQUssQ0FBQyxRQUFRLEVBQ2pEOztVQUVLLHVCQUF1QixHQUFHLGNBQWMsQ0FDOUMsZUFBZTs7OztJQUNmLEtBQUssQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLE9BQU8sRUFDckI7O1VBQ0ksaUJBQWlCLEdBQUcsY0FBYyxDQUN2Qyx1QkFBdUI7Ozs7SUFDdkIsYUFBYSxDQUFDLEVBQUUsQ0FBQyxhQUFhLENBQUMscUJBQXFCLENBQUMsSUFBSSxDQUFDLEtBQUssZ0JBQWdCLENBQUMsUUFBUSxFQUN2Rjs7VUFDSyxtQkFBbUIsR0FBRyxjQUFjLENBQzFDLHVCQUF1Qjs7OztJQUN2QixhQUFhLENBQUMsRUFBRSxDQUFDLGFBQWEsQ0FBQyxxQkFBcUIsQ0FBQyxJQUFJLENBQUMsS0FBSyxnQkFBZ0IsQ0FBQyxTQUFTLEVBQ3hGOztVQUNLLGtCQUFrQixHQUFHLGNBQWMsQ0FDekMsdUJBQXVCOzs7O0lBQ3ZCLGFBQWEsQ0FBQyxFQUFFLENBQUMsYUFBYSxDQUFDLHFCQUFxQixDQUFDLElBQUksQ0FBQyxLQUFLLGdCQUFnQixDQUFDLFFBQVEsRUFDeEY7O1VBQ0ssMkJBQTJCLEdBQUcsY0FBYyxDQUNqRCx1QkFBdUI7Ozs7SUFDdkIsYUFBYSxDQUFDLEVBQUUsQ0FBQyxhQUFhLENBQUMscUJBQXFCLENBQUMsY0FBYyxDQUFDLEtBQUssZ0JBQWdCLENBQUMsUUFBUSxFQUNqRzs7VUFDSyw2QkFBNkIsR0FBRyxjQUFjLENBQ3BELHVCQUF1Qjs7OztJQUN2QixhQUFhLENBQUMsRUFBRSxDQUFDLGFBQWEsQ0FBQyxxQkFBcUIsQ0FBQyxjQUFjLENBQUMsS0FBSyxnQkFBZ0IsQ0FBQyxTQUFTLEVBQ2xHOztVQUNLLDRCQUE0QixHQUFHLGNBQWMsQ0FDbkQsdUJBQXVCOzs7O0lBQ3ZCLGFBQWEsQ0FBQyxFQUFFLENBQUMsYUFBYSxDQUFDLHFCQUFxQixDQUFDLGNBQWMsQ0FBQyxLQUFLLGdCQUFnQixDQUFDLFFBQVEsRUFDbEc7O1VBQ0ssNEJBQTRCLEdBQUcsY0FBYyxDQUNsRCx1QkFBdUI7Ozs7SUFDdkIsYUFBYSxDQUFDLEVBQUUsQ0FBQyxhQUFhLENBQUMscUJBQXFCLENBQUMsZUFBZSxDQUFDLEtBQUssZ0JBQWdCLENBQUMsUUFBUSxFQUNsRzs7VUFDSyw4QkFBOEIsR0FBRyxjQUFjLENBQ3JELHVCQUF1Qjs7OztJQUN2QixhQUFhLENBQUMsRUFBRSxDQUFDLGFBQWEsQ0FBQyxxQkFBcUIsQ0FBQyxlQUFlLENBQUMsS0FBSyxnQkFBZ0IsQ0FBQyxTQUFTLEVBQ25HOztVQUNLLDZCQUE2QixHQUFHLGNBQWMsQ0FDcEQsdUJBQXVCOzs7O0lBQ3ZCLGFBQWEsQ0FBQyxFQUFFLENBQUMsYUFBYSxDQUFDLHFCQUFxQixDQUFDLGVBQWUsQ0FBQyxLQUFLLGdCQUFnQixDQUFDLFFBQVEsRUFDbkc7O1VBQ0ssZ0NBQWdDLEdBQUcsY0FBYyxDQUN0RCx1QkFBdUI7Ozs7SUFDdkIsYUFBYSxDQUFDLEVBQUUsQ0FBQyxhQUFhLENBQUMscUJBQXFCLENBQUMsbUJBQW1CLENBQUMsS0FBSyxnQkFBZ0IsQ0FBQyxRQUFRLEVBQ3RHOztVQUNLLGtDQUFrQyxHQUFHLGNBQWMsQ0FDekQsdUJBQXVCOzs7O0lBQ3ZCLGFBQWEsQ0FBQyxFQUFFLENBQUMsYUFBYSxDQUFDLHFCQUFxQixDQUFDLG1CQUFtQixDQUFDLEtBQUssZ0JBQWdCLENBQUMsU0FBUyxFQUN2Rzs7VUFDSyxpQ0FBaUMsR0FBRyxjQUFjLENBQ3hELHVCQUF1Qjs7OztJQUN2QixhQUFhLENBQUMsRUFBRSxDQUFDLGFBQWEsQ0FBQyxxQkFBcUIsQ0FBQyxtQkFBbUIsQ0FBQyxLQUFLLGdCQUFnQixDQUFDLFFBQVEsRUFDdkc7O1VBQ0ssNEJBQTRCLEdBQUcsY0FBYyxDQUNsRCx1QkFBdUI7Ozs7SUFDdkIsYUFBYSxDQUFDLEVBQUUsQ0FBQyxhQUFhLENBQUMscUJBQXFCLENBQUMsZUFBZSxDQUFDLEtBQUssZ0JBQWdCLENBQUMsUUFBUSxFQUNsRzs7VUFDSyw4QkFBOEIsR0FBRyxjQUFjLENBQ3JELHVCQUF1Qjs7OztJQUN2QixhQUFhLENBQUMsRUFBRSxDQUFDLGFBQWEsQ0FBQyxxQkFBcUIsQ0FBQyxlQUFlLENBQUMsS0FBSyxnQkFBZ0IsQ0FBQyxTQUFTLEVBQ25HOztVQUNJLG9CQUFvQixHQUFHLGNBQWMsQ0FDMUMsdUJBQXVCOzs7O0lBQ3ZCLGFBQWEsQ0FBQyxFQUFFLENBQUMsYUFBYSxDQUFDLHFCQUFxQixDQUFDLE9BQU8sQ0FBQyxLQUFLLGdCQUFnQixDQUFDLFFBQVEsRUFDMUY7O1VBQ0ssc0JBQXNCLEdBQUcsY0FBYyxDQUM3Qyx1QkFBdUI7Ozs7SUFDdkIsYUFBYSxDQUFDLEVBQUUsQ0FBQyxhQUFhLENBQUMscUJBQXFCLENBQUMsT0FBTyxDQUFDLEtBQUssZ0JBQWdCLENBQUMsU0FBUyxFQUMzRjs7VUFDSyxxQkFBcUIsR0FBRyxjQUFjLENBQzVDLHVCQUF1Qjs7OztJQUN2QixhQUFhLENBQUMsRUFBRSxDQUFDLGFBQWEsQ0FBQyxxQkFBcUIsQ0FBQyxPQUFPLENBQUMsS0FBSyxnQkFBZ0IsQ0FBQyxRQUFRLEVBQzNGOztVQUNLLDJCQUEyQixHQUFHLGNBQWMsQ0FDakQsdUJBQXVCOzs7O0lBQ3ZCLGFBQWEsQ0FBQyxFQUFFLENBQUMsYUFBYSxDQUFDLHFCQUFxQixDQUFDLGNBQWMsQ0FBQyxLQUFLLGdCQUFnQixDQUFDLFFBQVEsRUFDakc7O1VBQ0ssNkJBQTZCLEdBQUcsY0FBYyxDQUNwRCx1QkFBdUI7Ozs7SUFDdkIsYUFBYSxDQUFDLEVBQUUsQ0FBQyxhQUFhLENBQUMscUJBQXFCLENBQUMsY0FBYyxDQUFDLEtBQUssZ0JBQWdCLENBQUMsU0FBUyxFQUNsRzs7VUFDSSxpQkFBaUIsR0FBRyxjQUFjLENBQ3ZDLHVCQUF1Qjs7OztJQUN2QixhQUFhLENBQUMsRUFBRSxDQUFDLGFBQWEsQ0FBQyxxQkFBcUIsQ0FBQyxJQUFJLENBQUMsS0FBSyx3QkFBd0IsQ0FBQyxRQUFRLEVBQy9GOztVQUNJLGdCQUFnQixHQUFHLGNBQWMsQ0FDdEMsdUJBQXVCOzs7O0lBQ3ZCLGFBQWEsQ0FBQyxFQUFFLENBQUMsYUFBYSxDQUFDLHFCQUFxQixDQUFDLElBQUksQ0FBQyxLQUFLLHdCQUF3QixDQUFDLE1BQU0sRUFDN0Y7O1VBQ0ssbUJBQW1CLEdBQUcsY0FBYyxDQUMxQyx1QkFBdUI7Ozs7SUFDdkIsYUFBYSxDQUFDLEVBQUUsQ0FBQyxhQUFhLENBQUMscUJBQXFCLENBQUMsSUFBSSxDQUFDLEtBQUssd0JBQXdCLENBQUMsU0FBUyxFQUNoRzs7VUFDSyxtQkFBbUIsR0FBRyxjQUFjLENBQzFDLHVCQUF1Qjs7OztJQUN2QixhQUFhLENBQUMsRUFBRSxDQUFDLGFBQWEsQ0FBQyxxQkFBcUIsQ0FBQyxNQUFNLENBQUMsS0FBSyxnQkFBZ0IsQ0FBQyxRQUFRLEVBQ3pGOztVQUNLLHFCQUFxQixHQUFHLGNBQWMsQ0FDNUMsdUJBQXVCOzs7O0lBQ3ZCLGFBQWEsQ0FBQyxFQUFFLENBQUMsYUFBYSxDQUFDLHFCQUFxQixDQUFDLE1BQU0sQ0FBQyxLQUFLLGdCQUFnQixDQUFDLFNBQVMsRUFDMUY7O1VBQ0ssb0JBQW9CLEdBQUcsY0FBYyxDQUMzQyx1QkFBdUI7Ozs7SUFDdkIsYUFBYSxDQUFDLEVBQUUsQ0FBQyxhQUFhLENBQUMscUJBQXFCLENBQUMsTUFBTSxDQUFDLEtBQUssZ0JBQWdCLENBQUMsUUFBUSxFQUN6Rjs7VUFDSyx3QkFBd0IsR0FBRyxjQUFjLENBQy9DLHVCQUF1Qjs7OztJQUN2QixhQUFhLENBQUMsRUFBRSxDQUFDO1FBQ2IsaUJBQWlCO1FBQ2pCLDJCQUEyQjtRQUMzQiw0QkFBNEI7UUFDNUIsZ0NBQWdDO1FBQ2hDLDRCQUE0QjtRQUM1QixvQkFBb0I7UUFDcEIsMkJBQTJCO1FBQzNCLG1CQUFtQjtRQUNuQixpQkFBaUI7S0FDbEIsQ0FBQyxHQUFHOzs7O0lBQUMsUUFBUSxDQUFDLEVBQUUsQ0FDZixRQUFRLENBQUMsU0FBUyxDQUFDLGFBQWEsQ0FBQyxFQUNsQyxDQUFDLE1BQU07Ozs7O0lBQUMsQ0FBQyxHQUFHLEVBQUUsT0FBTyxFQUFFLEVBQUUsQ0FBQyxHQUFHLElBQUksT0FBTyxHQUFFLEtBQUssQ0FBQyxFQUNsRDs7VUFDSywwQkFBMEIsR0FBRyxjQUFjLENBQ2pELHVCQUF1Qjs7OztJQUN2QixhQUFhLENBQUMsRUFBRSxDQUFDO1FBQ2IsbUJBQW1CO1FBQ25CLDZCQUE2QjtRQUM3Qiw4QkFBOEI7UUFDOUIsa0NBQWtDO1FBQ2xDLDhCQUE4QjtRQUM5QixzQkFBc0I7UUFDdEIsNkJBQTZCO1FBQzdCLHFCQUFxQjtRQUNyQixtQkFBbUI7S0FDcEIsQ0FBQyxHQUFHOzs7O0lBQUMsUUFBUSxDQUFDLEVBQUUsQ0FDZixRQUFRLENBQUMsU0FBUyxDQUFDLGFBQWEsQ0FBQyxFQUNsQyxDQUFDLE1BQU07Ozs7O0lBQUMsQ0FBQyxHQUFHLEVBQUUsU0FBUyxFQUFFLEVBQUUsQ0FBQyxHQUFHLElBQUksU0FBUyxHQUFFLEtBQUssQ0FBQyxFQUN0RDs7VUFDSyx5QkFBeUIsR0FBRyxjQUFjLENBQ2hELHVCQUF1QixFQUN2QixzQkFBc0I7Ozs7O0lBQ3RCLENBQUMsYUFBYSxFQUFFLGdCQUFnQixFQUFFLEVBQUUsQ0FBQztRQUNqQyxrQkFBa0I7UUFDbEIsNEJBQTRCO1FBQzVCLDZCQUE2QjtRQUM3QixpQ0FBaUM7UUFDakMscUJBQXFCO1FBQ3JCLG9CQUFvQjtRQUN2QixnQkFBZ0I7S0FDZCxDQUFDLEdBQUc7Ozs7SUFBQyxRQUFRLENBQUMsRUFBRSxDQUNmLFFBQVEsQ0FBQyxTQUFTLENBQUMsYUFBYSxDQUFDLEVBQ2xDLENBQUMsTUFBTTs7Ozs7SUFBQyxDQUFDLEdBQUcsRUFBRSxRQUFRLEVBQUUsRUFBRSxDQUFDLEdBQUcsSUFBSSxRQUFRLEdBQUUsS0FBSyxDQUFDLElBQUksZ0JBQWdCLEVBQ3pFOztVQUVLLHNCQUFzQixHQUFHLGNBQWMsQ0FDNUMsZUFBZTs7OztJQUNmLENBQUMsS0FBOEIsRUFBRSxFQUFFLENBQUMsS0FBSyxDQUFDLE1BQU0sRUFDaEQ7O1VBQ0ssZ0JBQWdCLEdBQUcsY0FBYyxDQUN0QyxzQkFBc0I7Ozs7SUFDdEIsQ0FBQyxLQUF3QyxFQUFFLEVBQUUsQ0FBQyxLQUFLLENBQUMscUJBQXFCLENBQUMsSUFBSSxDQUFDLEVBQy9FOztVQUNLLDBCQUEwQixHQUFHLGNBQWMsQ0FDaEQsc0JBQXNCOzs7O0lBQ3RCLENBQUMsS0FBd0MsRUFBRSxFQUFFLENBQUMsS0FBSyxDQUFDLHFCQUFxQixDQUFDLGNBQWMsQ0FBQyxFQUN6Rjs7VUFDSywyQkFBMkIsR0FBRyxjQUFjLENBQ2pELHNCQUFzQjs7OztJQUN0QixDQUFDLEtBQXdDLEVBQUUsRUFBRSxDQUFDLEtBQUssQ0FBQyxxQkFBcUIsQ0FBQyxlQUFlLENBQUMsRUFDMUY7O1VBQ0ssK0JBQStCLEdBQUcsY0FBYyxDQUNyRCxzQkFBc0I7Ozs7SUFDdEIsQ0FBQyxLQUF3QyxFQUFFLEVBQUUsQ0FBQyxLQUFLLENBQUMscUJBQXFCLENBQUMsbUJBQW1CLENBQUMsRUFDOUY7O1VBQ0ssMkJBQTJCLEdBQUcsY0FBYyxDQUNqRCxzQkFBc0I7Ozs7SUFDdEIsQ0FBQyxLQUF3QyxFQUFFLEVBQUUsQ0FBQyxLQUFLLENBQUMscUJBQXFCLENBQUMsZUFBZSxDQUFDLEVBQzFGOztVQUNLLG1CQUFtQixHQUFHLGNBQWMsQ0FDekMsc0JBQXNCOzs7O0lBQ3RCLENBQUMsS0FBd0MsRUFBRSxFQUFFLENBQUMsS0FBSyxDQUFDLHFCQUFxQixDQUFDLE9BQU8sQ0FBQyxFQUNsRjs7VUFDSywwQkFBMEIsR0FBRyxjQUFjLENBQ2hELHNCQUFzQjs7OztJQUN0QixDQUFDLEtBQXdDLEVBQUUsRUFBRSxDQUFDLEtBQUssQ0FBQyxxQkFBcUIsQ0FBQyxjQUFjLENBQUMsRUFDekY7O1VBQ0ssZ0JBQWdCLEdBQUcsY0FBYyxDQUN0QyxzQkFBc0I7Ozs7SUFDdEIsQ0FBQyxLQUF3QyxFQUFFLEVBQUUsQ0FBQyxLQUFLLENBQUMscUJBQXFCLENBQUMsSUFBSSxDQUFDLEVBQzlFOztVQUNLLGtCQUFrQixHQUFHLGNBQWMsQ0FDekMsc0JBQXNCOzs7O0lBQ3RCLENBQUMsS0FBd0MsRUFBRSxFQUFFLENBQUMsS0FBSyxDQUFDLHFCQUFxQixDQUFDLE1BQU0sQ0FBQyxFQUNoRjs7VUFFSSxZQUFZLEdBQUcsY0FBYyxDQUNsQyxlQUFlOzs7O0lBQ2YsQ0FBQyxLQUFzQyxFQUFFLEVBQUUsQ0FBQyxLQUFLLENBQUMsRUFBRSxFQUNwRDs7Ozs7VUFJSyxrQkFBa0IsR0FBRyxjQUFjLENBQ3hDLGVBQWU7Ozs7SUFDZixDQUFDLEtBQXNDLEVBQUUsRUFBRTs7Y0FDcEMsY0FBYyxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUMsSUFBSTs7OztRQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLElBQUksS0FBSyxxQkFBcUIsQ0FBQyxvQkFBb0IsRUFBQztRQUM1RyxPQUFPLGNBQWMsQ0FBQyxDQUFDLENBQUMsY0FBYyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDO0lBQ3JELENBQUMsRUFDRDs7VUFDSyxvQkFBb0IsR0FBRyxjQUFjLENBQzFDLGVBQWU7Ozs7SUFDZixDQUFDLEtBQXNDLEVBQUUsRUFBRTs7Y0FDcEMsZ0JBQWdCLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQyxJQUFJOzs7O1FBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsSUFBSSxLQUFLLHFCQUFxQixDQUFDLFVBQVUsRUFBQztRQUNwRyxPQUFPLGdCQUFnQixDQUFDLENBQUMsQ0FBQyxnQkFBZ0IsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQztJQUN6RCxDQUFDLEVBQ0Q7O1VBQ0ssOEJBQThCLEdBQUcsY0FBYyxDQUNwRCxlQUFlOzs7O0lBQ2YsQ0FBQyxLQUFzQyxFQUFFLEVBQUU7O2NBQ3BDLDBCQUEwQixHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUMsSUFBSTs7OztRQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLElBQUksS0FBSyxxQkFBcUIsQ0FBQyxvQkFBb0IsRUFBQztRQUN4SCxPQUFPLDBCQUEwQixDQUFDLENBQUMsQ0FBQywwQkFBMEIsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQztJQUM3RSxDQUFDLEVBQ0Q7O1VBQ0ssOEJBQThCLEdBQUcsY0FBYyxDQUNwRCxlQUFlOzs7O0lBQ2YsQ0FBQyxLQUFzQyxFQUFFLEVBQUU7O2NBQ3BDLDBCQUEwQixHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUMsSUFBSTs7OztRQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLElBQUksS0FBSyxxQkFBcUIsQ0FBQyxvQkFBb0IsRUFBQztRQUN4SCxPQUFPLDBCQUEwQixDQUFDLENBQUMsQ0FBQywwQkFBMEIsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQztJQUM3RSxDQUFDLEVBQ0Q7O1VBQ0ssMENBQTBDLEdBQUcsY0FBYyxDQUNoRSxlQUFlOzs7O0lBQ2YsQ0FBQyxLQUFzQyxFQUFFLEVBQUU7O2NBQ3BDLHNDQUFzQyxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUMsSUFBSTs7OztRQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLElBQUksS0FBSyxxQkFBcUIsQ0FBQyxnQ0FBZ0MsRUFBQztRQUNoSixPQUFPLHNDQUFzQyxDQUFDLENBQUMsQ0FBQyxzQ0FBc0MsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQztJQUNyRyxDQUFDLEVBQ0Q7O1VBQ0ssMENBQTBDLEdBQUcsY0FBYyxDQUNoRSxlQUFlOzs7O0lBQ2YsQ0FBQyxLQUFzQyxFQUFFLEVBQUU7O2NBQ3BDLHNDQUFzQyxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUMsSUFBSTs7OztRQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLElBQUksS0FBSyxxQkFBcUIsQ0FBQyxnQ0FBZ0MsRUFBQztRQUNoSixPQUFPLHNDQUFzQyxDQUFDLENBQUMsQ0FBQyxzQ0FBc0MsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQztJQUNyRyxDQUFDLEVBQ0Q7O1VBQ0ssa0JBQWtCLEdBQUcsY0FBYyxDQUN4QyxlQUFlOzs7O0lBQ2YsQ0FBQyxLQUFzQyxFQUFFLEVBQUU7O2NBQ3BDLFNBQVMsR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDLElBQUk7Ozs7UUFBQyxLQUFLLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxJQUFJLEtBQUsscUJBQXFCLENBQUMsR0FBRyxFQUFDO1FBQ3RGLE9BQU8sU0FBUyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUM7SUFDM0MsQ0FBQyxFQUNEOztVQUNLLHdCQUF3QixHQUFHLGNBQWMsQ0FDOUMsZUFBZTs7OztJQUNmLENBQUMsS0FBc0MsRUFBRSxFQUFFOztjQUNwQyxTQUFTLEdBQW9CLEtBQUssQ0FBQyxNQUFNLENBQUMsTUFBTTs7OztRQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLElBQUksS0FBSyxxQkFBcUIsQ0FBQyxRQUFRLEVBQUM7UUFDOUcsT0FBTyxTQUFTLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO0lBQ25DLENBQUMsRUFDRDs7VUFDSyx1QkFBdUIsR0FBRyxjQUFjLENBQzdDLGVBQWU7Ozs7SUFDZixDQUFDLEtBQXNDLEVBQUUsRUFBRTs7Y0FDcEMsbUJBQW1CLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQyxJQUFJOzs7O1FBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsSUFBSSxLQUFLLHFCQUFxQixDQUFDLFFBQVEsRUFBQztRQUNyRyxPQUFPLG1CQUFtQixDQUFDLENBQUMsQ0FBQyxtQkFBbUIsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQztJQUMvRCxDQUFDLEVBQ0Q7O1VBQ0ssaUJBQWlCLEdBQUcsY0FBYyxDQUN2QyxlQUFlOzs7O0lBQ2YsQ0FBQyxLQUFzQyxFQUFFLEVBQUUsQ0FBQyxLQUFLLENBQUMsT0FBTyxFQUN6RDs7VUFDSyxlQUFlLEdBQUcsY0FBYyxDQUNyQyxlQUFlOzs7O0lBQ2YsQ0FBQyxLQUFzQyxFQUFFLEVBQUUsQ0FBQyxLQUFLLENBQUMsS0FBSyxFQUN2RDs7VUFDSyw0QkFBNEIsR0FBRyxjQUFjLENBQ2xELGVBQWU7Ozs7SUFDZixDQUFDLEtBQXNDLEVBQUUsRUFBRSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsTUFBTTs7Ozs7SUFBQyxDQUFDLEdBQUcsRUFBRSxJQUFJLEVBQUUsRUFBRSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFFLEtBQUssQ0FBQyxFQUM3Rzs7VUFDSyx3QkFBd0IsR0FBRyxjQUFjLENBQzlDLGVBQWU7Ozs7SUFDZixDQUFDLEtBQXNDLEVBQUUsRUFBRSxDQUFDLEtBQUssQ0FBQyxlQUFlLEVBQ2pFOztVQUNLLHlCQUF5QixHQUFHLGNBQWMsQ0FDL0MsZUFBZTs7OztJQUNmLENBQUMsS0FBc0MsRUFBRSxFQUFFLENBQUMsS0FBSyxDQUFDLGdCQUFnQixFQUNsRTs7VUFDSyxpQkFBaUIsR0FBRyxjQUFjLENBQ3ZDLGVBQWU7Ozs7SUFDZixDQUFDLEtBQXNDLEVBQUUsRUFBRSxDQUFDLEtBQUssQ0FBQyxPQUFPLEVBQ3pEOztVQUNLLGdCQUFnQixHQUFHLGNBQWMsQ0FDdEMsZUFBZTs7OztJQUNmLENBQUMsS0FBc0MsRUFBRSxFQUFFLENBQUMsS0FBSyxDQUFDLE1BQU0sRUFDeEQ7O1VBQ0ssNkJBQTZCLEdBQUcsY0FBYyxDQUNuRCxlQUFlOzs7O0lBQ2YsQ0FBQyxLQUFzQyxFQUFFLEVBQUUsQ0FBQyxLQUFLLENBQUMsb0JBQW9CLEVBQ3RFOztVQUNLLGtDQUFrQyxHQUFHLGNBQWMsQ0FDeEQsZUFBZTs7OztJQUNmLENBQUMsS0FBc0MsRUFBRSxFQUFFLENBQUMsS0FBSyxDQUFDLDBCQUEwQixFQUM1RTs7VUFDSyxpQ0FBaUMsR0FBRyxjQUFjLENBQ3ZELGVBQWU7Ozs7SUFDZixDQUFDLEtBQXNDLEVBQUUsRUFBRSxDQUFDLEtBQUssQ0FBQyx5QkFBeUIsRUFDMUU7O1VBRUksaUJBQWlCLEdBQUcsY0FBYyxDQUN2QyxlQUFlOzs7O0lBQ2YsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEtBQUssQ0FBQyxFQUN0RDs7VUFDSSxnQ0FBZ0MsR0FBRyxjQUFjLENBQ3RELGVBQWU7Ozs7O0lBQ2YsQ0FBQyxTQUFpQyxFQUFFLEtBQUssRUFBRSxFQUFFOztjQUN0QyxRQUFRLEdBQUcsU0FBUyxDQUFDLElBQUk7Ozs7UUFBQyxJQUFJLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxPQUFPLEtBQUssS0FBSyxDQUFDLEVBQUUsRUFBQztRQUNsRSxPQUFPLFlBQVksQ0FBQyxRQUFRLENBQUMsU0FBUyxFQUFFLFFBQVEsQ0FBQyxjQUFjLENBQUMsQ0FBQztJQUNsRSxDQUFDLEVBQ0E7O1VBQ0ssNkJBQTZCLEdBQUcsY0FBYyxDQUNsRCx5QkFBeUIsRUFDekIsd0JBQXdCOzs7OztJQUN4QixDQUFDLGVBQWUsRUFBRSxjQUFjLEVBQUUsRUFBRSxDQUFDLDRCQUE0QixDQUFDLGVBQWUsRUFBRSxjQUFjLENBQUMsRUFDbkc7O1VBRUssdUJBQXVCLEdBQUcsY0FBYyxDQUM1Qyx3QkFBd0I7Ozs7SUFDeEIsY0FBYyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsY0FBYyxFQUNuQzs7VUFFSyx3QkFBd0IsR0FBRyxjQUFjLENBQzdDLHlCQUF5Qjs7OztJQUN6QixlQUFlLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxlQUFlLEVBQ3JDOztVQUVLLHVCQUF1QixHQUFHLGNBQWMsQ0FDNUMsNkJBQTZCOzs7O0lBQzdCLGNBQWMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLGNBQWMsRUFDbkM7O1VBRUssc0JBQXNCLEdBQUcsY0FBYyxDQUMzQyxpQkFBaUI7Ozs7SUFDakIsYUFBYSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsYUFBYSxJQUFJLGFBQWEsQ0FBQyxNQUFNLEtBQUssRUFBRSxFQUNoRTs7VUFFSyxtQkFBbUIsR0FBRyxjQUFjLENBQ3hDLGlCQUFpQixFQUNqQix1QkFBdUIsRUFDdkIsd0JBQXdCLEVBQ3hCLHVCQUF1QixFQUN2QixzQkFBc0I7Ozs7Ozs7O0lBQ3RCLENBQ0UsV0FBVyxFQUNYLGlCQUFpQixFQUNqQixrQkFBa0IsRUFDbEIsaUJBQWlCLEVBQ2pCLGdCQUFnQixFQUNoQixFQUFFLENBQUMsQ0FBQyxXQUFXO1dBQ1osaUJBQWlCO1dBQ2pCLGtCQUFrQjtXQUNsQixpQkFBaUI7V0FDakIsZ0JBQWdCLEVBQ3RCO0lBRUYsT0FBTztRQUNOLGVBQWU7UUFDYixlQUFlO1FBRWYsa0JBQWtCO1FBRWxCLHVCQUF1QjtRQUN2Qix3QkFBd0I7UUFDeEIsMEJBQTBCO1FBQzFCLHlCQUF5QjtRQUN6QixpQkFBaUI7UUFDakIsbUJBQW1CO1FBQ25CLGtCQUFrQjtRQUNsQiwyQkFBMkI7UUFDM0IsNkJBQTZCO1FBQzdCLDRCQUE0QjtRQUM1Qiw0QkFBNEI7UUFDNUIsOEJBQThCO1FBQzlCLDZCQUE2QjtRQUM3QixnQ0FBZ0M7UUFDaEMsa0NBQWtDO1FBQ2xDLGlDQUFpQztRQUNqQyw0QkFBNEI7UUFDNUIsOEJBQThCO1FBQzlCLG9CQUFvQjtRQUNwQixzQkFBc0I7UUFDdEIscUJBQXFCO1FBQ3JCLDJCQUEyQjtRQUMzQiw2QkFBNkI7UUFDN0IsbUJBQW1CO1FBQ25CLHFCQUFxQjtRQUNyQixvQkFBb0I7UUFDdEIsaUJBQWlCO1FBQ2pCLGdCQUFnQjtRQUNkLG1CQUFtQjtRQUVyQixzQkFBc0I7UUFDdEIsZ0JBQWdCO1FBQ2hCLDBCQUEwQjtRQUMxQiwyQkFBMkI7UUFDM0IsK0JBQStCO1FBQy9CLDJCQUEyQjtRQUMzQixtQkFBbUI7UUFDbkIsMEJBQTBCO1FBQ3hCLGdCQUFnQjtRQUNoQixrQkFBa0I7UUFFcEIsWUFBWTtRQUNaLGtCQUFrQjtRQUNsQixvQkFBb0I7UUFDcEIsOEJBQThCO1FBQzlCLDhCQUE4QjtRQUM5QiwwQ0FBMEM7UUFDMUMsMENBQTBDO1FBQzFDLHdCQUF3QjtRQUN4QixrQkFBa0I7UUFDbEIsdUJBQXVCO1FBQ3ZCLGlCQUFpQjtRQUNqQixlQUFlO1FBQ2YsNEJBQTRCO1FBQzVCLHdCQUF3QjtRQUN4Qix5QkFBeUI7UUFDekIsaUJBQWlCO1FBQ2pCLGdCQUFnQjtRQUNoQiw2QkFBNkI7UUFDN0Isa0NBQWtDO1FBQ2hDLGlDQUFpQztRQUVuQyxpQkFBaUI7UUFDZixnQ0FBZ0M7UUFDaEMsNkJBQTZCO1FBRTdCLHVCQUF1QjtRQUN2Qix3QkFBd0I7UUFDeEIsdUJBQXVCO1FBQ3ZCLHNCQUFzQjtRQUN0QixtQkFBbUI7S0FDckIsQ0FBQTtBQUNGLENBQUMsQ0FBQTs7Ozs7QUFFZ0MsR0FBRyxFQUFFOztRQUNqQyxLQUFLO0lBQ1Q7Ozs7SUFBTyxHQUlpQyxFQUFFLENBQUMsS0FBSyxHQUFHLEtBQUs7UUFDdkQsQ0FBQyxDQUFDLEtBQUs7UUFDUCxDQUFDLENBQUMsbUJBQW1CLEVBQVcsRUFBQztBQUNuQyxDQUFDOztBQVRELE1BQU0sT0FBTyxnQkFBZ0IsR0FBRyxNQVM5QixFQUFFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgY3JlYXRlU2VsZWN0b3IsXG4gIE1lbW9pemVkU2VsZWN0b3IsXG5cdE1lbW9pemVkU2VsZWN0b3JXaXRoUHJvcHMsXG4gIERlZmF1bHRQcm9qZWN0b3JGblxufSBmcm9tICdAbmdyeC9zdG9yZSc7XG5cbmltcG9ydCB7IGRhZmZTdWJ0cmFjdCB9IGZyb20gJ0BkYWZmb2RpbC9jb3JlJztcbmltcG9ydCB7IERhZmZMb2FkaW5nU3RhdGUsIERhZmZTdGF0ZUVycm9yIH0gZnJvbSAnQGRhZmZvZGlsL2NvcmUvc3RhdGUnO1xuaW1wb3J0IHsgZGFmZkNvbXBhcmVQZXJzb25hbEFkZHJlc3NlcyB9IGZyb20gJ0BkYWZmb2RpbC9nZW9ncmFwaHknO1xuaW1wb3J0IHsgRGFmZkNhcnQsIERhZmZDYXJ0VG90YWwsIERhZmZDYXJ0T3JkZXJSZXN1bHQsIERhZmZDYXJ0VG90YWxUeXBlRW51bSB9IGZyb20gJ0BkYWZmb2RpbC9jYXJ0JztcblxuaW1wb3J0IHsgZ2V0RGFmZkNhcnRGZWF0dXJlU2VsZWN0b3IgfSBmcm9tICcuLi9jYXJ0LWZlYXR1cmUuc2VsZWN0b3InO1xuaW1wb3J0IHsgRGFmZkNhcnRSZWR1Y2VyU3RhdGUsIERhZmZDYXJ0UmVkdWNlcnNTdGF0ZSwgRGFmZkNhcnRPcGVyYXRpb25UeXBlIH0gZnJvbSAnLi4vLi4vcmVkdWNlcnMvcHVibGljX2FwaSc7XG5pbXBvcnQgeyBEYWZmQ2FydEl0ZW1Mb2FkaW5nU3RhdGUgfSBmcm9tICcuLi8uLi9yZWR1Y2Vycy9sb2FkaW5nL2NhcnQtbG9hZGluZy50eXBlJztcbmltcG9ydCB7IERhZmZTdGF0ZWZ1bENhcnRJdGVtIH0gZnJvbSAnLi4vLi4vbW9kZWxzL3N0YXRlZnVsLWNhcnQtaXRlbSc7XG5pbXBvcnQgeyBEYWZmQ2FydFJlc29sdmVTdGF0ZSB9IGZyb20gJy4uLy4uL3JlZHVjZXJzL2NhcnQtcmVzb2x2ZS9jYXJ0LXJlc29sdmUtc3RhdGUuZW51bSc7XG5pbXBvcnQgeyBnZXREYWZmQ2FydEl0ZW1FbnRpdGllc1NlbGVjdG9ycyB9IGZyb20gJy4uL2NhcnQtaXRlbS1lbnRpdGllcy9jYXJ0LWl0ZW0tZW50aXRpZXMuc2VsZWN0b3JzJztcblxuZXhwb3J0IGludGVyZmFjZSBEYWZmQ2FydFN0YXRlTWVtb2l6ZWRTZWxlY3RvcnM8XG4gIFQgZXh0ZW5kcyBEYWZmQ2FydCA9IERhZmZDYXJ0XG4+IHtcblx0c2VsZWN0Q2FydFN0YXRlOiBNZW1vaXplZFNlbGVjdG9yPG9iamVjdCwgRGFmZkNhcnRSZWR1Y2VyU3RhdGU8VD4+O1xuICBzZWxlY3RDYXJ0VmFsdWU6IE1lbW9pemVkU2VsZWN0b3I8b2JqZWN0LCBUPjtcblxuICBzZWxlY3RDYXJ0UmVzb2x2ZWQ6IE1lbW9pemVkU2VsZWN0b3I8b2JqZWN0LCBEYWZmQ2FydFJlc29sdmVTdGF0ZT47XG5cbiAgLyoqXG4gICAqIFRoZSBvYmplY3QgdGhhdCBob2xkcyBhbGwgdGhlIGxvYWRpbmcgc3RhdGVzIGZvciBjYXJ0IG9wZXJhdGlvbnMuXG4gICAqL1xuICBzZWxlY3RDYXJ0TG9hZGluZ09iamVjdDogTWVtb2l6ZWRTZWxlY3RvcjxvYmplY3QsIERhZmZDYXJ0UmVkdWNlclN0YXRlPFQ+Wydsb2FkaW5nJ10+O1xuICAvKipcbiAgICogU2VsZWN0cyB3aGV0aGVyIHRoZXJlIGlzIGFueSBjYXJ0IG9wZXJhdGlvbiBpbiBwcm9ncmVzcy5cbiAgICogVGhpcyBpbmNsdWRlcyBvcGVyYXRpb25zIHNwZWNpZmljYWxseSBmb3IgY2FydCBzdWJmaWVsZHMuXG4gICAqL1xuICBzZWxlY3RDYXJ0RmVhdHVyZUxvYWRpbmc6IE1lbW9pemVkU2VsZWN0b3I8b2JqZWN0LCBib29sZWFuPjtcbiAgLyoqXG4gICAqIFNlbGVjdHMgd2hldGhlciB0aGVyZSBpcyBhbnkgY2FydCByZXNvbHZlIG9wZXJhdGlvbiBpbiBwcm9ncmVzcy5cbiAgICogVGhpcyBpbmNsdWRlcyBvcGVyYXRpb25zIGZvciBjYXJ0IHN1YmZpZWxkcy5cbiAgICogVGhpcyBwZXJ0YWlucyBvbmx5IHRvIHJlcXVlc3RzIHRoYXQgZG8gbm90IG11dGF0ZSBkYXRhIHN1Y2ggYXMgXCJsb2FkXCIgb3IgXCJsaXN0XCIuXG4gICAqL1xuICBzZWxlY3RDYXJ0RmVhdHVyZVJlc29sdmluZzogTWVtb2l6ZWRTZWxlY3RvcjxvYmplY3QsIGJvb2xlYW4+O1xuICAvKipcbiAgICogU2VsZWN0cyB3aGV0aGVyIHRoZXJlIGlzIGFueSBjYXJ0IG11dGF0ZSBvcGVyYXRpb24gaW4gcHJvZ3Jlc3MuXG4gICAqIFRoaXMgaW5jbHVkZXMgb3BlcmF0aW9ucyBmb3IgY2FydCBzdWJmaWVsZHMuXG4gICAqIFRoaXMgcGVydGFpbnMgb25seSB0byByZXF1ZXN0cyB0aGF0IG11dGF0ZSBkYXRhIHN1Y2ggYXMgXCJ1cGRhdGVcIi5cbiAgICovXG4gIHNlbGVjdENhcnRGZWF0dXJlTXV0YXRpbmc6IE1lbW9pemVkU2VsZWN0b3I8b2JqZWN0LCBib29sZWFuPjtcbiAgLyoqXG4gICAqIFNlbGVjdHMgd2hldGhlciB0aGVyZSBpcyBhIGNhcnQgb3BlcmF0aW9uIGluIHByb2dyZXNzLlxuICAgKiBUaGlzIGRvZXMgbm90IGluY2x1ZGUgb3BlcmF0aW9ucyBzcGVjaWZpY2FsbHkgZm9yIGNhcnQgc3ViZmllbGRzLlxuICAgKi9cbiAgc2VsZWN0Q2FydExvYWRpbmc6IE1lbW9pemVkU2VsZWN0b3I8b2JqZWN0LCBib29sZWFuPjtcbiAgLyoqXG4gICAqIFNlbGVjdHMgd2hldGhlciB0aGVyZSBpcyBhIGNhcnQgcmVzb2x2ZSBvcGVyYXRpb24gaW4gcHJvZ3Jlc3MuXG4gICAqIFRoaXMgZG9lcyBub3QgaW5jbHVkZSBvcGVyYXRpb25zIHNwZWNpZmljYWxseSBmb3IgY2FydCBzdWJmaWVsZHMuXG4gICAqIFRoaXMgcGVydGFpbnMgb25seSB0byByZXF1ZXN0cyB0aGF0IGRvIG5vdCBtdXRhdGUgZGF0YSBzdWNoIGFzIFwibG9hZFwiIG9yIFwibGlzdFwiLlxuICAgKi9cbiAgc2VsZWN0Q2FydFJlc29sdmluZzogTWVtb2l6ZWRTZWxlY3RvcjxvYmplY3QsIGJvb2xlYW4+O1xuICAvKipcbiAgICogU2VsZWN0cyB3aGV0aGVyIHRoZXJlIGlzIGEgY2FydCBtdXRhdGUgb3BlcmF0aW9uIGluIHByb2dyZXNzLlxuICAgKiBUaGlzIGRvZXMgbm90IGluY2x1ZGUgb3BlcmF0aW9ucyBzcGVjaWZpY2FsbHkgZm9yIGNhcnQgc3ViZmllbGRzLlxuICAgKiBUaGlzIHBlcnRhaW5zIG9ubHkgdG8gcmVxdWVzdHMgdGhhdCBtdXRhdGUgZGF0YSBzdWNoIGFzIFwidXBkYXRlXCIuXG4gICAqL1xuICBzZWxlY3RDYXJ0TXV0YXRpbmc6IE1lbW9pemVkU2VsZWN0b3I8b2JqZWN0LCBib29sZWFuPjtcbiAgLyoqXG4gICAqIFNlbGVjdHMgd2hldGhlciB0aGVyZSBpcyBhIGNhcnQgYmlsbGluZyBhZGRyZXNzIG9wZXJhdGlvbiBpbiBwcm9ncmVzcy5cbiAgICovXG4gIHNlbGVjdEJpbGxpbmdBZGRyZXNzTG9hZGluZzogTWVtb2l6ZWRTZWxlY3RvcjxvYmplY3QsIGJvb2xlYW4+O1xuICAvKipcbiAgICogU2VsZWN0cyB3aGV0aGVyIHRoZXJlIGlzIGEgY2FydCBiaWxsaW5nIGFkZHJlc3MgcmVzb2x2ZSBvcGVyYXRpb24gaW4gcHJvZ3Jlc3MuXG4gICAqIFRoaXMgcGVydGFpbnMgb25seSB0byByZXF1ZXN0cyB0aGF0IGRvIG5vdCBtdXRhdGUgZGF0YSBzdWNoIGFzIFwibG9hZFwiIG9yIFwibGlzdFwiLlxuICAgKi9cbiAgc2VsZWN0QmlsbGluZ0FkZHJlc3NSZXNvbHZpbmc6IE1lbW9pemVkU2VsZWN0b3I8b2JqZWN0LCBib29sZWFuPjtcbiAgLyoqXG4gICAqIFNlbGVjdHMgd2hldGhlciB0aGVyZSBpcyBhIGNhcnQgYmlsbGluZyBhZGRyZXNzIG11dGF0ZSBvcGVyYXRpb24gaW4gcHJvZ3Jlc3MuXG4gICAqIFRoaXMgcGVydGFpbnMgb25seSB0byByZXF1ZXN0cyB0aGF0IG11dGF0ZSBkYXRhIHN1Y2ggYXMgXCJ1cGRhdGVcIi5cbiAgICovXG4gIHNlbGVjdEJpbGxpbmdBZGRyZXNzTXV0YXRpbmc6IE1lbW9pemVkU2VsZWN0b3I8b2JqZWN0LCBib29sZWFuPjtcbiAgLyoqXG4gICAqIFNlbGVjdHMgd2hldGhlciB0aGVyZSBpcyBhIGNhcnQgc2hpcHBpbmcgYWRkcmVzcyBvcGVyYXRpb24gaW4gcHJvZ3Jlc3MuXG4gICAqL1xuICBzZWxlY3RTaGlwcGluZ0FkZHJlc3NMb2FkaW5nOiBNZW1vaXplZFNlbGVjdG9yPG9iamVjdCwgYm9vbGVhbj47XG4gIC8qKlxuICAgKiBTZWxlY3RzIHdoZXRoZXIgdGhlcmUgaXMgYSBjYXJ0IHNoaXBwaW5nIGFkZHJlc3MgcmVzb2x2ZSBvcGVyYXRpb24gaW4gcHJvZ3Jlc3MuXG4gICAqIFRoaXMgcGVydGFpbnMgb25seSB0byByZXF1ZXN0cyB0aGF0IGRvIG5vdCBtdXRhdGUgZGF0YSBzdWNoIGFzIFwibG9hZFwiIG9yIFwibGlzdFwiLlxuICAgKi9cbiAgc2VsZWN0U2hpcHBpbmdBZGRyZXNzUmVzb2x2aW5nOiBNZW1vaXplZFNlbGVjdG9yPG9iamVjdCwgYm9vbGVhbj47XG4gIC8qKlxuICAgKiBTZWxlY3RzIHdoZXRoZXIgdGhlcmUgaXMgYSBjYXJ0IHNoaXBwaW5nIGFkZHJlc3MgbXV0YXRlIG9wZXJhdGlvbiBpbiBwcm9ncmVzcy5cbiAgICogVGhpcyBwZXJ0YWlucyBvbmx5IHRvIHJlcXVlc3RzIHRoYXQgbXV0YXRlIGRhdGEgc3VjaCBhcyBcInVwZGF0ZVwiLlxuICAgKi9cbiAgc2VsZWN0U2hpcHBpbmdBZGRyZXNzTXV0YXRpbmc6IE1lbW9pemVkU2VsZWN0b3I8b2JqZWN0LCBib29sZWFuPjtcbiAgLyoqXG4gICAqIFNlbGVjdHMgd2hldGhlciB0aGVyZSBpcyBhIGNhcnQgc2hpcHBpbmcgaW5mb3JtYXRpb24gb3BlcmF0aW9uIGluIHByb2dyZXNzLlxuICAgKi9cbiAgc2VsZWN0U2hpcHBpbmdJbmZvcm1hdGlvbkxvYWRpbmc6IE1lbW9pemVkU2VsZWN0b3I8b2JqZWN0LCBib29sZWFuPjtcbiAgLyoqXG4gICAqIFNlbGVjdHMgd2hldGhlciB0aGVyZSBpcyBhIGNhcnQgc2hpcHBpbmcgaW5mb3JtYXRpb24gcmVzb2x2ZSBvcGVyYXRpb24gaW4gcHJvZ3Jlc3MuXG4gICAqIFRoaXMgcGVydGFpbnMgb25seSB0byByZXF1ZXN0cyB0aGF0IGRvIG5vdCBtdXRhdGUgZGF0YSBzdWNoIGFzIFwibG9hZFwiIG9yIFwibGlzdFwiLlxuICAgKi9cbiAgc2VsZWN0U2hpcHBpbmdJbmZvcm1hdGlvblJlc29sdmluZzogTWVtb2l6ZWRTZWxlY3RvcjxvYmplY3QsIGJvb2xlYW4+O1xuICAvKipcbiAgICogU2VsZWN0cyB3aGV0aGVyIHRoZXJlIGlzIGEgY2FydCBzaGlwcGluZyBpbmZvcm1hdGlvbiBtdXRhdGUgb3BlcmF0aW9uIGluIHByb2dyZXNzLlxuICAgKiBUaGlzIHBlcnRhaW5zIG9ubHkgdG8gcmVxdWVzdHMgdGhhdCBtdXRhdGUgZGF0YSBzdWNoIGFzIFwidXBkYXRlXCIuXG4gICAqL1xuICBzZWxlY3RTaGlwcGluZ0luZm9ybWF0aW9uTXV0YXRpbmc6IE1lbW9pemVkU2VsZWN0b3I8b2JqZWN0LCBib29sZWFuPjtcbiAgLyoqXG4gICAqIFNlbGVjdHMgd2hldGhlciB0aGVyZSBpcyBhIGNhcnQgc2hpcHBpbmcgbWV0aG9kcyBvcGVyYXRpb24gaW4gcHJvZ3Jlc3MuXG4gICAqL1xuICBzZWxlY3RTaGlwcGluZ01ldGhvZHNMb2FkaW5nOiBNZW1vaXplZFNlbGVjdG9yPG9iamVjdCwgYm9vbGVhbj47XG4gIC8qKlxuICAgKiBTZWxlY3RzIHdoZXRoZXIgdGhlcmUgaXMgYSBjYXJ0IHNoaXBwaW5nIG1ldGhvZHMgcmVzb2x2ZSBvcGVyYXRpb24gaW4gcHJvZ3Jlc3MuXG4gICAqIFRoaXMgcGVydGFpbnMgb25seSB0byByZXF1ZXN0cyB0aGF0IGRvIG5vdCBtdXRhdGUgZGF0YSBzdWNoIGFzIFwibG9hZFwiIG9yIFwibGlzdFwiLlxuICAgKi9cbiAgc2VsZWN0U2hpcHBpbmdNZXRob2RzUmVzb2x2aW5nOiBNZW1vaXplZFNlbGVjdG9yPG9iamVjdCwgYm9vbGVhbj47XG4gIC8qKlxuICAgKiBTZWxlY3RzIHdoZXRoZXIgdGhlcmUgaXMgYSBjYXJ0IHBheW1lbnQgb3BlcmF0aW9uIGluIHByb2dyZXNzLlxuICAgKi9cbiAgc2VsZWN0UGF5bWVudExvYWRpbmc6IE1lbW9pemVkU2VsZWN0b3I8b2JqZWN0LCBib29sZWFuPjtcbiAgLyoqXG4gICAqIFNlbGVjdHMgd2hldGhlciB0aGVyZSBpcyBhIGNhcnQgcGF5bWVudCByZXNvbHZlIG9wZXJhdGlvbiBpbiBwcm9ncmVzcy5cbiAgICogVGhpcyBwZXJ0YWlucyBvbmx5IHRvIHJlcXVlc3RzIHRoYXQgZG8gbm90IG11dGF0ZSBkYXRhIHN1Y2ggYXMgXCJsb2FkXCIgb3IgXCJsaXN0XCIuXG4gICAqL1xuICBzZWxlY3RQYXltZW50UmVzb2x2aW5nOiBNZW1vaXplZFNlbGVjdG9yPG9iamVjdCwgYm9vbGVhbj47XG4gIC8qKlxuICAgKiBTZWxlY3RzIHdoZXRoZXIgdGhlcmUgaXMgYSBjYXJ0IHBheW1lbnQgbXV0YXRlIG9wZXJhdGlvbiBpbiBwcm9ncmVzcy5cbiAgICogVGhpcyBwZXJ0YWlucyBvbmx5IHRvIHJlcXVlc3RzIHRoYXQgbXV0YXRlIGRhdGEgc3VjaCBhcyBcInVwZGF0ZVwiLlxuICAgKi9cbiAgc2VsZWN0UGF5bWVudE11dGF0aW5nOiBNZW1vaXplZFNlbGVjdG9yPG9iamVjdCwgYm9vbGVhbj47XG4gIC8qKlxuICAgKiBTZWxlY3RzIHdoZXRoZXIgdGhlcmUgaXMgYSBjYXJ0IHBheW1lbnQgbWV0aG9kcyBvcGVyYXRpb24gaW4gcHJvZ3Jlc3MuXG4gICAqL1xuICBzZWxlY3RQYXltZW50TWV0aG9kc0xvYWRpbmc6IE1lbW9pemVkU2VsZWN0b3I8b2JqZWN0LCBib29sZWFuPjtcbiAgLyoqXG4gICAqIFNlbGVjdHMgd2hldGhlciB0aGVyZSBpcyBhIGNhcnQgcGF5bWVudCBtZXRob2RzIHJlc29sdmUgb3BlcmF0aW9uIGluIHByb2dyZXNzLlxuICAgKiBUaGlzIHBlcnRhaW5zIG9ubHkgdG8gcmVxdWVzdHMgdGhhdCBkbyBub3QgbXV0YXRlIGRhdGEgc3VjaCBhcyBcImxvYWRcIiBvciBcImxpc3RcIi5cbiAgICovXG4gIHNlbGVjdFBheW1lbnRNZXRob2RzUmVzb2x2aW5nOiBNZW1vaXplZFNlbGVjdG9yPG9iamVjdCwgYm9vbGVhbj47XG4gIC8qKlxuICAgKiBTZWxlY3RzIHdoZXRoZXIgdGhlcmUgaXMgYSBjYXJ0IGNvdXBvbiBvcGVyYXRpb24gaW4gcHJvZ3Jlc3MuXG4gICAqL1xuICBzZWxlY3RDb3Vwb25Mb2FkaW5nOiBNZW1vaXplZFNlbGVjdG9yPG9iamVjdCwgYm9vbGVhbj47XG4gIC8qKlxuICAgKiBTZWxlY3RzIHdoZXRoZXIgdGhlcmUgaXMgYSBjYXJ0IGNvdXBvbiByZXNvbHZlIG9wZXJhdGlvbiBpbiBwcm9ncmVzcy5cbiAgICogVGhpcyBwZXJ0YWlucyBvbmx5IHRvIHJlcXVlc3RzIHRoYXQgZG8gbm90IG11dGF0ZSBkYXRhIHN1Y2ggYXMgXCJsb2FkXCIgb3IgXCJsaXN0XCIuXG4gICAqL1xuICBzZWxlY3RDb3Vwb25SZXNvbHZpbmc6IE1lbW9pemVkU2VsZWN0b3I8b2JqZWN0LCBib29sZWFuPjtcbiAgLyoqXG4gICAqIFNlbGVjdHMgd2hldGhlciB0aGVyZSBpcyBhIGNhcnQgY291cG9uIG11dGF0ZSBvcGVyYXRpb24gaW4gcHJvZ3Jlc3MuXG4gICAqIFRoaXMgcGVydGFpbnMgb25seSB0byByZXF1ZXN0cyB0aGF0IG11dGF0ZSBkYXRhIHN1Y2ggYXMgXCJ1cGRhdGVcIi5cbiAgICovXG4gIHNlbGVjdENvdXBvbk11dGF0aW5nOiBNZW1vaXplZFNlbGVjdG9yPG9iamVjdCwgYm9vbGVhbj47XG4gIC8qKlxuICAgKiBTZWxlY3RzIHdoZXRoZXIgdGhlcmUgaXMgYSBjYXJ0IGl0ZW0gb3BlcmF0aW9uIGluIHByb2dyZXNzLlxuICAgKi9cblx0c2VsZWN0SXRlbUxvYWRpbmc6IE1lbW9pemVkU2VsZWN0b3I8b2JqZWN0LCBib29sZWFuPjtcblx0LyoqXG4gICAqIFNlbGVjdHMgd2hldGhlciB0aGVyZSBpcyBhIGNhcnQgaXRlbSBhZGQgb3BlcmF0aW9uIGluIHByb2dyZXNzLlxuICAgKi9cbiAgc2VsZWN0SXRlbUFkZGluZzogTWVtb2l6ZWRTZWxlY3RvcjxvYmplY3QsIGJvb2xlYW4+O1xuICAvKipcbiAgICogU2VsZWN0cyB3aGV0aGVyIHRoZXJlIGlzIGEgY2FydCBpdGVtIHJlc29sdmUgb3BlcmF0aW9uIGluIHByb2dyZXNzLlxuICAgKiBUaGlzIHBlcnRhaW5zIG9ubHkgdG8gcmVxdWVzdHMgdGhhdCBkbyBub3QgbXV0YXRlIGRhdGEgc3VjaCBhcyBcImxvYWRcIiBvciBcImxpc3RcIi5cbiAgICovXG4gIHNlbGVjdEl0ZW1SZXNvbHZpbmc6IE1lbW9pemVkU2VsZWN0b3I8b2JqZWN0LCBib29sZWFuPjtcblxuXHRzZWxlY3RDYXJ0RXJyb3JzT2JqZWN0OiBNZW1vaXplZFNlbGVjdG9yPG9iamVjdCwgRGFmZkNhcnRSZWR1Y2VyU3RhdGU8VD5bJ2Vycm9ycyddPjtcblx0c2VsZWN0Q2FydEVycm9yczogTWVtb2l6ZWRTZWxlY3RvcjxvYmplY3QsIERhZmZTdGF0ZUVycm9yW10+O1xuXHRzZWxlY3RCaWxsaW5nQWRkcmVzc0Vycm9yczogTWVtb2l6ZWRTZWxlY3RvcjxvYmplY3QsIERhZmZTdGF0ZUVycm9yW10+O1xuXHRzZWxlY3RTaGlwcGluZ0FkZHJlc3NFcnJvcnM6IE1lbW9pemVkU2VsZWN0b3I8b2JqZWN0LCBEYWZmU3RhdGVFcnJvcltdPjtcblx0c2VsZWN0U2hpcHBpbmdJbmZvcm1hdGlvbkVycm9yczogTWVtb2l6ZWRTZWxlY3RvcjxvYmplY3QsIERhZmZTdGF0ZUVycm9yW10+O1xuXHRzZWxlY3RTaGlwcGluZ01ldGhvZHNFcnJvcnM6IE1lbW9pemVkU2VsZWN0b3I8b2JqZWN0LCBEYWZmU3RhdGVFcnJvcltdPjtcblx0c2VsZWN0UGF5bWVudEVycm9yczogTWVtb2l6ZWRTZWxlY3RvcjxvYmplY3QsIERhZmZTdGF0ZUVycm9yW10+O1xuXHRzZWxlY3RQYXltZW50TWV0aG9kc0Vycm9yczogTWVtb2l6ZWRTZWxlY3RvcjxvYmplY3QsIERhZmZTdGF0ZUVycm9yW10+O1xuICBzZWxlY3RDb3Vwb25FcnJvcnM6IE1lbW9pemVkU2VsZWN0b3I8b2JqZWN0LCBEYWZmU3RhdGVFcnJvcltdPjtcblx0c2VsZWN0SXRlbUVycm9yczogTWVtb2l6ZWRTZWxlY3RvcjxvYmplY3QsIERhZmZTdGF0ZUVycm9yW10+O1xuXG5cdHNlbGVjdENhcnRJZDogTWVtb2l6ZWRTZWxlY3RvcjxvYmplY3QsIFRbJ2lkJ10+O1xuXHRzZWxlY3RDYXJ0U3VidG90YWw6IE1lbW9pemVkU2VsZWN0b3I8b2JqZWN0LCBEYWZmQ2FydFRvdGFsWyd2YWx1ZSddPjtcblx0c2VsZWN0Q2FydEdyYW5kVG90YWw6IE1lbW9pemVkU2VsZWN0b3I8b2JqZWN0LCBEYWZmQ2FydFRvdGFsWyd2YWx1ZSddPjtcblx0c2VsZWN0Q2FydFN1YnRvdGFsRXhjbHVkaW5nVGF4OiBNZW1vaXplZFNlbGVjdG9yPG9iamVjdCwgRGFmZkNhcnRUb3RhbFsndmFsdWUnXT47XG5cdHNlbGVjdENhcnRTdWJ0b3RhbEluY2x1ZGluZ1RheDogTWVtb2l6ZWRTZWxlY3RvcjxvYmplY3QsIERhZmZDYXJ0VG90YWxbJ3ZhbHVlJ10+O1xuXHRzZWxlY3RDYXJ0U3VidG90YWxXaXRoRGlzY291bnRFeGNsdWRpbmdUYXg6IE1lbW9pemVkU2VsZWN0b3I8b2JqZWN0LCBEYWZmQ2FydFRvdGFsWyd2YWx1ZSddPjtcblx0c2VsZWN0Q2FydFN1YnRvdGFsV2l0aERpc2NvdW50SW5jbHVkaW5nVGF4OiBNZW1vaXplZFNlbGVjdG9yPG9iamVjdCwgRGFmZkNhcnRUb3RhbFsndmFsdWUnXT47XG5cdHNlbGVjdENhcnRUb3RhbFRheDogTWVtb2l6ZWRTZWxlY3RvcjxvYmplY3QsIERhZmZDYXJ0VG90YWxbJ3ZhbHVlJ10+O1xuXHQvKipcblx0ICogU2VsZWN0cyB0aGUgRGFmZkNhcnRUb3RhbHMgZm9yIGNhcnQgZGlzY291bnRzLiBUaGVzZSBhcmUgZGlzY291bnRzIGFzc29jaWF0ZWQgd2l0aCBjb3Vwb24gY29kZXMuXG5cdCAqL1xuXHRzZWxlY3RDYXJ0RGlzY291bnRUb3RhbHM6IE1lbW9pemVkU2VsZWN0b3I8b2JqZWN0LCBEYWZmQ2FydFRvdGFsW10+O1xuXHRzZWxlY3RDYXJ0U2hpcHBpbmdUb3RhbDogTWVtb2l6ZWRTZWxlY3RvcjxvYmplY3QsIERhZmZDYXJ0VG90YWxbJ3ZhbHVlJ10+O1xuXHRzZWxlY3RDYXJ0Q291cG9uczogTWVtb2l6ZWRTZWxlY3RvcjxvYmplY3QsIFRbJ2NvdXBvbnMnXT47XG5cdC8qKlxuXHQgKiBAZGVwcmVjYXRlZCB1c2UgZ2V0RGFmZkNhcnRJdGVtRW50aXRpZXNTZWxlY3RvcnMoKS5zZWxlY3RBbGxDYXJ0SXRlbXMgaW5zdGVhZC5cblx0ICovXG5cdHNlbGVjdENhcnRJdGVtczogTWVtb2l6ZWRTZWxlY3RvcjxvYmplY3QsIFRbJ2l0ZW1zJ10+O1xuXHRzZWxlY3RDYXJ0SGFzT3V0T2ZTdG9ja0l0ZW1zOiBNZW1vaXplZFNlbGVjdG9yPG9iamVjdCwgYm9vbGVhbj47XG5cdHNlbGVjdENhcnRCaWxsaW5nQWRkcmVzczogTWVtb2l6ZWRTZWxlY3RvcjxvYmplY3QsIFRbJ2JpbGxpbmdfYWRkcmVzcyddPjtcblx0c2VsZWN0Q2FydFNoaXBwaW5nQWRkcmVzczogTWVtb2l6ZWRTZWxlY3RvcjxvYmplY3QsIFRbJ3NoaXBwaW5nX2FkZHJlc3MnXT47XG5cdHNlbGVjdENhcnRQYXltZW50OiBNZW1vaXplZFNlbGVjdG9yPG9iamVjdCwgVFsncGF5bWVudCddPjtcblx0c2VsZWN0Q2FydFRvdGFsczogTWVtb2l6ZWRTZWxlY3RvcjxvYmplY3QsIFRbJ3RvdGFscyddPjtcblx0c2VsZWN0Q2FydFNoaXBwaW5nSW5mb3JtYXRpb246IE1lbW9pemVkU2VsZWN0b3I8b2JqZWN0LCBUWydzaGlwcGluZ19pbmZvcm1hdGlvbiddPjtcblx0c2VsZWN0Q2FydEF2YWlsYWJsZVNoaXBwaW5nTWV0aG9kczogTWVtb2l6ZWRTZWxlY3RvcjxvYmplY3QsIFRbJ2F2YWlsYWJsZV9zaGlwcGluZ19tZXRob2RzJ10+O1xuICBzZWxlY3RDYXJ0QXZhaWxhYmxlUGF5bWVudE1ldGhvZHM6IE1lbW9pemVkU2VsZWN0b3I8b2JqZWN0LCBUWydhdmFpbGFibGVfcGF5bWVudF9tZXRob2RzJ10+O1xuXG4gIHNlbGVjdElzQ2FydEVtcHR5OiBNZW1vaXplZFNlbGVjdG9yPG9iamVjdCwgYm9vbGVhbj47XG4gIHNlbGVjdENhcnRJdGVtRGlzY291bnRlZFJvd1RvdGFsOiBNZW1vaXplZFNlbGVjdG9yV2l0aFByb3BzPG9iamVjdCwgb2JqZWN0LCBudW1iZXI+O1xuICAvKipcbiAgICogU2VsZWN0cyB3aGV0aGVyIHRoZSBjYXJ0J3Mgc2hpcHBpbmcgYWRkcmVzcyBlcXVhbHMgdGhlIGJpbGxpbmcgYWRkcmVzcy5cbiAgICogUmV0dXJucyBmYWxzZSBpZiBlaXRoZXIgYWRkcmVzcyBpcyBudWxsIG9yIHVuZGVmaW5lZC5cbiAgICovXG5cdHNlbGVjdElzQmlsbGluZ1NhbWVBc1NoaXBwaW5nOiBNZW1vaXplZFNlbGVjdG9yPG9iamVjdCwgYm9vbGVhbj47XG5cbiAgc2VsZWN0SGFzQmlsbGluZ0FkZHJlc3M6IE1lbW9pemVkU2VsZWN0b3I8b2JqZWN0LCBib29sZWFuPjtcbiAgc2VsZWN0SGFzU2hpcHBpbmdBZGRyZXNzOiBNZW1vaXplZFNlbGVjdG9yPG9iamVjdCwgYm9vbGVhbj47XG4gIHNlbGVjdEhhc1NoaXBwaW5nTWV0aG9kOiBNZW1vaXplZFNlbGVjdG9yPG9iamVjdCwgYm9vbGVhbj47XG4gIHNlbGVjdEhhc1BheW1lbnRNZXRob2Q6IE1lbW9pemVkU2VsZWN0b3I8b2JqZWN0LCBib29sZWFuPjtcbiAgc2VsZWN0Q2FuUGxhY2VPcmRlcjogTWVtb2l6ZWRTZWxlY3RvcjxvYmplY3QsIGJvb2xlYW4sIERlZmF1bHRQcm9qZWN0b3JGbjxib29sZWFuPj47XG59XG5cbmNvbnN0IGNyZWF0ZUNhcnRTZWxlY3RvcnMgPSA8XG4gIFQgZXh0ZW5kcyBEYWZmQ2FydCA9IERhZmZDYXJ0LFxuXHRWIGV4dGVuZHMgRGFmZkNhcnRPcmRlclJlc3VsdCA9IERhZmZDYXJ0T3JkZXJSZXN1bHQsXG5cdFUgZXh0ZW5kcyBEYWZmU3RhdGVmdWxDYXJ0SXRlbSA9IERhZmZTdGF0ZWZ1bENhcnRJdGVtXG4+KCk6IERhZmZDYXJ0U3RhdGVNZW1vaXplZFNlbGVjdG9yczxUPiA9PiB7XG5cdGNvbnN0IHNlbGVjdENhcnRGZWF0dXJlU3RhdGUgPSBnZXREYWZmQ2FydEZlYXR1cmVTZWxlY3RvcjxULCBWLCBVPigpLnNlbGVjdENhcnRGZWF0dXJlU3RhdGU7XG5cdGNvbnN0IHsgc2VsZWN0Q2FydEl0ZW1NdXRhdGluZyB9ID0gZ2V0RGFmZkNhcnRJdGVtRW50aXRpZXNTZWxlY3RvcnM8VCwgViwgVT4oKTtcblx0Y29uc3Qgc2VsZWN0Q2FydFN0YXRlID0gY3JlYXRlU2VsZWN0b3IoXG5cdFx0c2VsZWN0Q2FydEZlYXR1cmVTdGF0ZSxcblx0XHQoc3RhdGU6IERhZmZDYXJ0UmVkdWNlcnNTdGF0ZTxULCBWLCBVPikgPT4gc3RhdGUuY2FydFxuXHQpO1xuXHRjb25zdCBzZWxlY3RDYXJ0VmFsdWUgPSBjcmVhdGVTZWxlY3Rvcihcblx0XHRzZWxlY3RDYXJ0U3RhdGUsXG5cdFx0KHN0YXRlOiBEYWZmQ2FydFJlZHVjZXJTdGF0ZTxUPikgPT4gc3RhdGUuY2FydFxuICApO1xuXG4gIGNvbnN0IHNlbGVjdENhcnRSZXNvbHZlZCA9IGNyZWF0ZVNlbGVjdG9yKFxuXHRcdHNlbGVjdENhcnRTdGF0ZSxcblx0XHQoc3RhdGU6IERhZmZDYXJ0UmVkdWNlclN0YXRlPFQ+KSA9PiBzdGF0ZS5yZXNvbHZlZFxuICApO1xuXG4gIGNvbnN0IHNlbGVjdENhcnRMb2FkaW5nT2JqZWN0ID0gY3JlYXRlU2VsZWN0b3IoXG5cdFx0c2VsZWN0Q2FydFN0YXRlLFxuXHRcdHN0YXRlID0+IHN0YXRlLmxvYWRpbmdcbiAgKTtcblx0Y29uc3Qgc2VsZWN0Q2FydExvYWRpbmcgPSBjcmVhdGVTZWxlY3Rvcihcblx0XHRzZWxlY3RDYXJ0TG9hZGluZ09iamVjdCxcblx0XHRsb2FkaW5nT2JqZWN0ID0+IGxvYWRpbmdPYmplY3RbRGFmZkNhcnRPcGVyYXRpb25UeXBlLkNhcnRdICE9PSBEYWZmTG9hZGluZ1N0YXRlLkNvbXBsZXRlXG4gICk7XG4gIGNvbnN0IHNlbGVjdENhcnRSZXNvbHZpbmcgPSBjcmVhdGVTZWxlY3Rvcihcblx0XHRzZWxlY3RDYXJ0TG9hZGluZ09iamVjdCxcblx0XHRsb2FkaW5nT2JqZWN0ID0+IGxvYWRpbmdPYmplY3RbRGFmZkNhcnRPcGVyYXRpb25UeXBlLkNhcnRdID09PSBEYWZmTG9hZGluZ1N0YXRlLlJlc29sdmluZ1xuICApO1xuICBjb25zdCBzZWxlY3RDYXJ0TXV0YXRpbmcgPSBjcmVhdGVTZWxlY3Rvcihcblx0XHRzZWxlY3RDYXJ0TG9hZGluZ09iamVjdCxcblx0XHRsb2FkaW5nT2JqZWN0ID0+IGxvYWRpbmdPYmplY3RbRGFmZkNhcnRPcGVyYXRpb25UeXBlLkNhcnRdID09PSBEYWZmTG9hZGluZ1N0YXRlLk11dGF0aW5nXG5cdCk7XG5cdGNvbnN0IHNlbGVjdEJpbGxpbmdBZGRyZXNzTG9hZGluZyA9IGNyZWF0ZVNlbGVjdG9yKFxuXHRcdHNlbGVjdENhcnRMb2FkaW5nT2JqZWN0LFxuXHRcdGxvYWRpbmdPYmplY3QgPT4gbG9hZGluZ09iamVjdFtEYWZmQ2FydE9wZXJhdGlvblR5cGUuQmlsbGluZ0FkZHJlc3NdICE9PSBEYWZmTG9hZGluZ1N0YXRlLkNvbXBsZXRlXG4gICk7XG4gIGNvbnN0IHNlbGVjdEJpbGxpbmdBZGRyZXNzUmVzb2x2aW5nID0gY3JlYXRlU2VsZWN0b3IoXG5cdFx0c2VsZWN0Q2FydExvYWRpbmdPYmplY3QsXG5cdFx0bG9hZGluZ09iamVjdCA9PiBsb2FkaW5nT2JqZWN0W0RhZmZDYXJ0T3BlcmF0aW9uVHlwZS5CaWxsaW5nQWRkcmVzc10gPT09IERhZmZMb2FkaW5nU3RhdGUuUmVzb2x2aW5nXG4gICk7XG4gIGNvbnN0IHNlbGVjdEJpbGxpbmdBZGRyZXNzTXV0YXRpbmcgPSBjcmVhdGVTZWxlY3Rvcihcblx0XHRzZWxlY3RDYXJ0TG9hZGluZ09iamVjdCxcblx0XHRsb2FkaW5nT2JqZWN0ID0+IGxvYWRpbmdPYmplY3RbRGFmZkNhcnRPcGVyYXRpb25UeXBlLkJpbGxpbmdBZGRyZXNzXSA9PT0gRGFmZkxvYWRpbmdTdGF0ZS5NdXRhdGluZ1xuXHQpO1xuXHRjb25zdCBzZWxlY3RTaGlwcGluZ0FkZHJlc3NMb2FkaW5nID0gY3JlYXRlU2VsZWN0b3IoXG5cdFx0c2VsZWN0Q2FydExvYWRpbmdPYmplY3QsXG5cdFx0bG9hZGluZ09iamVjdCA9PiBsb2FkaW5nT2JqZWN0W0RhZmZDYXJ0T3BlcmF0aW9uVHlwZS5TaGlwcGluZ0FkZHJlc3NdICE9PSBEYWZmTG9hZGluZ1N0YXRlLkNvbXBsZXRlXG4gICk7XG4gIGNvbnN0IHNlbGVjdFNoaXBwaW5nQWRkcmVzc1Jlc29sdmluZyA9IGNyZWF0ZVNlbGVjdG9yKFxuXHRcdHNlbGVjdENhcnRMb2FkaW5nT2JqZWN0LFxuXHRcdGxvYWRpbmdPYmplY3QgPT4gbG9hZGluZ09iamVjdFtEYWZmQ2FydE9wZXJhdGlvblR5cGUuU2hpcHBpbmdBZGRyZXNzXSA9PT0gRGFmZkxvYWRpbmdTdGF0ZS5SZXNvbHZpbmdcbiAgKTtcbiAgY29uc3Qgc2VsZWN0U2hpcHBpbmdBZGRyZXNzTXV0YXRpbmcgPSBjcmVhdGVTZWxlY3Rvcihcblx0XHRzZWxlY3RDYXJ0TG9hZGluZ09iamVjdCxcblx0XHRsb2FkaW5nT2JqZWN0ID0+IGxvYWRpbmdPYmplY3RbRGFmZkNhcnRPcGVyYXRpb25UeXBlLlNoaXBwaW5nQWRkcmVzc10gPT09IERhZmZMb2FkaW5nU3RhdGUuTXV0YXRpbmdcblx0KTtcblx0Y29uc3Qgc2VsZWN0U2hpcHBpbmdJbmZvcm1hdGlvbkxvYWRpbmcgPSBjcmVhdGVTZWxlY3Rvcihcblx0XHRzZWxlY3RDYXJ0TG9hZGluZ09iamVjdCxcblx0XHRsb2FkaW5nT2JqZWN0ID0+IGxvYWRpbmdPYmplY3RbRGFmZkNhcnRPcGVyYXRpb25UeXBlLlNoaXBwaW5nSW5mb3JtYXRpb25dICE9PSBEYWZmTG9hZGluZ1N0YXRlLkNvbXBsZXRlXG4gICk7XG4gIGNvbnN0IHNlbGVjdFNoaXBwaW5nSW5mb3JtYXRpb25SZXNvbHZpbmcgPSBjcmVhdGVTZWxlY3Rvcihcblx0XHRzZWxlY3RDYXJ0TG9hZGluZ09iamVjdCxcblx0XHRsb2FkaW5nT2JqZWN0ID0+IGxvYWRpbmdPYmplY3RbRGFmZkNhcnRPcGVyYXRpb25UeXBlLlNoaXBwaW5nSW5mb3JtYXRpb25dID09PSBEYWZmTG9hZGluZ1N0YXRlLlJlc29sdmluZ1xuICApO1xuICBjb25zdCBzZWxlY3RTaGlwcGluZ0luZm9ybWF0aW9uTXV0YXRpbmcgPSBjcmVhdGVTZWxlY3Rvcihcblx0XHRzZWxlY3RDYXJ0TG9hZGluZ09iamVjdCxcblx0XHRsb2FkaW5nT2JqZWN0ID0+IGxvYWRpbmdPYmplY3RbRGFmZkNhcnRPcGVyYXRpb25UeXBlLlNoaXBwaW5nSW5mb3JtYXRpb25dID09PSBEYWZmTG9hZGluZ1N0YXRlLk11dGF0aW5nXG5cdCk7XG5cdGNvbnN0IHNlbGVjdFNoaXBwaW5nTWV0aG9kc0xvYWRpbmcgPSBjcmVhdGVTZWxlY3Rvcihcblx0XHRzZWxlY3RDYXJ0TG9hZGluZ09iamVjdCxcblx0XHRsb2FkaW5nT2JqZWN0ID0+IGxvYWRpbmdPYmplY3RbRGFmZkNhcnRPcGVyYXRpb25UeXBlLlNoaXBwaW5nTWV0aG9kc10gIT09IERhZmZMb2FkaW5nU3RhdGUuQ29tcGxldGVcbiAgKTtcbiAgY29uc3Qgc2VsZWN0U2hpcHBpbmdNZXRob2RzUmVzb2x2aW5nID0gY3JlYXRlU2VsZWN0b3IoXG5cdFx0c2VsZWN0Q2FydExvYWRpbmdPYmplY3QsXG5cdFx0bG9hZGluZ09iamVjdCA9PiBsb2FkaW5nT2JqZWN0W0RhZmZDYXJ0T3BlcmF0aW9uVHlwZS5TaGlwcGluZ01ldGhvZHNdID09PSBEYWZmTG9hZGluZ1N0YXRlLlJlc29sdmluZ1xuICApO1xuXHRjb25zdCBzZWxlY3RQYXltZW50TG9hZGluZyA9IGNyZWF0ZVNlbGVjdG9yKFxuXHRcdHNlbGVjdENhcnRMb2FkaW5nT2JqZWN0LFxuXHRcdGxvYWRpbmdPYmplY3QgPT4gbG9hZGluZ09iamVjdFtEYWZmQ2FydE9wZXJhdGlvblR5cGUuUGF5bWVudF0gIT09IERhZmZMb2FkaW5nU3RhdGUuQ29tcGxldGVcbiAgKTtcbiAgY29uc3Qgc2VsZWN0UGF5bWVudFJlc29sdmluZyA9IGNyZWF0ZVNlbGVjdG9yKFxuXHRcdHNlbGVjdENhcnRMb2FkaW5nT2JqZWN0LFxuXHRcdGxvYWRpbmdPYmplY3QgPT4gbG9hZGluZ09iamVjdFtEYWZmQ2FydE9wZXJhdGlvblR5cGUuUGF5bWVudF0gPT09IERhZmZMb2FkaW5nU3RhdGUuUmVzb2x2aW5nXG4gICk7XG4gIGNvbnN0IHNlbGVjdFBheW1lbnRNdXRhdGluZyA9IGNyZWF0ZVNlbGVjdG9yKFxuXHRcdHNlbGVjdENhcnRMb2FkaW5nT2JqZWN0LFxuXHRcdGxvYWRpbmdPYmplY3QgPT4gbG9hZGluZ09iamVjdFtEYWZmQ2FydE9wZXJhdGlvblR5cGUuUGF5bWVudF0gPT09IERhZmZMb2FkaW5nU3RhdGUuTXV0YXRpbmdcblx0KTtcblx0Y29uc3Qgc2VsZWN0UGF5bWVudE1ldGhvZHNMb2FkaW5nID0gY3JlYXRlU2VsZWN0b3IoXG5cdFx0c2VsZWN0Q2FydExvYWRpbmdPYmplY3QsXG5cdFx0bG9hZGluZ09iamVjdCA9PiBsb2FkaW5nT2JqZWN0W0RhZmZDYXJ0T3BlcmF0aW9uVHlwZS5QYXltZW50TWV0aG9kc10gIT09IERhZmZMb2FkaW5nU3RhdGUuQ29tcGxldGVcbiAgKTtcbiAgY29uc3Qgc2VsZWN0UGF5bWVudE1ldGhvZHNSZXNvbHZpbmcgPSBjcmVhdGVTZWxlY3Rvcihcblx0XHRzZWxlY3RDYXJ0TG9hZGluZ09iamVjdCxcblx0XHRsb2FkaW5nT2JqZWN0ID0+IGxvYWRpbmdPYmplY3RbRGFmZkNhcnRPcGVyYXRpb25UeXBlLlBheW1lbnRNZXRob2RzXSA9PT0gRGFmZkxvYWRpbmdTdGF0ZS5SZXNvbHZpbmdcbiAgKTtcblx0Y29uc3Qgc2VsZWN0SXRlbUxvYWRpbmcgPSBjcmVhdGVTZWxlY3Rvcihcblx0XHRzZWxlY3RDYXJ0TG9hZGluZ09iamVjdCxcblx0XHRsb2FkaW5nT2JqZWN0ID0+IGxvYWRpbmdPYmplY3RbRGFmZkNhcnRPcGVyYXRpb25UeXBlLkl0ZW1dICE9PSBEYWZmQ2FydEl0ZW1Mb2FkaW5nU3RhdGUuQ29tcGxldGVcbiAgKTtcblx0Y29uc3Qgc2VsZWN0SXRlbUFkZGluZyA9IGNyZWF0ZVNlbGVjdG9yKFxuXHRcdHNlbGVjdENhcnRMb2FkaW5nT2JqZWN0LFxuXHRcdGxvYWRpbmdPYmplY3QgPT4gbG9hZGluZ09iamVjdFtEYWZmQ2FydE9wZXJhdGlvblR5cGUuSXRlbV0gPT09IERhZmZDYXJ0SXRlbUxvYWRpbmdTdGF0ZS5BZGRpbmdcbiAgKTtcbiAgY29uc3Qgc2VsZWN0SXRlbVJlc29sdmluZyA9IGNyZWF0ZVNlbGVjdG9yKFxuXHRcdHNlbGVjdENhcnRMb2FkaW5nT2JqZWN0LFxuXHRcdGxvYWRpbmdPYmplY3QgPT4gbG9hZGluZ09iamVjdFtEYWZmQ2FydE9wZXJhdGlvblR5cGUuSXRlbV0gPT09IERhZmZDYXJ0SXRlbUxvYWRpbmdTdGF0ZS5SZXNvbHZpbmdcbiAgKTtcbiAgY29uc3Qgc2VsZWN0Q291cG9uTG9hZGluZyA9IGNyZWF0ZVNlbGVjdG9yKFxuXHRcdHNlbGVjdENhcnRMb2FkaW5nT2JqZWN0LFxuXHRcdGxvYWRpbmdPYmplY3QgPT4gbG9hZGluZ09iamVjdFtEYWZmQ2FydE9wZXJhdGlvblR5cGUuQ291cG9uXSAhPT0gRGFmZkxvYWRpbmdTdGF0ZS5Db21wbGV0ZVxuICApO1xuICBjb25zdCBzZWxlY3RDb3Vwb25SZXNvbHZpbmcgPSBjcmVhdGVTZWxlY3Rvcihcblx0XHRzZWxlY3RDYXJ0TG9hZGluZ09iamVjdCxcblx0XHRsb2FkaW5nT2JqZWN0ID0+IGxvYWRpbmdPYmplY3RbRGFmZkNhcnRPcGVyYXRpb25UeXBlLkNvdXBvbl0gPT09IERhZmZMb2FkaW5nU3RhdGUuUmVzb2x2aW5nXG4gICk7XG4gIGNvbnN0IHNlbGVjdENvdXBvbk11dGF0aW5nID0gY3JlYXRlU2VsZWN0b3IoXG5cdFx0c2VsZWN0Q2FydExvYWRpbmdPYmplY3QsXG5cdFx0bG9hZGluZ09iamVjdCA9PiBsb2FkaW5nT2JqZWN0W0RhZmZDYXJ0T3BlcmF0aW9uVHlwZS5Db3Vwb25dID09PSBEYWZmTG9hZGluZ1N0YXRlLk11dGF0aW5nXG4gICk7XG4gIGNvbnN0IHNlbGVjdENhcnRGZWF0dXJlTG9hZGluZyA9IGNyZWF0ZVNlbGVjdG9yKFxuXHRcdHNlbGVjdENhcnRMb2FkaW5nT2JqZWN0LFxuXHRcdGxvYWRpbmdPYmplY3QgPT4gW1xuICAgICAgc2VsZWN0Q2FydExvYWRpbmcsXG4gICAgICBzZWxlY3RCaWxsaW5nQWRkcmVzc0xvYWRpbmcsXG4gICAgICBzZWxlY3RTaGlwcGluZ0FkZHJlc3NMb2FkaW5nLFxuICAgICAgc2VsZWN0U2hpcHBpbmdJbmZvcm1hdGlvbkxvYWRpbmcsXG4gICAgICBzZWxlY3RTaGlwcGluZ01ldGhvZHNMb2FkaW5nLFxuICAgICAgc2VsZWN0UGF5bWVudExvYWRpbmcsXG4gICAgICBzZWxlY3RQYXltZW50TWV0aG9kc0xvYWRpbmcsXG4gICAgICBzZWxlY3RDb3Vwb25Mb2FkaW5nLFxuICAgICAgc2VsZWN0SXRlbUxvYWRpbmcsXG4gICAgXS5tYXAoc2VsZWN0b3IgPT5cbiAgICAgIHNlbGVjdG9yLnByb2plY3Rvcihsb2FkaW5nT2JqZWN0KVxuICAgICkucmVkdWNlKChhY2MsIGxvYWRpbmcpID0+IGFjYyB8fCBsb2FkaW5nLCBmYWxzZSlcbiAgKTtcbiAgY29uc3Qgc2VsZWN0Q2FydEZlYXR1cmVSZXNvbHZpbmcgPSBjcmVhdGVTZWxlY3Rvcihcblx0XHRzZWxlY3RDYXJ0TG9hZGluZ09iamVjdCxcblx0XHRsb2FkaW5nT2JqZWN0ID0+IFtcbiAgICAgIHNlbGVjdENhcnRSZXNvbHZpbmcsXG4gICAgICBzZWxlY3RCaWxsaW5nQWRkcmVzc1Jlc29sdmluZyxcbiAgICAgIHNlbGVjdFNoaXBwaW5nQWRkcmVzc1Jlc29sdmluZyxcbiAgICAgIHNlbGVjdFNoaXBwaW5nSW5mb3JtYXRpb25SZXNvbHZpbmcsXG4gICAgICBzZWxlY3RTaGlwcGluZ01ldGhvZHNSZXNvbHZpbmcsXG4gICAgICBzZWxlY3RQYXltZW50UmVzb2x2aW5nLFxuICAgICAgc2VsZWN0UGF5bWVudE1ldGhvZHNSZXNvbHZpbmcsXG4gICAgICBzZWxlY3RDb3Vwb25SZXNvbHZpbmcsXG4gICAgICBzZWxlY3RJdGVtUmVzb2x2aW5nLFxuICAgIF0ubWFwKHNlbGVjdG9yID0+XG4gICAgICBzZWxlY3Rvci5wcm9qZWN0b3IobG9hZGluZ09iamVjdClcbiAgICApLnJlZHVjZSgoYWNjLCByZXNvbHZpbmcpID0+IGFjYyB8fCByZXNvbHZpbmcsIGZhbHNlKVxuICApO1xuICBjb25zdCBzZWxlY3RDYXJ0RmVhdHVyZU11dGF0aW5nID0gY3JlYXRlU2VsZWN0b3IoXG5cdFx0c2VsZWN0Q2FydExvYWRpbmdPYmplY3QsXG5cdFx0c2VsZWN0Q2FydEl0ZW1NdXRhdGluZyxcblx0XHQobG9hZGluZ09iamVjdCwgY2FydEl0ZW1NdXRhdGluZykgPT4gW1xuICAgICAgc2VsZWN0Q2FydE11dGF0aW5nLFxuICAgICAgc2VsZWN0QmlsbGluZ0FkZHJlc3NNdXRhdGluZyxcbiAgICAgIHNlbGVjdFNoaXBwaW5nQWRkcmVzc011dGF0aW5nLFxuICAgICAgc2VsZWN0U2hpcHBpbmdJbmZvcm1hdGlvbk11dGF0aW5nLFxuICAgICAgc2VsZWN0UGF5bWVudE11dGF0aW5nLFxuICAgICAgc2VsZWN0Q291cG9uTXV0YXRpbmcsXG5cdFx0XHRzZWxlY3RJdGVtQWRkaW5nXG4gICAgXS5tYXAoc2VsZWN0b3IgPT5cbiAgICAgIHNlbGVjdG9yLnByb2plY3Rvcihsb2FkaW5nT2JqZWN0KVxuICAgICkucmVkdWNlKChhY2MsIG11dGF0aW5nKSA9PiBhY2MgfHwgbXV0YXRpbmcsIGZhbHNlKSB8fCBjYXJ0SXRlbU11dGF0aW5nXG5cdCk7XG5cblx0Y29uc3Qgc2VsZWN0Q2FydEVycm9yc09iamVjdCA9IGNyZWF0ZVNlbGVjdG9yKFxuXHRcdHNlbGVjdENhcnRTdGF0ZSxcblx0XHQoc3RhdGU6IERhZmZDYXJ0UmVkdWNlclN0YXRlPFQ+KSA9PiBzdGF0ZS5lcnJvcnNcblx0KTtcblx0Y29uc3Qgc2VsZWN0Q2FydEVycm9ycyA9IGNyZWF0ZVNlbGVjdG9yKFxuXHRcdHNlbGVjdENhcnRFcnJvcnNPYmplY3QsXG5cdFx0KHN0YXRlOiBEYWZmQ2FydFJlZHVjZXJTdGF0ZTxUPlsnZXJyb3JzJ10pID0+IHN0YXRlW0RhZmZDYXJ0T3BlcmF0aW9uVHlwZS5DYXJ0XVxuXHQpO1xuXHRjb25zdCBzZWxlY3RCaWxsaW5nQWRkcmVzc0Vycm9ycyA9IGNyZWF0ZVNlbGVjdG9yKFxuXHRcdHNlbGVjdENhcnRFcnJvcnNPYmplY3QsXG5cdFx0KHN0YXRlOiBEYWZmQ2FydFJlZHVjZXJTdGF0ZTxUPlsnZXJyb3JzJ10pID0+IHN0YXRlW0RhZmZDYXJ0T3BlcmF0aW9uVHlwZS5CaWxsaW5nQWRkcmVzc11cblx0KTtcblx0Y29uc3Qgc2VsZWN0U2hpcHBpbmdBZGRyZXNzRXJyb3JzID0gY3JlYXRlU2VsZWN0b3IoXG5cdFx0c2VsZWN0Q2FydEVycm9yc09iamVjdCxcblx0XHQoc3RhdGU6IERhZmZDYXJ0UmVkdWNlclN0YXRlPFQ+WydlcnJvcnMnXSkgPT4gc3RhdGVbRGFmZkNhcnRPcGVyYXRpb25UeXBlLlNoaXBwaW5nQWRkcmVzc11cblx0KTtcblx0Y29uc3Qgc2VsZWN0U2hpcHBpbmdJbmZvcm1hdGlvbkVycm9ycyA9IGNyZWF0ZVNlbGVjdG9yKFxuXHRcdHNlbGVjdENhcnRFcnJvcnNPYmplY3QsXG5cdFx0KHN0YXRlOiBEYWZmQ2FydFJlZHVjZXJTdGF0ZTxUPlsnZXJyb3JzJ10pID0+IHN0YXRlW0RhZmZDYXJ0T3BlcmF0aW9uVHlwZS5TaGlwcGluZ0luZm9ybWF0aW9uXVxuXHQpO1xuXHRjb25zdCBzZWxlY3RTaGlwcGluZ01ldGhvZHNFcnJvcnMgPSBjcmVhdGVTZWxlY3Rvcihcblx0XHRzZWxlY3RDYXJ0RXJyb3JzT2JqZWN0LFxuXHRcdChzdGF0ZTogRGFmZkNhcnRSZWR1Y2VyU3RhdGU8VD5bJ2Vycm9ycyddKSA9PiBzdGF0ZVtEYWZmQ2FydE9wZXJhdGlvblR5cGUuU2hpcHBpbmdNZXRob2RzXVxuXHQpO1xuXHRjb25zdCBzZWxlY3RQYXltZW50RXJyb3JzID0gY3JlYXRlU2VsZWN0b3IoXG5cdFx0c2VsZWN0Q2FydEVycm9yc09iamVjdCxcblx0XHQoc3RhdGU6IERhZmZDYXJ0UmVkdWNlclN0YXRlPFQ+WydlcnJvcnMnXSkgPT4gc3RhdGVbRGFmZkNhcnRPcGVyYXRpb25UeXBlLlBheW1lbnRdXG5cdCk7XG5cdGNvbnN0IHNlbGVjdFBheW1lbnRNZXRob2RzRXJyb3JzID0gY3JlYXRlU2VsZWN0b3IoXG5cdFx0c2VsZWN0Q2FydEVycm9yc09iamVjdCxcblx0XHQoc3RhdGU6IERhZmZDYXJ0UmVkdWNlclN0YXRlPFQ+WydlcnJvcnMnXSkgPT4gc3RhdGVbRGFmZkNhcnRPcGVyYXRpb25UeXBlLlBheW1lbnRNZXRob2RzXVxuXHQpO1xuXHRjb25zdCBzZWxlY3RJdGVtRXJyb3JzID0gY3JlYXRlU2VsZWN0b3IoXG5cdFx0c2VsZWN0Q2FydEVycm9yc09iamVjdCxcblx0XHQoc3RhdGU6IERhZmZDYXJ0UmVkdWNlclN0YXRlPFQ+WydlcnJvcnMnXSkgPT4gc3RhdGVbRGFmZkNhcnRPcGVyYXRpb25UeXBlLkl0ZW1dXG4gICk7XG4gIGNvbnN0IHNlbGVjdENvdXBvbkVycm9ycyA9IGNyZWF0ZVNlbGVjdG9yKFxuXHRcdHNlbGVjdENhcnRFcnJvcnNPYmplY3QsXG5cdFx0KHN0YXRlOiBEYWZmQ2FydFJlZHVjZXJTdGF0ZTxUPlsnZXJyb3JzJ10pID0+IHN0YXRlW0RhZmZDYXJ0T3BlcmF0aW9uVHlwZS5Db3Vwb25dXG4gICk7XG5cblx0Y29uc3Qgc2VsZWN0Q2FydElkID0gY3JlYXRlU2VsZWN0b3IoXG5cdFx0c2VsZWN0Q2FydFZhbHVlLFxuXHRcdChzdGF0ZTogRGFmZkNhcnRSZWR1Y2VyU3RhdGU8VD5bJ2NhcnQnXSkgPT4gc3RhdGUuaWRcblx0KTtcblx0LyoqXG5cdCAqIEBkZXByZWNhdGVkIHVzZSBzZWxlY3RDYXJ0U3VidG90YWxFeGNsdWRpbmdUYXggc2VsZWN0b3IgaW5zdGVhZC5cblx0ICovXG5cdGNvbnN0IHNlbGVjdENhcnRTdWJ0b3RhbCA9IGNyZWF0ZVNlbGVjdG9yKFxuXHRcdHNlbGVjdENhcnRWYWx1ZSxcblx0XHQoc3RhdGU6IERhZmZDYXJ0UmVkdWNlclN0YXRlPFQ+WydjYXJ0J10pID0+IHtcblx0XHRcdGNvbnN0IHN1YnRvdGFsT2JqZWN0ID0gc3RhdGUudG90YWxzLmZpbmQodG90YWwgPT4gdG90YWwubmFtZSA9PT0gRGFmZkNhcnRUb3RhbFR5cGVFbnVtLnN1YnRvdGFsRXhjbHVkaW5nVGF4KTtcblx0XHRcdHJldHVybiBzdWJ0b3RhbE9iamVjdCA/IHN1YnRvdGFsT2JqZWN0LnZhbHVlIDogbnVsbDtcblx0XHR9XG5cdCk7XG5cdGNvbnN0IHNlbGVjdENhcnRHcmFuZFRvdGFsID0gY3JlYXRlU2VsZWN0b3IoXG5cdFx0c2VsZWN0Q2FydFZhbHVlLFxuXHRcdChzdGF0ZTogRGFmZkNhcnRSZWR1Y2VyU3RhdGU8VD5bJ2NhcnQnXSkgPT4ge1xuXHRcdFx0Y29uc3QgZ3JhbmRUb3RhbE9iamVjdCA9IHN0YXRlLnRvdGFscy5maW5kKHRvdGFsID0+IHRvdGFsLm5hbWUgPT09IERhZmZDYXJ0VG90YWxUeXBlRW51bS5ncmFuZFRvdGFsKTtcblx0XHRcdHJldHVybiBncmFuZFRvdGFsT2JqZWN0ID8gZ3JhbmRUb3RhbE9iamVjdC52YWx1ZSA6IG51bGw7XG5cdFx0fVxuXHQpO1xuXHRjb25zdCBzZWxlY3RDYXJ0U3VidG90YWxFeGNsdWRpbmdUYXggPSBjcmVhdGVTZWxlY3Rvcihcblx0XHRzZWxlY3RDYXJ0VmFsdWUsXG5cdFx0KHN0YXRlOiBEYWZmQ2FydFJlZHVjZXJTdGF0ZTxUPlsnY2FydCddKSA9PiB7XG5cdFx0XHRjb25zdCBzdWJ0b3RhbEV4Y2x1ZGluZ1RheE9iamVjdCA9IHN0YXRlLnRvdGFscy5maW5kKHRvdGFsID0+IHRvdGFsLm5hbWUgPT09IERhZmZDYXJ0VG90YWxUeXBlRW51bS5zdWJ0b3RhbEV4Y2x1ZGluZ1RheCk7XG5cdFx0XHRyZXR1cm4gc3VidG90YWxFeGNsdWRpbmdUYXhPYmplY3QgPyBzdWJ0b3RhbEV4Y2x1ZGluZ1RheE9iamVjdC52YWx1ZSA6IG51bGw7XG5cdFx0fVxuXHQpO1xuXHRjb25zdCBzZWxlY3RDYXJ0U3VidG90YWxJbmNsdWRpbmdUYXggPSBjcmVhdGVTZWxlY3Rvcihcblx0XHRzZWxlY3RDYXJ0VmFsdWUsXG5cdFx0KHN0YXRlOiBEYWZmQ2FydFJlZHVjZXJTdGF0ZTxUPlsnY2FydCddKSA9PiB7XG5cdFx0XHRjb25zdCBzdWJ0b3RhbEluY2x1ZGluZ1RheE9iamVjdCA9IHN0YXRlLnRvdGFscy5maW5kKHRvdGFsID0+IHRvdGFsLm5hbWUgPT09IERhZmZDYXJ0VG90YWxUeXBlRW51bS5zdWJ0b3RhbEluY2x1ZGluZ1RheCk7XG5cdFx0XHRyZXR1cm4gc3VidG90YWxJbmNsdWRpbmdUYXhPYmplY3QgPyBzdWJ0b3RhbEluY2x1ZGluZ1RheE9iamVjdC52YWx1ZSA6IG51bGw7XG5cdFx0fVxuXHQpO1xuXHRjb25zdCBzZWxlY3RDYXJ0U3VidG90YWxXaXRoRGlzY291bnRFeGNsdWRpbmdUYXggPSBjcmVhdGVTZWxlY3Rvcihcblx0XHRzZWxlY3RDYXJ0VmFsdWUsXG5cdFx0KHN0YXRlOiBEYWZmQ2FydFJlZHVjZXJTdGF0ZTxUPlsnY2FydCddKSA9PiB7XG5cdFx0XHRjb25zdCBzdWJ0b3RhbFdpdGhEaXNjb3VudEV4Y2x1ZGluZ1RheE9iamVjdCA9IHN0YXRlLnRvdGFscy5maW5kKHRvdGFsID0+IHRvdGFsLm5hbWUgPT09IERhZmZDYXJ0VG90YWxUeXBlRW51bS5zdWJ0b3RhbFdpdGhEaXNjb3VudEV4Y2x1ZGluZ1RheCk7XG5cdFx0XHRyZXR1cm4gc3VidG90YWxXaXRoRGlzY291bnRFeGNsdWRpbmdUYXhPYmplY3QgPyBzdWJ0b3RhbFdpdGhEaXNjb3VudEV4Y2x1ZGluZ1RheE9iamVjdC52YWx1ZSA6IG51bGw7XG5cdFx0fVxuXHQpO1xuXHRjb25zdCBzZWxlY3RDYXJ0U3VidG90YWxXaXRoRGlzY291bnRJbmNsdWRpbmdUYXggPSBjcmVhdGVTZWxlY3Rvcihcblx0XHRzZWxlY3RDYXJ0VmFsdWUsXG5cdFx0KHN0YXRlOiBEYWZmQ2FydFJlZHVjZXJTdGF0ZTxUPlsnY2FydCddKSA9PiB7XG5cdFx0XHRjb25zdCBzdWJ0b3RhbFdpdGhEaXNjb3VudEluY2x1ZGluZ1RheE9iamVjdCA9IHN0YXRlLnRvdGFscy5maW5kKHRvdGFsID0+IHRvdGFsLm5hbWUgPT09IERhZmZDYXJ0VG90YWxUeXBlRW51bS5zdWJ0b3RhbFdpdGhEaXNjb3VudEluY2x1ZGluZ1RheCk7XG5cdFx0XHRyZXR1cm4gc3VidG90YWxXaXRoRGlzY291bnRJbmNsdWRpbmdUYXhPYmplY3QgPyBzdWJ0b3RhbFdpdGhEaXNjb3VudEluY2x1ZGluZ1RheE9iamVjdC52YWx1ZSA6IG51bGw7XG5cdFx0fVxuXHQpO1xuXHRjb25zdCBzZWxlY3RDYXJ0VG90YWxUYXggPSBjcmVhdGVTZWxlY3Rvcihcblx0XHRzZWxlY3RDYXJ0VmFsdWUsXG5cdFx0KHN0YXRlOiBEYWZmQ2FydFJlZHVjZXJTdGF0ZTxUPlsnY2FydCddKSA9PiB7XG5cdFx0XHRjb25zdCB0YXhPYmplY3QgPSBzdGF0ZS50b3RhbHMuZmluZCh0b3RhbCA9PiB0b3RhbC5uYW1lID09PSBEYWZmQ2FydFRvdGFsVHlwZUVudW0udGF4KTtcblx0XHRcdHJldHVybiB0YXhPYmplY3QgPyB0YXhPYmplY3QudmFsdWUgOiBudWxsO1xuXHRcdH1cblx0KTtcblx0Y29uc3Qgc2VsZWN0Q2FydERpc2NvdW50VG90YWxzID0gY3JlYXRlU2VsZWN0b3IoXG5cdFx0c2VsZWN0Q2FydFZhbHVlLFxuXHRcdChzdGF0ZTogRGFmZkNhcnRSZWR1Y2VyU3RhdGU8VD5bJ2NhcnQnXSkgPT4ge1xuXHRcdFx0Y29uc3QgZGlzY291bnRzOiBEYWZmQ2FydFRvdGFsW10gPSBzdGF0ZS50b3RhbHMuZmlsdGVyKHRvdGFsID0+IHRvdGFsLm5hbWUgPT09IERhZmZDYXJ0VG90YWxUeXBlRW51bS5kaXNjb3VudCk7XG5cdFx0XHRyZXR1cm4gZGlzY291bnRzID8gZGlzY291bnRzIDogW107XG5cdFx0fVxuXHQpO1xuXHRjb25zdCBzZWxlY3RDYXJ0U2hpcHBpbmdUb3RhbCA9IGNyZWF0ZVNlbGVjdG9yKFxuXHRcdHNlbGVjdENhcnRWYWx1ZSxcblx0XHQoc3RhdGU6IERhZmZDYXJ0UmVkdWNlclN0YXRlPFQ+WydjYXJ0J10pID0+IHtcblx0XHRcdGNvbnN0IHNoaXBwaW5nVG90YWxPYmplY3QgPSBzdGF0ZS50b3RhbHMuZmluZCh0b3RhbCA9PiB0b3RhbC5uYW1lID09PSBEYWZmQ2FydFRvdGFsVHlwZUVudW0uc2hpcHBpbmcpO1xuXHRcdFx0cmV0dXJuIHNoaXBwaW5nVG90YWxPYmplY3QgPyBzaGlwcGluZ1RvdGFsT2JqZWN0LnZhbHVlIDogbnVsbDtcblx0XHR9XG5cdCk7XG5cdGNvbnN0IHNlbGVjdENhcnRDb3Vwb25zID0gY3JlYXRlU2VsZWN0b3IoXG5cdFx0c2VsZWN0Q2FydFZhbHVlLFxuXHRcdChzdGF0ZTogRGFmZkNhcnRSZWR1Y2VyU3RhdGU8VD5bJ2NhcnQnXSkgPT4gc3RhdGUuY291cG9uc1xuXHQpO1xuXHRjb25zdCBzZWxlY3RDYXJ0SXRlbXMgPSBjcmVhdGVTZWxlY3Rvcihcblx0XHRzZWxlY3RDYXJ0VmFsdWUsXG5cdFx0KHN0YXRlOiBEYWZmQ2FydFJlZHVjZXJTdGF0ZTxUPlsnY2FydCddKSA9PiBzdGF0ZS5pdGVtc1xuXHQpO1xuXHRjb25zdCBzZWxlY3RDYXJ0SGFzT3V0T2ZTdG9ja0l0ZW1zID0gY3JlYXRlU2VsZWN0b3IoXG5cdFx0c2VsZWN0Q2FydFZhbHVlLFxuXHRcdChzdGF0ZTogRGFmZkNhcnRSZWR1Y2VyU3RhdGU8VD5bJ2NhcnQnXSkgPT4gc3RhdGUuaXRlbXMucmVkdWNlKChhY2MsIGl0ZW0pID0+IChhY2MgfHwgIWl0ZW0uaW5fc3RvY2spLCBmYWxzZSlcblx0KVxuXHRjb25zdCBzZWxlY3RDYXJ0QmlsbGluZ0FkZHJlc3MgPSBjcmVhdGVTZWxlY3Rvcihcblx0XHRzZWxlY3RDYXJ0VmFsdWUsXG5cdFx0KHN0YXRlOiBEYWZmQ2FydFJlZHVjZXJTdGF0ZTxUPlsnY2FydCddKSA9PiBzdGF0ZS5iaWxsaW5nX2FkZHJlc3Ncblx0KTtcblx0Y29uc3Qgc2VsZWN0Q2FydFNoaXBwaW5nQWRkcmVzcyA9IGNyZWF0ZVNlbGVjdG9yKFxuXHRcdHNlbGVjdENhcnRWYWx1ZSxcblx0XHQoc3RhdGU6IERhZmZDYXJ0UmVkdWNlclN0YXRlPFQ+WydjYXJ0J10pID0+IHN0YXRlLnNoaXBwaW5nX2FkZHJlc3Ncblx0KTtcblx0Y29uc3Qgc2VsZWN0Q2FydFBheW1lbnQgPSBjcmVhdGVTZWxlY3Rvcihcblx0XHRzZWxlY3RDYXJ0VmFsdWUsXG5cdFx0KHN0YXRlOiBEYWZmQ2FydFJlZHVjZXJTdGF0ZTxUPlsnY2FydCddKSA9PiBzdGF0ZS5wYXltZW50XG5cdCk7XG5cdGNvbnN0IHNlbGVjdENhcnRUb3RhbHMgPSBjcmVhdGVTZWxlY3Rvcihcblx0XHRzZWxlY3RDYXJ0VmFsdWUsXG5cdFx0KHN0YXRlOiBEYWZmQ2FydFJlZHVjZXJTdGF0ZTxUPlsnY2FydCddKSA9PiBzdGF0ZS50b3RhbHNcblx0KTtcblx0Y29uc3Qgc2VsZWN0Q2FydFNoaXBwaW5nSW5mb3JtYXRpb24gPSBjcmVhdGVTZWxlY3Rvcihcblx0XHRzZWxlY3RDYXJ0VmFsdWUsXG5cdFx0KHN0YXRlOiBEYWZmQ2FydFJlZHVjZXJTdGF0ZTxUPlsnY2FydCddKSA9PiBzdGF0ZS5zaGlwcGluZ19pbmZvcm1hdGlvblxuXHQpO1xuXHRjb25zdCBzZWxlY3RDYXJ0QXZhaWxhYmxlU2hpcHBpbmdNZXRob2RzID0gY3JlYXRlU2VsZWN0b3IoXG5cdFx0c2VsZWN0Q2FydFZhbHVlLFxuXHRcdChzdGF0ZTogRGFmZkNhcnRSZWR1Y2VyU3RhdGU8VD5bJ2NhcnQnXSkgPT4gc3RhdGUuYXZhaWxhYmxlX3NoaXBwaW5nX21ldGhvZHNcblx0KTtcblx0Y29uc3Qgc2VsZWN0Q2FydEF2YWlsYWJsZVBheW1lbnRNZXRob2RzID0gY3JlYXRlU2VsZWN0b3IoXG5cdFx0c2VsZWN0Q2FydFZhbHVlLFxuXHRcdChzdGF0ZTogRGFmZkNhcnRSZWR1Y2VyU3RhdGU8VD5bJ2NhcnQnXSkgPT4gc3RhdGUuYXZhaWxhYmxlX3BheW1lbnRfbWV0aG9kc1xuICApO1xuXG5cdGNvbnN0IHNlbGVjdElzQ2FydEVtcHR5ID0gY3JlYXRlU2VsZWN0b3IoXG5cdFx0c2VsZWN0Q2FydFZhbHVlLFxuXHRcdGNhcnQgPT4gIWNhcnQgfHwgIWNhcnQuaXRlbXMgfHwgY2FydC5pdGVtcy5sZW5ndGggPT09IDBcbiAgKTtcblx0Y29uc3Qgc2VsZWN0Q2FydEl0ZW1EaXNjb3VudGVkUm93VG90YWwgPSBjcmVhdGVTZWxlY3Rvcihcblx0XHRzZWxlY3RDYXJ0SXRlbXMsXG5cdFx0KGNhcnRJdGVtczogRGFmZlN0YXRlZnVsQ2FydEl0ZW1bXSwgcHJvcHMpID0+IHtcblx0XHRcdGNvbnN0IGNhcnRJdGVtID0gY2FydEl0ZW1zLmZpbmQoaXRlbSA9PiBpdGVtLml0ZW1faWQgPT09IHByb3BzLmlkKVxuXHRcdFx0cmV0dXJuIGRhZmZTdWJ0cmFjdChjYXJ0SXRlbS5yb3dfdG90YWwsIGNhcnRJdGVtLnRvdGFsX2Rpc2NvdW50KTtcblx0XHR9XG4gICk7XG4gIGNvbnN0IHNlbGVjdElzQmlsbGluZ1NhbWVBc1NoaXBwaW5nID0gY3JlYXRlU2VsZWN0b3IoXG4gICAgc2VsZWN0Q2FydFNoaXBwaW5nQWRkcmVzcyxcbiAgICBzZWxlY3RDYXJ0QmlsbGluZ0FkZHJlc3MsXG4gICAgKHNoaXBwaW5nQWRkcmVzcywgYmlsbGluZ0FkZHJlc3MpID0+IGRhZmZDb21wYXJlUGVyc29uYWxBZGRyZXNzZXMoc2hpcHBpbmdBZGRyZXNzLCBiaWxsaW5nQWRkcmVzcylcbiAgKVxuXG4gIGNvbnN0IHNlbGVjdEhhc0JpbGxpbmdBZGRyZXNzID0gY3JlYXRlU2VsZWN0b3IoXG4gICAgc2VsZWN0Q2FydEJpbGxpbmdBZGRyZXNzLFxuICAgIGJpbGxpbmdBZGRyZXNzID0+ICEhYmlsbGluZ0FkZHJlc3NcbiAgKTtcblxuICBjb25zdCBzZWxlY3RIYXNTaGlwcGluZ0FkZHJlc3MgPSBjcmVhdGVTZWxlY3RvcihcbiAgICBzZWxlY3RDYXJ0U2hpcHBpbmdBZGRyZXNzLFxuICAgIHNoaXBwaW5nQWRkcmVzcyA9PiAhIXNoaXBwaW5nQWRkcmVzc1xuICApO1xuXG4gIGNvbnN0IHNlbGVjdEhhc1NoaXBwaW5nTWV0aG9kID0gY3JlYXRlU2VsZWN0b3IoXG4gICAgc2VsZWN0Q2FydFNoaXBwaW5nSW5mb3JtYXRpb24sXG4gICAgc2hpcHBpbmdNZXRob2QgPT4gISFzaGlwcGluZ01ldGhvZFxuICApO1xuXG4gIGNvbnN0IHNlbGVjdEhhc1BheW1lbnRNZXRob2QgPSBjcmVhdGVTZWxlY3RvcihcbiAgICBzZWxlY3RDYXJ0UGF5bWVudCxcbiAgICBwYXltZW50TWV0aG9kID0+ICEhcGF5bWVudE1ldGhvZCAmJiBwYXltZW50TWV0aG9kLm1ldGhvZCAhPT0gJydcbiAgKTtcblxuICBjb25zdCBzZWxlY3RDYW5QbGFjZU9yZGVyID0gY3JlYXRlU2VsZWN0b3IoXG4gICAgc2VsZWN0SXNDYXJ0RW1wdHksXG4gICAgc2VsZWN0SGFzQmlsbGluZ0FkZHJlc3MsXG4gICAgc2VsZWN0SGFzU2hpcHBpbmdBZGRyZXNzLFxuICAgIHNlbGVjdEhhc1NoaXBwaW5nTWV0aG9kLFxuICAgIHNlbGVjdEhhc1BheW1lbnRNZXRob2QsXG4gICAgKFxuICAgICAgaXNDYXJ0RW1wdHksXG4gICAgICBoYXNCaWxsaW5nQWRkcmVzcyxcbiAgICAgIGhhc1NoaXBwaW5nQWRkcmVzcyxcbiAgICAgIGhhc1NoaXBwaW5nTWV0aG9kLFxuICAgICAgaGFzUGF5bWVudE1ldGhvZFxuICAgICkgPT4gIWlzQ2FydEVtcHR5XG4gICAgICAmJiBoYXNCaWxsaW5nQWRkcmVzc1xuICAgICAgJiYgaGFzU2hpcHBpbmdBZGRyZXNzXG4gICAgICAmJiBoYXNTaGlwcGluZ01ldGhvZFxuICAgICAgJiYgaGFzUGF5bWVudE1ldGhvZFxuICApXG5cblx0cmV0dXJuIHtcblx0XHRzZWxlY3RDYXJ0U3RhdGUsXG4gICAgc2VsZWN0Q2FydFZhbHVlLFxuXG4gICAgc2VsZWN0Q2FydFJlc29sdmVkLFxuXG4gICAgc2VsZWN0Q2FydExvYWRpbmdPYmplY3QsXG4gICAgc2VsZWN0Q2FydEZlYXR1cmVMb2FkaW5nLFxuICAgIHNlbGVjdENhcnRGZWF0dXJlUmVzb2x2aW5nLFxuICAgIHNlbGVjdENhcnRGZWF0dXJlTXV0YXRpbmcsXG4gICAgc2VsZWN0Q2FydExvYWRpbmcsXG4gICAgc2VsZWN0Q2FydFJlc29sdmluZyxcbiAgICBzZWxlY3RDYXJ0TXV0YXRpbmcsXG4gICAgc2VsZWN0QmlsbGluZ0FkZHJlc3NMb2FkaW5nLFxuICAgIHNlbGVjdEJpbGxpbmdBZGRyZXNzUmVzb2x2aW5nLFxuICAgIHNlbGVjdEJpbGxpbmdBZGRyZXNzTXV0YXRpbmcsXG4gICAgc2VsZWN0U2hpcHBpbmdBZGRyZXNzTG9hZGluZyxcbiAgICBzZWxlY3RTaGlwcGluZ0FkZHJlc3NSZXNvbHZpbmcsXG4gICAgc2VsZWN0U2hpcHBpbmdBZGRyZXNzTXV0YXRpbmcsXG4gICAgc2VsZWN0U2hpcHBpbmdJbmZvcm1hdGlvbkxvYWRpbmcsXG4gICAgc2VsZWN0U2hpcHBpbmdJbmZvcm1hdGlvblJlc29sdmluZyxcbiAgICBzZWxlY3RTaGlwcGluZ0luZm9ybWF0aW9uTXV0YXRpbmcsXG4gICAgc2VsZWN0U2hpcHBpbmdNZXRob2RzTG9hZGluZyxcbiAgICBzZWxlY3RTaGlwcGluZ01ldGhvZHNSZXNvbHZpbmcsXG4gICAgc2VsZWN0UGF5bWVudExvYWRpbmcsXG4gICAgc2VsZWN0UGF5bWVudFJlc29sdmluZyxcbiAgICBzZWxlY3RQYXltZW50TXV0YXRpbmcsXG4gICAgc2VsZWN0UGF5bWVudE1ldGhvZHNMb2FkaW5nLFxuICAgIHNlbGVjdFBheW1lbnRNZXRob2RzUmVzb2x2aW5nLFxuICAgIHNlbGVjdENvdXBvbkxvYWRpbmcsXG4gICAgc2VsZWN0Q291cG9uUmVzb2x2aW5nLFxuICAgIHNlbGVjdENvdXBvbk11dGF0aW5nLFxuXHRcdHNlbGVjdEl0ZW1Mb2FkaW5nLFxuXHRcdHNlbGVjdEl0ZW1BZGRpbmcsXG4gICAgc2VsZWN0SXRlbVJlc29sdmluZyxcblxuXHRcdHNlbGVjdENhcnRFcnJvcnNPYmplY3QsXG5cdFx0c2VsZWN0Q2FydEVycm9ycyxcblx0XHRzZWxlY3RCaWxsaW5nQWRkcmVzc0Vycm9ycyxcblx0XHRzZWxlY3RTaGlwcGluZ0FkZHJlc3NFcnJvcnMsXG5cdFx0c2VsZWN0U2hpcHBpbmdJbmZvcm1hdGlvbkVycm9ycyxcblx0XHRzZWxlY3RTaGlwcGluZ01ldGhvZHNFcnJvcnMsXG5cdFx0c2VsZWN0UGF5bWVudEVycm9ycyxcblx0XHRzZWxlY3RQYXltZW50TWV0aG9kc0Vycm9ycyxcbiAgICBzZWxlY3RJdGVtRXJyb3JzLFxuICAgIHNlbGVjdENvdXBvbkVycm9ycyxcblxuXHRcdHNlbGVjdENhcnRJZCxcblx0XHRzZWxlY3RDYXJ0U3VidG90YWwsXG5cdFx0c2VsZWN0Q2FydEdyYW5kVG90YWwsXG5cdFx0c2VsZWN0Q2FydFN1YnRvdGFsRXhjbHVkaW5nVGF4LFxuXHRcdHNlbGVjdENhcnRTdWJ0b3RhbEluY2x1ZGluZ1RheCxcblx0XHRzZWxlY3RDYXJ0U3VidG90YWxXaXRoRGlzY291bnRFeGNsdWRpbmdUYXgsXG5cdFx0c2VsZWN0Q2FydFN1YnRvdGFsV2l0aERpc2NvdW50SW5jbHVkaW5nVGF4LFxuXHRcdHNlbGVjdENhcnREaXNjb3VudFRvdGFscyxcblx0XHRzZWxlY3RDYXJ0VG90YWxUYXgsXG5cdFx0c2VsZWN0Q2FydFNoaXBwaW5nVG90YWwsXG5cdFx0c2VsZWN0Q2FydENvdXBvbnMsXG5cdFx0c2VsZWN0Q2FydEl0ZW1zLFxuXHRcdHNlbGVjdENhcnRIYXNPdXRPZlN0b2NrSXRlbXMsXG5cdFx0c2VsZWN0Q2FydEJpbGxpbmdBZGRyZXNzLFxuXHRcdHNlbGVjdENhcnRTaGlwcGluZ0FkZHJlc3MsXG5cdFx0c2VsZWN0Q2FydFBheW1lbnQsXG5cdFx0c2VsZWN0Q2FydFRvdGFscyxcblx0XHRzZWxlY3RDYXJ0U2hpcHBpbmdJbmZvcm1hdGlvbixcblx0XHRzZWxlY3RDYXJ0QXZhaWxhYmxlU2hpcHBpbmdNZXRob2RzLFxuICAgIHNlbGVjdENhcnRBdmFpbGFibGVQYXltZW50TWV0aG9kcyxcblxuXHRcdHNlbGVjdElzQ2FydEVtcHR5LFxuICAgIHNlbGVjdENhcnRJdGVtRGlzY291bnRlZFJvd1RvdGFsLFxuICAgIHNlbGVjdElzQmlsbGluZ1NhbWVBc1NoaXBwaW5nLFxuXG4gICAgc2VsZWN0SGFzQmlsbGluZ0FkZHJlc3MsXG4gICAgc2VsZWN0SGFzU2hpcHBpbmdBZGRyZXNzLFxuICAgIHNlbGVjdEhhc1NoaXBwaW5nTWV0aG9kLFxuICAgIHNlbGVjdEhhc1BheW1lbnRNZXRob2QsXG4gICAgc2VsZWN0Q2FuUGxhY2VPcmRlclxuXHR9XG59XG5cbmV4cG9ydCBjb25zdCBnZXRDYXJ0U2VsZWN0b3JzID0gKCgpID0+IHtcblx0bGV0IGNhY2hlO1xuXHRyZXR1cm4gPFxuICAgIFQgZXh0ZW5kcyBEYWZmQ2FydCA9IERhZmZDYXJ0LFxuXHRcdFYgZXh0ZW5kcyBEYWZmQ2FydE9yZGVyUmVzdWx0ID0gRGFmZkNhcnRPcmRlclJlc3VsdCxcblx0XHRVIGV4dGVuZHMgRGFmZlN0YXRlZnVsQ2FydEl0ZW0gPSBEYWZmU3RhdGVmdWxDYXJ0SXRlbVxuICA+KCk6IERhZmZDYXJ0U3RhdGVNZW1vaXplZFNlbGVjdG9yczxUPiA9PiBjYWNoZSA9IGNhY2hlXG5cdFx0PyBjYWNoZVxuXHRcdDogY3JlYXRlQ2FydFNlbGVjdG9yczxULCBWLCBVPigpO1xufSkoKTtcbiJdfQ==