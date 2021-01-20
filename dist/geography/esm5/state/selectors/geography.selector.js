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
var createGeographySelectors = (/**
 * @template T
 * @return {?}
 */
function () {
    var selectGeographyFeatureState = getDaffGeographyFeatureStateSelector().selectGeographyFeatureState;
    /** @type {?} */
    var selectGeographyState = createSelector(selectGeographyFeatureState, (/**
     * @param {?} state
     * @return {?}
     */
    function (state) { return state.geography; }));
    /** @type {?} */
    var selectGeographyLoading = createSelector(selectGeographyState, (/**
     * @param {?} state
     * @return {?}
     */
    function (state) { return state.loading; }));
    /** @type {?} */
    var selectGeographyErrors = createSelector(selectGeographyState, (/**
     * @param {?} state
     * @return {?}
     */
    function (state) { return state.errors; }));
    return {
        selectGeographyState: selectGeographyState,
        selectGeographyLoading: selectGeographyLoading,
        selectGeographyErrors: selectGeographyErrors
    };
});
var ɵ0 = createGeographySelectors;
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
    function () {
        return cache = cache || createGeographySelectors();
    });
};
/** @type {?} */
export var getGeographySelectors = ((ɵ1))();
export { ɵ0, ɵ1 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2VvZ3JhcGh5LnNlbGVjdG9yLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRhZmZvZGlsL2dlb2dyYXBoeS9zdGF0ZS8iLCJzb3VyY2VzIjpbInNlbGVjdG9ycy9nZW9ncmFwaHkuc2VsZWN0b3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxjQUFjLEVBQW9CLE1BQU0sYUFBYSxDQUFDO0FBSS9ELE9BQU8sRUFBRSxvQ0FBb0MsRUFBRSxNQUFNLDhCQUE4QixDQUFDOzs7O0FBS3BGLDRDQUlDOzs7SUFIQyxzREFBMEU7O0lBQzFFLHdEQUEwRDs7SUFDMUQsdURBQTBEOzs7SUFHdEQsd0JBQXdCOzs7O0FBQUc7SUFDdkIsSUFBQSxnR0FBMkI7O1FBQzdCLG9CQUFvQixHQUFHLGNBQWMsQ0FDekMsMkJBQTJCOzs7O0lBQzNCLFVBQUEsS0FBSyxJQUFJLE9BQUEsS0FBSyxDQUFDLFNBQVMsRUFBZixDQUFlLEVBQ3pCOztRQUVLLHNCQUFzQixHQUFHLGNBQWMsQ0FDM0Msb0JBQW9COzs7O0lBQ3BCLFVBQUEsS0FBSyxJQUFJLE9BQUEsS0FBSyxDQUFDLE9BQU8sRUFBYixDQUFhLEVBQ3ZCOztRQUVLLHFCQUFxQixHQUFHLGNBQWMsQ0FDMUMsb0JBQW9COzs7O0lBQ3BCLFVBQUEsS0FBSyxJQUFJLE9BQUEsS0FBSyxDQUFDLE1BQU0sRUFBWixDQUFZLEVBQ3RCO0lBRUQsT0FBTztRQUNMLG9CQUFvQixzQkFBQTtRQUNwQixzQkFBc0Isd0JBQUE7UUFDdEIscUJBQXFCLHVCQUFBO0tBQ3RCLENBQUE7QUFDSCxDQUFDLENBQUE7Ozs7O0FBRXFDOztRQUNoQyxLQUFLO0lBQ1Q7Ozs7SUFBTztRQUNMLE9BQUEsS0FBSyxHQUFHLEtBQUssSUFBSSx3QkFBd0IsRUFBSztJQUE5QyxDQUE4QyxFQUFBO0FBQ2xELENBQUM7O0FBSkQsTUFBTSxLQUFPLHFCQUFxQixHQUFHLE1BSW5DLEVBQUUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVTZWxlY3RvciwgTWVtb2l6ZWRTZWxlY3RvciB9IGZyb20gJ0BuZ3J4L3N0b3JlJztcblxuaW1wb3J0IHsgRGFmZkNvdW50cnkgfSBmcm9tICdAZGFmZm9kaWwvZ2VvZ3JhcGh5JztcblxuaW1wb3J0IHsgZ2V0RGFmZkdlb2dyYXBoeUZlYXR1cmVTdGF0ZVNlbGVjdG9yIH0gZnJvbSAnLi9nZW9ncmFwaHktZmVhdHVyZS5zZWxlY3Rvcic7XG5pbXBvcnQge1xuICBEYWZmR2VvZ3JhcGh5UmVkdWNlclN0YXRlLFxufSBmcm9tICcuLi9yZWR1Y2Vycy9wdWJsaWNfYXBpJztcblxuZXhwb3J0IGludGVyZmFjZSBEYWZmR2VvZ3JhcGh5U2VsZWN0b3JzIHtcbiAgc2VsZWN0R2VvZ3JhcGh5U3RhdGU6IE1lbW9pemVkU2VsZWN0b3I8b2JqZWN0LCBEYWZmR2VvZ3JhcGh5UmVkdWNlclN0YXRlPjtcbiAgc2VsZWN0R2VvZ3JhcGh5TG9hZGluZzogTWVtb2l6ZWRTZWxlY3RvcjxvYmplY3QsIGJvb2xlYW4+O1xuICBzZWxlY3RHZW9ncmFwaHlFcnJvcnM6IE1lbW9pemVkU2VsZWN0b3I8b2JqZWN0LCBzdHJpbmdbXT47XG59XG5cbmNvbnN0IGNyZWF0ZUdlb2dyYXBoeVNlbGVjdG9ycyA9IDxUIGV4dGVuZHMgRGFmZkNvdW50cnkgPSBEYWZmQ291bnRyeT4oKSA9PiB7XG4gIGNvbnN0IHsgc2VsZWN0R2VvZ3JhcGh5RmVhdHVyZVN0YXRlIH0gPSBnZXREYWZmR2VvZ3JhcGh5RmVhdHVyZVN0YXRlU2VsZWN0b3I8VD4oKTtcbiAgY29uc3Qgc2VsZWN0R2VvZ3JhcGh5U3RhdGUgPSBjcmVhdGVTZWxlY3RvcihcbiAgICBzZWxlY3RHZW9ncmFwaHlGZWF0dXJlU3RhdGUsXG4gICAgc3RhdGUgPT4gc3RhdGUuZ2VvZ3JhcGh5XG4gICk7XG5cbiAgY29uc3Qgc2VsZWN0R2VvZ3JhcGh5TG9hZGluZyA9IGNyZWF0ZVNlbGVjdG9yKFxuICAgIHNlbGVjdEdlb2dyYXBoeVN0YXRlLFxuICAgIHN0YXRlID0+IHN0YXRlLmxvYWRpbmdcbiAgKTtcblxuICBjb25zdCBzZWxlY3RHZW9ncmFwaHlFcnJvcnMgPSBjcmVhdGVTZWxlY3RvcihcbiAgICBzZWxlY3RHZW9ncmFwaHlTdGF0ZSxcbiAgICBzdGF0ZSA9PiBzdGF0ZS5lcnJvcnNcbiAgKTtcblxuICByZXR1cm4ge1xuICAgIHNlbGVjdEdlb2dyYXBoeVN0YXRlLFxuICAgIHNlbGVjdEdlb2dyYXBoeUxvYWRpbmcsXG4gICAgc2VsZWN0R2VvZ3JhcGh5RXJyb3JzXG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IGdldEdlb2dyYXBoeVNlbGVjdG9ycyA9ICgoKSA9PiB7XG4gIGxldCBjYWNoZTtcbiAgcmV0dXJuIDxUIGV4dGVuZHMgRGFmZkNvdW50cnkgPSBEYWZmQ291bnRyeT4oKTogRGFmZkdlb2dyYXBoeVNlbGVjdG9ycyA9PlxuICAgIGNhY2hlID0gY2FjaGUgfHwgY3JlYXRlR2VvZ3JhcGh5U2VsZWN0b3JzPFQ+KClcbn0pKCk7XG4iXX0=