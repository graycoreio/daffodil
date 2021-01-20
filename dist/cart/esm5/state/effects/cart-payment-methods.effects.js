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
import { DaffCartPaymentMethodsDriver } from '@daffodil/cart/driver';
import { DaffCartPaymentMethodsActionTypes, DaffCartPaymentMethodsLoadSuccess, DaffCartPaymentMethodsLoadFailure, } from '../actions/public_api';
/**
 * @template T
 */
var DaffCartPaymentMethodsEffects = /** @class */ (function () {
    function DaffCartPaymentMethodsEffects(actions$, errorMatcher, driver, storage) {
        var _this = this;
        this.actions$ = actions$;
        this.errorMatcher = errorMatcher;
        this.driver = driver;
        this.storage = storage;
        this.list$ = this.actions$.pipe(ofType(DaffCartPaymentMethodsActionTypes.CartPaymentMethodsLoadAction), switchMap((/**
         * @param {?} action
         * @return {?}
         */
        function (action) {
            return _this.driver.list(_this.storage.getCartId()).pipe(map((/**
             * @param {?} resp
             * @return {?}
             */
            function (resp) { return new DaffCartPaymentMethodsLoadSuccess(resp); })), catchError((/**
             * @param {?} error
             * @return {?}
             */
            function (error) { return of(new DaffCartPaymentMethodsLoadFailure(_this.errorMatcher(error))); })));
        })));
    }
    DaffCartPaymentMethodsEffects.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    DaffCartPaymentMethodsEffects.ctorParameters = function () { return [
        { type: Actions },
        { type: Function, decorators: [{ type: Inject, args: [DAFF_CART_ERROR_MATCHER,] }] },
        { type: undefined, decorators: [{ type: Inject, args: [DaffCartPaymentMethodsDriver,] }] },
        { type: DaffCartStorageService }
    ]; };
    tslib_1.__decorate([
        Effect(),
        tslib_1.__metadata("design:type", Object)
    ], DaffCartPaymentMethodsEffects.prototype, "list$", void 0);
    return DaffCartPaymentMethodsEffects;
}());
export { DaffCartPaymentMethodsEffects };
if (false) {
    /** @type {?} */
    DaffCartPaymentMethodsEffects.prototype.list$;
    /**
     * @type {?}
     * @private
     */
    DaffCartPaymentMethodsEffects.prototype.actions$;
    /**
     * @type {?}
     * @private
     */
    DaffCartPaymentMethodsEffects.prototype.errorMatcher;
    /**
     * @type {?}
     * @private
     */
    DaffCartPaymentMethodsEffects.prototype.driver;
    /**
     * @type {?}
     * @private
     */
    DaffCartPaymentMethodsEffects.prototype.storage;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FydC1wYXltZW50LW1ldGhvZHMuZWZmZWN0cy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkYWZmb2RpbC9jYXJ0L3N0YXRlLyIsInNvdXJjZXMiOlsiZWZmZWN0cy9jYXJ0LXBheW1lbnQtbWV0aG9kcy5lZmZlY3RzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDbkQsT0FBTyxFQUFFLFNBQVMsRUFBRSxHQUFHLEVBQUUsVUFBVSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDNUQsT0FBTyxFQUFFLEVBQUUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUMxQixPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFeEQsT0FBTyxFQUF5QixzQkFBc0IsRUFBRSx1QkFBdUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3hHLE9BQU8sRUFBRSw0QkFBNEIsRUFBMEMsTUFBTSx1QkFBdUIsQ0FBQztBQUU3RyxPQUFPLEVBQ0wsaUNBQWlDLEVBRWpDLGlDQUFpQyxFQUNqQyxpQ0FBaUMsR0FDbEMsTUFBTSx1QkFBdUIsQ0FBQzs7OztBQUUvQjtJQUdFLHVDQUNVLFFBQWlCLEVBQ2dCLFlBQXNCLEVBQ2pCLE1BQWlELEVBQ3ZGLE9BQStCO1FBSnpDLGlCQUtNO1FBSkksYUFBUSxHQUFSLFFBQVEsQ0FBUztRQUNnQixpQkFBWSxHQUFaLFlBQVksQ0FBVTtRQUNqQixXQUFNLEdBQU4sTUFBTSxDQUEyQztRQUN2RixZQUFPLEdBQVAsT0FBTyxDQUF3QjtRQUl6QyxVQUFLLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQ3hCLE1BQU0sQ0FBQyxpQ0FBaUMsQ0FBQyw0QkFBNEIsQ0FBQyxFQUN0RSxTQUFTOzs7O1FBQUMsVUFBQyxNQUFrQztZQUMzQyxPQUFBLEtBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQzdDLEdBQUc7Ozs7WUFBQyxVQUFDLElBQVMsSUFBSyxPQUFBLElBQUksaUNBQWlDLENBQUMsSUFBSSxDQUFDLEVBQTNDLENBQTJDLEVBQUMsRUFDL0QsVUFBVTs7OztZQUFDLFVBQUEsS0FBSyxJQUFJLE9BQUEsRUFBRSxDQUFDLElBQUksaUNBQWlDLENBQUMsS0FBSSxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEVBQW5FLENBQW1FLEVBQUMsQ0FDekY7UUFIRCxDQUdDLEVBQ0YsQ0FDRixDQUFBO0lBWEksQ0FBQzs7Z0JBUlAsVUFBVTs7OztnQkFaRixPQUFPO2dCQWlCMkMsUUFBUSx1QkFBOUQsTUFBTSxTQUFDLHVCQUF1QjtnREFDOUIsTUFBTSxTQUFDLDRCQUE0QjtnQkFoQlIsc0JBQXNCOztJQXFCcEQ7UUFEQyxNQUFNLEVBQUU7O2dFQVNSO0lBQ0gsb0NBQUM7Q0FBQSxBQXBCRCxJQW9CQztTQW5CWSw2QkFBNkI7OztJQVN4Qyw4Q0FTQzs7Ozs7SUFmQyxpREFBeUI7Ozs7O0lBQ3pCLHFEQUErRDs7Ozs7SUFDL0QsK0NBQStGOzs7OztJQUMvRixnREFBdUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlLCBJbmplY3QgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IHN3aXRjaE1hcCwgbWFwLCBjYXRjaEVycm9yIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgb2YgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IEFjdGlvbnMsIEVmZmVjdCwgb2ZUeXBlIH0gZnJvbSAnQG5ncngvZWZmZWN0cyc7XG5cbmltcG9ydCB7IERhZmZDYXJ0UGF5bWVudE1ldGhvZCwgRGFmZkNhcnRTdG9yYWdlU2VydmljZSwgREFGRl9DQVJUX0VSUk9SX01BVENIRVIgfSBmcm9tICdAZGFmZm9kaWwvY2FydCc7XG5pbXBvcnQgeyBEYWZmQ2FydFBheW1lbnRNZXRob2RzRHJpdmVyLCBEYWZmQ2FydFBheW1lbnRNZXRob2RzU2VydmljZUludGVyZmFjZSB9IGZyb20gJ0BkYWZmb2RpbC9jYXJ0L2RyaXZlcic7XG5cbmltcG9ydCB7XG4gIERhZmZDYXJ0UGF5bWVudE1ldGhvZHNBY3Rpb25UeXBlcyxcbiAgRGFmZkNhcnRQYXltZW50TWV0aG9kc0xvYWQsXG4gIERhZmZDYXJ0UGF5bWVudE1ldGhvZHNMb2FkU3VjY2VzcyxcbiAgRGFmZkNhcnRQYXltZW50TWV0aG9kc0xvYWRGYWlsdXJlLFxufSBmcm9tICcuLi9hY3Rpb25zL3B1YmxpY19hcGknO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgRGFmZkNhcnRQYXltZW50TWV0aG9kc0VmZmVjdHM8VCBleHRlbmRzIERhZmZDYXJ0UGF5bWVudE1ldGhvZD4ge1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgYWN0aW9ucyQ6IEFjdGlvbnMsXG4gICAgQEluamVjdChEQUZGX0NBUlRfRVJST1JfTUFUQ0hFUikgcHJpdmF0ZSBlcnJvck1hdGNoZXI6IEZ1bmN0aW9uLFxuICAgIEBJbmplY3QoRGFmZkNhcnRQYXltZW50TWV0aG9kc0RyaXZlcikgcHJpdmF0ZSBkcml2ZXI6IERhZmZDYXJ0UGF5bWVudE1ldGhvZHNTZXJ2aWNlSW50ZXJmYWNlPFQ+LFxuICAgIHByaXZhdGUgc3RvcmFnZTogRGFmZkNhcnRTdG9yYWdlU2VydmljZVxuICAgICkge31cblxuICBARWZmZWN0KClcbiAgbGlzdCQgPSB0aGlzLmFjdGlvbnMkLnBpcGUoXG4gICAgb2ZUeXBlKERhZmZDYXJ0UGF5bWVudE1ldGhvZHNBY3Rpb25UeXBlcy5DYXJ0UGF5bWVudE1ldGhvZHNMb2FkQWN0aW9uKSxcbiAgICBzd2l0Y2hNYXAoKGFjdGlvbjogRGFmZkNhcnRQYXltZW50TWV0aG9kc0xvYWQpID0+XG4gICAgICB0aGlzLmRyaXZlci5saXN0KHRoaXMuc3RvcmFnZS5nZXRDYXJ0SWQoKSkucGlwZShcbiAgICAgICAgbWFwKChyZXNwOiBUW10pID0+IG5ldyBEYWZmQ2FydFBheW1lbnRNZXRob2RzTG9hZFN1Y2Nlc3MocmVzcCkpLFxuICAgICAgICBjYXRjaEVycm9yKGVycm9yID0+IG9mKG5ldyBEYWZmQ2FydFBheW1lbnRNZXRob2RzTG9hZEZhaWx1cmUodGhpcy5lcnJvck1hdGNoZXIoZXJyb3IpKSkpXG4gICAgICApXG4gICAgKVxuICApXG59XG4iXX0=