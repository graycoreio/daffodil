/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Router } from '@angular/router';
import { Injectable, Inject } from '@angular/core';
import { tap, take, map } from 'rxjs/operators';
import { DaffCartFacade } from '../../facades/cart/cart.facade';
import { DaffCartItemsGuardRedirectUrl } from './cart-items-guard-redirect.token';
import * as i0 from "@angular/core";
import * as i1 from "../../facades/cart/cart.facade";
import * as i2 from "@angular/router";
import * as i3 from "./cart-items-guard-redirect.token";
/**
 * A routing guard that will ensure that the cart is not empty before allowing activation of a route.
 * If the cart has items in it, then `canActivate` will emit true. If not, it will emit false and redirect to a specific path.
 * The url is `/` by default but can be overridden with the {\@link DaffCartItemsGuardRedirectUrl} injection token.
 * The guard will not wait until the cart has been resolved before performing the check and emitting.
 * Ensure that the cart is resolved prior to running this guard with the {\@link DaffResolvedCartGuard}.
 */
var DaffCartItemsGuard = /** @class */ (function () {
    function DaffCartItemsGuard(facade, router, redirectUrl) {
        this.facade = facade;
        this.router = router;
        this.redirectUrl = redirectUrl;
    }
    /**
     * @return {?}
     */
    DaffCartItemsGuard.prototype.canActivate = /**
     * @return {?}
     */
    function () {
        var _this = this;
        return this.facade.isCartEmpty$.pipe(map((/**
         * @param {?} isCartEmpty
         * @return {?}
         */
        function (isCartEmpty) { return !isCartEmpty; })), take(1), tap((/**
         * @param {?} hasNonEmptyCart
         * @return {?}
         */
        function (hasNonEmptyCart) {
            if (!hasNonEmptyCart) {
                _this.router.navigateByUrl(_this.redirectUrl);
            }
        })));
    };
    DaffCartItemsGuard.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    DaffCartItemsGuard.ctorParameters = function () { return [
        { type: DaffCartFacade },
        { type: Router },
        { type: String, decorators: [{ type: Inject, args: [DaffCartItemsGuardRedirectUrl,] }] }
    ]; };
    /** @nocollapse */ DaffCartItemsGuard.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function DaffCartItemsGuard_Factory() { return new DaffCartItemsGuard(i0.ɵɵinject(i1.DaffCartFacade), i0.ɵɵinject(i2.Router), i0.ɵɵinject(i3.DaffCartItemsGuardRedirectUrl)); }, token: DaffCartItemsGuard, providedIn: "root" });
    return DaffCartItemsGuard;
}());
export { DaffCartItemsGuard };
if (false) {
    /**
     * @type {?}
     * @private
     */
    DaffCartItemsGuard.prototype.facade;
    /**
     * @type {?}
     * @private
     */
    DaffCartItemsGuard.prototype.router;
    /**
     * @type {?}
     * @private
     */
    DaffCartItemsGuard.prototype.redirectUrl;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FydC1pdGVtcy5ndWFyZC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkYWZmb2RpbC9jYXJ0L3N0YXRlLyIsInNvdXJjZXMiOlsiZ3VhcmRzL2NhcnQtaXRlbXMvY2FydC1pdGVtcy5ndWFyZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFlLE1BQU0sRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBRXRELE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ25ELE9BQU8sRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRWhELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUNoRSxPQUFPLEVBQUUsNkJBQTZCLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQzs7Ozs7Ozs7Ozs7O0FBU2xGO0lBSUUsNEJBQ1EsTUFBc0IsRUFDdEIsTUFBYyxFQUN5QixXQUFtQjtRQUYxRCxXQUFNLEdBQU4sTUFBTSxDQUFnQjtRQUN0QixXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQ3lCLGdCQUFXLEdBQVgsV0FBVyxDQUFRO0lBQ2hFLENBQUM7Ozs7SUFFSCx3Q0FBVzs7O0lBQVg7UUFBQSxpQkFVQztRQVRDLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUNsQyxHQUFHOzs7O1FBQUMsVUFBQSxXQUFXLElBQUksT0FBQSxDQUFDLFdBQVcsRUFBWixDQUFZLEVBQUMsRUFDaEMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUNWLEdBQUc7Ozs7UUFBQyxVQUFBLGVBQWU7WUFDbEIsSUFBSSxDQUFDLGVBQWUsRUFBRTtnQkFDckIsS0FBSSxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUMsS0FBSSxDQUFDLFdBQVcsQ0FBQyxDQUFBO2FBQzNDO1FBQ0YsQ0FBQyxFQUFDLENBQ0YsQ0FBQTtJQUNELENBQUM7O2dCQXBCRixVQUFVLFNBQUM7b0JBQ1gsVUFBVSxFQUFFLE1BQU07aUJBQ2xCOzs7O2dCQVpRLGNBQWM7Z0JBTEQsTUFBTTs2Q0FzQnpCLE1BQU0sU0FBQyw2QkFBNkI7Ozs2QkF0QnZDO0NBb0NDLEFBckJELElBcUJDO1NBbEJZLGtCQUFrQjs7Ozs7O0lBRTdCLG9DQUE4Qjs7Ozs7SUFDOUIsb0NBQXNCOzs7OztJQUN0Qix5Q0FBa0UiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDYW5BY3RpdmF0ZSwgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IEluamVjdGFibGUsIEluamVjdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgdGFwLCB0YWtlLCBtYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmltcG9ydCB7IERhZmZDYXJ0RmFjYWRlIH0gZnJvbSAnLi4vLi4vZmFjYWRlcy9jYXJ0L2NhcnQuZmFjYWRlJztcbmltcG9ydCB7IERhZmZDYXJ0SXRlbXNHdWFyZFJlZGlyZWN0VXJsIH0gZnJvbSAnLi9jYXJ0LWl0ZW1zLWd1YXJkLXJlZGlyZWN0LnRva2VuJztcblxuLyoqXG4gKiBBIHJvdXRpbmcgZ3VhcmQgdGhhdCB3aWxsIGVuc3VyZSB0aGF0IHRoZSBjYXJ0IGlzIG5vdCBlbXB0eSBiZWZvcmUgYWxsb3dpbmcgYWN0aXZhdGlvbiBvZiBhIHJvdXRlLlxuICogSWYgdGhlIGNhcnQgaGFzIGl0ZW1zIGluIGl0LCB0aGVuIGBjYW5BY3RpdmF0ZWAgd2lsbCBlbWl0IHRydWUuIElmIG5vdCwgaXQgd2lsbCBlbWl0IGZhbHNlIGFuZCByZWRpcmVjdCB0byBhIHNwZWNpZmljIHBhdGguXG4gKiBUaGUgdXJsIGlzIGAvYCBieSBkZWZhdWx0IGJ1dCBjYW4gYmUgb3ZlcnJpZGRlbiB3aXRoIHRoZSB7QGxpbmsgRGFmZkNhcnRJdGVtc0d1YXJkUmVkaXJlY3RVcmx9IGluamVjdGlvbiB0b2tlbi5cbiAqIFRoZSBndWFyZCB3aWxsIG5vdCB3YWl0IHVudGlsIHRoZSBjYXJ0IGhhcyBiZWVuIHJlc29sdmVkIGJlZm9yZSBwZXJmb3JtaW5nIHRoZSBjaGVjayBhbmQgZW1pdHRpbmcuXG4gKiBFbnN1cmUgdGhhdCB0aGUgY2FydCBpcyByZXNvbHZlZCBwcmlvciB0byBydW5uaW5nIHRoaXMgZ3VhcmQgd2l0aCB0aGUge0BsaW5rIERhZmZSZXNvbHZlZENhcnRHdWFyZH0uXG4gKi9cbkBJbmplY3RhYmxlKHtcblx0cHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIERhZmZDYXJ0SXRlbXNHdWFyZCBpbXBsZW1lbnRzIENhbkFjdGl2YXRlIHtcbiAgY29uc3RydWN0b3IoXG5cdFx0cHJpdmF0ZSBmYWNhZGU6IERhZmZDYXJ0RmFjYWRlLFxuXHRcdHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsXG5cdFx0QEluamVjdChEYWZmQ2FydEl0ZW1zR3VhcmRSZWRpcmVjdFVybCkgcHJpdmF0ZSByZWRpcmVjdFVybDogc3RyaW5nXG5cdCkge31cblxuICBjYW5BY3RpdmF0ZSgpOiBPYnNlcnZhYmxlPGJvb2xlYW4+IHtcbiAgICByZXR1cm4gdGhpcy5mYWNhZGUuaXNDYXJ0RW1wdHkkLnBpcGUoXG4gICAgICBtYXAoaXNDYXJ0RW1wdHkgPT4gIWlzQ2FydEVtcHR5KSxcbiAgICAgIHRha2UoMSksXG5cdFx0XHR0YXAoaGFzTm9uRW1wdHlDYXJ0ID0+IHtcblx0XHRcdFx0aWYgKCFoYXNOb25FbXB0eUNhcnQpIHtcblx0XHRcdFx0XHR0aGlzLnJvdXRlci5uYXZpZ2F0ZUJ5VXJsKHRoaXMucmVkaXJlY3RVcmwpXG5cdFx0XHRcdH1cblx0XHRcdH0pXG5cdFx0KVxuICB9XG59XG4iXX0=