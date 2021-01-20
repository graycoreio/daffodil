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
export class DaffCartItemsGuard {
    /**
     * @param {?} facade
     * @param {?} router
     * @param {?} redirectUrl
     */
    constructor(facade, router, redirectUrl) {
        this.facade = facade;
        this.router = router;
        this.redirectUrl = redirectUrl;
    }
    /**
     * @return {?}
     */
    canActivate() {
        return this.facade.isCartEmpty$.pipe(map((/**
         * @param {?} isCartEmpty
         * @return {?}
         */
        isCartEmpty => !isCartEmpty)), take(1), tap((/**
         * @param {?} hasNonEmptyCart
         * @return {?}
         */
        hasNonEmptyCart => {
            if (!hasNonEmptyCart) {
                this.router.navigateByUrl(this.redirectUrl);
            }
        })));
    }
}
DaffCartItemsGuard.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
DaffCartItemsGuard.ctorParameters = () => [
    { type: DaffCartFacade },
    { type: Router },
    { type: String, decorators: [{ type: Inject, args: [DaffCartItemsGuardRedirectUrl,] }] }
];
/** @nocollapse */ DaffCartItemsGuard.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function DaffCartItemsGuard_Factory() { return new DaffCartItemsGuard(i0.ɵɵinject(i1.DaffCartFacade), i0.ɵɵinject(i2.Router), i0.ɵɵinject(i3.DaffCartItemsGuardRedirectUrl)); }, token: DaffCartItemsGuard, providedIn: "root" });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FydC1pdGVtcy5ndWFyZC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkYWZmb2RpbC9jYXJ0L3N0YXRlLyIsInNvdXJjZXMiOlsiZ3VhcmRzL2NhcnQtaXRlbXMvY2FydC1pdGVtcy5ndWFyZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFlLE1BQU0sRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBRXRELE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ25ELE9BQU8sRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRWhELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUNoRSxPQUFPLEVBQUUsNkJBQTZCLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQzs7Ozs7Ozs7Ozs7O0FBWWxGLE1BQU0sT0FBTyxrQkFBa0I7Ozs7OztJQUM3QixZQUNRLE1BQXNCLEVBQ3RCLE1BQWMsRUFDeUIsV0FBbUI7UUFGMUQsV0FBTSxHQUFOLE1BQU0sQ0FBZ0I7UUFDdEIsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUN5QixnQkFBVyxHQUFYLFdBQVcsQ0FBUTtJQUNoRSxDQUFDOzs7O0lBRUgsV0FBVztRQUNULE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUNsQyxHQUFHOzs7O1FBQUMsV0FBVyxDQUFDLEVBQUUsQ0FBQyxDQUFDLFdBQVcsRUFBQyxFQUNoQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQ1YsR0FBRzs7OztRQUFDLGVBQWUsQ0FBQyxFQUFFO1lBQ3JCLElBQUksQ0FBQyxlQUFlLEVBQUU7Z0JBQ3JCLElBQUksQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQTthQUMzQztRQUNGLENBQUMsRUFBQyxDQUNGLENBQUE7SUFDRCxDQUFDOzs7WUFwQkYsVUFBVSxTQUFDO2dCQUNYLFVBQVUsRUFBRSxNQUFNO2FBQ2xCOzs7O1lBWlEsY0FBYztZQUxELE1BQU07eUNBc0J6QixNQUFNLFNBQUMsNkJBQTZCOzs7Ozs7OztJQUZyQyxvQ0FBOEI7Ozs7O0lBQzlCLG9DQUFzQjs7Ozs7SUFDdEIseUNBQWtFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2FuQWN0aXZhdGUsIFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBJbmplY3RhYmxlLCBJbmplY3QgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IHRhcCwgdGFrZSwgbWFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5pbXBvcnQgeyBEYWZmQ2FydEZhY2FkZSB9IGZyb20gJy4uLy4uL2ZhY2FkZXMvY2FydC9jYXJ0LmZhY2FkZSc7XG5pbXBvcnQgeyBEYWZmQ2FydEl0ZW1zR3VhcmRSZWRpcmVjdFVybCB9IGZyb20gJy4vY2FydC1pdGVtcy1ndWFyZC1yZWRpcmVjdC50b2tlbic7XG5cbi8qKlxuICogQSByb3V0aW5nIGd1YXJkIHRoYXQgd2lsbCBlbnN1cmUgdGhhdCB0aGUgY2FydCBpcyBub3QgZW1wdHkgYmVmb3JlIGFsbG93aW5nIGFjdGl2YXRpb24gb2YgYSByb3V0ZS5cbiAqIElmIHRoZSBjYXJ0IGhhcyBpdGVtcyBpbiBpdCwgdGhlbiBgY2FuQWN0aXZhdGVgIHdpbGwgZW1pdCB0cnVlLiBJZiBub3QsIGl0IHdpbGwgZW1pdCBmYWxzZSBhbmQgcmVkaXJlY3QgdG8gYSBzcGVjaWZpYyBwYXRoLlxuICogVGhlIHVybCBpcyBgL2AgYnkgZGVmYXVsdCBidXQgY2FuIGJlIG92ZXJyaWRkZW4gd2l0aCB0aGUge0BsaW5rIERhZmZDYXJ0SXRlbXNHdWFyZFJlZGlyZWN0VXJsfSBpbmplY3Rpb24gdG9rZW4uXG4gKiBUaGUgZ3VhcmQgd2lsbCBub3Qgd2FpdCB1bnRpbCB0aGUgY2FydCBoYXMgYmVlbiByZXNvbHZlZCBiZWZvcmUgcGVyZm9ybWluZyB0aGUgY2hlY2sgYW5kIGVtaXR0aW5nLlxuICogRW5zdXJlIHRoYXQgdGhlIGNhcnQgaXMgcmVzb2x2ZWQgcHJpb3IgdG8gcnVubmluZyB0aGlzIGd1YXJkIHdpdGggdGhlIHtAbGluayBEYWZmUmVzb2x2ZWRDYXJ0R3VhcmR9LlxuICovXG5ASW5qZWN0YWJsZSh7XG5cdHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBEYWZmQ2FydEl0ZW1zR3VhcmQgaW1wbGVtZW50cyBDYW5BY3RpdmF0ZSB7XG4gIGNvbnN0cnVjdG9yKFxuXHRcdHByaXZhdGUgZmFjYWRlOiBEYWZmQ2FydEZhY2FkZSxcblx0XHRwcml2YXRlIHJvdXRlcjogUm91dGVyLFxuXHRcdEBJbmplY3QoRGFmZkNhcnRJdGVtc0d1YXJkUmVkaXJlY3RVcmwpIHByaXZhdGUgcmVkaXJlY3RVcmw6IHN0cmluZ1xuXHQpIHt9XG5cbiAgY2FuQWN0aXZhdGUoKTogT2JzZXJ2YWJsZTxib29sZWFuPiB7XG4gICAgcmV0dXJuIHRoaXMuZmFjYWRlLmlzQ2FydEVtcHR5JC5waXBlKFxuICAgICAgbWFwKGlzQ2FydEVtcHR5ID0+ICFpc0NhcnRFbXB0eSksXG4gICAgICB0YWtlKDEpLFxuXHRcdFx0dGFwKGhhc05vbkVtcHR5Q2FydCA9PiB7XG5cdFx0XHRcdGlmICghaGFzTm9uRW1wdHlDYXJ0KSB7XG5cdFx0XHRcdFx0dGhpcy5yb3V0ZXIubmF2aWdhdGVCeVVybCh0aGlzLnJlZGlyZWN0VXJsKVxuXHRcdFx0XHR9XG5cdFx0XHR9KVxuXHRcdClcbiAgfVxufVxuIl19