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
export class DaffPlacedOrderGuard {
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
        return this.facade.hasPlacedOrder$.pipe(tap((/**
         * @param {?} hasPlacedOrder
         * @return {?}
         */
        hasPlacedOrder => {
            if (!hasPlacedOrder) {
                this.router.navigateByUrl(this.redirectUrl);
            }
        })));
    }
}
DaffPlacedOrderGuard.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
DaffPlacedOrderGuard.ctorParameters = () => [
    { type: DaffOrderFacade },
    { type: Router },
    { type: String, decorators: [{ type: Inject, args: [DaffPlacedOrderGuardRedirectUrl,] }] }
];
/** @nocollapse */ DaffPlacedOrderGuard.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function DaffPlacedOrderGuard_Factory() { return new DaffPlacedOrderGuard(i0.ɵɵinject(i1.DaffOrderFacade), i0.ɵɵinject(i2.Router), i0.ɵɵinject(i3.DaffPlacedOrderGuardRedirectUrl)); }, token: DaffPlacedOrderGuard, providedIn: "root" });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGxhY2VkLW9yZGVyLmd1YXJkLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRhZmZvZGlsL29yZGVyL3N0YXRlLyIsInNvdXJjZXMiOlsiZ3VhcmRzL3BsYWNlZC1vcmRlci9wbGFjZWQtb3JkZXIuZ3VhcmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBZSxNQUFNLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUV0RCxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNuRCxPQUFPLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFckMsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBQ25FLE9BQU8sRUFBRSwrQkFBK0IsRUFBRSxNQUFNLHFDQUFxQyxDQUFDOzs7Ozs7Ozs7QUFTdEYsTUFBTSxPQUFPLG9CQUFvQjs7Ozs7O0lBQy9CLFlBQ1EsTUFBdUIsRUFDdkIsTUFBYyxFQUMyQixXQUFtQjtRQUY1RCxXQUFNLEdBQU4sTUFBTSxDQUFpQjtRQUN2QixXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQzJCLGdCQUFXLEdBQVgsV0FBVyxDQUFRO0lBQ2xFLENBQUM7Ozs7SUFFSCxXQUFXO1FBQ1QsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQ3hDLEdBQUc7Ozs7UUFBQyxjQUFjLENBQUMsRUFBRTtZQUNwQixJQUFJLENBQUMsY0FBYyxFQUFFO2dCQUNwQixJQUFJLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUE7YUFDM0M7UUFDRixDQUFDLEVBQUMsQ0FDRixDQUFBO0lBQ0QsQ0FBQzs7O1lBbEJGLFVBQVUsU0FBQztnQkFDWCxVQUFVLEVBQUUsTUFBTTthQUNsQjs7OztZQVRRLGVBQWU7WUFMRixNQUFNO3lDQW1CekIsTUFBTSxTQUFDLCtCQUErQjs7Ozs7Ozs7SUFGdkMsc0NBQStCOzs7OztJQUMvQixzQ0FBc0I7Ozs7O0lBQ3RCLDJDQUFvRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENhbkFjdGl2YXRlLCBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgSW5qZWN0YWJsZSwgSW5qZWN0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyB0YXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmltcG9ydCB7IERhZmZPcmRlckZhY2FkZSB9IGZyb20gJy4uLy4uL2ZhY2FkZXMvb3JkZXIvb3JkZXIuZmFjYWRlJztcbmltcG9ydCB7IERhZmZQbGFjZWRPcmRlckd1YXJkUmVkaXJlY3RVcmwgfSBmcm9tICcuL3BsYWNlZC1vcmRlci1ndWFyZC1yZWRpcmVjdC50b2tlbic7XG5cbi8qKlxuICogQSByb3V0aW5nIGd1YXJkIHRoYXQgd2lsbCByZWRpcmVjdCB0byBhIGdpdmVuIHVybCBpZiB0aGUgcGxhY2VkIG9yZGVyIGlzIG5vdCBkZWZpbmVkLlxuICogVGhlIHVybCBpcyBgL2AgYnkgZGVmYXVsdCwgYnV0IGNhbiBiZSBvdmVycmlkZGVuIHdpdGggdGhlIERhZmZQbGFjZWRPcmRlckd1YXJkUmVkaXJlY3RVcmwgaW5qZWN0aW9uIHRva2VuLlxuICovXG5ASW5qZWN0YWJsZSh7XG5cdHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBEYWZmUGxhY2VkT3JkZXJHdWFyZCBpbXBsZW1lbnRzIENhbkFjdGl2YXRlIHtcbiAgY29uc3RydWN0b3IoXG5cdFx0cHJpdmF0ZSBmYWNhZGU6IERhZmZPcmRlckZhY2FkZSxcblx0XHRwcml2YXRlIHJvdXRlcjogUm91dGVyLFxuXHRcdEBJbmplY3QoRGFmZlBsYWNlZE9yZGVyR3VhcmRSZWRpcmVjdFVybCkgcHJpdmF0ZSByZWRpcmVjdFVybDogc3RyaW5nXG5cdCkge31cblxuICBjYW5BY3RpdmF0ZSgpOiBPYnNlcnZhYmxlPGJvb2xlYW4+IHtcbiAgICByZXR1cm4gdGhpcy5mYWNhZGUuaGFzUGxhY2VkT3JkZXIkLnBpcGUoXG5cdFx0XHR0YXAoaGFzUGxhY2VkT3JkZXIgPT4ge1xuXHRcdFx0XHRpZiAoIWhhc1BsYWNlZE9yZGVyKSB7XG5cdFx0XHRcdFx0dGhpcy5yb3V0ZXIubmF2aWdhdGVCeVVybCh0aGlzLnJlZGlyZWN0VXJsKVxuXHRcdFx0XHR9XG5cdFx0XHR9KVxuXHRcdClcbiAgfVxufVxuIl19