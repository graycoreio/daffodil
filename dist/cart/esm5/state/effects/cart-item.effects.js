/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable, Inject } from '@angular/core';
import { switchMap, map, catchError, debounceTime, mergeMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { DaffCartStorageService, DAFF_CART_ERROR_MATCHER } from '@daffodil/cart';
import { DaffCartItemDriver } from '@daffodil/cart/driver';
import { DaffCartItemActionTypes, DaffCartItemLoadSuccess, DaffCartItemLoadFailure, DaffCartItemDeleteSuccess, DaffCartItemDeleteFailure, DaffCartItemUpdateSuccess, DaffCartItemUpdateFailure, DaffCartItemListSuccess, DaffCartItemListFailure, DaffCartItemAddSuccess, DaffCartItemAddFailure, DaffCartItemStateReset, } from '../actions/public_api';
import { DaffCartItemStateDebounceTime } from '../injection-tokens/cart-item-state-debounce-time';
/**
 * @template T, U, V
 */
var DaffCartItemEffects = /** @class */ (function () {
    function DaffCartItemEffects(actions$, errorMatcher, driver, storage, cartItemStateDebounceTime) {
        var _this = this;
        this.actions$ = actions$;
        this.errorMatcher = errorMatcher;
        this.driver = driver;
        this.storage = storage;
        this.cartItemStateDebounceTime = cartItemStateDebounceTime;
        this.list$ = this.actions$.pipe(ofType(DaffCartItemActionTypes.CartItemListAction), switchMap((/**
         * @param {?} action
         * @return {?}
         */
        function (action) {
            return _this.driver.list(_this.storage.getCartId()).pipe(map((/**
             * @param {?} resp
             * @return {?}
             */
            function (resp) { return new DaffCartItemListSuccess(resp); })), catchError((/**
             * @param {?} error
             * @return {?}
             */
            function (error) { return of(new DaffCartItemListFailure(_this.errorMatcher(error))); })));
        })));
        this.get$ = this.actions$.pipe(ofType(DaffCartItemActionTypes.CartItemLoadAction), switchMap((/**
         * @param {?} action
         * @return {?}
         */
        function (action) {
            return _this.driver.get(_this.storage.getCartId(), action.itemId).pipe(map((/**
             * @param {?} resp
             * @return {?}
             */
            function (resp) { return new DaffCartItemLoadSuccess(resp); })), catchError((/**
             * @param {?} error
             * @return {?}
             */
            function (error) { return of(new DaffCartItemLoadFailure(_this.errorMatcher(error))); })));
        })));
        this.add$ = this.actions$.pipe(ofType(DaffCartItemActionTypes.CartItemAddAction), switchMap((/**
         * @param {?} action
         * @return {?}
         */
        function (action) {
            return _this.driver.add(_this.storage.getCartId(), action.input).pipe(map((/**
             * @param {?} resp
             * @return {?}
             */
            function (resp) { return new DaffCartItemAddSuccess(resp); })), catchError((/**
             * @param {?} error
             * @return {?}
             */
            function (error) { return of(new DaffCartItemAddFailure(_this.errorMatcher(error))); })));
        })));
        this.update$ = this.actions$.pipe(ofType(DaffCartItemActionTypes.CartItemUpdateAction), mergeMap((/**
         * @param {?} action
         * @return {?}
         */
        function (action) {
            return _this.driver.update(_this.storage.getCartId(), action.itemId, action.changes).pipe(map((/**
             * @param {?} resp
             * @return {?}
             */
            function (resp) { return new DaffCartItemUpdateSuccess(resp, action.itemId); })), catchError((/**
             * @param {?} error
             * @return {?}
             */
            function (error) { return of(new DaffCartItemUpdateFailure(_this.errorMatcher(error))); })));
        })));
        this.resetCartItemStateAfterChange$ = this.actions$.pipe(ofType(DaffCartItemActionTypes.CartItemAddSuccessAction, DaffCartItemActionTypes.CartItemUpdateSuccessAction), debounceTime(this.cartItemStateDebounceTime), map((/**
         * @return {?}
         */
        function () { return new DaffCartItemStateReset(); })));
        this.delete$ = this.actions$.pipe(ofType(DaffCartItemActionTypes.CartItemDeleteAction), mergeMap((/**
         * @param {?} action
         * @return {?}
         */
        function (action) {
            return _this.driver.delete(_this.storage.getCartId(), action.itemId).pipe(map((/**
             * @param {?} resp
             * @return {?}
             */
            function (resp) { return new DaffCartItemDeleteSuccess(resp); })), catchError((/**
             * @param {?} error
             * @return {?}
             */
            function (error) { return of(new DaffCartItemDeleteFailure(_this.errorMatcher(error))); })));
        })));
    }
    DaffCartItemEffects.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    DaffCartItemEffects.ctorParameters = function () { return [
        { type: Actions },
        { type: Function, decorators: [{ type: Inject, args: [DAFF_CART_ERROR_MATCHER,] }] },
        { type: undefined, decorators: [{ type: Inject, args: [DaffCartItemDriver,] }] },
        { type: DaffCartStorageService },
        { type: Number, decorators: [{ type: Inject, args: [DaffCartItemStateDebounceTime,] }] }
    ]; };
    tslib_1.__decorate([
        Effect(),
        tslib_1.__metadata("design:type", Object)
    ], DaffCartItemEffects.prototype, "list$", void 0);
    tslib_1.__decorate([
        Effect(),
        tslib_1.__metadata("design:type", Object)
    ], DaffCartItemEffects.prototype, "get$", void 0);
    tslib_1.__decorate([
        Effect(),
        tslib_1.__metadata("design:type", Object)
    ], DaffCartItemEffects.prototype, "add$", void 0);
    tslib_1.__decorate([
        Effect(),
        tslib_1.__metadata("design:type", Object)
    ], DaffCartItemEffects.prototype, "update$", void 0);
    tslib_1.__decorate([
        Effect(),
        tslib_1.__metadata("design:type", Object)
    ], DaffCartItemEffects.prototype, "resetCartItemStateAfterChange$", void 0);
    tslib_1.__decorate([
        Effect(),
        tslib_1.__metadata("design:type", Object)
    ], DaffCartItemEffects.prototype, "delete$", void 0);
    return DaffCartItemEffects;
}());
export { DaffCartItemEffects };
if (false) {
    /** @type {?} */
    DaffCartItemEffects.prototype.list$;
    /** @type {?} */
    DaffCartItemEffects.prototype.get$;
    /** @type {?} */
    DaffCartItemEffects.prototype.add$;
    /** @type {?} */
    DaffCartItemEffects.prototype.update$;
    /** @type {?} */
    DaffCartItemEffects.prototype.resetCartItemStateAfterChange$;
    /** @type {?} */
    DaffCartItemEffects.prototype.delete$;
    /**
     * @type {?}
     * @private
     */
    DaffCartItemEffects.prototype.actions$;
    /**
     * @type {?}
     * @private
     */
    DaffCartItemEffects.prototype.errorMatcher;
    /**
     * @type {?}
     * @private
     */
    DaffCartItemEffects.prototype.driver;
    /**
     * @type {?}
     * @private
     */
    DaffCartItemEffects.prototype.storage;
    /**
     * @type {?}
     * @private
     */
    DaffCartItemEffects.prototype.cartItemStateDebounceTime;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FydC1pdGVtLmVmZmVjdHMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGFmZm9kaWwvY2FydC9zdGF0ZS8iLCJzb3VyY2VzIjpbImVmZmVjdHMvY2FydC1pdGVtLmVmZmVjdHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNuRCxPQUFPLEVBQUUsU0FBUyxFQUFFLEdBQUcsRUFBRSxVQUFVLEVBQUUsWUFBWSxFQUFhLFFBQVEsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQy9GLE9BQU8sRUFBRSxFQUFFLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDMUIsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRXhELE9BQU8sRUFBK0Isc0JBQXNCLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUM5RyxPQUFPLEVBQUUsa0JBQWtCLEVBQWdDLE1BQU0sdUJBQXVCLENBQUM7QUFFekYsT0FBTyxFQUNMLHVCQUF1QixFQUV2Qix1QkFBdUIsRUFDdkIsdUJBQXVCLEVBRXZCLHlCQUF5QixFQUN6Qix5QkFBeUIsRUFFekIseUJBQXlCLEVBQ3pCLHlCQUF5QixFQUV6Qix1QkFBdUIsRUFDdkIsdUJBQXVCLEVBRXZCLHNCQUFzQixFQUN0QixzQkFBc0IsRUFDdkIsc0JBQXNCLEdBQ3RCLE1BQU0sdUJBQXVCLENBQUM7QUFFL0IsT0FBTyxFQUFFLDZCQUE2QixFQUFFLE1BQU0sbURBQW1ELENBQUM7Ozs7QUFFbEc7SUFNRSw2QkFDVSxRQUFpQixFQUNnQixZQUFzQixFQUMzQixNQUE2QyxFQUMzRSxPQUErQixFQUNRLHlCQUFpQztRQUxoRixpQkFNSTtRQUxNLGFBQVEsR0FBUixRQUFRLENBQVM7UUFDZ0IsaUJBQVksR0FBWixZQUFZLENBQVU7UUFDM0IsV0FBTSxHQUFOLE1BQU0sQ0FBdUM7UUFDM0Us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UUFEQyxNQUFNLEVBQUU7O3NEQVNSO0lBR0Q7UUFEQyxNQUFNLEVBQUU7O3FEQVNSO0lBR0Q7UUFEQyxNQUFNLEVBQUU7O3FEQVlUO0lBR0E7UUFEQyxNQUFNLEVBQUU7O3dEQWFUO0lBR0E7UUFEQSxNQUFNLEVBQUU7OytFQUtQO0lBR0Q7UUFEQyxNQUFNLEVBQUU7O3dEQVNSO0lBQ0gsMEJBQUM7Q0FBQSxBQWxGRCxJQWtGQztTQWpGWSxtQkFBbUI7OztJQWE5QixvQ0FTQzs7SUFFRCxtQ0FTQzs7SUFFRCxtQ0FZQTs7SUFFQSxzQ0FhQTs7SUFFRCw2REFLRTs7SUFFRCxzQ0FTQzs7Ozs7SUExRUMsdUNBQXlCOzs7OztJQUN6QiwyQ0FBK0Q7Ozs7O0lBQy9ELHFDQUFpRjs7Ozs7SUFDbkYsc0NBQXVDOzs7OztJQUN2Qyx3REFBZ0YiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlLCBJbmplY3QgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IHN3aXRjaE1hcCwgbWFwLCBjYXRjaEVycm9yLCBkZWJvdW5jZVRpbWUsIGNvbmNhdE1hcCwgbWVyZ2VNYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBvZiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgQWN0aW9ucywgRWZmZWN0LCBvZlR5cGUgfSBmcm9tICdAbmdyeC9lZmZlY3RzJztcblxuaW1wb3J0IHsgRGFmZkNhcnRJdGVtSW5wdXQsIERhZmZDYXJ0LCBEYWZmQ2FydFN0b3JhZ2VTZXJ2aWNlLCBEQUZGX0NBUlRfRVJST1JfTUFUQ0hFUiB9IGZyb20gJ0BkYWZmb2RpbC9jYXJ0JztcbmltcG9ydCB7IERhZmZDYXJ0SXRlbURyaXZlciwgRGFmZkNhcnRJdGVtU2VydmljZUludGVyZmFjZSB9IGZyb20gJ0BkYWZmb2RpbC9jYXJ0L2RyaXZlcic7XG5cbmltcG9ydCB7XG4gIERhZmZDYXJ0SXRlbUFjdGlvblR5cGVzLFxuICBEYWZmQ2FydEl0ZW1Mb2FkLFxuICBEYWZmQ2FydEl0ZW1Mb2FkU3VjY2VzcyxcbiAgRGFmZkNhcnRJdGVtTG9hZEZhaWx1cmUsXG4gIERhZmZDYXJ0SXRlbURlbGV0ZSxcbiAgRGFmZkNhcnRJdGVtRGVsZXRlU3VjY2VzcyxcbiAgRGFmZkNhcnRJdGVtRGVsZXRlRmFpbHVyZSxcbiAgRGFmZkNhcnRJdGVtVXBkYXRlLFxuICBEYWZmQ2FydEl0ZW1VcGRhdGVTdWNjZXNzLFxuICBEYWZmQ2FydEl0ZW1VcGRhdGVGYWlsdXJlLFxuICBEYWZmQ2FydEl0ZW1MaXN0LFxuICBEYWZmQ2FydEl0ZW1MaXN0U3VjY2VzcyxcbiAgRGFmZkNhcnRJdGVtTGlzdEZhaWx1cmUsXG4gIERhZmZDYXJ0SXRlbUFkZCxcbiAgRGFmZkNhcnRJdGVtQWRkU3VjY2VzcyxcbiAgRGFmZkNhcnRJdGVtQWRkRmFpbHVyZSxcblx0RGFmZkNhcnRJdGVtU3RhdGVSZXNldCxcbn0gZnJvbSAnLi4vYWN0aW9ucy9wdWJsaWNfYXBpJztcbmltcG9ydCB7IERhZmZTdGF0ZWZ1bENhcnRJdGVtIH0gZnJvbSAnLi4vbW9kZWxzL3B1YmxpY19hcGknO1xuaW1wb3J0IHsgRGFmZkNhcnRJdGVtU3RhdGVEZWJvdW5jZVRpbWUgfSBmcm9tICcuLi9pbmplY3Rpb24tdG9rZW5zL2NhcnQtaXRlbS1zdGF0ZS1kZWJvdW5jZS10aW1lJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIERhZmZDYXJ0SXRlbUVmZmVjdHM8XG4gIFQgZXh0ZW5kcyBEYWZmU3RhdGVmdWxDYXJ0SXRlbSxcbiAgVSBleHRlbmRzIERhZmZDYXJ0SXRlbUlucHV0LFxuXHRWIGV4dGVuZHMgRGFmZkNhcnQsXG4+IHtcbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBhY3Rpb25zJDogQWN0aW9ucyxcbiAgICBASW5qZWN0KERBRkZfQ0FSVF9FUlJPUl9NQVRDSEVSKSBwcml2YXRlIGVycm9yTWF0Y2hlcjogRnVuY3Rpb24sXG4gICAgQEluamVjdChEYWZmQ2FydEl0ZW1Ecml2ZXIpIHByaXZhdGUgZHJpdmVyOiBEYWZmQ2FydEl0ZW1TZXJ2aWNlSW50ZXJmYWNlPFQsIFUsIFY+LFxuXHRcdHByaXZhdGUgc3RvcmFnZTogRGFmZkNhcnRTdG9yYWdlU2VydmljZSxcblx0XHRASW5qZWN0KERhZmZDYXJ0SXRlbVN0YXRlRGVib3VuY2VUaW1lKSBwcml2YXRlIGNhcnRJdGVtU3RhdGVEZWJvdW5jZVRpbWU6IG51bWJlclxuICApIHt9XG5cbiAgQEVmZmVjdCgpXG4gIGxpc3QkID0gdGhpcy5hY3Rpb25zJC5waXBlKFxuICAgIG9mVHlwZShEYWZmQ2FydEl0ZW1BY3Rpb25UeXBlcy5DYXJ0SXRlbUxpc3RBY3Rpb24pLFxuICAgIHN3aXRjaE1hcCgoYWN0aW9uOiBEYWZmQ2FydEl0ZW1MaXN0KSA9PlxuICAgICAgdGhpcy5kcml2ZXIubGlzdCh0aGlzLnN0b3JhZ2UuZ2V0Q2FydElkKCkpLnBpcGUoXG4gICAgICAgIG1hcCgocmVzcDogVFtdKSA9PiBuZXcgRGFmZkNhcnRJdGVtTGlzdFN1Y2Nlc3MocmVzcCkpLFxuICAgICAgICBjYXRjaEVycm9yKGVycm9yID0+IG9mKG5ldyBEYWZmQ2FydEl0ZW1MaXN0RmFpbHVyZSh0aGlzLmVycm9yTWF0Y2hlcihlcnJvcikpKSlcbiAgICAgIClcbiAgICApXG4gIClcblxuICBARWZmZWN0KClcbiAgZ2V0JCA9IHRoaXMuYWN0aW9ucyQucGlwZShcbiAgICBvZlR5cGUoRGFmZkNhcnRJdGVtQWN0aW9uVHlwZXMuQ2FydEl0ZW1Mb2FkQWN0aW9uKSxcbiAgICBzd2l0Y2hNYXAoKGFjdGlvbjogRGFmZkNhcnRJdGVtTG9hZDxUPikgPT5cbiAgICAgIHRoaXMuZHJpdmVyLmdldCh0aGlzLnN0b3JhZ2UuZ2V0Q2FydElkKCksIGFjdGlvbi5pdGVtSWQpLnBpcGUoXG4gICAgICAgIG1hcCgocmVzcDogVCkgPT4gbmV3IERhZmZDYXJ0SXRlbUxvYWRTdWNjZXNzKHJlc3ApKSxcbiAgICAgICAgY2F0Y2hFcnJvcihlcnJvciA9PiBvZihuZXcgRGFmZkNhcnRJdGVtTG9hZEZhaWx1cmUodGhpcy5lcnJvck1hdGNoZXIoZXJyb3IpKSkpXG4gICAgICApXG4gICAgKVxuICApXG5cbiAgQEVmZmVjdCgpXG4gIGFkZCQgPSB0aGlzLmFjdGlvbnMkLnBpcGUoXG4gICAgb2ZUeXBlKERhZmZDYXJ0SXRlbUFjdGlvblR5cGVzLkNhcnRJdGVtQWRkQWN0aW9uKSxcbiAgICBzd2l0Y2hNYXAoKGFjdGlvbjogRGFmZkNhcnRJdGVtQWRkPFU+KSA9PlxuXHRcdFx0dGhpcy5kcml2ZXIuYWRkKFxuXHRcdFx0XHR0aGlzLnN0b3JhZ2UuZ2V0Q2FydElkKCksXG5cdFx0XHRcdGFjdGlvbi5pbnB1dFxuXHRcdFx0KS5waXBlKFxuICAgICAgICBtYXAoKHJlc3A6IFYpID0+IG5ldyBEYWZmQ2FydEl0ZW1BZGRTdWNjZXNzKHJlc3ApKSxcbiAgICAgICAgY2F0Y2hFcnJvcihlcnJvciA9PiBvZihuZXcgRGFmZkNhcnRJdGVtQWRkRmFpbHVyZSh0aGlzLmVycm9yTWF0Y2hlcihlcnJvcikpKSlcbiAgICAgIClcbiAgICApXG5cdClcblxuICBARWZmZWN0KClcbiAgdXBkYXRlJCA9IHRoaXMuYWN0aW9ucyQucGlwZShcbiAgICBvZlR5cGUoRGFmZkNhcnRJdGVtQWN0aW9uVHlwZXMuQ2FydEl0ZW1VcGRhdGVBY3Rpb24pLFxuXHRcdG1lcmdlTWFwKChhY3Rpb246IERhZmZDYXJ0SXRlbVVwZGF0ZTxUPikgPT4gXG5cdFx0XHR0aGlzLmRyaXZlci51cGRhdGUoXG5cdFx0XHRcdHRoaXMuc3RvcmFnZS5nZXRDYXJ0SWQoKSxcblx0XHRcdFx0YWN0aW9uLml0ZW1JZCxcblx0XHRcdFx0YWN0aW9uLmNoYW5nZXNcblx0XHRcdCkucGlwZShcblx0XHRcdFx0bWFwKChyZXNwOiBWKSA9PiBuZXcgRGFmZkNhcnRJdGVtVXBkYXRlU3VjY2VzcyhyZXNwLCBhY3Rpb24uaXRlbUlkKSksXG5cdFx0XHRcdGNhdGNoRXJyb3IoZXJyb3IgPT4gb2YobmV3IERhZmZDYXJ0SXRlbVVwZGF0ZUZhaWx1cmUodGhpcy5lcnJvck1hdGNoZXIoZXJyb3IpKSkpXG5cdFx0XHQpXG5cdFx0KVxuXHQpXG5cblx0QEVmZmVjdCgpXG4gIHJlc2V0Q2FydEl0ZW1TdGF0ZUFmdGVyQ2hhbmdlJCA9IHRoaXMuYWN0aW9ucyQucGlwZShcblx0XHRvZlR5cGUoRGFmZkNhcnRJdGVtQWN0aW9uVHlwZXMuQ2FydEl0ZW1BZGRTdWNjZXNzQWN0aW9uLCBEYWZmQ2FydEl0ZW1BY3Rpb25UeXBlcy5DYXJ0SXRlbVVwZGF0ZVN1Y2Nlc3NBY3Rpb24pLFxuXHRcdGRlYm91bmNlVGltZSh0aGlzLmNhcnRJdGVtU3RhdGVEZWJvdW5jZVRpbWUpLFxuXHRcdG1hcCgoKSA9PiBuZXcgRGFmZkNhcnRJdGVtU3RhdGVSZXNldCgpKVxuICApXG5cbiAgQEVmZmVjdCgpXG4gIGRlbGV0ZSQgPSB0aGlzLmFjdGlvbnMkLnBpcGUoXG4gICAgb2ZUeXBlKERhZmZDYXJ0SXRlbUFjdGlvblR5cGVzLkNhcnRJdGVtRGVsZXRlQWN0aW9uKSxcbiAgICBtZXJnZU1hcCgoYWN0aW9uOiBEYWZmQ2FydEl0ZW1EZWxldGU8VD4pID0+XG4gICAgICB0aGlzLmRyaXZlci5kZWxldGUodGhpcy5zdG9yYWdlLmdldENhcnRJZCgpLCBhY3Rpb24uaXRlbUlkKS5waXBlKFxuICAgICAgICBtYXAoKHJlc3A6IFYpID0+IG5ldyBEYWZmQ2FydEl0ZW1EZWxldGVTdWNjZXNzKHJlc3ApKSxcbiAgICAgICAgY2F0Y2hFcnJvcihlcnJvciA9PiBvZihuZXcgRGFmZkNhcnRJdGVtRGVsZXRlRmFpbHVyZSh0aGlzLmVycm9yTWF0Y2hlcihlcnJvcikpKSlcbiAgICAgIClcbiAgICApXG4gIClcbn1cbiJdfQ==