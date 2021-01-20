/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @enum {string} */
const DaffCategoryActionTypes = {
    CategoryLoadAction: '[Daff-Category] Category Load Action',
    CategoryLoadSuccessAction: '[Daff-Category] Category Load Success Action',
    CategoryLoadFailureAction: '[Daff-Category] Category Load Failure Action',
    CategoryPageLoadAction: '[Daff-Category] Category Page Load Action',
    CategoryPageLoadSuccessAction: '[Daff-Category] Category Page Load Success Action',
    CategoryPageLoadFailureAction: '[Daff-Category] Category Page Load Failure Action',
    ChangeCategoryPageSizeAction: '[Daff-Category] Change Category Page Size Action',
    ChangeCategoryCurrentPageAction: '[Daff-Category] Change Category Current Page Action',
    ChangeCategorySortingOptionAction: '[Daff-Category] Change Category Sorting Option Action',
    ChangeCategoryFiltersAction: '[Daff-Category] Change Category Filters Action',
    ToggleCategoryFilterAction: '[Daff-Category] Toggle Category Filter Action',
};
export { DaffCategoryActionTypes };
/**
 * An action triggered to initialize a category load request.
 *
 * @param request - DaffCategoryRequest object
 * @template T
 */
export class DaffCategoryLoad {
    /**
     * @param {?} request
     */
    constructor(request) {
        this.request = request;
        this.type = DaffCategoryActionTypes.CategoryLoadAction;
    }
}
if (false) {
    /** @type {?} */
    DaffCategoryLoad.prototype.type;
    /** @type {?} */
    DaffCategoryLoad.prototype.request;
}
/**
 * An action triggered upon a successful category request.
 *
 * @param response - DaffGetCategoryResponse object
 * @template T, V, U, W
 */
export class DaffCategoryLoadSuccess {
    /**
     * @param {?} response
     */
    constructor(response) {
        this.response = response;
        this.type = DaffCategoryActionTypes.CategoryLoadSuccessAction;
    }
}
if (false) {
    /** @type {?} */
    DaffCategoryLoadSuccess.prototype.type;
    /** @type {?} */
    DaffCategoryLoadSuccess.prototype.response;
}
/**
 * An action triggered upon a failed category request.
 *
 * @param errorMessage - an error message
 */
export class DaffCategoryLoadFailure {
    /**
     * @param {?} errorMessage
     */
    constructor(errorMessage) {
        this.errorMessage = errorMessage;
        this.type = DaffCategoryActionTypes.CategoryLoadFailureAction;
    }
}
if (false) {
    /** @type {?} */
    DaffCategoryLoadFailure.prototype.type;
    /** @type {?} */
    DaffCategoryLoadFailure.prototype.errorMessage;
}
/**
 * An action triggered to initialize a category page load request.
 * This is intended to be used for loading full category pages.
 *
 * @param request - DaffCategoryRequest object
 * @template T
 */
export class DaffCategoryPageLoad {
    /**
     * @param {?} request
     */
    constructor(request) {
        this.request = request;
        this.type = DaffCategoryActionTypes.CategoryPageLoadAction;
    }
}
if (false) {
    /** @type {?} */
    DaffCategoryPageLoad.prototype.type;
    /** @type {?} */
    DaffCategoryPageLoad.prototype.request;
}
/**
 * An action triggered upon a successful category page request.
 *
 * @param response - DaffGetCategoryResponse object
 * @template T, V, U, W
 */
export class DaffCategoryPageLoadSuccess {
    /**
     * @param {?} response
     */
    constructor(response) {
        this.response = response;
        this.type = DaffCategoryActionTypes.CategoryPageLoadSuccessAction;
    }
}
if (false) {
    /** @type {?} */
    DaffCategoryPageLoadSuccess.prototype.type;
    /** @type {?} */
    DaffCategoryPageLoadSuccess.prototype.response;
}
/**
 * An action triggered upon a failed category page request.
 *
 * @param errorMessage - an error message
 */
export class DaffCategoryPageLoadFailure {
    /**
     * @param {?} errorMessage
     */
    constructor(errorMessage) {
        this.errorMessage = errorMessage;
        this.type = DaffCategoryActionTypes.CategoryPageLoadFailureAction;
    }
}
if (false) {
    /** @type {?} */
    DaffCategoryPageLoadFailure.prototype.type;
    /** @type {?} */
    DaffCategoryPageLoadFailure.prototype.errorMessage;
}
/**
 * An action for changing the number of products shown on each page for the selected category.
 *
 * @param pageSize - The number of products per page.
 */
