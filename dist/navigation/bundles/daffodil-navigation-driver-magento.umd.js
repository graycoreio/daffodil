(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common'), require('@daffodil/navigation/driver'), require('rxjs/operators'), require('apollo-angular'), require('graphql-tag')) :
    typeof define === 'function' && define.amd ? define('@daffodil/navigation/driver/magento', ['exports', '@angular/core', '@angular/common', '@daffodil/navigation/driver', 'rxjs/operators', 'apollo-angular', 'graphql-tag'], factory) :
    (global = global || self, factory((global.daffodil = global.daffodil || {}, global.daffodil.navigation = global.daffodil.navigation || {}, global.daffodil.navigation.driver = global.daffodil.navigation.driver || {}, global.daffodil.navigation.driver.magento = {}), global.ng.core, global.ng.common, global.daffodil.navigation.driver, global.rxjs.operators, global.apolloAngular, global.gql));
}(this, function (exports, core, common, driver, operators, apolloAngular, gql) { 'use strict';

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
    /**
     * The maximum depth of category children that the navigation driver will query.
     * Defaults to 3.
     * @type {?}
     */
    var MAGENTO_NAVIGATION_TREE_QUERY_DEPTH = new core.InjectionToken('MAGENTO_NAVIGATION_TREE_QUERY_DEPTH', { factory: (/**
         * @return {?}
         */
        function () { return 3; }) });
    /**
     * @record
     */
    function MagentoNavigationDriverConfiguration() { }
    if (false) {
        /** @type {?} */
        MagentoNavigationDriverConfiguration.prototype.navigationTreeQueryDepth;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * A category tree fragment with no nested children.
     * @type {?}
     */
    var categoryNodeFragment = "\n\tid\n\tlevel\n\tname\n\tinclude_in_menu\n\tbreadcrumbs {\n\t\tcategory_id\n\t\tcategory_name\n\t\tcategory_level\n\t\tcategory_url_key\n\t}\n\tproduct_count\n"
    /**
     * Generates a category tree fragment with the specified number of nested child category trees.
     * @param depth The maximum depth to which category children should be added to the fragment.
     */
    //todo: use nested fragments when this bug is fixed: https://github.com/magento/magento2/issues/31086
    ;
    /**
     * Generates a category tree fragment with the specified number of nested child category trees.
     * @param {?=} depth The maximum depth to which category children should be added to the fragment.
     * @return {?}
     */
    //todo: use nested fragments when this bug is fixed: https://github.com/magento/magento2/issues/31086
    function getCategoryNodeFragment(depth) {
        if (depth === void 0) { depth = 3; }
        /** @type {?} */
        var fragmentBody = new Array(depth).fill(null).reduce((/**
         * @param {?} acc
         * @return {?}
         */
        function (acc) { return "\n    " + categoryNodeFragment + "\n    children_count\n    children {\n      " + acc + "\n    }\n  "; }), categoryNodeFragment);
        return gql(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    fragment recursiveCategoryNode on CategoryTree {\n      ", "\n    }\n  "], ["\n    fragment recursiveCategoryNode on CategoryTree {\n      ", "\n    }\n  "])), fragmentBody);
    }
    var templateObject_1;

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * Generates a category tree query with the specified number of nested child category tree fragments.
     * @param {?=} depth The maximum depth to which category children should be added to the fragment.
     * @return {?}
     */
    function daffMagentoGetCategoryTree(depth) {
        if (depth === void 0) { depth = 3; }
        return gql(templateObject_1$1 || (templateObject_1$1 = __makeTemplateObject(["\n    query GetCategoryTree($filters: CategoryFilterInput!){\n      categoryList(filters: $filters) {\n        ...recursiveCategoryNode\n      }\n    }\n    ", "\n  "], ["\n    query GetCategoryTree($filters: CategoryFilterInput!){\n      categoryList(filters: $filters) {\n        ...recursiveCategoryNode\n      }\n    }\n    ", "\n  "])), getCategoryNodeFragment(depth));
    }
    var templateObject_1$1;

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var DaffMagentoNavigationService = /** @class */ (function () {
        function DaffMagentoNavigationService(apollo, transformer, categoryTreeQueryDepth) {
            this.apollo = apollo;
            this.transformer = transformer;
            this.categoryTreeQueryDepth = categoryTreeQueryDepth;
        }
        /**
         * @param {?} categoryId
         * @return {?}
         */
        DaffMagentoNavigationService.prototype.get = /**
         * @param {?} categoryId
         * @return {?}
         */
        function (categoryId) {
            var _this = this;
            return this.apollo.query({
                query: daffMagentoGetCategoryTree(this.categoryTreeQueryDepth),
                variables: {
                    filters: { ids: { eq: categoryId } }
                }
            }).pipe(operators.map((/**
             * @param {?} result
             * @return {?}
             */
            function (result) { return _this.transformer.transform(result.data.categoryList[0]); })));
        };
        DaffMagentoNavigationService.decorators = [
            { type: core.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */
        DaffMagentoNavigationService.ctorParameters = function () { return [
            { type: apolloAngular.Apollo },
            { type: undefined, decorators: [{ type: core.Inject, args: [driver.DaffNavigationTransformer,] }] },
            { type: Number, decorators: [{ type: core.Inject, args: [MAGENTO_NAVIGATION_TREE_QUERY_DEPTH,] }] }
        ]; };
        /** @nocollapse */ DaffMagentoNavigationService.ngInjectableDef = core.ɵɵdefineInjectable({ factory: function DaffMagentoNavigationService_Factory() { return new DaffMagentoNavigationService(core.ɵɵinject(apolloAngular.Apollo), core.ɵɵinject(driver.DaffNavigationTransformer), core.ɵɵinject(MAGENTO_NAVIGATION_TREE_QUERY_DEPTH)); }, token: DaffMagentoNavigationService, providedIn: "root" });
        return DaffMagentoNavigationService;
    }());
    if (false) {
        /**
         * @type {?}
         * @private
         */
        DaffMagentoNavigationService.prototype.apollo;
        /**
         * @type {?}
         * @private
         */
        DaffMagentoNavigationService.prototype.transformer;
        /**
         * @type {?}
         * @private
         */
        DaffMagentoNavigationService.prototype.categoryTreeQueryDepth;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var DaffMagentoNavigationTransformerService = /** @class */ (function () {
        function DaffMagentoNavigationTransformerService() {
        }
        /**
         * @param {?} node
         * @return {?}
         */
        DaffMagentoNavigationTransformerService.prototype.transform = /**
         * @param {?} node
         * @return {?}
         */
        function (node) {
            var _this = this;
            return {
                id: node.id,
                path: node.id,
                name: node.name,
                total_products: node.product_count,
                children_count: node.children_count,
                //todo: use optional chaining when possible
                breadcrumbs: node.breadcrumbs ?
                    node.breadcrumbs
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
                    [],
                // TODO: optional chaining
                children: node.children && node.children.filter((/**
                 * @param {?} child
                 * @return {?}
                 */
                function (child) { return child.include_in_menu; })).map((/**
                 * @param {?} child
                 * @return {?}
                 */
                function (child) { return _this.transform(child); }))
            };
        };
        /**
         * @private
         * @param {?} breadcrumb
         * @return {?}
         */
        DaffMagentoNavigationTransformerService.prototype.transformBreadcrumb = /**
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
        DaffMagentoNavigationTransformerService.decorators = [
            { type: core.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */ DaffMagentoNavigationTransformerService.ngInjectableDef = core.ɵɵdefineInjectable({ factory: function DaffMagentoNavigationTransformerService_Factory() { return new DaffMagentoNavigationTransformerService(); }, token: DaffMagentoNavigationTransformerService, providedIn: "root" });
        return DaffMagentoNavigationTransformerService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var MAGENTO_NAVIGATION_DEFAULT_CONFIGURATION = {
        navigationTreeQueryDepth: 3
    };
    var DaffNavigationMagentoDriverModule = /** @class */ (function () {
        function DaffNavigationMagentoDriverModule() {
        }
        /**
         * @param {?=} config
         * @return {?}
         */
        DaffNavigationMagentoDriverModule.forRoot = /**
         * @param {?=} config
         * @return {?}
         */
        function (config) {
            if (config === void 0) { config = MAGENTO_NAVIGATION_DEFAULT_CONFIGURATION; }
            return {
                ngModule: DaffNavigationMagentoDriverModule,
                providers: [
                    {
                        provide: driver.DaffNavigationDriver,
                        useExisting: DaffMagentoNavigationService
                    },
                    {
                        provide: driver.DaffNavigationTransformer,
                        useExisting: DaffMagentoNavigationTransformerService
                    },
                    {
                        provide: MAGENTO_NAVIGATION_TREE_QUERY_DEPTH,
                        useValue: config.navigationTreeQueryDepth
                    }
                ]
            };
        };
        DaffNavigationMagentoDriverModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [
                            common.CommonModule
                        ]
                    },] }
        ];
        return DaffNavigationMagentoDriverModule;
    }());

    exports.DaffMagentoNavigationService = DaffMagentoNavigationService;
    exports.DaffMagentoNavigationTransformerService = DaffMagentoNavigationTransformerService;
    exports.DaffNavigationMagentoDriverModule = DaffNavigationMagentoDriverModule;
    exports.MAGENTO_NAVIGATION_DEFAULT_CONFIGURATION = MAGENTO_NAVIGATION_DEFAULT_CONFIGURATION;
    exports.MAGENTO_NAVIGATION_TREE_QUERY_DEPTH = MAGENTO_NAVIGATION_TREE_QUERY_DEPTH;
    exports.daffMagentoGetCategoryTree = daffMagentoGetCategoryTree;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=daffodil-navigation-driver-magento.umd.js.map
