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
export class DaffCartEffects {
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
        this.create$ = this.actions$.pipe(ofType(DaffCartActionTypes.CartCreateAction), switchMap((/**
         * @param {?} action
         * @return {?}
         */
        (action) => this.driver.create().pipe(map((/**
         * @param {?} resp
         * @return {?}
         */
        (resp) => new DaffCartCreateSuccess(resp))), catchError((/**
         * @param {?} error
         * @return {?}
         */
        error => of(new DaffCartCreateFailure(this.errorMatcher(error)))))))));
        this.storeId$ = this.actions$.pipe(ofType(DaffCartActionTypes.CartCreateSuccessAction, DaffCartActionTypes.ResolveCartSuccessAction), switchMap((/**
         * @param {?} action
         * @return {?}
         */
        (action) => of(null).pipe(tap((/**
         * @return {?}
         */
        () => {
            this.storage.setCartId(String(action.payload.id));
        })), switchMapTo(EMPTY), catchError((/**
         * @param {?} error
         * @return {?}
         */
        error => of(new DaffCartStorageFailure(this.errorMatcher(error)))))))));
        this.get$ = this.actions$.pipe(ofType(DaffCartActionTypes.CartLoadAction), switchMap((/**
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
        cartId => this.driver.get(cartId))), map((/**
         * @param {?} resp
         * @return {?}
         */
        (resp) => new DaffCartLoadSuccess(resp))), catchError((/**
         * @param {?} error
         * @return {?}
         */
        error => of(error instanceof DaffStorageServiceError
            ? new DaffCartStorageFailure(this.errorMatcher(error))
            : new DaffCartLoadFailure(this.errorMatcher(error)))))))));
        this.addToCart$ = this.actions$.pipe(ofType(DaffCartActionTypes.AddToCartAction), switchMap((/**
         * @param {?} action
         * @return {?}
         */
        (action) => this.driver.addToCart(action.payload.productId, action.payload.qty).pipe(map((/**
         * @param {?} resp
         * @return {?}
         */
        (resp) => new DaffAddToCartSuccess(resp))), catchError((/**
         * @param {?} error
         * @return {?}
         */
        error => of(new DaffAddToCartFailure(this.errorMatcher(error)))))))));
        this.clear$ = this.actions$.pipe(ofType(DaffCartActionTypes.CartClearAction), switchMap((/**
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
        cartId => this.driver.clear(cartId))), map((/**
         * @param {?} resp
         * @return {?}
         */
        (resp) => new DaffCartClearSuccess(resp))), catchError((/**
         * @param {?} error
         * @return {?}
         */
        error => of(error instanceof DaffStorageServiceError
            ? new DaffCartStorageFailure(this.errorMatcher(error))
            : new DaffCartClearFailure(this.errorMatcher(error)))))))));
    }
}
DaffCartEffects.decorators = [
    { type: Injectable }
];
/** @nocollapse */
DaffCartEffects.ctorParameters = () => [
    { type: Actions },
    { type: Function, decorators: [{ type: Inject, args: [DAFF_CART_ERROR_MATCHER,] }] },
    { type: undefined, decorators: [{ type: Inject, args: [DaffCartDriver,] }] },
    { type: DaffCartStorageService }
];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FydC5lZmZlY3RzLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRhZmZvZGlsL2NhcnQvc3RhdGUvIiwic291cmNlcyI6WyJlZmZlY3RzL2NhcnQuZWZmZWN0cy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ25ELE9BQU8sRUFBRSxTQUFTLEVBQUUsR0FBRyxFQUFFLFVBQVUsRUFBRSxXQUFXLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDOUUsT0FBTyxFQUFFLEVBQUUsRUFBRSxLQUFLLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDakMsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRXhELE9BQU8sRUFDTCx1QkFBdUIsRUFDeEIsTUFBTSxnQkFBZ0IsQ0FBQTtBQUN2QixPQUFPLEVBQVksc0JBQXNCLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUMzRixPQUFPLEVBQUUsY0FBYyxFQUE0QixNQUFNLHVCQUF1QixDQUFDO0FBRWpGLE9BQU8sRUFDTCxtQkFBbUIsRUFFbkIsbUJBQW1CLEVBQ25CLG1CQUFtQixFQUNuQixvQkFBb0IsRUFDcEIsb0JBQW9CLEVBR3BCLG9CQUFvQixFQUNwQixvQkFBb0IsRUFFcEIscUJBQXFCLEVBQ3JCLHFCQUFxQixFQUNyQixzQkFBc0IsRUFDdkIsTUFBTSx1QkFBdUIsQ0FBQzs7OztBQUcvQixNQUFNLE9BQU8sZUFBZTs7Ozs7OztJQUMxQixZQUNVLFFBQWlCLEVBQ2dCLFlBQXNCLEVBQy9CLE1BQW1DLEVBQzNELE9BQStCO1FBSC9CLGFBQVEsR0FBUixRQUFRLENBQVM7UUFDZ0IsaUJBQVksR0FBWixZQUFZLENBQVU7UUFDL0IsV0FBTSxHQUFOLE1BQU0sQ0FBNkI7UUFDM0QsWUFBTyxHQUFQLE9BQU8sQ0FBd0I7UUFJekMsWUFB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QUU7O21EQVNSO0FBR0Q7SUFEQyxNQUFNLEVBQUU7OytDQVlSOzs7SUExREQsa0NBT0M7O0lBRUQsbUNBVUM7O0lBRUQsK0JBWUM7O0lBRUQscUNBU0M7O0lBRUQsaUNBWUM7Ozs7O0lBaEVDLG1DQUF5Qjs7Ozs7SUFDekIsdUNBQStEOzs7OztJQUMvRCxpQ0FBbUU7Ozs7O0lBQ25FLGtDQUF1QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUsIEluamVjdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgc3dpdGNoTWFwLCBtYXAsIGNhdGNoRXJyb3IsIHN3aXRjaE1hcFRvLCB0YXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBvZiwgRU1QVFkgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IEFjdGlvbnMsIEVmZmVjdCwgb2ZUeXBlIH0gZnJvbSAnQG5ncngvZWZmZWN0cyc7XG5cbmltcG9ydCB7XG4gIERhZmZTdG9yYWdlU2VydmljZUVycm9yXG59IGZyb20gJ0BkYWZmb2RpbC9jb3JlJ1xuaW1wb3J0IHsgRGFmZkNhcnQsIERhZmZDYXJ0U3RvcmFnZVNlcnZpY2UsIERBRkZfQ0FSVF9FUlJPUl9NQVRDSEVSIH0gZnJvbSAnQGRhZmZvZGlsL2NhcnQnO1xuaW1wb3J0IHsgRGFmZkNhcnREcml2ZXIsIERhZmZDYXJ0U2VydmljZUludGVyZmFjZSB9IGZyb20gJ0BkYWZmb2RpbC9jYXJ0L2RyaXZlcic7XG5cbmltcG9ydCB7XG4gIERhZmZDYXJ0QWN0aW9uVHlwZXMsXG4gIERhZmZDYXJ0TG9hZCxcbiAgRGFmZkNhcnRMb2FkU3VjY2VzcyxcbiAgRGFmZkNhcnRMb2FkRmFpbHVyZSxcbiAgRGFmZkFkZFRvQ2FydFN1Y2Nlc3MsXG4gIERhZmZBZGRUb0NhcnRGYWlsdXJlLFxuICBEYWZmQWRkVG9DYXJ0LFxuICBEYWZmQ2FydENsZWFyLFxuICBEYWZmQ2FydENsZWFyU3VjY2VzcyxcbiAgRGFmZkNhcnRDbGVhckZhaWx1cmUsXG4gIERhZmZDYXJ0Q3JlYXRlLFxuICBEYWZmQ2FydENyZWF0ZVN1Y2Nlc3MsXG4gIERhZmZDYXJ0Q3JlYXRlRmFpbHVyZSxcbiAgRGFmZkNhcnRTdG9yYWdlRmFpbHVyZVxufSBmcm9tICcuLi9hY3Rpb25zL3B1YmxpY19hcGknO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgRGFmZkNhcnRFZmZlY3RzPFQgZXh0ZW5kcyBEYWZmQ2FydD4ge1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGFjdGlvbnMkOiBBY3Rpb25zLFxuICAgIEBJbmplY3QoREFGRl9DQVJUX0VSUk9SX01BVENIRVIpIHByaXZhdGUgZXJyb3JNYXRjaGVyOiBGdW5jdGlvbixcbiAgICBASW5qZWN0KERhZmZDYXJ0RHJpdmVyKSBwcml2YXRlIGRyaXZlcjogRGFmZkNhcnRTZXJ2aWNlSW50ZXJmYWNlPFQ+LFxuICAgIHByaXZhdGUgc3RvcmFnZTogRGFmZkNhcnRTdG9yYWdlU2VydmljZSxcbiAgKSB7fVxuXG4gIEBFZmZlY3QoKVxuICBjcmVhdGUkID0gdGhpcy5hY3Rpb25zJC5waXBlKFxuICAgIG9mVHlwZShEYWZmQ2FydEFjdGlvblR5cGVzLkNhcnRDcmVhdGVBY3Rpb24pLFxuICAgIHN3aXRjaE1hcCgoYWN0aW9uOiBEYWZmQ2FydENyZWF0ZSkgPT4gdGhpcy5kcml2ZXIuY3JlYXRlKCkucGlwZShcbiAgICAgIG1hcCgocmVzcDoge2lkOiBUWydpZCddfSkgPT4gbmV3IERhZmZDYXJ0Q3JlYXRlU3VjY2VzcyhyZXNwKSksXG4gICAgICBjYXRjaEVycm9yKGVycm9yID0+IG9mKG5ldyBEYWZmQ2FydENyZWF0ZUZhaWx1cmUodGhpcy5lcnJvck1hdGNoZXIoZXJyb3IpKSkpXG4gICAgKSlcbiAgKVxuXG4gIEBFZmZlY3QoKVxuICBzdG9yZUlkJCA9IHRoaXMuYWN0aW9ucyQucGlwZShcbiAgICBvZlR5cGUoRGFmZkNhcnRBY3Rpb25UeXBlcy5DYXJ0Q3JlYXRlU3VjY2Vzc0FjdGlvbiwgRGFmZkNhcnRBY3Rpb25UeXBlcy5SZXNvbHZlQ2FydFN1Y2Nlc3NBY3Rpb24pLFxuICAgIHN3aXRjaE1hcCgoYWN0aW9uOiBEYWZmQ2FydENyZWF0ZVN1Y2Nlc3M8VD4pID0+IG9mKG51bGwpLnBpcGUoXG4gICAgICB0YXAoKCkgPT4ge1xuICAgICAgICB0aGlzLnN0b3JhZ2Uuc2V0Q2FydElkKFN0cmluZyhhY3Rpb24ucGF5bG9hZC5pZCkpXG4gICAgICB9KSxcbiAgICAgIHN3aXRjaE1hcFRvKEVNUFRZKSxcbiAgICAgIGNhdGNoRXJyb3IoZXJyb3IgPT4gb2YobmV3IERhZmZDYXJ0U3RvcmFnZUZhaWx1cmUodGhpcy5lcnJvck1hdGNoZXIoZXJyb3IpKSkpLFxuICAgICkpLFxuICApXG5cbiAgQEVmZmVjdCgpXG4gIGdldCQgPSB0aGlzLmFjdGlvbnMkLnBpcGUoXG4gICAgb2ZUeXBlKERhZmZDYXJ0QWN0aW9uVHlwZXMuQ2FydExvYWRBY3Rpb24pLFxuICAgIHN3aXRjaE1hcCgoYWN0aW9uOiBEYWZmQ2FydExvYWQpID0+IG9mKG51bGwpLnBpcGUoXG4gICAgICBtYXAoKCkgPT4gdGhpcy5zdG9yYWdlLmdldENhcnRJZCgpKSxcbiAgICAgIHN3aXRjaE1hcChjYXJ0SWQgPT4gdGhpcy5kcml2ZXIuZ2V0KGNhcnRJZCkpLFxuICAgICAgbWFwKChyZXNwOiBUKSA9PiBuZXcgRGFmZkNhcnRMb2FkU3VjY2VzcyhyZXNwKSksXG4gICAgICBjYXRjaEVycm9yKGVycm9yID0+IG9mKGVycm9yIGluc3RhbmNlb2YgRGFmZlN0b3JhZ2VTZXJ2aWNlRXJyb3JcbiAgICAgICAgPyBuZXcgRGFmZkNhcnRTdG9yYWdlRmFpbHVyZSh0aGlzLmVycm9yTWF0Y2hlcihlcnJvcikpXG4gICAgICAgIDogbmV3IERhZmZDYXJ0TG9hZEZhaWx1cmUodGhpcy5lcnJvck1hdGNoZXIoZXJyb3IpKVxuICAgICAgKSksXG4gICAgKSksXG4gIClcblxuICBARWZmZWN0KClcbiAgYWRkVG9DYXJ0JCA9IHRoaXMuYWN0aW9ucyQucGlwZShcbiAgICBvZlR5cGUoRGFmZkNhcnRBY3Rpb25UeXBlcy5BZGRUb0NhcnRBY3Rpb24pLFxuICAgIHN3aXRjaE1hcCgoYWN0aW9uOiBEYWZmQWRkVG9DYXJ0KSA9PlxuICAgICAgdGhpcy5kcml2ZXIuYWRkVG9DYXJ0KGFjdGlvbi5wYXlsb2FkLnByb2R1Y3RJZCwgYWN0aW9uLnBheWxvYWQucXR5KS5waXBlKFxuICAgICAgICBtYXAoKHJlc3A6IFQpID0+IG5ldyBEYWZmQWRkVG9DYXJ0U3VjY2VzcyhyZXNwKSksXG4gICAgICAgIGNhdGNoRXJyb3IoZXJyb3IgPT4gb2YobmV3IERhZmZBZGRUb0NhcnRGYWlsdXJlKHRoaXMuZXJyb3JNYXRjaGVyKGVycm9yKSkpKVxuICAgICAgKVxuICAgIClcbiAgKVxuXG4gIEBFZmZlY3QoKVxuICBjbGVhciQgPSB0aGlzLmFjdGlvbnMkLnBpcGUoXG4gICAgb2ZUeXBlKERhZmZDYXJ0QWN0aW9uVHlwZXMuQ2FydENsZWFyQWN0aW9uKSxcbiAgICBzd2l0Y2hNYXAoKGFjdGlvbjogRGFmZkNhcnRDbGVhcikgPT4gb2YobnVsbCkucGlwZShcbiAgICAgIG1hcCgoKSA9PiB0aGlzLnN0b3JhZ2UuZ2V0Q2FydElkKCkpLFxuICAgICAgc3dpdGNoTWFwKGNhcnRJZCA9PiB0aGlzLmRyaXZlci5jbGVhcihjYXJ0SWQpKSxcbiAgICAgIG1hcCgocmVzcDogVCkgPT4gbmV3IERhZmZDYXJ0Q2xlYXJTdWNjZXNzKHJlc3ApKSxcbiAgICAgIGNhdGNoRXJyb3IoZXJyb3IgPT4gb2YoZXJyb3IgaW5zdGFuY2VvZiBEYWZmU3RvcmFnZVNlcnZpY2VFcnJvclxuICAgICAgICA/IG5ldyBEYWZmQ2FydFN0b3JhZ2VGYWlsdXJlKHRoaXMuZXJyb3JNYXRjaGVyKGVycm9yKSlcbiAgICAgICAgOiBuZXcgRGFmZkNhcnRDbGVhckZhaWx1cmUodGhpcy5lcnJvck1hdGNoZXIoZXJyb3IpKVxuICAgICAgKSksXG4gICAgKSksXG4gIClcbn1cbiJdfQ==