export class DaffChangeCategoryPageSize {
    /**
     * @param {?} pageSize
     */
    constructor(pageSize) {
        this.pageSize = pageSize;
        this.type = DaffCategoryActionTypes.ChangeCategoryPageSizeAction;
    }
}
if (false) {
    /** @type {?} */
    DaffChangeCategoryPageSize.prototype.type;
    /** @type {?} */
    DaffChangeCategoryPageSize.prototype.pageSize;
}
/**
 * An action for changing the current page of products for the selected category.
 *
 * @param currentPage - The current page of products for the selected category.
 */
export class DaffChangeCategoryCurrentPage {
    /**
     * @param {?} currentPage
     */
    constructor(currentPage) {
        this.currentPage = currentPage;
        this.type = DaffCategoryActionTypes.ChangeCategoryCurrentPageAction;
    }
}
if (false) {
    /** @type {?} */
    DaffChangeCategoryCurrentPage.prototype.type;
    /** @type {?} */
    DaffChangeCategoryCurrentPage.prototype.currentPage;
}
/**
 * An action for changing the sorting option for the selected category.
 *
 * @param sort - The sort option to be applied.
 */
export class DaffChangeCategorySortingOption {
    /**
     * @param {?} sort
     */
    constructor(sort) {
        this.sort = sort;
        this.type = DaffCategoryActionTypes.ChangeCategorySortingOptionAction;
    }
}
if (false) {
    /** @type {?} */
    DaffChangeCategorySortingOption.prototype.type;
    /** @type {?} */
    DaffChangeCategorySortingOption.prototype.sort;
}
/**
 * An action for changing the filters for the selected category.
 *
 * @param filters - Filters to be applied to the selected category.
 */
export class DaffChangeCategoryFilters {
    /**
     * @param {?} filters
     */
    constructor(filters) {
        this.filters = filters;
        this.type = DaffCategoryActionTypes.ChangeCategoryFiltersAction;
    }
}
if (false) {
    /** @type {?} */
    DaffChangeCategoryFilters.prototype.type;
    /** @type {?} */
    DaffChangeCategoryFilters.prototype.filters;
}
/**
 * An action for toggling a filters for the selected category.
 *
 * @param filter - Filter to be toggle on the selected category.
 */
