/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Router } from '@angular/router';
import { Injectable, Inject } from '@angular/core';
import { tap } from 'rxjs/operators';
import { DaffOrderFacade } from '../../facades/order/order.facade';
import { DaffPlacedOrderGuardRedirectUrl } from './placed-order-guard-redirect.token';
import * as i0 from "@angular/core";
import * as i1 from "../../facades/order/order.facade";
import * as i2 from "@angular/router";
import * as i3 from "./placed-order-guard-redirect.token";
/**
 * A routing guard that will redirect to a given url if the placed order is not defined.
 * The url is `/` by default, but can be overridden with the DaffPlacedOrderGuardRedirectUrl injection token.
 */
var DaffPlacedOrderGuard = /** @class */ (function () {
    function DaffPlacedOrderGuard(facade, router, redirectUrl) {
        this.facade = facade;
        this.router = router;
        this.redirectUrl = redirectUrl;
    }
    /**
     * @return {?}
     */
    DaffPlacedOrderGuard.prototype.canActivate = /**
     * @return {?}
     */
    function () {
        var _this = this;
        return this.facade.hasPlacedOrder$.pipe(tap((/**
         * @param {?} hasPlacedOrder
         * @return {?}
         */
        function (hasPlacedOrder) {
            if (!hasPlacedOrder) {
                _this.router.navigateByUrl(_this.redirectUrl);
            }
        })));
    };
    DaffPlacedOrderGuard.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    DaffPlacedOrderGuard.ctorParameters = function () { return [
        { type: DaffOrderFacade },
        { type: Router },
        { type: String, decorators: [{ type: Inject, args: [DaffPlacedOrderGuardRedirectUrl,] }] }
    ]; };
    /** @nocollapse */ DaffPlacedOrderGuard.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function DaffPlacedOrderGuard_Factory() { return new DaffPlacedOrderGuard(i0.ɵɵinject(i1.DaffOrderFacade), i0.ɵɵinject(i2.Router), i0.ɵɵinject(i3.DaffPlacedOrderGuardRedirectUrl)); }, token: DaffPlacedOrderGuard, providedIn: "root" });
    return DaffPlacedOrderGuard;
}());
export { DaffPlacedOrderGuard };
if (false) {
    /**
     * @type {?}
     * @private
     */
    DaffPlacedOrderGuard.prototype.facade;
    /**
     * @type {?}
     * @private
     */
    DaffPlacedOrderGuard.prototype.router;
    /**
     * @type {?}
     * @private
     */
    DaffPlacedOrderGuard.prototype.redirectUrl;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGxhY2VkLW9yZGVyLmd1YXJkLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRhZmZvZGlsL29yZGVyL3N0YXRlLyIsInNvdXJjZXMiOlsiZ3VhcmRzL3BsYWNlZC1vcmRlci9wbGFjZWQtb3JkZXIuZ3VhcmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBZSxNQUFNLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUV0RCxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNuRCxPQUFPLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFckMsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBQ25FLE9BQU8sRUFBRSwrQkFBK0IsRUFBRSxNQUFNLHFDQUFxQyxDQUFDOzs7Ozs7Ozs7QUFNdEY7SUFJRSw4QkFDUSxNQUF1QixFQUN2QixNQUFjLEVBQzJCLFdBQW1CO1FBRjVELFdBQU0sR0FBTixNQUFNLENBQWlCO1FBQ3ZCLFdBQU0sR0FBTixNQUFNLENBQVE7UUFDMkIsZ0JBQVcsR0FBWCxXQUFXLENBQVE7SUFDbEUsQ0FBQzs7OztJQUVILDBDQUFXOzs7SUFBWDtRQUFBLGlCQVFDO1FBUEMsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQ3hDLEdBQUc7Ozs7UUFBQyxVQUFBLGNBQWM7WUFDakIsSUFBSSxDQUFDLGNBQWMsRUFBRTtnQkFDcEIsS0FBSSxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUMsS0FBSSxDQUFDLFdBQVcsQ0FBQyxDQUFBO2FBQzNDO1FBQ0YsQ0FBQyxFQUFDLENBQ0YsQ0FBQTtJQUNELENBQUM7O2dCQWxCRixVQUFVLFNBQUM7b0JBQ1gsVUFBVSxFQUFFLE1BQU07aUJBQ2xCOzs7O2dCQVRRLGVBQWU7Z0JBTEYsTUFBTTs2Q0FtQnpCLE1BQU0sU0FBQywrQkFBK0I7OzsrQkFuQnpDO0NBK0JDLEFBbkJELElBbUJDO1NBaEJZLG9CQUFvQjs7Ozs7O0lBRS9CLHNDQUErQjs7Ozs7SUFDL0Isc0NBQXNCOzs7OztJQUN0QiwyQ0FBb0UiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDYW5BY3RpdmF0ZSwgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IEluamVjdGFibGUsIEluamVjdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgdGFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5pbXBvcnQgeyBEYWZmT3JkZXJGYWNhZGUgfSBmcm9tICcuLi8uLi9mYWNhZGVzL29yZGVyL29yZGVyLmZhY2FkZSc7XG5pbXBvcnQgeyBEYWZmUGxhY2VkT3JkZXJHdWFyZFJlZGlyZWN0VXJsIH0gZnJvbSAnLi9wbGFjZWQtb3JkZXItZ3VhcmQtcmVkaXJlY3QudG9rZW4nO1xuXG4vKipcbiAqIEEgcm91dGluZyBndWFyZCB0aGF0IHdpbGwgcmVkaXJlY3QgdG8gYSBnaXZlbiB1cmwgaWYgdGhlIHBsYWNlZCBvcmRlciBpcyBub3QgZGVmaW5lZC5cbiAqIFRoZSB1cmwgaXMgYC9gIGJ5IGRlZmF1bHQsIGJ1dCBjYW4gYmUgb3ZlcnJpZGRlbiB3aXRoIHRoZSBEYWZmUGxhY2VkT3JkZXJHdWFyZFJlZGlyZWN0VXJsIGluamVjdGlvbiB0b2tlbi5cbiAqL1xuQEluamVjdGFibGUoe1xuXHRwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgRGFmZlBsYWNlZE9yZGVyR3VhcmQgaW1wbGVtZW50cyBDYW5BY3RpdmF0ZSB7XG4gIGNvbnN0cnVjdG9yKFxuXHRcdHByaXZhdGUgZmFjYWRlOiBEYWZmT3JkZXJGYWNhZGUsXG5cdFx0cHJpdmF0ZSByb3V0ZXI6IFJvdXRlcixcblx0XHRASW5qZWN0KERhZmZQbGFjZWRPcmRlckd1YXJkUmVkaXJlY3RVcmwpIHByaXZhdGUgcmVkaXJlY3RVcmw6IHN0cmluZ1xuXHQpIHt9XG5cbiAgY2FuQWN0aXZhdGUoKTogT2JzZXJ2YWJsZTxib29sZWFuPiB7XG4gICAgcmV0dXJuIHRoaXMuZmFjYWRlLmhhc1BsYWNlZE9yZGVyJC5waXBlKFxuXHRcdFx0dGFwKGhhc1BsYWNlZE9yZGVyID0+IHtcblx0XHRcdFx0aWYgKCFoYXNQbGFjZWRPcmRlcikge1xuXHRcdFx0XHRcdHRoaXMucm91dGVyLm5hdmlnYXRlQnlVcmwodGhpcy5yZWRpcmVjdFVybClcblx0XHRcdFx0fVxuXHRcdFx0fSlcblx0XHQpXG4gIH1cbn1cbiJdfQ==