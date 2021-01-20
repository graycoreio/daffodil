/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { DaffOrderFactory } from '@daffodil/order/testing';
import * as i0 from "@angular/core";
import * as i1 from "@daffodil/order/testing";
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
        return of(this.orderFactory.create({ id: orderId }));
    };
    /**
     * @return {?}
     */
    DaffTestingOrderService.prototype.list = /**
     * @return {?}
     */
    function () {
        return of(this.orderFactory.createMany(5));
    };
    DaffTestingOrderService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    DaffTestingOrderService.ctorParameters = function () { return [
        { type: DaffOrderFactory }
    ]; };
    /** @nocollapse */ DaffTestingOrderService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function DaffTestingOrderService_Factory() { return new DaffTestingOrderService(i0.ɵɵinject(i1.DaffOrderFactory)); }, token: DaffTestingOrderService, providedIn: "root" });
    return DaffTestingOrderService;
}());
export { DaffTestingOrderService };
if (false) {
    /**
     * @type {?}
     * @private
     */
    DaffTestingOrderService.prototype.orderFactory;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3JkZXIuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkYWZmb2RpbC9vcmRlci9kcml2ZXIvdGVzdGluZy8iLCJzb3VyY2VzIjpbImRyaXZlcnMvb3JkZXIuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQWMsRUFBRSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBUXRDLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHlCQUF5QixDQUFDOzs7QUFFM0Q7SUFLRSxpQ0FDVSxZQUE4QjtRQUE5QixpQkFBWSxHQUFaLFlBQVksQ0FBa0I7SUFDckMsQ0FBQzs7Ozs7SUFFSixxQ0FBRzs7OztJQUFILFVBQUksT0FBd0I7UUFDMUIsT0FBTyxFQUFFLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsRUFBQyxFQUFFLEVBQUUsT0FBTyxFQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3JELENBQUM7Ozs7SUFFRCxzQ0FBSTs7O0lBQUo7UUFDRSxPQUFPLEVBQUUsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQzdDLENBQUM7O2dCQWZGLFVBQVUsU0FBQztvQkFDVixVQUFVLEVBQUUsTUFBTTtpQkFDbkI7Ozs7Z0JBSlEsZ0JBQWdCOzs7a0NBVHpCO0NBMkJDLEFBaEJELElBZ0JDO1NBYlksdUJBQXVCOzs7Ozs7SUFHaEMsK0NBQXNDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgb2YgfSBmcm9tICdyeGpzJztcblxuaW1wb3J0IHtcbiAgRGFmZk9yZGVyXG59IGZyb20gJ0BkYWZmb2RpbC9vcmRlcic7XG5pbXBvcnQge1xuICBEYWZmT3JkZXJTZXJ2aWNlSW50ZXJmYWNlLFxufSBmcm9tICdAZGFmZm9kaWwvb3JkZXIvZHJpdmVyJztcbmltcG9ydCB7IERhZmZPcmRlckZhY3RvcnkgfSBmcm9tICdAZGFmZm9kaWwvb3JkZXIvdGVzdGluZyc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIERhZmZUZXN0aW5nT3JkZXJTZXJ2aWNlIGltcGxlbWVudHMgRGFmZk9yZGVyU2VydmljZUludGVyZmFjZSB7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBvcmRlckZhY3Rvcnk6IERhZmZPcmRlckZhY3RvcnksXG4gICkge31cblxuICBnZXQob3JkZXJJZDogRGFmZk9yZGVyWydpZCddKTogT2JzZXJ2YWJsZTxEYWZmT3JkZXI+IHtcbiAgICByZXR1cm4gb2YodGhpcy5vcmRlckZhY3RvcnkuY3JlYXRlKHtpZDogb3JkZXJJZH0pKTtcbiAgfVxuXG4gIGxpc3QoKTogT2JzZXJ2YWJsZTxEYWZmT3JkZXJbXT4ge1xuICAgIHJldHVybiBvZih0aGlzLm9yZGVyRmFjdG9yeS5jcmVhdGVNYW55KDUpKTtcbiAgfVxufVxuIl19