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
export class DaffOrderResultGuard {
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
        return this.facade.hasOrderResult$.pipe(tap((/**
         * @param {?} hasOrderResult
         * @return {?}
         */
        hasOrderResult => {
            if (!hasOrderResult) {
                this.router.navigateByUrl(this.redirectUrl);
            }
        })));
    }
}
DaffOrderResultGuard.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
DaffOrderResultGuard.ctorParameters = () => [
    { type: DaffCartFacade },
    { type: Router },
    { type: String, decorators: [{ type: Inject, args: [DaffCartOrderResultGuardRedirectUrl,] }] }
];
/** @nocollapse */ DaffOrderResultGuard.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function DaffOrderResultGuard_Factory() { return new DaffOrderResultGuard(i0.ɵɵinject(i1.DaffCartFacade), i0.ɵɵinject(i2.Router), i0.ɵɵinject(i3.DaffCartOrderResultGuardRedirectUrl)); }, token: DaffOrderResultGuard, providedIn: "root" });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3JkZXItcmVzdWx0Lmd1YXJkLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRhZmZvZGlsL2NhcnQvc3RhdGUvIiwic291cmNlcyI6WyJndWFyZHMvb3JkZXItcmVzdWx0L29yZGVyLXJlc3VsdC5ndWFyZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFlLE1BQU0sRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBRXRELE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ25ELE9BQU8sRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUVyQyxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFDaEUsT0FBTyxFQUFFLG1DQUFtQyxFQUFFLE1BQU0scUNBQXFDLENBQUM7Ozs7Ozs7OztBQVMxRixNQUFNLE9BQU8sb0JBQW9COzs7Ozs7SUFDL0IsWUFDUSxNQUFzQixFQUN0QixNQUFjLEVBQytCLFdBQW1CO1FBRmhFLFdBQU0sR0FBTixNQUFNLENBQWdCO1FBQ3RCLFdBQU0sR0FBTixNQUFNLENBQVE7UUFDK0IsZ0JBQVcsR0FBWCxXQUFXLENBQVE7SUFDdEUsQ0FBQzs7OztJQUVILFdBQVc7UUFDVCxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsZUFBZSxDQUFDLElBQUksQ0FDeEMsR0FBRzs7OztRQUFDLGNBQWMsQ0FBQyxFQUFFO1lBQ3BCLElBQUksQ0FBQyxjQUFjLEVBQUU7Z0JBQ3BCLElBQUksQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQTthQUMzQztRQUNGLENBQUMsRUFBQyxDQUNBLENBQUE7SUFDSCxDQUFDOzs7WUFsQkYsVUFBVSxTQUFDO2dCQUNYLFVBQVUsRUFBRSxNQUFNO2FBQ2xCOzs7O1lBVFEsY0FBYztZQUxELE1BQU07eUNBbUJ6QixNQUFNLFNBQUMsbUNBQW1DOzs7Ozs7OztJQUYzQyxzQ0FBOEI7Ozs7O0lBQzlCLHNDQUFzQjs7Ozs7SUFDdEIsMkNBQXdFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2FuQWN0aXZhdGUsIFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBvZiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgSW5qZWN0YWJsZSwgSW5qZWN0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyB0YXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmltcG9ydCB7IERhZmZDYXJ0RmFjYWRlIH0gZnJvbSAnLi4vLi4vZmFjYWRlcy9jYXJ0L2NhcnQuZmFjYWRlJztcbmltcG9ydCB7IERhZmZDYXJ0T3JkZXJSZXN1bHRHdWFyZFJlZGlyZWN0VXJsIH0gZnJvbSAnLi9vcmRlci1yZXN1bHQtZ3VhcmQtcmVkaXJlY3QudG9rZW4nO1xuXG4vKipcbiAqIEEgcm91dGluZyBndWFyZCB0aGF0IHdpbGwgcmVkaXJlY3QgdG8gYSBnaXZlbiB1cmwgaWYgdGhlIGNhcnQgb3JkZXIgcmVzdWx0IGlzIG5vdCBkZWZpbmVkLlxuICogVGhlIHVybCBpcyBgL2AgYnkgZGVmYXVsdCwgYnV0IGNhbiBiZSBvdmVycmlkZGVuIHdpdGggdGhlIERhZmZDYXJ0T3JkZXJSZXN1bHRHdWFyZFJlZGlyZWN0VXJsIGluamVjdGlvbiB0b2tlbi5cbiAqL1xuQEluamVjdGFibGUoe1xuXHRwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgRGFmZk9yZGVyUmVzdWx0R3VhcmQgaW1wbGVtZW50cyBDYW5BY3RpdmF0ZSB7XG4gIGNvbnN0cnVjdG9yKFxuXHRcdHByaXZhdGUgZmFjYWRlOiBEYWZmQ2FydEZhY2FkZSxcblx0XHRwcml2YXRlIHJvdXRlcjogUm91dGVyLFxuXHRcdEBJbmplY3QoRGFmZkNhcnRPcmRlclJlc3VsdEd1YXJkUmVkaXJlY3RVcmwpIHByaXZhdGUgcmVkaXJlY3RVcmw6IHN0cmluZ1xuXHQpIHt9XG5cbiAgY2FuQWN0aXZhdGUoKTogT2JzZXJ2YWJsZTxib29sZWFuPiB7XG4gICAgcmV0dXJuIHRoaXMuZmFjYWRlLmhhc09yZGVyUmVzdWx0JC5waXBlKFxuXHRcdFx0dGFwKGhhc09yZGVyUmVzdWx0ID0+IHtcblx0XHRcdFx0aWYgKCFoYXNPcmRlclJlc3VsdCkge1xuXHRcdFx0XHRcdHRoaXMucm91dGVyLm5hdmlnYXRlQnlVcmwodGhpcy5yZWRpcmVjdFVybClcblx0XHRcdFx0fVxuXHRcdFx0fSlcbiAgICApXG4gIH1cbn1cbiJdfQ==