/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { createSelector } from '@ngrx/store';
import { getDaffProductFeatureSelector } from '../product-feature.selector';
import { getDaffProductEntitiesSelectors } from '../product-entities/product-entities.selectors';
/**
 * @record
 * @template T
 */
export function DaffBestSellersMemoizedSelectors() { }
if (false) {
    /** @type {?} */
    DaffBestSellersMemoizedSelectors.prototype.selectBestSellersState;
    /** @type {?} */
    DaffBestSellersMemoizedSelectors.prototype.selectBestSellersLoadingState;
    /** @type {?} */
    DaffBestSellersMemoizedSelectors.prototype.selectBestSellersIdsState;
    /** @type {?} */
    DaffBestSellersMemoizedSelectors.prototype.selectBestSellersProducts;
}
/** @type {?} */
const createBestSellersSelectors = (/**
 * @template T
 * @return {?}
 */
() => {
    const { selectAllProducts } = getDaffProductEntitiesSelectors();
    const { selectProductState } = getDaffProductFeatureSelector();
    /**
     * Selector for Best Seller State
     * @type {?}
     */
    const selectBestSellersState = createSelector(selectProductState, (/**
     * @param {?} state
     * @return {?}
     */
    (state) => state.bestSellers));
    /**
     * Selector for the loading state of best selling products.
     * @type {?}
     */
    const selectBestSellersLoadingState = createSelector(selectBestSellersState, (/**
     * @param {?} state
     * @return {?}
     */
    (state) => state.loading));
    /**
     * Selector for the IDs of best selling products.
     * @type {?}
     */
    const selectBestSellersIdsState = createSelector(selectBestSellersState, (/**
     * @param {?} state
     * @return {?}
     */
    (state) => state.productIds));
    /**
     * Selector for the best selling products.
     * @type {?}
     */
    const selectBestSellersProducts = createSelector(selectBestSellersIdsState, selectAllProducts, (/**
     * @param {?} ids
     * @param {?} products
     * @return {?}
     */
    (ids, products) => products.filter((/**
     * @param {?} product
     * @return {?}
     */
    product => ids.indexOf(product.id) > -1))));
    return {
        selectBestSellersState,
        selectBestSellersLoadingState,
        selectBestSellersIdsState,
        selectBestSellersProducts
    };
});
const ɵ0 = createBestSellersSelectors;
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
        : createBestSellersSelectors());
};
/** @type {?} */
export const getDaffBestSellersSelectors = ((ɵ1))();
export { ɵ0, ɵ1 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmVzdC1zZWxsZXJzLnNlbGVjdG9ycy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkYWZmb2RpbC9wcm9kdWN0LyIsInNvdXJjZXMiOlsic2VsZWN0b3JzL2Jlc3Qtc2VsbGVycy9iZXN0LXNlbGxlcnMuc2VsZWN0b3JzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsY0FBYyxFQUFvQixNQUFNLGFBQWEsQ0FBQztBQUUvRCxPQUFPLEVBQUUsNkJBQTZCLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUc1RSxPQUFPLEVBQUUsK0JBQStCLEVBQUUsTUFBTSxnREFBZ0QsQ0FBQzs7Ozs7QUFHakcsc0RBS0M7OztJQUpBLGtFQUE4RTs7SUFDOUUseUVBQWlFOztJQUNqRSxxRUFBOEQ7O0lBQzlELHFFQUF5RDs7O01BR3BELDBCQUEwQjs7OztBQUFHLEdBQStELEVBQUU7VUFDN0YsRUFDTCxpQkFBaUIsRUFDakIsR0FBRywrQkFBK0IsRUFBSztVQUNsQyxFQUNMLGtCQUFrQixFQUNsQixHQUFHLDZCQUE2QixFQUFLOzs7OztVQUloQyxzQkFBc0IsR0FBRyxjQUFjLENBQzVDLGtCQUFrQjs7OztJQUNsQixDQUFDLEtBQWtDLEVBQUUsRUFBRSxDQUFDLEtBQUssQ0FBQyxXQUFXLEVBQ3pEOzs7OztVQUtLLDZCQUE2QixHQUFHLGNBQWMsQ0FDbkQsc0JBQXNCOzs7O0lBQ3RCLENBQUMsS0FBa0MsRUFBRSxFQUFFLENBQUMsS0FBSyxDQUFDLE9BQU8sRUFDckQ7Ozs7O1VBS0sseUJBQXlCLEdBQUcsY0FBYyxDQUMvQyxzQkFBc0I7Ozs7SUFDdEIsQ0FBQyxLQUFrQyxFQUFFLEVBQUUsQ0FBQyxLQUFLLENBQUMsVUFBVSxFQUN4RDs7Ozs7VUFLSyx5QkFBeUIsR0FBRyxjQUFjLENBQy9DLHlCQUF5QixFQUN6QixpQkFBaUI7Ozs7O0lBQ2pCLENBQUMsR0FBYSxFQUFFLFFBQWEsRUFBRSxFQUFFLENBQUMsUUFBUSxDQUFDLE1BQU07Ozs7SUFBQyxPQUFPLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFDLEVBQzFGO0lBRUQsT0FBTztRQUNOLHNCQUFzQjtRQUN0Qiw2QkFBNkI7UUFDN0IseUJBQXlCO1FBQ3pCLHlCQUF5QjtLQUN6QixDQUFBO0FBQ0YsQ0FBQyxDQUFBOzs7OztBQUUyQyxHQUFHLEVBQUU7O1FBQzVDLEtBQUs7SUFDVDs7OztJQUFPLEdBQStELEVBQUUsQ0FBQyxLQUFLLEdBQUcsS0FBSztRQUNyRixDQUFDLENBQUMsS0FBSztRQUNQLENBQUMsQ0FBQywwQkFBMEIsRUFBSyxFQUFDO0FBQ3BDLENBQUM7O0FBTEQsTUFBTSxPQUFPLDJCQUEyQixHQUFHLE1BS3pDLEVBQUUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVTZWxlY3RvciwgTWVtb2l6ZWRTZWxlY3RvciB9IGZyb20gJ0BuZ3J4L3N0b3JlJztcblxuaW1wb3J0IHsgZ2V0RGFmZlByb2R1Y3RGZWF0dXJlU2VsZWN0b3IgfSBmcm9tICcuLi9wcm9kdWN0LWZlYXR1cmUuc2VsZWN0b3InO1xuaW1wb3J0IHsgRGFmZlByb2R1Y3RSZWR1Y2Vyc1N0YXRlIH0gZnJvbSAnLi4vLi4vcmVkdWNlcnMvcHJvZHVjdC1yZWR1Y2Vycy1zdGF0ZS5pbnRlcmZhY2UnO1xuaW1wb3J0IHsgRGFmZkJlc3RTZWxsZXJzUmVkdWNlclN0YXRlIH0gZnJvbSAnLi4vLi4vcmVkdWNlcnMvYmVzdC1zZWxsZXJzL2Jlc3Qtc2VsbGVycy1yZWR1Y2VyLXN0YXRlLmludGVyZmFjZSc7XG5pbXBvcnQgeyBnZXREYWZmUHJvZHVjdEVudGl0aWVzU2VsZWN0b3JzIH0gZnJvbSAnLi4vcHJvZHVjdC1lbnRpdGllcy9wcm9kdWN0LWVudGl0aWVzLnNlbGVjdG9ycyc7XG5pbXBvcnQgeyBEYWZmUHJvZHVjdCB9IGZyb20gJy4uLy4uL21vZGVscy9wcm9kdWN0JztcblxuZXhwb3J0IGludGVyZmFjZSBEYWZmQmVzdFNlbGxlcnNNZW1vaXplZFNlbGVjdG9yczxUIGV4dGVuZHMgRGFmZlByb2R1Y3QgPSBEYWZmUHJvZHVjdD4ge1xuXHRzZWxlY3RCZXN0U2VsbGVyc1N0YXRlOiBNZW1vaXplZFNlbGVjdG9yPG9iamVjdCwgRGFmZkJlc3RTZWxsZXJzUmVkdWNlclN0YXRlPjtcblx0c2VsZWN0QmVzdFNlbGxlcnNMb2FkaW5nU3RhdGU6IE1lbW9pemVkU2VsZWN0b3I8b2JqZWN0LCBib29sZWFuPjtcblx0c2VsZWN0QmVzdFNlbGxlcnNJZHNTdGF0ZTogTWVtb2l6ZWRTZWxlY3RvcjxvYmplY3QsIHN0cmluZ1tdPjtcblx0c2VsZWN0QmVzdFNlbGxlcnNQcm9kdWN0czogTWVtb2l6ZWRTZWxlY3RvcjxvYmplY3QsIFRbXT47XG59XG5cbmNvbnN0IGNyZWF0ZUJlc3RTZWxsZXJzU2VsZWN0b3JzID0gPFQgZXh0ZW5kcyBEYWZmUHJvZHVjdD4oKTogRGFmZkJlc3RTZWxsZXJzTWVtb2l6ZWRTZWxlY3RvcnM8VD4gPT4ge1xuXHRjb25zdCB7XG5cdFx0c2VsZWN0QWxsUHJvZHVjdHNcblx0fSA9IGdldERhZmZQcm9kdWN0RW50aXRpZXNTZWxlY3RvcnM8VD4oKTtcblx0Y29uc3Qge1xuXHRcdHNlbGVjdFByb2R1Y3RTdGF0ZVxuXHR9ID0gZ2V0RGFmZlByb2R1Y3RGZWF0dXJlU2VsZWN0b3I8VD4oKTtcblx0LyoqXG5cdCAqIFNlbGVjdG9yIGZvciBCZXN0IFNlbGxlciBTdGF0ZVxuXHQgKi9cblx0Y29uc3Qgc2VsZWN0QmVzdFNlbGxlcnNTdGF0ZSA9IGNyZWF0ZVNlbGVjdG9yKFxuXHRcdHNlbGVjdFByb2R1Y3RTdGF0ZSxcblx0XHQoc3RhdGU6IERhZmZQcm9kdWN0UmVkdWNlcnNTdGF0ZTxUPikgPT4gc3RhdGUuYmVzdFNlbGxlcnNcblx0KTtcblxuXHQvKipcblx0ICogU2VsZWN0b3IgZm9yIHRoZSBsb2FkaW5nIHN0YXRlIG9mIGJlc3Qgc2VsbGluZyBwcm9kdWN0cy5cblx0ICovXG5cdGNvbnN0IHNlbGVjdEJlc3RTZWxsZXJzTG9hZGluZ1N0YXRlID0gY3JlYXRlU2VsZWN0b3IoXG5cdFx0c2VsZWN0QmVzdFNlbGxlcnNTdGF0ZSxcblx0XHQoc3RhdGU6IERhZmZCZXN0U2VsbGVyc1JlZHVjZXJTdGF0ZSkgPT4gc3RhdGUubG9hZGluZ1xuXHQpO1xuXG5cdC8qKlxuXHQgKiBTZWxlY3RvciBmb3IgdGhlIElEcyBvZiBiZXN0IHNlbGxpbmcgcHJvZHVjdHMuXG5cdCAqL1xuXHRjb25zdCBzZWxlY3RCZXN0U2VsbGVyc0lkc1N0YXRlID0gY3JlYXRlU2VsZWN0b3IoXG5cdFx0c2VsZWN0QmVzdFNlbGxlcnNTdGF0ZSxcblx0XHQoc3RhdGU6IERhZmZCZXN0U2VsbGVyc1JlZHVjZXJTdGF0ZSkgPT4gc3RhdGUucHJvZHVjdElkc1xuXHQpO1xuXG5cdC8qKlxuXHQgKiBTZWxlY3RvciBmb3IgdGhlIGJlc3Qgc2VsbGluZyBwcm9kdWN0cy5cblx0ICovXG5cdGNvbnN0IHNlbGVjdEJlc3RTZWxsZXJzUHJvZHVjdHMgPSBjcmVhdGVTZWxlY3Rvcihcblx0XHRzZWxlY3RCZXN0U2VsbGVyc0lkc1N0YXRlLFxuXHRcdHNlbGVjdEFsbFByb2R1Y3RzLFxuXHRcdChpZHM6IHN0cmluZ1tdLCBwcm9kdWN0czogVFtdKSA9PiBwcm9kdWN0cy5maWx0ZXIocHJvZHVjdCA9PiBpZHMuaW5kZXhPZihwcm9kdWN0LmlkKSA+IC0xKVxuXHQpXG5cblx0cmV0dXJuIHsgXG5cdFx0c2VsZWN0QmVzdFNlbGxlcnNTdGF0ZSxcblx0XHRzZWxlY3RCZXN0U2VsbGVyc0xvYWRpbmdTdGF0ZSxcblx0XHRzZWxlY3RCZXN0U2VsbGVyc0lkc1N0YXRlLFxuXHRcdHNlbGVjdEJlc3RTZWxsZXJzUHJvZHVjdHNcblx0fVxufVxuXG5leHBvcnQgY29uc3QgZ2V0RGFmZkJlc3RTZWxsZXJzU2VsZWN0b3JzID0gKCgpID0+IHtcblx0bGV0IGNhY2hlO1xuXHRyZXR1cm4gPFQgZXh0ZW5kcyBEYWZmUHJvZHVjdD4oKTogRGFmZkJlc3RTZWxsZXJzTWVtb2l6ZWRTZWxlY3RvcnM8VD4gPT4gY2FjaGUgPSBjYWNoZSBcblx0XHQ/IGNhY2hlIFxuXHRcdDogY3JlYXRlQmVzdFNlbGxlcnNTZWxlY3RvcnM8VD4oKTtcbn0pKCk7XG4iXX0=