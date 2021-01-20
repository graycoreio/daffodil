(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common'), require('@daffodil/order/driver'), require('@angular/common/http'), require('angular-in-memory-web-api'), require('@daffodil/order/testing')) :
    typeof define === 'function' && define.amd ? define('@daffodil/order/driver/in-memory', ['exports', '@angular/core', '@angular/common', '@daffodil/order/driver', '@angular/common/http', 'angular-in-memory-web-api', '@daffodil/order/testing'], factory) :
    (global = global || self, factory((global.daffodil = global.daffodil || {}, global.daffodil.order = global.daffodil.order || {}, global.daffodil.order.driver = global.daffodil.order.driver || {}, global.daffodil.order.driver['in-memory'] = {}), global.ng.core, global.ng.common, global.daffodil.order.driver, global.ng.common.http, global.angularInMemoryWebApi, global.daffodil.order.testing));
}(this, function (exports, core, common, driver, http, angularInMemoryWebApi, testing) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var DaffInMemoryOrderService = /** @class */ (function () {
        function DaffInMemoryOrderService(http) {
            this.http = http;
            this.url = '/api/orders';
        }
        /**
         * @param {?} orderId
         * @return {?}
         */
        DaffInMemoryOrderService.prototype.get = /**
         * @param {?} orderId
         * @return {?}
         */
        function (orderId) {
            return this.http.get(this.url + "/" + orderId);
        };
        /**
         * @return {?}
         */
        DaffInMemoryOrderService.prototype.list = /**
         * @return {?}
         */
        function () {
            return this.http.get(this.url + "/");
        };
        DaffInMemoryOrderService.decorators = [
            { type: core.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */
        DaffInMemoryOrderService.ctorParameters = function () { return [
            { type: http.HttpClient }
        ]; };
        /** @nocollapse */ DaffInMemoryOrderService.ngInjectableDef = core.ɵɵdefineInjectable({ factory: function DaffInMemoryOrderService_Factory() { return new DaffInMemoryOrderService(core.ɵɵinject(http.HttpClient)); }, token: DaffInMemoryOrderService, providedIn: "root" });
        return DaffInMemoryOrderService;
    }());
    if (false) {
        /** @type {?} */
        DaffInMemoryOrderService.prototype.url;
        /**
         * @type {?}
         * @private
         */
        DaffInMemoryOrderService.prototype.http;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var DaffOrderInMemoryDriverModule = /** @class */ (function () {
        function DaffOrderInMemoryDriverModule() {
        }
        /**
         * @return {?}
         */
        DaffOrderInMemoryDriverModule.forRoot = /**
         * @return {?}
         */
        function () {
            return {
                ngModule: DaffOrderInMemoryDriverModule,
                providers: [
                    {
                        provide: driver.DaffOrderDriver,
                        useExisting: DaffInMemoryOrderService
                    },
                ]
            };
        };
        DaffOrderInMemoryDriverModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [
                            common.CommonModule
                        ]
                    },] }
        ];
        return DaffOrderInMemoryDriverModule;
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
     * An in-memory service that stubs out the backend services for getting orders.
     */
    var DaffInMemoryBackendOrderService = /** @class */ (function () {
        function DaffInMemoryBackendOrderService(orderFactory) {
            this.orderFactory = orderFactory;
            this.orders = this.orderFactory.createMany(5);
        }
        /**
         * Creates a fake database of orders for the order inmemory backend service.
         *
         * @returns A fake database of an array of orders
         */
        /**
         * Creates a fake database of orders for the order inmemory backend service.
         *
         * @param {?} reqInfo
         * @return {?} A fake database of an array of orders
         */
        DaffInMemoryBackendOrderService.prototype.createDb = /**
         * Creates a fake database of orders for the order inmemory backend service.
         *
         * @param {?} reqInfo
         * @return {?} A fake database of an array of orders
         */
        function (reqInfo) {
            if (reqInfo) {
                /** @type {?} */
                var seedData = reqInfo.utils.getJsonBody(reqInfo.req).orders;
                if (seedData) {
                    this.orders = seedData;
                }
            }
            return {
                orders: this.orders
            };
        };
        /**
         * Responds to GET requests.
         */
        /**
         * Responds to GET requests.
         * @param {?} reqInfo
         * @return {?}
         */
        DaffInMemoryBackendOrderService.prototype.get = /**
         * Responds to GET requests.
         * @param {?} reqInfo
         * @return {?}
         */
        function (reqInfo) {
            var _this = this;
            return reqInfo.utils.createResponse$((/**
             * @return {?}
             */
            function () { return ({
                body: reqInfo.id ? _this.getOrder(reqInfo) : _this.listOrders(reqInfo),
                status: angularInMemoryWebApi.STATUS.OK
            }); }));
        };
        /**
         * @private
         * @param {?} reqInfo
         * @return {?}
         */
        DaffInMemoryBackendOrderService.prototype.getOrder = /**
         * @private
         * @param {?} reqInfo
         * @return {?}
         */
        function (reqInfo) {
            return reqInfo.collection.find((/**
             * @param {?} order
             * @return {?}
             */
            function (order) { return order.id === reqInfo.id; }));
        };
        /**
         * @private
         * @param {?} reqInfo
         * @return {?}
         */
        DaffInMemoryBackendOrderService.prototype.listOrders = /**
         * @private
         * @param {?} reqInfo
         * @return {?}
         */
        function (reqInfo) {
            return reqInfo.collection;
        };
        DaffInMemoryBackendOrderService.decorators = [
            { type: core.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */
        DaffInMemoryBackendOrderService.ctorParameters = function () { return [
            { type: testing.DaffOrderFactory }
        ]; };
        /** @nocollapse */ DaffInMemoryBackendOrderService.ngInjectableDef = core.ɵɵdefineInjectable({ factory: function DaffInMemoryBackendOrderService_Factory() { return new DaffInMemoryBackendOrderService(core.ɵɵinject(testing.DaffOrderFactory)); }, token: DaffInMemoryBackendOrderService, providedIn: "root" });
        return DaffInMemoryBackendOrderService;
    }());
    if (false) {
        /** @type {?} */
        DaffInMemoryBackendOrderService.prototype.orders;
        /**
         * @type {?}
         * @private
         */
        DaffInMemoryBackendOrderService.prototype.orderFactory;
    }

    exports.DaffInMemoryBackendOrderService = DaffInMemoryBackendOrderService;
    exports.DaffInMemoryOrderService = DaffInMemoryOrderService;
    exports.DaffOrderInMemoryDriverModule = DaffOrderInMemoryDriverModule;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=daffodil-order-driver-in-memory.umd.js.map
