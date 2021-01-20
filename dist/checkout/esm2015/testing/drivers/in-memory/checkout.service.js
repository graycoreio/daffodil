/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
export class DaffInMemoryCheckoutService {
    /**
     * @param {?} http
     */
    constructor(http) {
        this.http = http;
        this.url = '/api/checkout';
    }
    /**
     * @param {?} cartId
     * @return {?}
     */
    placeOrder(cartId) {
        return this.http.post(this.url + '/placeOrder', { cartId });
    }
}
DaffInMemoryCheckoutService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
DaffInMemoryCheckoutService.ctorParameters = () => [
    { type: HttpClient }
];
/** @nocollapse */ DaffInMemoryCheckoutService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function DaffInMemoryCheckoutService_Factory() { return new DaffInMemoryCheckoutService(i0.ɵɵinject(i1.HttpClient)); }, token: DaffInMemoryCheckoutService, providedIn: "root" });
if (false) {
    /** @type {?} */
    DaffInMemoryCheckoutService.prototype.url;
    /**
     * @type {?}
     * @private
     */
    DaffInMemoryCheckoutService.prototype.http;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hlY2tvdXQuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkYWZmb2RpbC9jaGVja291dC90ZXN0aW5nLyIsInNvdXJjZXMiOlsiZHJpdmVycy9pbi1tZW1vcnkvY2hlY2tvdXQuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sc0JBQXNCLENBQUM7OztBQVFsRCxNQUFNLE9BQU8sMkJBQTJCOzs7O0lBR3RDLFlBQW9CLElBQWdCO1FBQWhCLFNBQUksR0FBSixJQUFJLENBQVk7UUFGcEMsUUFBRyxHQUFHLGVBQWUsQ0FBQztJQUVpQixDQUFDOzs7OztJQUV4QyxVQUFVLENBQUMsTUFBYztRQUN2QixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFZLElBQUksQ0FBQyxHQUFHLEdBQUcsYUFBYSxFQUFFLEVBQUUsTUFBTSxFQUFFLENBQUMsQ0FBQztJQUN6RSxDQUFDOzs7WUFWRixVQUFVLFNBQUM7Z0JBQ1YsVUFBVSxFQUFFLE1BQU07YUFDbkI7Ozs7WUFQUSxVQUFVOzs7OztJQVNqQiwwQ0FBc0I7Ozs7O0lBRVYsMkNBQXdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSHR0cENsaWVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcblxuaW1wb3J0IHsgRGFmZkNoZWNrb3V0U2VydmljZUludGVyZmFjZSwgRGFmZk9yZGVyIH0gZnJvbSAnQGRhZmZvZGlsL2NoZWNrb3V0JztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgRGFmZkluTWVtb3J5Q2hlY2tvdXRTZXJ2aWNlIGltcGxlbWVudHMgRGFmZkNoZWNrb3V0U2VydmljZUludGVyZmFjZSB7XG4gIHVybCA9ICcvYXBpL2NoZWNrb3V0JztcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGh0dHA6IEh0dHBDbGllbnQpIHt9XG5cbiAgcGxhY2VPcmRlcihjYXJ0SWQ6IHN0cmluZyk6IE9ic2VydmFibGU8RGFmZk9yZGVyPiB7XG4gICAgcmV0dXJuIHRoaXMuaHR0cC5wb3N0PERhZmZPcmRlcj4odGhpcy51cmwgKyAnL3BsYWNlT3JkZXInLCB7IGNhcnRJZCB9KTtcbiAgfVxufVxuIl19