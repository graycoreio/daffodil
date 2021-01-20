/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
export class DaffInMemoryPaypalService {
    /**
     * @param {?} http
     */
    constructor(http) {
        this.http = http;
        this.url = '/api/paypal/';
    }
    /**
     * @param {?} tokenRequest
     * @return {?}
     */
    generateToken(tokenRequest) {
        return this.http.get(this.url + tokenRequest.cartId);
    }
}
DaffInMemoryPaypalService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
DaffInMemoryPaypalService.ctorParameters = () => [
    { type: HttpClient }
];
/** @nocollapse */ DaffInMemoryPaypalService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function DaffInMemoryPaypalService_Factory() { return new DaffInMemoryPaypalService(i0.ɵɵinject(i1.HttpClient)); }, token: DaffInMemoryPaypalService, providedIn: "root" });
if (false) {
    /** @type {?} */
    DaffInMemoryPaypalService.prototype.url;
    /**
     * @type {?}
     * @private
     */
    DaffInMemoryPaypalService.prototype.http;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGF5cGFsLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGFmZm9kaWwvcGF5cGFsL3Rlc3RpbmcvIiwic291cmNlcyI6WyJkcml2ZXJzL2luLW1lbW9yeS9wYXlwYWwuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sc0JBQXNCLENBQUM7OztBQVFsRCxNQUFNLE9BQU8seUJBQXlCOzs7O0lBR3BDLFlBQW9CLElBQWdCO1FBQWhCLFNBQUksR0FBSixJQUFJLENBQVk7UUFGcEMsUUFBRyxHQUFHLGNBQWMsQ0FBQztJQUVrQixDQUFDOzs7OztJQUV4QyxhQUFhLENBQUMsWUFBb0M7UUFDaEQsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBMEIsSUFBSSxDQUFDLEdBQUcsR0FBRyxZQUFZLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDaEYsQ0FBQzs7O1lBVkYsVUFBVSxTQUFDO2dCQUNWLFVBQVUsRUFBRSxNQUFNO2FBQ25COzs7O1lBUFEsVUFBVTs7Ozs7SUFTakIsd0NBQXFCOzs7OztJQUVULHlDQUF3QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEh0dHBDbGllbnQgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5cbmltcG9ydCB7IERhZmZQYXlwYWxTZXJ2aWNlSW50ZXJmYWNlLCBEYWZmUGF5cGFsVG9rZW5SZXF1ZXN0LCBEYWZmUGF5cGFsVG9rZW5SZXNwb25zZSB9IGZyb20gJ0BkYWZmb2RpbC9wYXlwYWwnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBEYWZmSW5NZW1vcnlQYXlwYWxTZXJ2aWNlIGltcGxlbWVudHMgRGFmZlBheXBhbFNlcnZpY2VJbnRlcmZhY2U8RGFmZlBheXBhbFRva2VuUmVxdWVzdCwgRGFmZlBheXBhbFRva2VuUmVzcG9uc2U+IHtcbiAgdXJsID0gJy9hcGkvcGF5cGFsLyc7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBodHRwOiBIdHRwQ2xpZW50KSB7fVxuXG4gIGdlbmVyYXRlVG9rZW4odG9rZW5SZXF1ZXN0OiBEYWZmUGF5cGFsVG9rZW5SZXF1ZXN0KTogT2JzZXJ2YWJsZTxEYWZmUGF5cGFsVG9rZW5SZXNwb25zZT4ge1xuICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0PERhZmZQYXlwYWxUb2tlblJlc3BvbnNlPih0aGlzLnVybCArIHRva2VuUmVxdWVzdC5jYXJ0SWQpO1xuICB9XG59XG4iXX0=