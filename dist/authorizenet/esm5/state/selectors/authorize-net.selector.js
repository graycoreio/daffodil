/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { createSelector, createFeatureSelector } from '@ngrx/store';
import { DAFF_AUTHORIZENET_STORE_FEATURE_KEY } from '../reducers/authorizenet-store-feature-key';
/**
 * @record
 */
export function DaffAuthorizeNetMemoizedSelectors() { }
if (false) {
    /** @type {?} */
    DaffAuthorizeNetMemoizedSelectors.prototype.selectAuthorizeNetFeatureState;
    /** @type {?} */
    DaffAuthorizeNetMemoizedSelectors.prototype.selectAuthorizeNetState;
    /** @type {?} */
    DaffAuthorizeNetMemoizedSelectors.prototype.selectLoading;
    /** @type {?} */
    DaffAuthorizeNetMemoizedSelectors.prototype.selectPaymentError;
    /** @type {?} */
    DaffAuthorizeNetMemoizedSelectors.prototype.selectAcceptJsLoadError;
    /** @type {?} */
    DaffAuthorizeNetMemoizedSelectors.prototype.selectIsAcceptJsLoaded;
}
/** @type {?} */
var createAuthorizeNetSelectors = (/**
 * @return {?}
 */
function () {
    /**
     * AuthorizeNet Feature State
     * @type {?}
     */
    var selectAuthorizeNetFeatureState = createFeatureSelector(DAFF_AUTHORIZENET_STORE_FEATURE_KEY);
    /**
     * AuthorizeNet State
     * @type {?}
     */
    var selectAuthorizeNetState = createSelector(selectAuthorizeNetFeatureState, (/**
     * @param {?} state
     * @return {?}
     */
    function (state) { return state.authorizeNet; }));
    /**
     * AuthorizeNet loading state
     * @type {?}
     */
    var selectLoading = createSelector(selectAuthorizeNetState, (/**
     * @param {?} state
     * @return {?}
     */
    function (state) { return state.loading; }));
    /**
     * AuthorizeNet payment error
     * @type {?}
     */
    var selectPaymentError = createSelector(selectAuthorizeNetState, (/**
     * @param {?} state
     * @return {?}
     */
    function (state) { return state.paymentError; }));
    /**
     * AcceptJs load error
     * @type {?}
     */
    var selectAcceptJsLoadError = createSelector(selectAuthorizeNetState, (/**
     * @param {?} state
     * @return {?}
     */
    function (state) { return state.acceptJsLoadError; }));
    /**
     * AcceptJs is loaded
     * @type {?}
     */
    var selectIsAcceptJsLoaded = createSelector(selectAuthorizeNetState, (/**
     * @param {?} state
     * @return {?}
     */
    function (state) { return state.isAcceptLoaded; }));
    return {
        selectAuthorizeNetFeatureState: selectAuthorizeNetFeatureState,
        selectAuthorizeNetState: selectAuthorizeNetState,
        selectLoading: selectLoading,
        selectPaymentError: selectPaymentError,
        selectAcceptJsLoadError: selectAcceptJsLoadError,
        selectIsAcceptJsLoaded: selectIsAcceptJsLoaded
    };
});
var ɵ0 = createAuthorizeNetSelectors;
var ɵ1 = /**
 * @return {?}
 */
