/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable, Inject } from '@angular/core';
import { switchMap, map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { DaffStorageServiceError } from '@daffodil/core';
import { DaffCartStorageService, DAFF_CART_ERROR_MATCHER } from '@daffodil/cart';
import { DaffCartCouponDriver } from '@daffodil/cart/driver';
import { DaffCartCouponActionTypes, DaffCartCouponListSuccess, DaffCartCouponListFailure, DaffCartCouponRemoveSuccess, DaffCartCouponRemoveFailure, DaffCartCouponRemoveAllSuccess, DaffCartCouponRemoveAllFailure, DaffCartCouponApplySuccess, DaffCartCouponApplyFailure, DaffCartStorageFailure } from '../actions/public_api';
/**
 * @template T, V
 */
var DaffCartCouponEffects = /** @class */ (function () {
    function DaffCartCouponEffects(actions$, errorMatcher, driver, storage) {
        var _this = this;
        this.actions$ = actions$;
        this.errorMatcher = errorMatcher;
        this.driver = driver;
        this.storage = storage;
        this.apply$ = this.actions$.pipe(ofType(DaffCartCouponActionTypes.CartCouponApplyAction), switchMap((/**
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
        function (cartId) { return _this.driver.apply(cartId, action.payload); })), map((/**
         * @param {?} resp
         * @return {?}
         */
        function (resp) { return new DaffCartCouponApplySuccess(resp); })), catchError((/**
         * @param {?} error
         * @return {?}
         */
        function (error) { return of(error instanceof DaffStorageServiceError
            ? new DaffCartStorageFailure(_this.errorMatcher(error))
            : new DaffCartCouponApplyFailure(_this.errorMatcher(error))); }))); })));
        this.list$ = this.actions$.pipe(ofType(DaffCartCouponActionTypes.CartCouponListAction), switchMap((/**
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
        function (cartId) { return _this.driver.list(cartId); })), map((/**
         * @param {?} resp
         * @return {?}
         */
        function (resp) { return new DaffCartCouponListSuccess(resp); })), catchError((/**
         * @param {?} error
         * @return {?}
         */
        function (error) { return of(error instanceof DaffStorageServiceError
            ? new DaffCartStorageFailure(_this.errorMatcher(error))
            : new DaffCartCouponListFailure(_this.errorMatcher(error))); }))); })));
        this.remove$ = this.actions$.pipe(ofType(DaffCartCouponActionTypes.CartCouponRemoveAction), switchMap((/**
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
        function (cartId) { return _this.driver.remove(cartId, action.payload); })), map((/**
         * @param {?} resp
         * @return {?}
         */
        function (resp) { return new DaffCartCouponRemoveSuccess(resp); })), catchError((/**
         * @param {?} error
         * @return {?}
         */
        function (error) { return of(error instanceof DaffStorageServiceError
            ? new DaffCartStorageFailure(_this.errorMatcher(error))
            : new DaffCartCouponRemoveFailure(_this.errorMatcher(error))); }))); })));
        this.removeAll$ = this.actions$.pipe(ofType(DaffCartCouponActionTypes.CartCouponRemoveAllAction), switchMap((/**
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
        function (cartId) { return _this.driver.removeAll(cartId); })), map((/**
         * @param {?} resp
         * @return {?}
         */
        function (resp) { return new DaffCartCouponRemoveAllSuccess(resp); })), catchError((/**
         * @param {?} error
         * @return {?}
         */
        function (error) { return of(error instanceof DaffStorageServiceError
            ? new DaffCartStorageFailure(_this.errorMatcher(error))
            : new DaffCartCouponRemoveAllFailure(_this.errorMatcher(error))); }))); })));
    }
    DaffCartCouponEffects.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    DaffCartCouponEffects.ctorParameters = function () { return [
        { type: Actions },
        { type: Function, decorators: [{ type: Inject, args: [DAFF_CART_ERROR_MATCHER,] }] },
        { type: undefined, decorators: [{ type: Inject, args: [DaffCartCouponDriver,] }] },
        { type: DaffCartStorageService }
    ]; };
    tslib_1.__decorate([
        Effect(),
        tslib_1.__metadata("design:type", Object)
    ], DaffCartCouponEffects.prototype, "apply$", void 0);
    tslib_1.__decorate([
        Effect(),
        tslib_1.__metadata("design:type", Object)
    ], DaffCartCouponEffects.prototype, "list$", void 0);
    tslib_1.__decorate([
        Effect(),
        tslib_1.__metadata("design:type", Object)
    ], DaffCartCouponEffects.prototype, "remove$", void 0);
    tslib_1.__decorate([
        Effect(),
        tslib_1.__metadata("design:type", Object)
    ], DaffCartCouponEffects.prototype, "removeAll$", void 0);
    return DaffCartCouponEffects;
}());
export { DaffCartCouponEffects };
if (false) {
    /** @type {?} */
    DaffCartCouponEffects.prototype.apply$;
    /** @type {?} */
    DaffCartCouponEffects.prototype.list$;
    /** @type {?} */
    DaffCartCouponEffects.prototype.remove$;
    /** @type {?} */
    DaffCartCouponEffects.prototype.removeAll$;
    /**
     * @type {?}
     * @private
     */
    DaffCartCouponEffects.prototype.actions$;
    /**
     * @type {?}
     * @private
     */
    DaffCartCouponEffects.prototype.errorMatcher;
    /**
     * @type {?}
     * @private
     */
    DaffCartCouponEffects.prototype.driver;
    /**
     * @type {?}
     * @private
     */
    DaffCartCouponEffects.prototype.storage;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FydC1jb3Vwb24uZWZmZWN0cy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkYWZmb2RpbC9jYXJ0L3N0YXRlLyIsInNvdXJjZXMiOlsiZWZmZWN0cy9jYXJ0LWNvdXBvbi5lZmZlY3RzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDbkQsT0FBTyxFQUFFLFNBQVMsRUFBRSxHQUFHLEVBQUUsVUFBVSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDNUQsT0FBTyxFQUFFLEVBQUUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUMxQixPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFeEQsT0FBTyxFQUNMLHVCQUF1QixFQUN4QixNQUFNLGdCQUFnQixDQUFBO0FBQ3ZCLE9BQU8sRUFBNEIsc0JBQXNCLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUMzRyxPQUFPLEVBQUUsb0JBQW9CLEVBQWtDLE1BQU0sdUJBQXVCLENBQUM7QUFFN0YsT0FBTyxFQUNMLHlCQUF5QixFQUV6Qix5QkFBeUIsRUFDekIseUJBQXlCLEVBQ3pCLDJCQUEyQixFQUMzQiwyQkFBMkIsRUFHM0IsOEJBQThCLEVBQzlCLDhCQUE4QixFQUU5QiwwQkFBMEIsRUFDMUIsMEJBQTBCLEVBQzFCLHNCQUFzQixFQUN2QixNQUFNLHVCQUF1QixDQUFDOzs7O0FBRS9CO0lBS0UsK0JBQ1UsUUFBaUIsRUFDZ0IsWUFBc0IsRUFDekIsTUFBNEMsRUFDMUUsT0FBK0I7UUFKekMsaUJBS0k7UUFKTSxhQUFRLEdBQVIsUUFBUSxDQUFTO1FBQ2dCLGlCQUFZLEdBQVosWUFBWSxDQUFVO1FBQ3pCLFdBQU0sR0FBTixNQUFNLENBQXNDO1FBQzFFLFlBQU8sR0FBUCxPQUFPLENBQXdCO1FBSXpDLFdBQU0sR0FBRyxJQUFJLENBQUMsUUFBUSxD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QUFRLHVCQUE5RCxNQUFNLFNBQUMsdUJBQXVCO2dEQUM5QixNQUFNLFNBQUMsb0JBQW9CO2dCQTVCRyxzQkFBc0I7O0lBaUN2RDtRQURDLE1BQU0sRUFBRTs7eURBWVI7SUFHRDtRQURDLE1BQU0sRUFBRTs7d0RBWVI7SUFHRDtRQURDLE1BQU0sRUFBRTs7MERBWVI7SUFHRDtRQURDLE1BQU0sRUFBRTs7NkRBWVI7SUFDSCw0QkFBQztDQUFBLEFBbkVELElBbUVDO1NBbEVZLHFCQUFxQjs7O0lBV2hDLHVDQVlDOztJQUVELHNDQVlDOztJQUVELHdDQVlDOztJQUVELDJDQVlDOzs7OztJQTVEQyx5Q0FBeUI7Ozs7O0lBQ3pCLDZDQUErRDs7Ozs7SUFDL0QsdUNBQWtGOzs7OztJQUNsRix3Q0FBdUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlLCBJbmplY3QgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IHN3aXRjaE1hcCwgbWFwLCBjYXRjaEVycm9yIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgb2YgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IEFjdGlvbnMsIEVmZmVjdCwgb2ZUeXBlIH0gZnJvbSAnQG5ncngvZWZmZWN0cyc7XG5cbmltcG9ydCB7XG4gIERhZmZTdG9yYWdlU2VydmljZUVycm9yXG59IGZyb20gJ0BkYWZmb2RpbC9jb3JlJ1xuaW1wb3J0IHsgRGFmZkNhcnQsIERhZmZDYXJ0Q291cG9uLCBEYWZmQ2FydFN0b3JhZ2VTZXJ2aWNlLCBEQUZGX0NBUlRfRVJST1JfTUFUQ0hFUiB9IGZyb20gJ0BkYWZmb2RpbC9jYXJ0JztcbmltcG9ydCB7IERhZmZDYXJ0Q291cG9uRHJpdmVyLCBEYWZmQ2FydENvdXBvblNlcnZpY2VJbnRlcmZhY2UgfSBmcm9tICdAZGFmZm9kaWwvY2FydC9kcml2ZXInO1xuXG5pbXBvcnQge1xuICBEYWZmQ2FydENvdXBvbkFjdGlvblR5cGVzLFxuICBEYWZmQ2FydENvdXBvbkxpc3QsXG4gIERhZmZDYXJ0Q291cG9uTGlzdFN1Y2Nlc3MsXG4gIERhZmZDYXJ0Q291cG9uTGlzdEZhaWx1cmUsXG4gIERhZmZDYXJ0Q291cG9uUmVtb3ZlU3VjY2VzcyxcbiAgRGFmZkNhcnRDb3Vwb25SZW1vdmVGYWlsdXJlLFxuICBEYWZmQ2FydENvdXBvblJlbW92ZSxcbiAgRGFmZkNhcnRDb3Vwb25SZW1vdmVBbGwsXG4gIERhZmZDYXJ0Q291cG9uUmVtb3ZlQWxsU3VjY2VzcyxcbiAgRGFmZkNhcnRDb3Vwb25SZW1vdmVBbGxGYWlsdXJlLFxuICBEYWZmQ2FydENvdXBvbkFwcGx5LFxuICBEYWZmQ2FydENvdXBvbkFwcGx5U3VjY2VzcyxcbiAgRGFmZkNhcnRDb3Vwb25BcHBseUZhaWx1cmUsXG4gIERhZmZDYXJ0U3RvcmFnZUZhaWx1cmVcbn0gZnJvbSAnLi4vYWN0aW9ucy9wdWJsaWNfYXBpJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIERhZmZDYXJ0Q291cG9uRWZmZWN0czxcbiAgVCBleHRlbmRzIERhZmZDYXJ0ID0gRGFmZkNhcnQsXG4gIFYgZXh0ZW5kcyBEYWZmQ2FydENvdXBvbiA9IERhZmZDYXJ0Q291cG9uXG4+IHtcbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBhY3Rpb25zJDogQWN0aW9ucyxcbiAgICBASW5qZWN0KERBRkZfQ0FSVF9FUlJPUl9NQVRDSEVSKSBwcml2YXRlIGVycm9yTWF0Y2hlcjogRnVuY3Rpb24sXG4gICAgQEluamVjdChEYWZmQ2FydENvdXBvbkRyaXZlcikgcHJpdmF0ZSBkcml2ZXI6IERhZmZDYXJ0Q291cG9uU2VydmljZUludGVyZmFjZTxULCBWPixcbiAgICBwcml2YXRlIHN0b3JhZ2U6IERhZmZDYXJ0U3RvcmFnZVNlcnZpY2UsXG4gICkge31cblxuICBARWZmZWN0KClcbiAgYXBwbHkkID0gdGhpcy5hY3Rpb25zJC5waXBlKFxuICAgIG9mVHlwZShEYWZmQ2FydENvdXBvbkFjdGlvblR5cGVzLkNhcnRDb3Vwb25BcHBseUFjdGlvbiksXG4gICAgc3dpdGNoTWFwKChhY3Rpb246IERhZmZDYXJ0Q291cG9uQXBwbHk8Vj4pID0+IG9mKG51bGwpLnBpcGUoXG4gICAgICBtYXAoKCkgPT4gdGhpcy5zdG9yYWdlLmdldENhcnRJZCgpKSxcbiAgICAgIHN3aXRjaE1hcChjYXJ0SWQgPT4gdGhpcy5kcml2ZXIuYXBwbHkoY2FydElkLCBhY3Rpb24ucGF5bG9hZCkpLFxuICAgICAgbWFwKHJlc3AgPT4gbmV3IERhZmZDYXJ0Q291cG9uQXBwbHlTdWNjZXNzKHJlc3ApKSxcbiAgICAgIGNhdGNoRXJyb3IoZXJyb3IgPT4gb2YoZXJyb3IgaW5zdGFuY2VvZiBEYWZmU3RvcmFnZVNlcnZpY2VFcnJvclxuICAgICAgICA/IG5ldyBEYWZmQ2FydFN0b3JhZ2VGYWlsdXJlKHRoaXMuZXJyb3JNYXRjaGVyKGVycm9yKSlcbiAgICAgICAgOiBuZXcgRGFmZkNhcnRDb3Vwb25BcHBseUZhaWx1cmUodGhpcy5lcnJvck1hdGNoZXIoZXJyb3IpKVxuICAgICAgKSksXG4gICAgKSksXG4gIClcblxuICBARWZmZWN0KClcbiAgbGlzdCQgPSB0aGlzLmFjdGlvbnMkLnBpcGUoXG4gICAgb2ZUeXBlKERhZmZDYXJ0Q291cG9uQWN0aW9uVHlwZXMuQ2FydENvdXBvbkxpc3RBY3Rpb24pLFxuICAgIHN3aXRjaE1hcCgoYWN0aW9uOiBEYWZmQ2FydENvdXBvbkxpc3QpID0+IG9mKG51bGwpLnBpcGUoXG4gICAgICBtYXAoKCkgPT4gdGhpcy5zdG9yYWdlLmdldENhcnRJZCgpKSxcbiAgICAgIHN3aXRjaE1hcChjYXJ0SWQgPT4gdGhpcy5kcml2ZXIubGlzdChjYXJ0SWQpKSxcbiAgICAgIG1hcChyZXNwID0+IG5ldyBEYWZmQ2FydENvdXBvbkxpc3RTdWNjZXNzPFY+KHJlc3ApKSxcbiAgICAgIGNhdGNoRXJyb3IoZXJyb3IgPT4gb2YoZXJyb3IgaW5zdGFuY2VvZiBEYWZmU3RvcmFnZVNlcnZpY2VFcnJvclxuICAgICAgICA/IG5ldyBEYWZmQ2FydFN0b3JhZ2VGYWlsdXJlKHRoaXMuZXJyb3JNYXRjaGVyKGVycm9yKSlcbiAgICAgICAgOiBuZXcgRGFmZkNhcnRDb3Vwb25MaXN0RmFpbHVyZSh0aGlzLmVycm9yTWF0Y2hlcihlcnJvcikpXG4gICAgICApKSxcbiAgICApKSxcbiAgKVxuXG4gIEBFZmZlY3QoKVxuICByZW1vdmUkID0gdGhpcy5hY3Rpb25zJC5waXBlKFxuICAgIG9mVHlwZShEYWZmQ2FydENvdXBvbkFjdGlvblR5cGVzLkNhcnRDb3Vwb25SZW1vdmVBY3Rpb24pLFxuICAgIHN3aXRjaE1hcCgoYWN0aW9uOiBEYWZmQ2FydENvdXBvblJlbW92ZTxWPikgPT4gb2YobnVsbCkucGlwZShcbiAgICAgIG1hcCgoKSA9PiB0aGlzLnN0b3JhZ2UuZ2V0Q2FydElkKCkpLFxuICAgICAgc3dpdGNoTWFwKGNhcnRJZCA9PiB0aGlzLmRyaXZlci5yZW1vdmUoY2FydElkLCBhY3Rpb24ucGF5bG9hZCkpLFxuICAgICAgbWFwKHJlc3AgPT4gbmV3IERhZmZDYXJ0Q291cG9uUmVtb3ZlU3VjY2VzcyhyZXNwKSksXG4gICAgICBjYXRjaEVycm9yKGVycm9yID0+IG9mKGVycm9yIGluc3RhbmNlb2YgRGFmZlN0b3JhZ2VTZXJ2aWNlRXJyb3JcbiAgICAgICAgPyBuZXcgRGFmZkNhcnRTdG9yYWdlRmFpbHVyZSh0aGlzLmVycm9yTWF0Y2hlcihlcnJvcikpXG4gICAgICAgIDogbmV3IERhZmZDYXJ0Q291cG9uUmVtb3ZlRmFpbHVyZSh0aGlzLmVycm9yTWF0Y2hlcihlcnJvcikpXG4gICAgICApKSxcbiAgICApKSxcbiAgKVxuXG4gIEBFZmZlY3QoKVxuICByZW1vdmVBbGwkID0gdGhpcy5hY3Rpb25zJC5waXBlKFxuICAgIG9mVHlwZShEYWZmQ2FydENvdXBvbkFjdGlvblR5cGVzLkNhcnRDb3Vwb25SZW1vdmVBbGxBY3Rpb24pLFxuICAgIHN3aXRjaE1hcCgoYWN0aW9uOiBEYWZmQ2FydENvdXBvblJlbW92ZUFsbCkgPT4gb2YobnVsbCkucGlwZShcbiAgICAgIG1hcCgoKSA9PiB0aGlzLnN0b3JhZ2UuZ2V0Q2FydElkKCkpLFxuICAgICAgc3dpdGNoTWFwKGNhcnRJZCA9PiB0aGlzLmRyaXZlci5yZW1vdmVBbGwoY2FydElkKSksXG4gICAgICBtYXAocmVzcCA9PiBuZXcgRGFmZkNhcnRDb3Vwb25SZW1vdmVBbGxTdWNjZXNzKHJlc3ApKSxcbiAgICAgIGNhdGNoRXJyb3IoZXJyb3IgPT4gb2YoZXJyb3IgaW5zdGFuY2VvZiBEYWZmU3RvcmFnZVNlcnZpY2VFcnJvclxuICAgICAgICA/IG5ldyBEYWZmQ2FydFN0b3JhZ2VGYWlsdXJlKHRoaXMuZXJyb3JNYXRjaGVyKGVycm9yKSlcbiAgICAgICAgOiBuZXcgRGFmZkNhcnRDb3Vwb25SZW1vdmVBbGxGYWlsdXJlKHRoaXMuZXJyb3JNYXRjaGVyKGVycm9yKSlcbiAgICAgICkpLFxuICAgICkpLFxuICApXG59XG4iXX0=