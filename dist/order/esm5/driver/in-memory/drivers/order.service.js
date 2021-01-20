/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
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
    /** @nocollapse */ DaffInMemoryOrderService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function DaffInMemoryOrderService_Factory() { return new DaffInMemoryOrderService(i0.ɵɵinject(i1.HttpClient)); }, token: DaffInMemoryOrderService, providedIn: "root" });
    return DaffInMemoryOrderService;
}());
export { DaffInMemoryOrderService };
if (false) {
    /** @type {?} */
    DaffInMemoryOrderService.prototype.url;
    /**
     * @type {?}
     * @private
     */
    DaffInMemoryOrderService.prototype.http;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3JkZXIuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkYWZmb2RpbC9vcmRlci9kcml2ZXIvaW4tbWVtb3J5LyIsInNvdXJjZXMiOlsiZHJpdmVycy9vcmRlci5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQzs7O0FBVWxEO0lBTUUsa0NBQW9CLElBQWdCO1FBQWhCLFNBQUksR0FBSixJQUFJLENBQVk7UUFGcEMsUUFBRyxHQUFHLGFBQWEsQ0FBQztJQUVtQixDQUFDOzs7OztJQUV4QyxzQ0FBRzs7OztJQUFILFVBQUksT0FBd0I7UUFDMUIsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBZSxJQUFJLENBQUMsR0FBRyxTQUFJLE9BQVMsQ0FBQyxDQUFDO0lBQzVELENBQUM7Ozs7SUFFRCx1Q0FBSTs7O0lBQUo7UUFDRSxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFpQixJQUFJLENBQUMsR0FBRyxNQUFHLENBQUMsQ0FBQztJQUNwRCxDQUFDOztnQkFkRixVQUFVLFNBQUM7b0JBQ1YsVUFBVSxFQUFFLE1BQU07aUJBQ25COzs7O2dCQVpRLFVBQVU7OzttQ0FEbkI7Q0EwQkMsQUFmRCxJQWVDO1NBWlksd0JBQXdCOzs7SUFDbkMsdUNBQW9COzs7OztJQUVSLHdDQUF3QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEh0dHBDbGllbnQgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5cbmltcG9ydCB7XG4gIERhZmZPcmRlcixcbn0gZnJvbSAnQGRhZmZvZGlsL29yZGVyJztcbmltcG9ydCB7XG4gIERhZmZPcmRlclNlcnZpY2VJbnRlcmZhY2UsXG59IGZyb20gJ0BkYWZmb2RpbC9vcmRlci9kcml2ZXInO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBEYWZmSW5NZW1vcnlPcmRlclNlcnZpY2UgaW1wbGVtZW50cyBEYWZmT3JkZXJTZXJ2aWNlSW50ZXJmYWNlPERhZmZPcmRlcj4ge1xuICB1cmwgPSAnL2FwaS9vcmRlcnMnO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cDogSHR0cENsaWVudCkge31cblxuICBnZXQob3JkZXJJZDogRGFmZk9yZGVyWydpZCddKTogT2JzZXJ2YWJsZTxEYWZmT3JkZXI+IHtcbiAgICByZXR1cm4gdGhpcy5odHRwLmdldDxEYWZmT3JkZXI+KGAke3RoaXMudXJsfS8ke29yZGVySWR9YCk7XG4gIH1cblxuICBsaXN0KCk6IE9ic2VydmFibGU8RGFmZk9yZGVyW10+IHtcbiAgICByZXR1cm4gdGhpcy5odHRwLmdldDxEYWZmT3JkZXJbXT4oYCR7dGhpcy51cmx9L2ApO1xuICB9XG59XG4iXX0=