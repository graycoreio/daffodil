import { BehaviorSubject } from 'rxjs';
import { Injectable, ɵɵdefineInjectable, NgModule } from '@angular/core';
import { DaffOrderFacade } from '@daffodil/order/state';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var MockDaffOrderFacade = /** @class */ (function () {
    function MockDaffOrderFacade() {
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
    MockDaffOrderFacade.prototype.getOrder$ = /**
     * @param {?} orderId
     * @return {?}
     */
    function (orderId) {
        return new BehaviorSubject(null);
    };
    /**
     * @param {?} orderId
     * @return {?}
     */
    MockDaffOrderFacade.prototype.getTotals$ = /**
     * @param {?} orderId
     * @return {?}
     */
    function (orderId) {
        return new BehaviorSubject([]);
    };
    /**
     * @param {?} orderId
     * @return {?}
     */
    MockDaffOrderFacade.prototype.getAppliedCodes$ = /**
     * @param {?} orderId
     * @return {?}
     */
    function (orderId) {
        return new BehaviorSubject([]);
    };
    /**
     * @param {?} orderId
     * @return {?}
     */
    MockDaffOrderFacade.prototype.getItems$ = /**
     * @param {?} orderId
     * @return {?}
     */
    function (orderId) {
        return new BehaviorSubject([]);
    };
    /**
     * @param {?} orderId
     * @return {?}
     */
    MockDaffOrderFacade.prototype.getBillingAddresses$ = /**
     * @param {?} orderId
     * @return {?}
     */
    function (orderId) {
        return new BehaviorSubject([]);
    };
    /**
     * @param {?} orderId
     * @return {?}
     */
    MockDaffOrderFacade.prototype.getShippingAddresses$ = /**
     * @param {?} orderId
     * @return {?}
     */
    function (orderId) {
        return new BehaviorSubject([]);
    };
    /**
     * @param {?} orderId
     * @return {?}
     */
    MockDaffOrderFacade.prototype.getShipments$ = /**
     * @param {?} orderId
     * @return {?}
     */
    function (orderId) {
        return new BehaviorSubject([]);
    };
    /**
     * @param {?} orderId
     * @return {?}
     */
    MockDaffOrderFacade.prototype.getPayment$ = /**
     * @param {?} orderId
     * @return {?}
     */
    function (orderId) {
        return new BehaviorSubject(null);
    };
    /**
     * @param {?} orderId
     * @return {?}
     */
    MockDaffOrderFacade.prototype.getInvoices$ = /**
     * @param {?} orderId
     * @return {?}
     */
    function (orderId) {
        return new BehaviorSubject([]);
    };
    /**
     * @param {?} orderId
     * @return {?}
     */
    MockDaffOrderFacade.prototype.getCredits$ = /**
     * @param {?} orderId
     * @return {?}
     */
    function (orderId) {
        return new BehaviorSubject([]);
    };
    /**
     * @param {?} orderId
     * @return {?}
     */
    MockDaffOrderFacade.prototype.getGrandTotal$ = /**
     * @param {?} orderId
     * @return {?}
     */
    function (orderId) {
        return new BehaviorSubject(null);
    };
    ;
    /**
     * @param {?} orderId
     * @return {?}
     */
    MockDaffOrderFacade.prototype.getSubtotal$ = /**
     * @param {?} orderId
     * @return {?}
     */
    function (orderId) {
        return new BehaviorSubject(null);
    };
    ;
    /**
     * @param {?} orderId
     * @return {?}
     */
    MockDaffOrderFacade.prototype.getShippingTotal$ = /**
     * @param {?} orderId
     * @return {?}
     */
    function (orderId) {
        return new BehaviorSubject(null);
    };
    ;
    /**
     * @param {?} orderId
     * @return {?}
     */
    MockDaffOrderFacade.prototype.getDiscountTotal$ = /**
     * @param {?} orderId
     * @return {?}
     */
    function (orderId) {
        return new BehaviorSubject(null);
    };
    ;
    /**
     * @param {?} orderId
     * @return {?}
     */
    MockDaffOrderFacade.prototype.hasDiscount$ = /**
     * @param {?} orderId
     * @return {?}
     */
    function (orderId) {
        return new BehaviorSubject(false);
    };
    ;
    /**
     * @param {?} orderId
     * @return {?}
     */
    MockDaffOrderFacade.prototype.getTaxTotal$ = /**
     * @param {?} orderId
     * @return {?}
     */
    function (orderId) {
        return new BehaviorSubject(null);
    };
    ;
    /**
     * @param {?} action
     * @return {?}
     */
    MockDaffOrderFacade.prototype.dispatch = /**
     * @param {?} action
     * @return {?}
     */
    function (action) { };
    ;
    MockDaffOrderFacade.decorators = [
        { type: Injectable, args: [{ providedIn: 'root' },] }
    ];
    /** @nocollapse */ MockDaffOrderFacade.ngInjectableDef = ɵɵdefineInjectable({ factory: function MockDaffOrderFacade_Factory() { return new MockDaffOrderFacade(); }, token: MockDaffOrderFacade, providedIn: "root" });
    return MockDaffOrderFacade;
}());
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
var DaffOrderTestingModule = /** @class */ (function () {
    function DaffOrderTestingModule() {
    }
    DaffOrderTestingModule.decorators = [
        { type: NgModule, args: [{
                    providers: [
                        { provide: DaffOrderFacade, useExisting: MockDaffOrderFacade }
                    ]
                },] }
    ];
    return DaffOrderTestingModule;
}());

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
