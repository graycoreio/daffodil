/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { createSelector, createFeatureSelector } from '@ngrx/store';
/**
 * Payment Feature State
 * @type {?}
 */
export var selectPaymentFeatureState = createFeatureSelector('payment');
var ɵ0 = /**
 * @param {?} state
 * @return {?}
 */
function (state) { return state.payment; };
/**
 * Payment State
 * @type {?}
 */
export var selectPaymentState = createSelector(selectPaymentFeatureState, (ɵ0));
var ɵ1 = /**
 * @param {?} state
 * @return {?}
 */
function (state) { return state.paymentInfo; };
/** @type {?} */
export var selectPaymentInfo = createSelector(selectPaymentState, (ɵ1));
export { ɵ0, ɵ1 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGF5bWVudC5zZWxlY3Rvci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkYWZmb2RpbC9jaGVja291dC8iLCJzb3VyY2VzIjpbInBheW1lbnQvc2VsZWN0b3JzL3BheW1lbnQuc2VsZWN0b3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxjQUFjLEVBQUUscUJBQXFCLEVBQUUsTUFBTSxhQUFhLENBQUM7Ozs7O0FBUXBFLE1BQU0sS0FBTyx5QkFBeUIsR0FBRyxxQkFBcUIsQ0FBMkIsU0FBUyxDQUFDOzs7OztBQU9qRyxVQUFDLEtBQStCLElBQUssT0FBQSxLQUFLLENBQUMsT0FBTyxFQUFiLENBQWE7Ozs7O0FBRnBELE1BQU0sS0FBTyxrQkFBa0IsR0FBRyxjQUFjLENBQzlDLHlCQUF5QixPQUUxQjs7Ozs7QUFJQyxVQUFDLEtBQThCLElBQUssT0FBQSxLQUFLLENBQUMsV0FBVyxFQUFqQixDQUFpQjs7QUFGdkQsTUFBTSxLQUFPLGlCQUFpQixHQUFHLGNBQWMsQ0FDN0Msa0JBQWtCLE9BRW5CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlU2VsZWN0b3IsIGNyZWF0ZUZlYXR1cmVTZWxlY3RvciB9IGZyb20gJ0BuZ3J4L3N0b3JlJztcblxuaW1wb3J0IHsgRGFmZlBheW1lbnRSZWR1Y2Vyc1N0YXRlIH0gZnJvbSAnLi4vcmVkdWNlcnMvcGF5bWVudC1yZWR1Y2Vycy5pbnRlcmZhY2UnO1xuaW1wb3J0IHsgRGFmZlBheW1lbnRSZWR1Y2VyU3RhdGUgfSBmcm9tICcuLi9yZWR1Y2Vycy9wYXltZW50L3BheW1lbnQtcmVkdWNlci5pbnRlcmZhY2UnO1xuXG4vKipcbiAqIFBheW1lbnQgRmVhdHVyZSBTdGF0ZVxuICovXG5leHBvcnQgY29uc3Qgc2VsZWN0UGF5bWVudEZlYXR1cmVTdGF0ZSA9IGNyZWF0ZUZlYXR1cmVTZWxlY3RvcjxEYWZmUGF5bWVudFJlZHVjZXJzU3RhdGU+KCdwYXltZW50Jyk7XG5cbi8qKlxuICogUGF5bWVudCBTdGF0ZVxuICovXG5leHBvcnQgY29uc3Qgc2VsZWN0UGF5bWVudFN0YXRlID0gY3JlYXRlU2VsZWN0b3IoXG4gIHNlbGVjdFBheW1lbnRGZWF0dXJlU3RhdGUsXG4gIChzdGF0ZTogRGFmZlBheW1lbnRSZWR1Y2Vyc1N0YXRlKSA9PiBzdGF0ZS5wYXltZW50XG4pXG5cbmV4cG9ydCBjb25zdCBzZWxlY3RQYXltZW50SW5mbyA9IGNyZWF0ZVNlbGVjdG9yKFxuICBzZWxlY3RQYXltZW50U3RhdGUsXG4gIChzdGF0ZTogRGFmZlBheW1lbnRSZWR1Y2VyU3RhdGUpID0+IHN0YXRlLnBheW1lbnRJbmZvXG4pXG4iXX0=