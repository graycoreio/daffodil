/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @record
 * @template T, V, U, W
 */
export function DaffCategoryFacadeInterface() { }
if (false) {
    /**
     * The currently selected category.
     * @type {?}
     */
    DaffCategoryFacadeInterface.prototype.category$;
    /**
     * The page configuration state for the selected category.
     * @type {?}
     */
    DaffCategoryFacadeInterface.prototype.pageConfigurationState$;
    /**
     * The current page of products for the selected category.
     * @type {?}
     */
    DaffCategoryFacadeInterface.prototype.currentPage$;
    /**
     * The number of pages of product for the selected category.
     * @type {?}
     */
    DaffCategoryFacadeInterface.prototype.totalPages$;
    /**
     * The total number of products for the filters applied.
     * @type {?}
     */
    DaffCategoryFacadeInterface.prototype.totalProducts$;
    /**
     * The number of products per page for the selected category.
     * @type {?}
     */
    DaffCategoryFacadeInterface.prototype.pageSize$;
    /**
     * The filters available for the products of the selected category.
     * @type {?}
     */
    DaffCategoryFacadeInterface.prototype.filters$;
    /**
     * The sort options available for the products of the selected category.
     * @type {?}
     */
    DaffCategoryFacadeInterface.prototype.sortOptions$;
    /**
     * The sort options available for the products of the selected category.
     * @type {?}
     */
    DaffCategoryFacadeInterface.prototype.appliedFilters$;
    /**
     * The sort options available for the products of the selected category.
     * @type {?}
     */
    DaffCategoryFacadeInterface.prototype.appliedSortOption$;
    /**
     * The sort options available for the products of the selected category.
     * @type {?}
     */
    DaffCategoryFacadeInterface.prototype.appliedSortDirection$;
    /**
     * Products of the currently selected category.
     * @type {?}
     */
    DaffCategoryFacadeInterface.prototype.products$;
    /**
     * The loading state for retrieving a single category.
     * @type {?}
     */
    DaffCategoryFacadeInterface.prototype.categoryLoading$;
    /**
     * The loading state for retrieving only the products of the category.
     * @type {?}
     */
    DaffCategoryFacadeInterface.prototype.productsLoading$;
    /**
     * Errors associated with retrieving a single category.
     * @type {?}
     */
    DaffCategoryFacadeInterface.prototype.errors$;
    /**
     * Is the category page empty of products.
     * @type {?}
     */
    DaffCategoryFacadeInterface.prototype.isCategoryEmpty$;
    /**
     * Get a category by the provided Id.
     * @param {?} id
     * @return {?}
     */
    DaffCategoryFacadeInterface.prototype.getCategoryById = function (id) { };
    /**
     * Get products by a category Id.
     * @param {?} categoryId
     * @return {?}
     */
    DaffCategoryFacadeInterface.prototype.getProductsByCategory = function (categoryId) { };
    /**
     * Get products by a category Id.
     * @param {?} categoryId
     * @return {?}
     */
    DaffCategoryFacadeInterface.prototype.getTotalProductsByCategory = function (categoryId) { };
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2F0ZWdvcnktZmFjYWRlLmludGVyZmFjZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkYWZmb2RpbC9jYXRlZ29yeS8iLCJzb3VyY2VzIjpbImZhY2FkZXMvY2F0ZWdvcnktZmFjYWRlLmludGVyZmFjZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQWNBLGlEQXdGQzs7Ozs7O0lBL0VDLGdEQUF5Qjs7Ozs7SUFJekIsOERBQXVDOzs7OztJQUl2QyxtREFBaUM7Ozs7O0lBSWxDLGtEQUFnQzs7Ozs7SUFJaEMscURBQW1DOzs7OztJQUlsQyxnREFBOEI7Ozs7O0lBSTlCLCtDQUEyQzs7Ozs7SUFJM0MsbURBQW1EOzs7OztJQUluRCxzREFBeUQ7Ozs7O0lBSXpELHlEQUF1Qzs7Ozs7SUFJdkMsNERBQXlEOzs7OztJQUl6RCxnREFBMkI7Ozs7O0lBSTNCLHVEQUFzQzs7Ozs7SUFJdEMsdURBQXNDOzs7OztJQUl2Qyw4Q0FBOEI7Ozs7O0lBSTlCLHVEQUFzQzs7Ozs7O0lBTXRDLDBFQUEyQzs7Ozs7O0lBTTNDLHdGQUEyRDs7Ozs7O0lBTTNELDZGQUFtRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IEFjdGlvbiB9IGZyb20gJ0BuZ3J4L3N0b3JlJztcblxuaW1wb3J0IHsgRGFmZlN0b3JlRmFjYWRlIH0gZnJvbSAnQGRhZmZvZGlsL2NvcmUvc3RhdGUnO1xuaW1wb3J0IHsgRGFmZlByb2R1Y3QgfSBmcm9tICdAZGFmZm9kaWwvcHJvZHVjdCc7XG5cbmltcG9ydCB7IERhZmZDYXRlZ29yeVBhZ2VDb25maWd1cmF0aW9uU3RhdGUgfSBmcm9tICcuLi9tb2RlbHMvY2F0ZWdvcnktcGFnZS1jb25maWd1cmF0aW9uLXN0YXRlJztcbmltcG9ydCB7IERhZmZDYXRlZ29yeUZpbHRlciB9IGZyb20gJy4uL21vZGVscy9jYXRlZ29yeS1maWx0ZXInO1xuaW1wb3J0IHsgRGFmZkNhdGVnb3J5U29ydE9wdGlvbiB9IGZyb20gJy4uL21vZGVscy9jYXRlZ29yeS1zb3J0LW9wdGlvbic7XG5pbXBvcnQgeyBEYWZmU29ydERpcmVjdGlvbkVudW0sIERhZmZDYXRlZ29yeVJlcXVlc3QgfSBmcm9tICcuLi9tb2RlbHMvcmVxdWVzdHMvY2F0ZWdvcnktcmVxdWVzdCc7XG5pbXBvcnQgeyBEYWZmQ2F0ZWdvcnlBcHBsaWVkRmlsdGVyIH0gZnJvbSAnLi4vbW9kZWxzL2NhdGVnb3J5LWFwcGxpZWQtZmlsdGVyJztcbmltcG9ydCB7IERhZmZHZW5lcmljQ2F0ZWdvcnkgfSBmcm9tICcuLi9tb2RlbHMvZ2VuZXJpYy1jYXRlZ29yeSc7XG5pbXBvcnQgeyBEYWZmQ2F0ZWdvcnkgfSBmcm9tICcuLi9tb2RlbHMvY2F0ZWdvcnknO1xuXG5leHBvcnQgaW50ZXJmYWNlIERhZmZDYXRlZ29yeUZhY2FkZUludGVyZmFjZTxcblx0VCBleHRlbmRzIERhZmZDYXRlZ29yeVJlcXVlc3QgPSBEYWZmQ2F0ZWdvcnlSZXF1ZXN0LFxuXHRWIGV4dGVuZHMgRGFmZkdlbmVyaWNDYXRlZ29yeTxWPiA9IERhZmZDYXRlZ29yeSxcblx0VSBleHRlbmRzIERhZmZDYXRlZ29yeVBhZ2VDb25maWd1cmF0aW9uU3RhdGU8VD4gPSBEYWZmQ2F0ZWdvcnlQYWdlQ29uZmlndXJhdGlvblN0YXRlPFQ+LFxuXHRXIGV4dGVuZHMgRGFmZlByb2R1Y3QgPSBEYWZmUHJvZHVjdFxuPiBleHRlbmRzIERhZmZTdG9yZUZhY2FkZTxBY3Rpb24+IHtcblx0LyoqXG4gICAqIFRoZSBjdXJyZW50bHkgc2VsZWN0ZWQgY2F0ZWdvcnkuXG4gICAqL1xuICBjYXRlZ29yeSQ6IE9ic2VydmFibGU8Vj47XG4gIC8qKlxuICAgKiBUaGUgcGFnZSBjb25maWd1cmF0aW9uIHN0YXRlIGZvciB0aGUgc2VsZWN0ZWQgY2F0ZWdvcnkuXG4gICAqL1xuICBwYWdlQ29uZmlndXJhdGlvblN0YXRlJDogT2JzZXJ2YWJsZTxVPjtcbiAgLyoqXG4gICAqIFRoZSBjdXJyZW50IHBhZ2Ugb2YgcHJvZHVjdHMgZm9yIHRoZSBzZWxlY3RlZCBjYXRlZ29yeS5cbiAgICovXG4gIGN1cnJlbnRQYWdlJDogT2JzZXJ2YWJsZTxudW1iZXI+O1xuICAvKipcbiAgICogVGhlIG51bWJlciBvZiBwYWdlcyBvZiBwcm9kdWN0IGZvciB0aGUgc2VsZWN0ZWQgY2F0ZWdvcnkuXG4gICAqL1xuXHR0b3RhbFBhZ2VzJDogT2JzZXJ2YWJsZTxudW1iZXI+O1xuXHQvKipcblx0ICogVGhlIHRvdGFsIG51bWJlciBvZiBwcm9kdWN0cyBmb3IgdGhlIGZpbHRlcnMgYXBwbGllZC5cblx0ICovXG5cdHRvdGFsUHJvZHVjdHMkOiBPYnNlcnZhYmxlPG51bWJlcj47XG4gIC8qKlxuICAgKiBUaGUgbnVtYmVyIG9mIHByb2R1Y3RzIHBlciBwYWdlIGZvciB0aGUgc2VsZWN0ZWQgY2F0ZWdvcnkuXG4gICAqL1xuICBwYWdlU2l6ZSQ6IE9ic2VydmFibGU8bnVtYmVyPjtcbiAgLyoqXG4gICAqIFRoZSBmaWx0ZXJzIGF2YWlsYWJsZSBmb3IgdGhlIHByb2R1Y3RzIG9mIHRoZSBzZWxlY3RlZCBjYXRlZ29yeS5cbiAgICovXG4gIGZpbHRlcnMkOiBPYnNlcnZhYmxlPERhZmZDYXRlZ29yeUZpbHRlcltdPjtcbiAgLyoqXG4gICAqIFRoZSBzb3J0IG9wdGlvbnMgYXZhaWxhYmxlIGZvciB0aGUgcHJvZHVjdHMgb2YgdGhlIHNlbGVjdGVkIGNhdGVnb3J5LlxuICAgKi9cbiAgc29ydE9wdGlvbnMkOiBPYnNlcnZhYmxlPERhZmZDYXRlZ29yeVNvcnRPcHRpb25bXT47XG4gIC8qKlxuICAgKiBUaGUgc29ydCBvcHRpb25zIGF2YWlsYWJsZSBmb3IgdGhlIHByb2R1Y3RzIG9mIHRoZSBzZWxlY3RlZCBjYXRlZ29yeS5cbiAgICovXG4gIGFwcGxpZWRGaWx0ZXJzJDogT2JzZXJ2YWJsZTxEYWZmQ2F0ZWdvcnlBcHBsaWVkRmlsdGVyW10+O1xuICAvKipcbiAgICogVGhlIHNvcnQgb3B0aW9ucyBhdmFpbGFibGUgZm9yIHRoZSBwcm9kdWN0cyBvZiB0aGUgc2VsZWN0ZWQgY2F0ZWdvcnkuXG4gICAqL1xuICBhcHBsaWVkU29ydE9wdGlvbiQ6IE9ic2VydmFibGU8c3RyaW5nPjtcbiAgLyoqXG4gICAqIFRoZSBzb3J0IG9wdGlvbnMgYXZhaWxhYmxlIGZvciB0aGUgcHJvZHVjdHMgb2YgdGhlIHNlbGVjdGVkIGNhdGVnb3J5LlxuICAgKi9cbiAgYXBwbGllZFNvcnREaXJlY3Rpb24kOiBPYnNlcnZhYmxlPERhZmZTb3J0RGlyZWN0aW9uRW51bT47XG4gIC8qKlxuICAgKiBQcm9kdWN0cyBvZiB0aGUgY3VycmVudGx5IHNlbGVjdGVkIGNhdGVnb3J5LlxuICAgKi9cbiAgcHJvZHVjdHMkOiBPYnNlcnZhYmxlPFdbXT47XG4gIC8qKlxuICAgKiBUaGUgbG9hZGluZyBzdGF0ZSBmb3IgcmV0cmlldmluZyBhIHNpbmdsZSBjYXRlZ29yeS5cbiAgICovXG4gIGNhdGVnb3J5TG9hZGluZyQ6IE9ic2VydmFibGU8Ym9vbGVhbj47XG4gIC8qKlxuICAgKiBUaGUgbG9hZGluZyBzdGF0ZSBmb3IgcmV0cmlldmluZyBvbmx5IHRoZSBwcm9kdWN0cyBvZiB0aGUgY2F0ZWdvcnkuXG4gICAqL1xuICBwcm9kdWN0c0xvYWRpbmckOiBPYnNlcnZhYmxlPGJvb2xlYW4+O1xuICAvKipcbiAgICogRXJyb3JzIGFzc29jaWF0ZWQgd2l0aCByZXRyaWV2aW5nIGEgc2luZ2xlIGNhdGVnb3J5LlxuICAgKi9cblx0ZXJyb3JzJDogT2JzZXJ2YWJsZTxzdHJpbmdbXT47XG5cdC8qKlxuXHQgKiBJcyB0aGUgY2F0ZWdvcnkgcGFnZSBlbXB0eSBvZiBwcm9kdWN0cy5cblx0ICovXG5cdGlzQ2F0ZWdvcnlFbXB0eSQ6IE9ic2VydmFibGU8Ym9vbGVhbj47XG5cblx0LyoqXG5cdCAqIEdldCBhIGNhdGVnb3J5IGJ5IHRoZSBwcm92aWRlZCBJZC5cblx0ICogQHBhcmFtIGlkXG5cdCAqL1xuXHRnZXRDYXRlZ29yeUJ5SWQoaWQ6IHN0cmluZyk6IE9ic2VydmFibGU8Vj47XG5cblx0LyoqXG5cdCAqIEdldCBwcm9kdWN0cyBieSBhIGNhdGVnb3J5IElkLlxuXHQgKiBAcGFyYW0gY2F0ZWdvcnlJZFxuXHQgKi9cblx0Z2V0UHJvZHVjdHNCeUNhdGVnb3J5KGNhdGVnb3J5SWQ6IHN0cmluZyk6IE9ic2VydmFibGU8V1tdPjtcblxuXHQvKipcblx0ICogR2V0IHByb2R1Y3RzIGJ5IGEgY2F0ZWdvcnkgSWQuXG5cdCAqIEBwYXJhbSBjYXRlZ29yeUlkXG5cdCAqL1xuXHRnZXRUb3RhbFByb2R1Y3RzQnlDYXRlZ29yeShjYXRlZ29yeUlkOiBzdHJpbmcpOiBPYnNlcnZhYmxlPG51bWJlcj47XG59XG4iXX0=