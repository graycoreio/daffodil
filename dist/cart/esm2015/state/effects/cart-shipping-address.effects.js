/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable, Inject } from '@angular/core';
import { switchMap, map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { DaffCartStorageService, DAFF_CART_ERROR_MATCHER } from '@daffodil/cart';
import { DaffCartShippingAddressDriver } from '@daffodil/cart/driver';
import { DaffCartShippingAddressActionTypes, DaffCartShippingAddressLoadSuccess, DaffCartShippingAddressLoadFailure, DaffCartShippingAddressUpdateSuccess, DaffCartShippingAddressUpdateFailure, } from '../actions/public_api';
/**
 * @template T, V
 */
export class DaffCartShippingAddressEffects {
    /**
     * @param {?} actions$
     * @param {?} errorMatcher
     * @param {?} driver
     * @param {?} storage
     */
    constructor(actions$, errorMatcher, driver, storage) {
        this.actions$ = actions$;
        this.errorMatcher = errorMatcher;
        this.driver = driver;
        this.storage = storage;
        this.get$ = this.actions$.pipe(ofType(DaffCartShippingAddressActionTypes.CartShippingAddressLoadAction), switchMap((/**
         * @param {?} action
         * @return {?}
         */
        (action) => this.driver.get(this.storage.getCartId()).pipe(map((/**
         * @param {?} resp
         * @return {?}
         */
        (resp) => new DaffCartShippingAddressLoadSuccess(resp))), catchError((/**
         * @param {?} error
         * @return {?}
         */
        error => of(new DaffCartShippingAddressLoadFailure(this.errorMatcher(error)))))))));
        this.update$ = this.actions$.pipe(ofType(DaffCartShippingAddressActionTypes.CartShippingAddressUpdateAction), switchMap((/**
         * @param {?} action
         * @return {?}
         */
        (action) => this.driver.update(this.storage.getCartId(), action.payload).pipe(map((/**
         * @param {?} resp
         * @return {?}
         */
        (resp) => new DaffCartShippingAddressUpdateSuccess(resp))), catchError((/**
         * @param {?} error
         * @return {?}
         */
        error => of(new DaffCartShippingAddressUpdateFailure(this.errorMatcher(error)))))))));
    }
}
DaffCartShippingAddressEffects.decorators = [
    { type: Injectable }
];
/** @nocollapse */
DaffCartShippingAddressEffects.ctorParameters = () => [
    { type: Actions },
    { type: Function, decorators: [{ type: Inject, args: [DAFF_CART_ERROR_MATCHER,] }] },
    { type: undefined, decorators: [{ type: Inject, args: [DaffCartShippingAddressDriver,] }] },
    { type: DaffCartStorageService }
];
tslib_1.__decorate([
    Effect(),
    tslib_1.__metadata("design:type", Object)
], DaffCartShippingAddressEffects.prototype, "get$", void 0);
tslib_1.__decorate([
    Effect(),
    tslib_1.__metadata("design:type", Object)
], DaffCartShippingAddressEffects.prototype, "update$", void 0);
if (false) {
    /** @type {?} */
    DaffCartShippingAddressEffects.prototype.get$;
    /** @type {?} */
    DaffCartShippingAddressEffects.prototype.update$;
    /**
     * @type {?}
     * @private
     */
    DaffCartShippingAddressEffects.prototype.actions$;
    /**
     * @type {?}
     * @private
     */
    DaffCartShippingAddressEffects.prototype.errorMatcher;
    /**
     * @type {?}
     * @private
     */
    DaffCartShippingAddressEffects.prototype.driver;
    /**
     * @type {?}
     * @private
     */
    DaffCartShippingAddressEffects.prototype.storage;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FydC1zaGlwcGluZy1hZGRyZXNzLmVmZmVjdHMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGFmZm9kaWwvY2FydC9zdGF0ZS8iLCJzb3VyY2VzIjpbImVmZmVjdHMvY2FydC1zaGlwcGluZy1hZGRyZXNzLmVmZmVjdHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNuRCxPQUFPLEVBQUUsU0FBUyxFQUFFLEdBQUcsRUFBRSxVQUFVLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUM1RCxPQUFPLEVBQUUsRUFBRSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQzFCLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUV4RCxPQUFPLEVBQTZCLHNCQUFzQixFQUFFLHVCQUF1QixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDNUcsT0FBTyxFQUFFLDZCQUE2QixFQUEyQyxNQUFNLHVCQUF1QixDQUFDO0FBRS9HLE9BQU8sRUFDTCxrQ0FBa0MsRUFFbEMsa0NBQWtDLEVBQ2xDLGtDQUFrQyxFQUVsQyxvQ0FBb0MsRUFDcEMsb0NBQW9DLEdBQ3JDLE1BQU0sdUJBQXVCLENBQUM7Ozs7QUFHL0IsTUFBTSxPQUFPLDhCQUE4Qjs7Ozs7OztJQUN6QyxZQUNVLFFBQWlCLEVBQ2dCLFlBQXNCLEVBQ2hCLE1BQXFELEVBQzVGLE9BQStCO1FBSC9CLGFBQVEsR0FBUixRQUFRLENBQVM7UUFDZ0IsaUJBQVksR0FBWixZQUFZLENBQVU7UUFDaEIsV0FBTSxHQUFOLE1BQU0sQ0FBK0M7UUFDNUYsWUFBTyxHQUFQLE9BQU8sQ0FBd0I7UUFJekMsU0FBSSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUN2QixNQUFNLENBQUMsa0NBQWtDLENBQUMsNkJBQTZCLENBQUMsRUFDeEUsU0FBUzs7OztRQUFDLENBQUMsTUFBbUMsRUFBRSxFQUFFLENBQ2hELElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQzVDLEdBQUc7Ozs7UUFBQyxDQUFDLElBQU8sRUFBRSxFQUFFLENBQUMsSUFBSSxrQ0FBa0MsQ0FBQyxJQUFJLENBQUMsRUFBQyxFQUM5RCxVQUFVOzs7O1FBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsSUFBSSxrQ0FBa0MsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsRUFBQyxDQUMxRixFQUNGLENBQ0YsQ0FBQTtRQUdELFlBQU8sR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FDMUIsTUFBTSxDQUFDLGtDQUFrQyxDQUFDLCtCQUErQixDQUFDLEVBQzFFLFNBQVM7Ozs7UUFBQyxDQUFDLE1BQXdDLEVBQUUsRUFBRSxDQUNyRCxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsRUFBRSxFQUFFLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQyxJQUFJLENBQy9ELEdBQUc7Ozs7UUFBQyxDQUFDLElBQU8sRUFBRSxFQUFFLENBQUMsSUFBSSxvQ0FBb0MsQ0FBQyxJQUFJLENBQUMsRUFBQyxFQUNoRSxVQUFVOzs7O1FBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsSUFBSSxvQ0FBb0MsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsRUFBQyxDQUM1RixFQUNGLENBQ0YsQ0FBQTtJQXRCRSxDQUFDOzs7WUFQTCxVQUFVOzs7O1lBZkYsT0FBTztZQW1CMkMsUUFBUSx1QkFBOUQsTUFBTSxTQUFDLHVCQUF1Qjs0Q0FDOUIsTUFBTSxTQUFDLDZCQUE2QjtZQWxCTCxzQkFBc0I7O0FBdUJ4RDtJQURDLE1BQU0sRUFBRTs7NERBU1I7QUFHRDtJQURDLE1BQU0sRUFBRTs7K0RBU1I7OztJQXBCRCw4Q0FTQzs7SUFFRCxpREFTQzs7Ozs7SUExQkMsa0RBQXlCOzs7OztJQUN6QixzREFBK0Q7Ozs7O0lBQy9ELGdEQUFvRzs7Ozs7SUFDcEcsaURBQXVDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSwgSW5qZWN0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBzd2l0Y2hNYXAsIG1hcCwgY2F0Y2hFcnJvciB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IG9mIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBBY3Rpb25zLCBFZmZlY3QsIG9mVHlwZSB9IGZyb20gJ0BuZ3J4L2VmZmVjdHMnO1xuXG5pbXBvcnQgeyBEYWZmQ2FydEFkZHJlc3MsIERhZmZDYXJ0LCBEYWZmQ2FydFN0b3JhZ2VTZXJ2aWNlLCBEQUZGX0NBUlRfRVJST1JfTUFUQ0hFUiB9IGZyb20gJ0BkYWZmb2RpbC9jYXJ0JztcbmltcG9ydCB7IERhZmZDYXJ0U2hpcHBpbmdBZGRyZXNzRHJpdmVyLCBEYWZmQ2FydFNoaXBwaW5nQWRkcmVzc1NlcnZpY2VJbnRlcmZhY2UgfSBmcm9tICdAZGFmZm9kaWwvY2FydC9kcml2ZXInO1xuXG5pbXBvcnQge1xuICBEYWZmQ2FydFNoaXBwaW5nQWRkcmVzc0FjdGlvblR5cGVzLFxuICBEYWZmQ2FydFNoaXBwaW5nQWRkcmVzc0xvYWQsXG4gIERhZmZDYXJ0U2hpcHBpbmdBZGRyZXNzTG9hZFN1Y2Nlc3MsXG4gIERhZmZDYXJ0U2hpcHBpbmdBZGRyZXNzTG9hZEZhaWx1cmUsXG4gIERhZmZDYXJ0U2hpcHBpbmdBZGRyZXNzVXBkYXRlLFxuICBEYWZmQ2FydFNoaXBwaW5nQWRkcmVzc1VwZGF0ZVN1Y2Nlc3MsXG4gIERhZmZDYXJ0U2hpcHBpbmdBZGRyZXNzVXBkYXRlRmFpbHVyZSxcbn0gZnJvbSAnLi4vYWN0aW9ucy9wdWJsaWNfYXBpJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIERhZmZDYXJ0U2hpcHBpbmdBZGRyZXNzRWZmZWN0czxUIGV4dGVuZHMgRGFmZkNhcnRBZGRyZXNzLCBWIGV4dGVuZHMgRGFmZkNhcnQ+IHtcbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBhY3Rpb25zJDogQWN0aW9ucyxcbiAgICBASW5qZWN0KERBRkZfQ0FSVF9FUlJPUl9NQVRDSEVSKSBwcml2YXRlIGVycm9yTWF0Y2hlcjogRnVuY3Rpb24sXG4gICAgQEluamVjdChEYWZmQ2FydFNoaXBwaW5nQWRkcmVzc0RyaXZlcikgcHJpdmF0ZSBkcml2ZXI6IERhZmZDYXJ0U2hpcHBpbmdBZGRyZXNzU2VydmljZUludGVyZmFjZTxULCBWPixcbiAgICBwcml2YXRlIHN0b3JhZ2U6IERhZmZDYXJ0U3RvcmFnZVNlcnZpY2VcbiAgKSB7fVxuXG4gIEBFZmZlY3QoKVxuICBnZXQkID0gdGhpcy5hY3Rpb25zJC5waXBlKFxuICAgIG9mVHlwZShEYWZmQ2FydFNoaXBwaW5nQWRkcmVzc0FjdGlvblR5cGVzLkNhcnRTaGlwcGluZ0FkZHJlc3NMb2FkQWN0aW9uKSxcbiAgICBzd2l0Y2hNYXAoKGFjdGlvbjogRGFmZkNhcnRTaGlwcGluZ0FkZHJlc3NMb2FkKSA9PlxuICAgICAgdGhpcy5kcml2ZXIuZ2V0KHRoaXMuc3RvcmFnZS5nZXRDYXJ0SWQoKSkucGlwZShcbiAgICAgICAgbWFwKChyZXNwOiBUKSA9PiBuZXcgRGFmZkNhcnRTaGlwcGluZ0FkZHJlc3NMb2FkU3VjY2VzcyhyZXNwKSksXG4gICAgICAgIGNhdGNoRXJyb3IoZXJyb3IgPT4gb2YobmV3IERhZmZDYXJ0U2hpcHBpbmdBZGRyZXNzTG9hZEZhaWx1cmUodGhpcy5lcnJvck1hdGNoZXIoZXJyb3IpKSkpXG4gICAgICApXG4gICAgKVxuICApXG5cbiAgQEVmZmVjdCgpXG4gIHVwZGF0ZSQgPSB0aGlzLmFjdGlvbnMkLnBpcGUoXG4gICAgb2ZUeXBlKERhZmZDYXJ0U2hpcHBpbmdBZGRyZXNzQWN0aW9uVHlwZXMuQ2FydFNoaXBwaW5nQWRkcmVzc1VwZGF0ZUFjdGlvbiksXG4gICAgc3dpdGNoTWFwKChhY3Rpb246IERhZmZDYXJ0U2hpcHBpbmdBZGRyZXNzVXBkYXRlPFQ+KSA9PlxuICAgICAgdGhpcy5kcml2ZXIudXBkYXRlKHRoaXMuc3RvcmFnZS5nZXRDYXJ0SWQoKSwgYWN0aW9uLnBheWxvYWQpLnBpcGUoXG4gICAgICAgIG1hcCgocmVzcDogVikgPT4gbmV3IERhZmZDYXJ0U2hpcHBpbmdBZGRyZXNzVXBkYXRlU3VjY2VzcyhyZXNwKSksXG4gICAgICAgIGNhdGNoRXJyb3IoZXJyb3IgPT4gb2YobmV3IERhZmZDYXJ0U2hpcHBpbmdBZGRyZXNzVXBkYXRlRmFpbHVyZSh0aGlzLmVycm9yTWF0Y2hlcihlcnJvcikpKSlcbiAgICAgIClcbiAgICApXG4gIClcbn1cbiJdfQ==