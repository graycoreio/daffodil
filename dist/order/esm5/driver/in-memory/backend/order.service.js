/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { STATUS } from 'angular-in-memory-web-api';
import { DaffOrderFactory, } from '@daffodil/order/testing';
import * as i0 from "@angular/core";
import * as i1 from "@daffodil/order/testing";
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
    /** @nocollapse */ DaffInMemoryBackendOrderService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function DaffInMemoryBackendOrderService_Factory() { return new DaffInMemoryBackendOrderService(i0.ɵɵinject(i1.DaffOrderFactory)); }, token: DaffInMemoryBackendOrderService, providedIn: "root" });
    return DaffInMemoryBackendOrderService;
}());
export { DaffInMemoryBackendOrderService };
if (false) {
    /** @type {?} */
    DaffInMemoryBackendOrderService.prototype.orders;
    /**
     * @type {?}
     * @private
     */
    DaffInMemoryBackendOrderService.prototype.orderFactory;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3JkZXIuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkYWZmb2RpbC9vcmRlci9kcml2ZXIvaW4tbWVtb3J5LyIsInNvdXJjZXMiOlsiYmFja2VuZC9vcmRlci5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFHTCxNQUFNLEVBQ1AsTUFBTSwyQkFBMkIsQ0FBQztBQUluQyxPQUFPLEVBQ0wsZ0JBQWdCLEdBQ2pCLE1BQU0seUJBQXlCLENBQUM7Ozs7OztBQUtqQztJQU1FLHlDQUNVLFlBQThCO1FBQTlCLGlCQUFZLEdBQVosWUFBWSxDQUFrQjtRQUV0QyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ2hELENBQUM7SUFFRDs7OztPQUlHOzs7Ozs7O0lBQ0gsa0RBQVE7Ozs7OztJQUFSLFVBQVMsT0FBb0I7UUFDM0IsSUFBSSxPQUFPLEVBQUU7O2dCQUNMLFFBQVEsR0FBRyxPQUFPLENBQUMsS0FBSyxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsTUFBTTtZQUM5RCxJQUFJLFFBQVEsRUFBRTtnQkFDWixJQUFJLENBQUMsTUFBTSxHQUFHLFFBQVEsQ0FBQzthQUN4QjtTQUNGO1FBRUQsT0FBTztZQUNMLE1BQU0sRUFBRSxJQUFJLENBQUMsTUFBTTtTQUNwQixDQUFDO0lBQ0osQ0FBQztJQUVEOztPQUVHOzs7Ozs7SUFDSCw2Q0FBRzs7Ozs7SUFBSCxVQUFJLE9BQW9CO1FBQXhCLGlCQUtDO1FBSkMsT0FBTyxPQUFPLENBQUMsS0FBSyxDQUFDLGVBQWU7OztRQUFDLGNBQU0sT0FBQSxDQUFDO1lBQzFDLElBQUksRUFBRSxPQUFPLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxLQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFJLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQztZQUNwRSxNQUFNLEVBQUUsTUFBTSxDQUFDLEVBQUU7U0FDbEIsQ0FBQyxFQUh5QyxDQUd6QyxFQUFDLENBQUE7SUFDTCxDQUFDOzs7Ozs7SUFFTyxrREFBUTs7Ozs7SUFBaEIsVUFBaUIsT0FBb0I7UUFDbkMsT0FBTyxPQUFPLENBQUMsVUFBVSxDQUFDLElBQUk7Ozs7UUFBQyxVQUFBLEtBQUssSUFBSSxPQUFBLEtBQUssQ0FBQyxFQUFFLEtBQUssT0FBTyxDQUFDLEVBQUUsRUFBdkIsQ0FBdUIsRUFBQyxDQUFBO0lBQ2xFLENBQUM7Ozs7OztJQUVPLG9EQUFVOzs7OztJQUFsQixVQUFtQixPQUFvQjtRQUNyQyxPQUFPLE9BQU8sQ0FBQyxVQUFVLENBQUE7SUFDM0IsQ0FBQzs7Z0JBOUNGLFVBQVUsU0FBQztvQkFDVixVQUFVLEVBQUUsTUFBTTtpQkFDbkI7Ozs7Z0JBUkMsZ0JBQWdCOzs7MENBVmxCO0NBK0RDLEFBL0NELElBK0NDO1NBNUNZLCtCQUErQjs7O0lBQzFDLGlEQUFvQjs7Ozs7SUFHbEIsdURBQXNDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtcbiAgSW5NZW1vcnlEYlNlcnZpY2UsXG4gIFJlcXVlc3RJbmZvLFxuICBTVEFUVVNcbn0gZnJvbSAnYW5ndWxhci1pbi1tZW1vcnktd2ViLWFwaSc7XG5cbmltcG9ydCB7IERhZmZJbk1lbW9yeURhdGFTZXJ2aWNlSW50ZXJmYWNlIH0gZnJvbSAnQGRhZmZvZGlsL2NvcmUvdGVzdGluZyc7XG5pbXBvcnQgeyBEYWZmT3JkZXIgfSBmcm9tICdAZGFmZm9kaWwvb3JkZXInO1xuaW1wb3J0IHtcbiAgRGFmZk9yZGVyRmFjdG9yeSxcbn0gZnJvbSAnQGRhZmZvZGlsL29yZGVyL3Rlc3RpbmcnO1xuXG4vKipcbiAqIEFuIGluLW1lbW9yeSBzZXJ2aWNlIHRoYXQgc3R1YnMgb3V0IHRoZSBiYWNrZW5kIHNlcnZpY2VzIGZvciBnZXR0aW5nIG9yZGVycy5cbiAqL1xuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgRGFmZkluTWVtb3J5QmFja2VuZE9yZGVyU2VydmljZSBpbXBsZW1lbnRzIEluTWVtb3J5RGJTZXJ2aWNlLCBEYWZmSW5NZW1vcnlEYXRhU2VydmljZUludGVyZmFjZSB7XG4gIG9yZGVyczogRGFmZk9yZGVyW107XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBvcmRlckZhY3Rvcnk6IERhZmZPcmRlckZhY3RvcnksXG4gICkge1xuICAgIHRoaXMub3JkZXJzID0gdGhpcy5vcmRlckZhY3RvcnkuY3JlYXRlTWFueSg1KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGVzIGEgZmFrZSBkYXRhYmFzZSBvZiBvcmRlcnMgZm9yIHRoZSBvcmRlciBpbm1lbW9yeSBiYWNrZW5kIHNlcnZpY2UuXG4gICAqXG4gICAqIEByZXR1cm5zIEEgZmFrZSBkYXRhYmFzZSBvZiBhbiBhcnJheSBvZiBvcmRlcnNcbiAgICovXG4gIGNyZWF0ZURiKHJlcUluZm86IFJlcXVlc3RJbmZvKTogYW55IHtcbiAgICBpZiAocmVxSW5mbykge1xuICAgICAgY29uc3Qgc2VlZERhdGEgPSByZXFJbmZvLnV0aWxzLmdldEpzb25Cb2R5KHJlcUluZm8ucmVxKS5vcmRlcnM7XG4gICAgICBpZiAoc2VlZERhdGEpIHtcbiAgICAgICAgdGhpcy5vcmRlcnMgPSBzZWVkRGF0YTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgb3JkZXJzOiB0aGlzLm9yZGVyc1xuICAgIH07XG4gIH1cblxuICAvKipcbiAgICogUmVzcG9uZHMgdG8gR0VUIHJlcXVlc3RzLlxuICAgKi9cbiAgZ2V0KHJlcUluZm86IFJlcXVlc3RJbmZvKTogYW55IHtcbiAgICByZXR1cm4gcmVxSW5mby51dGlscy5jcmVhdGVSZXNwb25zZSQoKCkgPT4gKHtcbiAgICAgIGJvZHk6IHJlcUluZm8uaWQgPyB0aGlzLmdldE9yZGVyKHJlcUluZm8pIDogdGhpcy5saXN0T3JkZXJzKHJlcUluZm8pLFxuICAgICAgc3RhdHVzOiBTVEFUVVMuT0tcbiAgICB9KSlcbiAgfVxuXG4gIHByaXZhdGUgZ2V0T3JkZXIocmVxSW5mbzogUmVxdWVzdEluZm8pIHtcbiAgICByZXR1cm4gcmVxSW5mby5jb2xsZWN0aW9uLmZpbmQob3JkZXIgPT4gb3JkZXIuaWQgPT09IHJlcUluZm8uaWQpXG4gIH1cblxuICBwcml2YXRlIGxpc3RPcmRlcnMocmVxSW5mbzogUmVxdWVzdEluZm8pIHtcbiAgICByZXR1cm4gcmVxSW5mby5jb2xsZWN0aW9uXG4gIH1cbn1cbiJdfQ==