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
var DaffEmptyCartResolver = /** @class */ (function () {
    function DaffEmptyCartResolver(cartResolver, router, redirectUrl) {
        this.cartResolver = cartResolver;
        this.router = router;
        this.redirectUrl = redirectUrl;
    }
    /**
     * @return {?}
     */
    DaffEmptyCartResolver.prototype.resolve = /**
     * @return {?}
     */
    function () {
        var _this = this;
        return this.cartResolver.resolve().pipe(filter((/**
         * @param {?} action
         * @return {?}
         */
        function (action) { return action.type === DaffCartActionTypes.CartLoadSuccessAction; })), map((/**
         * @param {?} action
         * @return {?}
         */
        function (action) {
            if (!action.payload || action.payload.items.length === 0) {
                _this.router.navigateByUrl(_this.redirectUrl);
            }
            return action;
        })));
    };
    DaffEmptyCartResolver.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    DaffEmptyCartResolver.ctorParameters = function () { return [
        { type: DaffCartResolver },
        { type: Router },
        { type: String, decorators: [{ type: Inject, args: [DaffEmptyCartResolverRedirectUrl,] }] }
    ]; };
    /** @nocollapse */ DaffEmptyCartResolver.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function DaffEmptyCartResolver_Factory() { return new DaffEmptyCartResolver(i0.ɵɵinject(i1.DaffCartResolver), i0.ɵɵinject(i2.Router), i0.ɵɵinject(i3.DaffEmptyCartResolverRedirectUrl)); }, token: DaffEmptyCartResolver, providedIn: "root" });
    return DaffEmptyCartResolver;
}());
export { DaffEmptyCartResolver };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW1wdHktY2FydC1yZXNvbHZlci5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRhZmZvZGlsL2NhcnQvc3RhdGUvIiwic291cmNlcyI6WyJyZXNvbHZlcnMvZW1wdHktY2FydC1yZXNvbHZlci5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUVuRCxPQUFPLEVBQVcsTUFBTSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDbEQsT0FBTyxFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUc3QyxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUMzRCxPQUFPLEVBQXVCLG1CQUFtQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDakYsT0FBTyxFQUFFLGdDQUFnQyxFQUFFLE1BQU0sNkNBQTZDLENBQUM7Ozs7Ozs7Ozs7O0FBUS9GO0lBSUUsK0JBQ1EsWUFBOEIsRUFDOUIsTUFBYyxFQUM0QixXQUFtQjtRQUY3RCxpQkFBWSxHQUFaLFlBQVksQ0FBa0I7UUFDOUIsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUM0QixnQkFBVyxHQUFYLFdBQVcsQ0FBUTtJQUNuRSxDQUFDOzs7O0lBRUgsdUNBQU87OztJQUFQO1FBQUEsaUJBVUM7UUFURCxPQUFPLElBQUksQ0FBQyxZQUFZLENBQUMsT0FBTyxFQUFFLENBQUMsSUFBSSxDQUN0QyxNQUFNOzs7O1FBQUMsVUFBQSxNQUFNLElBQUksT0FBQSxNQUFNLENBQUMsSUFBSSxLQUFLLG1CQUFtQixDQUFDLHFCQUFxQixFQUF6RCxDQUF5RCxFQUFDLEVBQ3hFLEdBQUc7Ozs7UUFBQyxVQUFDLE1BQTJCO1lBQzlCLElBQUcsQ0FBQyxNQUFNLENBQUMsT0FBTyxJQUFJLE1BQU0sQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLE1BQU0sS0FBSyxDQUFDLEVBQUU7Z0JBQ3ZELEtBQUksQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLEtBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQzthQUM3QztZQUNELE9BQU8sTUFBTSxDQUFDO1FBQ25CLENBQUMsRUFBQyxDQUNGLENBQUM7SUFDRixDQUFDOztnQkFwQkYsVUFBVSxTQUFDO29CQUNYLFVBQVUsRUFBRSxNQUFNO2lCQUNsQjs7OztnQkFaUSxnQkFBZ0I7Z0JBSlAsTUFBTTs2Q0FxQnJCLE1BQU0sU0FBQyxnQ0FBZ0M7OztnQ0F2QjFDO0NBcUNDLEFBckJELElBcUJDO1NBbEJZLHFCQUFxQjs7Ozs7O0lBRWhDLDZDQUFzQzs7Ozs7SUFDdEMsdUNBQXNCOzs7OztJQUN0Qiw0Q0FBcUUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlLCBJbmplY3QgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEFjdGlvbiB9IGZyb20gJ0BuZ3J4L3N0b3JlJztcbmltcG9ydCB7IFJlc29sdmUsIFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBmaWx0ZXIsIG1hcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcblxuaW1wb3J0IHsgRGFmZkNhcnRSZXNvbHZlciB9IGZyb20gJy4vY2FydC1yZXNvbHZlci5zZXJ2aWNlJztcbmltcG9ydCB7IERhZmZDYXJ0TG9hZFN1Y2Nlc3MsIERhZmZDYXJ0QWN0aW9uVHlwZXMgfSBmcm9tICcuLi9hY3Rpb25zL3B1YmxpY19hcGknO1xuaW1wb3J0IHsgRGFmZkVtcHR5Q2FydFJlc29sdmVyUmVkaXJlY3RVcmwgfSBmcm9tICcuL3Rva2Vucy9lbXB0eS1jYXJ0LXJlc29sdmVyLXJlZGlyZWN0LnRva2VuJztcblxuLyoqXG4gKiBSZXNvbHZlcyB0aGUgY2FydCBiZWZvcmUgbmF2aWdhdGlvbi4gUmVkaXJlY3RzIHRvIGEgZ2l2ZW4gdXJsIHdoZW4gYSBmYWlsdXJlIG9jY3VycyBkdXJpbmcgQ2FydCBMb2FkLlxuICogVGhpcyB1cmwgaXMgYC9gIGJ5IGRlZmF1bHQgYnV0IGNhbiBiZSBvdmVycmlkZGVuIHdpdGggdGhlIERhZmZDYXJ0UmVzb2x2ZXJSZWRpcmVjdFVybCBpbmplY3Rpb24gdG9rZW4uXG4gKiBUaGlzIHJlc29sdmVyIGFsc28gcmVkaXJlY3RzIHRvIGEgZGlmZmVyZW50IHVybCB3aGVuIHRoZSBjYXJ0IGlzIGVtcHR5IGFmdGVyIHN1Y2Nlc3NmdWxseSBsb2FkaW5nLiBcbiAqIFRoaXMgdXJsIGlzIGFsc28gYC9gIGJ5IGRlZmF1bHQsIGJ1dCBjYW4gYmUgb3ZlcnJpZGRlbiB3aXRoIHRoZSBEYWZmRW1wdHlDYXJ0UmVzb2x2ZXJSZWRpcmVjdFVybFxuICovXG5ASW5qZWN0YWJsZSh7XG5cdHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBEYWZmRW1wdHlDYXJ0UmVzb2x2ZXIgaW1wbGVtZW50cyBSZXNvbHZlPE9ic2VydmFibGU8QWN0aW9uPj4ge1xuICBjb25zdHJ1Y3Rvcihcblx0XHRwcml2YXRlIGNhcnRSZXNvbHZlcjogRGFmZkNhcnRSZXNvbHZlciwgXG5cdFx0cHJpdmF0ZSByb3V0ZXI6IFJvdXRlcixcblx0XHRASW5qZWN0KERhZmZFbXB0eUNhcnRSZXNvbHZlclJlZGlyZWN0VXJsKSBwcml2YXRlIHJlZGlyZWN0VXJsOiBzdHJpbmdcblx0KSB7fVxuXG4gIHJlc29sdmUoKTogT2JzZXJ2YWJsZTxBY3Rpb24+IHtcblx0XHRyZXR1cm4gdGhpcy5jYXJ0UmVzb2x2ZXIucmVzb2x2ZSgpLnBpcGUoXG5cdFx0XHRmaWx0ZXIoYWN0aW9uID0+IGFjdGlvbi50eXBlID09PSBEYWZmQ2FydEFjdGlvblR5cGVzLkNhcnRMb2FkU3VjY2Vzc0FjdGlvbiksXG4gICAgICBtYXAoKGFjdGlvbjogRGFmZkNhcnRMb2FkU3VjY2VzcykgPT4ge1xuICAgICAgICBpZighYWN0aW9uLnBheWxvYWQgfHwgYWN0aW9uLnBheWxvYWQuaXRlbXMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGVCeVVybCh0aGlzLnJlZGlyZWN0VXJsKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gYWN0aW9uO1xuXHRcdFx0fSlcblx0XHQpO1xuICB9XG59XG4iXX0=