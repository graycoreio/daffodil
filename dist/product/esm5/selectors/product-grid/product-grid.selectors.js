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
var createProductGridSelectors = (/**
 * @template T
 * @return {?}
 */
function () {
    var selectProductState = getDaffProductFeatureSelector().selectProductState;
    /**
     * Selector for Product Grid state.
     * @type {?}
     */
    var selectProductGridState = createSelector(selectProductState, (/**
     * @param {?} state
     * @return {?}
     */
    function (state) { return state.productGrid; }));
    /**
     * Selector for product grid loading state.
     * @type {?}
     */
    var selectProductGridLoadingState = createSelector(selectProductGridState, (/**
     * @param {?} state
     * @return {?}
     */
    function (state) { return state.loading; }));
    return {
        selectProductGridState: selectProductGridState,
        selectProductGridLoadingState: selectProductGridLoadingState
    };
});
var ɵ0 = createProductGridSelectors;
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
        : createProductGridSelectors(); });
};
/** @type {?} */
export var getDaffProductGridSelectors = ((ɵ1))();
export { ɵ0, ɵ1 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC1ncmlkLnNlbGVjdG9ycy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkYWZmb2RpbC9wcm9kdWN0LyIsInNvdXJjZXMiOlsic2VsZWN0b3JzL3Byb2R1Y3QtZ3JpZC9wcm9kdWN0LWdyaWQuc2VsZWN0b3JzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsY0FBYyxFQUFvQixNQUFNLGFBQWEsQ0FBQztBQUkvRCxPQUFPLEVBQUUsNkJBQTZCLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQzs7Ozs7QUFHNUUsc0RBR0M7OztJQUZBLGtFQUFpRjs7SUFDakYseUVBQWlFOzs7SUFHNUQsMEJBQTBCOzs7O0FBQUc7SUFFakMsSUFBQSx1RUFBa0I7Ozs7O1FBS2Isc0JBQXNCLEdBQUcsY0FBYyxDQUM1QyxrQkFBa0I7Ozs7SUFDbEIsVUFBQyxLQUFrQyxJQUFLLE9BQUEsS0FBSyxDQUFDLFdBQVcsRUFBakIsQ0FBaUIsRUFDekQ7Ozs7O1FBS0ssNkJBQTZCLEdBQUcsY0FBYyxDQUNuRCxzQkFBc0I7Ozs7SUFDdEIsVUFBQyxLQUFxQyxJQUFLLE9BQUEsS0FBSyxDQUFDLE9BQU8sRUFBYixDQUFhLEVBQ3hEO0lBRUQsT0FBTztRQUNOLHNCQUFzQix3QkFBQTtRQUN0Qiw2QkFBNkIsK0JBQUE7S0FDN0IsQ0FBQTtBQUNGLENBQUMsQ0FBQTs7Ozs7QUFFMkM7O1FBQ3ZDLEtBQUs7SUFDVDs7OztJQUFPLGNBQWtFLE9BQUEsS0FBSyxHQUFHLEtBQUs7UUFDckYsQ0FBQyxDQUFDLEtBQUs7UUFDUCxDQUFDLENBQUMsMEJBQTBCLEVBQUssRUFGdUMsQ0FFdkMsRUFBQztBQUNwQyxDQUFDOztBQUxELE1BQU0sS0FBTywyQkFBMkIsR0FBRyxNQUt6QyxFQUFFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlU2VsZWN0b3IsIE1lbW9pemVkU2VsZWN0b3IgfSBmcm9tICdAbmdyeC9zdG9yZSc7XG5cbmltcG9ydCB7IERhZmZQcm9kdWN0R3JpZFJlZHVjZXJTdGF0ZSB9IGZyb20gJy4uLy4uL3JlZHVjZXJzL3Byb2R1Y3QtZ3JpZC9wcm9kdWN0LWdyaWQtcmVkdWNlci1zdGF0ZS5pbnRlcmZhY2UnO1xuaW1wb3J0IHsgRGFmZlByb2R1Y3RSZWR1Y2Vyc1N0YXRlIH0gZnJvbSAnLi4vLi4vcmVkdWNlcnMvcHJvZHVjdC1yZWR1Y2Vycy1zdGF0ZS5pbnRlcmZhY2UnO1xuaW1wb3J0IHsgZ2V0RGFmZlByb2R1Y3RGZWF0dXJlU2VsZWN0b3IgfSBmcm9tICcuLi9wcm9kdWN0LWZlYXR1cmUuc2VsZWN0b3InO1xuaW1wb3J0IHsgRGFmZlByb2R1Y3QgfSBmcm9tICcuLi8uLi9tb2RlbHMvcHJvZHVjdCc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgRGFmZlByb2R1Y3RHcmlkTWVtb2l6ZWRTZWxlY3RvcnM8VCBleHRlbmRzIERhZmZQcm9kdWN0ID0gRGFmZlByb2R1Y3Q+IHtcblx0c2VsZWN0UHJvZHVjdEdyaWRTdGF0ZTogTWVtb2l6ZWRTZWxlY3RvcjxvYmplY3QsIERhZmZQcm9kdWN0R3JpZFJlZHVjZXJTdGF0ZTxUPj47XG5cdHNlbGVjdFByb2R1Y3RHcmlkTG9hZGluZ1N0YXRlOiBNZW1vaXplZFNlbGVjdG9yPG9iamVjdCwgYm9vbGVhbj47XG59XG5cbmNvbnN0IGNyZWF0ZVByb2R1Y3RHcmlkU2VsZWN0b3JzID0gPFQgZXh0ZW5kcyBEYWZmUHJvZHVjdD4oKTogRGFmZlByb2R1Y3RHcmlkTWVtb2l6ZWRTZWxlY3RvcnM8VD4gPT4ge1xuXHRjb25zdCB7XG5cdFx0c2VsZWN0UHJvZHVjdFN0YXRlXG5cdH0gPSBnZXREYWZmUHJvZHVjdEZlYXR1cmVTZWxlY3RvcjxUPigpO1xuXHQvKipcblx0ICogU2VsZWN0b3IgZm9yIFByb2R1Y3QgR3JpZCBzdGF0ZS5cblx0ICovXG5cdGNvbnN0IHNlbGVjdFByb2R1Y3RHcmlkU3RhdGUgPSBjcmVhdGVTZWxlY3Rvcihcblx0XHRzZWxlY3RQcm9kdWN0U3RhdGUsXG5cdFx0KHN0YXRlOiBEYWZmUHJvZHVjdFJlZHVjZXJzU3RhdGU8VD4pID0+IHN0YXRlLnByb2R1Y3RHcmlkXG5cdCk7XG5cblx0LyoqXG5cdCAqIFNlbGVjdG9yIGZvciBwcm9kdWN0IGdyaWQgbG9hZGluZyBzdGF0ZS5cblx0ICovXG5cdGNvbnN0IHNlbGVjdFByb2R1Y3RHcmlkTG9hZGluZ1N0YXRlID0gY3JlYXRlU2VsZWN0b3IoXG5cdFx0c2VsZWN0UHJvZHVjdEdyaWRTdGF0ZSxcblx0XHQoc3RhdGU6IERhZmZQcm9kdWN0R3JpZFJlZHVjZXJTdGF0ZTxUPikgPT4gc3RhdGUubG9hZGluZ1xuXHQpO1xuXG5cdHJldHVybiB7IFxuXHRcdHNlbGVjdFByb2R1Y3RHcmlkU3RhdGUsXG5cdFx0c2VsZWN0UHJvZHVjdEdyaWRMb2FkaW5nU3RhdGVcblx0fVxufVxuXG5leHBvcnQgY29uc3QgZ2V0RGFmZlByb2R1Y3RHcmlkU2VsZWN0b3JzID0gKCgpID0+IHtcblx0bGV0IGNhY2hlO1xuXHRyZXR1cm4gPFQgZXh0ZW5kcyBEYWZmUHJvZHVjdD4oKTogRGFmZlByb2R1Y3RHcmlkTWVtb2l6ZWRTZWxlY3RvcnM8VD4gPT4gY2FjaGUgPSBjYWNoZSBcblx0XHQ/IGNhY2hlIFxuXHRcdDogY3JlYXRlUHJvZHVjdEdyaWRTZWxlY3RvcnM8VD4oKTtcbn0pKCk7XG4iXX0=