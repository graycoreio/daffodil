(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common'), require('@daffodil/order/driver'), require('rxjs'), require('@daffodil/order/testing')) :
    typeof define === 'function' && define.amd ? define('@daffodil/order/driver/testing', ['exports', '@angular/core', '@angular/common', '@daffodil/order/driver', 'rxjs', '@daffodil/order/testing'], factory) :
    (global = global || self, factory((global.daffodil = global.daffodil || {}, global.daffodil.order = global.daffodil.order || {}, global.daffodil.order.driver = global.daffodil.order.driver || {}, global.daffodil.order.driver.testing = {}), global.ng.core, global.ng.common, global.daffodil.order.driver, global.rxjs, global.daffodil.order.testing));
}(this, function (exports, core, common, driver, rxjs, testing) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var DaffTestingOrderService = /** @class */ (function () {
        function DaffTestingOrderService(orderFactory) {
            this.orderFactory = orderFactory;
        }
        /**
         * @param {?} orderId
         * @return {?}
         */
        DaffTestingOrderService.prototype.get = /**
         * @param {?} orderId
         * @return {?}
         */
        function (orderId) {
            return rxjs.of(this.orderFactory.create({ id: orderId }));
        };
        /**
         * @return {?}
         */
        DaffTestingOrderService.prototype.list = /**
         * @return {?}
         */
        function () {
            return rxjs.of(this.orderFactory.createMany(5));
        };
        DaffTestingOrderService.decorators = [
            { type: core.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */
        DaffTestingOrderService.ctorParameters = function () { return [
            { type: testing.DaffOrderFactory }
        ]; };
        /** @nocollapse */ DaffTestingOrderService.ngInjectableDef = core.ɵɵdefineInjectable({ factory: function DaffTestingOrderService_Factory() { return new DaffTestingOrderService(core.ɵɵinject(testing.DaffOrderFactory)); }, token: DaffTestingOrderService, providedIn: "root" });
        return DaffTestingOrderService;
    }());
    if (false) {
        /**
         * @type {?}
         * @private
         */
        DaffTestingOrderService.prototype.orderFactory;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var DaffOrderTestingDriverModule = /** @class */ (function () {
        function DaffOrderTestingDriverModule() {
        }
        /**
         * @return {?}
         */
        DaffOrderTestingDriverModule.forRoot = /**
         * @return {?}
         */
        function () {
            return {
                ngModule: DaffOrderTestingDriverModule,
                providers: [
                    {
                        provide: driver.DaffOrderDriver,
                        useExisting: DaffTestingOrderService
                    }
                ]
            };
        };
        DaffOrderTestingDriverModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [
                            common.CommonModule
                        ]
                    },] }
        ];
        return DaffOrderTestingDriverModule;
    }());

    exports.DaffOrderTestingDriverModule = DaffOrderTestingDriverModule;
    exports.DaffTestingOrderService = DaffTestingOrderService;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=daffodil-order-driver-testing.umd.js.map
