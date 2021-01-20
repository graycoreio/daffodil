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
var OrderEffects = /** @class */ (function () {
    function OrderEffects(actions$, checkoutDriver) {
        var _this = this;
        this.actions$ = actions$;
        this.checkoutDriver = checkoutDriver;
        this.onPlaceOrder$ = this.actions$.pipe(ofType(DaffOrderActionTypes.PlaceOrderAction), switchMap((/**
         * @param {?} action
         * @return {?}
         */
        function (action) {
            return _this.checkoutDriver.placeOrder(action.payload.id.toString())
                .pipe(map((/**
             * @param {?} resp
             * @return {?}
             */
            function (resp) {
                return new DaffPlaceOrderSuccess(resp);
            })), catchError((/**
             * @param {?} error
             * @return {?}
             */
            function (error) {
                return of(new DaffPlaceOrderFailure('Failed to place order'));
            })));
        })));
    }
    OrderEffects.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    OrderEffects.ctorParameters = function () { return [
        { type: Actions },
        { type: undefined, decorators: [{ type: Inject, args: [DaffCheckoutDriver,] }] }
    ]; };
    tslib_1.__decorate([
        Effect(),
        tslib_1.__metadata("design:type", Observable)
    ], OrderEffects.prototype, "onPlaceOrder$", void 0);
    return OrderEffects;
}());
export { OrderEffects };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3JkZXIuZWZmZWN0cy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkYWZmb2RpbC9jaGVja291dC8iLCJzb3VyY2VzIjpbIm9yZGVyL2VmZmVjdHMvb3JkZXIuZWZmZWN0cy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ25ELE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN4RCxPQUFPLEVBQUUsR0FBRyxFQUFFLFVBQVUsRUFBRSxTQUFTLEVBQU8sTUFBTSxnQkFBZ0IsQ0FBQztBQUNqRSxPQUFPLEVBQUUsVUFBVSxFQUFFLEVBQUUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUV0QyxPQUFPLEVBQ0wsb0JBQW9CLEVBQ3BCLHFCQUFxQixFQUVyQixxQkFBcUIsRUFDdEIsTUFBTSwwQkFBMEIsQ0FBQztBQUNsQyxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxzREFBc0QsQ0FBQzs7OztBQU0xRjtJQUdFLHNCQUNVLFFBQWlCLEVBQ1csY0FBNEM7UUFGbEYsaUJBR0k7UUFGTSxhQUFRLEdBQVIsUUFBUSxDQUFTO1FBQ1csbUJBQWMsR0FBZCxjQUFjLENBQThCO1FBSWxGLGtCQUFhLEdBQXFCLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUNsRCxNQUFNLENBQUMsb0JBQW9CLENBQUMsZ0JBQWdCLENBQUMsRUFDN0MsU0FBUzs7OztRQUFDLFVBQUMsTUFBc0I7WUFDL0IsT0FBQSxLQUFJLENBQUMsY0FBYyxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxRQUFRLEVBQUUsQ0FBQztpQkFDekQsSUFBSSxDQUNILEdBQUc7Ozs7WUFBQyxVQUFDLElBQUk7Z0JBQ1AsT0FBTyxJQUFJLHFCQUFxQixDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ3pDLENBQUMsRUFBQyxFQUNGLFVBQVU7Ozs7WUFBQyxVQUFBLEtBQUs7Z0JBQ2QsT0FBTyxFQUFFLENBQUMsSUFBSSxxQkFBcUIsQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDLENBQUM7WUFDaEUsQ0FBQyxFQUFDLENBQ0g7UUFSSCxDQVFHLEVBQ0osQ0FDRixDQUFBO0lBaEJFLENBQUM7O2dCQU5MLFVBQVU7Ozs7Z0JBaEJGLE9BQU87Z0RBcUJYLE1BQU0sU0FBQyxrQkFBa0I7O0lBSTVCO1FBREMsTUFBTSxFQUFFOzBDQUNPLFVBQVU7dURBYXpCO0lBQ0gsbUJBQUM7Q0FBQSxBQXZCRCxJQXVCQztTQXRCWSxZQUFZOzs7SUFPdkIscUNBY0M7Ozs7O0lBbEJDLGdDQUF5Qjs7Ozs7SUFDekIsc0NBQWdGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSwgSW5qZWN0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBY3Rpb25zLCBFZmZlY3QsIG9mVHlwZSB9IGZyb20gJ0BuZ3J4L2VmZmVjdHMnO1xuaW1wb3J0IHsgbWFwLCBjYXRjaEVycm9yLCBzd2l0Y2hNYXAsIHRhcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IE9ic2VydmFibGUsIG9mIH0gZnJvbSAncnhqcyc7XG5cbmltcG9ydCB7XG4gIERhZmZPcmRlckFjdGlvblR5cGVzLFxuICBEYWZmUGxhY2VPcmRlclN1Y2Nlc3MsXG4gIERhZmZQbGFjZU9yZGVyLFxuICBEYWZmUGxhY2VPcmRlckZhaWx1cmVcbn0gZnJvbSAnLi4vYWN0aW9ucy9vcmRlci5hY3Rpb25zJztcbmltcG9ydCB7IERhZmZDaGVja291dERyaXZlciB9IGZyb20gJy4uLy4uL2RyaXZlcnMvaW5qZWN0aW9uLXRva2Vucy9kcml2ZXItY2hlY2tvdXQudG9rZW4nO1xuaW1wb3J0IHsgRGFmZkNoZWNrb3V0U2VydmljZUludGVyZmFjZSB9IGZyb20gJy4uLy4uL2RyaXZlcnMvaW50ZXJmYWNlcy9jaGVja291dC1zZXJ2aWNlLmludGVyZmFjZSc7XG5cbi8qKlxuICogQGRlcHJlY2F0ZWRcbiAqL1xuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIE9yZGVyRWZmZWN0cyB7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBhY3Rpb25zJDogQWN0aW9ucyxcbiAgICBASW5qZWN0KERhZmZDaGVja291dERyaXZlcikgcHJpdmF0ZSBjaGVja291dERyaXZlcjogRGFmZkNoZWNrb3V0U2VydmljZUludGVyZmFjZVxuICApIHt9XG5cbiAgQEVmZmVjdCgpXG4gIG9uUGxhY2VPcmRlciQgOiBPYnNlcnZhYmxlPGFueT4gPSB0aGlzLmFjdGlvbnMkLnBpcGUoXG4gICAgb2ZUeXBlKERhZmZPcmRlckFjdGlvblR5cGVzLlBsYWNlT3JkZXJBY3Rpb24pLFxuICAgIHN3aXRjaE1hcCgoYWN0aW9uOiBEYWZmUGxhY2VPcmRlcikgPT5cbiAgICAgIHRoaXMuY2hlY2tvdXREcml2ZXIucGxhY2VPcmRlcihhY3Rpb24ucGF5bG9hZC5pZC50b1N0cmluZygpKVxuICAgICAgICAucGlwZShcbiAgICAgICAgICBtYXAoKHJlc3ApID0+IHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgRGFmZlBsYWNlT3JkZXJTdWNjZXNzKHJlc3ApO1xuICAgICAgICAgIH0pLFxuICAgICAgICAgIGNhdGNoRXJyb3IoZXJyb3IgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIG9mKG5ldyBEYWZmUGxhY2VPcmRlckZhaWx1cmUoJ0ZhaWxlZCB0byBwbGFjZSBvcmRlcicpKTtcbiAgICAgICAgICB9KVxuICAgICAgICApXG4gICAgKVxuICApXG59XG4iXX0=