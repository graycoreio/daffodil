/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { createSelector, createFeatureSelector } from '@ngrx/store';
import { DAFF_NAVIGATION_STORE_FEATURE_KEY } from '../reducers/public_api';
/**
 * @record
 * @template T
 */
export function DaffNavigationMemoizedSelectors() { }
if (false) {
    /** @type {?} */
    DaffNavigationMemoizedSelectors.prototype.selectNavigationFeatureState;
    /** @type {?} */
    DaffNavigationMemoizedSelectors.prototype.selectNavigationState;
    /** @type {?} */
    DaffNavigationMemoizedSelectors.prototype.selectNavigationTree;
    /** @type {?} */
    DaffNavigationMemoizedSelectors.prototype.selectNavigationLoading;
    /** @type {?} */
    DaffNavigationMemoizedSelectors.prototype.selectNavigationErrors;
}
/** @type {?} */
var createNavigationFeatureSelectors = (/**
 * @template T
 * @return {?}
 */
function () {
    /** @type {?} */
    var selectNavigationFeatureState = createFeatureSelector(DAFF_NAVIGATION_STORE_FEATURE_KEY);
    /** @type {?} */
    var selectNavigationState = createSelector(selectNavigationFeatureState, (/**
     * @param {?} state
     * @return {?}
     */
    function (state) { return state.navigation; }));
    /** @type {?} */
    var selectNavigationTree = createSelector(selectNavigationState, (/**
     * @param {?} state
     * @return {?}
     */
    function (state) { return state.navigationTree; }));
    /** @type {?} */
    var selectNavigationLoading = createSelector(selectNavigationState, (/**
     * @param {?} state
     * @return {?}
     */
    function (state) { return state.loading; }));
    /** @type {?} */
    var selectNavigationErrors = createSelector(selectNavigationState, (/**
     * @param {?} state
     * @return {?}
     */
    function (state) { return state.errors; }));
    return {
        selectNavigationFeatureState: selectNavigationFeatureState,
        selectNavigationState: selectNavigationState,
        selectNavigationTree: selectNavigationTree,
        selectNavigationLoading: selectNavigationLoading,
        selectNavigationErrors: selectNavigationErrors
    };
});
var ɵ0 = createNavigationFeatureSelectors;
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
        : createNavigationFeatureSelectors(); });
};
/** @type {?} */
export var getDaffNavigationSelectors = ((ɵ1))();
export { ɵ0, ɵ1 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmF2aWdhdGlvbi5zZWxlY3Rvci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkYWZmb2RpbC9uYXZpZ2F0aW9uL3N0YXRlLyIsInNvdXJjZXMiOlsic2VsZWN0b3JzL25hdmlnYXRpb24uc2VsZWN0b3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxjQUFjLEVBQUUscUJBQXFCLEVBQW9CLE1BQU0sYUFBYSxDQUFDO0FBSXRGLE9BQU8sRUFBMkQsaUNBQWlDLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQzs7Ozs7QUFFcEkscURBTUM7OztJQUxBLHVFQUF1Rjs7SUFDdkYsZ0VBQStFOztJQUMvRSwrREFBa0Q7O0lBQ2xELGtFQUEyRDs7SUFDM0QsaUVBQTJEOzs7SUFHdEQsZ0NBQWdDOzs7O0FBQUc7O1FBRWxDLDRCQUE0QixHQUFHLHFCQUFxQixDQUFpQyxpQ0FBaUMsQ0FBQzs7UUFFdkgscUJBQXFCLEdBQUcsY0FBYyxDQUMzQyw0QkFBNEI7Ozs7SUFDNUIsVUFBQyxLQUFxQyxJQUFLLE9BQUEsS0FBSyxDQUFDLFVBQVUsRUFBaEIsQ0FBZ0IsRUFDM0Q7O1FBRUssb0JBQW9CLEdBQUcsY0FBYyxDQUMxQyxxQkFBcUI7Ozs7SUFDckIsVUFBQyxLQUFvQyxJQUFLLE9BQUEsS0FBSyxDQUFDLGNBQWMsRUFBcEIsQ0FBb0IsRUFDOUQ7O1FBRUssdUJBQXVCLEdBQUcsY0FBYyxDQUM3QyxxQkFBcUI7Ozs7SUFDckIsVUFBQyxLQUFvQyxJQUFLLE9BQUEsS0FBSyxDQUFDLE9BQU8sRUFBYixDQUFhLEVBQ3ZEOztRQUVLLHNCQUFzQixHQUFHLGNBQWMsQ0FDNUMscUJBQXFCOzs7O0lBQ3JCLFVBQUMsS0FBb0MsSUFBSyxPQUFBLEtBQUssQ0FBQyxNQUFNLEVBQVosQ0FBWSxFQUN0RDtJQUVELE9BQU87UUFDTiw0QkFBNEIsOEJBQUE7UUFDNUIscUJBQXFCLHVCQUFBO1FBQ3JCLG9CQUFvQixzQkFBQTtRQUNwQix1QkFBdUIseUJBQUE7UUFDdkIsc0JBQXNCLHdCQUFBO0tBQ3RCLENBQUE7QUFDRixDQUFDLENBQUE7Ozs7O0FBRTBDOztRQUN0QyxLQUFLO0lBQ1Q7Ozs7SUFBTyxjQUFrRixPQUFBLEtBQUssR0FBRyxLQUFLO1FBQ3JHLENBQUMsQ0FBQyxLQUFLO1FBQ1AsQ0FBQyxDQUFDLGdDQUFnQyxFQUFLLEVBRmlELENBRWpELEVBQUM7QUFDMUMsQ0FBQzs7QUFMRCxNQUFNLEtBQU8sMEJBQTBCLEdBQUcsTUFLeEMsRUFBRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZVNlbGVjdG9yLCBjcmVhdGVGZWF0dXJlU2VsZWN0b3IsIE1lbW9pemVkU2VsZWN0b3IgfSBmcm9tICdAbmdyeC9zdG9yZSc7XG5cbmltcG9ydCB7IERhZmZHZW5lcmljTmF2aWdhdGlvblRyZWUgfSBmcm9tICdAZGFmZm9kaWwvbmF2aWdhdGlvbic7XG5cbmltcG9ydCB7IERhZmZOYXZpZ2F0aW9uUmVkdWNlcnNTdGF0ZSwgRGFmZk5hdmlnYXRpb25SZWR1Y2VyU3RhdGUsIERBRkZfTkFWSUdBVElPTl9TVE9SRV9GRUFUVVJFX0tFWSB9IGZyb20gJy4uL3JlZHVjZXJzL3B1YmxpY19hcGknO1xuXG5leHBvcnQgaW50ZXJmYWNlIERhZmZOYXZpZ2F0aW9uTWVtb2l6ZWRTZWxlY3RvcnM8VCBleHRlbmRzIERhZmZHZW5lcmljTmF2aWdhdGlvblRyZWU8VD4+IHtcblx0c2VsZWN0TmF2aWdhdGlvbkZlYXR1cmVTdGF0ZTogTWVtb2l6ZWRTZWxlY3RvcjxvYmplY3QsIERhZmZOYXZpZ2F0aW9uUmVkdWNlcnNTdGF0ZTxUPj47XG5cdHNlbGVjdE5hdmlnYXRpb25TdGF0ZTogTWVtb2l6ZWRTZWxlY3RvcjxvYmplY3QsIERhZmZOYXZpZ2F0aW9uUmVkdWNlclN0YXRlPFQ+Pjtcblx0c2VsZWN0TmF2aWdhdGlvblRyZWU6IE1lbW9pemVkU2VsZWN0b3I8b2JqZWN0LCBUPjtcblx0c2VsZWN0TmF2aWdhdGlvbkxvYWRpbmc6IE1lbW9pemVkU2VsZWN0b3I8b2JqZWN0LCBib29sZWFuPjtcblx0c2VsZWN0TmF2aWdhdGlvbkVycm9yczogTWVtb2l6ZWRTZWxlY3RvcjxvYmplY3QsIHN0cmluZ1tdPjtcbn1cblxuY29uc3QgY3JlYXRlTmF2aWdhdGlvbkZlYXR1cmVTZWxlY3RvcnMgPSA8VCBleHRlbmRzIERhZmZHZW5lcmljTmF2aWdhdGlvblRyZWU8VD4+KCk6IERhZmZOYXZpZ2F0aW9uTWVtb2l6ZWRTZWxlY3RvcnM8VD4gPT4ge1xuXG5cdGNvbnN0IHNlbGVjdE5hdmlnYXRpb25GZWF0dXJlU3RhdGUgPSBjcmVhdGVGZWF0dXJlU2VsZWN0b3I8RGFmZk5hdmlnYXRpb25SZWR1Y2Vyc1N0YXRlPFQ+PihEQUZGX05BVklHQVRJT05fU1RPUkVfRkVBVFVSRV9LRVkpO1xuXG5cdGNvbnN0IHNlbGVjdE5hdmlnYXRpb25TdGF0ZSA9IGNyZWF0ZVNlbGVjdG9yKFxuXHRcdHNlbGVjdE5hdmlnYXRpb25GZWF0dXJlU3RhdGUsXG5cdFx0KHN0YXRlOiBEYWZmTmF2aWdhdGlvblJlZHVjZXJzU3RhdGU8VD4pID0+IHN0YXRlLm5hdmlnYXRpb25cblx0KTtcblxuXHRjb25zdCBzZWxlY3ROYXZpZ2F0aW9uVHJlZSA9IGNyZWF0ZVNlbGVjdG9yKFxuXHRcdHNlbGVjdE5hdmlnYXRpb25TdGF0ZSxcblx0XHQoc3RhdGU6IERhZmZOYXZpZ2F0aW9uUmVkdWNlclN0YXRlPFQ+KSA9PiBzdGF0ZS5uYXZpZ2F0aW9uVHJlZVxuXHQpO1xuXG5cdGNvbnN0IHNlbGVjdE5hdmlnYXRpb25Mb2FkaW5nID0gY3JlYXRlU2VsZWN0b3IoXG5cdFx0c2VsZWN0TmF2aWdhdGlvblN0YXRlLFxuXHRcdChzdGF0ZTogRGFmZk5hdmlnYXRpb25SZWR1Y2VyU3RhdGU8VD4pID0+IHN0YXRlLmxvYWRpbmdcblx0KTtcblxuXHRjb25zdCBzZWxlY3ROYXZpZ2F0aW9uRXJyb3JzID0gY3JlYXRlU2VsZWN0b3IoXG5cdFx0c2VsZWN0TmF2aWdhdGlvblN0YXRlLFxuXHRcdChzdGF0ZTogRGFmZk5hdmlnYXRpb25SZWR1Y2VyU3RhdGU8VD4pID0+IHN0YXRlLmVycm9yc1xuXHQpO1xuXG5cdHJldHVybiB7XG5cdFx0c2VsZWN0TmF2aWdhdGlvbkZlYXR1cmVTdGF0ZSxcblx0XHRzZWxlY3ROYXZpZ2F0aW9uU3RhdGUsXG5cdFx0c2VsZWN0TmF2aWdhdGlvblRyZWUsXG5cdFx0c2VsZWN0TmF2aWdhdGlvbkxvYWRpbmcsXG5cdFx0c2VsZWN0TmF2aWdhdGlvbkVycm9yc1xuXHR9XG59XG5cbmV4cG9ydCBjb25zdCBnZXREYWZmTmF2aWdhdGlvblNlbGVjdG9ycyA9ICgoKSA9PiB7XG5cdGxldCBjYWNoZTtcblx0cmV0dXJuIDxUIGV4dGVuZHMgRGFmZkdlbmVyaWNOYXZpZ2F0aW9uVHJlZTxUPj4oKTogRGFmZk5hdmlnYXRpb25NZW1vaXplZFNlbGVjdG9yczxUPiA9PiBjYWNoZSA9IGNhY2hlXG5cdFx0PyBjYWNoZVxuXHRcdDogY3JlYXRlTmF2aWdhdGlvbkZlYXR1cmVTZWxlY3RvcnM8VD4oKTtcbn0pKCk7XG4iXX0=