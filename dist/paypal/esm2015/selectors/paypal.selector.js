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
const createPaypalSelectors = (/**
 * @template T
 * @return {?}
 */
() => {
    /**
     * Paypal Feature State
     * @type {?}
     */
    const selectPaypalFeatureState = createFeatureSelector('paypal');
    /**
     * Paypal State
     * @type {?}
     */
    const selectPaypalState = createSelector(selectPaypalFeatureState, (/**
     * @param {?} state
     * @return {?}
     */
    (state) => state.paypal));
    /** @type {?} */
    const selectPaypalTokenResponse = createSelector(selectPaypalState, (/**
     * @param {?} state
     * @return {?}
     */
    (state) => state.paypalTokenResponse));
    /** @type {?} */
    const selectPaypalLoading = createSelector(selectPaypalState, (/**
     * @param {?} state
     * @return {?}
     */
    (state) => state.loading));
    /** @type {?} */
    const selectPaypalError = createSelector(selectPaypalState, (/**
     * @param {?} state
     * @return {?}
     */
    (state) => state.error));
    /** @type {?} */
    const selectPaypalToken = createSelector(selectPaypalTokenResponse, (/**
     * @param {?} state
     * @return {?}
     */
    (state) => state.token));
    /** @type {?} */
    const selectPaypalStartUrl = createSelector(selectPaypalTokenResponse, (/**
     * @param {?} state
     * @return {?}
     */
    (state) => state.urls.start));
    /** @type {?} */
    const selectPaypalEditUrl = createSelector(selectPaypalTokenResponse, (/**
     * @param {?} state
     * @return {?}
     */
    (state) => state.urls.edit));
    return {
        selectPaypalFeatureState,
        selectPaypalState,
        selectPaypalTokenResponse,
        selectPaypalLoading,
        selectPaypalError,
        selectPaypalToken,
        selectPaypalStartUrl,
        selectPaypalEditUrl
    };
});
const ɵ0 = createPaypalSelectors;
const ɵ1 = /**
 * @return {?}
 */
