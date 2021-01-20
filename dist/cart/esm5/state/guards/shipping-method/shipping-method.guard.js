/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Router } from '@angular/router';
import { Injectable, Inject } from '@angular/core';
import { tap, take } from 'rxjs/operators';
import { DaffCartFacade } from '../../facades/cart/cart.facade';
import { DaffCartShippingMethodGuardRedirectUrl } from './shipping-method-guard-redirect.token';
import * as i0 from "@angular/core";
import * as i1 from "../../facades/cart/cart.facade";
import * as i2 from "@angular/router";
import * as i3 from "./shipping-method-guard-redirect.token";
/**
 * A routing guard that will redirect to a given url if the shipping method on the cart is not defined.
 * The url is `/` by default, but can be overridden with the DaffCartShippingMethodGuardRedirectUrl injection token.
 * The guard will not wait until the cart has been resolved before performing the check and emitting.
 * Ensure that the cart is resolved prior to running this guard with the {\@link DaffResolvedCartGuard}.
 */
var DaffShippingMethodGuard = /** @class */ (function () {
    function DaffShippingMethodGuard(facade, router, redirectUrl) {
        this.facade = facade;
        this.router = router;
        this.redirectUrl = redirectUrl;
    }
    /**
     * @return {?}
     */
    DaffShippingMethodGuard.prototype.canActivate = /**
     * @return {?}
     */
    function () {
        var _this = this;
        return this.facade.hasShippingMethod$.pipe(take(1), tap((/**
         * @param {?} hasShippingMethod
         * @return {?}
         */
        function (hasShippingMethod) {
            if (!hasShippingMethod) {
                _this.router.navigateByUrl(_this.redirectUrl);
            }
        })));
    };
    DaffShippingMethodGuard.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    DaffShippingMethodGuard.ctorParameters = function () { return [
        { type: DaffCartFacade },
        { type: Router },
        { type: String, decorators: [{ type: Inject, args: [DaffCartShippingMethodGuardRedirectUrl,] }] }
    ]; };
    /** @nocollapse */ DaffShippingMethodGuard.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function DaffShippingMethodGuard_Factory() { return new DaffShippingMethodGuard(i0.ɵɵinject(i1.DaffCartFacade), i0.ɵɵinject(i2.Router), i0.ɵɵinject(i3.DaffCartShippingMethodGuardRedirectUrl)); }, token: DaffShippingMethodGuard, providedIn: "root" });
    return DaffShippingMethodGuard;
}());
export { DaffShippingMethodGuard };
if (false) {
    /**
     * @type {?}
     * @private
     */
    DaffShippingMethodGuard.prototype.facade;
    /**
     * @type {?}
     * @private
     */
    DaffShippingMethodGuard.prototype.router;
    /**
     * @type {?}
     * @private
     */
    DaffShippingMethodGuard.prototype.redirectUrl;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2hpcHBpbmctbWV0aG9kLmd1YXJkLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRhZmZvZGlsL2NhcnQvc3RhdGUvIiwic291cmNlcyI6WyJndWFyZHMvc2hpcHBpbmctbWV0aG9kL3NoaXBwaW5nLW1ldGhvZC5ndWFyZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFlLE1BQU0sRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBRXRELE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ25ELE9BQU8sRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFM0MsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBQ2hFLE9BQU8sRUFBRSxzQ0FBc0MsRUFBRSxNQUFNLHdDQUF3QyxDQUFDOzs7Ozs7Ozs7OztBQVFoRztJQUlFLGlDQUNRLE1BQXNCLEVBQ3RCLE1BQWMsRUFDa0MsV0FBbUI7UUFGbkUsV0FBTSxHQUFOLE1BQU0sQ0FBZ0I7UUFDdEIsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUNrQyxnQkFBVyxHQUFYLFdBQVcsQ0FBUTtJQUN6RSxDQUFDOzs7O0lBRUgsNkNBQVc7OztJQUFYO1FBQUEsaUJBU0M7UUFSQyxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUN4QyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQ1YsR0FBRzs7OztRQUFDLFVBQUEsaUJBQWlCO1lBQ3BCLElBQUksQ0FBQyxpQkFBaUIsRUFBRTtnQkFDdkIsS0FBSSxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUMsS0FBSSxDQUFDLFdBQVcsQ0FBQyxDQUFBO2FBQzNDO1FBQ0YsQ0FBQyxFQUFDLENBQ0YsQ0FBQTtJQUNELENBQUM7O2dCQW5CRixVQUFVLFNBQUM7b0JBQ1gsVUFBVSxFQUFFLE1BQU07aUJBQ2xCOzs7O2dCQVhRLGNBQWM7Z0JBTEQsTUFBTTs2Q0FxQnpCLE1BQU0sU0FBQyxzQ0FBc0M7OztrQ0FyQmhEO0NBa0NDLEFBcEJELElBb0JDO1NBakJZLHVCQUF1Qjs7Ozs7O0lBRWxDLHlDQUE4Qjs7Ozs7SUFDOUIseUNBQXNCOzs7OztJQUN0Qiw4Q0FBMkUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDYW5BY3RpdmF0ZSwgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IEluamVjdGFibGUsIEluamVjdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgdGFwLCB0YWtlIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5pbXBvcnQgeyBEYWZmQ2FydEZhY2FkZSB9IGZyb20gJy4uLy4uL2ZhY2FkZXMvY2FydC9jYXJ0LmZhY2FkZSc7XG5pbXBvcnQgeyBEYWZmQ2FydFNoaXBwaW5nTWV0aG9kR3VhcmRSZWRpcmVjdFVybCB9IGZyb20gJy4vc2hpcHBpbmctbWV0aG9kLWd1YXJkLXJlZGlyZWN0LnRva2VuJztcblxuLyoqXG4gKiBBIHJvdXRpbmcgZ3VhcmQgdGhhdCB3aWxsIHJlZGlyZWN0IHRvIGEgZ2l2ZW4gdXJsIGlmIHRoZSBzaGlwcGluZyBtZXRob2Qgb24gdGhlIGNhcnQgaXMgbm90IGRlZmluZWQuXG4gKiBUaGUgdXJsIGlzIGAvYCBieSBkZWZhdWx0LCBidXQgY2FuIGJlIG92ZXJyaWRkZW4gd2l0aCB0aGUgRGFmZkNhcnRTaGlwcGluZ01ldGhvZEd1YXJkUmVkaXJlY3RVcmwgaW5qZWN0aW9uIHRva2VuLlxuICogVGhlIGd1YXJkIHdpbGwgbm90IHdhaXQgdW50aWwgdGhlIGNhcnQgaGFzIGJlZW4gcmVzb2x2ZWQgYmVmb3JlIHBlcmZvcm1pbmcgdGhlIGNoZWNrIGFuZCBlbWl0dGluZy5cbiAqIEVuc3VyZSB0aGF0IHRoZSBjYXJ0IGlzIHJlc29sdmVkIHByaW9yIHRvIHJ1bm5pbmcgdGhpcyBndWFyZCB3aXRoIHRoZSB7QGxpbmsgRGFmZlJlc29sdmVkQ2FydEd1YXJkfS5cbiAqL1xuQEluamVjdGFibGUoe1xuXHRwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgRGFmZlNoaXBwaW5nTWV0aG9kR3VhcmQgaW1wbGVtZW50cyBDYW5BY3RpdmF0ZSB7XG4gIGNvbnN0cnVjdG9yKFxuXHRcdHByaXZhdGUgZmFjYWRlOiBEYWZmQ2FydEZhY2FkZSxcblx0XHRwcml2YXRlIHJvdXRlcjogUm91dGVyLFxuXHRcdEBJbmplY3QoRGFmZkNhcnRTaGlwcGluZ01ldGhvZEd1YXJkUmVkaXJlY3RVcmwpIHByaXZhdGUgcmVkaXJlY3RVcmw6IHN0cmluZ1xuXHQpIHt9XG5cbiAgY2FuQWN0aXZhdGUoKTogT2JzZXJ2YWJsZTxib29sZWFuPiB7XG4gICAgcmV0dXJuIHRoaXMuZmFjYWRlLmhhc1NoaXBwaW5nTWV0aG9kJC5waXBlKFxuICAgICAgdGFrZSgxKSxcblx0XHRcdHRhcChoYXNTaGlwcGluZ01ldGhvZCA9PiB7XG5cdFx0XHRcdGlmICghaGFzU2hpcHBpbmdNZXRob2QpIHtcblx0XHRcdFx0XHR0aGlzLnJvdXRlci5uYXZpZ2F0ZUJ5VXJsKHRoaXMucmVkaXJlY3RVcmwpXG5cdFx0XHRcdH1cblx0XHRcdH0pXG5cdFx0KVxuICB9XG59XG4iXX0=