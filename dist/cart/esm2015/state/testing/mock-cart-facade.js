/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';
import { DaffCartItemStateEnum, DaffCartResolveState } from '@daffodil/cart/state';
import * as i0 from "@angular/core";
export class MockDaffCartFacade {
    constructor() {
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
    getCartItemDiscountedTotal(itemId) {
        return new BehaviorSubject(null);
    }
    /**
     * @param {?} itemId
     * @return {?}
     */
    getConfiguredCartItemAttributes(itemId) {
        return new BehaviorSubject([]);
    }
    /**
     * @param {?} itemId
     * @return {?}
     */
    getCompositeCartItemOptions(itemId) {
        return new BehaviorSubject([]);
    }
    /**
     * @param {?} itemId
     * @return {?}
     */
    isCartItemOutOfStock(itemId) {
        return new BehaviorSubject(false);
    }
    /**
     * @param {?} itemId
     * @return {?}
     */
    getCartItemState(itemId) {
        return new BehaviorSubject(DaffCartItemStateEnum.Default);
    }
    /**
     * @param {?} action
     * @return {?}
     */
    dispatch(action) { }
    ;
}
MockDaffCartFacade.decorators = [
    { type: Injectable, args: [{ providedIn: 'root' },] }
];
/** @nocollapse */ MockDaffCartFacade.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function MockDaffCartFacade_Factory() { return new MockDaffCartFacade(); }, token: MockDaffCartFacade, providedIn: "root" });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9jay1jYXJ0LWZhY2FkZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkYWZmb2RpbC9jYXJ0L3N0YXRlL3Rlc3RpbmcvIiwic291cmNlcyI6WyJtb2NrLWNhcnQtZmFjYWRlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBR3ZDLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFJM0MsT0FBTyxFQUtOLHFCQUFxQixFQUVwQixvQkFBb0IsRUFDckIsTUFBTSxzQkFBc0IsQ0FBQzs7QUFHOUIsTUFBTSxPQUFPLGtCQUFrQjtJQUQvQjtRQUVFLFVBQUssR0FBOEIsSUFBSSxlQUFlLENBQUMsSUFBSSxDQUFDLENBQUM7UUFFN0QsY0FBUyxHQUEwQyxJQUFJLGVBQWUsQ0FBQyxvQkFBb0IsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUVyRyxtQkFBYyxHQUFxQyxJQUFJLGVBQWUsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUM3RSxvQkFBZSxHQUE2QixJQUFJLGVBQWUsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUN2RSxzQkFBaUIsR0FBNkIsSUFBSSxlQUFlLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDekUscUJBQWdCLEdBQTZCLElBQUksZUFBZSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3hFLGFBQVEsR0FBNkIsSUFBSSxlQUFlLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDaEUsZUFBVSxHQUE2QixJQUFJLGVBQWUsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNsRSxjQUFTLEdBQTZCLElBQUksZUFBZSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ2pFLDJCQUFzQixHQUE2QixJQUFJLGVBQWUsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUM5RSw2QkFBd0IsR0FBNkIsSUFBSSxlQUFlLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDaEYsNEJBQXVCLEdBQTZCLElBQUksZUFBZSxDQUFDLEtBQUss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Q0FBeUU7O0lBQ3pFLG9DQUFxRTs7SUFDckUseUNBQWlFOztJQUNqRSxpREFBMkU7O0lBQzNFLDZDQUE2Rjs7SUFDN0YsNkNBQTBGOztJQUMxRiw4Q0FBNEY7O0lBQzVGLHNDQUEyRTs7SUFDM0UscUNBQXVFOztJQUN2RSxrREFBb0c7O0lBQ3BHLHVEQUE2Rzs7SUFDN0csc0RBQTJHOztJQUMzRyx3Q0FBNkQ7O0lBRTdELDBDQUFtRTs7SUFDbkUsc0RBQWdGOztJQUVoRixnREFBZ0Q7O0lBQ2hELGlEQUFpRDs7SUFDakQsZ0RBQWdEOztJQUNoRCwrQ0FBK0M7O0lBQy9DLDRDQUFzRTs7SUFFdEUsaURBQTBEOztJQUMzRCxnREFBK0Q7O0lBQy9ELDBDQUlJOztJQUNKLDRDQUEyRTs7SUFDM0UsZ0RBQThFOztJQUM5RSw2Q0FBc0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBCZWhhdmlvclN1YmplY3QgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IEFjdGlvbiB9IGZyb20gJ0BuZ3J4L3N0b3JlJztcbmltcG9ydCB7IERpY3Rpb25hcnkgfSBmcm9tICdAbmdyeC9lbnRpdHknO1xuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBEYWZmU3RhdGVFcnJvciB9IGZyb20gJ0BkYWZmb2RpbC9jb3JlL3N0YXRlJztcbmltcG9ydCB7IERhZmZDYXJ0LCBEYWZmQ2FydFRvdGFsLCBEYWZmQ2FydEl0ZW0sIERhZmZDYXJ0T3JkZXJSZXN1bHQsIERhZmZDb25maWd1cmFibGVDYXJ0SXRlbUF0dHJpYnV0ZSwgRGFmZkNvbXBvc2l0ZUNhcnRJdGVtT3B0aW9uIH0gZnJvbSAnQGRhZmZvZGlsL2NhcnQnO1xuaW1wb3J0IHtcblx0RGFmZkNhcnRGYWNhZGVJbnRlcmZhY2UsXG5cdERhZmZDYXJ0RXJyb3JzLFxuXHREYWZmQ2FydE9wZXJhdGlvblR5cGUsXG5cdERhZmZDYXJ0TG9hZGluZyxcblx0RGFmZkNhcnRJdGVtU3RhdGVFbnVtLFxuXHREYWZmU3RhdGVmdWxDYXJ0SXRlbSxcbiAgRGFmZkNhcnRSZXNvbHZlU3RhdGVcbn0gZnJvbSAnQGRhZmZvZGlsL2NhcnQvc3RhdGUnO1xuXG5ASW5qZWN0YWJsZSh7cHJvdmlkZWRJbjogJ3Jvb3QnfSlcbmV4cG9ydCBjbGFzcyBNb2NrRGFmZkNhcnRGYWNhZGUgaW1wbGVtZW50cyBEYWZmQ2FydEZhY2FkZUludGVyZmFjZSB7XG4gIGNhcnQkOiBCZWhhdmlvclN1YmplY3Q8RGFmZkNhcnQ+ID0gbmV3IEJlaGF2aW9yU3ViamVjdChudWxsKTtcblxuICByZXNvbHZlZCQ6IEJlaGF2aW9yU3ViamVjdDxEYWZmQ2FydFJlc29sdmVTdGF0ZT4gPSBuZXcgQmVoYXZpb3JTdWJqZWN0KERhZmZDYXJ0UmVzb2x2ZVN0YXRlLkRlZmF1bHQpO1xuXG4gIGxvYWRpbmdPYmplY3QkOiBCZWhhdmlvclN1YmplY3Q8RGFmZkNhcnRMb2FkaW5nPiA9IG5ldyBCZWhhdmlvclN1YmplY3QobnVsbCk7XG4gIGZlYXR1cmVMb2FkaW5nJDogQmVoYXZpb3JTdWJqZWN0PGJvb2xlYW4+ID0gbmV3IEJlaGF2aW9yU3ViamVjdChmYWxzZSk7XG4gIGZlYXR1cmVSZXNvbHZpbmckOiBCZWhhdmlvclN1YmplY3Q8Ym9vbGVhbj4gPSBuZXcgQmVoYXZpb3JTdWJqZWN0KGZhbHNlKTtcbiAgZmVhdHVyZU11dGF0aW5nJDogQmVoYXZpb3JTdWJqZWN0PGJvb2xlYW4+ID0gbmV3IEJlaGF2aW9yU3ViamVjdChmYWxzZSk7XG4gIGxvYWRpbmckOiBCZWhhdmlvclN1YmplY3Q8Ym9vbGVhbj4gPSBuZXcgQmVoYXZpb3JTdWJqZWN0KGZhbHNlKTtcbiAgcmVzb2x2aW5nJDogQmVoYXZpb3JTdWJqZWN0PGJvb2xlYW4+ID0gbmV3IEJlaGF2aW9yU3ViamVjdChmYWxzZSk7XG4gIG11dGF0aW5nJDogQmVoYXZpb3JTdWJqZWN0PGJvb2xlYW4+ID0gbmV3IEJlaGF2aW9yU3ViamVjdChmYWxzZSk7XG4gIGJpbGxpbmdBZGRyZXNzTG9hZGluZyQ6IEJlaGF2aW9yU3ViamVjdDxib29sZWFuPiA9IG5ldyBCZWhhdmlvclN1YmplY3QoZmFsc2UpO1xuICBiaWxsaW5nQWRkcmVzc1Jlc29sdmluZyQ6IEJlaGF2aW9yU3ViamVjdDxib29sZWFuPiA9IG5ldyBCZWhhdmlvclN1YmplY3QoZmFsc2UpO1xuICBiaWxsaW5nQWRkcmVzc011dGF0aW5nJDogQmVoYXZpb3JTdWJqZWN0PGJvb2xlYW4+ID0gbmV3IEJlaGF2aW9yU3ViamVjdChmYWxzZSk7XG4gIHNoaXBwaW5nQWRkcmVzc0xvYWRpbmckOiBCZWhhdmlvclN1YmplY3Q8Ym9vbGVhbj4gPSBuZXcgQmVoYXZpb3JTdWJqZWN0KGZhbHNlKTtcbiAgc2hpcHBpbmdBZGRyZXNzUmVzb2x2aW5nJDogQmVoYXZpb3JTdWJqZWN0PGJvb2xlYW4+ID0gbmV3IEJlaGF2aW9yU3ViamVjdChmYWxzZSk7XG4gIHNoaXBwaW5nQWRkcmVzc011dGF0aW5nJDogQmVoYXZpb3JTdWJqZWN0PGJvb2xlYW4+ID0gbmV3IEJlaGF2aW9yU3ViamVjdChmYWxzZSk7XG4gIHNoaXBwaW5nSW5mb3JtYXRpb25Mb2FkaW5nJDogQmVoYXZpb3JTdWJqZWN0PGJvb2xlYW4+ID0gbmV3IEJlaGF2aW9yU3ViamVjdChmYWxzZSk7XG4gIHNoaXBwaW5nSW5mb3JtYXRpb25SZXNvbHZpbmckOiBCZWhhdmlvclN1YmplY3Q8Ym9vbGVhbj4gPSBuZXcgQmVoYXZpb3JTdWJqZWN0KGZhbHNlKTtcbiAgc2hpcHBpbmdJbmZvcm1hdGlvbk11dGF0aW5nJDogQmVoYXZpb3JTdWJqZWN0PGJvb2xlYW4+ID0gbmV3IEJlaGF2aW9yU3ViamVjdChmYWxzZSk7XG4gIHNoaXBwaW5nTWV0aG9kc0xvYWRpbmckOiBCZWhhdmlvclN1YmplY3Q8Ym9vbGVhbj4gPSBuZXcgQmVoYXZpb3JTdWJqZWN0KGZhbHNlKTtcbiAgc2hpcHBpbmdNZXRob2RzUmVzb2x2aW5nJDogQmVoYXZpb3JTdWJqZWN0PGJvb2xlYW4+ID0gbmV3IEJlaGF2aW9yU3ViamVjdChmYWxzZSk7XG4gIHBheW1lbnRMb2FkaW5nJDogQmVoYXZpb3JTdWJqZWN0PGJvb2xlYW4+ID0gbmV3IEJlaGF2aW9yU3ViamVjdChmYWxzZSk7XG4gIHBheW1lbnRSZXNvbHZpbmckOiBCZWhhdmlvclN1YmplY3Q8Ym9vbGVhbj4gPSBuZXcgQmVoYXZpb3JTdWJqZWN0KGZhbHNlKTtcbiAgcGF5bWVudE11dGF0aW5nJDogQmVoYXZpb3JTdWJqZWN0PGJvb2xlYW4+ID0gbmV3IEJlaGF2aW9yU3ViamVjdChmYWxzZSk7XG4gIHBheW1lbnRNZXRob2RzTG9hZGluZyQ6IEJlaGF2aW9yU3ViamVjdDxib29sZWFuPiA9IG5ldyBCZWhhdmlvclN1YmplY3QoZmFsc2UpO1xuICBwYXltZW50TWV0aG9kc1Jlc29sdmluZyQ6IEJlaGF2aW9yU3ViamVjdDxib29sZWFuPiA9IG5ldyBCZWhhdmlvclN1YmplY3QoZmFsc2UpO1xuICBjb3Vwb25Mb2FkaW5nJDogQmVoYXZpb3JTdWJqZWN0PGJvb2xlYW4+ID0gbmV3IEJlaGF2aW9yU3ViamVjdChmYWxzZSk7XG4gIGNvdXBvblJlc29sdmluZyQ6IEJlaGF2aW9yU3ViamVjdDxib29sZWFuPiA9IG5ldyBCZWhhdmlvclN1YmplY3QoZmFsc2UpO1xuICBjb3Vwb25NdXRhdGluZyQ6IEJlaGF2aW9yU3ViamVjdDxib29sZWFuPiA9IG5ldyBCZWhhdmlvclN1YmplY3QoZmFsc2UpO1xuICBpdGVtTG9hZGluZyQ6IEJlaGF2aW9yU3ViamVjdDxib29sZWFuPiA9IG5ldyBCZWhhdmlvclN1YmplY3QoZmFsc2UpO1xuICBpdGVtQWRkaW5nJDogQmVoYXZpb3JTdWJqZWN0PGJvb2xlYW4+ID0gbmV3IEJlaGF2aW9yU3ViamVjdChmYWxzZSk7XG4gIGl0ZW1SZXNvbHZpbmckOiBCZWhhdmlvclN1YmplY3Q8Ym9vbGVhbj4gPSBuZXcgQmVoYXZpb3JTdWJqZWN0KGZhbHNlKTtcblx0aXRlbU11dGF0aW5nJDogQmVoYXZpb3JTdWJqZWN0PGJvb2xlYW4+ID0gbmV3IEJlaGF2aW9yU3ViamVjdChmYWxzZSk7XG5cbiAgZXJyb3JzJDogQmVoYXZpb3JTdWJqZWN0PERhZmZDYXJ0RXJyb3JzPiA9IG5ldyBCZWhhdmlvclN1YmplY3QobnVsbCk7XG4gIGNhcnRFcnJvcnMkOiBCZWhhdmlvclN1YmplY3Q8RGFmZkNhcnRFcnJvcnNbRGFmZkNhcnRPcGVyYXRpb25UeXBlLkNhcnRdPiA9IG5ldyBCZWhhdmlvclN1YmplY3QoW10pO1xuICBpdGVtRXJyb3JzJDogQmVoYXZpb3JTdWJqZWN0PERhZmZDYXJ0RXJyb3JzW0RhZmZDYXJ0T3BlcmF0aW9uVHlwZS5JdGVtXT4gPSBuZXcgQmVoYXZpb3JTdWJqZWN0KFtdKTtcbiAgYmlsbGluZ0FkZHJlc3NFcnJvcnMkOiBCZWhhdmlvclN1YmplY3Q8RGFmZkNhcnRFcnJvcnNbRGFmZkNhcnRPcGVyYXRpb25UeXBlLkJpbGxpbmdBZGRyZXNzXT4gPSBuZXcgQmVoYXZpb3JTdWJqZWN0KFtdKTtcbiAgc2hpcHBpbmdBZGRyZXNzRXJyb3JzJDogQmVoYXZpb3JTdWJqZWN0PERhZmZDYXJ0RXJyb3JzW0RhZmZDYXJ0T3BlcmF0aW9uVHlwZS5TaGlwcGluZ0FkZHJlc3NdPiA9IG5ldyBCZWhhdmlvclN1YmplY3QoW10pO1xuICBzaGlwcGluZ0luZm9ybWF0aW9uRXJyb3JzJDogQmVoYXZpb3JTdWJqZWN0PERhZmZDYXJ0RXJyb3JzW0RhZmZDYXJ0T3BlcmF0aW9uVHlwZS5TaGlwcGluZ0luZm9ybWF0aW9uXT4gPSBuZXcgQmVoYXZpb3JTdWJqZWN0KFtdKTtcbiAgc2hpcHBpbmdNZXRob2RzRXJyb3JzJDogQmVoYXZpb3JTdWJqZWN0PERhZmZDYXJ0RXJyb3JzW0RhZmZDYXJ0T3BlcmF0aW9uVHlwZS5TaGlwcGluZ01ldGhvZHNdPiA9IG5ldyBCZWhhdmlvclN1YmplY3QoW10pO1xuICBwYXltZW50RXJyb3JzJDogQmVoYXZpb3JTdWJqZWN0PERhZmZDYXJ0RXJyb3JzW0RhZmZDYXJ0T3BlcmF0aW9uVHlwZS5QYXltZW50XT4gPSBuZXcgQmVoYXZpb3JTdWJqZWN0KFtdKTtcbiAgcGF5bWVudE1ldGhvZHNFcnJvcnMkOiBCZWhhdmlvclN1YmplY3Q8RGFmZkNhcnRFcnJvcnNbRGFmZkNhcnRPcGVyYXRpb25UeXBlLlBheW1lbnRNZXRob2RzXT4gPSBuZXcgQmVoYXZpb3JTdWJqZWN0KFtdKTtcbiAgY291cG9uRXJyb3JzJDogQmVoYXZpb3JTdWJqZWN0PERhZmZDYXJ0RXJyb3JzW0RhZmZDYXJ0T3BlcmF0aW9uVHlwZS5Db3Vwb25dPiA9IG5ldyBCZWhhdmlvclN1YmplY3QoW10pO1xuXG4gIGlkJDogQmVoYXZpb3JTdWJqZWN0PERhZmZDYXJ0WydpZCddPiA9IG5ldyBCZWhhdmlvclN1YmplY3QobnVsbCk7XG4gIHN1YnRvdGFsJDogQmVoYXZpb3JTdWJqZWN0PERhZmZDYXJ0VG90YWxbJ3ZhbHVlJ10+ID0gbmV3IEJlaGF2aW9yU3ViamVjdChudWxsKTtcbiAgZ3JhbmRUb3RhbCQ6IEJlaGF2aW9yU3ViamVjdDxEYWZmQ2FydFRvdGFsWyd2YWx1ZSddPiA9IG5ldyBCZWhhdmlvclN1YmplY3QobnVsbCk7XG4gIHN1YnRvdGFsRXhjbHVkaW5nVGF4JDogQmVoYXZpb3JTdWJqZWN0PERhZmZDYXJ0VG90YWxbJ3ZhbHVlJ10+ID0gbmV3IEJlaGF2aW9yU3ViamVjdChudWxsKTtcbiAgc3VidG90YWxJbmNsdWRpbmdUYXgkOiBCZWhhdmlvclN1YmplY3Q8RGFmZkNhcnRUb3RhbFsndmFsdWUnXT4gPSBuZXcgQmVoYXZpb3JTdWJqZWN0KG51bGwpO1xuICBzdWJ0b3RhbFdpdGhEaXNjb3VudEV4Y2x1ZGluZ1RheCQ6IEJlaGF2aW9yU3ViamVjdDxEYWZmQ2FydFRvdGFsWyd2YWx1ZSddPiA9IG5ldyBCZWhhdmlvclN1YmplY3QobnVsbCk7XG4gIHN1YnRvdGFsV2l0aERpc2NvdW50SW5jbHVkaW5nVGF4JDogQmVoYXZpb3JTdWJqZWN0PERhZmZDYXJ0VG90YWxbJ3ZhbHVlJ10+ID0gbmV3IEJlaGF2aW9yU3ViamVjdChudWxsKTtcbiAgZGlzY291bnRUb3RhbHMkOiBCZWhhdmlvclN1YmplY3Q8RGFmZkNhcnRUb3RhbFtdPiA9IG5ldyBCZWhhdmlvclN1YmplY3QoW10pO1xuICB0b3RhbFRheCQ6IEJlaGF2aW9yU3ViamVjdDxEYWZmQ2FydFRvdGFsWyd2YWx1ZSddPiA9IG5ldyBCZWhhdmlvclN1YmplY3QobnVsbCk7XG4gIHNoaXBwaW5nVG90YWwkOiBCZWhhdmlvclN1YmplY3Q8RGFmZkNhcnRUb3RhbFsndmFsdWUnXT4gPSBuZXcgQmVoYXZpb3JTdWJqZWN0KG51bGwpO1xuICBjb3Vwb25zJDogQmVoYXZpb3JTdWJqZWN0PERhZmZDYXJ0Wydjb3Vwb25zJ10+ID0gbmV3IEJlaGF2aW9yU3ViamVjdChbXSk7XG4gIGl0ZW1zJDogQmVoYXZpb3JTdWJqZWN0PERhZmZDYXJ0WydpdGVtcyddPiA9IG5ldyBCZWhhdmlvclN1YmplY3QoW10pO1xuICB0b3RhbEl0ZW1zJDogQmVoYXZpb3JTdWJqZWN0PG51bWJlcj4gPSBuZXcgQmVoYXZpb3JTdWJqZWN0KG51bGwpO1xuICBoYXNPdXRPZlN0b2NrSXRlbXMkOiBCZWhhdmlvclN1YmplY3Q8Ym9vbGVhbj4gPSBuZXcgQmVoYXZpb3JTdWJqZWN0KGZhbHNlKTtcbiAgaXRlbURpY3Rpb25hcnkkOiBCZWhhdmlvclN1YmplY3Q8RGljdGlvbmFyeTxEYWZmU3RhdGVmdWxDYXJ0SXRlbT4+ID0gbmV3IEJlaGF2aW9yU3ViamVjdCh7fSk7XG4gIGJpbGxpbmdBZGRyZXNzJDogQmVoYXZpb3JTdWJqZWN0PERhZmZDYXJ0WydiaWxsaW5nX2FkZHJlc3MnXT4gPSBuZXcgQmVoYXZpb3JTdWJqZWN0KG51bGwpO1xuICBzaGlwcGluZ0FkZHJlc3MkOiBCZWhhdmlvclN1YmplY3Q8RGFmZkNhcnRbJ3NoaXBwaW5nX2FkZHJlc3MnXT4gPSBuZXcgQmVoYXZpb3JTdWJqZWN0KG51bGwpO1xuICBwYXltZW50JDogQmVoYXZpb3JTdWJqZWN0PERhZmZDYXJ0WydwYXltZW50J10+ID0gbmV3IEJlaGF2aW9yU3ViamVjdChudWxsKTtcbiAgdG90YWxzJDogQmVoYXZpb3JTdWJqZWN0PERhZmZDYXJ0Wyd0b3RhbHMnXT4gPSBuZXcgQmVoYXZpb3JTdWJqZWN0KFtdKTtcbiAgc2hpcHBpbmdJbmZvcm1hdGlvbiQ6IEJlaGF2aW9yU3ViamVjdDxEYWZmQ2FydFsnc2hpcHBpbmdfaW5mb3JtYXRpb24nXT4gPSBuZXcgQmVoYXZpb3JTdWJqZWN0KG51bGwpO1xuICBhdmFpbGFibGVTaGlwcGluZ01ldGhvZHMkOiBCZWhhdmlvclN1YmplY3Q8RGFmZkNhcnRbJ2F2YWlsYWJsZV9zaGlwcGluZ19tZXRob2RzJ10+ID0gbmV3IEJlaGF2aW9yU3ViamVjdChbXSk7XG4gIGF2YWlsYWJsZVBheW1lbnRNZXRob2RzJDogQmVoYXZpb3JTdWJqZWN0PERhZmZDYXJ0WydhdmFpbGFibGVfcGF5bWVudF9tZXRob2RzJ10+ID0gbmV3IEJlaGF2aW9yU3ViamVjdChbXSk7XG4gIHBheW1lbnRJZCQ6IEJlaGF2aW9yU3ViamVjdDxhbnk+ID0gbmV3IEJlaGF2aW9yU3ViamVjdChudWxsKTtcblxuICBpc0NhcnRFbXB0eSQ6IEJlaGF2aW9yU3ViamVjdDxib29sZWFuPiA9IG5ldyBCZWhhdmlvclN1YmplY3QodHJ1ZSk7XG4gIGlzQmlsbGluZ1NhbWVBc1NoaXBwaW5nJDogQmVoYXZpb3JTdWJqZWN0PGJvb2xlYW4+ID0gbmV3IEJlaGF2aW9yU3ViamVjdChmYWxzZSk7XG5cbiAgaGFzQmlsbGluZ0FkZHJlc3MkID0gbmV3IEJlaGF2aW9yU3ViamVjdChmYWxzZSk7XG4gIGhhc1NoaXBwaW5nQWRkcmVzcyQgPSBuZXcgQmVoYXZpb3JTdWJqZWN0KGZhbHNlKTtcbiAgaGFzU2hpcHBpbmdNZXRob2QkID0gbmV3IEJlaGF2aW9yU3ViamVjdChmYWxzZSk7XG4gIGhhc1BheW1lbnRNZXRob2QkID0gbmV3IEJlaGF2aW9yU3ViamVjdChmYWxzZSk7XG4gIGNhblBsYWNlT3JkZXIkOiBCZWhhdmlvclN1YmplY3Q8Ym9vbGVhbj4gPSBuZXcgQmVoYXZpb3JTdWJqZWN0KGZhbHNlKTtcblxuICBvcmRlclJlc3VsdExvYWRpbmckID0gbmV3IEJlaGF2aW9yU3ViamVjdDxib29sZWFuPihmYWxzZSk7XG5cdG9yZGVyUmVzdWx0RXJyb3JzJCA9IG5ldyBCZWhhdmlvclN1YmplY3Q8RGFmZlN0YXRlRXJyb3JbXT4oW10pO1xuXHRvcmRlclJlc3VsdCQgPSBuZXcgQmVoYXZpb3JTdWJqZWN0PERhZmZDYXJ0T3JkZXJSZXN1bHQ+KHtcbiAgICBpZDogbnVsbCxcbiAgICBvcmRlcklkOiBudWxsLFxuICAgIGNhcnRJZDogbnVsbCxcbiAgfSk7XG5cdG9yZGVyUmVzdWx0SWQkID0gbmV3IEJlaGF2aW9yU3ViamVjdDxEYWZmQ2FydE9yZGVyUmVzdWx0WydvcmRlcklkJ10+KG51bGwpO1xuXHRvcmRlclJlc3VsdENhcnRJZCQgPSBuZXcgQmVoYXZpb3JTdWJqZWN0PERhZmZDYXJ0T3JkZXJSZXN1bHRbJ2NhcnRJZCddPihudWxsKTtcblx0aGFzT3JkZXJSZXN1bHQkID0gbmV3IEJlaGF2aW9yU3ViamVjdDxib29sZWFuPihmYWxzZSk7XG5cblx0Z2V0Q2FydEl0ZW1EaXNjb3VudGVkVG90YWwoaXRlbUlkOiBzdHJpbmcgfCBudW1iZXIpOiBCZWhhdmlvclN1YmplY3Q8bnVtYmVyPiB7XG5cdFx0cmV0dXJuIG5ldyBCZWhhdmlvclN1YmplY3QobnVsbCk7XG5cdH1cblxuXHRnZXRDb25maWd1cmVkQ2FydEl0ZW1BdHRyaWJ1dGVzKGl0ZW1JZDogc3RyaW5nIHwgbnVtYmVyKTogQmVoYXZpb3JTdWJqZWN0PERhZmZDb25maWd1cmFibGVDYXJ0SXRlbUF0dHJpYnV0ZVtdPiB7XG5cdFx0cmV0dXJuIG5ldyBCZWhhdmlvclN1YmplY3QoW10pO1xuXHR9XG5cblx0Z2V0Q29tcG9zaXRlQ2FydEl0ZW1PcHRpb25zKGl0ZW1JZDogc3RyaW5nIHwgbnVtYmVyKTogQmVoYXZpb3JTdWJqZWN0PERhZmZDb21wb3NpdGVDYXJ0SXRlbU9wdGlvbltdPiB7XG5cdFx0cmV0dXJuIG5ldyBCZWhhdmlvclN1YmplY3QoW10pO1xuXHR9XG5cblx0aXNDYXJ0SXRlbU91dE9mU3RvY2soaXRlbUlkOiBEYWZmQ2FydEl0ZW1bJ2l0ZW1faWQnXSk6IEJlaGF2aW9yU3ViamVjdDxib29sZWFuPiB7XG5cdFx0cmV0dXJuIG5ldyBCZWhhdmlvclN1YmplY3QoZmFsc2UpO1xuXHR9XG5cblx0Z2V0Q2FydEl0ZW1TdGF0ZShpdGVtSWQ6IERhZmZDYXJ0SXRlbVsnaXRlbV9pZCddKTogQmVoYXZpb3JTdWJqZWN0PERhZmZDYXJ0SXRlbVN0YXRlRW51bT4ge1xuXHRcdHJldHVybiBuZXcgQmVoYXZpb3JTdWJqZWN0KERhZmZDYXJ0SXRlbVN0YXRlRW51bS5EZWZhdWx0KTtcblx0fVxuXG4gIGRpc3BhdGNoKGFjdGlvbjogQWN0aW9uKSB7fTtcbn1cbiJdfQ==