() => {
    /** @type {?} */
    let cache;
    return (/**
     * @template T
     * @return {?}
     */
    () => cache = cache
        ? cache
        : createPaypalSelectors());
};
/** @type {?} */
export const getDaffPaypalSelectors = ((ɵ1))();
export { ɵ0, ɵ1 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGF5cGFsLnNlbGVjdG9yLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRhZmZvZGlsL3BheXBhbC8iLCJzb3VyY2VzIjpbInNlbGVjdG9ycy9wYXlwYWwuc2VsZWN0b3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxjQUFjLEVBQUUscUJBQXFCLEVBQW9CLE1BQU0sYUFBYSxDQUFDOzs7OztBQU10RixpREFTQzs7O0lBUkEsK0RBQStFOztJQUMvRSx3REFBdUU7O0lBQ3ZFLGdFQUF1RDs7SUFDdkQsMERBQXVEOztJQUN2RCx3REFBb0Q7O0lBQ3BELHdEQUFvRDs7SUFDcEQsMkRBQXVEOztJQUN2RCwwREFBc0Q7OztNQUdqRCxxQkFBcUI7Ozs7QUFBRyxHQUFzRSxFQUFFOzs7OztVQUsvRix3QkFBd0IsR0FBRyxxQkFBcUIsQ0FBNkIsUUFBUSxDQUFDOzs7OztVQUt0RixpQkFBaUIsR0FBRyxjQUFjLENBQUMsd0JBQXdCOzs7O0lBQUUsQ0FBQyxLQUFpQyxFQUFFLEVBQUUsQ0FBQyxLQUFLLENBQUMsTUFBTSxFQUFDOztVQUVqSCx5QkFBeUIsR0FBRyxjQUFjLENBQUMsaUJBQWlCOzs7O0lBQUMsQ0FBQyxLQUFnQyxFQUFFLEVBQUUsQ0FBQyxLQUFLLENBQUMsbUJBQW1CLEVBQUM7O1VBRTdILG1CQUFtQixHQUFHLGNBQWMsQ0FBQyxpQkFBaUI7Ozs7SUFBQyxDQUFDLEtBQWdDLEVBQUUsRUFBRSxDQUFDLEtBQUssQ0FBQyxPQUFPLEVBQUM7O1VBRTNHLGlCQUFpQixHQUFHLGNBQWMsQ0FBQyxpQkFBaUI7Ozs7SUFBQyxDQUFDLEtBQWdDLEVBQUUsRUFBRSxDQUFDLEtBQUssQ0FBQyxLQUFLLEVBQUM7O1VBRXZHLGlCQUFpQixHQUFHLGNBQWMsQ0FBQyx5QkFBeUI7Ozs7SUFBQyxDQUFDLEtBQVEsRUFBRSxFQUFFLENBQUMsS0FBSyxDQUFDLEtBQUssRUFBQzs7VUFFdkYsb0JBQW9CLEdBQUcsY0FBYyxDQUFDLHlCQUF5Qjs7OztJQUFDLENBQUMsS0FBUSxFQUFFLEVBQUUsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBQzs7VUFFL0YsbUJBQW1CLEdBQUcsY0FBYyxDQUFDLHlCQUF5Qjs7OztJQUFDLENBQUMsS0FBUSxFQUFFLEVBQUUsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksRUFBQztJQUVuRyxPQUFPO1FBQ04sd0JBQXdCO1FBQ3hCLGlCQUFpQjtRQUNqQix5QkFBeUI7UUFDekIsbUJBQW1CO1FBQ25CLGlCQUFpQjtRQUNqQixpQkFBaUI7UUFDakIsb0JBQW9CO1FBQ3BCLG1CQUFtQjtLQUNuQixDQUFBO0FBQ0YsQ0FBQyxDQUFBOzs7OztBQUVzQyxHQUFHLEVBQUU7O1FBQ3ZDLEtBQUs7SUFDVDs7OztJQUFPLEdBQWdHLEVBQUUsQ0FBQyxLQUFLLEdBQUcsS0FBSztRQUN0SCxDQUFDLENBQUMsS0FBSztRQUNQLENBQUMsQ0FBQyxxQkFBcUIsRUFBSyxFQUFDO0FBQy9CLENBQUM7O0FBTEQsTUFBTSxPQUFPLHNCQUFzQixHQUFHLE1BS3BDLEVBQUUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVTZWxlY3RvciwgY3JlYXRlRmVhdHVyZVNlbGVjdG9yLCBNZW1vaXplZFNlbGVjdG9yIH0gZnJvbSAnQG5ncngvc3RvcmUnO1xuXG5pbXBvcnQgeyBEYWZmUGF5cGFsUmVkdWNlclN0YXRlIH0gZnJvbSAnLi4vcmVkdWNlcnMvcGF5cGFsL3BheXBhbC1yZWR1Y2VyLmludGVyZmFjZSc7XG5pbXBvcnQgeyBEYWZmUGF5cGFsUmVkdWNlcnNTdGF0ZSB9IGZyb20gJy4uL3JlZHVjZXJzL3BheXBhbC1yZWR1Y2Vycy5pbnRlcmZhY2UnO1xuaW1wb3J0IHsgRGFmZlBheXBhbFRva2VuUmVzcG9uc2UgfSBmcm9tICcuLi9tb2RlbHMvcGF5cGFsLXRva2VuLXJlc3BvbnNlJztcblxuZXhwb3J0IGludGVyZmFjZSBEYWZmUGF5cGFsTWVtb2l6ZWRTZWxlY3RvcnM8VCBleHRlbmRzIERhZmZQYXlwYWxUb2tlblJlc3BvbnNlID0gRGFmZlBheXBhbFRva2VuUmVzcG9uc2U+IHtcblx0c2VsZWN0UGF5cGFsRmVhdHVyZVN0YXRlOiBNZW1vaXplZFNlbGVjdG9yPG9iamVjdCwgRGFmZlBheXBhbFJlZHVjZXJzU3RhdGU8VD4+O1xuXHRzZWxlY3RQYXlwYWxTdGF0ZTogTWVtb2l6ZWRTZWxlY3RvcjxvYmplY3QsIERhZmZQYXlwYWxSZWR1Y2VyU3RhdGU8VD4+O1xuXHRzZWxlY3RQYXlwYWxUb2tlblJlc3BvbnNlOiBNZW1vaXplZFNlbGVjdG9yPG9iamVjdCwgVD47XG5cdHNlbGVjdFBheXBhbExvYWRpbmc6IE1lbW9pemVkU2VsZWN0b3I8b2JqZWN0LCBib29sZWFuPjtcblx0c2VsZWN0UGF5cGFsRXJyb3I6IE1lbW9pemVkU2VsZWN0b3I8b2JqZWN0LCBzdHJpbmc+O1xuXHRzZWxlY3RQYXlwYWxUb2tlbjogTWVtb2l6ZWRTZWxlY3RvcjxvYmplY3QsIHN0cmluZz47XG5cdHNlbGVjdFBheXBhbFN0YXJ0VXJsOiBNZW1vaXplZFNlbGVjdG9yPG9iamVjdCwgc3RyaW5nPjtcblx0c2VsZWN0UGF5cGFsRWRpdFVybDogTWVtb2l6ZWRTZWxlY3RvcjxvYmplY3QsIHN0cmluZz47XG59XG5cbmNvbnN0IGNyZWF0ZVBheXBhbFNlbGVjdG9ycyA9IDxUIGV4dGVuZHMgRGFmZlBheXBhbFRva2VuUmVzcG9uc2U+KCk6IERhZmZQYXlwYWxNZW1vaXplZFNlbGVjdG9yczxUPiA9PiB7XG5cblx0LyoqXG5cdCAqIFBheXBhbCBGZWF0dXJlIFN0YXRlXG5cdCAqL1xuXHRjb25zdCBzZWxlY3RQYXlwYWxGZWF0dXJlU3RhdGUgPSBjcmVhdGVGZWF0dXJlU2VsZWN0b3I8RGFmZlBheXBhbFJlZHVjZXJzU3RhdGU8VD4+KCdwYXlwYWwnKTtcblxuXHQvKipcblx0ICogUGF5cGFsIFN0YXRlXG5cdCAqL1xuXHRjb25zdCBzZWxlY3RQYXlwYWxTdGF0ZSA9IGNyZWF0ZVNlbGVjdG9yKHNlbGVjdFBheXBhbEZlYXR1cmVTdGF0ZSwgKHN0YXRlOiBEYWZmUGF5cGFsUmVkdWNlcnNTdGF0ZTxUPikgPT4gc3RhdGUucGF5cGFsKTtcblxuXHRjb25zdCBzZWxlY3RQYXlwYWxUb2tlblJlc3BvbnNlID0gY3JlYXRlU2VsZWN0b3Ioc2VsZWN0UGF5cGFsU3RhdGUsKHN0YXRlOiBEYWZmUGF5cGFsUmVkdWNlclN0YXRlPFQ+KSA9PiBzdGF0ZS5wYXlwYWxUb2tlblJlc3BvbnNlKTtcblxuXHRjb25zdCBzZWxlY3RQYXlwYWxMb2FkaW5nID0gY3JlYXRlU2VsZWN0b3Ioc2VsZWN0UGF5cGFsU3RhdGUsKHN0YXRlOiBEYWZmUGF5cGFsUmVkdWNlclN0YXRlPFQ+KSA9PiBzdGF0ZS5sb2FkaW5nKTtcblxuXHRjb25zdCBzZWxlY3RQYXlwYWxFcnJvciA9IGNyZWF0ZVNlbGVjdG9yKHNlbGVjdFBheXBhbFN0YXRlLChzdGF0ZTogRGFmZlBheXBhbFJlZHVjZXJTdGF0ZTxUPikgPT4gc3RhdGUuZXJyb3IpO1xuXG5cdGNvbnN0IHNlbGVjdFBheXBhbFRva2VuID0gY3JlYXRlU2VsZWN0b3Ioc2VsZWN0UGF5cGFsVG9rZW5SZXNwb25zZSwoc3RhdGU6IFQpID0+IHN0YXRlLnRva2VuKTtcblxuXHRjb25zdCBzZWxlY3RQYXlwYWxTdGFydFVybCA9IGNyZWF0ZVNlbGVjdG9yKHNlbGVjdFBheXBhbFRva2VuUmVzcG9uc2UsKHN0YXRlOiBUKSA9PiBzdGF0ZS51cmxzLnN0YXJ0KTtcblxuXHRjb25zdCBzZWxlY3RQYXlwYWxFZGl0VXJsID0gY3JlYXRlU2VsZWN0b3Ioc2VsZWN0UGF5cGFsVG9rZW5SZXNwb25zZSwoc3RhdGU6IFQpID0+IHN0YXRlLnVybHMuZWRpdCk7XG5cdFxuXHRyZXR1cm4geyBcblx0XHRzZWxlY3RQYXlwYWxGZWF0dXJlU3RhdGUsXG5cdFx0c2VsZWN0UGF5cGFsU3RhdGUsXG5cdFx0c2VsZWN0UGF5cGFsVG9rZW5SZXNwb25zZSxcblx0XHRzZWxlY3RQYXlwYWxMb2FkaW5nLFxuXHRcdHNlbGVjdFBheXBhbEVycm9yLFxuXHRcdHNlbGVjdFBheXBhbFRva2VuLFxuXHRcdHNlbGVjdFBheXBhbFN0YXJ0VXJsLFxuXHRcdHNlbGVjdFBheXBhbEVkaXRVcmxcblx0fVxufVxuXG5leHBvcnQgY29uc3QgZ2V0RGFmZlBheXBhbFNlbGVjdG9ycyA9ICgoKSA9PiB7XG5cdGxldCBjYWNoZTtcblx0cmV0dXJuIDxUIGV4dGVuZHMgRGFmZlBheXBhbFRva2VuUmVzcG9uc2UgPSBEYWZmUGF5cGFsVG9rZW5SZXNwb25zZT4oKTogRGFmZlBheXBhbE1lbW9pemVkU2VsZWN0b3JzPFQ+ID0+IGNhY2hlID0gY2FjaGUgXG5cdFx0PyBjYWNoZSBcblx0XHQ6IGNyZWF0ZVBheXBhbFNlbGVjdG9yczxUPigpO1xufSkoKTtcbiJdfQ==