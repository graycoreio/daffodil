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
export class DaffResolvedCartGuard {
    /**
     * @param {?} facade
     * @param {?} router
     * @param {?} config
     */
    constructor(facade, router, config) {
        this.facade = facade;
        this.router = router;
        this.config = config;
    }
    /**
     * @return {?}
     */
    canActivate() {
        return this.facade.resolved$.pipe(filter((/**
         * @param {?} resolvedState
         * @return {?}
         */
        resolvedState => resolvedState === DaffCartResolveState.Succeeded ||
            resolvedState === DaffCartResolveState.ServerSide ||
            resolvedState === DaffCartResolveState.Failed)), map((/**
         * @param {?} resolvedState
         * @return {?}
         */
        resolvedState => resolvedState === DaffCartResolveState.Succeeded ||
            resolvedState === DaffCartResolveState.ServerSide)), take(1), map((/**
         * @param {?} success
         * @return {?}
         */
        success => !success && this.config.resolution.failedResolutionPath
            ? this.router.parseUrl(this.config.resolution.failedResolutionPath)
            : success)));
    }
}
DaffResolvedCartGuard.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root',
            },] }
];
/** @nocollapse */
DaffResolvedCartGuard.ctorParameters = () => [
    { type: DaffCartFacade },
    { type: Router },
    { type: undefined, decorators: [{ type: Inject, args: [DAFF_CART_STATE_CONFIG,] }] }
];
/** @nocollapse */ DaffResolvedCartGuard.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function DaffResolvedCartGuard_Factory() { return new DaffResolvedCartGuard(i0.ɵɵinject(i1.DaffCartFacade), i0.ɵɵinject(i2.Router), i0.ɵɵinject(i3.DAFF_CART_STATE_CONFIG)); }, token: DaffResolvedCartGuard, providedIn: "root" });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVzb2x2ZWQtY2FydC5ndWFyZC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkYWZmb2RpbC9jYXJ0L3N0YXRlLyIsInNvdXJjZXMiOlsiZ3VhcmRzL3Jlc29sdmVkLWNhcnQvcmVzb2x2ZWQtY2FydC5ndWFyZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFlLE1BQU0sRUFBVyxNQUFNLGlCQUFpQixDQUFDO0FBRS9ELE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ25ELE9BQU8sRUFBTyxNQUFNLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRXhELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUNoRSxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUNqRSxPQUFPLEVBRU4sc0JBQXNCLEdBQ3RCLE1BQU0scUJBQXFCLENBQUM7Ozs7Ozs7Ozs7OztBQVk3QixNQUFNLE9BQU8scUJBQXFCOzs7Ozs7SUFDakMsWUFDUyxNQUFzQixFQUN0QixNQUFjLEVBQ2tCLE1BQWtDO1FBRmxFLFdBQU0sR0FBTixNQUFNLENBQWdCO1FBQ3RCLFdBQU0sR0FBTixNQUFNLENBQVE7UUFDa0IsV0FBTSxHQUFOLE1BQU0sQ0FBNEI7SUFDeEUsQ0FBQzs7OztJQUVKLFdBQVc7UUFDVixPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLElBQUksQ0FDaEMsTUFBTTs7OztRQUNMLGFBQWEsQ0FBQyxFQUFFLENBQ2YsYUFBYSxLQUFLLG9CQUFvQixDQUFDLFNBQVM7WUFDaEQsYUFBYSxLQUFLLG9CQUFvQixDQUFDLFVBQVU7WUFDakQsYUFBYSxLQUFLLG9CQUFvQixDQUFDLE1BQU0sRUFDOUMsRUFDRCxHQUFHOzs7O1FBQ0YsYUFBYSxDQUFDLEVBQUUsQ0FDZixhQUFhLEtBQUssb0JBQW9CLENBQUMsU0FBUztZQUNoRCxhQUFhLEtBQUssb0JBQW9CLENBQUMsVUFBVSxFQUNsRCxFQUNELElBQUksQ0FBQyxDQUFDLENBQUMsRUFDUCxHQUFHOzs7O1FBQUMsT0FBTyxDQUFDLEVBQUUsQ0FDWixDQUFDLE9BQU8sSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxvQkFBb0I7WUFDdEQsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUNwQixJQUFJLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxvQkFBb0IsQ0FDM0M7WUFDRixDQUFDLENBQUMsT0FBTyxFQUNYLENBQ0QsQ0FBQztJQUNILENBQUM7OztZQWhDRCxVQUFVLFNBQUM7Z0JBQ1gsVUFBVSxFQUFFLE1BQU07YUFDbEI7Ozs7WUFoQlEsY0FBYztZQUxELE1BQU07NENBMEJ6QixNQUFNLFNBQUMsc0JBQXNCOzs7Ozs7OztJQUY5Qix1Q0FBOEI7Ozs7O0lBQzlCLHVDQUFzQjs7Ozs7SUFDdEIsdUNBQTBFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2FuQWN0aXZhdGUsIFJvdXRlciwgVXJsVHJlZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBJbmplY3RhYmxlLCBJbmplY3QgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IHRhcCwgZmlsdGVyLCB0YWtlLCBtYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmltcG9ydCB7IERhZmZDYXJ0RmFjYWRlIH0gZnJvbSAnLi4vLi4vZmFjYWRlcy9jYXJ0L2NhcnQuZmFjYWRlJztcbmltcG9ydCB7IERhZmZDYXJ0UmVzb2x2ZVN0YXRlIH0gZnJvbSAnLi4vLi4vcmVkdWNlcnMvcHVibGljX2FwaSc7XG5pbXBvcnQge1xuXHREYWZmQ2FydFN0YXRlQ29uZmlndXJhdGlvbixcblx0REFGRl9DQVJUX1NUQVRFX0NPTkZJRyxcbn0gZnJvbSAnLi4vLi4vY29uZmlnL2NvbmZpZyc7XG5cbi8qKlxuICogQSByb3V0aW5nIGd1YXJkIHRoYXQgd2lsbCBvcHRpb25hbGx5IHJlZGlyZWN0IHRvIGEgZ2l2ZW4gdXJsIGlmIHRoZSBjYXJ0IGlzIG5vdCBwcm9wZXJseSByZXNvbHZlZC5cbiAqIEl0IHdpbGwgaW5pdGlhdGUgY2FydCByZXNvbHV0aW9uLlxuICogVGhlIHVybCBoYXMgbm8gZGVmYXVsdCBhbmQgdGhlIGd1YXJkIHdpbGwgbm90IHJlZGlyZWN0IGlmIG5vIHZhbHVlIGlzIHNwZWNpZmllZC5cbiAqIFNwZWNpZnkgYSByZWRpcmVjdCBwYXRoIHdpdGggdGhlIHtAbGluayBEYWZmUmVzb2x2ZWRDYXJ0R3VhcmRSZWRpcmVjdFVybH0gaW5qZWN0aW9uIHRva2VuLlxuICogVGhlIGd1YXJkIHdpbGwgd2FpdCB1bnRpbCB0aGUgY2FydCBoYXMgYmVlbiByZXNvbHZlZCBiZWZvcmUgcGVyZm9ybWluZyB0aGUgY2hlY2sgYW5kIGVtaXR0aW5nLlxuICovXG5ASW5qZWN0YWJsZSh7XG5cdHByb3ZpZGVkSW46ICdyb290Jyxcbn0pXG5leHBvcnQgY2xhc3MgRGFmZlJlc29sdmVkQ2FydEd1YXJkIGltcGxlbWVudHMgQ2FuQWN0aXZhdGUge1xuXHRjb25zdHJ1Y3Rvcihcblx0XHRwcml2YXRlIGZhY2FkZTogRGFmZkNhcnRGYWNhZGUsXG5cdFx0cHJpdmF0ZSByb3V0ZXI6IFJvdXRlcixcblx0XHRASW5qZWN0KERBRkZfQ0FSVF9TVEFURV9DT05GSUcpIHByaXZhdGUgY29uZmlnOiBEYWZmQ2FydFN0YXRlQ29uZmlndXJhdGlvbixcblx0KSB7fVxuXG5cdGNhbkFjdGl2YXRlKCk6IE9ic2VydmFibGU8Ym9vbGVhbiB8IFVybFRyZWU+IHtcblx0XHRyZXR1cm4gdGhpcy5mYWNhZGUucmVzb2x2ZWQkLnBpcGUoXG5cdFx0XHRmaWx0ZXIoXG5cdFx0XHRcdHJlc29sdmVkU3RhdGUgPT5cblx0XHRcdFx0XHRyZXNvbHZlZFN0YXRlID09PSBEYWZmQ2FydFJlc29sdmVTdGF0ZS5TdWNjZWVkZWQgfHxcblx0XHRcdFx0XHRyZXNvbHZlZFN0YXRlID09PSBEYWZmQ2FydFJlc29sdmVTdGF0ZS5TZXJ2ZXJTaWRlIHx8XG5cdFx0XHRcdFx0cmVzb2x2ZWRTdGF0ZSA9PT0gRGFmZkNhcnRSZXNvbHZlU3RhdGUuRmFpbGVkLFxuXHRcdFx0KSxcblx0XHRcdG1hcChcblx0XHRcdFx0cmVzb2x2ZWRTdGF0ZSA9PlxuXHRcdFx0XHRcdHJlc29sdmVkU3RhdGUgPT09IERhZmZDYXJ0UmVzb2x2ZVN0YXRlLlN1Y2NlZWRlZCB8fFxuXHRcdFx0XHRcdHJlc29sdmVkU3RhdGUgPT09IERhZmZDYXJ0UmVzb2x2ZVN0YXRlLlNlcnZlclNpZGUsXG5cdFx0XHQpLFxuXHRcdFx0dGFrZSgxKSxcblx0XHRcdG1hcChzdWNjZXNzID0+IFxuXHRcdFx0XHRcdCFzdWNjZXNzICYmIHRoaXMuY29uZmlnLnJlc29sdXRpb24uZmFpbGVkUmVzb2x1dGlvblBhdGggXG5cdFx0XHRcdFx0XHQ/XHR0aGlzLnJvdXRlci5wYXJzZVVybChcblx0XHRcdFx0XHRcdFx0XHR0aGlzLmNvbmZpZy5yZXNvbHV0aW9uLmZhaWxlZFJlc29sdXRpb25QYXRoLFxuXHRcdFx0XHRcdFx0XHQpXG5cdFx0XHRcdFx0XHQ6IHN1Y2Nlc3Ncblx0XHRcdCksXG5cdFx0KTtcblx0fVxufVxuIl19