(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('rxjs'), require('@angular/core'), require('@daffodil/order/state')) :
    typeof define === 'function' && define.amd ? define('@daffodil/order/state/testing', ['exports', 'rxjs', '@angular/core', '@daffodil/order/state'], factory) :
    (global = global || self, factory((global.daffodil = global.daffodil || {}, global.daffodil.order = global.daffodil.order || {}, global.daffodil.order.state = global.daffodil.order.state || {}, global.daffodil.order.state.testing = {}), global.rxjs, global.ng.core, global.daffodil.order.state));
}(this, function (exports, rxjs, core, state) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var MockDaffOrderFacade = /** @class */ (function () {
        function MockDaffOrderFacade() {
            this.loading$ = new rxjs.BehaviorSubject(null);
            this.errors$ = new rxjs.BehaviorSubject([]);
            this.orders$ = new rxjs.BehaviorSubject([]);
            this.orderIds$ = new rxjs.BehaviorSubject([]);
            this.orderCount$ = new rxjs.BehaviorSubject(null);
            this.orderEntities$ = new rxjs.BehaviorSubject({});
            this.placedOrder$ = new rxjs.BehaviorSubject(null);
            this.hasPlacedOrder$ = new rxjs.BehaviorSubject(false);
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
            return new rxjs.BehaviorSubject(null);
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
            return new rxjs.BehaviorSubject([]);
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
            return new rxjs.BehaviorSubject([]);
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
            return new rxjs.BehaviorSubject([]);
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
            return new rxjs.BehaviorSubject([]);
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
            return new rxjs.BehaviorSubject([]);
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
            return new rxjs.BehaviorSubject([]);
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
            return new rxjs.BehaviorSubject(null);
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
            return new rxjs.BehaviorSubject([]);
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
            return new rxjs.BehaviorSubject([]);
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
            return new rxjs.BehaviorSubject(null);
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
            return new rxjs.BehaviorSubject(null);
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
            return new rxjs.BehaviorSubject(null);
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
            return new rxjs.BehaviorSubject(null);
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
            return new rxjs.BehaviorSubject(false);
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
            return new rxjs.BehaviorSubject(null);
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
            { type: core.Injectable, args: [{ providedIn: 'root' },] }
        ];
        /** @nocollapse */ MockDaffOrderFacade.ngInjectableDef = core.ɵɵdefineInjectable({ factory: function MockDaffOrderFacade_Factory() { return new MockDaffOrderFacade(); }, token: MockDaffOrderFacade, providedIn: "root" });
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
            { type: core.NgModule, args: [{
                        providers: [
                            { provide: state.DaffOrderFacade, useExisting: MockDaffOrderFacade }
                        ]
                    },] }
        ];
        return DaffOrderTestingModule;
    }());

    exports.DaffOrderTestingModule = DaffOrderTestingModule;
    exports.MockDaffOrderFacade = MockDaffOrderFacade;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=daffodil-order-state-testing.umd.js.map
