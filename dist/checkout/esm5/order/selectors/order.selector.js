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
export var selectOrderFeatureState = createFeatureSelector('order');
var ɵ0 = /**
 * @param {?} state
 * @return {?}
 */
function (state) { return state.order; };
/**
 * Order State
 * @deprecated
 * @type {?}
 */
export var selectOrderState = createSelector(selectOrderFeatureState, (ɵ0))
/**
 * @deprecated
 */
;
var ɵ1 = /**
 * @param {?} state
 * @return {?}
 */
function (state) { return state.order; };
/**
 * @deprecated
 * @type {?}
 */
export var selectOrder = createSelector(selectOrderState, (ɵ1))
/**
 * @deprecated
 */
;
var ɵ2 = /**
 * @param {?} state
 * @return {?}
 */
function (state) { return state.loading; };
/**
 * @deprecated
 * @type {?}
 */
export var selectLoading = createSelector(selectOrderState, (ɵ2))
/**
 * @deprecated
 */
;
var ɵ3 = /**
 * @param {?} state
 * @return {?}
 */
function (state) { return state.errors; };
/**
 * @deprecated
 * @type {?}
 */
export var selectErrors = createSelector(selectOrderState, (ɵ3));
export { ɵ0, ɵ1, ɵ2, ɵ3 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3JkZXIuc2VsZWN0b3IuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGFmZm9kaWwvY2hlY2tvdXQvIiwic291cmNlcyI6WyJvcmRlci9zZWxlY3RvcnMvb3JkZXIuc2VsZWN0b3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxjQUFjLEVBQUUscUJBQXFCLEVBQW9CLE1BQU0sYUFBYSxDQUFDOzs7Ozs7QUFVdEYsTUFBTSxLQUFPLHVCQUF1QixHQUFxRCxxQkFBcUIsQ0FBeUIsT0FBTyxDQUFDOzs7OztBQVE3SSxVQUFDLEtBQTZCLElBQUssT0FBQSxLQUFLLENBQUMsS0FBSyxFQUFYLENBQVc7Ozs7OztBQUZoRCxNQUFNLEtBQU8sZ0JBQWdCLEdBQUcsY0FBYyxDQUM1Qyx1QkFBdUIsT0FFeEI7QUFFRDs7R0FFRzs7Ozs7O0FBR0QsVUFBQyxLQUE0QixJQUFLLE9BQUEsS0FBSyxDQUFDLEtBQUssRUFBWCxDQUFXOzs7OztBQUYvQyxNQUFNLEtBQU8sV0FBVyxHQUF3QyxjQUFjLENBQzVFLGdCQUFnQixPQUVqQjtBQUVEOztHQUVHOzs7Ozs7QUFHRCxVQUFDLEtBQTRCLElBQUssT0FBQSxLQUFLLENBQUMsT0FBTyxFQUFiLENBQWE7Ozs7O0FBRmpELE1BQU0sS0FBTyxhQUFhLEdBQXNDLGNBQWMsQ0FDNUUsZ0JBQWdCLE9BRWpCO0FBRUQ7O0dBRUc7Ozs7OztBQUdELFVBQUMsS0FBNEIsSUFBSyxPQUFBLEtBQUssQ0FBQyxNQUFNLEVBQVosQ0FBWTs7Ozs7QUFGaEQsTUFBTSxLQUFPLFlBQVksR0FBdUMsY0FBYyxDQUM1RSxnQkFBZ0IsT0FFakIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVTZWxlY3RvciwgY3JlYXRlRmVhdHVyZVNlbGVjdG9yLCBNZW1vaXplZFNlbGVjdG9yIH0gZnJvbSAnQG5ncngvc3RvcmUnO1xuXG5pbXBvcnQgeyBEYWZmT3JkZXIgfSBmcm9tICcuLi8uLi9tb2RlbHMvb3JkZXIvb3JkZXInO1xuaW1wb3J0IHsgRGFmZk9yZGVyUmVkdWNlcnNTdGF0ZSB9IGZyb20gJy4uL3JlZHVjZXJzL29yZGVyLXJlZHVjZXJzLmludGVyZmFjZSc7XG5pbXBvcnQgeyBEYWZmT3JkZXJSZWR1Y2VyU3RhdGUgfSBmcm9tICcuLi9yZWR1Y2Vycy9vcmRlci9vcmRlci1yZWR1Y2VyLmludGVyZmFjZSc7XG5cbi8qKlxuICogT3JkZXIgRmVhdHVyZSBTdGF0ZVxuICogQGRlcHJlY2F0ZWRcbiAqL1xuZXhwb3J0IGNvbnN0IHNlbGVjdE9yZGVyRmVhdHVyZVN0YXRlOiBNZW1vaXplZFNlbGVjdG9yPG9iamVjdCwgRGFmZk9yZGVyUmVkdWNlcnNTdGF0ZT4gPSBjcmVhdGVGZWF0dXJlU2VsZWN0b3I8RGFmZk9yZGVyUmVkdWNlcnNTdGF0ZT4oJ29yZGVyJyk7XG5cbi8qKlxuICogT3JkZXIgU3RhdGVcbiAqIEBkZXByZWNhdGVkXG4gKi9cbmV4cG9ydCBjb25zdCBzZWxlY3RPcmRlclN0YXRlID0gY3JlYXRlU2VsZWN0b3IoXG4gIHNlbGVjdE9yZGVyRmVhdHVyZVN0YXRlLFxuICAoc3RhdGU6IERhZmZPcmRlclJlZHVjZXJzU3RhdGUpID0+IHN0YXRlLm9yZGVyXG4pXG5cbi8qKlxuICogQGRlcHJlY2F0ZWRcbiAqL1xuZXhwb3J0IGNvbnN0IHNlbGVjdE9yZGVyOiBNZW1vaXplZFNlbGVjdG9yPG9iamVjdCwgRGFmZk9yZGVyPiA9IGNyZWF0ZVNlbGVjdG9yKFxuICBzZWxlY3RPcmRlclN0YXRlLFxuICAoc3RhdGU6IERhZmZPcmRlclJlZHVjZXJTdGF0ZSkgPT4gc3RhdGUub3JkZXJcbilcblxuLyoqXG4gKiBAZGVwcmVjYXRlZFxuICovXG5leHBvcnQgY29uc3Qgc2VsZWN0TG9hZGluZzogTWVtb2l6ZWRTZWxlY3RvcjxvYmplY3QsIGJvb2xlYW4+ID0gY3JlYXRlU2VsZWN0b3IoXG4gIHNlbGVjdE9yZGVyU3RhdGUsXG4gIChzdGF0ZTogRGFmZk9yZGVyUmVkdWNlclN0YXRlKSA9PiBzdGF0ZS5sb2FkaW5nXG4pXG5cbi8qKlxuICogQGRlcHJlY2F0ZWRcbiAqL1xuZXhwb3J0IGNvbnN0IHNlbGVjdEVycm9yczogTWVtb2l6ZWRTZWxlY3RvcjxvYmplY3QsIHN0cmluZ1tdPiA9IGNyZWF0ZVNlbGVjdG9yKFxuICBzZWxlY3RPcmRlclN0YXRlLFxuICAoc3RhdGU6IERhZmZPcmRlclJlZHVjZXJTdGF0ZSkgPT4gc3RhdGUuZXJyb3JzXG4pXG4iXX0=