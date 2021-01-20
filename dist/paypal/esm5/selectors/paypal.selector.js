/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { createSelector, createFeatureSelector } from '@ngrx/store';
/**
 * @record
 * @template T
 */
export function DaffPaypalMemoizedSelectors() { }
if (false) {
    /** @type {?} */
    DaffPaypalMemoizedSelectors.prototype.selectPaypalFeatureState;
    /** @type {?} */
    DaffPaypalMemoizedSelectors.prototype.selectPaypalState;
    /** @type {?} */
    DaffPaypalMemoizedSelectors.prototype.selectPaypalTokenResponse;
    /** @type {?} */
    DaffPaypalMemoizedSelectors.prototype.selectPaypalLoading;
    /** @type {?} */
    DaffPaypalMemoizedSelectors.prototype.selectPaypalError;
    /** @type {?} */
    DaffPaypalMemoizedSelectors.prototype.selectPaypalToken;
    /** @type {?} */
    DaffPaypalMemoizedSelectors.prototype.selectPaypalStartUrl;
    /** @type {?} */
    DaffPaypalMemoizedSelectors.prototype.selectPaypalEditUrl;
}
/** @type {?} */
var createPaypalSelectors = (/**
 * @template T
 * @return {?}
 */
function () {
    /**
     * Paypal Feature State
     * @type {?}
     */
    var selectPaypalFeatureState = createFeatureSelector('paypal');
    /**
     * Paypal State
     * @type {?}
     */
    var selectPaypalState = createSelector(selectPaypalFeatureState, (/**
     * @param {?} state
     * @return {?}
     */
    function (state) { return state.paypal; }));
    /** @type {?} */
    var selectPaypalTokenResponse = createSelector(selectPaypalState, (/**
     * @param {?} state
     * @return {?}
     */
    function (state) { return state.paypalTokenResponse; }));
    /** @type {?} */
    var selectPaypalLoading = createSelector(selectPaypalState, (/**
     * @param {?} state
     * @return {?}
     */
    function (state) { return state.loading; }));
    /** @type {?} */
    var selectPaypalError = createSelector(selectPaypalState, (/**
     * @param {?} state
     * @return {?}
     */
    function (state) { return state.error; }));
    /** @type {?} */
    var selectPaypalToken = createSelector(selectPaypalTokenResponse, (/**
     * @param {?} state
     * @return {?}
     */
    function (state) { return state.token; }));
    /** @type {?} */
    var selectPaypalStartUrl = createSelector(selectPaypalTokenResponse, (/**
     * @param {?} state
     * @return {?}
     */
    function (state) { return state.urls.start; }));
    /** @type {?} */
    var selectPaypalEditUrl = createSelector(selectPaypalTokenResponse, (/**
     * @param {?} state
     * @return {?}
     */
    function (state) { return state.urls.edit; }));
    return {
        selectPaypalFeatureState: selectPaypalFeatureState,
        selectPaypalState: selectPaypalState,
        selectPaypalTokenResponse: selectPaypalTokenResponse,
        selectPaypalLoading: selectPaypalLoading,
        selectPaypalError: selectPaypalError,
        selectPaypalToken: selectPaypalToken,
        selectPaypalStartUrl: selectPaypalStartUrl,
        selectPaypalEditUrl: selectPaypalEditUrl
    };
});
var ɵ0 = createPaypalSelectors;
var ɵ1 = /**
 * @return {?}
 */
