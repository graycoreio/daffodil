/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { STATUS } from 'angular-in-memory-web-api';
import { DaffPaypalTokenResponseFactory } from '../factories/paypal-token-response.factory';
import * as i0 from "@angular/core";
import * as i1 from "../factories/paypal-token-response.factory";
export class DaffInMemoryBackendPaypalService {
    /**
     * @param {?} paypalTokenResponseFactory
     */
    constructor(paypalTokenResponseFactory) {
        this.paypalTokenResponseFactory = paypalTokenResponseFactory;
        this.paypalTokenResponse = this.paypalTokenResponseFactory.create();
    }
    /**
     * @param {?} url
     * @param {?} utils
     * @return {?}
     */
    parseRequestUrl(url, utils) {
        return utils.parseRequestUrl(url);
    }
    /**
     * @return {?}
     */
    createDb() {
        return {
            paypalTokenResponse: this.paypalTokenResponse
        };
    }
    /**
     * @param {?} reqInfo
     * @return {?}
     */
    get(reqInfo) {
        return reqInfo.utils.createResponse$((/**
         * @return {?}
         */
        () => {
            return {
                body: this.paypalTokenResponse,
                status: STATUS.OK
            };
        }));
    }
}
DaffInMemoryBackendPaypalService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
DaffInMemoryBackendPaypalService.ctorParameters = () => [
    { type: DaffPaypalTokenResponseFactory }
];
/** @nocollapse */ DaffInMemoryBackendPaypalService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function DaffInMemoryBackendPaypalService_Factory() { return new DaffInMemoryBackendPaypalService(i0.ɵɵinject(i1.DaffPaypalTokenResponseFactory)); }, token: DaffInMemoryBackendPaypalService, providedIn: "root" });
if (false) {
    /** @type {?} */
    DaffInMemoryBackendPaypalService.prototype.paypalTokenResponse;
    /**
     * @type {?}
     * @private
     */
    DaffInMemoryBackendPaypalService.prototype.paypalTokenResponseFactory;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGF5cGFsLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGFmZm9kaWwvcGF5cGFsL3Rlc3RpbmcvIiwic291cmNlcyI6WyJpbm1lbW9yeS1iYWNrZW5kL3BheXBhbC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFJTCxNQUFNLEVBQ1AsTUFBTSwyQkFBMkIsQ0FBQztBQUluQyxPQUFPLEVBQUUsOEJBQThCLEVBQUUsTUFBTSw0Q0FBNEMsQ0FBQzs7O0FBSzVGLE1BQU0sT0FBTyxnQ0FBZ0M7Ozs7SUFHM0MsWUFBb0IsMEJBQTBEO1FBQTFELCtCQUEwQixHQUExQiwwQkFBMEIsQ0FBZ0M7UUFDNUUsSUFBSSxDQUFDLG1CQUFtQixHQUFHLElBQUksQ0FBQywwQkFBMEIsQ0FBQyxNQUFNLEVBQUUsQ0FBQztJQUN0RSxDQUFDOzs7Ozs7SUFFRCxlQUFlLENBQUMsR0FBVyxFQUFFLEtBQTJCO1FBQ3RELE9BQU8sS0FBSyxDQUFDLGVBQWUsQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUNwQyxDQUFDOzs7O0lBRUQsUUFBUTtRQUNOLE9BQU87WUFDTCxtQkFBbUIsRUFBRSxJQUFJLENBQUMsbUJBQW1CO1NBQzlDLENBQUM7SUFDSixDQUFDOzs7OztJQUVELEdBQUcsQ0FBQyxPQUFZO1FBQ2QsT0FBTyxPQUFPLENBQUMsS0FBSyxDQUFDLGVBQWU7OztRQUFDLEdBQUcsRUFBRTtZQUN4QyxPQUFPO2dCQUNMLElBQUksRUFBRSxJQUFJLENBQUMsbUJBQW1CO2dCQUM5QixNQUFNLEVBQUUsTUFBTSxDQUFDLEVBQUU7YUFDbEIsQ0FBQztRQUNKLENBQUMsRUFBQyxDQUFDO0lBQ0wsQ0FBQzs7O1lBM0JGLFVBQVUsU0FBQztnQkFDVixVQUFVLEVBQUUsTUFBTTthQUNuQjs7OztZQUpRLDhCQUE4Qjs7Ozs7SUFNckMsK0RBQTZDOzs7OztJQUVqQyxzRUFBa0UiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1xuICBJbk1lbW9yeURiU2VydmljZSxcbiAgUmVxdWVzdEluZm9VdGlsaXRpZXMsXG4gIFBhcnNlZFJlcXVlc3RVcmwsXG4gIFNUQVRVU1xufSBmcm9tICdhbmd1bGFyLWluLW1lbW9yeS13ZWItYXBpJztcblxuaW1wb3J0IHsgRGFmZlBheXBhbFRva2VuUmVzcG9uc2UgfSBmcm9tICdAZGFmZm9kaWwvcGF5cGFsJztcblxuaW1wb3J0IHsgRGFmZlBheXBhbFRva2VuUmVzcG9uc2VGYWN0b3J5IH0gZnJvbSAnLi4vZmFjdG9yaWVzL3BheXBhbC10b2tlbi1yZXNwb25zZS5mYWN0b3J5JztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgRGFmZkluTWVtb3J5QmFja2VuZFBheXBhbFNlcnZpY2UgaW1wbGVtZW50cyBJbk1lbW9yeURiU2VydmljZSB7XG4gIHBheXBhbFRva2VuUmVzcG9uc2U6IERhZmZQYXlwYWxUb2tlblJlc3BvbnNlO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcGF5cGFsVG9rZW5SZXNwb25zZUZhY3Rvcnk6IERhZmZQYXlwYWxUb2tlblJlc3BvbnNlRmFjdG9yeSkge1xuICAgIHRoaXMucGF5cGFsVG9rZW5SZXNwb25zZSA9IHRoaXMucGF5cGFsVG9rZW5SZXNwb25zZUZhY3RvcnkuY3JlYXRlKCk7XG4gIH1cblxuICBwYXJzZVJlcXVlc3RVcmwodXJsOiBzdHJpbmcsIHV0aWxzOiBSZXF1ZXN0SW5mb1V0aWxpdGllcyk6IFBhcnNlZFJlcXVlc3RVcmwge1xuICAgIHJldHVybiB1dGlscy5wYXJzZVJlcXVlc3RVcmwodXJsKTtcbiAgfVxuXG4gIGNyZWF0ZURiKCk6IGFueSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHBheXBhbFRva2VuUmVzcG9uc2U6IHRoaXMucGF5cGFsVG9rZW5SZXNwb25zZVxuICAgIH07XG4gIH1cblxuICBnZXQocmVxSW5mbzogYW55KSB7XG4gICAgcmV0dXJuIHJlcUluZm8udXRpbHMuY3JlYXRlUmVzcG9uc2UkKCgpID0+IHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGJvZHk6IHRoaXMucGF5cGFsVG9rZW5SZXNwb25zZSxcbiAgICAgICAgc3RhdHVzOiBTVEFUVVMuT0tcbiAgICAgIH07XG4gICAgfSk7XG4gIH1cbn1cbiJdfQ==