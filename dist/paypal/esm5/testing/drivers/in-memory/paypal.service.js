/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
var DaffInMemoryPaypalService = /** @class */ (function () {
    function DaffInMemoryPaypalService(http) {
        this.http = http;
        this.url = '/api/paypal/';
    }
    /**
     * @param {?} tokenRequest
     * @return {?}
     */
    DaffInMemoryPaypalService.prototype.generateToken = /**
     * @param {?} tokenRequest
     * @return {?}
     */
    function (tokenRequest) {
        return this.http.get(this.url + tokenRequest.cartId);
    };
    DaffInMemoryPaypalService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    DaffInMemoryPaypalService.ctorParameters = function () { return [
        { type: HttpClient }
    ]; };
    /** @nocollapse */ DaffInMemoryPaypalService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function DaffInMemoryPaypalService_Factory() { return new DaffInMemoryPaypalService(i0.ɵɵinject(i1.HttpClient)); }, token: DaffInMemoryPaypalService, providedIn: "root" });
    return DaffInMemoryPaypalService;
}());
export { DaffInMemoryPaypalService };
if (false) {
    /** @type {?} */
    DaffInMemoryPaypalService.prototype.url;
    /**
     * @type {?}
     * @private
     */
    DaffInMemoryPaypalService.prototype.http;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGF5cGFsLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGFmZm9kaWwvcGF5cGFsL3Rlc3RpbmcvIiwic291cmNlcyI6WyJkcml2ZXJzL2luLW1lbW9yeS9wYXlwYWwuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sc0JBQXNCLENBQUM7OztBQUtsRDtJQU1FLG1DQUFvQixJQUFnQjtRQUFoQixTQUFJLEdBQUosSUFBSSxDQUFZO1FBRnBDLFFBQUcsR0FBRyxjQUFjLENBQUM7SUFFa0IsQ0FBQzs7Ozs7SUFFeEMsaURBQWE7Ozs7SUFBYixVQUFjLFlBQW9DO1FBQ2hELE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQTBCLElBQUksQ0FBQyxHQUFHLEdBQUcsWUFBWSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ2hGLENBQUM7O2dCQVZGLFVBQVUsU0FBQztvQkFDVixVQUFVLEVBQUUsTUFBTTtpQkFDbkI7Ozs7Z0JBUFEsVUFBVTs7O29DQURuQjtDQWlCQyxBQVhELElBV0M7U0FSWSx5QkFBeUI7OztJQUNwQyx3Q0FBcUI7Ozs7O0lBRVQseUNBQXdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSHR0cENsaWVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcblxuaW1wb3J0IHsgRGFmZlBheXBhbFNlcnZpY2VJbnRlcmZhY2UsIERhZmZQYXlwYWxUb2tlblJlcXVlc3QsIERhZmZQYXlwYWxUb2tlblJlc3BvbnNlIH0gZnJvbSAnQGRhZmZvZGlsL3BheXBhbCc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIERhZmZJbk1lbW9yeVBheXBhbFNlcnZpY2UgaW1wbGVtZW50cyBEYWZmUGF5cGFsU2VydmljZUludGVyZmFjZTxEYWZmUGF5cGFsVG9rZW5SZXF1ZXN0LCBEYWZmUGF5cGFsVG9rZW5SZXNwb25zZT4ge1xuICB1cmwgPSAnL2FwaS9wYXlwYWwvJztcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGh0dHA6IEh0dHBDbGllbnQpIHt9XG5cbiAgZ2VuZXJhdGVUb2tlbih0b2tlblJlcXVlc3Q6IERhZmZQYXlwYWxUb2tlblJlcXVlc3QpOiBPYnNlcnZhYmxlPERhZmZQYXlwYWxUb2tlblJlc3BvbnNlPiB7XG4gICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQ8RGFmZlBheXBhbFRva2VuUmVzcG9uc2U+KHRoaXMudXJsICsgdG9rZW5SZXF1ZXN0LmNhcnRJZCk7XG4gIH1cbn1cbiJdfQ==