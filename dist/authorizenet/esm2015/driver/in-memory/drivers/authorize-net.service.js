/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
export class DaffInMemoryAuthorizeNetService {
    /**
     * @param {?} http
     */
    constructor(http) {
        this.http = http;
        this.url = '/api/authorizenet';
    }
    /**
     * @param {?} paymentTokenRequest
     * @return {?}
     */
    generateToken(paymentTokenRequest) {
        return this.http.post(this.url + '/generateToken', paymentTokenRequest);
    }
}
DaffInMemoryAuthorizeNetService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
DaffInMemoryAuthorizeNetService.ctorParameters = () => [
    { type: HttpClient }
];
/** @nocollapse */ DaffInMemoryAuthorizeNetService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function DaffInMemoryAuthorizeNetService_Factory() { return new DaffInMemoryAuthorizeNetService(i0.ɵɵinject(i1.HttpClient)); }, token: DaffInMemoryAuthorizeNetService, providedIn: "root" });
if (false) {
    /** @type {?} */
    DaffInMemoryAuthorizeNetService.prototype.url;
    /**
     * @type {?}
     * @private
     */
    DaffInMemoryAuthorizeNetService.prototype.http;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aG9yaXplLW5ldC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRhZmZvZGlsL2F1dGhvcml6ZW5ldC9kcml2ZXIvaW4tbWVtb3J5LyIsInNvdXJjZXMiOlsiZHJpdmVycy9hdXRob3JpemUtbmV0LnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLHNCQUFzQixDQUFDOzs7QUFTbEQsTUFBTSxPQUFPLCtCQUErQjs7OztJQUcxQyxZQUFvQixJQUFnQjtRQUFoQixTQUFJLEdBQUosSUFBSSxDQUFZO1FBRnBDLFFBQUcsR0FBRyxtQkFBbUIsQ0FBQztJQUVhLENBQUM7Ozs7O0lBRXhDLGFBQWEsQ0FBQyxtQkFBaUQ7UUFDN0QsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBK0IsSUFBSSxDQUFDLEdBQUcsR0FBRyxnQkFBZ0IsRUFBRSxtQkFBbUIsQ0FBQyxDQUFDO0lBQ3hHLENBQUM7OztZQVZGLFVBQVUsU0FBQztnQkFDVixVQUFVLEVBQUUsTUFBTTthQUNuQjs7OztZQVJRLFVBQVU7Ozs7O0lBVWpCLDhDQUEwQjs7Ozs7SUFFZCwrQ0FBd0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBIdHRwQ2xpZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuXG5pbXBvcnQgeyBEYWZmQXV0aG9yaXplTmV0VG9rZW5SZXF1ZXN0IH0gZnJvbSAnQGRhZmZvZGlsL2F1dGhvcml6ZW5ldCc7XG5pbXBvcnQgeyBEYWZmQXV0aG9yaXplTmV0U2VydmljZSB9IGZyb20gJ0BkYWZmb2RpbC9hdXRob3JpemVuZXQvZHJpdmVyJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgRGFmZkluTWVtb3J5QXV0aG9yaXplTmV0U2VydmljZSBpbXBsZW1lbnRzIERhZmZBdXRob3JpemVOZXRTZXJ2aWNlPERhZmZBdXRob3JpemVOZXRUb2tlblJlcXVlc3Q+IHtcbiAgdXJsID0gJy9hcGkvYXV0aG9yaXplbmV0JztcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGh0dHA6IEh0dHBDbGllbnQpIHt9XG5cbiAgZ2VuZXJhdGVUb2tlbihwYXltZW50VG9rZW5SZXF1ZXN0OiBEYWZmQXV0aG9yaXplTmV0VG9rZW5SZXF1ZXN0KTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICByZXR1cm4gdGhpcy5odHRwLnBvc3Q8RGFmZkF1dGhvcml6ZU5ldFRva2VuUmVxdWVzdD4odGhpcy51cmwgKyAnL2dlbmVyYXRlVG9rZW4nLCBwYXltZW50VG9rZW5SZXF1ZXN0KTtcbiAgfVxufVxuIl19