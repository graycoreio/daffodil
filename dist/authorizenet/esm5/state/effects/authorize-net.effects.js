/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable, Inject } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { switchMap, catchError, map, tap, mapTo } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { DaffCartPaymentActionTypes, DaffCartPaymentUpdateWithBilling } from '@daffodil/cart/state';
import { backoff } from '@daffodil/core';
import { substream } from '@daffodil/core/state';
import { DaffAcceptJsLoadingService, DAFF_AUTHORIZENET_ERROR_MATCHER } from '@daffodil/authorizenet';
import { DaffAuthorizeNetDriver, DaffAuthorizeNetPaymentId } from '@daffodil/authorizenet/driver';
import { DaffAuthorizeNetActionTypes, DaffAuthorizeNetUpdatePaymentFailure, DaffAuthorizeNetUpdatePaymentSuccess, DaffLoadAcceptJsFailure, DaffLoadAcceptJsSuccess } from '../actions/authorizenet.actions';
/**
 * @template T
 */
var DaffAuthorizeNetEffects = /** @class */ (function () {
    function DaffAuthorizeNetEffects(actions$, driver, authorizeNetPaymentId, errorMatcher, acceptJsLoadingService) {
        var _this = this;
        this.actions$ = actions$;
        this.driver = driver;
        this.authorizeNetPaymentId = authorizeNetPaymentId;
        this.errorMatcher = errorMatcher;
        this.acceptJsLoadingService = acceptJsLoadingService;
        this.updatePayment$ = this.actions$.pipe(ofType(DaffAuthorizeNetActionTypes.UpdatePaymentAction), switchMap((/**
         * @param {?} action
         * @return {?}
         */
        function (action) {
            return _this.driver.generateToken(action.tokenRequest).pipe(map((/**
             * @param {?} resp
             * @return {?}
             */
            function (resp) { return new DaffCartPaymentUpdateWithBilling({
                method: _this.authorizeNetPaymentId,
                payment_info: resp
            }, action.address); })), catchError((/**
             * @param {?} error
             * @return {?}
             */
            function (error) {
                return of(new DaffAuthorizeNetUpdatePaymentFailure(_this.errorMatcher(error)));
            })));
        })));
        this.updatePaymentSuccessSubstream$ = this.actions$.pipe(substream([DaffAuthorizeNetActionTypes.UpdatePaymentAction, DaffCartPaymentActionTypes.CartPaymentUpdateWithBillingSuccessAction], DaffCartPaymentActionTypes.CartPaymentUpdateWithBillingFailureAction), mapTo(new DaffAuthorizeNetUpdatePaymentSuccess()));
        this.updatePaymentFailureSubstream$ = this.actions$.pipe(substream([DaffAuthorizeNetActionTypes.UpdatePaymentAction, DaffCartPaymentActionTypes.CartPaymentUpdateWithBillingFailureAction], DaffCartPaymentActionTypes.CartPaymentUpdateWithBillingSuccessAction), map((/**
         * @param {?} __0
         * @return {?}
         */
        function (_a) {
            var _b = tslib_1.__read(_a, 2), updatePaymentAction = _b[0], updatePaymentFailureAction = _b[1];
            return new DaffAuthorizeNetUpdatePaymentFailure(_this.errorMatcher(updatePaymentFailureAction.payload));
        })));
        this.loadAcceptJs$ = (/**
         * @param {?=} maxTries
         * @param {?=} ms
         * @return {?}
         */
        function (maxTries, ms) {
            if (maxTries === void 0) { maxTries = 10; }
            if (ms === void 0) { ms = 10; }
            return _this.actions$.pipe(ofType(DaffAuthorizeNetActionTypes.LoadAcceptJsAction), tap((/**
             * @param {?} action
             * @return {?}
             */
            function (action) { return _this.acceptJsLoadingService.load(); })), switchMap((/**
             * @return {?}
             */
            function () { return of(null).pipe(map((/**
             * @return {?}
             */
            function () { return _this.acceptJsLoadingService.getAccept(); })), backoff(maxTries, ms), mapTo(new DaffLoadAcceptJsSuccess()), catchError((/**
             * @param {?} error
             * @return {?}
             */
            function (error) { return of(new DaffLoadAcceptJsFailure(_this.errorMatcher(error))); }))); })));
        });
    }
    DaffAuthorizeNetEffects.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    DaffAuthorizeNetEffects.ctorParameters = function () { return [
        { type: Actions },
        { type: undefined, decorators: [{ type: Inject, args: [DaffAuthorizeNetDriver,] }] },
        { type: String, decorators: [{ type: Inject, args: [DaffAuthorizeNetPaymentId,] }] },
        { type: Function, decorators: [{ type: Inject, args: [DAFF_AUTHORIZENET_ERROR_MATCHER,] }] },
        { type: DaffAcceptJsLoadingService }
    ]; };
    tslib_1.__decorate([
        Effect(),
        tslib_1.__metadata("design:type", Observable)
    ], DaffAuthorizeNetEffects.prototype, "updatePayment$", void 0);
    tslib_1.__decorate([
        Effect(),
        tslib_1.__metadata("design:type", Observable)
    ], DaffAuthorizeNetEffects.prototype, "updatePaymentSuccessSubstream$", void 0);
    tslib_1.__decorate([
        Effect(),
        tslib_1.__metadata("design:type", Observable)
    ], DaffAuthorizeNetEffects.prototype, "updatePaymentFailureSubstream$", void 0);
    tslib_1.__decorate([
        Effect(),
        tslib_1.__metadata("design:type", Object)
    ], DaffAuthorizeNetEffects.prototype, "loadAcceptJs$", void 0);
    return DaffAuthorizeNetEffects;
}());
export { DaffAuthorizeNetEffects };
if (false) {
    /** @type {?} */
    DaffAuthorizeNetEffects.prototype.updatePayment$;
    /** @type {?} */
    DaffAuthorizeNetEffects.prototype.updatePaymentSuccessSubstream$;
    /** @type {?} */
    DaffAuthorizeNetEffects.prototype.updatePaymentFailureSubstream$;
    /** @type {?} */
    DaffAuthorizeNetEffects.prototype.loadAcceptJs$;
    /**
     * @type {?}
     * @private
     */
    DaffAuthorizeNetEffects.prototype.actions$;
    /**
     * @type {?}
     * @private
     */
    DaffAuthorizeNetEffects.prototype.driver;
    /**
     * @type {?}
     * @private
     */
    DaffAuthorizeNetEffects.prototype.authorizeNetPaymentId;
    /**
     * @type {?}
     * @private
     */
    DaffAuthorizeNetEffects.prototype.errorMatcher;
    /**
     * @type {?}
     * @private
     */
    DaffAuthorizeNetEffects.prototype.acceptJsLoadingService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aG9yaXplLW5ldC5lZmZlY3RzLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRhZmZvZGlsL2F1dGhvcml6ZW5ldC9zdGF0ZS8iLCJzb3VyY2VzIjpbImVmZmVjdHMvYXV0aG9yaXplLW5ldC5lZmZlY3RzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDbkQsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3hELE9BQU8sRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsS0FBSyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDeEUsT0FBTyxFQUFFLFVBQVUsRUFBRSxFQUFFLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFFdEMsT0FBTyxFQUFFLDBCQUEwQixFQUFFLGdDQUFnQyxFQUEyQyxNQUFNLHNCQUFzQixDQUFDO0FBQzdJLE9BQU8sRUFBRSxPQUFPLEVBQWEsTUFBTSxnQkFBZ0IsQ0FBQztBQUNwRCxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDakQsT0FBTyxFQUFFLDBCQUEwQixFQUFnQywrQkFBK0IsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ25JLE9BQU8sRUFBRSxzQkFBc0IsRUFBMkIseUJBQXlCLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQUUzSCxPQUFPLEVBQ04sMkJBQTJCLEVBRTNCLG9DQUFvQyxFQUVwQyxvQ0FBb0MsRUFDcEMsdUJBQXVCLEVBQ3ZCLHVCQUF1QixFQUN2QixNQUFNLGlDQUFpQyxDQUFDOzs7O0FBRXpDO0lBR0UsaUNBQ1UsUUFBaUIsRUFDYSxNQUFrQyxFQUMvQixxQkFBNkIsRUFDdkIsWUFBc0IsRUFDL0Qsc0JBQWtEO1FBTDFELGlCQU1HO1FBTE8sYUFBUSxHQUFSLFFBQVEsQ0FBUztRQUNhLFdBQU0sR0FB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QUFNLFNBQUMseUJBQXlCO2dCQUM4QixRQUFRLHVCQUF0RSxNQUFNLFNBQUMsK0JBQStCO2dCQXBCaEMsMEJBQTBCOztJQXlCakM7UUFEQyxNQUFNLEVBQUU7MENBQ1EsVUFBVTttRUFnQjNCO0lBR0Q7UUFEQyxNQUFNLEVBQUU7MENBQ3dCLFVBQVU7bUZBTTFDO0lBR0Q7UUFEQyxNQUFNLEVBQUU7MENBQ3dCLFVBQVU7bUZBUTFDO0lBR0E7UUFEQSxNQUFNLEVBQUU7O2tFQVVSO0lBQ0YsOEJBQUM7Q0FBQSxBQTdERCxJQTZEQztTQTVEWSx1QkFBdUI7OztJQVVsQyxpREFpQkE7O0lBRUQsaUVBT0M7O0lBRUQsaUVBU0M7O0lBRUQsZ0RBVUM7Ozs7O0lBeERFLDJDQUF5Qjs7Ozs7SUFDM0IseUNBQTBFOzs7OztJQUMxRSx3REFBd0U7Ozs7O0lBQ3hFLCtDQUF1RTs7Ozs7SUFDdkUseURBQTBEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSwgSW5qZWN0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBY3Rpb25zLCBFZmZlY3QsIG9mVHlwZSB9IGZyb20gJ0BuZ3J4L2VmZmVjdHMnO1xuaW1wb3J0IHsgc3dpdGNoTWFwLCBjYXRjaEVycm9yLCBtYXAsIHRhcCwgbWFwVG8gfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBvZiB9IGZyb20gJ3J4anMnO1xuXG5pbXBvcnQgeyBEYWZmQ2FydFBheW1lbnRBY3Rpb25UeXBlcywgRGFmZkNhcnRQYXltZW50VXBkYXRlV2l0aEJpbGxpbmcsIERhZmZDYXJ0UGF5bWVudFVwZGF0ZVdpdGhCaWxsaW5nRmFpbHVyZSB9IGZyb20gJ0BkYWZmb2RpbC9jYXJ0L3N0YXRlJztcbmltcG9ydCB7IGJhY2tvZmYsIERhZmZFcnJvciB9IGZyb20gJ0BkYWZmb2RpbC9jb3JlJztcbmltcG9ydCB7IHN1YnN0cmVhbSB9IGZyb20gJ0BkYWZmb2RpbC9jb3JlL3N0YXRlJztcbmltcG9ydCB7IERhZmZBY2NlcHRKc0xvYWRpbmdTZXJ2aWNlLCBEYWZmQXV0aG9yaXplTmV0VG9rZW5SZXF1ZXN0LCBEQUZGX0FVVEhPUklaRU5FVF9FUlJPUl9NQVRDSEVSIH0gZnJvbSAnQGRhZmZvZGlsL2F1dGhvcml6ZW5ldCc7XG5pbXBvcnQgeyBEYWZmQXV0aG9yaXplTmV0RHJpdmVyLCBEYWZmQXV0aG9yaXplTmV0U2VydmljZSwgRGFmZkF1dGhvcml6ZU5ldFBheW1lbnRJZCB9IGZyb20gJ0BkYWZmb2RpbC9hdXRob3JpemVuZXQvZHJpdmVyJztcblxuaW1wb3J0IHtcblx0RGFmZkF1dGhvcml6ZU5ldEFjdGlvblR5cGVzLFxuXHREYWZmQXV0aG9yaXplTmV0VXBkYXRlUGF5bWVudCxcblx0RGFmZkF1dGhvcml6ZU5ldFVwZGF0ZVBheW1lbnRGYWlsdXJlLFxuXHREYWZmTG9hZEFjY2VwdEpzLFxuXHREYWZmQXV0aG9yaXplTmV0VXBkYXRlUGF5bWVudFN1Y2Nlc3MsXG5cdERhZmZMb2FkQWNjZXB0SnNGYWlsdXJlLFxuXHREYWZmTG9hZEFjY2VwdEpzU3VjY2Vzc1xufSBmcm9tICcuLi9hY3Rpb25zL2F1dGhvcml6ZW5ldC5hY3Rpb25zJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIERhZmZBdXRob3JpemVOZXRFZmZlY3RzPFQgZXh0ZW5kcyBEYWZmQXV0aG9yaXplTmV0VG9rZW5SZXF1ZXN0ID0gRGFmZkF1dGhvcml6ZU5ldFRva2VuUmVxdWVzdD4ge1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgYWN0aW9ucyQ6IEFjdGlvbnMsXG5cdFx0QEluamVjdChEYWZmQXV0aG9yaXplTmV0RHJpdmVyKSBwcml2YXRlIGRyaXZlcjogRGFmZkF1dGhvcml6ZU5ldFNlcnZpY2U8VD4sXG5cdFx0QEluamVjdChEYWZmQXV0aG9yaXplTmV0UGF5bWVudElkKSBwcml2YXRlIGF1dGhvcml6ZU5ldFBheW1lbnRJZDogc3RyaW5nLFxuXHRcdEBJbmplY3QoREFGRl9BVVRIT1JJWkVORVRfRVJST1JfTUFUQ0hFUikgcHJpdmF0ZSBlcnJvck1hdGNoZXI6IEZ1bmN0aW9uLFxuXHRcdHByaXZhdGUgYWNjZXB0SnNMb2FkaW5nU2VydmljZTogRGFmZkFjY2VwdEpzTG9hZGluZ1NlcnZpY2Vcblx0KSB7fVxuXG4gIEBFZmZlY3QoKVxuICB1cGRhdGVQYXltZW50JCA6IE9ic2VydmFibGU8YW55PiA9IHRoaXMuYWN0aW9ucyQucGlwZShcblx0XHRvZlR5cGUoRGFmZkF1dGhvcml6ZU5ldEFjdGlvblR5cGVzLlVwZGF0ZVBheW1lbnRBY3Rpb24pLFxuXHRcdHN3aXRjaE1hcCgoYWN0aW9uOiBEYWZmQXV0aG9yaXplTmV0VXBkYXRlUGF5bWVudDxUPikgPT5cblx0XHRcdHRoaXMuZHJpdmVyLmdlbmVyYXRlVG9rZW4oYWN0aW9uLnRva2VuUmVxdWVzdCkucGlwZShcblx0XHRcdFx0bWFwKHJlc3AgPT4gbmV3IERhZmZDYXJ0UGF5bWVudFVwZGF0ZVdpdGhCaWxsaW5nKFxuXHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdG1ldGhvZDogdGhpcy5hdXRob3JpemVOZXRQYXltZW50SWQsXG5cdFx0XHRcdFx0XHRwYXltZW50X2luZm86IHJlc3Bcblx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdGFjdGlvbi5hZGRyZXNzXG5cdFx0XHRcdCkpLFxuICAgICAgICBjYXRjaEVycm9yKChlcnJvcjogRGFmZkVycm9yKSA9PlxuICAgICAgICAgIG9mKG5ldyBEYWZmQXV0aG9yaXplTmV0VXBkYXRlUGF5bWVudEZhaWx1cmUodGhpcy5lcnJvck1hdGNoZXIoZXJyb3IpKSlcbiAgICAgICAgKVxuXHRcdFx0KVxuXHRcdClcblx0KVxuXG5cdEBFZmZlY3QoKVxuXHR1cGRhdGVQYXltZW50U3VjY2Vzc1N1YnN0cmVhbSQgOiBPYnNlcnZhYmxlPGFueT4gPSB0aGlzLmFjdGlvbnMkLnBpcGUoXG5cdFx0c3Vic3RyZWFtKFxuXHRcdFx0W0RhZmZBdXRob3JpemVOZXRBY3Rpb25UeXBlcy5VcGRhdGVQYXltZW50QWN0aW9uLCBEYWZmQ2FydFBheW1lbnRBY3Rpb25UeXBlcy5DYXJ0UGF5bWVudFVwZGF0ZVdpdGhCaWxsaW5nU3VjY2Vzc0FjdGlvbl0sXG5cdFx0XHREYWZmQ2FydFBheW1lbnRBY3Rpb25UeXBlcy5DYXJ0UGF5bWVudFVwZGF0ZVdpdGhCaWxsaW5nRmFpbHVyZUFjdGlvblxuXHRcdCksXG5cdFx0bWFwVG8obmV3IERhZmZBdXRob3JpemVOZXRVcGRhdGVQYXltZW50U3VjY2VzcygpKVxuXHQpXG5cblx0QEVmZmVjdCgpXG5cdHVwZGF0ZVBheW1lbnRGYWlsdXJlU3Vic3RyZWFtJCA6IE9ic2VydmFibGU8YW55PiA9IHRoaXMuYWN0aW9ucyQucGlwZShcblx0XHRzdWJzdHJlYW0oXG5cdFx0XHRbRGFmZkF1dGhvcml6ZU5ldEFjdGlvblR5cGVzLlVwZGF0ZVBheW1lbnRBY3Rpb24sIERhZmZDYXJ0UGF5bWVudEFjdGlvblR5cGVzLkNhcnRQYXltZW50VXBkYXRlV2l0aEJpbGxpbmdGYWlsdXJlQWN0aW9uXSxcblx0XHRcdERhZmZDYXJ0UGF5bWVudEFjdGlvblR5cGVzLkNhcnRQYXltZW50VXBkYXRlV2l0aEJpbGxpbmdTdWNjZXNzQWN0aW9uXG5cdFx0KSxcbiAgICBtYXAoKFt1cGRhdGVQYXltZW50QWN0aW9uLCB1cGRhdGVQYXltZW50RmFpbHVyZUFjdGlvbl06IFtEYWZmQXV0aG9yaXplTmV0VXBkYXRlUGF5bWVudCwgRGFmZkNhcnRQYXltZW50VXBkYXRlV2l0aEJpbGxpbmdGYWlsdXJlXSkgPT5cbiAgICAgIG5ldyBEYWZmQXV0aG9yaXplTmV0VXBkYXRlUGF5bWVudEZhaWx1cmUodGhpcy5lcnJvck1hdGNoZXIodXBkYXRlUGF5bWVudEZhaWx1cmVBY3Rpb24ucGF5bG9hZCkpXG4gICAgKVxuXHQpXG5cblx0QEVmZmVjdCgpXG4gIGxvYWRBY2NlcHRKcyQgPSAobWF4VHJpZXMgPSAxMCwgbXMgPSAxMCk6IE9ic2VydmFibGU8YW55PiA9PiB0aGlzLmFjdGlvbnMkLnBpcGUoXG4gICAgb2ZUeXBlKERhZmZBdXRob3JpemVOZXRBY3Rpb25UeXBlcy5Mb2FkQWNjZXB0SnNBY3Rpb24pLFxuXHRcdHRhcCgoYWN0aW9uOiBEYWZmTG9hZEFjY2VwdEpzKSA9PiB0aGlzLmFjY2VwdEpzTG9hZGluZ1NlcnZpY2UubG9hZCgpKSxcblx0XHRzd2l0Y2hNYXAoKCkgPT4gb2YobnVsbCkucGlwZShcblx0XHRcdG1hcCgoKSA9PiB0aGlzLmFjY2VwdEpzTG9hZGluZ1NlcnZpY2UuZ2V0QWNjZXB0KCkpLFxuXHRcdFx0YmFja29mZihtYXhUcmllcywgbXMpLFxuXHRcdFx0bWFwVG8obmV3IERhZmZMb2FkQWNjZXB0SnNTdWNjZXNzKCkpLFxuXHRcdFx0Y2F0Y2hFcnJvcigoZXJyb3I6IERhZmZFcnJvcikgPT4gb2YobmV3IERhZmZMb2FkQWNjZXB0SnNGYWlsdXJlKHRoaXMuZXJyb3JNYXRjaGVyKGVycm9yKSkpKVxuXHRcdCkpXG5cdClcbn1cbiJdfQ==