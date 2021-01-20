/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Router } from '@angular/router';
import { Injectable, Inject } from '@angular/core';
import { tap } from 'rxjs/operators';
import { DaffCartFacade } from '../../facades/cart/cart.facade';
import { DaffCartOrderResultGuardRedirectUrl } from './order-result-guard-redirect.token';
import * as i0 from "@angular/core";
import * as i1 from "../../facades/cart/cart.facade";
import * as i2 from "@angular/router";
import * as i3 from "./order-result-guard-redirect.token";
/**
 * A routing guard that will redirect to a given url if the cart order result is not defined.
 * The url is `/` by default, but can be overridden with the DaffCartOrderResultGuardRedirectUrl injection token.
 */
var DaffOrderResultGuard = /** @class */ (function () {
    function DaffOrderResultGuard(facade, router, redirectUrl) {
        this.facade = facade;
        this.router = router;
        this.redirectUrl = redirectUrl;
    }
    /**
     * @return {?}
     */
    DaffOrderResultGuard.prototype.canActivate = /**
     * @return {?}
     */
    function () {
        var _this = this;
        return this.facade.hasOrderResult$.pipe(tap((/**
         * @param {?} hasOrderResult
         * @return {?}
         */
        function (hasOrderResult) {
            if (!hasOrderResult) {
                _this.router.navigateByUrl(_this.redirectUrl);
            }
        })));
    };
    DaffOrderResultGuard.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    DaffOrderResultGuard.ctorParameters = function () { return [
        { type: DaffCartFacade },
        { type: Router },
        { type: String, decorators: [{ type: Inject, args: [DaffCartOrderResultGuardRedirectUrl,] }] }
    ]; };
    /** @nocollapse */ DaffOrderResultGuard.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function DaffOrderResultGuard_Factory() { return new DaffOrderResultGuard(i0.ɵɵinject(i1.DaffCartFacade), i0.ɵɵinject(i2.Router), i0.ɵɵinject(i3.DaffCartOrderResultGuardRedirectUrl)); }, token: DaffOrderResultGuard, providedIn: "root" });
    return DaffOrderResultGuard;
}());
export { DaffOrderResultGuard };
if (false) {
    /**
     * @type {?}
     * @private
     */
    DaffOrderResultGuard.prototype.facade;
    /**
     * @type {?}
     * @private
     */
    DaffOrderResultGuard.prototype.router;
    /**
     * @type {?}
     * @private
     */
    DaffOrderResultGuard.prototype.redirectUrl;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3JkZXItcmVzdWx0Lmd1YXJkLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRhZmZvZGlsL2NhcnQvc3RhdGUvIiwic291cmNlcyI6WyJndWFyZHMvb3JkZXItcmVzdWx0L29yZGVyLXJlc3VsdC5ndWFyZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFlLE1BQU0sRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBRXRELE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ25ELE9BQU8sRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUVyQyxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFDaEUsT0FBTyxFQUFFLG1DQUFtQyxFQUFFLE1BQU0scUNBQXFDLENBQUM7Ozs7Ozs7OztBQU0xRjtJQUlFLDhCQUNRLE1BQXNCLEVBQ3RCLE1BQWMsRUFDK0IsV0FBbUI7UUFGaEUsV0FBTSxHQUFOLE1BQU0sQ0FBZ0I7UUFDdEIsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUMrQixnQkFBVyxHQUFYLFdBQVcsQ0FBUTtJQUN0RSxDQUFDOzs7O0lBRUgsMENBQVc7OztJQUFYO1FBQUEsaUJBUUM7UUFQQyxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsZUFBZSxDQUFDLElBQUksQ0FDeEMsR0FBRzs7OztRQUFDLFVBQUEsY0FBYztZQUNqQixJQUFJLENBQUMsY0FBYyxFQUFFO2dCQUNwQixLQUFJLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxLQUFJLENBQUMsV0FBVyxDQUFDLENBQUE7YUFDM0M7UUFDRixDQUFDLEVBQUMsQ0FDQSxDQUFBO0lBQ0gsQ0FBQzs7Z0JBbEJGLFVBQVUsU0FBQztvQkFDWCxVQUFVLEVBQUUsTUFBTTtpQkFDbEI7Ozs7Z0JBVFEsY0FBYztnQkFMRCxNQUFNOzZDQW1CekIsTUFBTSxTQUFDLG1DQUFtQzs7OytCQW5CN0M7Q0ErQkMsQUFuQkQsSUFtQkM7U0FoQlksb0JBQW9COzs7Ozs7SUFFL0Isc0NBQThCOzs7OztJQUM5QixzQ0FBc0I7Ozs7O0lBQ3RCLDJDQUF3RSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENhbkFjdGl2YXRlLCBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgb2YgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IEluamVjdGFibGUsIEluamVjdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgdGFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5pbXBvcnQgeyBEYWZmQ2FydEZhY2FkZSB9IGZyb20gJy4uLy4uL2ZhY2FkZXMvY2FydC9jYXJ0LmZhY2FkZSc7XG5pbXBvcnQgeyBEYWZmQ2FydE9yZGVyUmVzdWx0R3VhcmRSZWRpcmVjdFVybCB9IGZyb20gJy4vb3JkZXItcmVzdWx0LWd1YXJkLXJlZGlyZWN0LnRva2VuJztcblxuLyoqXG4gKiBBIHJvdXRpbmcgZ3VhcmQgdGhhdCB3aWxsIHJlZGlyZWN0IHRvIGEgZ2l2ZW4gdXJsIGlmIHRoZSBjYXJ0IG9yZGVyIHJlc3VsdCBpcyBub3QgZGVmaW5lZC5cbiAqIFRoZSB1cmwgaXMgYC9gIGJ5IGRlZmF1bHQsIGJ1dCBjYW4gYmUgb3ZlcnJpZGRlbiB3aXRoIHRoZSBEYWZmQ2FydE9yZGVyUmVzdWx0R3VhcmRSZWRpcmVjdFVybCBpbmplY3Rpb24gdG9rZW4uXG4gKi9cbkBJbmplY3RhYmxlKHtcblx0cHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIERhZmZPcmRlclJlc3VsdEd1YXJkIGltcGxlbWVudHMgQ2FuQWN0aXZhdGUge1xuICBjb25zdHJ1Y3Rvcihcblx0XHRwcml2YXRlIGZhY2FkZTogRGFmZkNhcnRGYWNhZGUsXG5cdFx0cHJpdmF0ZSByb3V0ZXI6IFJvdXRlcixcblx0XHRASW5qZWN0KERhZmZDYXJ0T3JkZXJSZXN1bHRHdWFyZFJlZGlyZWN0VXJsKSBwcml2YXRlIHJlZGlyZWN0VXJsOiBzdHJpbmdcblx0KSB7fVxuXG4gIGNhbkFjdGl2YXRlKCk6IE9ic2VydmFibGU8Ym9vbGVhbj4ge1xuICAgIHJldHVybiB0aGlzLmZhY2FkZS5oYXNPcmRlclJlc3VsdCQucGlwZShcblx0XHRcdHRhcChoYXNPcmRlclJlc3VsdCA9PiB7XG5cdFx0XHRcdGlmICghaGFzT3JkZXJSZXN1bHQpIHtcblx0XHRcdFx0XHR0aGlzLnJvdXRlci5uYXZpZ2F0ZUJ5VXJsKHRoaXMucmVkaXJlY3RVcmwpXG5cdFx0XHRcdH1cblx0XHRcdH0pXG4gICAgKVxuICB9XG59XG4iXX0=