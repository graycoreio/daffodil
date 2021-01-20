/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { createSelector } from '@ngrx/store';
import { getDaffGeographyFeatureStateSelector } from './geography-feature.selector';
/**
 * @record
 */
export function DaffGeographySelectors() { }
if (false) {
    /** @type {?} */
    DaffGeographySelectors.prototype.selectGeographyState;
    /** @type {?} */
    DaffGeographySelectors.prototype.selectGeographyLoading;
    /** @type {?} */
    DaffGeographySelectors.prototype.selectGeographyErrors;
}
/** @type {?} */
const createGeographySelectors = (/**
 * @template T
 * @return {?}
 */
() => {
    const { selectGeographyFeatureState } = getDaffGeographyFeatureStateSelector();
    /** @type {?} */
    const selectGeographyState = createSelector(selectGeographyFeatureState, (/**
     * @param {?} state
     * @return {?}
     */
    state => state.geography));
    /** @type {?} */
    const selectGeographyLoading = createSelector(selectGeographyState, (/**
     * @param {?} state
     * @return {?}
     */
    state => state.loading));
    /** @type {?} */
    const selectGeographyErrors = createSelector(selectGeographyState, (/**
     * @param {?} state
     * @return {?}
     */
    state => state.errors));
    return {
        selectGeographyState,
        selectGeographyLoading,
        selectGeographyErrors
    };
});
const ɵ0 = createGeographySelectors;
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
    () => cache = cache || createGeographySelectors());
};
/** @type {?} */
export const getGeographySelectors = ((ɵ1))();
export { ɵ0, ɵ1 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2VvZ3JhcGh5LnNlbGVjdG9yLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRhZmZvZGlsL2dlb2dyYXBoeS9zdGF0ZS8iLCJzb3VyY2VzIjpbInNlbGVjdG9ycy9nZW9ncmFwaHkuc2VsZWN0b3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxjQUFjLEVBQW9CLE1BQU0sYUFBYSxDQUFDO0FBSS9ELE9BQU8sRUFBRSxvQ0FBb0MsRUFBRSxNQUFNLDhCQUE4QixDQUFDOzs7O0FBS3BGLDRDQUlDOzs7SUFIQyxzREFBMEU7O0lBQzFFLHdEQUEwRDs7SUFDMUQsdURBQTBEOzs7TUFHdEQsd0JBQXdCOzs7O0FBQUcsR0FBd0MsRUFBRTtVQUNuRSxFQUFFLDJCQUEyQixFQUFFLEdBQUcsb0NBQW9DLEVBQUs7O1VBQzNFLG9CQUFvQixHQUFHLGNBQWMsQ0FDekMsMkJBQTJCOzs7O0lBQzNCLEtBQUssQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLFNBQVMsRUFDekI7O1VBRUssc0JBQXNCLEdBQUcsY0FBYyxDQUMzQyxvQkFBb0I7Ozs7SUFDcEIsS0FBSyxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsT0FBTyxFQUN2Qjs7VUFFSyxxQkFBcUIsR0FBRyxjQUFjLENBQzFDLG9CQUFvQjs7OztJQUNwQixLQUFLLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxNQUFNLEVBQ3RCO0lBRUQsT0FBTztRQUNMLG9CQUFvQjtRQUNwQixzQkFBc0I7UUFDdEIscUJBQXFCO0tBQ3RCLENBQUE7QUFDSCxDQUFDLENBQUE7Ozs7O0FBRXFDLEdBQUcsRUFBRTs7UUFDckMsS0FBSztJQUNUOzs7O0lBQU8sR0FBZ0UsRUFBRSxDQUN2RSxLQUFLLEdBQUcsS0FBSyxJQUFJLHdCQUF3QixFQUFLLEVBQUE7QUFDbEQsQ0FBQzs7QUFKRCxNQUFNLE9BQU8scUJBQXFCLEdBQUcsTUFJbkMsRUFBRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZVNlbGVjdG9yLCBNZW1vaXplZFNlbGVjdG9yIH0gZnJvbSAnQG5ncngvc3RvcmUnO1xuXG5pbXBvcnQgeyBEYWZmQ291bnRyeSB9IGZyb20gJ0BkYWZmb2RpbC9nZW9ncmFwaHknO1xuXG5pbXBvcnQgeyBnZXREYWZmR2VvZ3JhcGh5RmVhdHVyZVN0YXRlU2VsZWN0b3IgfSBmcm9tICcuL2dlb2dyYXBoeS1mZWF0dXJlLnNlbGVjdG9yJztcbmltcG9ydCB7XG4gIERhZmZHZW9ncmFwaHlSZWR1Y2VyU3RhdGUsXG59IGZyb20gJy4uL3JlZHVjZXJzL3B1YmxpY19hcGknO1xuXG5leHBvcnQgaW50ZXJmYWNlIERhZmZHZW9ncmFwaHlTZWxlY3RvcnMge1xuICBzZWxlY3RHZW9ncmFwaHlTdGF0ZTogTWVtb2l6ZWRTZWxlY3RvcjxvYmplY3QsIERhZmZHZW9ncmFwaHlSZWR1Y2VyU3RhdGU+O1xuICBzZWxlY3RHZW9ncmFwaHlMb2FkaW5nOiBNZW1vaXplZFNlbGVjdG9yPG9iamVjdCwgYm9vbGVhbj47XG4gIHNlbGVjdEdlb2dyYXBoeUVycm9yczogTWVtb2l6ZWRTZWxlY3RvcjxvYmplY3QsIHN0cmluZ1tdPjtcbn1cblxuY29uc3QgY3JlYXRlR2VvZ3JhcGh5U2VsZWN0b3JzID0gPFQgZXh0ZW5kcyBEYWZmQ291bnRyeSA9IERhZmZDb3VudHJ5PigpID0+IHtcbiAgY29uc3QgeyBzZWxlY3RHZW9ncmFwaHlGZWF0dXJlU3RhdGUgfSA9IGdldERhZmZHZW9ncmFwaHlGZWF0dXJlU3RhdGVTZWxlY3RvcjxUPigpO1xuICBjb25zdCBzZWxlY3RHZW9ncmFwaHlTdGF0ZSA9IGNyZWF0ZVNlbGVjdG9yKFxuICAgIHNlbGVjdEdlb2dyYXBoeUZlYXR1cmVTdGF0ZSxcbiAgICBzdGF0ZSA9PiBzdGF0ZS5nZW9ncmFwaHlcbiAgKTtcblxuICBjb25zdCBzZWxlY3RHZW9ncmFwaHlMb2FkaW5nID0gY3JlYXRlU2VsZWN0b3IoXG4gICAgc2VsZWN0R2VvZ3JhcGh5U3RhdGUsXG4gICAgc3RhdGUgPT4gc3RhdGUubG9hZGluZ1xuICApO1xuXG4gIGNvbnN0IHNlbGVjdEdlb2dyYXBoeUVycm9ycyA9IGNyZWF0ZVNlbGVjdG9yKFxuICAgIHNlbGVjdEdlb2dyYXBoeVN0YXRlLFxuICAgIHN0YXRlID0+IHN0YXRlLmVycm9yc1xuICApO1xuXG4gIHJldHVybiB7XG4gICAgc2VsZWN0R2VvZ3JhcGh5U3RhdGUsXG4gICAgc2VsZWN0R2VvZ3JhcGh5TG9hZGluZyxcbiAgICBzZWxlY3RHZW9ncmFwaHlFcnJvcnNcbiAgfVxufVxuXG5leHBvcnQgY29uc3QgZ2V0R2VvZ3JhcGh5U2VsZWN0b3JzID0gKCgpID0+IHtcbiAgbGV0IGNhY2hlO1xuICByZXR1cm4gPFQgZXh0ZW5kcyBEYWZmQ291bnRyeSA9IERhZmZDb3VudHJ5PigpOiBEYWZmR2VvZ3JhcGh5U2VsZWN0b3JzID0+XG4gICAgY2FjaGUgPSBjYWNoZSB8fCBjcmVhdGVHZW9ncmFwaHlTZWxlY3RvcnM8VD4oKVxufSkoKTtcbiJdfQ==