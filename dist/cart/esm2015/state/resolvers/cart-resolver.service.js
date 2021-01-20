/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable, Inject } from '@angular/core';
import { Store, ActionsSubject } from '@ngrx/store';
import { Router } from '@angular/router';
import { map, filter, take } from 'rxjs/operators';
import { DaffResolveCart, DaffCartActionTypes } from '../actions/public_api';
import { DaffCartResolverRedirectUrl } from './tokens/cart-resolver-redirect.token';
import * as i0 from "@angular/core";
import * as i1 from "@ngrx/store";
import * as i2 from "@angular/router";
import * as i3 from "./tokens/cart-resolver-redirect.token";
/**
 * Resolves the cart before navigation. Redirects to a given url when a failure occurs during Cart Load.
 * This url is `/` by default but can be overridden with the DaffCartResolverRedirectUrl injection token.
 */
export class DaffCartResolver {
    /**
     * @param {?} store
     * @param {?} dispatcher
     * @param {?} router
     * @param {?} redirectUrl
     */
    constructor(store, dispatcher, router, redirectUrl) {
        this.store = store;
        this.dispatcher = dispatcher;
        this.router = router;
        this.redirectUrl = redirectUrl;
    }
    /**
     * @return {?}
     */
    resolve() {
        this.store.dispatch(new DaffResolveCart());
        return this.dispatcher.pipe(filter((/**
         * @param {?} action
         * @return {?}
         */
        action => action.type === DaffCartActionTypes.CartLoadSuccessAction
            || action.type === DaffCartActionTypes.CartLoadFailureAction
            || action.type === DaffCartActionTypes.CartCreateFailureAction
            || action.type === DaffCartActionTypes.CartStorageFailureAction)), map((/**
         * @param {?} action
         * @return {?}
         */
        (action) => {
            if (action.type !== DaffCartActionTypes.CartLoadSuccessAction) {
                this.router.navigateByUrl(this.redirectUrl);
            }
            return action;
        })), take(1));
    }
}
DaffCartResolver.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
DaffCartResolver.ctorParameters = () => [
    { type: Store },
    { type: ActionsSubject },
    { type: Router },
    { type: String, decorators: [{ type: Inject, args: [DaffCartResolverRedirectUrl,] }] }
];
/** @nocollapse */ DaffCartResolver.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function DaffCartResolver_Factory() { return new DaffCartResolver(i0.ɵɵinject(i1.Store), i0.ɵɵinject(i1.ActionsSubject), i0.ɵɵinject(i2.Router), i0.ɵɵinject(i3.DaffCartResolverRedirectUrl)); }, token: DaffCartResolver, providedIn: "root" });
if (false) {
    /**
     * @type {?}
     * @private
     */
    DaffCartResolver.prototype.store;
    /**
     * @type {?}
     * @private
     */
    DaffCartResolver.prototype.dispatcher;
    /**
     * @type {?}
     * @private
     */
    DaffCartResolver.prototype.router;
    /**
     * @type {?}
     * @private
     */
    DaffCartResolver.prototype.redirectUrl;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FydC1yZXNvbHZlci5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRhZmZvZGlsL2NhcnQvc3RhdGUvIiwic291cmNlcyI6WyJyZXNvbHZlcnMvY2FydC1yZXNvbHZlci5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNuRCxPQUFPLEVBQUUsS0FBSyxFQUFFLGNBQWMsRUFBVSxNQUFNLGFBQWEsQ0FBQztBQUM1RCxPQUFPLEVBQVcsTUFBTSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDbEQsT0FBTyxFQUFFLEdBQUcsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFHbkQsT0FBTyxFQUNOLGVBQWUsRUFDZixtQkFBbUIsRUFDbkIsTUFBTSx1QkFBdUIsQ0FBQztBQUMvQixPQUFPLEVBQUUsMkJBQTJCLEVBQUUsTUFBTSx1Q0FBdUMsQ0FBQzs7Ozs7Ozs7O0FBVXBGLE1BQU0sT0FBTyxnQkFBZ0I7Ozs7Ozs7SUFDM0IsWUFDVSxLQUFtQyxFQUNuQyxVQUEwQixFQUM1QixNQUFjLEVBQ3VCLFdBQW1CO1FBSHRELFVBQUssR0FBTCxLQUFLLENBQThCO1FBQ25DLGVBQVUsR0FBVixVQUFVLENBQWdCO1FBQzVCLFdBQU0sR0FBTixNQUFNLENBQVE7UUFDdUIsZ0JBQVcsR0FBWCxXQUFXLENBQVE7SUFDN0QsQ0FBQzs7OztJQUVKLE9BQU87UUFDTCxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxJQUFJLGVBQWUsRUFBRSxDQUFDLENBQUM7UUFFM0MsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FDekIsTUFBTTs7OztRQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLElBQUksS0FBSyxtQkFBbUIsQ0FBQyxxQkFBcUI7ZUFDckUsTUFBTSxDQUFDLElBQUksS0FBSyxtQkFBbUIsQ0FBQyxxQkFBcUI7ZUFDN0QsTUFBTSxDQUFDLElBQUksS0FBSyxtQkFBbUIsQ0FBQyx1QkFBdUI7ZUFDM0QsTUFBTSxDQUFDLElBQUksS0FBSyxtQkFBbUIsQ0FBQyx3QkFBd0IsRUFBQyxFQUM5RCxHQUFHOzs7O1FBQUMsQ0FBQyxNQUFNLEVBQUUsRUFBRTtZQUNiLElBQUcsTUFBTSxDQUFDLElBQUksS0FBSyxtQkFBbUIsQ0FBQyxxQkFBcUIsRUFBRTtnQkFDNUQsSUFBSSxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO2FBQ2pEO1lBQ0csT0FBTyxNQUFNLENBQUM7UUFDaEIsQ0FBQyxFQUFDLEVBQ0YsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUNSLENBQUM7SUFDSixDQUFDOzs7WUEzQkYsVUFBVSxTQUFDO2dCQUNYLFVBQVUsRUFBRSxNQUFNO2FBQ2xCOzs7O1lBbEJRLEtBQUs7WUFBRSxjQUFjO1lBQ1osTUFBTTt5Q0F1QnJCLE1BQU0sU0FBQywyQkFBMkI7Ozs7Ozs7O0lBSGpDLGlDQUEyQzs7Ozs7SUFDM0Msc0NBQWtDOzs7OztJQUNwQyxrQ0FBc0I7Ozs7O0lBQ3RCLHVDQUFnRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUsIEluamVjdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgU3RvcmUsIEFjdGlvbnNTdWJqZWN0LCBBY3Rpb24gfSBmcm9tICdAbmdyeC9zdG9yZSc7XG5pbXBvcnQgeyBSZXNvbHZlLCBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgbWFwLCBmaWx0ZXIsIHRha2UgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5cbmltcG9ydCB7IFxuXHREYWZmUmVzb2x2ZUNhcnQsIFxuXHREYWZmQ2FydEFjdGlvblR5cGVzXG59IGZyb20gJy4uL2FjdGlvbnMvcHVibGljX2FwaSc7XG5pbXBvcnQgeyBEYWZmQ2FydFJlc29sdmVyUmVkaXJlY3RVcmwgfSBmcm9tICcuL3Rva2Vucy9jYXJ0LXJlc29sdmVyLXJlZGlyZWN0LnRva2VuJztcbmltcG9ydCB7IERhZmZDYXJ0UmVkdWNlcnNTdGF0ZSB9IGZyb20gJy4uL3JlZHVjZXJzL3B1YmxpY19hcGknO1xuXG4vKipcbiAqIFJlc29sdmVzIHRoZSBjYXJ0IGJlZm9yZSBuYXZpZ2F0aW9uLiBSZWRpcmVjdHMgdG8gYSBnaXZlbiB1cmwgd2hlbiBhIGZhaWx1cmUgb2NjdXJzIGR1cmluZyBDYXJ0IExvYWQuXG4gKiBUaGlzIHVybCBpcyBgL2AgYnkgZGVmYXVsdCBidXQgY2FuIGJlIG92ZXJyaWRkZW4gd2l0aCB0aGUgRGFmZkNhcnRSZXNvbHZlclJlZGlyZWN0VXJsIGluamVjdGlvbiB0b2tlbi5cbiAqL1xuQEluamVjdGFibGUoe1xuXHRwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgRGFmZkNhcnRSZXNvbHZlciBpbXBsZW1lbnRzIFJlc29sdmU8T2JzZXJ2YWJsZTxBY3Rpb24+PiB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgc3RvcmU6IFN0b3JlPERhZmZDYXJ0UmVkdWNlcnNTdGF0ZT4sXG4gICAgcHJpdmF0ZSBkaXNwYXRjaGVyOiBBY3Rpb25zU3ViamVjdCxcblx0XHRwcml2YXRlIHJvdXRlcjogUm91dGVyLFxuXHRcdEBJbmplY3QoRGFmZkNhcnRSZXNvbHZlclJlZGlyZWN0VXJsKSBwcml2YXRlIHJlZGlyZWN0VXJsOiBzdHJpbmdcbiAgKSB7fVxuXG4gIHJlc29sdmUoKTogT2JzZXJ2YWJsZTxBY3Rpb24+IHtcbiAgICB0aGlzLnN0b3JlLmRpc3BhdGNoKG5ldyBEYWZmUmVzb2x2ZUNhcnQoKSk7XG4gICAgXG4gICAgcmV0dXJuIHRoaXMuZGlzcGF0Y2hlci5waXBlKFxuICAgICAgZmlsdGVyKGFjdGlvbiA9PiBhY3Rpb24udHlwZSA9PT0gRGFmZkNhcnRBY3Rpb25UeXBlcy5DYXJ0TG9hZFN1Y2Nlc3NBY3Rpb25cbiAgICAgICAgfHwgYWN0aW9uLnR5cGUgPT09IERhZmZDYXJ0QWN0aW9uVHlwZXMuQ2FydExvYWRGYWlsdXJlQWN0aW9uXG5cdFx0XHRcdHx8IGFjdGlvbi50eXBlID09PSBEYWZmQ2FydEFjdGlvblR5cGVzLkNhcnRDcmVhdGVGYWlsdXJlQWN0aW9uXG5cdFx0XHRcdHx8IGFjdGlvbi50eXBlID09PSBEYWZmQ2FydEFjdGlvblR5cGVzLkNhcnRTdG9yYWdlRmFpbHVyZUFjdGlvbiksXG4gICAgICBtYXAoKGFjdGlvbikgPT4ge1xuICAgICAgICBpZihhY3Rpb24udHlwZSAhPT0gRGFmZkNhcnRBY3Rpb25UeXBlcy5DYXJ0TG9hZFN1Y2Nlc3NBY3Rpb24pIHtcbiAgICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZUJ5VXJsKHRoaXMucmVkaXJlY3RVcmwpO1xuXHRcdFx0XHR9XG4gICAgICAgIHJldHVybiBhY3Rpb247XG4gICAgICB9KSxcbiAgICAgIHRha2UoMSlcbiAgICApO1xuICB9XG59XG4iXX0=