import { __assign, __decorate, __metadata, __read, __makeTemplateObject, __spread } from 'tslib';
import { createEntityAdapter } from '@ngrx/entity';
import { InjectionToken, Injectable, Inject, PLATFORM_ID, ɵɵdefineInjectable, ɵɵinject, NgModule } from '@angular/core';
import { Store, ActionsSubject, createFeatureSelector, createSelector, select, StoreModule } from '@ngrx/store';
import { isPlatformBrowser, CommonModule } from '@angular/common';
import { ofType, Actions, Effect, EffectsModule } from '@ngrx/effects';
import { switchMap, catchError, mapTo, take, withLatestFrom, map } from 'rxjs/operators';
import { of, Observable, combineLatest } from 'rxjs';
import { DaffProductGridLoadSuccess, getDaffProductSelectors, DaffProductModule, magentoProductFragment, transformManyMagentoProducts } from '@daffodil/product';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';

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
/**
 * An action triggered to initialize a category load request.
 *
 * @param request - DaffCategoryRequest object
 * @template T
 */
var  /**
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
var  /**
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
var  /**
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
var  /**
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
var  /**
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
var  /**
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
var  /**
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
var  /**
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
var  /**
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
var  /**
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
var  /**
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
if (false) {
    /** @type {?} */
    DaffToggleCategoryFilter.prototype.type;
    /** @type {?} */
    DaffToggleCategoryFilter.prototype.filter;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @enum {string} */
var DaffCategoryFilterType = {
    Match: 'match',
    Equal: 'equal',
    Range: 'range',
};
/**
 * @record
 */
