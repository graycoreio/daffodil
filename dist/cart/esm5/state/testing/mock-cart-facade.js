/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';
import { DaffCartItemStateEnum, DaffCartResolveState } from '@daffodil/cart/state';
import * as i0 from "@angular/core";
var MockDaffCartFacade = /** @class */ (function () {
    function MockDaffCartFacade() {
        this.cart$ = new BehaviorSubject(null);
        this.resolved$ = new BehaviorSubject(DaffCartResolveState.Default);
        this.loadingObject$ = new BehaviorSubject(null);
        this.featureLoading$ = new BehaviorSubject(false);
        this.featureResolving$ = new BehaviorSubject(false);
        this.featureMutating$ = new BehaviorSubject(false);
        this.loading$ = new BehaviorSubject(false);
        this.resolving$ = new BehaviorSubject(false);
        this.mutating$ = new BehaviorSubject(false);
        this.billingAddressLoading$ = new BehaviorSubject(false);
        this.billingAddressResolving$ = new BehaviorSubject(false);
        this.billingAddressMutating$ = new BehaviorSubject(false);
        this.shippingAddressLoading$ = new BehaviorSubject(false);
        this.shippingAddressResolving$ = new BehaviorSubject(false);
        this.shippingAddressMutating$ = new BehaviorSubject(false);
        this.shippingInformationLoading$ = new BehaviorSubject(false);
        this.shippingInformationResolving$ = new BehaviorSubject(false);
        this.shippingInformationMutating$ = new BehaviorSubject(false);
        this.shippingMethodsLoading$ = new BehaviorSubject(false);
        this.shippingMethodsResolving$ = new BehaviorSubject(false);
        this.paymentLoading$ = new BehaviorSubject(false);
        this.paymentResolving$ = new BehaviorSubject(false);
        this.paymentMutating$ = new BehaviorSubject(false);
        this.paymentMethodsLoading$ = new BehaviorSubject(false);
        this.paymentMethodsResolving$ = new BehaviorSubject(false);
        this.couponLoading$ = new BehaviorSubject(false);
        this.couponResolving$ = new BehaviorSubject(false);
        this.couponMutating$ = new BehaviorSubject(false);
        this.itemLoading$ = new BehaviorSubject(false);
        this.itemAdding$ = new BehaviorSubject(false);
        this.itemResolving$ = new BehaviorSubject(false);
        this.itemMutating$ = new BehaviorSubject(false);
        this.errors$ = new BehaviorSubject(null);
        this.cartErrors$ = new BehaviorSubject([]);
        this.itemErrors$ = new BehaviorSubject([]);
        this.billingAddressErrors$ = new BehaviorSubject([]);
        this.shippingAddressErrors$ = new BehaviorSubject([]);
        this.shippingInformationErrors$ = new BehaviorSubject([]);
        this.shippingMethodsErrors$ = new BehaviorSubject([]);
        this.paymentErrors$ = new BehaviorSubject([]);
        this.paymentMethodsErrors$ = new BehaviorSubject([]);
        this.couponErrors$ = new BehaviorSubject([]);
        this.id$ = new BehaviorSubject(null);
        this.subtotal$ = new BehaviorSubject(null);
        this.grandTotal$ = new BehaviorSubject(null);
        this.subtotalExcludingTax$ = new BehaviorSubject(null);
        this.subtotalIncludingTax$ = new BehaviorSubject(null);
        this.subtotalWithDiscountExcludingTax$ = new BehaviorSubject(null);
        this.subtotalWithDiscountIncludingTax$ = new BehaviorSubject(null);
        this.discountTotals$ = new BehaviorSubject([]);
        this.totalTax$ = new BehaviorSubject(null);
        this.shippingTotal$ = new BehaviorSubject(null);
        this.coupons$ = new BehaviorSubject([]);
        this.items$ = new BehaviorSubject([]);
        this.totalItems$ = new BehaviorSubject(null);
        this.hasOutOfStockItems$ = new BehaviorSubject(false);
        this.itemDictionary$ = new BehaviorSubject({});
        this.billingAddress$ = new BehaviorSubject(null);
        this.shippingAddress$ = new BehaviorSubject(null);
        this.payment$ = new BehaviorSubject(null);
        this.totals$ = new BehaviorSubject([]);
        this.shippingInformation$ = new BehaviorSubject(null);
        this.availableShippingMethods$ = new BehaviorSubject([]);
        this.availablePaymentMethods$ = new BehaviorSubject([]);
        this.paymentId$ = new BehaviorSubject(null);
        this.isCartEmpty$ = new BehaviorSubject(true);
        this.isBillingSameAsShipping$ = new BehaviorSubject(false);
        this.hasBillingAddress$ = new BehaviorSubject(false);
        this.hasShippingAddress$ = new BehaviorSubject(false);
        this.hasShippingMethod$ = new BehaviorSubject(false);
        this.hasPaymentMethod$ = new BehaviorSubject(false);
        this.canPlaceOrder$ = new BehaviorSubject(false);
        this.orderResultLoading$ = new BehaviorSubject(false);
        this.orderResultErrors$ = new BehaviorSubject([]);
        this.orderResult$ = new BehaviorSubject({
            id: null,
            orderId: null,
            cartId: null,
        });
        this.orderResultId$ = new BehaviorSubject(null);
        this.orderResultCartId$ = new BehaviorSubject(null);
        this.hasOrderResult$ = new BehaviorSubject(false);
    }
    /**
     * @param {?} itemId
     * @return {?}
     */
    MockDaffCartFacade.prototype.getCartItemDiscountedTotal = /**
     * @param {?} itemId
     * @return {?}
     */
    function (itemId) {
        return new BehaviorSubject(null);
    };
    /**
     * @param {?} itemId
     * @return {?}
     */
    MockDaffCartFacade.prototype.getConfiguredCartItemAttributes = /**
     * @param {?} itemId
     * @return {?}
     */
    function (itemId) {
        return new BehaviorSubject([]);
    };
    /**
     * @param {?} itemId
     * @return {?}
     */
    MockDaffCartFacade.prototype.getCompositeCartItemOptions = /**
     * @param {?} itemId
     * @return {?}
     */
    function (itemId) {
        return new BehaviorSubject([]);
    };
    /**
     * @param {?} itemId
     * @return {?}
     */
    MockDaffCartFacade.prototype.isCartItemOutOfStock = /**
     * @param {?} itemId
     * @return {?}
     */
    function (itemId) {
        return new BehaviorSubject(false);
    };
    /**
     * @param {?} itemId
     * @return {?}
     */
    MockDaffCartFacade.prototype.getCartItemState = /**
     * @param {?} itemId
     * @return {?}
     */
    function (itemId) {
        return new BehaviorSubject(DaffCartItemStateEnum.Default);
    };
    /**
     * @param {?} action
     * @return {?}
     */
    MockDaffCartFacade.prototype.dispatch = /**
     * @param {?} action
     * @return {?}
     */
    function (action) { };
    ;
    MockDaffCartFacade.decorators = [
        { type: Injectable, args: [{ providedIn: 'root' },] }
    ];
    /** @nocollapse */ MockDaffCartFacade.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function MockDaffCartFacade_Factory() { return new MockDaffCartFacade(); }, token: MockDaffCartFacade, providedIn: "root" });
    return MockDaffCartFacade;
}());
export { MockDaffCartFacade };
if (false) {
    /** @type {?} */
    MockDaffCartFacade.prototype.cart$;
    /** @type {?} */
    MockDaffCartFacade.prototype.resolved$;
    /** @type {?} */
    MockDaffCartFacade.prototype.loadingObject$;
    /** @type {?} */
    MockDaffCartFacade.prototype.featureLoading$;
    /** @type {?} */
    MockDaffCartFacade.prototype.featureResolving$;
    /** @type {?} */
    MockDaffCartFacade.prototype.featureMutating$;
    /** @type {?} */
    MockDaffCartFacade.prototype.loading$;
    /** @type {?} */
    MockDaffCartFacade.prototype.resolving$;
    /** @type {?} */
    MockDaffCartFacade.prototype.mutating$;
    /** @type {?} */
    MockDaffCartFacade.prototype.billingAddressLoading$;
    /** @type {?} */
    MockDaffCartFacade.prototype.billingAddressResolving$;
    /** @type {?} */
    MockDaffCartFacade.prototype.billingAddressMutating$;
    /** @type {?} */
    MockDaffCartFacade.prototype.shippingAddressLoading$;
    /** @type {?} */
    MockDaffCartFacade.prototype.shippingAddressResolving$;
    /** @type {?} */
    MockDaffCartFacade.prototype.shippingAddressMutating$;
    /** @type {?} */
    MockDaffCartFacade.prototype.shippingInformationLoading$;
    /** @type {?} */
    MockDaffCartFacade.prototype.shippingInformationResolving$;
    /** @type {?} */
    MockDaffCartFacade.prototype.shippingInformationMutating$;
    /** @type {?} */
    MockDaffCartFacade.prototype.shippingMethodsLoading$;
    /** @type {?} */
    MockDaffCartFacade.prototype.shippingMethodsResolving$;
    /** @type {?} */
    MockDaffCartFacade.prototype.paymentLoading$;
    /** @type {?} */
    MockDaffCartFacade.prototype.paymentResolving$;
    /** @type {?} */
    MockDaffCartFacade.prototype.paymentMutating$;
    /** @type {?} */
    MockDaffCartFacade.prototype.paymentMethodsLoading$;
    /** @type {?} */
    MockDaffCartFacade.prototype.paymentMethodsResolving$;
    /** @type {?} */
    MockDaffCartFacade.prototype.couponLoading$;
    /** @type {?} */
    MockDaffCartFacade.prototype.couponResolving$;
    /** @type {?} */
    MockDaffCartFacade.prototype.couponMutating$;
    /** @type {?} */
    MockDaffCartFacade.prototype.itemLoading$;
    /** @type {?} */
    MockDaffCartFacade.prototype.itemAdding$;
    /** @type {?} */
    MockDaffCartFacade.prototype.itemResolving$;
    /** @type {?} */
    MockDaffCartFacade.prototype.itemMutating$;
    /** @type {?} */
    MockDaffCartFacade.prototype.errors$;
    /** @type {?} */
    MockDaffCartFacade.prototype.cartErrors$;
    /** @type {?} */
    MockDaffCartFacade.prototype.itemErrors$;
    /** @type {?} */
    MockDaffCartFacade.prototype.billingAddressErrors$;
    /** @type {?} */
    MockDaffCartFacade.prototype.shippingAddressErrors$;
    /** @type {?} */
    MockDaffCartFacade.prototype.shippingInformationErrors$;
    /** @type {?} */
    MockDaffCartFacade.prototype.shippingMethodsErrors$;
    /** @type {?} */
    MockDaffCartFacade.prototype.paymentErrors$;
    /** @type {?} */
    MockDaffCartFacade.prototype.paymentMethodsErrors$;
    /** @type {?} */
    MockDaffCartFacade.prototype.couponErrors$;
    /** @type {?} */
    MockDaffCartFacade.prototype.id$;
    /** @type {?} */
    MockDaffCartFacade.prototype.subtotal$;
    /** @type {?} */
    MockDaffCartFacade.prototype.grandTotal$;
    /** @type {?} */
    MockDaffCartFacade.prototype.subtotalExcludingTax$;
    /** @type {?} */
    MockDaffCartFacade.prototype.subtotalIncludingTax$;
    /** @type {?} */
    MockDaffCartFacade.prototype.subtotalWithDiscountExcludingTax$;
    /** @type {?} */
    MockDaffCartFacade.prototype.subtotalWithDiscountIncludingTax$;
    /** @type {?} */
    MockDaffCartFacade.prototype.discountTotals$;
    /** @type {?} */
    MockDaffCartFacade.prototype.totalTax$;
    /** @type {?} */
    MockDaffCartFacade.prototype.shippingTotal$;
    /** @type {?} */
    MockDaffCartFacade.prototype.coupons$;
    /** @type {?} */
    MockDaffCartFacade.prototype.items$;
    /** @type {?} */
    MockDaffCartFacade.prototype.totalItems$;
    /** @type {?} */
    MockDaffCartFacade.prototype.hasOutOfStockItems$;
    /** @type {?} */
    MockDaffCartFacade.prototype.itemDictionary$;
    /** @type {?} */
    MockDaffCartFacade.prototype.billingAddress$;
    /** @type {?} */
    MockDaffCartFacade.prototype.shippingAddress$;
    /** @type {?} */
    MockDaffCartFacade.prototype.payment$;
    /** @type {?} */
    MockDaffCartFacade.prototype.totals$;
    /** @type {?} */
    MockDaffCartFacade.prototype.shippingInformation$;
    /** @type {?} */
    MockDaffCartFacade.prototype.availableShippingMethods$;
    /** @type {?} */
    MockDaffCartFacade.prototype.availablePaymentMethods$;
    /** @type {?} */
    MockDaffCartFacade.prototype.paymentId$;
    /** @type {?} */
    MockDaffCartFacade.prototype.isCartEmpty$;
    /** @type {?} */
    MockDaffCartFacade.prototype.isBillingSameAsShipping$;
    /** @type {?} */
    MockDaffCartFacade.prototype.hasBillingAddress$;
    /** @type {?} */
    MockDaffCartFacade.prototype.hasShippingAddress$;
    /** @type {?} */
    MockDaffCartFacade.prototype.hasShippingMethod$;
    /** @type {?} */
    MockDaffCartFacade.prototype.hasPaymentMethod$;
    /** @type {?} */
    MockDaffCartFacade.prototype.canPlaceOrder$;
    /** @type {?} */
    MockDaffCartFacade.prototype.orderResultLoading$;
    /** @type {?} */
    MockDaffCartFacade.prototype.orderResultErrors$;
    /** @type {?} */
    MockDaffCartFacade.prototype.orderResult$;
    /** @type {?} */
    MockDaffCartFacade.prototype.orderResultId$;
    /** @type {?} */
    MockDaffCartFacade.prototype.orderResultCartId$;
    /** @type {?} */
    MockDaffCartFacade.prototype.hasOrderResult$;
    /* Skipping unhandled member: ;*/
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9jay1jYXJ0LWZhY2FkZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkYWZmb2RpbC9jYXJ0L3N0YXRlL3Rlc3RpbmcvIiwic291cmNlcyI6WyJtb2NrLWNhcnQtZmFjYWRlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBR3ZDLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFJM0MsT0FBTyxFQUtOLHFCQUFxQixFQUVwQixvQkFBb0IsRUFDckIsTUFBTSxzQkFBc0IsQ0FBQzs7QUFFOUI7SUFBQTtRQUVFLFVBQUssR0FBOEIsSUFBSSxlQUFlLENBQUMsSUFBSSxDQUFDLENBQUM7UUFFN0QsY0FBUyxHQUEwQyxJQUFJLGVBQWUsQ0FBQyxvQkFBb0IsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUVyRyxtQkFBYyxHQUFxQyxJQUFJLGVBQWUsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUM3RSxvQkFBZSxHQUE2QixJQUFJLGVBQWUsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUN2RSxzQkFBaUIsR0FBNkIsSUFBSSxlQUFlLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDekUscUJBQWdCLEdBQTZCLElBQUksZUFBZSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3hFLGFBQVEsR0FBNkIsSUFBSSxlQUFlLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDaEUsZUFBVSxHQUE2QixJQUFJLGVBQWUsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNsRSxjQUFTLEdBQTZCLElBQUksZUFBZSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ2pFLDJCQUFzQixHQUE2QixJQUFJLGVBQWUsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUM5RSw2QkFBd0IsR0FBNkIsSUFBSSxlQUFlLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDaEYsNEJBQXVCLEdBQTZCLElBQUksZUFBZSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQy9FLDRC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Rjs7SUFDM0YsK0RBQXVHOztJQUN2RywrREFBdUc7O0lBQ3ZHLDZDQUE0RTs7SUFDNUUsdUNBQStFOztJQUMvRSw0Q0FBb0Y7O0lBQ3BGLHNDQUF5RTs7SUFDekUsb0NBQXFFOztJQUNyRSx5Q0FBaUU7O0lBQ2pFLGlEQUEyRTs7SUFDM0UsNkNBQTZGOztJQUM3Riw2Q0FBMEY7O0lBQzFGLDhDQUE0Rjs7SUFDNUYsc0NBQTJFOztJQUMzRSxxQ0FBdUU7O0lBQ3ZFLGtEQUFvRzs7SUFDcEcsdURBQTZHOztJQUM3RyxzREFBMkc7O0lBQzNHLHdDQUE2RDs7SUFFN0QsMENBQW1FOztJQUNuRSxzREFBZ0Y7O0lBRWhGLGdEQUFnRDs7SUFDaEQsaURBQWlEOztJQUNqRCxnREFBZ0Q7O0lBQ2hELCtDQUErQzs7SUFDL0MsNENBQXNFOztJQUV0RSxpREFBMEQ7O0lBQzNELGdEQUErRDs7SUFDL0QsMENBSUk7O0lBQ0osNENBQTJFOztJQUMzRSxnREFBOEU7O0lBQzlFLDZDQUFzRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEJlaGF2aW9yU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgQWN0aW9uIH0gZnJvbSAnQG5ncngvc3RvcmUnO1xuaW1wb3J0IHsgRGljdGlvbmFyeSB9IGZyb20gJ0BuZ3J4L2VudGl0eSc7XG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IERhZmZTdGF0ZUVycm9yIH0gZnJvbSAnQGRhZmZvZGlsL2NvcmUvc3RhdGUnO1xuaW1wb3J0IHsgRGFmZkNhcnQsIERhZmZDYXJ0VG90YWwsIERhZmZDYXJ0SXRlbSwgRGFmZkNhcnRPcmRlclJlc3VsdCwgRGFmZkNvbmZpZ3VyYWJsZUNhcnRJdGVtQXR0cmlidXRlLCBEYWZmQ29tcG9zaXRlQ2FydEl0ZW1PcHRpb24gfSBmcm9tICdAZGFmZm9kaWwvY2FydCc7XG5pbXBvcnQge1xuXHREYWZmQ2FydEZhY2FkZUludGVyZmFjZSxcblx0RGFmZkNhcnRFcnJvcnMsXG5cdERhZmZDYXJ0T3BlcmF0aW9uVHlwZSxcblx0RGFmZkNhcnRMb2FkaW5nLFxuXHREYWZmQ2FydEl0ZW1TdGF0ZUVudW0sXG5cdERhZmZTdGF0ZWZ1bENhcnRJdGVtLFxuICBEYWZmQ2FydFJlc29sdmVTdGF0ZVxufSBmcm9tICdAZGFmZm9kaWwvY2FydC9zdGF0ZSc7XG5cbkBJbmplY3RhYmxlKHtwcm92aWRlZEluOiAncm9vdCd9KVxuZXhwb3J0IGNsYXNzIE1vY2tEYWZmQ2FydEZhY2FkZSBpbXBsZW1lbnRzIERhZmZDYXJ0RmFjYWRlSW50ZXJmYWNlIHtcbiAgY2FydCQ6IEJlaGF2aW9yU3ViamVjdDxEYWZmQ2FydD4gPSBuZXcgQmVoYXZpb3JTdWJqZWN0KG51bGwpO1xuXG4gIHJlc29sdmVkJDogQmVoYXZpb3JTdWJqZWN0PERhZmZDYXJ0UmVzb2x2ZVN0YXRlPiA9IG5ldyBCZWhhdmlvclN1YmplY3QoRGFmZkNhcnRSZXNvbHZlU3RhdGUuRGVmYXVsdCk7XG5cbiAgbG9hZGluZ09iamVjdCQ6IEJlaGF2aW9yU3ViamVjdDxEYWZmQ2FydExvYWRpbmc+ID0gbmV3IEJlaGF2aW9yU3ViamVjdChudWxsKTtcbiAgZmVhdHVyZUxvYWRpbmckOiBCZWhhdmlvclN1YmplY3Q8Ym9vbGVhbj4gPSBuZXcgQmVoYXZpb3JTdWJqZWN0KGZhbHNlKTtcbiAgZmVhdHVyZVJlc29sdmluZyQ6IEJlaGF2aW9yU3ViamVjdDxib29sZWFuPiA9IG5ldyBCZWhhdmlvclN1YmplY3QoZmFsc2UpO1xuICBmZWF0dXJlTXV0YXRpbmckOiBCZWhhdmlvclN1YmplY3Q8Ym9vbGVhbj4gPSBuZXcgQmVoYXZpb3JTdWJqZWN0KGZhbHNlKTtcbiAgbG9hZGluZyQ6IEJlaGF2aW9yU3ViamVjdDxib29sZWFuPiA9IG5ldyBCZWhhdmlvclN1YmplY3QoZmFsc2UpO1xuICByZXNvbHZpbmckOiBCZWhhdmlvclN1YmplY3Q8Ym9vbGVhbj4gPSBuZXcgQmVoYXZpb3JTdWJqZWN0KGZhbHNlKTtcbiAgbXV0YXRpbmckOiBCZWhhdmlvclN1YmplY3Q8Ym9vbGVhbj4gPSBuZXcgQmVoYXZpb3JTdWJqZWN0KGZhbHNlKTtcbiAgYmlsbGluZ0FkZHJlc3NMb2FkaW5nJDogQmVoYXZpb3JTdWJqZWN0PGJvb2xlYW4+ID0gbmV3IEJlaGF2aW9yU3ViamVjdChmYWxzZSk7XG4gIGJpbGxpbmdBZGRyZXNzUmVzb2x2aW5nJDogQmVoYXZpb3JTdWJqZWN0PGJvb2xlYW4+ID0gbmV3IEJlaGF2aW9yU3ViamVjdChmYWxzZSk7XG4gIGJpbGxpbmdBZGRyZXNzTXV0YXRpbmckOiBCZWhhdmlvclN1YmplY3Q8Ym9vbGVhbj4gPSBuZXcgQmVoYXZpb3JTdWJqZWN0KGZhbHNlKTtcbiAgc2hpcHBpbmdBZGRyZXNzTG9hZGluZyQ6IEJlaGF2aW9yU3ViamVjdDxib29sZWFuPiA9IG5ldyBCZWhhdmlvclN1YmplY3QoZmFsc2UpO1xuICBzaGlwcGluZ0FkZHJlc3NSZXNvbHZpbmckOiBCZWhhdmlvclN1YmplY3Q8Ym9vbGVhbj4gPSBuZXcgQmVoYXZpb3JTdWJqZWN0KGZhbHNlKTtcbiAgc2hpcHBpbmdBZGRyZXNzTXV0YXRpbmckOiBCZWhhdmlvclN1YmplY3Q8Ym9vbGVhbj4gPSBuZXcgQmVoYXZpb3JTdWJqZWN0KGZhbHNlKTtcbiAgc2hpcHBpbmdJbmZvcm1hdGlvbkxvYWRpbmckOiBCZWhhdmlvclN1YmplY3Q8Ym9vbGVhbj4gPSBuZXcgQmVoYXZpb3JTdWJqZWN0KGZhbHNlKTtcbiAgc2hpcHBpbmdJbmZvcm1hdGlvblJlc29sdmluZyQ6IEJlaGF2aW9yU3ViamVjdDxib29sZWFuPiA9IG5ldyBCZWhhdmlvclN1YmplY3QoZmFsc2UpO1xuICBzaGlwcGluZ0luZm9ybWF0aW9uTXV0YXRpbmckOiBCZWhhdmlvclN1YmplY3Q8Ym9vbGVhbj4gPSBuZXcgQmVoYXZpb3JTdWJqZWN0KGZhbHNlKTtcbiAgc2hpcHBpbmdNZXRob2RzTG9hZGluZyQ6IEJlaGF2aW9yU3ViamVjdDxib29sZWFuPiA9IG5ldyBCZWhhdmlvclN1YmplY3QoZmFsc2UpO1xuICBzaGlwcGluZ01ldGhvZHNSZXNvbHZpbmckOiBCZWhhdmlvclN1YmplY3Q8Ym9vbGVhbj4gPSBuZXcgQmVoYXZpb3JTdWJqZWN0KGZhbHNlKTtcbiAgcGF5bWVudExvYWRpbmckOiBCZWhhdmlvclN1YmplY3Q8Ym9vbGVhbj4gPSBuZXcgQmVoYXZpb3JTdWJqZWN0KGZhbHNlKTtcbiAgcGF5bWVudFJlc29sdmluZyQ6IEJlaGF2aW9yU3ViamVjdDxib29sZWFuPiA9IG5ldyBCZWhhdmlvclN1YmplY3QoZmFsc2UpO1xuICBwYXltZW50TXV0YXRpbmckOiBCZWhhdmlvclN1YmplY3Q8Ym9vbGVhbj4gPSBuZXcgQmVoYXZpb3JTdWJqZWN0KGZhbHNlKTtcbiAgcGF5bWVudE1ldGhvZHNMb2FkaW5nJDogQmVoYXZpb3JTdWJqZWN0PGJvb2xlYW4+ID0gbmV3IEJlaGF2aW9yU3ViamVjdChmYWxzZSk7XG4gIHBheW1lbnRNZXRob2RzUmVzb2x2aW5nJDogQmVoYXZpb3JTdWJqZWN0PGJvb2xlYW4+ID0gbmV3IEJlaGF2aW9yU3ViamVjdChmYWxzZSk7XG4gIGNvdXBvbkxvYWRpbmckOiBCZWhhdmlvclN1YmplY3Q8Ym9vbGVhbj4gPSBuZXcgQmVoYXZpb3JTdWJqZWN0KGZhbHNlKTtcbiAgY291cG9uUmVzb2x2aW5nJDogQmVoYXZpb3JTdWJqZWN0PGJvb2xlYW4+ID0gbmV3IEJlaGF2aW9yU3ViamVjdChmYWxzZSk7XG4gIGNvdXBvbk11dGF0aW5nJDogQmVoYXZpb3JTdWJqZWN0PGJvb2xlYW4+ID0gbmV3IEJlaGF2aW9yU3ViamVjdChmYWxzZSk7XG4gIGl0ZW1Mb2FkaW5nJDogQmVoYXZpb3JTdWJqZWN0PGJvb2xlYW4+ID0gbmV3IEJlaGF2aW9yU3ViamVjdChmYWxzZSk7XG4gIGl0ZW1BZGRpbmckOiBCZWhhdmlvclN1YmplY3Q8Ym9vbGVhbj4gPSBuZXcgQmVoYXZpb3JTdWJqZWN0KGZhbHNlKTtcbiAgaXRlbVJlc29sdmluZyQ6IEJlaGF2aW9yU3ViamVjdDxib29sZWFuPiA9IG5ldyBCZWhhdmlvclN1YmplY3QoZmFsc2UpO1xuXHRpdGVtTXV0YXRpbmckOiBCZWhhdmlvclN1YmplY3Q8Ym9vbGVhbj4gPSBuZXcgQmVoYXZpb3JTdWJqZWN0KGZhbHNlKTtcblxuICBlcnJvcnMkOiBCZWhhdmlvclN1YmplY3Q8RGFmZkNhcnRFcnJvcnM+ID0gbmV3IEJlaGF2aW9yU3ViamVjdChudWxsKTtcbiAgY2FydEVycm9ycyQ6IEJlaGF2aW9yU3ViamVjdDxEYWZmQ2FydEVycm9yc1tEYWZmQ2FydE9wZXJhdGlvblR5cGUuQ2FydF0+ID0gbmV3IEJlaGF2aW9yU3ViamVjdChbXSk7XG4gIGl0ZW1FcnJvcnMkOiBCZWhhdmlvclN1YmplY3Q8RGFmZkNhcnRFcnJvcnNbRGFmZkNhcnRPcGVyYXRpb25UeXBlLkl0ZW1dPiA9IG5ldyBCZWhhdmlvclN1YmplY3QoW10pO1xuICBiaWxsaW5nQWRkcmVzc0Vycm9ycyQ6IEJlaGF2aW9yU3ViamVjdDxEYWZmQ2FydEVycm9yc1tEYWZmQ2FydE9wZXJhdGlvblR5cGUuQmlsbGluZ0FkZHJlc3NdPiA9IG5ldyBCZWhhdmlvclN1YmplY3QoW10pO1xuICBzaGlwcGluZ0FkZHJlc3NFcnJvcnMkOiBCZWhhdmlvclN1YmplY3Q8RGFmZkNhcnRFcnJvcnNbRGFmZkNhcnRPcGVyYXRpb25UeXBlLlNoaXBwaW5nQWRkcmVzc10+ID0gbmV3IEJlaGF2aW9yU3ViamVjdChbXSk7XG4gIHNoaXBwaW5nSW5mb3JtYXRpb25FcnJvcnMkOiBCZWhhdmlvclN1YmplY3Q8RGFmZkNhcnRFcnJvcnNbRGFmZkNhcnRPcGVyYXRpb25UeXBlLlNoaXBwaW5nSW5mb3JtYXRpb25dPiA9IG5ldyBCZWhhdmlvclN1YmplY3QoW10pO1xuICBzaGlwcGluZ01ldGhvZHNFcnJvcnMkOiBCZWhhdmlvclN1YmplY3Q8RGFmZkNhcnRFcnJvcnNbRGFmZkNhcnRPcGVyYXRpb25UeXBlLlNoaXBwaW5nTWV0aG9kc10+ID0gbmV3IEJlaGF2aW9yU3ViamVjdChbXSk7XG4gIHBheW1lbnRFcnJvcnMkOiBCZWhhdmlvclN1YmplY3Q8RGFmZkNhcnRFcnJvcnNbRGFmZkNhcnRPcGVyYXRpb25UeXBlLlBheW1lbnRdPiA9IG5ldyBCZWhhdmlvclN1YmplY3QoW10pO1xuICBwYXltZW50TWV0aG9kc0Vycm9ycyQ6IEJlaGF2aW9yU3ViamVjdDxEYWZmQ2FydEVycm9yc1tEYWZmQ2FydE9wZXJhdGlvblR5cGUuUGF5bWVudE1ldGhvZHNdPiA9IG5ldyBCZWhhdmlvclN1YmplY3QoW10pO1xuICBjb3Vwb25FcnJvcnMkOiBCZWhhdmlvclN1YmplY3Q8RGFmZkNhcnRFcnJvcnNbRGFmZkNhcnRPcGVyYXRpb25UeXBlLkNvdXBvbl0+ID0gbmV3IEJlaGF2aW9yU3ViamVjdChbXSk7XG5cbiAgaWQkOiBCZWhhdmlvclN1YmplY3Q8RGFmZkNhcnRbJ2lkJ10+ID0gbmV3IEJlaGF2aW9yU3ViamVjdChudWxsKTtcbiAgc3VidG90YWwkOiBCZWhhdmlvclN1YmplY3Q8RGFmZkNhcnRUb3RhbFsndmFsdWUnXT4gPSBuZXcgQmVoYXZpb3JTdWJqZWN0KG51bGwpO1xuICBncmFuZFRvdGFsJDogQmVoYXZpb3JTdWJqZWN0PERhZmZDYXJ0VG90YWxbJ3ZhbHVlJ10+ID0gbmV3IEJlaGF2aW9yU3ViamVjdChudWxsKTtcbiAgc3VidG90YWxFeGNsdWRpbmdUYXgkOiBCZWhhdmlvclN1YmplY3Q8RGFmZkNhcnRUb3RhbFsndmFsdWUnXT4gPSBuZXcgQmVoYXZpb3JTdWJqZWN0KG51bGwpO1xuICBzdWJ0b3RhbEluY2x1ZGluZ1RheCQ6IEJlaGF2aW9yU3ViamVjdDxEYWZmQ2FydFRvdGFsWyd2YWx1ZSddPiA9IG5ldyBCZWhhdmlvclN1YmplY3QobnVsbCk7XG4gIHN1YnRvdGFsV2l0aERpc2NvdW50RXhjbHVkaW5nVGF4JDogQmVoYXZpb3JTdWJqZWN0PERhZmZDYXJ0VG90YWxbJ3ZhbHVlJ10+ID0gbmV3IEJlaGF2aW9yU3ViamVjdChudWxsKTtcbiAgc3VidG90YWxXaXRoRGlzY291bnRJbmNsdWRpbmdUYXgkOiBCZWhhdmlvclN1YmplY3Q8RGFmZkNhcnRUb3RhbFsndmFsdWUnXT4gPSBuZXcgQmVoYXZpb3JTdWJqZWN0KG51bGwpO1xuICBkaXNjb3VudFRvdGFscyQ6IEJlaGF2aW9yU3ViamVjdDxEYWZmQ2FydFRvdGFsW10+ID0gbmV3IEJlaGF2aW9yU3ViamVjdChbXSk7XG4gIHRvdGFsVGF4JDogQmVoYXZpb3JTdWJqZWN0PERhZmZDYXJ0VG90YWxbJ3ZhbHVlJ10+ID0gbmV3IEJlaGF2aW9yU3ViamVjdChudWxsKTtcbiAgc2hpcHBpbmdUb3RhbCQ6IEJlaGF2aW9yU3ViamVjdDxEYWZmQ2FydFRvdGFsWyd2YWx1ZSddPiA9IG5ldyBCZWhhdmlvclN1YmplY3QobnVsbCk7XG4gIGNvdXBvbnMkOiBCZWhhdmlvclN1YmplY3Q8RGFmZkNhcnRbJ2NvdXBvbnMnXT4gPSBuZXcgQmVoYXZpb3JTdWJqZWN0KFtdKTtcbiAgaXRlbXMkOiBCZWhhdmlvclN1YmplY3Q8RGFmZkNhcnRbJ2l0ZW1zJ10+ID0gbmV3IEJlaGF2aW9yU3ViamVjdChbXSk7XG4gIHRvdGFsSXRlbXMkOiBCZWhhdmlvclN1YmplY3Q8bnVtYmVyPiA9IG5ldyBCZWhhdmlvclN1YmplY3QobnVsbCk7XG4gIGhhc091dE9mU3RvY2tJdGVtcyQ6IEJlaGF2aW9yU3ViamVjdDxib29sZWFuPiA9IG5ldyBCZWhhdmlvclN1YmplY3QoZmFsc2UpO1xuICBpdGVtRGljdGlvbmFyeSQ6IEJlaGF2aW9yU3ViamVjdDxEaWN0aW9uYXJ5PERhZmZTdGF0ZWZ1bENhcnRJdGVtPj4gPSBuZXcgQmVoYXZpb3JTdWJqZWN0KHt9KTtcbiAgYmlsbGluZ0FkZHJlc3MkOiBCZWhhdmlvclN1YmplY3Q8RGFmZkNhcnRbJ2JpbGxpbmdfYWRkcmVzcyddPiA9IG5ldyBCZWhhdmlvclN1YmplY3QobnVsbCk7XG4gIHNoaXBwaW5nQWRkcmVzcyQ6IEJlaGF2aW9yU3ViamVjdDxEYWZmQ2FydFsnc2hpcHBpbmdfYWRkcmVzcyddPiA9IG5ldyBCZWhhdmlvclN1YmplY3QobnVsbCk7XG4gIHBheW1lbnQkOiBCZWhhdmlvclN1YmplY3Q8RGFmZkNhcnRbJ3BheW1lbnQnXT4gPSBuZXcgQmVoYXZpb3JTdWJqZWN0KG51bGwpO1xuICB0b3RhbHMkOiBCZWhhdmlvclN1YmplY3Q8RGFmZkNhcnRbJ3RvdGFscyddPiA9IG5ldyBCZWhhdmlvclN1YmplY3QoW10pO1xuICBzaGlwcGluZ0luZm9ybWF0aW9uJDogQmVoYXZpb3JTdWJqZWN0PERhZmZDYXJ0WydzaGlwcGluZ19pbmZvcm1hdGlvbiddPiA9IG5ldyBCZWhhdmlvclN1YmplY3QobnVsbCk7XG4gIGF2YWlsYWJsZVNoaXBwaW5nTWV0aG9kcyQ6IEJlaGF2aW9yU3ViamVjdDxEYWZmQ2FydFsnYXZhaWxhYmxlX3NoaXBwaW5nX21ldGhvZHMnXT4gPSBuZXcgQmVoYXZpb3JTdWJqZWN0KFtdKTtcbiAgYXZhaWxhYmxlUGF5bWVudE1ldGhvZHMkOiBCZWhhdmlvclN1YmplY3Q8RGFmZkNhcnRbJ2F2YWlsYWJsZV9wYXltZW50X21ldGhvZHMnXT4gPSBuZXcgQmVoYXZpb3JTdWJqZWN0KFtdKTtcbiAgcGF5bWVudElkJDogQmVoYXZpb3JTdWJqZWN0PGFueT4gPSBuZXcgQmVoYXZpb3JTdWJqZWN0KG51bGwpO1xuXG4gIGlzQ2FydEVtcHR5JDogQmVoYXZpb3JTdWJqZWN0PGJvb2xlYW4+ID0gbmV3IEJlaGF2aW9yU3ViamVjdCh0cnVlKTtcbiAgaXNCaWxsaW5nU2FtZUFzU2hpcHBpbmckOiBCZWhhdmlvclN1YmplY3Q8Ym9vbGVhbj4gPSBuZXcgQmVoYXZpb3JTdWJqZWN0KGZhbHNlKTtcblxuICBoYXNCaWxsaW5nQWRkcmVzcyQgPSBuZXcgQmVoYXZpb3JTdWJqZWN0KGZhbHNlKTtcbiAgaGFzU2hpcHBpbmdBZGRyZXNzJCA9IG5ldyBCZWhhdmlvclN1YmplY3QoZmFsc2UpO1xuICBoYXNTaGlwcGluZ01ldGhvZCQgPSBuZXcgQmVoYXZpb3JTdWJqZWN0KGZhbHNlKTtcbiAgaGFzUGF5bWVudE1ldGhvZCQgPSBuZXcgQmVoYXZpb3JTdWJqZWN0KGZhbHNlKTtcbiAgY2FuUGxhY2VPcmRlciQ6IEJlaGF2aW9yU3ViamVjdDxib29sZWFuPiA9IG5ldyBCZWhhdmlvclN1YmplY3QoZmFsc2UpO1xuXG4gIG9yZGVyUmVzdWx0TG9hZGluZyQgPSBuZXcgQmVoYXZpb3JTdWJqZWN0PGJvb2xlYW4+KGZhbHNlKTtcblx0b3JkZXJSZXN1bHRFcnJvcnMkID0gbmV3IEJlaGF2aW9yU3ViamVjdDxEYWZmU3RhdGVFcnJvcltdPihbXSk7XG5cdG9yZGVyUmVzdWx0JCA9IG5ldyBCZWhhdmlvclN1YmplY3Q8RGFmZkNhcnRPcmRlclJlc3VsdD4oe1xuICAgIGlkOiBudWxsLFxuICAgIG9yZGVySWQ6IG51bGwsXG4gICAgY2FydElkOiBudWxsLFxuICB9KTtcblx0b3JkZXJSZXN1bHRJZCQgPSBuZXcgQmVoYXZpb3JTdWJqZWN0PERhZmZDYXJ0T3JkZXJSZXN1bHRbJ29yZGVySWQnXT4obnVsbCk7XG5cdG9yZGVyUmVzdWx0Q2FydElkJCA9IG5ldyBCZWhhdmlvclN1YmplY3Q8RGFmZkNhcnRPcmRlclJlc3VsdFsnY2FydElkJ10+KG51bGwpO1xuXHRoYXNPcmRlclJlc3VsdCQgPSBuZXcgQmVoYXZpb3JTdWJqZWN0PGJvb2xlYW4+KGZhbHNlKTtcblxuXHRnZXRDYXJ0SXRlbURpc2NvdW50ZWRUb3RhbChpdGVtSWQ6IHN0cmluZyB8IG51bWJlcik6IEJlaGF2aW9yU3ViamVjdDxudW1iZXI+IHtcblx0XHRyZXR1cm4gbmV3IEJlaGF2aW9yU3ViamVjdChudWxsKTtcblx0fVxuXG5cdGdldENvbmZpZ3VyZWRDYXJ0SXRlbUF0dHJpYnV0ZXMoaXRlbUlkOiBzdHJpbmcgfCBudW1iZXIpOiBCZWhhdmlvclN1YmplY3Q8RGFmZkNvbmZpZ3VyYWJsZUNhcnRJdGVtQXR0cmlidXRlW10+IHtcblx0XHRyZXR1cm4gbmV3IEJlaGF2aW9yU3ViamVjdChbXSk7XG5cdH1cblxuXHRnZXRDb21wb3NpdGVDYXJ0SXRlbU9wdGlvbnMoaXRlbUlkOiBzdHJpbmcgfCBudW1iZXIpOiBCZWhhdmlvclN1YmplY3Q8RGFmZkNvbXBvc2l0ZUNhcnRJdGVtT3B0aW9uW10+IHtcblx0XHRyZXR1cm4gbmV3IEJlaGF2aW9yU3ViamVjdChbXSk7XG5cdH1cblxuXHRpc0NhcnRJdGVtT3V0T2ZTdG9jayhpdGVtSWQ6IERhZmZDYXJ0SXRlbVsnaXRlbV9pZCddKTogQmVoYXZpb3JTdWJqZWN0PGJvb2xlYW4+IHtcblx0XHRyZXR1cm4gbmV3IEJlaGF2aW9yU3ViamVjdChmYWxzZSk7XG5cdH1cblxuXHRnZXRDYXJ0SXRlbVN0YXRlKGl0ZW1JZDogRGFmZkNhcnRJdGVtWydpdGVtX2lkJ10pOiBCZWhhdmlvclN1YmplY3Q8RGFmZkNhcnRJdGVtU3RhdGVFbnVtPiB7XG5cdFx0cmV0dXJuIG5ldyBCZWhhdmlvclN1YmplY3QoRGFmZkNhcnRJdGVtU3RhdGVFbnVtLkRlZmF1bHQpO1xuXHR9XG5cbiAgZGlzcGF0Y2goYWN0aW9uOiBBY3Rpb24pIHt9O1xufVxuIl19