function () {
    /** @type {?} */
    var cache;
    return (/**
     * @template T
     * @return {?}
     */
    function () { return cache = cache
        ? cache
        : createPaypalSelectors(); });
};
/** @type {?} */
export var getDaffPaypalSelectors = ((ɵ1))();
export { ɵ0, ɵ1 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGF5cGFsLnNlbGVjdG9yLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRhZmZvZGlsL3BheXBhbC8iLCJzb3VyY2VzIjpbInNlbGVjdG9ycy9wYXlwYWwuc2VsZWN0b3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxjQUFjLEVBQUUscUJBQXFCLEVBQW9CLE1BQU0sYUFBYSxDQUFDOzs7OztBQU10RixpREFTQzs7O0lBUkEsK0RBQStFOztJQUMvRSx3REFBdUU7O0lBQ3ZFLGdFQUF1RDs7SUFDdkQsMERBQXVEOztJQUN2RCx3REFBb0Q7O0lBQ3BELHdEQUFvRDs7SUFDcEQsMkRBQXVEOztJQUN2RCwwREFBc0Q7OztJQUdqRCxxQkFBcUI7Ozs7QUFBRzs7Ozs7UUFLdkIsd0JBQXdCLEdBQUcscUJBQXFCLENBQTZCLFFBQVEsQ0FBQzs7Ozs7UUFLdEYsaUJBQWlCLEdBQUcsY0FBYyxDQUFDLHdCQUF3Qjs7OztJQUFFLFVBQUMsS0FBaUMsSUFBSyxPQUFBLEtBQUssQ0FBQyxNQUFNLEVBQVosQ0FBWSxFQUFDOztRQUVqSCx5QkFBeUIsR0FBRyxjQUFjLENBQUMsaUJBQWlCOzs7O0lBQUMsVUFBQyxLQUFnQyxJQUFLLE9BQUEsS0FBSyxDQUFDLG1CQUFtQixFQUF6QixDQUF5QixFQUFDOztRQUU3SCxtQkFBbUIsR0FBRyxjQUFjLENBQUMsaUJBQWlCOzs7O0lBQUMsVUFBQyxLQUFnQyxJQUFLLE9BQUEsS0FBSyxDQUFDLE9BQU8sRUFBYixDQUFhLEVBQUM7O1FBRTNHLGlCQUFpQixHQUFHLGNBQWMsQ0FBQyxpQkFBaUI7Ozs7SUFBQyxVQUFDLEtBQWdDLElBQUssT0FBQSxLQUFLLENBQUMsS0FBSyxFQUFYLENBQVcsRUFBQzs7UUFFdkcsaUJBQWlCLEdBQUcsY0FBYyxDQUFDLHlCQUF5Qjs7OztJQUFDLFVBQUMsS0FBUSxJQUFLLE9BQUEsS0FBSyxDQUFDLEtBQUssRUFBWCxDQUFXLEVBQUM7O1FBRXZGLG9CQUFvQixHQUFHLGNBQWMsQ0FBQyx5QkFBeUI7Ozs7SUFBQyxVQUFDLEtBQVEsSUFBSyxPQUFBLEtBQUssQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFoQixDQUFnQixFQUFDOztRQUUvRixtQkFBbUIsR0FBRyxjQUFjLENBQUMseUJBQXlCOzs7O0lBQUMsVUFBQyxLQUFRLElBQUssT0FBQSxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksRUFBZixDQUFlLEVBQUM7SUFFbkcsT0FBTztRQUNOLHdCQUF3QiwwQkFBQTtRQUN4QixpQkFBaUIsbUJBQUE7UUFDakIseUJBQXlCLDJCQUFBO1FBQ3pCLG1CQUFtQixxQkFBQTtRQUNuQixpQkFBaUIsbUJBQUE7UUFDakIsaUJBQWlCLG1CQUFBO1FBQ2pCLG9CQUFvQixzQkFBQTtRQUNwQixtQkFBbUIscUJBQUE7S0FDbkIsQ0FBQTtBQUNGLENBQUMsQ0FBQTs7Ozs7QUFFc0M7O1FBQ2xDLEtBQUs7SUFDVDs7OztJQUFPLGNBQW1HLE9BQUEsS0FBSyxHQUFHLEtBQUs7UUFDdEgsQ0FBQyxDQUFDLEtBQUs7UUFDUCxDQUFDLENBQUMscUJBQXFCLEVBQUssRUFGNkUsQ0FFN0UsRUFBQztBQUMvQixDQUFDOztBQUxELE1BQU0sS0FBTyxzQkFBc0IsR0FBRyxNQUtwQyxFQUFFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlU2VsZWN0b3IsIGNyZWF0ZUZlYXR1cmVTZWxlY3RvciwgTWVtb2l6ZWRTZWxlY3RvciB9IGZyb20gJ0BuZ3J4L3N0b3JlJztcblxuaW1wb3J0IHsgRGFmZlBheXBhbFJlZHVjZXJTdGF0ZSB9IGZyb20gJy4uL3JlZHVjZXJzL3BheXBhbC9wYXlwYWwtcmVkdWNlci5pbnRlcmZhY2UnO1xuaW1wb3J0IHsgRGFmZlBheXBhbFJlZHVjZXJzU3RhdGUgfSBmcm9tICcuLi9yZWR1Y2Vycy9wYXlwYWwtcmVkdWNlcnMuaW50ZXJmYWNlJztcbmltcG9ydCB7IERhZmZQYXlwYWxUb2tlblJlc3BvbnNlIH0gZnJvbSAnLi4vbW9kZWxzL3BheXBhbC10b2tlbi1yZXNwb25zZSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgRGFmZlBheXBhbE1lbW9pemVkU2VsZWN0b3JzPFQgZXh0ZW5kcyBEYWZmUGF5cGFsVG9rZW5SZXNwb25zZSA9IERhZmZQYXlwYWxUb2tlblJlc3BvbnNlPiB7XG5cdHNlbGVjdFBheXBhbEZlYXR1cmVTdGF0ZTogTWVtb2l6ZWRTZWxlY3RvcjxvYmplY3QsIERhZmZQYXlwYWxSZWR1Y2Vyc1N0YXRlPFQ+Pjtcblx0c2VsZWN0UGF5cGFsU3RhdGU6IE1lbW9pemVkU2VsZWN0b3I8b2JqZWN0LCBEYWZmUGF5cGFsUmVkdWNlclN0YXRlPFQ+Pjtcblx0c2VsZWN0UGF5cGFsVG9rZW5SZXNwb25zZTogTWVtb2l6ZWRTZWxlY3RvcjxvYmplY3QsIFQ+O1xuXHRzZWxlY3RQYXlwYWxMb2FkaW5nOiBNZW1vaXplZFNlbGVjdG9yPG9iamVjdCwgYm9vbGVhbj47XG5cdHNlbGVjdFBheXBhbEVycm9yOiBNZW1vaXplZFNlbGVjdG9yPG9iamVjdCwgc3RyaW5nPjtcblx0c2VsZWN0UGF5cGFsVG9rZW46IE1lbW9pemVkU2VsZWN0b3I8b2JqZWN0LCBzdHJpbmc+O1xuXHRzZWxlY3RQYXlwYWxTdGFydFVybDogTWVtb2l6ZWRTZWxlY3RvcjxvYmplY3QsIHN0cmluZz47XG5cdHNlbGVjdFBheXBhbEVkaXRVcmw6IE1lbW9pemVkU2VsZWN0b3I8b2JqZWN0LCBzdHJpbmc+O1xufVxuXG5jb25zdCBjcmVhdGVQYXlwYWxTZWxlY3RvcnMgPSA8VCBleHRlbmRzIERhZmZQYXlwYWxUb2tlblJlc3BvbnNlPigpOiBEYWZmUGF5cGFsTWVtb2l6ZWRTZWxlY3RvcnM8VD4gPT4ge1xuXG5cdC8qKlxuXHQgKiBQYXlwYWwgRmVhdHVyZSBTdGF0ZVxuXHQgKi9cblx0Y29uc3Qgc2VsZWN0UGF5cGFsRmVhdHVyZVN0YXRlID0gY3JlYXRlRmVhdHVyZVNlbGVjdG9yPERhZmZQYXlwYWxSZWR1Y2Vyc1N0YXRlPFQ+PigncGF5cGFsJyk7XG5cblx0LyoqXG5cdCAqIFBheXBhbCBTdGF0ZVxuXHQgKi9cblx0Y29uc3Qgc2VsZWN0UGF5cGFsU3RhdGUgPSBjcmVhdGVTZWxlY3RvcihzZWxlY3RQYXlwYWxGZWF0dXJlU3RhdGUsIChzdGF0ZTogRGFmZlBheXBhbFJlZHVjZXJzU3RhdGU8VD4pID0+IHN0YXRlLnBheXBhbCk7XG5cblx0Y29uc3Qgc2VsZWN0UGF5cGFsVG9rZW5SZXNwb25zZSA9IGNyZWF0ZVNlbGVjdG9yKHNlbGVjdFBheXBhbFN0YXRlLChzdGF0ZTogRGFmZlBheXBhbFJlZHVjZXJTdGF0ZTxUPikgPT4gc3RhdGUucGF5cGFsVG9rZW5SZXNwb25zZSk7XG5cblx0Y29uc3Qgc2VsZWN0UGF5cGFsTG9hZGluZyA9IGNyZWF0ZVNlbGVjdG9yKHNlbGVjdFBheXBhbFN0YXRlLChzdGF0ZTogRGFmZlBheXBhbFJlZHVjZXJTdGF0ZTxUPikgPT4gc3RhdGUubG9hZGluZyk7XG5cblx0Y29uc3Qgc2VsZWN0UGF5cGFsRXJyb3IgPSBjcmVhdGVTZWxlY3RvcihzZWxlY3RQYXlwYWxTdGF0ZSwoc3RhdGU6IERhZmZQYXlwYWxSZWR1Y2VyU3RhdGU8VD4pID0+IHN0YXRlLmVycm9yKTtcblxuXHRjb25zdCBzZWxlY3RQYXlwYWxUb2tlbiA9IGNyZWF0ZVNlbGVjdG9yKHNlbGVjdFBheXBhbFRva2VuUmVzcG9uc2UsKHN0YXRlOiBUKSA9PiBzdGF0ZS50b2tlbik7XG5cblx0Y29uc3Qgc2VsZWN0UGF5cGFsU3RhcnRVcmwgPSBjcmVhdGVTZWxlY3RvcihzZWxlY3RQYXlwYWxUb2tlblJlc3BvbnNlLChzdGF0ZTogVCkgPT4gc3RhdGUudXJscy5zdGFydCk7XG5cblx0Y29uc3Qgc2VsZWN0UGF5cGFsRWRpdFVybCA9IGNyZWF0ZVNlbGVjdG9yKHNlbGVjdFBheXBhbFRva2VuUmVzcG9uc2UsKHN0YXRlOiBUKSA9PiBzdGF0ZS51cmxzLmVkaXQpO1xuXHRcblx0cmV0dXJuIHsgXG5cdFx0c2VsZWN0UGF5cGFsRmVhdHVyZVN0YXRlLFxuXHRcdHNlbGVjdFBheXBhbFN0YXRlLFxuXHRcdHNlbGVjdFBheXBhbFRva2VuUmVzcG9uc2UsXG5cdFx0c2VsZWN0UGF5cGFsTG9hZGluZyxcblx0XHRzZWxlY3RQYXlwYWxFcnJvcixcblx0XHRzZWxlY3RQYXlwYWxUb2tlbixcblx0XHRzZWxlY3RQYXlwYWxTdGFydFVybCxcblx0XHRzZWxlY3RQYXlwYWxFZGl0VXJsXG5cdH1cbn1cblxuZXhwb3J0IGNvbnN0IGdldERhZmZQYXlwYWxTZWxlY3RvcnMgPSAoKCkgPT4ge1xuXHRsZXQgY2FjaGU7XG5cdHJldHVybiA8VCBleHRlbmRzIERhZmZQYXlwYWxUb2tlblJlc3BvbnNlID0gRGFmZlBheXBhbFRva2VuUmVzcG9uc2U+KCk6IERhZmZQYXlwYWxNZW1vaXplZFNlbGVjdG9yczxUPiA9PiBjYWNoZSA9IGNhY2hlIFxuXHRcdD8gY2FjaGUgXG5cdFx0OiBjcmVhdGVQYXlwYWxTZWxlY3RvcnM8VD4oKTtcbn0pKCk7XG4iXX0=