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
export class DaffCartCouponEffects {
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
        this.apply$ = this.actions$.pipe(ofType(DaffCartCouponActionTypes.CartCouponApplyAction), switchMap((/**
         * @param {?} action
         * @return {?}
         */
        (action) => of(null).pipe(map((/**
         * @return {?}
         */
        () => this.storage.getCartId())), switchMap((/**
         * @param {?} cartId
         * @return {?}
         */
        cartId => this.driver.apply(cartId, action.payload))), map((/**
         * @param {?} resp
         * @return {?}
         */
        resp => new DaffCartCouponApplySuccess(resp))), catchError((/**
         * @param {?} error
         * @return {?}
         */
        error => of(error instanceof DaffStorageServiceError
            ? new DaffCartStorageFailure(this.errorMatcher(error))
            : new DaffCartCouponApplyFailure(this.errorMatcher(error)))))))));
        this.list$ = this.actions$.pipe(ofType(DaffCartCouponActionTypes.CartCouponListAction), switchMap((/**
         * @param {?} action
         * @return {?}
         */
        (action) => of(null).pipe(map((/**
         * @return {?}
         */
        () => this.storage.getCartId())), switchMap((/**
         * @param {?} cartId
         * @return {?}
         */
        cartId => this.driver.list(cartId))), map((/**
         * @param {?} resp
         * @return {?}
         */
        resp => new DaffCartCouponListSuccess(resp))), catchError((/**
         * @param {?} error
         * @return {?}
         */
        error => of(error instanceof DaffStorageServiceError
            ? new DaffCartStorageFailure(this.errorMatcher(error))
            : new DaffCartCouponListFailure(this.errorMatcher(error)))))))));
        this.remove$ = this.actions$.pipe(ofType(DaffCartCouponActionTypes.CartCouponRemoveAction), switchMap((/**
         * @param {?} action
         * @return {?}
         */
        (action) => of(null).pipe(map((/**
         * @return {?}
         */
        () => this.storage.getCartId())), switchMap((/**
         * @param {?} cartId
         * @return {?}
         */
        cartId => this.driver.remove(cartId, action.payload))), map((/**
         * @param {?} resp
         * @return {?}
         */
        resp => new DaffCartCouponRemoveSuccess(resp))), catchError((/**
         * @param {?} error
         * @return {?}
         */
        error => of(error instanceof DaffStorageServiceError
            ? new DaffCartStorageFailure(this.errorMatcher(error))
            : new DaffCartCouponRemoveFailure(this.errorMatcher(error)))))))));
        this.removeAll$ = this.actions$.pipe(ofType(DaffCartCouponActionTypes.CartCouponRemoveAllAction), switchMap((/**
         * @param {?} action
         * @return {?}
         */
        (action) => of(null).pipe(map((/**
         * @return {?}
         */
        () => this.storage.getCartId())), switchMap((/**
         * @param {?} cartId
         * @return {?}
         */
        cartId => this.driver.removeAll(cartId))), map((/**
         * @param {?} resp
         * @return {?}
         */
        resp => new DaffCartCouponRemoveAllSuccess(resp))), catchError((/**
         * @param {?} error
         * @return {?}
         */
        error => of(error instanceof DaffStorageServiceError
            ? new DaffCartStorageFailure(this.errorMatcher(error))
            : new DaffCartCouponRemoveAllFailure(this.errorMatcher(error)))))))));
    }
}
DaffCartCouponEffects.decorators = [
    { type: Injectable }
];
/** @nocollapse */
DaffCartCouponEffects.ctorParameters = () => [
    { type: Actions },
    { type: Function, decorators: [{ type: Inject, args: [DAFF_CART_ERROR_MATCHER,] }] },
    { type: undefined, decorators: [{ type: Inject, args: [DaffCartCouponDriver,] }] },
    { type: DaffCartStorageService }
];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FydC1jb3Vwb24uZWZmZWN0cy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkYWZmb2RpbC9jYXJ0L3N0YXRlLyIsInNvdXJjZXMiOlsiZWZmZWN0cy9jYXJ0LWNvdXBvbi5lZmZlY3RzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDbkQsT0FBTyxFQUFFLFNBQVMsRUFBRSxHQUFHLEVBQUUsVUFBVSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDNUQsT0FBTyxFQUFFLEVBQUUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUMxQixPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFeEQsT0FBTyxFQUNMLHVCQUF1QixFQUN4QixNQUFNLGdCQUFnQixDQUFBO0FBQ3ZCLE9BQU8sRUFBNEIsc0JBQXNCLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUMzRyxPQUFPLEVBQUUsb0JBQW9CLEVBQWtDLE1BQU0sdUJBQXVCLENBQUM7QUFFN0YsT0FBTyxFQUNMLHlCQUF5QixFQUV6Qix5QkFBeUIsRUFDekIseUJBQXlCLEVBQ3pCLDJCQUEyQixFQUMzQiwyQkFBMkIsRUFHM0IsOEJBQThCLEVBQzlCLDhCQUE4QixFQUU5QiwwQkFBMEIsRUFDMUIsMEJBQTBCLEVBQzFCLHNCQUFzQixFQUN2QixNQUFNLHVCQUF1QixDQUFDOzs7O0FBRy9CLE1BQU0sT0FBTyxxQkFBcUI7Ozs7Ozs7SUFJaEMsWUFDVSxRQUFpQixFQUNnQixZQUFzQixFQUN6QixNQUE0QyxFQUMxRSxPQUErQjtRQUgvQixhQUFRLEdBQVIsUUFBUSxDQUFTO1FBQ2dCLGlCQUFZLEdBQVosWUFBWSxDQUFVO1FBQ3pCLFdBQU0sR0FBTixNQUFNLENBQXNDO1FBQzFFLFlBQU8sR0FBUCxPQUFPLENBQXdCO1FBSXpDLFdBQU0sR0FBRyxJQUFJ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O0lBRUQsc0NBWUM7O0lBRUQsd0NBWUM7O0lBRUQsMkNBWUM7Ozs7O0lBNURDLHlDQUF5Qjs7Ozs7SUFDekIsNkNBQStEOzs7OztJQUMvRCx1Q0FBa0Y7Ozs7O0lBQ2xGLHdDQUF1QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUsIEluamVjdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgc3dpdGNoTWFwLCBtYXAsIGNhdGNoRXJyb3IgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBvZiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgQWN0aW9ucywgRWZmZWN0LCBvZlR5cGUgfSBmcm9tICdAbmdyeC9lZmZlY3RzJztcblxuaW1wb3J0IHtcbiAgRGFmZlN0b3JhZ2VTZXJ2aWNlRXJyb3Jcbn0gZnJvbSAnQGRhZmZvZGlsL2NvcmUnXG5pbXBvcnQgeyBEYWZmQ2FydCwgRGFmZkNhcnRDb3Vwb24sIERhZmZDYXJ0U3RvcmFnZVNlcnZpY2UsIERBRkZfQ0FSVF9FUlJPUl9NQVRDSEVSIH0gZnJvbSAnQGRhZmZvZGlsL2NhcnQnO1xuaW1wb3J0IHsgRGFmZkNhcnRDb3Vwb25Ecml2ZXIsIERhZmZDYXJ0Q291cG9uU2VydmljZUludGVyZmFjZSB9IGZyb20gJ0BkYWZmb2RpbC9jYXJ0L2RyaXZlcic7XG5cbmltcG9ydCB7XG4gIERhZmZDYXJ0Q291cG9uQWN0aW9uVHlwZXMsXG4gIERhZmZDYXJ0Q291cG9uTGlzdCxcbiAgRGFmZkNhcnRDb3Vwb25MaXN0U3VjY2VzcyxcbiAgRGFmZkNhcnRDb3Vwb25MaXN0RmFpbHVyZSxcbiAgRGFmZkNhcnRDb3Vwb25SZW1vdmVTdWNjZXNzLFxuICBEYWZmQ2FydENvdXBvblJlbW92ZUZhaWx1cmUsXG4gIERhZmZDYXJ0Q291cG9uUmVtb3ZlLFxuICBEYWZmQ2FydENvdXBvblJlbW92ZUFsbCxcbiAgRGFmZkNhcnRDb3Vwb25SZW1vdmVBbGxTdWNjZXNzLFxuICBEYWZmQ2FydENvdXBvblJlbW92ZUFsbEZhaWx1cmUsXG4gIERhZmZDYXJ0Q291cG9uQXBwbHksXG4gIERhZmZDYXJ0Q291cG9uQXBwbHlTdWNjZXNzLFxuICBEYWZmQ2FydENvdXBvbkFwcGx5RmFpbHVyZSxcbiAgRGFmZkNhcnRTdG9yYWdlRmFpbHVyZVxufSBmcm9tICcuLi9hY3Rpb25zL3B1YmxpY19hcGknO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgRGFmZkNhcnRDb3Vwb25FZmZlY3RzPFxuICBUIGV4dGVuZHMgRGFmZkNhcnQgPSBEYWZmQ2FydCxcbiAgViBleHRlbmRzIERhZmZDYXJ0Q291cG9uID0gRGFmZkNhcnRDb3Vwb25cbj4ge1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGFjdGlvbnMkOiBBY3Rpb25zLFxuICAgIEBJbmplY3QoREFGRl9DQVJUX0VSUk9SX01BVENIRVIpIHByaXZhdGUgZXJyb3JNYXRjaGVyOiBGdW5jdGlvbixcbiAgICBASW5qZWN0KERhZmZDYXJ0Q291cG9uRHJpdmVyKSBwcml2YXRlIGRyaXZlcjogRGFmZkNhcnRDb3Vwb25TZXJ2aWNlSW50ZXJmYWNlPFQsIFY+LFxuICAgIHByaXZhdGUgc3RvcmFnZTogRGFmZkNhcnRTdG9yYWdlU2VydmljZSxcbiAgKSB7fVxuXG4gIEBFZmZlY3QoKVxuICBhcHBseSQgPSB0aGlzLmFjdGlvbnMkLnBpcGUoXG4gICAgb2ZUeXBlKERhZmZDYXJ0Q291cG9uQWN0aW9uVHlwZXMuQ2FydENvdXBvbkFwcGx5QWN0aW9uKSxcbiAgICBzd2l0Y2hNYXAoKGFjdGlvbjogRGFmZkNhcnRDb3Vwb25BcHBseTxWPikgPT4gb2YobnVsbCkucGlwZShcbiAgICAgIG1hcCgoKSA9PiB0aGlzLnN0b3JhZ2UuZ2V0Q2FydElkKCkpLFxuICAgICAgc3dpdGNoTWFwKGNhcnRJZCA9PiB0aGlzLmRyaXZlci5hcHBseShjYXJ0SWQsIGFjdGlvbi5wYXlsb2FkKSksXG4gICAgICBtYXAocmVzcCA9PiBuZXcgRGFmZkNhcnRDb3Vwb25BcHBseVN1Y2Nlc3MocmVzcCkpLFxuICAgICAgY2F0Y2hFcnJvcihlcnJvciA9PiBvZihlcnJvciBpbnN0YW5jZW9mIERhZmZTdG9yYWdlU2VydmljZUVycm9yXG4gICAgICAgID8gbmV3IERhZmZDYXJ0U3RvcmFnZUZhaWx1cmUodGhpcy5lcnJvck1hdGNoZXIoZXJyb3IpKVxuICAgICAgICA6IG5ldyBEYWZmQ2FydENvdXBvbkFwcGx5RmFpbHVyZSh0aGlzLmVycm9yTWF0Y2hlcihlcnJvcikpXG4gICAgICApKSxcbiAgICApKSxcbiAgKVxuXG4gIEBFZmZlY3QoKVxuICBsaXN0JCA9IHRoaXMuYWN0aW9ucyQucGlwZShcbiAgICBvZlR5cGUoRGFmZkNhcnRDb3Vwb25BY3Rpb25UeXBlcy5DYXJ0Q291cG9uTGlzdEFjdGlvbiksXG4gICAgc3dpdGNoTWFwKChhY3Rpb246IERhZmZDYXJ0Q291cG9uTGlzdCkgPT4gb2YobnVsbCkucGlwZShcbiAgICAgIG1hcCgoKSA9PiB0aGlzLnN0b3JhZ2UuZ2V0Q2FydElkKCkpLFxuICAgICAgc3dpdGNoTWFwKGNhcnRJZCA9PiB0aGlzLmRyaXZlci5saXN0KGNhcnRJZCkpLFxuICAgICAgbWFwKHJlc3AgPT4gbmV3IERhZmZDYXJ0Q291cG9uTGlzdFN1Y2Nlc3M8Vj4ocmVzcCkpLFxuICAgICAgY2F0Y2hFcnJvcihlcnJvciA9PiBvZihlcnJvciBpbnN0YW5jZW9mIERhZmZTdG9yYWdlU2VydmljZUVycm9yXG4gICAgICAgID8gbmV3IERhZmZDYXJ0U3RvcmFnZUZhaWx1cmUodGhpcy5lcnJvck1hdGNoZXIoZXJyb3IpKVxuICAgICAgICA6IG5ldyBEYWZmQ2FydENvdXBvbkxpc3RGYWlsdXJlKHRoaXMuZXJyb3JNYXRjaGVyKGVycm9yKSlcbiAgICAgICkpLFxuICAgICkpLFxuICApXG5cbiAgQEVmZmVjdCgpXG4gIHJlbW92ZSQgPSB0aGlzLmFjdGlvbnMkLnBpcGUoXG4gICAgb2ZUeXBlKERhZmZDYXJ0Q291cG9uQWN0aW9uVHlwZXMuQ2FydENvdXBvblJlbW92ZUFjdGlvbiksXG4gICAgc3dpdGNoTWFwKChhY3Rpb246IERhZmZDYXJ0Q291cG9uUmVtb3ZlPFY+KSA9PiBvZihudWxsKS5waXBlKFxuICAgICAgbWFwKCgpID0+IHRoaXMuc3RvcmFnZS5nZXRDYXJ0SWQoKSksXG4gICAgICBzd2l0Y2hNYXAoY2FydElkID0+IHRoaXMuZHJpdmVyLnJlbW92ZShjYXJ0SWQsIGFjdGlvbi5wYXlsb2FkKSksXG4gICAgICBtYXAocmVzcCA9PiBuZXcgRGFmZkNhcnRDb3Vwb25SZW1vdmVTdWNjZXNzKHJlc3ApKSxcbiAgICAgIGNhdGNoRXJyb3IoZXJyb3IgPT4gb2YoZXJyb3IgaW5zdGFuY2VvZiBEYWZmU3RvcmFnZVNlcnZpY2VFcnJvclxuICAgICAgICA/IG5ldyBEYWZmQ2FydFN0b3JhZ2VGYWlsdXJlKHRoaXMuZXJyb3JNYXRjaGVyKGVycm9yKSlcbiAgICAgICAgOiBuZXcgRGFmZkNhcnRDb3Vwb25SZW1vdmVGYWlsdXJlKHRoaXMuZXJyb3JNYXRjaGVyKGVycm9yKSlcbiAgICAgICkpLFxuICAgICkpLFxuICApXG5cbiAgQEVmZmVjdCgpXG4gIHJlbW92ZUFsbCQgPSB0aGlzLmFjdGlvbnMkLnBpcGUoXG4gICAgb2ZUeXBlKERhZmZDYXJ0Q291cG9uQWN0aW9uVHlwZXMuQ2FydENvdXBvblJlbW92ZUFsbEFjdGlvbiksXG4gICAgc3dpdGNoTWFwKChhY3Rpb246IERhZmZDYXJ0Q291cG9uUmVtb3ZlQWxsKSA9PiBvZihudWxsKS5waXBlKFxuICAgICAgbWFwKCgpID0+IHRoaXMuc3RvcmFnZS5nZXRDYXJ0SWQoKSksXG4gICAgICBzd2l0Y2hNYXAoY2FydElkID0+IHRoaXMuZHJpdmVyLnJlbW92ZUFsbChjYXJ0SWQpKSxcbiAgICAgIG1hcChyZXNwID0+IG5ldyBEYWZmQ2FydENvdXBvblJlbW92ZUFsbFN1Y2Nlc3MocmVzcCkpLFxuICAgICAgY2F0Y2hFcnJvcihlcnJvciA9PiBvZihlcnJvciBpbnN0YW5jZW9mIERhZmZTdG9yYWdlU2VydmljZUVycm9yXG4gICAgICAgID8gbmV3IERhZmZDYXJ0U3RvcmFnZUZhaWx1cmUodGhpcy5lcnJvck1hdGNoZXIoZXJyb3IpKVxuICAgICAgICA6IG5ldyBEYWZmQ2FydENvdXBvblJlbW92ZUFsbEZhaWx1cmUodGhpcy5lcnJvck1hdGNoZXIoZXJyb3IpKVxuICAgICAgKSksXG4gICAgKSksXG4gIClcbn1cbiJdfQ==