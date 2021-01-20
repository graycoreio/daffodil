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
var createBestSellersSelectors = (/**
 * @template T
 * @return {?}
 */
function () {
    var selectAllProducts = getDaffProductEntitiesSelectors().selectAllProducts;
    var selectProductState = getDaffProductFeatureSelector().selectProductState;
    /**
     * Selector for Best Seller State
     * @type {?}
     */
    var selectBestSellersState = createSelector(selectProductState, (/**
     * @param {?} state
     * @return {?}
     */
    function (state) { return state.bestSellers; }));
    /**
     * Selector for the loading state of best selling products.
     * @type {?}
     */
    var selectBestSellersLoadingState = createSelector(selectBestSellersState, (/**
     * @param {?} state
     * @return {?}
     */
    function (state) { return state.loading; }));
    /**
     * Selector for the IDs of best selling products.
     * @type {?}
     */
    var selectBestSellersIdsState = createSelector(selectBestSellersState, (/**
     * @param {?} state
     * @return {?}
     */
    function (state) { return state.productIds; }));
    /**
     * Selector for the best selling products.
     * @type {?}
     */
    var selectBestSellersProducts = createSelector(selectBestSellersIdsState, selectAllProducts, (/**
     * @param {?} ids
     * @param {?} products
     * @return {?}
     */
    function (ids, products) { return products.filter((/**
     * @param {?} product
     * @return {?}
     */
    function (product) { return ids.indexOf(product.id) > -1; })); }));
    return {
        selectBestSellersState: selectBestSellersState,
        selectBestSellersLoadingState: selectBestSellersLoadingState,
        selectBestSellersIdsState: selectBestSellersIdsState,
        selectBestSellersProducts: selectBestSellersProducts
    };
});
var ɵ0 = createBestSellersSelectors;
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
    function () { return cache = cache
        ? cache
        : createBestSellersSelectors(); });
};
/** @type {?} */
export var getDaffBestSellersSelectors = ((ɵ1))();
export { ɵ0, ɵ1 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmVzdC1zZWxsZXJzLnNlbGVjdG9ycy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkYWZmb2RpbC9wcm9kdWN0LyIsInNvdXJjZXMiOlsic2VsZWN0b3JzL2Jlc3Qtc2VsbGVycy9iZXN0LXNlbGxlcnMuc2VsZWN0b3JzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsY0FBYyxFQUFvQixNQUFNLGFBQWEsQ0FBQztBQUUvRCxPQUFPLEVBQUUsNkJBQTZCLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUc1RSxPQUFPLEVBQUUsK0JBQStCLEVBQUUsTUFBTSxnREFBZ0QsQ0FBQzs7Ozs7QUFHakcsc0RBS0M7OztJQUpBLGtFQUE4RTs7SUFDOUUseUVBQWlFOztJQUNqRSxxRUFBOEQ7O0lBQzlELHFFQUF5RDs7O0lBR3BELDBCQUEwQjs7OztBQUFHO0lBRWpDLElBQUEsdUVBQWlCO0lBR2pCLElBQUEsdUVBQWtCOzs7OztRQUtiLHNCQUFzQixHQUFHLGNBQWMsQ0FDNUMsa0JBQWtCOzs7O0lBQ2xCLFVBQUMsS0FBa0MsSUFBSyxPQUFBLEtBQUssQ0FBQyxXQUFXLEVBQWpCLENBQWlCLEVBQ3pEOzs7OztRQUtLLDZCQUE2QixHQUFHLGNBQWMsQ0FDbkQsc0JBQXNCOzs7O0lBQ3RCLFVBQUMsS0FBa0MsSUFBSyxPQUFBLEtBQUssQ0FBQyxPQUFPLEVBQWIsQ0FBYSxFQUNyRDs7Ozs7UUFLSyx5QkFBeUIsR0FBRyxjQUFjLENBQy9DLHNCQUFzQjs7OztJQUN0QixVQUFDLEtBQWtDLElBQUssT0FBQSxLQUFLLENBQUMsVUFBVSxFQUFoQixDQUFnQixFQUN4RDs7Ozs7UUFLSyx5QkFBeUIsR0FBRyxjQUFjLENBQy9DLHlCQUF5QixFQUN6QixpQkFBaUI7Ozs7O0lBQ2pCLFVBQUMsR0FBYSxFQUFFLFFBQWEsSUFBSyxPQUFBLFFBQVEsQ0FBQyxNQUFNOzs7O0lBQUMsVUFBQSxPQUFPLElBQUksT0FBQSxHQUFHLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBNUIsQ0FBNEIsRUFBQyxFQUF4RCxDQUF3RCxFQUMxRjtJQUVELE9BQU87UUFDTixzQkFBc0Isd0JBQUE7UUFDdEIsNkJBQTZCLCtCQUFBO1FBQzdCLHlCQUF5QiwyQkFBQTtRQUN6Qix5QkFBeUIsMkJBQUE7S0FDekIsQ0FBQTtBQUNGLENBQUMsQ0FBQTs7Ozs7QUFFMkM7O1FBQ3ZDLEtBQUs7SUFDVDs7OztJQUFPLGNBQWtFLE9BQUEsS0FBSyxHQUFHLEtBQUs7UUFDckYsQ0FBQyxDQUFDLEtBQUs7UUFDUCxDQUFDLENBQUMsMEJBQTBCLEVBQUssRUFGdUMsQ0FFdkMsRUFBQztBQUNwQyxDQUFDOztBQUxELE1BQU0sS0FBTywyQkFBMkIsR0FBRyxNQUt6QyxFQUFFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlU2VsZWN0b3IsIE1lbW9pemVkU2VsZWN0b3IgfSBmcm9tICdAbmdyeC9zdG9yZSc7XG5cbmltcG9ydCB7IGdldERhZmZQcm9kdWN0RmVhdHVyZVNlbGVjdG9yIH0gZnJvbSAnLi4vcHJvZHVjdC1mZWF0dXJlLnNlbGVjdG9yJztcbmltcG9ydCB7IERhZmZQcm9kdWN0UmVkdWNlcnNTdGF0ZSB9IGZyb20gJy4uLy4uL3JlZHVjZXJzL3Byb2R1Y3QtcmVkdWNlcnMtc3RhdGUuaW50ZXJmYWNlJztcbmltcG9ydCB7IERhZmZCZXN0U2VsbGVyc1JlZHVjZXJTdGF0ZSB9IGZyb20gJy4uLy4uL3JlZHVjZXJzL2Jlc3Qtc2VsbGVycy9iZXN0LXNlbGxlcnMtcmVkdWNlci1zdGF0ZS5pbnRlcmZhY2UnO1xuaW1wb3J0IHsgZ2V0RGFmZlByb2R1Y3RFbnRpdGllc1NlbGVjdG9ycyB9IGZyb20gJy4uL3Byb2R1Y3QtZW50aXRpZXMvcHJvZHVjdC1lbnRpdGllcy5zZWxlY3RvcnMnO1xuaW1wb3J0IHsgRGFmZlByb2R1Y3QgfSBmcm9tICcuLi8uLi9tb2RlbHMvcHJvZHVjdCc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgRGFmZkJlc3RTZWxsZXJzTWVtb2l6ZWRTZWxlY3RvcnM8VCBleHRlbmRzIERhZmZQcm9kdWN0ID0gRGFmZlByb2R1Y3Q+IHtcblx0c2VsZWN0QmVzdFNlbGxlcnNTdGF0ZTogTWVtb2l6ZWRTZWxlY3RvcjxvYmplY3QsIERhZmZCZXN0U2VsbGVyc1JlZHVjZXJTdGF0ZT47XG5cdHNlbGVjdEJlc3RTZWxsZXJzTG9hZGluZ1N0YXRlOiBNZW1vaXplZFNlbGVjdG9yPG9iamVjdCwgYm9vbGVhbj47XG5cdHNlbGVjdEJlc3RTZWxsZXJzSWRzU3RhdGU6IE1lbW9pemVkU2VsZWN0b3I8b2JqZWN0LCBzdHJpbmdbXT47XG5cdHNlbGVjdEJlc3RTZWxsZXJzUHJvZHVjdHM6IE1lbW9pemVkU2VsZWN0b3I8b2JqZWN0LCBUW10+O1xufVxuXG5jb25zdCBjcmVhdGVCZXN0U2VsbGVyc1NlbGVjdG9ycyA9IDxUIGV4dGVuZHMgRGFmZlByb2R1Y3Q+KCk6IERhZmZCZXN0U2VsbGVyc01lbW9pemVkU2VsZWN0b3JzPFQ+ID0+IHtcblx0Y29uc3Qge1xuXHRcdHNlbGVjdEFsbFByb2R1Y3RzXG5cdH0gPSBnZXREYWZmUHJvZHVjdEVudGl0aWVzU2VsZWN0b3JzPFQ+KCk7XG5cdGNvbnN0IHtcblx0XHRzZWxlY3RQcm9kdWN0U3RhdGVcblx0fSA9IGdldERhZmZQcm9kdWN0RmVhdHVyZVNlbGVjdG9yPFQ+KCk7XG5cdC8qKlxuXHQgKiBTZWxlY3RvciBmb3IgQmVzdCBTZWxsZXIgU3RhdGVcblx0ICovXG5cdGNvbnN0IHNlbGVjdEJlc3RTZWxsZXJzU3RhdGUgPSBjcmVhdGVTZWxlY3Rvcihcblx0XHRzZWxlY3RQcm9kdWN0U3RhdGUsXG5cdFx0KHN0YXRlOiBEYWZmUHJvZHVjdFJlZHVjZXJzU3RhdGU8VD4pID0+IHN0YXRlLmJlc3RTZWxsZXJzXG5cdCk7XG5cblx0LyoqXG5cdCAqIFNlbGVjdG9yIGZvciB0aGUgbG9hZGluZyBzdGF0ZSBvZiBiZXN0IHNlbGxpbmcgcHJvZHVjdHMuXG5cdCAqL1xuXHRjb25zdCBzZWxlY3RCZXN0U2VsbGVyc0xvYWRpbmdTdGF0ZSA9IGNyZWF0ZVNlbGVjdG9yKFxuXHRcdHNlbGVjdEJlc3RTZWxsZXJzU3RhdGUsXG5cdFx0KHN0YXRlOiBEYWZmQmVzdFNlbGxlcnNSZWR1Y2VyU3RhdGUpID0+IHN0YXRlLmxvYWRpbmdcblx0KTtcblxuXHQvKipcblx0ICogU2VsZWN0b3IgZm9yIHRoZSBJRHMgb2YgYmVzdCBzZWxsaW5nIHByb2R1Y3RzLlxuXHQgKi9cblx0Y29uc3Qgc2VsZWN0QmVzdFNlbGxlcnNJZHNTdGF0ZSA9IGNyZWF0ZVNlbGVjdG9yKFxuXHRcdHNlbGVjdEJlc3RTZWxsZXJzU3RhdGUsXG5cdFx0KHN0YXRlOiBEYWZmQmVzdFNlbGxlcnNSZWR1Y2VyU3RhdGUpID0+IHN0YXRlLnByb2R1Y3RJZHNcblx0KTtcblxuXHQvKipcblx0ICogU2VsZWN0b3IgZm9yIHRoZSBiZXN0IHNlbGxpbmcgcHJvZHVjdHMuXG5cdCAqL1xuXHRjb25zdCBzZWxlY3RCZXN0U2VsbGVyc1Byb2R1Y3RzID0gY3JlYXRlU2VsZWN0b3IoXG5cdFx0c2VsZWN0QmVzdFNlbGxlcnNJZHNTdGF0ZSxcblx0XHRzZWxlY3RBbGxQcm9kdWN0cyxcblx0XHQoaWRzOiBzdHJpbmdbXSwgcHJvZHVjdHM6IFRbXSkgPT4gcHJvZHVjdHMuZmlsdGVyKHByb2R1Y3QgPT4gaWRzLmluZGV4T2YocHJvZHVjdC5pZCkgPiAtMSlcblx0KVxuXG5cdHJldHVybiB7IFxuXHRcdHNlbGVjdEJlc3RTZWxsZXJzU3RhdGUsXG5cdFx0c2VsZWN0QmVzdFNlbGxlcnNMb2FkaW5nU3RhdGUsXG5cdFx0c2VsZWN0QmVzdFNlbGxlcnNJZHNTdGF0ZSxcblx0XHRzZWxlY3RCZXN0U2VsbGVyc1Byb2R1Y3RzXG5cdH1cbn1cblxuZXhwb3J0IGNvbnN0IGdldERhZmZCZXN0U2VsbGVyc1NlbGVjdG9ycyA9ICgoKSA9PiB7XG5cdGxldCBjYWNoZTtcblx0cmV0dXJuIDxUIGV4dGVuZHMgRGFmZlByb2R1Y3Q+KCk6IERhZmZCZXN0U2VsbGVyc01lbW9pemVkU2VsZWN0b3JzPFQ+ID0+IGNhY2hlID0gY2FjaGUgXG5cdFx0PyBjYWNoZSBcblx0XHQ6IGNyZWF0ZUJlc3RTZWxsZXJzU2VsZWN0b3JzPFQ+KCk7XG59KSgpO1xuIl19