function () {
    /** @type {?} */
    var cache;
    return (/**
     * @return {?}
     */
    function () { return cache = cache
        ? cache
        : createAuthorizeNetSelectors(); });
};
/** @type {?} */
export var daffAuthorizeNetSelectors = ((ɵ1))();
export { ɵ0, ɵ1 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aG9yaXplLW5ldC5zZWxlY3Rvci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkYWZmb2RpbC9hdXRob3JpemVuZXQvc3RhdGUvIiwic291cmNlcyI6WyJzZWxlY3RvcnMvYXV0aG9yaXplLW5ldC5zZWxlY3Rvci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLGNBQWMsRUFBRSxxQkFBcUIsRUFBb0IsTUFBTSxhQUFhLENBQUM7QUFNdEYsT0FBTyxFQUFFLG1DQUFtQyxFQUFFLE1BQU0sNENBQTRDLENBQUM7Ozs7QUFFakcsdURBT0M7OztJQU5BLDJFQUF3Rjs7SUFDeEYsb0VBQWlGOztJQUNqRiwwREFBaUQ7O0lBQ2pELCtEQUE2RDs7SUFDN0Qsb0VBQWtFOztJQUNsRSxtRUFBMEQ7OztJQUdyRCwyQkFBMkI7OztBQUFHOzs7OztRQUs3Qiw4QkFBOEIsR0FBRyxxQkFBcUIsQ0FBZ0MsbUNBQW1DLENBQUM7Ozs7O1FBSzFILHVCQUF1QixHQUFHLGNBQWMsQ0FDN0MsOEJBQThCOzs7O0lBQzlCLFVBQUMsS0FBb0MsSUFBSyxPQUFBLEtBQUssQ0FBQyxZQUFZLEVBQWxCLENBQWtCLEVBQzVEOzs7OztRQUtLLGFBQWEsR0FBRyxjQUFjLENBQ25DLHVCQUF1Qjs7OztJQUN2QixVQUFDLEtBQW1DLElBQUssT0FBQSxLQUFLLENBQUMsT0FBTyxFQUFiLENBQWEsRUFDdEQ7Ozs7O1FBS0ssa0JBQWtCLEdBQUcsY0FBYyxDQUN4Qyx1QkFBdUI7Ozs7SUFDdkIsVUFBQyxLQUFtQyxJQUFLLE9BQUEsS0FBSyxDQUFDLFlBQVksRUFBbEIsQ0FBa0IsRUFDM0Q7Ozs7O1FBS0ssdUJBQXVCLEdBQUcsY0FBYyxDQUM3Qyx1QkFBdUI7Ozs7SUFDdkIsVUFBQyxLQUFtQyxJQUFLLE9BQUEsS0FBSyxDQUFDLGlCQUFpQixFQUF2QixDQUF1QixFQUNoRTs7Ozs7UUFLSyxzQkFBc0IsR0FBRyxjQUFjLENBQzVDLHVCQUF1Qjs7OztJQUN2QixVQUFDLEtBQW1DLElBQUssT0FBQSxLQUFLLENBQUMsY0FBYyxFQUFwQixDQUFvQixFQUM3RDtJQUVELE9BQU87UUFDTiw4QkFBOEIsZ0NBQUE7UUFDOUIsdUJBQXVCLHlCQUFBO1FBQ3ZCLGFBQWEsZUFBQTtRQUNiLGtCQUFrQixvQkFBQTtRQUNsQix1QkFBdUIseUJBQUE7UUFDdkIsc0JBQXNCLHdCQUFBO0tBQ3RCLENBQUE7QUFDRixDQUFDLENBQUE7Ozs7O0FBRXlDOztRQUNyQyxLQUFLO0lBQ1Q7OztJQUFPLGNBQXlDLE9BQUEsS0FBSyxHQUFHLEtBQUs7UUFDNUQsQ0FBQyxDQUFDLEtBQUs7UUFDUCxDQUFDLENBQUMsMkJBQTJCLEVBQUUsRUFGZ0IsQ0FFaEIsRUFBQztBQUNsQyxDQUFDOztBQUxELE1BQU0sS0FBTyx5QkFBeUIsR0FBRyxNQUt2QyxFQUFFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlU2VsZWN0b3IsIGNyZWF0ZUZlYXR1cmVTZWxlY3RvciwgTWVtb2l6ZWRTZWxlY3RvciB9IGZyb20gJ0BuZ3J4L3N0b3JlJztcblxuaW1wb3J0IHsgRGFmZlN0YXRlRXJyb3IgfSBmcm9tICdAZGFmZm9kaWwvY29yZS9zdGF0ZSc7XG5cbmltcG9ydCB7IERhZmZBdXRob3JpemVOZXRSZWR1Y2Vyc1N0YXRlIH0gZnJvbSAnLi4vcmVkdWNlcnMvYXV0aG9yaXplLW5ldC1yZWR1Y2Vycy5pbnRlcmZhY2UnO1xuaW1wb3J0IHsgRGFmZkF1dGhvcml6ZU5ldFJlZHVjZXJTdGF0ZSB9IGZyb20gJy4uL3JlZHVjZXJzL2F1dGhvcml6ZS1uZXQvYXV0aG9yaXplLW5ldC1yZWR1Y2VyLmludGVyZmFjZSc7XG5pbXBvcnQgeyBEQUZGX0FVVEhPUklaRU5FVF9TVE9SRV9GRUFUVVJFX0tFWSB9IGZyb20gJy4uL3JlZHVjZXJzL2F1dGhvcml6ZW5ldC1zdG9yZS1mZWF0dXJlLWtleSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgRGFmZkF1dGhvcml6ZU5ldE1lbW9pemVkU2VsZWN0b3JzIHtcblx0c2VsZWN0QXV0aG9yaXplTmV0RmVhdHVyZVN0YXRlOiBNZW1vaXplZFNlbGVjdG9yPG9iamVjdCwgRGFmZkF1dGhvcml6ZU5ldFJlZHVjZXJzU3RhdGU+O1xuXHRzZWxlY3RBdXRob3JpemVOZXRTdGF0ZTogTWVtb2l6ZWRTZWxlY3RvcjxvYmplY3QsIERhZmZBdXRob3JpemVOZXRSZWR1Y2VyU3RhdGU+IDtcblx0c2VsZWN0TG9hZGluZzogTWVtb2l6ZWRTZWxlY3RvcjxvYmplY3QsIGJvb2xlYW4+O1xuXHRzZWxlY3RQYXltZW50RXJyb3I6IE1lbW9pemVkU2VsZWN0b3I8b2JqZWN0LCBEYWZmU3RhdGVFcnJvcj47XG5cdHNlbGVjdEFjY2VwdEpzTG9hZEVycm9yOiBNZW1vaXplZFNlbGVjdG9yPG9iamVjdCwgRGFmZlN0YXRlRXJyb3I+O1xuXHRzZWxlY3RJc0FjY2VwdEpzTG9hZGVkOiBNZW1vaXplZFNlbGVjdG9yPG9iamVjdCwgYm9vbGVhbj47XG59XG5cbmNvbnN0IGNyZWF0ZUF1dGhvcml6ZU5ldFNlbGVjdG9ycyA9ICgpOiBEYWZmQXV0aG9yaXplTmV0TWVtb2l6ZWRTZWxlY3RvcnMgPT4ge1xuXG5cdC8qKlxuXHQgKiBBdXRob3JpemVOZXQgRmVhdHVyZSBTdGF0ZVxuXHQgKi9cblx0Y29uc3Qgc2VsZWN0QXV0aG9yaXplTmV0RmVhdHVyZVN0YXRlID0gY3JlYXRlRmVhdHVyZVNlbGVjdG9yPERhZmZBdXRob3JpemVOZXRSZWR1Y2Vyc1N0YXRlPihEQUZGX0FVVEhPUklaRU5FVF9TVE9SRV9GRUFUVVJFX0tFWSk7XG5cblx0LyoqXG5cdCAqIEF1dGhvcml6ZU5ldCBTdGF0ZVxuXHQgKi9cblx0Y29uc3Qgc2VsZWN0QXV0aG9yaXplTmV0U3RhdGUgPSBjcmVhdGVTZWxlY3Rvcihcblx0XHRzZWxlY3RBdXRob3JpemVOZXRGZWF0dXJlU3RhdGUsXG5cdFx0KHN0YXRlOiBEYWZmQXV0aG9yaXplTmV0UmVkdWNlcnNTdGF0ZSkgPT4gc3RhdGUuYXV0aG9yaXplTmV0XG5cdCk7XG5cblx0LyoqXG5cdCAqIEF1dGhvcml6ZU5ldCBsb2FkaW5nIHN0YXRlXG5cdCAqL1xuXHRjb25zdCBzZWxlY3RMb2FkaW5nID0gY3JlYXRlU2VsZWN0b3IoXG5cdFx0c2VsZWN0QXV0aG9yaXplTmV0U3RhdGUsXG5cdFx0KHN0YXRlOiBEYWZmQXV0aG9yaXplTmV0UmVkdWNlclN0YXRlKSA9PiBzdGF0ZS5sb2FkaW5nXG5cdCk7XG5cblx0LyoqXG5cdCAqIEF1dGhvcml6ZU5ldCBwYXltZW50IGVycm9yXG5cdCAqL1xuXHRjb25zdCBzZWxlY3RQYXltZW50RXJyb3IgPSBjcmVhdGVTZWxlY3Rvcihcblx0XHRzZWxlY3RBdXRob3JpemVOZXRTdGF0ZSxcblx0XHQoc3RhdGU6IERhZmZBdXRob3JpemVOZXRSZWR1Y2VyU3RhdGUpID0+IHN0YXRlLnBheW1lbnRFcnJvclxuXHQpO1xuXG5cdC8qKlxuXHQgKiBBY2NlcHRKcyBsb2FkIGVycm9yXG5cdCAqL1xuXHRjb25zdCBzZWxlY3RBY2NlcHRKc0xvYWRFcnJvciA9IGNyZWF0ZVNlbGVjdG9yKFxuXHRcdHNlbGVjdEF1dGhvcml6ZU5ldFN0YXRlLFxuXHRcdChzdGF0ZTogRGFmZkF1dGhvcml6ZU5ldFJlZHVjZXJTdGF0ZSkgPT4gc3RhdGUuYWNjZXB0SnNMb2FkRXJyb3Jcblx0KTtcblxuXHQvKipcblx0ICogQWNjZXB0SnMgaXMgbG9hZGVkXG5cdCAqL1xuXHRjb25zdCBzZWxlY3RJc0FjY2VwdEpzTG9hZGVkID0gY3JlYXRlU2VsZWN0b3IoXG5cdFx0c2VsZWN0QXV0aG9yaXplTmV0U3RhdGUsXG5cdFx0KHN0YXRlOiBEYWZmQXV0aG9yaXplTmV0UmVkdWNlclN0YXRlKSA9PiBzdGF0ZS5pc0FjY2VwdExvYWRlZFxuXHQpO1xuXG5cdHJldHVybiB7XG5cdFx0c2VsZWN0QXV0aG9yaXplTmV0RmVhdHVyZVN0YXRlLFxuXHRcdHNlbGVjdEF1dGhvcml6ZU5ldFN0YXRlLFxuXHRcdHNlbGVjdExvYWRpbmcsXG5cdFx0c2VsZWN0UGF5bWVudEVycm9yLFxuXHRcdHNlbGVjdEFjY2VwdEpzTG9hZEVycm9yLFxuXHRcdHNlbGVjdElzQWNjZXB0SnNMb2FkZWRcblx0fVxufVxuXG5leHBvcnQgY29uc3QgZGFmZkF1dGhvcml6ZU5ldFNlbGVjdG9ycyA9ICgoKSA9PiB7XG5cdGxldCBjYWNoZTtcblx0cmV0dXJuICgpOiBEYWZmQXV0aG9yaXplTmV0TWVtb2l6ZWRTZWxlY3RvcnMgPT4gY2FjaGUgPSBjYWNoZVxuXHRcdD8gY2FjaGVcblx0XHQ6IGNyZWF0ZUF1dGhvcml6ZU5ldFNlbGVjdG9ycygpO1xufSkoKTtcbiJdfQ==