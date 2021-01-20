/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Router } from '@angular/router';
import { Injectable, Inject } from '@angular/core';
import { filter, take, map } from 'rxjs/operators';
import { DaffCartFacade } from '../../facades/cart/cart.facade';
import { DaffCartResolveState } from '../../reducers/public_api';
import { DAFF_CART_STATE_CONFIG, } from '../../config/config';
import * as i0 from "@angular/core";
import * as i1 from "../../facades/cart/cart.facade";
import * as i2 from "@angular/router";
import * as i3 from "../../config/config";
/**
 * A routing guard that will optionally redirect to a given url if the cart is not properly resolved.
 * It will initiate cart resolution.
 * The url has no default and the guard will not redirect if no value is specified.
 * Specify a redirect path with the {\@link DaffResolvedCartGuardRedirectUrl} injection token.
 * The guard will wait until the cart has been resolved before performing the check and emitting.
 */
var DaffResolvedCartGuard = /** @class */ (function () {
    function DaffResolvedCartGuard(facade, router, config) {
        this.facade = facade;
        this.router = router;
        this.config = config;
    }
    /**
     * @return {?}
     */
    DaffResolvedCartGuard.prototype.canActivate = /**
     * @return {?}
     */
    function () {
        var _this = this;
        return this.facade.resolved$.pipe(filter((/**
         * @param {?} resolvedState
         * @return {?}
         */
        function (resolvedState) {
            return resolvedState === DaffCartResolveState.Succeeded ||
                resolvedState === DaffCartResolveState.ServerSide ||
                resolvedState === DaffCartResolveState.Failed;
        })), map((/**
         * @param {?} resolvedState
         * @return {?}
         */
        function (resolvedState) {
            return resolvedState === DaffCartResolveState.Succeeded ||
                resolvedState === DaffCartResolveState.ServerSide;
        })), take(1), map((/**
         * @param {?} success
         * @return {?}
         */
        function (success) {
            return !success && _this.config.resolution.failedResolutionPath
                ? _this.router.parseUrl(_this.config.resolution.failedResolutionPath)
                : success;
        })));
    };
    DaffResolvedCartGuard.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root',
                },] }
    ];
    /** @nocollapse */
    DaffResolvedCartGuard.ctorParameters = function () { return [
        { type: DaffCartFacade },
        { type: Router },
        { type: undefined, decorators: [{ type: Inject, args: [DAFF_CART_STATE_CONFIG,] }] }
    ]; };
    /** @nocollapse */ DaffResolvedCartGuard.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function DaffResolvedCartGuard_Factory() { return new DaffResolvedCartGuard(i0.ɵɵinject(i1.DaffCartFacade), i0.ɵɵinject(i2.Router), i0.ɵɵinject(i3.DAFF_CART_STATE_CONFIG)); }, token: DaffResolvedCartGuard, providedIn: "root" });
    return DaffResolvedCartGuard;
}());
export { DaffResolvedCartGuard };
if (false) {
    /**
     * @type {?}
     * @private
     */
    DaffResolvedCartGuard.prototype.facade;
    /**
     * @type {?}
     * @private
     */
    DaffResolvedCartGuard.prototype.router;
    /**
     * @type {?}
     * @private
     */
    DaffResolvedCartGuard.prototype.config;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVzb2x2ZWQtY2FydC5ndWFyZC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkYWZmb2RpbC9jYXJ0L3N0YXRlLyIsInNvdXJjZXMiOlsiZ3VhcmRzL3Jlc29sdmVkLWNhcnQvcmVzb2x2ZWQtY2FydC5ndWFyZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFlLE1BQU0sRUFBVyxNQUFNLGlCQUFpQixDQUFDO0FBRS9ELE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ25ELE9BQU8sRUFBTyxNQUFNLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRXhELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUNoRSxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUNqRSxPQUFPLEVBRU4sc0JBQXNCLEdBQ3RCLE1BQU0scUJBQXFCLENBQUM7Ozs7Ozs7Ozs7OztBQVM3QjtJQUlDLCtCQUNTLE1BQXNCLEVBQ3RCLE1BQWMsRUFDa0IsTUFBa0M7UUFGbEUsV0FBTSxHQUFOLE1BQU0sQ0FBZ0I7UUFDdEIsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUNrQixXQUFNLEdBQU4sTUFBTSxDQUE0QjtJQUN4RSxDQUFDOzs7O0lBRUosMkNBQVc7OztJQUFYO1FBQUEsaUJBc0JDO1FBckJBLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUNoQyxNQUFNOzs7O1FBQ0wsVUFBQSxhQUFhO1lBQ1osT0FBQSxhQUFhLEtBQUssb0JBQW9CLENBQUMsU0FBUztnQkFDaEQsYUFBYSxLQUFLLG9CQUFvQixDQUFDLFVBQVU7Z0JBQ2pELGFBQWEsS0FBSyxvQkFBb0IsQ0FBQyxNQUFNO1FBRjdDLENBRTZDLEVBQzlDLEVBQ0QsR0FBRzs7OztRQUNGLFVBQUEsYUFBYTtZQUNaLE9BQUEsYUFBYSxLQUFLLG9CQUFvQixDQUFDLFNBQVM7Z0JBQ2hELGFBQWEsS0FBSyxvQkFBb0IsQ0FBQyxVQUFVO1FBRGpELENBQ2lELEVBQ2xELEVBQ0QsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUNQLEdBQUc7Ozs7UUFBQyxVQUFBLE9BQU87WUFDVCxPQUFBLENBQUMsT0FBTyxJQUFJLEtBQUksQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLG9CQUFvQjtnQkFDdEQsQ0FBQyxDQUFDLEtBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUNwQixLQUFJLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxvQkFBb0IsQ0FDM0M7Z0JBQ0YsQ0FBQyxDQUFDLE9BQU87UUFKVixDQUlVLEVBQ1gsQ0FDRCxDQUFDO0lBQ0gsQ0FBQzs7Z0JBaENELFVBQVUsU0FBQztvQkFDWCxVQUFVLEVBQUUsTUFBTTtpQkFDbEI7Ozs7Z0JBaEJRLGNBQWM7Z0JBTEQsTUFBTTtnREEwQnpCLE1BQU0sU0FBQyxzQkFBc0I7OztnQ0ExQmhDO0NBb0RDLEFBakNELElBaUNDO1NBOUJZLHFCQUFxQjs7Ozs7O0lBRWhDLHVDQUE4Qjs7Ozs7SUFDOUIsdUNBQXNCOzs7OztJQUN0Qix1Q0FBMEUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDYW5BY3RpdmF0ZSwgUm91dGVyLCBVcmxUcmVlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IEluamVjdGFibGUsIEluamVjdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgdGFwLCBmaWx0ZXIsIHRha2UsIG1hcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuaW1wb3J0IHsgRGFmZkNhcnRGYWNhZGUgfSBmcm9tICcuLi8uLi9mYWNhZGVzL2NhcnQvY2FydC5mYWNhZGUnO1xuaW1wb3J0IHsgRGFmZkNhcnRSZXNvbHZlU3RhdGUgfSBmcm9tICcuLi8uLi9yZWR1Y2Vycy9wdWJsaWNfYXBpJztcbmltcG9ydCB7XG5cdERhZmZDYXJ0U3RhdGVDb25maWd1cmF0aW9uLFxuXHREQUZGX0NBUlRfU1RBVEVfQ09ORklHLFxufSBmcm9tICcuLi8uLi9jb25maWcvY29uZmlnJztcblxuLyoqXG4gKiBBIHJvdXRpbmcgZ3VhcmQgdGhhdCB3aWxsIG9wdGlvbmFsbHkgcmVkaXJlY3QgdG8gYSBnaXZlbiB1cmwgaWYgdGhlIGNhcnQgaXMgbm90IHByb3Blcmx5IHJlc29sdmVkLlxuICogSXQgd2lsbCBpbml0aWF0ZSBjYXJ0IHJlc29sdXRpb24uXG4gKiBUaGUgdXJsIGhhcyBubyBkZWZhdWx0IGFuZCB0aGUgZ3VhcmQgd2lsbCBub3QgcmVkaXJlY3QgaWYgbm8gdmFsdWUgaXMgc3BlY2lmaWVkLlxuICogU3BlY2lmeSBhIHJlZGlyZWN0IHBhdGggd2l0aCB0aGUge0BsaW5rIERhZmZSZXNvbHZlZENhcnRHdWFyZFJlZGlyZWN0VXJsfSBpbmplY3Rpb24gdG9rZW4uXG4gKiBUaGUgZ3VhcmQgd2lsbCB3YWl0IHVudGlsIHRoZSBjYXJ0IGhhcyBiZWVuIHJlc29sdmVkIGJlZm9yZSBwZXJmb3JtaW5nIHRoZSBjaGVjayBhbmQgZW1pdHRpbmcuXG4gKi9cbkBJbmplY3RhYmxlKHtcblx0cHJvdmlkZWRJbjogJ3Jvb3QnLFxufSlcbmV4cG9ydCBjbGFzcyBEYWZmUmVzb2x2ZWRDYXJ0R3VhcmQgaW1wbGVtZW50cyBDYW5BY3RpdmF0ZSB7XG5cdGNvbnN0cnVjdG9yKFxuXHRcdHByaXZhdGUgZmFjYWRlOiBEYWZmQ2FydEZhY2FkZSxcblx0XHRwcml2YXRlIHJvdXRlcjogUm91dGVyLFxuXHRcdEBJbmplY3QoREFGRl9DQVJUX1NUQVRFX0NPTkZJRykgcHJpdmF0ZSBjb25maWc6IERhZmZDYXJ0U3RhdGVDb25maWd1cmF0aW9uLFxuXHQpIHt9XG5cblx0Y2FuQWN0aXZhdGUoKTogT2JzZXJ2YWJsZTxib29sZWFuIHwgVXJsVHJlZT4ge1xuXHRcdHJldHVybiB0aGlzLmZhY2FkZS5yZXNvbHZlZCQucGlwZShcblx0XHRcdGZpbHRlcihcblx0XHRcdFx0cmVzb2x2ZWRTdGF0ZSA9PlxuXHRcdFx0XHRcdHJlc29sdmVkU3RhdGUgPT09IERhZmZDYXJ0UmVzb2x2ZVN0YXRlLlN1Y2NlZWRlZCB8fFxuXHRcdFx0XHRcdHJlc29sdmVkU3RhdGUgPT09IERhZmZDYXJ0UmVzb2x2ZVN0YXRlLlNlcnZlclNpZGUgfHxcblx0XHRcdFx0XHRyZXNvbHZlZFN0YXRlID09PSBEYWZmQ2FydFJlc29sdmVTdGF0ZS5GYWlsZWQsXG5cdFx0XHQpLFxuXHRcdFx0bWFwKFxuXHRcdFx0XHRyZXNvbHZlZFN0YXRlID0+XG5cdFx0XHRcdFx0cmVzb2x2ZWRTdGF0ZSA9PT0gRGFmZkNhcnRSZXNvbHZlU3RhdGUuU3VjY2VlZGVkIHx8XG5cdFx0XHRcdFx0cmVzb2x2ZWRTdGF0ZSA9PT0gRGFmZkNhcnRSZXNvbHZlU3RhdGUuU2VydmVyU2lkZSxcblx0XHRcdCksXG5cdFx0XHR0YWtlKDEpLFxuXHRcdFx0bWFwKHN1Y2Nlc3MgPT4gXG5cdFx0XHRcdFx0IXN1Y2Nlc3MgJiYgdGhpcy5jb25maWcucmVzb2x1dGlvbi5mYWlsZWRSZXNvbHV0aW9uUGF0aCBcblx0XHRcdFx0XHRcdD9cdHRoaXMucm91dGVyLnBhcnNlVXJsKFxuXHRcdFx0XHRcdFx0XHRcdHRoaXMuY29uZmlnLnJlc29sdXRpb24uZmFpbGVkUmVzb2x1dGlvblBhdGgsXG5cdFx0XHRcdFx0XHRcdClcblx0XHRcdFx0XHRcdDogc3VjY2Vzc1xuXHRcdFx0KSxcblx0XHQpO1xuXHR9XG59XG4iXX0=