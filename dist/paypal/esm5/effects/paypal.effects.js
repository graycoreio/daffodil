/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Inject, Injectable } from '@angular/core';
import { of } from 'rxjs';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { switchMap, map, catchError } from 'rxjs/operators';
import { DaffPaypalActionTypes, DaffGeneratePaypalExpressTokenSuccess, DaffGeneratePaypalExpressTokenFailure } from '../actions/paypal.actions';
import { DaffPaypalDriver } from '../drivers/injection-tokens/paypal-driver.token';
/**
 * @template T, V
 */
var DaffPaypalEffects = /** @class */ (function () {
    function DaffPaypalEffects(actions$, driver) {
        var _this = this;
        this.actions$ = actions$;
        this.driver = driver;
        this.generatePaypalExpressToken$ = createEffect((/**
         * @return {?}
         */
        function () { return _this.actions$.pipe(ofType(DaffPaypalActionTypes.GeneratePaypalExpressTokenAction), switchMap((/**
         * @param {?} action
         * @return {?}
         */
        function (action) {
            return _this.driver.generateToken(action.payload).pipe(map((/**
             * @param {?} resp
             * @return {?}
             */
            function (resp) {
                return new DaffGeneratePaypalExpressTokenSuccess(resp);
            })), catchError((/**
             * @param {?} error
             * @return {?}
             */
            function (error) {
                return of(new DaffGeneratePaypalExpressTokenFailure('Failed to retrieve token'));
            })));
        }))); }));
    }
    DaffPaypalEffects.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    DaffPaypalEffects.ctorParameters = function () { return [
        { type: Actions },
        { type: undefined, decorators: [{ type: Inject, args: [DaffPaypalDriver,] }] }
    ]; };
    return DaffPaypalEffects;
}());
export { DaffPaypalEffects };
if (false) {
    /** @type {?} */
    DaffPaypalEffects.prototype.generatePaypalExpressToken$;
    /**
     * @type {?}
     * @private
     */
    DaffPaypalEffects.prototype.actions$;
    /**
     * @type {?}
     * @private
     */
    DaffPaypalEffects.prototype.driver;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGF5cGFsLmVmZmVjdHMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGFmZm9kaWwvcGF5cGFsLyIsInNvdXJjZXMiOlsiZWZmZWN0cy9wYXlwYWwuZWZmZWN0cy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDbkQsT0FBTyxFQUFFLEVBQUUsRUFBYyxNQUFNLE1BQU0sQ0FBQztBQUN0QyxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDOUQsT0FBTyxFQUFFLFNBQVMsRUFBRSxHQUFHLEVBQUUsVUFBVSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFHNUQsT0FBTyxFQUNOLHFCQUFxQixFQUVyQixxQ0FBcUMsRUFDckMscUNBQXFDLEVBQ3JDLE1BQU0sMkJBQTJCLENBQUM7QUFFbkMsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0saURBQWlELENBQUM7Ozs7QUFJbkY7SUFHRSwyQkFDVSxRQUFpQixFQUNTLE1BQXdDO1FBRjVFLGlCQUVpRjtRQUR2RSxhQUFRLEdBQVIsUUFBUSxDQUFTO1FBQ1MsV0FBTSxHQUFOLE1BQU0sQ0FBa0M7UUFFNUUsZ0NBQTJCLEdBQXVCLFlBQVk7OztRQUFDLGNBQU0sT0FBQSxLQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FDckYsTUFBTSxDQUFDLHFCQUFxQixDQUFDLGdDQUFnQyxDQUFDLEVBQzlELFNBQVM7Ozs7UUFBQyxVQUFDLE1BQXlDO1lBQ3JELE9BQU8sS0FBSSxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FDcEQsR0FBRzs7OztZQUFDLFVBQUMsSUFBTztnQkFDWCxPQUFPLElBQUkscUNBQXFDLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDeEQsQ0FBQyxFQUFDLEVBQ0YsVUFBVTs7OztZQUFDLFVBQUEsS0FBSztnQkFDZixPQUFPLEVBQUUsQ0FBQyxJQUFJLHFDQUFxQyxDQUFDLDBCQUEwQixDQUFDLENBQUMsQ0FBQztZQUNsRixDQUFDLEVBQUMsQ0FDRixDQUFBO1FBQ0YsQ0FBQyxFQUFDLENBQ0YsRUFacUUsQ0FZckUsRUFBQyxDQUFDO0lBZDhFLENBQUM7O2dCQUxsRixVQUFVOzs7O2dCQWZGLE9BQU87Z0RBb0JYLE1BQU0sU0FBQyxnQkFBZ0I7O0lBZTVCLHdCQUFDO0NBQUEsQUFwQkQsSUFvQkM7U0FuQlksaUJBQWlCOzs7SUFNNUIsd0RBWUU7Ozs7O0lBZkEscUNBQXlCOzs7OztJQUN6QixtQ0FBMEUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3QsIEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IG9mLCBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBBY3Rpb25zLCBvZlR5cGUsIGNyZWF0ZUVmZmVjdCB9IGZyb20gJ0BuZ3J4L2VmZmVjdHMnO1xuaW1wb3J0IHsgc3dpdGNoTWFwLCBtYXAsIGNhdGNoRXJyb3IgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBBY3Rpb24gfSBmcm9tICdAbmdyeC9zdG9yZSc7XG5cbmltcG9ydCB7IFxuXHREYWZmUGF5cGFsQWN0aW9uVHlwZXMsIFxuXHREYWZmR2VuZXJhdGVQYXlwYWxFeHByZXNzVG9rZW4sIFxuXHREYWZmR2VuZXJhdGVQYXlwYWxFeHByZXNzVG9rZW5TdWNjZXNzLFxuXHREYWZmR2VuZXJhdGVQYXlwYWxFeHByZXNzVG9rZW5GYWlsdXJlIFxufSBmcm9tICcuLi9hY3Rpb25zL3BheXBhbC5hY3Rpb25zJztcbmltcG9ydCB7IERhZmZQYXlwYWxTZXJ2aWNlSW50ZXJmYWNlIH0gZnJvbSAnLi4vZHJpdmVycy9pbnRlcmZhY2VzL3BheXBhbC1zZXJ2aWNlLmludGVyZmFjZSc7XG5pbXBvcnQgeyBEYWZmUGF5cGFsRHJpdmVyIH0gZnJvbSAnLi4vZHJpdmVycy9pbmplY3Rpb24tdG9rZW5zL3BheXBhbC1kcml2ZXIudG9rZW4nO1xuaW1wb3J0IHsgRGFmZlBheXBhbFRva2VuUmVxdWVzdCB9IGZyb20gJy4uL21vZGVscy9wYXlwYWwtdG9rZW4tcmVxdWVzdCc7XG5pbXBvcnQgeyBEYWZmUGF5cGFsVG9rZW5SZXNwb25zZSB9IGZyb20gJy4uL21vZGVscy9wYXlwYWwtdG9rZW4tcmVzcG9uc2UnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgRGFmZlBheXBhbEVmZmVjdHM8VCBleHRlbmRzIERhZmZQYXlwYWxUb2tlblJlcXVlc3QsIFYgZXh0ZW5kcyBEYWZmUGF5cGFsVG9rZW5SZXNwb25zZT57XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBhY3Rpb25zJDogQWN0aW9ucyxcbiAgICBASW5qZWN0KERhZmZQYXlwYWxEcml2ZXIpIHByaXZhdGUgZHJpdmVyOiBEYWZmUGF5cGFsU2VydmljZUludGVyZmFjZTxULCBWPikgeyB9XG5cbiAgZ2VuZXJhdGVQYXlwYWxFeHByZXNzVG9rZW4kOiBPYnNlcnZhYmxlPEFjdGlvbj4gPSBjcmVhdGVFZmZlY3QoKCkgPT4gdGhpcy5hY3Rpb25zJC5waXBlKFxuICAgIG9mVHlwZShEYWZmUGF5cGFsQWN0aW9uVHlwZXMuR2VuZXJhdGVQYXlwYWxFeHByZXNzVG9rZW5BY3Rpb24pLFxuICAgIHN3aXRjaE1hcCgoYWN0aW9uOiBEYWZmR2VuZXJhdGVQYXlwYWxFeHByZXNzVG9rZW48VD4pID0+IHtcblx0XHRcdHJldHVybiB0aGlzLmRyaXZlci5nZW5lcmF0ZVRva2VuKGFjdGlvbi5wYXlsb2FkKS5waXBlKFxuXHRcdFx0XHRtYXAoKHJlc3A6IFYpID0+IHtcblx0XHRcdFx0XHRyZXR1cm4gbmV3IERhZmZHZW5lcmF0ZVBheXBhbEV4cHJlc3NUb2tlblN1Y2Nlc3MocmVzcCk7XG5cdFx0XHRcdH0pLFxuXHRcdFx0XHRjYXRjaEVycm9yKGVycm9yID0+IHtcblx0XHRcdFx0XHRyZXR1cm4gb2YobmV3IERhZmZHZW5lcmF0ZVBheXBhbEV4cHJlc3NUb2tlbkZhaWx1cmUoJ0ZhaWxlZCB0byByZXRyaWV2ZSB0b2tlbicpKTtcblx0XHRcdFx0fSlcblx0XHRcdClcblx0XHR9KVxuXHQpKTtcbn0iXX0=