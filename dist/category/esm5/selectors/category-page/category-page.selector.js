/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { createSelector } from '@ngrx/store';
import { getDaffCategoryFeatureSelector } from '../category-feature.selector';
import { buildAppliedFilter } from '../applied-filter/applied-filter-methods';
/**
 * @record
 * @template T, V, U
 */
export function DaffCategoryPageMemoizedSelectors() { }
if (false) {
    /** @type {?} */
    DaffCategoryPageMemoizedSelectors.prototype.selectCategoryState;
    /** @type {?} */
    DaffCategoryPageMemoizedSelectors.prototype.selectCategoryPageConfigurationState;
    /** @type {?} */
    DaffCategoryPageMemoizedSelectors.prototype.selectCategoryCurrentPage;
    /** @type {?} */
    DaffCategoryPageMemoizedSelectors.prototype.selectCategoryTotalPages;
    /** @type {?} */
    DaffCategoryPageMemoizedSelectors.prototype.selectCategoryPageSize;
    /** @type {?} */
    DaffCategoryPageMemoizedSelectors.prototype.selectCategoryFilters;
    /** @type {?} */
    DaffCategoryPageMemoizedSelectors.prototype.selectCategorySortOptions;
    /** @type {?} */
    DaffCategoryPageMemoizedSelectors.prototype.selectCategoryPageProductIds;
    /** @type {?} */
    DaffCategoryPageMemoizedSelectors.prototype.selectIsCategoryPageEmpty;
    /** @type {?} */
    DaffCategoryPageMemoizedSelectors.prototype.selectCategoryPageTotalProducts;
    /** @type {?} */
    DaffCategoryPageMemoizedSelectors.prototype.selectCategoryPageFilterRequests;
    /** @type {?} */
    DaffCategoryPageMemoizedSelectors.prototype.selectCategoryPageAppliedFilters;
    /** @type {?} */
    DaffCategoryPageMemoizedSelectors.prototype.selectCategoryPageAppliedSortOption;
    /** @type {?} */
    DaffCategoryPageMemoizedSelectors.prototype.selectCategoryPageAppliedSortDirection;
    /** @type {?} */
    DaffCategoryPageMemoizedSelectors.prototype.selectSelectedCategoryId;
    /** @type {?} */
    DaffCategoryPageMemoizedSelectors.prototype.selectCategoryLoading;
    /** @type {?} */
    DaffCategoryPageMemoizedSelectors.prototype.selectCategoryProductsLoading;
    /** @type {?} */
    DaffCategoryPageMemoizedSelectors.prototype.selectCategoryErrors;
}
/** @type {?} */
var createCategoryPageSelectors = (/**
 * @template T, V, U
 * @return {?}
 */
function () {
    /** @type {?} */
    var selectCategoryFeatureState = getDaffCategoryFeatureSelector().selectCategoryFeatureState;
    /**
     * Category State
     * @type {?}
     */
    var selectCategoryState = createSelector(selectCategoryFeatureState, (/**
     * @param {?} state
     * @return {?}
     */
    function (state) { return state.category; }));
    /**
     * CategoryPageConfigurationState State
     * @type {?}
     */
    var selectCategoryPageConfigurationState = createSelector(selectCategoryState, (/**
     * @param {?} state
     * @return {?}
     */
    function (state) { return state.categoryPageConfigurationState; }));
    /** @type {?} */
    var selectCategoryCurrentPage = createSelector(selectCategoryPageConfigurationState, (/**
     * @param {?} state
     * @return {?}
     */
    function (state) { return state.current_page; }));
    /** @type {?} */
    var selectCategoryTotalPages = createSelector(selectCategoryPageConfigurationState, (/**
     * @param {?} state
     * @return {?}
     */
    function (state) { return state.total_pages; }));
    /** @type {?} */
    var selectCategoryPageSize = createSelector(selectCategoryPageConfigurationState, (/**
     * @param {?} state
     * @return {?}
     */
    function (state) { return state.page_size; }));
    /** @type {?} */
    var selectCategoryFilters = createSelector(selectCategoryPageConfigurationState, (/**
     * @param {?} state
     * @return {?}
     */
    function (state) { return state.filters; }));
    /** @type {?} */
    var selectCategorySortOptions = createSelector(selectCategoryPageConfigurationState, (/**
     * @param {?} state
     * @return {?}
     */
    function (state) { return state.sort_options; }));
    /** @type {?} */
    var selectCategoryPageProductIds = createSelector(selectCategoryPageConfigurationState, (/**
     * @param {?} state
     * @return {?}
     */
    function (state) { return state.product_ids; }));
    /** @type {?} */
    var selectIsCategoryPageEmpty = createSelector(selectCategoryPageProductIds, (/**
     * @param {?} state
     * @return {?}
     */
    function (state) { return !state.length; }));
    /** @type {?} */
    var selectCategoryPageTotalProducts = createSelector(selectCategoryPageConfigurationState, (/**
     * @param {?} state
     * @return {?}
     */
    function (state) { return state.total_products; }));
    /** @type {?} */
    var selectCategoryPageFilterRequests = createSelector(selectCategoryPageConfigurationState, (/**
     * @param {?} state
     * @return {?}
     */
    function (state) { return state.filter_requests; }));
    /** @type {?} */
    var selectCategoryPageAppliedFilters = createSelector(selectCategoryPageFilterRequests, selectCategoryFilters, (/**
     * @param {?} filterRequests
     * @param {?} availableFilters
     * @return {?}
     */
    function (filterRequests, availableFilters) {
        if (!availableFilters.length)
            return [];
        return filterRequests.map((/**
         * @param {?} request
         * @return {?}
         */
        function (request) {
            return availableFilters
                .filter((/**
             * @param {?} availableFilter
             * @return {?}
             */
            function (availableFilter) { return availableFilter.name === request.name; }))
                .map((/**
             * @param {?} filter
             * @return {?}
             */
            function (filter) { return buildAppliedFilter(filter, request); })).shift();
        }));
    }));
    /** @type {?} */
    var selectCategoryPageAppliedSortOption = createSelector(selectCategoryPageConfigurationState, (/**
     * @param {?} state
     * @return {?}
     */
    function (state) { return state.applied_sort_option; }));
    /** @type {?} */
    var selectCategoryPageAppliedSortDirection = createSelector(selectCategoryPageConfigurationState, (/**
     * @param {?} state
     * @return {?}
     */
    function (state) { return state.applied_sort_direction; }));
    /**
     * Selected Category Id State
     * @type {?}
     */
    var selectSelectedCategoryId = createSelector(selectCategoryPageConfigurationState, (/**
     * @param {?} state
     * @return {?}
     */
    function (state) { return state.id; }));
    /**
     * Category Loading State
     * @type {?}
     */
    var selectCategoryLoading = createSelector(selectCategoryState, (/**
     * @param {?} state
     * @return {?}
     */
    function (state) { return state.categoryLoading; }));
    /**
     * Category Products Loading State
     * @type {?}
     */
    var selectCategoryProductsLoading = createSelector(selectCategoryState, (/**
     * @param {?} state
     * @return {?}
     */
    function (state) { return state.productsLoading; }));
    /**
     * Load Category Errors
     * @type {?}
     */
    var selectCategoryErrors = createSelector(selectCategoryState, (/**
     * @param {?} state
     * @return {?}
     */
    function (state) { return state.errors; }));
    return {
        selectCategoryState: selectCategoryState,
        selectCategoryPageConfigurationState: selectCategoryPageConfigurationState,
        selectCategoryCurrentPage: selectCategoryCurrentPage,
        selectCategoryTotalPages: selectCategoryTotalPages,
        selectCategoryPageSize: selectCategoryPageSize,
        selectCategoryFilters: selectCategoryFilters,
        selectCategorySortOptions: selectCategorySortOptions,
        selectCategoryPageProductIds: selectCategoryPageProductIds,
        selectIsCategoryPageEmpty: selectIsCategoryPageEmpty,
        selectCategoryPageTotalProducts: selectCategoryPageTotalProducts,
        selectCategoryPageFilterRequests: selectCategoryPageFilterRequests,
        selectCategoryPageAppliedFilters: selectCategoryPageAppliedFilters,
        selectCategoryPageAppliedSortOption: selectCategoryPageAppliedSortOption,
        selectCategoryPageAppliedSortDirection: selectCategoryPageAppliedSortDirection,
        selectSelectedCategoryId: selectSelectedCategoryId,
        selectCategoryLoading: selectCategoryLoading,
        selectCategoryProductsLoading: selectCategoryProductsLoading,
        selectCategoryErrors: selectCategoryErrors
    };
});
var ɵ0 = createCategoryPageSelectors;
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
        : createCategoryPageSelectors(); });
};
/** @type {?} */
export var getDaffCategoryPageSelectors = ((ɵ1))();
export { ɵ0, ɵ1 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2F0ZWdvcnktcGFnZS5zZWxlY3Rvci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkYWZmb2RpbC9jYXRlZ29yeS8iLCJzb3VyY2VzIjpbInNlbGVjdG9ycy9jYXRlZ29yeS1wYWdlL2NhdGVnb3J5LXBhZ2Uuc2VsZWN0b3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxjQUFjLEVBQW9CLE1BQU0sYUFBYSxDQUFDO0FBUS9ELE9BQU8sRUFBRSw4QkFBOEIsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBRzlFLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLDBDQUEwQyxDQUFDOzs7OztBQUc5RSx1REF1QkM7OztJQWxCQSxnRUFBOEU7O0lBQzlFLGlGQUFrRTs7SUFDbEUsc0VBQXVFOztJQUN2RSxxRUFBcUU7O0lBQ3JFLG1FQUFpRTs7SUFDakUsa0VBQThEOztJQUM5RCxzRUFBdUU7O0lBQ3ZFLHlFQUF5RTs7SUFDekUsc0VBQTZEOztJQUM3RCw0RUFBK0U7O0lBQy9FLDZFQUFpRjs7SUFDakYsNkVBQXdGOztJQUN4RixnRkFBd0Y7O0lBQ3hGLG1GQUE4Rjs7SUFDOUYscUVBQTREOztJQUM1RCxrRUFBeUQ7O0lBQ3pELDBFQUFpRTs7SUFDakUsaUVBQXlEOzs7SUFHcEQsMkJBQTJCOzs7O0FBQUc7O1FBQzdCLDBCQUEwQixHQUFHLDhCQUE4QixFQUFXLENBQUMsMEJBQTBCOzs7OztRQUtqRyxtQkFBbUIsR0FBRyxjQUFjLENBQ3pDLDBCQUEwQjs7OztJQUMxQixVQUFDLEtBQXlDLElBQUssT0FBQSxLQUFLLENBQUMsUUFBUSxFQUFkLENBQWMsRUFDN0Q7Ozs7O1FBS0ssb0NBQW9DLEdBQUcsY0FBYyxDQUMxRCxtQkFBbUI7Ozs7SUFDbkIsVUFBQyxLQUFxQyxJQUFLLE9BQUEsS0FBSyxDQUFDLDhCQUE4QixFQUFwQyxDQUFvQyxFQUMvRTs7UUFFSyx5QkFBeUIsR0FBRyxjQUFjLENBQy9DLG9DQUFvQzs7OztJQUNwQyxVQUFD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QUFtQjs7OztJQUNuQixVQUFDLEtBQXFDLElBQUssT0FBQSxLQUFLLENBQUMsTUFBTSxFQUFaLENBQVksRUFDdkQ7SUFFRCxPQUFPO1FBQ04sbUJBQW1CLHFCQUFBO1FBQ25CLG9DQUFvQyxzQ0FBQTtRQUNwQyx5QkFBeUIsMkJBQUE7UUFDekIsd0JBQXdCLDBCQUFBO1FBQ3hCLHNCQUFzQix3QkFBQTtRQUN0QixxQkFBcUIsdUJBQUE7UUFDckIseUJBQXlCLDJCQUFBO1FBQ3pCLDRCQUE0Qiw4QkFBQTtRQUM1Qix5QkFBeUIsMkJBQUE7UUFDekIsK0JBQStCLGlDQUFBO1FBQy9CLGdDQUFnQyxrQ0FBQTtRQUNoQyxnQ0FBZ0Msa0NBQUE7UUFDaEMsbUNBQW1DLHFDQUFBO1FBQ25DLHNDQUFzQyx3Q0FBQTtRQUN0Qyx3QkFBd0IsMEJBQUE7UUFDeEIscUJBQXFCLHVCQUFBO1FBQ3JCLDZCQUE2QiwrQkFBQTtRQUM3QixvQkFBb0Isc0JBQUE7S0FDcEIsQ0FBQTtBQUNGLENBQUMsQ0FBQTs7Ozs7QUFFNEM7O1FBQ3hDLEtBQUs7SUFDVDs7OztJQUFPLGNBQW9LLE9BQUEsS0FBSyxHQUFHLEtBQUs7UUFDdkwsQ0FBQyxDQUFDLEtBQUs7UUFDUCxDQUFDLENBQUMsMkJBQTJCLEVBQVcsRUFGa0ksQ0FFbEksRUFBQztBQUMzQyxDQUFDOztBQUxELE1BQU0sS0FBTyw0QkFBNEIsR0FBRyxNQUsxQyxFQUFFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlU2VsZWN0b3IsIE1lbW9pemVkU2VsZWN0b3IgfSBmcm9tICdAbmdyeC9zdG9yZSc7XG5cbmltcG9ydCB7IERhZmZDYXRlZ29yeVJlcXVlc3QgfSBmcm9tICcuLi8uLi9tb2RlbHMvcmVxdWVzdHMvY2F0ZWdvcnktcmVxdWVzdCc7XG5pbXBvcnQgeyBEYWZmR2VuZXJpY0NhdGVnb3J5IH0gZnJvbSAnLi4vLi4vbW9kZWxzL2dlbmVyaWMtY2F0ZWdvcnknO1xuaW1wb3J0IHsgRGFmZkNhdGVnb3J5UGFnZUNvbmZpZ3VyYXRpb25TdGF0ZSB9IGZyb20gJy4uLy4uL21vZGVscy9jYXRlZ29yeS1wYWdlLWNvbmZpZ3VyYXRpb24tc3RhdGUnO1xuaW1wb3J0IHsgRGFmZkNhdGVnb3J5UmVkdWNlclN0YXRlIH0gZnJvbSAnLi4vLi4vcmVkdWNlcnMvY2F0ZWdvcnkvY2F0ZWdvcnktcmVkdWNlci1zdGF0ZS5pbnRlcmZhY2UnO1xuaW1wb3J0IHsgRGFmZkNhdGVnb3J5QXBwbGllZEZpbHRlciB9IGZyb20gJy4uLy4uL21vZGVscy9jYXRlZ29yeS1hcHBsaWVkLWZpbHRlcic7XG5pbXBvcnQgeyBEYWZmQ2F0ZWdvcnlSZWR1Y2Vyc1N0YXRlIH0gZnJvbSAnLi4vLi4vcmVkdWNlcnMvY2F0ZWdvcnktcmVkdWNlcnMuaW50ZXJmYWNlJztcbmltcG9ydCB7IGdldERhZmZDYXRlZ29yeUZlYXR1cmVTZWxlY3RvciB9IGZyb20gJy4uL2NhdGVnb3J5LWZlYXR1cmUuc2VsZWN0b3InO1xuaW1wb3J0IHsgRGFmZkNhdGVnb3J5RmlsdGVyUmVxdWVzdCB9IGZyb20gJy4uLy4uL21vZGVscy9yZXF1ZXN0cy9maWx0ZXItcmVxdWVzdCc7XG5pbXBvcnQgeyBEYWZmQ2F0ZWdvcnlGaWx0ZXIgfSBmcm9tICcuLi8uLi9tb2RlbHMvY2F0ZWdvcnktZmlsdGVyJztcbmltcG9ydCB7IGJ1aWxkQXBwbGllZEZpbHRlciB9IGZyb20gJy4uL2FwcGxpZWQtZmlsdGVyL2FwcGxpZWQtZmlsdGVyLW1ldGhvZHMnO1xuaW1wb3J0IHsgRGFmZkNhdGVnb3J5IH0gZnJvbSAnLi4vLi4vbW9kZWxzL2NhdGVnb3J5JztcblxuZXhwb3J0IGludGVyZmFjZSBEYWZmQ2F0ZWdvcnlQYWdlTWVtb2l6ZWRTZWxlY3RvcnM8XG5cdFQgZXh0ZW5kcyBEYWZmQ2F0ZWdvcnlSZXF1ZXN0ID0gRGFmZkNhdGVnb3J5UmVxdWVzdCwgXG5cdFYgZXh0ZW5kcyBEYWZmR2VuZXJpY0NhdGVnb3J5PFY+ID0gRGFmZkNhdGVnb3J5LCBcblx0VSBleHRlbmRzIERhZmZDYXRlZ29yeVBhZ2VDb25maWd1cmF0aW9uU3RhdGU8VD4gPSBEYWZmQ2F0ZWdvcnlQYWdlQ29uZmlndXJhdGlvblN0YXRlPFQ+XG4+IHtcblx0c2VsZWN0Q2F0ZWdvcnlTdGF0ZTogTWVtb2l6ZWRTZWxlY3RvcjxvYmplY3QsIERhZmZDYXRlZ29yeVJlZHVjZXJTdGF0ZTxULCBVPj47XG5cdHNlbGVjdENhdGVnb3J5UGFnZUNvbmZpZ3VyYXRpb25TdGF0ZTogTWVtb2l6ZWRTZWxlY3RvcjxvYmplY3QsIFU+O1xuXHRzZWxlY3RDYXRlZ29yeUN1cnJlbnRQYWdlOiBNZW1vaXplZFNlbGVjdG9yPG9iamVjdCwgVVsnY3VycmVudF9wYWdlJ10+O1xuXHRzZWxlY3RDYXRlZ29yeVRvdGFsUGFnZXM6IE1lbW9pemVkU2VsZWN0b3I8b2JqZWN0LCBVWyd0b3RhbF9wYWdlcyddPjtcblx0c2VsZWN0Q2F0ZWdvcnlQYWdlU2l6ZTogTWVtb2l6ZWRTZWxlY3RvcjxvYmplY3QsIFVbJ3BhZ2Vfc2l6ZSddPjtcblx0c2VsZWN0Q2F0ZWdvcnlGaWx0ZXJzOiBNZW1vaXplZFNlbGVjdG9yPG9iamVjdCwgVVsnZmlsdGVycyddPjtcblx0c2VsZWN0Q2F0ZWdvcnlTb3J0T3B0aW9uczogTWVtb2l6ZWRTZWxlY3RvcjxvYmplY3QsIFVbJ3NvcnRfb3B0aW9ucyddPjtcblx0c2VsZWN0Q2F0ZWdvcnlQYWdlUHJvZHVjdElkczogTWVtb2l6ZWRTZWxlY3RvcjxvYmplY3QsIFVbJ3Byb2R1Y3RfaWRzJ10+O1xuXHRzZWxlY3RJc0NhdGVnb3J5UGFnZUVtcHR5OiBNZW1vaXplZFNlbGVjdG9yPG9iamVjdCwgYm9vbGVhbj47XG5cdHNlbGVjdENhdGVnb3J5UGFnZVRvdGFsUHJvZHVjdHM6IE1lbW9pemVkU2VsZWN0b3I8b2JqZWN0LCBVWyd0b3RhbF9wcm9kdWN0cyddPjtcblx0c2VsZWN0Q2F0ZWdvcnlQYWdlRmlsdGVyUmVxdWVzdHM6IE1lbW9pemVkU2VsZWN0b3I8b2JqZWN0LCBVWydmaWx0ZXJfcmVxdWVzdHMnXT47XG5cdHNlbGVjdENhdGVnb3J5UGFnZUFwcGxpZWRGaWx0ZXJzOiBNZW1vaXplZFNlbGVjdG9yPG9iamVjdCwgRGFmZkNhdGVnb3J5QXBwbGllZEZpbHRlcltdPjtcblx0c2VsZWN0Q2F0ZWdvcnlQYWdlQXBwbGllZFNvcnRPcHRpb246IE1lbW9pemVkU2VsZWN0b3I8b2JqZWN0LCBVWydhcHBsaWVkX3NvcnRfb3B0aW9uJ10+O1xuXHRzZWxlY3RDYXRlZ29yeVBhZ2VBcHBsaWVkU29ydERpcmVjdGlvbjogTWVtb2l6ZWRTZWxlY3RvcjxvYmplY3QsIFVbJ2FwcGxpZWRfc29ydF9kaXJlY3Rpb24nXT47XG5cdHNlbGVjdFNlbGVjdGVkQ2F0ZWdvcnlJZDogTWVtb2l6ZWRTZWxlY3RvcjxvYmplY3QsIFVbJ2lkJ10+O1xuXHRzZWxlY3RDYXRlZ29yeUxvYWRpbmc6IE1lbW9pemVkU2VsZWN0b3I8b2JqZWN0LCBib29sZWFuPjtcblx0c2VsZWN0Q2F0ZWdvcnlQcm9kdWN0c0xvYWRpbmc6IE1lbW9pemVkU2VsZWN0b3I8b2JqZWN0LCBib29sZWFuPjtcblx0c2VsZWN0Q2F0ZWdvcnlFcnJvcnM6IE1lbW9pemVkU2VsZWN0b3I8b2JqZWN0LCBzdHJpbmdbXT47XG59XG5cbmNvbnN0IGNyZWF0ZUNhdGVnb3J5UGFnZVNlbGVjdG9ycyA9IDxUIGV4dGVuZHMgRGFmZkNhdGVnb3J5UmVxdWVzdCwgViBleHRlbmRzIERhZmZHZW5lcmljQ2F0ZWdvcnk8Vj4sIFUgZXh0ZW5kcyBEYWZmQ2F0ZWdvcnlQYWdlQ29uZmlndXJhdGlvblN0YXRlPFQ+PigpOiBEYWZmQ2F0ZWdvcnlQYWdlTWVtb2l6ZWRTZWxlY3RvcnM8VCwgViwgVT4gPT4ge1xuXHRjb25zdCBzZWxlY3RDYXRlZ29yeUZlYXR1cmVTdGF0ZSA9IGdldERhZmZDYXRlZ29yeUZlYXR1cmVTZWxlY3RvcjxULCBWLCBVPigpLnNlbGVjdENhdGVnb3J5RmVhdHVyZVN0YXRlO1xuXG5cdC8qKlxuXHQgKiBDYXRlZ29yeSBTdGF0ZVxuXHQgKi9cblx0Y29uc3Qgc2VsZWN0Q2F0ZWdvcnlTdGF0ZSA9IGNyZWF0ZVNlbGVjdG9yKFxuXHRcdHNlbGVjdENhdGVnb3J5RmVhdHVyZVN0YXRlLFxuXHRcdChzdGF0ZTogRGFmZkNhdGVnb3J5UmVkdWNlcnNTdGF0ZTxULCBWLCBVPikgPT4gc3RhdGUuY2F0ZWdvcnlcblx0KTtcblxuXHQvKipcblx0ICogQ2F0ZWdvcnlQYWdlQ29uZmlndXJhdGlvblN0YXRlIFN0YXRlXG5cdCAqL1xuXHRjb25zdCBzZWxlY3RDYXRlZ29yeVBhZ2VDb25maWd1cmF0aW9uU3RhdGUgPSBjcmVhdGVTZWxlY3Rvcihcblx0XHRzZWxlY3RDYXRlZ29yeVN0YXRlLFxuXHRcdChzdGF0ZTogRGFmZkNhdGVnb3J5UmVkdWNlclN0YXRlPFQsIFU+KSA9PiBzdGF0ZS5jYXRlZ29yeVBhZ2VDb25maWd1cmF0aW9uU3RhdGVcblx0KTtcblxuXHRjb25zdCBzZWxlY3RDYXRlZ29yeUN1cnJlbnRQYWdlID0gY3JlYXRlU2VsZWN0b3IoXG5cdFx0c2VsZWN0Q2F0ZWdvcnlQYWdlQ29uZmlndXJhdGlvblN0YXRlLFxuXHRcdChzdGF0ZTogVSkgPT4gc3RhdGUuY3VycmVudF9wYWdlXG5cdCk7XG5cblx0Y29uc3Qgc2VsZWN0Q2F0ZWdvcnlUb3RhbFBhZ2VzID0gY3JlYXRlU2VsZWN0b3IoXG5cdFx0c2VsZWN0Q2F0ZWdvcnlQYWdlQ29uZmlndXJhdGlvblN0YXRlLFxuXHRcdChzdGF0ZTogVSkgPT4gc3RhdGUudG90YWxfcGFnZXNcblx0KTtcblxuXHRjb25zdCBzZWxlY3RDYXRlZ29yeVBhZ2VTaXplID0gY3JlYXRlU2VsZWN0b3IoXG5cdFx0c2VsZWN0Q2F0ZWdvcnlQYWdlQ29uZmlndXJhdGlvblN0YXRlLFxuXHRcdChzdGF0ZTogVSkgPT4gc3RhdGUucGFnZV9zaXplXG5cdCk7XG5cblx0Y29uc3Qgc2VsZWN0Q2F0ZWdvcnlGaWx0ZXJzID0gY3JlYXRlU2VsZWN0b3IoXG5cdFx0c2VsZWN0Q2F0ZWdvcnlQYWdlQ29uZmlndXJhdGlvblN0YXRlLFxuXHRcdChzdGF0ZTogVSkgPT4gc3RhdGUuZmlsdGVyc1xuXHQpO1xuXG5cdGNvbnN0IHNlbGVjdENhdGVnb3J5U29ydE9wdGlvbnMgPSBjcmVhdGVTZWxlY3Rvcihcblx0XHRzZWxlY3RDYXRlZ29yeVBhZ2VDb25maWd1cmF0aW9uU3RhdGUsXG5cdFx0KHN0YXRlOiBVKSA9PiBzdGF0ZS5zb3J0X29wdGlvbnNcblx0KTtcblxuXHRjb25zdCBzZWxlY3RDYXRlZ29yeVBhZ2VQcm9kdWN0SWRzID0gY3JlYXRlU2VsZWN0b3IoXG5cdFx0c2VsZWN0Q2F0ZWdvcnlQYWdlQ29uZmlndXJhdGlvblN0YXRlLFxuXHRcdChzdGF0ZTogVSkgPT4gc3RhdGUucHJvZHVjdF9pZHNcblx0KTtcblxuXHRjb25zdCBzZWxlY3RJc0NhdGVnb3J5UGFnZUVtcHR5ID0gY3JlYXRlU2VsZWN0b3IoXG5cdFx0c2VsZWN0Q2F0ZWdvcnlQYWdlUHJvZHVjdElkcyxcblx0XHQoc3RhdGU6IFZbJ3Byb2R1Y3RfaWRzJ10pID0+ICFzdGF0ZS5sZW5ndGhcblx0KTtcblxuXHRjb25zdCBzZWxlY3RDYXRlZ29yeVBhZ2VUb3RhbFByb2R1Y3RzID0gY3JlYXRlU2VsZWN0b3IoXG5cdFx0c2VsZWN0Q2F0ZWdvcnlQYWdlQ29uZmlndXJhdGlvblN0YXRlLFxuXHRcdChzdGF0ZTogVSkgPT4gc3RhdGUudG90YWxfcHJvZHVjdHNcblx0KTtcblxuXHRjb25zdCBzZWxlY3RDYXRlZ29yeVBhZ2VGaWx0ZXJSZXF1ZXN0cyA9IGNyZWF0ZVNlbGVjdG9yKFxuXHRcdHNlbGVjdENhdGVnb3J5UGFnZUNvbmZpZ3VyYXRpb25TdGF0ZSxcblx0XHQoc3RhdGU6IFUpID0+IHN0YXRlLmZpbHRlcl9yZXF1ZXN0c1xuXHQpO1xuXG5cdGNvbnN0IHNlbGVjdENhdGVnb3J5UGFnZUFwcGxpZWRGaWx0ZXJzID0gY3JlYXRlU2VsZWN0b3IoXG5cdFx0c2VsZWN0Q2F0ZWdvcnlQYWdlRmlsdGVyUmVxdWVzdHMsXG5cdFx0c2VsZWN0Q2F0ZWdvcnlGaWx0ZXJzLFxuXHRcdChmaWx0ZXJSZXF1ZXN0czogRGFmZkNhdGVnb3J5RmlsdGVyUmVxdWVzdFtdLCBhdmFpbGFibGVGaWx0ZXJzOiBEYWZmQ2F0ZWdvcnlGaWx0ZXJbXSk6IERhZmZDYXRlZ29yeUFwcGxpZWRGaWx0ZXJbXSA9PiB7XG5cdFx0XHRpZighYXZhaWxhYmxlRmlsdGVycy5sZW5ndGgpIHJldHVybiBbXTtcblx0XHRcdHJldHVybiBmaWx0ZXJSZXF1ZXN0cy5tYXAocmVxdWVzdCA9PiBcblx0XHRcdFx0YXZhaWxhYmxlRmlsdGVyc1xuXHRcdFx0XHRcdC5maWx0ZXIoYXZhaWxhYmxlRmlsdGVyID0+IGF2YWlsYWJsZUZpbHRlci5uYW1lID09PSByZXF1ZXN0Lm5hbWUpXG5cdFx0XHRcdFx0Lm1hcChmaWx0ZXIgPT4gYnVpbGRBcHBsaWVkRmlsdGVyKGZpbHRlciwgcmVxdWVzdCkpLnNoaWZ0KClcblx0XHRcdCk7XG5cdFx0fVxuXHQpO1xuXG5cdGNvbnN0IHNlbGVjdENhdGVnb3J5UGFnZUFwcGxpZWRTb3J0T3B0aW9uID0gY3JlYXRlU2VsZWN0b3IoXG5cdFx0c2VsZWN0Q2F0ZWdvcnlQYWdlQ29uZmlndXJhdGlvblN0YXRlLFxuXHRcdChzdGF0ZTogVSkgPT4gc3RhdGUuYXBwbGllZF9zb3J0X29wdGlvblxuXHQpO1xuXG5cdGNvbnN0IHNlbGVjdENhdGVnb3J5UGFnZUFwcGxpZWRTb3J0RGlyZWN0aW9uID0gY3JlYXRlU2VsZWN0b3IoXG5cdFx0c2VsZWN0Q2F0ZWdvcnlQYWdlQ29uZmlndXJhdGlvblN0YXRlLFxuXHRcdChzdGF0ZTogVSkgPT4gc3RhdGUuYXBwbGllZF9zb3J0X2RpcmVjdGlvblxuXHQpO1xuXG5cdC8qKlxuXHQgKiBTZWxlY3RlZCBDYXRlZ29yeSBJZCBTdGF0ZVxuXHQgKi9cblx0Y29uc3Qgc2VsZWN0U2VsZWN0ZWRDYXRlZ29yeUlkID0gY3JlYXRlU2VsZWN0b3IoXG5cdFx0c2VsZWN0Q2F0ZWdvcnlQYWdlQ29uZmlndXJhdGlvblN0YXRlLFxuXHRcdChzdGF0ZTogVSkgPT4gc3RhdGUuaWRcblx0KTtcblxuXHQvKipcblx0ICogQ2F0ZWdvcnkgTG9hZGluZyBTdGF0ZVxuXHQgKi9cblx0Y29uc3Qgc2VsZWN0Q2F0ZWdvcnlMb2FkaW5nID0gY3JlYXRlU2VsZWN0b3IoXG5cdFx0c2VsZWN0Q2F0ZWdvcnlTdGF0ZSxcblx0XHQoc3RhdGU6IERhZmZDYXRlZ29yeVJlZHVjZXJTdGF0ZTxULCBVPikgPT4gc3RhdGUuY2F0ZWdvcnlMb2FkaW5nXG5cdCk7XG5cblx0LyoqXG5cdCAqIENhdGVnb3J5IFByb2R1Y3RzIExvYWRpbmcgU3RhdGVcblx0ICovXG5cdGNvbnN0IHNlbGVjdENhdGVnb3J5UHJvZHVjdHNMb2FkaW5nID0gY3JlYXRlU2VsZWN0b3IoXG5cdFx0c2VsZWN0Q2F0ZWdvcnlTdGF0ZSxcblx0XHQoc3RhdGU6IERhZmZDYXRlZ29yeVJlZHVjZXJTdGF0ZTxULCBVPikgPT4gc3RhdGUucHJvZHVjdHNMb2FkaW5nXG5cdCk7XG5cblx0LyoqXG5cdCAqIExvYWQgQ2F0ZWdvcnkgRXJyb3JzXG5cdCAqL1xuXHRjb25zdCBzZWxlY3RDYXRlZ29yeUVycm9ycyA9IGNyZWF0ZVNlbGVjdG9yKFxuXHRcdHNlbGVjdENhdGVnb3J5U3RhdGUsXG5cdFx0KHN0YXRlOiBEYWZmQ2F0ZWdvcnlSZWR1Y2VyU3RhdGU8VCwgVT4pID0+IHN0YXRlLmVycm9yc1xuXHQpO1xuXG5cdHJldHVybiB7IFxuXHRcdHNlbGVjdENhdGVnb3J5U3RhdGUsXG5cdFx0c2VsZWN0Q2F0ZWdvcnlQYWdlQ29uZmlndXJhdGlvblN0YXRlLFxuXHRcdHNlbGVjdENhdGVnb3J5Q3VycmVudFBhZ2UsXG5cdFx0c2VsZWN0Q2F0ZWdvcnlUb3RhbFBhZ2VzLFxuXHRcdHNlbGVjdENhdGVnb3J5UGFnZVNpemUsXG5cdFx0c2VsZWN0Q2F0ZWdvcnlGaWx0ZXJzLFxuXHRcdHNlbGVjdENhdGVnb3J5U29ydE9wdGlvbnMsXG5cdFx0c2VsZWN0Q2F0ZWdvcnlQYWdlUHJvZHVjdElkcyxcblx0XHRzZWxlY3RJc0NhdGVnb3J5UGFnZUVtcHR5LFxuXHRcdHNlbGVjdENhdGVnb3J5UGFnZVRvdGFsUHJvZHVjdHMsXG5cdFx0c2VsZWN0Q2F0ZWdvcnlQYWdlRmlsdGVyUmVxdWVzdHMsXG5cdFx0c2VsZWN0Q2F0ZWdvcnlQYWdlQXBwbGllZEZpbHRlcnMsXG5cdFx0c2VsZWN0Q2F0ZWdvcnlQYWdlQXBwbGllZFNvcnRPcHRpb24sXG5cdFx0c2VsZWN0Q2F0ZWdvcnlQYWdlQXBwbGllZFNvcnREaXJlY3Rpb24sXG5cdFx0c2VsZWN0U2VsZWN0ZWRDYXRlZ29yeUlkLFxuXHRcdHNlbGVjdENhdGVnb3J5TG9hZGluZyxcblx0XHRzZWxlY3RDYXRlZ29yeVByb2R1Y3RzTG9hZGluZyxcblx0XHRzZWxlY3RDYXRlZ29yeUVycm9yc1xuXHR9XG59XG5cbmV4cG9ydCBjb25zdCBnZXREYWZmQ2F0ZWdvcnlQYWdlU2VsZWN0b3JzID0gKCgpID0+IHtcblx0bGV0IGNhY2hlO1xuXHRyZXR1cm4gPFQgZXh0ZW5kcyBEYWZmQ2F0ZWdvcnlSZXF1ZXN0LCBWIGV4dGVuZHMgRGFmZkdlbmVyaWNDYXRlZ29yeTxWPiwgVSBleHRlbmRzIERhZmZDYXRlZ29yeVBhZ2VDb25maWd1cmF0aW9uU3RhdGU8VD4+KCk6IERhZmZDYXRlZ29yeVBhZ2VNZW1vaXplZFNlbGVjdG9yczxULCBWLCBVPiA9PiBjYWNoZSA9IGNhY2hlIFxuXHRcdD8gY2FjaGUgXG5cdFx0OiBjcmVhdGVDYXRlZ29yeVBhZ2VTZWxlY3RvcnM8VCwgViwgVT4oKTtcbn0pKCk7XG4iXX0=