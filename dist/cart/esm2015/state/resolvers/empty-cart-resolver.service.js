/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { filter, map } from 'rxjs/operators';
import { DaffCartResolver } from './cart-resolver.service';
import { DaffCartActionTypes } from '../actions/public_api';
import { DaffEmptyCartResolverRedirectUrl } from './tokens/empty-cart-resolver-redirect.token';
import * as i0 from "@angular/core";
import * as i1 from "./cart-resolver.service";
import * as i2 from "@angular/router";
import * as i3 from "./tokens/empty-cart-resolver-redirect.token";
/**
 * Resolves the cart before navigation. Redirects to a given url when a failure occurs during Cart Load.
 * This url is `/` by default but can be overridden with the DaffCartResolverRedirectUrl injection token.
 * This resolver also redirects to a different url when the cart is empty after successfully loading.
 * This url is also `/` by default, but can be overridden with the DaffEmptyCartResolverRedirectUrl
 */
export class DaffEmptyCartResolver {
    /**
     * @param {?} cartResolver
     * @param {?} router
     * @param {?} redirectUrl
     */
    constructor(cartResolver, router, redirectUrl) {
        this.cartResolver = cartResolver;
        this.router = router;
        this.redirectUrl = redirectUrl;
    }
    /**
     * @return {?}
     */
    resolve() {
        return this.cartResolver.resolve().pipe(filter((/**
         * @param {?} action
         * @return {?}
         */
        action => action.type === DaffCartActionTypes.CartLoadSuccessAction)), map((/**
         * @param {?} action
         * @return {?}
         */
        (action) => {
            if (!action.payload || action.payload.items.length === 0) {
                this.router.navigateByUrl(this.redirectUrl);
            }
            return action;
        })));
    }
}
DaffEmptyCartResolver.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
DaffEmptyCartResolver.ctorParameters = () => [
    { type: DaffCartResolver },
    { type: Router },
    { type: String, decorators: [{ type: Inject, args: [DaffEmptyCartResolverRedirectUrl,] }] }
];
/** @nocollapse */ DaffEmptyCartResolver.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function DaffEmptyCartResolver_Factory() { return new DaffEmptyCartResolver(i0.ɵɵinject(i1.DaffCartResolver), i0.ɵɵinject(i2.Router), i0.ɵɵinject(i3.DaffEmptyCartResolverRedirectUrl)); }, token: DaffEmptyCartResolver, providedIn: "root" });
if (false) {
    /**
     * @type {?}
     * @private
     */
    DaffEmptyCartResolver.prototype.cartResolver;
    /**
     * @type {?}
     * @private
     */
    DaffEmptyCartResolver.prototype.router;
    /**
     * @type {?}
     * @private
     */
    DaffEmptyCartResolver.prototype.redirectUrl;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW1wdHktY2FydC1yZXNvbHZlci5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRhZmZvZGlsL2NhcnQvc3RhdGUvIiwic291cmNlcyI6WyJyZXNvbHZlcnMvZW1wdHktY2FydC1yZXNvbHZlci5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUVuRCxPQUFPLEVBQVcsTUFBTSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDbEQsT0FBTyxFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUc3QyxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUMzRCxPQUFPLEVBQXVCLG1CQUFtQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDakYsT0FBTyxFQUFFLGdDQUFnQyxFQUFFLE1BQU0sNkNBQTZDLENBQUM7Ozs7Ozs7Ozs7O0FBVy9GLE1BQU0sT0FBTyxxQkFBcUI7Ozs7OztJQUNoQyxZQUNRLFlBQThCLEVBQzlCLE1BQWMsRUFDNEIsV0FBbUI7UUFGN0QsaUJBQVksR0FBWixZQUFZLENBQWtCO1FBQzlCLFdBQU0sR0FBTixNQUFNLENBQVE7UUFDNEIsZ0JBQVcsR0FBWCxXQUFXLENBQVE7SUFDbkUsQ0FBQzs7OztJQUVILE9BQU87UUFDUCxPQUFPLElBQUksQ0FBQyxZQUFZLENBQUMsT0FBTyxFQUFFLENBQUMsSUFBSSxDQUN0QyxNQUFNOzs7O1FBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsSUFBSSxLQUFLLG1CQUFtQixDQUFDLHFCQUFxQixFQUFDLEVBQ3hFLEdBQUc7Ozs7UUFBQyxDQUFDLE1BQTJCLEVBQUUsRUFBRTtZQUNsQyxJQUFHLENBQUMsTUFBTSxDQUFDLE9BQU8sSUFBSSxNQUFNLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxNQUFNLEtBQUssQ0FBQyxFQUFFO2dCQUN2RCxJQUFJLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7YUFDN0M7WUFDRCxPQUFPLE1BQU0sQ0FBQztRQUNuQixDQUFDLEVBQUMsQ0FDRixDQUFDO0lBQ0YsQ0FBQzs7O1lBcEJGLFVBQVUsU0FBQztnQkFDWCxVQUFVLEVBQUUsTUFBTTthQUNsQjs7OztZQVpRLGdCQUFnQjtZQUpQLE1BQU07eUNBcUJyQixNQUFNLFNBQUMsZ0NBQWdDOzs7Ozs7OztJQUZ4Qyw2Q0FBc0M7Ozs7O0lBQ3RDLHVDQUFzQjs7Ozs7SUFDdEIsNENBQXFFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSwgSW5qZWN0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBY3Rpb24gfSBmcm9tICdAbmdyeC9zdG9yZSc7XG5pbXBvcnQgeyBSZXNvbHZlLCBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgZmlsdGVyLCBtYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5cbmltcG9ydCB7IERhZmZDYXJ0UmVzb2x2ZXIgfSBmcm9tICcuL2NhcnQtcmVzb2x2ZXIuc2VydmljZSc7XG5pbXBvcnQgeyBEYWZmQ2FydExvYWRTdWNjZXNzLCBEYWZmQ2FydEFjdGlvblR5cGVzIH0gZnJvbSAnLi4vYWN0aW9ucy9wdWJsaWNfYXBpJztcbmltcG9ydCB7IERhZmZFbXB0eUNhcnRSZXNvbHZlclJlZGlyZWN0VXJsIH0gZnJvbSAnLi90b2tlbnMvZW1wdHktY2FydC1yZXNvbHZlci1yZWRpcmVjdC50b2tlbic7XG5cbi8qKlxuICogUmVzb2x2ZXMgdGhlIGNhcnQgYmVmb3JlIG5hdmlnYXRpb24uIFJlZGlyZWN0cyB0byBhIGdpdmVuIHVybCB3aGVuIGEgZmFpbHVyZSBvY2N1cnMgZHVyaW5nIENhcnQgTG9hZC5cbiAqIFRoaXMgdXJsIGlzIGAvYCBieSBkZWZhdWx0IGJ1dCBjYW4gYmUgb3ZlcnJpZGRlbiB3aXRoIHRoZSBEYWZmQ2FydFJlc29sdmVyUmVkaXJlY3RVcmwgaW5qZWN0aW9uIHRva2VuLlxuICogVGhpcyByZXNvbHZlciBhbHNvIHJlZGlyZWN0cyB0byBhIGRpZmZlcmVudCB1cmwgd2hlbiB0aGUgY2FydCBpcyBlbXB0eSBhZnRlciBzdWNjZXNzZnVsbHkgbG9hZGluZy4gXG4gKiBUaGlzIHVybCBpcyBhbHNvIGAvYCBieSBkZWZhdWx0LCBidXQgY2FuIGJlIG92ZXJyaWRkZW4gd2l0aCB0aGUgRGFmZkVtcHR5Q2FydFJlc29sdmVyUmVkaXJlY3RVcmxcbiAqL1xuQEluamVjdGFibGUoe1xuXHRwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgRGFmZkVtcHR5Q2FydFJlc29sdmVyIGltcGxlbWVudHMgUmVzb2x2ZTxPYnNlcnZhYmxlPEFjdGlvbj4+IHtcbiAgY29uc3RydWN0b3IoXG5cdFx0cHJpdmF0ZSBjYXJ0UmVzb2x2ZXI6IERhZmZDYXJ0UmVzb2x2ZXIsIFxuXHRcdHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsXG5cdFx0QEluamVjdChEYWZmRW1wdHlDYXJ0UmVzb2x2ZXJSZWRpcmVjdFVybCkgcHJpdmF0ZSByZWRpcmVjdFVybDogc3RyaW5nXG5cdCkge31cblxuICByZXNvbHZlKCk6IE9ic2VydmFibGU8QWN0aW9uPiB7XG5cdFx0cmV0dXJuIHRoaXMuY2FydFJlc29sdmVyLnJlc29sdmUoKS5waXBlKFxuXHRcdFx0ZmlsdGVyKGFjdGlvbiA9PiBhY3Rpb24udHlwZSA9PT0gRGFmZkNhcnRBY3Rpb25UeXBlcy5DYXJ0TG9hZFN1Y2Nlc3NBY3Rpb24pLFxuICAgICAgbWFwKChhY3Rpb246IERhZmZDYXJ0TG9hZFN1Y2Nlc3MpID0+IHtcbiAgICAgICAgaWYoIWFjdGlvbi5wYXlsb2FkIHx8IGFjdGlvbi5wYXlsb2FkLml0ZW1zLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlQnlVcmwodGhpcy5yZWRpcmVjdFVybCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGFjdGlvbjtcblx0XHRcdH0pXG5cdFx0KTtcbiAgfVxufVxuIl19