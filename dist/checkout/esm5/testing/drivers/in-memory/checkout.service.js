/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
var DaffInMemoryCheckoutService = /** @class */ (function () {
    function DaffInMemoryCheckoutService(http) {
        this.http = http;
        this.url = '/api/checkout';
    }
    /**
     * @param {?} cartId
     * @return {?}
     */
    DaffInMemoryCheckoutService.prototype.placeOrder = /**
     * @param {?} cartId
     * @return {?}
     */
    function (cartId) {
        return this.http.post(this.url + '/placeOrder', { cartId: cartId });
    };
    DaffInMemoryCheckoutService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    DaffInMemoryCheckoutService.ctorParameters = function () { return [
        { type: HttpClient }
    ]; };
    /** @nocollapse */ DaffInMemoryCheckoutService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function DaffInMemoryCheckoutService_Factory() { return new DaffInMemoryCheckoutService(i0.ɵɵinject(i1.HttpClient)); }, token: DaffInMemoryCheckoutService, providedIn: "root" });
    return DaffInMemoryCheckoutService;
}());
export { DaffInMemoryCheckoutService };
if (false) {
    /** @type {?} */
    DaffInMemoryCheckoutService.prototype.url;
    /**
     * @type {?}
     * @private
     */
    DaffInMemoryCheckoutService.prototype.http;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hlY2tvdXQuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkYWZmb2RpbC9jaGVja291dC90ZXN0aW5nLyIsInNvdXJjZXMiOlsiZHJpdmVycy9pbi1tZW1vcnkvY2hlY2tvdXQuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sc0JBQXNCLENBQUM7OztBQUtsRDtJQU1FLHFDQUFvQixJQUFnQjtRQUFoQixTQUFJLEdBQUosSUFBSSxDQUFZO1FBRnBDLFFBQUcsR0FBRyxlQUFlLENBQUM7SUFFaUIsQ0FBQzs7Ozs7SUFFeEMsZ0RBQVU7Ozs7SUFBVixVQUFXLE1BQWM7UUFDdkIsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBWSxJQUFJLENBQUMsR0FBRyxHQUFHLGFBQWEsRUFBRSxFQUFFLE1BQU0sUUFBQSxFQUFFLENBQUMsQ0FBQztJQUN6RSxDQUFDOztnQkFWRixVQUFVLFNBQUM7b0JBQ1YsVUFBVSxFQUFFLE1BQU07aUJBQ25COzs7O2dCQVBRLFVBQVU7OztzQ0FEbkI7Q0FpQkMsQUFYRCxJQVdDO1NBUlksMkJBQTJCOzs7SUFDdEMsMENBQXNCOzs7OztJQUVWLDJDQUF3QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEh0dHBDbGllbnQgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5cbmltcG9ydCB7IERhZmZDaGVja291dFNlcnZpY2VJbnRlcmZhY2UsIERhZmZPcmRlciB9IGZyb20gJ0BkYWZmb2RpbC9jaGVja291dCc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIERhZmZJbk1lbW9yeUNoZWNrb3V0U2VydmljZSBpbXBsZW1lbnRzIERhZmZDaGVja291dFNlcnZpY2VJbnRlcmZhY2Uge1xuICB1cmwgPSAnL2FwaS9jaGVja291dCc7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBodHRwOiBIdHRwQ2xpZW50KSB7fVxuXG4gIHBsYWNlT3JkZXIoY2FydElkOiBzdHJpbmcpOiBPYnNlcnZhYmxlPERhZmZPcmRlcj4ge1xuICAgIHJldHVybiB0aGlzLmh0dHAucG9zdDxEYWZmT3JkZXI+KHRoaXMudXJsICsgJy9wbGFjZU9yZGVyJywgeyBjYXJ0SWQgfSk7XG4gIH1cbn1cbiJdfQ==