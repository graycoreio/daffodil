/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { createSelector } from '@ngrx/store';
import { getDaffOrderReducersStateSelector } from './order-feature.selector';
/**
 * @record
 */
export function DaffOrderSelectors() { }
if (false) {
    /** @type {?} */
    DaffOrderSelectors.prototype.selectOrderState;
    /** @type {?} */
    DaffOrderSelectors.prototype.selectOrderLoading;
    /** @type {?} */
    DaffOrderSelectors.prototype.selectOrderErrors;
}
/** @type {?} */
var createOrderSelectors = (/**
 * @template T
 * @return {?}
 */
function () {
    var selectOrderFeatureState = getDaffOrderReducersStateSelector().selectOrderFeatureState;
    /** @type {?} */
    var selectOrderState = createSelector(selectOrderFeatureState, (/**
     * @param {?} state
     * @return {?}
     */
    function (state) { return state.order; }));
    /** @type {?} */
    var selectOrderLoading = createSelector(selectOrderState, (/**
     * @param {?} state
     * @return {?}
     */
    function (state) { return state.loading; }));
    /** @type {?} */
    var selectOrderErrors = createSelector(selectOrderState, (/**
     * @param {?} state
     * @return {?}
     */
    function (state) { return state.errors; }));
    return {
        selectOrderState: selectOrderState,
        selectOrderLoading: selectOrderLoading,
        selectOrderErrors: selectOrderErrors
    };
});
var ɵ0 = createOrderSelectors;
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
        return cache = cache || createOrderSelectors();
    });
};
/** @type {?} */
export var getOrderSelectors = ((ɵ1))();
export { ɵ0, ɵ1 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3JkZXIuc2VsZWN0b3IuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGFmZm9kaWwvb3JkZXIvc3RhdGUvIiwic291cmNlcyI6WyJzZWxlY3RvcnMvb3JkZXIuc2VsZWN0b3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxjQUFjLEVBQW9CLE1BQU0sYUFBYSxDQUFDO0FBSS9ELE9BQU8sRUFBRSxpQ0FBaUMsRUFBRSxNQUFNLDBCQUEwQixDQUFDOzs7O0FBSzdFLHdDQUlDOzs7SUFIQyw4Q0FBa0U7O0lBQ2xFLGdEQUFzRDs7SUFDdEQsK0NBQXNEOzs7SUFHbEQsb0JBQW9COzs7O0FBQUc7SUFDbkIsSUFBQSxxRkFBdUI7O1FBQ3pCLGdCQUFnQixHQUFHLGNBQWMsQ0FDckMsdUJBQXVCOzs7O0lBQ3ZCLFVBQUEsS0FBSyxJQUFJLE9BQUEsS0FBSyxDQUFDLEtBQUssRUFBWCxDQUFXLEVBQ3JCOztRQUVLLGtCQUFrQixHQUFHLGNBQWMsQ0FDdkMsZ0JBQWdCOzs7O0lBQ2hCLFVBQUEsS0FBSyxJQUFJLE9BQUEsS0FBSyxDQUFDLE9BQU8sRUFBYixDQUFhLEVBQ3ZCOztRQUVLLGlCQUFpQixHQUFHLGNBQWMsQ0FDdEMsZ0JBQWdCOzs7O0lBQ2hCLFVBQUEsS0FBSyxJQUFJLE9BQUEsS0FBSyxDQUFDLE1BQU0sRUFBWixDQUFZLEVBQ3RCO0lBRUQsT0FBTztRQUNMLGdCQUFnQixrQkFBQTtRQUNoQixrQkFBa0Isb0JBQUE7UUFDbEIsaUJBQWlCLG1CQUFBO0tBQ2xCLENBQUE7QUFDSCxDQUFDLENBQUE7Ozs7O0FBRWlDOztRQUM1QixLQUFLO0lBQ1Q7Ozs7SUFBTztRQUNMLE9BQUEsS0FBSyxHQUFHLEtBQUssSUFBSSxvQkFBb0IsRUFBSztJQUExQyxDQUEwQyxFQUFBO0FBQzlDLENBQUM7O0FBSkQsTUFBTSxLQUFPLGlCQUFpQixHQUFHLE1BSS9CLEVBQUUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVTZWxlY3RvciwgTWVtb2l6ZWRTZWxlY3RvciB9IGZyb20gJ0BuZ3J4L3N0b3JlJztcblxuaW1wb3J0IHsgRGFmZk9yZGVyIH0gZnJvbSAnQGRhZmZvZGlsL29yZGVyJztcblxuaW1wb3J0IHsgZ2V0RGFmZk9yZGVyUmVkdWNlcnNTdGF0ZVNlbGVjdG9yIH0gZnJvbSAnLi9vcmRlci1mZWF0dXJlLnNlbGVjdG9yJztcbmltcG9ydCB7XG4gIERhZmZPcmRlclJlZHVjZXJTdGF0ZSxcbn0gZnJvbSAnLi4vcmVkdWNlcnMvcHVibGljX2FwaSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgRGFmZk9yZGVyU2VsZWN0b3JzIHtcbiAgc2VsZWN0T3JkZXJTdGF0ZTogTWVtb2l6ZWRTZWxlY3RvcjxvYmplY3QsIERhZmZPcmRlclJlZHVjZXJTdGF0ZT47XG4gIHNlbGVjdE9yZGVyTG9hZGluZzogTWVtb2l6ZWRTZWxlY3RvcjxvYmplY3QsIGJvb2xlYW4+O1xuICBzZWxlY3RPcmRlckVycm9yczogTWVtb2l6ZWRTZWxlY3RvcjxvYmplY3QsIHN0cmluZ1tdPjtcbn1cblxuY29uc3QgY3JlYXRlT3JkZXJTZWxlY3RvcnMgPSA8VCBleHRlbmRzIERhZmZPcmRlciA9IERhZmZPcmRlcj4oKSA9PiB7XG4gIGNvbnN0IHsgc2VsZWN0T3JkZXJGZWF0dXJlU3RhdGUgfSA9IGdldERhZmZPcmRlclJlZHVjZXJzU3RhdGVTZWxlY3RvcjxUPigpO1xuICBjb25zdCBzZWxlY3RPcmRlclN0YXRlID0gY3JlYXRlU2VsZWN0b3IoXG4gICAgc2VsZWN0T3JkZXJGZWF0dXJlU3RhdGUsXG4gICAgc3RhdGUgPT4gc3RhdGUub3JkZXJcbiAgKTtcblxuICBjb25zdCBzZWxlY3RPcmRlckxvYWRpbmcgPSBjcmVhdGVTZWxlY3RvcihcbiAgICBzZWxlY3RPcmRlclN0YXRlLFxuICAgIHN0YXRlID0+IHN0YXRlLmxvYWRpbmdcbiAgKTtcblxuICBjb25zdCBzZWxlY3RPcmRlckVycm9ycyA9IGNyZWF0ZVNlbGVjdG9yKFxuICAgIHNlbGVjdE9yZGVyU3RhdGUsXG4gICAgc3RhdGUgPT4gc3RhdGUuZXJyb3JzXG4gICk7XG5cbiAgcmV0dXJuIHtcbiAgICBzZWxlY3RPcmRlclN0YXRlLFxuICAgIHNlbGVjdE9yZGVyTG9hZGluZyxcbiAgICBzZWxlY3RPcmRlckVycm9yc1xuICB9XG59XG5cbmV4cG9ydCBjb25zdCBnZXRPcmRlclNlbGVjdG9ycyA9ICgoKSA9PiB7XG4gIGxldCBjYWNoZTtcbiAgcmV0dXJuIDxUIGV4dGVuZHMgRGFmZk9yZGVyID0gRGFmZk9yZGVyPigpOiBEYWZmT3JkZXJTZWxlY3RvcnMgPT5cbiAgICBjYWNoZSA9IGNhY2hlIHx8IGNyZWF0ZU9yZGVyU2VsZWN0b3JzPFQ+KClcbn0pKCk7XG4iXX0=