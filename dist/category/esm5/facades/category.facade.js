/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { DaffCategoryModule } from '../category.module';
import { getDaffCategorySelectors } from '../selectors/category.selector';
import * as i0 from "@angular/core";
import * as i1 from "@ngrx/store";
import * as i2 from "../category.module";
/**
 * A facade for accessing state for the currently selected category.
 * @template T, V, U, W
 */
var DaffCategoryFacade = /** @class */ (function () {
    function DaffCategoryFacade(store) {
        this.store = store;
        this.categorySelectors = getDaffCategorySelectors();
        this.category$ = this.store.pipe(select(this.categorySelectors.selectSelectedCategory));
        this.products$ = this.store.pipe(select(this.categorySelectors.selectCategoryPageProducts));
        this.totalProducts$ = this.store.pipe(select(this.categorySelectors.selectCategoryPageTotalProducts));
        this.pageConfigurationState$ = this.store.pipe(select(this.categorySelectors.selectCategoryPageConfigurationState));
        this.currentPage$ = this.store.pipe(select(this.categorySelectors.selectCategoryCurrentPage));
        this.totalPages$ = this.store.pipe(select(this.categorySelectors.selectCategoryTotalPages));
        this.pageSize$ = this.store.pipe(select(this.categorySelectors.selectCategoryPageSize));
        this.filters$ = this.store.pipe(select(this.categorySelectors.selectCategoryFilters));
        this.sortOptions$ = this.store.pipe(select(this.categorySelectors.selectCategorySortOptions));
        this.appliedFilters$ = this.store.pipe(select(this.categorySelectors.selectCategoryPageAppliedFilters));
        this.appliedSortOption$ = this.store.pipe(select(this.categorySelectors.selectCategoryPageAppliedSortOption));
        this.appliedSortDirection$ = this.store.pipe(select(this.categorySelectors.selectCategoryPageAppliedSortDirection));
        this.categoryLoading$ = this.store.pipe(select(this.categorySelectors.selectCategoryLoading));
        this.productsLoading$ = this.store.pipe(select(this.categorySelectors.selectCategoryProductsLoading));
        this.errors$ = this.store.pipe(select(this.categorySelectors.selectCategoryErrors));
        this.isCategoryEmpty$ = this.store.pipe(select(this.categorySelectors.selectIsCategoryPageEmpty));
    }
    /**
     * Get a category by the provided Id.
     * @param id
     */
    /**
     * Get a category by the provided Id.
     * @param {?} id
     * @return {?}
     */
    DaffCategoryFacade.prototype.getCategoryById = /**
     * Get a category by the provided Id.
     * @param {?} id
     * @return {?}
     */
    function (id) {
        return this.store.pipe(select(this.categorySelectors.selectCategory, { id: id }));
    };
    /**
     * Get products by a category Id.
     * @param categoryId
     */
    /**
     * Get products by a category Id.
     * @param {?} categoryId
     * @return {?}
     */
    DaffCategoryFacade.prototype.getProductsByCategory = /**
     * Get products by a category Id.
     * @param {?} categoryId
     * @return {?}
     */
    function (categoryId) {
        return this.store.pipe(select(this.categorySelectors.selectProductsByCategory, { id: categoryId }));
    };
    /**
     * Get products by a category Id.
     * @param categoryId
     */
    /**
     * Get products by a category Id.
     * @param {?} categoryId
     * @return {?}
     */
    DaffCategoryFacade.prototype.getTotalProductsByCategory = /**
     * Get products by a category Id.
     * @param {?} categoryId
     * @return {?}
     */
    function (categoryId) {
        return this.store.pipe(select(this.categorySelectors.selectTotalProductsByCategory, { id: categoryId }));
    };
    /**
     * Dispatches the given action.
     * @param action action to dispatch.
     */
    /**
     * Dispatches the given action.
     * @param {?} action action to dispatch.
     * @return {?}
     */
    DaffCategoryFacade.prototype.dispatch = /**
     * Dispatches the given action.
     * @param {?} action action to dispatch.
     * @return {?}
     */
    function (action) {
        this.store.dispatch(action);
    };
    DaffCategoryFacade.decorators = [
        { type: Injectable, args: [{
                    providedIn: DaffCategoryModule
                },] }
    ];
    /** @nocollapse */
    DaffCategoryFacade.ctorParameters = function () { return [
        { type: Store }
    ]; };
    /** @nocollapse */ DaffCategoryFacade.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function DaffCategoryFacade_Factory() { return new DaffCategoryFacade(i0.ɵɵinject(i1.Store)); }, token: DaffCategoryFacade, providedIn: i2.DaffCategoryModule });
    return DaffCategoryFacade;
}());
export { DaffCategoryFacade };
if (false) {
    /**
     * @type {?}
     * @private
     */
    DaffCategoryFacade.prototype.categorySelectors;
    /**
     * The currently selected category.
     * @type {?}
     */
    DaffCategoryFacade.prototype.category$;
    /**
     * The page configuration state for the selected category.
     * @type {?}
     */
    DaffCategoryFacade.prototype.pageConfigurationState$;
    /**
     * The current page of products for the selected category.
     * @type {?}
     */
    DaffCategoryFacade.prototype.currentPage$;
    /**
     * The number of pages of product for the selected category.
     * @type {?}
     */
    DaffCategoryFacade.prototype.totalPages$;
    /**
     * The total number of products for the filters applied.
     * @type {?}
     */
    DaffCategoryFacade.prototype.totalProducts$;
    /**
     * The number of products per page for the selected category.
     * @type {?}
     */
    DaffCategoryFacade.prototype.pageSize$;
    /**
     * The filters available for the products of the selected category.
     * @type {?}
     */
    DaffCategoryFacade.prototype.filters$;
    /**
     * The sort options available for the products of the selected category.
     * @type {?}
     */
    DaffCategoryFacade.prototype.sortOptions$;
    /**
     * The sort options available for the products of the selected category.
     * @type {?}
     */
    DaffCategoryFacade.prototype.appliedFilters$;
    /**
     * The sort options available for the products of the selected category.
     * @type {?}
     */
    DaffCategoryFacade.prototype.appliedSortOption$;
    /**
     * The sort options available for the products of the selected category.
     * @type {?}
     */
    DaffCategoryFacade.prototype.appliedSortDirection$;
    /**
     * Products of the currently selected category.
     * @type {?}
     */
    DaffCategoryFacade.prototype.products$;
    /**
     * The loading state for retrieving a single category.
     * @type {?}
     */
    DaffCategoryFacade.prototype.categoryLoading$;
    /**
     * The loading state for retrieving only the products of the category.
     * @type {?}
     */
    DaffCategoryFacade.prototype.productsLoading$;
    /**
     * Errors associated with retrieving a single category.
     * @type {?}
     */
    DaffCategoryFacade.prototype.errors$;
    /**
     * Is the category page empty of products.
     * @type {?}
     */
    DaffCategoryFacade.prototype.isCategoryEmpty$;
    /**
     * @type {?}
     * @private
     */
    DaffCategoryFacade.prototype.store;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2F0ZWdvcnkuZmFjYWRlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRhZmZvZGlsL2NhdGVnb3J5LyIsInNvdXJjZXMiOlsiZmFjYWRlcy9jYXRlZ29yeS5mYWNhZGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFM0MsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQVUsTUFBTSxhQUFhLENBQUM7QUFJcEQsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDeEQsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sZ0NBQWdDLENBQUM7Ozs7Ozs7O0FBYzFFO0lBb0dFLDRCQUFvQixLQUFnRDtRQUFoRCxVQUFLLEdBQUwsS0FBSyxDQUEyQztRQTNGN0Qsc0JBQWlCLEdBQUcsd0JBQXdCLEVBQWMsQ0FBQztRQTRGaEUsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLHNCQUFzQixDQUFDLENBQUMsQ0FBQztRQUMxRixJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsMEJBQTBCLENBQUMsQ0FBQyxDQUFDO1FBQzVGLElBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQywrQkFBK0IsQ0FBQyxDQUFDLENBQUM7UUFDcEcsSUFBSSxDQUFDLHVCQUF1QixHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsb0NBQW9DLENBQUMsQ0FBQyxDQUFDO1FBQ3BILElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxD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QUMsNkJBQTZCLEVBQUUsRUFBQyxFQUFFLEVBQUUsVUFBVSxFQUFDLENBQUMsQ0FBQyxDQUFBO0lBQ3ZHLENBQUM7SUFxQkE7OztPQUdHOzs7Ozs7SUFDSCxxQ0FBUTs7Ozs7SUFBUixVQUFTLE1BQWM7UUFDckIsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDOUIsQ0FBQzs7Z0JBN0hGLFVBQVUsU0FBQztvQkFDVixVQUFVLEVBQUUsa0JBQWtCO2lCQUMvQjs7OztnQkFyQlEsS0FBSzs7OzZCQUZkO0NBbUpDLEFBOUhELElBOEhDO1NBM0hZLGtCQUFrQjs7Ozs7O0lBTTlCLCtDQUFtRTs7Ozs7SUFLbEUsdUNBQXlCOzs7OztJQUl6QixxREFBdUM7Ozs7O0lBSXZDLDBDQUFpQzs7Ozs7SUFJbEMseUNBQWdDOzs7OztJQUloQyw0Q0FBbUM7Ozs7O0lBSWxDLHVDQUE4Qjs7Ozs7SUFJOUIsc0NBQTJDOzs7OztJQUkzQywwQ0FBbUQ7Ozs7O0lBSW5ELDZDQUF5RDs7Ozs7SUFJekQsZ0RBQXVDOzs7OztJQUl2QyxtREFBeUQ7Ozs7O0lBSXpELHVDQUEyQjs7Ozs7SUFJM0IsOENBQXNDOzs7OztJQUl0Qyw4Q0FBc0M7Ozs7O0lBSXZDLHFDQUE4Qjs7Ozs7SUFJOUIsOENBQXNDOzs7OztJQTBCekIsbUNBQXdEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgU3RvcmUsIHNlbGVjdCwgQWN0aW9uIH0gZnJvbSAnQG5ncngvc3RvcmUnO1xuXG5pbXBvcnQgeyBEYWZmUHJvZHVjdCB9IGZyb20gJ0BkYWZmb2RpbC9wcm9kdWN0JztcblxuaW1wb3J0IHsgRGFmZkNhdGVnb3J5TW9kdWxlIH0gZnJvbSAnLi4vY2F0ZWdvcnkubW9kdWxlJztcbmltcG9ydCB7IGdldERhZmZDYXRlZ29yeVNlbGVjdG9ycyB9IGZyb20gJy4uL3NlbGVjdG9ycy9jYXRlZ29yeS5zZWxlY3Rvcic7XG5pbXBvcnQgeyBEYWZmQ2F0ZWdvcnlSZWR1Y2Vyc1N0YXRlIH0gZnJvbSAnLi4vcmVkdWNlcnMvY2F0ZWdvcnktcmVkdWNlcnMuaW50ZXJmYWNlJztcbmltcG9ydCB7IERhZmZDYXRlZ29yeVBhZ2VDb25maWd1cmF0aW9uU3RhdGUgfSBmcm9tICcuLi9tb2RlbHMvY2F0ZWdvcnktcGFnZS1jb25maWd1cmF0aW9uLXN0YXRlJztcbmltcG9ydCB7IERhZmZDYXRlZ29yeUZpbHRlciB9IGZyb20gJy4uL21vZGVscy9jYXRlZ29yeS1maWx0ZXInO1xuaW1wb3J0IHsgRGFmZkNhdGVnb3J5U29ydE9wdGlvbiB9IGZyb20gJy4uL21vZGVscy9jYXRlZ29yeS1zb3J0LW9wdGlvbic7XG5pbXBvcnQgeyBEYWZmU29ydERpcmVjdGlvbkVudW0sIERhZmZDYXRlZ29yeVJlcXVlc3QgfSBmcm9tICcuLi9tb2RlbHMvcmVxdWVzdHMvY2F0ZWdvcnktcmVxdWVzdCc7XG5pbXBvcnQgeyBEYWZmQ2F0ZWdvcnlBcHBsaWVkRmlsdGVyIH0gZnJvbSAnLi4vbW9kZWxzL2NhdGVnb3J5LWFwcGxpZWQtZmlsdGVyJztcbmltcG9ydCB7IERhZmZHZW5lcmljQ2F0ZWdvcnkgfSBmcm9tICcuLi9tb2RlbHMvZ2VuZXJpYy1jYXRlZ29yeSc7XG5pbXBvcnQgeyBEYWZmQ2F0ZWdvcnkgfSBmcm9tICcuLi9tb2RlbHMvY2F0ZWdvcnknO1xuaW1wb3J0IHsgRGFmZkNhdGVnb3J5RmFjYWRlSW50ZXJmYWNlIH0gZnJvbSAnLi9jYXRlZ29yeS1mYWNhZGUuaW50ZXJmYWNlJztcblxuLyoqXG4gKiBBIGZhY2FkZSBmb3IgYWNjZXNzaW5nIHN0YXRlIGZvciB0aGUgY3VycmVudGx5IHNlbGVjdGVkIGNhdGVnb3J5LlxuICovXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46IERhZmZDYXRlZ29yeU1vZHVsZVxufSlcbmV4cG9ydCBjbGFzcyBEYWZmQ2F0ZWdvcnlGYWNhZGU8XG5cdFQgZXh0ZW5kcyBEYWZmQ2F0ZWdvcnlSZXF1ZXN0ID0gRGFmZkNhdGVnb3J5UmVxdWVzdCwgXG5cdFYgZXh0ZW5kcyBEYWZmR2VuZXJpY0NhdGVnb3J5PFY+ID0gRGFmZkNhdGVnb3J5LCBcblx0VSBleHRlbmRzIERhZmZDYXRlZ29yeVBhZ2VDb25maWd1cmF0aW9uU3RhdGU8VD4gPSBEYWZmQ2F0ZWdvcnlQYWdlQ29uZmlndXJhdGlvblN0YXRlPFQ+LFxuXHRXIGV4dGVuZHMgRGFmZlByb2R1Y3QgPSBEYWZmUHJvZHVjdFxuPiBpbXBsZW1lbnRzIERhZmZDYXRlZ29yeUZhY2FkZUludGVyZmFjZTxULCBWLCBVLCBXPiB7XG5cdHByaXZhdGUgY2F0ZWdvcnlTZWxlY3RvcnMgPSBnZXREYWZmQ2F0ZWdvcnlTZWxlY3RvcnM8VCwgViwgVSwgVz4oKTtcblx0XG5cdC8qKlxuICAgKiBUaGUgY3VycmVudGx5IHNlbGVjdGVkIGNhdGVnb3J5LlxuICAgKi9cbiAgY2F0ZWdvcnkkOiBPYnNlcnZhYmxlPFY+O1xuICAvKipcbiAgICogVGhlIHBhZ2UgY29uZmlndXJhdGlvbiBzdGF0ZSBmb3IgdGhlIHNlbGVjdGVkIGNhdGVnb3J5LlxuICAgKi9cbiAgcGFnZUNvbmZpZ3VyYXRpb25TdGF0ZSQ6IE9ic2VydmFibGU8VT47XG4gIC8qKlxuICAgKiBUaGUgY3VycmVudCBwYWdlIG9mIHByb2R1Y3RzIGZvciB0aGUgc2VsZWN0ZWQgY2F0ZWdvcnkuXG4gICAqL1xuICBjdXJyZW50UGFnZSQ6IE9ic2VydmFibGU8bnVtYmVyPjtcbiAgLyoqXG4gICAqIFRoZSBudW1iZXIgb2YgcGFnZXMgb2YgcHJvZHVjdCBmb3IgdGhlIHNlbGVjdGVkIGNhdGVnb3J5LlxuICAgKi9cblx0dG90YWxQYWdlcyQ6IE9ic2VydmFibGU8bnVtYmVyPjtcblx0LyoqXG5cdCAqIFRoZSB0b3RhbCBudW1iZXIgb2YgcHJvZHVjdHMgZm9yIHRoZSBmaWx0ZXJzIGFwcGxpZWQuXG5cdCAqL1xuXHR0b3RhbFByb2R1Y3RzJDogT2JzZXJ2YWJsZTxudW1iZXI+O1xuICAvKipcbiAgICogVGhlIG51bWJlciBvZiBwcm9kdWN0cyBwZXIgcGFnZSBmb3IgdGhlIHNlbGVjdGVkIGNhdGVnb3J5LlxuICAgKi9cbiAgcGFnZVNpemUkOiBPYnNlcnZhYmxlPG51bWJlcj47XG4gIC8qKlxuICAgKiBUaGUgZmlsdGVycyBhdmFpbGFibGUgZm9yIHRoZSBwcm9kdWN0cyBvZiB0aGUgc2VsZWN0ZWQgY2F0ZWdvcnkuXG4gICAqL1xuICBmaWx0ZXJzJDogT2JzZXJ2YWJsZTxEYWZmQ2F0ZWdvcnlGaWx0ZXJbXT47XG4gIC8qKlxuICAgKiBUaGUgc29ydCBvcHRpb25zIGF2YWlsYWJsZSBmb3IgdGhlIHByb2R1Y3RzIG9mIHRoZSBzZWxlY3RlZCBjYXRlZ29yeS5cbiAgICovXG4gIHNvcnRPcHRpb25zJDogT2JzZXJ2YWJsZTxEYWZmQ2F0ZWdvcnlTb3J0T3B0aW9uW10+O1xuICAvKipcbiAgICogVGhlIHNvcnQgb3B0aW9ucyBhdmFpbGFibGUgZm9yIHRoZSBwcm9kdWN0cyBvZiB0aGUgc2VsZWN0ZWQgY2F0ZWdvcnkuXG4gICAqL1xuICBhcHBsaWVkRmlsdGVycyQ6IE9ic2VydmFibGU8RGFmZkNhdGVnb3J5QXBwbGllZEZpbHRlcltdPjtcbiAgLyoqXG4gICAqIFRoZSBzb3J0IG9wdGlvbnMgYXZhaWxhYmxlIGZvciB0aGUgcHJvZHVjdHMgb2YgdGhlIHNlbGVjdGVkIGNhdGVnb3J5LlxuICAgKi9cbiAgYXBwbGllZFNvcnRPcHRpb24kOiBPYnNlcnZhYmxlPHN0cmluZz47XG4gIC8qKlxuICAgKiBUaGUgc29ydCBvcHRpb25zIGF2YWlsYWJsZSBmb3IgdGhlIHByb2R1Y3RzIG9mIHRoZSBzZWxlY3RlZCBjYXRlZ29yeS5cbiAgICovXG4gIGFwcGxpZWRTb3J0RGlyZWN0aW9uJDogT2JzZXJ2YWJsZTxEYWZmU29ydERpcmVjdGlvbkVudW0+O1xuICAvKipcbiAgICogUHJvZHVjdHMgb2YgdGhlIGN1cnJlbnRseSBzZWxlY3RlZCBjYXRlZ29yeS5cbiAgICovXG4gIHByb2R1Y3RzJDogT2JzZXJ2YWJsZTxXW10+O1xuICAvKipcbiAgICogVGhlIGxvYWRpbmcgc3RhdGUgZm9yIHJldHJpZXZpbmcgYSBzaW5nbGUgY2F0ZWdvcnkuXG4gICAqL1xuICBjYXRlZ29yeUxvYWRpbmckOiBPYnNlcnZhYmxlPGJvb2xlYW4+O1xuICAvKipcbiAgICogVGhlIGxvYWRpbmcgc3RhdGUgZm9yIHJldHJpZXZpbmcgb25seSB0aGUgcHJvZHVjdHMgb2YgdGhlIGNhdGVnb3J5LlxuICAgKi9cbiAgcHJvZHVjdHNMb2FkaW5nJDogT2JzZXJ2YWJsZTxib29sZWFuPjtcbiAgLyoqXG4gICAqIEVycm9ycyBhc3NvY2lhdGVkIHdpdGggcmV0cmlldmluZyBhIHNpbmdsZSBjYXRlZ29yeS5cbiAgICovXG5cdGVycm9ycyQ6IE9ic2VydmFibGU8c3RyaW5nW10+O1xuXHQvKipcblx0ICogSXMgdGhlIGNhdGVnb3J5IHBhZ2UgZW1wdHkgb2YgcHJvZHVjdHMuXG5cdCAqL1xuXHRpc0NhdGVnb3J5RW1wdHkkOiBPYnNlcnZhYmxlPGJvb2xlYW4+O1xuXHRcblx0LyoqXG5cdCAqIEdldCBhIGNhdGVnb3J5IGJ5IHRoZSBwcm92aWRlZCBJZC5cblx0ICogQHBhcmFtIGlkIFxuXHQgKi9cblx0Z2V0Q2F0ZWdvcnlCeUlkKGlkOiBzdHJpbmcpOiBPYnNlcnZhYmxlPFY+IHtcblx0XHRyZXR1cm4gdGhpcy5zdG9yZS5waXBlKHNlbGVjdCh0aGlzLmNhdGVnb3J5U2VsZWN0b3JzLnNlbGVjdENhdGVnb3J5LCB7aWQ6IGlkfSkpO1xuXHR9XG5cblx0LyoqXG5cdCAqIEdldCBwcm9kdWN0cyBieSBhIGNhdGVnb3J5IElkLlxuXHQgKiBAcGFyYW0gY2F0ZWdvcnlJZCBcblx0ICovXG5cdGdldFByb2R1Y3RzQnlDYXRlZ29yeShjYXRlZ29yeUlkOiBzdHJpbmcpOiBPYnNlcnZhYmxlPFdbXT4ge1xuXHRcdHJldHVybiB0aGlzLnN0b3JlLnBpcGUoc2VsZWN0KHRoaXMuY2F0ZWdvcnlTZWxlY3RvcnMuc2VsZWN0UHJvZHVjdHNCeUNhdGVnb3J5LCB7aWQ6IGNhdGVnb3J5SWR9KSlcblx0fVxuXG5cdC8qKlxuXHQgKiBHZXQgcHJvZHVjdHMgYnkgYSBjYXRlZ29yeSBJZC5cblx0ICogQHBhcmFtIGNhdGVnb3J5SWQgXG5cdCAqL1xuXHRnZXRUb3RhbFByb2R1Y3RzQnlDYXRlZ29yeShjYXRlZ29yeUlkOiBzdHJpbmcpOiBPYnNlcnZhYmxlPG51bWJlcj4ge1xuXHRcdHJldHVybiB0aGlzLnN0b3JlLnBpcGUoc2VsZWN0KHRoaXMuY2F0ZWdvcnlTZWxlY3RvcnMuc2VsZWN0VG90YWxQcm9kdWN0c0J5Q2F0ZWdvcnksIHtpZDogY2F0ZWdvcnlJZH0pKVxuXHR9XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBzdG9yZTogU3RvcmU8RGFmZkNhdGVnb3J5UmVkdWNlcnNTdGF0ZTxULCBWLCBVPj4pIHtcbiAgICB0aGlzLmNhdGVnb3J5JCA9IHRoaXMuc3RvcmUucGlwZShzZWxlY3QodGhpcy5jYXRlZ29yeVNlbGVjdG9ycy5zZWxlY3RTZWxlY3RlZENhdGVnb3J5KSk7XG5cdFx0dGhpcy5wcm9kdWN0cyQgPSB0aGlzLnN0b3JlLnBpcGUoc2VsZWN0KHRoaXMuY2F0ZWdvcnlTZWxlY3RvcnMuc2VsZWN0Q2F0ZWdvcnlQYWdlUHJvZHVjdHMpKTtcblx0XHR0aGlzLnRvdGFsUHJvZHVjdHMkID0gdGhpcy5zdG9yZS5waXBlKHNlbGVjdCh0aGlzLmNhdGVnb3J5U2VsZWN0b3JzLnNlbGVjdENhdGVnb3J5UGFnZVRvdGFsUHJvZHVjdHMpKTtcbiAgICB0aGlzLnBhZ2VDb25maWd1cmF0aW9uU3RhdGUkID0gdGhpcy5zdG9yZS5waXBlKHNlbGVjdCh0aGlzLmNhdGVnb3J5U2VsZWN0b3JzLnNlbGVjdENhdGVnb3J5UGFnZUNvbmZpZ3VyYXRpb25TdGF0ZSkpO1xuICAgIHRoaXMuY3VycmVudFBhZ2UkID0gdGhpcy5zdG9yZS5waXBlKHNlbGVjdCh0aGlzLmNhdGVnb3J5U2VsZWN0b3JzLnNlbGVjdENhdGVnb3J5Q3VycmVudFBhZ2UpKTtcbiAgICB0aGlzLnRvdGFsUGFnZXMkID0gdGhpcy5zdG9yZS5waXBlKHNlbGVjdCh0aGlzLmNhdGVnb3J5U2VsZWN0b3JzLnNlbGVjdENhdGVnb3J5VG90YWxQYWdlcykpO1xuICAgIHRoaXMucGFnZVNpemUkID0gdGhpcy5zdG9yZS5waXBlKHNlbGVjdCh0aGlzLmNhdGVnb3J5U2VsZWN0b3JzLnNlbGVjdENhdGVnb3J5UGFnZVNpemUpKTtcbiAgICB0aGlzLmZpbHRlcnMkID0gdGhpcy5zdG9yZS5waXBlKHNlbGVjdCh0aGlzLmNhdGVnb3J5U2VsZWN0b3JzLnNlbGVjdENhdGVnb3J5RmlsdGVycykpO1xuICAgIHRoaXMuc29ydE9wdGlvbnMkID0gdGhpcy5zdG9yZS5waXBlKHNlbGVjdCh0aGlzLmNhdGVnb3J5U2VsZWN0b3JzLnNlbGVjdENhdGVnb3J5U29ydE9wdGlvbnMpKTtcbiAgICB0aGlzLmFwcGxpZWRGaWx0ZXJzJCA9IHRoaXMuc3RvcmUucGlwZShzZWxlY3QodGhpcy5jYXRlZ29yeVNlbGVjdG9ycy5zZWxlY3RDYXRlZ29yeVBhZ2VBcHBsaWVkRmlsdGVycykpO1xuICAgIHRoaXMuYXBwbGllZFNvcnRPcHRpb24kID0gdGhpcy5zdG9yZS5waXBlKHNlbGVjdCh0aGlzLmNhdGVnb3J5U2VsZWN0b3JzLnNlbGVjdENhdGVnb3J5UGFnZUFwcGxpZWRTb3J0T3B0aW9uKSk7XG4gICAgdGhpcy5hcHBsaWVkU29ydERpcmVjdGlvbiQgPSB0aGlzLnN0b3JlLnBpcGUoc2VsZWN0KHRoaXMuY2F0ZWdvcnlTZWxlY3RvcnMuc2VsZWN0Q2F0ZWdvcnlQYWdlQXBwbGllZFNvcnREaXJlY3Rpb24pKTtcbiAgICB0aGlzLmNhdGVnb3J5TG9hZGluZyQgPSB0aGlzLnN0b3JlLnBpcGUoc2VsZWN0KHRoaXMuY2F0ZWdvcnlTZWxlY3RvcnMuc2VsZWN0Q2F0ZWdvcnlMb2FkaW5nKSk7XG4gICAgdGhpcy5wcm9kdWN0c0xvYWRpbmckID0gdGhpcy5zdG9yZS5waXBlKHNlbGVjdCh0aGlzLmNhdGVnb3J5U2VsZWN0b3JzLnNlbGVjdENhdGVnb3J5UHJvZHVjdHNMb2FkaW5nKSk7XG5cdFx0dGhpcy5lcnJvcnMkID0gdGhpcy5zdG9yZS5waXBlKHNlbGVjdCh0aGlzLmNhdGVnb3J5U2VsZWN0b3JzLnNlbGVjdENhdGVnb3J5RXJyb3JzKSk7XG5cdFx0dGhpcy5pc0NhdGVnb3J5RW1wdHkkID0gdGhpcy5zdG9yZS5waXBlKHNlbGVjdCh0aGlzLmNhdGVnb3J5U2VsZWN0b3JzLnNlbGVjdElzQ2F0ZWdvcnlQYWdlRW1wdHkpKTtcblx0fVxuXG4gIC8qKlxuICAgKiBEaXNwYXRjaGVzIHRoZSBnaXZlbiBhY3Rpb24uXG4gICAqIEBwYXJhbSBhY3Rpb24gYWN0aW9uIHRvIGRpc3BhdGNoLlxuICAgKi9cbiAgZGlzcGF0Y2goYWN0aW9uOiBBY3Rpb24pIHtcbiAgICB0aGlzLnN0b3JlLmRpc3BhdGNoKGFjdGlvbik7XG4gIH1cbn1cbiJdfQ==