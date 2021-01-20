import { BehaviorSubject } from 'rxjs';
import { Injectable, ɵɵdefineInjectable, NgModule } from '@angular/core';
import { DaffOrderFacade } from '@daffodil/order/state';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class MockDaffOrderFacade {
    constructor() {
        this.loading$ = new BehaviorSubject(null);
        this.errors$ = new BehaviorSubject([]);
        this.orders$ = new BehaviorSubject([]);
        this.orderIds$ = new BehaviorSubject([]);
        this.orderCount$ = new BehaviorSubject(null);
        this.orderEntities$ = new BehaviorSubject({});
        this.placedOrder$ = new BehaviorSubject(null);
        this.hasPlacedOrder$ = new BehaviorSubject(false);
    }
    /**
     * @param {?} orderId
     * @return {?}
     */
    getOrder$(orderId) {
        return new BehaviorSubject(null);
    }
    /**
     * @param {?} orderId
     * @return {?}
     */
    getTotals$(orderId) {
        return new BehaviorSubject([]);
    }
    /**
     * @param {?} orderId
     * @return {?}
     */
    getAppliedCodes$(orderId) {
        return new BehaviorSubject([]);
    }
    /**
     * @param {?} orderId
     * @return {?}
     */
    getItems$(orderId) {
        return new BehaviorSubject([]);
    }
    /**
     * @param {?} orderId
     * @return {?}
     */
    getBillingAddresses$(orderId) {
        return new BehaviorSubject([]);
    }
    /**
     * @param {?} orderId
     * @return {?}
     */
    getShippingAddresses$(orderId) {
        return new BehaviorSubject([]);
    }
    /**
     * @param {?} orderId
     * @return {?}
     */
    getShipments$(orderId) {
        return new BehaviorSubject([]);
    }
    /**
     * @param {?} orderId
     * @return {?}
     */
    getPayment$(orderId) {
        return new BehaviorSubject(null);
    }
    /**
     * @param {?} orderId
     * @return {?}
     */
    getInvoices$(orderId) {
        return new BehaviorSubject([]);
    }
    /**
     * @param {?} orderId
     * @return {?}
     */
    getCredits$(orderId) {
        return new BehaviorSubject([]);
    }
    /**
     * @param {?} orderId
     * @return {?}
     */
    getGrandTotal$(orderId) {
        return new BehaviorSubject(null);
    }
    ;
    /**
     * @param {?} orderId
     * @return {?}
     */
    getSubtotal$(orderId) {
        return new BehaviorSubject(null);
    }
    ;
    /**
     * @param {?} orderId
     * @return {?}
     */
    getShippingTotal$(orderId) {
        return new BehaviorSubject(null);
    }
    ;
    /**
     * @param {?} orderId
     * @return {?}
     */
    getDiscountTotal$(orderId) {
        return new BehaviorSubject(null);
    }
    ;
    /**
     * @param {?} orderId
     * @return {?}
     */
    hasDiscount$(orderId) {
        return new BehaviorSubject(false);
    }
    ;
    /**
     * @param {?} orderId
     * @return {?}
     */
    getTaxTotal$(orderId) {
        return new BehaviorSubject(null);
    }
    ;
    /**
     * @param {?} action
     * @return {?}
     */
    dispatch(action) { }
    ;
}
MockDaffOrderFacade.decorators = [
    { type: Injectable, args: [{ providedIn: 'root' },] }
];
/** @nocollapse */ MockDaffOrderFacade.ngInjectableDef = ɵɵdefineInjectable({ factory: function MockDaffOrderFacade_Factory() { return new MockDaffOrderFacade(); }, token: MockDaffOrderFacade, providedIn: "root" });
if (false) {
    /** @type {?} */
    MockDaffOrderFacade.prototype.loading$;
    /** @type {?} */
    MockDaffOrderFacade.prototype.errors$;
    /** @type {?} */
    MockDaffOrderFacade.prototype.orders$;
    /** @type {?} */
    MockDaffOrderFacade.prototype.orderIds$;
    /** @type {?} */
    MockDaffOrderFacade.prototype.orderCount$;
    /** @type {?} */
    MockDaffOrderFacade.prototype.orderEntities$;
    /** @type {?} */
    MockDaffOrderFacade.prototype.placedOrder$;
    /** @type {?} */
    MockDaffOrderFacade.prototype.hasPlacedOrder$;
    /* Skipping unhandled member: ;*/
    /* Skipping unhandled member: ;*/
    /* Skipping unhandled member: ;*/
    /* Skipping unhandled member: ;*/
    /* Skipping unhandled member: ;*/
    /* Skipping unhandled member: ;*/
    /* Skipping unhandled member: ;*/
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class DaffOrderTestingModule {
}
DaffOrderTestingModule.decorators = [
    { type: NgModule, args: [{
                providers: [
                    { provide: DaffOrderFacade, useExisting: MockDaffOrderFacade }
                ]
            },] }
];

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

export { DaffOrderTestingModule, MockDaffOrderFacade };
//# sourceMappingURL=daffodil-order-state-testing.js.map
