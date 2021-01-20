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
const createOrderSelectors = (/**
 * @template T
 * @return {?}
 */
() => {
    const { selectOrderFeatureState } = getDaffOrderReducersStateSelector();
    /** @type {?} */
    const selectOrderState = createSelector(selectOrderFeatureState, (/**
     * @param {?} state
     * @return {?}
     */
    state => state.order));
    /** @type {?} */
    const selectOrderLoading = createSelector(selectOrderState, (/**
     * @param {?} state
     * @return {?}
     */
    state => state.loading));
    /** @type {?} */
    const selectOrderErrors = createSelector(selectOrderState, (/**
     * @param {?} state
     * @return {?}
     */
    state => state.errors));
    return {
        selectOrderState,
        selectOrderLoading,
        selectOrderErrors
    };
});
const ɵ0 = createOrderSelectors;
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
    () => cache = cache || createOrderSelectors());
};
/** @type {?} */
export const getOrderSelectors = ((ɵ1))();
export { ɵ0, ɵ1 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3JkZXIuc2VsZWN0b3IuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGFmZm9kaWwvb3JkZXIvc3RhdGUvIiwic291cmNlcyI6WyJzZWxlY3RvcnMvb3JkZXIuc2VsZWN0b3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxjQUFjLEVBQW9CLE1BQU0sYUFBYSxDQUFDO0FBSS9ELE9BQU8sRUFBRSxpQ0FBaUMsRUFBRSxNQUFNLDBCQUEwQixDQUFDOzs7O0FBSzdFLHdDQUlDOzs7SUFIQyw4Q0FBa0U7O0lBQ2xFLGdEQUFzRDs7SUFDdEQsK0NBQXNEOzs7TUFHbEQsb0JBQW9COzs7O0FBQUcsR0FBb0MsRUFBRTtVQUMzRCxFQUFFLHVCQUF1QixFQUFFLEdBQUcsaUNBQWlDLEVBQUs7O1VBQ3BFLGdCQUFnQixHQUFHLGNBQWMsQ0FDckMsdUJBQXVCOzs7O0lBQ3ZCLEtBQUssQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLEtBQUssRUFDckI7O1VBRUssa0JBQWtCLEdBQUcsY0FBYyxDQUN2QyxnQkFBZ0I7Ozs7SUFDaEIsS0FBSyxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsT0FBTyxFQUN2Qjs7VUFFSyxpQkFBaUIsR0FBRyxjQUFjLENBQ3RDLGdCQUFnQjs7OztJQUNoQixLQUFLLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxNQUFNLEVBQ3RCO0lBRUQsT0FBTztRQUNMLGdCQUFnQjtRQUNoQixrQkFBa0I7UUFDbEIsaUJBQWlCO0tBQ2xCLENBQUE7QUFDSCxDQUFDLENBQUE7Ozs7O0FBRWlDLEdBQUcsRUFBRTs7UUFDakMsS0FBSztJQUNUOzs7O0lBQU8sR0FBd0QsRUFBRSxDQUMvRCxLQUFLLEdBQUcsS0FBSyxJQUFJLG9CQUFvQixFQUFLLEVBQUE7QUFDOUMsQ0FBQzs7QUFKRCxNQUFNLE9BQU8saUJBQWlCLEdBQUcsTUFJL0IsRUFBRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZVNlbGVjdG9yLCBNZW1vaXplZFNlbGVjdG9yIH0gZnJvbSAnQG5ncngvc3RvcmUnO1xuXG5pbXBvcnQgeyBEYWZmT3JkZXIgfSBmcm9tICdAZGFmZm9kaWwvb3JkZXInO1xuXG5pbXBvcnQgeyBnZXREYWZmT3JkZXJSZWR1Y2Vyc1N0YXRlU2VsZWN0b3IgfSBmcm9tICcuL29yZGVyLWZlYXR1cmUuc2VsZWN0b3InO1xuaW1wb3J0IHtcbiAgRGFmZk9yZGVyUmVkdWNlclN0YXRlLFxufSBmcm9tICcuLi9yZWR1Y2Vycy9wdWJsaWNfYXBpJztcblxuZXhwb3J0IGludGVyZmFjZSBEYWZmT3JkZXJTZWxlY3RvcnMge1xuICBzZWxlY3RPcmRlclN0YXRlOiBNZW1vaXplZFNlbGVjdG9yPG9iamVjdCwgRGFmZk9yZGVyUmVkdWNlclN0YXRlPjtcbiAgc2VsZWN0T3JkZXJMb2FkaW5nOiBNZW1vaXplZFNlbGVjdG9yPG9iamVjdCwgYm9vbGVhbj47XG4gIHNlbGVjdE9yZGVyRXJyb3JzOiBNZW1vaXplZFNlbGVjdG9yPG9iamVjdCwgc3RyaW5nW10+O1xufVxuXG5jb25zdCBjcmVhdGVPcmRlclNlbGVjdG9ycyA9IDxUIGV4dGVuZHMgRGFmZk9yZGVyID0gRGFmZk9yZGVyPigpID0+IHtcbiAgY29uc3QgeyBzZWxlY3RPcmRlckZlYXR1cmVTdGF0ZSB9ID0gZ2V0RGFmZk9yZGVyUmVkdWNlcnNTdGF0ZVNlbGVjdG9yPFQ+KCk7XG4gIGNvbnN0IHNlbGVjdE9yZGVyU3RhdGUgPSBjcmVhdGVTZWxlY3RvcihcbiAgICBzZWxlY3RPcmRlckZlYXR1cmVTdGF0ZSxcbiAgICBzdGF0ZSA9PiBzdGF0ZS5vcmRlclxuICApO1xuXG4gIGNvbnN0IHNlbGVjdE9yZGVyTG9hZGluZyA9IGNyZWF0ZVNlbGVjdG9yKFxuICAgIHNlbGVjdE9yZGVyU3RhdGUsXG4gICAgc3RhdGUgPT4gc3RhdGUubG9hZGluZ1xuICApO1xuXG4gIGNvbnN0IHNlbGVjdE9yZGVyRXJyb3JzID0gY3JlYXRlU2VsZWN0b3IoXG4gICAgc2VsZWN0T3JkZXJTdGF0ZSxcbiAgICBzdGF0ZSA9PiBzdGF0ZS5lcnJvcnNcbiAgKTtcblxuICByZXR1cm4ge1xuICAgIHNlbGVjdE9yZGVyU3RhdGUsXG4gICAgc2VsZWN0T3JkZXJMb2FkaW5nLFxuICAgIHNlbGVjdE9yZGVyRXJyb3JzXG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IGdldE9yZGVyU2VsZWN0b3JzID0gKCgpID0+IHtcbiAgbGV0IGNhY2hlO1xuICByZXR1cm4gPFQgZXh0ZW5kcyBEYWZmT3JkZXIgPSBEYWZmT3JkZXI+KCk6IERhZmZPcmRlclNlbGVjdG9ycyA9PlxuICAgIGNhY2hlID0gY2FjaGUgfHwgY3JlYXRlT3JkZXJTZWxlY3RvcnM8VD4oKVxufSkoKTtcbiJdfQ==