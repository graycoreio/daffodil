/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable, Inject } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { map, catchError, switchMap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { DaffOrderActionTypes, DaffPlaceOrderSuccess, DaffPlaceOrderFailure } from '../actions/order.actions';
import { DaffCheckoutDriver } from '../../drivers/injection-tokens/driver-checkout.token';
/**
 * @deprecated
 */
export class OrderEffects {
    /**
     * @param {?} actions$
     * @param {?} checkoutDriver
     */
    constructor(actions$, checkoutDriver) {
        this.actions$ = actions$;
        this.checkoutDriver = checkoutDriver;
        this.onPlaceOrder$ = this.actions$.pipe(ofType(DaffOrderActionTypes.PlaceOrderAction), switchMap((/**
         * @param {?} action
         * @return {?}
         */
        (action) => this.checkoutDriver.placeOrder(action.payload.id.toString())
            .pipe(map((/**
         * @param {?} resp
         * @return {?}
         */
        (resp) => {
            return new DaffPlaceOrderSuccess(resp);
        })), catchError((/**
         * @param {?} error
         * @return {?}
         */
        error => {
            return of(new DaffPlaceOrderFailure('Failed to place order'));
        }))))));
    }
}
OrderEffects.decorators = [
    { type: Injectable }
];
/** @nocollapse */
OrderEffects.ctorParameters = () => [
    { type: Actions },
    { type: undefined, decorators: [{ type: Inject, args: [DaffCheckoutDriver,] }] }
];
tslib_1.__decorate([
    Effect(),
    tslib_1.__metadata("design:type", Observable)
], OrderEffects.prototype, "onPlaceOrder$", void 0);
if (false) {
    /** @type {?} */
    OrderEffects.prototype.onPlaceOrder$;
    /**
     * @type {?}
     * @private
     */
    OrderEffects.prototype.actions$;
    /**
     * @type {?}
     * @private
     */
    OrderEffects.prototype.checkoutDriver;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3JkZXIuZWZmZWN0cy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkYWZmb2RpbC9jaGVja291dC8iLCJzb3VyY2VzIjpbIm9yZGVyL2VmZmVjdHMvb3JkZXIuZWZmZWN0cy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ25ELE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN4RCxPQUFPLEVBQUUsR0FBRyxFQUFFLFVBQVUsRUFBRSxTQUFTLEVBQU8sTUFBTSxnQkFBZ0IsQ0FBQztBQUNqRSxPQUFPLEVBQUUsVUFBVSxFQUFFLEVBQUUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUV0QyxPQUFPLEVBQ0wsb0JBQW9CLEVBQ3BCLHFCQUFxQixFQUVyQixxQkFBcUIsRUFDdEIsTUFBTSwwQkFBMEIsQ0FBQztBQUNsQyxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxzREFBc0QsQ0FBQzs7OztBQU8xRixNQUFNLE9BQU8sWUFBWTs7Ozs7SUFFdkIsWUFDVSxRQUFpQixFQUNXLGNBQTRDO1FBRHhFLGFBQVEsR0FBUixRQUFRLENBQVM7UUFDVyxtQkFBYyxHQUFkLGNBQWMsQ0FBOEI7UUFJbEYsa0JBQWEsR0FBcUIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQ2xELE1BQU0sQ0FBQyxvQkFBb0IsQ0FBQyxnQkFBZ0IsQ0FBQyxFQUM3QyxTQUFTOzs7O1FBQUMsQ0FBQyxNQUFzQixFQUFFLEVBQUUsQ0FDbkMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsUUFBUSxFQUFFLENBQUM7YUFDekQsSUFBSSxDQUNILEdBQUc7Ozs7UUFBQyxDQUFDLElBQUksRUFBRSxFQUFFO1lBQ1gsT0FBTyxJQUFJLHFCQUFxQixDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3pDLENBQUMsRUFBQyxFQUNGLFVBQVU7Ozs7UUFBQyxLQUFLLENBQUMsRUFBRTtZQUNqQixPQUFPLEVBQUUsQ0FBQyxJQUFJLHFCQUFxQixDQUFDLHVCQUF1QixDQUFDLENBQUMsQ0FBQztRQUNoRSxDQUFDLEVBQUMsQ0FDSCxFQUNKLENBQ0YsQ0FBQTtJQWhCRSxDQUFDOzs7WUFOTCxVQUFVOzs7O1lBaEJGLE9BQU87NENBcUJYLE1BQU0sU0FBQyxrQkFBa0I7O0FBSTVCO0lBREMsTUFBTSxFQUFFO3NDQUNPLFVBQVU7bURBYXpCOzs7SUFkRCxxQ0FjQzs7Ozs7SUFsQkMsZ0NBQXlCOzs7OztJQUN6QixzQ0FBZ0YiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlLCBJbmplY3QgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEFjdGlvbnMsIEVmZmVjdCwgb2ZUeXBlIH0gZnJvbSAnQG5ncngvZWZmZWN0cyc7XG5pbXBvcnQgeyBtYXAsIGNhdGNoRXJyb3IsIHN3aXRjaE1hcCwgdGFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgb2YgfSBmcm9tICdyeGpzJztcblxuaW1wb3J0IHtcbiAgRGFmZk9yZGVyQWN0aW9uVHlwZXMsXG4gIERhZmZQbGFjZU9yZGVyU3VjY2VzcyxcbiAgRGFmZlBsYWNlT3JkZXIsXG4gIERhZmZQbGFjZU9yZGVyRmFpbHVyZVxufSBmcm9tICcuLi9hY3Rpb25zL29yZGVyLmFjdGlvbnMnO1xuaW1wb3J0IHsgRGFmZkNoZWNrb3V0RHJpdmVyIH0gZnJvbSAnLi4vLi4vZHJpdmVycy9pbmplY3Rpb24tdG9rZW5zL2RyaXZlci1jaGVja291dC50b2tlbic7XG5pbXBvcnQgeyBEYWZmQ2hlY2tvdXRTZXJ2aWNlSW50ZXJmYWNlIH0gZnJvbSAnLi4vLi4vZHJpdmVycy9pbnRlcmZhY2VzL2NoZWNrb3V0LXNlcnZpY2UuaW50ZXJmYWNlJztcblxuLyoqXG4gKiBAZGVwcmVjYXRlZFxuICovXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgT3JkZXJFZmZlY3RzIHtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGFjdGlvbnMkOiBBY3Rpb25zLFxuICAgIEBJbmplY3QoRGFmZkNoZWNrb3V0RHJpdmVyKSBwcml2YXRlIGNoZWNrb3V0RHJpdmVyOiBEYWZmQ2hlY2tvdXRTZXJ2aWNlSW50ZXJmYWNlXG4gICkge31cblxuICBARWZmZWN0KClcbiAgb25QbGFjZU9yZGVyJCA6IE9ic2VydmFibGU8YW55PiA9IHRoaXMuYWN0aW9ucyQucGlwZShcbiAgICBvZlR5cGUoRGFmZk9yZGVyQWN0aW9uVHlwZXMuUGxhY2VPcmRlckFjdGlvbiksXG4gICAgc3dpdGNoTWFwKChhY3Rpb246IERhZmZQbGFjZU9yZGVyKSA9PlxuICAgICAgdGhpcy5jaGVja291dERyaXZlci5wbGFjZU9yZGVyKGFjdGlvbi5wYXlsb2FkLmlkLnRvU3RyaW5nKCkpXG4gICAgICAgIC5waXBlKFxuICAgICAgICAgIG1hcCgocmVzcCkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBEYWZmUGxhY2VPcmRlclN1Y2Nlc3MocmVzcCk7XG4gICAgICAgICAgfSksXG4gICAgICAgICAgY2F0Y2hFcnJvcihlcnJvciA9PiB7XG4gICAgICAgICAgICByZXR1cm4gb2YobmV3IERhZmZQbGFjZU9yZGVyRmFpbHVyZSgnRmFpbGVkIHRvIHBsYWNlIG9yZGVyJykpO1xuICAgICAgICAgIH0pXG4gICAgICAgIClcbiAgICApXG4gIClcbn1cbiJdfQ==