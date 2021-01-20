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
var DaffPaymentMethodGuard = /** @class */ (function () {
    function DaffPaymentMethodGuard(facade, router, redirectUrl) {
        this.facade = facade;
        this.router = router;
        this.redirectUrl = redirectUrl;
    }
    /**
     * @return {?}
     */
    DaffPaymentMethodGuard.prototype.canActivate = /**
     * @return {?}
     */
    function () {
        var _this = this;
        return this.facade.hasPaymentMethod$.pipe(take(1), tap((/**
         * @param {?} hasPaymentMethod
         * @return {?}
         */
        function (hasPaymentMethod) {
            if (!hasPaymentMethod) {
                _this.router.navigateByUrl(_this.redirectUrl);
            }
        })));
    };
    DaffPaymentMethodGuard.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    DaffPaymentMethodGuard.ctorParameters = function () { return [
        { type: DaffCartFacade },
        { type: Router },
        { type: String, decorators: [{ type: Inject, args: [DaffCartPaymentMethodGuardRedirectUrl,] }] }
    ]; };
    /** @nocollapse */ DaffPaymentMethodGuard.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function DaffPaymentMethodGuard_Factory() { return new DaffPaymentMethodGuard(i0.ɵɵinject(i1.DaffCartFacade), i0.ɵɵinject(i2.Router), i0.ɵɵinject(i3.DaffCartPaymentMethodGuardRedirectUrl)); }, token: DaffPaymentMethodGuard, providedIn: "root" });
    return DaffPaymentMethodGuard;
}());
export { DaffPaymentMethodGuard };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGF5bWVudC1tZXRob2QuZ3VhcmQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGFmZm9kaWwvY2FydC9zdGF0ZS8iLCJzb3VyY2VzIjpbImd1YXJkcy9wYXltZW50LW1ldGhvZC9wYXltZW50LW1ldGhvZC5ndWFyZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFlLE1BQU0sRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBRXRELE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ25ELE9BQU8sRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFM0MsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBQ2hFLE9BQU8sRUFBRSxxQ0FBcUMsRUFBRSxNQUFNLHVDQUF1QyxDQUFDOzs7Ozs7Ozs7OztBQVE5RjtJQUlFLGdDQUNRLE1BQXNCLEVBQ3RCLE1BQWMsRUFDaUMsV0FBbUI7UUFGbEUsV0FBTSxHQUFOLE1BQU0sQ0FBZ0I7UUFDdEIsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUNpQyxnQkFBVyxHQUFYLFdBQVcsQ0FBUTtJQUN4RSxDQUFDOzs7O0lBRUgsNENBQVc7OztJQUFYO1FBQUEsaUJBU0M7UUFSQyxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUN2QyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQ1YsR0FBRzs7OztRQUFDLFVBQUEsZ0JBQWdCO1lBQ25CLElBQUksQ0FBQyxnQkFBZ0IsRUFBRTtnQkFDdEIsS0FBSSxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUMsS0FBSSxDQUFDLFdBQVcsQ0FBQyxDQUFBO2FBQzNDO1FBQ0YsQ0FBQyxFQUFDLENBQ0YsQ0FBQTtJQUNELENBQUM7O2dCQW5CRixVQUFVLFNBQUM7b0JBQ1gsVUFBVSxFQUFFLE1BQU07aUJBQ2xCOzs7O2dCQVhRLGNBQWM7Z0JBTEQsTUFBTTs2Q0FxQnpCLE1BQU0sU0FBQyxxQ0FBcUM7OztpQ0FyQi9DO0NBa0NDLEFBcEJELElBb0JDO1NBakJZLHNCQUFzQjs7Ozs7O0lBRWpDLHdDQUE4Qjs7Ozs7SUFDOUIsd0NBQXNCOzs7OztJQUN0Qiw2Q0FBMEUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDYW5BY3RpdmF0ZSwgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IEluamVjdGFibGUsIEluamVjdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgdGFwLCB0YWtlIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5pbXBvcnQgeyBEYWZmQ2FydEZhY2FkZSB9IGZyb20gJy4uLy4uL2ZhY2FkZXMvY2FydC9jYXJ0LmZhY2FkZSc7XG5pbXBvcnQgeyBEYWZmQ2FydFBheW1lbnRNZXRob2RHdWFyZFJlZGlyZWN0VXJsIH0gZnJvbSAnLi9wYXltZW50LW1ldGhvZC1ndWFyZC1yZWRpcmVjdC50b2tlbic7XG5cbi8qKlxuICogQSByb3V0aW5nIGd1YXJkIHRoYXQgd2lsbCByZWRpcmVjdCB0byBhIGdpdmVuIHVybCBpZiB0aGUgcGF5bWVudCBtZXRob2Qgb24gdGhlIGNhcnQgaXMgbm90IGRlZmluZWQuXG4gKiBUaGUgdXJsIGlzIGAvYCBieSBkZWZhdWx0LCBidXQgY2FuIGJlIG92ZXJyaWRkZW4gd2l0aCB0aGUgRGFmZkNhcnRQYXltZW50TWV0aG9kR3VhcmRSZWRpcmVjdFVybCBpbmplY3Rpb24gdG9rZW4uXG4gKiBUaGUgZ3VhcmQgd2lsbCBub3Qgd2FpdCB1bnRpbCB0aGUgY2FydCBoYXMgYmVlbiByZXNvbHZlZCBiZWZvcmUgcGVyZm9ybWluZyB0aGUgY2hlY2sgYW5kIGVtaXR0aW5nLlxuICogRW5zdXJlIHRoYXQgdGhlIGNhcnQgaXMgcmVzb2x2ZWQgcHJpb3IgdG8gcnVubmluZyB0aGlzIGd1YXJkIHdpdGggdGhlIHtAbGluayBEYWZmUmVzb2x2ZWRDYXJ0R3VhcmR9LlxuICovXG5ASW5qZWN0YWJsZSh7XG5cdHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBEYWZmUGF5bWVudE1ldGhvZEd1YXJkIGltcGxlbWVudHMgQ2FuQWN0aXZhdGUge1xuICBjb25zdHJ1Y3Rvcihcblx0XHRwcml2YXRlIGZhY2FkZTogRGFmZkNhcnRGYWNhZGUsXG5cdFx0cHJpdmF0ZSByb3V0ZXI6IFJvdXRlcixcblx0XHRASW5qZWN0KERhZmZDYXJ0UGF5bWVudE1ldGhvZEd1YXJkUmVkaXJlY3RVcmwpIHByaXZhdGUgcmVkaXJlY3RVcmw6IHN0cmluZ1xuXHQpIHt9XG5cbiAgY2FuQWN0aXZhdGUoKTogT2JzZXJ2YWJsZTxib29sZWFuPiB7XG4gICAgcmV0dXJuIHRoaXMuZmFjYWRlLmhhc1BheW1lbnRNZXRob2QkLnBpcGUoXG4gICAgICB0YWtlKDEpLFxuXHRcdFx0dGFwKGhhc1BheW1lbnRNZXRob2QgPT4ge1xuXHRcdFx0XHRpZiAoIWhhc1BheW1lbnRNZXRob2QpIHtcblx0XHRcdFx0XHR0aGlzLnJvdXRlci5uYXZpZ2F0ZUJ5VXJsKHRoaXMucmVkaXJlY3RVcmwpXG5cdFx0XHRcdH1cblx0XHRcdH0pXG5cdFx0KVxuICB9XG59XG4iXX0=