function DaffCategoryFilterBase() { }
if (false) {
    /** @type {?} */
    DaffCategoryFilterBase.prototype.label;
    /** @type {?} */
    DaffCategoryFilterBase.prototype.name;
    /** @type {?} */
    DaffCategoryFilterBase.prototype.type;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @param {?} name
 * @param {?} appliedFilters
 * @return {?}
 */
function getAppliedFilterByName(name, appliedFilters) {
    return appliedFilters.filter((/**
     * @param {?} filter
     * @return {?}
     */
    function (filter) { return filter.name === name; })).shift();
}
/**
 * @param {?} toggledFilter
 * @param {?} appliedFilters
 * @return {?}
 */
function toggledFilterNameExists(toggledFilter, appliedFilters) {
    return appliedFilters && !!appliedFilters.find((/**
     * @param {?} filter
     * @return {?}
     */
    function (filter) { return filter.name === toggledFilter.name; }));
}
/**
 * @param {?} toggledFilter
 * @param {?} appliedFilters
 * @return {?}
 */
function addToExistingFilter(toggledFilter, appliedFilters) {
    return appliedFilters.map((/**
     * @param {?} filter
     * @return {?}
     */
    function (filter) {
        if (filter.name === toggledFilter.name) {
            ((/** @type {?} */ (filter))).value.push(toggledFilter.value);
        }
        return filter;
    }));
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @param {?} toggledFilter
 * @param {?} appliedFilters
 * @return {?}
 */
function isEqualFilterApplied(toggledFilter, appliedFilters) {
    /** @type {?} */
    var filterMatchingName = (/** @type {?} */ (getAppliedFilterByName(toggledFilter.name, appliedFilters)));
    if (filterMatchingName) {
        return !!filterMatchingName.value.filter((/**
         * @param {?} filterValue
         * @return {?}
         */
        function (filterValue) { return filterValue === toggledFilter.value; })).length;
    }
    else
        return false;
}
/**
 * @param {?} toggledFilter
 * @param {?} appliedFilters
 * @return {?}
 */
function removeEqualFilter(toggledFilter, appliedFilters) {
    return appliedFilters.map((/**
     * @param {?} appliedFilter
     * @return {?}
     */
    function (appliedFilter) {
        if (appliedFilter.name === toggledFilter.name) {
            appliedFilter.value = ((/** @type {?} */ (appliedFilter))).value.filter((/**
             * @param {?} value
             * @return {?}
             */
            function (value) { return value !== toggledFilter.value; }));
        }
        return appliedFilter;
    })).filter((/**
     * @param {?} filter
     * @return {?}
     */
    function (filter) { return filter.type === DaffCategoryFilterType.Match || filter.value.length !== 0; }));
}
/**
 * @param {?} toggledFilter
 * @param {?} appliedFilters
 * @return {?}
 */
function addEqualFilter(toggledFilter, appliedFilters) {
    return toggledFilterNameExists(toggledFilter, appliedFilters) ?
        addToExistingFilter(toggledFilter, appliedFilters) :
        addNewEqualFilter(toggledFilter, appliedFilters);
}
/**
 * @param {?} toggledFilter
 * @param {?} appliedFilters
 * @return {?}
 */
function addNewEqualFilter(toggledFilter, appliedFilters) {
    return appliedFilters.concat([{
            name: toggledFilter.name,
            value: [toggledFilter.value],
            type: DaffCategoryFilterType.Equal
        }]);
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @param {?} toggledFilter
 * @param {?} appliedFilters
 * @return {?}
 */
function isRangeFilterApplied(toggledFilter, appliedFilters) {
    /** @type {?} */
    var filterMatchingName = (/** @type {?} */ (getAppliedFilterByName(toggledFilter.name, appliedFilters)));
    if (filterMatchingName) {
        return !!filterMatchingName.value.filter((/**
         * @param {?} filterValue
         * @return {?}
         */
        function (filterValue) { return filterValue === toggledFilter.value; })).length;
    }
    else
        return false;
}
/**
 * @param {?} toggledFilter
 * @param {?} appliedFilters
 * @return {?}
 */
function removeRangeFilter(toggledFilter, appliedFilters) {
    return appliedFilters.map((/**
     * @param {?} appliedFilter
     * @return {?}
     */
    function (appliedFilter) {
        if (appliedFilter.name === toggledFilter.name) {
            appliedFilter.value = ((/** @type {?} */ (appliedFilter))).value.filter((/**
             * @param {?} value
             * @return {?}
             */
            function (value) { return value !== toggledFilter.value; }));
        }
        return appliedFilter;
    })).filter((/**
     * @param {?} filter
     * @return {?}
     */
    function (filter) { return filter.type === DaffCategoryFilterType.Match || filter.value.length !== 0; }));
}
/**
 * @param {?} toggledFilter
 * @param {?} appliedFilters
 * @return {?}
 */
function addRangeFilter(toggledFilter, appliedFilters) {
    return toggledFilterNameExists(toggledFilter, appliedFilters) ?
        addToExistingFilter(toggledFilter, appliedFilters) :
        addNewRangeFilter(toggledFilter, appliedFilters);
}
/**
 * @param {?} toggledFilter
 * @param {?} appliedFilters
 * @return {?}
 */
function addNewRangeFilter(toggledFilter, appliedFilters) {
    return appliedFilters.concat([{
            name: toggledFilter.name,
            value: [toggledFilter.value],
            type: DaffCategoryFilterType.Range
        }]);
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @param {?} toggledFilter
 * @param {?} appliedFilters
 * @return {?}
 */
function isMatchFilterApplied(toggledFilter, appliedFilters) {
    return !!getAppliedFilterByName(toggledFilter.name, appliedFilters);
}
/**
 * @param {?} filterName
 * @param {?} appliedFilters
 * @return {?}
 */
function removeMatchFilter(filterName, appliedFilters) {
    return appliedFilters.filter((/**
     * @param {?} filter
     * @return {?}
     */
    function (filter) { return filter.name !== filterName.name; }));
}
/**
 * @param {?} toggledFilter
 * @param {?} appliedFilters
 * @return {?}
 */
function addMatchFilter(toggledFilter, appliedFilters) {
    return appliedFilters.concat([{
            name: toggledFilter.name,
            value: toggledFilter.value,
            type: DaffCategoryFilterType.Match
        }]);
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @param {?} toggledFilter
 * @param {?} appliedFilters
 * @return {?}
 */
function toggleCategoryFilter(toggledFilter, appliedFilters) {
    return isFilterApplied(toggledFilter, appliedFilters)
        ? removeFilter(toggledFilter, appliedFilters)
        : addFilter(toggledFilter, appliedFilters);
}
/**
 * @param {?} toggledFilter
 * @param {?} appliedFilters
 * @return {?}
 */
function isFilterApplied(toggledFilter, appliedFilters) {
    switch (toggledFilter.type) {
        case (DaffCategoryFilterType.Equal):
            return isEqualFilterApplied(toggledFilter, appliedFilters);
        case (DaffCategoryFilterType.Range):
            return isRangeFilterApplied(toggledFilter, appliedFilters);
        default:
            return isMatchFilterApplied(toggledFilter, appliedFilters);
    }
}
/**
 * @param {?} toggledFilter
 * @param {?} appliedFilters
 * @return {?}
 */
function removeFilter(toggledFilter, appliedFilters) {
    switch (toggledFilter.type) {
        case (DaffCategoryFilterType.Equal):
            return removeEqualFilter(toggledFilter, appliedFilters);
        case (DaffCategoryFilterType.Range):
            return removeRangeFilter(toggledFilter, appliedFilters);
        default:
            return removeMatchFilter(toggledFilter, appliedFilters);
    }
}
/**
 * @param {?} toggledFilter
 * @param {?} appliedFilters
 * @return {?}
 */
function addFilter(toggledFilter, appliedFilters) {
    switch (toggledFilter.type) {
        case (DaffCategoryFilterType.Equal):
            return addEqualFilter(toggledFilter, appliedFilters);
        case (DaffCategoryFilterType.Range):
            return addRangeFilter(toggledFilter, appliedFilters);
        default:
            return addMatchFilter(toggledFilter, appliedFilters);
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var initialState = {
    categoryPageConfigurationState: {
        id: null,
        filter_requests: [],
        applied_sort_option: null,
        applied_sort_direction: null,
        current_page: null,
        page_size: null,
        total_pages: null,
        filters: [],
        sort_options: [],
        total_products: null,
        product_ids: []
    },
    categoryLoading: false,
    productsLoading: false,
    errors: []
};
/**
 * @template T, U, V, W
 * @param {?=} state
 * @param {?=} action
 * @return {?}
 */
function daffCategoryReducer(state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case DaffCategoryActionTypes.CategoryLoadAction:
            return __assign({}, state, { categoryLoading: true, productsLoading: true });
        // This reducer must assume the call will be successful, and immediately set the applied filters to state, because the
        // GetCategory magento call doesn't return currently applied filters. If there is a bug where the wrong filters are somehow
        // applied by Magento, then this will result in a bug. Until Magento returns applied filters with a category call, this is
        // unavoidable.
        case DaffCategoryActionTypes.CategoryPageLoadAction:
            return __assign({}, state, { categoryLoading: true, productsLoading: true, categoryPageConfigurationState: __assign({}, state.categoryPageConfigurationState, action.request) });
        case DaffCategoryActionTypes.ChangeCategoryPageSizeAction:
            return __assign({}, state, { productsLoading: true, categoryPageConfigurationState: __assign({}, state.categoryPageConfigurationState, { page_size: action.pageSize }) });
        case DaffCategoryActionTypes.ChangeCategoryCurrentPageAction:
            return __assign({}, state, { productsLoading: true, categoryPageConfigurationState: __assign({}, state.categoryPageConfigurationState, { current_page: action.currentPage }) });
        case DaffCategoryActionTypes.ChangeCategorySortingOptionAction:
            return __assign({}, state, { productsLoading: true, categoryPageConfigurationState: __assign({}, state.categoryPageConfigurationState, { applied_sort_option: action.sort.option, applied_sort_direction: action.sort.direction }) });
        case DaffCategoryActionTypes.ChangeCategoryFiltersAction:
            return __assign({}, state, { productsLoading: true, categoryPageConfigurationState: __assign({}, state.categoryPageConfigurationState, { filter_requests: action.filters }) });
        case DaffCategoryActionTypes.ToggleCategoryFilterAction:
            return __assign({}, state, { productsLoading: true, categoryPageConfigurationState: __assign({}, state.categoryPageConfigurationState, { filter_requests: toggleCategoryFilter(action.filter, state.categoryPageConfigurationState.filter_requests) }) });
        // This reducer cannot spread over state, because this would wipe out the applied filters on state. Applied filters are not
        // set here for reasons stated above.
        case DaffCategoryActionTypes.CategoryLoadSuccessAction:
        case DaffCategoryActionTypes.CategoryPageLoadSuccessAction:
            return __assign({}, state, { categoryLoading: false, productsLoading: false, categoryPageConfigurationState: __assign({}, state.categoryPageConfigurationState, { id: action.response.categoryPageConfigurationState.id, current_page: action.response.categoryPageConfigurationState.current_page, page_size: action.response.categoryPageConfigurationState.page_size, filters: action.response.categoryPageConfigurationState.filters, sort_options: action.response.categoryPageConfigurationState.sort_options, total_pages: action.response.categoryPageConfigurationState.total_pages, total_products: action.response.categoryPageConfigurationState.total_products, product_ids: action.response.categoryPageConfigurationState.product_ids }) });
        case DaffCategoryActionTypes.CategoryLoadFailureAction:
        case DaffCategoryActionTypes.CategoryPageLoadFailureAction:
            return __assign({}, state, { categoryLoading: false, productsLoading: false, errors: [action.errorMessage] });
        default:
            return state;
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @template T
 * @return {?}
 */
function daffCategoryEntitiesAdapter() {
    return createEntityAdapter();
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @template T, V, U, W
 * @param {?=} state
 * @param {?=} action
 * @return {?}
 */
function daffCategoryEntitiesReducer(state, action) {
    if (state === void 0) { state = daffCategoryEntitiesAdapter().getInitialState(); }
    switch (action.type) {
        case DaffCategoryActionTypes.CategoryLoadSuccessAction:
        case DaffCategoryActionTypes.CategoryPageLoadSuccessAction:
            return daffCategoryEntitiesAdapter().upsertOne(__assign({ id: action.response.category.id }, action.response.category), state);
        default:
            return state;
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var daffCategoryReducers = {
    category: daffCategoryReducer,
    categoryEntities: daffCategoryEntitiesReducer
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var DaffCategoryDriver = new InjectionToken('DaffCategoryDriver');

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * The separator between a range type filter's values
 * e.g. "price": "30-40"
 * @type {?}
 */
var DaffCategoryFromToFilterSeparator = '-';
/**
 * @record
 */
function DaffToggleCategoryFilterMatchRequest() { }
if (false) {
    /** @type {?} */
    DaffToggleCategoryFilterMatchRequest.prototype.type;
    /** @type {?} */
    DaffToggleCategoryFilterMatchRequest.prototype.name;
    /** @type {?} */
    DaffToggleCategoryFilterMatchRequest.prototype.value;
}
/**
 * @record
 */
function DaffToggleCategoryFilterEqualRequest() { }
if (false) {
    /** @type {?} */
    DaffToggleCategoryFilterEqualRequest.prototype.type;
    /** @type {?} */
    DaffToggleCategoryFilterEqualRequest.prototype.name;
    /** @type {?} */
    DaffToggleCategoryFilterEqualRequest.prototype.value;
}
/**
 * @record
 */
function DaffToggleCategoryFilterRangeRequest() { }
if (false) {
    /** @type {?} */
    DaffToggleCategoryFilterRangeRequest.prototype.type;
    /** @type {?} */
    DaffToggleCategoryFilterRangeRequest.prototype.name;
    /** @type {?} */
    DaffToggleCategoryFilterRangeRequest.prototype.value;
}
/**
 * @record
 */
function DaffCategoryFilterEqualRequest() { }
if (false) {
    /** @type {?} */
    DaffCategoryFilterEqualRequest.prototype.type;
    /** @type {?} */
    DaffCategoryFilterEqualRequest.prototype.name;
    /** @type {?} */
    DaffCategoryFilterEqualRequest.prototype.value;
}
/**
 * @record
 */
function DaffCategoryFilterMatchRequest() { }
if (false) {
    /** @type {?} */
    DaffCategoryFilterMatchRequest.prototype.type;
    /** @type {?} */
    DaffCategoryFilterMatchRequest.prototype.name;
    /** @type {?} */
    DaffCategoryFilterMatchRequest.prototype.value;
}
/**
 * @record
 */
function DaffCategoryFilterRangeRequest() { }
if (false) {
    /** @type {?} */
    DaffCategoryFilterRangeRequest.prototype.type;
    /** @type {?} */
    DaffCategoryFilterRangeRequest.prototype.name;
    /** @type {?} */
    DaffCategoryFilterRangeRequest.prototype.value;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @param {?} filters
 * @return {?}
 */
function daffCategoryValidateFilters(filters) {
    if (!filters)
        return;
    filters.forEach((/**
     * @param {?} filter
     * @param {?} i
     * @return {?}
     */
    function (filter, i) {
        if (filter.type === DaffCategoryFilterType.Range &&
            filter.value[0].split(DaffCategoryFromToFilterSeparator).length !== 2) {
            throw new Error('Category range filter is in an invalid format. Should be **-**');
        }
        for (var j = i + 1; j < filters.length; j++) {
            if (filters[i].name === filters[j].name) {
                throw new Error('More than one category filter of the same name exists. These should' +
                    ' be combined into a single filter action with multiple values.');
            }
        }
    }));
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @template T, V, U, W
 */
var DaffCategoryEffects = /** @class */ (function () {
    function DaffCategoryEffects(actions$, driver) {
        var _this = this;
        this.actions$ = actions$;
        this.driver = driver;
        this.loadCategory$ = this.actions$.pipe(ofType(DaffCategoryActionTypes.CategoryLoadAction), switchMap((/**
         * @param {?} action
         * @return {?}
         */
        function (action) {
            daffCategoryValidateFilters(action.request.filter_requests);
            return _this.driver.get(action.request).pipe(switchMap((/**
             * @param {?} resp
             * @return {?}
             */
            function (resp) { return of(new DaffProductGridLoadSuccess(resp.products), new DaffCategoryLoadSuccess(resp)); })), catchError((/**
             * @param {?} error
             * @return {?}
             */
            function (error) { return of(new DaffCategoryLoadFailure('Failed to load the category')); })));
        })));
    }
    DaffCategoryEffects.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    DaffCategoryEffects.ctorParameters = function () { return [
        { type: Actions },
        { type: undefined, decorators: [{ type: Inject, args: [DaffCategoryDriver,] }] }
    ]; };
    __decorate([
        Effect(),
        __metadata("design:type", Observable)
    ], DaffCategoryEffects.prototype, "loadCategory$", void 0);
    return DaffCategoryEffects;
}());
if (false) {
    /** @type {?} */
    DaffCategoryEffects.prototype.loadCategory$;
    /**
     * @type {?}
     * @private
     */
    DaffCategoryEffects.prototype.actions$;
    /**
     * @type {?}
     * @private
     */
    DaffCategoryEffects.prototype.driver;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * A token to define the default category page size on a category page load. This value is 12 by default.
 * @type {?}
 */
var DaffDefaultCategoryPageSize = new InjectionToken('DaffDefaultCategoryPageSize');

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Resolves category data for category pages, and will only resolve the url after a category request succeeds or fails. This resolver expects a url
 * of the form `some/url/{id}` where `{id}` is the category id.
 */
var DaffCategoryPageResolver = /** @class */ (function () {
    function DaffCategoryPageResolver(platformId, defaultCategoryPageSize, store, dispatcher) {
        this.platformId = platformId;
        this.defaultCategoryPageSize = defaultCategoryPageSize;
        this.store = store;
        this.dispatcher = dispatcher;
    }
    /**
     * @param {?} route
     * @return {?}
     */
    DaffCategoryPageResolver.prototype.resolve = /**
     * @param {?} route
     * @return {?}
     */
    function (route) {
        this.store.dispatch(new DaffCategoryPageLoad({
            id: route.paramMap.get('id'), page_size: this.defaultCategoryPageSize
        }));
        return isPlatformBrowser(this.platformId) ? of(true) : this.dispatcher.pipe(ofType(DaffCategoryActionTypes.CategoryPageLoadSuccessAction, DaffCategoryActionTypes.CategoryPageLoadFailureAction), mapTo(true), take(1));
    };
    DaffCategoryPageResolver.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    DaffCategoryPageResolver.ctorParameters = function () { return [
        { type: String, decorators: [{ type: Inject, args: [PLATFORM_ID,] }] },
        { type: Number, decorators: [{ type: Inject, args: [DaffDefaultCategoryPageSize,] }] },
        { type: Store },
        { type: ActionsSubject }
    ]; };
    /** @nocollapse */ DaffCategoryPageResolver.ngInjectableDef = ɵɵdefineInjectable({ factory: function DaffCategoryPageResolver_Factory() { return new DaffCategoryPageResolver(ɵɵinject(PLATFORM_ID), ɵɵinject(DaffDefaultCategoryPageSize), ɵɵinject(Store), ɵɵinject(ActionsSubject)); }, token: DaffCategoryPageResolver, providedIn: "root" });
    return DaffCategoryPageResolver;
}());
if (false) {
    /**
     * @type {?}
     * @private
     */
    DaffCategoryPageResolver.prototype.platformId;
    /**
     * @type {?}
     * @private
     */
    DaffCategoryPageResolver.prototype.defaultCategoryPageSize;
    /**
     * @type {?}
     * @private
     */
    DaffCategoryPageResolver.prototype.store;
    /**
     * @type {?}
     * @private
     */
    DaffCategoryPageResolver.prototype.dispatcher;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @record
 * @template T, V, U
 */
function DaffCategoryFeatureMemoizedSelectors() { }
if (false) {
    /** @type {?} */
    DaffCategoryFeatureMemoizedSelectors.prototype.selectCategoryFeatureState;
}
var ɵ0 = /**
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
        : { selectCategoryFeatureState: createFeatureSelector('category') }; });
};
/** @type {?} */
var getDaffCategoryFeatureSelector = ((ɵ0))();

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @param {?} filter
 * @param {?} request
 * @return {?}
 */
function buildAppliedFilter(filter, request) {
    return {
        name: request.name,
        type: request.type,
        label: filter.label,
        options: buildAppliedFilterOptions(filter.options, request)
    };
}
/**
 * @param {?} filterOptions
 * @param {?} filterRequest
 * @return {?}
 */
function buildAppliedFilterOptions(filterOptions, filterRequest) {
    switch (filterRequest.type) {
        case (DaffCategoryFilterType.Equal):
            return buildAppliedFilterOptionsFromEqualRequest(filterOptions, filterRequest);
        case (DaffCategoryFilterType.Range):
            return buildAppliedFilterOptionsFromRangeRequest(filterOptions, filterRequest);
        case (DaffCategoryFilterType.Match):
            return buildAppliedFilterOptionsFromMatchRequest(filterOptions, filterRequest);
    }
}
/**
 * @param {?} filterOptions
 * @param {?} filterRequest
 * @return {?}
 */
function buildAppliedFilterOptionsFromEqualRequest(filterOptions, filterRequest) {
    return filterOptions
        .filter((/**
     * @param {?} option
     * @return {?}
     */
    function (option) { return filterRequest.value.indexOf(option.value) > -1; }))
        .map((/**
     * @param {?} option
     * @return {?}
     */
    function (option) {
        return {
            value: option.value,
            label: option.label
        };
    }));
}
/**
 * @param {?} filterOptions
 * @param {?} filterRequest
 * @return {?}
 */
function buildAppliedFilterOptionsFromRangeRequest(filterOptions, filterRequest) {
    return filterOptions
        .filter((/**
     * @param {?} option
     * @return {?}
     */
    function (option) { return filterRequest.value.indexOf(option.value) > -1; }))
        .map((/**
     * @param {?} option
     * @return {?}
     */
    function (option) {
        return {
            value: option.value,
            label: option.label
        };
    }));
}
/**
 * @param {?} filterOptions
 * @param {?} filterRequest
 * @return {?}
 */
function buildAppliedFilterOptionsFromMatchRequest(filterOptions, filterRequest) {
    return filterOptions
        .filter((/**
     * @param {?} option
     * @return {?}
     */
    function (option) { return filterRequest.value === option.value; }))
        .map((/**
     * @param {?} option
     * @return {?}
     */
    function (option) {
        return {
            value: option.value,
            label: option.label
        };
    }));
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @record
 * @template T, V, U
 */
function DaffCategoryPageMemoizedSelectors() { }
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
var ɵ0$1 = createCategoryPageSelectors;
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
var getDaffCategoryPageSelectors = ((ɵ1))();

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @record
 * @template V
 */
function DaffCategoryEntitiesMemoizedSelectors() { }
if (false) {
    /** @type {?} */
    DaffCategoryEntitiesMemoizedSelectors.prototype.selectCategoryEntitiesState;
    /** @type {?} */
    DaffCategoryEntitiesMemoizedSelectors.prototype.selectCategoryIds;
    /** @type {?} */
    DaffCategoryEntitiesMemoizedSelectors.prototype.selectCategoryEntities;
    /** @type {?} */
    DaffCategoryEntitiesMemoizedSelectors.prototype.selectAllCategories;
    /** @type {?} */
    DaffCategoryEntitiesMemoizedSelectors.prototype.selectCategoryTotal;
}
/** @type {?} */
var createCategoryFeatureSelectors = (/**
 * @template T, V, U
 * @return {?}
 */
function () {
    /** @type {?} */
    var entitiesSelectors = daffCategoryEntitiesAdapter().getSelectors();
    /** @type {?} */
    var categoryFeatureState = getDaffCategoryFeatureSelector().selectCategoryFeatureState;
    /**
     * Category Entities State
     * @type {?}
     */
    var selectCategoryEntitiesState = createSelector(categoryFeatureState, (/**
     * @param {?} state
     * @return {?}
     */
    function (state) { return state.categoryEntities; }));
    /** @type {?} */
    var selectCategoryIds = createSelector(selectCategoryEntitiesState, entitiesSelectors.selectIds);
    /** @type {?} */
    var selectCategoryEntities = createSelector(selectCategoryEntitiesState, entitiesSelectors.selectEntities);
    /** @type {?} */
    var selectAllCategories = createSelector(selectCategoryEntitiesState, entitiesSelectors.selectAll);
    /** @type {?} */
    var selectCategoryTotal = createSelector(selectCategoryEntitiesState, entitiesSelectors.selectTotal);
    return {
        selectCategoryEntitiesState: selectCategoryEntitiesState,
        selectCategoryIds: selectCategoryIds,
        selectCategoryEntities: selectCategoryEntities,
        selectAllCategories: selectAllCategories,
        selectCategoryTotal: selectCategoryTotal
    };
});
var ɵ0$2 = createCategoryFeatureSelectors;
var ɵ1$1 = /**
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
        : createCategoryFeatureSelectors(); });
};
/** @type {?} */
var getDaffCategoryEntitiesSelectors = ((ɵ1$1))();

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @record
 * @template T, V, U, W
 */
function DaffCategoryMemoizedSelectors() { }
if (false) {
    /** @type {?} */
    DaffCategoryMemoizedSelectors.prototype.selectSelectedCategory;
    /** @type {?} */
    DaffCategoryMemoizedSelectors.prototype.selectCategoryPageProducts;
    /** @type {?} */
    DaffCategoryMemoizedSelectors.prototype.selectCategory;
    /** @type {?} */
    DaffCategoryMemoizedSelectors.prototype.selectProductsByCategory;
    /** @type {?} */
    DaffCategoryMemoizedSelectors.prototype.selectTotalProductsByCategory;
}
/** @type {?} */
var createCategorySelectors = (/**
 * @template T, V, U, W
 * @return {?}
 */
function () {
    var _a = getDaffProductSelectors(), selectProductEntities = _a.selectProductEntities, selectAllProducts = _a.selectAllProducts;
    var selectCategoryEntities = getDaffCategoryEntitiesSelectors().selectCategoryEntities;
    var _b = getDaffCategoryPageSelectors(), selectSelectedCategoryId = _b.selectSelectedCategoryId, selectCategoryPageProductIds = _b.selectCategoryPageProductIds;
    /**
     * Combinatoric Category Selectors
     * @type {?}
     */
    var selectSelectedCategory = createSelector(selectCategoryEntities, selectSelectedCategoryId, (/**
     * @param {?} entities
     * @param {?} selectedCategoryId
     * @return {?}
     */
    function (entities, selectedCategoryId) { return entities[selectedCategoryId]; }));
    /** @type {?} */
    var selectCategoryPageProducts = createSelector(selectCategoryPageProductIds, selectProductEntities, (/**
     * @param {?} ids
     * @param {?} products
     * @return {?}
     */
    function (ids, products) { return ids.map((/**
     * @param {?} id
     * @return {?}
     */
    function (id) { return products[id]; })).filter((/**
     * @param {?} p
     * @return {?}
     */
    function (p) { return p != null; })); }));
    /** @type {?} */
    var selectCategory = createSelector(selectCategoryEntities, (/**
     * @param {?} entities
     * @param {?} props
     * @return {?}
     */
    function (entities, props) { return entities[props.id]; }));
    /** @type {?} */
    var selectProductsByCategory = createSelector(selectCategoryEntities, selectAllProducts, (/**
     * @param {?} entities
     * @param {?} products
     * @param {?} props
     * @return {?}
     */
    function (entities, products, props) { return entities[props.id] && entities[props.id].product_ids
        ? products.filter((/**
         * @param {?} product
         * @return {?}
         */
        function (product) { return entities[props.id].product_ids.indexOf(product.id) >= 0; }))
        : null; }));
    /** @type {?} */
    var selectTotalProductsByCategory = createSelector(selectCategoryEntities, selectAllProducts, (/**
     * @param {?} entities
     * @param {?} products
     * @param {?} props
     * @return {?}
     */
    function (entities, products, props) { return selectProductsByCategory.projector(entities, products, { id: props.id })
        ? selectProductsByCategory.projector(entities, products, { id: props.id }).length
        : null; }));
    return __assign({}, getDaffCategoryFeatureSelector(), getDaffCategoryEntitiesSelectors(), getDaffCategoryPageSelectors(), { selectSelectedCategory: selectSelectedCategory,
        selectCategoryPageProducts: selectCategoryPageProducts,
        selectCategory: selectCategory,
        selectProductsByCategory: selectProductsByCategory,
        selectTotalProductsByCategory: selectTotalProductsByCategory });
});
var ɵ0$3 = createCategorySelectors;
var ɵ1$2 = /**
 * @return {?}
 */
function () {
    /** @type {?} */
    var cache;
    return (/**
     * @template T, V, U, W
     * @return {?}
     */
    function () { return cache = cache
        ? cache
        : createCategorySelectors(); });
};
/** @type {?} */
var getDaffCategorySelectors = ((ɵ1$2))();

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @template T, V, U, W
 */
var DaffCategoryPageEffects = /** @class */ (function () {
    function DaffCategoryPageEffects(actions$, driver, store) {
        var _this = this;
        this.actions$ = actions$;
        this.driver = driver;
        this.store = store;
        this.categorySelectors = getDaffCategorySelectors();
        this.loadCategoryPage$ = this.actions$.pipe(ofType(DaffCategoryActionTypes.CategoryPageLoadAction), switchMap((/**
         * @param {?} action
         * @return {?}
         */
        function (action) {
            daffCategoryValidateFilters(action.request.filter_requests);
            return _this.processCategoryGetRequest(action.request);
        })));
        this.changeCategoryPageSize$ = this.actions$.pipe(ofType(DaffCategoryActionTypes.ChangeCategoryPageSizeAction), withLatestFrom(this.store.pipe(select(this.categorySelectors.selectCategoryPageConfigurationState))), switchMap((/**
         * @param {?} __0
         * @return {?}
         */
        function (_a) {
            var _b = __read(_a, 2), action = _b[0], categoryRequest = _b[1];
            return _this.processCategoryGetRequest(__assign({}, categoryRequest, { page_size: action.pageSize }));
        })));
        this.changeCategoryCurrentPage$ = this.actions$.pipe(ofType(DaffCategoryActionTypes.ChangeCategoryCurrentPageAction), withLatestFrom(this.store.pipe(select(this.categorySelectors.selectCategoryPageConfigurationState))), switchMap((/**
         * @param {?} __0
         * @return {?}
         */
        function (_a) {
            var _b = __read(_a, 2), action = _b[0], categoryRequest = _b[1];
            return _this.processCategoryGetRequest(__assign({}, categoryRequest, { current_page: action.currentPage }));
        })));
        this.changeCategoryFilters$ = this.actions$.pipe(ofType(DaffCategoryActionTypes.ChangeCategoryFiltersAction), withLatestFrom(this.store.pipe(select(this.categorySelectors.selectCategoryPageConfigurationState))), switchMap((/**
         * @param {?} __0
         * @return {?}
         */
        function (_a) {
            var _b = __read(_a, 2), action = _b[0], categoryRequest = _b[1];
            daffCategoryValidateFilters(action.filters);
            return _this.processCategoryGetRequest(__assign({}, categoryRequest, { filter_requests: action.filters }));
        })));
        this.toggleCategoryFilter$ = this.actions$.pipe(ofType(DaffCategoryActionTypes.ToggleCategoryFilterAction), withLatestFrom(this.store.pipe(select(this.categorySelectors.selectCategoryPageConfigurationState))), switchMap((/**
         * @param {?} __0
         * @return {?}
         */
        function (_a) {
            var _b = __read(_a, 2), action = _b[0], categoryPageConfigurationState = _b[1];
            daffCategoryValidateFilters(categoryPageConfigurationState.filter_requests);
            return _this.processCategoryGetRequest(__assign({}, categoryPageConfigurationState));
        })));
        this.changeCategorySort$ = this.actions$.pipe(ofType(DaffCategoryActionTypes.ChangeCategorySortingOptionAction), withLatestFrom(this.store.pipe(select(this.categorySelectors.selectCategoryPageConfigurationState))), switchMap((/**
         * @param {?} __0
         * @return {?}
         */
        function (_a) {
            var _b = __read(_a, 2), action = _b[0], categoryRequest = _b[1];
            return _this.processCategoryGetRequest(__assign({}, categoryRequest, { applied_sort_option: action.sort.option, applied_sort_direction: action.sort.direction }));
        })));
    }
    /**
     * @private
     * @param {?} payload
     * @return {?}
     */
    DaffCategoryPageEffects.prototype.processCategoryGetRequest = /**
     * @private
     * @param {?} payload
     * @return {?}
     */
    function (payload) {
        return this.driver.get(payload).pipe(switchMap((/**
         * @param {?} resp
         * @return {?}
         */
        function (resp) { return [
            new DaffProductGridLoadSuccess(resp.products),
            new DaffCategoryPageLoadSuccess(resp)
        ]; })), catchError((/**
         * @param {?} error
         * @return {?}
         */
        function (error) { return of(new DaffCategoryPageLoadFailure('Failed to load the category')); })));
    };
    DaffCategoryPageEffects.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    DaffCategoryPageEffects.ctorParameters = function () { return [
        { type: Actions },
        { type: undefined, decorators: [{ type: Inject, args: [DaffCategoryDriver,] }] },
        { type: Store }
    ]; };
    __decorate([
        Effect(),
        __metadata("design:type", Observable)
    ], DaffCategoryPageEffects.prototype, "loadCategoryPage$", void 0);
    __decorate([
        Effect(),
        __metadata("design:type", Observable)
    ], DaffCategoryPageEffects.prototype, "changeCategoryPageSize$", void 0);
    __decorate([
        Effect(),
        __metadata("design:type", Observable)
    ], DaffCategoryPageEffects.prototype, "changeCategoryCurrentPage$", void 0);
    __decorate([
        Effect(),
        __metadata("design:type", Observable)
    ], DaffCategoryPageEffects.prototype, "changeCategoryFilters$", void 0);
    __decorate([
        Effect(),
        __metadata("design:type", Observable)
    ], DaffCategoryPageEffects.prototype, "toggleCategoryFilter$", void 0);
    __decorate([
        Effect(),
        __metadata("design:type", Observable)
    ], DaffCategoryPageEffects.prototype, "changeCategorySort$", void 0);
    return DaffCategoryPageEffects;
}());
if (false) {
    /**
     * @type {?}
     * @private
     */
    DaffCategoryPageEffects.prototype.categorySelectors;
    /** @type {?} */
    DaffCategoryPageEffects.prototype.loadCategoryPage$;
    /** @type {?} */
    DaffCategoryPageEffects.prototype.changeCategoryPageSize$;
    /** @type {?} */
    DaffCategoryPageEffects.prototype.changeCategoryCurrentPage$;
    /** @type {?} */
    DaffCategoryPageEffects.prototype.changeCategoryFilters$;
    /** @type {?} */
    DaffCategoryPageEffects.prototype.toggleCategoryFilter$;
    /** @type {?} */
    DaffCategoryPageEffects.prototype.changeCategorySort$;
    /**
     * @type {?}
     * @private
     */
    DaffCategoryPageEffects.prototype.actions$;
    /**
     * @type {?}
     * @private
     */
    DaffCategoryPageEffects.prototype.driver;
    /**
     * @type {?}
     * @private
     */
    DaffCategoryPageEffects.prototype.store;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var DaffCategoryStateModule = /** @class */ (function () {
    function DaffCategoryStateModule() {
    }
    DaffCategoryStateModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        StoreModule.forFeature('category', daffCategoryReducers),
                        EffectsModule.forFeature([DaffCategoryEffects, DaffCategoryPageEffects]),
                    ],
                    providers: [
                        { provide: DaffDefaultCategoryPageSize, useValue: 12 }
                    ]
                },] }
    ];
    return DaffCategoryStateModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var DaffCategoryModule = /** @class */ (function () {
    function DaffCategoryModule() {
    }
    DaffCategoryModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        CommonModule,
                        /**
                         * Ngrx/store
                         */
                        DaffCategoryStateModule,
                        DaffProductModule
                    ]
                },] }
    ];
    return DaffCategoryModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
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
    /** @nocollapse */ DaffCategoryFacade.ngInjectableDef = ɵɵdefineInjectable({ factory: function DaffCategoryFacade_Factory() { return new DaffCategoryFacade(ɵɵinject(Store)); }, token: DaffCategoryFacade, providedIn: DaffCategoryModule });
    return DaffCategoryFacade;
}());
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var MagentoGetCategoryQuery = gql(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\nquery MagentoGetCategoryQuery($filters: CategoryFilterInput){\n\tcategoryList(filters: $filters) {\n\t\tid\n\t\tname\n\t\tlevel\n\t\tdescription\n\t\tbreadcrumbs {\n\t\t\tcategory_id\n\t\t\tcategory_name\n\t\t\tcategory_level\n\t\t\tcategory_url_key\n\t\t}\n\t\tproducts {\n\t\t\titems {\n\t\t\t\tsku\n\t\t\t}\n\t\t}\n\t\tchildren_count\n\t}\n}"], ["\nquery MagentoGetCategoryQuery($filters: CategoryFilterInput){\n\tcategoryList(filters: $filters) {\n\t\tid\n\t\tname\n\t\tlevel\n\t\tdescription\n\t\tbreadcrumbs {\n\t\t\tcategory_id\n\t\t\tcategory_name\n\t\t\tcategory_level\n\t\t\tcategory_url_key\n\t\t}\n\t\tproducts {\n\t\t\titems {\n\t\t\t\tsku\n\t\t\t}\n\t\t}\n\t\tchildren_count\n\t}\n}"])));
var templateObject_1;

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * This query only exists because products and their associated aggregations/filter cannot
 * be retrieved through a category call.
 * @type {?}
 */
var MagentoGetProductsQuery = gql(templateObject_1$1 || (templateObject_1$1 = __makeTemplateObject(["\nquery MagentoGetProducts($filter: ProductAttributeFilterInput!, $search: String, $pageSize: Int, $currentPage: Int, $sort: ProductAttributeSortInput)\n{\n\tproducts(filter: $filter, search: $search, pageSize: $pageSize, currentPage: $currentPage, sort: $sort)\n\t{\n\t\ttotal_count\n\t\titems {\n\t\t\t...product\n\t\t}\n\t\tpage_info {\n\t\t\tpage_size\n\t\t\tcurrent_page\n\t\t\ttotal_pages\n\t\t}\n\t}\n}\n", "\n"], ["\nquery MagentoGetProducts($filter: ProductAttributeFilterInput!, $search: String, $pageSize: Int, $currentPage: Int, $sort: ProductAttributeSortInput)\n{\n\tproducts(filter: $filter, search: $search, pageSize: $pageSize, currentPage: $currentPage, sort: $sort)\n\t{\n\t\ttotal_count\n\t\titems {\n\t\t\t...product\n\t\t}\n\t\tpage_info {\n\t\t\tpage_size\n\t\t\tcurrent_page\n\t\t\ttotal_pages\n\t\t}\n\t}\n}\n", "\n"])), magentoProductFragment);
var templateObject_1$1;

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @enum {string} */
var MagentoCategoryFilterActionEnum = {
    Equal: 'eq',
    To: 'to',
    From: 'from',
    In: 'in',
    Match: 'match',
};
/**
 * @record
 */
function MagentoCategoryFilters() { }

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var DaffMagentoAppliedFiltersTransformService = /** @class */ (function () {
    function DaffMagentoAppliedFiltersTransformService() {
    }
    /**
     * @param {?} categoryId
     * @param {?} daffFilters
     * @return {?}
     */
    DaffMagentoAppliedFiltersTransformService.prototype.transform = /**
     * @param {?} categoryId
     * @param {?} daffFilters
     * @return {?}
     */
    function (categoryId, daffFilters) {
        var _a;
        var _this = this;
        /** @type {?} */
        var magentoFilters = {
            category_id: (_a = {},
                _a[MagentoCategoryFilterActionEnum.Equal] = categoryId,
                _a)
        };
        if (!daffFilters)
            return magentoFilters;
        daffFilters.forEach((/**
         * @param {?} filter
         * @return {?}
         */
        function (filter) {
            var _a;
            // The FromTo filter needs special treatment, because Magento accepts the "from" and "to" filters
            // separately (it also outputs FromTo filter pairs together)
            if (filter.type === DaffCategoryFilterType.Range) {
                /** @type {?} */
                var fromToValues = filter.value[0].split(DaffCategoryFromToFilterSeparator);
                magentoFilters[filter.name] = __assign({}, magentoFilters[filter.name], _this.getRangeFromValue(fromToValues[0]), _this.getRangeToValue(fromToValues[1]));
            }
            else {
                magentoFilters[filter.name] = __assign({}, magentoFilters[filter.name], (_a = {}, _a[_this.getFilterAction(filter.type)] = _this.getFilterValue(filter.type, filter.value), _a));
            }
        }));
        return magentoFilters;
    };
    /**
     * Returns an In action for Equal type and a Match action for Match type.
     */
    /**
     * Returns an In action for Equal type and a Match action for Match type.
     * @private
     * @param {?} type
     * @return {?}
     */
    DaffMagentoAppliedFiltersTransformService.prototype.getFilterAction = /**
     * Returns an In action for Equal type and a Match action for Match type.
     * @private
     * @param {?} type
     * @return {?}
     */
    function (type) {
        return type === DaffCategoryFilterType.Equal
            ? MagentoCategoryFilterActionEnum.In
            : MagentoCategoryFilterActionEnum.Match;
    };
    /**
     * Returns an array for Equal type and a string for Match type.
     */
    /**
     * Returns an array for Equal type and a string for Match type.
     * @private
     * @param {?} type
     * @param {?} value
     * @return {?}
     */
    DaffMagentoAppliedFiltersTransformService.prototype.getFilterValue = /**
     * Returns an array for Equal type and a string for Match type.
     * @private
     * @param {?} type
     * @param {?} value
     * @return {?}
     */
    function (type, value) {
        return type === DaffCategoryFilterType.Equal ? value : value[0];
    };
    /**
     * @private
     * @param {?} fromValue
     * @return {?}
     */
    DaffMagentoAppliedFiltersTransformService.prototype.getRangeFromValue = /**
     * @private
     * @param {?} fromValue
     * @return {?}
     */
    function (fromValue) {
        var _a;
        return fromValue !== '*' ? (_a = {}, _a[MagentoCategoryFilterActionEnum.From] = fromValue, _a) : null;
    };
    /**
     * @private
     * @param {?} toValue
     * @return {?}
     */
    DaffMagentoAppliedFiltersTransformService.prototype.getRangeToValue = /**
     * @private
     * @param {?} toValue
     * @return {?}
     */
    function (toValue) {
        var _a;
        return toValue !== '*' ? (_a = {}, _a[MagentoCategoryFilterActionEnum.To] = toValue, _a) : null;
    };
    DaffMagentoAppliedFiltersTransformService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */ DaffMagentoAppliedFiltersTransformService.ngInjectableDef = ɵɵdefineInjectable({ factory: function DaffMagentoAppliedFiltersTransformService_Factory() { return new DaffMagentoAppliedFiltersTransformService(); }, token: DaffMagentoAppliedFiltersTransformService, providedIn: "root" });
    return DaffMagentoAppliedFiltersTransformService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @enum {string} */
var MagentoSortDirectionEnum = {
    Ascending: 'ASC',
    Decending: 'DESC',
};
/**
 * @record
 */
function MagentoSortFieldAction() { }

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @enum {string} */
var DaffSortDirectionEnum = {
    Ascending: 'ASC',
    Decending: 'DSC',
};
/**
 * @record
 */
function DaffCategoryRequest() { }
if (false) {
    /** @type {?} */
    DaffCategoryRequest.prototype.id;
    /** @type {?|undefined} */
    DaffCategoryRequest.prototype.filter_requests;
    /** @type {?|undefined} */
    DaffCategoryRequest.prototype.applied_sort_option;
    /** @type {?|undefined} */
    DaffCategoryRequest.prototype.applied_sort_direction;
    /** @type {?|undefined} */
    DaffCategoryRequest.prototype.current_page;
    /** @type {?|undefined} */
    DaffCategoryRequest.prototype.page_size;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var DaffMagentoAppliedSortOptionTransformService = /** @class */ (function () {
    function DaffMagentoAppliedSortOptionTransformService() {
    }
    /**
     * @param {?} appliedOption
     * @param {?} appliedDirection
     * @return {?}
     */
    DaffMagentoAppliedSortOptionTransformService.prototype.transform = /**
     * @param {?} appliedOption
     * @param {?} appliedDirection
     * @return {?}
     */
    function (appliedOption, appliedDirection) {
        var _a;
        return _a = {},
            _a[appliedOption] = this.transformDirection(appliedDirection),
            _a;
    };
    /**
     * @private
     * @param {?} direction
     * @return {?}
     */
    DaffMagentoAppliedSortOptionTransformService.prototype.transformDirection = /**
     * @private
     * @param {?} direction
     * @return {?}
     */
    function (direction) {
        if (direction === DaffSortDirectionEnum.Ascending) {
            return MagentoSortDirectionEnum.Ascending;
        }
        else if (direction === DaffSortDirectionEnum.Decending) {
            return MagentoSortDirectionEnum.Decending;
        }
    };
    DaffMagentoAppliedSortOptionTransformService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */ DaffMagentoAppliedSortOptionTransformService.ngInjectableDef = ɵɵdefineInjectable({ factory: function DaffMagentoAppliedSortOptionTransformService_Factory() { return new DaffMagentoAppliedSortOptionTransformService(); }, token: DaffMagentoAppliedSortOptionTransformService, providedIn: "root" });
    return DaffMagentoAppliedSortOptionTransformService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @param {?} sort_fields
 * @return {?}
 */
function coerceDefaultSortOptionFirst(sort_fields) {
    /** @type {?} */
    var index = sort_fields.options.findIndex((/**
     * @param {?} option
     * @return {?}
     */
    function (option) { return sort_fields.default === option.value; }));
    return __assign({}, sort_fields, { options: __spread([
            sort_fields.options[index]
        ], sort_fields.options.slice(0, index), sort_fields.options.slice(index + 1)) });
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var DaffMagentoCategoryPageConfigTransformerService = /** @class */ (function () {
    function DaffMagentoCategoryPageConfigTransformerService() {
    }
    /**
     * @param {?} categoryResponse
     * @return {?}
     */
    DaffMagentoCategoryPageConfigTransformerService.prototype.transform = /**
     * @param {?} categoryResponse
     * @return {?}
     */
    function (categoryResponse) {
        return {
            id: categoryResponse.category.id,
            page_size: categoryResponse.page_info.page_size,
            current_page: categoryResponse.page_info.current_page,
            total_pages: categoryResponse.page_info.total_pages,
            total_products: categoryResponse.total_count,
            filters: categoryResponse.aggregates.map(this.transformAggregate.bind(this)),
            sort_options: coerceDefaultSortOptionFirst(categoryResponse.sort_fields).options,
            product_ids: categoryResponse.products.map((/**
             * @param {?} product
             * @return {?}
             */
            function (product) { return product.sku; }))
        };
    };
    /**
     * @private
     * @param {?} filter
     * @return {?}
     */
    DaffMagentoCategoryPageConfigTransformerService.prototype.transformAggregate = /**
     * @private
     * @param {?} filter
     * @return {?}
     */
    function (filter) {
        var _this = this;
        /** @type {?} */
        var filterType = this.transformAggregateType(filter.type);
        return {
            label: filter.label,
            type: filterType,
            name: filter.attribute_code,
            options: filter.options.map((/**
             * @param {?} option
             * @return {?}
             */
            function (option) {
                return {
                    label: option.label,
                    value: filterType === DaffCategoryFilterType.Range ? _this.transformRangeValue(option.value) : option.value,
                    count: option.count
                };
            }))
        };
    };
    /**
     * @private
     * @param {?} type
     * @return {?}
     */
    DaffMagentoCategoryPageConfigTransformerService.prototype.transformAggregateType = /**
     * @private
     * @param {?} type
     * @return {?}
     */
    function (type) {
        if (type === 'select')
            return DaffCategoryFilterType.Equal;
        else if (type === 'boolean')
            return DaffCategoryFilterType.Equal;
        else if (type === 'multiselect')
            return DaffCategoryFilterType.Equal;
        else if (type === 'price')
            return DaffCategoryFilterType.Range;
        else
            return DaffCategoryFilterType.Match;
    };
    /**
     * @private
     * @param {?} value
     * @return {?}
     */
    DaffMagentoCategoryPageConfigTransformerService.prototype.transformRangeValue = /**
     * @private
     * @param {?} value
     * @return {?}
     */
    function (value) {
        return value.replace('_', DaffCategoryFromToFilterSeparator);
    };
    DaffMagentoCategoryPageConfigTransformerService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */ DaffMagentoCategoryPageConfigTransformerService.ngInjectableDef = ɵɵdefineInjectable({ factory: function DaffMagentoCategoryPageConfigTransformerService_Factory() { return new DaffMagentoCategoryPageConfigTransformerService(); }, token: DaffMagentoCategoryPageConfigTransformerService, providedIn: "root" });
    return DaffMagentoCategoryPageConfigTransformerService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var DaffMagentoCategoryTransformerService = /** @class */ (function () {
    function DaffMagentoCategoryTransformerService() {
    }
    /**
     * @param {?} category
     * @return {?}
     */
    DaffMagentoCategoryTransformerService.prototype.transform = /**
     * @param {?} category
     * @return {?}
     */
    function (category) {
        var _this = this;
        return {
            id: category.id,
            name: category.name,
            description: category.description,
            children_count: category.children_count,
            //todo: use optional chaining when possible
            breadcrumbs: category.breadcrumbs ?
                category.breadcrumbs
                    .map((/**
                 * @param {?} breadcrumb
                 * @return {?}
                 */
                function (breadcrumb) { return _this.transformBreadcrumb(breadcrumb); }))
                    .sort((/**
                 * @param {?} a
                 * @param {?} b
                 * @return {?}
                 */
                function (a, b) { return a.categoryLevel - b.categoryLevel; })) :
                null,
            product_ids: category.products.items.map((/**
             * @param {?} product
             * @return {?}
             */
            function (product) { return product.sku; })),
            total_products: category.products.items.length
        };
    };
    /**
     * @private
     * @param {?} breadcrumb
     * @return {?}
     */
    DaffMagentoCategoryTransformerService.prototype.transformBreadcrumb = /**
     * @private
     * @param {?} breadcrumb
     * @return {?}
     */
    function (breadcrumb) {
        return {
            categoryId: breadcrumb.category_id,
            categoryName: breadcrumb.category_name,
            categoryLevel: breadcrumb.category_level,
            categoryUrlKey: breadcrumb.category_url_key
        };
    };
    DaffMagentoCategoryTransformerService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */ DaffMagentoCategoryTransformerService.ngInjectableDef = ɵɵdefineInjectable({ factory: function DaffMagentoCategoryTransformerService_Factory() { return new DaffMagentoCategoryTransformerService(); }, token: DaffMagentoCategoryTransformerService, providedIn: "root" });
    return DaffMagentoCategoryTransformerService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var DaffMagentoCategoryResponseTransformService = /** @class */ (function () {
    function DaffMagentoCategoryResponseTransformService(magentoCategoryTransformerService, magentoCategoryPageConfigurationTransformerService) {
        this.magentoCategoryTransformerService = magentoCategoryTransformerService;
        this.magentoCategoryPageConfigurationTransformerService = magentoCategoryPageConfigurationTransformerService;
    }
    /**
     * @param {?} completeCategory
     * @return {?}
     */
    DaffMagentoCategoryResponseTransformService.prototype.transform = /**
     * @param {?} completeCategory
     * @return {?}
     */
    function (completeCategory) {
        return __assign({ magentoCompleteCategoryResponse: completeCategory }, { category: this.magentoCategoryTransformerService.transform(completeCategory.category), categoryPageConfigurationState: this.magentoCategoryPageConfigurationTransformerService.transform(completeCategory), products: transformManyMagentoProducts(completeCategory.products) });
    };
    DaffMagentoCategoryResponseTransformService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    DaffMagentoCategoryResponseTransformService.ctorParameters = function () { return [
        { type: DaffMagentoCategoryTransformerService },
        { type: DaffMagentoCategoryPageConfigTransformerService }
    ]; };
    /** @nocollapse */ DaffMagentoCategoryResponseTransformService.ngInjectableDef = ɵɵdefineInjectable({ factory: function DaffMagentoCategoryResponseTransformService_Factory() { return new DaffMagentoCategoryResponseTransformService(ɵɵinject(DaffMagentoCategoryTransformerService), ɵɵinject(DaffMagentoCategoryPageConfigTransformerService)); }, token: DaffMagentoCategoryResponseTransformService, providedIn: "root" });
    return DaffMagentoCategoryResponseTransformService;
}());
if (false) {
    /**
     * @type {?}
     * @private
     */
    DaffMagentoCategoryResponseTransformService.prototype.magentoCategoryTransformerService;
    /**
     * @type {?}
     * @private
     */
    DaffMagentoCategoryResponseTransformService.prototype.magentoCategoryPageConfigurationTransformerService;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * This query only exists because products and their associated aggregations/filter cannot
 * be retrieved through a category call.
 * @type {?}
 */
var MagentoGetCategoryAggregations = gql(templateObject_1$2 || (templateObject_1$2 = __makeTemplateObject(["\nquery MagentoGetProducts($filter: ProductAttributeFilterInput!)\n{\n\tproducts(filter: $filter)\n\t{\n\t\taggregations {\n\t\t\tlabel\n\t\t\tcount\n\t\t\tattribute_code\n\t\t\toptions {\n\t\t\t\t\tcount\n\t\t\t\t\tlabel\n\t\t\t\t\tvalue\n\t\t\t}\n\t\t}\n\t\tsort_fields {\n\t\t\tdefault\n\t\t\toptions {\n\t\t\t\tlabel\n\t\t\t\tvalue\n\t\t\t}\n\t\t}\n\t}\n}"], ["\nquery MagentoGetProducts($filter: ProductAttributeFilterInput!)\n{\n\tproducts(filter: $filter)\n\t{\n\t\taggregations {\n\t\t\tlabel\n\t\t\tcount\n\t\t\tattribute_code\n\t\t\toptions {\n\t\t\t\t\tcount\n\t\t\t\t\tlabel\n\t\t\t\t\tvalue\n\t\t\t}\n\t\t}\n\t\tsort_fields {\n\t\t\tdefault\n\t\t\toptions {\n\t\t\t\tlabel\n\t\t\t\tvalue\n\t\t\t}\n\t\t}\n\t}\n}"])));
var templateObject_1$2;

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * A query for getting aggregation types.
 * @type {?}
 */
var MagentoGetCustomAttributeMetadata = gql(templateObject_1$3 || (templateObject_1$3 = __makeTemplateObject(["\nquery MagentoGetCustomAttributeMetadata($attributes: [AttributeInput!]!)\n{\n\tcustomAttributeMetadata(attributes: $attributes)\n\t{\n\t\titems {\n      attribute_code\n      attribute_type\n      input_type\n    }\n\t}\n}"], ["\nquery MagentoGetCustomAttributeMetadata($attributes: [AttributeInput!]!)\n{\n\tcustomAttributeMetadata(attributes: $attributes)\n\t{\n\t\titems {\n      attribute_code\n      attribute_type\n      input_type\n    }\n\t}\n}"])));
var templateObject_1$3;

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @param {?} filter
 * @return {?}
 */
function buildCustomMetadataAttribute(filter) {
    return {
        attribute_code: filter.attribute_code,
        entity_type: '4'
    };
}
/**
 * @param {?} attributeResponse
 * @param {?} aggregationResponse
 * @return {?}
 */
function addMetadataTypesToAggregates(attributeResponse, aggregationResponse) {
    return __assign({}, aggregationResponse, { products: __assign({}, aggregationResponse.products, { aggregations: __spread(aggregationResponse.products.aggregations.map((/**
             * @param {?} aggregate
             * @return {?}
             */
            function (aggregate) {
                return __assign({}, aggregate, { type: getMatchedAttributeType(aggregate, attributeResponse) });
            }))) }) });
}
/**
 * @param {?} aggregate
 * @param {?} attributes
 * @return {?}
 */
function getMatchedAttributeType(aggregate, attributes) {
    if (aggregate.attribute_code === 'category_id')
        return 'select';
    return attributes.customAttributeMetadata.items.filter((/**
     * @param {?} item
     * @return {?}
     */
    function (item) { return item.attribute_code === aggregate.attribute_code; }))[0].input_type;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var DaffMagentoCategoryService = /** @class */ (function () {
    function DaffMagentoCategoryService(apollo, magentoCategoryResponseTransformer, magentoAppliedFiltersTransformer, magentoAppliedSortTransformer) {
        this.apollo = apollo;
        this.magentoCategoryResponseTransformer = magentoCategoryResponseTransformer;
        this.magentoAppliedFiltersTransformer = magentoAppliedFiltersTransformer;
        this.magentoAppliedSortTransformer = magentoAppliedSortTransformer;
    }
    //todo the MagentoGetCategoryQuery needs to get its own product ids.
    /**
     * Gets a category based on parameters. Default current_page is 1, and default page_size is 20.
     * @param categoryRequest A DaffCategoryRequest object.
     */
    //todo the MagentoGetCategoryQuery needs to get its own product ids.
    /**
     * Gets a category based on parameters. Default current_page is 1, and default page_size is 20.
     * @param {?} categoryRequest A DaffCategoryRequest object.
     * @return {?}
     */
    DaffMagentoCategoryService.prototype.get = 
    //todo the MagentoGetCategoryQuery needs to get its own product ids.
    /**
     * Gets a category based on parameters. Default current_page is 1, and default page_size is 20.
     * @param {?} categoryRequest A DaffCategoryRequest object.
     * @return {?}
     */
    function (categoryRequest) {
        var _this = this;
        return combineLatest([
            this.apollo.query({
                query: MagentoGetCategoryQuery,
                variables: { filters: { ids: { eq: categoryRequest.id } } }
            }),
            this.apollo.query({
                query: MagentoGetCategoryAggregations,
                variables: { filter: { category_id: { eq: categoryRequest.id } } }
            }).pipe(switchMap((/**
             * @param {?} aggregationResult
             * @return {?}
             */
            function (aggregationResult) {
                return _this.apollo.query({
                    query: MagentoGetCustomAttributeMetadata,
                    variables: {
                        attributes: aggregationResult.data.products.aggregations
                            .filter((/**
                         * @param {?} aggregate
                         * @return {?}
                         */
                        function (aggregate) { return aggregate.attribute_code !== 'category_id'; }))
                            .map((/**
                         * @param {?} aggregate
                         * @return {?}
                         */
                        function (aggregate) { return buildCustomMetadataAttribute(aggregate); }))
                    }
                }).pipe(map((/**
                 * @param {?} response
                 * @return {?}
                 */
                function (response) { return addMetadataTypesToAggregates(response.data, aggregationResult.data); })));
            }))),
            this.apollo.query({
                query: MagentoGetProductsQuery,
                variables: this.getProductsQueryVariables(categoryRequest)
            })
        ]).pipe(map((/**
         * @param {?} result
         * @return {?}
         */
        function (result) { return _this.buildCompleteCategoryResponse(result[0].data, result[1], result[2].data); })), map((/**
         * @param {?} finalResult
         * @return {?}
         */
        function (finalResult) { return _this.magentoCategoryResponseTransformer.transform(finalResult); })));
    };
    /**
     * @private
     * @param {?} request
     * @return {?}
     */
    DaffMagentoCategoryService.prototype.getProductsQueryVariables = /**
     * @private
     * @param {?} request
     * @return {?}
     */
    function (request) {
        /** @type {?} */
        var queryVariables = {
            filter: this.magentoAppliedFiltersTransformer.transform(request.id, request.filter_requests)
        };
        if (request.page_size)
            queryVariables['pageSize'] = request.page_size;
        if (request.current_page)
            queryVariables['currentPage'] = request.current_page;
        if (request.applied_sort_option && request.applied_sort_direction) {
            queryVariables['sort'] = this.magentoAppliedSortTransformer.transform(request.applied_sort_option, request.applied_sort_direction);
        }
        return queryVariables;
    };
    /**
     * @private
     * @param {?} categoryResponse
     * @param {?} aggregationsAndSortsResponse
     * @param {?} productsResponse
     * @return {?}
     */
    DaffMagentoCategoryService.prototype.buildCompleteCategoryResponse = /**
     * @private
     * @param {?} categoryResponse
     * @param {?} aggregationsAndSortsResponse
     * @param {?} productsResponse
     * @return {?}
     */
    function (categoryResponse, aggregationsAndSortsResponse, productsResponse) {
        return {
            category: categoryResponse.categoryList[0],
            products: productsResponse.products.items,
            aggregates: aggregationsAndSortsResponse.products.aggregations,
            sort_fields: aggregationsAndSortsResponse.products.sort_fields,
            total_count: productsResponse.products.total_count,
            page_info: productsResponse.products.page_info
        };
    };
    DaffMagentoCategoryService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    DaffMagentoCategoryService.ctorParameters = function () { return [
        { type: Apollo },
        { type: DaffMagentoCategoryResponseTransformService },
        { type: DaffMagentoAppliedFiltersTransformService },
        { type: DaffMagentoAppliedSortOptionTransformService }
    ]; };
    /** @nocollapse */ DaffMagentoCategoryService.ngInjectableDef = ɵɵdefineInjectable({ factory: function DaffMagentoCategoryService_Factory() { return new DaffMagentoCategoryService(ɵɵinject(Apollo), ɵɵinject(DaffMagentoCategoryResponseTransformService), ɵɵinject(DaffMagentoAppliedFiltersTransformService), ɵɵinject(DaffMagentoAppliedSortOptionTransformService)); }, token: DaffMagentoCategoryService, providedIn: "root" });
    return DaffMagentoCategoryService;
}());
if (false) {
    /**
     * @type {?}
     * @private
     */
    DaffMagentoCategoryService.prototype.apollo;
    /**
     * @type {?}
     * @private
     */
    DaffMagentoCategoryService.prototype.magentoCategoryResponseTransformer;
    /**
     * @type {?}
     * @private
     */
    DaffMagentoCategoryService.prototype.magentoAppliedFiltersTransformer;
    /**
     * @type {?}
     * @private
     */
    DaffMagentoCategoryService.prototype.magentoAppliedSortTransformer;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var DaffCategoryMagentoDriverModule = /** @class */ (function () {
    function DaffCategoryMagentoDriverModule() {
    }
    /**
     * @return {?}
     */
    DaffCategoryMagentoDriverModule.forRoot = /**
     * @return {?}
     */
    function () {
        return {
            ngModule: DaffCategoryMagentoDriverModule,
            providers: [
                {
                    provide: DaffCategoryDriver,
                    useExisting: DaffMagentoCategoryService
                },
                DaffMagentoCategoryPageConfigTransformerService,
                DaffMagentoCategoryResponseTransformService,
                DaffMagentoCategoryTransformerService,
                DaffMagentoAppliedFiltersTransformService,
                DaffMagentoAppliedSortOptionTransformService
            ]
        };
    };
    DaffCategoryMagentoDriverModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        CommonModule
                    ]
                },] }
    ];
    return DaffCategoryMagentoDriverModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @record
 */
function DaffCategoryAppliedFilter() { }
if (false) {
    /** @type {?} */
    DaffCategoryAppliedFilter.prototype.options;
}
/**
 * @record
 */
function DaffCategoryAppliedFilterOption() { }
if (false) {
    /** @type {?} */
    DaffCategoryAppliedFilterOption.prototype.label;
    /** @type {?} */
    DaffCategoryAppliedFilterOption.prototype.value;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { DaffCategoryActionTypes, DaffCategoryDriver, DaffCategoryFacade, DaffCategoryFilterType, DaffCategoryFromToFilterSeparator, DaffCategoryLoad, DaffCategoryLoadFailure, DaffCategoryLoadSuccess, DaffCategoryMagentoDriverModule, DaffCategoryModule, DaffCategoryPageLoad, DaffCategoryPageLoadFailure, DaffCategoryPageLoadSuccess, DaffCategoryPageResolver, DaffChangeCategoryCurrentPage, DaffChangeCategoryFilters, DaffChangeCategoryPageSize, DaffChangeCategorySortingOption, DaffDefaultCategoryPageSize, DaffMagentoAppliedFiltersTransformService, DaffMagentoAppliedSortOptionTransformService, DaffMagentoCategoryPageConfigTransformerService, DaffMagentoCategoryResponseTransformService, DaffMagentoCategoryService, DaffMagentoCategoryTransformerService, DaffSortDirectionEnum, DaffToggleCategoryFilter, MagentoGetCategoryQuery, MagentoGetProductsQuery, daffCategoryReducers, daffCategoryValidateFilters, getDaffCategorySelectors, daffCategoryReducer as ɵa, daffCategoryEntitiesReducer as ɵb, DaffCategoryStateModule as ɵc, DaffCategoryEffects as ɵd, DaffCategoryPageEffects as ɵe };
//# sourceMappingURL=daffodil-category.js.map
