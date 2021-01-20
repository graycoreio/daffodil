/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable, Inject } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { switchMap, catchError, map } from 'rxjs/operators';
import { DaffStorageServiceError, DaffServerSideStorageError, } from '@daffodil/core';
import { DaffCartStorageService, DAFF_CART_ERROR_MATCHER, } from '@daffodil/cart';
import { DaffCartDriver, DaffCartNotFoundError, } from '@daffodil/cart/driver';
import { DaffCartActionTypes, DaffResolveCartSuccess, DaffResolveCartFailure, DaffResolveCartServerSide, DaffResolveCart, } from '../actions/public_api';
/**
 * An effect for resolving a guest cart for a customer.
 * It will:
 * 1. Check storage for an id, and retrieve the cart if it exists.
 * 2. If a cart doesn't exist, it will attempt to create a new cart exactly once.
 * 3. If the cart resolution fails, it will bailout.
 * @template T
 */
export class DaffCartResolverEffects {
    /**
     * @param {?} actions$
     * @param {?} errorMatcher
     * @param {?} cartStorage
     * @param {?} driver
     */
    constructor(actions$, errorMatcher, cartStorage, driver) {
        this.actions$ = actions$;
        this.errorMatcher = errorMatcher;
        this.cartStorage = cartStorage;
        this.driver = driver;
        this.onResolveCart = (/**
         * @return {?}
         */
        () => this.actions$.pipe(ofType(DaffCartActionTypes.ResolveCartAction), switchMap((/**
         * @return {?}
         */
        () => of(null).pipe(map((/**
         * @return {?}
         */
        () => this.cartStorage.getCartId())), switchMap((/**
         * @param {?} cartId
         * @return {?}
         */
        cartId => cartId ? of({ id: cartId }) : this.driver.create())), switchMap((/**
         * @param {?} __0
         * @return {?}
         */
        ({ id }) => this.driver.get(id))), map((/**
         * @param {?} resp
         * @return {?}
         */
        resp => new DaffResolveCartSuccess(resp))), catchError((/**
         * @param {?} error
         * @return {?}
         */
        error => {
            switch (true) {
                case error instanceof DaffServerSideStorageError:
                    return of(new DaffResolveCartServerSide());
                case error instanceof DaffStorageServiceError:
                    error.message =
                        'Cart resolution failed while attempting to retrieve the cart ID from storage.';
                    return of(new DaffResolveCartFailure(this.errorMatcher(error)));
                case error instanceof DaffCartNotFoundError:
                    return this.driver.create().pipe(switchMap((/**
                     * @param {?} __0
                     * @return {?}
                     */
                    ({ id }) => this.driver.get(id))), map((/**
                     * @param {?} resp
                     * @return {?}
                     */
                    resp => new DaffResolveCartSuccess(resp))), catchError((/**
                     * @param {?} innerError
                     * @return {?}
                     */
                    (innerError) => {
                        innerError.message =
                            'Cart resolution failed after attempting to generate and load a new cart.';
                        return of(new DaffResolveCartFailure(this.errorMatcher(innerError)));
                    })));
                default:
                    error.message = 'Cart resolution has failed.';
                    return of(new DaffResolveCartFailure(this.errorMatcher(error)));
            }
        })))))));
    }
    /**
     * @return {?}
     */
    ngrxOnInitEffects() {
        return new DaffResolveCart();
    }
}
DaffCartResolverEffects.decorators = [
    { type: Injectable }
];
/** @nocollapse */
DaffCartResolverEffects.ctorParameters = () => [
    { type: Actions },
    { type: Function, decorators: [{ type: Inject, args: [DAFF_CART_ERROR_MATCHER,] }] },
    { type: DaffCartStorageService },
    { type: undefined, decorators: [{ type: Inject, args: [DaffCartDriver,] }] }
];
tslib_1.__decorate([
    Effect(),
    tslib_1.__metadata("design:type", Object)
], DaffCartResolverEffects.prototype, "onResolveCart", void 0);
if (false) {
    /** @type {?} */
    DaffCartResolverEffects.prototype.onResolveCart;
    /**
     * @type {?}
     * @private
     */
    DaffCartResolverEffects.prototype.actions$;
    /**
     * @type {?}
     * @private
     */
    DaffCartResolverEffects.prototype.errorMatcher;
    /**
     * @type {?}
     * @private
     */
    DaffCartResolverEffects.prototype.cartStorage;
    /**
     * @type {?}
     * @private
     */
    DaffCartResolverEffects.prototype.driver;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FydC1yZXNvbHZlci5lZmZlY3RzLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRhZmZvZGlsL2NhcnQvc3RhdGUvIiwic291cmNlcyI6WyJlZmZlY3RzL2NhcnQtcmVzb2x2ZXIuZWZmZWN0cy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ25ELE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBaUIsTUFBTSxlQUFlLENBQUM7QUFFdkUsT0FBTyxFQUFjLEVBQUUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUN0QyxPQUFPLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxHQUFHLEVBQVMsTUFBTSxnQkFBZ0IsQ0FBQztBQUVuRSxPQUFPLEVBQ04sdUJBQXVCLEVBQ3ZCLDBCQUEwQixHQUUxQixNQUFNLGdCQUFnQixDQUFDO0FBQ3hCLE9BQU8sRUFFTixzQkFBc0IsRUFDdEIsdUJBQXVCLEdBQ3ZCLE1BQU0sZ0JBQWdCLENBQUM7QUFDeEIsT0FBTyxFQUNOLGNBQWMsRUFFZCxxQkFBcUIsR0FDckIsTUFBTSx1QkFBdUIsQ0FBQztBQUUvQixPQUFPLEVBQ04sbUJBQW1CLEVBQ25CLHNCQUFzQixFQUN0QixzQkFBc0IsRUFDdEIseUJBQXlCLEVBQ3pCLGVBQWUsR0FDZixNQUFNLHVCQUF1QixDQUFDOzs7Ozs7Ozs7QUFVL0IsTUFBTSxPQUFPLHVCQUF1Qjs7Ozs7OztJQUVuQyxZQUNTLFFBQWlCLEVBQ2dCLFlBQXNCLEVBQ3ZELFdBQW1DLEVBQ1gsTUFBbUM7UUFIM0QsYUFBUSxHQUFSLFFBQVEsQ0FBUztRQUNnQixpQkFBWSxHQUFaLFlBQVksQ0FBVTtRQUN2RCxnQkFBVyxHQUFYLFdBQVcsQ0FBd0I7UUFDWCxXQUFNLEdBQU4sTUFBTSxDQUE2QjtRQVFwRSxrQkFBYTs7O1FBQUcsR0FBdUIsRUFBRSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUMzRCxNQUFNLENBQUMsbUJBQW1CLENBQUMsaUJBQWlCLENBQUMsRUFDN0MsU0FBUzs7O1FBQUMsR0FBRyxFQUFFLENBQ2QsRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FDWixHQUFHOzs7UUFBQyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLFNBQVMsRUFBRSxFQUFDLEVBQ3ZDLFNBQVM7Ozs7UUFBQyxNQUFNLENBQUMsRUFBRSxDQUNsQixNQUFNLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxNQUFNLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sRUFBRSxFQUNsRCxFQUNELFNBQVM7Ozs7UUFBQyxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxFQUFDLEVBQzFDLEdBQUc7Ozs7UUFBQyxJQUFJLENBQUMsRUFBRSxDQUFDLElBQUksc0JBQXNCLENBQUMsSUFBSSxDQUFDLEVBQUMsRUFDN0MsVUFBVTs7OztRQUFDLEtBQUssQ0FBQyxFQUFFO1lBQ2xCLFFBQVEsSUFBSSxFQUFFO2dCQUNiLEtBQUssS0FBSyxZQUFZLDBCQUEwQjtvQkFDL0MsT0FBTyxFQUFFLENBQUMsSUFBSSx5QkFBeUIsRUFBRSxDQUFDLENBQUM7Z0JBQzVDLEtBQUssS0FBSyxZQUFZLHVCQUF1QjtvQkFDNUMsS0FBSyxDQUFDLE9BQU87d0JBQ1osK0VBQStFLENBQUM7b0JBQ2pGLE9BQU8sRUFBRSxDQUFDLElBQUksc0JBQXNCLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQ2pFLEtBQUssS0FBSyxZQUFZLHFCQUFxQjtvQkFDMUMsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sRUFBRSxDQUFDLElBQUksQ0FDL0IsU0FBUzs7OztvQkFBQyxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxFQUFDLEVBQzFDLEdBQUc7Ozs7b0JBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxJQUFJLHNCQUFzQixDQUFDLElBQUksQ0FBQyxFQUFDLEVBQzdDLFVBQVU7Ozs7b0JBQUMsQ0FBQyxVQUFxQixFQUFFLEVBQUU7d0JBQ3BDLFVBQVUsQ0FBQyxPQUFPOzRCQUNqQiwwRUFBMEUsQ0FBQzt3QkFDNUUsT0FBTyxFQUFFLENBQ1IsSUFBSSxzQkFBc0IsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQ3pELENBQUM7b0JBQ0gsQ0FBQyxFQUFDLENBQ0YsQ0FBQztnQkFDSDtvQkFDQyxLQUFLLENBQUMsT0FBTyxHQUFHLDZCQUE2QixDQUFDO29CQUM5QyxPQUFPLEVBQUUsQ0FBQyxJQUFJLHNCQUFzQixDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO2FBQ2pFO1FBQ0YsQ0FBQyxFQUFDLENBQ0YsRUFDRCxDQUNELEVBQUM7SUE1Q0MsQ0FBQzs7OztJQUVKLGlCQUFpQjtRQUNoQixPQUFPLElBQUksZUFBZSxFQUFFLENBQUM7SUFDOUIsQ0FBQzs7O1lBWkQsVUFBVTs7OztZQXBDRixPQUFPO1lBeUN5QyxRQUFRLHVCQUE5RCxNQUFNLFNBQUMsdUJBQXVCO1lBN0JoQyxzQkFBc0I7NENBK0JwQixNQUFNLFNBQUMsY0FBYzs7QUFRdkI7SUFEQyxNQUFNLEVBQUU7OzhEQXNDUDs7O0lBdENGLGdEQXNDRTs7Ozs7SUFoREQsMkNBQXlCOzs7OztJQUN6QiwrQ0FBK0Q7Ozs7O0lBQy9ELDhDQUEyQzs7Ozs7SUFDM0MseUNBQW1FIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSwgSW5qZWN0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBY3Rpb25zLCBFZmZlY3QsIG9mVHlwZSwgT25Jbml0RWZmZWN0cyB9IGZyb20gJ0BuZ3J4L2VmZmVjdHMnO1xuaW1wb3J0IHsgQWN0aW9uIH0gZnJvbSAnQG5ncngvc3RvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgb2YgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IHN3aXRjaE1hcCwgY2F0Y2hFcnJvciwgbWFwLCBtYXBUbyB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuaW1wb3J0IHtcblx0RGFmZlN0b3JhZ2VTZXJ2aWNlRXJyb3IsXG5cdERhZmZTZXJ2ZXJTaWRlU3RvcmFnZUVycm9yLFxuXHREYWZmRXJyb3IsXG59IGZyb20gJ0BkYWZmb2RpbC9jb3JlJztcbmltcG9ydCB7XG5cdERhZmZDYXJ0LFxuXHREYWZmQ2FydFN0b3JhZ2VTZXJ2aWNlLFxuXHREQUZGX0NBUlRfRVJST1JfTUFUQ0hFUixcbn0gZnJvbSAnQGRhZmZvZGlsL2NhcnQnO1xuaW1wb3J0IHtcblx0RGFmZkNhcnREcml2ZXIsXG5cdERhZmZDYXJ0U2VydmljZUludGVyZmFjZSxcblx0RGFmZkNhcnROb3RGb3VuZEVycm9yLFxufSBmcm9tICdAZGFmZm9kaWwvY2FydC9kcml2ZXInO1xuXG5pbXBvcnQge1xuXHREYWZmQ2FydEFjdGlvblR5cGVzLFxuXHREYWZmUmVzb2x2ZUNhcnRTdWNjZXNzLFxuXHREYWZmUmVzb2x2ZUNhcnRGYWlsdXJlLFxuXHREYWZmUmVzb2x2ZUNhcnRTZXJ2ZXJTaWRlLFxuXHREYWZmUmVzb2x2ZUNhcnQsXG59IGZyb20gJy4uL2FjdGlvbnMvcHVibGljX2FwaSc7XG5cbi8qKlxuICogQW4gZWZmZWN0IGZvciByZXNvbHZpbmcgYSBndWVzdCBjYXJ0IGZvciBhIGN1c3RvbWVyLlxuICogSXQgd2lsbDpcbiAqIDEuIENoZWNrIHN0b3JhZ2UgZm9yIGFuIGlkLCBhbmQgcmV0cmlldmUgdGhlIGNhcnQgaWYgaXQgZXhpc3RzLlxuICogMi4gSWYgYSBjYXJ0IGRvZXNuJ3QgZXhpc3QsIGl0IHdpbGwgYXR0ZW1wdCB0byBjcmVhdGUgYSBuZXcgY2FydCBleGFjdGx5IG9uY2UuXG4gKiAzLiBJZiB0aGUgY2FydCByZXNvbHV0aW9uIGZhaWxzLCBpdCB3aWxsIGJhaWxvdXQuXG4gKi9cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBEYWZmQ2FydFJlc29sdmVyRWZmZWN0czxUIGV4dGVuZHMgRGFmZkNhcnQgPSBEYWZmQ2FydD5cblx0aW1wbGVtZW50cyBPbkluaXRFZmZlY3RzIHtcblx0Y29uc3RydWN0b3IoXG5cdFx0cHJpdmF0ZSBhY3Rpb25zJDogQWN0aW9ucyxcblx0XHRASW5qZWN0KERBRkZfQ0FSVF9FUlJPUl9NQVRDSEVSKSBwcml2YXRlIGVycm9yTWF0Y2hlcjogRnVuY3Rpb24sXG5cdFx0cHJpdmF0ZSBjYXJ0U3RvcmFnZTogRGFmZkNhcnRTdG9yYWdlU2VydmljZSxcblx0XHRASW5qZWN0KERhZmZDYXJ0RHJpdmVyKSBwcml2YXRlIGRyaXZlcjogRGFmZkNhcnRTZXJ2aWNlSW50ZXJmYWNlPFQ+LFxuXHQpIHt9XG5cblx0bmdyeE9uSW5pdEVmZmVjdHMoKTogQWN0aW9uIHtcblx0XHRyZXR1cm4gbmV3IERhZmZSZXNvbHZlQ2FydCgpO1xuXHR9XG5cblx0QEVmZmVjdCgpXG5cdG9uUmVzb2x2ZUNhcnQgPSAoKTogT2JzZXJ2YWJsZTxBY3Rpb24+ID0+IHRoaXMuYWN0aW9ucyQucGlwZShcblx0XHRvZlR5cGUoRGFmZkNhcnRBY3Rpb25UeXBlcy5SZXNvbHZlQ2FydEFjdGlvbiksXG5cdFx0c3dpdGNoTWFwKCgpID0+XG5cdFx0XHRvZihudWxsKS5waXBlKFxuXHRcdFx0XHRtYXAoKCkgPT4gdGhpcy5jYXJ0U3RvcmFnZS5nZXRDYXJ0SWQoKSksXG5cdFx0XHRcdHN3aXRjaE1hcChjYXJ0SWQgPT5cblx0XHRcdFx0XHRjYXJ0SWQgPyBvZih7IGlkOiBjYXJ0SWQgfSkgOiB0aGlzLmRyaXZlci5jcmVhdGUoKSxcblx0XHRcdFx0KSxcblx0XHRcdFx0c3dpdGNoTWFwKCh7IGlkIH0pID0+IHRoaXMuZHJpdmVyLmdldChpZCkpLFxuXHRcdFx0XHRtYXAocmVzcCA9PiBuZXcgRGFmZlJlc29sdmVDYXJ0U3VjY2VzcyhyZXNwKSksXG5cdFx0XHRcdGNhdGNoRXJyb3IoZXJyb3IgPT4ge1xuXHRcdFx0XHRcdHN3aXRjaCAodHJ1ZSkge1xuXHRcdFx0XHRcdFx0Y2FzZSBlcnJvciBpbnN0YW5jZW9mIERhZmZTZXJ2ZXJTaWRlU3RvcmFnZUVycm9yOlxuXHRcdFx0XHRcdFx0XHRyZXR1cm4gb2YobmV3IERhZmZSZXNvbHZlQ2FydFNlcnZlclNpZGUoKSk7XG5cdFx0XHRcdFx0XHRjYXNlIGVycm9yIGluc3RhbmNlb2YgRGFmZlN0b3JhZ2VTZXJ2aWNlRXJyb3I6XG5cdFx0XHRcdFx0XHRcdGVycm9yLm1lc3NhZ2UgPVxuXHRcdFx0XHRcdFx0XHRcdCdDYXJ0IHJlc29sdXRpb24gZmFpbGVkIHdoaWxlIGF0dGVtcHRpbmcgdG8gcmV0cmlldmUgdGhlIGNhcnQgSUQgZnJvbSBzdG9yYWdlLic7XG5cdFx0XHRcdFx0XHRcdHJldHVybiBvZihuZXcgRGFmZlJlc29sdmVDYXJ0RmFpbHVyZSh0aGlzLmVycm9yTWF0Y2hlcihlcnJvcikpKTtcblx0XHRcdFx0XHRcdGNhc2UgZXJyb3IgaW5zdGFuY2VvZiBEYWZmQ2FydE5vdEZvdW5kRXJyb3I6XG5cdFx0XHRcdFx0XHRcdHJldHVybiB0aGlzLmRyaXZlci5jcmVhdGUoKS5waXBlKFxuXHRcdFx0XHRcdFx0XHRcdHN3aXRjaE1hcCgoeyBpZCB9KSA9PiB0aGlzLmRyaXZlci5nZXQoaWQpKSxcblx0XHRcdFx0XHRcdFx0XHRtYXAocmVzcCA9PiBuZXcgRGFmZlJlc29sdmVDYXJ0U3VjY2VzcyhyZXNwKSksXG5cdFx0XHRcdFx0XHRcdFx0Y2F0Y2hFcnJvcigoaW5uZXJFcnJvcjogRGFmZkVycm9yKSA9PiB7XG5cdFx0XHRcdFx0XHRcdFx0XHRpbm5lckVycm9yLm1lc3NhZ2UgPVxuXHRcdFx0XHRcdFx0XHRcdFx0XHQnQ2FydCByZXNvbHV0aW9uIGZhaWxlZCBhZnRlciBhdHRlbXB0aW5nIHRvIGdlbmVyYXRlIGFuZCBsb2FkIGEgbmV3IGNhcnQuJztcblx0XHRcdFx0XHRcdFx0XHRcdHJldHVybiBvZihcblx0XHRcdFx0XHRcdFx0XHRcdFx0bmV3IERhZmZSZXNvbHZlQ2FydEZhaWx1cmUodGhpcy5lcnJvck1hdGNoZXIoaW5uZXJFcnJvcikpLFxuXHRcdFx0XHRcdFx0XHRcdFx0KTtcblx0XHRcdFx0XHRcdFx0XHR9KSxcblx0XHRcdFx0XHRcdFx0KTtcblx0XHRcdFx0XHRcdGRlZmF1bHQ6XG5cdFx0XHRcdFx0XHRcdGVycm9yLm1lc3NhZ2UgPSAnQ2FydCByZXNvbHV0aW9uIGhhcyBmYWlsZWQuJztcblx0XHRcdFx0XHRcdFx0cmV0dXJuIG9mKG5ldyBEYWZmUmVzb2x2ZUNhcnRGYWlsdXJlKHRoaXMuZXJyb3JNYXRjaGVyKGVycm9yKSkpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSksXG5cdFx0XHQpLFxuXHRcdCksXG5cdCk7XG59XG4iXX0=