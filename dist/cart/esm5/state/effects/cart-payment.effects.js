/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable, Inject } from '@angular/core';
import { switchMap, map, catchError, mapTo } from 'rxjs/operators';
import { of } from 'rxjs';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { DaffCartStorageService, DAFF_CART_ERROR_MATCHER } from '@daffodil/cart';
import { DaffCartPaymentDriver } from '@daffodil/cart/driver';
import { DaffCartPaymentActionTypes, DaffCartPaymentLoadSuccess, DaffCartPaymentLoadFailure, DaffCartPaymentRemoveSuccess, DaffCartPaymentRemoveFailure, DaffCartPaymentUpdateSuccess, DaffCartPaymentUpdateFailure, DaffCartPaymentUpdateWithBillingSuccess, DaffCartPaymentUpdateWithBillingFailure, } from '../actions/public_api';
/**
 * @template T, V, R
 */
var DaffCartPaymentEffects = /** @class */ (function () {
    function DaffCartPaymentEffects(actions$, errorMatcher, driver, storage) {
        var _this = this;
        this.actions$ = actions$;
        this.errorMatcher = errorMatcher;
        this.driver = driver;
        this.storage = storage;
        this.get$ = this.actions$.pipe(ofType(DaffCartPaymentActionTypes.CartPaymentLoadAction), switchMap((/**
         * @param {?} action
         * @return {?}
         */
        function (action) {
            return _this.driver.get(_this.storage.getCartId()).pipe(map((/**
             * @param {?} resp
             * @return {?}
             */
            function (resp) { return new DaffCartPaymentLoadSuccess(resp); })), catchError((/**
             * @param {?} error
             * @return {?}
             */
            function (error) { return of(new DaffCartPaymentLoadFailure(_this.errorMatcher(error))); })));
        })));
        this.update$ = this.actions$.pipe(ofType(DaffCartPaymentActionTypes.CartPaymentUpdateAction), switchMap((/**
         * @param {?} action
         * @return {?}
         */
        function (action) {
            return _this.driver.update(_this.storage.getCartId(), action.payload).pipe(map((/**
             * @param {?} resp
             * @return {?}
             */
            function (resp) { return new DaffCartPaymentUpdateSuccess(resp); })), catchError((/**
             * @param {?} error
             * @return {?}
             */
            function (error) { return of(new DaffCartPaymentUpdateFailure(_this.errorMatcher(error))); })));
        })));
        this.updateWithBilling$ = this.actions$.pipe(ofType(DaffCartPaymentActionTypes.CartPaymentUpdateWithBillingAction), switchMap((/**
         * @param {?} action
         * @return {?}
         */
        function (action) {
            return _this.driver.updateWithBilling(_this.storage.getCartId(), action.payment, action.address).pipe(map((/**
             * @param {?} resp
             * @return {?}
             */
            function (resp) { return new DaffCartPaymentUpdateWithBillingSuccess(resp); })), catchError((/**
             * @param {?} error
             * @return {?}
             */
            function (error) { return of(new DaffCartPaymentUpdateWithBillingFailure(_this.errorMatcher(error))); })));
        })));
        this.remove$ = this.actions$.pipe(ofType(DaffCartPaymentActionTypes.CartPaymentRemoveAction), switchMap((/**
         * @param {?} action
         * @return {?}
         */
        function (action) {
            return _this.driver.remove(_this.storage.getCartId()).pipe(mapTo(new DaffCartPaymentRemoveSuccess()), catchError((/**
             * @param {?} error
             * @return {?}
             */
            function (error) { return of(new DaffCartPaymentRemoveFailure(_this.errorMatcher(error))); })));
        })));
    }
    DaffCartPaymentEffects.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    DaffCartPaymentEffects.ctorParameters = function () { return [
        { type: Actions },
        { type: Function, decorators: [{ type: Inject, args: [DAFF_CART_ERROR_MATCHER,] }] },
        { type: undefined, decorators: [{ type: Inject, args: [DaffCartPaymentDriver,] }] },
        { type: DaffCartStorageService }
    ]; };
    tslib_1.__decorate([
        Effect(),
        tslib_1.__metadata("design:type", Object)
    ], DaffCartPaymentEffects.prototype, "get$", void 0);
    tslib_1.__decorate([
        Effect(),
        tslib_1.__metadata("design:type", Object)
    ], DaffCartPaymentEffects.prototype, "update$", void 0);
    tslib_1.__decorate([
        Effect(),
        tslib_1.__metadata("design:type", Object)
    ], DaffCartPaymentEffects.prototype, "updateWithBilling$", void 0);
    tslib_1.__decorate([
        Effect(),
        tslib_1.__metadata("design:type", Object)
    ], DaffCartPaymentEffects.prototype, "remove$", void 0);
    return DaffCartPaymentEffects;
}());
export { DaffCartPaymentEffects };
if (false) {
    /** @type {?} */
    DaffCartPaymentEffects.prototype.get$;
    /** @type {?} */
    DaffCartPaymentEffects.prototype.update$;
    /** @type {?} */
    DaffCartPaymentEffects.prototype.updateWithBilling$;
    /** @type {?} */
    DaffCartPaymentEffects.prototype.remove$;
    /**
     * @type {?}
     * @private
     */
    DaffCartPaymentEffects.prototype.actions$;
    /**
     * @type {?}
     * @private
     */
    DaffCartPaymentEffects.prototype.errorMatcher;
    /**
     * @type {?}
     * @private
     */
    DaffCartPaymentEffects.prototype.driver;
    /**
     * @type {?}
     * @private
     */
    DaffCartPaymentEffects.prototype.storage;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FydC1wYXltZW50LmVmZmVjdHMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGFmZm9kaWwvY2FydC9zdGF0ZS8iLCJzb3VyY2VzIjpbImVmZmVjdHMvY2FydC1wYXltZW50LmVmZmVjdHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNuRCxPQUFPLEVBQUUsU0FBUyxFQUFFLEdBQUcsRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDbkUsT0FBTyxFQUFFLEVBQUUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUMxQixPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFeEQsT0FBTyxFQUFvRCxzQkFBc0IsRUFBRSx1QkFBdUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ25JLE9BQU8sRUFBRSxxQkFBcUIsRUFBbUMsTUFBTSx1QkFBdUIsQ0FBQztBQUUvRixPQUFPLEVBQ0wsMEJBQTBCLEVBRTFCLDBCQUEwQixFQUMxQiwwQkFBMEIsRUFFMUIsNEJBQTRCLEVBQzVCLDRCQUE0QixFQUU1Qiw0QkFBNEIsRUFDNUIsNEJBQTRCLEVBRTVCLHVDQUF1QyxFQUN2Qyx1Q0FBdUMsR0FDeEMsTUFBTSx1QkFBdUIsQ0FBQzs7OztBQUUvQjtJQU1FLGdDQUNVLFFBQWlCLEVBQ2dCLFlBQXNCLEVBQ3hCLE1BQWdELEVBQy9FLE9BQStCO1FBSnpDLGlCQUtJO1FBSk0sYUFBUSxHQUFSLFFBQVEsQ0FBUztRQUNnQixpQkFBWSxHQUFaLFlBQVksQ0FBVTtRQUN4QixXQUFNLEdBQU4sTUFBTSxDQUEwQztRQUMvRSxZQUFPLEdBQVAsT0FBTyxDQUF3QjtRQUl6QyxTQUFJLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQ3ZCLE1BQU0sQ0FBQywwQkFBMEIsQ0FBQyxxQkFBcUIsQ0FB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TUFBTSxFQUFFOzt3REFTUjtJQUdEO1FBREMsTUFBTSxFQUFFOzsyREFTUjtJQUdEO1FBREMsTUFBTSxFQUFFOztzRUFTUjtJQUdEO1FBREMsTUFBTSxFQUFFOzsyREFTUjtJQUNILDZCQUFDO0NBQUEsQUF4REQsSUF3REM7U0F2RFksc0JBQXNCOzs7SUFZakMsc0NBU0M7O0lBRUQseUNBU0M7O0lBRUQsb0RBU0M7O0lBRUQseUNBU0M7Ozs7O0lBaERDLDBDQUF5Qjs7Ozs7SUFDekIsOENBQStEOzs7OztJQUMvRCx3Q0FBdUY7Ozs7O0lBQ3ZGLHlDQUF1QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUsIEluamVjdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgc3dpdGNoTWFwLCBtYXAsIGNhdGNoRXJyb3IsIG1hcFRvIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgb2YgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IEFjdGlvbnMsIEVmZmVjdCwgb2ZUeXBlIH0gZnJvbSAnQG5ncngvZWZmZWN0cyc7XG5cbmltcG9ydCB7IERhZmZDYXJ0UGF5bWVudE1ldGhvZCwgRGFmZkNhcnQsIERhZmZDYXJ0QWRkcmVzcywgRGFmZkNhcnRTdG9yYWdlU2VydmljZSwgREFGRl9DQVJUX0VSUk9SX01BVENIRVIgfSBmcm9tICdAZGFmZm9kaWwvY2FydCc7XG5pbXBvcnQgeyBEYWZmQ2FydFBheW1lbnREcml2ZXIsIERhZmZDYXJ0UGF5bWVudFNlcnZpY2VJbnRlcmZhY2UgfSBmcm9tICdAZGFmZm9kaWwvY2FydC9kcml2ZXInO1xuXG5pbXBvcnQge1xuICBEYWZmQ2FydFBheW1lbnRBY3Rpb25UeXBlcyxcbiAgRGFmZkNhcnRQYXltZW50TG9hZCxcbiAgRGFmZkNhcnRQYXltZW50TG9hZFN1Y2Nlc3MsXG4gIERhZmZDYXJ0UGF5bWVudExvYWRGYWlsdXJlLFxuICBEYWZmQ2FydFBheW1lbnRSZW1vdmUsXG4gIERhZmZDYXJ0UGF5bWVudFJlbW92ZVN1Y2Nlc3MsXG4gIERhZmZDYXJ0UGF5bWVudFJlbW92ZUZhaWx1cmUsXG4gIERhZmZDYXJ0UGF5bWVudFVwZGF0ZSxcbiAgRGFmZkNhcnRQYXltZW50VXBkYXRlU3VjY2VzcyxcbiAgRGFmZkNhcnRQYXltZW50VXBkYXRlRmFpbHVyZSxcbiAgRGFmZkNhcnRQYXltZW50VXBkYXRlV2l0aEJpbGxpbmcsXG4gIERhZmZDYXJ0UGF5bWVudFVwZGF0ZVdpdGhCaWxsaW5nU3VjY2VzcyxcbiAgRGFmZkNhcnRQYXltZW50VXBkYXRlV2l0aEJpbGxpbmdGYWlsdXJlLFxufSBmcm9tICcuLi9hY3Rpb25zL3B1YmxpY19hcGknO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgRGFmZkNhcnRQYXltZW50RWZmZWN0czxcbiAgVCBleHRlbmRzIERhZmZDYXJ0UGF5bWVudE1ldGhvZCA9IERhZmZDYXJ0UGF5bWVudE1ldGhvZCxcbiAgViBleHRlbmRzIERhZmZDYXJ0ID0gRGFmZkNhcnQsXG4gIFIgZXh0ZW5kcyBEYWZmQ2FydEFkZHJlc3MgPSBEYWZmQ2FydEFkZHJlc3MsXG4+IHtcbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBhY3Rpb25zJDogQWN0aW9ucyxcbiAgICBASW5qZWN0KERBRkZfQ0FSVF9FUlJPUl9NQVRDSEVSKSBwcml2YXRlIGVycm9yTWF0Y2hlcjogRnVuY3Rpb24sXG4gICAgQEluamVjdChEYWZmQ2FydFBheW1lbnREcml2ZXIpIHByaXZhdGUgZHJpdmVyOiBEYWZmQ2FydFBheW1lbnRTZXJ2aWNlSW50ZXJmYWNlPFQsIFYsIFI+LFxuICAgIHByaXZhdGUgc3RvcmFnZTogRGFmZkNhcnRTdG9yYWdlU2VydmljZVxuICApIHt9XG5cbiAgQEVmZmVjdCgpXG4gIGdldCQgPSB0aGlzLmFjdGlvbnMkLnBpcGUoXG4gICAgb2ZUeXBlKERhZmZDYXJ0UGF5bWVudEFjdGlvblR5cGVzLkNhcnRQYXltZW50TG9hZEFjdGlvbiksXG4gICAgc3dpdGNoTWFwKChhY3Rpb246IERhZmZDYXJ0UGF5bWVudExvYWQpID0+XG4gICAgICB0aGlzLmRyaXZlci5nZXQodGhpcy5zdG9yYWdlLmdldENhcnRJZCgpKS5waXBlKFxuICAgICAgICBtYXAoKHJlc3A6IFQpID0+IG5ldyBEYWZmQ2FydFBheW1lbnRMb2FkU3VjY2VzcyhyZXNwKSksXG4gICAgICAgIGNhdGNoRXJyb3IoZXJyb3IgPT4gb2YobmV3IERhZmZDYXJ0UGF5bWVudExvYWRGYWlsdXJlKHRoaXMuZXJyb3JNYXRjaGVyKGVycm9yKSkpKVxuICAgICAgKVxuICAgIClcbiAgKVxuXG4gIEBFZmZlY3QoKVxuICB1cGRhdGUkID0gdGhpcy5hY3Rpb25zJC5waXBlKFxuICAgIG9mVHlwZShEYWZmQ2FydFBheW1lbnRBY3Rpb25UeXBlcy5DYXJ0UGF5bWVudFVwZGF0ZUFjdGlvbiksXG4gICAgc3dpdGNoTWFwKChhY3Rpb246IERhZmZDYXJ0UGF5bWVudFVwZGF0ZTxUPikgPT5cbiAgICAgIHRoaXMuZHJpdmVyLnVwZGF0ZSh0aGlzLnN0b3JhZ2UuZ2V0Q2FydElkKCksIGFjdGlvbi5wYXlsb2FkKS5waXBlKFxuICAgICAgICBtYXAoKHJlc3A6IFYpID0+IG5ldyBEYWZmQ2FydFBheW1lbnRVcGRhdGVTdWNjZXNzKHJlc3ApKSxcbiAgICAgICAgY2F0Y2hFcnJvcihlcnJvciA9PiBvZihuZXcgRGFmZkNhcnRQYXltZW50VXBkYXRlRmFpbHVyZSh0aGlzLmVycm9yTWF0Y2hlcihlcnJvcikpKSlcbiAgICAgIClcbiAgICApXG4gIClcblxuICBARWZmZWN0KClcbiAgdXBkYXRlV2l0aEJpbGxpbmckID0gdGhpcy5hY3Rpb25zJC5waXBlKFxuICAgIG9mVHlwZShEYWZmQ2FydFBheW1lbnRBY3Rpb25UeXBlcy5DYXJ0UGF5bWVudFVwZGF0ZVdpdGhCaWxsaW5nQWN0aW9uKSxcbiAgICBzd2l0Y2hNYXAoKGFjdGlvbjogRGFmZkNhcnRQYXltZW50VXBkYXRlV2l0aEJpbGxpbmc8VCwgUj4pID0+XG4gICAgICB0aGlzLmRyaXZlci51cGRhdGVXaXRoQmlsbGluZyh0aGlzLnN0b3JhZ2UuZ2V0Q2FydElkKCksIGFjdGlvbi5wYXltZW50LCBhY3Rpb24uYWRkcmVzcykucGlwZShcbiAgICAgICAgbWFwKHJlc3AgPT4gbmV3IERhZmZDYXJ0UGF5bWVudFVwZGF0ZVdpdGhCaWxsaW5nU3VjY2VzcyhyZXNwKSksXG4gICAgICAgIGNhdGNoRXJyb3IoZXJyb3IgPT4gb2YobmV3IERhZmZDYXJ0UGF5bWVudFVwZGF0ZVdpdGhCaWxsaW5nRmFpbHVyZSh0aGlzLmVycm9yTWF0Y2hlcihlcnJvcikpKSlcbiAgICAgIClcbiAgICApXG4gIClcblxuICBARWZmZWN0KClcbiAgcmVtb3ZlJCA9IHRoaXMuYWN0aW9ucyQucGlwZShcbiAgICBvZlR5cGUoRGFmZkNhcnRQYXltZW50QWN0aW9uVHlwZXMuQ2FydFBheW1lbnRSZW1vdmVBY3Rpb24pLFxuICAgIHN3aXRjaE1hcCgoYWN0aW9uOiBEYWZmQ2FydFBheW1lbnRSZW1vdmUpID0+XG4gICAgICB0aGlzLmRyaXZlci5yZW1vdmUodGhpcy5zdG9yYWdlLmdldENhcnRJZCgpKS5waXBlKFxuICAgICAgICBtYXBUbyhuZXcgRGFmZkNhcnRQYXltZW50UmVtb3ZlU3VjY2VzcygpKSxcbiAgICAgICAgY2F0Y2hFcnJvcihlcnJvciA9PiBvZihuZXcgRGFmZkNhcnRQYXltZW50UmVtb3ZlRmFpbHVyZSh0aGlzLmVycm9yTWF0Y2hlcihlcnJvcikpKSlcbiAgICAgIClcbiAgICApXG4gIClcbn1cbiJdfQ==