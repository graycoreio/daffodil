/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { STATUS } from 'angular-in-memory-web-api';
import { DaffPaypalTokenResponseFactory } from '../factories/paypal-token-response.factory';
import * as i0 from "@angular/core";
import * as i1 from "../factories/paypal-token-response.factory";
var DaffInMemoryBackendPaypalService = /** @class */ (function () {
    function DaffInMemoryBackendPaypalService(paypalTokenResponseFactory) {
        this.paypalTokenResponseFactory = paypalTokenResponseFactory;
        this.paypalTokenResponse = this.paypalTokenResponseFactory.create();
    }
    /**
     * @param {?} url
     * @param {?} utils
     * @return {?}
     */
    DaffInMemoryBackendPaypalService.prototype.parseRequestUrl = /**
     * @param {?} url
     * @param {?} utils
     * @return {?}
     */
    function (url, utils) {
        return utils.parseRequestUrl(url);
    };
    /**
     * @return {?}
     */
    DaffInMemoryBackendPaypalService.prototype.createDb = /**
     * @return {?}
     */
    function () {
        return {
            paypalTokenResponse: this.paypalTokenResponse
        };
    };
    /**
     * @param {?} reqInfo
     * @return {?}
     */
    DaffInMemoryBackendPaypalService.prototype.get = /**
     * @param {?} reqInfo
     * @return {?}
     */
    function (reqInfo) {
        var _this = this;
        return reqInfo.utils.createResponse$((/**
         * @return {?}
         */
        function () {
            return {
                body: _this.paypalTokenResponse,
                status: STATUS.OK
            };
        }));
    };
    DaffInMemoryBackendPaypalService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    DaffInMemoryBackendPaypalService.ctorParameters = function () { return [
        { type: DaffPaypalTokenResponseFactory }
    ]; };
    /** @nocollapse */ DaffInMemoryBackendPaypalService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function DaffInMemoryBackendPaypalService_Factory() { return new DaffInMemoryBackendPaypalService(i0.ɵɵinject(i1.DaffPaypalTokenResponseFactory)); }, token: DaffInMemoryBackendPaypalService, providedIn: "root" });
    return DaffInMemoryBackendPaypalService;
}());
export { DaffInMemoryBackendPaypalService };
if (false) {
    /** @type {?} */
    DaffInMemoryBackendPaypalService.prototype.paypalTokenResponse;
    /**
     * @type {?}
     * @private
     */
    DaffInMemoryBackendPaypalService.prototype.paypalTokenResponseFactory;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGF5cGFsLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGFmZm9kaWwvcGF5cGFsL3Rlc3RpbmcvIiwic291cmNlcyI6WyJpbm1lbW9yeS1iYWNrZW5kL3BheXBhbC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFJTCxNQUFNLEVBQ1AsTUFBTSwyQkFBMkIsQ0FBQztBQUluQyxPQUFPLEVBQUUsOEJBQThCLEVBQUUsTUFBTSw0Q0FBNEMsQ0FBQzs7O0FBRTVGO0lBTUUsMENBQW9CLDBCQUEwRDtRQUExRCwrQkFBMEIsR0FBMUIsMEJBQTBCLENBQWdDO1FBQzVFLElBQUksQ0FBQyxtQkFBbUIsR0FBRyxJQUFJLENBQUMsMEJBQTBCLENBQUMsTUFBTSxFQUFFLENBQUM7SUFDdEUsQ0FBQzs7Ozs7O0lBRUQsMERBQWU7Ozs7O0lBQWYsVUFBZ0IsR0FBVyxFQUFFLEtBQTJCO1FBQ3RELE9BQU8sS0FBSyxDQUFDLGVBQWUsQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUNwQyxDQUFDOzs7O0lBRUQsbURBQVE7OztJQUFSO1FBQ0UsT0FBTztZQUNMLG1CQUFtQixFQUFFLElBQUksQ0FBQyxtQkFBbUI7U0FDOUMsQ0FBQztJQUNKLENBQUM7Ozs7O0lBRUQsOENBQUc7Ozs7SUFBSCxVQUFJLE9BQVk7UUFBaEIsaUJBT0M7UUFOQyxPQUFPLE9BQU8sQ0FBQyxLQUFLLENBQUMsZUFBZTs7O1FBQUM7WUFDbkMsT0FBTztnQkFDTCxJQUFJLEVBQUUsS0FBSSxDQUFDLG1CQUFtQjtnQkFDOUIsTUFBTSxFQUFFLE1BQU0sQ0FBQyxFQUFFO2FBQ2xCLENBQUM7UUFDSixDQUFDLEVBQUMsQ0FBQztJQUNMLENBQUM7O2dCQTNCRixVQUFVLFNBQUM7b0JBQ1YsVUFBVSxFQUFFLE1BQU07aUJBQ25COzs7O2dCQUpRLDhCQUE4Qjs7OzJDQVZ2QztDQXdDQyxBQTVCRCxJQTRCQztTQXpCWSxnQ0FBZ0M7OztJQUMzQywrREFBNkM7Ozs7O0lBRWpDLHNFQUFrRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7XG4gIEluTWVtb3J5RGJTZXJ2aWNlLFxuICBSZXF1ZXN0SW5mb1V0aWxpdGllcyxcbiAgUGFyc2VkUmVxdWVzdFVybCxcbiAgU1RBVFVTXG59IGZyb20gJ2FuZ3VsYXItaW4tbWVtb3J5LXdlYi1hcGknO1xuXG5pbXBvcnQgeyBEYWZmUGF5cGFsVG9rZW5SZXNwb25zZSB9IGZyb20gJ0BkYWZmb2RpbC9wYXlwYWwnO1xuXG5pbXBvcnQgeyBEYWZmUGF5cGFsVG9rZW5SZXNwb25zZUZhY3RvcnkgfSBmcm9tICcuLi9mYWN0b3JpZXMvcGF5cGFsLXRva2VuLXJlc3BvbnNlLmZhY3RvcnknO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBEYWZmSW5NZW1vcnlCYWNrZW5kUGF5cGFsU2VydmljZSBpbXBsZW1lbnRzIEluTWVtb3J5RGJTZXJ2aWNlIHtcbiAgcGF5cGFsVG9rZW5SZXNwb25zZTogRGFmZlBheXBhbFRva2VuUmVzcG9uc2U7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBwYXlwYWxUb2tlblJlc3BvbnNlRmFjdG9yeTogRGFmZlBheXBhbFRva2VuUmVzcG9uc2VGYWN0b3J5KSB7XG4gICAgdGhpcy5wYXlwYWxUb2tlblJlc3BvbnNlID0gdGhpcy5wYXlwYWxUb2tlblJlc3BvbnNlRmFjdG9yeS5jcmVhdGUoKTtcbiAgfVxuXG4gIHBhcnNlUmVxdWVzdFVybCh1cmw6IHN0cmluZywgdXRpbHM6IFJlcXVlc3RJbmZvVXRpbGl0aWVzKTogUGFyc2VkUmVxdWVzdFVybCB7XG4gICAgcmV0dXJuIHV0aWxzLnBhcnNlUmVxdWVzdFVybCh1cmwpO1xuICB9XG5cbiAgY3JlYXRlRGIoKTogYW55IHtcbiAgICByZXR1cm4ge1xuICAgICAgcGF5cGFsVG9rZW5SZXNwb25zZTogdGhpcy5wYXlwYWxUb2tlblJlc3BvbnNlXG4gICAgfTtcbiAgfVxuXG4gIGdldChyZXFJbmZvOiBhbnkpIHtcbiAgICByZXR1cm4gcmVxSW5mby51dGlscy5jcmVhdGVSZXNwb25zZSQoKCkgPT4ge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgYm9keTogdGhpcy5wYXlwYWxUb2tlblJlc3BvbnNlLFxuICAgICAgICBzdGF0dXM6IFNUQVRVUy5PS1xuICAgICAgfTtcbiAgICB9KTtcbiAgfVxufVxuIl19