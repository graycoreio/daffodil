/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { createSelector } from '@ngrx/store';
import { getDaffProductFeatureSelector } from '../product-feature.selector';
/**
 * @record
 * @template T
 */
export function DaffProductGridMemoizedSelectors() { }
if (false) {
    /** @type {?} */
    DaffProductGridMemoizedSelectors.prototype.selectProductGridState;
    /** @type {?} */
    DaffProductGridMemoizedSelectors.prototype.selectProductGridLoadingState;
}
/** @type {?} */
const createProductGridSelectors = (/**
 * @template T
 * @return {?}
 */
() => {
    const { selectProductState } = getDaffProductFeatureSelector();
    /**
     * Selector for Product Grid state.
     * @type {?}
     */
    const selectProductGridState = createSelector(selectProductState, (/**
     * @param {?} state
     * @return {?}
     */
    (state) => state.productGrid));
    /**
     * Selector for product grid loading state.
     * @type {?}
     */
    const selectProductGridLoadingState = createSelector(selectProductGridState, (/**
     * @param {?} state
     * @return {?}
     */
    (state) => state.loading));
    return {
        selectProductGridState,
        selectProductGridLoadingState
    };
});
const ɵ0 = createProductGridSelectors;
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
        : createProductGridSelectors());
};
/** @type {?} */
export const getDaffProductGridSelectors = ((ɵ1))();
export { ɵ0, ɵ1 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC1ncmlkLnNlbGVjdG9ycy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkYWZmb2RpbC9wcm9kdWN0LyIsInNvdXJjZXMiOlsic2VsZWN0b3JzL3Byb2R1Y3QtZ3JpZC9wcm9kdWN0LWdyaWQuc2VsZWN0b3JzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsY0FBYyxFQUFvQixNQUFNLGFBQWEsQ0FBQztBQUkvRCxPQUFPLEVBQUUsNkJBQTZCLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQzs7Ozs7QUFHNUUsc0RBR0M7OztJQUZBLGtFQUFpRjs7SUFDakYseUVBQWlFOzs7TUFHNUQsMEJBQTBCOzs7O0FBQUcsR0FBK0QsRUFBRTtVQUM3RixFQUNMLGtCQUFrQixFQUNsQixHQUFHLDZCQUE2QixFQUFLOzs7OztVQUloQyxzQkFBc0IsR0FBRyxjQUFjLENBQzVDLGtCQUFrQjs7OztJQUNsQixDQUFDLEtBQWtDLEVBQUUsRUFBRSxDQUFDLEtBQUssQ0FBQyxXQUFXLEVBQ3pEOzs7OztVQUtLLDZCQUE2QixHQUFHLGNBQWMsQ0FDbkQsc0JBQXNCOzs7O0lBQ3RCLENBQUMsS0FBcUMsRUFBRSxFQUFFLENBQUMsS0FBSyxDQUFDLE9BQU8sRUFDeEQ7SUFFRCxPQUFPO1FBQ04sc0JBQXNCO1FBQ3RCLDZCQUE2QjtLQUM3QixDQUFBO0FBQ0YsQ0FBQyxDQUFBOzs7OztBQUUyQyxHQUFHLEVBQUU7O1FBQzVDLEtBQUs7SUFDVDs7OztJQUFPLEdBQStELEVBQUUsQ0FBQyxLQUFLLEdBQUcsS0FBSztRQUNyRixDQUFDLENBQUMsS0FBSztRQUNQLENBQUMsQ0FBQywwQkFBMEIsRUFBSyxFQUFDO0FBQ3BDLENBQUM7O0FBTEQsTUFBTSxPQUFPLDJCQUEyQixHQUFHLE1BS3pDLEVBQUUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVTZWxlY3RvciwgTWVtb2l6ZWRTZWxlY3RvciB9IGZyb20gJ0BuZ3J4L3N0b3JlJztcblxuaW1wb3J0IHsgRGFmZlByb2R1Y3RHcmlkUmVkdWNlclN0YXRlIH0gZnJvbSAnLi4vLi4vcmVkdWNlcnMvcHJvZHVjdC1ncmlkL3Byb2R1Y3QtZ3JpZC1yZWR1Y2VyLXN0YXRlLmludGVyZmFjZSc7XG5pbXBvcnQgeyBEYWZmUHJvZHVjdFJlZHVjZXJzU3RhdGUgfSBmcm9tICcuLi8uLi9yZWR1Y2Vycy9wcm9kdWN0LXJlZHVjZXJzLXN0YXRlLmludGVyZmFjZSc7XG5pbXBvcnQgeyBnZXREYWZmUHJvZHVjdEZlYXR1cmVTZWxlY3RvciB9IGZyb20gJy4uL3Byb2R1Y3QtZmVhdHVyZS5zZWxlY3Rvcic7XG5pbXBvcnQgeyBEYWZmUHJvZHVjdCB9IGZyb20gJy4uLy4uL21vZGVscy9wcm9kdWN0JztcblxuZXhwb3J0IGludGVyZmFjZSBEYWZmUHJvZHVjdEdyaWRNZW1vaXplZFNlbGVjdG9yczxUIGV4dGVuZHMgRGFmZlByb2R1Y3QgPSBEYWZmUHJvZHVjdD4ge1xuXHRzZWxlY3RQcm9kdWN0R3JpZFN0YXRlOiBNZW1vaXplZFNlbGVjdG9yPG9iamVjdCwgRGFmZlByb2R1Y3RHcmlkUmVkdWNlclN0YXRlPFQ+Pjtcblx0c2VsZWN0UHJvZHVjdEdyaWRMb2FkaW5nU3RhdGU6IE1lbW9pemVkU2VsZWN0b3I8b2JqZWN0LCBib29sZWFuPjtcbn1cblxuY29uc3QgY3JlYXRlUHJvZHVjdEdyaWRTZWxlY3RvcnMgPSA8VCBleHRlbmRzIERhZmZQcm9kdWN0PigpOiBEYWZmUHJvZHVjdEdyaWRNZW1vaXplZFNlbGVjdG9yczxUPiA9PiB7XG5cdGNvbnN0IHtcblx0XHRzZWxlY3RQcm9kdWN0U3RhdGVcblx0fSA9IGdldERhZmZQcm9kdWN0RmVhdHVyZVNlbGVjdG9yPFQ+KCk7XG5cdC8qKlxuXHQgKiBTZWxlY3RvciBmb3IgUHJvZHVjdCBHcmlkIHN0YXRlLlxuXHQgKi9cblx0Y29uc3Qgc2VsZWN0UHJvZHVjdEdyaWRTdGF0ZSA9IGNyZWF0ZVNlbGVjdG9yKFxuXHRcdHNlbGVjdFByb2R1Y3RTdGF0ZSxcblx0XHQoc3RhdGU6IERhZmZQcm9kdWN0UmVkdWNlcnNTdGF0ZTxUPikgPT4gc3RhdGUucHJvZHVjdEdyaWRcblx0KTtcblxuXHQvKipcblx0ICogU2VsZWN0b3IgZm9yIHByb2R1Y3QgZ3JpZCBsb2FkaW5nIHN0YXRlLlxuXHQgKi9cblx0Y29uc3Qgc2VsZWN0UHJvZHVjdEdyaWRMb2FkaW5nU3RhdGUgPSBjcmVhdGVTZWxlY3Rvcihcblx0XHRzZWxlY3RQcm9kdWN0R3JpZFN0YXRlLFxuXHRcdChzdGF0ZTogRGFmZlByb2R1Y3RHcmlkUmVkdWNlclN0YXRlPFQ+KSA9PiBzdGF0ZS5sb2FkaW5nXG5cdCk7XG5cblx0cmV0dXJuIHsgXG5cdFx0c2VsZWN0UHJvZHVjdEdyaWRTdGF0ZSxcblx0XHRzZWxlY3RQcm9kdWN0R3JpZExvYWRpbmdTdGF0ZVxuXHR9XG59XG5cbmV4cG9ydCBjb25zdCBnZXREYWZmUHJvZHVjdEdyaWRTZWxlY3RvcnMgPSAoKCkgPT4ge1xuXHRsZXQgY2FjaGU7XG5cdHJldHVybiA8VCBleHRlbmRzIERhZmZQcm9kdWN0PigpOiBEYWZmUHJvZHVjdEdyaWRNZW1vaXplZFNlbGVjdG9yczxUPiA9PiBjYWNoZSA9IGNhY2hlIFxuXHRcdD8gY2FjaGUgXG5cdFx0OiBjcmVhdGVQcm9kdWN0R3JpZFNlbGVjdG9yczxUPigpO1xufSkoKTtcbiJdfQ==