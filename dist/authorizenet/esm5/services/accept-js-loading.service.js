/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Inject, Injectable } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { DAFF_AUTHORIZENET_ACCEPT_JS_PRODUCTION } from './accept-js-production.token';
import * as i0 from "@angular/core";
import * as i1 from "./accept-js-production.token";
import * as i2 from "@angular/common";
/** @type {?} */
var ACCEPT_JS_SANDBOX_URL = 'https://jstest.authorize.net/v1/Accept.js';
/** @type {?} */
var ACCEPT_JS_PRODUCTION_URL = 'https://js.authorize.net/v1/Accept.js';
var DaffAcceptJsLoadingService = /** @class */ (function () {
    function DaffAcceptJsLoadingService(production, doc) {
        this.production = production;
        this.doc = doc;
    }
    /**
     * @return {?}
     */
    DaffAcceptJsLoadingService.prototype.load = /**
     * @return {?}
     */
    function () {
        if (typeof Accept === 'undefined') {
            /** @type {?} */
            var acceptJsScript = this.doc.createElement('script');
            acceptJsScript.async = true;
            acceptJsScript.setAttribute('type', 'text/javascript');
            acceptJsScript.setAttribute('src', this.production ? ACCEPT_JS_PRODUCTION_URL : ACCEPT_JS_SANDBOX_URL);
            acceptJsScript.setAttribute('charset', 'utf-8');
            this.doc.body.appendChild(acceptJsScript);
        }
    };
    /**
     * @return {?}
     */
    DaffAcceptJsLoadingService.prototype.getAccept = /**
     * @return {?}
     */
    function () {
        return Accept;
    };
    DaffAcceptJsLoadingService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root',
                },] }
    ];
    /** @nocollapse */
    DaffAcceptJsLoadingService.ctorParameters = function () { return [
        { type: Boolean, decorators: [{ type: Inject, args: [DAFF_AUTHORIZENET_ACCEPT_JS_PRODUCTION,] }] },
        { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] }
    ]; };
    /** @nocollapse */ DaffAcceptJsLoadingService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function DaffAcceptJsLoadingService_Factory() { return new DaffAcceptJsLoadingService(i0.ɵɵinject(i1.DAFF_AUTHORIZENET_ACCEPT_JS_PRODUCTION), i0.ɵɵinject(i2.DOCUMENT)); }, token: DaffAcceptJsLoadingService, providedIn: "root" });
    return DaffAcceptJsLoadingService;
}());
export { DaffAcceptJsLoadingService };
if (false) {
    /**
     * @type {?}
     * @private
     */
    DaffAcceptJsLoadingService.prototype.production;
    /**
     * @type {?}
     * @private
     */
    DaffAcceptJsLoadingService.prototype.doc;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWNjZXB0LWpzLWxvYWRpbmcuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkYWZmb2RpbC9hdXRob3JpemVuZXQvIiwic291cmNlcyI6WyJzZXJ2aWNlcy9hY2NlcHQtanMtbG9hZGluZy5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNuRCxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDM0MsT0FBTyxFQUFFLHNDQUFzQyxFQUFFLE1BQU0sOEJBQThCLENBQUM7Ozs7O0lBR2hGLHFCQUFxQixHQUFHLDJDQUEyQzs7SUFDbkUsd0JBQXdCLEdBQUcsdUNBQXVDO0FBSXhFO0lBSUMsb0NBQ3lELFVBQW1CLEVBQ2pELEdBQUc7UUFEMkIsZUFBVSxHQUFWLFVBQVUsQ0FBUztRQUNqRCxRQUFHLEdBQUgsR0FBRyxDQUFBO0lBQzNCLENBQUM7Ozs7SUFFSix5Q0FBSTs7O0lBQUo7UUFDQyxJQUFJLE9BQU8sTUFBTSxLQUFLLFdBQVcsRUFBRTs7Z0JBQzVCLGNBQWMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUM7WUFDdkQsY0FBYyxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUM7WUFDNUIsY0FBYyxDQUFDLFlBQVksQ0FBQyxNQUFNLEVBQUUsaUJBQWlCLENBQUMsQ0FBQztZQUN2RCxjQUFjLENBQUMsWUFBWSxDQUMxQixLQUFLLEVBQ0wsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsd0JBQXdCLENBQUMsQ0FBQyxDQUFDLHFCQUFxQixDQUNsRSxDQUFDO1lBQ0YsY0FBYyxDQUFDLFlBQVksQ0FBQyxTQUFTLEVBQUUsT0FBTyxDQUFDLENBQUM7WUFDaEQsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLGNBQWMsQ0FBQyxDQUFDO1NBQzFDO0lBQ0YsQ0FBQzs7OztJQUVELDhDQUFTOzs7SUFBVDtRQUNDLE9BQU8sTUFBTSxDQUFDO0lBQ2YsQ0FBQzs7Z0JBekJELFVBQVUsU0FBQztvQkFDWCxVQUFVLEVBQUUsTUFBTTtpQkFDbEI7Ozs7OENBR0UsTUFBTSxTQUFDLHNDQUFzQztnREFDN0MsTUFBTSxTQUFDLFFBQVE7OztxQ0FoQmxCO0NBb0NDLEFBMUJELElBMEJDO1NBdkJZLDBCQUEwQjs7Ozs7O0lBRXJDLGdEQUEyRTs7Ozs7SUFDM0UseUNBQTZCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0LCBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBET0NVTUVOVCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBEQUZGX0FVVEhPUklaRU5FVF9BQ0NFUFRfSlNfUFJPRFVDVElPTiB9IGZyb20gJy4vYWNjZXB0LWpzLXByb2R1Y3Rpb24udG9rZW4nO1xuaW1wb3J0IHsgQWNjZXB0VHlwZSB9IGZyb20gJy4uL21vZGVscy9hY2NlcHRKcy9hY2NlcHQnO1xuXG5jb25zdCBBQ0NFUFRfSlNfU0FOREJPWF9VUkwgPSAnaHR0cHM6Ly9qc3Rlc3QuYXV0aG9yaXplLm5ldC92MS9BY2NlcHQuanMnO1xuY29uc3QgQUNDRVBUX0pTX1BST0RVQ1RJT05fVVJMID0gJ2h0dHBzOi8vanMuYXV0aG9yaXplLm5ldC92MS9BY2NlcHQuanMnO1xuXG5leHBvcnQgZGVjbGFyZSB2YXIgQWNjZXB0OiBBY2NlcHRUeXBlO1xuXG5ASW5qZWN0YWJsZSh7XG5cdHByb3ZpZGVkSW46ICdyb290Jyxcbn0pXG5leHBvcnQgY2xhc3MgRGFmZkFjY2VwdEpzTG9hZGluZ1NlcnZpY2Uge1xuXHRjb25zdHJ1Y3Rvcihcblx0XHRASW5qZWN0KERBRkZfQVVUSE9SSVpFTkVUX0FDQ0VQVF9KU19QUk9EVUNUSU9OKSBwcml2YXRlIHByb2R1Y3Rpb246IGJvb2xlYW4sXG5cdFx0QEluamVjdChET0NVTUVOVCkgcHJpdmF0ZSBkb2MsXG5cdCkge31cblxuXHRsb2FkKCk6IHZvaWQge1xuXHRcdGlmICh0eXBlb2YgQWNjZXB0ID09PSAndW5kZWZpbmVkJykge1xuXHRcdFx0Y29uc3QgYWNjZXB0SnNTY3JpcHQgPSB0aGlzLmRvYy5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKTtcblx0XHRcdGFjY2VwdEpzU2NyaXB0LmFzeW5jID0gdHJ1ZTtcblx0XHRcdGFjY2VwdEpzU2NyaXB0LnNldEF0dHJpYnV0ZSgndHlwZScsICd0ZXh0L2phdmFzY3JpcHQnKTtcblx0XHRcdGFjY2VwdEpzU2NyaXB0LnNldEF0dHJpYnV0ZShcblx0XHRcdFx0J3NyYycsXG5cdFx0XHRcdHRoaXMucHJvZHVjdGlvbiA/IEFDQ0VQVF9KU19QUk9EVUNUSU9OX1VSTCA6IEFDQ0VQVF9KU19TQU5EQk9YX1VSTCxcblx0XHRcdCk7XG5cdFx0XHRhY2NlcHRKc1NjcmlwdC5zZXRBdHRyaWJ1dGUoJ2NoYXJzZXQnLCAndXRmLTgnKTtcblx0XHRcdHRoaXMuZG9jLmJvZHkuYXBwZW5kQ2hpbGQoYWNjZXB0SnNTY3JpcHQpO1xuXHRcdH1cblx0fVxuXG5cdGdldEFjY2VwdCgpOiBBY2NlcHRUeXBlIHtcblx0XHRyZXR1cm4gQWNjZXB0O1xuXHR9XG59XG4iXX0=