export class DaffToggleCategoryFilter {
    /**
     * @param {?} filter
     */
    constructor(filter) {
        this.filter = filter;
        this.type = DaffCategoryActionTypes.ToggleCategoryFilterAction;
    }
}
if (false) {
    /** @type {?} */
    DaffToggleCategoryFilter.prototype.type;
    /** @type {?} */
    DaffToggleCategoryFilter.prototype.filter;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2F0ZWdvcnkuYWN0aW9ucy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkYWZmb2RpbC9jYXRlZ29yeS8iLCJzb3VyY2VzIjpbImFjdGlvbnMvY2F0ZWdvcnkuYWN0aW9ucy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7SUFZRSxvQkFBcUIsc0NBQXNDO0lBQzNELDJCQUE0Qiw4Q0FBOEM7SUFDMUUsMkJBQTRCLDhDQUE4QztJQUMxRSx3QkFBeUIsMkNBQTJDO0lBQ3BFLCtCQUFnQyxtREFBbUQ7SUFDbkYsK0JBQWdDLG1EQUFtRDtJQUNuRiw4QkFBK0Isa0RBQWtEO0lBQ2pGLGlDQUFrQyxxREFBcUQ7SUFDdkYsbUNBQW9DLHVEQUF1RDtJQUM1Riw2QkFBOEIsZ0RBQWdEO0lBQzlFLDRCQUE2QiwrQ0FBK0M7Ozs7Ozs7OztBQVE3RSxNQUFNLE9BQU8sZ0JBQWdCOzs7O0lBRzNCLFlBQW1CLE9BQVU7UUFBVixZQUFPLEdBQVAsT0FBTyxDQUFHO1FBRnBCLFNBQUksR0FBRyx1QkFBdUIsQ0FBQyxrQkFBa0IsQ0FBQztJQUUxQixDQUFDO0NBQ25DOzs7SUFIQyxnQ0FBMkQ7O0lBRS9DLG1DQUFpQjs7Ozs7Ozs7QUFRL0IsTUFBTSxPQUFPLHVCQUF1Qjs7OztJQVFsQyxZQUFtQixRQUE2QztRQUE3QyxhQUFRLEdBQVIsUUFBUSxDQUFxQztRQUZ2RCxTQUFJLEdBQUcsdUJBQXVCLENBQUMseUJBQXlCLENBQUM7SUFFRSxDQUFDO0NBQ3RFOzs7SUFIQyx1Q0FBa0U7O0lBRXRELDJDQUFvRDs7Ozs7OztBQVFsRSxNQUFNLE9BQU8sdUJBQXVCOzs7O0lBR2xDLFlBQW1CLFlBQW9CO1FBQXBCLGlCQUFZLEdBQVosWUFBWSxDQUFRO1FBRjlCLFNBQUksR0FBRyx1QkFBdUIsQ0FBQyx5QkFBeUIsQ0FBQztJQUV2QixDQUFDO0NBQzdDOzs7SUFIQyx1Q0FBa0U7O0lBRXRELCtDQUEyQjs7Ozs7Ozs7O0FBU3pDLE1BQU0sT0FBTyxvQkFBb0I7Ozs7SUFHL0IsWUFBbUIsT0FBVTtRQUFWLFlBQU8sR0FBUCxPQUFPLENBQUc7UUFGcEIsU0FBSSxHQUFHLHVCQUF1QixDQUFDLHNCQUFzQixDQUFDO0lBRTlCLENBQUM7Q0FDbkM7OztJQUhDLG9DQUErRDs7SUFFbkQsdUNBQWlCOzs7Ozs7OztBQVEvQixNQUFNLE9BQU8sMkJBQTJCOzs7O0lBUXRDLFlBQW1CLFFBQTZDO1FBQTdDLGFBQVEsR0FBUixRQUFRLENBQXFDO1FBRnZELFNBQUksR0FBRyx1QkFBdUIsQ0FBQyw2QkFBNkIsQ0FBQztJQUVGLENBQUM7Q0FDdEU7OztJQUhDLDJDQUFzRTs7SUFFMUQsK0NBQW9EOzs7Ozs7O0FBUWxFLE1BQU0sT0FBTywyQkFBMkI7Ozs7SUFHdEMsWUFBbUIsWUFBb0I7UUFBcEIsaUJBQVksR0FBWixZQUFZLENBQVE7UUFGOUIsU0FBSSxHQUFHLHVCQUF1QixDQUFDLDZCQUE2QixDQUFDO0lBRTNCLENBQUM7Q0FDN0M7OztJQUhDLDJDQUFzRTs7SUFFMUQsbURBQTJCOzs7Ozs7O0FBUXpDLE1BQU0sT0FBTywwQkFBMEI7Ozs7SUFHckMsWUFBbUIsUUFBZ0I7UUFBaEIsYUFBUSxHQUFSLFFBQVEsQ0FBUTtRQUYxQixTQUFJLEdBQUcsdUJBQXVCLENBQUMsNEJBQTRCLENBQUM7SUFFOUIsQ0FBQztDQUN6Qzs7O0lBSEMsMENBQXFFOztJQUV6RCw4Q0FBdUI7Ozs7Ozs7QUFRckMsTUFBTSxPQUFPLDZCQUE2Qjs7OztJQUd4QyxZQUFtQixXQUFtQjtRQUFuQixnQkFBVyxHQUFYLFdBQVcsQ0FBUTtRQUY3QixTQUFJLEdBQUcsdUJBQXVCLENBQUMsK0JBQStCLENBQUM7SUFFOUIsQ0FBQztDQUM1Qzs7O0lBSEMsNkNBQXdFOztJQUU1RCxvREFBMEI7Ozs7Ozs7QUFReEMsTUFBTSxPQUFPLCtCQUErQjs7OztJQUcxQyxZQUNPLElBR047UUFITSxTQUFJLEdBQUosSUFBSSxDQUdWO1FBTlEsU0FBSSxHQUFHLHVCQUF1QixDQUFDLGlDQUFpQyxDQUFDO0lBT3ZFLENBQUM7Q0FDTDs7O0lBUkMsK0NBQTBFOztJQUcxRSwrQ0FHQzs7Ozs7OztBQVNILE1BQU0sT0FBTyx5QkFBeUI7Ozs7SUFHcEMsWUFBbUIsT0FBb0M7UUFBcEMsWUFBTyxHQUFQLE9BQU8sQ0FBNkI7UUFGOUMsU0FBSSxHQUFHLHVCQUF1QixDQUFDLDJCQUEyQixDQUFDO0lBRVQsQ0FBQztDQUM3RDs7O0lBSEMseUNBQW9FOztJQUV4RCw0Q0FBMkM7Ozs7Ozs7QUFRekQsTUFBTSxPQUFPLHdCQUF3Qjs7OztJQUduQyxZQUFtQixNQUF1QztRQUF2QyxXQUFNLEdBQU4sTUFBTSxDQUFpQztRQUZqRCxTQUFJLEdBQUcsdUJBQXVCLENBQUMsMEJBQTBCLENBQUM7SUFFTCxDQUFDO0NBQ2hFOzs7SUFIQyx3Q0FBbUU7O0lBRXZELDBDQUE4QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFjdGlvbiB9IGZyb20gJ0BuZ3J4L3N0b3JlJztcblxuaW1wb3J0IHsgRGFmZlByb2R1Y3QgfSBmcm9tICdAZGFmZm9kaWwvcHJvZHVjdCc7XG5cbmltcG9ydCB7IERhZmZHZXRDYXRlZ29yeVJlc3BvbnNlIH0gZnJvbSAnLi4vbW9kZWxzL2dldC1jYXRlZ29yeS1yZXNwb25zZSc7XG5pbXBvcnQgeyBEYWZmQ2F0ZWdvcnlSZXF1ZXN0IH0gZnJvbSAnLi4vbW9kZWxzL3JlcXVlc3RzL2NhdGVnb3J5LXJlcXVlc3QnO1xuaW1wb3J0IHsgRGFmZkNhdGVnb3J5RmlsdGVyUmVxdWVzdCwgRGFmZlRvZ2dsZUNhdGVnb3J5RmlsdGVyUmVxdWVzdCB9IGZyb20gJy4uL21vZGVscy9yZXF1ZXN0cy9maWx0ZXItcmVxdWVzdCc7XG5pbXBvcnQgeyBEYWZmQ2F0ZWdvcnlQYWdlQ29uZmlndXJhdGlvblN0YXRlIH0gZnJvbSAnLi4vbW9kZWxzL2NhdGVnb3J5LXBhZ2UtY29uZmlndXJhdGlvbi1zdGF0ZSc7XG5pbXBvcnQgeyBEYWZmR2VuZXJpY0NhdGVnb3J5IH0gZnJvbSAnLi4vbW9kZWxzL2dlbmVyaWMtY2F0ZWdvcnknO1xuaW1wb3J0IHsgRGFmZkNhdGVnb3J5IH0gZnJvbSAnLi4vbW9kZWxzL2NhdGVnb3J5JztcblxuZXhwb3J0IGVudW0gRGFmZkNhdGVnb3J5QWN0aW9uVHlwZXMge1xuICBDYXRlZ29yeUxvYWRBY3Rpb24gPSAnW0RhZmYtQ2F0ZWdvcnldIENhdGVnb3J5IExvYWQgQWN0aW9uJyxcbiAgQ2F0ZWdvcnlMb2FkU3VjY2Vzc0FjdGlvbiA9ICdbRGFmZi1DYXRlZ29yeV0gQ2F0ZWdvcnkgTG9hZCBTdWNjZXNzIEFjdGlvbicsXG4gIENhdGVnb3J5TG9hZEZhaWx1cmVBY3Rpb24gPSAnW0RhZmYtQ2F0ZWdvcnldIENhdGVnb3J5IExvYWQgRmFpbHVyZSBBY3Rpb24nLFxuICBDYXRlZ29yeVBhZ2VMb2FkQWN0aW9uID0gJ1tEYWZmLUNhdGVnb3J5XSBDYXRlZ29yeSBQYWdlIExvYWQgQWN0aW9uJyxcbiAgQ2F0ZWdvcnlQYWdlTG9hZFN1Y2Nlc3NBY3Rpb24gPSAnW0RhZmYtQ2F0ZWdvcnldIENhdGVnb3J5IFBhZ2UgTG9hZCBTdWNjZXNzIEFjdGlvbicsXG4gIENhdGVnb3J5UGFnZUxvYWRGYWlsdXJlQWN0aW9uID0gJ1tEYWZmLUNhdGVnb3J5XSBDYXRlZ29yeSBQYWdlIExvYWQgRmFpbHVyZSBBY3Rpb24nLFxuICBDaGFuZ2VDYXRlZ29yeVBhZ2VTaXplQWN0aW9uID0gJ1tEYWZmLUNhdGVnb3J5XSBDaGFuZ2UgQ2F0ZWdvcnkgUGFnZSBTaXplIEFjdGlvbicsXG4gIENoYW5nZUNhdGVnb3J5Q3VycmVudFBhZ2VBY3Rpb24gPSAnW0RhZmYtQ2F0ZWdvcnldIENoYW5nZSBDYXRlZ29yeSBDdXJyZW50IFBhZ2UgQWN0aW9uJyxcbiAgQ2hhbmdlQ2F0ZWdvcnlTb3J0aW5nT3B0aW9uQWN0aW9uID0gJ1tEYWZmLUNhdGVnb3J5XSBDaGFuZ2UgQ2F0ZWdvcnkgU29ydGluZyBPcHRpb24gQWN0aW9uJyxcblx0Q2hhbmdlQ2F0ZWdvcnlGaWx0ZXJzQWN0aW9uID0gJ1tEYWZmLUNhdGVnb3J5XSBDaGFuZ2UgQ2F0ZWdvcnkgRmlsdGVycyBBY3Rpb24nLFxuXHRUb2dnbGVDYXRlZ29yeUZpbHRlckFjdGlvbiA9ICdbRGFmZi1DYXRlZ29yeV0gVG9nZ2xlIENhdGVnb3J5IEZpbHRlciBBY3Rpb24nXG59XG5cbi8qKlxuICogQW4gYWN0aW9uIHRyaWdnZXJlZCB0byBpbml0aWFsaXplIGEgY2F0ZWdvcnkgbG9hZCByZXF1ZXN0LlxuICpcbiAqIEBwYXJhbSByZXF1ZXN0IC0gRGFmZkNhdGVnb3J5UmVxdWVzdCBvYmplY3RcbiAqL1xuZXhwb3J0IGNsYXNzIERhZmZDYXRlZ29yeUxvYWQ8VCBleHRlbmRzIERhZmZDYXRlZ29yeVJlcXVlc3QgPSBEYWZmQ2F0ZWdvcnlSZXF1ZXN0PiBpbXBsZW1lbnRzIEFjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBEYWZmQ2F0ZWdvcnlBY3Rpb25UeXBlcy5DYXRlZ29yeUxvYWRBY3Rpb247XG5cbiAgY29uc3RydWN0b3IocHVibGljIHJlcXVlc3Q6IFQpIHsgfVxufVxuXG4vKipcbiAqIEFuIGFjdGlvbiB0cmlnZ2VyZWQgdXBvbiBhIHN1Y2Nlc3NmdWwgY2F0ZWdvcnkgcmVxdWVzdC5cbiAqXG4gKiBAcGFyYW0gcmVzcG9uc2UgLSBEYWZmR2V0Q2F0ZWdvcnlSZXNwb25zZSBvYmplY3RcbiAqL1xuZXhwb3J0IGNsYXNzIERhZmZDYXRlZ29yeUxvYWRTdWNjZXNzPFxuXHRUIGV4dGVuZHMgRGFmZkNhdGVnb3J5UmVxdWVzdCA9IERhZmZDYXRlZ29yeVJlcXVlc3QsXG5cdFYgZXh0ZW5kcyBEYWZmR2VuZXJpY0NhdGVnb3J5PFY+ID0gRGFmZkNhdGVnb3J5LFxuXHRVIGV4dGVuZHMgRGFmZkNhdGVnb3J5UGFnZUNvbmZpZ3VyYXRpb25TdGF0ZTxUPiA9IERhZmZDYXRlZ29yeVBhZ2VDb25maWd1cmF0aW9uU3RhdGU8VD4sXG5cdFcgZXh0ZW5kcyBEYWZmUHJvZHVjdCA9IERhZmZQcm9kdWN0XG4+IGltcGxlbWVudHMgQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IERhZmZDYXRlZ29yeUFjdGlvblR5cGVzLkNhdGVnb3J5TG9hZFN1Y2Nlc3NBY3Rpb247XG5cbiAgY29uc3RydWN0b3IocHVibGljIHJlc3BvbnNlOiBEYWZmR2V0Q2F0ZWdvcnlSZXNwb25zZTxULCBWLCBVLCBXPikgeyB9XG59XG5cbi8qKlxuICogQW4gYWN0aW9uIHRyaWdnZXJlZCB1cG9uIGEgZmFpbGVkIGNhdGVnb3J5IHJlcXVlc3QuXG4gKlxuICogQHBhcmFtIGVycm9yTWVzc2FnZSAtIGFuIGVycm9yIG1lc3NhZ2VcbiAqL1xuZXhwb3J0IGNsYXNzIERhZmZDYXRlZ29yeUxvYWRGYWlsdXJlIGltcGxlbWVudHMgQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IERhZmZDYXRlZ29yeUFjdGlvblR5cGVzLkNhdGVnb3J5TG9hZEZhaWx1cmVBY3Rpb247XG5cbiAgY29uc3RydWN0b3IocHVibGljIGVycm9yTWVzc2FnZTogc3RyaW5nKSB7IH1cbn1cblxuLyoqXG4gKiBBbiBhY3Rpb24gdHJpZ2dlcmVkIHRvIGluaXRpYWxpemUgYSBjYXRlZ29yeSBwYWdlIGxvYWQgcmVxdWVzdC5cbiAqIFRoaXMgaXMgaW50ZW5kZWQgdG8gYmUgdXNlZCBmb3IgbG9hZGluZyBmdWxsIGNhdGVnb3J5IHBhZ2VzLlxuICpcbiAqIEBwYXJhbSByZXF1ZXN0IC0gRGFmZkNhdGVnb3J5UmVxdWVzdCBvYmplY3RcbiAqL1xuZXhwb3J0IGNsYXNzIERhZmZDYXRlZ29yeVBhZ2VMb2FkPFQgZXh0ZW5kcyBEYWZmQ2F0ZWdvcnlSZXF1ZXN0ID0gRGFmZkNhdGVnb3J5UmVxdWVzdD4gaW1wbGVtZW50cyBBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gRGFmZkNhdGVnb3J5QWN0aW9uVHlwZXMuQ2F0ZWdvcnlQYWdlTG9hZEFjdGlvbjtcblxuICBjb25zdHJ1Y3RvcihwdWJsaWMgcmVxdWVzdDogVCkgeyB9XG59XG5cbi8qKlxuICogQW4gYWN0aW9uIHRyaWdnZXJlZCB1cG9uIGEgc3VjY2Vzc2Z1bCBjYXRlZ29yeSBwYWdlIHJlcXVlc3QuXG4gKlxuICogQHBhcmFtIHJlc3BvbnNlIC0gRGFmZkdldENhdGVnb3J5UmVzcG9uc2Ugb2JqZWN0XG4gKi9cbmV4cG9ydCBjbGFzcyBEYWZmQ2F0ZWdvcnlQYWdlTG9hZFN1Y2Nlc3M8XG5cdFQgZXh0ZW5kcyBEYWZmQ2F0ZWdvcnlSZXF1ZXN0ID0gRGFmZkNhdGVnb3J5UmVxdWVzdCxcblx0ViBleHRlbmRzIERhZmZHZW5lcmljQ2F0ZWdvcnk8Vj4gPSBEYWZmQ2F0ZWdvcnksXG5cdFUgZXh0ZW5kcyBEYWZmQ2F0ZWdvcnlQYWdlQ29uZmlndXJhdGlvblN0YXRlPFQ+ID0gRGFmZkNhdGVnb3J5UGFnZUNvbmZpZ3VyYXRpb25TdGF0ZTxUPixcblx0VyBleHRlbmRzIERhZmZQcm9kdWN0ID0gRGFmZlByb2R1Y3Rcbj4gaW1wbGVtZW50cyBBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gRGFmZkNhdGVnb3J5QWN0aW9uVHlwZXMuQ2F0ZWdvcnlQYWdlTG9hZFN1Y2Nlc3NBY3Rpb247XG5cbiAgY29uc3RydWN0b3IocHVibGljIHJlc3BvbnNlOiBEYWZmR2V0Q2F0ZWdvcnlSZXNwb25zZTxULCBWLCBVLCBXPikgeyB9XG59XG5cbi8qKlxuICogQW4gYWN0aW9uIHRyaWdnZXJlZCB1cG9uIGEgZmFpbGVkIGNhdGVnb3J5IHBhZ2UgcmVxdWVzdC5cbiAqXG4gKiBAcGFyYW0gZXJyb3JNZXNzYWdlIC0gYW4gZXJyb3IgbWVzc2FnZVxuICovXG5leHBvcnQgY2xhc3MgRGFmZkNhdGVnb3J5UGFnZUxvYWRGYWlsdXJlIGltcGxlbWVudHMgQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IERhZmZDYXRlZ29yeUFjdGlvblR5cGVzLkNhdGVnb3J5UGFnZUxvYWRGYWlsdXJlQWN0aW9uO1xuXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBlcnJvck1lc3NhZ2U6IHN0cmluZykgeyB9XG59XG5cbi8qKlxuICogQW4gYWN0aW9uIGZvciBjaGFuZ2luZyB0aGUgbnVtYmVyIG9mIHByb2R1Y3RzIHNob3duIG9uIGVhY2ggcGFnZSBmb3IgdGhlIHNlbGVjdGVkIGNhdGVnb3J5LlxuICpcbiAqIEBwYXJhbSBwYWdlU2l6ZSAtIFRoZSBudW1iZXIgb2YgcHJvZHVjdHMgcGVyIHBhZ2UuXG4gKi9cbmV4cG9ydCBjbGFzcyBEYWZmQ2hhbmdlQ2F0ZWdvcnlQYWdlU2l6ZSBpbXBsZW1lbnRzIEFjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBEYWZmQ2F0ZWdvcnlBY3Rpb25UeXBlcy5DaGFuZ2VDYXRlZ29yeVBhZ2VTaXplQWN0aW9uO1xuXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBwYWdlU2l6ZTogbnVtYmVyKSB7IH1cbn1cblxuLyoqXG4gKiBBbiBhY3Rpb24gZm9yIGNoYW5naW5nIHRoZSBjdXJyZW50IHBhZ2Ugb2YgcHJvZHVjdHMgZm9yIHRoZSBzZWxlY3RlZCBjYXRlZ29yeS5cbiAqXG4gKiBAcGFyYW0gY3VycmVudFBhZ2UgLSBUaGUgY3VycmVudCBwYWdlIG9mIHByb2R1Y3RzIGZvciB0aGUgc2VsZWN0ZWQgY2F0ZWdvcnkuXG4gKi9cbmV4cG9ydCBjbGFzcyBEYWZmQ2hhbmdlQ2F0ZWdvcnlDdXJyZW50UGFnZSBpbXBsZW1lbnRzIEFjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBEYWZmQ2F0ZWdvcnlBY3Rpb25UeXBlcy5DaGFuZ2VDYXRlZ29yeUN1cnJlbnRQYWdlQWN0aW9uO1xuXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBjdXJyZW50UGFnZTogbnVtYmVyKSB7IH1cbn1cblxuLyoqXG4gKiBBbiBhY3Rpb24gZm9yIGNoYW5naW5nIHRoZSBzb3J0aW5nIG9wdGlvbiBmb3IgdGhlIHNlbGVjdGVkIGNhdGVnb3J5LlxuICpcbiAqIEBwYXJhbSBzb3J0IC0gVGhlIHNvcnQgb3B0aW9uIHRvIGJlIGFwcGxpZWQuXG4gKi9cbmV4cG9ydCBjbGFzcyBEYWZmQ2hhbmdlQ2F0ZWdvcnlTb3J0aW5nT3B0aW9uIGltcGxlbWVudHMgQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IERhZmZDYXRlZ29yeUFjdGlvblR5cGVzLkNoYW5nZUNhdGVnb3J5U29ydGluZ09wdGlvbkFjdGlvbjtcblxuICBjb25zdHJ1Y3Rvcihcblx0XHRwdWJsaWMgc29ydDoge1xuXHRcdFx0b3B0aW9uOiBEYWZmQ2F0ZWdvcnlSZXF1ZXN0WydhcHBsaWVkX3NvcnRfb3B0aW9uJ10sXG5cdFx0XHRkaXJlY3Rpb246IERhZmZDYXRlZ29yeVJlcXVlc3RbJ2FwcGxpZWRfc29ydF9kaXJlY3Rpb24nXVxuXHRcdH1cblx0KSB7IH1cbn1cblxuLyoqXG4gKiBBbiBhY3Rpb24gZm9yIGNoYW5naW5nIHRoZSBmaWx0ZXJzIGZvciB0aGUgc2VsZWN0ZWQgY2F0ZWdvcnkuXG4gKlxuICogQHBhcmFtIGZpbHRlcnMgLSBGaWx0ZXJzIHRvIGJlIGFwcGxpZWQgdG8gdGhlIHNlbGVjdGVkIGNhdGVnb3J5LlxuICovXG5leHBvcnQgY2xhc3MgRGFmZkNoYW5nZUNhdGVnb3J5RmlsdGVycyBpbXBsZW1lbnRzIEFjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBEYWZmQ2F0ZWdvcnlBY3Rpb25UeXBlcy5DaGFuZ2VDYXRlZ29yeUZpbHRlcnNBY3Rpb247XG5cbiAgY29uc3RydWN0b3IocHVibGljIGZpbHRlcnM6IERhZmZDYXRlZ29yeUZpbHRlclJlcXVlc3RbXSkgeyB9XG59XG5cbi8qKlxuICogQW4gYWN0aW9uIGZvciB0b2dnbGluZyBhIGZpbHRlcnMgZm9yIHRoZSBzZWxlY3RlZCBjYXRlZ29yeS5cbiAqXG4gKiBAcGFyYW0gZmlsdGVyIC0gRmlsdGVyIHRvIGJlIHRvZ2dsZSBvbiB0aGUgc2VsZWN0ZWQgY2F0ZWdvcnkuXG4gKi9cbmV4cG9ydCBjbGFzcyBEYWZmVG9nZ2xlQ2F0ZWdvcnlGaWx0ZXIgaW1wbGVtZW50cyBBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gRGFmZkNhdGVnb3J5QWN0aW9uVHlwZXMuVG9nZ2xlQ2F0ZWdvcnlGaWx0ZXJBY3Rpb247XG5cbiAgY29uc3RydWN0b3IocHVibGljIGZpbHRlcjogRGFmZlRvZ2dsZUNhdGVnb3J5RmlsdGVyUmVxdWVzdCkgeyB9XG59XG5cbmV4cG9ydCB0eXBlIERhZmZDYXRlZ29yeUFjdGlvbnM8XG5cdFQgZXh0ZW5kcyBEYWZmQ2F0ZWdvcnlSZXF1ZXN0ID0gRGFmZkNhdGVnb3J5UmVxdWVzdCxcblx0VSBleHRlbmRzIERhZmZHZW5lcmljQ2F0ZWdvcnk8VT4gPSBEYWZmQ2F0ZWdvcnksXG5cdFYgZXh0ZW5kcyBEYWZmQ2F0ZWdvcnlQYWdlQ29uZmlndXJhdGlvblN0YXRlPFQ+ID0gRGFmZkNhdGVnb3J5UGFnZUNvbmZpZ3VyYXRpb25TdGF0ZTxUPixcblx0VyBleHRlbmRzIERhZmZQcm9kdWN0ID0gRGFmZlByb2R1Y3Rcbj4gPVxuICB8IERhZmZDYXRlZ29yeUxvYWQ8VD5cbiAgfCBEYWZmQ2F0ZWdvcnlMb2FkU3VjY2VzczxULCBVLCBWLCBXPlxuICB8IERhZmZDYXRlZ29yeUxvYWRGYWlsdXJlXG4gIHwgRGFmZkNhdGVnb3J5UGFnZUxvYWQ8VD5cbiAgfCBEYWZmQ2F0ZWdvcnlQYWdlTG9hZFN1Y2Nlc3M8VCwgVSwgViwgVz5cbiAgfCBEYWZmQ2F0ZWdvcnlQYWdlTG9hZEZhaWx1cmVcblx0fCBEYWZmQ2hhbmdlQ2F0ZWdvcnlQYWdlU2l6ZVxuXHR8IERhZmZDaGFuZ2VDYXRlZ29yeUN1cnJlbnRQYWdlXG4gIHwgRGFmZkNoYW5nZUNhdGVnb3J5U29ydGluZ09wdGlvblxuICB8IERhZmZDaGFuZ2VDYXRlZ29yeUZpbHRlcnNcbiAgfCBEYWZmVG9nZ2xlQ2F0ZWdvcnlGaWx0ZXI7XG4iXX0=