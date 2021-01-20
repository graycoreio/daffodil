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
import { DaffCartShippingAddressDriver } from '@daffodil/cart/driver';
import { DaffCartShippingAddressActionTypes, DaffCartShippingAddressLoadSuccess, DaffCartShippingAddressLoadFailure, DaffCartShippingAddressUpdateSuccess, DaffCartShippingAddressUpdateFailure, } from '../actions/public_api';
/**
 * @template T, V
 */
var DaffCartShippingAddressEffects = /** @class */ (function () {
    function DaffCartShippingAddressEffects(actions$, errorMatcher, driver, storage) {
        var _this = this;
        this.actions$ = actions$;
        this.errorMatcher = errorMatcher;
        this.driver = driver;
        this.storage = storage;
        this.get$ = this.actions$.pipe(ofType(DaffCartShippingAddressActionTypes.CartShippingAddressLoadAction), switchMap((/**
         * @param {?} action
         * @return {?}
         */
        function (action) {
            return _this.driver.get(_this.storage.getCartId()).pipe(map((/**
             * @param {?} resp
             * @return {?}
             */
            function (resp) { return new DaffCartShippingAddressLoadSuccess(resp); })), catchError((/**
             * @param {?} error
             * @return {?}
             */
            function (error) { return of(new DaffCartShippingAddressLoadFailure(_this.errorMatcher(error))); })));
        })));
        this.update$ = this.actions$.pipe(ofType(DaffCartShippingAddressActionTypes.CartShippingAddressUpdateAction), switchMap((/**
         * @param {?} action
         * @return {?}
         */
        function (action) {
            return _this.driver.update(_this.storage.getCartId(), action.payload).pipe(map((/**
             * @param {?} resp
             * @return {?}
             */
            function (resp) { return new DaffCartShippingAddressUpdateSuccess(resp); })), catchError((/**
             * @param {?} error
             * @return {?}
             */
            function (error) { return of(new DaffCartShippingAddressUpdateFailure(_this.errorMatcher(error))); })));
        })));
    }
    DaffCartShippingAddressEffects.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    DaffCartShippingAddressEffects.ctorParameters = function () { return [
        { type: Actions },
        { type: Function, decorators: [{ type: Inject, args: [DAFF_CART_ERROR_MATCHER,] }] },
        { type: undefined, decorators: [{ type: Inject, args: [DaffCartShippingAddressDriver,] }] },
        { type: DaffCartStorageService }
    ]; };
    tslib_1.__decorate([
        Effect(),
        tslib_1.__metadata("design:type", Object)
    ], DaffCartShippingAddressEffects.prototype, "get$", void 0);
    tslib_1.__decorate([
        Effect(),
        tslib_1.__metadata("design:type", Object)
    ], DaffCartShippingAddressEffects.prototype, "update$", void 0);
    return DaffCartShippingAddressEffects;
}());
export { DaffCartShippingAddressEffects };
if (false) {
    /** @type {?} */
    DaffCartShippingAddressEffects.prototype.get$;
    /** @type {?} */
    DaffCartShippingAddressEffects.prototype.update$;
    /**
     * @type {?}
     * @private
     */
    DaffCartShippingAddressEffects.prototype.actions$;
    /**
     * @type {?}
     * @private
     */
    DaffCartShippingAddressEffects.prototype.errorMatcher;
    /**
     * @type {?}
     * @private
     */
    DaffCartShippingAddressEffects.prototype.driver;
    /**
     * @type {?}
     * @private
     */
    DaffCartShippingAddressEffects.prototype.storage;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FydC1zaGlwcGluZy1hZGRyZXNzLmVmZmVjdHMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGFmZm9kaWwvY2FydC9zdGF0ZS8iLCJzb3VyY2VzIjpbImVmZmVjdHMvY2FydC1zaGlwcGluZy1hZGRyZXNzLmVmZmVjdHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNuRCxPQUFPLEVBQUUsU0FBUyxFQUFFLEdBQUcsRUFBRSxVQUFVLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUM1RCxPQUFPLEVBQUUsRUFBRSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQzFCLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUV4RCxPQUFPLEVBQTZCLHNCQUFzQixFQUFFLHVCQUF1QixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDNUcsT0FBTyxFQUFFLDZCQUE2QixFQUEyQyxNQUFNLHVCQUF1QixDQUFDO0FBRS9HLE9BQU8sRUFDTCxrQ0FBa0MsRUFFbEMsa0NBQWtDLEVBQ2xDLGtDQUFrQyxFQUVsQyxvQ0FBb0MsRUFDcEMsb0NBQW9DLEdBQ3JDLE1BQU0sdUJBQXVCLENBQUM7Ozs7QUFFL0I7SUFFRSx3Q0FDVSxRQUFpQixFQUNnQixZQUFzQixFQUNoQixNQUFxRCxFQUM1RixPQUErQjtRQUp6QyxpQkFLSTtRQUpNLGFBQVEsR0FBUixRQUFRLENBQVM7UUFDZ0IsaUJBQVksR0FBWixZQUFZLENBQVU7UUFDaEIsV0FBTSxHQUFOLE1BQU0sQ0FBK0M7UUFDNUYsWUFBTyxHQUFQLE9BQU8sQ0FBd0I7UUFJekMsU0FBSSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUN2QixNQUFNLENBQUMsa0NBQWtDLENBQUMsNkJBQTZCLENBQUMsRUFDeEUsU0FBUzs7OztRQUFDLFVBQUMsTUFBbUM7WUFDNUMsT0FBQSxLQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxLQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUM1QyxHQUFHOzs7O1lBQUMsVUFBQyxJQUFPLElBQUssT0FBQSxJQUFJLGtDQUFrQyxDQUFDLElBQUksQ0FBQyxFQUE1QyxDQUE0QyxFQUFDLEVBQzlELFVBQVU7Ozs7WUFBQyxVQUFBLEtBQUssSUFBSSxPQUFBLEVBQUUsQ0FBQyxJQUFJLGtDQUFrQyxDQUFDLEtBQUksQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxFQUFwRSxDQUFvRSxFQUFDLENBQzFGO1FBSEQsQ0FHQyxFQUNGLENBQ0YsQ0FBQTtRQUdELFlBQU8sR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FDMUIsTUFBTSxDQUFDLGtDQUFrQyxDQUFDLCtCQUErQixDQUFDLEVBQzFFLFNBQVM7Ozs7UUFBQyxVQUFDLE1BQXdDO1lBQ2pELE9BQUEsS0FBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsS0FBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLEVBQUUsRUFBRSxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUMsSUFBSSxDQUMvRCxHQUFHOzs7O1lBQUMsVUFBQyxJQUFPLElBQUssT0FBQSxJQUFJLG9DQUFvQyxDQUFDLElBQUksQ0FBQyxFQUE5QyxDQUE4QyxFQUFDLEVBQ2hFLFVBQVU7Ozs7WUFBQyxVQUFBLEtBQUssSUFBSSxPQUFBLEVBQUUsQ0FBQyxJQUFJLG9DQUFvQyxDQUFDLEtBQUksQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxFQUF0RSxDQUFzRSxFQUFDLENBQzVGO1FBSEQsQ0FHQyxFQUNGLENBQ0YsQ0FBQTtJQXRCRSxDQUFDOztnQkFQTCxVQUFVOzs7O2dCQWZGLE9BQU87Z0JBbUIyQyxRQUFRLHVCQUE5RCxNQUFNLFNBQUMsdUJBQXVCO2dEQUM5QixNQUFNLFNBQUMsNkJBQTZCO2dCQWxCTCxzQkFBc0I7O0lBdUJ4RDtRQURDLE1BQU0sRUFBRTs7Z0VBU1I7SUFHRDtRQURDLE1BQU0sRUFBRTs7bUVBU1I7SUFDSCxxQ0FBQztDQUFBLEFBOUJELElBOEJDO1NBN0JZLDhCQUE4Qjs7O0lBUXpDLDhDQVNDOztJQUVELGlEQVNDOzs7OztJQTFCQyxrREFBeUI7Ozs7O0lBQ3pCLHNEQUErRDs7Ozs7SUFDL0QsZ0RBQW9HOzs7OztJQUNwRyxpREFBdUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlLCBJbmplY3QgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IHN3aXRjaE1hcCwgbWFwLCBjYXRjaEVycm9yIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgb2YgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IEFjdGlvbnMsIEVmZmVjdCwgb2ZUeXBlIH0gZnJvbSAnQG5ncngvZWZmZWN0cyc7XG5cbmltcG9ydCB7IERhZmZDYXJ0QWRkcmVzcywgRGFmZkNhcnQsIERhZmZDYXJ0U3RvcmFnZVNlcnZpY2UsIERBRkZfQ0FSVF9FUlJPUl9NQVRDSEVSIH0gZnJvbSAnQGRhZmZvZGlsL2NhcnQnO1xuaW1wb3J0IHsgRGFmZkNhcnRTaGlwcGluZ0FkZHJlc3NEcml2ZXIsIERhZmZDYXJ0U2hpcHBpbmdBZGRyZXNzU2VydmljZUludGVyZmFjZSB9IGZyb20gJ0BkYWZmb2RpbC9jYXJ0L2RyaXZlcic7XG5cbmltcG9ydCB7XG4gIERhZmZDYXJ0U2hpcHBpbmdBZGRyZXNzQWN0aW9uVHlwZXMsXG4gIERhZmZDYXJ0U2hpcHBpbmdBZGRyZXNzTG9hZCxcbiAgRGFmZkNhcnRTaGlwcGluZ0FkZHJlc3NMb2FkU3VjY2VzcyxcbiAgRGFmZkNhcnRTaGlwcGluZ0FkZHJlc3NMb2FkRmFpbHVyZSxcbiAgRGFmZkNhcnRTaGlwcGluZ0FkZHJlc3NVcGRhdGUsXG4gIERhZmZDYXJ0U2hpcHBpbmdBZGRyZXNzVXBkYXRlU3VjY2VzcyxcbiAgRGFmZkNhcnRTaGlwcGluZ0FkZHJlc3NVcGRhdGVGYWlsdXJlLFxufSBmcm9tICcuLi9hY3Rpb25zL3B1YmxpY19hcGknO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgRGFmZkNhcnRTaGlwcGluZ0FkZHJlc3NFZmZlY3RzPFQgZXh0ZW5kcyBEYWZmQ2FydEFkZHJlc3MsIFYgZXh0ZW5kcyBEYWZmQ2FydD4ge1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGFjdGlvbnMkOiBBY3Rpb25zLFxuICAgIEBJbmplY3QoREFGRl9DQVJUX0VSUk9SX01BVENIRVIpIHByaXZhdGUgZXJyb3JNYXRjaGVyOiBGdW5jdGlvbixcbiAgICBASW5qZWN0KERhZmZDYXJ0U2hpcHBpbmdBZGRyZXNzRHJpdmVyKSBwcml2YXRlIGRyaXZlcjogRGFmZkNhcnRTaGlwcGluZ0FkZHJlc3NTZXJ2aWNlSW50ZXJmYWNlPFQsIFY+LFxuICAgIHByaXZhdGUgc3RvcmFnZTogRGFmZkNhcnRTdG9yYWdlU2VydmljZVxuICApIHt9XG5cbiAgQEVmZmVjdCgpXG4gIGdldCQgPSB0aGlzLmFjdGlvbnMkLnBpcGUoXG4gICAgb2ZUeXBlKERhZmZDYXJ0U2hpcHBpbmdBZGRyZXNzQWN0aW9uVHlwZXMuQ2FydFNoaXBwaW5nQWRkcmVzc0xvYWRBY3Rpb24pLFxuICAgIHN3aXRjaE1hcCgoYWN0aW9uOiBEYWZmQ2FydFNoaXBwaW5nQWRkcmVzc0xvYWQpID0+XG4gICAgICB0aGlzLmRyaXZlci5nZXQodGhpcy5zdG9yYWdlLmdldENhcnRJZCgpKS5waXBlKFxuICAgICAgICBtYXAoKHJlc3A6IFQpID0+IG5ldyBEYWZmQ2FydFNoaXBwaW5nQWRkcmVzc0xvYWRTdWNjZXNzKHJlc3ApKSxcbiAgICAgICAgY2F0Y2hFcnJvcihlcnJvciA9PiBvZihuZXcgRGFmZkNhcnRTaGlwcGluZ0FkZHJlc3NMb2FkRmFpbHVyZSh0aGlzLmVycm9yTWF0Y2hlcihlcnJvcikpKSlcbiAgICAgIClcbiAgICApXG4gIClcblxuICBARWZmZWN0KClcbiAgdXBkYXRlJCA9IHRoaXMuYWN0aW9ucyQucGlwZShcbiAgICBvZlR5cGUoRGFmZkNhcnRTaGlwcGluZ0FkZHJlc3NBY3Rpb25UeXBlcy5DYXJ0U2hpcHBpbmdBZGRyZXNzVXBkYXRlQWN0aW9uKSxcbiAgICBzd2l0Y2hNYXAoKGFjdGlvbjogRGFmZkNhcnRTaGlwcGluZ0FkZHJlc3NVcGRhdGU8VD4pID0+XG4gICAgICB0aGlzLmRyaXZlci51cGRhdGUodGhpcy5zdG9yYWdlLmdldENhcnRJZCgpLCBhY3Rpb24ucGF5bG9hZCkucGlwZShcbiAgICAgICAgbWFwKChyZXNwOiBWKSA9PiBuZXcgRGFmZkNhcnRTaGlwcGluZ0FkZHJlc3NVcGRhdGVTdWNjZXNzKHJlc3ApKSxcbiAgICAgICAgY2F0Y2hFcnJvcihlcnJvciA9PiBvZihuZXcgRGFmZkNhcnRTaGlwcGluZ0FkZHJlc3NVcGRhdGVGYWlsdXJlKHRoaXMuZXJyb3JNYXRjaGVyKGVycm9yKSkpKVxuICAgICAgKVxuICAgIClcbiAgKVxufVxuIl19