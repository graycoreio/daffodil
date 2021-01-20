(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@ngrx/entity'), require('@angular/core'), require('@ngrx/store'), require('@angular/common'), require('@ngrx/effects'), require('rxjs/operators'), require('rxjs'), require('@daffodil/product'), require('apollo-angular'), require('graphql-tag')) :
    typeof define === 'function' && define.amd ? define('@daffodil/category', ['exports', '@ngrx/entity', '@angular/core', '@ngrx/store', '@angular/common', '@ngrx/effects', 'rxjs/operators', 'rxjs', '@daffodil/product', 'apollo-angular', 'graphql-tag'], factory) :
    (global = global || self, factory((global.daffodil = global.daffodil || {}, global.daffodil.category = {}), global.entity, global.ng.core, global.store, global.ng.common, global.effects, global.rxjs.operators, global.rxjs, global.product, global.apolloAngular, global.gql));
}(this, function (exports, entity, core, store, common, effects, operators, rxjs, product, apolloAngular, gql) { 'use strict';

    gql = gql && gql.hasOwnProperty('default') ? gql['default'] : gql;

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0

    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.

    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */
    /* global Reflect, Promise */

    var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };

    function __extends(d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var __assign = function() {
        __assign = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };

    function __rest(s, e) {
        var t = {};
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
            t[p] = s[p];
        if (s != null && typeof Object.getOwnPropertySymbols === "function")
            for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
                if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                    t[p[i]] = s[p[i]];
            }
        return t;
    }

    function __decorate(decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
        return function (target, key) { decorator(target, key, paramIndex); }
    }

    function __metadata(metadataKey, metadataValue) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
            function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
            function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    }

    function __generator(thisArg, body) {
        var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
        function verb(n) { return function (v) { return step([n, v]); }; }
        function step(op) {
            if (f) throw new TypeError("Generator is already executing.");
            while (_) try {
                if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
                if (y = 0, t) op = [op[0] & 2, t.value];
                switch (op[0]) {
                    case 0: case 1: t = op; break;
                    case 4: _.label++; return { value: op[1], done: false };
                    case 5: _.label++; y = op[1]; op = [0]; continue;
                    case 7: op = _.ops.pop(); _.trys.pop(); continue;
                    default:
                        if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                        if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                        if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                        if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                        if (t[2]) _.ops.pop();
                        _.trys.pop(); continue;
                }
                op = body.call(thisArg, _);
            } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
            if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
        }
    }

    function __exportStar(m, exports) {
        for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
    }

    function __values(o) {
        var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
        if (m) return m.call(o);
        return {
            next: function () {
                if (o && i >= o.length) o = void 0;
                return { value: o && o[i++], done: !o };
            }
        };
    }

    function __read(o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m) return o;
        var i = m.call(o), r, ar = [], e;
        try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
        }
        catch (error) { e = { error: error }; }
        finally {
            try {
                if (r && !r.done && (m = i["return"])) m.call(i);
            }
            finally { if (e) throw e.error; }
        }
        return ar;
    }

    function __spread() {
        for (var ar = [], i = 0; i < arguments.length; i++)
            ar = ar.concat(__read(arguments[i]));
        return ar;
    }

    function __spreadArrays() {
        for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
        for (var r = Array(s), k = 0, i = 0; i < il; i++)
            for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                r[k] = a[j];
        return r;
    };

    function __await(v) {
        return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var g = generator.apply(thisArg, _arguments || []), i, q = [];
        return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
        function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
        function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
        function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
        function fulfill(value) { resume("next", value); }
        function reject(value) { resume("throw", value); }
        function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
    }

    function __asyncDelegator(o) {
        var i, p;
        return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
        function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
    }

    function __asyncValues(o) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var m = o[Symbol.asyncIterator], i;
        return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
        function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
        function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
    }

    function __makeTemplateObject(cooked, raw) {
        if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
        return cooked;
    };

    function __importStar(mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
        result.default = mod;
        return result;
    }

    function __importDefault(mod) {
        return (mod && mod.__esModule) ? mod : { default: mod };
    }

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
    var   /**
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
    var   /**
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
    var   /**
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
    var   /**
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
    var   /**
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
    var   /**
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
    var   /**
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
    var   /**
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
    var   /**
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
    var   /**
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
    var   /**
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
        return entity.createEntityAdapter();
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
    var DaffCategoryDriver = new core.InjectionToken('DaffCategoryDriver');

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
            this.loadCategory$ = this.actions$.pipe(effects.ofType(DaffCategoryActionTypes.CategoryLoadAction), operators.switchMap((/**
             * @param {?} action
             * @return {?}
             */
            function (action) {
                daffCategoryValidateFilters(action.request.filter_requests);
                return _this.driver.get(action.request).pipe(operators.switchMap((/**
                 * @param {?} resp
                 * @return {?}
                 */
                function (resp) { return rxjs.of(new product.DaffProductGridLoadSuccess(resp.products), new DaffCategoryLoadSuccess(resp)); })), operators.catchError((/**
                 * @param {?} error
                 * @return {?}
                 */
                function (error) { return rxjs.of(new DaffCategoryLoadFailure('Failed to load the category')); })));
            })));
        }
        DaffCategoryEffects.decorators = [
            { type: core.Injectable }
        ];
        /** @nocollapse */
        DaffCategoryEffects.ctorParameters = function () { return [
            { type: effects.Actions },
            { type: undefined, decorators: [{ type: core.Inject, args: [DaffCategoryDriver,] }] }
        ]; };
        __decorate([
            effects.Effect(),
            __metadata("design:type", rxjs.Observable)
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
    var DaffDefaultCategoryPageSize = new core.InjectionToken('DaffDefaultCategoryPageSize');

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
            return common.isPlatformBrowser(this.platformId) ? rxjs.of(true) : this.dispatcher.pipe(effects.ofType(DaffCategoryActionTypes.CategoryPageLoadSuccessAction, DaffCategoryActionTypes.CategoryPageLoadFailureAction), operators.mapTo(true), operators.take(1));
        };
        DaffCategoryPageResolver.decorators = [
            { type: core.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */
        DaffCategoryPageResolver.ctorParameters = function () { return [
            { type: String, decorators: [{ type: core.Inject, args: [core.PLATFORM_ID,] }] },
            { type: Number, decorators: [{ type: core.Inject, args: [DaffDefaultCategoryPageSize,] }] },
            { type: store.Store },
            { type: store.ActionsSubject }
        ]; };
        /** @nocollapse */ DaffCategoryPageResolver.ngInjectableDef = core.ɵɵdefineInjectable({ factory: function DaffCategoryPageResolver_Factory() { return new DaffCategoryPageResolver(core.ɵɵinject(core.PLATFORM_ID), core.ɵɵinject(DaffDefaultCategoryPageSize), core.ɵɵinject(store.Store), core.ɵɵinject(store.ActionsSubject)); }, token: DaffCategoryPageResolver, providedIn: "root" });
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
            : { selectCategoryFeatureState: store.createFeatureSelector('category') }; });
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
        var selectCategoryState = store.createSelector(selectCategoryFeatureState, (/**
         * @param {?} state
         * @return {?}
         */
        function (state) { return state.category; }));
        /**
         * CategoryPageConfigurationState State
         * @type {?}
         */
        var selectCategoryPageConfigurationState = store.createSelector(selectCategoryState, (/**
         * @param {?} state
         * @return {?}
         */
        function (state) { return state.categoryPageConfigurationState; }));
        /** @type {?} */
        var selectCategoryCurrentPage = store.createSelector(selectCategoryPageConfigurationState, (/**
         * @param {?} state
         * @return {?}
         */
        function (state) { return state.current_page; }));
        /** @type {?} */
        var selectCategoryTotalPages = store.createSelector(selectCategoryPageConfigurationState, (/**
         * @param {?} state
         * @return {?}
         */
        function (state) { return state.total_pages; }));
        /** @type {?} */
        var selectCategoryPageSize = store.createSelector(selectCategoryPageConfigurationState, (/**
         * @param {?} state
         * @return {?}
         */
        function (state) { return state.page_size; }));
        /** @type {?} */
        var selectCategoryFilters = store.createSelector(selectCategoryPageConfigurationState, (/**
         * @param {?} state
         * @return {?}
         */
        function (state) { return state.filters; }));
        /** @type {?} */
        var selectCategorySortOptions = store.createSelector(selectCategoryPageConfigurationState, (/**
         * @param {?} state
         * @return {?}
         */
        function (state) { return state.sort_options; }));
        /** @type {?} */
        var selectCategoryPageProductIds = store.createSelector(selectCategoryPageConfigurationState, (/**
         * @param {?} state
         * @return {?}
         */
        function (state) { return state.product_ids; }));
        /** @type {?} */
        var selectIsCategoryPageEmpty = store.createSelector(selectCategoryPageProductIds, (/**
         * @param {?} state
         * @return {?}
         */
        function (state) { return !state.length; }));
        /** @type {?} */
        var selectCategoryPageTotalProducts = store.createSelector(selectCategoryPageConfigurationState, (/**
         * @param {?} state
         * @return {?}
         */
        function (state) { return state.total_products; }));
        /** @type {?} */
        var selectCategoryPageFilterRequests = store.createSelector(selectCategoryPageConfigurationState, (/**
         * @param {?} state
         * @return {?}
         */
        function (state) { return state.filter_requests; }));
        /** @type {?} */
        var selectCategoryPageAppliedFilters = store.createSelector(selectCategoryPageFilterRequests, selectCategoryFilters, (/**
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
        var selectCategoryPageAppliedSortOption = store.createSelector(selectCategoryPageConfigurationState, (/**
         * @param {?} state
         * @return {?}
         */
        function (state) { return state.applied_sort_option; }));
        /** @type {?} */
        var selectCategoryPageAppliedSortDirection = store.createSelector(selectCategoryPageConfigurationState, (/**
         * @param {?} state
         * @return {?}
         */
        function (state) { return state.applied_sort_direction; }));
        /**
         * Selected Category Id State
         * @type {?}
         */
        var selectSelectedCategoryId = store.createSelector(selectCategoryPageConfigurationState, (/**
         * @param {?} state
         * @return {?}
         */
        function (state) { return state.id; }));
        /**
         * Category Loading State
         * @type {?}
         */
        var selectCategoryLoading = store.createSelector(selectCategoryState, (/**
         * @param {?} state
         * @return {?}
         */
        function (state) { return state.categoryLoading; }));
        /**
         * Category Products Loading State
         * @type {?}
         */
        var selectCategoryProductsLoading = store.createSelector(selectCategoryState, (/**
         * @param {?} state
         * @return {?}
         */
        function (state) { return state.productsLoading; }));
        /**
         * Load Category Errors
         * @type {?}
         */
        var selectCategoryErrors = store.createSelector(selectCategoryState, (/**
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
        var selectCategoryEntitiesState = store.createSelector(categoryFeatureState, (/**
         * @param {?} state
         * @return {?}
         */
        function (state) { return state.categoryEntities; }));
        /** @type {?} */
        var selectCategoryIds = store.createSelector(selectCategoryEntitiesState, entitiesSelectors.selectIds);
        /** @type {?} */
        var selectCategoryEntities = store.createSelector(selectCategoryEntitiesState, entitiesSelectors.selectEntities);
        /** @type {?} */
        var selectAllCategories = store.createSelector(selectCategoryEntitiesState, entitiesSelectors.selectAll);
        /** @type {?} */
        var selectCategoryTotal = store.createSelector(selectCategoryEntitiesState, entitiesSelectors.selectTotal);
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
        var _a = product.getDaffProductSelectors(), selectProductEntities = _a.selectProductEntities, selectAllProducts = _a.selectAllProducts;
        var selectCategoryEntities = getDaffCategoryEntitiesSelectors().selectCategoryEntities;
        var _b = getDaffCategoryPageSelectors(), selectSelectedCategoryId = _b.selectSelectedCategoryId, selectCategoryPageProductIds = _b.selectCategoryPageProductIds;
        /**
         * Combinatoric Category Selectors
         * @type {?}
         */
        var selectSelectedCategory = store.createSelector(selectCategoryEntities, selectSelectedCategoryId, (/**
         * @param {?} entities
         * @param {?} selectedCategoryId
         * @return {?}
         */
        function (entities, selectedCategoryId) { return entities[selectedCategoryId]; }));
        /** @type {?} */
        var selectCategoryPageProducts = store.createSelector(selectCategoryPageProductIds, selectProductEntities, (/**
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
        var selectCategory = store.createSelector(selectCategoryEntities, (/**
         * @param {?} entities
         * @param {?} props
         * @return {?}
         */
        function (entities, props) { return entities[props.id]; }));
        /** @type {?} */
        var selectProductsByCategory = store.createSelector(selectCategoryEntities, selectAllProducts, (/**
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
        var selectTotalProductsByCategory = store.createSelector(selectCategoryEntities, selectAllProducts, (/**
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
        function DaffCategoryPageEffects(actions$, driver, store$1) {
            var _this = this;
            this.actions$ = actions$;
            this.driver = driver;
            this.store = store$1;
            this.categorySelectors = getDaffCategorySelectors();
            this.loadCategoryPage$ = this.actions$.pipe(effects.ofType(DaffCategoryActionTypes.CategoryPageLoadAction), operators.switchMap((/**
             * @param {?} action
             * @return {?}
             */
            function (action) {
                daffCategoryValidateFilters(action.request.filter_requests);
                return _this.processCategoryGetRequest(action.request);
            })));
            this.changeCategoryPageSize$ = this.actions$.pipe(effects.ofType(DaffCategoryActionTypes.ChangeCategoryPageSizeAction), operators.withLatestFrom(this.store.pipe(store.select(this.categorySelectors.selectCategoryPageConfigurationState))), operators.switchMap((/**
             * @param {?} __0
             * @return {?}
             */
            function (_a) {
                var _b = __read(_a, 2), action = _b[0], categoryRequest = _b[1];
                return _this.processCategoryGetRequest(__assign({}, categoryRequest, { page_size: action.pageSize }));
            })));
            this.changeCategoryCurrentPage$ = this.actions$.pipe(effects.ofType(DaffCategoryActionTypes.ChangeCategoryCurrentPageAction), operators.withLatestFrom(this.store.pipe(store.select(this.categorySelectors.selectCategoryPageConfigurationState))), operators.switchMap((/**
             * @param {?} __0
             * @return {?}
             */
            function (_a) {
                var _b = __read(_a, 2), action = _b[0], categoryRequest = _b[1];
                return _this.processCategoryGetRequest(__assign({}, categoryRequest, { current_page: action.currentPage }));
            })));
            this.changeCategoryFilters$ = this.actions$.pipe(effects.ofType(DaffCategoryActionTypes.ChangeCategoryFiltersAction), operators.withLatestFrom(this.store.pipe(store.select(this.categorySelectors.selectCategoryPageConfigurationState))), operators.switchMap((/**
             * @param {?} __0
             * @return {?}
             */
            function (_a) {
                var _b = __read(_a, 2), action = _b[0], categoryRequest = _b[1];
                daffCategoryValidateFilters(action.filters);
                return _this.processCategoryGetRequest(__assign({}, categoryRequest, { filter_requests: action.filters }));
            })));
            this.toggleCategoryFilter$ = this.actions$.pipe(effects.ofType(DaffCategoryActionTypes.ToggleCategoryFilterAction), operators.withLatestFrom(this.store.pipe(store.select(this.categorySelectors.selectCategoryPageConfigurationState))), operators.switchMap((/**
             * @param {?} __0
             * @return {?}
             */
            function (_a) {
                var _b = __read(_a, 2), action = _b[0], categoryPageConfigurationState = _b[1];
                daffCategoryValidateFilters(categoryPageConfigurationState.filter_requests);
                return _this.processCategoryGetRequest(__assign({}, categoryPageConfigurationState));
            })));
            this.changeCategorySort$ = this.actions$.pipe(effects.ofType(DaffCategoryActionTypes.ChangeCategorySortingOptionAction), operators.withLatestFrom(this.store.pipe(store.select(this.categorySelectors.selectCategoryPageConfigurationState))), operators.switchMap((/**
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
            return this.driver.get(payload).pipe(operators.switchMap((/**
             * @param {?} resp
             * @return {?}
             */
            function (resp) { return [
                new product.DaffProductGridLoadSuccess(resp.products),
                new DaffCategoryPageLoadSuccess(resp)
            ]; })), operators.catchError((/**
             * @param {?} error
             * @return {?}
             */
            function (error) { return rxjs.of(new DaffCategoryPageLoadFailure('Failed to load the category')); })));
        };
        DaffCategoryPageEffects.decorators = [
            { type: core.Injectable }
        ];
        /** @nocollapse */
        DaffCategoryPageEffects.ctorParameters = function () { return [
            { type: effects.Actions },
            { type: undefined, decorators: [{ type: core.Inject, args: [DaffCategoryDriver,] }] },
            { type: store.Store }
        ]; };
        __decorate([
            effects.Effect(),
            __metadata("design:type", rxjs.Observable)
        ], DaffCategoryPageEffects.prototype, "loadCategoryPage$", void 0);
        __decorate([
            effects.Effect(),
            __metadata("design:type", rxjs.Observable)
        ], DaffCategoryPageEffects.prototype, "changeCategoryPageSize$", void 0);
        __decorate([
            effects.Effect(),
            __metadata("design:type", rxjs.Observable)
        ], DaffCategoryPageEffects.prototype, "changeCategoryCurrentPage$", void 0);
        __decorate([
            effects.Effect(),
            __metadata("design:type", rxjs.Observable)
        ], DaffCategoryPageEffects.prototype, "changeCategoryFilters$", void 0);
        __decorate([
            effects.Effect(),
            __metadata("design:type", rxjs.Observable)
        ], DaffCategoryPageEffects.prototype, "toggleCategoryFilter$", void 0);
        __decorate([
            effects.Effect(),
            __metadata("design:type", rxjs.Observable)
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
            { type: core.NgModule, args: [{
                        imports: [
                            store.StoreModule.forFeature('category', daffCategoryReducers),
                            effects.EffectsModule.forFeature([DaffCategoryEffects, DaffCategoryPageEffects]),
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
            { type: core.NgModule, args: [{
                        imports: [
                            common.CommonModule,
                            /**
                             * Ngrx/store
                             */
                            DaffCategoryStateModule,
                            product.DaffProductModule
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
        function DaffCategoryFacade(store$1) {
            this.store = store$1;
            this.categorySelectors = getDaffCategorySelectors();
            this.category$ = this.store.pipe(store.select(this.categorySelectors.selectSelectedCategory));
            this.products$ = this.store.pipe(store.select(this.categorySelectors.selectCategoryPageProducts));
            this.totalProducts$ = this.store.pipe(store.select(this.categorySelectors.selectCategoryPageTotalProducts));
            this.pageConfigurationState$ = this.store.pipe(store.select(this.categorySelectors.selectCategoryPageConfigurationState));
            this.currentPage$ = this.store.pipe(store.select(this.categorySelectors.selectCategoryCurrentPage));
            this.totalPages$ = this.store.pipe(store.select(this.categorySelectors.selectCategoryTotalPages));
            this.pageSize$ = this.store.pipe(store.select(this.categorySelectors.selectCategoryPageSize));
            this.filters$ = this.store.pipe(store.select(this.categorySelectors.selectCategoryFilters));
            this.sortOptions$ = this.store.pipe(store.select(this.categorySelectors.selectCategorySortOptions));
            this.appliedFilters$ = this.store.pipe(store.select(this.categorySelectors.selectCategoryPageAppliedFilters));
            this.appliedSortOption$ = this.store.pipe(store.select(this.categorySelectors.selectCategoryPageAppliedSortOption));
            this.appliedSortDirection$ = this.store.pipe(store.select(this.categorySelectors.selectCategoryPageAppliedSortDirection));
            this.categoryLoading$ = this.store.pipe(store.select(this.categorySelectors.selectCategoryLoading));
            this.productsLoading$ = this.store.pipe(store.select(this.categorySelectors.selectCategoryProductsLoading));
            this.errors$ = this.store.pipe(store.select(this.categorySelectors.selectCategoryErrors));
            this.isCategoryEmpty$ = this.store.pipe(store.select(this.categorySelectors.selectIsCategoryPageEmpty));
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
            return this.store.pipe(store.select(this.categorySelectors.selectCategory, { id: id }));
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
            return this.store.pipe(store.select(this.categorySelectors.selectProductsByCategory, { id: categoryId }));
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
            return this.store.pipe(store.select(this.categorySelectors.selectTotalProductsByCategory, { id: categoryId }));
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
            { type: core.Injectable, args: [{
                        providedIn: DaffCategoryModule
                    },] }
        ];
        /** @nocollapse */
        DaffCategoryFacade.ctorParameters = function () { return [
            { type: store.Store }
        ]; };
        /** @nocollapse */ DaffCategoryFacade.ngInjectableDef = core.ɵɵdefineInjectable({ factory: function DaffCategoryFacade_Factory() { return new DaffCategoryFacade(core.ɵɵinject(store.Store)); }, token: DaffCategoryFacade, providedIn: DaffCategoryModule });
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
    var MagentoGetProductsQuery = gql(templateObject_1$1 || (templateObject_1$1 = __makeTemplateObject(["\nquery MagentoGetProducts($filter: ProductAttributeFilterInput!, $search: String, $pageSize: Int, $currentPage: Int, $sort: ProductAttributeSortInput)\n{\n\tproducts(filter: $filter, search: $search, pageSize: $pageSize, currentPage: $currentPage, sort: $sort)\n\t{\n\t\ttotal_count\n\t\titems {\n\t\t\t...product\n\t\t}\n\t\tpage_info {\n\t\t\tpage_size\n\t\t\tcurrent_page\n\t\t\ttotal_pages\n\t\t}\n\t}\n}\n", "\n"], ["\nquery MagentoGetProducts($filter: ProductAttributeFilterInput!, $search: String, $pageSize: Int, $currentPage: Int, $sort: ProductAttributeSortInput)\n{\n\tproducts(filter: $filter, search: $search, pageSize: $pageSize, currentPage: $currentPage, sort: $sort)\n\t{\n\t\ttotal_count\n\t\titems {\n\t\t\t...product\n\t\t}\n\t\tpage_info {\n\t\t\tpage_size\n\t\t\tcurrent_page\n\t\t\ttotal_pages\n\t\t}\n\t}\n}\n", "\n"])), product.magentoProductFragment);
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
            { type: core.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */ DaffMagentoAppliedFiltersTransformService.ngInjectableDef = core.ɵɵdefineInjectable({ factory: function DaffMagentoAppliedFiltersTransformService_Factory() { return new DaffMagentoAppliedFiltersTransformService(); }, token: DaffMagentoAppliedFiltersTransformService, providedIn: "root" });
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
            { type: core.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */ DaffMagentoAppliedSortOptionTransformService.ngInjectableDef = core.ɵɵdefineInjectable({ factory: function DaffMagentoAppliedSortOptionTransformService_Factory() { return new DaffMagentoAppliedSortOptionTransformService(); }, token: DaffMagentoAppliedSortOptionTransformService, providedIn: "root" });
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
            { type: core.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */ DaffMagentoCategoryPageConfigTransformerService.ngInjectableDef = core.ɵɵdefineInjectable({ factory: function DaffMagentoCategoryPageConfigTransformerService_Factory() { return new DaffMagentoCategoryPageConfigTransformerService(); }, token: DaffMagentoCategoryPageConfigTransformerService, providedIn: "root" });
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
            { type: core.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */ DaffMagentoCategoryTransformerService.ngInjectableDef = core.ɵɵdefineInjectable({ factory: function DaffMagentoCategoryTransformerService_Factory() { return new DaffMagentoCategoryTransformerService(); }, token: DaffMagentoCategoryTransformerService, providedIn: "root" });
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
            return __assign({ magentoCompleteCategoryResponse: completeCategory }, { category: this.magentoCategoryTransformerService.transform(completeCategory.category), categoryPageConfigurationState: this.magentoCategoryPageConfigurationTransformerService.transform(completeCategory), products: product.transformManyMagentoProducts(completeCategory.products) });
        };
        DaffMagentoCategoryResponseTransformService.decorators = [
            { type: core.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */
        DaffMagentoCategoryResponseTransformService.ctorParameters = function () { return [
            { type: DaffMagentoCategoryTransformerService },
            { type: DaffMagentoCategoryPageConfigTransformerService }
        ]; };
        /** @nocollapse */ DaffMagentoCategoryResponseTransformService.ngInjectableDef = core.ɵɵdefineInjectable({ factory: function DaffMagentoCategoryResponseTransformService_Factory() { return new DaffMagentoCategoryResponseTransformService(core.ɵɵinject(DaffMagentoCategoryTransformerService), core.ɵɵinject(DaffMagentoCategoryPageConfigTransformerService)); }, token: DaffMagentoCategoryResponseTransformService, providedIn: "root" });
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
            return rxjs.combineLatest([
                this.apollo.query({
                    query: MagentoGetCategoryQuery,
                    variables: { filters: { ids: { eq: categoryRequest.id } } }
                }),
                this.apollo.query({
                    query: MagentoGetCategoryAggregations,
                    variables: { filter: { category_id: { eq: categoryRequest.id } } }
                }).pipe(operators.switchMap((/**
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
                    }).pipe(operators.map((/**
                     * @param {?} response
                     * @return {?}
                     */
                    function (response) { return addMetadataTypesToAggregates(response.data, aggregationResult.data); })));
                }))),
                this.apollo.query({
                    query: MagentoGetProductsQuery,
                    variables: this.getProductsQueryVariables(categoryRequest)
                })
            ]).pipe(operators.map((/**
             * @param {?} result
             * @return {?}
             */
            function (result) { return _this.buildCompleteCategoryResponse(result[0].data, result[1], result[2].data); })), operators.map((/**
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
            { type: core.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */
        DaffMagentoCategoryService.ctorParameters = function () { return [
            { type: apolloAngular.Apollo },
            { type: DaffMagentoCategoryResponseTransformService },
            { type: DaffMagentoAppliedFiltersTransformService },
            { type: DaffMagentoAppliedSortOptionTransformService }
        ]; };
        /** @nocollapse */ DaffMagentoCategoryService.ngInjectableDef = core.ɵɵdefineInjectable({ factory: function DaffMagentoCategoryService_Factory() { return new DaffMagentoCategoryService(core.ɵɵinject(apolloAngular.Apollo), core.ɵɵinject(DaffMagentoCategoryResponseTransformService), core.ɵɵinject(DaffMagentoAppliedFiltersTransformService), core.ɵɵinject(DaffMagentoAppliedSortOptionTransformService)); }, token: DaffMagentoCategoryService, providedIn: "root" });
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
            { type: core.NgModule, args: [{
                        imports: [
                            common.CommonModule
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

    exports.DaffCategoryActionTypes = DaffCategoryActionTypes;
    exports.DaffCategoryDriver = DaffCategoryDriver;
    exports.DaffCategoryFacade = DaffCategoryFacade;
    exports.DaffCategoryFilterType = DaffCategoryFilterType;
    exports.DaffCategoryFromToFilterSeparator = DaffCategoryFromToFilterSeparator;
    exports.DaffCategoryLoad = DaffCategoryLoad;
    exports.DaffCategoryLoadFailure = DaffCategoryLoadFailure;
    exports.DaffCategoryLoadSuccess = DaffCategoryLoadSuccess;
    exports.DaffCategoryMagentoDriverModule = DaffCategoryMagentoDriverModule;
    exports.DaffCategoryModule = DaffCategoryModule;
    exports.DaffCategoryPageLoad = DaffCategoryPageLoad;
    exports.DaffCategoryPageLoadFailure = DaffCategoryPageLoadFailure;
    exports.DaffCategoryPageLoadSuccess = DaffCategoryPageLoadSuccess;
    exports.DaffCategoryPageResolver = DaffCategoryPageResolver;
    exports.DaffChangeCategoryCurrentPage = DaffChangeCategoryCurrentPage;
    exports.DaffChangeCategoryFilters = DaffChangeCategoryFilters;
    exports.DaffChangeCategoryPageSize = DaffChangeCategoryPageSize;
    exports.DaffChangeCategorySortingOption = DaffChangeCategorySortingOption;
    exports.DaffDefaultCategoryPageSize = DaffDefaultCategoryPageSize;
    exports.DaffMagentoAppliedFiltersTransformService = DaffMagentoAppliedFiltersTransformService;
    exports.DaffMagentoAppliedSortOptionTransformService = DaffMagentoAppliedSortOptionTransformService;
    exports.DaffMagentoCategoryPageConfigTransformerService = DaffMagentoCategoryPageConfigTransformerService;
    exports.DaffMagentoCategoryResponseTransformService = DaffMagentoCategoryResponseTransformService;
    exports.DaffMagentoCategoryService = DaffMagentoCategoryService;
    exports.DaffMagentoCategoryTransformerService = DaffMagentoCategoryTransformerService;
    exports.DaffSortDirectionEnum = DaffSortDirectionEnum;
    exports.DaffToggleCategoryFilter = DaffToggleCategoryFilter;
    exports.MagentoGetCategoryQuery = MagentoGetCategoryQuery;
    exports.MagentoGetProductsQuery = MagentoGetProductsQuery;
    exports.daffCategoryReducers = daffCategoryReducers;
    exports.daffCategoryValidateFilters = daffCategoryValidateFilters;
    exports.getDaffCategorySelectors = getDaffCategorySelectors;
    exports.ɵa = daffCategoryReducer;
    exports.ɵb = daffCategoryEntitiesReducer;
    exports.ɵc = DaffCategoryStateModule;
    exports.ɵd = DaffCategoryEffects;
    exports.ɵe = DaffCategoryPageEffects;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=daffodil-category.umd.js.map
