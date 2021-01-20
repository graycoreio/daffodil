/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { DaffPaypalTokenResponseFactory } from '../../factories/paypal-token-response.factory';
import * as i0 from "@angular/core";
import * as i1 from "../../factories/paypal-token-response.factory";
var DaffTestingPaypalService = /** @class */ (function () {
    function DaffTestingPaypalService(paypalTokenResponseFactory) {
        this.paypalTokenResponseFactory = paypalTokenResponseFactory;
    }
    /**
     * @param {?} tokenRequest
     * @return {?}
     */
    DaffTestingPaypalService.prototype.generateToken = /**
     * @param {?} tokenRequest
     * @return {?}
     */
    function (tokenRequest) {
        return of(this.paypalTokenResponseFactory.create());
    };
    DaffTestingPaypalService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    DaffTestingPaypalService.ctorParameters = function () { return [
        { type: DaffPaypalTokenResponseFactory }
    ]; };
    /** @nocollapse */ DaffTestingPaypalService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function DaffTestingPaypalService_Factory() { return new DaffTestingPaypalService(i0.ɵɵinject(i1.DaffPaypalTokenResponseFactory)); }, token: DaffTestingPaypalService, providedIn: "root" });
    return DaffTestingPaypalService;
}());
export { DaffTestingPaypalService };
if (false) {
    /**
     * @type {?}
     * @private
     */
    DaffTestingPaypalService.prototype.paypalTokenResponseFactory;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGF5cGFsLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGFmZm9kaWwvcGF5cGFsL3Rlc3RpbmcvIiwic291cmNlcyI6WyJkcml2ZXJzL3Rlc3RpbmcvcGF5cGFsLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFjLEVBQUUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUl0QyxPQUFPLEVBQUUsOEJBQThCLEVBQUUsTUFBTSwrQ0FBK0MsQ0FBQzs7O0FBRS9GO0lBS0Usa0NBQ1UsMEJBQTBEO1FBQTFELCtCQUEwQixHQUExQiwwQkFBMEIsQ0FBZ0M7SUFBRyxDQUFDOzs7OztJQUV4RSxnREFBYTs7OztJQUFiLFVBQWMsWUFBb0M7UUFDaEQsT0FBTyxFQUFFLENBQUMsSUFBSSxDQUFDLDBCQUEwQixDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUM7SUFDdEQsQ0FBQzs7Z0JBVkYsVUFBVSxTQUFDO29CQUNWLFVBQVUsRUFBRSxNQUFNO2lCQUNuQjs7OztnQkFKUSw4QkFBOEI7OzttQ0FMdkM7Q0FrQkMsQUFYRCxJQVdDO1NBUlksd0JBQXdCOzs7Ozs7SUFHakMsOERBQWtFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgb2YgfSBmcm9tICdyeGpzJztcblxuaW1wb3J0IHsgRGFmZlBheXBhbFRva2VuUmVxdWVzdCwgRGFmZlBheXBhbFRva2VuUmVzcG9uc2UsIERhZmZQYXlwYWxTZXJ2aWNlSW50ZXJmYWNlIH0gZnJvbSAnQGRhZmZvZGlsL3BheXBhbCc7XG5cbmltcG9ydCB7IERhZmZQYXlwYWxUb2tlblJlc3BvbnNlRmFjdG9yeSB9IGZyb20gJy4uLy4uL2ZhY3Rvcmllcy9wYXlwYWwtdG9rZW4tcmVzcG9uc2UuZmFjdG9yeSc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIERhZmZUZXN0aW5nUGF5cGFsU2VydmljZSBpbXBsZW1lbnRzIERhZmZQYXlwYWxTZXJ2aWNlSW50ZXJmYWNlPERhZmZQYXlwYWxUb2tlblJlcXVlc3QsIERhZmZQYXlwYWxUb2tlblJlc3BvbnNlPiB7XG4gXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgcGF5cGFsVG9rZW5SZXNwb25zZUZhY3Rvcnk6IERhZmZQYXlwYWxUb2tlblJlc3BvbnNlRmFjdG9yeSkge31cblxuICBnZW5lcmF0ZVRva2VuKHRva2VuUmVxdWVzdDogRGFmZlBheXBhbFRva2VuUmVxdWVzdCk6IE9ic2VydmFibGU8RGFmZlBheXBhbFRva2VuUmVzcG9uc2U+IHtcbiAgICByZXR1cm4gb2YodGhpcy5wYXlwYWxUb2tlblJlc3BvbnNlRmFjdG9yeS5jcmVhdGUoKSk7XG4gIH1cbn1cbiJdfQ==