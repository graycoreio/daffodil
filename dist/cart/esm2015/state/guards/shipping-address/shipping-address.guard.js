/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Router } from '@angular/router';
import { Injectable, Inject } from '@angular/core';
import { tap, take } from 'rxjs/operators';
import { DaffCartFacade } from '../../facades/cart/cart.facade';
import { DaffCartShippingAddressGuardRedirectUrl } from './shipping-address-guard-redirect.token';
import * as i0 from "@angular/core";
import * as i1 from "../../facades/cart/cart.facade";
import * as i2 from "@angular/router";
import * as i3 from "./shipping-address-guard-redirect.token";
/**
 * A routing guard that will redirect to a given url if the shipping address on the cart is not defined.
 * The url is `/` by default, but can be overridden with the DaffCartShippingAddressGuardRedirectUrl injection token.
 * The guard will not wait until the cart has been resolved before performing the check and emitting.
 * Ensure that the cart is resolved prior to running this guard with the {\@link DaffResolvedCartGuard}.
 */
export class DaffShippingAddressGuard {
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
        return this.facade.hasShippingAddress$.pipe(take(1), tap((/**
         * @param {?} hasShippingAddress
         * @return {?}
         */
        hasShippingAddress => {
            if (!hasShippingAddress) {
                this.router.navigateByUrl(this.redirectUrl);
            }
        })));
    }
}
DaffShippingAddressGuard.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
DaffShippingAddressGuard.ctorParameters = () => [
    { type: DaffCartFacade },
    { type: Router },
    { type: String, decorators: [{ type: Inject, args: [DaffCartShippingAddressGuardRedirectUrl,] }] }
];
/** @nocollapse */ DaffShippingAddressGuard.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function DaffShippingAddressGuard_Factory() { return new DaffShippingAddressGuard(i0.ɵɵinject(i1.DaffCartFacade), i0.ɵɵinject(i2.Router), i0.ɵɵinject(i3.DaffCartShippingAddressGuardRedirectUrl)); }, token: DaffShippingAddressGuard, providedIn: "root" });
if (false) {
    /**
     * @type {?}
     * @private
     */
    DaffShippingAddressGuard.prototype.facade;
    /**
     * @type {?}
     * @private
     */
    DaffShippingAddressGuard.prototype.router;
    /**
     * @type {?}
     * @private
     */
    DaffShippingAddressGuard.prototype.redirectUrl;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2hpcHBpbmctYWRkcmVzcy5ndWFyZC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkYWZmb2RpbC9jYXJ0L3N0YXRlLyIsInNvdXJjZXMiOlsiZ3VhcmRzL3NoaXBwaW5nLWFkZHJlc3Mvc2hpcHBpbmctYWRkcmVzcy5ndWFyZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFlLE1BQU0sRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBRXRELE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ25ELE9BQU8sRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFM0MsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBQ2hFLE9BQU8sRUFBRSx1Q0FBdUMsRUFBRSxNQUFNLHlDQUF5QyxDQUFDOzs7Ozs7Ozs7OztBQVdsRyxNQUFNLE9BQU8sd0JBQXdCOzs7Ozs7SUFDbkMsWUFDUSxNQUFzQixFQUN0QixNQUFjLEVBQ21DLFdBQW1CO1FBRnBFLFdBQU0sR0FBTixNQUFNLENBQWdCO1FBQ3RCLFdBQU0sR0FBTixNQUFNLENBQVE7UUFDbUMsZ0JBQVcsR0FBWCxXQUFXLENBQVE7SUFDMUUsQ0FBQzs7OztJQUVILFdBQVc7UUFDVCxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsbUJBQW1CLENBQUMsSUFBSSxDQUN6QyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQ1YsR0FBRzs7OztRQUFDLGtCQUFrQixDQUFDLEVBQUU7WUFDeEIsSUFBSSxDQUFDLGtCQUFrQixFQUFFO2dCQUN4QixJQUFJLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUE7YUFDM0M7UUFDRixDQUFDLEVBQUMsQ0FDRixDQUFBO0lBQ0QsQ0FBQzs7O1lBbkJGLFVBQVUsU0FBQztnQkFDWCxVQUFVLEVBQUUsTUFBTTthQUNsQjs7OztZQVhRLGNBQWM7WUFMRCxNQUFNO3lDQXFCekIsTUFBTSxTQUFDLHVDQUF1Qzs7Ozs7Ozs7SUFGL0MsMENBQThCOzs7OztJQUM5QiwwQ0FBc0I7Ozs7O0lBQ3RCLCtDQUE0RSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENhbkFjdGl2YXRlLCBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgSW5qZWN0YWJsZSwgSW5qZWN0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyB0YXAsIHRha2UgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmltcG9ydCB7IERhZmZDYXJ0RmFjYWRlIH0gZnJvbSAnLi4vLi4vZmFjYWRlcy9jYXJ0L2NhcnQuZmFjYWRlJztcbmltcG9ydCB7IERhZmZDYXJ0U2hpcHBpbmdBZGRyZXNzR3VhcmRSZWRpcmVjdFVybCB9IGZyb20gJy4vc2hpcHBpbmctYWRkcmVzcy1ndWFyZC1yZWRpcmVjdC50b2tlbic7XG5cbi8qKlxuICogQSByb3V0aW5nIGd1YXJkIHRoYXQgd2lsbCByZWRpcmVjdCB0byBhIGdpdmVuIHVybCBpZiB0aGUgc2hpcHBpbmcgYWRkcmVzcyBvbiB0aGUgY2FydCBpcyBub3QgZGVmaW5lZC5cbiAqIFRoZSB1cmwgaXMgYC9gIGJ5IGRlZmF1bHQsIGJ1dCBjYW4gYmUgb3ZlcnJpZGRlbiB3aXRoIHRoZSBEYWZmQ2FydFNoaXBwaW5nQWRkcmVzc0d1YXJkUmVkaXJlY3RVcmwgaW5qZWN0aW9uIHRva2VuLlxuICogVGhlIGd1YXJkIHdpbGwgbm90IHdhaXQgdW50aWwgdGhlIGNhcnQgaGFzIGJlZW4gcmVzb2x2ZWQgYmVmb3JlIHBlcmZvcm1pbmcgdGhlIGNoZWNrIGFuZCBlbWl0dGluZy5cbiAqIEVuc3VyZSB0aGF0IHRoZSBjYXJ0IGlzIHJlc29sdmVkIHByaW9yIHRvIHJ1bm5pbmcgdGhpcyBndWFyZCB3aXRoIHRoZSB7QGxpbmsgRGFmZlJlc29sdmVkQ2FydEd1YXJkfS5cbiAqL1xuQEluamVjdGFibGUoe1xuXHRwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgRGFmZlNoaXBwaW5nQWRkcmVzc0d1YXJkIGltcGxlbWVudHMgQ2FuQWN0aXZhdGUge1xuICBjb25zdHJ1Y3Rvcihcblx0XHRwcml2YXRlIGZhY2FkZTogRGFmZkNhcnRGYWNhZGUsXG5cdFx0cHJpdmF0ZSByb3V0ZXI6IFJvdXRlcixcblx0XHRASW5qZWN0KERhZmZDYXJ0U2hpcHBpbmdBZGRyZXNzR3VhcmRSZWRpcmVjdFVybCkgcHJpdmF0ZSByZWRpcmVjdFVybDogc3RyaW5nXG5cdCkge31cblxuICBjYW5BY3RpdmF0ZSgpOiBPYnNlcnZhYmxlPGJvb2xlYW4+IHtcbiAgICByZXR1cm4gdGhpcy5mYWNhZGUuaGFzU2hpcHBpbmdBZGRyZXNzJC5waXBlKFxuICAgICAgdGFrZSgxKSxcblx0XHRcdHRhcChoYXNTaGlwcGluZ0FkZHJlc3MgPT4ge1xuXHRcdFx0XHRpZiAoIWhhc1NoaXBwaW5nQWRkcmVzcykge1xuXHRcdFx0XHRcdHRoaXMucm91dGVyLm5hdmlnYXRlQnlVcmwodGhpcy5yZWRpcmVjdFVybClcblx0XHRcdFx0fVxuXHRcdFx0fSlcblx0XHQpXG4gIH1cbn1cbiJdfQ==