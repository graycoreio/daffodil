import { createEntityAdapter } from '@ngrx/entity';
import { InjectionToken, Injectable, Inject, PLATFORM_ID, ɵɵdefineInjectable, ɵɵinject, NgModule } from '@angular/core';
import { Store, ActionsSubject, createFeatureSelector, createSelector, select, StoreModule } from '@ngrx/store';
import { isPlatformBrowser, CommonModule } from '@angular/common';
import { ofType, Actions, Effect, EffectsModule } from '@ngrx/effects';
import { __decorate, __metadata } from 'tslib';
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
/**
 * An action triggered to initialize a category load request.
 *
 * @param request - DaffCategoryRequest object
 * @template T
 */
class DaffCategoryLoad {
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
class DaffCategoryLoadSuccess {
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
class DaffCategoryLoadFailure {
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
class DaffCategoryPageLoad {
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
class DaffCategoryPageLoadSuccess {
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
class DaffCategoryPageLoadFailure {
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
class DaffChangeCategoryPageSize {
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
class DaffChangeCategoryCurrentPage {
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
class DaffChangeCategorySortingOption {
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
class DaffChangeCategoryFilters {
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
class DaffToggleCategoryFilter {
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @enum {string} */
const DaffCategoryFilterType = {
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
    filter => filter.name === name)).shift();
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
    filter => filter.name === toggledFilter.name));
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
    filter => {
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
    const filterMatchingName = (/** @type {?} */ (getAppliedFilterByName(toggledFilter.name, appliedFilters)));
    if (filterMatchingName) {
        return !!filterMatchingName.value.filter((/**
         * @param {?} filterValue
         * @return {?}
         */
        filterValue => filterValue === toggledFilter.value)).length;
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
    appliedFilter => {
        if (appliedFilter.name === toggledFilter.name) {
            appliedFilter.value = ((/** @type {?} */ (appliedFilter))).value.filter((/**
             * @param {?} value
             * @return {?}
             */
            value => value !== toggledFilter.value));
        }
        return appliedFilter;
    })).filter((/**
     * @param {?} filter
     * @return {?}
     */
    filter => filter.type === DaffCategoryFilterType.Match || filter.value.length !== 0));
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
    const filterMatchingName = (/** @type {?} */ (getAppliedFilterByName(toggledFilter.name, appliedFilters)));
    if (filterMatchingName) {
        return !!filterMatchingName.value.filter((/**
         * @param {?} filterValue
         * @return {?}
         */
        filterValue => filterValue === toggledFilter.value)).length;
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
    appliedFilter => {
        if (appliedFilter.name === toggledFilter.name) {
            appliedFilter.value = ((/** @type {?} */ (appliedFilter))).value.filter((/**
             * @param {?} value
             * @return {?}
             */
            value => value !== toggledFilter.value));
        }
        return appliedFilter;
    })).filter((/**
     * @param {?} filter
     * @return {?}
     */
    filter => filter.type === DaffCategoryFilterType.Match || filter.value.length !== 0));
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
    filter => filter.name !== filterName.name));
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
const initialState = {
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
function daffCategoryReducer(state = initialState, action) {
    switch (action.type) {
        case DaffCategoryActionTypes.CategoryLoadAction:
            return Object.assign({}, state, { categoryLoading: true, productsLoading: true });
        // This reducer must assume the call will be successful, and immediately set the applied filters to state, because the
        // GetCategory magento call doesn't return currently applied filters. If there is a bug where the wrong filters are somehow
        // applied by Magento, then this will result in a bug. Until Magento returns applied filters with a category call, this is
        // unavoidable.
        case DaffCategoryActionTypes.CategoryPageLoadAction:
            return Object.assign({}, state, { categoryLoading: true, productsLoading: true, categoryPageConfigurationState: Object.assign({}, state.categoryPageConfigurationState, action.request) });
        case DaffCategoryActionTypes.ChangeCategoryPageSizeAction:
            return Object.assign({}, state, { productsLoading: true, categoryPageConfigurationState: Object.assign({}, state.categoryPageConfigurationState, { page_size: action.pageSize }) });
        case DaffCategoryActionTypes.ChangeCategoryCurrentPageAction:
            return Object.assign({}, state, { productsLoading: true, categoryPageConfigurationState: Object.assign({}, state.categoryPageConfigurationState, { current_page: action.currentPage }) });
        case DaffCategoryActionTypes.ChangeCategorySortingOptionAction:
            return Object.assign({}, state, { productsLoading: true, categoryPageConfigurationState: Object.assign({}, state.categoryPageConfigurationState, { applied_sort_option: action.sort.option, applied_sort_direction: action.sort.direction }) });
        case DaffCategoryActionTypes.ChangeCategoryFiltersAction:
            return Object.assign({}, state, { productsLoading: true, categoryPageConfigurationState: Object.assign({}, state.categoryPageConfigurationState, { filter_requests: action.filters }) });
        case DaffCategoryActionTypes.ToggleCategoryFilterAction:
            return Object.assign({}, state, { productsLoading: true, categoryPageConfigurationState: Object.assign({}, state.categoryPageConfigurationState, { filter_requests: toggleCategoryFilter(action.filter, state.categoryPageConfigurationState.filter_requests) }) });
        // This reducer cannot spread over state, because this would wipe out the applied filters on state. Applied filters are not
        // set here for reasons stated above.
        case DaffCategoryActionTypes.CategoryLoadSuccessAction:
        case DaffCategoryActionTypes.CategoryPageLoadSuccessAction:
            return Object.assign({}, state, { categoryLoading: false, productsLoading: false, categoryPageConfigurationState: Object.assign({}, state.categoryPageConfigurationState, { id: action.response.categoryPageConfigurationState.id, current_page: action.response.categoryPageConfigurationState.current_page, page_size: action.response.categoryPageConfigurationState.page_size, filters: action.response.categoryPageConfigurationState.filters, sort_options: action.response.categoryPageConfigurationState.sort_options, total_pages: action.response.categoryPageConfigurationState.total_pages, total_products: action.response.categoryPageConfigurationState.total_products, product_ids: action.response.categoryPageConfigurationState.product_ids }) });
        case DaffCategoryActionTypes.CategoryLoadFailureAction:
        case DaffCategoryActionTypes.CategoryPageLoadFailureAction:
            return Object.assign({}, state, { categoryLoading: false, productsLoading: false, errors: [action.errorMessage] });
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
function daffCategoryEntitiesReducer(state = daffCategoryEntitiesAdapter().getInitialState(), action) {
    switch (action.type) {
        case DaffCategoryActionTypes.CategoryLoadSuccessAction:
        case DaffCategoryActionTypes.CategoryPageLoadSuccessAction:
            return daffCategoryEntitiesAdapter().upsertOne(Object.assign({ id: action.response.category.id }, action.response.category), state);
        default:
            return state;
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const daffCategoryReducers = {
    category: daffCategoryReducer,
    categoryEntities: daffCategoryEntitiesReducer
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const DaffCategoryDriver = new InjectionToken('DaffCategoryDriver');

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * The separator between a range type filter's values
 * e.g. "price": "30-40"
 * @type {?}
 */
const DaffCategoryFromToFilterSeparator = '-';
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
    (filter, i) => {
        if (filter.type === DaffCategoryFilterType.Range &&
            filter.value[0].split(DaffCategoryFromToFilterSeparator).length !== 2) {
            throw new Error('Category range filter is in an invalid format. Should be **-**');
        }
        for (let j = i + 1; j < filters.length; j++) {
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
class DaffCategoryEffects {
    /**
     * @param {?} actions$
     * @param {?} driver
     */
    constructor(actions$, driver) {
        this.actions$ = actions$;
        this.driver = driver;
        this.loadCategory$ = this.actions$.pipe(ofType(DaffCategoryActionTypes.CategoryLoadAction), switchMap((/**
         * @param {?} action
         * @return {?}
         */
        (action) => {
            daffCategoryValidateFilters(action.request.filter_requests);
            return this.driver.get(action.request).pipe(switchMap((/**
             * @param {?} resp
             * @return {?}
             */
            (resp) => of(new DaffProductGridLoadSuccess(resp.products), new DaffCategoryLoadSuccess(resp)))), catchError((/**
             * @param {?} error
             * @return {?}
             */
            error => of(new DaffCategoryLoadFailure('Failed to load the category')))));
        })));
    }
}
DaffCategoryEffects.decorators = [
    { type: Injectable }
];
/** @nocollapse */
DaffCategoryEffects.ctorParameters = () => [
    { type: Actions },
    { type: undefined, decorators: [{ type: Inject, args: [DaffCategoryDriver,] }] }
];
__decorate([
    Effect(),
    __metadata("design:type", Observable)
], DaffCategoryEffects.prototype, "loadCategory$", void 0);
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
const DaffDefaultCategoryPageSize = new InjectionToken('DaffDefaultCategoryPageSize');

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Resolves category data for category pages, and will only resolve the url after a category request succeeds or fails. This resolver expects a url
 * of the form `some/url/{id}` where `{id}` is the category id.
 */
class DaffCategoryPageResolver {
    /**
     * @param {?} platformId
     * @param {?} defaultCategoryPageSize
     * @param {?} store
     * @param {?} dispatcher
     */
    constructor(platformId, defaultCategoryPageSize, store, dispatcher) {
        this.platformId = platformId;
        this.defaultCategoryPageSize = defaultCategoryPageSize;
        this.store = store;
        this.dispatcher = dispatcher;
    }
    /**
     * @param {?} route
     * @return {?}
     */
    resolve(route) {
        this.store.dispatch(new DaffCategoryPageLoad({
            id: route.paramMap.get('id'), page_size: this.defaultCategoryPageSize
        }));
        return isPlatformBrowser(this.platformId) ? of(true) : this.dispatcher.pipe(ofType(DaffCategoryActionTypes.CategoryPageLoadSuccessAction, DaffCategoryActionTypes.CategoryPageLoadFailureAction), mapTo(true), take(1));
    }
}
DaffCategoryPageResolver.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
DaffCategoryPageResolver.ctorParameters = () => [
    { type: String, decorators: [{ type: Inject, args: [PLATFORM_ID,] }] },
    { type: Number, decorators: [{ type: Inject, args: [DaffDefaultCategoryPageSize,] }] },
    { type: Store },
    { type: ActionsSubject }
];
/** @nocollapse */ DaffCategoryPageResolver.ngInjectableDef = ɵɵdefineInjectable({ factory: function DaffCategoryPageResolver_Factory() { return new DaffCategoryPageResolver(ɵɵinject(PLATFORM_ID), ɵɵinject(DaffDefaultCategoryPageSize), ɵɵinject(Store), ɵɵinject(ActionsSubject)); }, token: DaffCategoryPageResolver, providedIn: "root" });
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
const ɵ0 = /**
 * @return {?}
 */
() => {
    /** @type {?} */
    let cache;
    return (/**
     * @template T, V, U
     * @return {?}
     */
    () => cache = cache
        ? cache
        : { selectCategoryFeatureState: createFeatureSelector('category') });
};
/** @type {?} */
const getDaffCategoryFeatureSelector = ((ɵ0))();

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
    option => filterRequest.value.indexOf(option.value) > -1))
        .map((/**
     * @param {?} option
     * @return {?}
     */
    option => {
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
    option => filterRequest.value.indexOf(option.value) > -1))
        .map((/**
     * @param {?} option
     * @return {?}
     */
    option => {
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
    option => filterRequest.value === option.value))
        .map((/**
     * @param {?} option
     * @return {?}
     */
    option => {
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
const createCategoryPageSelectors = (/**
 * @template T, V, U
 * @return {?}
 */
() => {
    /** @type {?} */
    const selectCategoryFeatureState = getDaffCategoryFeatureSelector().selectCategoryFeatureState;
    /**
     * Category State
     * @type {?}
     */
    const selectCategoryState = createSelector(selectCategoryFeatureState, (/**
     * @param {?} state
     * @return {?}
     */
    (state) => state.category));
    /**
     * CategoryPageConfigurationState State
     * @type {?}
     */
    const selectCategoryPageConfigurationState = createSelector(selectCategoryState, (/**
     * @param {?} state
     * @return {?}
     */
    (state) => state.categoryPageConfigurationState));
    /** @type {?} */
    const selectCategoryCurrentPage = createSelector(selectCategoryPageConfigurationState, (/**
     * @param {?} state
     * @return {?}
     */
    (state) => state.current_page));
    /** @type {?} */
    const selectCategoryTotalPages = createSelector(selectCategoryPageConfigurationState, (/**
     * @param {?} state
     * @return {?}
     */
    (state) => state.total_pages));
    /** @type {?} */
    const selectCategoryPageSize = createSelector(selectCategoryPageConfigurationState, (/**
     * @param {?} state
     * @return {?}
     */
    (state) => state.page_size));
    /** @type {?} */
    const selectCategoryFilters = createSelector(selectCategoryPageConfigurationState, (/**
     * @param {?} state
     * @return {?}
     */
    (state) => state.filters));
    /** @type {?} */
    const selectCategorySortOptions = createSelector(selectCategoryPageConfigurationState, (/**
     * @param {?} state
     * @return {?}
     */
    (state) => state.sort_options));
    /** @type {?} */
    const selectCategoryPageProductIds = createSelector(selectCategoryPageConfigurationState, (/**
     * @param {?} state
     * @return {?}
     */
    (state) => state.product_ids));
    /** @type {?} */
    const selectIsCategoryPageEmpty = createSelector(selectCategoryPageProductIds, (/**
     * @param {?} state
     * @return {?}
     */
    (state) => !state.length));
    /** @type {?} */
    const selectCategoryPageTotalProducts = createSelector(selectCategoryPageConfigurationState, (/**
     * @param {?} state
     * @return {?}
     */
    (state) => state.total_products));
    /** @type {?} */
    const selectCategoryPageFilterRequests = createSelector(selectCategoryPageConfigurationState, (/**
     * @param {?} state
     * @return {?}
     */
    (state) => state.filter_requests));
    /** @type {?} */
    const selectCategoryPageAppliedFilters = createSelector(selectCategoryPageFilterRequests, selectCategoryFilters, (/**
     * @param {?} filterRequests
     * @param {?} availableFilters
     * @return {?}
     */
    (filterRequests, availableFilters) => {
        if (!availableFilters.length)
            return [];
        return filterRequests.map((/**
         * @param {?} request
         * @return {?}
         */
        request => availableFilters
            .filter((/**
         * @param {?} availableFilter
         * @return {?}
         */
        availableFilter => availableFilter.name === request.name))
            .map((/**
         * @param {?} filter
         * @return {?}
         */
        filter => buildAppliedFilter(filter, request))).shift()));
    }));
    /** @type {?} */
    const selectCategoryPageAppliedSortOption = createSelector(selectCategoryPageConfigurationState, (/**
     * @param {?} state
     * @return {?}
     */
    (state) => state.applied_sort_option));
    /** @type {?} */
    const selectCategoryPageAppliedSortDirection = createSelector(selectCategoryPageConfigurationState, (/**
     * @param {?} state
     * @return {?}
     */
    (state) => state.applied_sort_direction));
    /**
     * Selected Category Id State
     * @type {?}
     */
    const selectSelectedCategoryId = createSelector(selectCategoryPageConfigurationState, (/**
     * @param {?} state
     * @return {?}
     */
    (state) => state.id));
    /**
     * Category Loading State
     * @type {?}
     */
    const selectCategoryLoading = createSelector(selectCategoryState, (/**
     * @param {?} state
     * @return {?}
     */
    (state) => state.categoryLoading));
    /**
     * Category Products Loading State
     * @type {?}
     */
    const selectCategoryProductsLoading = createSelector(selectCategoryState, (/**
     * @param {?} state
     * @return {?}
     */
    (state) => state.productsLoading));
    /**
     * Load Category Errors
     * @type {?}
     */
    const selectCategoryErrors = createSelector(selectCategoryState, (/**
     * @param {?} state
     * @return {?}
     */
    (state) => state.errors));
    return {
        selectCategoryState,
        selectCategoryPageConfigurationState,
        selectCategoryCurrentPage,
        selectCategoryTotalPages,
        selectCategoryPageSize,
        selectCategoryFilters,
        selectCategorySortOptions,
        selectCategoryPageProductIds,
        selectIsCategoryPageEmpty,
        selectCategoryPageTotalProducts,
        selectCategoryPageFilterRequests,
        selectCategoryPageAppliedFilters,
        selectCategoryPageAppliedSortOption,
        selectCategoryPageAppliedSortDirection,
        selectSelectedCategoryId,
        selectCategoryLoading,
        selectCategoryProductsLoading,
        selectCategoryErrors
    };
});
const ɵ0$1 = createCategoryPageSelectors;
const ɵ1 = /**
 * @return {?}
 */
() => {
    /** @type {?} */
    let cache;
    return (/**
     * @template T, V, U
     * @return {?}
     */
    () => cache = cache
        ? cache
        : createCategoryPageSelectors());
};
/** @type {?} */
const getDaffCategoryPageSelectors = ((ɵ1))();

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
const createCategoryFeatureSelectors = (/**
 * @template T, V, U
 * @return {?}
 */
() => {
    /** @type {?} */
    const entitiesSelectors = daffCategoryEntitiesAdapter().getSelectors();
    /** @type {?} */
    const categoryFeatureState = getDaffCategoryFeatureSelector().selectCategoryFeatureState;
    /**
     * Category Entities State
     * @type {?}
     */
    const selectCategoryEntitiesState = createSelector(categoryFeatureState, (/**
     * @param {?} state
     * @return {?}
     */
    (state) => state.categoryEntities));
    /** @type {?} */
    const selectCategoryIds = createSelector(selectCategoryEntitiesState, entitiesSelectors.selectIds);
    /** @type {?} */
    const selectCategoryEntities = createSelector(selectCategoryEntitiesState, entitiesSelectors.selectEntities);
    /** @type {?} */
    const selectAllCategories = createSelector(selectCategoryEntitiesState, entitiesSelectors.selectAll);
    /** @type {?} */
    const selectCategoryTotal = createSelector(selectCategoryEntitiesState, entitiesSelectors.selectTotal);
    return {
        selectCategoryEntitiesState,
        selectCategoryIds,
        selectCategoryEntities,
        selectAllCategories,
        selectCategoryTotal
    };
});
const ɵ0$2 = createCategoryFeatureSelectors;
const ɵ1$1 = /**
 * @return {?}
 */
() => {
    /** @type {?} */
    let cache;
    return (/**
     * @template T, V, U
     * @return {?}
     */
    () => cache = cache
        ? cache
        : createCategoryFeatureSelectors());
};
/** @type {?} */
const getDaffCategoryEntitiesSelectors = ((ɵ1$1))();

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
const createCategorySelectors = (/**
 * @template T, V, U, W
 * @return {?}
 */
() => {
    const { selectProductEntities, selectAllProducts } = getDaffProductSelectors();
    const { selectCategoryEntities } = getDaffCategoryEntitiesSelectors();
    const { selectSelectedCategoryId, selectCategoryPageProductIds } = getDaffCategoryPageSelectors();
    /**
     * Combinatoric Category Selectors
     * @type {?}
     */
    const selectSelectedCategory = createSelector(selectCategoryEntities, selectSelectedCategoryId, (/**
     * @param {?} entities
     * @param {?} selectedCategoryId
     * @return {?}
     */
    (entities, selectedCategoryId) => entities[selectedCategoryId]));
    /** @type {?} */
    const selectCategoryPageProducts = createSelector(selectCategoryPageProductIds, selectProductEntities, (/**
     * @param {?} ids
     * @param {?} products
     * @return {?}
     */
    (ids, products) => ids.map((/**
     * @param {?} id
     * @return {?}
     */
    id => products[id])).filter((/**
     * @param {?} p
     * @return {?}
     */
    p => p != null))));
    /** @type {?} */
    const selectCategory = createSelector(selectCategoryEntities, (/**
     * @param {?} entities
     * @param {?} props
     * @return {?}
     */
    (entities, props) => entities[props.id]));
    /** @type {?} */
    const selectProductsByCategory = createSelector(selectCategoryEntities, selectAllProducts, (/**
     * @param {?} entities
     * @param {?} products
     * @param {?} props
     * @return {?}
     */
    (entities, products, props) => entities[props.id] && entities[props.id].product_ids
        ? products.filter((/**
         * @param {?} product
         * @return {?}
         */
        product => entities[props.id].product_ids.indexOf(product.id) >= 0))
        : null));
    /** @type {?} */
    const selectTotalProductsByCategory = createSelector(selectCategoryEntities, selectAllProducts, (/**
     * @param {?} entities
     * @param {?} products
     * @param {?} props
     * @return {?}
     */
    (entities, products, props) => selectProductsByCategory.projector(entities, products, { id: props.id })
        ? selectProductsByCategory.projector(entities, products, { id: props.id }).length
        : null));
    return Object.assign({}, getDaffCategoryFeatureSelector(), getDaffCategoryEntitiesSelectors(), getDaffCategoryPageSelectors(), { selectSelectedCategory,
        selectCategoryPageProducts,
        selectCategory,
        selectProductsByCategory,
        selectTotalProductsByCategory });
});
const ɵ0$3 = createCategorySelectors;
const ɵ1$2 = /**
 * @return {?}
 */
() => {
    /** @type {?} */
    let cache;
    return (/**
     * @template T, V, U, W
     * @return {?}
     */
    () => cache = cache
        ? cache
        : createCategorySelectors());
};
/** @type {?} */
const getDaffCategorySelectors = ((ɵ1$2))();

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @template T, V, U, W
 */
class DaffCategoryPageEffects {
    /**
     * @param {?} actions$
     * @param {?} driver
     * @param {?} store
     */
    constructor(actions$, driver, store) {
        this.actions$ = actions$;
        this.driver = driver;
        this.store = store;
        this.categorySelectors = getDaffCategorySelectors();
        this.loadCategoryPage$ = this.actions$.pipe(ofType(DaffCategoryActionTypes.CategoryPageLoadAction), switchMap((/**
         * @param {?} action
         * @return {?}
         */
        (action) => {
            daffCategoryValidateFilters(action.request.filter_requests);
            return this.processCategoryGetRequest(action.request);
        })));
        this.changeCategoryPageSize$ = this.actions$.pipe(ofType(DaffCategoryActionTypes.ChangeCategoryPageSizeAction), withLatestFrom(this.store.pipe(select(this.categorySelectors.selectCategoryPageConfigurationState))), switchMap((/**
         * @param {?} __0
         * @return {?}
         */
        ([action, categoryRequest]) => this.processCategoryGetRequest(Object.assign({}, categoryRequest, { page_size: action.pageSize })))));
        this.changeCategoryCurrentPage$ = this.actions$.pipe(ofType(DaffCategoryActionTypes.ChangeCategoryCurrentPageAction), withLatestFrom(this.store.pipe(select(this.categorySelectors.selectCategoryPageConfigurationState))), switchMap((/**
         * @param {?} __0
         * @return {?}
         */
        ([action, categoryRequest]) => this.processCategoryGetRequest(Object.assign({}, categoryRequest, { current_page: action.currentPage })))));
        this.changeCategoryFilters$ = this.actions$.pipe(ofType(DaffCategoryActionTypes.ChangeCategoryFiltersAction), withLatestFrom(this.store.pipe(select(this.categorySelectors.selectCategoryPageConfigurationState))), switchMap((/**
         * @param {?} __0
         * @return {?}
         */
        ([action, categoryRequest]) => {
            daffCategoryValidateFilters(action.filters);
            return this.processCategoryGetRequest(Object.assign({}, categoryRequest, { filter_requests: action.filters }));
        })));
        this.toggleCategoryFilter$ = this.actions$.pipe(ofType(DaffCategoryActionTypes.ToggleCategoryFilterAction), withLatestFrom(this.store.pipe(select(this.categorySelectors.selectCategoryPageConfigurationState))), switchMap((/**
         * @param {?} __0
         * @return {?}
         */
        ([action, categoryPageConfigurationState]) => {
            daffCategoryValidateFilters(categoryPageConfigurationState.filter_requests);
            return this.processCategoryGetRequest(Object.assign({}, categoryPageConfigurationState));
        })));
        this.changeCategorySort$ = this.actions$.pipe(ofType(DaffCategoryActionTypes.ChangeCategorySortingOptionAction), withLatestFrom(this.store.pipe(select(this.categorySelectors.selectCategoryPageConfigurationState))), switchMap((/**
         * @param {?} __0
         * @return {?}
         */
        ([action, categoryRequest]) => this.processCategoryGetRequest(Object.assign({}, categoryRequest, { applied_sort_option: action.sort.option, applied_sort_direction: action.sort.direction })))));
    }
    /**
     * @private
     * @param {?} payload
     * @return {?}
     */
    processCategoryGetRequest(payload) {
        return this.driver.get(payload).pipe(switchMap((/**
         * @param {?} resp
         * @return {?}
         */
        (resp) => [
            new DaffProductGridLoadSuccess(resp.products),
            new DaffCategoryPageLoadSuccess(resp)
        ])), catchError((/**
         * @param {?} error
         * @return {?}
         */
        error => of(new DaffCategoryPageLoadFailure('Failed to load the category')))));
    }
}
DaffCategoryPageEffects.decorators = [
    { type: Injectable }
];
/** @nocollapse */
DaffCategoryPageEffects.ctorParameters = () => [
    { type: Actions },
    { type: undefined, decorators: [{ type: Inject, args: [DaffCategoryDriver,] }] },
    { type: Store }
];
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
class DaffCategoryStateModule {
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class DaffCategoryModule {
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * A facade for accessing state for the currently selected category.
 * @template T, V, U, W
 */
class DaffCategoryFacade {
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
/** @nocollapse */ DaffCategoryFacade.ngInjectableDef = ɵɵdefineInjectable({ factory: function DaffCategoryFacade_Factory() { return new DaffCategoryFacade(ɵɵinject(Store)); }, token: DaffCategoryFacade, providedIn: DaffCategoryModule });
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
const MagentoGetCategoryQuery = gql `
query MagentoGetCategoryQuery($filters: CategoryFilterInput){
	categoryList(filters: $filters) {
		id
		name
		level
		description
		breadcrumbs {
			category_id
			category_name
			category_level
			category_url_key
		}
		products {
			items {
				sku
			}
		}
		children_count
	}
}`;

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * This query only exists because products and their associated aggregations/filter cannot
 * be retrieved through a category call.
 * @type {?}
 */
const MagentoGetProductsQuery = gql `
query MagentoGetProducts($filter: ProductAttributeFilterInput!, $search: String, $pageSize: Int, $currentPage: Int, $sort: ProductAttributeSortInput)
{
	products(filter: $filter, search: $search, pageSize: $pageSize, currentPage: $currentPage, sort: $sort)
	{
		total_count
		items {
			...product
		}
		page_info {
			page_size
			current_page
			total_pages
		}
	}
}
${magentoProductFragment}
`;

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @enum {string} */
const MagentoCategoryFilterActionEnum = {
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
class DaffMagentoAppliedFiltersTransformService {
    /**
     * @param {?} categoryId
     * @param {?} daffFilters
     * @return {?}
     */
    transform(categoryId, daffFilters) {
        /** @type {?} */
        const magentoFilters = {
            category_id: {
                [MagentoCategoryFilterActionEnum.Equal]: categoryId
            }
        };
        if (!daffFilters)
            return magentoFilters;
        daffFilters.forEach((/**
         * @param {?} filter
         * @return {?}
         */
        filter => {
            // The FromTo filter needs special treatment, because Magento accepts the "from" and "to" filters
            // separately (it also outputs FromTo filter pairs together)
            if (filter.type === DaffCategoryFilterType.Range) {
                /** @type {?} */
                const fromToValues = filter.value[0].split(DaffCategoryFromToFilterSeparator);
                magentoFilters[filter.name] = Object.assign({}, magentoFilters[filter.name], this.getRangeFromValue(fromToValues[0]), this.getRangeToValue(fromToValues[1]));
            }
            else {
                magentoFilters[filter.name] = Object.assign({}, magentoFilters[filter.name], { [this.getFilterAction(filter.type)]: this.getFilterValue(filter.type, filter.value) });
            }
        }));
        return magentoFilters;
    }
    /**
     * Returns an In action for Equal type and a Match action for Match type.
     * @private
     * @param {?} type
     * @return {?}
     */
    getFilterAction(type) {
        return type === DaffCategoryFilterType.Equal
            ? MagentoCategoryFilterActionEnum.In
            : MagentoCategoryFilterActionEnum.Match;
    }
    /**
     * Returns an array for Equal type and a string for Match type.
     * @private
     * @param {?} type
     * @param {?} value
     * @return {?}
     */
    getFilterValue(type, value) {
        return type === DaffCategoryFilterType.Equal ? value : value[0];
    }
    /**
     * @private
     * @param {?} fromValue
     * @return {?}
     */
    getRangeFromValue(fromValue) {
        return fromValue !== '*' ? { [MagentoCategoryFilterActionEnum.From]: fromValue } : null;
    }
    /**
     * @private
     * @param {?} toValue
     * @return {?}
     */
    getRangeToValue(toValue) {
        return toValue !== '*' ? { [MagentoCategoryFilterActionEnum.To]: toValue } : null;
    }
}
DaffMagentoAppliedFiltersTransformService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */ DaffMagentoAppliedFiltersTransformService.ngInjectableDef = ɵɵdefineInjectable({ factory: function DaffMagentoAppliedFiltersTransformService_Factory() { return new DaffMagentoAppliedFiltersTransformService(); }, token: DaffMagentoAppliedFiltersTransformService, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @enum {string} */
const MagentoSortDirectionEnum = {
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
const DaffSortDirectionEnum = {
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
class DaffMagentoAppliedSortOptionTransformService {
    /**
     * @param {?} appliedOption
     * @param {?} appliedDirection
     * @return {?}
     */
    transform(appliedOption, appliedDirection) {
        return {
            [appliedOption]: this.transformDirection(appliedDirection)
        };
    }
    /**
     * @private
     * @param {?} direction
     * @return {?}
     */
    transformDirection(direction) {
        if (direction === DaffSortDirectionEnum.Ascending) {
            return MagentoSortDirectionEnum.Ascending;
        }
        else if (direction === DaffSortDirectionEnum.Decending) {
            return MagentoSortDirectionEnum.Decending;
        }
    }
}
DaffMagentoAppliedSortOptionTransformService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */ DaffMagentoAppliedSortOptionTransformService.ngInjectableDef = ɵɵdefineInjectable({ factory: function DaffMagentoAppliedSortOptionTransformService_Factory() { return new DaffMagentoAppliedSortOptionTransformService(); }, token: DaffMagentoAppliedSortOptionTransformService, providedIn: "root" });

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
    const index = sort_fields.options.findIndex((/**
     * @param {?} option
     * @return {?}
     */
    option => sort_fields.default === option.value));
    return Object.assign({}, sort_fields, { options: [
            sort_fields.options[index],
            ...sort_fields.options.slice(0, index),
            ...sort_fields.options.slice(index + 1)
        ] });
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class DaffMagentoCategoryPageConfigTransformerService {
    /**
     * @param {?} categoryResponse
     * @return {?}
     */
    transform(categoryResponse) {
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
            product => product.sku))
        };
    }
    /**
     * @private
     * @param {?} filter
     * @return {?}
     */
    transformAggregate(filter) {
        /** @type {?} */
        const filterType = this.transformAggregateType(filter.type);
        return {
            label: filter.label,
            type: filterType,
            name: filter.attribute_code,
            options: filter.options.map((/**
             * @param {?} option
             * @return {?}
             */
            option => {
                return {
                    label: option.label,
                    value: filterType === DaffCategoryFilterType.Range ? this.transformRangeValue(option.value) : option.value,
                    count: option.count
                };
            }))
        };
    }
    /**
     * @private
     * @param {?} type
     * @return {?}
     */
    transformAggregateType(type) {
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
    }
    /**
     * @private
     * @param {?} value
     * @return {?}
     */
    transformRangeValue(value) {
        return value.replace('_', DaffCategoryFromToFilterSeparator);
    }
}
DaffMagentoCategoryPageConfigTransformerService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */ DaffMagentoCategoryPageConfigTransformerService.ngInjectableDef = ɵɵdefineInjectable({ factory: function DaffMagentoCategoryPageConfigTransformerService_Factory() { return new DaffMagentoCategoryPageConfigTransformerService(); }, token: DaffMagentoCategoryPageConfigTransformerService, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class DaffMagentoCategoryTransformerService {
    /**
     * @param {?} category
     * @return {?}
     */
    transform(category) {
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
                breadcrumb => this.transformBreadcrumb(breadcrumb)))
                    .sort((/**
                 * @param {?} a
                 * @param {?} b
                 * @return {?}
                 */
                (a, b) => a.categoryLevel - b.categoryLevel)) :
                null,
            product_ids: category.products.items.map((/**
             * @param {?} product
             * @return {?}
             */
            product => product.sku)),
            total_products: category.products.items.length
        };
    }
    /**
     * @private
     * @param {?} breadcrumb
     * @return {?}
     */
    transformBreadcrumb(breadcrumb) {
        return {
            categoryId: breadcrumb.category_id,
            categoryName: breadcrumb.category_name,
            categoryLevel: breadcrumb.category_level,
            categoryUrlKey: breadcrumb.category_url_key
        };
    }
}
DaffMagentoCategoryTransformerService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */ DaffMagentoCategoryTransformerService.ngInjectableDef = ɵɵdefineInjectable({ factory: function DaffMagentoCategoryTransformerService_Factory() { return new DaffMagentoCategoryTransformerService(); }, token: DaffMagentoCategoryTransformerService, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class DaffMagentoCategoryResponseTransformService {
    /**
     * @param {?} magentoCategoryTransformerService
     * @param {?} magentoCategoryPageConfigurationTransformerService
     */
    constructor(magentoCategoryTransformerService, magentoCategoryPageConfigurationTransformerService) {
        this.magentoCategoryTransformerService = magentoCategoryTransformerService;
        this.magentoCategoryPageConfigurationTransformerService = magentoCategoryPageConfigurationTransformerService;
    }
    /**
     * @param {?} completeCategory
     * @return {?}
     */
    transform(completeCategory) {
        return Object.assign({ magentoCompleteCategoryResponse: completeCategory }, { category: this.magentoCategoryTransformerService.transform(completeCategory.category), categoryPageConfigurationState: this.magentoCategoryPageConfigurationTransformerService.transform(completeCategory), products: transformManyMagentoProducts(completeCategory.products) });
    }
}
DaffMagentoCategoryResponseTransformService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
DaffMagentoCategoryResponseTransformService.ctorParameters = () => [
    { type: DaffMagentoCategoryTransformerService },
    { type: DaffMagentoCategoryPageConfigTransformerService }
];
/** @nocollapse */ DaffMagentoCategoryResponseTransformService.ngInjectableDef = ɵɵdefineInjectable({ factory: function DaffMagentoCategoryResponseTransformService_Factory() { return new DaffMagentoCategoryResponseTransformService(ɵɵinject(DaffMagentoCategoryTransformerService), ɵɵinject(DaffMagentoCategoryPageConfigTransformerService)); }, token: DaffMagentoCategoryResponseTransformService, providedIn: "root" });
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
const MagentoGetCategoryAggregations = gql `
query MagentoGetProducts($filter: ProductAttributeFilterInput!)
{
	products(filter: $filter)
	{
		aggregations {
			label
			count
			attribute_code
			options {
					count
					label
					value
			}
		}
		sort_fields {
			default
			options {
				label
				value
			}
		}
	}
}`;

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * A query for getting aggregation types.
 * @type {?}
 */
const MagentoGetCustomAttributeMetadata = gql `
query MagentoGetCustomAttributeMetadata($attributes: [AttributeInput!]!)
{
	customAttributeMetadata(attributes: $attributes)
	{
		items {
      attribute_code
      attribute_type
      input_type
    }
	}
}`;

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
    return Object.assign({}, aggregationResponse, { products: Object.assign({}, aggregationResponse.products, { aggregations: [
                ...aggregationResponse.products.aggregations.map((/**
                 * @param {?} aggregate
                 * @return {?}
                 */
                (aggregate) => {
                    return Object.assign({}, aggregate, { type: getMatchedAttributeType(aggregate, attributeResponse) });
                }))
            ] }) });
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
    item => item.attribute_code === aggregate.attribute_code))[0].input_type;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class DaffMagentoCategoryService {
    /**
     * @param {?} apollo
     * @param {?} magentoCategoryResponseTransformer
     * @param {?} magentoAppliedFiltersTransformer
     * @param {?} magentoAppliedSortTransformer
     */
    constructor(apollo, magentoCategoryResponseTransformer, magentoAppliedFiltersTransformer, magentoAppliedSortTransformer) {
        this.apollo = apollo;
        this.magentoCategoryResponseTransformer = magentoCategoryResponseTransformer;
        this.magentoAppliedFiltersTransformer = magentoAppliedFiltersTransformer;
        this.magentoAppliedSortTransformer = magentoAppliedSortTransformer;
    }
    //todo the MagentoGetCategoryQuery needs to get its own product ids.
    /**
     * Gets a category based on parameters. Default current_page is 1, and default page_size is 20.
     * @param {?} categoryRequest A DaffCategoryRequest object.
     * @return {?}
     */
    get(categoryRequest) {
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
            (aggregationResult) => this.apollo.query({
                query: MagentoGetCustomAttributeMetadata,
                variables: {
                    attributes: aggregationResult.data.products.aggregations
                        .filter((/**
                     * @param {?} aggregate
                     * @return {?}
                     */
                    aggregate => aggregate.attribute_code !== 'category_id'))
                        .map((/**
                     * @param {?} aggregate
                     * @return {?}
                     */
                    aggregate => buildCustomMetadataAttribute(aggregate)))
                }
            }).pipe(map((/**
             * @param {?} response
             * @return {?}
             */
            response => addMetadataTypesToAggregates(response.data, aggregationResult.data))))))),
            this.apollo.query({
                query: MagentoGetProductsQuery,
                variables: this.getProductsQueryVariables(categoryRequest)
            })
        ]).pipe(map((/**
         * @param {?} result
         * @return {?}
         */
        (result) => this.buildCompleteCategoryResponse(result[0].data, result[1], result[2].data))), map((/**
         * @param {?} finalResult
         * @return {?}
         */
        (finalResult) => this.magentoCategoryResponseTransformer.transform(finalResult))));
    }
    /**
     * @private
     * @param {?} request
     * @return {?}
     */
    getProductsQueryVariables(request) {
        /** @type {?} */
        const queryVariables = {
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
    }
    /**
     * @private
     * @param {?} categoryResponse
     * @param {?} aggregationsAndSortsResponse
     * @param {?} productsResponse
     * @return {?}
     */
    buildCompleteCategoryResponse(categoryResponse, aggregationsAndSortsResponse, productsResponse) {
        return {
            category: categoryResponse.categoryList[0],
            products: productsResponse.products.items,
            aggregates: aggregationsAndSortsResponse.products.aggregations,
            sort_fields: aggregationsAndSortsResponse.products.sort_fields,
            total_count: productsResponse.products.total_count,
            page_info: productsResponse.products.page_info
        };
    }
}
DaffMagentoCategoryService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
DaffMagentoCategoryService.ctorParameters = () => [
    { type: Apollo },
    { type: DaffMagentoCategoryResponseTransformService },
    { type: DaffMagentoAppliedFiltersTransformService },
    { type: DaffMagentoAppliedSortOptionTransformService }
];
/** @nocollapse */ DaffMagentoCategoryService.ngInjectableDef = ɵɵdefineInjectable({ factory: function DaffMagentoCategoryService_Factory() { return new DaffMagentoCategoryService(ɵɵinject(Apollo), ɵɵinject(DaffMagentoCategoryResponseTransformService), ɵɵinject(DaffMagentoAppliedFiltersTransformService), ɵɵinject(DaffMagentoAppliedSortOptionTransformService)); }, token: DaffMagentoCategoryService, providedIn: "root" });
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
class DaffCategoryMagentoDriverModule {
    /**
     * @return {?}
     */
    static forRoot() {
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
    }
}
DaffCategoryMagentoDriverModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule
                ]
            },] }
];

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
