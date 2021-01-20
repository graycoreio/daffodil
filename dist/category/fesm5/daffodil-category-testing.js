import { __extends, __spread } from 'tslib';
import { Injectable, ɵɵdefineInjectable, ɵɵinject, NgModule } from '@angular/core';
import { random, commerce } from 'faker/locale/en_US';
import { DaffModelFactory } from '@daffodil/core/testing';
import { DaffCategoryFilterType, DaffCategoryDriver, DaffCategoryFacade } from '@daffodil/category';
import { STATUS } from 'angular-in-memory-web-api';
import { DaffInMemoryBackendProductService, DaffProductFactory } from '@daffodil/product/testing';
import { randomSubset } from '@daffodil/core';
import { of, BehaviorSubject } from 'rxjs';
import { HttpParams, HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var MockCategory = /** @class */ (function () {
    function MockCategory() {
        this.id = random.number({ min: 1, max: 10000 }).toString();
        this.name = commerce.productMaterial();
        this.description = random.words(Math.floor(Math.random() * 20));
        this.breadcrumbs = [{
                categoryId: random.number({ min: 1, max: 100 }),
                categoryName: commerce.productMaterial(),
                categoryLevel: random.number({ min: 1, max: 5 }),
                categoryUrlKey: commerce.productMaterial()
            }];
        this.children_count = random.number({ min: 1, max: 10 });
        this.total_products = 1;
        this.product_ids = [random.number({ min: 1, max: 100 }).toString()];
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
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    DaffCategoryFactory.ctorParameters = function () { return []; };
    /** @nocollapse */ DaffCategoryFactory.ngInjectableDef = ɵɵdefineInjectable({ factory: function DaffCategoryFactory_Factory() { return new DaffCategoryFactory(); }, token: DaffCategoryFactory, providedIn: "root" });
    return DaffCategoryFactory;
}(DaffModelFactory));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var MockCategoryPageConfigurationState = /** @class */ (function () {
    function MockCategoryPageConfigurationState() {
        this.id = String(random.number({ min: 1, max: 100 }));
        this.page_size = 20;
        this.current_page = 1;
        this.filters = [{
                label: 'Category',
                name: 'cat',
                type: DaffCategoryFilterType.Equal,
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
        this.total_pages = random.number({ min: 1, max: 4 });
        this.filter_requests = [];
        this.applied_sort_option = null;
        this.applied_sort_direction = null;
        this.total_products = random.number({ min: 1, max: 3 });
        this.product_ids = [random.number({ min: 1, max: 100 }).toString()];
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
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    DaffCategoryPageConfigurationStateFactory.ctorParameters = function () { return []; };
    /** @nocollapse */ DaffCategoryPageConfigurationStateFactory.ngInjectableDef = ɵɵdefineInjectable({ factory: function DaffCategoryPageConfigurationStateFactory_Factory() { return new DaffCategoryPageConfigurationStateFactory(); }, token: DaffCategoryPageConfigurationStateFactory, providedIn: "root" });
    return DaffCategoryPageConfigurationStateFactory;
}(DaffModelFactory));

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
                status: STATUS.OK
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
        return randomSubset(products).map((/**
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
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    DaffInMemoryBackendCategoryService.ctorParameters = function () { return [
        { type: DaffCategoryFactory },
        { type: DaffCategoryPageConfigurationStateFactory },
        { type: DaffInMemoryBackendProductService }
    ]; };
    /** @nocollapse */ DaffInMemoryBackendCategoryService.ngInjectableDef = ɵɵdefineInjectable({ factory: function DaffInMemoryBackendCategoryService_Factory() { return new DaffInMemoryBackendCategoryService(ɵɵinject(DaffCategoryFactory), ɵɵinject(DaffCategoryPageConfigurationStateFactory), ɵɵinject(DaffInMemoryBackendProductService)); }, token: DaffInMemoryBackendCategoryService, providedIn: "root" });
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
        return of({
            category: this.categoryFactory.create(),
            categoryPageConfigurationState: this.categoryPageConfigurationStateFactory.create(),
            products: this.productFactory.createMany(3)
        });
    };
    DaffTestingCategoryService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    DaffTestingCategoryService.ctorParameters = function () { return [
        { type: DaffCategoryFactory },
        { type: DaffCategoryPageConfigurationStateFactory },
        { type: DaffProductFactory }
    ]; };
    /** @nocollapse */ DaffTestingCategoryService.ngInjectableDef = ɵɵdefineInjectable({ factory: function DaffTestingCategoryService_Factory() { return new DaffTestingCategoryService(ɵɵinject(DaffCategoryFactory), ɵɵinject(DaffCategoryPageConfigurationStateFactory), ɵɵinject(DaffProductFactory)); }, token: DaffTestingCategoryService, providedIn: "root" });
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
        var params = new HttpParams()
            .set('page_size', categoryRequest.page_size ? categoryRequest.page_size.toString() : null)
            .set('current_page', categoryRequest.current_page ? categoryRequest.current_page.toString() : null);
        return this.http.get(this.url + categoryRequest.id, { params: params });
    };
    DaffInMemoryCategoryService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    DaffInMemoryCategoryService.ctorParameters = function () { return [
        { type: HttpClient }
    ]; };
    /** @nocollapse */ DaffInMemoryCategoryService.ngInjectableDef = ɵɵdefineInjectable({ factory: function DaffInMemoryCategoryService_Factory() { return new DaffInMemoryCategoryService(ɵɵinject(HttpClient)); }, token: DaffInMemoryCategoryService, providedIn: "root" });
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
                    provide: DaffCategoryDriver,
                    useExisting: DaffInMemoryCategoryService
                }
            ]
        };
    };
    DaffCategoryInMemoryDriverModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        CommonModule
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
                    provide: DaffCategoryDriver,
                    useExisting: DaffTestingCategoryService
                }
            ]
        };
    };
    DaffCategoryTestingDriverModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        CommonModule
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
        this.category$ = new BehaviorSubject(null);
        this.pageConfigurationState$ = new BehaviorSubject(null);
        this.currentPage$ = new BehaviorSubject(null);
        this.totalPages$ = new BehaviorSubject(null);
        this.totalProducts$ = new BehaviorSubject(null);
        this.pageSize$ = new BehaviorSubject(null);
        this.filters$ = new BehaviorSubject([]);
        this.sortOptions$ = new BehaviorSubject([]);
        this.appliedFilters$ = new BehaviorSubject([]);
        this.appliedSortOption$ = new BehaviorSubject(null);
        this.appliedSortDirection$ = new BehaviorSubject(null);
        this.products$ = new BehaviorSubject([]);
        this.categoryLoading$ = new BehaviorSubject(false);
        this.productsLoading$ = new BehaviorSubject(false);
        this.errors$ = new BehaviorSubject([]);
        this.isCategoryEmpty$ = new BehaviorSubject(true);
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
        return new BehaviorSubject(null);
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
        return new BehaviorSubject([]);
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
        return new BehaviorSubject(null);
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
        { type: Injectable, args: [{ providedIn: 'root' },] }
    ];
    /** @nocollapse */ MockDaffCategoryFacade.ngInjectableDef = ɵɵdefineInjectable({ factory: function MockDaffCategoryFacade_Factory() { return new MockDaffCategoryFacade(); }, token: MockDaffCategoryFacade, providedIn: "root" });
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
        { type: NgModule, args: [{
                    providers: [
                        { provide: DaffCategoryFacade, useExisting: MockDaffCategoryFacade }
                    ]
                },] }
    ];
    return DaffCategoryTestingModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { DaffCategoryFactory, DaffCategoryInMemoryDriverModule, DaffCategoryPageConfigurationStateFactory, DaffCategoryTestingDriverModule, DaffCategoryTestingModule, DaffInMemoryBackendCategoryService, DaffInMemoryCategoryService, DaffTestingCategoryService, MockDaffCategoryFacade };
//# sourceMappingURL=daffodil-category-testing.js.map
