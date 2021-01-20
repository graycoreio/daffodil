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
export class DaffBillingAddressGuard {
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
        return this.facade.hasBillingAddress$.pipe(take(1), tap((/**
         * @param {?} hasBillingAddress
         * @return {?}
         */
        hasBillingAddress => {
            if (!hasBillingAddress) {
                this.router.navigateByUrl(this.redirectUrl);
            }
        })));
    }
}
DaffBillingAddressGuard.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
DaffBillingAddressGuard.ctorParameters = () => [
    { type: DaffCartFacade },
    { type: Router },
    { type: String, decorators: [{ type: Inject, args: [DaffCartBillingAddressGuardRedirectUrl,] }] }
];
/** @nocollapse */ DaffBillingAddressGuard.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function DaffBillingAddressGuard_Factory() { return new DaffBillingAddressGuard(i0.ɵɵinject(i1.DaffCartFacade), i0.ɵɵinject(i2.Router), i0.ɵɵinject(i3.DaffCartBillingAddressGuardRedirectUrl)); }, token: DaffBillingAddressGuard, providedIn: "root" });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmlsbGluZy1hZGRyZXNzLmd1YXJkLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRhZmZvZGlsL2NhcnQvc3RhdGUvIiwic291cmNlcyI6WyJndWFyZHMvYmlsbGluZy1hZGRyZXNzL2JpbGxpbmctYWRkcmVzcy5ndWFyZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFlLE1BQU0sRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBRXRELE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ25ELE9BQU8sRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFM0MsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBQ2hFLE9BQU8sRUFBRSxzQ0FBc0MsRUFBRSxNQUFNLHdDQUF3QyxDQUFDOzs7Ozs7Ozs7OztBQVdoRyxNQUFNLE9BQU8sdUJBQXVCOzs7Ozs7SUFDbEMsWUFDUSxNQUFzQixFQUN0QixNQUFjLEVBQ2tDLFdBQW1CO1FBRm5FLFdBQU0sR0FBTixNQUFNLENBQWdCO1FBQ3RCLFdBQU0sR0FBTixNQUFNLENBQVE7UUFDa0MsZ0JBQVcsR0FBWCxXQUFXLENBQVE7SUFDekUsQ0FBQzs7OztJQUVILFdBQVc7UUFDVCxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUN4QyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQ1YsR0FBRzs7OztRQUFDLGlCQUFpQixDQUFDLEVBQUU7WUFDdkIsSUFBSSxDQUFDLGlCQUFpQixFQUFFO2dCQUN2QixJQUFJLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUE7YUFDM0M7UUFDRixDQUFDLEVBQUMsQ0FDRixDQUFBO0lBQ0QsQ0FBQzs7O1lBbkJGLFVBQVUsU0FBQztnQkFDWCxVQUFVLEVBQUUsTUFBTTthQUNsQjs7OztZQVhRLGNBQWM7WUFMRCxNQUFNO3lDQXFCekIsTUFBTSxTQUFDLHNDQUFzQzs7Ozs7Ozs7SUFGOUMseUNBQThCOzs7OztJQUM5Qix5Q0FBc0I7Ozs7O0lBQ3RCLDhDQUEyRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENhbkFjdGl2YXRlLCBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgSW5qZWN0YWJsZSwgSW5qZWN0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyB0YXAsIHRha2UgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmltcG9ydCB7IERhZmZDYXJ0RmFjYWRlIH0gZnJvbSAnLi4vLi4vZmFjYWRlcy9jYXJ0L2NhcnQuZmFjYWRlJztcbmltcG9ydCB7IERhZmZDYXJ0QmlsbGluZ0FkZHJlc3NHdWFyZFJlZGlyZWN0VXJsIH0gZnJvbSAnLi9iaWxsaW5nLWFkZHJlc3MtZ3VhcmQtcmVkaXJlY3QudG9rZW4nO1xuXG4vKipcbiAqIEEgcm91dGluZyBndWFyZCB0aGF0IHdpbGwgcmVkaXJlY3QgdG8gYSBnaXZlbiB1cmwgaWYgdGhlIGJpbGxpbmcgYWRkcmVzcyBvbiB0aGUgY2FydCBpcyBub3QgZGVmaW5lZC5cbiAqIFRoZSB1cmwgaXMgYC9gIGJ5IGRlZmF1bHQsIGJ1dCBjYW4gYmUgb3ZlcnJpZGRlbiB3aXRoIHRoZSBEYWZmQ2FydEJpbGxpbmdBZGRyZXNzR3VhcmRSZWRpcmVjdFVybCBpbmplY3Rpb24gdG9rZW4uXG4gKiBUaGUgZ3VhcmQgd2lsbCBub3Qgd2FpdCB1bnRpbCB0aGUgY2FydCBoYXMgYmVlbiByZXNvbHZlZCBiZWZvcmUgcGVyZm9ybWluZyB0aGUgY2hlY2sgYW5kIGVtaXR0aW5nLlxuICogRW5zdXJlIHRoYXQgdGhlIGNhcnQgaXMgcmVzb2x2ZWQgcHJpb3IgdG8gcnVubmluZyB0aGlzIGd1YXJkIHdpdGggdGhlIHtAbGluayBEYWZmUmVzb2x2ZWRDYXJ0R3VhcmR9LlxuICovXG5ASW5qZWN0YWJsZSh7XG5cdHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBEYWZmQmlsbGluZ0FkZHJlc3NHdWFyZCBpbXBsZW1lbnRzIENhbkFjdGl2YXRlIHtcbiAgY29uc3RydWN0b3IoXG5cdFx0cHJpdmF0ZSBmYWNhZGU6IERhZmZDYXJ0RmFjYWRlLFxuXHRcdHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsXG5cdFx0QEluamVjdChEYWZmQ2FydEJpbGxpbmdBZGRyZXNzR3VhcmRSZWRpcmVjdFVybCkgcHJpdmF0ZSByZWRpcmVjdFVybDogc3RyaW5nXG5cdCkge31cblxuICBjYW5BY3RpdmF0ZSgpOiBPYnNlcnZhYmxlPGJvb2xlYW4+IHtcbiAgICByZXR1cm4gdGhpcy5mYWNhZGUuaGFzQmlsbGluZ0FkZHJlc3MkLnBpcGUoXG4gICAgICB0YWtlKDEpLFxuXHRcdFx0dGFwKGhhc0JpbGxpbmdBZGRyZXNzID0+IHtcblx0XHRcdFx0aWYgKCFoYXNCaWxsaW5nQWRkcmVzcykge1xuXHRcdFx0XHRcdHRoaXMucm91dGVyLm5hdmlnYXRlQnlVcmwodGhpcy5yZWRpcmVjdFVybClcblx0XHRcdFx0fVxuXHRcdFx0fSlcblx0XHQpXG4gIH1cbn1cbiJdfQ==