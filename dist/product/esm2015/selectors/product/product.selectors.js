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
export function DaffProductPageMemoizedSelectors() { }
if (false) {
    /** @type {?} */
    DaffProductPageMemoizedSelectors.prototype.selectSelectedProductState;
    /** @type {?} */
    DaffProductPageMemoizedSelectors.prototype.selectSelectedProductId;
    /** @type {?} */
    DaffProductPageMemoizedSelectors.prototype.selectSelectedProductQty;
    /** @type {?} */
    DaffProductPageMemoizedSelectors.prototype.selectSelectedProductLoadingState;
    /** @type {?} */
    DaffProductPageMemoizedSelectors.prototype.selectSelectedProduct;
}
/** @type {?} */
const createProductPageSelectors = (/**
 * @template T
 * @return {?}
 */
() => {
    const { selectProductState } = getDaffProductFeatureSelector();
    /**
     * Selector for product state.
     * @type {?}
     */
    const selectSelectedProductState = createSelector(selectProductState, (/**
     * @param {?} state
     * @return {?}
     */
    (state) => state.product));
    /**
     * Selector for the selected product's ID.
     * @deprecated
     * @type {?}
     */
    const selectSelectedProductId = createSelector(selectSelectedProductState, (/**
     * @param {?} state
     * @return {?}
     */
    (state) => state.selectedProductId));
    /**
     * Selector for the quantity of the product.
     * @deprecated
     * @type {?}
     */
    const selectSelectedProductQty = createSelector(selectSelectedProductState, (/**
     * @param {?} state
     * @return {?}
     */
    (state) => state.qty));
    /**
     * Selector for the loading state of the selected product.
     * @type {?}
     */
    const selectSelectedProductLoadingState = createSelector(selectSelectedProductState, (/**
     * @param {?} state
     * @return {?}
     */
    (state) => state.loading));
    /**
     * Selects the selected product from product state and the selected product ID.
     * @deprecated use selectProduct entities selector instead.
     * @type {?}
     */
    const selectSelectedProduct = createSelector(selectProductState, selectSelectedProductId, (/**
     * @param {?} state
     * @param {?} id
     * @return {?}
     */
    (state, id) => state.products.entities[id]));
    return {
        selectSelectedProductState,
        selectSelectedProductId,
        selectSelectedProductQty,
        selectSelectedProductLoadingState,
        selectSelectedProduct
    };
});
const ɵ0 = createProductPageSelectors;
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
        : createProductPageSelectors());
};
/** @type {?} */
export const getDaffProductPageSelectors = ((ɵ1))();
export { ɵ0, ɵ1 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC5zZWxlY3RvcnMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGFmZm9kaWwvcHJvZHVjdC8iLCJzb3VyY2VzIjpbInNlbGVjdG9ycy9wcm9kdWN0L3Byb2R1Y3Quc2VsZWN0b3JzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsY0FBYyxFQUFvQixNQUFNLGFBQWEsQ0FBQztBQUcvRCxPQUFPLEVBQUUsNkJBQTZCLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQzs7Ozs7QUFJNUUsc0RBTUM7OztJQUxBLHNFQUE4RTs7SUFDOUUsbUVBQTBEOztJQUMxRCxvRUFBMkQ7O0lBQzNELDZFQUFxRTs7SUFDckUsaUVBQW1EOzs7TUFHOUMsMEJBQTBCOzs7O0FBQUcsR0FBK0QsRUFBRTtVQUU3RixFQUNMLGtCQUFrQixFQUNsQixHQUFHLDZCQUE2QixFQUFLOzs7OztVQUtoQywwQkFBMEIsR0FBRyxjQUFjLENBQ2hELGtCQUFrQjs7OztJQUNsQixDQUFDLEtBQWtDLEVBQUUsRUFBRSxDQUFDLEtBQUssQ0FBQyxPQUFPLEVBQ3JEOzs7Ozs7VUFNSyx1QkFBdUIsR0FBRyxjQUFjLENBQzdDLDBCQUEwQjs7OztJQUMxQixDQUFDLEtBQThCLEVBQUUsRUFBRSxDQUFDLEtBQUssQ0FBQyxpQkFBaUIsRUFDM0Q7Ozs7OztVQU1LLHdCQUF3QixHQUFHLGNBQWMsQ0FDOUMsMEJBQTBCOzs7O0lBQzFCLENBQUMsS0FBOEIsRUFBRSxFQUFFLENBQUMsS0FBSyxDQUFDLEdBQUcsRUFDN0M7Ozs7O1VBS0ssaUNBQWlDLEdBQUcsY0FBYyxDQUN2RCwwQkFBMEI7Ozs7SUFDMUIsQ0FBQyxLQUE4QixFQUFFLEVBQUUsQ0FBQyxLQUFLLENBQUMsT0FBTyxFQUNqRDs7Ozs7O1VBTUsscUJBQXFCLEdBQUcsY0FBYyxDQUMzQyxrQkFBa0IsRUFDbEIsdUJBQXVCOzs7OztJQUN2QixDQUFDLEtBQWtDLEVBQUUsRUFBVSxFQUFFLEVBQUUsQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsRUFDL0U7SUFFRCxPQUFPO1FBQ04sMEJBQTBCO1FBQzFCLHVCQUF1QjtRQUN2Qix3QkFBd0I7UUFDeEIsaUNBQWlDO1FBQ2pDLHFCQUFxQjtLQUNyQixDQUFBO0FBQ0YsQ0FBQyxDQUFBOzs7OztBQUUyQyxHQUFHLEVBQUU7O1FBQzVDLEtBQUs7SUFDVDs7OztJQUFPLEdBQStELEVBQUUsQ0FBQyxLQUFLLEdBQUcsS0FBSztRQUNyRixDQUFDLENBQUMsS0FBSztRQUNQLENBQUMsQ0FBQywwQkFBMEIsRUFBSyxFQUFDO0FBQ3BDLENBQUM7O0FBTEQsTUFBTSxPQUFPLDJCQUEyQixHQUFHLE1BS3pDLEVBQUUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVTZWxlY3RvciwgTWVtb2l6ZWRTZWxlY3RvciB9IGZyb20gJ0BuZ3J4L3N0b3JlJztcblxuaW1wb3J0IHsgRGFmZlByb2R1Y3RSZWR1Y2Vyc1N0YXRlIH0gZnJvbSAnLi4vLi4vcmVkdWNlcnMvcHJvZHVjdC1yZWR1Y2Vycy1zdGF0ZS5pbnRlcmZhY2UnO1xuaW1wb3J0IHsgZ2V0RGFmZlByb2R1Y3RGZWF0dXJlU2VsZWN0b3IgfSBmcm9tICcuLi9wcm9kdWN0LWZlYXR1cmUuc2VsZWN0b3InO1xuaW1wb3J0IHsgRGFmZlByb2R1Y3RSZWR1Y2VyU3RhdGUgfSBmcm9tICcuLi8uLi9yZWR1Y2Vycy9wcm9kdWN0L3Byb2R1Y3QtcmVkdWNlci1zdGF0ZS5pbnRlcmZhY2UnO1xuaW1wb3J0IHsgRGFmZlByb2R1Y3QgfSBmcm9tICcuLi8uLi9tb2RlbHMvcHJvZHVjdCc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgRGFmZlByb2R1Y3RQYWdlTWVtb2l6ZWRTZWxlY3RvcnM8VCBleHRlbmRzIERhZmZQcm9kdWN0ID0gRGFmZlByb2R1Y3Q+IHtcblx0c2VsZWN0U2VsZWN0ZWRQcm9kdWN0U3RhdGU6IE1lbW9pemVkU2VsZWN0b3I8b2JqZWN0LCBEYWZmUHJvZHVjdFJlZHVjZXJTdGF0ZT47XG5cdHNlbGVjdFNlbGVjdGVkUHJvZHVjdElkOiBNZW1vaXplZFNlbGVjdG9yPG9iamVjdCwgc3RyaW5nPjtcblx0c2VsZWN0U2VsZWN0ZWRQcm9kdWN0UXR5OiBNZW1vaXplZFNlbGVjdG9yPG9iamVjdCwgbnVtYmVyPjtcblx0c2VsZWN0U2VsZWN0ZWRQcm9kdWN0TG9hZGluZ1N0YXRlOiBNZW1vaXplZFNlbGVjdG9yPG9iamVjdCwgYm9vbGVhbj47XG5cdHNlbGVjdFNlbGVjdGVkUHJvZHVjdDogTWVtb2l6ZWRTZWxlY3RvcjxvYmplY3QsIFQ+O1xufVxuXG5jb25zdCBjcmVhdGVQcm9kdWN0UGFnZVNlbGVjdG9ycyA9IDxUIGV4dGVuZHMgRGFmZlByb2R1Y3Q+KCk6IERhZmZQcm9kdWN0UGFnZU1lbW9pemVkU2VsZWN0b3JzPFQ+ID0+IHtcblxuXHRjb25zdCB7XG5cdFx0c2VsZWN0UHJvZHVjdFN0YXRlXG5cdH0gPSBnZXREYWZmUHJvZHVjdEZlYXR1cmVTZWxlY3RvcjxUPigpO1xuXG5cdC8qKlxuXHQgKiBTZWxlY3RvciBmb3IgcHJvZHVjdCBzdGF0ZS5cblx0ICovXG5cdGNvbnN0IHNlbGVjdFNlbGVjdGVkUHJvZHVjdFN0YXRlID0gY3JlYXRlU2VsZWN0b3IoXG5cdFx0c2VsZWN0UHJvZHVjdFN0YXRlLFxuXHRcdChzdGF0ZTogRGFmZlByb2R1Y3RSZWR1Y2Vyc1N0YXRlPFQ+KSA9PiBzdGF0ZS5wcm9kdWN0XG5cdCk7XG5cblx0LyoqXG5cdCAqIFNlbGVjdG9yIGZvciB0aGUgc2VsZWN0ZWQgcHJvZHVjdCdzIElELlxuXHQgKiBAZGVwcmVjYXRlZFxuXHQgKi9cblx0Y29uc3Qgc2VsZWN0U2VsZWN0ZWRQcm9kdWN0SWQgPSBjcmVhdGVTZWxlY3Rvcihcblx0XHRzZWxlY3RTZWxlY3RlZFByb2R1Y3RTdGF0ZSxcblx0XHQoc3RhdGU6IERhZmZQcm9kdWN0UmVkdWNlclN0YXRlKSA9PiBzdGF0ZS5zZWxlY3RlZFByb2R1Y3RJZFxuXHQpO1xuXG5cdC8qKlxuXHQgKiBTZWxlY3RvciBmb3IgdGhlIHF1YW50aXR5IG9mIHRoZSBwcm9kdWN0LlxuXHQgKiBAZGVwcmVjYXRlZFxuXHQgKi9cblx0Y29uc3Qgc2VsZWN0U2VsZWN0ZWRQcm9kdWN0UXR5ID0gY3JlYXRlU2VsZWN0b3IoXG5cdFx0c2VsZWN0U2VsZWN0ZWRQcm9kdWN0U3RhdGUsXG5cdFx0KHN0YXRlOiBEYWZmUHJvZHVjdFJlZHVjZXJTdGF0ZSkgPT4gc3RhdGUucXR5XG5cdCk7XG5cblx0LyoqXG5cdCAqIFNlbGVjdG9yIGZvciB0aGUgbG9hZGluZyBzdGF0ZSBvZiB0aGUgc2VsZWN0ZWQgcHJvZHVjdC5cblx0ICovXG5cdGNvbnN0IHNlbGVjdFNlbGVjdGVkUHJvZHVjdExvYWRpbmdTdGF0ZSA9IGNyZWF0ZVNlbGVjdG9yKFxuXHRcdHNlbGVjdFNlbGVjdGVkUHJvZHVjdFN0YXRlLFxuXHRcdChzdGF0ZTogRGFmZlByb2R1Y3RSZWR1Y2VyU3RhdGUpID0+IHN0YXRlLmxvYWRpbmdcblx0KTtcblxuXHQvKipcblx0ICogU2VsZWN0cyB0aGUgc2VsZWN0ZWQgcHJvZHVjdCBmcm9tIHByb2R1Y3Qgc3RhdGUgYW5kIHRoZSBzZWxlY3RlZCBwcm9kdWN0IElELlxuXHQgKiBAZGVwcmVjYXRlZCB1c2Ugc2VsZWN0UHJvZHVjdCBlbnRpdGllcyBzZWxlY3RvciBpbnN0ZWFkLlxuXHQgKi9cblx0Y29uc3Qgc2VsZWN0U2VsZWN0ZWRQcm9kdWN0ID0gY3JlYXRlU2VsZWN0b3IoXG5cdFx0c2VsZWN0UHJvZHVjdFN0YXRlLFxuXHRcdHNlbGVjdFNlbGVjdGVkUHJvZHVjdElkLFxuXHRcdChzdGF0ZTogRGFmZlByb2R1Y3RSZWR1Y2Vyc1N0YXRlPFQ+LCBpZDogc3RyaW5nKSA9PiBzdGF0ZS5wcm9kdWN0cy5lbnRpdGllc1tpZF1cblx0KTtcblxuXHRyZXR1cm4geyBcblx0XHRzZWxlY3RTZWxlY3RlZFByb2R1Y3RTdGF0ZSxcblx0XHRzZWxlY3RTZWxlY3RlZFByb2R1Y3RJZCxcblx0XHRzZWxlY3RTZWxlY3RlZFByb2R1Y3RRdHksXG5cdFx0c2VsZWN0U2VsZWN0ZWRQcm9kdWN0TG9hZGluZ1N0YXRlLFxuXHRcdHNlbGVjdFNlbGVjdGVkUHJvZHVjdFxuXHR9XG59XG5cbmV4cG9ydCBjb25zdCBnZXREYWZmUHJvZHVjdFBhZ2VTZWxlY3RvcnMgPSAoKCkgPT4ge1xuXHRsZXQgY2FjaGU7XG5cdHJldHVybiA8VCBleHRlbmRzIERhZmZQcm9kdWN0PigpOiBEYWZmUHJvZHVjdFBhZ2VNZW1vaXplZFNlbGVjdG9yczxUPiA9PiBjYWNoZSA9IGNhY2hlIFxuXHRcdD8gY2FjaGUgXG5cdFx0OiBjcmVhdGVQcm9kdWN0UGFnZVNlbGVjdG9yczxUPigpO1xufSkoKTtcbiJdfQ==