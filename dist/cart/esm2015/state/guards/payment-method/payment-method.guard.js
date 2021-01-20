/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Router } from '@angular/router';
import { Injectable, Inject } from '@angular/core';
import { tap, take } from 'rxjs/operators';
import { DaffCartFacade } from '../../facades/cart/cart.facade';
import { DaffCartPaymentMethodGuardRedirectUrl } from './payment-method-guard-redirect.token';
import * as i0 from "@angular/core";
import * as i1 from "../../facades/cart/cart.facade";
import * as i2 from "@angular/router";
import * as i3 from "./payment-method-guard-redirect.token";
/**
 * A routing guard that will redirect to a given url if the payment method on the cart is not defined.
 * The url is `/` by default, but can be overridden with the DaffCartPaymentMethodGuardRedirectUrl injection token.
 * The guard will not wait until the cart has been resolved before performing the check and emitting.
 * Ensure that the cart is resolved prior to running this guard with the {\@link DaffResolvedCartGuard}.
 */
export class DaffPaymentMethodGuard {
    /**
     * @param {?} facade
     * @param {?} router
     * @param {?} redirectUrl
     */
    constructor(facade, router, redirectUrl) {
        this.facade = facade;
        this.router = router;
        this.redirectUrl = redirectUrl;
    }
    /**
     * @return {?}
     */
    canActivate() {
        return this.facade.hasPaymentMethod$.pipe(take(1), tap((/**
         * @param {?} hasPaymentMethod
         * @return {?}
         */
        hasPaymentMethod => {
            if (!hasPaymentMethod) {
                this.router.navigateByUrl(this.redirectUrl);
            }
        })));
    }
}
DaffPaymentMethodGuard.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
DaffPaymentMethodGuard.ctorParameters = () => [
    { type: DaffCartFacade },
    { type: Router },
    { type: String, decorators: [{ type: Inject, args: [DaffCartPaymentMethodGuardRedirectUrl,] }] }
];
/** @nocollapse */ DaffPaymentMethodGuard.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function DaffPaymentMethodGuard_Factory() { return new DaffPaymentMethodGuard(i0.ɵɵinject(i1.DaffCartFacade), i0.ɵɵinject(i2.Router), i0.ɵɵinject(i3.DaffCartPaymentMethodGuardRedirectUrl)); }, token: DaffPaymentMethodGuard, providedIn: "root" });
if (false) {
    /**
     * @type {?}
     * @private
     */
    DaffPaymentMethodGuard.prototype.facade;
    /**
     * @type {?}
     * @private
     */
    DaffPaymentMethodGuard.prototype.router;
    /**
     * @type {?}
     * @private
     */
    DaffPaymentMethodGuard.prototype.redirectUrl;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGF5bWVudC1tZXRob2QuZ3VhcmQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGFmZm9kaWwvY2FydC9zdGF0ZS8iLCJzb3VyY2VzIjpbImd1YXJkcy9wYXltZW50LW1ldGhvZC9wYXltZW50LW1ldGhvZC5ndWFyZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFlLE1BQU0sRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBRXRELE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ25ELE9BQU8sRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFM0MsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBQ2hFLE9BQU8sRUFBRSxxQ0FBcUMsRUFBRSxNQUFNLHVDQUF1QyxDQUFDOzs7Ozs7Ozs7OztBQVc5RixNQUFNLE9BQU8sc0JBQXNCOzs7Ozs7SUFDakMsWUFDUSxNQUFzQixFQUN0QixNQUFjLEVBQ2lDLFdBQW1CO1FBRmxFLFdBQU0sR0FBTixNQUFNLENBQWdCO1FBQ3RCLFdBQU0sR0FBTixNQUFNLENBQVE7UUFDaUMsZ0JBQVcsR0FBWCxXQUFXLENBQVE7SUFDeEUsQ0FBQzs7OztJQUVILFdBQVc7UUFDVCxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUN2QyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQ1YsR0FBRzs7OztRQUFDLGdCQUFnQixDQUFDLEVBQUU7WUFDdEIsSUFBSSxDQUFDLGdCQUFnQixFQUFFO2dCQUN0QixJQUFJLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUE7YUFDM0M7UUFDRixDQUFDLEVBQUMsQ0FDRixDQUFBO0lBQ0QsQ0FBQzs7O1lBbkJGLFVBQVUsU0FBQztnQkFDWCxVQUFVLEVBQUUsTUFBTTthQUNsQjs7OztZQVhRLGNBQWM7WUFMRCxNQUFNO3lDQXFCekIsTUFBTSxTQUFDLHFDQUFxQzs7Ozs7Ozs7SUFGN0Msd0NBQThCOzs7OztJQUM5Qix3Q0FBc0I7Ozs7O0lBQ3RCLDZDQUEwRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENhbkFjdGl2YXRlLCBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgSW5qZWN0YWJsZSwgSW5qZWN0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyB0YXAsIHRha2UgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmltcG9ydCB7IERhZmZDYXJ0RmFjYWRlIH0gZnJvbSAnLi4vLi4vZmFjYWRlcy9jYXJ0L2NhcnQuZmFjYWRlJztcbmltcG9ydCB7IERhZmZDYXJ0UGF5bWVudE1ldGhvZEd1YXJkUmVkaXJlY3RVcmwgfSBmcm9tICcuL3BheW1lbnQtbWV0aG9kLWd1YXJkLXJlZGlyZWN0LnRva2VuJztcblxuLyoqXG4gKiBBIHJvdXRpbmcgZ3VhcmQgdGhhdCB3aWxsIHJlZGlyZWN0IHRvIGEgZ2l2ZW4gdXJsIGlmIHRoZSBwYXltZW50IG1ldGhvZCBvbiB0aGUgY2FydCBpcyBub3QgZGVmaW5lZC5cbiAqIFRoZSB1cmwgaXMgYC9gIGJ5IGRlZmF1bHQsIGJ1dCBjYW4gYmUgb3ZlcnJpZGRlbiB3aXRoIHRoZSBEYWZmQ2FydFBheW1lbnRNZXRob2RHdWFyZFJlZGlyZWN0VXJsIGluamVjdGlvbiB0b2tlbi5cbiAqIFRoZSBndWFyZCB3aWxsIG5vdCB3YWl0IHVudGlsIHRoZSBjYXJ0IGhhcyBiZWVuIHJlc29sdmVkIGJlZm9yZSBwZXJmb3JtaW5nIHRoZSBjaGVjayBhbmQgZW1pdHRpbmcuXG4gKiBFbnN1cmUgdGhhdCB0aGUgY2FydCBpcyByZXNvbHZlZCBwcmlvciB0byBydW5uaW5nIHRoaXMgZ3VhcmQgd2l0aCB0aGUge0BsaW5rIERhZmZSZXNvbHZlZENhcnRHdWFyZH0uXG4gKi9cbkBJbmplY3RhYmxlKHtcblx0cHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIERhZmZQYXltZW50TWV0aG9kR3VhcmQgaW1wbGVtZW50cyBDYW5BY3RpdmF0ZSB7XG4gIGNvbnN0cnVjdG9yKFxuXHRcdHByaXZhdGUgZmFjYWRlOiBEYWZmQ2FydEZhY2FkZSxcblx0XHRwcml2YXRlIHJvdXRlcjogUm91dGVyLFxuXHRcdEBJbmplY3QoRGFmZkNhcnRQYXltZW50TWV0aG9kR3VhcmRSZWRpcmVjdFVybCkgcHJpdmF0ZSByZWRpcmVjdFVybDogc3RyaW5nXG5cdCkge31cblxuICBjYW5BY3RpdmF0ZSgpOiBPYnNlcnZhYmxlPGJvb2xlYW4+IHtcbiAgICByZXR1cm4gdGhpcy5mYWNhZGUuaGFzUGF5bWVudE1ldGhvZCQucGlwZShcbiAgICAgIHRha2UoMSksXG5cdFx0XHR0YXAoaGFzUGF5bWVudE1ldGhvZCA9PiB7XG5cdFx0XHRcdGlmICghaGFzUGF5bWVudE1ldGhvZCkge1xuXHRcdFx0XHRcdHRoaXMucm91dGVyLm5hdmlnYXRlQnlVcmwodGhpcy5yZWRpcmVjdFVybClcblx0XHRcdFx0fVxuXHRcdFx0fSlcblx0XHQpXG4gIH1cbn1cbiJdfQ==