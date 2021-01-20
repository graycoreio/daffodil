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
var DaffTestingCheckoutService = /** @class */ (function () {
    function DaffTestingCheckoutService(orderFactory, orderItemFactory) {
        this.orderFactory = orderFactory;
        this.orderItemFactory = orderItemFactory;
    }
    /**
     * @param {?} cartId
     * @return {?}
     */
    DaffTestingCheckoutService.prototype.placeOrder = /**
     * @param {?} cartId
     * @return {?}
     */
    function (cartId) {
        return of(this.orderFactory.create({ items: [this.orderItemFactory.createMany(2)] }));
    };
    DaffTestingCheckoutService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    DaffTestingCheckoutService.ctorParameters = function () { return [
        { type: DaffOrderFactory },
        { type: DaffOrderItemFactory }
    ]; };
    /** @nocollapse */ DaffTestingCheckoutService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function DaffTestingCheckoutService_Factory() { return new DaffTestingCheckoutService(i0.ɵɵinject(i1.DaffOrderFactory), i0.ɵɵinject(i2.DaffOrderItemFactory)); }, token: DaffTestingCheckoutService, providedIn: "root" });
    return DaffTestingCheckoutService;
}());
export { DaffTestingCheckoutService };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hlY2tvdXQuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkYWZmb2RpbC9jaGVja291dC90ZXN0aW5nLyIsInNvdXJjZXMiOlsiZHJpdmVycy90ZXN0aW5nL2NoZWNrb3V0LnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFjLEVBQUUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUl0QyxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxxQ0FBcUMsQ0FBQztBQUN2RSxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSwwQ0FBMEMsQ0FBQzs7OztBQUVoRjtJQUlFLG9DQUNVLFlBQThCLEVBQzlCLGdCQUFzQztRQUR0QyxpQkFBWSxHQUFaLFlBQVksQ0FBa0I7UUFDOUIscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFzQjtJQUM3QyxDQUFDOzs7OztJQUVKLCtDQUFVOzs7O0lBQVYsVUFBVyxNQUFjO1FBQ3ZCLE9BQU8sRUFBRSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLEVBQUUsS0FBSyxFQUFFLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQ3hGLENBQUM7O2dCQVhGLFVBQVUsU0FBQztvQkFDVixVQUFVLEVBQUUsTUFBTTtpQkFDbkI7Ozs7Z0JBTFEsZ0JBQWdCO2dCQUNoQixvQkFBb0I7OztxQ0FON0I7Q0FvQkMsQUFaRCxJQVlDO1NBVFksMEJBQTBCOzs7Ozs7SUFFbkMsa0RBQXNDOzs7OztJQUN0QyxzREFBOEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBvZiB9IGZyb20gJ3J4anMnO1xuXG5pbXBvcnQgeyBEYWZmT3JkZXIsIERhZmZDaGVja291dFNlcnZpY2VJbnRlcmZhY2UgfSBmcm9tICdAZGFmZm9kaWwvY2hlY2tvdXQnO1xuXG5pbXBvcnQgeyBEYWZmT3JkZXJGYWN0b3J5IH0gZnJvbSAnLi4vLi4vb3JkZXIvZmFjdG9yaWVzL29yZGVyLmZhY3RvcnknO1xuaW1wb3J0IHsgRGFmZk9yZGVySXRlbUZhY3RvcnkgfSBmcm9tICcuLi8uLi9vcmRlci9mYWN0b3JpZXMvb3JkZXItaXRlbS5mYWN0b3J5JztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgRGFmZlRlc3RpbmdDaGVja291dFNlcnZpY2UgaW1wbGVtZW50cyBEYWZmQ2hlY2tvdXRTZXJ2aWNlSW50ZXJmYWNlIHtcbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBvcmRlckZhY3Rvcnk6IERhZmZPcmRlckZhY3RvcnksXG4gICAgcHJpdmF0ZSBvcmRlckl0ZW1GYWN0b3J5OiBEYWZmT3JkZXJJdGVtRmFjdG9yeVxuICApIHt9XG5cbiAgcGxhY2VPcmRlcihjYXJ0SWQ6IHN0cmluZyk6IE9ic2VydmFibGU8RGFmZk9yZGVyPiB7XG4gICAgcmV0dXJuIG9mKHRoaXMub3JkZXJGYWN0b3J5LmNyZWF0ZSh7IGl0ZW1zOiBbdGhpcy5vcmRlckl0ZW1GYWN0b3J5LmNyZWF0ZU1hbnkoMildIH0pKTtcbiAgfVxufVxuIl19