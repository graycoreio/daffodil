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
const createNavigationFeatureSelectors = (/**
 * @template T
 * @return {?}
 */
() => {
    /** @type {?} */
    const selectNavigationFeatureState = createFeatureSelector(DAFF_NAVIGATION_STORE_FEATURE_KEY);
    /** @type {?} */
    const selectNavigationState = createSelector(selectNavigationFeatureState, (/**
     * @param {?} state
     * @return {?}
     */
    (state) => state.navigation));
    /** @type {?} */
    const selectNavigationTree = createSelector(selectNavigationState, (/**
     * @param {?} state
     * @return {?}
     */
    (state) => state.navigationTree));
    /** @type {?} */
    const selectNavigationLoading = createSelector(selectNavigationState, (/**
     * @param {?} state
     * @return {?}
     */
    (state) => state.loading));
    /** @type {?} */
    const selectNavigationErrors = createSelector(selectNavigationState, (/**
     * @param {?} state
     * @return {?}
     */
    (state) => state.errors));
    return {
        selectNavigationFeatureState,
        selectNavigationState,
        selectNavigationTree,
        selectNavigationLoading,
        selectNavigationErrors
    };
});
const ɵ0 = createNavigationFeatureSelectors;
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
        : createNavigationFeatureSelectors());
};
/** @type {?} */
export const getDaffNavigationSelectors = ((ɵ1))();
export { ɵ0, ɵ1 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmF2aWdhdGlvbi5zZWxlY3Rvci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkYWZmb2RpbC9uYXZpZ2F0aW9uL3N0YXRlLyIsInNvdXJjZXMiOlsic2VsZWN0b3JzL25hdmlnYXRpb24uc2VsZWN0b3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxjQUFjLEVBQUUscUJBQXFCLEVBQW9CLE1BQU0sYUFBYSxDQUFDO0FBSXRGLE9BQU8sRUFBMkQsaUNBQWlDLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQzs7Ozs7QUFFcEkscURBTUM7OztJQUxBLHVFQUF1Rjs7SUFDdkYsZ0VBQStFOztJQUMvRSwrREFBa0Q7O0lBQ2xELGtFQUEyRDs7SUFDM0QsaUVBQTJEOzs7TUFHdEQsZ0NBQWdDOzs7O0FBQUcsR0FBK0UsRUFBRTs7VUFFbkgsNEJBQTRCLEdBQUcscUJBQXFCLENBQWlDLGlDQUFpQyxDQUFDOztVQUV2SCxxQkFBcUIsR0FBRyxjQUFjLENBQzNDLDRCQUE0Qjs7OztJQUM1QixDQUFDLEtBQXFDLEVBQUUsRUFBRSxDQUFDLEtBQUssQ0FBQyxVQUFVLEVBQzNEOztVQUVLLG9CQUFvQixHQUFHLGNBQWMsQ0FDMUMscUJBQXFCOzs7O0lBQ3JCLENBQUMsS0FBb0MsRUFBRSxFQUFFLENBQUMsS0FBSyxDQUFDLGNBQWMsRUFDOUQ7O1VBRUssdUJBQXVCLEdBQUcsY0FBYyxDQUM3QyxxQkFBcUI7Ozs7SUFDckIsQ0FBQyxLQUFvQyxFQUFFLEVBQUUsQ0FBQyxLQUFLLENBQUMsT0FBTyxFQUN2RDs7VUFFSyxzQkFBc0IsR0FBRyxjQUFjLENBQzVDLHFCQUFxQjs7OztJQUNyQixDQUFDLEtBQW9DLEVBQUUsRUFBRSxDQUFDLEtBQUssQ0FBQyxNQUFNLEVBQ3REO0lBRUQsT0FBTztRQUNOLDRCQUE0QjtRQUM1QixxQkFBcUI7UUFDckIsb0JBQW9CO1FBQ3BCLHVCQUF1QjtRQUN2QixzQkFBc0I7S0FDdEIsQ0FBQTtBQUNGLENBQUMsQ0FBQTs7Ozs7QUFFMEMsR0FBRyxFQUFFOztRQUMzQyxLQUFLO0lBQ1Q7Ozs7SUFBTyxHQUErRSxFQUFFLENBQUMsS0FBSyxHQUFHLEtBQUs7UUFDckcsQ0FBQyxDQUFDLEtBQUs7UUFDUCxDQUFDLENBQUMsZ0NBQWdDLEVBQUssRUFBQztBQUMxQyxDQUFDOztBQUxELE1BQU0sT0FBTywwQkFBMEIsR0FBRyxNQUt4QyxFQUFFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlU2VsZWN0b3IsIGNyZWF0ZUZlYXR1cmVTZWxlY3RvciwgTWVtb2l6ZWRTZWxlY3RvciB9IGZyb20gJ0BuZ3J4L3N0b3JlJztcblxuaW1wb3J0IHsgRGFmZkdlbmVyaWNOYXZpZ2F0aW9uVHJlZSB9IGZyb20gJ0BkYWZmb2RpbC9uYXZpZ2F0aW9uJztcblxuaW1wb3J0IHsgRGFmZk5hdmlnYXRpb25SZWR1Y2Vyc1N0YXRlLCBEYWZmTmF2aWdhdGlvblJlZHVjZXJTdGF0ZSwgREFGRl9OQVZJR0FUSU9OX1NUT1JFX0ZFQVRVUkVfS0VZIH0gZnJvbSAnLi4vcmVkdWNlcnMvcHVibGljX2FwaSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgRGFmZk5hdmlnYXRpb25NZW1vaXplZFNlbGVjdG9yczxUIGV4dGVuZHMgRGFmZkdlbmVyaWNOYXZpZ2F0aW9uVHJlZTxUPj4ge1xuXHRzZWxlY3ROYXZpZ2F0aW9uRmVhdHVyZVN0YXRlOiBNZW1vaXplZFNlbGVjdG9yPG9iamVjdCwgRGFmZk5hdmlnYXRpb25SZWR1Y2Vyc1N0YXRlPFQ+Pjtcblx0c2VsZWN0TmF2aWdhdGlvblN0YXRlOiBNZW1vaXplZFNlbGVjdG9yPG9iamVjdCwgRGFmZk5hdmlnYXRpb25SZWR1Y2VyU3RhdGU8VD4+O1xuXHRzZWxlY3ROYXZpZ2F0aW9uVHJlZTogTWVtb2l6ZWRTZWxlY3RvcjxvYmplY3QsIFQ+O1xuXHRzZWxlY3ROYXZpZ2F0aW9uTG9hZGluZzogTWVtb2l6ZWRTZWxlY3RvcjxvYmplY3QsIGJvb2xlYW4+O1xuXHRzZWxlY3ROYXZpZ2F0aW9uRXJyb3JzOiBNZW1vaXplZFNlbGVjdG9yPG9iamVjdCwgc3RyaW5nW10+O1xufVxuXG5jb25zdCBjcmVhdGVOYXZpZ2F0aW9uRmVhdHVyZVNlbGVjdG9ycyA9IDxUIGV4dGVuZHMgRGFmZkdlbmVyaWNOYXZpZ2F0aW9uVHJlZTxUPj4oKTogRGFmZk5hdmlnYXRpb25NZW1vaXplZFNlbGVjdG9yczxUPiA9PiB7XG5cblx0Y29uc3Qgc2VsZWN0TmF2aWdhdGlvbkZlYXR1cmVTdGF0ZSA9IGNyZWF0ZUZlYXR1cmVTZWxlY3RvcjxEYWZmTmF2aWdhdGlvblJlZHVjZXJzU3RhdGU8VD4+KERBRkZfTkFWSUdBVElPTl9TVE9SRV9GRUFUVVJFX0tFWSk7XG5cblx0Y29uc3Qgc2VsZWN0TmF2aWdhdGlvblN0YXRlID0gY3JlYXRlU2VsZWN0b3IoXG5cdFx0c2VsZWN0TmF2aWdhdGlvbkZlYXR1cmVTdGF0ZSxcblx0XHQoc3RhdGU6IERhZmZOYXZpZ2F0aW9uUmVkdWNlcnNTdGF0ZTxUPikgPT4gc3RhdGUubmF2aWdhdGlvblxuXHQpO1xuXG5cdGNvbnN0IHNlbGVjdE5hdmlnYXRpb25UcmVlID0gY3JlYXRlU2VsZWN0b3IoXG5cdFx0c2VsZWN0TmF2aWdhdGlvblN0YXRlLFxuXHRcdChzdGF0ZTogRGFmZk5hdmlnYXRpb25SZWR1Y2VyU3RhdGU8VD4pID0+IHN0YXRlLm5hdmlnYXRpb25UcmVlXG5cdCk7XG5cblx0Y29uc3Qgc2VsZWN0TmF2aWdhdGlvbkxvYWRpbmcgPSBjcmVhdGVTZWxlY3Rvcihcblx0XHRzZWxlY3ROYXZpZ2F0aW9uU3RhdGUsXG5cdFx0KHN0YXRlOiBEYWZmTmF2aWdhdGlvblJlZHVjZXJTdGF0ZTxUPikgPT4gc3RhdGUubG9hZGluZ1xuXHQpO1xuXG5cdGNvbnN0IHNlbGVjdE5hdmlnYXRpb25FcnJvcnMgPSBjcmVhdGVTZWxlY3Rvcihcblx0XHRzZWxlY3ROYXZpZ2F0aW9uU3RhdGUsXG5cdFx0KHN0YXRlOiBEYWZmTmF2aWdhdGlvblJlZHVjZXJTdGF0ZTxUPikgPT4gc3RhdGUuZXJyb3JzXG5cdCk7XG5cblx0cmV0dXJuIHtcblx0XHRzZWxlY3ROYXZpZ2F0aW9uRmVhdHVyZVN0YXRlLFxuXHRcdHNlbGVjdE5hdmlnYXRpb25TdGF0ZSxcblx0XHRzZWxlY3ROYXZpZ2F0aW9uVHJlZSxcblx0XHRzZWxlY3ROYXZpZ2F0aW9uTG9hZGluZyxcblx0XHRzZWxlY3ROYXZpZ2F0aW9uRXJyb3JzXG5cdH1cbn1cblxuZXhwb3J0IGNvbnN0IGdldERhZmZOYXZpZ2F0aW9uU2VsZWN0b3JzID0gKCgpID0+IHtcblx0bGV0IGNhY2hlO1xuXHRyZXR1cm4gPFQgZXh0ZW5kcyBEYWZmR2VuZXJpY05hdmlnYXRpb25UcmVlPFQ+PigpOiBEYWZmTmF2aWdhdGlvbk1lbW9pemVkU2VsZWN0b3JzPFQ+ID0+IGNhY2hlID0gY2FjaGVcblx0XHQ/IGNhY2hlXG5cdFx0OiBjcmVhdGVOYXZpZ2F0aW9uRmVhdHVyZVNlbGVjdG9yczxUPigpO1xufSkoKTtcbiJdfQ==