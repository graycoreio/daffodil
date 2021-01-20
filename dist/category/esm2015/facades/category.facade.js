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
export class DaffCategoryFacade {
    /**
     * @param {?} store
     */
    constructor(store) {
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
     * @param {?} id
     * @return {?}
     */
    getCategoryById(id) {
        return this.store.pipe(select(this.categorySelectors.selectCategory, { id: id }));
    }
    /**
     * Get products by a category Id.
     * @param {?} categoryId
     * @return {?}
     */
    getProductsByCategory(categoryId) {
        return this.store.pipe(select(this.categorySelectors.selectProductsByCategory, { id: categoryId }));
    }
    /**
     * Get products by a category Id.
     * @param {?} categoryId
     * @return {?}
     */
    getTotalProductsByCategory(categoryId) {
        return this.store.pipe(select(this.categorySelectors.selectTotalProductsByCategory, { id: categoryId }));
    }
    /**
     * Dispatches the given action.
     * @param {?} action action to dispatch.
     * @return {?}
     */
    dispatch(action) {
        this.store.dispatch(action);
    }
}
DaffCategoryFacade.decorators = [
    { type: Injectable, args: [{
                providedIn: DaffCategoryModule
            },] }
];
/** @nocollapse */
DaffCategoryFacade.ctorParameters = () => [
    { type: Store }
];
/** @nocollapse */ DaffCategoryFacade.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function DaffCategoryFacade_Factory() { return new DaffCategoryFacade(i0.ɵɵinject(i1.Store)); }, token: DaffCategoryFacade, providedIn: i2.DaffCategoryModule });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2F0ZWdvcnkuZmFjYWRlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRhZmZvZGlsL2NhdGVnb3J5LyIsInNvdXJjZXMiOlsiZmFjYWRlcy9jYXRlZ29yeS5mYWNhZGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFM0MsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQVUsTUFBTSxhQUFhLENBQUM7QUFJcEQsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDeEQsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sZ0NBQWdDLENBQUM7Ozs7Ozs7O0FBaUIxRSxNQUFNLE9BQU8sa0JBQWtCOzs7O0lBaUc3QixZQUFvQixLQUFnRDtRQUFoRCxVQUFLLEdBQUwsS0FBSyxDQUEyQztRQTNGN0Qsc0JBQWlCLEdBQUcsd0JBQXdCLEVBQWMsQ0FBQztRQTRGaEUsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLHNCQUFzQixDQUFDLENBQUMsQ0FBQztRQUMxRixJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsMEJBQTBCLENBQUMsQ0FBQyxDQUFDO1FBQzVGLElBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQywrQkFBK0IsQ0FBQyxDQUFDLENBQUM7UUFDcEcsSUFBSSxDQUFDLHVCQUF1QixHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsb0NBQW9DLENBQUMsQ0FBQyxDQUFDO1FBQ3BILElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyx5QkFBeUIsQ0FBQyxDQUFDLENBQUM7UUFDOUYsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLHdCQUF3QixDQUFDLENBQUMsQ0FBQztRQUM1RixJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsc0JBQXNCLENBQUMsQ0FBQyxDQUFDO1FBQ3hGLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDLENBQUM7UUFDdEYsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLHlCQUF5QixDQUFDLENBQUMsQ0FBQztRQUM5RixJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsZ0NBQWdDLENBQUMsQ0FBQyxDQUFDO1FBQ3hHLElBQUksQ0FBQyxrQkFBa0IsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLG1DQUFtQyxDQUFDLENBQUMsQ0FBQztRQUM5RyxJQUFJLENBQUMscUJBQXFCLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxzQ0FBc0MsQ0FBQyxDQUFDLENBQUM7UUFDcEgsSUFBSSxDQUFDLGdCQUFnQixHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUMscUJBQXFCLENBQUMsQ0FBQyxDQUFDO1FBQzlGLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLDZCQUE2QixDQUFDLENBQUMsQ0FBQztRQUN4RyxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsb0JBQW9CLENBQUMsQ0FBQyxDQUFDO1FBQ3BGLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLHlCQUF5QixDQUFDLENBQUMsQ0FBQztJQUNuRyxDQUFDOzs7Ozs7SUFyQ0QsZUFBZSxDQUFDLEVBQVU7UUFDekIsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLGNBQWMsRUFBRSxFQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUMsQ0FBQyxDQUFDLENBQUM7SUFDakYsQ0FBQzs7Ozs7O0lBTUQscUJBQXFCLENBQUMsVUFBa0I7UUFDdkMsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLHdCQUF3QixFQUFFLEVBQUMsRUFBRSxFQUFFLFVBQVUsRUFBQyxDQUFDLENBQUMsQ0FBQTtJQUNsRyxDQUFDOzs7Ozs7SUFNRCwwQkFBMEIsQ0FBQyxVQUFrQjtRQUM1QyxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsNkJBQTZCLEVBQUUsRUFBQyxFQUFFLEVBQUUsVUFBVSxFQUFDLENBQUMsQ0FBQyxDQUFBO0lBQ3ZHLENBQUM7Ozs7OztJQXlCQSxRQUFRLENBQUMsTUFBYztRQUNyQixJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUM5QixDQUFDOzs7WUE3SEYsVUFBVSxTQUFDO2dCQUNWLFVBQVUsRUFBRSxrQkFBa0I7YUFDL0I7Ozs7WUFyQlEsS0FBSzs7Ozs7Ozs7SUE0QmIsK0NBQW1FOzs7OztJQUtsRSx1Q0FBeUI7Ozs7O0lBSXpCLHFEQUF1Qzs7Ozs7SUFJdkMsMENBQWlDOzs7OztJQUlsQyx5Q0FBZ0M7Ozs7O0lBSWhDLDRDQUFtQzs7Ozs7SUFJbEMsdUNBQThCOzs7OztJQUk5QixzQ0FBMkM7Ozs7O0lBSTNDLDBDQUFtRDs7Ozs7SUFJbkQsNkNBQXlEOzs7OztJQUl6RCxnREFBdUM7Ozs7O0lBSXZDLG1EQUF5RDs7Ozs7SUFJekQsdUNBQTJCOzs7OztJQUkzQiw4Q0FBc0M7Ozs7O0lBSXRDLDhDQUFzQzs7Ozs7SUFJdkMscUNBQThCOzs7OztJQUk5Qiw4Q0FBc0M7Ozs7O0lBMEJ6QixtQ0FBd0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBTdG9yZSwgc2VsZWN0LCBBY3Rpb24gfSBmcm9tICdAbmdyeC9zdG9yZSc7XG5cbmltcG9ydCB7IERhZmZQcm9kdWN0IH0gZnJvbSAnQGRhZmZvZGlsL3Byb2R1Y3QnO1xuXG5pbXBvcnQgeyBEYWZmQ2F0ZWdvcnlNb2R1bGUgfSBmcm9tICcuLi9jYXRlZ29yeS5tb2R1bGUnO1xuaW1wb3J0IHsgZ2V0RGFmZkNhdGVnb3J5U2VsZWN0b3JzIH0gZnJvbSAnLi4vc2VsZWN0b3JzL2NhdGVnb3J5LnNlbGVjdG9yJztcbmltcG9ydCB7IERhZmZDYXRlZ29yeVJlZHVjZXJzU3RhdGUgfSBmcm9tICcuLi9yZWR1Y2Vycy9jYXRlZ29yeS1yZWR1Y2Vycy5pbnRlcmZhY2UnO1xuaW1wb3J0IHsgRGFmZkNhdGVnb3J5UGFnZUNvbmZpZ3VyYXRpb25TdGF0ZSB9IGZyb20gJy4uL21vZGVscy9jYXRlZ29yeS1wYWdlLWNvbmZpZ3VyYXRpb24tc3RhdGUnO1xuaW1wb3J0IHsgRGFmZkNhdGVnb3J5RmlsdGVyIH0gZnJvbSAnLi4vbW9kZWxzL2NhdGVnb3J5LWZpbHRlcic7XG5pbXBvcnQgeyBEYWZmQ2F0ZWdvcnlTb3J0T3B0aW9uIH0gZnJvbSAnLi4vbW9kZWxzL2NhdGVnb3J5LXNvcnQtb3B0aW9uJztcbmltcG9ydCB7IERhZmZTb3J0RGlyZWN0aW9uRW51bSwgRGFmZkNhdGVnb3J5UmVxdWVzdCB9IGZyb20gJy4uL21vZGVscy9yZXF1ZXN0cy9jYXRlZ29yeS1yZXF1ZXN0JztcbmltcG9ydCB7IERhZmZDYXRlZ29yeUFwcGxpZWRGaWx0ZXIgfSBmcm9tICcuLi9tb2RlbHMvY2F0ZWdvcnktYXBwbGllZC1maWx0ZXInO1xuaW1wb3J0IHsgRGFmZkdlbmVyaWNDYXRlZ29yeSB9IGZyb20gJy4uL21vZGVscy9nZW5lcmljLWNhdGVnb3J5JztcbmltcG9ydCB7IERhZmZDYXRlZ29yeSB9IGZyb20gJy4uL21vZGVscy9jYXRlZ29yeSc7XG5pbXBvcnQgeyBEYWZmQ2F0ZWdvcnlGYWNhZGVJbnRlcmZhY2UgfSBmcm9tICcuL2NhdGVnb3J5LWZhY2FkZS5pbnRlcmZhY2UnO1xuXG4vKipcbiAqIEEgZmFjYWRlIGZvciBhY2Nlc3Npbmcgc3RhdGUgZm9yIHRoZSBjdXJyZW50bHkgc2VsZWN0ZWQgY2F0ZWdvcnkuXG4gKi9cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogRGFmZkNhdGVnb3J5TW9kdWxlXG59KVxuZXhwb3J0IGNsYXNzIERhZmZDYXRlZ29yeUZhY2FkZTxcblx0VCBleHRlbmRzIERhZmZDYXRlZ29yeVJlcXVlc3QgPSBEYWZmQ2F0ZWdvcnlSZXF1ZXN0LCBcblx0ViBleHRlbmRzIERhZmZHZW5lcmljQ2F0ZWdvcnk8Vj4gPSBEYWZmQ2F0ZWdvcnksIFxuXHRVIGV4dGVuZHMgRGFmZkNhdGVnb3J5UGFnZUNvbmZpZ3VyYXRpb25TdGF0ZTxUPiA9IERhZmZDYXRlZ29yeVBhZ2VDb25maWd1cmF0aW9uU3RhdGU8VD4sXG5cdFcgZXh0ZW5kcyBEYWZmUHJvZHVjdCA9IERhZmZQcm9kdWN0XG4+IGltcGxlbWVudHMgRGFmZkNhdGVnb3J5RmFjYWRlSW50ZXJmYWNlPFQsIFYsIFUsIFc+IHtcblx0cHJpdmF0ZSBjYXRlZ29yeVNlbGVjdG9ycyA9IGdldERhZmZDYXRlZ29yeVNlbGVjdG9yczxULCBWLCBVLCBXPigpO1xuXHRcblx0LyoqXG4gICAqIFRoZSBjdXJyZW50bHkgc2VsZWN0ZWQgY2F0ZWdvcnkuXG4gICAqL1xuICBjYXRlZ29yeSQ6IE9ic2VydmFibGU8Vj47XG4gIC8qKlxuICAgKiBUaGUgcGFnZSBjb25maWd1cmF0aW9uIHN0YXRlIGZvciB0aGUgc2VsZWN0ZWQgY2F0ZWdvcnkuXG4gICAqL1xuICBwYWdlQ29uZmlndXJhdGlvblN0YXRlJDogT2JzZXJ2YWJsZTxVPjtcbiAgLyoqXG4gICAqIFRoZSBjdXJyZW50IHBhZ2Ugb2YgcHJvZHVjdHMgZm9yIHRoZSBzZWxlY3RlZCBjYXRlZ29yeS5cbiAgICovXG4gIGN1cnJlbnRQYWdlJDogT2JzZXJ2YWJsZTxudW1iZXI+O1xuICAvKipcbiAgICogVGhlIG51bWJlciBvZiBwYWdlcyBvZiBwcm9kdWN0IGZvciB0aGUgc2VsZWN0ZWQgY2F0ZWdvcnkuXG4gICAqL1xuXHR0b3RhbFBhZ2VzJDogT2JzZXJ2YWJsZTxudW1iZXI+O1xuXHQvKipcblx0ICogVGhlIHRvdGFsIG51bWJlciBvZiBwcm9kdWN0cyBmb3IgdGhlIGZpbHRlcnMgYXBwbGllZC5cblx0ICovXG5cdHRvdGFsUHJvZHVjdHMkOiBPYnNlcnZhYmxlPG51bWJlcj47XG4gIC8qKlxuICAgKiBUaGUgbnVtYmVyIG9mIHByb2R1Y3RzIHBlciBwYWdlIGZvciB0aGUgc2VsZWN0ZWQgY2F0ZWdvcnkuXG4gICAqL1xuICBwYWdlU2l6ZSQ6IE9ic2VydmFibGU8bnVtYmVyPjtcbiAgLyoqXG4gICAqIFRoZSBmaWx0ZXJzIGF2YWlsYWJsZSBmb3IgdGhlIHByb2R1Y3RzIG9mIHRoZSBzZWxlY3RlZCBjYXRlZ29yeS5cbiAgICovXG4gIGZpbHRlcnMkOiBPYnNlcnZhYmxlPERhZmZDYXRlZ29yeUZpbHRlcltdPjtcbiAgLyoqXG4gICAqIFRoZSBzb3J0IG9wdGlvbnMgYXZhaWxhYmxlIGZvciB0aGUgcHJvZHVjdHMgb2YgdGhlIHNlbGVjdGVkIGNhdGVnb3J5LlxuICAgKi9cbiAgc29ydE9wdGlvbnMkOiBPYnNlcnZhYmxlPERhZmZDYXRlZ29yeVNvcnRPcHRpb25bXT47XG4gIC8qKlxuICAgKiBUaGUgc29ydCBvcHRpb25zIGF2YWlsYWJsZSBmb3IgdGhlIHByb2R1Y3RzIG9mIHRoZSBzZWxlY3RlZCBjYXRlZ29yeS5cbiAgICovXG4gIGFwcGxpZWRGaWx0ZXJzJDogT2JzZXJ2YWJsZTxEYWZmQ2F0ZWdvcnlBcHBsaWVkRmlsdGVyW10+O1xuICAvKipcbiAgICogVGhlIHNvcnQgb3B0aW9ucyBhdmFpbGFibGUgZm9yIHRoZSBwcm9kdWN0cyBvZiB0aGUgc2VsZWN0ZWQgY2F0ZWdvcnkuXG4gICAqL1xuICBhcHBsaWVkU29ydE9wdGlvbiQ6IE9ic2VydmFibGU8c3RyaW5nPjtcbiAgLyoqXG4gICAqIFRoZSBzb3J0IG9wdGlvbnMgYXZhaWxhYmxlIGZvciB0aGUgcHJvZHVjdHMgb2YgdGhlIHNlbGVjdGVkIGNhdGVnb3J5LlxuICAgKi9cbiAgYXBwbGllZFNvcnREaXJlY3Rpb24kOiBPYnNlcnZhYmxlPERhZmZTb3J0RGlyZWN0aW9uRW51bT47XG4gIC8qKlxuICAgKiBQcm9kdWN0cyBvZiB0aGUgY3VycmVudGx5IHNlbGVjdGVkIGNhdGVnb3J5LlxuICAgKi9cbiAgcHJvZHVjdHMkOiBPYnNlcnZhYmxlPFdbXT47XG4gIC8qKlxuICAgKiBUaGUgbG9hZGluZyBzdGF0ZSBmb3IgcmV0cmlldmluZyBhIHNpbmdsZSBjYXRlZ29yeS5cbiAgICovXG4gIGNhdGVnb3J5TG9hZGluZyQ6IE9ic2VydmFibGU8Ym9vbGVhbj47XG4gIC8qKlxuICAgKiBUaGUgbG9hZGluZyBzdGF0ZSBmb3IgcmV0cmlldmluZyBvbmx5IHRoZSBwcm9kdWN0cyBvZiB0aGUgY2F0ZWdvcnkuXG4gICAqL1xuICBwcm9kdWN0c0xvYWRpbmckOiBPYnNlcnZhYmxlPGJvb2xlYW4+O1xuICAvKipcbiAgICogRXJyb3JzIGFzc29jaWF0ZWQgd2l0aCByZXRyaWV2aW5nIGEgc2luZ2xlIGNhdGVnb3J5LlxuICAgKi9cblx0ZXJyb3JzJDogT2JzZXJ2YWJsZTxzdHJpbmdbXT47XG5cdC8qKlxuXHQgKiBJcyB0aGUgY2F0ZWdvcnkgcGFnZSBlbXB0eSBvZiBwcm9kdWN0cy5cblx0ICovXG5cdGlzQ2F0ZWdvcnlFbXB0eSQ6IE9ic2VydmFibGU8Ym9vbGVhbj47XG5cdFxuXHQvKipcblx0ICogR2V0IGEgY2F0ZWdvcnkgYnkgdGhlIHByb3ZpZGVkIElkLlxuXHQgKiBAcGFyYW0gaWQgXG5cdCAqL1xuXHRnZXRDYXRlZ29yeUJ5SWQoaWQ6IHN0cmluZyk6IE9ic2VydmFibGU8Vj4ge1xuXHRcdHJldHVybiB0aGlzLnN0b3JlLnBpcGUoc2VsZWN0KHRoaXMuY2F0ZWdvcnlTZWxlY3RvcnMuc2VsZWN0Q2F0ZWdvcnksIHtpZDogaWR9KSk7XG5cdH1cblxuXHQvKipcblx0ICogR2V0IHByb2R1Y3RzIGJ5IGEgY2F0ZWdvcnkgSWQuXG5cdCAqIEBwYXJhbSBjYXRlZ29yeUlkIFxuXHQgKi9cblx0Z2V0UHJvZHVjdHNCeUNhdGVnb3J5KGNhdGVnb3J5SWQ6IHN0cmluZyk6IE9ic2VydmFibGU8V1tdPiB7XG5cdFx0cmV0dXJuIHRoaXMuc3RvcmUucGlwZShzZWxlY3QodGhpcy5jYXRlZ29yeVNlbGVjdG9ycy5zZWxlY3RQcm9kdWN0c0J5Q2F0ZWdvcnksIHtpZDogY2F0ZWdvcnlJZH0pKVxuXHR9XG5cblx0LyoqXG5cdCAqIEdldCBwcm9kdWN0cyBieSBhIGNhdGVnb3J5IElkLlxuXHQgKiBAcGFyYW0gY2F0ZWdvcnlJZCBcblx0ICovXG5cdGdldFRvdGFsUHJvZHVjdHNCeUNhdGVnb3J5KGNhdGVnb3J5SWQ6IHN0cmluZyk6IE9ic2VydmFibGU8bnVtYmVyPiB7XG5cdFx0cmV0dXJuIHRoaXMuc3RvcmUucGlwZShzZWxlY3QodGhpcy5jYXRlZ29yeVNlbGVjdG9ycy5zZWxlY3RUb3RhbFByb2R1Y3RzQnlDYXRlZ29yeSwge2lkOiBjYXRlZ29yeUlkfSkpXG5cdH1cblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHN0b3JlOiBTdG9yZTxEYWZmQ2F0ZWdvcnlSZWR1Y2Vyc1N0YXRlPFQsIFYsIFU+Pikge1xuICAgIHRoaXMuY2F0ZWdvcnkkID0gdGhpcy5zdG9yZS5waXBlKHNlbGVjdCh0aGlzLmNhdGVnb3J5U2VsZWN0b3JzLnNlbGVjdFNlbGVjdGVkQ2F0ZWdvcnkpKTtcblx0XHR0aGlzLnByb2R1Y3RzJCA9IHRoaXMuc3RvcmUucGlwZShzZWxlY3QodGhpcy5jYXRlZ29yeVNlbGVjdG9ycy5zZWxlY3RDYXRlZ29yeVBhZ2VQcm9kdWN0cykpO1xuXHRcdHRoaXMudG90YWxQcm9kdWN0cyQgPSB0aGlzLnN0b3JlLnBpcGUoc2VsZWN0KHRoaXMuY2F0ZWdvcnlTZWxlY3RvcnMuc2VsZWN0Q2F0ZWdvcnlQYWdlVG90YWxQcm9kdWN0cykpO1xuICAgIHRoaXMucGFnZUNvbmZpZ3VyYXRpb25TdGF0ZSQgPSB0aGlzLnN0b3JlLnBpcGUoc2VsZWN0KHRoaXMuY2F0ZWdvcnlTZWxlY3RvcnMuc2VsZWN0Q2F0ZWdvcnlQYWdlQ29uZmlndXJhdGlvblN0YXRlKSk7XG4gICAgdGhpcy5jdXJyZW50UGFnZSQgPSB0aGlzLnN0b3JlLnBpcGUoc2VsZWN0KHRoaXMuY2F0ZWdvcnlTZWxlY3RvcnMuc2VsZWN0Q2F0ZWdvcnlDdXJyZW50UGFnZSkpO1xuICAgIHRoaXMudG90YWxQYWdlcyQgPSB0aGlzLnN0b3JlLnBpcGUoc2VsZWN0KHRoaXMuY2F0ZWdvcnlTZWxlY3RvcnMuc2VsZWN0Q2F0ZWdvcnlUb3RhbFBhZ2VzKSk7XG4gICAgdGhpcy5wYWdlU2l6ZSQgPSB0aGlzLnN0b3JlLnBpcGUoc2VsZWN0KHRoaXMuY2F0ZWdvcnlTZWxlY3RvcnMuc2VsZWN0Q2F0ZWdvcnlQYWdlU2l6ZSkpO1xuICAgIHRoaXMuZmlsdGVycyQgPSB0aGlzLnN0b3JlLnBpcGUoc2VsZWN0KHRoaXMuY2F0ZWdvcnlTZWxlY3RvcnMuc2VsZWN0Q2F0ZWdvcnlGaWx0ZXJzKSk7XG4gICAgdGhpcy5zb3J0T3B0aW9ucyQgPSB0aGlzLnN0b3JlLnBpcGUoc2VsZWN0KHRoaXMuY2F0ZWdvcnlTZWxlY3RvcnMuc2VsZWN0Q2F0ZWdvcnlTb3J0T3B0aW9ucykpO1xuICAgIHRoaXMuYXBwbGllZEZpbHRlcnMkID0gdGhpcy5zdG9yZS5waXBlKHNlbGVjdCh0aGlzLmNhdGVnb3J5U2VsZWN0b3JzLnNlbGVjdENhdGVnb3J5UGFnZUFwcGxpZWRGaWx0ZXJzKSk7XG4gICAgdGhpcy5hcHBsaWVkU29ydE9wdGlvbiQgPSB0aGlzLnN0b3JlLnBpcGUoc2VsZWN0KHRoaXMuY2F0ZWdvcnlTZWxlY3RvcnMuc2VsZWN0Q2F0ZWdvcnlQYWdlQXBwbGllZFNvcnRPcHRpb24pKTtcbiAgICB0aGlzLmFwcGxpZWRTb3J0RGlyZWN0aW9uJCA9IHRoaXMuc3RvcmUucGlwZShzZWxlY3QodGhpcy5jYXRlZ29yeVNlbGVjdG9ycy5zZWxlY3RDYXRlZ29yeVBhZ2VBcHBsaWVkU29ydERpcmVjdGlvbikpO1xuICAgIHRoaXMuY2F0ZWdvcnlMb2FkaW5nJCA9IHRoaXMuc3RvcmUucGlwZShzZWxlY3QodGhpcy5jYXRlZ29yeVNlbGVjdG9ycy5zZWxlY3RDYXRlZ29yeUxvYWRpbmcpKTtcbiAgICB0aGlzLnByb2R1Y3RzTG9hZGluZyQgPSB0aGlzLnN0b3JlLnBpcGUoc2VsZWN0KHRoaXMuY2F0ZWdvcnlTZWxlY3RvcnMuc2VsZWN0Q2F0ZWdvcnlQcm9kdWN0c0xvYWRpbmcpKTtcblx0XHR0aGlzLmVycm9ycyQgPSB0aGlzLnN0b3JlLnBpcGUoc2VsZWN0KHRoaXMuY2F0ZWdvcnlTZWxlY3RvcnMuc2VsZWN0Q2F0ZWdvcnlFcnJvcnMpKTtcblx0XHR0aGlzLmlzQ2F0ZWdvcnlFbXB0eSQgPSB0aGlzLnN0b3JlLnBpcGUoc2VsZWN0KHRoaXMuY2F0ZWdvcnlTZWxlY3RvcnMuc2VsZWN0SXNDYXRlZ29yeVBhZ2VFbXB0eSkpO1xuXHR9XG5cbiAgLyoqXG4gICAqIERpc3BhdGNoZXMgdGhlIGdpdmVuIGFjdGlvbi5cbiAgICogQHBhcmFtIGFjdGlvbiBhY3Rpb24gdG8gZGlzcGF0Y2guXG4gICAqL1xuICBkaXNwYXRjaChhY3Rpb246IEFjdGlvbikge1xuICAgIHRoaXMuc3RvcmUuZGlzcGF0Y2goYWN0aW9uKTtcbiAgfVxufVxuIl19