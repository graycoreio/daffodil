(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('faker/locale/en_US'), require('@daffodil/core/testing'), require('@daffodil/category'), require('angular-in-memory-web-api'), require('@daffodil/product/testing'), require('@daffodil/core'), require('rxjs'), require('@angular/common/http'), require('@angular/common')) :
    typeof define === 'function' && define.amd ? define('@daffodil/category/testing', ['exports', '@angular/core', 'faker/locale/en_US', '@daffodil/core/testing', '@daffodil/category', 'angular-in-memory-web-api', '@daffodil/product/testing', '@daffodil/core', 'rxjs', '@angular/common/http', '@angular/common'], factory) :
    (global = global || self, factory((global.daffodil = global.daffodil || {}, global.daffodil.category = global.daffodil.category || {}, global.daffodil.category.testing = {}), global.ng.core, global.en_US, global.testing, global.daffodil.category, global.angularInMemoryWebApi, global.testing$1, global.core$1, global.rxjs, global.ng.common.http, global.ng.common));
}(this, function (exports, core, en_US, testing, category, angularInMemoryWebApi, testing$1, core$1, rxjs, http, common) { 'use strict';

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
    var MockCategory = /** @class */ (function () {
        function MockCategory() {
            this.id = en_US.random.number({ min: 1, max: 10000 }).toString();
            this.name = en_US.commerce.productMaterial();
            this.description = en_US.random.words(Math.floor(Math.random() * 20));
            this.breadcrumbs = [{
                    categoryId: en_US.random.number({ min: 1, max: 100 }),
                    categoryName: en_US.commerce.productMaterial(),
                    categoryLevel: en_US.random.number({ min: 1, max: 5 }),
                    categoryUrlKey: en_US.commerce.productMaterial()
                }];
            this.children_count = en_US.random.number({ min: 1, max: 10 });
            this.total_products = 1;
            this.product_ids = [en_US.random.number({ min: 1, max: 100 }).toString()];
        }
        return MockCategory;
    }());
    if (false) {
        /** @type {?} */
        MockCategory.prototype.id;
        /** @type {?} */
        MockCategory.prototype.name;
        /** @type {?} */
        MockCategory.prototype.description;
        /** @type {?} */
        MockCategory.prototype.breadcrumbs;
        /** @type {?} */
        MockCategory.prototype.children_count;
        /** @type {?} */
        MockCategory.prototype.total_products;
        /** @type {?} */
        MockCategory.prototype.product_ids;
    }
    var DaffCategoryFactory = /** @class */ (function (_super) {
        __extends(DaffCategoryFactory, _super);
        function DaffCategoryFactory() {
            return _super.call(this, MockCategory) || this;
        }
        DaffCategoryFactory.decorators = [
            { type: core.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */
        DaffCategoryFactory.ctorParameters = function () { return []; };
        /** @nocollapse */ DaffCategoryFactory.ngInjectableDef = core.ɵɵdefineInjectable({ factory: function DaffCategoryFactory_Factory() { return new DaffCategoryFactory(); }, token: DaffCategoryFactory, providedIn: "root" });
        return DaffCategoryFactory;
    }(testing.DaffModelFactory));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var MockCategoryPageConfigurationState = /** @class */ (function () {
        function MockCategoryPageConfigurationState() {
            this.id = String(en_US.random.number({ min: 1, max: 100 }));
            this.page_size = 20;
            this.current_page = 1;
            this.filters = [{
                    label: 'Category',
                    name: 'cat',
                    type: category.DaffCategoryFilterType.Equal,
                    options: [
                        {
                            label: 'Gear',
                            value: '3',
                            count: 34
                        },
                        {
                            label: 'Training',
                            value: '9',
                            count: 6
                        }
                    ]
                }];
            this.sort_options = [
                {
                    label: 'Position',
                    value: 'position'
                },
                {
                    label: 'Name',
                    value: 'name'
                },
                {
                    label: 'Price',
                    value: 'price'
                }
            ];
            this.total_pages = en_US.random.number({ min: 1, max: 4 });
            this.filter_requests = [];
            this.applied_sort_option = null;
            this.applied_sort_direction = null;
            this.total_products = en_US.random.number({ min: 1, max: 3 });
            this.product_ids = [en_US.random.number({ min: 1, max: 100 }).toString()];
        }
        return MockCategoryPageConfigurationState;
    }());
    if (false) {
        /** @type {?} */
        MockCategoryPageConfigurationState.prototype.id;
        /** @type {?} */
        MockCategoryPageConfigurationState.prototype.page_size;
        /** @type {?} */
        MockCategoryPageConfigurationState.prototype.current_page;
        /** @type {?} */
        MockCategoryPageConfigurationState.prototype.filters;
        /** @type {?} */
        MockCategoryPageConfigurationState.prototype.sort_options;
        /** @type {?} */
        MockCategoryPageConfigurationState.prototype.total_pages;
        /** @type {?} */
        MockCategoryPageConfigurationState.prototype.filter_requests;
        /** @type {?} */
        MockCategoryPageConfigurationState.prototype.applied_sort_option;
        /** @type {?} */
        MockCategoryPageConfigurationState.prototype.applied_sort_direction;
        /** @type {?} */
        MockCategoryPageConfigurationState.prototype.total_products;
        /** @type {?} */
        MockCategoryPageConfigurationState.prototype.product_ids;
    }
    var DaffCategoryPageConfigurationStateFactory = /** @class */ (function (_super) {
        __extends(DaffCategoryPageConfigurationStateFactory, _super);
        function DaffCategoryPageConfigurationStateFactory() {
            return _super.call(this, MockCategoryPageConfigurationState) || this;
        }
        DaffCategoryPageConfigurationStateFactory.decorators = [
            { type: core.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */
        DaffCategoryPageConfigurationStateFactory.ctorParameters = function () { return []; };
        /** @nocollapse */ DaffCategoryPageConfigurationStateFactory.ngInjectableDef = core.ɵɵdefineInjectable({ factory: function DaffCategoryPageConfigurationStateFactory_Factory() { return new DaffCategoryPageConfigurationStateFactory(); }, token: DaffCategoryPageConfigurationStateFactory, providedIn: "root" });
        return DaffCategoryPageConfigurationStateFactory;
    }(testing.DaffModelFactory));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var DaffInMemoryBackendCategoryService = /** @class */ (function () {
        function DaffInMemoryBackendCategoryService(categoryFactory, categoryPageConfigurationFactory, productInMemoryBackendService) {
            this.categoryFactory = categoryFactory;
            this.categoryPageConfigurationFactory = categoryPageConfigurationFactory;
            this.productInMemoryBackendService = productInMemoryBackendService;
        }
        /**
         * @param {?} url
         * @param {?} utils
         * @return {?}
         */
        DaffInMemoryBackendCategoryService.prototype.parseRequestUrl = /**
         * @param {?} url
         * @param {?} utils
         * @return {?}
         */
        function (url, utils) {
            return utils.parseRequestUrl(url);
        };
        /**
         * @return {?}
         */
        DaffInMemoryBackendCategoryService.prototype.createDb = /**
         * @return {?}
         */
        function () {
            return {};
        };
        /**
         * @param {?} reqInfo
         * @return {?}
         */
        DaffInMemoryBackendCategoryService.prototype.get = /**
         * @param {?} reqInfo
         * @return {?}
         */
        function (reqInfo) {
            var _this = this;
            /** @type {?} */
            var allCategoryProductIds = this.generateProductIdSubset(this.productInMemoryBackendService.products);
            this.categoryPageConfigurationState = this.categoryPageConfigurationFactory.create({
                id: reqInfo.id,
                page_size: this.generatePageSize(reqInfo),
                current_page: this.getCurrentPageParam(reqInfo),
                total_pages: this.getTotalPages(allCategoryProductIds, this.generatePageSize(reqInfo)),
                product_ids: this.trimProductIdsToSinglePage(allCategoryProductIds, this.getCurrentPageParam(reqInfo), this.generatePageSize(reqInfo))
            });
            this.category = this.categoryFactory.create({
                id: reqInfo.id,
                total_products: allCategoryProductIds.length,
                page_size: this.generatePageSize(reqInfo),
            });
            return reqInfo.utils.createResponse$((/**
             * @return {?}
             */
            function () {
                return {
                    body: {
                        category: _this.category,
                        categoryPageConfigurationState: _this.categoryPageConfigurationState,
                        products: _this.productInMemoryBackendService.products
                    },
                    status: angularInMemoryWebApi.STATUS.OK
                };
            }));
        };
        /**
         * @private
         * @param {?} allIds
         * @param {?} pageSize
         * @return {?}
         */
        DaffInMemoryBackendCategoryService.prototype.getTotalPages = /**
         * @private
         * @param {?} allIds
         * @param {?} pageSize
         * @return {?}
         */
        function (allIds, pageSize) {
            return Math.ceil(allIds.length / pageSize);
        };
        /**
         * @private
         * @param {?} allIds
         * @param {?} currentPage
         * @param {?} pageSize
         * @return {?}
         */
        DaffInMemoryBackendCategoryService.prototype.trimProductIdsToSinglePage = /**
         * @private
         * @param {?} allIds
         * @param {?} currentPage
         * @param {?} pageSize
         * @return {?}
         */
        function (allIds, currentPage, pageSize) {
            /** @type {?} */
            var tempIds = __spread(allIds);
            tempIds.splice(0, (currentPage - 1) * pageSize);
            tempIds.splice(pageSize, tempIds.length - pageSize);
            return tempIds;
        };
        /**
         * @private
         * @param {?} products
         * @return {?}
         */
        DaffInMemoryBackendCategoryService.prototype.generateProductIdSubset = /**
         * @private
         * @param {?} products
         * @return {?}
         */
        function (products) {
            return core$1.randomSubset(products).map((/**
             * @param {?} product
             * @return {?}
             */
            function (product) { return product.id; }));
        };
        /**
         * @private
         * @param {?} reqInfo
         * @return {?}
         */
        DaffInMemoryBackendCategoryService.prototype.generatePageSize = /**
         * @private
         * @param {?} reqInfo
         * @return {?}
         */
        function (reqInfo) {
            if (reqInfo.req.params.map && reqInfo.req.params.map.get('page_size') && reqInfo.req.params.map.get('page_size')[0]) {
                return parseInt(reqInfo.req.params.map.get('page_size')[0], 10);
            }
            return 10;
        };
        /**
         * @private
         * @param {?} reqInfo
         * @return {?}
         */
        DaffInMemoryBackendCategoryService.prototype.getCurrentPageParam = /**
         * @private
         * @param {?} reqInfo
         * @return {?}
         */
        function (reqInfo) {
            if (reqInfo.req.params.map && reqInfo.req.params.map.get('current_page') && reqInfo.req.params.map.get('current_page')[0]) {
                return parseInt(reqInfo.req.params.map.get('current_page')[0], 10);
            }
            return 1;
        };
        DaffInMemoryBackendCategoryService.decorators = [
            { type: core.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */
        DaffInMemoryBackendCategoryService.ctorParameters = function () { return [
            { type: DaffCategoryFactory },
            { type: DaffCategoryPageConfigurationStateFactory },
            { type: testing$1.DaffInMemoryBackendProductService }
        ]; };
        /** @nocollapse */ DaffInMemoryBackendCategoryService.ngInjectableDef = core.ɵɵdefineInjectable({ factory: function DaffInMemoryBackendCategoryService_Factory() { return new DaffInMemoryBackendCategoryService(core.ɵɵinject(DaffCategoryFactory), core.ɵɵinject(DaffCategoryPageConfigurationStateFactory), core.ɵɵinject(testing$1.DaffInMemoryBackendProductService)); }, token: DaffInMemoryBackendCategoryService, providedIn: "root" });
        return DaffInMemoryBackendCategoryService;
    }());
    if (false) {
        /** @type {?} */
        DaffInMemoryBackendCategoryService.prototype.category;
        /** @type {?} */
        DaffInMemoryBackendCategoryService.prototype.categoryPageConfigurationState;
        /**
         * @type {?}
         * @private
         */
        DaffInMemoryBackendCategoryService.prototype.categoryFactory;
        /**
         * @type {?}
         * @private
         */
        DaffInMemoryBackendCategoryService.prototype.categoryPageConfigurationFactory;
        /**
         * @type {?}
         * @private
         */
        DaffInMemoryBackendCategoryService.prototype.productInMemoryBackendService;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var DaffTestingCategoryService = /** @class */ (function () {
        function DaffTestingCategoryService(categoryFactory, categoryPageConfigurationStateFactory, productFactory) {
            this.categoryFactory = categoryFactory;
            this.categoryPageConfigurationStateFactory = categoryPageConfigurationStateFactory;
            this.productFactory = productFactory;
        }
        /**
         * @param {?} categoryRequest
         * @return {?}
         */
        DaffTestingCategoryService.prototype.get = /**
         * @param {?} categoryRequest
         * @return {?}
         */
        function (categoryRequest) {
            return rxjs.of({
                category: this.categoryFactory.create(),
                categoryPageConfigurationState: this.categoryPageConfigurationStateFactory.create(),
                products: this.productFactory.createMany(3)
            });
        };
        DaffTestingCategoryService.decorators = [
            { type: core.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */
        DaffTestingCategoryService.ctorParameters = function () { return [
            { type: DaffCategoryFactory },
            { type: DaffCategoryPageConfigurationStateFactory },
            { type: testing$1.DaffProductFactory }
        ]; };
        /** @nocollapse */ DaffTestingCategoryService.ngInjectableDef = core.ɵɵdefineInjectable({ factory: function DaffTestingCategoryService_Factory() { return new DaffTestingCategoryService(core.ɵɵinject(DaffCategoryFactory), core.ɵɵinject(DaffCategoryPageConfigurationStateFactory), core.ɵɵinject(testing$1.DaffProductFactory)); }, token: DaffTestingCategoryService, providedIn: "root" });
        return DaffTestingCategoryService;
    }());
    if (false) {
        /**
         * @type {?}
         * @private
         */
        DaffTestingCategoryService.prototype.categoryFactory;
        /**
         * @type {?}
         * @private
         */
        DaffTestingCategoryService.prototype.categoryPageConfigurationStateFactory;
        /**
         * @type {?}
         * @private
         */
        DaffTestingCategoryService.prototype.productFactory;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var DaffInMemoryCategoryService = /** @class */ (function () {
        function DaffInMemoryCategoryService(http) {
            this.http = http;
            this.url = '/api/category/';
        }
        /**
         * @param {?} categoryRequest
         * @return {?}
         */
        DaffInMemoryCategoryService.prototype.get = /**
         * @param {?} categoryRequest
         * @return {?}
         */
        function (categoryRequest) {
            /** @type {?} */
            var params = new http.HttpParams()
                .set('page_size', categoryRequest.page_size ? categoryRequest.page_size.toString() : null)
                .set('current_page', categoryRequest.current_page ? categoryRequest.current_page.toString() : null);
            return this.http.get(this.url + categoryRequest.id, { params: params });
        };
        DaffInMemoryCategoryService.decorators = [
            { type: core.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */
        DaffInMemoryCategoryService.ctorParameters = function () { return [
            { type: http.HttpClient }
        ]; };
        /** @nocollapse */ DaffInMemoryCategoryService.ngInjectableDef = core.ɵɵdefineInjectable({ factory: function DaffInMemoryCategoryService_Factory() { return new DaffInMemoryCategoryService(core.ɵɵinject(http.HttpClient)); }, token: DaffInMemoryCategoryService, providedIn: "root" });
        return DaffInMemoryCategoryService;
    }());
    if (false) {
        /** @type {?} */
        DaffInMemoryCategoryService.prototype.url;
        /**
         * @type {?}
         * @private
         */
        DaffInMemoryCategoryService.prototype.http;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var DaffCategoryInMemoryDriverModule = /** @class */ (function () {
        function DaffCategoryInMemoryDriverModule() {
        }
        /**
         * @return {?}
         */
        DaffCategoryInMemoryDriverModule.forRoot = /**
         * @return {?}
         */
        function () {
            return {
                ngModule: DaffCategoryInMemoryDriverModule,
                providers: [
                    {
                        provide: category.DaffCategoryDriver,
                        useExisting: DaffInMemoryCategoryService
                    }
                ]
            };
        };
        DaffCategoryInMemoryDriverModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [
                            common.CommonModule
                        ]
                    },] }
        ];
        return DaffCategoryInMemoryDriverModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var DaffCategoryTestingDriverModule = /** @class */ (function () {
        function DaffCategoryTestingDriverModule() {
        }
        /**
         * @return {?}
         */
        DaffCategoryTestingDriverModule.forRoot = /**
         * @return {?}
         */
        function () {
            return {
                ngModule: DaffCategoryTestingDriverModule,
                providers: [
                    {
                        provide: category.DaffCategoryDriver,
                        useExisting: DaffTestingCategoryService
                    }
                ]
            };
        };
        DaffCategoryTestingDriverModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [
                            common.CommonModule
                        ]
                    },] }
        ];
        return DaffCategoryTestingDriverModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var MockDaffCategoryFacade = /** @class */ (function () {
        function MockDaffCategoryFacade() {
            this.category$ = new rxjs.BehaviorSubject(null);
            this.pageConfigurationState$ = new rxjs.BehaviorSubject(null);
            this.currentPage$ = new rxjs.BehaviorSubject(null);
            this.totalPages$ = new rxjs.BehaviorSubject(null);
            this.totalProducts$ = new rxjs.BehaviorSubject(null);
            this.pageSize$ = new rxjs.BehaviorSubject(null);
            this.filters$ = new rxjs.BehaviorSubject([]);
            this.sortOptions$ = new rxjs.BehaviorSubject([]);
            this.appliedFilters$ = new rxjs.BehaviorSubject([]);
            this.appliedSortOption$ = new rxjs.BehaviorSubject(null);
            this.appliedSortDirection$ = new rxjs.BehaviorSubject(null);
            this.products$ = new rxjs.BehaviorSubject([]);
            this.categoryLoading$ = new rxjs.BehaviorSubject(false);
            this.productsLoading$ = new rxjs.BehaviorSubject(false);
            this.errors$ = new rxjs.BehaviorSubject([]);
            this.isCategoryEmpty$ = new rxjs.BehaviorSubject(true);
        }
        /**
         * @param {?} id
         * @return {?}
         */
        MockDaffCategoryFacade.prototype.getCategoryById = /**
         * @param {?} id
         * @return {?}
         */
        function (id) {
            return new rxjs.BehaviorSubject(null);
        };
        ;
        /**
         * @param {?} categoryId
         * @return {?}
         */
        MockDaffCategoryFacade.prototype.getProductsByCategory = /**
         * @param {?} categoryId
         * @return {?}
         */
        function (categoryId) {
            return new rxjs.BehaviorSubject([]);
        };
        ;
        /**
         * @param {?} categoryId
         * @return {?}
         */
        MockDaffCategoryFacade.prototype.getTotalProductsByCategory = /**
         * @param {?} categoryId
         * @return {?}
         */
        function (categoryId) {
            return new rxjs.BehaviorSubject(null);
        };
        ;
        /**
         * @param {?} action
         * @return {?}
         */
        MockDaffCategoryFacade.prototype.dispatch = /**
         * @param {?} action
         * @return {?}
         */
        function (action) { };
        ;
        MockDaffCategoryFacade.decorators = [
            { type: core.Injectable, args: [{ providedIn: 'root' },] }
        ];
        /** @nocollapse */ MockDaffCategoryFacade.ngInjectableDef = core.ɵɵdefineInjectable({ factory: function MockDaffCategoryFacade_Factory() { return new MockDaffCategoryFacade(); }, token: MockDaffCategoryFacade, providedIn: "root" });
        return MockDaffCategoryFacade;
    }());
    if (false) {
        /** @type {?} */
        MockDaffCategoryFacade.prototype.category$;
        /** @type {?} */
        MockDaffCategoryFacade.prototype.pageConfigurationState$;
        /** @type {?} */
        MockDaffCategoryFacade.prototype.currentPage$;
        /** @type {?} */
        MockDaffCategoryFacade.prototype.totalPages$;
        /** @type {?} */
        MockDaffCategoryFacade.prototype.totalProducts$;
        /** @type {?} */
        MockDaffCategoryFacade.prototype.pageSize$;
        /** @type {?} */
        MockDaffCategoryFacade.prototype.filters$;
        /** @type {?} */
        MockDaffCategoryFacade.prototype.sortOptions$;
        /** @type {?} */
        MockDaffCategoryFacade.prototype.appliedFilters$;
        /** @type {?} */
        MockDaffCategoryFacade.prototype.appliedSortOption$;
        /** @type {?} */
        MockDaffCategoryFacade.prototype.appliedSortDirection$;
        /** @type {?} */
        MockDaffCategoryFacade.prototype.products$;
        /** @type {?} */
        MockDaffCategoryFacade.prototype.categoryLoading$;
        /** @type {?} */
        MockDaffCategoryFacade.prototype.productsLoading$;
        /** @type {?} */
        MockDaffCategoryFacade.prototype.errors$;
        /** @type {?} */
        MockDaffCategoryFacade.prototype.isCategoryEmpty$;
        /* Skipping unhandled member: ;*/
        /* Skipping unhandled member: ;*/
        /* Skipping unhandled member: ;*/
        /* Skipping unhandled member: ;*/
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var DaffCategoryTestingModule = /** @class */ (function () {
        function DaffCategoryTestingModule() {
        }
        DaffCategoryTestingModule.decorators = [
            { type: core.NgModule, args: [{
                        providers: [
                            { provide: category.DaffCategoryFacade, useExisting: MockDaffCategoryFacade }
                        ]
                    },] }
        ];
        return DaffCategoryTestingModule;
    }());

    exports.DaffCategoryFactory = DaffCategoryFactory;
    exports.DaffCategoryInMemoryDriverModule = DaffCategoryInMemoryDriverModule;
    exports.DaffCategoryPageConfigurationStateFactory = DaffCategoryPageConfigurationStateFactory;
    exports.DaffCategoryTestingDriverModule = DaffCategoryTestingDriverModule;
    exports.DaffCategoryTestingModule = DaffCategoryTestingModule;
    exports.DaffInMemoryBackendCategoryService = DaffInMemoryBackendCategoryService;
    exports.DaffInMemoryCategoryService = DaffInMemoryCategoryService;
    exports.DaffTestingCategoryService = DaffTestingCategoryService;
    exports.MockDaffCategoryFacade = MockDaffCategoryFacade;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=daffodil-category-testing.umd.js.map
