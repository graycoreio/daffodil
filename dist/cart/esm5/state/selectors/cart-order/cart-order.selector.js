/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { createSelector } from '@ngrx/store';
import { DaffLoadingState } from '@daffodil/core/state';
import { getDaffCartFeatureSelector } from '../cart-feature.selector';
/**
 * @record
 * @template T
 */
export function DaffCartOrderMemoizedSelectors() { }
if (false) {
    /** @type {?} */
    DaffCartOrderMemoizedSelectors.prototype.selectCartOrderState;
    /**
     * Selects whether there is a cart order operation in progress.
     * @type {?}
     */
    DaffCartOrderMemoizedSelectors.prototype.selectCartOrderLoading;
    /**
     * Selects whether there is a place order operation in progress.
     * @type {?}
     */
    DaffCartOrderMemoizedSelectors.prototype.selectCartOrderMutating;
    /** @type {?} */
    DaffCartOrderMemoizedSelectors.prototype.selectCartOrderErrors;
    /** @type {?} */
    DaffCartOrderMemoizedSelectors.prototype.selectCartOrderValue;
    /** @type {?} */
    DaffCartOrderMemoizedSelectors.prototype.selectCartOrderId;
    /** @type {?} */
    DaffCartOrderMemoizedSelectors.prototype.selectCartOrderCartId;
    /** @type {?} */
    DaffCartOrderMemoizedSelectors.prototype.selectHasOrderResult;
}
/** @type {?} */
var createCartOrderSelectors = (/**
 * @template T, V, U
 * @return {?}
 */
function () {
    /** @type {?} */
    var selectCartFeatureState = getDaffCartFeatureSelector().selectCartFeatureState;
    /** @type {?} */
    var selectCartOrderState = createSelector(selectCartFeatureState, (/**
     * @param {?} state
     * @return {?}
     */
    function (state) { return state.order; }));
    /** @type {?} */
    var selectCartOrderValue = createSelector(selectCartOrderState, (/**
     * @param {?} state
     * @return {?}
     */
    function (state) { return state.cartOrderResult; }));
    /** @type {?} */
    var selectCartOrderId = createSelector(selectCartOrderValue, (/**
     * @param {?} state
     * @return {?}
     */
    function (state) { return state.orderId; }));
    /** @type {?} */
    var selectCartOrderCartId = createSelector(selectCartOrderValue, (/**
     * @param {?} state
     * @return {?}
     */
    function (state) { return state.cartId; }));
    /** @type {?} */
    var selectCartOrderLoading = createSelector(selectCartOrderState, (/**
     * @param {?} state
     * @return {?}
     */
    function (state) { return state.loading !== DaffLoadingState.Complete; }));
    /** @type {?} */
    var selectCartOrderMutating = createSelector(selectCartOrderState, (/**
     * @param {?} state
     * @return {?}
     */
    function (state) { return state.loading === DaffLoadingState.Mutating; }));
    /** @type {?} */
    var selectCartOrderErrors = createSelector(selectCartOrderState, (/**
     * @param {?} state
     * @return {?}
     */
    function (state) { return state.errors; }));
    /** @type {?} */
    var selectHasOrderResult = createSelector(selectCartOrderValue, (/**
     * @param {?} orderResult
     * @return {?}
     */
    function (orderResult) { return !!(orderResult && orderResult.orderId && orderResult.cartId); }));
    return {
        selectCartOrderState: selectCartOrderState,
        selectCartOrderLoading: selectCartOrderLoading,
        selectCartOrderMutating: selectCartOrderMutating,
        selectCartOrderErrors: selectCartOrderErrors,
        selectCartOrderValue: selectCartOrderValue,
        selectCartOrderId: selectCartOrderId,
        selectCartOrderCartId: selectCartOrderCartId,
        selectHasOrderResult: selectHasOrderResult
    };
});
var ɵ0 = createCartOrderSelectors;
var ɵ1 = /**
 * @return {?}
 */
