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
import { DaffCartShippingInformationDriver } from '@daffodil/cart/driver';
import { DaffCartShippingInformationActionTypes, DaffCartShippingInformationLoadSuccess, DaffCartShippingInformationLoadFailure, DaffCartShippingInformationDeleteSuccess, DaffCartShippingInformationDeleteFailure, DaffCartShippingInformationUpdateSuccess, DaffCartShippingInformationUpdateFailure, } from '../actions/public_api';
/**
 * @template T, V
 */
export class DaffCartShippingInformationEffects {
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
        this.get$ = this.actions$.pipe(ofType(DaffCartShippingInformationActionTypes.CartShippingInformationLoadAction), switchMap((/**
         * @param {?} action
         * @return {?}
         */
        (action) => this.driver.get(this.storage.getCartId()).pipe(map((/**
         * @param {?} resp
         * @return {?}
         */
        (resp) => new DaffCartShippingInformationLoadSuccess(resp))), catchError((/**
         * @param {?} error
         * @return {?}
         */
        error => of(new DaffCartShippingInformationLoadFailure(this.errorMatcher(error)))))))));
        this.update$ = this.actions$.pipe(ofType(DaffCartShippingInformationActionTypes.CartShippingInformationUpdateAction), switchMap((/**
         * @param {?} action
         * @return {?}
         */
        (action) => this.driver.update(this.storage.getCartId(), action.payload).pipe(map((/**
         * @param {?} resp
         * @return {?}
         */
        (resp) => new DaffCartShippingInformationUpdateSuccess(resp))), catchError((/**
         * @param {?} error
         * @return {?}
         */
        error => of(new DaffCartShippingInformationUpdateFailure(this.errorMatcher(error)))))))));
        this.delete$ = this.actions$.pipe(ofType(DaffCartShippingInformationActionTypes.CartShippingInformationDeleteAction), switchMap((/**
         * @param {?} action
         * @return {?}
         */
        (action) => this.driver.delete(this.storage.getCartId()).pipe(map((/**
         * @param {?} resp
         * @return {?}
         */
        (resp) => new DaffCartShippingInformationDeleteSuccess(resp))), catchError((/**
         * @param {?} error
         * @return {?}
         */
        error => of(new DaffCartShippingInformationDeleteFailure(this.errorMatcher(error)))))))));
    }
}
DaffCartShippingInformationEffects.decorators = [
    { type: Injectable }
];
/** @nocollapse */
DaffCartShippingInformationEffects.ctorParameters = () => [
    { type: Actions },
    { type: Function, decorators: [{ type: Inject, args: [DAFF_CART_ERROR_MATCHER,] }] },
    { type: undefined, decorators: [{ type: Inject, args: [DaffCartShippingInformationDriver,] }] },
    { type: DaffCartStorageService }
];
tslib_1.__decorate([
    Effect(),
    tslib_1.__metadata("design:type", Object)
], DaffCartShippingInformationEffects.prototype, "get$", void 0);
tslib_1.__decorate([
    Effect(),
    tslib_1.__metadata("design:type", Object)
], DaffCartShippingInformationEffects.prototype, "update$", void 0);
tslib_1.__decorate([
    Effect(),
    tslib_1.__metadata("design:type", Object)
], DaffCartShippingInformationEffects.prototype, "delete$", void 0);
if (false) {
    /** @type {?} */
    DaffCartShippingInformationEffects.prototype.get$;
    /** @type {?} */
    DaffCartShippingInformationEffects.prototype.update$;
    /** @type {?} */
    DaffCartShippingInformationEffects.prototype.delete$;
    /**
     * @type {?}
     * @private
     */
    DaffCartShippingInformationEffects.prototype.actions$;
    /**
     * @type {?}
     * @private
     */
    DaffCartShippingInformationEffects.prototype.errorMatcher;
    /**
     * @type {?}
     * @private
     */
    DaffCartShippingInformationEffects.prototype.driver;
    /**
     * @type {?}
     * @private
     */
    DaffCartShippingInformationEffects.prototype.storage;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FydC1zaGlwcGluZy1pbmZvcm1hdGlvbi5lZmZlY3RzLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRhZmZvZGlsL2NhcnQvc3RhdGUvIiwic291cmNlcyI6WyJlZmZlY3RzL2NhcnQtc2hpcHBpbmctaW5mb3JtYXRpb24uZWZmZWN0cy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ25ELE9BQU8sRUFBRSxTQUFTLEVBQUUsR0FBRyxFQUFFLFVBQVUsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzVELE9BQU8sRUFBRSxFQUFFLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDMUIsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRXhELE9BQU8sRUFBeUMsc0JBQXNCLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUN4SCxPQUFPLEVBQUUsaUNBQWlDLEVBQStDLE1BQU0sdUJBQXVCLENBQUM7QUFFdkgsT0FBTyxFQUNMLHNDQUFzQyxFQUV0QyxzQ0FBc0MsRUFDdEMsc0NBQXNDLEVBRXRDLHdDQUF3QyxFQUN4Qyx3Q0FBd0MsRUFFeEMsd0NBQXdDLEVBQ3hDLHdDQUF3QyxHQUN6QyxNQUFNLHVCQUF1QixDQUFDOzs7O0FBRy9CLE1BQU0sT0FBTyxrQ0FBa0M7Ozs7Ozs7SUFDN0MsWUFDVSxRQUFpQixFQUNnQixZQUFzQixFQUNaLE1BQXlELEVBQ3BHLE9BQStCO1FBSC9CLGFBQVEsR0FBUixRQUFRLENBQVM7UUFDZ0IsaUJBQVksR0FBWixZQUFZLENBQVU7UUFDWixXQUFNLEdBQU4sTUFBTSxDQUFtRDtRQUNwRyxZQUFPLEdBQVAsT0FBTyxDQUF3QjtRQUl6QyxTQUFJLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQ3ZCLE1BQU0sQ0FBQyxzQ0FBc0MsQ0FBQyxpQ0FBaUMsQ0FBQyxFQUNoRixTQUFTOzs7O1FBQUMsQ0FBQyxNQUF1QyxFQUFFLEVBQUUsQ0FDcEQsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FDNUMsR0FBRzs7OztRQUFDLENBQUMsSUFBTyxFQUFFLEVBQUUsQ0FBQyxJQUFJLHNDQUFzQyxDQUFDLElBQUksQ0FBQyxFQUFDLEVBQ2xFLFVBQVU7Ozs7UUFBQyxLQUFLLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxJQUFJLHNDQUFzQyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxFQUFDLENBQzlGLEVBQ0YsQ0FDRixDQUFBO1FBR0QsWUFBTyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUMxQixNQUFNLENBQUMsc0NBQXNDLENBQUMsbUNBQW1DLENBQUMsRUFDbEYsU0FBUzs7OztRQUFDLENBQUMsTUFBNEMsRUFBRSxFQUFFLENBQ3pELElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxFQUFFLEVBQUUsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FDL0QsR0FBRzs7OztRQUFDLENBQUMsSUFBTyxFQUFFLEVBQUUsQ0FBQyxJQUFJLHdDQUF3QyxDQUFDLElBQUksQ0FBQyxFQUFDLEVBQ3BFLFVBQVU7Ozs7UUFBQyxLQUFLLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxJQUFJLHdDQUF3QyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxFQUFDLENBQ2hHLEVBQ0YsQ0FDRixDQUFBO1FBR0QsWUFBTyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUMxQixNQUFNLENBQUMsc0NBQXNDLENBQUMsbUNBQW1DLENBQUMsRUFDbEYsU0FBUzs7OztRQUFDLENBQUMsTUFBb0UsRUFBRSxFQUFFLENBQ2pGLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQy9DLEdBQUc7Ozs7UUFBQyxDQUFDLElBQU8sRUFBRSxFQUFFLENBQUMsSUFBSSx3Q0FBd0MsQ0FBQyxJQUFJLENBQUMsRUFBQyxFQUNwRSxVQUFVOzs7O1FBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsSUFBSSx3Q0FBd0MsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsRUFBQyxDQUNoRyxFQUNGLENBQ0YsQ0FBQTtJQWpDRSxDQUFDOzs7WUFQTCxVQUFVOzs7O1lBbEJGLE9BQU87WUFzQjJDLFFBQVEsdUJBQTlELE1BQU0sU0FBQyx1QkFBdUI7NENBQzlCLE1BQU0sU0FBQyxpQ0FBaUM7WUFyQkcsc0JBQXNCOztBQTBCcEU7SUFEQyxNQUFNLEVBQUU7O2dFQVNSO0FBR0Q7SUFEQyxNQUFNLEVBQUU7O21FQVNSO0FBR0Q7SUFEQyxNQUFNLEVBQUU7O21FQVNSOzs7SUEvQkQsa0RBU0M7O0lBRUQscURBU0M7O0lBRUQscURBU0M7Ozs7O0lBckNDLHNEQUF5Qjs7Ozs7SUFDekIsMERBQStEOzs7OztJQUMvRCxvREFBNEc7Ozs7O0lBQzVHLHFEQUF1QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUsIEluamVjdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgc3dpdGNoTWFwLCBtYXAsIGNhdGNoRXJyb3IgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBvZiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgQWN0aW9ucywgRWZmZWN0LCBvZlR5cGUgfSBmcm9tICdAbmdyeC9lZmZlY3RzJztcblxuaW1wb3J0IHsgRGFmZkNhcnRTaGlwcGluZ0luZm9ybWF0aW9uLCBEYWZmQ2FydCwgRGFmZkNhcnRTdG9yYWdlU2VydmljZSwgREFGRl9DQVJUX0VSUk9SX01BVENIRVIgfSBmcm9tICdAZGFmZm9kaWwvY2FydCc7XG5pbXBvcnQgeyBEYWZmQ2FydFNoaXBwaW5nSW5mb3JtYXRpb25Ecml2ZXIsIERhZmZDYXJ0U2hpcHBpbmdJbmZvcm1hdGlvblNlcnZpY2VJbnRlcmZhY2UgfSBmcm9tICdAZGFmZm9kaWwvY2FydC9kcml2ZXInO1xuXG5pbXBvcnQge1xuICBEYWZmQ2FydFNoaXBwaW5nSW5mb3JtYXRpb25BY3Rpb25UeXBlcyxcbiAgRGFmZkNhcnRTaGlwcGluZ0luZm9ybWF0aW9uTG9hZCxcbiAgRGFmZkNhcnRTaGlwcGluZ0luZm9ybWF0aW9uTG9hZFN1Y2Nlc3MsXG4gIERhZmZDYXJ0U2hpcHBpbmdJbmZvcm1hdGlvbkxvYWRGYWlsdXJlLFxuICBEYWZmQ2FydFNoaXBwaW5nSW5mb3JtYXRpb25EZWxldGUsXG4gIERhZmZDYXJ0U2hpcHBpbmdJbmZvcm1hdGlvbkRlbGV0ZVN1Y2Nlc3MsXG4gIERhZmZDYXJ0U2hpcHBpbmdJbmZvcm1hdGlvbkRlbGV0ZUZhaWx1cmUsXG4gIERhZmZDYXJ0U2hpcHBpbmdJbmZvcm1hdGlvblVwZGF0ZSxcbiAgRGFmZkNhcnRTaGlwcGluZ0luZm9ybWF0aW9uVXBkYXRlU3VjY2VzcyxcbiAgRGFmZkNhcnRTaGlwcGluZ0luZm9ybWF0aW9uVXBkYXRlRmFpbHVyZSxcbn0gZnJvbSAnLi4vYWN0aW9ucy9wdWJsaWNfYXBpJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIERhZmZDYXJ0U2hpcHBpbmdJbmZvcm1hdGlvbkVmZmVjdHM8VCBleHRlbmRzIERhZmZDYXJ0U2hpcHBpbmdJbmZvcm1hdGlvbiwgViBleHRlbmRzIERhZmZDYXJ0PiB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgYWN0aW9ucyQ6IEFjdGlvbnMsXG4gICAgQEluamVjdChEQUZGX0NBUlRfRVJST1JfTUFUQ0hFUikgcHJpdmF0ZSBlcnJvck1hdGNoZXI6IEZ1bmN0aW9uLFxuICAgIEBJbmplY3QoRGFmZkNhcnRTaGlwcGluZ0luZm9ybWF0aW9uRHJpdmVyKSBwcml2YXRlIGRyaXZlcjogRGFmZkNhcnRTaGlwcGluZ0luZm9ybWF0aW9uU2VydmljZUludGVyZmFjZTxULCBWPixcbiAgICBwcml2YXRlIHN0b3JhZ2U6IERhZmZDYXJ0U3RvcmFnZVNlcnZpY2VcbiAgKSB7fVxuXG4gIEBFZmZlY3QoKVxuICBnZXQkID0gdGhpcy5hY3Rpb25zJC5waXBlKFxuICAgIG9mVHlwZShEYWZmQ2FydFNoaXBwaW5nSW5mb3JtYXRpb25BY3Rpb25UeXBlcy5DYXJ0U2hpcHBpbmdJbmZvcm1hdGlvbkxvYWRBY3Rpb24pLFxuICAgIHN3aXRjaE1hcCgoYWN0aW9uOiBEYWZmQ2FydFNoaXBwaW5nSW5mb3JtYXRpb25Mb2FkKSA9PlxuICAgICAgdGhpcy5kcml2ZXIuZ2V0KHRoaXMuc3RvcmFnZS5nZXRDYXJ0SWQoKSkucGlwZShcbiAgICAgICAgbWFwKChyZXNwOiBUKSA9PiBuZXcgRGFmZkNhcnRTaGlwcGluZ0luZm9ybWF0aW9uTG9hZFN1Y2Nlc3MocmVzcCkpLFxuICAgICAgICBjYXRjaEVycm9yKGVycm9yID0+IG9mKG5ldyBEYWZmQ2FydFNoaXBwaW5nSW5mb3JtYXRpb25Mb2FkRmFpbHVyZSh0aGlzLmVycm9yTWF0Y2hlcihlcnJvcikpKSlcbiAgICAgIClcbiAgICApXG4gIClcblxuICBARWZmZWN0KClcbiAgdXBkYXRlJCA9IHRoaXMuYWN0aW9ucyQucGlwZShcbiAgICBvZlR5cGUoRGFmZkNhcnRTaGlwcGluZ0luZm9ybWF0aW9uQWN0aW9uVHlwZXMuQ2FydFNoaXBwaW5nSW5mb3JtYXRpb25VcGRhdGVBY3Rpb24pLFxuICAgIHN3aXRjaE1hcCgoYWN0aW9uOiBEYWZmQ2FydFNoaXBwaW5nSW5mb3JtYXRpb25VcGRhdGU8VD4pID0+XG4gICAgICB0aGlzLmRyaXZlci51cGRhdGUodGhpcy5zdG9yYWdlLmdldENhcnRJZCgpLCBhY3Rpb24ucGF5bG9hZCkucGlwZShcbiAgICAgICAgbWFwKChyZXNwOiBWKSA9PiBuZXcgRGFmZkNhcnRTaGlwcGluZ0luZm9ybWF0aW9uVXBkYXRlU3VjY2VzcyhyZXNwKSksXG4gICAgICAgIGNhdGNoRXJyb3IoZXJyb3IgPT4gb2YobmV3IERhZmZDYXJ0U2hpcHBpbmdJbmZvcm1hdGlvblVwZGF0ZUZhaWx1cmUodGhpcy5lcnJvck1hdGNoZXIoZXJyb3IpKSkpXG4gICAgICApXG4gICAgKVxuICApXG5cbiAgQEVmZmVjdCgpXG4gIGRlbGV0ZSQgPSB0aGlzLmFjdGlvbnMkLnBpcGUoXG4gICAgb2ZUeXBlKERhZmZDYXJ0U2hpcHBpbmdJbmZvcm1hdGlvbkFjdGlvblR5cGVzLkNhcnRTaGlwcGluZ0luZm9ybWF0aW9uRGVsZXRlQWN0aW9uKSxcbiAgICBzd2l0Y2hNYXAoKGFjdGlvbjogRGFmZkNhcnRTaGlwcGluZ0luZm9ybWF0aW9uRGVsZXRlPFZbJ3NoaXBwaW5nX2luZm9ybWF0aW9uJ10+KSA9PlxuICAgICAgdGhpcy5kcml2ZXIuZGVsZXRlKHRoaXMuc3RvcmFnZS5nZXRDYXJ0SWQoKSkucGlwZShcbiAgICAgICAgbWFwKChyZXNwOiBWKSA9PiBuZXcgRGFmZkNhcnRTaGlwcGluZ0luZm9ybWF0aW9uRGVsZXRlU3VjY2VzcyhyZXNwKSksXG4gICAgICAgIGNhdGNoRXJyb3IoZXJyb3IgPT4gb2YobmV3IERhZmZDYXJ0U2hpcHBpbmdJbmZvcm1hdGlvbkRlbGV0ZUZhaWx1cmUodGhpcy5lcnJvck1hdGNoZXIoZXJyb3IpKSkpXG4gICAgICApXG4gICAgKVxuICApXG59XG4iXX0=