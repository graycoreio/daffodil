/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable, Inject } from '@angular/core';
import { switchMap, map, catchError, mapTo } from 'rxjs/operators';
import { of } from 'rxjs';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { DaffStorageServiceError } from '@daffodil/core';
import { DaffCartStorageService, DAFF_CART_ERROR_MATCHER } from '@daffodil/cart';
import { DaffCartOrderDriver } from '@daffodil/cart/driver';
import { DaffCartOrderActionTypes, DaffCartPlaceOrderSuccess, DaffCartPlaceOrderFailure, DaffCartStorageFailure, DaffCartCreate } from '../actions/public_api';
/**
 * @template T, V, R
 */
var DaffCartOrderEffects = /** @class */ (function () {
    function DaffCartOrderEffects(actions$, errorMatcher, driver, storage) {
        var _this = this;
        this.actions$ = actions$;
        this.errorMatcher = errorMatcher;
        this.driver = driver;
        this.storage = storage;
        this.placeOrder$ = this.actions$.pipe(ofType(DaffCartOrderActionTypes.CartPlaceOrderAction), switchMap((/**
         * @param {?} action
         * @return {?}
         */
        function (action) { return of(null).pipe(map((/**
         * @return {?}
         */
        function () { return _this.storage.getCartId(); })), switchMap((/**
         * @param {?} cartId
         * @return {?}
         */
        function (cartId) { return _this.driver.placeOrder(cartId, action.payload); })), map((/**
         * @param {?} resp
         * @return {?}
         */
        function (resp) { return new DaffCartPlaceOrderSuccess(resp); })), catchError((/**
         * @param {?} error
         * @return {?}
         */
        function (error) { return of(error instanceof DaffStorageServiceError
            ? new DaffCartStorageFailure(_this.errorMatcher(error))
            : new DaffCartPlaceOrderFailure(_this.errorMatcher(error))); }))); })));
        this.resetCart$ = this.actions$.pipe(ofType(DaffCartOrderActionTypes.CartPlaceOrderSuccessAction), mapTo(new DaffCartCreate()));
    }
    DaffCartOrderEffects.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    DaffCartOrderEffects.ctorParameters = function () { return [
        { type: Actions },
        { type: Function, decorators: [{ type: Inject, args: [DAFF_CART_ERROR_MATCHER,] }] },
        { type: undefined, decorators: [{ type: Inject, args: [DaffCartOrderDriver,] }] },
        { type: DaffCartStorageService }
    ]; };
    tslib_1.__decorate([
        Effect(),
        tslib_1.__metadata("design:type", Object)
    ], DaffCartOrderEffects.prototype, "placeOrder$", void 0);
    tslib_1.__decorate([
        Effect(),
        tslib_1.__metadata("design:type", Object)
    ], DaffCartOrderEffects.prototype, "resetCart$", void 0);
    return DaffCartOrderEffects;
}());
export { DaffCartOrderEffects };
if (false) {
    /** @type {?} */
    DaffCartOrderEffects.prototype.placeOrder$;
    /** @type {?} */
    DaffCartOrderEffects.prototype.resetCart$;
    /**
     * @type {?}
     * @private
     */
    DaffCartOrderEffects.prototype.actions$;
    /**
     * @type {?}
     * @private
     */
    DaffCartOrderEffects.prototype.errorMatcher;
    /**
     * @type {?}
     * @private
     */
    DaffCartOrderEffects.prototype.driver;
    /**
     * @type {?}
     * @private
     */
    DaffCartOrderEffects.prototype.storage;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FydC1vcmRlci5lZmZlY3RzLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRhZmZvZGlsL2NhcnQvc3RhdGUvIiwic291cmNlcyI6WyJlZmZlY3RzL2NhcnQtb3JkZXIuZWZmZWN0cy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ25ELE9BQU8sRUFBRSxTQUFTLEVBQUUsR0FBRyxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNuRSxPQUFPLEVBQUUsRUFBRSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQzFCLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUV4RCxPQUFPLEVBQ0wsdUJBQXVCLEVBQ3hCLE1BQU0sZ0JBQWdCLENBQUE7QUFDdkIsT0FBTyxFQUF3RCxzQkFBc0IsRUFBRSx1QkFBdUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3ZJLE9BQU8sRUFBRSxtQkFBbUIsRUFBaUMsTUFBTSx1QkFBdUIsQ0FBQztBQUUzRixPQUFPLEVBQ0wsd0JBQXdCLEVBRXhCLHlCQUF5QixFQUN6Qix5QkFBeUIsRUFDekIsc0JBQXNCLEVBQ3RCLGNBQWMsRUFDZixNQUFNLHVCQUF1QixDQUFDOzs7O0FBRS9CO0lBTUUsOEJBQ1UsUUFBaUIsRUFDZ0IsWUFBc0IsRUFDMUIsTUFBOEMsRUFDM0UsT0FBK0I7UUFKekMsaUJBS0k7UUFKTSxhQUFRLEdBQVIsUUFBUSxDQUFTO1FBQ2dCLGlCQUFZLEdBQVosWUFBWSxDQUFVO1FBQzFCLFdBQU0sR0FBTixNQUFNLENBQXdDO1FBQzNFLFlBQU8sR0FBUCxPQUFPLENBQXdCO1FBSXpDLGdCQUFXLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQzlCLE1BQU0sQ0FBQyx3QkFBd0IsQ0FBQyxvQkFBb0IsQ0FBQyxFQUNyRCxTQUFTOzs7O1FBQUMsVUFBQyxNQUE2QixJQUFLLE9BQUEsRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FDeEQsR0FBRzs7O1FBQUMsY0FBTSxPQUFBLEtBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxFQUFFLEVBQXhCLENBQXdCLEVBQUMsRUFDbkMsU0FBUzs7OztRQUFDLFVBQUEsTUFBTSxJQUFJLE9BQUEsS0FBSSxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsTUFBTSxFQUFFLE1BQU0sQ0FBQyxPQUFPLENBQUMsRUFBOUMsQ0FBOEMsRUFBQyxFQUNuRSxHQUFHOzs7O1FBQUMsVUFBQyxJQUFPLElBQUssT0FBQSxJQUFJLHlCQUF5QixDQUFJLElBQUksQ0FBQyxFQUF0QyxDQUFzQyxFQUFDLEVBQ3hELFVBQVU7Ozs7UUFBQyxVQUFBLEtBQUssSUFBSSxPQUFBLEVBQUUsQ0FBQyxLQUFLLFlBQVksdUJBQXVCO1lBQzdELENBQUMsQ0FBQyxJQUFJLHNCQUFzQixDQUFDLEtBQUksQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDdEQsQ0FBQyxDQUFDLElBQUkseUJBQXlCLENBQUMsS0FBSSxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUMxRCxFQUhtQixDQUduQixFQUFDLENBQ0gsRUFSNEMsQ0FRNUMsRUFBQyxDQUNILENBQUE7UUFHRCxlQUFVLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQzdCLE1BQU0sQ0FBQyx3QkFBd0IsQ0FBQywyQkFBMkIsQ0FBQyxFQUM1RCxLQUFLLENBQUMsSUFBSSxjQUFjLEVBQUUsQ0FBQyxDQUM1QixDQUFBO0lBcEJFLENBQUM7O2dCQVhMLFVBQVU7Ozs7Z0JBakJGLE9BQU87Z0JBeUIyQyxRQUFRLHVCQUE5RCxNQUFNLFNBQUMsdUJBQXVCO2dEQUM5QixNQUFNLFNBQUMsbUJBQW1CO2dCQXJCZ0Msc0JBQXNCOztJQTBCbkY7UUFEQyxNQUFNLEVBQUU7OzZEQVlSO0lBR0Q7UUFEQyxNQUFNLEVBQUU7OzREQUlSO0lBQ0gsMkJBQUM7Q0FBQSxBQWhDRCxJQWdDQztTQS9CWSxvQkFBb0I7OztJQVkvQiwyQ0FZQzs7SUFFRCwwQ0FJQzs7Ozs7SUF4QkMsd0NBQXlCOzs7OztJQUN6Qiw0Q0FBK0Q7Ozs7O0lBQy9ELHNDQUFtRjs7Ozs7SUFDbkYsdUNBQXVDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSwgSW5qZWN0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBzd2l0Y2hNYXAsIG1hcCwgY2F0Y2hFcnJvciwgbWFwVG8gfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBvZiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgQWN0aW9ucywgRWZmZWN0LCBvZlR5cGUgfSBmcm9tICdAbmdyeC9lZmZlY3RzJztcblxuaW1wb3J0IHtcbiAgRGFmZlN0b3JhZ2VTZXJ2aWNlRXJyb3Jcbn0gZnJvbSAnQGRhZmZvZGlsL2NvcmUnXG5pbXBvcnQgeyBEYWZmQ2FydCwgRGFmZkNhcnRQYXltZW50TWV0aG9kLCBEYWZmQ2FydE9yZGVyUmVzdWx0LCBEYWZmQ2FydFN0b3JhZ2VTZXJ2aWNlLCBEQUZGX0NBUlRfRVJST1JfTUFUQ0hFUiB9IGZyb20gJ0BkYWZmb2RpbC9jYXJ0JztcbmltcG9ydCB7IERhZmZDYXJ0T3JkZXJEcml2ZXIsIERhZmZDYXJ0T3JkZXJTZXJ2aWNlSW50ZXJmYWNlIH0gZnJvbSAnQGRhZmZvZGlsL2NhcnQvZHJpdmVyJztcblxuaW1wb3J0IHtcbiAgRGFmZkNhcnRPcmRlckFjdGlvblR5cGVzLFxuICBEYWZmQ2FydFBsYWNlT3JkZXIsXG4gIERhZmZDYXJ0UGxhY2VPcmRlclN1Y2Nlc3MsXG4gIERhZmZDYXJ0UGxhY2VPcmRlckZhaWx1cmUsXG4gIERhZmZDYXJ0U3RvcmFnZUZhaWx1cmUsXG4gIERhZmZDYXJ0Q3JlYXRlXG59IGZyb20gJy4uL2FjdGlvbnMvcHVibGljX2FwaSc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBEYWZmQ2FydE9yZGVyRWZmZWN0czxcbiAgVCBleHRlbmRzIERhZmZDYXJ0ID0gRGFmZkNhcnQsXG4gIFYgZXh0ZW5kcyBEYWZmQ2FydFBheW1lbnRNZXRob2QgPSBEYWZmQ2FydFBheW1lbnRNZXRob2QsXG4gIFIgZXh0ZW5kcyBEYWZmQ2FydE9yZGVyUmVzdWx0ID0gRGFmZkNhcnRPcmRlclJlc3VsdFxuPiB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgYWN0aW9ucyQ6IEFjdGlvbnMsXG4gICAgQEluamVjdChEQUZGX0NBUlRfRVJST1JfTUFUQ0hFUikgcHJpdmF0ZSBlcnJvck1hdGNoZXI6IEZ1bmN0aW9uLFxuICAgIEBJbmplY3QoRGFmZkNhcnRPcmRlckRyaXZlcikgcHJpdmF0ZSBkcml2ZXI6IERhZmZDYXJ0T3JkZXJTZXJ2aWNlSW50ZXJmYWNlPFQsIFYsIFI+LFxuICAgIHByaXZhdGUgc3RvcmFnZTogRGFmZkNhcnRTdG9yYWdlU2VydmljZSxcbiAgKSB7fVxuXG4gIEBFZmZlY3QoKVxuICBwbGFjZU9yZGVyJCA9IHRoaXMuYWN0aW9ucyQucGlwZShcbiAgICBvZlR5cGUoRGFmZkNhcnRPcmRlckFjdGlvblR5cGVzLkNhcnRQbGFjZU9yZGVyQWN0aW9uKSxcbiAgICBzd2l0Y2hNYXAoKGFjdGlvbjogRGFmZkNhcnRQbGFjZU9yZGVyPFY+KSA9PiBvZihudWxsKS5waXBlKFxuICAgICAgbWFwKCgpID0+IHRoaXMuc3RvcmFnZS5nZXRDYXJ0SWQoKSksXG4gICAgICBzd2l0Y2hNYXAoY2FydElkID0+IHRoaXMuZHJpdmVyLnBsYWNlT3JkZXIoY2FydElkLCBhY3Rpb24ucGF5bG9hZCkpLFxuICAgICAgbWFwKChyZXNwOiBSKSA9PiBuZXcgRGFmZkNhcnRQbGFjZU9yZGVyU3VjY2VzczxSPihyZXNwKSksXG4gICAgICBjYXRjaEVycm9yKGVycm9yID0+IG9mKGVycm9yIGluc3RhbmNlb2YgRGFmZlN0b3JhZ2VTZXJ2aWNlRXJyb3JcbiAgICAgICAgPyBuZXcgRGFmZkNhcnRTdG9yYWdlRmFpbHVyZSh0aGlzLmVycm9yTWF0Y2hlcihlcnJvcikpXG4gICAgICAgIDogbmV3IERhZmZDYXJ0UGxhY2VPcmRlckZhaWx1cmUodGhpcy5lcnJvck1hdGNoZXIoZXJyb3IpKVxuICAgICAgKSksXG4gICAgKSksXG4gIClcblxuICBARWZmZWN0KClcbiAgcmVzZXRDYXJ0JCA9IHRoaXMuYWN0aW9ucyQucGlwZShcbiAgICBvZlR5cGUoRGFmZkNhcnRPcmRlckFjdGlvblR5cGVzLkNhcnRQbGFjZU9yZGVyU3VjY2Vzc0FjdGlvbiksXG4gICAgbWFwVG8obmV3IERhZmZDYXJ0Q3JlYXRlKCkpLFxuICApXG59XG4iXX0=