function () {
    /** @type {?} */
    var cache;
    return (/**
     * @template T, V, U
     * @return {?}
     */
    function () { return cache = cache
        ? cache
        : createCartOrderSelectors(); });
};
/** @type {?} */
export var getCartOrderSelectors = ((ɵ1))();
export { ɵ0, ɵ1 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FydC1vcmRlci5zZWxlY3Rvci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkYWZmb2RpbC9jYXJ0L3N0YXRlLyIsInNvdXJjZXMiOlsic2VsZWN0b3JzL2NhcnQtb3JkZXIvY2FydC1vcmRlci5zZWxlY3Rvci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUNMLGNBQWMsRUFFZixNQUFNLGFBQWEsQ0FBQztBQUVyQixPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUd4RCxPQUFPLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQzs7Ozs7QUFJdEUsb0RBaUJDOzs7SUFkQyw4REFBNkU7Ozs7O0lBSTdFLGdFQUEwRDs7Ozs7SUFJMUQsaUVBQTJEOztJQUM1RCwrREFBd0Y7O0lBQ3hGLDhEQUFnRzs7SUFDaEcsMkRBQXdHOztJQUN4RywrREFBMkc7O0lBQzFHLDhEQUF3RDs7O0lBR3BELHdCQUF3Qjs7OztBQUFHOztRQUsxQixzQkFBc0IsR0FBRywwQkFBMEIsRUFBVyxDQUFDLHNCQUFzQjs7UUFFcEYsb0JBQW9CLEdBQUcsY0FBYyxDQUMzQyxzQkFBc0I7Ozs7SUFDdEIsVUFBQyxLQUFxQyxJQUFLLE9BQUEsS0FBSyxDQUFDLEtBQUssRUFBWCxDQUFXLEVBQ3JEOztRQUNLLG9CQUFvQixHQUFHLGNBQWMsQ0FDM0Msb0JBQW9COzs7O0lBQ3BCLFVBQUMsS0FBbUMsSUFBSyxPQUFBLEtBQUssQ0FBQyxlQUFlLEVBQXJCLENBQXFCLEVBQzdEOztRQUNLLGlCQUFpQixHQUFHLGNBQWMsQ0FDeEMsb0JBQW9COzs7O0lBQ3BCLFVBQUMsS0FBc0QsSUFBSyxPQUFBLEtBQUssQ0FBQyxPQUFPLEVBQWIsQ0FBYSxFQUN4RTs7UUFDSyxxQkFBcUIsR0FBRyxjQUFjLENBQzVDLG9CQUFvQjs7OztJQUNwQixVQUFDLEtBQXNELElBQUssT0FBQSxLQUFLLENBQUMsTUFBTSxFQUFaLENBQVksRUFDdkU7O1FBQ0ssc0JBQXNCLEdBQUcsY0FBYyxDQUM3QyxvQkFBb0I7Ozs7SUFDcEIsVUFBQyxLQUFtQyxJQUFLLE9BQUEsS0FBSyxDQUFDLE9BQU8sS0FBSyxnQkFBZ0IsQ0FBQyxRQUFRLEVBQTNDLENBQTJDLEVBQ25GOztRQUNLLHVCQUF1QixHQUFHLGNBQWMsQ0FDOUMsb0JBQW9COzs7O0lBQ3BCLFVBQUMsS0FBbUMsSUFBSyxPQUFBLEtBQUssQ0FBQyxPQUFPLEtBQUssZ0JBQWdCLENBQUMsUUFBUSxFQUEzQyxDQUEyQyxFQUNwRjs7UUFDSyxxQkFBcUIsR0FBRyxjQUFjLENBQzNDLG9CQUFvQjs7OztJQUNwQixVQUFDLEtBQW1DLElBQUssT0FBQSxLQUFLLENBQUMsTUFBTSxFQUFaLENBQVksRUFDcEQ7O1FBQ0ssb0JBQW9CLEdBQUcsY0FBYyxDQUN6QyxvQkFBb0I7Ozs7SUFDcEIsVUFBQSxXQUFXLElBQUksT0FBQSxDQUFDLENBQUMsQ0FDZixXQUFXLElBQUksV0FBVyxDQUFDLE9BQU8sSUFBSSxXQUFXLENBQUMsTUFBTSxDQUN6RCxFQUZjLENBRWQsRUFDRjtJQUVGLE9BQU87UUFDSixvQkFBb0Isc0JBQUE7UUFDcEIsc0JBQXNCLHdCQUFBO1FBQ3RCLHVCQUF1Qix5QkFBQTtRQUN2QixxQkFBcUIsdUJBQUE7UUFDckIsb0JBQW9CLHNCQUFBO1FBQ3BCLGlCQUFpQixtQkFBQTtRQUNqQixxQkFBcUIsdUJBQUE7UUFDckIsb0JBQW9CLHNCQUFBO0tBQ3RCLENBQUE7QUFDRixDQUFDLENBQUE7Ozs7O0FBRXFDOztRQUNqQyxLQUFLO0lBQ1Q7Ozs7SUFBTyxjQUlvQyxPQUFBLEtBQUssR0FBRyxLQUFLO1FBQ3ZELENBQUMsQ0FBQyxLQUFLO1FBQ1AsQ0FBQyxDQUFDLHdCQUF3QixFQUFXLEVBRkssQ0FFTCxFQUFDO0FBQ3hDLENBQUM7O0FBVEQsTUFBTSxLQUFPLHFCQUFxQixHQUFHLE1BU25DLEVBQUUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBjcmVhdGVTZWxlY3RvcixcbiAgTWVtb2l6ZWRTZWxlY3RvclxufSBmcm9tICdAbmdyeC9zdG9yZSc7XG5cbmltcG9ydCB7IERhZmZMb2FkaW5nU3RhdGUgfSBmcm9tICdAZGFmZm9kaWwvY29yZS9zdGF0ZSc7XG5pbXBvcnQgeyBEYWZmQ2FydE9yZGVyUmVzdWx0LCBEYWZmQ2FydCB9IGZyb20gJ0BkYWZmb2RpbC9jYXJ0JztcblxuaW1wb3J0IHsgZ2V0RGFmZkNhcnRGZWF0dXJlU2VsZWN0b3IgfSBmcm9tICcuLi9jYXJ0LWZlYXR1cmUuc2VsZWN0b3InO1xuaW1wb3J0IHsgRGFmZkNhcnRSZWR1Y2Vyc1N0YXRlLCBEYWZmQ2FydE9yZGVyUmVkdWNlclN0YXRlIH0gZnJvbSAnLi4vLi4vcmVkdWNlcnMvcHVibGljX2FwaSc7XG5pbXBvcnQgeyBEYWZmU3RhdGVmdWxDYXJ0SXRlbSB9IGZyb20gJy4uLy4uL21vZGVscy9zdGF0ZWZ1bC1jYXJ0LWl0ZW0nO1xuXG5leHBvcnQgaW50ZXJmYWNlIERhZmZDYXJ0T3JkZXJNZW1vaXplZFNlbGVjdG9yczxcbiAgVCBleHRlbmRzIERhZmZDYXJ0T3JkZXJSZXN1bHQgPSBEYWZmQ2FydE9yZGVyUmVzdWx0XG4+IHtcbiAgc2VsZWN0Q2FydE9yZGVyU3RhdGU6IE1lbW9pemVkU2VsZWN0b3I8b2JqZWN0LCBEYWZmQ2FydE9yZGVyUmVkdWNlclN0YXRlPFQ+PjtcbiAgLyoqXG4gICAqIFNlbGVjdHMgd2hldGhlciB0aGVyZSBpcyBhIGNhcnQgb3JkZXIgb3BlcmF0aW9uIGluIHByb2dyZXNzLlxuICAgKi9cbiAgc2VsZWN0Q2FydE9yZGVyTG9hZGluZzogTWVtb2l6ZWRTZWxlY3RvcjxvYmplY3QsIGJvb2xlYW4+O1xuICAvKipcbiAgICogU2VsZWN0cyB3aGV0aGVyIHRoZXJlIGlzIGEgcGxhY2Ugb3JkZXIgb3BlcmF0aW9uIGluIHByb2dyZXNzLlxuICAgKi9cbiAgc2VsZWN0Q2FydE9yZGVyTXV0YXRpbmc6IE1lbW9pemVkU2VsZWN0b3I8b2JqZWN0LCBib29sZWFuPjtcblx0c2VsZWN0Q2FydE9yZGVyRXJyb3JzOiBNZW1vaXplZFNlbGVjdG9yPG9iamVjdCwgRGFmZkNhcnRPcmRlclJlZHVjZXJTdGF0ZTxUPlsnZXJyb3JzJ10+O1xuXHRzZWxlY3RDYXJ0T3JkZXJWYWx1ZTogTWVtb2l6ZWRTZWxlY3RvcjxvYmplY3QsIERhZmZDYXJ0T3JkZXJSZWR1Y2VyU3RhdGU8VD5bJ2NhcnRPcmRlclJlc3VsdCddPjtcblx0c2VsZWN0Q2FydE9yZGVySWQ6IE1lbW9pemVkU2VsZWN0b3I8b2JqZWN0LCBEYWZmQ2FydE9yZGVyUmVkdWNlclN0YXRlPFQ+WydjYXJ0T3JkZXJSZXN1bHQnXVsnb3JkZXJJZCddPjtcblx0c2VsZWN0Q2FydE9yZGVyQ2FydElkOiBNZW1vaXplZFNlbGVjdG9yPG9iamVjdCwgRGFmZkNhcnRPcmRlclJlZHVjZXJTdGF0ZTxUPlsnY2FydE9yZGVyUmVzdWx0J11bJ2NhcnRJZCddPjtcbiAgc2VsZWN0SGFzT3JkZXJSZXN1bHQ6IE1lbW9pemVkU2VsZWN0b3I8b2JqZWN0LCBib29sZWFuPjtcbn1cblxuY29uc3QgY3JlYXRlQ2FydE9yZGVyU2VsZWN0b3JzID0gPFxuICBUIGV4dGVuZHMgRGFmZkNhcnQgPSBEYWZmQ2FydCxcblx0ViBleHRlbmRzIERhZmZDYXJ0T3JkZXJSZXN1bHQgPSBEYWZmQ2FydE9yZGVyUmVzdWx0LFxuXHRVIGV4dGVuZHMgRGFmZlN0YXRlZnVsQ2FydEl0ZW0gPSBEYWZmU3RhdGVmdWxDYXJ0SXRlbVxuPigpOiBEYWZmQ2FydE9yZGVyTWVtb2l6ZWRTZWxlY3RvcnM8Vj4gPT4ge1xuXHRjb25zdCBzZWxlY3RDYXJ0RmVhdHVyZVN0YXRlID0gZ2V0RGFmZkNhcnRGZWF0dXJlU2VsZWN0b3I8VCwgViwgVT4oKS5zZWxlY3RDYXJ0RmVhdHVyZVN0YXRlO1xuXG4gIGNvbnN0IHNlbGVjdENhcnRPcmRlclN0YXRlID0gY3JlYXRlU2VsZWN0b3IoXG5cdFx0c2VsZWN0Q2FydEZlYXR1cmVTdGF0ZSxcblx0XHQoc3RhdGU6IERhZmZDYXJ0UmVkdWNlcnNTdGF0ZTxULCBWLCBVPikgPT4gc3RhdGUub3JkZXJcbiAgKTtcbiAgY29uc3Qgc2VsZWN0Q2FydE9yZGVyVmFsdWUgPSBjcmVhdGVTZWxlY3Rvcihcblx0XHRzZWxlY3RDYXJ0T3JkZXJTdGF0ZSxcblx0XHQoc3RhdGU6IERhZmZDYXJ0T3JkZXJSZWR1Y2VyU3RhdGU8Vj4pID0+IHN0YXRlLmNhcnRPcmRlclJlc3VsdFxuICApO1xuICBjb25zdCBzZWxlY3RDYXJ0T3JkZXJJZCA9IGNyZWF0ZVNlbGVjdG9yKFxuXHRcdHNlbGVjdENhcnRPcmRlclZhbHVlLFxuXHRcdChzdGF0ZTogRGFmZkNhcnRPcmRlclJlZHVjZXJTdGF0ZTxWPlsnY2FydE9yZGVyUmVzdWx0J10pID0+IHN0YXRlLm9yZGVySWRcbiAgKTtcbiAgY29uc3Qgc2VsZWN0Q2FydE9yZGVyQ2FydElkID0gY3JlYXRlU2VsZWN0b3IoXG5cdFx0c2VsZWN0Q2FydE9yZGVyVmFsdWUsXG5cdFx0KHN0YXRlOiBEYWZmQ2FydE9yZGVyUmVkdWNlclN0YXRlPFY+WydjYXJ0T3JkZXJSZXN1bHQnXSkgPT4gc3RhdGUuY2FydElkXG4gICk7XG4gIGNvbnN0IHNlbGVjdENhcnRPcmRlckxvYWRpbmcgPSBjcmVhdGVTZWxlY3Rvcihcblx0XHRzZWxlY3RDYXJ0T3JkZXJTdGF0ZSxcblx0XHQoc3RhdGU6IERhZmZDYXJ0T3JkZXJSZWR1Y2VyU3RhdGU8Vj4pID0+IHN0YXRlLmxvYWRpbmcgIT09IERhZmZMb2FkaW5nU3RhdGUuQ29tcGxldGVcbiAgKTtcbiAgY29uc3Qgc2VsZWN0Q2FydE9yZGVyTXV0YXRpbmcgPSBjcmVhdGVTZWxlY3Rvcihcblx0XHRzZWxlY3RDYXJ0T3JkZXJTdGF0ZSxcblx0XHQoc3RhdGU6IERhZmZDYXJ0T3JkZXJSZWR1Y2VyU3RhdGU8Vj4pID0+IHN0YXRlLmxvYWRpbmcgPT09IERhZmZMb2FkaW5nU3RhdGUuTXV0YXRpbmdcblx0KTtcblx0Y29uc3Qgc2VsZWN0Q2FydE9yZGVyRXJyb3JzID0gY3JlYXRlU2VsZWN0b3IoXG5cdFx0c2VsZWN0Q2FydE9yZGVyU3RhdGUsXG5cdFx0KHN0YXRlOiBEYWZmQ2FydE9yZGVyUmVkdWNlclN0YXRlPFY+KSA9PiBzdGF0ZS5lcnJvcnNcbiAgKTtcbiAgY29uc3Qgc2VsZWN0SGFzT3JkZXJSZXN1bHQgPSBjcmVhdGVTZWxlY3RvcihcbiAgICBzZWxlY3RDYXJ0T3JkZXJWYWx1ZSxcbiAgICBvcmRlclJlc3VsdCA9PiAhIShcbiAgICAgIG9yZGVyUmVzdWx0ICYmIG9yZGVyUmVzdWx0Lm9yZGVySWQgJiYgb3JkZXJSZXN1bHQuY2FydElkXG4gICAgKVxuICApO1xuXG5cdHJldHVybiB7XG4gICAgc2VsZWN0Q2FydE9yZGVyU3RhdGUsXG4gICAgc2VsZWN0Q2FydE9yZGVyTG9hZGluZyxcbiAgICBzZWxlY3RDYXJ0T3JkZXJNdXRhdGluZyxcbiAgICBzZWxlY3RDYXJ0T3JkZXJFcnJvcnMsXG4gICAgc2VsZWN0Q2FydE9yZGVyVmFsdWUsXG4gICAgc2VsZWN0Q2FydE9yZGVySWQsXG4gICAgc2VsZWN0Q2FydE9yZGVyQ2FydElkLFxuICAgIHNlbGVjdEhhc09yZGVyUmVzdWx0XG5cdH1cbn1cblxuZXhwb3J0IGNvbnN0IGdldENhcnRPcmRlclNlbGVjdG9ycyA9ICgoKSA9PiB7XG5cdGxldCBjYWNoZTtcblx0cmV0dXJuIDxcbiAgICBUIGV4dGVuZHMgRGFmZkNhcnQgPSBEYWZmQ2FydCxcblx0XHRWIGV4dGVuZHMgRGFmZkNhcnRPcmRlclJlc3VsdCA9IERhZmZDYXJ0T3JkZXJSZXN1bHQsXG5cdFx0VSBleHRlbmRzIERhZmZTdGF0ZWZ1bENhcnRJdGVtID0gRGFmZlN0YXRlZnVsQ2FydEl0ZW1cbiAgPigpOiBEYWZmQ2FydE9yZGVyTWVtb2l6ZWRTZWxlY3RvcnM8Vj4gPT4gY2FjaGUgPSBjYWNoZVxuXHRcdD8gY2FjaGVcblx0XHQ6IGNyZWF0ZUNhcnRPcmRlclNlbGVjdG9yczxULCBWLCBVPigpO1xufSkoKTtcbiJdfQ==