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
export class DaffAuthorizeNetEffects {
    /**
     * @param {?} actions$
     * @param {?} driver
     * @param {?} authorizeNetPaymentId
     * @param {?} errorMatcher
     * @param {?} acceptJsLoadingService
     */
    constructor(actions$, driver, authorizeNetPaymentId, errorMatcher, acceptJsLoadingService) {
        this.actions$ = actions$;
        this.driver = driver;
        this.authorizeNetPaymentId = authorizeNetPaymentId;
        this.errorMatcher = errorMatcher;
        this.acceptJsLoadingService = acceptJsLoadingService;
        this.updatePayment$ = this.actions$.pipe(ofType(DaffAuthorizeNetActionTypes.UpdatePaymentAction), switchMap((/**
         * @param {?} action
         * @return {?}
         */
        (action) => this.driver.generateToken(action.tokenRequest).pipe(map((/**
         * @param {?} resp
         * @return {?}
         */
        resp => new DaffCartPaymentUpdateWithBilling({
            method: this.authorizeNetPaymentId,
            payment_info: resp
        }, action.address))), catchError((/**
         * @param {?} error
         * @return {?}
         */
        (error) => of(new DaffAuthorizeNetUpdatePaymentFailure(this.errorMatcher(error)))))))));
        this.updatePaymentSuccessSubstream$ = this.actions$.pipe(substream([DaffAuthorizeNetActionTypes.UpdatePaymentAction, DaffCartPaymentActionTypes.CartPaymentUpdateWithBillingSuccessAction], DaffCartPaymentActionTypes.CartPaymentUpdateWithBillingFailureAction), mapTo(new DaffAuthorizeNetUpdatePaymentSuccess()));
        this.updatePaymentFailureSubstream$ = this.actions$.pipe(substream([DaffAuthorizeNetActionTypes.UpdatePaymentAction, DaffCartPaymentActionTypes.CartPaymentUpdateWithBillingFailureAction], DaffCartPaymentActionTypes.CartPaymentUpdateWithBillingSuccessAction), map((/**
         * @param {?} __0
         * @return {?}
         */
        ([updatePaymentAction, updatePaymentFailureAction]) => new DaffAuthorizeNetUpdatePaymentFailure(this.errorMatcher(updatePaymentFailureAction.payload)))));
        this.loadAcceptJs$ = (/**
         * @param {?=} maxTries
         * @param {?=} ms
         * @return {?}
         */
        (maxTries = 10, ms = 10) => this.actions$.pipe(ofType(DaffAuthorizeNetActionTypes.LoadAcceptJsAction), tap((/**
         * @param {?} action
         * @return {?}
         */
        (action) => this.acceptJsLoadingService.load())), switchMap((/**
         * @return {?}
         */
        () => of(null).pipe(map((/**
         * @return {?}
         */
        () => this.acceptJsLoadingService.getAccept())), backoff(maxTries, ms), mapTo(new DaffLoadAcceptJsSuccess()), catchError((/**
         * @param {?} error
         * @return {?}
         */
        (error) => of(new DaffLoadAcceptJsFailure(this.errorMatcher(error))))))))));
    }
}
DaffAuthorizeNetEffects.decorators = [
    { type: Injectable }
];
/** @nocollapse */
DaffAuthorizeNetEffects.ctorParameters = () => [
    { type: Actions },
    { type: undefined, decorators: [{ type: Inject, args: [DaffAuthorizeNetDriver,] }] },
    { type: String, decorators: [{ type: Inject, args: [DaffAuthorizeNetPaymentId,] }] },
    { type: Function, decorators: [{ type: Inject, args: [DAFF_AUTHORIZENET_ERROR_MATCHER,] }] },
    { type: DaffAcceptJsLoadingService }
];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aG9yaXplLW5ldC5lZmZlY3RzLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRhZmZvZGlsL2F1dGhvcml6ZW5ldC9zdGF0ZS8iLCJzb3VyY2VzIjpbImVmZmVjdHMvYXV0aG9yaXplLW5ldC5lZmZlY3RzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDbkQsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3hELE9BQU8sRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsS0FBSyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDeEUsT0FBTyxFQUFFLFVBQVUsRUFBRSxFQUFFLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFFdEMsT0FBTyxFQUFFLDBCQUEwQixFQUFFLGdDQUFnQyxFQUEyQyxNQUFNLHNCQUFzQixDQUFDO0FBQzdJLE9BQU8sRUFBRSxPQUFPLEVBQWEsTUFBTSxnQkFBZ0IsQ0FBQztBQUNwRCxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDakQsT0FBTyxFQUFFLDBCQUEwQixFQUFnQywrQkFBK0IsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ25JLE9BQU8sRUFBRSxzQkFBc0IsRUFBMkIseUJBQXlCLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQUUzSCxPQUFPLEVBQ04sMkJBQTJCLEVBRTNCLG9DQUFvQyxFQUVwQyxvQ0FBb0MsRUFDcEMsdUJBQXVCLEVBQ3ZCLHVCQUF1QixFQUN2QixNQUFNLGlDQUFpQyxDQUFDOzs7O0FBR3pDLE1BQU0sT0FBTyx1QkFBdUI7Ozs7Ozs7O0lBRWxDLFlBQ1UsUUFBaUIsRUFDYSxNQUFrQyxFQUMvQixxQkFBNkIsRUFDdkIsWUFBc0IsRUFDL0Qsc0JBQWtEO1FBSmhELGFBQVEsR0FBUixRQUFRLENBQVM7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Q1EsVUFBVTsrREFnQjNCO0FBR0Q7SUFEQyxNQUFNLEVBQUU7c0NBQ3dCLFVBQVU7K0VBTTFDO0FBR0Q7SUFEQyxNQUFNLEVBQUU7c0NBQ3dCLFVBQVU7K0VBUTFDO0FBR0E7SUFEQSxNQUFNLEVBQUU7OzhEQVVSOzs7SUFqREEsaURBaUJBOztJQUVELGlFQU9DOztJQUVELGlFQVNDOztJQUVELGdEQVVDOzs7OztJQXhERSwyQ0FBeUI7Ozs7O0lBQzNCLHlDQUEwRTs7Ozs7SUFDMUUsd0RBQXdFOzs7OztJQUN4RSwrQ0FBdUU7Ozs7O0lBQ3ZFLHlEQUEwRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUsIEluamVjdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQWN0aW9ucywgRWZmZWN0LCBvZlR5cGUgfSBmcm9tICdAbmdyeC9lZmZlY3RzJztcbmltcG9ydCB7IHN3aXRjaE1hcCwgY2F0Y2hFcnJvciwgbWFwLCB0YXAsIG1hcFRvIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgb2YgfSBmcm9tICdyeGpzJztcblxuaW1wb3J0IHsgRGFmZkNhcnRQYXltZW50QWN0aW9uVHlwZXMsIERhZmZDYXJ0UGF5bWVudFVwZGF0ZVdpdGhCaWxsaW5nLCBEYWZmQ2FydFBheW1lbnRVcGRhdGVXaXRoQmlsbGluZ0ZhaWx1cmUgfSBmcm9tICdAZGFmZm9kaWwvY2FydC9zdGF0ZSc7XG5pbXBvcnQgeyBiYWNrb2ZmLCBEYWZmRXJyb3IgfSBmcm9tICdAZGFmZm9kaWwvY29yZSc7XG5pbXBvcnQgeyBzdWJzdHJlYW0gfSBmcm9tICdAZGFmZm9kaWwvY29yZS9zdGF0ZSc7XG5pbXBvcnQgeyBEYWZmQWNjZXB0SnNMb2FkaW5nU2VydmljZSwgRGFmZkF1dGhvcml6ZU5ldFRva2VuUmVxdWVzdCwgREFGRl9BVVRIT1JJWkVORVRfRVJST1JfTUFUQ0hFUiB9IGZyb20gJ0BkYWZmb2RpbC9hdXRob3JpemVuZXQnO1xuaW1wb3J0IHsgRGFmZkF1dGhvcml6ZU5ldERyaXZlciwgRGFmZkF1dGhvcml6ZU5ldFNlcnZpY2UsIERhZmZBdXRob3JpemVOZXRQYXltZW50SWQgfSBmcm9tICdAZGFmZm9kaWwvYXV0aG9yaXplbmV0L2RyaXZlcic7XG5cbmltcG9ydCB7XG5cdERhZmZBdXRob3JpemVOZXRBY3Rpb25UeXBlcyxcblx0RGFmZkF1dGhvcml6ZU5ldFVwZGF0ZVBheW1lbnQsXG5cdERhZmZBdXRob3JpemVOZXRVcGRhdGVQYXltZW50RmFpbHVyZSxcblx0RGFmZkxvYWRBY2NlcHRKcyxcblx0RGFmZkF1dGhvcml6ZU5ldFVwZGF0ZVBheW1lbnRTdWNjZXNzLFxuXHREYWZmTG9hZEFjY2VwdEpzRmFpbHVyZSxcblx0RGFmZkxvYWRBY2NlcHRKc1N1Y2Nlc3Ncbn0gZnJvbSAnLi4vYWN0aW9ucy9hdXRob3JpemVuZXQuYWN0aW9ucyc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBEYWZmQXV0aG9yaXplTmV0RWZmZWN0czxUIGV4dGVuZHMgRGFmZkF1dGhvcml6ZU5ldFRva2VuUmVxdWVzdCA9IERhZmZBdXRob3JpemVOZXRUb2tlblJlcXVlc3Q+IHtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGFjdGlvbnMkOiBBY3Rpb25zLFxuXHRcdEBJbmplY3QoRGFmZkF1dGhvcml6ZU5ldERyaXZlcikgcHJpdmF0ZSBkcml2ZXI6IERhZmZBdXRob3JpemVOZXRTZXJ2aWNlPFQ+LFxuXHRcdEBJbmplY3QoRGFmZkF1dGhvcml6ZU5ldFBheW1lbnRJZCkgcHJpdmF0ZSBhdXRob3JpemVOZXRQYXltZW50SWQ6IHN0cmluZyxcblx0XHRASW5qZWN0KERBRkZfQVVUSE9SSVpFTkVUX0VSUk9SX01BVENIRVIpIHByaXZhdGUgZXJyb3JNYXRjaGVyOiBGdW5jdGlvbixcblx0XHRwcml2YXRlIGFjY2VwdEpzTG9hZGluZ1NlcnZpY2U6IERhZmZBY2NlcHRKc0xvYWRpbmdTZXJ2aWNlXG5cdCkge31cblxuICBARWZmZWN0KClcbiAgdXBkYXRlUGF5bWVudCQgOiBPYnNlcnZhYmxlPGFueT4gPSB0aGlzLmFjdGlvbnMkLnBpcGUoXG5cdFx0b2ZUeXBlKERhZmZBdXRob3JpemVOZXRBY3Rpb25UeXBlcy5VcGRhdGVQYXltZW50QWN0aW9uKSxcblx0XHRzd2l0Y2hNYXAoKGFjdGlvbjogRGFmZkF1dGhvcml6ZU5ldFVwZGF0ZVBheW1lbnQ8VD4pID0+XG5cdFx0XHR0aGlzLmRyaXZlci5nZW5lcmF0ZVRva2VuKGFjdGlvbi50b2tlblJlcXVlc3QpLnBpcGUoXG5cdFx0XHRcdG1hcChyZXNwID0+IG5ldyBEYWZmQ2FydFBheW1lbnRVcGRhdGVXaXRoQmlsbGluZyhcblx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRtZXRob2Q6IHRoaXMuYXV0aG9yaXplTmV0UGF5bWVudElkLFxuXHRcdFx0XHRcdFx0cGF5bWVudF9pbmZvOiByZXNwXG5cdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRhY3Rpb24uYWRkcmVzc1xuXHRcdFx0XHQpKSxcbiAgICAgICAgY2F0Y2hFcnJvcigoZXJyb3I6IERhZmZFcnJvcikgPT5cbiAgICAgICAgICBvZihuZXcgRGFmZkF1dGhvcml6ZU5ldFVwZGF0ZVBheW1lbnRGYWlsdXJlKHRoaXMuZXJyb3JNYXRjaGVyKGVycm9yKSkpXG4gICAgICAgIClcblx0XHRcdClcblx0XHQpXG5cdClcblxuXHRARWZmZWN0KClcblx0dXBkYXRlUGF5bWVudFN1Y2Nlc3NTdWJzdHJlYW0kIDogT2JzZXJ2YWJsZTxhbnk+ID0gdGhpcy5hY3Rpb25zJC5waXBlKFxuXHRcdHN1YnN0cmVhbShcblx0XHRcdFtEYWZmQXV0aG9yaXplTmV0QWN0aW9uVHlwZXMuVXBkYXRlUGF5bWVudEFjdGlvbiwgRGFmZkNhcnRQYXltZW50QWN0aW9uVHlwZXMuQ2FydFBheW1lbnRVcGRhdGVXaXRoQmlsbGluZ1N1Y2Nlc3NBY3Rpb25dLFxuXHRcdFx0RGFmZkNhcnRQYXltZW50QWN0aW9uVHlwZXMuQ2FydFBheW1lbnRVcGRhdGVXaXRoQmlsbGluZ0ZhaWx1cmVBY3Rpb25cblx0XHQpLFxuXHRcdG1hcFRvKG5ldyBEYWZmQXV0aG9yaXplTmV0VXBkYXRlUGF5bWVudFN1Y2Nlc3MoKSlcblx0KVxuXG5cdEBFZmZlY3QoKVxuXHR1cGRhdGVQYXltZW50RmFpbHVyZVN1YnN0cmVhbSQgOiBPYnNlcnZhYmxlPGFueT4gPSB0aGlzLmFjdGlvbnMkLnBpcGUoXG5cdFx0c3Vic3RyZWFtKFxuXHRcdFx0W0RhZmZBdXRob3JpemVOZXRBY3Rpb25UeXBlcy5VcGRhdGVQYXltZW50QWN0aW9uLCBEYWZmQ2FydFBheW1lbnRBY3Rpb25UeXBlcy5DYXJ0UGF5bWVudFVwZGF0ZVdpdGhCaWxsaW5nRmFpbHVyZUFjdGlvbl0sXG5cdFx0XHREYWZmQ2FydFBheW1lbnRBY3Rpb25UeXBlcy5DYXJ0UGF5bWVudFVwZGF0ZVdpdGhCaWxsaW5nU3VjY2Vzc0FjdGlvblxuXHRcdCksXG4gICAgbWFwKChbdXBkYXRlUGF5bWVudEFjdGlvbiwgdXBkYXRlUGF5bWVudEZhaWx1cmVBY3Rpb25dOiBbRGFmZkF1dGhvcml6ZU5ldFVwZGF0ZVBheW1lbnQsIERhZmZDYXJ0UGF5bWVudFVwZGF0ZVdpdGhCaWxsaW5nRmFpbHVyZV0pID0+XG4gICAgICBuZXcgRGFmZkF1dGhvcml6ZU5ldFVwZGF0ZVBheW1lbnRGYWlsdXJlKHRoaXMuZXJyb3JNYXRjaGVyKHVwZGF0ZVBheW1lbnRGYWlsdXJlQWN0aW9uLnBheWxvYWQpKVxuICAgIClcblx0KVxuXG5cdEBFZmZlY3QoKVxuICBsb2FkQWNjZXB0SnMkID0gKG1heFRyaWVzID0gMTAsIG1zID0gMTApOiBPYnNlcnZhYmxlPGFueT4gPT4gdGhpcy5hY3Rpb25zJC5waXBlKFxuICAgIG9mVHlwZShEYWZmQXV0aG9yaXplTmV0QWN0aW9uVHlwZXMuTG9hZEFjY2VwdEpzQWN0aW9uKSxcblx0XHR0YXAoKGFjdGlvbjogRGFmZkxvYWRBY2NlcHRKcykgPT4gdGhpcy5hY2NlcHRKc0xvYWRpbmdTZXJ2aWNlLmxvYWQoKSksXG5cdFx0c3dpdGNoTWFwKCgpID0+IG9mKG51bGwpLnBpcGUoXG5cdFx0XHRtYXAoKCkgPT4gdGhpcy5hY2NlcHRKc0xvYWRpbmdTZXJ2aWNlLmdldEFjY2VwdCgpKSxcblx0XHRcdGJhY2tvZmYobWF4VHJpZXMsIG1zKSxcblx0XHRcdG1hcFRvKG5ldyBEYWZmTG9hZEFjY2VwdEpzU3VjY2VzcygpKSxcblx0XHRcdGNhdGNoRXJyb3IoKGVycm9yOiBEYWZmRXJyb3IpID0+IG9mKG5ldyBEYWZmTG9hZEFjY2VwdEpzRmFpbHVyZSh0aGlzLmVycm9yTWF0Y2hlcihlcnJvcikpKSlcblx0XHQpKVxuXHQpXG59XG4iXX0=