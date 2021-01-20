/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
var DaffInMemoryCartShippingMethodsService = /** @class */ (function () {
    function DaffInMemoryCartShippingMethodsService(http) {
        this.http = http;
        this.url = '/api/cart-shipping-methods';
    }
    /**
     * @param {?} cartId
     * @return {?}
     */
    DaffInMemoryCartShippingMethodsService.prototype.list = /**
     * @param {?} cartId
     * @return {?}
     */
    function (cartId) {
        return this.http.get(this.url + "/" + cartId);
    };
    DaffInMemoryCartShippingMethodsService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    DaffInMemoryCartShippingMethodsService.ctorParameters = function () { return [
        { type: HttpClient }
    ]; };
    /** @nocollapse */ DaffInMemoryCartShippingMethodsService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function DaffInMemoryCartShippingMethodsService_Factory() { return new DaffInMemoryCartShippingMethodsService(i0.ɵɵinject(i1.HttpClient)); }, token: DaffInMemoryCartShippingMethodsService, providedIn: "root" });
    return DaffInMemoryCartShippingMethodsService;
}());
export { DaffInMemoryCartShippingMethodsService };
if (false) {
    /** @type {?} */
    DaffInMemoryCartShippingMethodsService.prototype.url;
    /**
     * @type {?}
     * @private
     */
    DaffInMemoryCartShippingMethodsService.prototype.http;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FydC1zaGlwcGluZy1tZXRob2RzLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGFmZm9kaWwvY2FydC9kcml2ZXIvaW4tbWVtb3J5LyIsInNvdXJjZXMiOlsiZHJpdmVycy9jYXJ0LXNoaXBwaW5nLW1ldGhvZHMvY2FydC1zaGlwcGluZy1tZXRob2RzLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLHNCQUFzQixDQUFDOzs7QUFRbEQ7SUFNRSxnREFBb0IsSUFBZ0I7UUFBaEIsU0FBSSxHQUFKLElBQUksQ0FBWTtRQUZwQyxRQUFHLEdBQUcsNEJBQTRCLENBQUM7SUFFSSxDQUFDOzs7OztJQUV4QyxxREFBSTs7OztJQUFKLFVBQUssTUFBc0I7UUFDekIsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBNEIsSUFBSSxDQUFDLEdBQUcsU0FBSSxNQUFRLENBQUMsQ0FBQTtJQUN2RSxDQUFDOztnQkFWRixVQUFVLFNBQUM7b0JBQ1YsVUFBVSxFQUFFLE1BQU07aUJBQ25COzs7O2dCQVZRLFVBQVU7OztpREFEbkI7Q0FvQkMsQUFYRCxJQVdDO1NBUlksc0NBQXNDOzs7SUFDakQscURBQW1DOzs7OztJQUV2QixzREFBd0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBIdHRwQ2xpZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuXG5pbXBvcnQgeyBEYWZmQ2FydFNoaXBwaW5nUmF0ZSwgRGFmZkNhcnQgfSBmcm9tICdAZGFmZm9kaWwvY2FydCc7XG5pbXBvcnQge1xuICBEYWZmQ2FydFNoaXBwaW5nTWV0aG9kc1NlcnZpY2VJbnRlcmZhY2UsXG59IGZyb20gJ0BkYWZmb2RpbC9jYXJ0L2RyaXZlcic7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIERhZmZJbk1lbW9yeUNhcnRTaGlwcGluZ01ldGhvZHNTZXJ2aWNlIGltcGxlbWVudHMgRGFmZkNhcnRTaGlwcGluZ01ldGhvZHNTZXJ2aWNlSW50ZXJmYWNlPERhZmZDYXJ0U2hpcHBpbmdSYXRlPiB7XG4gIHVybCA9ICcvYXBpL2NhcnQtc2hpcHBpbmctbWV0aG9kcyc7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBodHRwOiBIdHRwQ2xpZW50KSB7fVxuXG4gIGxpc3QoY2FydElkOiBEYWZmQ2FydFsnaWQnXSk6IE9ic2VydmFibGU8RGFmZkNhcnRTaGlwcGluZ1JhdGVbXT4ge1xuICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0PERhZmZDYXJ0U2hpcHBpbmdSYXRlW10+KGAke3RoaXMudXJsfS8ke2NhcnRJZH1gKVxuICB9XG59XG4iXX0=