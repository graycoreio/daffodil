/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Router } from '@angular/router';
import { Injectable, Inject } from '@angular/core';
import { tap, take } from 'rxjs/operators';
import { DaffCartFacade } from '../../facades/cart/cart.facade';
import { DaffCartBillingAddressGuardRedirectUrl } from './billing-address-guard-redirect.token';
import * as i0 from "@angular/core";
import * as i1 from "../../facades/cart/cart.facade";
import * as i2 from "@angular/router";
import * as i3 from "./billing-address-guard-redirect.token";
/**
 * A routing guard that will redirect to a given url if the billing address on the cart is not defined.
 * The url is `/` by default, but can be overridden with the DaffCartBillingAddressGuardRedirectUrl injection token.
 * The guard will not wait until the cart has been resolved before performing the check and emitting.
 * Ensure that the cart is resolved prior to running this guard with the {\@link DaffResolvedCartGuard}.
 */
var DaffBillingAddressGuard = /** @class */ (function () {
    function DaffBillingAddressGuard(facade, router, redirectUrl) {
        this.facade = facade;
        this.router = router;
        this.redirectUrl = redirectUrl;
    }
    /**
     * @return {?}
     */
    DaffBillingAddressGuard.prototype.canActivate = /**
     * @return {?}
     */
    function () {
        var _this = this;
        return this.facade.hasBillingAddress$.pipe(take(1), tap((/**
         * @param {?} hasBillingAddress
         * @return {?}
         */
        function (hasBillingAddress) {
            if (!hasBillingAddress) {
                _this.router.navigateByUrl(_this.redirectUrl);
            }
        })));
    };
    DaffBillingAddressGuard.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    DaffBillingAddressGuard.ctorParameters = function () { return [
        { type: DaffCartFacade },
        { type: Router },
        { type: String, decorators: [{ type: Inject, args: [DaffCartBillingAddressGuardRedirectUrl,] }] }
    ]; };
    /** @nocollapse */ DaffBillingAddressGuard.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function DaffBillingAddressGuard_Factory() { return new DaffBillingAddressGuard(i0.ɵɵinject(i1.DaffCartFacade), i0.ɵɵinject(i2.Router), i0.ɵɵinject(i3.DaffCartBillingAddressGuardRedirectUrl)); }, token: DaffBillingAddressGuard, providedIn: "root" });
    return DaffBillingAddressGuard;
}());
export { DaffBillingAddressGuard };
if (false) {
    /**
     * @type {?}
     * @private
     */
    DaffBillingAddressGuard.prototype.facade;
    /**
     * @type {?}
     * @private
     */
    DaffBillingAddressGuard.prototype.router;
    /**
     * @type {?}
     * @private
     */
    DaffBillingAddressGuard.prototype.redirectUrl;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmlsbGluZy1hZGRyZXNzLmd1YXJkLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRhZmZvZGlsL2NhcnQvc3RhdGUvIiwic291cmNlcyI6WyJndWFyZHMvYmlsbGluZy1hZGRyZXNzL2JpbGxpbmctYWRkcmVzcy5ndWFyZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFlLE1BQU0sRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBRXRELE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ25ELE9BQU8sRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFM0MsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBQ2hFLE9BQU8sRUFBRSxzQ0FBc0MsRUFBRSxNQUFNLHdDQUF3QyxDQUFDOzs7Ozs7Ozs7OztBQVFoRztJQUlFLGlDQUNRLE1BQXNCLEVBQ3RCLE1BQWMsRUFDa0MsV0FBbUI7UUFGbkUsV0FBTSxHQUFOLE1BQU0sQ0FBZ0I7UUFDdEIsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUNrQyxnQkFBVyxHQUFYLFdBQVcsQ0FBUTtJQUN6RSxDQUFDOzs7O0lBRUgsNkNBQVc7OztJQUFYO1FBQUEsaUJBU0M7UUFSQyxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUN4QyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQ1YsR0FBRzs7OztRQUFDLFVBQUEsaUJBQWlCO1lBQ3BCLElBQUksQ0FBQyxpQkFBaUIsRUFBRTtnQkFDdkIsS0FBSSxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUMsS0FBSSxDQUFDLFdBQVcsQ0FBQyxDQUFBO2FBQzNDO1FBQ0YsQ0FBQyxFQUFDLENBQ0YsQ0FBQTtJQUNELENBQUM7O2dCQW5CRixVQUFVLFNBQUM7b0JBQ1gsVUFBVSxFQUFFLE1BQU07aUJBQ2xCOzs7O2dCQVhRLGNBQWM7Z0JBTEQsTUFBTTs2Q0FxQnpCLE1BQU0sU0FBQyxzQ0FBc0M7OztrQ0FyQmhEO0NBa0NDLEFBcEJELElBb0JDO1NBakJZLHVCQUF1Qjs7Ozs7O0lBRWxDLHlDQUE4Qjs7Ozs7SUFDOUIseUNBQXNCOzs7OztJQUN0Qiw4Q0FBMkUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDYW5BY3RpdmF0ZSwgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IEluamVjdGFibGUsIEluamVjdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgdGFwLCB0YWtlIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5pbXBvcnQgeyBEYWZmQ2FydEZhY2FkZSB9IGZyb20gJy4uLy4uL2ZhY2FkZXMvY2FydC9jYXJ0LmZhY2FkZSc7XG5pbXBvcnQgeyBEYWZmQ2FydEJpbGxpbmdBZGRyZXNzR3VhcmRSZWRpcmVjdFVybCB9IGZyb20gJy4vYmlsbGluZy1hZGRyZXNzLWd1YXJkLXJlZGlyZWN0LnRva2VuJztcblxuLyoqXG4gKiBBIHJvdXRpbmcgZ3VhcmQgdGhhdCB3aWxsIHJlZGlyZWN0IHRvIGEgZ2l2ZW4gdXJsIGlmIHRoZSBiaWxsaW5nIGFkZHJlc3Mgb24gdGhlIGNhcnQgaXMgbm90IGRlZmluZWQuXG4gKiBUaGUgdXJsIGlzIGAvYCBieSBkZWZhdWx0LCBidXQgY2FuIGJlIG92ZXJyaWRkZW4gd2l0aCB0aGUgRGFmZkNhcnRCaWxsaW5nQWRkcmVzc0d1YXJkUmVkaXJlY3RVcmwgaW5qZWN0aW9uIHRva2VuLlxuICogVGhlIGd1YXJkIHdpbGwgbm90IHdhaXQgdW50aWwgdGhlIGNhcnQgaGFzIGJlZW4gcmVzb2x2ZWQgYmVmb3JlIHBlcmZvcm1pbmcgdGhlIGNoZWNrIGFuZCBlbWl0dGluZy5cbiAqIEVuc3VyZSB0aGF0IHRoZSBjYXJ0IGlzIHJlc29sdmVkIHByaW9yIHRvIHJ1bm5pbmcgdGhpcyBndWFyZCB3aXRoIHRoZSB7QGxpbmsgRGFmZlJlc29sdmVkQ2FydEd1YXJkfS5cbiAqL1xuQEluamVjdGFibGUoe1xuXHRwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgRGFmZkJpbGxpbmdBZGRyZXNzR3VhcmQgaW1wbGVtZW50cyBDYW5BY3RpdmF0ZSB7XG4gIGNvbnN0cnVjdG9yKFxuXHRcdHByaXZhdGUgZmFjYWRlOiBEYWZmQ2FydEZhY2FkZSxcblx0XHRwcml2YXRlIHJvdXRlcjogUm91dGVyLFxuXHRcdEBJbmplY3QoRGFmZkNhcnRCaWxsaW5nQWRkcmVzc0d1YXJkUmVkaXJlY3RVcmwpIHByaXZhdGUgcmVkaXJlY3RVcmw6IHN0cmluZ1xuXHQpIHt9XG5cbiAgY2FuQWN0aXZhdGUoKTogT2JzZXJ2YWJsZTxib29sZWFuPiB7XG4gICAgcmV0dXJuIHRoaXMuZmFjYWRlLmhhc0JpbGxpbmdBZGRyZXNzJC5waXBlKFxuICAgICAgdGFrZSgxKSxcblx0XHRcdHRhcChoYXNCaWxsaW5nQWRkcmVzcyA9PiB7XG5cdFx0XHRcdGlmICghaGFzQmlsbGluZ0FkZHJlc3MpIHtcblx0XHRcdFx0XHR0aGlzLnJvdXRlci5uYXZpZ2F0ZUJ5VXJsKHRoaXMucmVkaXJlY3RVcmwpXG5cdFx0XHRcdH1cblx0XHRcdH0pXG5cdFx0KVxuICB9XG59XG4iXX0=