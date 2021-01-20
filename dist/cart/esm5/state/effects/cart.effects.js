/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable, Inject } from '@angular/core';
import { switchMap, map, catchError, switchMapTo, tap } from 'rxjs/operators';
import { of, EMPTY } from 'rxjs';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { DaffStorageServiceError } from '@daffodil/core';
import { DaffCartStorageService, DAFF_CART_ERROR_MATCHER } from '@daffodil/cart';
import { DaffCartDriver } from '@daffodil/cart/driver';
import { DaffCartActionTypes, DaffCartLoadSuccess, DaffCartLoadFailure, DaffAddToCartSuccess, DaffAddToCartFailure, DaffCartClearSuccess, DaffCartClearFailure, DaffCartCreateSuccess, DaffCartCreateFailure, DaffCartStorageFailure } from '../actions/public_api';
/**
 * @template T
 */
var DaffCartEffects = /** @class */ (function () {
    function DaffCartEffects(actions$, errorMatcher, driver, storage) {
        var _this = this;
        this.actions$ = actions$;
        this.errorMatcher = errorMatcher;
        this.driver = driver;
        this.storage = storage;
        this.create$ = this.actions$.pipe(ofType(DaffCartActionTypes.CartCreateAction), switchMap((/**
         * @param {?} action
         * @return {?}
         */
        function (action) { return _this.driver.create().pipe(map((/**
         * @param {?} resp
         * @return {?}
         */
        function (resp) { return new DaffCartCreateSuccess(resp); })), catchError((/**
         * @param {?} error
         * @return {?}
         */
        function (error) { return of(new DaffCartCreateFailure(_this.errorMatcher(error))); }))); })));
        this.storeId$ = this.actions$.pipe(ofType(DaffCartActionTypes.CartCreateSuccessAction, DaffCartActionTypes.ResolveCartSuccessAction), switchMap((/**
         * @param {?} action
         * @return {?}
         */
        function (action) { return of(null).pipe(tap((/**
         * @return {?}
         */
        function () {
            _this.storage.setCartId(String(action.payload.id));
        })), switchMapTo(EMPTY), catchError((/**
         * @param {?} error
         * @return {?}
         */
        function (error) { return of(new DaffCartStorageFailure(_this.errorMatcher(error))); }))); })));
        this.get$ = this.actions$.pipe(ofType(DaffCartActionTypes.CartLoadAction), switchMap((/**
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
        function (cartId) { return _this.driver.get(cartId); })), map((/**
         * @param {?} resp
         * @return {?}
         */
        function (resp) { return new DaffCartLoadSuccess(resp); })), catchError((/**
         * @param {?} error
         * @return {?}
         */
        function (error) { return of(error instanceof DaffStorageServiceError
            ? new DaffCartStorageFailure(_this.errorMatcher(error))
            : new DaffCartLoadFailure(_this.errorMatcher(error))); }))); })));
        this.addToCart$ = this.actions$.pipe(ofType(DaffCartActionTypes.AddToCartAction), switchMap((/**
         * @param {?} action
         * @return {?}
         */
        function (action) {
            return _this.driver.addToCart(action.payload.productId, action.payload.qty).pipe(map((/**
             * @param {?} resp
             * @return {?}
             */
            function (resp) { return new DaffAddToCartSuccess(resp); })), catchError((/**
             * @param {?} error
             * @return {?}
             */
            function (error) { return of(new DaffAddToCartFailure(_this.errorMatcher(error))); })));
        })));
        this.clear$ = this.actions$.pipe(ofType(DaffCartActionTypes.CartClearAction), switchMap((/**
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
        function (cartId) { return _this.driver.clear(cartId); })), map((/**
         * @param {?} resp
         * @return {?}
         */
        function (resp) { return new DaffCartClearSuccess(resp); })), catchError((/**
         * @param {?} error
         * @return {?}
         */
        function (error) { return of(error instanceof DaffStorageServiceError
            ? new DaffCartStorageFailure(_this.errorMatcher(error))
            : new DaffCartClearFailure(_this.errorMatcher(error))); }))); })));
    }
    DaffCartEffects.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    DaffCartEffects.ctorParameters = function () { return [
        { type: Actions },
        { type: Function, decorators: [{ type: Inject, args: [DAFF_CART_ERROR_MATCHER,] }] },
        { type: undefined, decorators: [{ type: Inject, args: [DaffCartDriver,] }] },
        { type: DaffCartStorageService }
    ]; };
    tslib_1.__decorate([
        Effect(),
        tslib_1.__metadata("design:type", Object)
    ], DaffCartEffects.prototype, "create$", void 0);
    tslib_1.__decorate([
        Effect(),
        tslib_1.__metadata("design:type", Object)
    ], DaffCartEffects.prototype, "storeId$", void 0);
    tslib_1.__decorate([
        Effect(),
        tslib_1.__metadata("design:type", Object)
    ], DaffCartEffects.prototype, "get$", void 0);
    tslib_1.__decorate([
        Effect(),
        tslib_1.__metadata("design:type", Object)
    ], DaffCartEffects.prototype, "addToCart$", void 0);
    tslib_1.__decorate([
        Effect(),
        tslib_1.__metadata("design:type", Object)
    ], DaffCartEffects.prototype, "clear$", void 0);
    return DaffCartEffects;
}());
export { DaffCartEffects };
if (false) {
    /** @type {?} */
    DaffCartEffects.prototype.create$;
    /** @type {?} */
    DaffCartEffects.prototype.storeId$;
    /** @type {?} */
    DaffCartEffects.prototype.get$;
    /** @type {?} */
    DaffCartEffects.prototype.addToCart$;
    /** @type {?} */
    DaffCartEffects.prototype.clear$;
    /**
     * @type {?}
     * @private
     */
    DaffCartEffects.prototype.actions$;
    /**
     * @type {?}
     * @private
     */
    DaffCartEffects.prototype.errorMatcher;
    /**
     * @type {?}
     * @private
     */
    DaffCartEffects.prototype.driver;
    /**
     * @type {?}
     * @private
     */
    DaffCartEffects.prototype.storage;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FydC5lZmZlY3RzLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRhZmZvZGlsL2NhcnQvc3RhdGUvIiwic291cmNlcyI6WyJlZmZlY3RzL2NhcnQuZWZmZWN0cy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ25ELE9BQU8sRUFBRSxTQUFTLEVBQUUsR0FBRyxFQUFFLFVBQVUsRUFBRSxXQUFXLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDOUUsT0FBTyxFQUFFLEVBQUUsRUFBRSxLQUFLLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDakMsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRXhELE9BQU8sRUFDTCx1QkFBdUIsRUFDeEIsTUFBTSxnQkFBZ0IsQ0FBQTtBQUN2QixPQUFPLEVBQVksc0JBQXNCLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUMzRixPQUFPLEVBQUUsY0FBYyxFQUE0QixNQUFNLHVCQUF1QixDQUFDO0FBRWpGLE9BQU8sRUFDTCxtQkFBbUIsRUFFbkIsbUJBQW1CLEVBQ25CLG1CQUFtQixFQUNuQixvQkFBb0IsRUFDcEIsb0JBQW9CLEVBR3BCLG9CQUFvQixFQUNwQixvQkFBb0IsRUFFcEIscUJBQXFCLEVBQ3JCLHFCQUFxQixFQUNyQixzQkFBc0IsRUFDdkIsTUFBTSx1QkFBdUIsQ0FBQzs7OztBQUUvQjtJQUVFLHlCQUNVLFFBQWlCLEVBQ2dCLFlBQXNCLEVBQy9CLE1BQW1DLEVBQzNELE9BQStCO1FBSnpDLGlCQUtJO1FBSk0sYUFBUSxHQUFSLFFBQVEsQ0FBUztRQUNnQixpQkFBWSxHQUFaLFlBQVksQ0FBVTtRQUMvQixXQUFNLEdBQU4sTUFBTSxDQUE2QjtRQUMzRCxZQUFPLEdBQVAsT0FBTyxDQUF3QjtRQUl6QyxZQUFPLEdBQUcsSUFB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QUF1QjtnREFDOUIsTUFBTSxTQUFDLGNBQWM7Z0JBekJQLHNCQUFzQjs7SUE4QnZDO1FBREMsTUFBTSxFQUFFOztvREFPUjtJQUdEO1FBREMsTUFBTSxFQUFFOztxREFVUjtJQUdEO1FBREMsTUFBTSxFQUFFOztpREFZUjtJQUdEO1FBREMsTUFBTSxFQUFFOzt1REFTUjtJQUdEO1FBREMsTUFBTSxFQUFFOzttREFZUjtJQUNILHNCQUFDO0NBQUEsQUFwRUQsSUFvRUM7U0FuRVksZUFBZTs7O0lBUTFCLGtDQU9DOztJQUVELG1DQVVDOztJQUVELCtCQVlDOztJQUVELHFDQVNDOztJQUVELGlDQVlDOzs7OztJQWhFQyxtQ0FBeUI7Ozs7O0lBQ3pCLHVDQUErRDs7Ozs7SUFDL0QsaUNBQW1FOzs7OztJQUNuRSxrQ0FBdUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlLCBJbmplY3QgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IHN3aXRjaE1hcCwgbWFwLCBjYXRjaEVycm9yLCBzd2l0Y2hNYXBUbywgdGFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgb2YsIEVNUFRZIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBBY3Rpb25zLCBFZmZlY3QsIG9mVHlwZSB9IGZyb20gJ0BuZ3J4L2VmZmVjdHMnO1xuXG5pbXBvcnQge1xuICBEYWZmU3RvcmFnZVNlcnZpY2VFcnJvclxufSBmcm9tICdAZGFmZm9kaWwvY29yZSdcbmltcG9ydCB7IERhZmZDYXJ0LCBEYWZmQ2FydFN0b3JhZ2VTZXJ2aWNlLCBEQUZGX0NBUlRfRVJST1JfTUFUQ0hFUiB9IGZyb20gJ0BkYWZmb2RpbC9jYXJ0JztcbmltcG9ydCB7IERhZmZDYXJ0RHJpdmVyLCBEYWZmQ2FydFNlcnZpY2VJbnRlcmZhY2UgfSBmcm9tICdAZGFmZm9kaWwvY2FydC9kcml2ZXInO1xuXG5pbXBvcnQge1xuICBEYWZmQ2FydEFjdGlvblR5cGVzLFxuICBEYWZmQ2FydExvYWQsXG4gIERhZmZDYXJ0TG9hZFN1Y2Nlc3MsXG4gIERhZmZDYXJ0TG9hZEZhaWx1cmUsXG4gIERhZmZBZGRUb0NhcnRTdWNjZXNzLFxuICBEYWZmQWRkVG9DYXJ0RmFpbHVyZSxcbiAgRGFmZkFkZFRvQ2FydCxcbiAgRGFmZkNhcnRDbGVhcixcbiAgRGFmZkNhcnRDbGVhclN1Y2Nlc3MsXG4gIERhZmZDYXJ0Q2xlYXJGYWlsdXJlLFxuICBEYWZmQ2FydENyZWF0ZSxcbiAgRGFmZkNhcnRDcmVhdGVTdWNjZXNzLFxuICBEYWZmQ2FydENyZWF0ZUZhaWx1cmUsXG4gIERhZmZDYXJ0U3RvcmFnZUZhaWx1cmVcbn0gZnJvbSAnLi4vYWN0aW9ucy9wdWJsaWNfYXBpJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIERhZmZDYXJ0RWZmZWN0czxUIGV4dGVuZHMgRGFmZkNhcnQ+IHtcbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBhY3Rpb25zJDogQWN0aW9ucyxcbiAgICBASW5qZWN0KERBRkZfQ0FSVF9FUlJPUl9NQVRDSEVSKSBwcml2YXRlIGVycm9yTWF0Y2hlcjogRnVuY3Rpb24sXG4gICAgQEluamVjdChEYWZmQ2FydERyaXZlcikgcHJpdmF0ZSBkcml2ZXI6IERhZmZDYXJ0U2VydmljZUludGVyZmFjZTxUPixcbiAgICBwcml2YXRlIHN0b3JhZ2U6IERhZmZDYXJ0U3RvcmFnZVNlcnZpY2UsXG4gICkge31cblxuICBARWZmZWN0KClcbiAgY3JlYXRlJCA9IHRoaXMuYWN0aW9ucyQucGlwZShcbiAgICBvZlR5cGUoRGFmZkNhcnRBY3Rpb25UeXBlcy5DYXJ0Q3JlYXRlQWN0aW9uKSxcbiAgICBzd2l0Y2hNYXAoKGFjdGlvbjogRGFmZkNhcnRDcmVhdGUpID0+IHRoaXMuZHJpdmVyLmNyZWF0ZSgpLnBpcGUoXG4gICAgICBtYXAoKHJlc3A6IHtpZDogVFsnaWQnXX0pID0+IG5ldyBEYWZmQ2FydENyZWF0ZVN1Y2Nlc3MocmVzcCkpLFxuICAgICAgY2F0Y2hFcnJvcihlcnJvciA9PiBvZihuZXcgRGFmZkNhcnRDcmVhdGVGYWlsdXJlKHRoaXMuZXJyb3JNYXRjaGVyKGVycm9yKSkpKVxuICAgICkpXG4gIClcblxuICBARWZmZWN0KClcbiAgc3RvcmVJZCQgPSB0aGlzLmFjdGlvbnMkLnBpcGUoXG4gICAgb2ZUeXBlKERhZmZDYXJ0QWN0aW9uVHlwZXMuQ2FydENyZWF0ZVN1Y2Nlc3NBY3Rpb24sIERhZmZDYXJ0QWN0aW9uVHlwZXMuUmVzb2x2ZUNhcnRTdWNjZXNzQWN0aW9uKSxcbiAgICBzd2l0Y2hNYXAoKGFjdGlvbjogRGFmZkNhcnRDcmVhdGVTdWNjZXNzPFQ+KSA9PiBvZihudWxsKS5waXBlKFxuICAgICAgdGFwKCgpID0+IHtcbiAgICAgICAgdGhpcy5zdG9yYWdlLnNldENhcnRJZChTdHJpbmcoYWN0aW9uLnBheWxvYWQuaWQpKVxuICAgICAgfSksXG4gICAgICBzd2l0Y2hNYXBUbyhFTVBUWSksXG4gICAgICBjYXRjaEVycm9yKGVycm9yID0+IG9mKG5ldyBEYWZmQ2FydFN0b3JhZ2VGYWlsdXJlKHRoaXMuZXJyb3JNYXRjaGVyKGVycm9yKSkpKSxcbiAgICApKSxcbiAgKVxuXG4gIEBFZmZlY3QoKVxuICBnZXQkID0gdGhpcy5hY3Rpb25zJC5waXBlKFxuICAgIG9mVHlwZShEYWZmQ2FydEFjdGlvblR5cGVzLkNhcnRMb2FkQWN0aW9uKSxcbiAgICBzd2l0Y2hNYXAoKGFjdGlvbjogRGFmZkNhcnRMb2FkKSA9PiBvZihudWxsKS5waXBlKFxuICAgICAgbWFwKCgpID0+IHRoaXMuc3RvcmFnZS5nZXRDYXJ0SWQoKSksXG4gICAgICBzd2l0Y2hNYXAoY2FydElkID0+IHRoaXMuZHJpdmVyLmdldChjYXJ0SWQpKSxcbiAgICAgIG1hcCgocmVzcDogVCkgPT4gbmV3IERhZmZDYXJ0TG9hZFN1Y2Nlc3MocmVzcCkpLFxuICAgICAgY2F0Y2hFcnJvcihlcnJvciA9PiBvZihlcnJvciBpbnN0YW5jZW9mIERhZmZTdG9yYWdlU2VydmljZUVycm9yXG4gICAgICAgID8gbmV3IERhZmZDYXJ0U3RvcmFnZUZhaWx1cmUodGhpcy5lcnJvck1hdGNoZXIoZXJyb3IpKVxuICAgICAgICA6IG5ldyBEYWZmQ2FydExvYWRGYWlsdXJlKHRoaXMuZXJyb3JNYXRjaGVyKGVycm9yKSlcbiAgICAgICkpLFxuICAgICkpLFxuICApXG5cbiAgQEVmZmVjdCgpXG4gIGFkZFRvQ2FydCQgPSB0aGlzLmFjdGlvbnMkLnBpcGUoXG4gICAgb2ZUeXBlKERhZmZDYXJ0QWN0aW9uVHlwZXMuQWRkVG9DYXJ0QWN0aW9uKSxcbiAgICBzd2l0Y2hNYXAoKGFjdGlvbjogRGFmZkFkZFRvQ2FydCkgPT5cbiAgICAgIHRoaXMuZHJpdmVyLmFkZFRvQ2FydChhY3Rpb24ucGF5bG9hZC5wcm9kdWN0SWQsIGFjdGlvbi5wYXlsb2FkLnF0eSkucGlwZShcbiAgICAgICAgbWFwKChyZXNwOiBUKSA9PiBuZXcgRGFmZkFkZFRvQ2FydFN1Y2Nlc3MocmVzcCkpLFxuICAgICAgICBjYXRjaEVycm9yKGVycm9yID0+IG9mKG5ldyBEYWZmQWRkVG9DYXJ0RmFpbHVyZSh0aGlzLmVycm9yTWF0Y2hlcihlcnJvcikpKSlcbiAgICAgIClcbiAgICApXG4gIClcblxuICBARWZmZWN0KClcbiAgY2xlYXIkID0gdGhpcy5hY3Rpb25zJC5waXBlKFxuICAgIG9mVHlwZShEYWZmQ2FydEFjdGlvblR5cGVzLkNhcnRDbGVhckFjdGlvbiksXG4gICAgc3dpdGNoTWFwKChhY3Rpb246IERhZmZDYXJ0Q2xlYXIpID0+IG9mKG51bGwpLnBpcGUoXG4gICAgICBtYXAoKCkgPT4gdGhpcy5zdG9yYWdlLmdldENhcnRJZCgpKSxcbiAgICAgIHN3aXRjaE1hcChjYXJ0SWQgPT4gdGhpcy5kcml2ZXIuY2xlYXIoY2FydElkKSksXG4gICAgICBtYXAoKHJlc3A6IFQpID0+IG5ldyBEYWZmQ2FydENsZWFyU3VjY2VzcyhyZXNwKSksXG4gICAgICBjYXRjaEVycm9yKGVycm9yID0+IG9mKGVycm9yIGluc3RhbmNlb2YgRGFmZlN0b3JhZ2VTZXJ2aWNlRXJyb3JcbiAgICAgICAgPyBuZXcgRGFmZkNhcnRTdG9yYWdlRmFpbHVyZSh0aGlzLmVycm9yTWF0Y2hlcihlcnJvcikpXG4gICAgICAgIDogbmV3IERhZmZDYXJ0Q2xlYXJGYWlsdXJlKHRoaXMuZXJyb3JNYXRjaGVyKGVycm9yKSlcbiAgICAgICkpLFxuICAgICkpLFxuICApXG59XG4iXX0=