import { Injectable, ɵɵdefineInjectable, ɵɵinject, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DaffOrderDriver } from '@daffodil/order/driver';
import { HttpClient } from '@angular/common/http';
import { STATUS } from 'angular-in-memory-web-api';
import { DaffOrderFactory } from '@daffodil/order/testing';

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
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    DaffInMemoryOrderService.ctorParameters = function () { return [
        { type: HttpClient }
    ]; };
    /** @nocollapse */ DaffInMemoryOrderService.ngInjectableDef = ɵɵdefineInjectable({ factory: function DaffInMemoryOrderService_Factory() { return new DaffInMemoryOrderService(ɵɵinject(HttpClient)); }, token: DaffInMemoryOrderService, providedIn: "root" });
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
                    provide: DaffOrderDriver,
                    useExisting: DaffInMemoryOrderService
                },
            ]
        };
    };
    DaffOrderInMemoryDriverModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        CommonModule
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
            status: STATUS.OK
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
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    DaffInMemoryBackendOrderService.ctorParameters = function () { return [
        { type: DaffOrderFactory }
    ]; };
    /** @nocollapse */ DaffInMemoryBackendOrderService.ngInjectableDef = ɵɵdefineInjectable({ factory: function DaffInMemoryBackendOrderService_Factory() { return new DaffInMemoryBackendOrderService(ɵɵinject(DaffOrderFactory)); }, token: DaffInMemoryBackendOrderService, providedIn: "root" });
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

export { DaffInMemoryBackendOrderService, DaffInMemoryOrderService, DaffOrderInMemoryDriverModule };
//# sourceMappingURL=daffodil-order-driver-in-memory.js.map
