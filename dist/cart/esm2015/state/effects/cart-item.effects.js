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
export class DaffCartItemEffects {
    /**
     * @param {?} actions$
     * @param {?} errorMatcher
     * @param {?} driver
     * @param {?} storage
     * @param {?} cartItemStateDebounceTime
     */
    constructor(actions$, errorMatcher, driver, storage, cartItemStateDebounceTime) {
        this.actions$ = actions$;
        this.errorMatcher = errorMatcher;
        this.driver = driver;
        this.storage = storage;
        this.cartItemStateDebounceTime = cartItemStateDebounceTime;
        this.list$ = this.actions$.pipe(ofType(DaffCartItemActionTypes.CartItemListAction), switchMap((/**
         * @param {?} action
         * @return {?}
         */
        (action) => this.driver.list(this.storage.getCartId()).pipe(map((/**
         * @param {?} resp
         * @return {?}
         */
        (resp) => new DaffCartItemListSuccess(resp))), catchError((/**
         * @param {?} error
         * @return {?}
         */
        error => of(new DaffCartItemListFailure(this.errorMatcher(error)))))))));
        this.get$ = this.actions$.pipe(ofType(DaffCartItemActionTypes.CartItemLoadAction), switchMap((/**
         * @param {?} action
         * @return {?}
         */
        (action) => this.driver.get(this.storage.getCartId(), action.itemId).pipe(map((/**
         * @param {?} resp
         * @return {?}
         */
        (resp) => new DaffCartItemLoadSuccess(resp))), catchError((/**
         * @param {?} error
         * @return {?}
         */
        error => of(new DaffCartItemLoadFailure(this.errorMatcher(error)))))))));
        this.add$ = this.actions$.pipe(ofType(DaffCartItemActionTypes.CartItemAddAction), switchMap((/**
         * @param {?} action
         * @return {?}
         */
        (action) => this.driver.add(this.storage.getCartId(), action.input).pipe(map((/**
         * @param {?} resp
         * @return {?}
         */
        (resp) => new DaffCartItemAddSuccess(resp))), catchError((/**
         * @param {?} error
         * @return {?}
         */
        error => of(new DaffCartItemAddFailure(this.errorMatcher(error)))))))));
        this.update$ = this.actions$.pipe(ofType(DaffCartItemActionTypes.CartItemUpdateAction), mergeMap((/**
         * @param {?} action
         * @return {?}
         */
        (action) => this.driver.update(this.storage.getCartId(), action.itemId, action.changes).pipe(map((/**
         * @param {?} resp
         * @return {?}
         */
        (resp) => new DaffCartItemUpdateSuccess(resp, action.itemId))), catchError((/**
         * @param {?} error
         * @return {?}
         */
        error => of(new DaffCartItemUpdateFailure(this.errorMatcher(error)))))))));
        this.resetCartItemStateAfterChange$ = this.actions$.pipe(ofType(DaffCartItemActionTypes.CartItemAddSuccessAction, DaffCartItemActionTypes.CartItemUpdateSuccessAction), debounceTime(this.cartItemStateDebounceTime), map((/**
         * @return {?}
         */
        () => new DaffCartItemStateReset())));
        this.delete$ = this.actions$.pipe(ofType(DaffCartItemActionTypes.CartItemDeleteAction), mergeMap((/**
         * @param {?} action
         * @return {?}
         */
        (action) => this.driver.delete(this.storage.getCartId(), action.itemId).pipe(map((/**
         * @param {?} resp
         * @return {?}
         */
        (resp) => new DaffCartItemDeleteSuccess(resp))), catchError((/**
         * @param {?} error
         * @return {?}
         */
        error => of(new DaffCartItemDeleteFailure(this.errorMatcher(error)))))))));
    }
}
DaffCartItemEffects.decorators = [
    { type: Injectable }
];
/** @nocollapse */
DaffCartItemEffects.ctorParameters = () => [
    { type: Actions },
    { type: Function, decorators: [{ type: Inject, args: [DAFF_CART_ERROR_MATCHER,] }] },
    { type: undefined, decorators: [{ type: Inject, args: [DaffCartItemDriver,] }] },
    { type: DaffCartStorageService },
    { type: Number, decorators: [{ type: Inject, args: [DaffCartItemStateDebounceTime,] }] }
];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FydC1pdGVtLmVmZmVjdHMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGFmZm9kaWwvY2FydC9zdGF0ZS8iLCJzb3VyY2VzIjpbImVmZmVjdHMvY2FydC1pdGVtLmVmZmVjdHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNuRCxPQUFPLEVBQUUsU0FBUyxFQUFFLEdBQUcsRUFBRSxVQUFVLEVBQUUsWUFBWSxFQUFhLFFBQVEsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQy9GLE9BQU8sRUFBRSxFQUFFLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDMUIsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRXhELE9BQU8sRUFBK0Isc0JBQXNCLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUM5RyxPQUFPLEVBQUUsa0JBQWtCLEVBQWdDLE1BQU0sdUJBQXVCLENBQUM7QUFFekYsT0FBTyxFQUNMLHVCQUF1QixFQUV2Qix1QkFBdUIsRUFDdkIsdUJBQXVCLEVBRXZCLHlCQUF5QixFQUN6Qix5QkFBeUIsRUFFekIseUJBQXlCLEVBQ3pCLHlCQUF5QixFQUV6Qix1QkFBdUIsRUFDdkIsdUJBQXVCLEVBRXZCLHNCQUFzQixFQUN0QixzQkFBc0IsRUFDdkIsc0JBQXNCLEdBQ3RCLE1BQU0sdUJBQXVCLENBQUM7QUFFL0IsT0FBTyxFQUFFLDZCQUE2QixFQUFFLE1BQU0sbURBQW1ELENBQUM7Ozs7QUFHbEcsTUFBTSxPQUFPLG1CQUFtQjs7Ozs7Ozs7SUFLOUIsWUFDVSxRQUFpQixFQUNnQixZQUFzQixFQUMzQixNQUE2QyxFQUMzRSxPQUErQixFQUNRLHlCQUFpQztRQUp0RSxhQUFRLEdBQVIsUUFBUSxDQUFTO1FBQ2dCLGlCQUFZLEdBQVosWUFBWSxDQUFVO1FBQzNCLFdBQU0sR0FBTixNQUFN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LEVBQUU7OzJFQUtQO0FBR0Q7SUFEQyxNQUFNLEVBQUU7O29EQVNSOzs7SUFuRUQsb0NBU0M7O0lBRUQsbUNBU0M7O0lBRUQsbUNBWUE7O0lBRUEsc0NBYUE7O0lBRUQsNkRBS0U7O0lBRUQsc0NBU0M7Ozs7O0lBMUVDLHVDQUF5Qjs7Ozs7SUFDekIsMkNBQStEOzs7OztJQUMvRCxxQ0FBaUY7Ozs7O0lBQ25GLHNDQUF1Qzs7Ozs7SUFDdkMsd0RBQWdGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSwgSW5qZWN0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBzd2l0Y2hNYXAsIG1hcCwgY2F0Y2hFcnJvciwgZGVib3VuY2VUaW1lLCBjb25jYXRNYXAsIG1lcmdlTWFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgb2YgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IEFjdGlvbnMsIEVmZmVjdCwgb2ZUeXBlIH0gZnJvbSAnQG5ncngvZWZmZWN0cyc7XG5cbmltcG9ydCB7IERhZmZDYXJ0SXRlbUlucHV0LCBEYWZmQ2FydCwgRGFmZkNhcnRTdG9yYWdlU2VydmljZSwgREFGRl9DQVJUX0VSUk9SX01BVENIRVIgfSBmcm9tICdAZGFmZm9kaWwvY2FydCc7XG5pbXBvcnQgeyBEYWZmQ2FydEl0ZW1Ecml2ZXIsIERhZmZDYXJ0SXRlbVNlcnZpY2VJbnRlcmZhY2UgfSBmcm9tICdAZGFmZm9kaWwvY2FydC9kcml2ZXInO1xuXG5pbXBvcnQge1xuICBEYWZmQ2FydEl0ZW1BY3Rpb25UeXBlcyxcbiAgRGFmZkNhcnRJdGVtTG9hZCxcbiAgRGFmZkNhcnRJdGVtTG9hZFN1Y2Nlc3MsXG4gIERhZmZDYXJ0SXRlbUxvYWRGYWlsdXJlLFxuICBEYWZmQ2FydEl0ZW1EZWxldGUsXG4gIERhZmZDYXJ0SXRlbURlbGV0ZVN1Y2Nlc3MsXG4gIERhZmZDYXJ0SXRlbURlbGV0ZUZhaWx1cmUsXG4gIERhZmZDYXJ0SXRlbVVwZGF0ZSxcbiAgRGFmZkNhcnRJdGVtVXBkYXRlU3VjY2VzcyxcbiAgRGFmZkNhcnRJdGVtVXBkYXRlRmFpbHVyZSxcbiAgRGFmZkNhcnRJdGVtTGlzdCxcbiAgRGFmZkNhcnRJdGVtTGlzdFN1Y2Nlc3MsXG4gIERhZmZDYXJ0SXRlbUxpc3RGYWlsdXJlLFxuICBEYWZmQ2FydEl0ZW1BZGQsXG4gIERhZmZDYXJ0SXRlbUFkZFN1Y2Nlc3MsXG4gIERhZmZDYXJ0SXRlbUFkZEZhaWx1cmUsXG5cdERhZmZDYXJ0SXRlbVN0YXRlUmVzZXQsXG59IGZyb20gJy4uL2FjdGlvbnMvcHVibGljX2FwaSc7XG5pbXBvcnQgeyBEYWZmU3RhdGVmdWxDYXJ0SXRlbSB9IGZyb20gJy4uL21vZGVscy9wdWJsaWNfYXBpJztcbmltcG9ydCB7IERhZmZDYXJ0SXRlbVN0YXRlRGVib3VuY2VUaW1lIH0gZnJvbSAnLi4vaW5qZWN0aW9uLXRva2Vucy9jYXJ0LWl0ZW0tc3RhdGUtZGVib3VuY2UtdGltZSc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBEYWZmQ2FydEl0ZW1FZmZlY3RzPFxuICBUIGV4dGVuZHMgRGFmZlN0YXRlZnVsQ2FydEl0ZW0sXG4gIFUgZXh0ZW5kcyBEYWZmQ2FydEl0ZW1JbnB1dCxcblx0ViBleHRlbmRzIERhZmZDYXJ0LFxuPiB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgYWN0aW9ucyQ6IEFjdGlvbnMsXG4gICAgQEluamVjdChEQUZGX0NBUlRfRVJST1JfTUFUQ0hFUikgcHJpdmF0ZSBlcnJvck1hdGNoZXI6IEZ1bmN0aW9uLFxuICAgIEBJbmplY3QoRGFmZkNhcnRJdGVtRHJpdmVyKSBwcml2YXRlIGRyaXZlcjogRGFmZkNhcnRJdGVtU2VydmljZUludGVyZmFjZTxULCBVLCBWPixcblx0XHRwcml2YXRlIHN0b3JhZ2U6IERhZmZDYXJ0U3RvcmFnZVNlcnZpY2UsXG5cdFx0QEluamVjdChEYWZmQ2FydEl0ZW1TdGF0ZURlYm91bmNlVGltZSkgcHJpdmF0ZSBjYXJ0SXRlbVN0YXRlRGVib3VuY2VUaW1lOiBudW1iZXJcbiAgKSB7fVxuXG4gIEBFZmZlY3QoKVxuICBsaXN0JCA9IHRoaXMuYWN0aW9ucyQucGlwZShcbiAgICBvZlR5cGUoRGFmZkNhcnRJdGVtQWN0aW9uVHlwZXMuQ2FydEl0ZW1MaXN0QWN0aW9uKSxcbiAgICBzd2l0Y2hNYXAoKGFjdGlvbjogRGFmZkNhcnRJdGVtTGlzdCkgPT5cbiAgICAgIHRoaXMuZHJpdmVyLmxpc3QodGhpcy5zdG9yYWdlLmdldENhcnRJZCgpKS5waXBlKFxuICAgICAgICBtYXAoKHJlc3A6IFRbXSkgPT4gbmV3IERhZmZDYXJ0SXRlbUxpc3RTdWNjZXNzKHJlc3ApKSxcbiAgICAgICAgY2F0Y2hFcnJvcihlcnJvciA9PiBvZihuZXcgRGFmZkNhcnRJdGVtTGlzdEZhaWx1cmUodGhpcy5lcnJvck1hdGNoZXIoZXJyb3IpKSkpXG4gICAgICApXG4gICAgKVxuICApXG5cbiAgQEVmZmVjdCgpXG4gIGdldCQgPSB0aGlzLmFjdGlvbnMkLnBpcGUoXG4gICAgb2ZUeXBlKERhZmZDYXJ0SXRlbUFjdGlvblR5cGVzLkNhcnRJdGVtTG9hZEFjdGlvbiksXG4gICAgc3dpdGNoTWFwKChhY3Rpb246IERhZmZDYXJ0SXRlbUxvYWQ8VD4pID0+XG4gICAgICB0aGlzLmRyaXZlci5nZXQodGhpcy5zdG9yYWdlLmdldENhcnRJZCgpLCBhY3Rpb24uaXRlbUlkKS5waXBlKFxuICAgICAgICBtYXAoKHJlc3A6IFQpID0+IG5ldyBEYWZmQ2FydEl0ZW1Mb2FkU3VjY2VzcyhyZXNwKSksXG4gICAgICAgIGNhdGNoRXJyb3IoZXJyb3IgPT4gb2YobmV3IERhZmZDYXJ0SXRlbUxvYWRGYWlsdXJlKHRoaXMuZXJyb3JNYXRjaGVyKGVycm9yKSkpKVxuICAgICAgKVxuICAgIClcbiAgKVxuXG4gIEBFZmZlY3QoKVxuICBhZGQkID0gdGhpcy5hY3Rpb25zJC5waXBlKFxuICAgIG9mVHlwZShEYWZmQ2FydEl0ZW1BY3Rpb25UeXBlcy5DYXJ0SXRlbUFkZEFjdGlvbiksXG4gICAgc3dpdGNoTWFwKChhY3Rpb246IERhZmZDYXJ0SXRlbUFkZDxVPikgPT5cblx0XHRcdHRoaXMuZHJpdmVyLmFkZChcblx0XHRcdFx0dGhpcy5zdG9yYWdlLmdldENhcnRJZCgpLFxuXHRcdFx0XHRhY3Rpb24uaW5wdXRcblx0XHRcdCkucGlwZShcbiAgICAgICAgbWFwKChyZXNwOiBWKSA9PiBuZXcgRGFmZkNhcnRJdGVtQWRkU3VjY2VzcyhyZXNwKSksXG4gICAgICAgIGNhdGNoRXJyb3IoZXJyb3IgPT4gb2YobmV3IERhZmZDYXJ0SXRlbUFkZEZhaWx1cmUodGhpcy5lcnJvck1hdGNoZXIoZXJyb3IpKSkpXG4gICAgICApXG4gICAgKVxuXHQpXG5cbiAgQEVmZmVjdCgpXG4gIHVwZGF0ZSQgPSB0aGlzLmFjdGlvbnMkLnBpcGUoXG4gICAgb2ZUeXBlKERhZmZDYXJ0SXRlbUFjdGlvblR5cGVzLkNhcnRJdGVtVXBkYXRlQWN0aW9uKSxcblx0XHRtZXJnZU1hcCgoYWN0aW9uOiBEYWZmQ2FydEl0ZW1VcGRhdGU8VD4pID0+IFxuXHRcdFx0dGhpcy5kcml2ZXIudXBkYXRlKFxuXHRcdFx0XHR0aGlzLnN0b3JhZ2UuZ2V0Q2FydElkKCksXG5cdFx0XHRcdGFjdGlvbi5pdGVtSWQsXG5cdFx0XHRcdGFjdGlvbi5jaGFuZ2VzXG5cdFx0XHQpLnBpcGUoXG5cdFx0XHRcdG1hcCgocmVzcDogVikgPT4gbmV3IERhZmZDYXJ0SXRlbVVwZGF0ZVN1Y2Nlc3MocmVzcCwgYWN0aW9uLml0ZW1JZCkpLFxuXHRcdFx0XHRjYXRjaEVycm9yKGVycm9yID0+IG9mKG5ldyBEYWZmQ2FydEl0ZW1VcGRhdGVGYWlsdXJlKHRoaXMuZXJyb3JNYXRjaGVyKGVycm9yKSkpKVxuXHRcdFx0KVxuXHRcdClcblx0KVxuXG5cdEBFZmZlY3QoKVxuICByZXNldENhcnRJdGVtU3RhdGVBZnRlckNoYW5nZSQgPSB0aGlzLmFjdGlvbnMkLnBpcGUoXG5cdFx0b2ZUeXBlKERhZmZDYXJ0SXRlbUFjdGlvblR5cGVzLkNhcnRJdGVtQWRkU3VjY2Vzc0FjdGlvbiwgRGFmZkNhcnRJdGVtQWN0aW9uVHlwZXMuQ2FydEl0ZW1VcGRhdGVTdWNjZXNzQWN0aW9uKSxcblx0XHRkZWJvdW5jZVRpbWUodGhpcy5jYXJ0SXRlbVN0YXRlRGVib3VuY2VUaW1lKSxcblx0XHRtYXAoKCkgPT4gbmV3IERhZmZDYXJ0SXRlbVN0YXRlUmVzZXQoKSlcbiAgKVxuXG4gIEBFZmZlY3QoKVxuICBkZWxldGUkID0gdGhpcy5hY3Rpb25zJC5waXBlKFxuICAgIG9mVHlwZShEYWZmQ2FydEl0ZW1BY3Rpb25UeXBlcy5DYXJ0SXRlbURlbGV0ZUFjdGlvbiksXG4gICAgbWVyZ2VNYXAoKGFjdGlvbjogRGFmZkNhcnRJdGVtRGVsZXRlPFQ+KSA9PlxuICAgICAgdGhpcy5kcml2ZXIuZGVsZXRlKHRoaXMuc3RvcmFnZS5nZXRDYXJ0SWQoKSwgYWN0aW9uLml0ZW1JZCkucGlwZShcbiAgICAgICAgbWFwKChyZXNwOiBWKSA9PiBuZXcgRGFmZkNhcnRJdGVtRGVsZXRlU3VjY2VzcyhyZXNwKSksXG4gICAgICAgIGNhdGNoRXJyb3IoZXJyb3IgPT4gb2YobmV3IERhZmZDYXJ0SXRlbURlbGV0ZUZhaWx1cmUodGhpcy5lcnJvck1hdGNoZXIoZXJyb3IpKSkpXG4gICAgICApXG4gICAgKVxuICApXG59XG4iXX0=