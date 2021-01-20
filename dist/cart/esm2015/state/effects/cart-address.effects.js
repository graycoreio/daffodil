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
import { DaffCartAddressDriver } from '@daffodil/cart/driver';
import { DaffCartAddressActionTypes, DaffCartAddressUpdateSuccess, DaffCartAddressUpdateFailure, DaffCartStorageFailure, } from '../actions/public_api';
/**
 * @template T, V
 */
export class DaffCartAddressEffects {
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
        this.update$ = this.actions$.pipe(ofType(DaffCartAddressActionTypes.CartAddressUpdateAction), switchMap((/**
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
        cartId => this.driver.update(cartId, action.payload))), map((/**
         * @param {?} resp
         * @return {?}
         */
        (resp) => new DaffCartAddressUpdateSuccess(resp))), catchError((/**
         * @param {?} error
         * @return {?}
         */
        error => of(error instanceof DaffStorageServiceError
            ? new DaffCartStorageFailure(this.errorMatcher(error))
            : new DaffCartAddressUpdateFailure(this.errorMatcher(error)))))))));
    }
}
DaffCartAddressEffects.decorators = [
    { type: Injectable }
];
/** @nocollapse */
DaffCartAddressEffects.ctorParameters = () => [
    { type: Actions },
    { type: Function, decorators: [{ type: Inject, args: [DAFF_CART_ERROR_MATCHER,] }] },
    { type: undefined, decorators: [{ type: Inject, args: [DaffCartAddressDriver,] }] },
    { type: DaffCartStorageService }
];
tslib_1.__decorate([
    Effect(),
    tslib_1.__metadata("design:type", Object)
], DaffCartAddressEffects.prototype, "update$", void 0);
if (false) {
    /** @type {?} */
    DaffCartAddressEffects.prototype.update$;
    /**
     * @type {?}
     * @private
     */
    DaffCartAddressEffects.prototype.actions$;
    /**
     * @type {?}
     * @private
     */
    DaffCartAddressEffects.prototype.errorMatcher;
    /**
     * @type {?}
     * @private
     */
    DaffCartAddressEffects.prototype.driver;
    /**
     * @type {?}
     * @private
     */
    DaffCartAddressEffects.prototype.storage;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FydC1hZGRyZXNzLmVmZmVjdHMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGFmZm9kaWwvY2FydC9zdGF0ZS8iLCJzb3VyY2VzIjpbImVmZmVjdHMvY2FydC1hZGRyZXNzLmVmZmVjdHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNuRCxPQUFPLEVBQUUsU0FBUyxFQUFFLEdBQUcsRUFBRSxVQUFVLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUM1RCxPQUFPLEVBQUUsRUFBRSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQzFCLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUV4RCxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUN6RCxPQUFPLEVBQTZCLHNCQUFzQixFQUFFLHVCQUF1QixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDNUcsT0FBTyxFQUFFLHFCQUFxQixFQUFtQyxNQUFNLHVCQUF1QixDQUFDO0FBRS9GLE9BQU8sRUFDTCwwQkFBMEIsRUFFMUIsNEJBQTRCLEVBQzVCLDRCQUE0QixFQUM1QixzQkFBc0IsR0FDdkIsTUFBTSx1QkFBdUIsQ0FBQzs7OztBQUcvQixNQUFNLE9BQU8sc0JBQXNCOzs7Ozs7O0lBQ2pDLFlBQ1UsUUFBaUIsRUFDZ0IsWUFBc0IsRUFDeEIsTUFBNkMsRUFDNUUsT0FBK0I7UUFIL0IsYUFBUSxHQUFSLFFBQVEsQ0FBUztRQUNnQixpQkFBWSxHQUFaLFlBQVksQ0FBVTtRQUN4QixXQUFNLEdBQU4sTUFBTSxDQUF1QztRQUM1RSxZQUFPLEdBQVAsT0FBTyxDQUF3QjtRQUl6QyxZQUFPLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQzFCLE1BQU0sQ0FBQywwQkFBMEIsQ0FBQyx1QkFBdUIsQ0FBQyxFQUMxRCxTQUFTOzs7O1FBQUMsQ0FBQyxNQUFnQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUMzRCxHQUFHOzs7UUFBQyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsRUFBRSxFQUFDLEVBQ25DLFNBQVM7Ozs7UUFBQyxNQUFNLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLE1BQU0sRUFBRSxNQUFNLENBQUMsT0FBTyxDQUFDLEVBQUMsRUFDL0QsR0FBRzs7OztRQUFDLENBQUMsSUFBTyxFQUFFLEVBQUUsQ0FBQyxJQUFJLDRCQUE0QixDQUFDLElBQUksQ0FBQyxFQUFDLEVBQ3hELFVBQVU7Ozs7UUFBQyxLQUFLLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxLQUFLLFlBQVksdUJBQXVCO1lBQzdELENBQUMsQ0FBQyxJQUFJLHNCQUFzQixDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDdEQsQ0FBQyxDQUFDLElBQUksNEJBQTRCLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUM3RCxFQUFDLENBQ0gsRUFBQyxDQUNILENBQUE7SUFkRSxDQUFDOzs7WUFQTCxVQUFVOzs7O1lBZEYsT0FBTztZQWtCMkMsUUFBUSx1QkFBOUQsTUFBTSxTQUFDLHVCQUF1Qjs0Q0FDOUIsTUFBTSxTQUFDLHFCQUFxQjtZQWhCRyxzQkFBc0I7O0FBcUJ4RDtJQURDLE1BQU0sRUFBRTs7dURBWVI7OztJQVpELHlDQVlDOzs7OztJQWxCQywwQ0FBeUI7Ozs7O0lBQ3pCLDhDQUErRDs7Ozs7SUFDL0Qsd0NBQW9GOzs7OztJQUNwRix5Q0FBdUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlLCBJbmplY3QgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IHN3aXRjaE1hcCwgbWFwLCBjYXRjaEVycm9yIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgb2YgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IEFjdGlvbnMsIEVmZmVjdCwgb2ZUeXBlIH0gZnJvbSAnQG5ncngvZWZmZWN0cyc7XG5cbmltcG9ydCB7IERhZmZTdG9yYWdlU2VydmljZUVycm9yIH0gZnJvbSAnQGRhZmZvZGlsL2NvcmUnO1xuaW1wb3J0IHsgRGFmZkNhcnRBZGRyZXNzLCBEYWZmQ2FydCwgRGFmZkNhcnRTdG9yYWdlU2VydmljZSwgREFGRl9DQVJUX0VSUk9SX01BVENIRVIgfSBmcm9tICdAZGFmZm9kaWwvY2FydCc7XG5pbXBvcnQgeyBEYWZmQ2FydEFkZHJlc3NEcml2ZXIsIERhZmZDYXJ0QWRkcmVzc1NlcnZpY2VJbnRlcmZhY2UgfSBmcm9tICdAZGFmZm9kaWwvY2FydC9kcml2ZXInO1xuXG5pbXBvcnQge1xuICBEYWZmQ2FydEFkZHJlc3NBY3Rpb25UeXBlcyxcbiAgRGFmZkNhcnRBZGRyZXNzVXBkYXRlLFxuICBEYWZmQ2FydEFkZHJlc3NVcGRhdGVTdWNjZXNzLFxuICBEYWZmQ2FydEFkZHJlc3NVcGRhdGVGYWlsdXJlLFxuICBEYWZmQ2FydFN0b3JhZ2VGYWlsdXJlLFxufSBmcm9tICcuLi9hY3Rpb25zL3B1YmxpY19hcGknO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgRGFmZkNhcnRBZGRyZXNzRWZmZWN0czxUIGV4dGVuZHMgRGFmZkNhcnRBZGRyZXNzLCBWIGV4dGVuZHMgRGFmZkNhcnQ+IHtcbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBhY3Rpb25zJDogQWN0aW9ucyxcbiAgICBASW5qZWN0KERBRkZfQ0FSVF9FUlJPUl9NQVRDSEVSKSBwcml2YXRlIGVycm9yTWF0Y2hlcjogRnVuY3Rpb24sXG4gICAgQEluamVjdChEYWZmQ2FydEFkZHJlc3NEcml2ZXIpIHByaXZhdGUgZHJpdmVyOiBEYWZmQ2FydEFkZHJlc3NTZXJ2aWNlSW50ZXJmYWNlPFQsIFY+LFxuICAgIHByaXZhdGUgc3RvcmFnZTogRGFmZkNhcnRTdG9yYWdlU2VydmljZVxuICApIHt9XG5cbiAgQEVmZmVjdCgpXG4gIHVwZGF0ZSQgPSB0aGlzLmFjdGlvbnMkLnBpcGUoXG4gICAgb2ZUeXBlKERhZmZDYXJ0QWRkcmVzc0FjdGlvblR5cGVzLkNhcnRBZGRyZXNzVXBkYXRlQWN0aW9uKSxcbiAgICBzd2l0Y2hNYXAoKGFjdGlvbjogRGFmZkNhcnRBZGRyZXNzVXBkYXRlPFQ+KSA9PiBvZihudWxsKS5waXBlKFxuICAgICAgbWFwKCgpID0+IHRoaXMuc3RvcmFnZS5nZXRDYXJ0SWQoKSksXG4gICAgICBzd2l0Y2hNYXAoY2FydElkID0+IHRoaXMuZHJpdmVyLnVwZGF0ZShjYXJ0SWQsIGFjdGlvbi5wYXlsb2FkKSksXG4gICAgICBtYXAoKHJlc3A6IFYpID0+IG5ldyBEYWZmQ2FydEFkZHJlc3NVcGRhdGVTdWNjZXNzKHJlc3ApKSxcbiAgICAgIGNhdGNoRXJyb3IoZXJyb3IgPT4gb2YoZXJyb3IgaW5zdGFuY2VvZiBEYWZmU3RvcmFnZVNlcnZpY2VFcnJvclxuICAgICAgICA/IG5ldyBEYWZmQ2FydFN0b3JhZ2VGYWlsdXJlKHRoaXMuZXJyb3JNYXRjaGVyKGVycm9yKSlcbiAgICAgICAgOiBuZXcgRGFmZkNhcnRBZGRyZXNzVXBkYXRlRmFpbHVyZSh0aGlzLmVycm9yTWF0Y2hlcihlcnJvcikpXG4gICAgICApKSxcbiAgICApKSxcbiAgKVxufVxuIl19