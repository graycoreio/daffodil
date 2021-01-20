/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @enum {string} */
var DaffCategoryActionTypes = {
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
var /**
 * An action triggered to initialize a category load request.
 *
 * @param request - DaffCategoryRequest object
 * @template T
 */
DaffCategoryLoad = /** @class */ (function () {
    function DaffCategoryLoad(request) {
        this.request = request;
        this.type = DaffCategoryActionTypes.CategoryLoadAction;
    }
    return DaffCategoryLoad;
}());
/**
 * An action triggered to initialize a category load request.
 *
 * @param request - DaffCategoryRequest object
 * @template T
 */
export { DaffCategoryLoad };
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
var /**
 * An action triggered upon a successful category request.
 *
 * @param response - DaffGetCategoryResponse object
 * @template T, V, U, W
 */
DaffCategoryLoadSuccess = /** @class */ (function () {
    function DaffCategoryLoadSuccess(response) {
        this.response = response;
        this.type = DaffCategoryActionTypes.CategoryLoadSuccessAction;
    }
    return DaffCategoryLoadSuccess;
}());
/**
 * An action triggered upon a successful category request.
 *
 * @param response - DaffGetCategoryResponse object
 * @template T, V, U, W
 */
export { DaffCategoryLoadSuccess };
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
var /**
 * An action triggered upon a failed category request.
 *
 * @param errorMessage - an error message
 */
DaffCategoryLoadFailure = /** @class */ (function () {
    function DaffCategoryLoadFailure(errorMessage) {
        this.errorMessage = errorMessage;
        this.type = DaffCategoryActionTypes.CategoryLoadFailureAction;
    }
    return DaffCategoryLoadFailure;
}());
/**
 * An action triggered upon a failed category request.
 *
 * @param errorMessage - an error message
 */
export { DaffCategoryLoadFailure };
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
var /**
 * An action triggered to initialize a category page load request.
 * This is intended to be used for loading full category pages.
 *
 * @param request - DaffCategoryRequest object
 * @template T
 */
DaffCategoryPageLoad = /** @class */ (function () {
    function DaffCategoryPageLoad(request) {
        this.request = request;
        this.type = DaffCategoryActionTypes.CategoryPageLoadAction;
    }
    return DaffCategoryPageLoad;
}());
/**
 * An action triggered to initialize a category page load request.
 * This is intended to be used for loading full category pages.
 *
 * @param request - DaffCategoryRequest object
 * @template T
 */
export { DaffCategoryPageLoad };
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
var /**
 * An action triggered upon a successful category page request.
 *
 * @param response - DaffGetCategoryResponse object
 * @template T, V, U, W
 */
DaffCategoryPageLoadSuccess = /** @class */ (function () {
    function DaffCategoryPageLoadSuccess(response) {
        this.response = response;
        this.type = DaffCategoryActionTypes.CategoryPageLoadSuccessAction;
    }
    return DaffCategoryPageLoadSuccess;
}());
/**
 * An action triggered upon a successful category page request.
 *
 * @param response - DaffGetCategoryResponse object
 * @template T, V, U, W
 */
export { DaffCategoryPageLoadSuccess };
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
var /**
 * An action triggered upon a failed category page request.
 *
 * @param errorMessage - an error message
 */
DaffCategoryPageLoadFailure = /** @class */ (function () {
    function DaffCategoryPageLoadFailure(errorMessage) {
        this.errorMessage = errorMessage;
        this.type = DaffCategoryActionTypes.CategoryPageLoadFailureAction;
    }
    return DaffCategoryPageLoadFailure;
}());
/**
 * An action triggered upon a failed category page request.
 *
 * @param errorMessage - an error message
 */
export { DaffCategoryPageLoadFailure };
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
var /**
 * An action for changing the number of products shown on each page for the selected category.
 *
 * @param pageSize - The number of products per page.
 */
DaffChangeCategoryPageSize = /** @class */ (function () {
    function DaffChangeCategoryPageSize(pageSize) {
        this.pageSize = pageSize;
        this.type = DaffCategoryActionTypes.ChangeCategoryPageSizeAction;
    }
    return DaffChangeCategoryPageSize;
}());
/**
 * An action for changing the number of products shown on each page for the selected category.
 *
 * @param pageSize - The number of products per page.
 */
export { DaffChangeCategoryPageSize };
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
var /**
 * An action for changing the current page of products for the selected category.
 *
 * @param currentPage - The current page of products for the selected category.
 */
DaffChangeCategoryCurrentPage = /** @class */ (function () {
    function DaffChangeCategoryCurrentPage(currentPage) {
        this.currentPage = currentPage;
        this.type = DaffCategoryActionTypes.ChangeCategoryCurrentPageAction;
    }
    return DaffChangeCategoryCurrentPage;
}());
/**
 * An action for changing the current page of products for the selected category.
 *
 * @param currentPage - The current page of products for the selected category.
 */
export { DaffChangeCategoryCurrentPage };
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
var /**
 * An action for changing the sorting option for the selected category.
 *
 * @param sort - The sort option to be applied.
 */
DaffChangeCategorySortingOption = /** @class */ (function () {
    function DaffChangeCategorySortingOption(sort) {
        this.sort = sort;
        this.type = DaffCategoryActionTypes.ChangeCategorySortingOptionAction;
    }
    return DaffChangeCategorySortingOption;
}());
/**
 * An action for changing the sorting option for the selected category.
 *
 * @param sort - The sort option to be applied.
 */
export { DaffChangeCategorySortingOption };
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
var /**
 * An action for changing the filters for the selected category.
 *
 * @param filters - Filters to be applied to the selected category.
 */
DaffChangeCategoryFilters = /** @class */ (function () {
    function DaffChangeCategoryFilters(filters) {
        this.filters = filters;
        this.type = DaffCategoryActionTypes.ChangeCategoryFiltersAction;
    }
    return DaffChangeCategoryFilters;
}());
/**
 * An action for changing the filters for the selected category.
 *
 * @param filters - Filters to be applied to the selected category.
 */
export { DaffChangeCategoryFilters };
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
var /**
 * An action for toggling a filters for the selected category.
 *
 * @param filter - Filter to be toggle on the selected category.
 */
DaffToggleCategoryFilter = /** @class */ (function () {
    function DaffToggleCategoryFilter(filter) {
        this.filter = filter;
        this.type = DaffCategoryActionTypes.ToggleCategoryFilterAction;
    }
    return DaffToggleCategoryFilter;
}());
/**
 * An action for toggling a filters for the selected category.
 *
 * @param filter - Filter to be toggle on the selected category.
 */
export { DaffToggleCategoryFilter };
if (false) {
    /** @type {?} */
    DaffToggleCategoryFilter.prototype.type;
    /** @type {?} */
    DaffToggleCategoryFilter.prototype.filter;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2F0ZWdvcnkuYWN0aW9ucy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkYWZmb2RpbC9jYXRlZ29yeS8iLCJzb3VyY2VzIjpbImFjdGlvbnMvY2F0ZWdvcnkuYWN0aW9ucy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7SUFZRSxvQkFBcUIsc0NBQXNDO0lBQzNELDJCQUE0Qiw4Q0FBOEM7SUFDMUUsMkJBQTRCLDhDQUE4QztJQUMxRSx3QkFBeUIsMkNBQTJDO0lBQ3BFLCtCQUFnQyxtREFBbUQ7SUFDbkYsK0JBQWdDLG1EQUFtRDtJQUNuRiw4QkFBK0Isa0RBQWtEO0lBQ2pGLGlDQUFrQyxxREFBcUQ7SUFDdkYsbUNBQW9DLHVEQUF1RDtJQUM1Riw2QkFBOEIsZ0RBQWdEO0lBQzlFLDRCQUE2QiwrQ0FBK0M7Ozs7Ozs7OztBQVE3RTs7Ozs7OztJQUdFLDBCQUFtQixPQUFVO1FBQVYsWUFBTyxHQUFQLE9BQU8sQ0FBRztRQUZwQixTQUFJLEdBQUcsdUJBQXVCLENBQUMsa0JBQWtCLENBQUM7SUFFMUIsQ0FBQztJQUNwQyx1QkFBQztBQUFELENBQUMsQUFKRCxJQUlDOzs7Ozs7Ozs7O0lBSEMsZ0NBQTJEOztJQUUvQyxtQ0FBaUI7Ozs7Ozs7O0FBUS9COzs7Ozs7O0lBUUUsaUNBQW1CLFFBQTZDO1FBQTdDLGFBQVEsR0FBUixRQUFRLENBQXFDO1FBRnZELFNBQUksR0FBRyx1QkFBdUIsQ0FBQyx5QkFBeUIsQ0FBQztJQUVFLENBQUM7SUFDdkUsOEJBQUM7QUFBRCxDQUFDLEFBVEQsSUFTQzs7Ozs7Ozs7OztJQUhDLHVDQUFrRTs7SUFFdEQsMkNBQW9EOzs7Ozs7O0FBUWxFOzs7Ozs7SUFHRSxpQ0FBbUIsWUFBb0I7UUFBcEIsaUJBQVksR0FBWixZQUFZLENBQVE7UUFGOUIsU0FBSSxHQUFHLHVCQUF1QixDQUFDLHlCQUF5QixDQUFDO0lBRXZCLENBQUM7SUFDOUMsOEJBQUM7QUFBRCxDQUFDLEFBSkQsSUFJQzs7Ozs7Ozs7O0lBSEMsdUNBQWtFOztJQUV0RCwrQ0FBMkI7Ozs7Ozs7OztBQVN6Qzs7Ozs7Ozs7SUFHRSw4QkFBbUIsT0FBVTtRQUFWLFlBQU8sR0FBUCxPQUFPLENBQUc7UUFGcEIsU0FBSSxHQUFHLHVCQUF1QixDQUFDLHNCQUFzQixDQUFDO0lBRTlCLENBQUM7SUFDcEMsMkJBQUM7QUFBRCxDQUFDLEFBSkQsSUFJQzs7Ozs7Ozs7Ozs7SUFIQyxvQ0FBK0Q7O0lBRW5ELHVDQUFpQjs7Ozs7Ozs7QUFRL0I7Ozs7Ozs7SUFRRSxxQ0FBbUIsUUFBNkM7UUFBN0MsYUFBUSxHQUFSLFFBQVEsQ0FBcUM7UUFGdkQsU0FBSSxHQUFHLHVCQUF1QixDQUFDLDZCQUE2QixDQUFDO0lBRUYsQ0FBQztJQUN2RSxrQ0FBQztBQUFELENBQUMsQUFURCxJQVNDOzs7Ozs7Ozs7O0lBSEMsMkNBQXNFOztJQUUxRCwrQ0FBb0Q7Ozs7Ozs7QUFRbEU7Ozs7OztJQUdFLHFDQUFtQixZQUFvQjtRQUFwQixpQkFBWSxHQUFaLFlBQVksQ0FBUTtRQUY5QixTQUFJLEdBQUcsdUJBQXVCLENBQUMsNkJBQTZCLENBQUM7SUFFM0IsQ0FBQztJQUM5QyxrQ0FBQztBQUFELENBQUMsQUFKRCxJQUlDOzs7Ozs7Ozs7SUFIQywyQ0FBc0U7O0lBRTFELG1EQUEyQjs7Ozs7OztBQVF6Qzs7Ozs7O0lBR0Usb0NBQW1CLFFBQWdCO1FBQWhCLGFBQVEsR0FBUixRQUFRLENBQVE7UUFGMUIsU0FBSSxHQUFHLHVCQUF1QixDQUFDLDRCQUE0QixDQUFDO0lBRTlCLENBQUM7SUFDMUMsaUNBQUM7QUFBRCxDQUFDLEFBSkQsSUFJQzs7Ozs7Ozs7O0lBSEMsMENBQXFFOztJQUV6RCw4Q0FBdUI7Ozs7Ozs7QUFRckM7Ozs7OztJQUdFLHVDQUFtQixXQUFtQjtRQUFuQixnQkFBVyxHQUFYLFdBQVcsQ0FBUTtRQUY3QixTQUFJLEdBQUcsdUJBQXVCLENBQUMsK0JBQStCLENBQUM7SUFFOUIsQ0FBQztJQUM3QyxvQ0FBQztBQUFELENBQUMsQUFKRCxJQUlDOzs7Ozs7Ozs7SUFIQyw2Q0FBd0U7O0lBRTVELG9EQUEwQjs7Ozs7OztBQVF4Qzs7Ozs7O0lBR0UseUNBQ08sSUFHTjtRQUhNLFNBQUksR0FBSixJQUFJLENBR1Y7UUFOUSxTQUFJLEdBQUcsdUJBQXVCLENBQUMsaUNBQWlDLENBQUM7SUFPdkUsQ0FBQztJQUNOLHNDQUFDO0FBQUQsQ0FBQyxBQVRELElBU0M7Ozs7Ozs7OztJQVJDLCtDQUEwRTs7SUFHMUUsK0NBR0M7Ozs7Ozs7QUFTSDs7Ozs7O0lBR0UsbUNBQW1CLE9BQW9DO1FBQXBDLFlBQU8sR0FBUCxPQUFPLENBQTZCO1FBRjlDLFNBQUksR0FBRyx1QkFBdUIsQ0FBQywyQkFBMkIsQ0FBQztJQUVULENBQUM7SUFDOUQsZ0NBQUM7QUFBRCxDQUFDLEFBSkQsSUFJQzs7Ozs7Ozs7O0lBSEMseUNBQW9FOztJQUV4RCw0Q0FBMkM7Ozs7Ozs7QUFRekQ7Ozs7OztJQUdFLGtDQUFtQixNQUF1QztRQUF2QyxXQUFNLEdBQU4sTUFBTSxDQUFpQztRQUZqRCxTQUFJLEdBQUcsdUJBQXVCLENBQUMsMEJBQTBCLENBQUM7SUFFTCxDQUFDO0lBQ2pFLCtCQUFDO0FBQUQsQ0FBQyxBQUpELElBSUM7Ozs7Ozs7OztJQUhDLHdDQUFtRTs7SUFFdkQsMENBQThDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWN0aW9uIH0gZnJvbSAnQG5ncngvc3RvcmUnO1xuXG5pbXBvcnQgeyBEYWZmUHJvZHVjdCB9IGZyb20gJ0BkYWZmb2RpbC9wcm9kdWN0JztcblxuaW1wb3J0IHsgRGFmZkdldENhdGVnb3J5UmVzcG9uc2UgfSBmcm9tICcuLi9tb2RlbHMvZ2V0LWNhdGVnb3J5LXJlc3BvbnNlJztcbmltcG9ydCB7IERhZmZDYXRlZ29yeVJlcXVlc3QgfSBmcm9tICcuLi9tb2RlbHMvcmVxdWVzdHMvY2F0ZWdvcnktcmVxdWVzdCc7XG5pbXBvcnQgeyBEYWZmQ2F0ZWdvcnlGaWx0ZXJSZXF1ZXN0LCBEYWZmVG9nZ2xlQ2F0ZWdvcnlGaWx0ZXJSZXF1ZXN0IH0gZnJvbSAnLi4vbW9kZWxzL3JlcXVlc3RzL2ZpbHRlci1yZXF1ZXN0JztcbmltcG9ydCB7IERhZmZDYXRlZ29yeVBhZ2VDb25maWd1cmF0aW9uU3RhdGUgfSBmcm9tICcuLi9tb2RlbHMvY2F0ZWdvcnktcGFnZS1jb25maWd1cmF0aW9uLXN0YXRlJztcbmltcG9ydCB7IERhZmZHZW5lcmljQ2F0ZWdvcnkgfSBmcm9tICcuLi9tb2RlbHMvZ2VuZXJpYy1jYXRlZ29yeSc7XG5pbXBvcnQgeyBEYWZmQ2F0ZWdvcnkgfSBmcm9tICcuLi9tb2RlbHMvY2F0ZWdvcnknO1xuXG5leHBvcnQgZW51bSBEYWZmQ2F0ZWdvcnlBY3Rpb25UeXBlcyB7XG4gIENhdGVnb3J5TG9hZEFjdGlvbiA9ICdbRGFmZi1DYXRlZ29yeV0gQ2F0ZWdvcnkgTG9hZCBBY3Rpb24nLFxuICBDYXRlZ29yeUxvYWRTdWNjZXNzQWN0aW9uID0gJ1tEYWZmLUNhdGVnb3J5XSBDYXRlZ29yeSBMb2FkIFN1Y2Nlc3MgQWN0aW9uJyxcbiAgQ2F0ZWdvcnlMb2FkRmFpbHVyZUFjdGlvbiA9ICdbRGFmZi1DYXRlZ29yeV0gQ2F0ZWdvcnkgTG9hZCBGYWlsdXJlIEFjdGlvbicsXG4gIENhdGVnb3J5UGFnZUxvYWRBY3Rpb24gPSAnW0RhZmYtQ2F0ZWdvcnldIENhdGVnb3J5IFBhZ2UgTG9hZCBBY3Rpb24nLFxuICBDYXRlZ29yeVBhZ2VMb2FkU3VjY2Vzc0FjdGlvbiA9ICdbRGFmZi1DYXRlZ29yeV0gQ2F0ZWdvcnkgUGFnZSBMb2FkIFN1Y2Nlc3MgQWN0aW9uJyxcbiAgQ2F0ZWdvcnlQYWdlTG9hZEZhaWx1cmVBY3Rpb24gPSAnW0RhZmYtQ2F0ZWdvcnldIENhdGVnb3J5IFBhZ2UgTG9hZCBGYWlsdXJlIEFjdGlvbicsXG4gIENoYW5nZUNhdGVnb3J5UGFnZVNpemVBY3Rpb24gPSAnW0RhZmYtQ2F0ZWdvcnldIENoYW5nZSBDYXRlZ29yeSBQYWdlIFNpemUgQWN0aW9uJyxcbiAgQ2hhbmdlQ2F0ZWdvcnlDdXJyZW50UGFnZUFjdGlvbiA9ICdbRGFmZi1DYXRlZ29yeV0gQ2hhbmdlIENhdGVnb3J5IEN1cnJlbnQgUGFnZSBBY3Rpb24nLFxuICBDaGFuZ2VDYXRlZ29yeVNvcnRpbmdPcHRpb25BY3Rpb24gPSAnW0RhZmYtQ2F0ZWdvcnldIENoYW5nZSBDYXRlZ29yeSBTb3J0aW5nIE9wdGlvbiBBY3Rpb24nLFxuXHRDaGFuZ2VDYXRlZ29yeUZpbHRlcnNBY3Rpb24gPSAnW0RhZmYtQ2F0ZWdvcnldIENoYW5nZSBDYXRlZ29yeSBGaWx0ZXJzIEFjdGlvbicsXG5cdFRvZ2dsZUNhdGVnb3J5RmlsdGVyQWN0aW9uID0gJ1tEYWZmLUNhdGVnb3J5XSBUb2dnbGUgQ2F0ZWdvcnkgRmlsdGVyIEFjdGlvbidcbn1cblxuLyoqXG4gKiBBbiBhY3Rpb24gdHJpZ2dlcmVkIHRvIGluaXRpYWxpemUgYSBjYXRlZ29yeSBsb2FkIHJlcXVlc3QuXG4gKlxuICogQHBhcmFtIHJlcXVlc3QgLSBEYWZmQ2F0ZWdvcnlSZXF1ZXN0IG9iamVjdFxuICovXG5leHBvcnQgY2xhc3MgRGFmZkNhdGVnb3J5TG9hZDxUIGV4dGVuZHMgRGFmZkNhdGVnb3J5UmVxdWVzdCA9IERhZmZDYXRlZ29yeVJlcXVlc3Q+IGltcGxlbWVudHMgQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IERhZmZDYXRlZ29yeUFjdGlvblR5cGVzLkNhdGVnb3J5TG9hZEFjdGlvbjtcblxuICBjb25zdHJ1Y3RvcihwdWJsaWMgcmVxdWVzdDogVCkgeyB9XG59XG5cbi8qKlxuICogQW4gYWN0aW9uIHRyaWdnZXJlZCB1cG9uIGEgc3VjY2Vzc2Z1bCBjYXRlZ29yeSByZXF1ZXN0LlxuICpcbiAqIEBwYXJhbSByZXNwb25zZSAtIERhZmZHZXRDYXRlZ29yeVJlc3BvbnNlIG9iamVjdFxuICovXG5leHBvcnQgY2xhc3MgRGFmZkNhdGVnb3J5TG9hZFN1Y2Nlc3M8XG5cdFQgZXh0ZW5kcyBEYWZmQ2F0ZWdvcnlSZXF1ZXN0ID0gRGFmZkNhdGVnb3J5UmVxdWVzdCxcblx0ViBleHRlbmRzIERhZmZHZW5lcmljQ2F0ZWdvcnk8Vj4gPSBEYWZmQ2F0ZWdvcnksXG5cdFUgZXh0ZW5kcyBEYWZmQ2F0ZWdvcnlQYWdlQ29uZmlndXJhdGlvblN0YXRlPFQ+ID0gRGFmZkNhdGVnb3J5UGFnZUNvbmZpZ3VyYXRpb25TdGF0ZTxUPixcblx0VyBleHRlbmRzIERhZmZQcm9kdWN0ID0gRGFmZlByb2R1Y3Rcbj4gaW1wbGVtZW50cyBBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gRGFmZkNhdGVnb3J5QWN0aW9uVHlwZXMuQ2F0ZWdvcnlMb2FkU3VjY2Vzc0FjdGlvbjtcblxuICBjb25zdHJ1Y3RvcihwdWJsaWMgcmVzcG9uc2U6IERhZmZHZXRDYXRlZ29yeVJlc3BvbnNlPFQsIFYsIFUsIFc+KSB7IH1cbn1cblxuLyoqXG4gKiBBbiBhY3Rpb24gdHJpZ2dlcmVkIHVwb24gYSBmYWlsZWQgY2F0ZWdvcnkgcmVxdWVzdC5cbiAqXG4gKiBAcGFyYW0gZXJyb3JNZXNzYWdlIC0gYW4gZXJyb3IgbWVzc2FnZVxuICovXG5leHBvcnQgY2xhc3MgRGFmZkNhdGVnb3J5TG9hZEZhaWx1cmUgaW1wbGVtZW50cyBBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gRGFmZkNhdGVnb3J5QWN0aW9uVHlwZXMuQ2F0ZWdvcnlMb2FkRmFpbHVyZUFjdGlvbjtcblxuICBjb25zdHJ1Y3RvcihwdWJsaWMgZXJyb3JNZXNzYWdlOiBzdHJpbmcpIHsgfVxufVxuXG4vKipcbiAqIEFuIGFjdGlvbiB0cmlnZ2VyZWQgdG8gaW5pdGlhbGl6ZSBhIGNhdGVnb3J5IHBhZ2UgbG9hZCByZXF1ZXN0LlxuICogVGhpcyBpcyBpbnRlbmRlZCB0byBiZSB1c2VkIGZvciBsb2FkaW5nIGZ1bGwgY2F0ZWdvcnkgcGFnZXMuXG4gKlxuICogQHBhcmFtIHJlcXVlc3QgLSBEYWZmQ2F0ZWdvcnlSZXF1ZXN0IG9iamVjdFxuICovXG5leHBvcnQgY2xhc3MgRGFmZkNhdGVnb3J5UGFnZUxvYWQ8VCBleHRlbmRzIERhZmZDYXRlZ29yeVJlcXVlc3QgPSBEYWZmQ2F0ZWdvcnlSZXF1ZXN0PiBpbXBsZW1lbnRzIEFjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBEYWZmQ2F0ZWdvcnlBY3Rpb25UeXBlcy5DYXRlZ29yeVBhZ2VMb2FkQWN0aW9uO1xuXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyByZXF1ZXN0OiBUKSB7IH1cbn1cblxuLyoqXG4gKiBBbiBhY3Rpb24gdHJpZ2dlcmVkIHVwb24gYSBzdWNjZXNzZnVsIGNhdGVnb3J5IHBhZ2UgcmVxdWVzdC5cbiAqXG4gKiBAcGFyYW0gcmVzcG9uc2UgLSBEYWZmR2V0Q2F0ZWdvcnlSZXNwb25zZSBvYmplY3RcbiAqL1xuZXhwb3J0IGNsYXNzIERhZmZDYXRlZ29yeVBhZ2VMb2FkU3VjY2Vzczxcblx0VCBleHRlbmRzIERhZmZDYXRlZ29yeVJlcXVlc3QgPSBEYWZmQ2F0ZWdvcnlSZXF1ZXN0LFxuXHRWIGV4dGVuZHMgRGFmZkdlbmVyaWNDYXRlZ29yeTxWPiA9IERhZmZDYXRlZ29yeSxcblx0VSBleHRlbmRzIERhZmZDYXRlZ29yeVBhZ2VDb25maWd1cmF0aW9uU3RhdGU8VD4gPSBEYWZmQ2F0ZWdvcnlQYWdlQ29uZmlndXJhdGlvblN0YXRlPFQ+LFxuXHRXIGV4dGVuZHMgRGFmZlByb2R1Y3QgPSBEYWZmUHJvZHVjdFxuPiBpbXBsZW1lbnRzIEFjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBEYWZmQ2F0ZWdvcnlBY3Rpb25UeXBlcy5DYXRlZ29yeVBhZ2VMb2FkU3VjY2Vzc0FjdGlvbjtcblxuICBjb25zdHJ1Y3RvcihwdWJsaWMgcmVzcG9uc2U6IERhZmZHZXRDYXRlZ29yeVJlc3BvbnNlPFQsIFYsIFUsIFc+KSB7IH1cbn1cblxuLyoqXG4gKiBBbiBhY3Rpb24gdHJpZ2dlcmVkIHVwb24gYSBmYWlsZWQgY2F0ZWdvcnkgcGFnZSByZXF1ZXN0LlxuICpcbiAqIEBwYXJhbSBlcnJvck1lc3NhZ2UgLSBhbiBlcnJvciBtZXNzYWdlXG4gKi9cbmV4cG9ydCBjbGFzcyBEYWZmQ2F0ZWdvcnlQYWdlTG9hZEZhaWx1cmUgaW1wbGVtZW50cyBBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gRGFmZkNhdGVnb3J5QWN0aW9uVHlwZXMuQ2F0ZWdvcnlQYWdlTG9hZEZhaWx1cmVBY3Rpb247XG5cbiAgY29uc3RydWN0b3IocHVibGljIGVycm9yTWVzc2FnZTogc3RyaW5nKSB7IH1cbn1cblxuLyoqXG4gKiBBbiBhY3Rpb24gZm9yIGNoYW5naW5nIHRoZSBudW1iZXIgb2YgcHJvZHVjdHMgc2hvd24gb24gZWFjaCBwYWdlIGZvciB0aGUgc2VsZWN0ZWQgY2F0ZWdvcnkuXG4gKlxuICogQHBhcmFtIHBhZ2VTaXplIC0gVGhlIG51bWJlciBvZiBwcm9kdWN0cyBwZXIgcGFnZS5cbiAqL1xuZXhwb3J0IGNsYXNzIERhZmZDaGFuZ2VDYXRlZ29yeVBhZ2VTaXplIGltcGxlbWVudHMgQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IERhZmZDYXRlZ29yeUFjdGlvblR5cGVzLkNoYW5nZUNhdGVnb3J5UGFnZVNpemVBY3Rpb247XG5cbiAgY29uc3RydWN0b3IocHVibGljIHBhZ2VTaXplOiBudW1iZXIpIHsgfVxufVxuXG4vKipcbiAqIEFuIGFjdGlvbiBmb3IgY2hhbmdpbmcgdGhlIGN1cnJlbnQgcGFnZSBvZiBwcm9kdWN0cyBmb3IgdGhlIHNlbGVjdGVkIGNhdGVnb3J5LlxuICpcbiAqIEBwYXJhbSBjdXJyZW50UGFnZSAtIFRoZSBjdXJyZW50IHBhZ2Ugb2YgcHJvZHVjdHMgZm9yIHRoZSBzZWxlY3RlZCBjYXRlZ29yeS5cbiAqL1xuZXhwb3J0IGNsYXNzIERhZmZDaGFuZ2VDYXRlZ29yeUN1cnJlbnRQYWdlIGltcGxlbWVudHMgQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IERhZmZDYXRlZ29yeUFjdGlvblR5cGVzLkNoYW5nZUNhdGVnb3J5Q3VycmVudFBhZ2VBY3Rpb247XG5cbiAgY29uc3RydWN0b3IocHVibGljIGN1cnJlbnRQYWdlOiBudW1iZXIpIHsgfVxufVxuXG4vKipcbiAqIEFuIGFjdGlvbiBmb3IgY2hhbmdpbmcgdGhlIHNvcnRpbmcgb3B0aW9uIGZvciB0aGUgc2VsZWN0ZWQgY2F0ZWdvcnkuXG4gKlxuICogQHBhcmFtIHNvcnQgLSBUaGUgc29ydCBvcHRpb24gdG8gYmUgYXBwbGllZC5cbiAqL1xuZXhwb3J0IGNsYXNzIERhZmZDaGFuZ2VDYXRlZ29yeVNvcnRpbmdPcHRpb24gaW1wbGVtZW50cyBBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gRGFmZkNhdGVnb3J5QWN0aW9uVHlwZXMuQ2hhbmdlQ2F0ZWdvcnlTb3J0aW5nT3B0aW9uQWN0aW9uO1xuXG4gIGNvbnN0cnVjdG9yKFxuXHRcdHB1YmxpYyBzb3J0OiB7XG5cdFx0XHRvcHRpb246IERhZmZDYXRlZ29yeVJlcXVlc3RbJ2FwcGxpZWRfc29ydF9vcHRpb24nXSxcblx0XHRcdGRpcmVjdGlvbjogRGFmZkNhdGVnb3J5UmVxdWVzdFsnYXBwbGllZF9zb3J0X2RpcmVjdGlvbiddXG5cdFx0fVxuXHQpIHsgfVxufVxuXG4vKipcbiAqIEFuIGFjdGlvbiBmb3IgY2hhbmdpbmcgdGhlIGZpbHRlcnMgZm9yIHRoZSBzZWxlY3RlZCBjYXRlZ29yeS5cbiAqXG4gKiBAcGFyYW0gZmlsdGVycyAtIEZpbHRlcnMgdG8gYmUgYXBwbGllZCB0byB0aGUgc2VsZWN0ZWQgY2F0ZWdvcnkuXG4gKi9cbmV4cG9ydCBjbGFzcyBEYWZmQ2hhbmdlQ2F0ZWdvcnlGaWx0ZXJzIGltcGxlbWVudHMgQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IERhZmZDYXRlZ29yeUFjdGlvblR5cGVzLkNoYW5nZUNhdGVnb3J5RmlsdGVyc0FjdGlvbjtcblxuICBjb25zdHJ1Y3RvcihwdWJsaWMgZmlsdGVyczogRGFmZkNhdGVnb3J5RmlsdGVyUmVxdWVzdFtdKSB7IH1cbn1cblxuLyoqXG4gKiBBbiBhY3Rpb24gZm9yIHRvZ2dsaW5nIGEgZmlsdGVycyBmb3IgdGhlIHNlbGVjdGVkIGNhdGVnb3J5LlxuICpcbiAqIEBwYXJhbSBmaWx0ZXIgLSBGaWx0ZXIgdG8gYmUgdG9nZ2xlIG9uIHRoZSBzZWxlY3RlZCBjYXRlZ29yeS5cbiAqL1xuZXhwb3J0IGNsYXNzIERhZmZUb2dnbGVDYXRlZ29yeUZpbHRlciBpbXBsZW1lbnRzIEFjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBEYWZmQ2F0ZWdvcnlBY3Rpb25UeXBlcy5Ub2dnbGVDYXRlZ29yeUZpbHRlckFjdGlvbjtcblxuICBjb25zdHJ1Y3RvcihwdWJsaWMgZmlsdGVyOiBEYWZmVG9nZ2xlQ2F0ZWdvcnlGaWx0ZXJSZXF1ZXN0KSB7IH1cbn1cblxuZXhwb3J0IHR5cGUgRGFmZkNhdGVnb3J5QWN0aW9uczxcblx0VCBleHRlbmRzIERhZmZDYXRlZ29yeVJlcXVlc3QgPSBEYWZmQ2F0ZWdvcnlSZXF1ZXN0LFxuXHRVIGV4dGVuZHMgRGFmZkdlbmVyaWNDYXRlZ29yeTxVPiA9IERhZmZDYXRlZ29yeSxcblx0ViBleHRlbmRzIERhZmZDYXRlZ29yeVBhZ2VDb25maWd1cmF0aW9uU3RhdGU8VD4gPSBEYWZmQ2F0ZWdvcnlQYWdlQ29uZmlndXJhdGlvblN0YXRlPFQ+LFxuXHRXIGV4dGVuZHMgRGFmZlByb2R1Y3QgPSBEYWZmUHJvZHVjdFxuPiA9XG4gIHwgRGFmZkNhdGVnb3J5TG9hZDxUPlxuICB8IERhZmZDYXRlZ29yeUxvYWRTdWNjZXNzPFQsIFUsIFYsIFc+XG4gIHwgRGFmZkNhdGVnb3J5TG9hZEZhaWx1cmVcbiAgfCBEYWZmQ2F0ZWdvcnlQYWdlTG9hZDxUPlxuICB8IERhZmZDYXRlZ29yeVBhZ2VMb2FkU3VjY2VzczxULCBVLCBWLCBXPlxuICB8IERhZmZDYXRlZ29yeVBhZ2VMb2FkRmFpbHVyZVxuXHR8IERhZmZDaGFuZ2VDYXRlZ29yeVBhZ2VTaXplXG5cdHwgRGFmZkNoYW5nZUNhdGVnb3J5Q3VycmVudFBhZ2VcbiAgfCBEYWZmQ2hhbmdlQ2F0ZWdvcnlTb3J0aW5nT3B0aW9uXG4gIHwgRGFmZkNoYW5nZUNhdGVnb3J5RmlsdGVyc1xuICB8IERhZmZUb2dnbGVDYXRlZ29yeUZpbHRlcjtcbiJdfQ==