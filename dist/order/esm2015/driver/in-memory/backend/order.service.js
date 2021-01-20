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
export class DaffInMemoryBackendOrderService {
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
/** @nocollapse */ DaffInMemoryBackendOrderService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function DaffInMemoryBackendOrderService_Factory() { return new DaffInMemoryBackendOrderService(i0.ɵɵinject(i1.DaffOrderFactory)); }, token: DaffInMemoryBackendOrderService, providedIn: "root" });
if (false) {
    /** @type {?} */
    DaffInMemoryBackendOrderService.prototype.orders;
    /**
     * @type {?}
     * @private
     */
    DaffInMemoryBackendOrderService.prototype.orderFactory;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3JkZXIuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkYWZmb2RpbC9vcmRlci9kcml2ZXIvaW4tbWVtb3J5LyIsInNvdXJjZXMiOlsiYmFja2VuZC9vcmRlci5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFHTCxNQUFNLEVBQ1AsTUFBTSwyQkFBMkIsQ0FBQztBQUluQyxPQUFPLEVBQ0wsZ0JBQWdCLEdBQ2pCLE1BQU0seUJBQXlCLENBQUM7Ozs7OztBQVFqQyxNQUFNLE9BQU8sK0JBQStCOzs7O0lBRzFDLFlBQ1UsWUFBOEI7UUFBOUIsaUJBQVksR0FBWixZQUFZLENBQWtCO1FBRXRDLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDaEQsQ0FBQzs7Ozs7OztJQU9ELFFBQVEsQ0FBQyxPQUFvQjtRQUMzQixJQUFJLE9BQU8sRUFBRTs7a0JBQ0wsUUFBUSxHQUFHLE9BQU8sQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxNQUFNO1lBQzlELElBQUksUUFBUSxFQUFFO2dCQUNaLElBQUksQ0FBQyxNQUFNLEdBQUcsUUFBUSxDQUFDO2FBQ3hCO1NBQ0Y7UUFFRCxPQUFPO1lBQ0wsTUFBTSxFQUFFLElBQUksQ0FBQyxNQUFNO1NBQ3BCLENBQUM7SUFDSixDQUFDOzs7Ozs7SUFLRCxHQUFHLENBQUMsT0FBb0I7UUFDdEIsT0FBTyxPQUFPLENBQUMsS0FBSyxDQUFDLGVBQWU7OztRQUFDLEdBQUcsRUFBRSxDQUFDLENBQUM7WUFDMUMsSUFBSSxFQUFFLE9BQU8sQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDO1lBQ3BFLE1BQU0sRUFBRSxNQUFNLENBQUMsRUFBRTtTQUNsQixDQUFDLEVBQUMsQ0FBQTtJQUNMLENBQUM7Ozs7OztJQUVPLFFBQVEsQ0FBQyxPQUFvQjtRQUNuQyxPQUFPLE9BQU8sQ0FBQyxVQUFVLENBQUMsSUFBSTs7OztRQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLEVBQUUsS0FBSyxPQUFPLENBQUMsRUFBRSxFQUFDLENBQUE7SUFDbEUsQ0FBQzs7Ozs7O0lBRU8sVUFBVSxDQUFDLE9BQW9CO1FBQ3JDLE9BQU8sT0FBTyxDQUFDLFVBQVUsQ0FBQTtJQUMzQixDQUFDOzs7WUE5Q0YsVUFBVSxTQUFDO2dCQUNWLFVBQVUsRUFBRSxNQUFNO2FBQ25COzs7O1lBUkMsZ0JBQWdCOzs7OztJQVVoQixpREFBb0I7Ozs7O0lBR2xCLHVEQUFzQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7XG4gIEluTWVtb3J5RGJTZXJ2aWNlLFxuICBSZXF1ZXN0SW5mbyxcbiAgU1RBVFVTXG59IGZyb20gJ2FuZ3VsYXItaW4tbWVtb3J5LXdlYi1hcGknO1xuXG5pbXBvcnQgeyBEYWZmSW5NZW1vcnlEYXRhU2VydmljZUludGVyZmFjZSB9IGZyb20gJ0BkYWZmb2RpbC9jb3JlL3Rlc3RpbmcnO1xuaW1wb3J0IHsgRGFmZk9yZGVyIH0gZnJvbSAnQGRhZmZvZGlsL29yZGVyJztcbmltcG9ydCB7XG4gIERhZmZPcmRlckZhY3RvcnksXG59IGZyb20gJ0BkYWZmb2RpbC9vcmRlci90ZXN0aW5nJztcblxuLyoqXG4gKiBBbiBpbi1tZW1vcnkgc2VydmljZSB0aGF0IHN0dWJzIG91dCB0aGUgYmFja2VuZCBzZXJ2aWNlcyBmb3IgZ2V0dGluZyBvcmRlcnMuXG4gKi9cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIERhZmZJbk1lbW9yeUJhY2tlbmRPcmRlclNlcnZpY2UgaW1wbGVtZW50cyBJbk1lbW9yeURiU2VydmljZSwgRGFmZkluTWVtb3J5RGF0YVNlcnZpY2VJbnRlcmZhY2Uge1xuICBvcmRlcnM6IERhZmZPcmRlcltdO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgb3JkZXJGYWN0b3J5OiBEYWZmT3JkZXJGYWN0b3J5LFxuICApIHtcbiAgICB0aGlzLm9yZGVycyA9IHRoaXMub3JkZXJGYWN0b3J5LmNyZWF0ZU1hbnkoNSk7XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlcyBhIGZha2UgZGF0YWJhc2Ugb2Ygb3JkZXJzIGZvciB0aGUgb3JkZXIgaW5tZW1vcnkgYmFja2VuZCBzZXJ2aWNlLlxuICAgKlxuICAgKiBAcmV0dXJucyBBIGZha2UgZGF0YWJhc2Ugb2YgYW4gYXJyYXkgb2Ygb3JkZXJzXG4gICAqL1xuICBjcmVhdGVEYihyZXFJbmZvOiBSZXF1ZXN0SW5mbyk6IGFueSB7XG4gICAgaWYgKHJlcUluZm8pIHtcbiAgICAgIGNvbnN0IHNlZWREYXRhID0gcmVxSW5mby51dGlscy5nZXRKc29uQm9keShyZXFJbmZvLnJlcSkub3JkZXJzO1xuICAgICAgaWYgKHNlZWREYXRhKSB7XG4gICAgICAgIHRoaXMub3JkZXJzID0gc2VlZERhdGE7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgIG9yZGVyczogdGhpcy5vcmRlcnNcbiAgICB9O1xuICB9XG5cbiAgLyoqXG4gICAqIFJlc3BvbmRzIHRvIEdFVCByZXF1ZXN0cy5cbiAgICovXG4gIGdldChyZXFJbmZvOiBSZXF1ZXN0SW5mbyk6IGFueSB7XG4gICAgcmV0dXJuIHJlcUluZm8udXRpbHMuY3JlYXRlUmVzcG9uc2UkKCgpID0+ICh7XG4gICAgICBib2R5OiByZXFJbmZvLmlkID8gdGhpcy5nZXRPcmRlcihyZXFJbmZvKSA6IHRoaXMubGlzdE9yZGVycyhyZXFJbmZvKSxcbiAgICAgIHN0YXR1czogU1RBVFVTLk9LXG4gICAgfSkpXG4gIH1cblxuICBwcml2YXRlIGdldE9yZGVyKHJlcUluZm86IFJlcXVlc3RJbmZvKSB7XG4gICAgcmV0dXJuIHJlcUluZm8uY29sbGVjdGlvbi5maW5kKG9yZGVyID0+IG9yZGVyLmlkID09PSByZXFJbmZvLmlkKVxuICB9XG5cbiAgcHJpdmF0ZSBsaXN0T3JkZXJzKHJlcUluZm86IFJlcXVlc3RJbmZvKSB7XG4gICAgcmV0dXJuIHJlcUluZm8uY29sbGVjdGlvblxuICB9XG59XG4iXX0=