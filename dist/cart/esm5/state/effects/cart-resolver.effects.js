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
var DaffCartResolverEffects = /** @class */ (function () {
    function DaffCartResolverEffects(actions$, errorMatcher, cartStorage, driver) {
        var _this = this;
        this.actions$ = actions$;
        this.errorMatcher = errorMatcher;
        this.cartStorage = cartStorage;
        this.driver = driver;
        this.onResolveCart = (/**
         * @return {?}
         */
        function () { return _this.actions$.pipe(ofType(DaffCartActionTypes.ResolveCartAction), switchMap((/**
         * @return {?}
         */
        function () {
            return of(null).pipe(map((/**
             * @return {?}
             */
            function () { return _this.cartStorage.getCartId(); })), switchMap((/**
             * @param {?} cartId
             * @return {?}
             */
            function (cartId) {
                return cartId ? of({ id: cartId }) : _this.driver.create();
            })), switchMap((/**
             * @param {?} __0
             * @return {?}
             */
            function (_a) {
                var id = _a.id;
                return _this.driver.get(id);
            })), map((/**
             * @param {?} resp
             * @return {?}
             */
            function (resp) { return new DaffResolveCartSuccess(resp); })), catchError((/**
             * @param {?} error
             * @return {?}
             */
            function (error) {
                switch (true) {
                    case error instanceof DaffServerSideStorageError:
                        return of(new DaffResolveCartServerSide());
                    case error instanceof DaffStorageServiceError:
                        error.message =
                            'Cart resolution failed while attempting to retrieve the cart ID from storage.';
                        return of(new DaffResolveCartFailure(_this.errorMatcher(error)));
                    case error instanceof DaffCartNotFoundError:
                        return _this.driver.create().pipe(switchMap((/**
                         * @param {?} __0
                         * @return {?}
                         */
                        function (_a) {
                            var id = _a.id;
                            return _this.driver.get(id);
                        })), map((/**
                         * @param {?} resp
                         * @return {?}
                         */
                        function (resp) { return new DaffResolveCartSuccess(resp); })), catchError((/**
                         * @param {?} innerError
                         * @return {?}
                         */
                        function (innerError) {
                            innerError.message =
                                'Cart resolution failed after attempting to generate and load a new cart.';
                            return of(new DaffResolveCartFailure(_this.errorMatcher(innerError)));
                        })));
                    default:
                        error.message = 'Cart resolution has failed.';
                        return of(new DaffResolveCartFailure(_this.errorMatcher(error)));
                }
            })));
        }))); });
    }
    /**
     * @return {?}
     */
    DaffCartResolverEffects.prototype.ngrxOnInitEffects = /**
     * @return {?}
     */
    function () {
        return new DaffResolveCart();
    };
    DaffCartResolverEffects.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    DaffCartResolverEffects.ctorParameters = function () { return [
        { type: Actions },
        { type: Function, decorators: [{ type: Inject, args: [DAFF_CART_ERROR_MATCHER,] }] },
        { type: DaffCartStorageService },
        { type: undefined, decorators: [{ type: Inject, args: [DaffCartDriver,] }] }
    ]; };
    tslib_1.__decorate([
        Effect(),
        tslib_1.__metadata("design:type", Object)
    ], DaffCartResolverEffects.prototype, "onResolveCart", void 0);
    return DaffCartResolverEffects;
}());
export { DaffCartResolverEffects };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FydC1yZXNvbHZlci5lZmZlY3RzLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRhZmZvZGlsL2NhcnQvc3RhdGUvIiwic291cmNlcyI6WyJlZmZlY3RzL2NhcnQtcmVzb2x2ZXIuZWZmZWN0cy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ25ELE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBaUIsTUFBTSxlQUFlLENBQUM7QUFFdkUsT0FBTyxFQUFjLEVBQUUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUN0QyxPQUFPLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxHQUFHLEVBQVMsTUFBTSxnQkFBZ0IsQ0FBQztBQUVuRSxPQUFPLEVBQ04sdUJBQXVCLEVBQ3ZCLDBCQUEwQixHQUUxQixNQUFNLGdCQUFnQixDQUFDO0FBQ3hCLE9BQU8sRUFFTixzQkFBc0IsRUFDdEIsdUJBQXVCLEdBQ3ZCLE1BQU0sZ0JBQWdCLENBQUM7QUFDeEIsT0FBTyxFQUNOLGNBQWMsRUFFZCxxQkFBcUIsR0FDckIsTUFBTSx1QkFBdUIsQ0FBQztBQUUvQixPQUFPLEVBQ04sbUJBQW1CLEVBQ25CLHNCQUFzQixFQUN0QixzQkFBc0IsRUFDdEIseUJBQXlCLEVBQ3pCLGVBQWUsR0FDZixNQUFNLHVCQUF1QixDQUFDOzs7Ozs7Ozs7QUFTL0I7SUFHQyxpQ0FDUyxRQUFpQixFQUNnQixZQUFzQixFQUN2RCxXQUFtQyxFQUNYLE1BQW1DO1FBSnBFLGlCQUtJO1FBSkssYUFBUSxHQUFSLFFBQVEsQ0FBUztRQUNnQixpQkFBWSxHQUFaLFlBQVksQ0FBVTtRQUN2RCxnQkFBVyxHQUFYLFdBQVcsQ0FBd0I7UUFDWCxXQUFNLEdBQU4sTUFBTSxDQUE2QjtRQVFwRSxrQkFBYTs7O1FBQUcsY0FBMEIsT0FBQSxLQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FDM0QsTUFBTSxD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cG9ydCB7IEluamVjdGFibGUsIEluamVjdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQWN0aW9ucywgRWZmZWN0LCBvZlR5cGUsIE9uSW5pdEVmZmVjdHMgfSBmcm9tICdAbmdyeC9lZmZlY3RzJztcbmltcG9ydCB7IEFjdGlvbiB9IGZyb20gJ0BuZ3J4L3N0b3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUsIG9mIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBzd2l0Y2hNYXAsIGNhdGNoRXJyb3IsIG1hcCwgbWFwVG8gfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmltcG9ydCB7XG5cdERhZmZTdG9yYWdlU2VydmljZUVycm9yLFxuXHREYWZmU2VydmVyU2lkZVN0b3JhZ2VFcnJvcixcblx0RGFmZkVycm9yLFxufSBmcm9tICdAZGFmZm9kaWwvY29yZSc7XG5pbXBvcnQge1xuXHREYWZmQ2FydCxcblx0RGFmZkNhcnRTdG9yYWdlU2VydmljZSxcblx0REFGRl9DQVJUX0VSUk9SX01BVENIRVIsXG59IGZyb20gJ0BkYWZmb2RpbC9jYXJ0JztcbmltcG9ydCB7XG5cdERhZmZDYXJ0RHJpdmVyLFxuXHREYWZmQ2FydFNlcnZpY2VJbnRlcmZhY2UsXG5cdERhZmZDYXJ0Tm90Rm91bmRFcnJvcixcbn0gZnJvbSAnQGRhZmZvZGlsL2NhcnQvZHJpdmVyJztcblxuaW1wb3J0IHtcblx0RGFmZkNhcnRBY3Rpb25UeXBlcyxcblx0RGFmZlJlc29sdmVDYXJ0U3VjY2Vzcyxcblx0RGFmZlJlc29sdmVDYXJ0RmFpbHVyZSxcblx0RGFmZlJlc29sdmVDYXJ0U2VydmVyU2lkZSxcblx0RGFmZlJlc29sdmVDYXJ0LFxufSBmcm9tICcuLi9hY3Rpb25zL3B1YmxpY19hcGknO1xuXG4vKipcbiAqIEFuIGVmZmVjdCBmb3IgcmVzb2x2aW5nIGEgZ3Vlc3QgY2FydCBmb3IgYSBjdXN0b21lci5cbiAqIEl0IHdpbGw6XG4gKiAxLiBDaGVjayBzdG9yYWdlIGZvciBhbiBpZCwgYW5kIHJldHJpZXZlIHRoZSBjYXJ0IGlmIGl0IGV4aXN0cy5cbiAqIDIuIElmIGEgY2FydCBkb2Vzbid0IGV4aXN0LCBpdCB3aWxsIGF0dGVtcHQgdG8gY3JlYXRlIGEgbmV3IGNhcnQgZXhhY3RseSBvbmNlLlxuICogMy4gSWYgdGhlIGNhcnQgcmVzb2x1dGlvbiBmYWlscywgaXQgd2lsbCBiYWlsb3V0LlxuICovXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgRGFmZkNhcnRSZXNvbHZlckVmZmVjdHM8VCBleHRlbmRzIERhZmZDYXJ0ID0gRGFmZkNhcnQ+XG5cdGltcGxlbWVudHMgT25Jbml0RWZmZWN0cyB7XG5cdGNvbnN0cnVjdG9yKFxuXHRcdHByaXZhdGUgYWN0aW9ucyQ6IEFjdGlvbnMsXG5cdFx0QEluamVjdChEQUZGX0NBUlRfRVJST1JfTUFUQ0hFUikgcHJpdmF0ZSBlcnJvck1hdGNoZXI6IEZ1bmN0aW9uLFxuXHRcdHByaXZhdGUgY2FydFN0b3JhZ2U6IERhZmZDYXJ0U3RvcmFnZVNlcnZpY2UsXG5cdFx0QEluamVjdChEYWZmQ2FydERyaXZlcikgcHJpdmF0ZSBkcml2ZXI6IERhZmZDYXJ0U2VydmljZUludGVyZmFjZTxUPixcblx0KSB7fVxuXG5cdG5ncnhPbkluaXRFZmZlY3RzKCk6IEFjdGlvbiB7XG5cdFx0cmV0dXJuIG5ldyBEYWZmUmVzb2x2ZUNhcnQoKTtcblx0fVxuXG5cdEBFZmZlY3QoKVxuXHRvblJlc29sdmVDYXJ0ID0gKCk6IE9ic2VydmFibGU8QWN0aW9uPiA9PiB0aGlzLmFjdGlvbnMkLnBpcGUoXG5cdFx0b2ZUeXBlKERhZmZDYXJ0QWN0aW9uVHlwZXMuUmVzb2x2ZUNhcnRBY3Rpb24pLFxuXHRcdHN3aXRjaE1hcCgoKSA9PlxuXHRcdFx0b2YobnVsbCkucGlwZShcblx0XHRcdFx0bWFwKCgpID0+IHRoaXMuY2FydFN0b3JhZ2UuZ2V0Q2FydElkKCkpLFxuXHRcdFx0XHRzd2l0Y2hNYXAoY2FydElkID0+XG5cdFx0XHRcdFx0Y2FydElkID8gb2YoeyBpZDogY2FydElkIH0pIDogdGhpcy5kcml2ZXIuY3JlYXRlKCksXG5cdFx0XHRcdCksXG5cdFx0XHRcdHN3aXRjaE1hcCgoeyBpZCB9KSA9PiB0aGlzLmRyaXZlci5nZXQoaWQpKSxcblx0XHRcdFx0bWFwKHJlc3AgPT4gbmV3IERhZmZSZXNvbHZlQ2FydFN1Y2Nlc3MocmVzcCkpLFxuXHRcdFx0XHRjYXRjaEVycm9yKGVycm9yID0+IHtcblx0XHRcdFx0XHRzd2l0Y2ggKHRydWUpIHtcblx0XHRcdFx0XHRcdGNhc2UgZXJyb3IgaW5zdGFuY2VvZiBEYWZmU2VydmVyU2lkZVN0b3JhZ2VFcnJvcjpcblx0XHRcdFx0XHRcdFx0cmV0dXJuIG9mKG5ldyBEYWZmUmVzb2x2ZUNhcnRTZXJ2ZXJTaWRlKCkpO1xuXHRcdFx0XHRcdFx0Y2FzZSBlcnJvciBpbnN0YW5jZW9mIERhZmZTdG9yYWdlU2VydmljZUVycm9yOlxuXHRcdFx0XHRcdFx0XHRlcnJvci5tZXNzYWdlID1cblx0XHRcdFx0XHRcdFx0XHQnQ2FydCByZXNvbHV0aW9uIGZhaWxlZCB3aGlsZSBhdHRlbXB0aW5nIHRvIHJldHJpZXZlIHRoZSBjYXJ0IElEIGZyb20gc3RvcmFnZS4nO1xuXHRcdFx0XHRcdFx0XHRyZXR1cm4gb2YobmV3IERhZmZSZXNvbHZlQ2FydEZhaWx1cmUodGhpcy5lcnJvck1hdGNoZXIoZXJyb3IpKSk7XG5cdFx0XHRcdFx0XHRjYXNlIGVycm9yIGluc3RhbmNlb2YgRGFmZkNhcnROb3RGb3VuZEVycm9yOlxuXHRcdFx0XHRcdFx0XHRyZXR1cm4gdGhpcy5kcml2ZXIuY3JlYXRlKCkucGlwZShcblx0XHRcdFx0XHRcdFx0XHRzd2l0Y2hNYXAoKHsgaWQgfSkgPT4gdGhpcy5kcml2ZXIuZ2V0KGlkKSksXG5cdFx0XHRcdFx0XHRcdFx0bWFwKHJlc3AgPT4gbmV3IERhZmZSZXNvbHZlQ2FydFN1Y2Nlc3MocmVzcCkpLFxuXHRcdFx0XHRcdFx0XHRcdGNhdGNoRXJyb3IoKGlubmVyRXJyb3I6IERhZmZFcnJvcikgPT4ge1xuXHRcdFx0XHRcdFx0XHRcdFx0aW5uZXJFcnJvci5tZXNzYWdlID1cblx0XHRcdFx0XHRcdFx0XHRcdFx0J0NhcnQgcmVzb2x1dGlvbiBmYWlsZWQgYWZ0ZXIgYXR0ZW1wdGluZyB0byBnZW5lcmF0ZSBhbmQgbG9hZCBhIG5ldyBjYXJ0Lic7XG5cdFx0XHRcdFx0XHRcdFx0XHRyZXR1cm4gb2YoXG5cdFx0XHRcdFx0XHRcdFx0XHRcdG5ldyBEYWZmUmVzb2x2ZUNhcnRGYWlsdXJlKHRoaXMuZXJyb3JNYXRjaGVyKGlubmVyRXJyb3IpKSxcblx0XHRcdFx0XHRcdFx0XHRcdCk7XG5cdFx0XHRcdFx0XHRcdFx0fSksXG5cdFx0XHRcdFx0XHRcdCk7XG5cdFx0XHRcdFx0XHRkZWZhdWx0OlxuXHRcdFx0XHRcdFx0XHRlcnJvci5tZXNzYWdlID0gJ0NhcnQgcmVzb2x1dGlvbiBoYXMgZmFpbGVkLic7XG5cdFx0XHRcdFx0XHRcdHJldHVybiBvZihuZXcgRGFmZlJlc29sdmVDYXJ0RmFpbHVyZSh0aGlzLmVycm9yTWF0Y2hlcihlcnJvcikpKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0pLFxuXHRcdFx0KSxcblx0XHQpLFxuXHQpO1xufVxuIl19