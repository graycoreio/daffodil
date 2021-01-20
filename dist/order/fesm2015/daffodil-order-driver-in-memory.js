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
class DaffInMemoryOrderService {
    /**
     * @param {?} http
     */
    constructor(http) {
        this.http = http;
        this.url = '/api/orders';
    }
    /**
     * @param {?} orderId
     * @return {?}
     */
    get(orderId) {
        return this.http.get(`${this.url}/${orderId}`);
    }
    /**
     * @return {?}
     */
    list() {
        return this.http.get(`${this.url}/`);
    }
}
DaffInMemoryOrderService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
DaffInMemoryOrderService.ctorParameters = () => [
    { type: HttpClient }
];
/** @nocollapse */ DaffInMemoryOrderService.ngInjectableDef = ɵɵdefineInjectable({ factory: function DaffInMemoryOrderService_Factory() { return new DaffInMemoryOrderService(ɵɵinject(HttpClient)); }, token: DaffInMemoryOrderService, providedIn: "root" });
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
class DaffOrderInMemoryDriverModule {
    /**
     * @return {?}
     */
    static forRoot() {
        return {
            ngModule: DaffOrderInMemoryDriverModule,
            providers: [
                {
                    provide: DaffOrderDriver,
                    useExisting: DaffInMemoryOrderService
                },
            ]
        };
    }
}
DaffOrderInMemoryDriverModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule
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
 * An in-memory service that stubs out the backend services for getting orders.
 */
class DaffInMemoryBackendOrderService {
    /**
     * @param {?} orderFactory
     */
    constructor(orderFactory) {
        this.orderFactory = orderFactory;
        this.orders = this.orderFactory.createMany(5);
    }
    /**
     * Creates a fake database of orders for the order inmemory backend service.
     *
     * @param {?} reqInfo
     * @return {?} A fake database of an array of orders
     */
    createDb(reqInfo) {
        if (reqInfo) {
            /** @type {?} */
            const seedData = reqInfo.utils.getJsonBody(reqInfo.req).orders;
            if (seedData) {
                this.orders = seedData;
            }
        }
        return {
            orders: this.orders
        };
    }
    /**
     * Responds to GET requests.
     * @param {?} reqInfo
     * @return {?}
     */
    get(reqInfo) {
        return reqInfo.utils.createResponse$((/**
         * @return {?}
         */
        () => ({
            body: reqInfo.id ? this.getOrder(reqInfo) : this.listOrders(reqInfo),
            status: STATUS.OK
        })));
    }
    /**
     * @private
     * @param {?} reqInfo
     * @return {?}
     */
    getOrder(reqInfo) {
        return reqInfo.collection.find((/**
         * @param {?} order
         * @return {?}
         */
        order => order.id === reqInfo.id));
    }
    /**
     * @private
     * @param {?} reqInfo
     * @return {?}
     */
    listOrders(reqInfo) {
        return reqInfo.collection;
    }
}
DaffInMemoryBackendOrderService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
DaffInMemoryBackendOrderService.ctorParameters = () => [
    { type: DaffOrderFactory }
];
/** @nocollapse */ DaffInMemoryBackendOrderService.ngInjectableDef = ɵɵdefineInjectable({ factory: function DaffInMemoryBackendOrderService_Factory() { return new DaffInMemoryBackendOrderService(ɵɵinject(DaffOrderFactory)); }, token: DaffInMemoryBackendOrderService, providedIn: "root" });
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
