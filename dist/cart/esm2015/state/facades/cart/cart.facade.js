/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Inject, Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { Store, select } from '@ngrx/store';
import { DaffCartPaymentMethodIdMap } from '@daffodil/cart';
import { getDaffCartSelectors } from '../../selectors/public_api';
import * as i0 from "@angular/core";
import * as i1 from "@ngrx/store";
import * as i2 from "@daffodil/cart";
/**
 * @template T, V, U
 */
export class DaffCartFacade {
    /**
     * @param {?} store
     * @param {?} paymentMethodMap
     */
    constructor(store, paymentMethodMap) {
        this.store = store;
        this.paymentMethodMap = paymentMethodMap;
        const { selectCartValue, selectCartResolved, selectCartLoadingObject, selectCartFeatureLoading, selectCartFeatureResolving, selectCartFeatureMutating, selectCartLoading, selectCartResolving, selectCartMutating, selectBillingAddressLoading, selectBillingAddressResolving, selectBillingAddressMutating, selectShippingAddressLoading, selectShippingAddressResolving, selectShippingAddressMutating, selectShippingInformationLoading, selectShippingInformationResolving, selectShippingInformationMutating, selectShippingMethodsLoading, selectShippingMethodsResolving, selectPaymentLoading, selectPaymentResolving, selectPaymentMutating, selectPaymentMethodsLoading, selectPaymentMethodsResolving, selectCouponLoading, selectCouponResolving, selectCouponMutating, selectItemLoading, selectItemAdding, selectItemResolving, selectCartItemMutating, selectCartErrorsObject, selectCartErrors, selectItemErrors, selectBillingAddressErrors, selectShippingAddressErrors, selectShippingInformationErrors, selectShippingMethodsErrors, selectPaymentErrors, selectPaymentMethodsErrors, selectCouponErrors, selectCartId, selectCartSubtotal, selectCartGrandTotal, selectCartSubtotalExcludingTax, selectCartSubtotalIncludingTax, selectCartSubtotalWithDiscountExcludingTax, selectCartSubtotalWithDiscountIncludingTax, selectCartDiscountTotals, selectCartTotalTax, selectCartShippingTotal, selectCartCoupons, selectCartItems, selectCartHasOutOfStockItems, selectCartItemEntities, selectTotalNumberOfCartItems, selectCartItemConfiguredAttributes, selectCartItemCompositeOptions, selectCartBillingAddress, selectCartShippingAddress, selectCartPayment, selectCartTotals, selectCartShippingInformation, selectCartAvailableShippingMethods, selectCartAvailablePaymentMethods, selectIsCartEmpty, selectIsBillingSameAsShipping, selectCartOrderLoading, selectCartOrderErrors, selectCartOrderValue, selectCartOrderId, selectCartOrderCartId, selectHasOrderResult, selectCartItemDiscountedRowTotal, selectIsCartItemOutOfStock, selectCartItemState, selectHasBillingAddress, selectHasShippingAddress, selectHasShippingMethod, selectHasPaymentMethod, selectCanPlaceOrder } = getDaffCartSelectors();
        this._selectCartItemDiscountedRowTotal = selectCartItemDiscountedRowTotal;
        this._selectCartItemConfiguredAttributes = selectCartItemConfiguredAttributes;
        this._selectCartItemCompositeOptions = selectCartItemCompositeOptions;
        this._selectIsCartItemOutOfStock = selectIsCartItemOutOfStock;
        this._selectCartItemState = selectCartItemState;
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
        this.totalItems$ = this.store.pipe(select(selectTotalNumberOfCartItems));
        this.hasOutOfStockItems$ = this.store.pipe(select(selectCartHasOutOfStockItems));
        this.itemDictionary$ = this.store.pipe(select(selectCartItemEntities));
        this.billingAddress$ = this.store.pipe(select(selectCartBillingAddress));
        this.shippingAddress$ = this.store.pipe(select(selectCartShippingAddress));
        this.payment$ = this.store.pipe(select(selectCartPayment));
        this.totals$ = this.store.pipe(select(selectCartTotals));
        this.shippingInformation$ = this.store.pipe(select(selectCartShippingInformation));
        this.availableShippingMethods$ = this.store.pipe(select(selectCartAvailableShippingMethods));
        this.availablePaymentMethods$ = this.store.pipe(select(selectCartAvailablePaymentMethods));
        this.paymentId$ = this.payment$.pipe(map((/**
         * @param {?} payment
         * @return {?}
         */
        payment => payment && payment.method
            ? this.paymentMethodMap[payment.method]
            : null)));
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
    /**
     * @param {?} itemId
     * @return {?}
     */
    getConfiguredCartItemAttributes(itemId) {
        return this.store.pipe(select(this._selectCartItemConfiguredAttributes, { id: itemId }));
    }
    ;
    /**
     * @param {?} itemId
     * @return {?}
     */
    getCompositeCartItemOptions(itemId) {
        return this.store.pipe(select(this._selectCartItemCompositeOptions, { id: itemId }));
    }
    ;
    /**
     * @param {?} itemId
     * @return {?}
     */
    getCartItemDiscountedTotal(itemId) {
        return this.store.pipe(select(this._selectCartItemDiscountedRowTotal, { id: itemId }));
    }
    /**
     * @param {?} itemId
     * @return {?}
     */
    isCartItemOutOfStock(itemId) {
        return this.store.pipe(select(this._selectIsCartItemOutOfStock, { id: itemId }));
    }
    /**
     * @param {?} itemId
     * @return {?}
     */
    getCartItemState(itemId) {
        return this.store.pipe(select(this._selectCartItemState, { id: itemId }));
    }
    /**
     * @param {?} action
     * @return {?}
     */
    dispatch(action) {
        this.store.dispatch(action);
    }
}
DaffCartFacade.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
DaffCartFacade.ctorParameters = () => [
    { type: Store },
    { type: Object, decorators: [{ type: Inject, args: [DaffCartPaymentMethodIdMap,] }] }
];
/** @nocollapse */ DaffCartFacade.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function DaffCartFacade_Factory() { return new DaffCartFacade(i0.ɵɵinject(i1.Store), i0.ɵɵinject(i2.DaffCartPaymentMethodIdMap)); }, token: DaffCartFacade, providedIn: "root" });
if (false) {
    /** @type {?} */
    DaffCartFacade.prototype.cart$;
    /** @type {?} */
    DaffCartFacade.prototype.resolved$;
    /** @type {?} */
    DaffCartFacade.prototype.loadingObject$;
    /** @type {?} */
    DaffCartFacade.prototype.featureLoading$;
    /** @type {?} */
    DaffCartFacade.prototype.featureResolving$;
    /** @type {?} */
    DaffCartFacade.prototype.featureMutating$;
    /** @type {?} */
    DaffCartFacade.prototype.loading$;
    /** @type {?} */
    DaffCartFacade.prototype.resolving$;
    /** @type {?} */
    DaffCartFacade.prototype.mutating$;
    /** @type {?} */
    DaffCartFacade.prototype.billingAddressLoading$;
    /** @type {?} */
    DaffCartFacade.prototype.billingAddressResolving$;
    /** @type {?} */
    DaffCartFacade.prototype.billingAddressMutating$;
    /** @type {?} */
    DaffCartFacade.prototype.shippingAddressLoading$;
    /** @type {?} */
    DaffCartFacade.prototype.shippingAddressResolving$;
    /** @type {?} */
    DaffCartFacade.prototype.shippingAddressMutating$;
    /** @type {?} */
    DaffCartFacade.prototype.shippingInformationLoading$;
    /** @type {?} */
    DaffCartFacade.prototype.shippingInformationResolving$;
    /** @type {?} */
    DaffCartFacade.prototype.shippingInformationMutating$;
    /** @type {?} */
    DaffCartFacade.prototype.shippingMethodsLoading$;
    /** @type {?} */
    DaffCartFacade.prototype.shippingMethodsResolving$;
    /** @type {?} */
    DaffCartFacade.prototype.paymentLoading$;
    /** @type {?} */
    DaffCartFacade.prototype.paymentResolving$;
    /** @type {?} */
    DaffCartFacade.prototype.paymentMutating$;
    /** @type {?} */
    DaffCartFacade.prototype.paymentMethodsLoading$;
    /** @type {?} */
    DaffCartFacade.prototype.paymentMethodsResolving$;
    /** @type {?} */
    DaffCartFacade.prototype.couponLoading$;
    /** @type {?} */
    DaffCartFacade.prototype.couponResolving$;
    /** @type {?} */
    DaffCartFacade.prototype.couponMutating$;
    /** @type {?} */
    DaffCartFacade.prototype.itemLoading$;
    /** @type {?} */
    DaffCartFacade.prototype.itemAdding$;
    /** @type {?} */
    DaffCartFacade.prototype.itemResolving$;
    /** @type {?} */
    DaffCartFacade.prototype.itemMutating$;
    /** @type {?} */
    DaffCartFacade.prototype.errors$;
    /** @type {?} */
    DaffCartFacade.prototype.cartErrors$;
    /** @type {?} */
    DaffCartFacade.prototype.itemErrors$;
    /** @type {?} */
    DaffCartFacade.prototype.billingAddressErrors$;
    /** @type {?} */
    DaffCartFacade.prototype.shippingAddressErrors$;
    /** @type {?} */
    DaffCartFacade.prototype.shippingInformationErrors$;
    /** @type {?} */
    DaffCartFacade.prototype.shippingMethodsErrors$;
    /** @type {?} */
    DaffCartFacade.prototype.paymentErrors$;
    /** @type {?} */
    DaffCartFacade.prototype.paymentMethodsErrors$;
    /** @type {?} */
    DaffCartFacade.prototype.couponErrors$;
    /** @type {?} */
    DaffCartFacade.prototype.id$;
    /** @type {?} */
    DaffCartFacade.prototype.subtotal$;
    /** @type {?} */
    DaffCartFacade.prototype.grandTotal$;
    /** @type {?} */
    DaffCartFacade.prototype.subtotalExcludingTax$;
    /** @type {?} */
    DaffCartFacade.prototype.subtotalIncludingTax$;
    /** @type {?} */
    DaffCartFacade.prototype.subtotalWithDiscountExcludingTax$;
    /** @type {?} */
    DaffCartFacade.prototype.subtotalWithDiscountIncludingTax$;
    /** @type {?} */
    DaffCartFacade.prototype.discountTotals$;
    /** @type {?} */
    DaffCartFacade.prototype.totalTax$;
    /** @type {?} */
    DaffCartFacade.prototype.shippingTotal$;
    /** @type {?} */
    DaffCartFacade.prototype.coupons$;
    /** @type {?} */
    DaffCartFacade.prototype.items$;
    /** @type {?} */
    DaffCartFacade.prototype.totalItems$;
    /** @type {?} */
    DaffCartFacade.prototype.hasOutOfStockItems$;
    /** @type {?} */
    DaffCartFacade.prototype.itemDictionary$;
    /** @type {?} */
    DaffCartFacade.prototype.billingAddress$;
    /** @type {?} */
    DaffCartFacade.prototype.shippingAddress$;
    /** @type {?} */
    DaffCartFacade.prototype.payment$;
    /** @type {?} */
    DaffCartFacade.prototype.totals$;
    /** @type {?} */
    DaffCartFacade.prototype.shippingInformation$;
    /** @type {?} */
    DaffCartFacade.prototype.availableShippingMethods$;
    /** @type {?} */
    DaffCartFacade.prototype.availablePaymentMethods$;
    /** @type {?} */
    DaffCartFacade.prototype.paymentId$;
    /** @type {?} */
    DaffCartFacade.prototype.isCartEmpty$;
    /** @type {?} */
    DaffCartFacade.prototype.isBillingSameAsShipping$;
    /** @type {?} */
    DaffCartFacade.prototype.hasBillingAddress$;
    /** @type {?} */
    DaffCartFacade.prototype.hasShippingAddress$;
    /** @type {?} */
    DaffCartFacade.prototype.hasShippingMethod$;
    /** @type {?} */
    DaffCartFacade.prototype.hasPaymentMethod$;
    /** @type {?} */
    DaffCartFacade.prototype.canPlaceOrder$;
    /** @type {?} */
    DaffCartFacade.prototype.orderResultLoading$;
    /** @type {?} */
    DaffCartFacade.prototype.orderResultErrors$;
    /** @type {?} */
    DaffCartFacade.prototype.orderResult$;
    /** @type {?} */
    DaffCartFacade.prototype.orderResultId$;
    /** @type {?} */
    DaffCartFacade.prototype.orderResultCartId$;
    /** @type {?} */
    DaffCartFacade.prototype.hasOrderResult$;
    /**
     * @type {?}
     * @private
     */
    DaffCartFacade.prototype._selectCartItemDiscountedRowTotal;
    /**
     * @type {?}
     * @private
     */
    DaffCartFacade.prototype._selectCartItemConfiguredAttributes;
    /**
     * @type {?}
     * @private
     */
    DaffCartFacade.prototype._selectCartItemCompositeOptions;
    /**
     * @type {?}
     * @private
     */
    DaffCartFacade.prototype._selectIsCartItemOutOfStock;
    /**
     * @type {?}
     * @private
     */
    DaffCartFacade.prototype._selectCartItemState;
    /**
     * @type {?}
     * @private
     */
    DaffCartFacade.prototype.store;
    /**
     * @type {?}
     * @private
     */
    DaffCartFacade.prototype.paymentMethodMap;
    /* Skipping unhandled member: ;*/
    /* Skipping unhandled member: ;*/
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FydC5mYWNhZGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGFmZm9kaWwvY2FydC9zdGF0ZS8iLCJzb3VyY2VzIjpbImZhY2FkZXMvY2FydC9jYXJ0LmZhY2FkZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFbkQsT0FBTyxFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3JDLE9BQU8sRUFBVSxLQUFLLEVBQUUsTUFBTSxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBSXBELE9BQU8sRUFBZ0QsMEJBQTBCLEVBQWtFLE1BQU0sZ0JBQWdCLENBQUM7QUFHMUssT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sNEJBQTRCLENBQUM7Ozs7Ozs7QUFVbEUsTUFBTSxPQUFPLGNBQWM7Ozs7O0lBaUd6QixZQUNVLEtBQTRDLEVBQ1IsZ0JBQXdCO1FBRDVELFVBQUssR0FBTCxLQUFLLENBQXVDO1FBQ1IscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFRO2NBRWhFLEVBQ0YsZUFBZSxFQUVmLGtCQUFrQixFQUVsQix1QkFBdUIsRUFDdkIsd0JBQXdCLEVBQ3hCLDBCQUEwQixFQUMxQix5QkFBeUIsRUFDekIsaUJBQWlCLEVBQ2pCLG1CQUFtQixFQUNuQixrQkFBa0IsRUFDbEIsMkJBQTJCLEVBQzNCLDZCQUE2QixFQUM3Qiw0QkFBNEIsRUFDNUIsNEJBQTRCLEVBQzVCLDhCQUE4QixFQUM5Qiw2QkFBNkIsRUFDN0IsZ0NBQWdDLEVBQ2hDLGtDQUFrQyxFQUNsQyxpQ0FBaUMsRUFDakMsNEJBQTRCLEVBQzVCLDhCQUE4QixFQUM5QixvQkFBb0IsRUFDcEIsc0JBQXNCLEVBQ3RCLHFCQUFxQixFQUNyQiwyQkFBMkIsRUFDM0IsNkJBQTZCLEVBQzdCLG1CQUFtQixFQUNuQixxQkFBcUIsRUFDckIsb0JBQW9CLEVBQ3BCLGlCQUFpQixFQUNqQixnQkFBZ0IsRUFDaEIsbUJBQW1CLEVBQ25CLHNCQUFzQixFQUV6QixzQkFBc0IsRUFDdEIsZ0JBQWdCLEVBQ2hCLGdCQUFnQixFQUNoQiwwQkFBMEIsRUFDMUIsMkJBQTJCLEVBQzNCLCtCQUErQixFQUMvQiwyQkFBMkIsRUFDM0IsbUJBQW1CLEVBQ2hCLDBCQUEwQixFQUMxQixrQkFBa0IsRUFFckIsWUFBWSxFQUNaLGtCQUFrQixFQUNsQixvQkFBb0IsRUFDcEIsOEJBQThCLEVBQzlCLDhCQUE4QixFQUM5QiwwQ0FBMEMsRUFDMUMsMENBQTBDLEVBQzFDLHdCQUF3QixFQUN4QixrQkFBa0IsRUFDbEIsdUJBQXVCLEVBQ3ZCLGlCQUFpQixFQUNqQixlQUFlLEVBQ2YsNEJBQTRCLEVBQzVCLHNCQUFzQixFQUN0Qiw0QkFBNEIsRUFDNUIsa0NBQWtDLEVBQ2xDLDhCQUE4QixFQUM5Qix3QkFBd0IsRUFDeEIseUJBQXlCLEVBQ3pCLGlCQUFpQixFQUNqQixnQkFBZ0IsRUFDaEIsNkJBQTZCLEVBQzdCLGtDQUFrQyxFQUMvQixpQ0FBaUMsRUFFakMsaUJBQWlCLEVBQ2pCLDZCQUE2QixFQUU3QixzQkFBc0IsRUFDdEIscUJBQXFCLEVBQ3JCLG9CQUFvQixFQUN2QixpQkFBaUIsRUFDakIscUJBQXFCLEVBQ2xCLG9CQUFvQixFQUNwQixnQ0FBZ0MsRUFDbkMsMEJBQTBCLEVBQzFCLG1CQUFtQixFQUVoQix1QkFBdUIsRUFDdkIsd0JBQXdCLEVBQ3hCLHVCQUF1QixFQUN2QixzQkFBc0IsRUFDdEIsbUJBQW1CLEVBQ3RCLEdBQUcsb0JBQW9CLEVBQVc7UUFDbkMsSUFBSSxDQUFDLGlDQUFpQyxHQUFHLGdDQUFnQyxDQUFDO1FBQzFFLElBQUksQ0FBQyxtQ0FBbUMsR0FBRyxrQ0FBa0MsQ0FBQztRQUM5RSxJQUFJLENBQUMsK0JBQStCLEdBQUcsOEJBQThCLENBQUM7UUFDdEUsSUFBSSxDQUFDLDJCQUEyQixHQUFHLDBCQUEwQixDQUFDO1FBQzlELElBQUksQ0FBQyxvQkFBb0IsR0FBRyxtQkFBbUIsQ0FBQztRQUU5QyxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDO1FBRXRELElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLGtCQUFrQixDQUFDLENBQUMsQ0FBQztRQUU3RCxJQUFJLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDLENBQUM7UUFDdkUsSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsd0JBQXdCLENBQUMsQ0FBQyxDQUFDO1FBQ3pFLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsMEJBQTBCLENBQUMsQ0FBQyxDQUFDO1FBQzdFLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMseUJBQXlCLENBQUMsQ0FBQyxDQUFDO1FBQzNFLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLGlCQUFpQixDQUFDLENBQUMsQ0FBQztRQUMzRCxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDLENBQUM7UUFDL0QsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsa0JBQWtCLENBQUMsQ0FBQyxDQUFDO1FBQzdELElBQUksQ0FBQyxzQkFBc0IsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsMkJBQTJCLENBQUMsQ0FBQyxDQUFDO1FBQ25GLElBQUksQ0FBQyx3QkFBd0IsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsNkJBQTZCLENBQUMsQ0FBQyxDQUFDO1FBQ3ZGLElBQUksQ0FBQyx1QkFBdUIsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsNEJBQTRCLENBQUMsQ0FBQyxDQUFDO1FBQ3JGLElBQUksQ0FBQyx1QkFBdUIsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsNEJBQTRCLENBQUMsQ0FBQyxDQUFDO1FBQ3JGLElBQUksQ0FBQyx5QkFBeUIsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsOEJBQThCLENBQUMsQ0FBQyxDQUFDO1FBQ3pGLElBQUksQ0FBQyx3QkFBd0IsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsNkJBQTZCLENBQUMsQ0FBQyxDQUFDO1FBQ3ZGLElBQUksQ0FBQywyQkFBMkIsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsZ0NBQWdDLENBQUMsQ0FBQyxDQUFDO1FBQzdGLElBQUksQ0FBQyw2QkFBNkIsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsa0NBQWtDLENBQUMsQ0FBQyxDQUFDO1FBQ2pHLElBQUksQ0FBQyw0QkFBNEIsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsaUNBQWlDLENBQUMsQ0FBQyxDQUFDO1FBQy9GLElBQUksQ0FBQyx1QkFBdUIsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsNEJBQTRCLENBQUMsQ0FBQyxDQUFDO1FBQ3JGLElBQUksQ0FBQyx5QkFBeUIsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsOEJBQThCLENBQUMsQ0FBQyxDQUFDO1FBQ3pGLElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLG9CQUFvQixDQUFDLENBQUMsQ0FBQztRQUNyRSxJQUFJLENBQUMsaUJBQWlCLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLHNCQUFzQixDQUFDLENBQUMsQ0FBQztRQUN6RSxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLHFCQUFxQixDQUFDLENBQUMsQ0FBQztRQUN2RSxJQUFJLENBQUMsc0JBQXNCLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLDJCQUEyQixDQUFDLENBQUMsQ0FBQztRQUNuRixJQUFJLENBQUMsd0JBQXdCLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLDZCQUE2QixDQUFDLENBQUMsQ0FBQztRQUN2RixJQUFJLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDLENBQUM7UUFDbkUsSUFBSSxDQUFDLGdCQUFnQixHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDLENBQUM7UUFDdkUsSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsb0JBQW9CLENBQUMsQ0FBQyxDQUFDO1FBQ3JFLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLGlCQUFpQixDQUFDLENBQUMsQ0FBQztRQUMvRCxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLENBQUM7UUFDN0QsSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsbUJBQW1CLENBQUMsQ0FBQyxDQUFDO1FBQ25FLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLHNCQUFzQixDQUFDLENBQUMsQ0FBQztRQUVyRSxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDLENBQUM7UUFDL0QsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxDQUFDO1FBQzdELElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLGdCQUFnQixDQUFDLENBQUMsQ0FBQztRQUM3RCxJQUFJLENBQUMscUJBQXFCLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLDBCQUEwQixDQUFDLENBQUMsQ0FBQztRQUNqRixJQUFJLENBQUMsc0JBQXNCLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLDJCQUEyQixDQUFDLENBQUMsQ0FBQztRQUNuRixJQUFJLENBQUMsMEJBQTBCLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLCtCQUErQixDQUFDLENBQUMsQ0FBQztRQUMzRixJQUFJLENBQUMsc0JBQXNCLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLDJCQUEyQixDQUFDLENBQUMsQ0FBQztRQUNuRixJQUFJLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDLENBQUM7UUFDbkUsSUFBSSxDQUFDLHFCQUFxQixHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQywwQkFBMEIsQ0FBQyxDQUFDLENBQUM7UUFDakYsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsa0JBQWtCLENBQUMsQ0FBQyxDQUFDO1FBRWpFLElBQUksQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUM7UUFDakQsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsa0JBQWtCLENBQUMsQ0FBQyxDQUFDO1FBQzdELElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLG9CQUFvQixDQUFDLENBQUMsQ0FBQztRQUNqRSxJQUFJLENBQUMscUJBQXFCLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLDhCQUE4QixDQUFDLENBQUMsQ0FBQztRQUNyRixJQUFJLENBQUMscUJBQXFCLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLDhCQUE4QixDQUFDLENBQUMsQ0FBQztRQUNyRixJQUFJLENBQUMsaUNBQWlDLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLDBDQUEwQyxDQUFDLENBQUMsQ0FBQztRQUM3RyxJQUFJLENBQUMsaUNBQWlDLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLDBDQUEwQyxDQUFDLENBQUMsQ0FBQztRQUM3RyxJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyx3QkFBd0IsQ0FBQyxDQUFDLENBQUM7UUFDekUsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsa0JBQWtCLENBQUMsQ0FBQyxDQUFDO1FBQzdELElBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLHVCQUF1QixDQUFDLENBQUMsQ0FBQztRQUN2RSxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLENBQUM7UUFDM0QsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQztRQUN2RCxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyw0QkFBNEIsQ0FBQyxDQUFDLENBQUM7UUFDekUsSUFBSSxDQUFDLG1CQUFtQixHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyw0QkFBNEIsQ0FBQyxDQUFDLENBQUM7UUFDakYsSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsc0JBQXNCLENBQUMsQ0FBQyxDQUFDO1FBQ3ZFLElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLHdCQUF3QixDQUFDLENBQUMsQ0FBQztRQUN6RSxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLHlCQUF5QixDQUFDLENBQUMsQ0FBQztRQUMzRSxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLENBQUM7UUFDM0QsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxDQUFDO1FBQ3pELElBQUksQ0FBQyxvQkFBb0IsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsNkJBQTZCLENBQUMsQ0FBQyxDQUFDO1FBQ25GLElBQUksQ0FBQyx5QkFBeUIsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsa0NBQWtDLENBQUMsQ0FBQyxDQUFDO1FBQzdGLElBQUksQ0FBQyx3QkFBd0IsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsaUNBQWlDLENBQUMsQ0FBQyxDQUFDO1FBQzNGLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQ2xDLEdBQUc7Ozs7UUFBQyxPQUFPLENBQUMsRUFBRSxDQUNaLE9BQU8sSUFBSSxPQUFPLENBQUMsTUFBTTtZQUN2QixDQUFDLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUM7WUFDdkMsQ0FBQyxDQUFDLElBQUksRUFDVCxDQUNGLENBQUM7UUFFRixJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLENBQUM7UUFDL0QsSUFBSSxDQUFDLHdCQUF3QixHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyw2QkFBNkIsQ0FBQyxDQUFDLENBQUM7UUFFdkYsSUFBSSxDQUFDLGtCQUFrQixHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDLENBQUM7UUFDM0UsSUFBSSxDQUFDLG1CQUFtQixHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyx3QkFBd0IsQ0FBQyxDQUFDLENBQUM7UUFDN0UsSUFBSSxDQUFDLGtCQUFrQixHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDLENBQUM7UUFDM0UsSUFBSSxDQUFDLGlCQUFpQixHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDLENBQUM7UUFDekUsSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsbUJBQW1CLENBQUMsQ0FBQyxDQUFDO1FBRW5FLElBQUksQ0FBQyxtQkFBbUIsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsc0JBQXNCLENBQUMsQ0FBQyxDQUFDO1FBQzNFLElBQUksQ0FBQyxrQkFBa0IsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMscUJBQXFCLENBQUMsQ0FBQyxDQUFDO1FBQ3pFLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLG9CQUFvQixDQUFDLENBQUMsQ0FBQztRQUNsRSxJQUFJLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLENBQUM7UUFDakUsSUFBSSxDQUFDLGtCQUFrQixHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDLENBQUM7UUFDekUsSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsb0JBQW9CLENBQUMsQ0FBQyxDQUFDO0lBQ3hFLENBQUM7Ozs7O0lBRUQsK0JBQStCLENBQUMsTUFBb0I7UUFDbkQsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLG1DQUFtQyxFQUFFLEVBQUUsRUFBRSxFQUFFLE1BQU0sRUFBRSxDQUFDLENBQUMsQ0FBQTtJQUN6RixDQUFDO0lBQUEsQ0FBQzs7Ozs7SUFFRCwyQkFBMkIsQ0FBQyxNQUFvQjtRQUNoRCxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsK0JBQStCLEVBQUUsRUFBRSxFQUFFLEVBQUUsTUFBTSxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQ3RGLENBQUM7SUFBQSxDQUFDOzs7OztJQUVGLDBCQUEwQixDQUFDLE1BQW9CO1FBQzlDLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxpQ0FBaUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxNQUFNLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDeEYsQ0FBQzs7Ozs7SUFFRCxvQkFBb0IsQ0FBQyxNQUFvQjtRQUN4QyxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsMkJBQTJCLEVBQUUsRUFBRSxFQUFFLEVBQUUsTUFBTSxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQ2xGLENBQUM7Ozs7O0lBRUQsZ0JBQWdCLENBQUMsTUFBb0I7UUFDcEMsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLG9CQUFvQixFQUFFLEVBQUUsRUFBRSxFQUFFLE1BQU0sRUFBRSxDQUFDLENBQUMsQ0FBQztJQUMzRSxDQUFDOzs7OztJQUVBLFFBQVEsQ0FBQyxNQUFjO1FBQ3JCLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQzlCLENBQUM7OztZQTVURixVQUFVLFNBQUM7Z0JBQ1YsVUFBVSxFQUFFLE1BQU07YUFDbkI7Ozs7WUFoQmdCLEtBQUs7WUFvSDRDLE1BQU0sdUJBQW5FLE1BQU0sU0FBQywwQkFBMEI7Ozs7O0lBOUZwQywrQkFBcUI7O0lBRXJCLG1DQUE0Qzs7SUFFNUMsd0NBQTRDOztJQUM1Qyx5Q0FBcUM7O0lBQ3JDLDJDQUF1Qzs7SUFDdkMsMENBQXNDOztJQUN0QyxrQ0FBOEI7O0lBQzlCLG9DQUFnQzs7SUFDaEMsbUNBQStCOztJQUMvQixnREFBNEM7O0lBQzVDLGtEQUE4Qzs7SUFDOUMsaURBQTZDOztJQUM3QyxpREFBNkM7O0lBQzdDLG1EQUErQzs7SUFDL0Msa0RBQThDOztJQUM5QyxxREFBaUQ7O0lBQ2pELHVEQUFtRDs7SUFDbkQsc0RBQWtEOztJQUNsRCxpREFBNkM7O0lBQzdDLG1EQUErQzs7SUFDL0MseUNBQXFDOztJQUNyQywyQ0FBdUM7O0lBQ3ZDLDBDQUFzQzs7SUFDdEMsZ0RBQTRDOztJQUM1QyxrREFBOEM7O0lBQzlDLHdDQUFvQzs7SUFDcEMsMENBQXNDOztJQUN0Qyx5Q0FBcUM7O0lBQ3JDLHNDQUFrQzs7SUFDbEMscUNBQWlDOztJQUNqQyx3Q0FBb0M7O0lBQ3JDLHVDQUFtQzs7SUFFbEMsaUNBQW9DOztJQUNwQyxxQ0FBb0U7O0lBQ3BFLHFDQUFvRTs7SUFDcEUsK0NBQXdGOztJQUN4RixnREFBMEY7O0lBQzFGLG9EQUFrRzs7SUFDbEcsZ0RBQTBGOztJQUMxRix3Q0FBMEU7O0lBQzFFLCtDQUF3Rjs7SUFDeEYsdUNBQXdFOztJQUV4RSw2QkFBZ0M7O0lBQ2hDLG1DQUE4Qzs7SUFDOUMscUNBQWdEOztJQUNoRCwrQ0FBMEQ7O0lBQzFELCtDQUEwRDs7SUFDMUQsMkRBQXNFOztJQUN0RSwyREFBc0U7O0lBQ3RFLHlDQUE2Qzs7SUFDN0MsbUNBQThDOztJQUM5Qyx3Q0FBbUQ7O0lBQ25ELGtDQUEwQzs7SUFDMUMsZ0NBQXNDOztJQUN0QyxxQ0FBZ0M7O0lBQ2hDLDZDQUF5Qzs7SUFDekMseUNBQTJDOztJQUMzQyx5Q0FBeUQ7O0lBQ3pELDBDQUEyRDs7SUFDM0Qsa0NBQTBDOztJQUMxQyxpQ0FBd0M7O0lBQ3hDLDhDQUFtRTs7SUFDbkUsbURBQThFOztJQUM5RSxrREFBNEU7O0lBQzVFLG9DQUE0Qjs7SUFFNUIsc0NBQWtDOztJQUNsQyxrREFBOEM7O0lBRTlDLDRDQUF3Qzs7SUFDeEMsNkNBQXlDOztJQUN6Qyw0Q0FBd0M7O0lBQ3hDLDJDQUF1Qzs7SUFDdkMsd0NBQW9DOztJQUVwQyw2Q0FBeUM7O0lBQzFDLDRDQUFpRDs7SUFDakQsc0NBQTRCOztJQUM1Qix3Q0FBeUM7O0lBQ3pDLDRDQUE0Qzs7SUFDM0MseUNBQXFDOzs7OztJQUV0QywyREFBMEM7Ozs7O0lBQzFDLDZEQUE0Qzs7Ozs7SUFDNUMseURBQXdDOzs7OztJQUN4QyxxREFBb0M7Ozs7O0lBQ3BDLDhDQUE2Qjs7Ozs7SUFHMUIsK0JBQW9EOzs7OztJQUNwRCwwQ0FBb0UiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3QsIEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IG1hcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IEFjdGlvbiwgU3RvcmUsIHNlbGVjdCB9IGZyb20gJ0BuZ3J4L3N0b3JlJztcbmltcG9ydCB7IERpY3Rpb25hcnkgfSBmcm9tICdAbmdyeC9lbnRpdHknO1xuXG5pbXBvcnQgeyBEYWZmU3RhdGVFcnJvciB9IGZyb20gJ0BkYWZmb2RpbC9jb3JlL3N0YXRlJztcbmltcG9ydCB7IERhZmZDYXJ0LCBEYWZmQ2FydE9yZGVyUmVzdWx0LCBEYWZmQ2FydFRvdGFsLCBEYWZmQ2FydFBheW1lbnRNZXRob2RJZE1hcCwgRGFmZkNvbmZpZ3VyYWJsZUNhcnRJdGVtQXR0cmlidXRlLCBEYWZmQ29tcG9zaXRlQ2FydEl0ZW1PcHRpb24gfSBmcm9tICdAZGFmZm9kaWwvY2FydCc7XG5cbmltcG9ydCB7IERhZmZDYXJ0UmVkdWNlcnNTdGF0ZSwgRGFmZkNhcnRSZXNvbHZlU3RhdGUgfSBmcm9tICcuLi8uLi9yZWR1Y2Vycy9wdWJsaWNfYXBpJztcbmltcG9ydCB7IGdldERhZmZDYXJ0U2VsZWN0b3JzIH0gZnJvbSAnLi4vLi4vc2VsZWN0b3JzL3B1YmxpY19hcGknO1xuaW1wb3J0IHsgRGFmZkNhcnRFcnJvcnMgfSBmcm9tICcuLi8uLi9yZWR1Y2Vycy9lcnJvcnMvY2FydC1lcnJvcnMudHlwZSc7XG5pbXBvcnQgeyBEYWZmQ2FydE9wZXJhdGlvblR5cGUgfSBmcm9tICcuLi8uLi9yZWR1Y2Vycy9jYXJ0LW9wZXJhdGlvbi10eXBlLmVudW0nO1xuaW1wb3J0IHsgRGFmZkNhcnRGYWNhZGVJbnRlcmZhY2UgfSBmcm9tICcuL2NhcnQtZmFjYWRlLmludGVyZmFjZSc7XG5pbXBvcnQgeyBEYWZmQ2FydExvYWRpbmcgfSBmcm9tICcuLi8uLi9yZWR1Y2Vycy9sb2FkaW5nL2NhcnQtbG9hZGluZy50eXBlJztcbmltcG9ydCB7IERhZmZDYXJ0SXRlbVN0YXRlRW51bSwgRGFmZlN0YXRlZnVsQ2FydEl0ZW0gfSBmcm9tICcuLi8uLi9tb2RlbHMvc3RhdGVmdWwtY2FydC1pdGVtJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgRGFmZkNhcnRGYWNhZGU8XG4gIFQgZXh0ZW5kcyBEYWZmQ2FydCA9IERhZmZDYXJ0LFxuXHRWIGV4dGVuZHMgRGFmZkNhcnRPcmRlclJlc3VsdCA9IERhZmZDYXJ0T3JkZXJSZXN1bHQsXG5cdFUgZXh0ZW5kcyBEYWZmU3RhdGVmdWxDYXJ0SXRlbSA9IERhZmZTdGF0ZWZ1bENhcnRJdGVtXG4+IGltcGxlbWVudHMgRGFmZkNhcnRGYWNhZGVJbnRlcmZhY2U8VCwgViwgVT4ge1xuICBjYXJ0JDogT2JzZXJ2YWJsZTxUPjtcblxuICByZXNvbHZlZCQ6IE9ic2VydmFibGU8RGFmZkNhcnRSZXNvbHZlU3RhdGU+O1xuXG4gIGxvYWRpbmdPYmplY3QkOiBPYnNlcnZhYmxlPERhZmZDYXJ0TG9hZGluZz47XG4gIGZlYXR1cmVMb2FkaW5nJDogT2JzZXJ2YWJsZTxib29sZWFuPjtcbiAgZmVhdHVyZVJlc29sdmluZyQ6IE9ic2VydmFibGU8Ym9vbGVhbj47XG4gIGZlYXR1cmVNdXRhdGluZyQ6IE9ic2VydmFibGU8Ym9vbGVhbj47XG4gIGxvYWRpbmckOiBPYnNlcnZhYmxlPGJvb2xlYW4+O1xuICByZXNvbHZpbmckOiBPYnNlcnZhYmxlPGJvb2xlYW4+O1xuICBtdXRhdGluZyQ6IE9ic2VydmFibGU8Ym9vbGVhbj47XG4gIGJpbGxpbmdBZGRyZXNzTG9hZGluZyQ6IE9ic2VydmFibGU8Ym9vbGVhbj47XG4gIGJpbGxpbmdBZGRyZXNzUmVzb2x2aW5nJDogT2JzZXJ2YWJsZTxib29sZWFuPjtcbiAgYmlsbGluZ0FkZHJlc3NNdXRhdGluZyQ6IE9ic2VydmFibGU8Ym9vbGVhbj47XG4gIHNoaXBwaW5nQWRkcmVzc0xvYWRpbmckOiBPYnNlcnZhYmxlPGJvb2xlYW4+O1xuICBzaGlwcGluZ0FkZHJlc3NSZXNvbHZpbmckOiBPYnNlcnZhYmxlPGJvb2xlYW4+O1xuICBzaGlwcGluZ0FkZHJlc3NNdXRhdGluZyQ6IE9ic2VydmFibGU8Ym9vbGVhbj47XG4gIHNoaXBwaW5nSW5mb3JtYXRpb25Mb2FkaW5nJDogT2JzZXJ2YWJsZTxib29sZWFuPjtcbiAgc2hpcHBpbmdJbmZvcm1hdGlvblJlc29sdmluZyQ6IE9ic2VydmFibGU8Ym9vbGVhbj47XG4gIHNoaXBwaW5nSW5mb3JtYXRpb25NdXRhdGluZyQ6IE9ic2VydmFibGU8Ym9vbGVhbj47XG4gIHNoaXBwaW5nTWV0aG9kc0xvYWRpbmckOiBPYnNlcnZhYmxlPGJvb2xlYW4+O1xuICBzaGlwcGluZ01ldGhvZHNSZXNvbHZpbmckOiBPYnNlcnZhYmxlPGJvb2xlYW4+O1xuICBwYXltZW50TG9hZGluZyQ6IE9ic2VydmFibGU8Ym9vbGVhbj47XG4gIHBheW1lbnRSZXNvbHZpbmckOiBPYnNlcnZhYmxlPGJvb2xlYW4+O1xuICBwYXltZW50TXV0YXRpbmckOiBPYnNlcnZhYmxlPGJvb2xlYW4+O1xuICBwYXltZW50TWV0aG9kc0xvYWRpbmckOiBPYnNlcnZhYmxlPGJvb2xlYW4+O1xuICBwYXltZW50TWV0aG9kc1Jlc29sdmluZyQ6IE9ic2VydmFibGU8Ym9vbGVhbj47XG4gIGNvdXBvbkxvYWRpbmckOiBPYnNlcnZhYmxlPGJvb2xlYW4+O1xuICBjb3Vwb25SZXNvbHZpbmckOiBPYnNlcnZhYmxlPGJvb2xlYW4+O1xuICBjb3Vwb25NdXRhdGluZyQ6IE9ic2VydmFibGU8Ym9vbGVhbj47XG4gIGl0ZW1Mb2FkaW5nJDogT2JzZXJ2YWJsZTxib29sZWFuPjtcbiAgaXRlbUFkZGluZyQ6IE9ic2VydmFibGU8Ym9vbGVhbj47XG4gIGl0ZW1SZXNvbHZpbmckOiBPYnNlcnZhYmxlPGJvb2xlYW4+O1xuXHRpdGVtTXV0YXRpbmckOiBPYnNlcnZhYmxlPGJvb2xlYW4+O1xuXG4gIGVycm9ycyQ6IE9ic2VydmFibGU8RGFmZkNhcnRFcnJvcnM+O1xuICBjYXJ0RXJyb3JzJDogT2JzZXJ2YWJsZTxEYWZmQ2FydEVycm9yc1tEYWZmQ2FydE9wZXJhdGlvblR5cGUuQ2FydF0+O1xuICBpdGVtRXJyb3JzJDogT2JzZXJ2YWJsZTxEYWZmQ2FydEVycm9yc1tEYWZmQ2FydE9wZXJhdGlvblR5cGUuSXRlbV0+O1xuICBiaWxsaW5nQWRkcmVzc0Vycm9ycyQ6IE9ic2VydmFibGU8RGFmZkNhcnRFcnJvcnNbRGFmZkNhcnRPcGVyYXRpb25UeXBlLkJpbGxpbmdBZGRyZXNzXT47XG4gIHNoaXBwaW5nQWRkcmVzc0Vycm9ycyQ6IE9ic2VydmFibGU8RGFmZkNhcnRFcnJvcnNbRGFmZkNhcnRPcGVyYXRpb25UeXBlLlNoaXBwaW5nQWRkcmVzc10+O1xuICBzaGlwcGluZ0luZm9ybWF0aW9uRXJyb3JzJDogT2JzZXJ2YWJsZTxEYWZmQ2FydEVycm9yc1tEYWZmQ2FydE9wZXJhdGlvblR5cGUuU2hpcHBpbmdJbmZvcm1hdGlvbl0+O1xuICBzaGlwcGluZ01ldGhvZHNFcnJvcnMkOiBPYnNlcnZhYmxlPERhZmZDYXJ0RXJyb3JzW0RhZmZDYXJ0T3BlcmF0aW9uVHlwZS5TaGlwcGluZ01ldGhvZHNdPjtcbiAgcGF5bWVudEVycm9ycyQ6IE9ic2VydmFibGU8RGFmZkNhcnRFcnJvcnNbRGFmZkNhcnRPcGVyYXRpb25UeXBlLlBheW1lbnRdPjtcbiAgcGF5bWVudE1ldGhvZHNFcnJvcnMkOiBPYnNlcnZhYmxlPERhZmZDYXJ0RXJyb3JzW0RhZmZDYXJ0T3BlcmF0aW9uVHlwZS5QYXltZW50TWV0aG9kc10+O1xuICBjb3Vwb25FcnJvcnMkOiBPYnNlcnZhYmxlPERhZmZDYXJ0RXJyb3JzW0RhZmZDYXJ0T3BlcmF0aW9uVHlwZS5Db3Vwb25dPjtcblxuICBpZCQ6IE9ic2VydmFibGU8RGFmZkNhcnRbJ2lkJ10+O1xuICBzdWJ0b3RhbCQ6IE9ic2VydmFibGU8RGFmZkNhcnRUb3RhbFsndmFsdWUnXT47XG4gIGdyYW5kVG90YWwkOiBPYnNlcnZhYmxlPERhZmZDYXJ0VG90YWxbJ3ZhbHVlJ10+O1xuICBzdWJ0b3RhbEV4Y2x1ZGluZ1RheCQ6IE9ic2VydmFibGU8RGFmZkNhcnRUb3RhbFsndmFsdWUnXT47XG4gIHN1YnRvdGFsSW5jbHVkaW5nVGF4JDogT2JzZXJ2YWJsZTxEYWZmQ2FydFRvdGFsWyd2YWx1ZSddPjtcbiAgc3VidG90YWxXaXRoRGlzY291bnRFeGNsdWRpbmdUYXgkOiBPYnNlcnZhYmxlPERhZmZDYXJ0VG90YWxbJ3ZhbHVlJ10+O1xuICBzdWJ0b3RhbFdpdGhEaXNjb3VudEluY2x1ZGluZ1RheCQ6IE9ic2VydmFibGU8RGFmZkNhcnRUb3RhbFsndmFsdWUnXT47XG4gIGRpc2NvdW50VG90YWxzJDogT2JzZXJ2YWJsZTxEYWZmQ2FydFRvdGFsW10+O1xuICB0b3RhbFRheCQ6IE9ic2VydmFibGU8RGFmZkNhcnRUb3RhbFsndmFsdWUnXT47XG4gIHNoaXBwaW5nVG90YWwkOiBPYnNlcnZhYmxlPERhZmZDYXJ0VG90YWxbJ3ZhbHVlJ10+O1xuICBjb3Vwb25zJDogT2JzZXJ2YWJsZTxEYWZmQ2FydFsnY291cG9ucyddPjtcbiAgaXRlbXMkOiBPYnNlcnZhYmxlPERhZmZDYXJ0WydpdGVtcyddPjtcbiAgdG90YWxJdGVtcyQ6IE9ic2VydmFibGU8bnVtYmVyPjtcbiAgaGFzT3V0T2ZTdG9ja0l0ZW1zJDogT2JzZXJ2YWJsZTxib29sZWFuPjtcbiAgaXRlbURpY3Rpb25hcnkkOiBPYnNlcnZhYmxlPERpY3Rpb25hcnk8VT4+O1xuICBiaWxsaW5nQWRkcmVzcyQ6IE9ic2VydmFibGU8RGFmZkNhcnRbJ2JpbGxpbmdfYWRkcmVzcyddPjtcbiAgc2hpcHBpbmdBZGRyZXNzJDogT2JzZXJ2YWJsZTxEYWZmQ2FydFsnc2hpcHBpbmdfYWRkcmVzcyddPjtcbiAgcGF5bWVudCQ6IE9ic2VydmFibGU8RGFmZkNhcnRbJ3BheW1lbnQnXT47XG4gIHRvdGFscyQ6IE9ic2VydmFibGU8RGFmZkNhcnRbJ3RvdGFscyddPjtcbiAgc2hpcHBpbmdJbmZvcm1hdGlvbiQ6IE9ic2VydmFibGU8RGFmZkNhcnRbJ3NoaXBwaW5nX2luZm9ybWF0aW9uJ10+O1xuICBhdmFpbGFibGVTaGlwcGluZ01ldGhvZHMkOiBPYnNlcnZhYmxlPERhZmZDYXJ0WydhdmFpbGFibGVfc2hpcHBpbmdfbWV0aG9kcyddPjtcbiAgYXZhaWxhYmxlUGF5bWVudE1ldGhvZHMkOiBPYnNlcnZhYmxlPERhZmZDYXJ0WydhdmFpbGFibGVfcGF5bWVudF9tZXRob2RzJ10+O1xuICBwYXltZW50SWQkOiBPYnNlcnZhYmxlPGFueT47XG5cbiAgaXNDYXJ0RW1wdHkkOiBPYnNlcnZhYmxlPGJvb2xlYW4+O1xuICBpc0JpbGxpbmdTYW1lQXNTaGlwcGluZyQ6IE9ic2VydmFibGU8Ym9vbGVhbj47XG5cbiAgaGFzQmlsbGluZ0FkZHJlc3MkOiBPYnNlcnZhYmxlPGJvb2xlYW4+O1xuICBoYXNTaGlwcGluZ0FkZHJlc3MkOiBPYnNlcnZhYmxlPGJvb2xlYW4+O1xuICBoYXNTaGlwcGluZ01ldGhvZCQ6IE9ic2VydmFibGU8Ym9vbGVhbj47XG4gIGhhc1BheW1lbnRNZXRob2QkOiBPYnNlcnZhYmxlPGJvb2xlYW4+O1xuICBjYW5QbGFjZU9yZGVyJDogT2JzZXJ2YWJsZTxib29sZWFuPjtcblxuICBvcmRlclJlc3VsdExvYWRpbmckOiBPYnNlcnZhYmxlPGJvb2xlYW4+O1xuXHRvcmRlclJlc3VsdEVycm9ycyQ6IE9ic2VydmFibGU8RGFmZlN0YXRlRXJyb3JbXT47XG5cdG9yZGVyUmVzdWx0JDogT2JzZXJ2YWJsZTxWPjtcblx0b3JkZXJSZXN1bHRJZCQ6IE9ic2VydmFibGU8Vlsnb3JkZXJJZCddPjtcblx0b3JkZXJSZXN1bHRDYXJ0SWQkOiBPYnNlcnZhYmxlPFZbJ2NhcnRJZCddPjtcbiAgaGFzT3JkZXJSZXN1bHQkOiBPYnNlcnZhYmxlPGJvb2xlYW4+O1xuXG5cdHByaXZhdGUgX3NlbGVjdENhcnRJdGVtRGlzY291bnRlZFJvd1RvdGFsO1xuXHRwcml2YXRlIF9zZWxlY3RDYXJ0SXRlbUNvbmZpZ3VyZWRBdHRyaWJ1dGVzO1xuXHRwcml2YXRlIF9zZWxlY3RDYXJ0SXRlbUNvbXBvc2l0ZU9wdGlvbnM7XG5cdHByaXZhdGUgX3NlbGVjdElzQ2FydEl0ZW1PdXRPZlN0b2NrO1xuXHRwcml2YXRlIF9zZWxlY3RDYXJ0SXRlbVN0YXRlO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgc3RvcmU6IFN0b3JlPERhZmZDYXJ0UmVkdWNlcnNTdGF0ZTxULCBWLCBVPj4sXG4gICAgQEluamVjdChEYWZmQ2FydFBheW1lbnRNZXRob2RJZE1hcCkgcHJpdmF0ZSBwYXltZW50TWV0aG9kTWFwOiBPYmplY3RcbiAgKSB7XG5cdFx0Y29uc3Qge1xuICAgICAgc2VsZWN0Q2FydFZhbHVlLFxuXG4gICAgICBzZWxlY3RDYXJ0UmVzb2x2ZWQsXG5cbiAgICAgIHNlbGVjdENhcnRMb2FkaW5nT2JqZWN0LFxuICAgICAgc2VsZWN0Q2FydEZlYXR1cmVMb2FkaW5nLFxuICAgICAgc2VsZWN0Q2FydEZlYXR1cmVSZXNvbHZpbmcsXG4gICAgICBzZWxlY3RDYXJ0RmVhdHVyZU11dGF0aW5nLFxuICAgICAgc2VsZWN0Q2FydExvYWRpbmcsXG4gICAgICBzZWxlY3RDYXJ0UmVzb2x2aW5nLFxuICAgICAgc2VsZWN0Q2FydE11dGF0aW5nLFxuICAgICAgc2VsZWN0QmlsbGluZ0FkZHJlc3NMb2FkaW5nLFxuICAgICAgc2VsZWN0QmlsbGluZ0FkZHJlc3NSZXNvbHZpbmcsXG4gICAgICBzZWxlY3RCaWxsaW5nQWRkcmVzc011dGF0aW5nLFxuICAgICAgc2VsZWN0U2hpcHBpbmdBZGRyZXNzTG9hZGluZyxcbiAgICAgIHNlbGVjdFNoaXBwaW5nQWRkcmVzc1Jlc29sdmluZyxcbiAgICAgIHNlbGVjdFNoaXBwaW5nQWRkcmVzc011dGF0aW5nLFxuICAgICAgc2VsZWN0U2hpcHBpbmdJbmZvcm1hdGlvbkxvYWRpbmcsXG4gICAgICBzZWxlY3RTaGlwcGluZ0luZm9ybWF0aW9uUmVzb2x2aW5nLFxuICAgICAgc2VsZWN0U2hpcHBpbmdJbmZvcm1hdGlvbk11dGF0aW5nLFxuICAgICAgc2VsZWN0U2hpcHBpbmdNZXRob2RzTG9hZGluZyxcbiAgICAgIHNlbGVjdFNoaXBwaW5nTWV0aG9kc1Jlc29sdmluZyxcbiAgICAgIHNlbGVjdFBheW1lbnRMb2FkaW5nLFxuICAgICAgc2VsZWN0UGF5bWVudFJlc29sdmluZyxcbiAgICAgIHNlbGVjdFBheW1lbnRNdXRhdGluZyxcbiAgICAgIHNlbGVjdFBheW1lbnRNZXRob2RzTG9hZGluZyxcbiAgICAgIHNlbGVjdFBheW1lbnRNZXRob2RzUmVzb2x2aW5nLFxuICAgICAgc2VsZWN0Q291cG9uTG9hZGluZyxcbiAgICAgIHNlbGVjdENvdXBvblJlc29sdmluZyxcbiAgICAgIHNlbGVjdENvdXBvbk11dGF0aW5nLFxuICAgICAgc2VsZWN0SXRlbUxvYWRpbmcsXG4gICAgICBzZWxlY3RJdGVtQWRkaW5nLFxuICAgICAgc2VsZWN0SXRlbVJlc29sdmluZyxcbiAgICAgIHNlbGVjdENhcnRJdGVtTXV0YXRpbmcsXG5cblx0XHRcdHNlbGVjdENhcnRFcnJvcnNPYmplY3QsXG5cdFx0XHRzZWxlY3RDYXJ0RXJyb3JzLFxuXHRcdFx0c2VsZWN0SXRlbUVycm9ycyxcblx0XHRcdHNlbGVjdEJpbGxpbmdBZGRyZXNzRXJyb3JzLFxuXHRcdFx0c2VsZWN0U2hpcHBpbmdBZGRyZXNzRXJyb3JzLFxuXHRcdFx0c2VsZWN0U2hpcHBpbmdJbmZvcm1hdGlvbkVycm9ycyxcblx0XHRcdHNlbGVjdFNoaXBwaW5nTWV0aG9kc0Vycm9ycyxcblx0XHRcdHNlbGVjdFBheW1lbnRFcnJvcnMsXG4gICAgICBzZWxlY3RQYXltZW50TWV0aG9kc0Vycm9ycyxcbiAgICAgIHNlbGVjdENvdXBvbkVycm9ycyxcblxuXHRcdFx0c2VsZWN0Q2FydElkLFxuXHRcdFx0c2VsZWN0Q2FydFN1YnRvdGFsLFxuXHRcdFx0c2VsZWN0Q2FydEdyYW5kVG90YWwsXG5cdFx0XHRzZWxlY3RDYXJ0U3VidG90YWxFeGNsdWRpbmdUYXgsXG5cdFx0XHRzZWxlY3RDYXJ0U3VidG90YWxJbmNsdWRpbmdUYXgsXG5cdFx0XHRzZWxlY3RDYXJ0U3VidG90YWxXaXRoRGlzY291bnRFeGNsdWRpbmdUYXgsXG5cdFx0XHRzZWxlY3RDYXJ0U3VidG90YWxXaXRoRGlzY291bnRJbmNsdWRpbmdUYXgsXG5cdFx0XHRzZWxlY3RDYXJ0RGlzY291bnRUb3RhbHMsXG5cdFx0XHRzZWxlY3RDYXJ0VG90YWxUYXgsXG5cdFx0XHRzZWxlY3RDYXJ0U2hpcHBpbmdUb3RhbCxcblx0XHRcdHNlbGVjdENhcnRDb3Vwb25zLFxuXHRcdFx0c2VsZWN0Q2FydEl0ZW1zLFxuXHRcdFx0c2VsZWN0Q2FydEhhc091dE9mU3RvY2tJdGVtcyxcblx0XHRcdHNlbGVjdENhcnRJdGVtRW50aXRpZXMsXG5cdFx0XHRzZWxlY3RUb3RhbE51bWJlck9mQ2FydEl0ZW1zLFxuXHRcdFx0c2VsZWN0Q2FydEl0ZW1Db25maWd1cmVkQXR0cmlidXRlcyxcblx0XHRcdHNlbGVjdENhcnRJdGVtQ29tcG9zaXRlT3B0aW9ucyxcblx0XHRcdHNlbGVjdENhcnRCaWxsaW5nQWRkcmVzcyxcblx0XHRcdHNlbGVjdENhcnRTaGlwcGluZ0FkZHJlc3MsXG5cdFx0XHRzZWxlY3RDYXJ0UGF5bWVudCxcblx0XHRcdHNlbGVjdENhcnRUb3RhbHMsXG5cdFx0XHRzZWxlY3RDYXJ0U2hpcHBpbmdJbmZvcm1hdGlvbixcblx0XHRcdHNlbGVjdENhcnRBdmFpbGFibGVTaGlwcGluZ01ldGhvZHMsXG4gICAgICBzZWxlY3RDYXJ0QXZhaWxhYmxlUGF5bWVudE1ldGhvZHMsXG5cbiAgICAgIHNlbGVjdElzQ2FydEVtcHR5LFxuICAgICAgc2VsZWN0SXNCaWxsaW5nU2FtZUFzU2hpcHBpbmcsXG5cbiAgICAgIHNlbGVjdENhcnRPcmRlckxvYWRpbmcsXG4gICAgICBzZWxlY3RDYXJ0T3JkZXJFcnJvcnMsXG4gICAgICBzZWxlY3RDYXJ0T3JkZXJWYWx1ZSxcblx0XHRcdHNlbGVjdENhcnRPcmRlcklkLFxuXHRcdFx0c2VsZWN0Q2FydE9yZGVyQ2FydElkLFxuICAgICAgc2VsZWN0SGFzT3JkZXJSZXN1bHQsXG4gICAgICBzZWxlY3RDYXJ0SXRlbURpc2NvdW50ZWRSb3dUb3RhbCxcblx0XHRcdHNlbGVjdElzQ2FydEl0ZW1PdXRPZlN0b2NrLFxuXHRcdFx0c2VsZWN0Q2FydEl0ZW1TdGF0ZSxcblxuICAgICAgc2VsZWN0SGFzQmlsbGluZ0FkZHJlc3MsXG4gICAgICBzZWxlY3RIYXNTaGlwcGluZ0FkZHJlc3MsXG4gICAgICBzZWxlY3RIYXNTaGlwcGluZ01ldGhvZCxcbiAgICAgIHNlbGVjdEhhc1BheW1lbnRNZXRob2QsXG4gICAgICBzZWxlY3RDYW5QbGFjZU9yZGVyXG5cdFx0fSA9IGdldERhZmZDYXJ0U2VsZWN0b3JzPFQsIFYsIFU+KCk7XG5cdFx0dGhpcy5fc2VsZWN0Q2FydEl0ZW1EaXNjb3VudGVkUm93VG90YWwgPSBzZWxlY3RDYXJ0SXRlbURpc2NvdW50ZWRSb3dUb3RhbDtcblx0XHR0aGlzLl9zZWxlY3RDYXJ0SXRlbUNvbmZpZ3VyZWRBdHRyaWJ1dGVzID0gc2VsZWN0Q2FydEl0ZW1Db25maWd1cmVkQXR0cmlidXRlcztcblx0XHR0aGlzLl9zZWxlY3RDYXJ0SXRlbUNvbXBvc2l0ZU9wdGlvbnMgPSBzZWxlY3RDYXJ0SXRlbUNvbXBvc2l0ZU9wdGlvbnM7XG5cdFx0dGhpcy5fc2VsZWN0SXNDYXJ0SXRlbU91dE9mU3RvY2sgPSBzZWxlY3RJc0NhcnRJdGVtT3V0T2ZTdG9jaztcblx0XHR0aGlzLl9zZWxlY3RDYXJ0SXRlbVN0YXRlID0gc2VsZWN0Q2FydEl0ZW1TdGF0ZTtcblxuICAgIHRoaXMuY2FydCQgPSB0aGlzLnN0b3JlLnBpcGUoc2VsZWN0KHNlbGVjdENhcnRWYWx1ZSkpO1xuXG4gICAgdGhpcy5yZXNvbHZlZCQgPSB0aGlzLnN0b3JlLnBpcGUoc2VsZWN0KHNlbGVjdENhcnRSZXNvbHZlZCkpO1xuXG4gICAgdGhpcy5sb2FkaW5nT2JqZWN0JCA9IHRoaXMuc3RvcmUucGlwZShzZWxlY3Qoc2VsZWN0Q2FydExvYWRpbmdPYmplY3QpKTtcbiAgICB0aGlzLmZlYXR1cmVMb2FkaW5nJCA9IHRoaXMuc3RvcmUucGlwZShzZWxlY3Qoc2VsZWN0Q2FydEZlYXR1cmVMb2FkaW5nKSk7XG4gICAgdGhpcy5mZWF0dXJlUmVzb2x2aW5nJCA9IHRoaXMuc3RvcmUucGlwZShzZWxlY3Qoc2VsZWN0Q2FydEZlYXR1cmVSZXNvbHZpbmcpKTtcbiAgICB0aGlzLmZlYXR1cmVNdXRhdGluZyQgPSB0aGlzLnN0b3JlLnBpcGUoc2VsZWN0KHNlbGVjdENhcnRGZWF0dXJlTXV0YXRpbmcpKTtcbiAgICB0aGlzLmxvYWRpbmckID0gdGhpcy5zdG9yZS5waXBlKHNlbGVjdChzZWxlY3RDYXJ0TG9hZGluZykpO1xuICAgIHRoaXMucmVzb2x2aW5nJCA9IHRoaXMuc3RvcmUucGlwZShzZWxlY3Qoc2VsZWN0Q2FydFJlc29sdmluZykpO1xuICAgIHRoaXMubXV0YXRpbmckID0gdGhpcy5zdG9yZS5waXBlKHNlbGVjdChzZWxlY3RDYXJ0TXV0YXRpbmcpKTtcbiAgICB0aGlzLmJpbGxpbmdBZGRyZXNzTG9hZGluZyQgPSB0aGlzLnN0b3JlLnBpcGUoc2VsZWN0KHNlbGVjdEJpbGxpbmdBZGRyZXNzTG9hZGluZykpO1xuICAgIHRoaXMuYmlsbGluZ0FkZHJlc3NSZXNvbHZpbmckID0gdGhpcy5zdG9yZS5waXBlKHNlbGVjdChzZWxlY3RCaWxsaW5nQWRkcmVzc1Jlc29sdmluZykpO1xuICAgIHRoaXMuYmlsbGluZ0FkZHJlc3NNdXRhdGluZyQgPSB0aGlzLnN0b3JlLnBpcGUoc2VsZWN0KHNlbGVjdEJpbGxpbmdBZGRyZXNzTXV0YXRpbmcpKTtcbiAgICB0aGlzLnNoaXBwaW5nQWRkcmVzc0xvYWRpbmckID0gdGhpcy5zdG9yZS5waXBlKHNlbGVjdChzZWxlY3RTaGlwcGluZ0FkZHJlc3NMb2FkaW5nKSk7XG4gICAgdGhpcy5zaGlwcGluZ0FkZHJlc3NSZXNvbHZpbmckID0gdGhpcy5zdG9yZS5waXBlKHNlbGVjdChzZWxlY3RTaGlwcGluZ0FkZHJlc3NSZXNvbHZpbmcpKTtcbiAgICB0aGlzLnNoaXBwaW5nQWRkcmVzc011dGF0aW5nJCA9IHRoaXMuc3RvcmUucGlwZShzZWxlY3Qoc2VsZWN0U2hpcHBpbmdBZGRyZXNzTXV0YXRpbmcpKTtcbiAgICB0aGlzLnNoaXBwaW5nSW5mb3JtYXRpb25Mb2FkaW5nJCA9IHRoaXMuc3RvcmUucGlwZShzZWxlY3Qoc2VsZWN0U2hpcHBpbmdJbmZvcm1hdGlvbkxvYWRpbmcpKTtcbiAgICB0aGlzLnNoaXBwaW5nSW5mb3JtYXRpb25SZXNvbHZpbmckID0gdGhpcy5zdG9yZS5waXBlKHNlbGVjdChzZWxlY3RTaGlwcGluZ0luZm9ybWF0aW9uUmVzb2x2aW5nKSk7XG4gICAgdGhpcy5zaGlwcGluZ0luZm9ybWF0aW9uTXV0YXRpbmckID0gdGhpcy5zdG9yZS5waXBlKHNlbGVjdChzZWxlY3RTaGlwcGluZ0luZm9ybWF0aW9uTXV0YXRpbmcpKTtcbiAgICB0aGlzLnNoaXBwaW5nTWV0aG9kc0xvYWRpbmckID0gdGhpcy5zdG9yZS5waXBlKHNlbGVjdChzZWxlY3RTaGlwcGluZ01ldGhvZHNMb2FkaW5nKSk7XG4gICAgdGhpcy5zaGlwcGluZ01ldGhvZHNSZXNvbHZpbmckID0gdGhpcy5zdG9yZS5waXBlKHNlbGVjdChzZWxlY3RTaGlwcGluZ01ldGhvZHNSZXNvbHZpbmcpKTtcbiAgICB0aGlzLnBheW1lbnRMb2FkaW5nJCA9IHRoaXMuc3RvcmUucGlwZShzZWxlY3Qoc2VsZWN0UGF5bWVudExvYWRpbmcpKTtcbiAgICB0aGlzLnBheW1lbnRSZXNvbHZpbmckID0gdGhpcy5zdG9yZS5waXBlKHNlbGVjdChzZWxlY3RQYXltZW50UmVzb2x2aW5nKSk7XG4gICAgdGhpcy5wYXltZW50TXV0YXRpbmckID0gdGhpcy5zdG9yZS5waXBlKHNlbGVjdChzZWxlY3RQYXltZW50TXV0YXRpbmcpKTtcbiAgICB0aGlzLnBheW1lbnRNZXRob2RzTG9hZGluZyQgPSB0aGlzLnN0b3JlLnBpcGUoc2VsZWN0KHNlbGVjdFBheW1lbnRNZXRob2RzTG9hZGluZykpO1xuICAgIHRoaXMucGF5bWVudE1ldGhvZHNSZXNvbHZpbmckID0gdGhpcy5zdG9yZS5waXBlKHNlbGVjdChzZWxlY3RQYXltZW50TWV0aG9kc1Jlc29sdmluZykpO1xuICAgIHRoaXMuY291cG9uTG9hZGluZyQgPSB0aGlzLnN0b3JlLnBpcGUoc2VsZWN0KHNlbGVjdENvdXBvbkxvYWRpbmcpKTtcbiAgICB0aGlzLmNvdXBvblJlc29sdmluZyQgPSB0aGlzLnN0b3JlLnBpcGUoc2VsZWN0KHNlbGVjdENvdXBvblJlc29sdmluZykpO1xuICAgIHRoaXMuY291cG9uTXV0YXRpbmckID0gdGhpcy5zdG9yZS5waXBlKHNlbGVjdChzZWxlY3RDb3Vwb25NdXRhdGluZykpO1xuICAgIHRoaXMuaXRlbUxvYWRpbmckID0gdGhpcy5zdG9yZS5waXBlKHNlbGVjdChzZWxlY3RJdGVtTG9hZGluZykpO1xuICAgIHRoaXMuaXRlbUFkZGluZyQgPSB0aGlzLnN0b3JlLnBpcGUoc2VsZWN0KHNlbGVjdEl0ZW1BZGRpbmcpKTtcbiAgICB0aGlzLml0ZW1SZXNvbHZpbmckID0gdGhpcy5zdG9yZS5waXBlKHNlbGVjdChzZWxlY3RJdGVtUmVzb2x2aW5nKSk7XG4gICAgdGhpcy5pdGVtTXV0YXRpbmckID0gdGhpcy5zdG9yZS5waXBlKHNlbGVjdChzZWxlY3RDYXJ0SXRlbU11dGF0aW5nKSk7XG5cbiAgICB0aGlzLmVycm9ycyQgPSB0aGlzLnN0b3JlLnBpcGUoc2VsZWN0KHNlbGVjdENhcnRFcnJvcnNPYmplY3QpKTtcbiAgICB0aGlzLmNhcnRFcnJvcnMkID0gdGhpcy5zdG9yZS5waXBlKHNlbGVjdChzZWxlY3RDYXJ0RXJyb3JzKSk7XG4gICAgdGhpcy5pdGVtRXJyb3JzJCA9IHRoaXMuc3RvcmUucGlwZShzZWxlY3Qoc2VsZWN0SXRlbUVycm9ycykpO1xuICAgIHRoaXMuYmlsbGluZ0FkZHJlc3NFcnJvcnMkID0gdGhpcy5zdG9yZS5waXBlKHNlbGVjdChzZWxlY3RCaWxsaW5nQWRkcmVzc0Vycm9ycykpO1xuICAgIHRoaXMuc2hpcHBpbmdBZGRyZXNzRXJyb3JzJCA9IHRoaXMuc3RvcmUucGlwZShzZWxlY3Qoc2VsZWN0U2hpcHBpbmdBZGRyZXNzRXJyb3JzKSk7XG4gICAgdGhpcy5zaGlwcGluZ0luZm9ybWF0aW9uRXJyb3JzJCA9IHRoaXMuc3RvcmUucGlwZShzZWxlY3Qoc2VsZWN0U2hpcHBpbmdJbmZvcm1hdGlvbkVycm9ycykpO1xuICAgIHRoaXMuc2hpcHBpbmdNZXRob2RzRXJyb3JzJCA9IHRoaXMuc3RvcmUucGlwZShzZWxlY3Qoc2VsZWN0U2hpcHBpbmdNZXRob2RzRXJyb3JzKSk7XG4gICAgdGhpcy5wYXltZW50RXJyb3JzJCA9IHRoaXMuc3RvcmUucGlwZShzZWxlY3Qoc2VsZWN0UGF5bWVudEVycm9ycykpO1xuICAgIHRoaXMucGF5bWVudE1ldGhvZHNFcnJvcnMkID0gdGhpcy5zdG9yZS5waXBlKHNlbGVjdChzZWxlY3RQYXltZW50TWV0aG9kc0Vycm9ycykpO1xuICAgIHRoaXMuY291cG9uRXJyb3JzJCA9IHRoaXMuc3RvcmUucGlwZShzZWxlY3Qoc2VsZWN0Q291cG9uRXJyb3JzKSk7XG5cbiAgICB0aGlzLmlkJCA9IHRoaXMuc3RvcmUucGlwZShzZWxlY3Qoc2VsZWN0Q2FydElkKSk7XG4gICAgdGhpcy5zdWJ0b3RhbCQgPSB0aGlzLnN0b3JlLnBpcGUoc2VsZWN0KHNlbGVjdENhcnRTdWJ0b3RhbCkpO1xuICAgIHRoaXMuZ3JhbmRUb3RhbCQgPSB0aGlzLnN0b3JlLnBpcGUoc2VsZWN0KHNlbGVjdENhcnRHcmFuZFRvdGFsKSk7XG4gICAgdGhpcy5zdWJ0b3RhbEV4Y2x1ZGluZ1RheCQgPSB0aGlzLnN0b3JlLnBpcGUoc2VsZWN0KHNlbGVjdENhcnRTdWJ0b3RhbEV4Y2x1ZGluZ1RheCkpO1xuICAgIHRoaXMuc3VidG90YWxJbmNsdWRpbmdUYXgkID0gdGhpcy5zdG9yZS5waXBlKHNlbGVjdChzZWxlY3RDYXJ0U3VidG90YWxJbmNsdWRpbmdUYXgpKTtcbiAgICB0aGlzLnN1YnRvdGFsV2l0aERpc2NvdW50RXhjbHVkaW5nVGF4JCA9IHRoaXMuc3RvcmUucGlwZShzZWxlY3Qoc2VsZWN0Q2FydFN1YnRvdGFsV2l0aERpc2NvdW50RXhjbHVkaW5nVGF4KSk7XG4gICAgdGhpcy5zdWJ0b3RhbFdpdGhEaXNjb3VudEluY2x1ZGluZ1RheCQgPSB0aGlzLnN0b3JlLnBpcGUoc2VsZWN0KHNlbGVjdENhcnRTdWJ0b3RhbFdpdGhEaXNjb3VudEluY2x1ZGluZ1RheCkpO1xuICAgIHRoaXMuZGlzY291bnRUb3RhbHMkID0gdGhpcy5zdG9yZS5waXBlKHNlbGVjdChzZWxlY3RDYXJ0RGlzY291bnRUb3RhbHMpKTtcbiAgICB0aGlzLnRvdGFsVGF4JCA9IHRoaXMuc3RvcmUucGlwZShzZWxlY3Qoc2VsZWN0Q2FydFRvdGFsVGF4KSk7XG4gICAgdGhpcy5zaGlwcGluZ1RvdGFsJCA9IHRoaXMuc3RvcmUucGlwZShzZWxlY3Qoc2VsZWN0Q2FydFNoaXBwaW5nVG90YWwpKTtcbiAgICB0aGlzLmNvdXBvbnMkID0gdGhpcy5zdG9yZS5waXBlKHNlbGVjdChzZWxlY3RDYXJ0Q291cG9ucykpO1xuICAgIHRoaXMuaXRlbXMkID0gdGhpcy5zdG9yZS5waXBlKHNlbGVjdChzZWxlY3RDYXJ0SXRlbXMpKTtcbiAgICB0aGlzLnRvdGFsSXRlbXMkID0gdGhpcy5zdG9yZS5waXBlKHNlbGVjdChzZWxlY3RUb3RhbE51bWJlck9mQ2FydEl0ZW1zKSk7XG4gICAgdGhpcy5oYXNPdXRPZlN0b2NrSXRlbXMkID0gdGhpcy5zdG9yZS5waXBlKHNlbGVjdChzZWxlY3RDYXJ0SGFzT3V0T2ZTdG9ja0l0ZW1zKSk7XG4gICAgdGhpcy5pdGVtRGljdGlvbmFyeSQgPSB0aGlzLnN0b3JlLnBpcGUoc2VsZWN0KHNlbGVjdENhcnRJdGVtRW50aXRpZXMpKTtcbiAgICB0aGlzLmJpbGxpbmdBZGRyZXNzJCA9IHRoaXMuc3RvcmUucGlwZShzZWxlY3Qoc2VsZWN0Q2FydEJpbGxpbmdBZGRyZXNzKSk7XG4gICAgdGhpcy5zaGlwcGluZ0FkZHJlc3MkID0gdGhpcy5zdG9yZS5waXBlKHNlbGVjdChzZWxlY3RDYXJ0U2hpcHBpbmdBZGRyZXNzKSk7XG4gICAgdGhpcy5wYXltZW50JCA9IHRoaXMuc3RvcmUucGlwZShzZWxlY3Qoc2VsZWN0Q2FydFBheW1lbnQpKTtcbiAgICB0aGlzLnRvdGFscyQgPSB0aGlzLnN0b3JlLnBpcGUoc2VsZWN0KHNlbGVjdENhcnRUb3RhbHMpKTtcbiAgICB0aGlzLnNoaXBwaW5nSW5mb3JtYXRpb24kID0gdGhpcy5zdG9yZS5waXBlKHNlbGVjdChzZWxlY3RDYXJ0U2hpcHBpbmdJbmZvcm1hdGlvbikpO1xuICAgIHRoaXMuYXZhaWxhYmxlU2hpcHBpbmdNZXRob2RzJCA9IHRoaXMuc3RvcmUucGlwZShzZWxlY3Qoc2VsZWN0Q2FydEF2YWlsYWJsZVNoaXBwaW5nTWV0aG9kcykpO1xuICAgIHRoaXMuYXZhaWxhYmxlUGF5bWVudE1ldGhvZHMkID0gdGhpcy5zdG9yZS5waXBlKHNlbGVjdChzZWxlY3RDYXJ0QXZhaWxhYmxlUGF5bWVudE1ldGhvZHMpKTtcbiAgICB0aGlzLnBheW1lbnRJZCQgPSB0aGlzLnBheW1lbnQkLnBpcGUoXG4gICAgICBtYXAocGF5bWVudCA9PlxuICAgICAgICBwYXltZW50ICYmIHBheW1lbnQubWV0aG9kXG4gICAgICAgICAgPyB0aGlzLnBheW1lbnRNZXRob2RNYXBbcGF5bWVudC5tZXRob2RdXG4gICAgICAgICAgOiBudWxsXG4gICAgICApXG4gICAgKTtcblxuICAgIHRoaXMuaXNDYXJ0RW1wdHkkID0gdGhpcy5zdG9yZS5waXBlKHNlbGVjdChzZWxlY3RJc0NhcnRFbXB0eSkpO1xuICAgIHRoaXMuaXNCaWxsaW5nU2FtZUFzU2hpcHBpbmckID0gdGhpcy5zdG9yZS5waXBlKHNlbGVjdChzZWxlY3RJc0JpbGxpbmdTYW1lQXNTaGlwcGluZykpO1xuXG4gICAgdGhpcy5oYXNCaWxsaW5nQWRkcmVzcyQgPSB0aGlzLnN0b3JlLnBpcGUoc2VsZWN0KHNlbGVjdEhhc0JpbGxpbmdBZGRyZXNzKSk7XG4gICAgdGhpcy5oYXNTaGlwcGluZ0FkZHJlc3MkID0gdGhpcy5zdG9yZS5waXBlKHNlbGVjdChzZWxlY3RIYXNTaGlwcGluZ0FkZHJlc3MpKTtcbiAgICB0aGlzLmhhc1NoaXBwaW5nTWV0aG9kJCA9IHRoaXMuc3RvcmUucGlwZShzZWxlY3Qoc2VsZWN0SGFzU2hpcHBpbmdNZXRob2QpKTtcbiAgICB0aGlzLmhhc1BheW1lbnRNZXRob2QkID0gdGhpcy5zdG9yZS5waXBlKHNlbGVjdChzZWxlY3RIYXNQYXltZW50TWV0aG9kKSk7XG4gICAgdGhpcy5jYW5QbGFjZU9yZGVyJCA9IHRoaXMuc3RvcmUucGlwZShzZWxlY3Qoc2VsZWN0Q2FuUGxhY2VPcmRlcikpO1xuXG4gICAgdGhpcy5vcmRlclJlc3VsdExvYWRpbmckID0gdGhpcy5zdG9yZS5waXBlKHNlbGVjdChzZWxlY3RDYXJ0T3JkZXJMb2FkaW5nKSk7XG4gICAgdGhpcy5vcmRlclJlc3VsdEVycm9ycyQgPSB0aGlzLnN0b3JlLnBpcGUoc2VsZWN0KHNlbGVjdENhcnRPcmRlckVycm9ycykpO1xuICAgIHRoaXMub3JkZXJSZXN1bHQkID0gdGhpcy5zdG9yZS5waXBlKHNlbGVjdChzZWxlY3RDYXJ0T3JkZXJWYWx1ZSkpO1xuICAgIHRoaXMub3JkZXJSZXN1bHRJZCQgPSB0aGlzLnN0b3JlLnBpcGUoc2VsZWN0KHNlbGVjdENhcnRPcmRlcklkKSk7XG4gICAgdGhpcy5vcmRlclJlc3VsdENhcnRJZCQgPSB0aGlzLnN0b3JlLnBpcGUoc2VsZWN0KHNlbGVjdENhcnRPcmRlckNhcnRJZCkpO1xuICAgIHRoaXMuaGFzT3JkZXJSZXN1bHQkID0gdGhpcy5zdG9yZS5waXBlKHNlbGVjdChzZWxlY3RIYXNPcmRlclJlc3VsdCkpO1xuXHR9XG5cblx0Z2V0Q29uZmlndXJlZENhcnRJdGVtQXR0cmlidXRlcyhpdGVtSWQ6IFVbJ2l0ZW1faWQnXSk6IE9ic2VydmFibGU8RGFmZkNvbmZpZ3VyYWJsZUNhcnRJdGVtQXR0cmlidXRlW10+IHtcblx0XHRyZXR1cm4gdGhpcy5zdG9yZS5waXBlKHNlbGVjdCh0aGlzLl9zZWxlY3RDYXJ0SXRlbUNvbmZpZ3VyZWRBdHRyaWJ1dGVzLCB7IGlkOiBpdGVtSWQgfSkpXG5cdH07XG5cbiAgZ2V0Q29tcG9zaXRlQ2FydEl0ZW1PcHRpb25zKGl0ZW1JZDogVVsnaXRlbV9pZCddKTogT2JzZXJ2YWJsZTxEYWZmQ29tcG9zaXRlQ2FydEl0ZW1PcHRpb25bXT4ge1xuXHRcdHJldHVybiB0aGlzLnN0b3JlLnBpcGUoc2VsZWN0KHRoaXMuX3NlbGVjdENhcnRJdGVtQ29tcG9zaXRlT3B0aW9ucywgeyBpZDogaXRlbUlkIH0pKTtcblx0fTtcblxuXHRnZXRDYXJ0SXRlbURpc2NvdW50ZWRUb3RhbChpdGVtSWQ6IFVbJ2l0ZW1faWQnXSk6IE9ic2VydmFibGU8bnVtYmVyPiB7XG5cdFx0cmV0dXJuIHRoaXMuc3RvcmUucGlwZShzZWxlY3QodGhpcy5fc2VsZWN0Q2FydEl0ZW1EaXNjb3VudGVkUm93VG90YWwsIHsgaWQ6IGl0ZW1JZCB9KSk7XG5cdH1cblxuXHRpc0NhcnRJdGVtT3V0T2ZTdG9jayhpdGVtSWQ6IFVbJ2l0ZW1faWQnXSk6IE9ic2VydmFibGU8Ym9vbGVhbj4ge1xuXHRcdHJldHVybiB0aGlzLnN0b3JlLnBpcGUoc2VsZWN0KHRoaXMuX3NlbGVjdElzQ2FydEl0ZW1PdXRPZlN0b2NrLCB7IGlkOiBpdGVtSWQgfSkpO1xuXHR9XG5cblx0Z2V0Q2FydEl0ZW1TdGF0ZShpdGVtSWQ6IFVbJ2l0ZW1faWQnXSk6IE9ic2VydmFibGU8RGFmZkNhcnRJdGVtU3RhdGVFbnVtPiB7XG5cdFx0cmV0dXJuIHRoaXMuc3RvcmUucGlwZShzZWxlY3QodGhpcy5fc2VsZWN0Q2FydEl0ZW1TdGF0ZSwgeyBpZDogaXRlbUlkIH0pKTtcblx0fVxuXG4gIGRpc3BhdGNoKGFjdGlvbjogQWN0aW9uKSB7XG4gICAgdGhpcy5zdG9yZS5kaXNwYXRjaChhY3Rpb24pO1xuICB9XG59XG4iXX0=