/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable, Inject } from '@angular/core';
import { switchMap, map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { DaffCartStorageService, DAFF_CART_ERROR_MATCHER } from '@daffodil/cart';
import { DaffCartBillingAddressDriver } from '@daffodil/cart/driver';
import { DaffCartBillingAddressActionTypes, DaffCartBillingAddressLoadSuccess, DaffCartBillingAddressLoadFailure, DaffCartBillingAddressUpdateSuccess, DaffCartBillingAddressUpdateFailure, } from '../actions/public_api';
/**
 * @template T, V
 */
export class DaffCartBillingAddressEffects {
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
        this.get$ = this.actions$.pipe(ofType(DaffCartBillingAddressActionTypes.CartBillingAddressLoadAction), switchMap((/**
         * @param {?} action
         * @return {?}
         */
        (action) => this.driver.get(this.storage.getCartId()).pipe(map((/**
         * @param {?} resp
         * @return {?}
         */
        (resp) => new DaffCartBillingAddressLoadSuccess(resp))), catchError((/**
         * @param {?} error
         * @return {?}
         */
        error => of(new DaffCartBillingAddressLoadFailure(this.errorMatcher(error)))))))));
        this.update$ = this.actions$.pipe(ofType(DaffCartBillingAddressActionTypes.CartBillingAddressUpdateAction), switchMap((/**
         * @param {?} action
         * @return {?}
         */
        (action) => this.driver.update(this.storage.getCartId(), action.payload).pipe(map((/**
         * @param {?} resp
         * @return {?}
         */
        (resp) => new DaffCartBillingAddressUpdateSuccess(resp))), catchError((/**
         * @param {?} error
         * @return {?}
         */
        error => of(new DaffCartBillingAddressUpdateFailure(this.errorMatcher(error)))))))));
    }
}
DaffCartBillingAddressEffects.decorators = [
    { type: Injectable }
];
/** @nocollapse */
DaffCartBillingAddressEffects.ctorParameters = () => [
    { type: Actions },
    { type: Function, decorators: [{ type: Inject, args: [DAFF_CART_ERROR_MATCHER,] }] },
    { type: undefined, decorators: [{ type: Inject, args: [DaffCartBillingAddressDriver,] }] },
    { type: DaffCartStorageService }
];
tslib_1.__decorate([
    Effect(),
    tslib_1.__metadata("design:type", Object)
], DaffCartBillingAddressEffects.prototype, "get$", void 0);
tslib_1.__decorate([
    Effect(),
    tslib_1.__metadata("design:type", Object)
], DaffCartBillingAddressEffects.prototype, "update$", void 0);
if (false) {
    /** @type {?} */
    DaffCartBillingAddressEffects.prototype.get$;
    /** @type {?} */
    DaffCartBillingAddressEffects.prototype.update$;
    /**
     * @type {?}
     * @private
     */
    DaffCartBillingAddressEffects.prototype.actions$;
    /**
     * @type {?}
     * @private
     */
    DaffCartBillingAddressEffects.prototype.errorMatcher;
    /**
     * @type {?}
     * @private
     */
    DaffCartBillingAddressEffects.prototype.driver;
    /**
     * @type {?}
     * @private
     */
    DaffCartBillingAddressEffects.prototype.storage;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FydC1iaWxsaW5nLWFkZHJlc3MuZWZmZWN0cy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkYWZmb2RpbC9jYXJ0L3N0YXRlLyIsInNvdXJjZXMiOlsiZWZmZWN0cy9jYXJ0LWJpbGxpbmctYWRkcmVzcy5lZmZlY3RzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDbkQsT0FBTyxFQUFFLFNBQVMsRUFBRSxHQUFHLEVBQUUsVUFBVSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDNUQsT0FBTyxFQUFFLEVBQUUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUMxQixPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFeEQsT0FBTyxFQUE2QixzQkFBc0IsRUFBRSx1QkFBdUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzVHLE9BQU8sRUFBRSw0QkFBNEIsRUFBMEMsTUFBTSx1QkFBdUIsQ0FBQztBQUU3RyxPQUFPLEVBQ0wsaUNBQWlDLEVBRWpDLGlDQUFpQyxFQUNqQyxpQ0FBaUMsRUFFakMsbUNBQW1DLEVBQ25DLG1DQUFtQyxHQUNwQyxNQUFNLHVCQUF1QixDQUFDOzs7O0FBRy9CLE1BQU0sT0FBTyw2QkFBNkI7Ozs7Ozs7SUFDeEMsWUFDVSxRQUFpQixFQUNnQixZQUFzQixFQUNqQixNQUFvRCxFQUMxRixPQUErQjtRQUgvQixhQUFRLEdBQVIsUUFBUSxDQUFTO1FBQ2dCLGlCQUFZLEdBQVosWUFBWSxDQUFVO1FBQ2pCLFdBQU0sR0FBTixNQUFNLENBQThDO1FBQzFGLFlBQU8sR0FBUCxPQUFPLENBQXdCO1FBSXpDLFNBQUksR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FDdkIsTUFBTSxDQUFDLGlDQUFpQyxDQUFDLDRCQUE0QixDQUFDLEVBQ3RFLFNBQVM7Ozs7UUFBQyxDQUFDLE1BQWtDLEVBQUUsRUFBRSxDQUMvQyxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUM1QyxHQUFHOzs7O1FBQUMsQ0FBQyxJQUFPLEVBQUUsRUFBRSxDQUFDLElBQUksaUNBQWlDLENBQUMsSUFBSSxDQUFDLEVBQUMsRUFDN0QsVUFBVTs7OztRQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLElBQUksaUNBQWlDLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FDekYsRUFDRixDQUNGLENBQUE7UUFHRCxZQUFPLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQzFCLE1BQU0sQ0FBQyxpQ0FBaUMsQ0FBQyw4QkFBOEIsQ0FBQyxFQUN4RSxTQUFTOzs7O1FBQUMsQ0FBQyxNQUF1QyxFQUFFLEVBQUUsQ0FDcEQsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLEVBQUUsRUFBRSxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUMsSUFBSSxDQUMvRCxHQUFHOzs7O1FBQUMsQ0FBQyxJQUFPLEVBQUUsRUFBRSxDQUFDLElBQUksbUNBQW1DLENBQUMsSUFBSSxDQUFDLEVBQUMsRUFDL0QsVUFBVTs7OztRQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLElBQUksbUNBQW1DLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FDM0YsRUFDRixDQUNGLENBQUE7SUF0QkUsQ0FBQzs7O1lBUEwsVUFBVTs7OztZQWZGLE9BQU87WUFtQjJDLFFBQVEsdUJBQTlELE1BQU0sU0FBQyx1QkFBdUI7NENBQzlCLE1BQU0sU0FBQyw0QkFBNEI7WUFsQkosc0JBQXNCOztBQXVCeEQ7SUFEQyxNQUFNLEVBQUU7OzJEQVNSO0FBR0Q7SUFEQyxNQUFNLEVBQUU7OzhEQVNSOzs7SUFwQkQsNkNBU0M7O0lBRUQsZ0RBU0M7Ozs7O0lBMUJDLGlEQUF5Qjs7Ozs7SUFDekIscURBQStEOzs7OztJQUMvRCwrQ0FBa0c7Ozs7O0lBQ2xHLGdEQUF1QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUsIEluamVjdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgc3dpdGNoTWFwLCBtYXAsIGNhdGNoRXJyb3IgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBvZiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgQWN0aW9ucywgRWZmZWN0LCBvZlR5cGUgfSBmcm9tICdAbmdyeC9lZmZlY3RzJztcblxuaW1wb3J0IHsgRGFmZkNhcnRBZGRyZXNzLCBEYWZmQ2FydCwgRGFmZkNhcnRTdG9yYWdlU2VydmljZSwgREFGRl9DQVJUX0VSUk9SX01BVENIRVIgfSBmcm9tICdAZGFmZm9kaWwvY2FydCc7XG5pbXBvcnQgeyBEYWZmQ2FydEJpbGxpbmdBZGRyZXNzRHJpdmVyLCBEYWZmQ2FydEJpbGxpbmdBZGRyZXNzU2VydmljZUludGVyZmFjZSB9IGZyb20gJ0BkYWZmb2RpbC9jYXJ0L2RyaXZlcic7XG5cbmltcG9ydCB7XG4gIERhZmZDYXJ0QmlsbGluZ0FkZHJlc3NBY3Rpb25UeXBlcyxcbiAgRGFmZkNhcnRCaWxsaW5nQWRkcmVzc0xvYWQsXG4gIERhZmZDYXJ0QmlsbGluZ0FkZHJlc3NMb2FkU3VjY2VzcyxcbiAgRGFmZkNhcnRCaWxsaW5nQWRkcmVzc0xvYWRGYWlsdXJlLFxuICBEYWZmQ2FydEJpbGxpbmdBZGRyZXNzVXBkYXRlLFxuICBEYWZmQ2FydEJpbGxpbmdBZGRyZXNzVXBkYXRlU3VjY2VzcyxcbiAgRGFmZkNhcnRCaWxsaW5nQWRkcmVzc1VwZGF0ZUZhaWx1cmUsXG59IGZyb20gJy4uL2FjdGlvbnMvcHVibGljX2FwaSc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBEYWZmQ2FydEJpbGxpbmdBZGRyZXNzRWZmZWN0czxUIGV4dGVuZHMgRGFmZkNhcnRBZGRyZXNzLCBWIGV4dGVuZHMgRGFmZkNhcnQ+IHtcbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBhY3Rpb25zJDogQWN0aW9ucyxcbiAgICBASW5qZWN0KERBRkZfQ0FSVF9FUlJPUl9NQVRDSEVSKSBwcml2YXRlIGVycm9yTWF0Y2hlcjogRnVuY3Rpb24sXG4gICAgQEluamVjdChEYWZmQ2FydEJpbGxpbmdBZGRyZXNzRHJpdmVyKSBwcml2YXRlIGRyaXZlcjogRGFmZkNhcnRCaWxsaW5nQWRkcmVzc1NlcnZpY2VJbnRlcmZhY2U8VCwgVj4sXG4gICAgcHJpdmF0ZSBzdG9yYWdlOiBEYWZmQ2FydFN0b3JhZ2VTZXJ2aWNlXG4gICkge31cblxuICBARWZmZWN0KClcbiAgZ2V0JCA9IHRoaXMuYWN0aW9ucyQucGlwZShcbiAgICBvZlR5cGUoRGFmZkNhcnRCaWxsaW5nQWRkcmVzc0FjdGlvblR5cGVzLkNhcnRCaWxsaW5nQWRkcmVzc0xvYWRBY3Rpb24pLFxuICAgIHN3aXRjaE1hcCgoYWN0aW9uOiBEYWZmQ2FydEJpbGxpbmdBZGRyZXNzTG9hZCkgPT5cbiAgICAgIHRoaXMuZHJpdmVyLmdldCh0aGlzLnN0b3JhZ2UuZ2V0Q2FydElkKCkpLnBpcGUoXG4gICAgICAgIG1hcCgocmVzcDogVCkgPT4gbmV3IERhZmZDYXJ0QmlsbGluZ0FkZHJlc3NMb2FkU3VjY2VzcyhyZXNwKSksXG4gICAgICAgIGNhdGNoRXJyb3IoZXJyb3IgPT4gb2YobmV3IERhZmZDYXJ0QmlsbGluZ0FkZHJlc3NMb2FkRmFpbHVyZSh0aGlzLmVycm9yTWF0Y2hlcihlcnJvcikpKSlcbiAgICAgIClcbiAgICApXG4gIClcblxuICBARWZmZWN0KClcbiAgdXBkYXRlJCA9IHRoaXMuYWN0aW9ucyQucGlwZShcbiAgICBvZlR5cGUoRGFmZkNhcnRCaWxsaW5nQWRkcmVzc0FjdGlvblR5cGVzLkNhcnRCaWxsaW5nQWRkcmVzc1VwZGF0ZUFjdGlvbiksXG4gICAgc3dpdGNoTWFwKChhY3Rpb246IERhZmZDYXJ0QmlsbGluZ0FkZHJlc3NVcGRhdGU8VD4pID0+XG4gICAgICB0aGlzLmRyaXZlci51cGRhdGUodGhpcy5zdG9yYWdlLmdldENhcnRJZCgpLCBhY3Rpb24ucGF5bG9hZCkucGlwZShcbiAgICAgICAgbWFwKChyZXNwOiBWKSA9PiBuZXcgRGFmZkNhcnRCaWxsaW5nQWRkcmVzc1VwZGF0ZVN1Y2Nlc3MocmVzcCkpLFxuICAgICAgICBjYXRjaEVycm9yKGVycm9yID0+IG9mKG5ldyBEYWZmQ2FydEJpbGxpbmdBZGRyZXNzVXBkYXRlRmFpbHVyZSh0aGlzLmVycm9yTWF0Y2hlcihlcnJvcikpKSlcbiAgICAgIClcbiAgICApXG4gIClcbn1cbiJdfQ==