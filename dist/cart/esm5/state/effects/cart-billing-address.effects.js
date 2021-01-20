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
import { DaffCartBillingAddressDriver } from '@daffodil/cart/driver';
import { DaffCartBillingAddressActionTypes, DaffCartBillingAddressLoadSuccess, DaffCartBillingAddressLoadFailure, DaffCartBillingAddressUpdateSuccess, DaffCartBillingAddressUpdateFailure, } from '../actions/public_api';
/**
 * @template T, V
 */
var DaffCartBillingAddressEffects = /** @class */ (function () {
    function DaffCartBillingAddressEffects(actions$, errorMatcher, driver, storage) {
        var _this = this;
        this.actions$ = actions$;
        this.errorMatcher = errorMatcher;
        this.driver = driver;
        this.storage = storage;
        this.get$ = this.actions$.pipe(ofType(DaffCartBillingAddressActionTypes.CartBillingAddressLoadAction), switchMap((/**
         * @param {?} action
         * @return {?}
         */
        function (action) {
            return _this.driver.get(_this.storage.getCartId()).pipe(map((/**
             * @param {?} resp
             * @return {?}
             */
            function (resp) { return new DaffCartBillingAddressLoadSuccess(resp); })), catchError((/**
             * @param {?} error
             * @return {?}
             */
            function (error) { return of(new DaffCartBillingAddressLoadFailure(_this.errorMatcher(error))); })));
        })));
        this.update$ = this.actions$.pipe(ofType(DaffCartBillingAddressActionTypes.CartBillingAddressUpdateAction), switchMap((/**
         * @param {?} action
         * @return {?}
         */
        function (action) {
            return _this.driver.update(_this.storage.getCartId(), action.payload).pipe(map((/**
             * @param {?} resp
             * @return {?}
             */
            function (resp) { return new DaffCartBillingAddressUpdateSuccess(resp); })), catchError((/**
             * @param {?} error
             * @return {?}
             */
            function (error) { return of(new DaffCartBillingAddressUpdateFailure(_this.errorMatcher(error))); })));
        })));
    }
    DaffCartBillingAddressEffects.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    DaffCartBillingAddressEffects.ctorParameters = function () { return [
        { type: Actions },
        { type: Function, decorators: [{ type: Inject, args: [DAFF_CART_ERROR_MATCHER,] }] },
        { type: undefined, decorators: [{ type: Inject, args: [DaffCartBillingAddressDriver,] }] },
        { type: DaffCartStorageService }
    ]; };
    tslib_1.__decorate([
        Effect(),
        tslib_1.__metadata("design:type", Object)
    ], DaffCartBillingAddressEffects.prototype, "get$", void 0);
    tslib_1.__decorate([
        Effect(),
        tslib_1.__metadata("design:type", Object)
    ], DaffCartBillingAddressEffects.prototype, "update$", void 0);
    return DaffCartBillingAddressEffects;
}());
export { DaffCartBillingAddressEffects };
if (false) {
    /** @type {?} */
    DaffCartBillingAddressEffects.prototype.get$;
    /** @type {?} */
    DaffCartBillingAddressEffects.prototype.update$;
    /**
     * @type {?}
     * @private
     */
    DaffCartBillingAddressEffects.prototype.actions$;
    /**
     * @type {?}
     * @private
     */
    DaffCartBillingAddressEffects.prototype.errorMatcher;
    /**
     * @type {?}
     * @private
     */
    DaffCartBillingAddressEffects.prototype.driver;
    /**
     * @type {?}
     * @private
     */
    DaffCartBillingAddressEffects.prototype.storage;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FydC1iaWxsaW5nLWFkZHJlc3MuZWZmZWN0cy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkYWZmb2RpbC9jYXJ0L3N0YXRlLyIsInNvdXJjZXMiOlsiZWZmZWN0cy9jYXJ0LWJpbGxpbmctYWRkcmVzcy5lZmZlY3RzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDbkQsT0FBTyxFQUFFLFNBQVMsRUFBRSxHQUFHLEVBQUUsVUFBVSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDNUQsT0FBTyxFQUFFLEVBQUUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUMxQixPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFeEQsT0FBTyxFQUE2QixzQkFBc0IsRUFBRSx1QkFBdUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzVHLE9BQU8sRUFBRSw0QkFBNEIsRUFBMEMsTUFBTSx1QkFBdUIsQ0FBQztBQUU3RyxPQUFPLEVBQ0wsaUNBQWlDLEVBRWpDLGlDQUFpQyxFQUNqQyxpQ0FBaUMsRUFFakMsbUNBQW1DLEVBQ25DLG1DQUFtQyxHQUNwQyxNQUFNLHVCQUF1QixDQUFDOzs7O0FBRS9CO0lBRUUsdUNBQ1UsUUFBaUIsRUFDZ0IsWUFBc0IsRUFDakIsTUFBb0QsRUFDMUYsT0FBK0I7UUFKekMsaUJBS0k7UUFKTSxhQUFRLEdBQVIsUUFBUSxDQUFTO1FBQ2dCLGlCQUFZLEdBQVosWUFBWSxDQUFVO1FBQ2pCLFdBQU0sR0FBTixNQUFNLENBQThDO1FBQzFGLFlBQU8sR0FBUCxPQUFPLENBQXdCO1FBSXpDLFNBQUksR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FDdkIsTUFBTSxDQUFDLGlDQUFpQyxDQUFDLDRCQUE0QixDQUFDLEVBQ3RFLFNBQVM7Ozs7UUFBQyxVQUFDLE1BQWtDO1lBQzNDLE9BQUEsS0FBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsS0FBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FDNUMsR0FBRzs7OztZQUFDLFVBQUMsSUFBTyxJQUFLLE9BQUEsSUFBSSxpQ0FBaUMsQ0FBQyxJQUFJLENBQUMsRUFBM0MsQ0FBMkMsRUFBQyxFQUM3RCxVQUFVOzs7O1lBQUMsVUFBQSxLQUFLLElBQUksT0FBQSxFQUFFLENBQUMsSUFBSSxpQ0FBaUMsQ0FBQyxLQUFJLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsRUFBbkUsQ0FBbUUsRUFBQyxDQUN6RjtRQUhELENBR0MsRUFDRixDQUNGLENBQUE7UUFHRCxZQUFPLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQzFCLE1BQU0sQ0FBQyxpQ0FBaUMsQ0FBQyw4QkFBOEIsQ0FBQyxFQUN4RSxTQUFTOzs7O1FBQUMsVUFBQyxNQUF1QztZQUNoRCxPQUFBLEtBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLEtBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxFQUFFLEVBQUUsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FDL0QsR0FBRzs7OztZQUFDLFVBQUMsSUFBTyxJQUFLLE9BQUEsSUFBSSxtQ0FBbUMsQ0FBQyxJQUFJLENBQUMsRUFBN0MsQ0FBNkMsRUFBQyxFQUMvRCxVQUFVOzs7O1lBQUMsVUFBQSxLQUFLLElBQUksT0FBQSxFQUFFLENBQUMsSUFBSSxtQ0FBbUMsQ0FBQyxLQUFJLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsRUFBckUsQ0FBcUUsRUFBQyxDQUMzRjtRQUhELENBR0MsRUFDRixDQUNGLENBQUE7SUF0QkUsQ0FBQzs7Z0JBUEwsVUFBVTs7OztnQkFmRixPQUFPO2dCQW1CMkMsUUFBUSx1QkFBOUQsTUFBTSxTQUFDLHVCQUF1QjtnREFDOUIsTUFBTSxTQUFDLDRCQUE0QjtnQkFsQkosc0JBQXNCOztJQXVCeEQ7UUFEQyxNQUFNLEVBQUU7OytEQVNSO0lBR0Q7UUFEQyxNQUFNLEVBQUU7O2tFQVNSO0lBQ0gsb0NBQUM7Q0FBQSxBQTlCRCxJQThCQztTQTdCWSw2QkFBNkI7OztJQVF4Qyw2Q0FTQzs7SUFFRCxnREFTQzs7Ozs7SUExQkMsaURBQXlCOzs7OztJQUN6QixxREFBK0Q7Ozs7O0lBQy9ELCtDQUFrRzs7Ozs7SUFDbEcsZ0RBQXVDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSwgSW5qZWN0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBzd2l0Y2hNYXAsIG1hcCwgY2F0Y2hFcnJvciB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IG9mIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBBY3Rpb25zLCBFZmZlY3QsIG9mVHlwZSB9IGZyb20gJ0BuZ3J4L2VmZmVjdHMnO1xuXG5pbXBvcnQgeyBEYWZmQ2FydEFkZHJlc3MsIERhZmZDYXJ0LCBEYWZmQ2FydFN0b3JhZ2VTZXJ2aWNlLCBEQUZGX0NBUlRfRVJST1JfTUFUQ0hFUiB9IGZyb20gJ0BkYWZmb2RpbC9jYXJ0JztcbmltcG9ydCB7IERhZmZDYXJ0QmlsbGluZ0FkZHJlc3NEcml2ZXIsIERhZmZDYXJ0QmlsbGluZ0FkZHJlc3NTZXJ2aWNlSW50ZXJmYWNlIH0gZnJvbSAnQGRhZmZvZGlsL2NhcnQvZHJpdmVyJztcblxuaW1wb3J0IHtcbiAgRGFmZkNhcnRCaWxsaW5nQWRkcmVzc0FjdGlvblR5cGVzLFxuICBEYWZmQ2FydEJpbGxpbmdBZGRyZXNzTG9hZCxcbiAgRGFmZkNhcnRCaWxsaW5nQWRkcmVzc0xvYWRTdWNjZXNzLFxuICBEYWZmQ2FydEJpbGxpbmdBZGRyZXNzTG9hZEZhaWx1cmUsXG4gIERhZmZDYXJ0QmlsbGluZ0FkZHJlc3NVcGRhdGUsXG4gIERhZmZDYXJ0QmlsbGluZ0FkZHJlc3NVcGRhdGVTdWNjZXNzLFxuICBEYWZmQ2FydEJpbGxpbmdBZGRyZXNzVXBkYXRlRmFpbHVyZSxcbn0gZnJvbSAnLi4vYWN0aW9ucy9wdWJsaWNfYXBpJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIERhZmZDYXJ0QmlsbGluZ0FkZHJlc3NFZmZlY3RzPFQgZXh0ZW5kcyBEYWZmQ2FydEFkZHJlc3MsIFYgZXh0ZW5kcyBEYWZmQ2FydD4ge1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGFjdGlvbnMkOiBBY3Rpb25zLFxuICAgIEBJbmplY3QoREFGRl9DQVJUX0VSUk9SX01BVENIRVIpIHByaXZhdGUgZXJyb3JNYXRjaGVyOiBGdW5jdGlvbixcbiAgICBASW5qZWN0KERhZmZDYXJ0QmlsbGluZ0FkZHJlc3NEcml2ZXIpIHByaXZhdGUgZHJpdmVyOiBEYWZmQ2FydEJpbGxpbmdBZGRyZXNzU2VydmljZUludGVyZmFjZTxULCBWPixcbiAgICBwcml2YXRlIHN0b3JhZ2U6IERhZmZDYXJ0U3RvcmFnZVNlcnZpY2VcbiAgKSB7fVxuXG4gIEBFZmZlY3QoKVxuICBnZXQkID0gdGhpcy5hY3Rpb25zJC5waXBlKFxuICAgIG9mVHlwZShEYWZmQ2FydEJpbGxpbmdBZGRyZXNzQWN0aW9uVHlwZXMuQ2FydEJpbGxpbmdBZGRyZXNzTG9hZEFjdGlvbiksXG4gICAgc3dpdGNoTWFwKChhY3Rpb246IERhZmZDYXJ0QmlsbGluZ0FkZHJlc3NMb2FkKSA9PlxuICAgICAgdGhpcy5kcml2ZXIuZ2V0KHRoaXMuc3RvcmFnZS5nZXRDYXJ0SWQoKSkucGlwZShcbiAgICAgICAgbWFwKChyZXNwOiBUKSA9PiBuZXcgRGFmZkNhcnRCaWxsaW5nQWRkcmVzc0xvYWRTdWNjZXNzKHJlc3ApKSxcbiAgICAgICAgY2F0Y2hFcnJvcihlcnJvciA9PiBvZihuZXcgRGFmZkNhcnRCaWxsaW5nQWRkcmVzc0xvYWRGYWlsdXJlKHRoaXMuZXJyb3JNYXRjaGVyKGVycm9yKSkpKVxuICAgICAgKVxuICAgIClcbiAgKVxuXG4gIEBFZmZlY3QoKVxuICB1cGRhdGUkID0gdGhpcy5hY3Rpb25zJC5waXBlKFxuICAgIG9mVHlwZShEYWZmQ2FydEJpbGxpbmdBZGRyZXNzQWN0aW9uVHlwZXMuQ2FydEJpbGxpbmdBZGRyZXNzVXBkYXRlQWN0aW9uKSxcbiAgICBzd2l0Y2hNYXAoKGFjdGlvbjogRGFmZkNhcnRCaWxsaW5nQWRkcmVzc1VwZGF0ZTxUPikgPT5cbiAgICAgIHRoaXMuZHJpdmVyLnVwZGF0ZSh0aGlzLnN0b3JhZ2UuZ2V0Q2FydElkKCksIGFjdGlvbi5wYXlsb2FkKS5waXBlKFxuICAgICAgICBtYXAoKHJlc3A6IFYpID0+IG5ldyBEYWZmQ2FydEJpbGxpbmdBZGRyZXNzVXBkYXRlU3VjY2VzcyhyZXNwKSksXG4gICAgICAgIGNhdGNoRXJyb3IoZXJyb3IgPT4gb2YobmV3IERhZmZDYXJ0QmlsbGluZ0FkZHJlc3NVcGRhdGVGYWlsdXJlKHRoaXMuZXJyb3JNYXRjaGVyKGVycm9yKSkpKVxuICAgICAgKVxuICAgIClcbiAgKVxufVxuIl19