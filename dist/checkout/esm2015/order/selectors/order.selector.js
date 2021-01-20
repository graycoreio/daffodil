/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { createSelector, createFeatureSelector } from '@ngrx/store';
/**
 * Order Feature State
 * @deprecated
 * @type {?}
 */
export const selectOrderFeatureState = createFeatureSelector('order');
const ɵ0 = /**
 * @param {?} state
 * @return {?}
 */
(state) => state.order;
/**
 * Order State
 * @deprecated
 * @type {?}
 */
export const selectOrderState = createSelector(selectOrderFeatureState, (ɵ0))
/**
 * @deprecated
 */
;
const ɵ1 = /**
 * @param {?} state
 * @return {?}
 */
(state) => state.order;
/**
 * @deprecated
 * @type {?}
 */
export const selectOrder = createSelector(selectOrderState, (ɵ1))
/**
 * @deprecated
 */
;
const ɵ2 = /**
 * @param {?} state
 * @return {?}
 */
(state) => state.loading;
/**
 * @deprecated
 * @type {?}
 */
export const selectLoading = createSelector(selectOrderState, (ɵ2))
/**
 * @deprecated
 */
;
const ɵ3 = /**
 * @param {?} state
 * @return {?}
 */
(state) => state.errors;
/**
 * @deprecated
 * @type {?}
 */
export const selectErrors = createSelector(selectOrderState, (ɵ3));
export { ɵ0, ɵ1, ɵ2, ɵ3 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3JkZXIuc2VsZWN0b3IuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGFmZm9kaWwvY2hlY2tvdXQvIiwic291cmNlcyI6WyJvcmRlci9zZWxlY3RvcnMvb3JkZXIuc2VsZWN0b3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxjQUFjLEVBQUUscUJBQXFCLEVBQW9CLE1BQU0sYUFBYSxDQUFDOzs7Ozs7QUFVdEYsTUFBTSxPQUFPLHVCQUF1QixHQUFxRCxxQkFBcUIsQ0FBeUIsT0FBTyxDQUFDOzs7OztBQVE3SSxDQUFDLEtBQTZCLEVBQUUsRUFBRSxDQUFDLEtBQUssQ0FBQyxLQUFLOzs7Ozs7QUFGaEQsTUFBTSxPQUFPLGdCQUFnQixHQUFHLGNBQWMsQ0FDNUMsdUJBQXVCLE9BRXhCO0FBRUQ7O0dBRUc7Ozs7OztBQUdELENBQUMsS0FBNEIsRUFBRSxFQUFFLENBQUMsS0FBSyxDQUFDLEtBQUs7Ozs7O0FBRi9DLE1BQU0sT0FBTyxXQUFXLEdBQXdDLGNBQWMsQ0FDNUUsZ0JBQWdCLE9BRWpCO0FBRUQ7O0dBRUc7Ozs7OztBQUdELENBQUMsS0FBNEIsRUFBRSxFQUFFLENBQUMsS0FBSyxDQUFDLE9BQU87Ozs7O0FBRmpELE1BQU0sT0FBTyxhQUFhLEdBQXNDLGNBQWMsQ0FDNUUsZ0JBQWdCLE9BRWpCO0FBRUQ7O0dBRUc7Ozs7OztBQUdELENBQUMsS0FBNEIsRUFBRSxFQUFFLENBQUMsS0FBSyxDQUFDLE1BQU07Ozs7O0FBRmhELE1BQU0sT0FBTyxZQUFZLEdBQXVDLGNBQWMsQ0FDNUUsZ0JBQWdCLE9BRWpCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlU2VsZWN0b3IsIGNyZWF0ZUZlYXR1cmVTZWxlY3RvciwgTWVtb2l6ZWRTZWxlY3RvciB9IGZyb20gJ0BuZ3J4L3N0b3JlJztcblxuaW1wb3J0IHsgRGFmZk9yZGVyIH0gZnJvbSAnLi4vLi4vbW9kZWxzL29yZGVyL29yZGVyJztcbmltcG9ydCB7IERhZmZPcmRlclJlZHVjZXJzU3RhdGUgfSBmcm9tICcuLi9yZWR1Y2Vycy9vcmRlci1yZWR1Y2Vycy5pbnRlcmZhY2UnO1xuaW1wb3J0IHsgRGFmZk9yZGVyUmVkdWNlclN0YXRlIH0gZnJvbSAnLi4vcmVkdWNlcnMvb3JkZXIvb3JkZXItcmVkdWNlci5pbnRlcmZhY2UnO1xuXG4vKipcbiAqIE9yZGVyIEZlYXR1cmUgU3RhdGVcbiAqIEBkZXByZWNhdGVkXG4gKi9cbmV4cG9ydCBjb25zdCBzZWxlY3RPcmRlckZlYXR1cmVTdGF0ZTogTWVtb2l6ZWRTZWxlY3RvcjxvYmplY3QsIERhZmZPcmRlclJlZHVjZXJzU3RhdGU+ID0gY3JlYXRlRmVhdHVyZVNlbGVjdG9yPERhZmZPcmRlclJlZHVjZXJzU3RhdGU+KCdvcmRlcicpO1xuXG4vKipcbiAqIE9yZGVyIFN0YXRlXG4gKiBAZGVwcmVjYXRlZFxuICovXG5leHBvcnQgY29uc3Qgc2VsZWN0T3JkZXJTdGF0ZSA9IGNyZWF0ZVNlbGVjdG9yKFxuICBzZWxlY3RPcmRlckZlYXR1cmVTdGF0ZSxcbiAgKHN0YXRlOiBEYWZmT3JkZXJSZWR1Y2Vyc1N0YXRlKSA9PiBzdGF0ZS5vcmRlclxuKVxuXG4vKipcbiAqIEBkZXByZWNhdGVkXG4gKi9cbmV4cG9ydCBjb25zdCBzZWxlY3RPcmRlcjogTWVtb2l6ZWRTZWxlY3RvcjxvYmplY3QsIERhZmZPcmRlcj4gPSBjcmVhdGVTZWxlY3RvcihcbiAgc2VsZWN0T3JkZXJTdGF0ZSxcbiAgKHN0YXRlOiBEYWZmT3JkZXJSZWR1Y2VyU3RhdGUpID0+IHN0YXRlLm9yZGVyXG4pXG5cbi8qKlxuICogQGRlcHJlY2F0ZWRcbiAqL1xuZXhwb3J0IGNvbnN0IHNlbGVjdExvYWRpbmc6IE1lbW9pemVkU2VsZWN0b3I8b2JqZWN0LCBib29sZWFuPiA9IGNyZWF0ZVNlbGVjdG9yKFxuICBzZWxlY3RPcmRlclN0YXRlLFxuICAoc3RhdGU6IERhZmZPcmRlclJlZHVjZXJTdGF0ZSkgPT4gc3RhdGUubG9hZGluZ1xuKVxuXG4vKipcbiAqIEBkZXByZWNhdGVkXG4gKi9cbmV4cG9ydCBjb25zdCBzZWxlY3RFcnJvcnM6IE1lbW9pemVkU2VsZWN0b3I8b2JqZWN0LCBzdHJpbmdbXT4gPSBjcmVhdGVTZWxlY3RvcihcbiAgc2VsZWN0T3JkZXJTdGF0ZSxcbiAgKHN0YXRlOiBEYWZmT3JkZXJSZWR1Y2VyU3RhdGUpID0+IHN0YXRlLmVycm9yc1xuKVxuIl19