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
var DaffShippingAddressGuard = /** @class */ (function () {
    function DaffShippingAddressGuard(facade, router, redirectUrl) {
        this.facade = facade;
        this.router = router;
        this.redirectUrl = redirectUrl;
    }
    /**
     * @return {?}
     */
    DaffShippingAddressGuard.prototype.canActivate = /**
     * @return {?}
     */
    function () {
        var _this = this;
        return this.facade.hasShippingAddress$.pipe(take(1), tap((/**
         * @param {?} hasShippingAddress
         * @return {?}
         */
        function (hasShippingAddress) {
            if (!hasShippingAddress) {
                _this.router.navigateByUrl(_this.redirectUrl);
            }
        })));
    };
    DaffShippingAddressGuard.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    DaffShippingAddressGuard.ctorParameters = function () { return [
        { type: DaffCartFacade },
        { type: Router },
        { type: String, decorators: [{ type: Inject, args: [DaffCartShippingAddressGuardRedirectUrl,] }] }
    ]; };
    /** @nocollapse */ DaffShippingAddressGuard.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function DaffShippingAddressGuard_Factory() { return new DaffShippingAddressGuard(i0.ɵɵinject(i1.DaffCartFacade), i0.ɵɵinject(i2.Router), i0.ɵɵinject(i3.DaffCartShippingAddressGuardRedirectUrl)); }, token: DaffShippingAddressGuard, providedIn: "root" });
    return DaffShippingAddressGuard;
}());
export { DaffShippingAddressGuard };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2hpcHBpbmctYWRkcmVzcy5ndWFyZC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkYWZmb2RpbC9jYXJ0L3N0YXRlLyIsInNvdXJjZXMiOlsiZ3VhcmRzL3NoaXBwaW5nLWFkZHJlc3Mvc2hpcHBpbmctYWRkcmVzcy5ndWFyZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFlLE1BQU0sRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBRXRELE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ25ELE9BQU8sRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFM0MsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBQ2hFLE9BQU8sRUFBRSx1Q0FBdUMsRUFBRSxNQUFNLHlDQUF5QyxDQUFDOzs7Ozs7Ozs7OztBQVFsRztJQUlFLGtDQUNRLE1BQXNCLEVBQ3RCLE1BQWMsRUFDbUMsV0FBbUI7UUFGcEUsV0FBTSxHQUFOLE1BQU0sQ0FBZ0I7UUFDdEIsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUNtQyxnQkFBVyxHQUFYLFdBQVcsQ0FBUTtJQUMxRSxDQUFDOzs7O0lBRUgsOENBQVc7OztJQUFYO1FBQUEsaUJBU0M7UUFSQyxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsbUJBQW1CLENBQUMsSUFBSSxDQUN6QyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQ1YsR0FBRzs7OztRQUFDLFVBQUEsa0JBQWtCO1lBQ3JCLElBQUksQ0FBQyxrQkFBa0IsRUFBRTtnQkFDeEIsS0FBSSxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUMsS0FBSSxDQUFDLFdBQVcsQ0FBQyxDQUFBO2FBQzNDO1FBQ0YsQ0FBQyxFQUFDLENBQ0YsQ0FBQTtJQUNELENBQUM7O2dCQW5CRixVQUFVLFNBQUM7b0JBQ1gsVUFBVSxFQUFFLE1BQU07aUJBQ2xCOzs7O2dCQVhRLGNBQWM7Z0JBTEQsTUFBTTs2Q0FxQnpCLE1BQU0sU0FBQyx1Q0FBdUM7OzttQ0FyQmpEO0NBa0NDLEFBcEJELElBb0JDO1NBakJZLHdCQUF3Qjs7Ozs7O0lBRW5DLDBDQUE4Qjs7Ozs7SUFDOUIsMENBQXNCOzs7OztJQUN0QiwrQ0FBNEUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDYW5BY3RpdmF0ZSwgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IEluamVjdGFibGUsIEluamVjdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgdGFwLCB0YWtlIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5pbXBvcnQgeyBEYWZmQ2FydEZhY2FkZSB9IGZyb20gJy4uLy4uL2ZhY2FkZXMvY2FydC9jYXJ0LmZhY2FkZSc7XG5pbXBvcnQgeyBEYWZmQ2FydFNoaXBwaW5nQWRkcmVzc0d1YXJkUmVkaXJlY3RVcmwgfSBmcm9tICcuL3NoaXBwaW5nLWFkZHJlc3MtZ3VhcmQtcmVkaXJlY3QudG9rZW4nO1xuXG4vKipcbiAqIEEgcm91dGluZyBndWFyZCB0aGF0IHdpbGwgcmVkaXJlY3QgdG8gYSBnaXZlbiB1cmwgaWYgdGhlIHNoaXBwaW5nIGFkZHJlc3Mgb24gdGhlIGNhcnQgaXMgbm90IGRlZmluZWQuXG4gKiBUaGUgdXJsIGlzIGAvYCBieSBkZWZhdWx0LCBidXQgY2FuIGJlIG92ZXJyaWRkZW4gd2l0aCB0aGUgRGFmZkNhcnRTaGlwcGluZ0FkZHJlc3NHdWFyZFJlZGlyZWN0VXJsIGluamVjdGlvbiB0b2tlbi5cbiAqIFRoZSBndWFyZCB3aWxsIG5vdCB3YWl0IHVudGlsIHRoZSBjYXJ0IGhhcyBiZWVuIHJlc29sdmVkIGJlZm9yZSBwZXJmb3JtaW5nIHRoZSBjaGVjayBhbmQgZW1pdHRpbmcuXG4gKiBFbnN1cmUgdGhhdCB0aGUgY2FydCBpcyByZXNvbHZlZCBwcmlvciB0byBydW5uaW5nIHRoaXMgZ3VhcmQgd2l0aCB0aGUge0BsaW5rIERhZmZSZXNvbHZlZENhcnRHdWFyZH0uXG4gKi9cbkBJbmplY3RhYmxlKHtcblx0cHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIERhZmZTaGlwcGluZ0FkZHJlc3NHdWFyZCBpbXBsZW1lbnRzIENhbkFjdGl2YXRlIHtcbiAgY29uc3RydWN0b3IoXG5cdFx0cHJpdmF0ZSBmYWNhZGU6IERhZmZDYXJ0RmFjYWRlLFxuXHRcdHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsXG5cdFx0QEluamVjdChEYWZmQ2FydFNoaXBwaW5nQWRkcmVzc0d1YXJkUmVkaXJlY3RVcmwpIHByaXZhdGUgcmVkaXJlY3RVcmw6IHN0cmluZ1xuXHQpIHt9XG5cbiAgY2FuQWN0aXZhdGUoKTogT2JzZXJ2YWJsZTxib29sZWFuPiB7XG4gICAgcmV0dXJuIHRoaXMuZmFjYWRlLmhhc1NoaXBwaW5nQWRkcmVzcyQucGlwZShcbiAgICAgIHRha2UoMSksXG5cdFx0XHR0YXAoaGFzU2hpcHBpbmdBZGRyZXNzID0+IHtcblx0XHRcdFx0aWYgKCFoYXNTaGlwcGluZ0FkZHJlc3MpIHtcblx0XHRcdFx0XHR0aGlzLnJvdXRlci5uYXZpZ2F0ZUJ5VXJsKHRoaXMucmVkaXJlY3RVcmwpXG5cdFx0XHRcdH1cblx0XHRcdH0pXG5cdFx0KVxuICB9XG59XG4iXX0=