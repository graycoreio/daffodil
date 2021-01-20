/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { DaffOrderFactory } from '../../order/factories/order.factory';
import { DaffOrderItemFactory } from '../../order/factories/order-item.factory';
import * as i0 from "@angular/core";
import * as i1 from "../../order/factories/order.factory";
import * as i2 from "../../order/factories/order-item.factory";
export class DaffTestingCheckoutService {
    /**
     * @param {?} orderFactory
     * @param {?} orderItemFactory
     */
    constructor(orderFactory, orderItemFactory) {
        this.orderFactory = orderFactory;
        this.orderItemFactory = orderItemFactory;
    }
    /**
     * @param {?} cartId
     * @return {?}
     */
    placeOrder(cartId) {
        return of(this.orderFactory.create({ items: [this.orderItemFactory.createMany(2)] }));
    }
}
DaffTestingCheckoutService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
DaffTestingCheckoutService.ctorParameters = () => [
    { type: DaffOrderFactory },
    { type: DaffOrderItemFactory }
];
/** @nocollapse */ DaffTestingCheckoutService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function DaffTestingCheckoutService_Factory() { return new DaffTestingCheckoutService(i0.ɵɵinject(i1.DaffOrderFactory), i0.ɵɵinject(i2.DaffOrderItemFactory)); }, token: DaffTestingCheckoutService, providedIn: "root" });
if (false) {
    /**
     * @type {?}
     * @private
     */
    DaffTestingCheckoutService.prototype.orderFactory;
    /**
     * @type {?}
     * @private
     */
    DaffTestingCheckoutService.prototype.orderItemFactory;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hlY2tvdXQuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkYWZmb2RpbC9jaGVja291dC90ZXN0aW5nLyIsInNvdXJjZXMiOlsiZHJpdmVycy90ZXN0aW5nL2NoZWNrb3V0LnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFjLEVBQUUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUl0QyxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxxQ0FBcUMsQ0FBQztBQUN2RSxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSwwQ0FBMEMsQ0FBQzs7OztBQUtoRixNQUFNLE9BQU8sMEJBQTBCOzs7OztJQUNyQyxZQUNVLFlBQThCLEVBQzlCLGdCQUFzQztRQUR0QyxpQkFBWSxHQUFaLFlBQVksQ0FBa0I7UUFDOUIscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFzQjtJQUM3QyxDQUFDOzs7OztJQUVKLFVBQVUsQ0FBQyxNQUFjO1FBQ3ZCLE9BQU8sRUFBRSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLEVBQUUsS0FBSyxFQUFFLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQ3hGLENBQUM7OztZQVhGLFVBQVUsU0FBQztnQkFDVixVQUFVLEVBQUUsTUFBTTthQUNuQjs7OztZQUxRLGdCQUFnQjtZQUNoQixvQkFBb0I7Ozs7Ozs7O0lBT3pCLGtEQUFzQzs7Ozs7SUFDdEMsc0RBQThDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgb2YgfSBmcm9tICdyeGpzJztcblxuaW1wb3J0IHsgRGFmZk9yZGVyLCBEYWZmQ2hlY2tvdXRTZXJ2aWNlSW50ZXJmYWNlIH0gZnJvbSAnQGRhZmZvZGlsL2NoZWNrb3V0JztcblxuaW1wb3J0IHsgRGFmZk9yZGVyRmFjdG9yeSB9IGZyb20gJy4uLy4uL29yZGVyL2ZhY3Rvcmllcy9vcmRlci5mYWN0b3J5JztcbmltcG9ydCB7IERhZmZPcmRlckl0ZW1GYWN0b3J5IH0gZnJvbSAnLi4vLi4vb3JkZXIvZmFjdG9yaWVzL29yZGVyLWl0ZW0uZmFjdG9yeSc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIERhZmZUZXN0aW5nQ2hlY2tvdXRTZXJ2aWNlIGltcGxlbWVudHMgRGFmZkNoZWNrb3V0U2VydmljZUludGVyZmFjZSB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgb3JkZXJGYWN0b3J5OiBEYWZmT3JkZXJGYWN0b3J5LFxuICAgIHByaXZhdGUgb3JkZXJJdGVtRmFjdG9yeTogRGFmZk9yZGVySXRlbUZhY3RvcnlcbiAgKSB7fVxuXG4gIHBsYWNlT3JkZXIoY2FydElkOiBzdHJpbmcpOiBPYnNlcnZhYmxlPERhZmZPcmRlcj4ge1xuICAgIHJldHVybiBvZih0aGlzLm9yZGVyRmFjdG9yeS5jcmVhdGUoeyBpdGVtczogW3RoaXMub3JkZXJJdGVtRmFjdG9yeS5jcmVhdGVNYW55KDIpXSB9KSk7XG4gIH1cbn1cbiJdfQ==