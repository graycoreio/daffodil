import { Injectable, ɵɵdefineInjectable, NgModule } from '@angular/core';
import { DaffCartResolveState, DaffCartItemStateEnum, DaffCartFacade } from '@daffodil/cart/state';
import { BehaviorSubject } from 'rxjs';
import { DaffModelFactory } from '@daffodil/core/testing';
import { DaffMockCartItem, DaffMockCompositeCartItem, DaffMockConfigurableCartItem } from '@daffodil/cart/testing';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class MockDaffCartFacade {
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
/** @nocollapse */ MockDaffCartFacade.ngInjectableDef = ɵɵdefineInjectable({ factory: function MockDaffCartFacade_Factory() { return new MockDaffCartFacade(); }, token: MockDaffCartFacade, providedIn: "root" });
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class DaffCartTestingModule {
}
DaffCartTestingModule.decorators = [
    { type: NgModule, args: [{
                providers: [
                    { provide: DaffCartFacade, useExisting: MockDaffCartFacade }
                ]
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class DaffMockStatefulCartItem extends DaffMockCartItem {
    constructor() {
        super(...arguments);
        this.daffState = DaffCartItemStateEnum.Default;
    }
}
if (false) {
    /** @type {?} */
    DaffMockStatefulCartItem.prototype.daffState;
}
class DaffStatefulCartItemFactory extends DaffModelFactory {
    constructor() {
        super(DaffMockStatefulCartItem);
    }
}
DaffStatefulCartItemFactory.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
DaffStatefulCartItemFactory.ctorParameters = () => [];
/** @nocollapse */ DaffStatefulCartItemFactory.ngInjectableDef = ɵɵdefineInjectable({ factory: function DaffStatefulCartItemFactory_Factory() { return new DaffStatefulCartItemFactory(); }, token: DaffStatefulCartItemFactory, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class DaffMockStatefulCompositeCartItem extends DaffMockCompositeCartItem {
}
if (false) {
    /** @type {?} */
    DaffMockStatefulCompositeCartItem.prototype.daffState;
}
class DaffStatefulCompositeCartItemFactory extends DaffModelFactory {
    constructor() {
        super(DaffMockStatefulCompositeCartItem);
    }
}
DaffStatefulCompositeCartItemFactory.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
DaffStatefulCompositeCartItemFactory.ctorParameters = () => [];
/** @nocollapse */ DaffStatefulCompositeCartItemFactory.ngInjectableDef = ɵɵdefineInjectable({ factory: function DaffStatefulCompositeCartItemFactory_Factory() { return new DaffStatefulCompositeCartItemFactory(); }, token: DaffStatefulCompositeCartItemFactory, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class DaffMockStatefulConfigurableCartItem extends DaffMockConfigurableCartItem {
}
if (false) {
    /** @type {?} */
    DaffMockStatefulConfigurableCartItem.prototype.daffState;
}
class DaffStatefulConfigurableCartItemFactory extends DaffModelFactory {
    constructor() {
        super(DaffMockStatefulConfigurableCartItem);
    }
}
DaffStatefulConfigurableCartItemFactory.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
DaffStatefulConfigurableCartItemFactory.ctorParameters = () => [];
/** @nocollapse */ DaffStatefulConfigurableCartItemFactory.ngInjectableDef = ɵɵdefineInjectable({ factory: function DaffStatefulConfigurableCartItemFactory_Factory() { return new DaffStatefulConfigurableCartItemFactory(); }, token: DaffStatefulConfigurableCartItemFactory, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { DaffCartTestingModule, DaffMockStatefulCartItem, DaffMockStatefulCompositeCartItem, DaffMockStatefulConfigurableCartItem, DaffStatefulCartItemFactory, DaffStatefulCompositeCartItemFactory, DaffStatefulConfigurableCartItemFactory, MockDaffCartFacade };
//# sourceMappingURL=daffodil-cart-state-testing.js.map
