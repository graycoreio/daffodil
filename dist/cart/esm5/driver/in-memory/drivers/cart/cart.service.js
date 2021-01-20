/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { DaffCartNotFoundError } from '@daffodil/cart/driver';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
var DaffInMemoryCartService = /** @class */ (function () {
    function DaffInMemoryCartService(http) {
        this.http = http;
        this.url = '/api/cart';
    }
    /**
     * @param {?} cartId
     * @return {?}
     */
    DaffInMemoryCartService.prototype.get = /**
     * @param {?} cartId
     * @return {?}
     */
    function (cartId) {
        return this.http.get(this.url + "/" + cartId).pipe(catchError((/**
         * @param {?} error
         * @return {?}
         */
        function (error) { return throwError(DaffCartNotFoundError); })), map((/**
         * @param {?} result
         * @return {?}
         */
        function (result) { return result; })));
    };
    /**
     * @param {?} productId
     * @param {?} qty
     * @return {?}
     */
    DaffInMemoryCartService.prototype.addToCart = /**
     * @param {?} productId
     * @param {?} qty
     * @return {?}
     */
    function (productId, qty) {
        return this.http.post(this.url + '/addToCart', { productId: productId, qty: qty });
    };
    /**
     * @param {?} cartId
     * @return {?}
     */
    DaffInMemoryCartService.prototype.clear = /**
     * @param {?} cartId
     * @return {?}
     */
    function (cartId) {
        return this.http.post(this.url + "/" + cartId + "/clear", {});
    };
    /**
     * @return {?}
     */
    DaffInMemoryCartService.prototype.create = /**
     * @return {?}
     */
    function () {
        return this.http.post(this.url, {});
    };
    DaffInMemoryCartService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    DaffInMemoryCartService.ctorParameters = function () { return [
        { type: HttpClient }
    ]; };
    /** @nocollapse */ DaffInMemoryCartService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function DaffInMemoryCartService_Factory() { return new DaffInMemoryCartService(i0.ɵɵinject(i1.HttpClient)); }, token: DaffInMemoryCartService, providedIn: "root" });
    return DaffInMemoryCartService;
}());
export { DaffInMemoryCartService };
if (false) {
    /** @type {?} */
    DaffInMemoryCartService.prototype.url;
    /**
     * @type {?}
     * @private
     */
    DaffInMemoryCartService.prototype.http;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FydC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRhZmZvZGlsL2NhcnQvZHJpdmVyL2luLW1lbW9yeS8iLCJzb3VyY2VzIjpbImRyaXZlcnMvY2FydC9jYXJ0LnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ2xELE9BQU8sRUFBYyxVQUFVLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDOUMsT0FBTyxFQUFFLFVBQVUsRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUdqRCxPQUFPLEVBQTRCLHFCQUFxQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7OztBQUV4RjtJQU1FLGlDQUFvQixJQUFnQjtRQUFoQixTQUFJLEdBQUosSUFBSSxDQUFZO1FBRnBDLFFBQUcsR0FBRyxXQUFXLENBQUM7SUFFcUIsQ0FBQzs7Ozs7SUFFeEMscUNBQUc7Ozs7SUFBSCxVQUFJLE1BQXNCO1FBQ3hCLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQWMsSUFBSSxDQUFDLEdBQUcsU0FBSSxNQUFRLENBQUMsQ0FBQyxJQUFJLENBQzdELFVBQVU7Ozs7UUFBQyxVQUFDLEtBQVksSUFBSyxPQUFBLFVBQVUsQ0FBQyxxQkFBcUIsQ0FBQyxFQUFqQyxDQUFpQyxFQUFDLEVBQy9ELEdBQUc7Ozs7UUFBQyxVQUFBLE1BQU0sSUFBSSxPQUFBLE1BQU0sRUFBTixDQUFNLEVBQUMsQ0FDckIsQ0FBQztJQUNGLENBQUM7Ozs7OztJQUVELDJDQUFTOzs7OztJQUFULFVBQVUsU0FBaUIsRUFBRSxHQUFXO1FBQ3RDLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQVcsSUFBSSxDQUFDLEdBQUcsR0FBRyxZQUFZLEVBQUUsRUFBRSxTQUFTLFdBQUEsRUFBRSxHQUFHLEtBQUEsRUFBRSxDQUFDLENBQUM7SUFDL0UsQ0FBQzs7Ozs7SUFFRCx1Q0FBSzs7OztJQUFMLFVBQU0sTUFBc0I7UUFDMUIsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBdUIsSUFBSSxDQUFDLEdBQUcsU0FBSSxNQUFNLFdBQVEsRUFBRSxFQUFFLENBQUMsQ0FBQztJQUM5RSxDQUFDOzs7O0lBRUQsd0NBQU07OztJQUFOO1FBQ0UsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBdUIsSUFBSSxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUMsQ0FBQztJQUM1RCxDQUFDOztnQkF6QkYsVUFBVSxTQUFDO29CQUNWLFVBQVUsRUFBRSxNQUFNO2lCQUNuQjs7OztnQkFUUSxVQUFVOzs7a0NBRG5CO0NBa0NDLEFBMUJELElBMEJDO1NBdkJZLHVCQUF1Qjs7O0lBQ2xDLHNDQUFrQjs7Ozs7SUFFTix1Q0FBd0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBIdHRwQ2xpZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgdGhyb3dFcnJvciB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgY2F0Y2hFcnJvciwgbWFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5pbXBvcnQgeyBEYWZmQ2FydCB9IGZyb20gJ0BkYWZmb2RpbC9jYXJ0JztcbmltcG9ydCB7IERhZmZDYXJ0U2VydmljZUludGVyZmFjZSwgRGFmZkNhcnROb3RGb3VuZEVycm9yIH0gZnJvbSAnQGRhZmZvZGlsL2NhcnQvZHJpdmVyJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgRGFmZkluTWVtb3J5Q2FydFNlcnZpY2UgaW1wbGVtZW50cyBEYWZmQ2FydFNlcnZpY2VJbnRlcmZhY2U8RGFmZkNhcnQ+IHtcbiAgdXJsID0gJy9hcGkvY2FydCc7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBodHRwOiBIdHRwQ2xpZW50KSB7fVxuXG4gIGdldChjYXJ0SWQ6IERhZmZDYXJ0WydpZCddKTogT2JzZXJ2YWJsZTxEYWZmQ2FydD4ge1xuICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0PERhZmZDYXJ0PihgJHt0aGlzLnVybH0vJHtjYXJ0SWR9YCkucGlwZShcblx0XHRcdGNhdGNoRXJyb3IoKGVycm9yOiBFcnJvcikgPT4gdGhyb3dFcnJvcihEYWZmQ2FydE5vdEZvdW5kRXJyb3IpKSxcblx0XHRcdG1hcChyZXN1bHQgPT4gcmVzdWx0KVxuXHRcdCk7XG4gIH1cblxuICBhZGRUb0NhcnQocHJvZHVjdElkOiBzdHJpbmcsIHF0eTogbnVtYmVyKTogT2JzZXJ2YWJsZTxEYWZmQ2FydD4ge1xuICAgIHJldHVybiB0aGlzLmh0dHAucG9zdDxEYWZmQ2FydD4odGhpcy51cmwgKyAnL2FkZFRvQ2FydCcsIHsgcHJvZHVjdElkLCBxdHkgfSk7XG4gIH1cblxuICBjbGVhcihjYXJ0SWQ6IERhZmZDYXJ0WydpZCddKTogT2JzZXJ2YWJsZTxQYXJ0aWFsPERhZmZDYXJ0Pj4ge1xuICAgIHJldHVybiB0aGlzLmh0dHAucG9zdDxQYXJ0aWFsPERhZmZDYXJ0Pj4oYCR7dGhpcy51cmx9LyR7Y2FydElkfS9jbGVhcmAsIHt9KTtcbiAgfVxuXG4gIGNyZWF0ZSgpOiBPYnNlcnZhYmxlPHtpZDogRGFmZkNhcnRbJ2lkJ119PiB7XG4gICAgcmV0dXJuIHRoaXMuaHR0cC5wb3N0PHtpZDogRGFmZkNhcnRbJ2lkJ119Pih0aGlzLnVybCwge30pO1xuICB9XG59XG4iXX0=