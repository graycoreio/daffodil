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
const ACCEPT_JS_SANDBOX_URL = 'https://jstest.authorize.net/v1/Accept.js';
/** @type {?} */
const ACCEPT_JS_PRODUCTION_URL = 'https://js.authorize.net/v1/Accept.js';
export class DaffAcceptJsLoadingService {
    /**
     * @param {?} production
     * @param {?} doc
     */
    constructor(production, doc) {
        this.production = production;
        this.doc = doc;
    }
    /**
     * @return {?}
     */
    load() {
        if (typeof Accept === 'undefined') {
            /** @type {?} */
            const acceptJsScript = this.doc.createElement('script');
            acceptJsScript.async = true;
            acceptJsScript.setAttribute('type', 'text/javascript');
            acceptJsScript.setAttribute('src', this.production ? ACCEPT_JS_PRODUCTION_URL : ACCEPT_JS_SANDBOX_URL);
            acceptJsScript.setAttribute('charset', 'utf-8');
            this.doc.body.appendChild(acceptJsScript);
        }
    }
    /**
     * @return {?}
     */
    getAccept() {
        return Accept;
    }
}
DaffAcceptJsLoadingService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root',
            },] }
];
/** @nocollapse */
DaffAcceptJsLoadingService.ctorParameters = () => [
    { type: Boolean, decorators: [{ type: Inject, args: [DAFF_AUTHORIZENET_ACCEPT_JS_PRODUCTION,] }] },
    { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] }
];
/** @nocollapse */ DaffAcceptJsLoadingService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function DaffAcceptJsLoadingService_Factory() { return new DaffAcceptJsLoadingService(i0.ɵɵinject(i1.DAFF_AUTHORIZENET_ACCEPT_JS_PRODUCTION), i0.ɵɵinject(i2.DOCUMENT)); }, token: DaffAcceptJsLoadingService, providedIn: "root" });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWNjZXB0LWpzLWxvYWRpbmcuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkYWZmb2RpbC9hdXRob3JpemVuZXQvIiwic291cmNlcyI6WyJzZXJ2aWNlcy9hY2NlcHQtanMtbG9hZGluZy5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNuRCxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDM0MsT0FBTyxFQUFFLHNDQUFzQyxFQUFFLE1BQU0sOEJBQThCLENBQUM7Ozs7O01BR2hGLHFCQUFxQixHQUFHLDJDQUEyQzs7TUFDbkUsd0JBQXdCLEdBQUcsdUNBQXVDO0FBT3hFLE1BQU0sT0FBTywwQkFBMEI7Ozs7O0lBQ3RDLFlBQ3lELFVBQW1CLEVBQ2pELEdBQUc7UUFEMkIsZUFBVSxHQUFWLFVBQVUsQ0FBUztRQUNqRCxRQUFHLEdBQUgsR0FBRyxDQUFBO0lBQzNCLENBQUM7Ozs7SUFFSixJQUFJO1FBQ0gsSUFBSSxPQUFPLE1BQU0sS0FBSyxXQUFXLEVBQUU7O2tCQUM1QixjQUFjLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDO1lBQ3ZELGNBQWMsQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDO1lBQzVCLGNBQWMsQ0FBQyxZQUFZLENBQUMsTUFBTSxFQUFFLGlCQUFpQixDQUFDLENBQUM7WUFDdkQsY0FBYyxDQUFDLFlBQVksQ0FDMUIsS0FBSyxFQUNMLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLHdCQUF3QixDQUFDLENBQUMsQ0FBQyxxQkFBcUIsQ0FDbEUsQ0FBQztZQUNGLGNBQWMsQ0FBQyxZQUFZLENBQUMsU0FBUyxFQUFFLE9BQU8sQ0FBQyxDQUFDO1lBQ2hELElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxjQUFjLENBQUMsQ0FBQztTQUMxQztJQUNGLENBQUM7Ozs7SUFFRCxTQUFTO1FBQ1IsT0FBTyxNQUFNLENBQUM7SUFDZixDQUFDOzs7WUF6QkQsVUFBVSxTQUFDO2dCQUNYLFVBQVUsRUFBRSxNQUFNO2FBQ2xCOzs7OzBDQUdFLE1BQU0sU0FBQyxzQ0FBc0M7NENBQzdDLE1BQU0sU0FBQyxRQUFROzs7Ozs7OztJQURoQixnREFBMkU7Ozs7O0lBQzNFLHlDQUE2QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdCwgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRE9DVU1FTlQgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgREFGRl9BVVRIT1JJWkVORVRfQUNDRVBUX0pTX1BST0RVQ1RJT04gfSBmcm9tICcuL2FjY2VwdC1qcy1wcm9kdWN0aW9uLnRva2VuJztcbmltcG9ydCB7IEFjY2VwdFR5cGUgfSBmcm9tICcuLi9tb2RlbHMvYWNjZXB0SnMvYWNjZXB0JztcblxuY29uc3QgQUNDRVBUX0pTX1NBTkRCT1hfVVJMID0gJ2h0dHBzOi8vanN0ZXN0LmF1dGhvcml6ZS5uZXQvdjEvQWNjZXB0LmpzJztcbmNvbnN0IEFDQ0VQVF9KU19QUk9EVUNUSU9OX1VSTCA9ICdodHRwczovL2pzLmF1dGhvcml6ZS5uZXQvdjEvQWNjZXB0LmpzJztcblxuZXhwb3J0IGRlY2xhcmUgdmFyIEFjY2VwdDogQWNjZXB0VHlwZTtcblxuQEluamVjdGFibGUoe1xuXHRwcm92aWRlZEluOiAncm9vdCcsXG59KVxuZXhwb3J0IGNsYXNzIERhZmZBY2NlcHRKc0xvYWRpbmdTZXJ2aWNlIHtcblx0Y29uc3RydWN0b3IoXG5cdFx0QEluamVjdChEQUZGX0FVVEhPUklaRU5FVF9BQ0NFUFRfSlNfUFJPRFVDVElPTikgcHJpdmF0ZSBwcm9kdWN0aW9uOiBib29sZWFuLFxuXHRcdEBJbmplY3QoRE9DVU1FTlQpIHByaXZhdGUgZG9jLFxuXHQpIHt9XG5cblx0bG9hZCgpOiB2b2lkIHtcblx0XHRpZiAodHlwZW9mIEFjY2VwdCA9PT0gJ3VuZGVmaW5lZCcpIHtcblx0XHRcdGNvbnN0IGFjY2VwdEpzU2NyaXB0ID0gdGhpcy5kb2MuY3JlYXRlRWxlbWVudCgnc2NyaXB0Jyk7XG5cdFx0XHRhY2NlcHRKc1NjcmlwdC5hc3luYyA9IHRydWU7XG5cdFx0XHRhY2NlcHRKc1NjcmlwdC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAndGV4dC9qYXZhc2NyaXB0Jyk7XG5cdFx0XHRhY2NlcHRKc1NjcmlwdC5zZXRBdHRyaWJ1dGUoXG5cdFx0XHRcdCdzcmMnLFxuXHRcdFx0XHR0aGlzLnByb2R1Y3Rpb24gPyBBQ0NFUFRfSlNfUFJPRFVDVElPTl9VUkwgOiBBQ0NFUFRfSlNfU0FOREJPWF9VUkwsXG5cdFx0XHQpO1xuXHRcdFx0YWNjZXB0SnNTY3JpcHQuc2V0QXR0cmlidXRlKCdjaGFyc2V0JywgJ3V0Zi04Jyk7XG5cdFx0XHR0aGlzLmRvYy5ib2R5LmFwcGVuZENoaWxkKGFjY2VwdEpzU2NyaXB0KTtcblx0XHR9XG5cdH1cblxuXHRnZXRBY2NlcHQoKTogQWNjZXB0VHlwZSB7XG5cdFx0cmV0dXJuIEFjY2VwdDtcblx0fVxufVxuIl19