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
export class DaffCartOrderEffects {
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
        this.placeOrder$ = this.actions$.pipe(ofType(DaffCartOrderActionTypes.CartPlaceOrderAction), switchMap((/**
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
        cartId => this.driver.placeOrder(cartId, action.payload))), map((/**
         * @param {?} resp
         * @return {?}
         */
        (resp) => new DaffCartPlaceOrderSuccess(resp))), catchError((/**
         * @param {?} error
         * @return {?}
         */
        error => of(error instanceof DaffStorageServiceError
            ? new DaffCartStorageFailure(this.errorMatcher(error))
            : new DaffCartPlaceOrderFailure(this.errorMatcher(error)))))))));
        this.resetCart$ = this.actions$.pipe(ofType(DaffCartOrderActionTypes.CartPlaceOrderSuccessAction), mapTo(new DaffCartCreate()));
    }
}
DaffCartOrderEffects.decorators = [
    { type: Injectable }
];
/** @nocollapse */
DaffCartOrderEffects.ctorParameters = () => [
    { type: Actions },
    { type: Function, decorators: [{ type: Inject, args: [DAFF_CART_ERROR_MATCHER,] }] },
    { type: undefined, decorators: [{ type: Inject, args: [DaffCartOrderDriver,] }] },
    { type: DaffCartStorageService }
];
tslib_1.__decorate([
    Effect(),
    tslib_1.__metadata("design:type", Object)
], DaffCartOrderEffects.prototype, "placeOrder$", void 0);
tslib_1.__decorate([
    Effect(),
    tslib_1.__metadata("design:type", Object)
], DaffCartOrderEffects.prototype, "resetCart$", void 0);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FydC1vcmRlci5lZmZlY3RzLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRhZmZvZGlsL2NhcnQvc3RhdGUvIiwic291cmNlcyI6WyJlZmZlY3RzL2NhcnQtb3JkZXIuZWZmZWN0cy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ25ELE9BQU8sRUFBRSxTQUFTLEVBQUUsR0FBRyxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNuRSxPQUFPLEVBQUUsRUFBRSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQzFCLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUV4RCxPQUFPLEVBQ0wsdUJBQXVCLEVBQ3hCLE1BQU0sZ0JBQWdCLENBQUE7QUFDdkIsT0FBTyxFQUF3RCxzQkFBc0IsRUFBRSx1QkFBdUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3ZJLE9BQU8sRUFBRSxtQkFBbUIsRUFBaUMsTUFBTSx1QkFBdUIsQ0FBQztBQUUzRixPQUFPLEVBQ0wsd0JBQXdCLEVBRXhCLHlCQUF5QixFQUN6Qix5QkFBeUIsRUFDekIsc0JBQXNCLEVBQ3RCLGNBQWMsRUFDZixNQUFNLHVCQUF1QixDQUFDOzs7O0FBRy9CLE1BQU0sT0FBTyxvQkFBb0I7Ozs7Ozs7SUFLL0IsWUFDVSxRQUFpQixFQUNnQixZQUFzQixFQUMxQixNQUE4QyxFQUMzRSxPQUErQjtRQUgvQixhQUFRLEdBQVIsUUFBUSxDQUFTO1FBQ2dCLGlCQUFZLEdBQVosWUFBWSxDQUFVO1FBQzFCLFdBQU0sR0FBTixNQUFNLENBQXdDO1FBQzNFLFlBQU8sR0FBUCxPQUFPLENBQXdCO1FBSXpDLGdCQUFXLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQzlCLE1BQU0sQ0FBQyx3QkFBd0IsQ0FBQyxvQkFBb0IsQ0FBQyxFQUNyRCxTQUFTOzs7O1FBQUMsQ0FBQyxNQUE2QixFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUN4RCxHQUFHOzs7UUFBQyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsRUFBRSxFQUFDLEVBQ25DLFNBQVM7Ozs7UUFBQyxNQUFNLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLE1BQU0sRUFBRSxNQUFNLENBQUMsT0FBTyxDQUFDLEVBQUMsRUFDbkUsR0FBRzs7OztRQUFDLENBQUMsSUFBTyxFQUFFLEVBQUUsQ0FBQyxJQUFJLHlCQUF5QixDQUFJLElBQUksQ0FBQyxFQUFDLEVBQ3hELFVBQVU7Ozs7UUFBQyxLQUFLLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxLQUFLLFlBQVksdUJBQXVCO1lBQzdELENBQUMsQ0FBQyxJQUFJLHNCQUFzQixDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDdEQsQ0FBQyxDQUFDLElBQUkseUJBQXlCLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUMxRCxFQUFDLENBQ0gsRUFBQyxDQUNILENBQUE7UUFHRCxlQUFVLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQzdCLE1BQU0sQ0FBQyx3QkFBd0IsQ0FBQywyQkFBMkIsQ0FBQyxFQUM1RCxLQUFLLENBQUMsSUFBSSxjQUFjLEVBQUUsQ0FBQyxDQUM1QixDQUFBO0lBcEJFLENBQUM7OztZQVhMLFVBQVU7Ozs7WUFqQkYsT0FBTztZQXlCMkMsUUFBUSx1QkFBOUQsTUFBTSxTQUFDLHVCQUF1Qjs0Q0FDOUIsTUFBTSxTQUFDLG1CQUFtQjtZQXJCZ0Msc0JBQXNCOztBQTBCbkY7SUFEQyxNQUFNLEVBQUU7O3lEQVlSO0FBR0Q7SUFEQyxNQUFNLEVBQUU7O3dEQUlSOzs7SUFsQkQsMkNBWUM7O0lBRUQsMENBSUM7Ozs7O0lBeEJDLHdDQUF5Qjs7Ozs7SUFDekIsNENBQStEOzs7OztJQUMvRCxzQ0FBbUY7Ozs7O0lBQ25GLHVDQUF1QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUsIEluamVjdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgc3dpdGNoTWFwLCBtYXAsIGNhdGNoRXJyb3IsIG1hcFRvIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgb2YgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IEFjdGlvbnMsIEVmZmVjdCwgb2ZUeXBlIH0gZnJvbSAnQG5ncngvZWZmZWN0cyc7XG5cbmltcG9ydCB7XG4gIERhZmZTdG9yYWdlU2VydmljZUVycm9yXG59IGZyb20gJ0BkYWZmb2RpbC9jb3JlJ1xuaW1wb3J0IHsgRGFmZkNhcnQsIERhZmZDYXJ0UGF5bWVudE1ldGhvZCwgRGFmZkNhcnRPcmRlclJlc3VsdCwgRGFmZkNhcnRTdG9yYWdlU2VydmljZSwgREFGRl9DQVJUX0VSUk9SX01BVENIRVIgfSBmcm9tICdAZGFmZm9kaWwvY2FydCc7XG5pbXBvcnQgeyBEYWZmQ2FydE9yZGVyRHJpdmVyLCBEYWZmQ2FydE9yZGVyU2VydmljZUludGVyZmFjZSB9IGZyb20gJ0BkYWZmb2RpbC9jYXJ0L2RyaXZlcic7XG5cbmltcG9ydCB7XG4gIERhZmZDYXJ0T3JkZXJBY3Rpb25UeXBlcyxcbiAgRGFmZkNhcnRQbGFjZU9yZGVyLFxuICBEYWZmQ2FydFBsYWNlT3JkZXJTdWNjZXNzLFxuICBEYWZmQ2FydFBsYWNlT3JkZXJGYWlsdXJlLFxuICBEYWZmQ2FydFN0b3JhZ2VGYWlsdXJlLFxuICBEYWZmQ2FydENyZWF0ZVxufSBmcm9tICcuLi9hY3Rpb25zL3B1YmxpY19hcGknO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgRGFmZkNhcnRPcmRlckVmZmVjdHM8XG4gIFQgZXh0ZW5kcyBEYWZmQ2FydCA9IERhZmZDYXJ0LFxuICBWIGV4dGVuZHMgRGFmZkNhcnRQYXltZW50TWV0aG9kID0gRGFmZkNhcnRQYXltZW50TWV0aG9kLFxuICBSIGV4dGVuZHMgRGFmZkNhcnRPcmRlclJlc3VsdCA9IERhZmZDYXJ0T3JkZXJSZXN1bHRcbj4ge1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGFjdGlvbnMkOiBBY3Rpb25zLFxuICAgIEBJbmplY3QoREFGRl9DQVJUX0VSUk9SX01BVENIRVIpIHByaXZhdGUgZXJyb3JNYXRjaGVyOiBGdW5jdGlvbixcbiAgICBASW5qZWN0KERhZmZDYXJ0T3JkZXJEcml2ZXIpIHByaXZhdGUgZHJpdmVyOiBEYWZmQ2FydE9yZGVyU2VydmljZUludGVyZmFjZTxULCBWLCBSPixcbiAgICBwcml2YXRlIHN0b3JhZ2U6IERhZmZDYXJ0U3RvcmFnZVNlcnZpY2UsXG4gICkge31cblxuICBARWZmZWN0KClcbiAgcGxhY2VPcmRlciQgPSB0aGlzLmFjdGlvbnMkLnBpcGUoXG4gICAgb2ZUeXBlKERhZmZDYXJ0T3JkZXJBY3Rpb25UeXBlcy5DYXJ0UGxhY2VPcmRlckFjdGlvbiksXG4gICAgc3dpdGNoTWFwKChhY3Rpb246IERhZmZDYXJ0UGxhY2VPcmRlcjxWPikgPT4gb2YobnVsbCkucGlwZShcbiAgICAgIG1hcCgoKSA9PiB0aGlzLnN0b3JhZ2UuZ2V0Q2FydElkKCkpLFxuICAgICAgc3dpdGNoTWFwKGNhcnRJZCA9PiB0aGlzLmRyaXZlci5wbGFjZU9yZGVyKGNhcnRJZCwgYWN0aW9uLnBheWxvYWQpKSxcbiAgICAgIG1hcCgocmVzcDogUikgPT4gbmV3IERhZmZDYXJ0UGxhY2VPcmRlclN1Y2Nlc3M8Uj4ocmVzcCkpLFxuICAgICAgY2F0Y2hFcnJvcihlcnJvciA9PiBvZihlcnJvciBpbnN0YW5jZW9mIERhZmZTdG9yYWdlU2VydmljZUVycm9yXG4gICAgICAgID8gbmV3IERhZmZDYXJ0U3RvcmFnZUZhaWx1cmUodGhpcy5lcnJvck1hdGNoZXIoZXJyb3IpKVxuICAgICAgICA6IG5ldyBEYWZmQ2FydFBsYWNlT3JkZXJGYWlsdXJlKHRoaXMuZXJyb3JNYXRjaGVyKGVycm9yKSlcbiAgICAgICkpLFxuICAgICkpLFxuICApXG5cbiAgQEVmZmVjdCgpXG4gIHJlc2V0Q2FydCQgPSB0aGlzLmFjdGlvbnMkLnBpcGUoXG4gICAgb2ZUeXBlKERhZmZDYXJ0T3JkZXJBY3Rpb25UeXBlcy5DYXJ0UGxhY2VPcmRlclN1Y2Nlc3NBY3Rpb24pLFxuICAgIG1hcFRvKG5ldyBEYWZmQ2FydENyZWF0ZSgpKSxcbiAgKVxufVxuIl19