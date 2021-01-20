import { Action } from '@ngrx/store';
import { DaffProduct } from '@daffodil/product';
import { DaffGetCategoryResponse } from '../models/get-category-response';
import { DaffCategoryRequest } from '../models/requests/category-request';
import { DaffCategoryFilterRequest, DaffToggleCategoryFilterRequest } from '../models/requests/filter-request';
import { DaffCategoryPageConfigurationState } from '../models/category-page-configuration-state';
import { DaffGenericCategory } from '../models/generic-category';
import { DaffCategory } from '../models/category';
export declare enum DaffCategoryActionTypes {
    CategoryLoadAction = "[Daff-Category] Category Load Action",
    CategoryLoadSuccessAction = "[Daff-Category] Category Load Success Action",
    CategoryLoadFailureAction = "[Daff-Category] Category Load Failure Action",
    CategoryPageLoadAction = "[Daff-Category] Category Page Load Action",
    CategoryPageLoadSuccessAction = "[Daff-Category] Category Page Load Success Action",
    CategoryPageLoadFailureAction = "[Daff-Category] Category Page Load Failure Action",
    ChangeCategoryPageSizeAction = "[Daff-Category] Change Category Page Size Action",
    ChangeCategoryCurrentPageAction = "[Daff-Category] Change Category Current Page Action",
    ChangeCategorySortingOptionAction = "[Daff-Category] Change Category Sorting Option Action",
    ChangeCategoryFiltersAction = "[Daff-Category] Change Category Filters Action",
    ToggleCategoryFilterAction = "[Daff-Category] Toggle Category Filter Action"
}
/**
 * An action triggered to initialize a category load request.
 *
 * @param request - DaffCategoryRequest object
 */
export declare class DaffCategoryLoad<T extends DaffCategoryRequest = DaffCategoryRequest> implements Action {
    request: T;
    readonly type = DaffCategoryActionTypes.CategoryLoadAction;
    constructor(request: T);
}
/**
 * An action triggered upon a successful category request.
 *
 * @param response - DaffGetCategoryResponse object
 */
export declare class DaffCategoryLoadSuccess<T extends DaffCategoryRequest = DaffCategoryRequest, V extends DaffGenericCategory<V> = DaffCategory, U extends DaffCategoryPageConfigurationState<T> = DaffCategoryPageConfigurationState<T>, W extends DaffProduct = DaffProduct> implements Action {
    response: DaffGetCategoryResponse<T, V, U, W>;
    readonly type = DaffCategoryActionTypes.CategoryLoadSuccessAction;
    constructor(response: DaffGetCategoryResponse<T, V, U, W>);
}
/**
 * An action triggered upon a failed category request.
 *
 * @param errorMessage - an error message
 */
export declare class DaffCategoryLoadFailure implements Action {
    errorMessage: string;
    readonly type = DaffCategoryActionTypes.CategoryLoadFailureAction;
    constructor(errorMessage: string);
}
/**
 * An action triggered to initialize a category page load request.
 * This is intended to be used for loading full category pages.
 *
 * @param request - DaffCategoryRequest object
 */
export declare class DaffCategoryPageLoad<T extends DaffCategoryRequest = DaffCategoryRequest> implements Action {
    request: T;
    readonly type = DaffCategoryActionTypes.CategoryPageLoadAction;
    constructor(request: T);
}
/**
 * An action triggered upon a successful category page request.
 *
 * @param response - DaffGetCategoryResponse object
 */
export declare class DaffCategoryPageLoadSuccess<T extends DaffCategoryRequest = DaffCategoryRequest, V extends DaffGenericCategory<V> = DaffCategory, U extends DaffCategoryPageConfigurationState<T> = DaffCategoryPageConfigurationState<T>, W extends DaffProduct = DaffProduct> implements Action {
    response: DaffGetCategoryResponse<T, V, U, W>;
    readonly type = DaffCategoryActionTypes.CategoryPageLoadSuccessAction;
    constructor(response: DaffGetCategoryResponse<T, V, U, W>);
}
/**
 * An action triggered upon a failed category page request.
 *
 * @param errorMessage - an error message
 */
export declare class DaffCategoryPageLoadFailure implements Action {
    errorMessage: string;
    readonly type = DaffCategoryActionTypes.CategoryPageLoadFailureAction;
    constructor(errorMessage: string);
}
/**
 * An action for changing the number of products shown on each page for the selected category.
 *
 * @param pageSize - The number of products per page.
 */
export declare class DaffChangeCategoryPageSize implements Action {
    pageSize: number;
    readonly type = DaffCategoryActionTypes.ChangeCategoryPageSizeAction;
    constructor(pageSize: number);
}
/**
 * An action for changing the current page of products for the selected category.
 *
 * @param currentPage - The current page of products for the selected category.
 */
export declare class DaffChangeCategoryCurrentPage implements Action {
    currentPage: number;
    readonly type = DaffCategoryActionTypes.ChangeCategoryCurrentPageAction;
    constructor(currentPage: number);
}
/**
 * An action for changing the sorting option for the selected category.
 *
 * @param sort - The sort option to be applied.
 */
export declare class DaffChangeCategorySortingOption implements Action {
    sort: {
        option: DaffCategoryRequest['applied_sort_option'];
        direction: DaffCategoryRequest['applied_sort_direction'];
    };
    readonly type = DaffCategoryActionTypes.ChangeCategorySortingOptionAction;
    constructor(sort: {
        option: DaffCategoryRequest['applied_sort_option'];
        direction: DaffCategoryRequest['applied_sort_direction'];
    });
}
/**
 * An action for changing the filters for the selected category.
 *
 * @param filters - Filters to be applied to the selected category.
 */
export declare class DaffChangeCategoryFilters implements Action {
    filters: DaffCategoryFilterRequest[];
    readonly type = DaffCategoryActionTypes.ChangeCategoryFiltersAction;
    constructor(filters: DaffCategoryFilterRequest[]);
}
/**
 * An action for toggling a filters for the selected category.
 *
 * @param filter - Filter to be toggle on the selected category.
 */
export declare class DaffToggleCategoryFilter implements Action {
    filter: DaffToggleCategoryFilterRequest;
    readonly type = DaffCategoryActionTypes.ToggleCategoryFilterAction;
    constructor(filter: DaffToggleCategoryFilterRequest);
}
export declare type DaffCategoryActions<T extends DaffCategoryRequest = DaffCategoryRequest, U extends DaffGenericCategory<U> = DaffCategory, V extends DaffCategoryPageConfigurationState<T> = DaffCategoryPageConfigurationState<T>, W extends DaffProduct = DaffProduct> = DaffCategoryLoad<T> | DaffCategoryLoadSuccess<T, U, V, W> | DaffCategoryLoadFailure | DaffCategoryPageLoad<T> | DaffCategoryPageLoadSuccess<T, U, V, W> | DaffCategoryPageLoadFailure | DaffChangeCategoryPageSize | DaffChangeCategoryCurrentPage | DaffChangeCategorySortingOption | DaffChangeCategoryFilters | DaffToggleCategoryFilter;
