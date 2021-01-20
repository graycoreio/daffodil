(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/common'), require('@angular/core'), require('@ngrx/effects'), require('@ngrx/store'), require('rxjs'), require('rxjs/operators'), require('@ngrx/entity'), require('@daffodil/core'), require('apollo-angular'), require('graphql-tag')) :
    typeof define === 'function' && define.amd ? define('@daffodil/product', ['exports', '@angular/common', '@angular/core', '@ngrx/effects', '@ngrx/store', 'rxjs', 'rxjs/operators', '@ngrx/entity', '@daffodil/core', 'apollo-angular', 'graphql-tag'], factory) :
    (global = global || self, factory((global.daffodil = global.daffodil || {}, global.daffodil.product = {}), global.ng.common, global.ng.core, global.effects, global.store, global.rxjs, global.rxjs.operators, global.entity, global.core$1, global.apolloAngular, global.gql));
}(this, function (exports, common, core, effects, store, rxjs, operators, entity, core$1, apolloAngular, gql) { 'use strict';

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
    var DaffProductTypeEnum = {
        Simple: 'simple',
        Composite: 'composite',
        Configurable: 'configurable',
    };
    /**
     * An interface for a product usable by the \@daffodil/product library.
     * @record
     */
    function DaffProduct() { }
    if (false) {
        /** @type {?} */
        DaffProduct.prototype.id;
        /** @type {?|undefined} */
        DaffProduct.prototype.type;
        /** @type {?|undefined} */
        DaffProduct.prototype.url;
        /** @type {?|undefined} */
        DaffProduct.prototype.price;
        /** @type {?|undefined} */
        DaffProduct.prototype.discount;
        /** @type {?|undefined} */
        DaffProduct.prototype.name;
        /** @type {?|undefined} */
        DaffProduct.prototype.brand;
        /** @type {?|undefined} */
        DaffProduct.prototype.description;
        /** @type {?} */
        DaffProduct.prototype.images;
        /** @type {?|undefined} */
        DaffProduct.prototype.in_stock;
    }
    /**
     * The discount for a product.
     * @record
     */
    function DaffProductDiscount() { }
    if (false) {
        /** @type {?} */
        DaffProductDiscount.prototype.amount;
        /** @type {?} */
        DaffProductDiscount.prototype.percent;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @enum {string} */
    var DaffProductActionTypes = {
        ProductLoadAction: '[Product] Load Action',
        ProductLoadSuccessAction: '[Product] Load Success Action',
        ProductLoadFailureAction: '[Product] Load Failure Action',
        UpdateQtyAction: '[Product] Update Qty Action',
        ProductModifyAction: '[Product] Product Modify Action',
    };
    /**
     * Triggers a request for a Product.
     *
     * @param payload - Id of requested Product
     */
    var   /**
     * Triggers a request for a Product.
     *
     * @param payload - Id of requested Product
     */
    DaffProductLoad = /** @class */ (function () {
        function DaffProductLoad(payload) {
            this.payload = payload;
            this.type = DaffProductActionTypes.ProductLoadAction;
        }
        return DaffProductLoad;
    }());
    if (false) {
        /** @type {?} */
        DaffProductLoad.prototype.type;
        /** @type {?} */
        DaffProductLoad.prototype.payload;
    }
    /**
     * An action called when a request for a Product succeeded.
     *
     * @param payload - A Product
     * @template T
     */
    var   /**
     * An action called when a request for a Product succeeded.
     *
     * @param payload - A Product
     * @template T
     */
    DaffProductLoadSuccess = /** @class */ (function () {
        function DaffProductLoadSuccess(payload) {
            this.payload = payload;
            this.type = DaffProductActionTypes.ProductLoadSuccessAction;
        }
        return DaffProductLoadSuccess;
    }());
    if (false) {
        /** @type {?} */
        DaffProductLoadSuccess.prototype.type;
        /** @type {?} */
        DaffProductLoadSuccess.prototype.payload;
    }
    /**
     * An action called when a request for a Product failed.
     *
     * @param payload - An error message
     */
    var   /**
     * An action called when a request for a Product failed.
     *
     * @param payload - An error message
     */
    DaffProductLoadFailure = /** @class */ (function () {
        function DaffProductLoadFailure(payload) {
            this.payload = payload;
            this.type = DaffProductActionTypes.ProductLoadFailureAction;
        }
        return DaffProductLoadFailure;
    }());
    if (false) {
        /** @type {?} */
        DaffProductLoadFailure.prototype.type;
        /** @type {?} */
        DaffProductLoadFailure.prototype.payload;
    }
    /**
     * Update the qty of a product in an redux store.
     *
     * @param payload - The qty of the product.
     */
    var   /**
     * Update the qty of a product in an redux store.
     *
     * @param payload - The qty of the product.
     */
    DaffProductUpdateQty = /** @class */ (function () {
        function DaffProductUpdateQty(payload) {
            this.payload = payload;
            this.type = DaffProductActionTypes.UpdateQtyAction;
        }
        return DaffProductUpdateQty;
    }());
    if (false) {
        /** @type {?} */
        DaffProductUpdateQty.prototype.type;
        /** @type {?} */
        DaffProductUpdateQty.prototype.payload;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @enum {string} */
    var DaffProductGridActionTypes = {
        ProductGridLoadAction: '[ProductGrid] Load Action',
        ProductGridLoadSuccessAction: '[ProductGrid] Load Success Action',
        ProductGridLoadFailureAction: '[ProductGrid] Load Failure Action',
        ProductGridResetAction: '[ProductGrid] Reset Action',
    };
    /**
     * Triggers a request for an array of products.
     */
    var   /**
     * Triggers a request for an array of products.
     */
    DaffProductGridLoad = /** @class */ (function () {
        function DaffProductGridLoad() {
            this.type = DaffProductGridActionTypes.ProductGridLoadAction;
        }
        return DaffProductGridLoad;
    }());
    if (false) {
        /** @type {?} */
        DaffProductGridLoad.prototype.type;
    }
    /**
     * An action called when a request for of an array of products succeeded.
     *
     * @param payload - An array of Products
     * @template T
     */
    var   /**
     * An action called when a request for of an array of products succeeded.
     *
     * @param payload - An array of Products
     * @template T
     */
    DaffProductGridLoadSuccess = /** @class */ (function () {
        function DaffProductGridLoadSuccess(payload) {
            this.payload = payload;
            this.type = DaffProductGridActionTypes.ProductGridLoadSuccessAction;
        }
        return DaffProductGridLoadSuccess;
    }());
    if (false) {
        /** @type {?} */
        DaffProductGridLoadSuccess.prototype.type;
        /** @type {?} */
        DaffProductGridLoadSuccess.prototype.payload;
    }
    /**
     * An action called when a request for an array of products failed.
     *
     * @param payload - An error message
     */
    var   /**
     * An action called when a request for an array of products failed.
     *
     * @param payload - An error message
     */
    DaffProductGridLoadFailure = /** @class */ (function () {
        function DaffProductGridLoadFailure(payload) {
            this.payload = payload;
            this.type = DaffProductGridActionTypes.ProductGridLoadFailureAction;
        }
        return DaffProductGridLoadFailure;
    }());
    if (false) {
        /** @type {?} */
        DaffProductGridLoadFailure.prototype.type;
        /** @type {?} */
        DaffProductGridLoadFailure.prototype.payload;
    }
    /**
     * Resets the state of the product grid redux store to its initial state.
     */
    var   /**
     * Resets the state of the product grid redux store to its initial state.
     */
    DaffProductGridReset = /** @class */ (function () {
        function DaffProductGridReset() {
            this.type = DaffProductGridActionTypes.ProductGridResetAction;
        }
        return DaffProductGridReset;
    }());
    if (false) {
        /** @type {?} */
        DaffProductGridReset.prototype.type;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @enum {string} */
    var DaffBestSellersActionTypes = {
        BestSellersLoadAction: '[BestSellers] Load Action',
        BestSellersLoadSuccessAction: '[BestSellers] Load Success Action',
        BestSellersLoadFailureAction: '[BestSellers] Load Failure Action',
        BestSellersResetAction: '[BestSellers] Reset Action',
    };
    /**
     * Triggers a request for best selling products.
     */
    var   /**
     * Triggers a request for best selling products.
     */
    DaffBestSellersLoad = /** @class */ (function () {
        function DaffBestSellersLoad() {
            this.type = DaffBestSellersActionTypes.BestSellersLoadAction;
        }
        return DaffBestSellersLoad;
    }());
    if (false) {
        /** @type {?} */
        DaffBestSellersLoad.prototype.type;
    }
    /**
     * An action called when a request for best selling products succeeded.
     *
     * @param payload - An array of Products
     * @template T
     */
    var   /**
     * An action called when a request for best selling products succeeded.
     *
     * @param payload - An array of Products
     * @template T
     */
    DaffBestSellersLoadSuccess = /** @class */ (function () {
        function DaffBestSellersLoadSuccess(payload) {
            this.payload = payload;
            this.type = DaffBestSellersActionTypes.BestSellersLoadSuccessAction;
        }
        return DaffBestSellersLoadSuccess;
    }());
    if (false) {
        /** @type {?} */
        DaffBestSellersLoadSuccess.prototype.type;
        /** @type {?} */
        DaffBestSellersLoadSuccess.prototype.payload;
    }
    /**
     * An action called when a request for best selling products failed.
     *
     * @param payload - An error message
     */
    var   /**
     * An action called when a request for best selling products failed.
     *
     * @param payload - An error message
     */
    DaffBestSellersLoadFailure = /** @class */ (function () {
        function DaffBestSellersLoadFailure(payload) {
            this.payload = payload;
            this.type = DaffBestSellersActionTypes.BestSellersLoadFailureAction;
        }
        return DaffBestSellersLoadFailure;
    }());
    if (false) {
        /** @type {?} */
        DaffBestSellersLoadFailure.prototype.type;
        /** @type {?} */
        DaffBestSellersLoadFailure.prototype.payload;
    }
    /**
     * Resets the state of the best sellers redux store to its initial state.
     */
    var   /**
     * Resets the state of the best sellers redux store to its initial state.
     */
    DaffBestSellersReset = /** @class */ (function () {
        function DaffBestSellersReset() {
            this.type = DaffBestSellersActionTypes.BestSellersResetAction;
        }
        return DaffBestSellersReset;
    }());
    if (false) {
        /** @type {?} */
        DaffBestSellersReset.prototype.type;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @enum {string} */
    var DaffConfigurableProductActionTypes = {
        ConfigurableProductApplyAttributeAction: '[Configurable Product] Configurable Product Apply Attribute Action',
        ConfigurableProductRemoveAttributeAction: '[Configurable Product] Configurable Product Remove Attribute Action',
        ConfigurableProductToggleAttributeAction: '[Configurable Product] Configurable Product Toggle Attribute Action',
    };
    /**
     * Applies an attribute to a particular configurable product.
     *
     * @param id - Id of the Configurable Product
     * @param attributeId - Id of the attribute to be applied
     * @param attributeValue - Value of the attribute to be applied
     * @template T
     */
    var   /**
     * Applies an attribute to a particular configurable product.
     *
     * @param id - Id of the Configurable Product
     * @param attributeId - Id of the attribute to be applied
     * @param attributeValue - Value of the attribute to be applied
     * @template T
     */
    DaffConfigurableProductApplyAttribute = /** @class */ (function () {
        function DaffConfigurableProductApplyAttribute(id, attributeId, attributeValue) {
            this.id = id;
            this.attributeId = attributeId;
            this.attributeValue = attributeValue;
            this.type = DaffConfigurableProductActionTypes.ConfigurableProductApplyAttributeAction;
        }
        return DaffConfigurableProductApplyAttribute;
    }());
    if (false) {
        /** @type {?} */
        DaffConfigurableProductApplyAttribute.prototype.type;
        /** @type {?} */
        DaffConfigurableProductApplyAttribute.prototype.id;
        /** @type {?} */
        DaffConfigurableProductApplyAttribute.prototype.attributeId;
        /** @type {?} */
        DaffConfigurableProductApplyAttribute.prototype.attributeValue;
    }
    /**
     * Removes an applied attribute from a particular configurable product.
     *
     * @param id - Id of the Configurable Product
     * @param attributeId - Id of the attribute to be removed
     * @template T
     */
    var   /**
     * Removes an applied attribute from a particular configurable product.
     *
     * @param id - Id of the Configurable Product
     * @param attributeId - Id of the attribute to be removed
     * @template T
     */
    DaffConfigurableProductRemoveAttribute = /** @class */ (function () {
        function DaffConfigurableProductRemoveAttribute(id, attributeId) {
            this.id = id;
            this.attributeId = attributeId;
            this.type = DaffConfigurableProductActionTypes.ConfigurableProductRemoveAttributeAction;
        }
        return DaffConfigurableProductRemoveAttribute;
    }());
    if (false) {
        /** @type {?} */
        DaffConfigurableProductRemoveAttribute.prototype.type;
        /** @type {?} */
        DaffConfigurableProductRemoveAttribute.prototype.id;
        /** @type {?} */
        DaffConfigurableProductRemoveAttribute.prototype.attributeId;
    }
    /**
     * Toggles an attribute of a particular configurable product. If the attribute type of the configurable product already has
     * a different value than the one provided in the action, the attribute value in state will be overwritten by the value provided
     * in the action.
     *
     * @param id - Id of the Configurable Product
     * @param attributeId - Id of the attribute to be toggled
     * @param attributeValue - Value of the attribute to be toggled
     * @template T
     */
    var   /**
     * Toggles an attribute of a particular configurable product. If the attribute type of the configurable product already has
     * a different value than the one provided in the action, the attribute value in state will be overwritten by the value provided
     * in the action.
     *
     * @param id - Id of the Configurable Product
     * @param attributeId - Id of the attribute to be toggled
     * @param attributeValue - Value of the attribute to be toggled
     * @template T
     */
    DaffConfigurableProductToggleAttribute = /** @class */ (function () {
        function DaffConfigurableProductToggleAttribute(id, attributeId, attributeValue) {
            this.id = id;
            this.attributeId = attributeId;
            this.attributeValue = attributeValue;
            this.type = DaffConfigurableProductActionTypes.ConfigurableProductToggleAttributeAction;
        }
        return DaffConfigurableProductToggleAttribute;
    }());
    if (false) {
        /** @type {?} */
        DaffConfigurableProductToggleAttribute.prototype.type;
        /** @type {?} */
        DaffConfigurableProductToggleAttribute.prototype.id;
        /** @type {?} */
        DaffConfigurableProductToggleAttribute.prototype.attributeId;
        /** @type {?} */
        DaffConfigurableProductToggleAttribute.prototype.attributeValue;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @enum {string} */
    var DaffCompositeProductActionTypes = {
        CompositeProductApplyOptionAction: '[Composite Product] Composite Product Apply Option Action',
    };
    /**
     * Applies a product option to a particular composite product.
     *
     * @param id - Id of the Composite Product
     * @param itemId - Id of the product item.
     * @param optionId - Id of the option of the product item that is chosen.
     * @template T
     */
    var   /**
     * Applies a product option to a particular composite product.
     *
     * @param id - Id of the Composite Product
     * @param itemId - Id of the product item.
     * @param optionId - Id of the option of the product item that is chosen.
     * @template T
     */
    DaffCompositeProductApplyOption = /** @class */ (function () {
        function DaffCompositeProductApplyOption(id, itemId, optionId, qty) {
            this.id = id;
            this.itemId = itemId;
            this.optionId = optionId;
            this.qty = qty;
            this.type = DaffCompositeProductActionTypes.CompositeProductApplyOptionAction;
        }
        return DaffCompositeProductApplyOption;
    }());
    if (false) {
        /** @type {?} */
        DaffCompositeProductApplyOption.prototype.type;
        /** @type {?} */
        DaffCompositeProductApplyOption.prototype.id;
        /** @type {?} */
        DaffCompositeProductApplyOption.prototype.itemId;
        /** @type {?} */
        DaffCompositeProductApplyOption.prototype.optionId;
        /** @type {?} */
        DaffCompositeProductApplyOption.prototype.qty;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * A composite product is a group of products sold together. It includes one primary product and many accessory "items".
     * The composite product items are additional products the customer might want to purchase with the primary product,
     * and each item has a number of options from which the user can choose. Composite product items can be optional or required.
     * For example, a toolbox bundle might have a primary product of the toolbox. The items could be a hammer and a screw driver,
     * and the options for these items could be two different hammers and two different screwdrivers between which the customer could choose.
     * All of these items could have different prices/discounts/etc which would cause the composite products to have ranged prices.
     * @record
     */
    function DaffCompositeProduct() { }
    if (false) {
        /** @type {?} */
        DaffCompositeProduct.prototype.items;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @enum {string} */
    var DaffCompositeProductItemInputEnum = {
        select: 'select',
        radio: 'radio',
    };
    /**
     * The composite product item describes one set of product options that the user can add to the composite product.
     * A composite product item can be required or optional. If it is required, an option _must_ be chosen in order to add the product to the cart.
     * If the item is optional, the product can be added to the cart without an option having been chosen.
     * For example, if a composite product is a toolbox bundle, a composite product item might be a screw driver, and the options contained in that
     * item might be a phillips head and a flathead. The customer could choose to add either a phillips head or a flathead to the
     * composite product, or neither if the item is optional.
     * @record
     */
    function DaffCompositeProductItem() { }
    if (false) {
        /** @type {?} */
        DaffCompositeProductItem.prototype.id;
        /** @type {?} */
        DaffCompositeProductItem.prototype.required;
        /** @type {?} */
        DaffCompositeProductItem.prototype.title;
        /** @type {?} */
        DaffCompositeProductItem.prototype.input_type;
        /** @type {?} */
        DaffCompositeProductItem.prototype.options;
    }
    /**
     * The composite product item option is a DaffProduct that can be added to a composite product.
     * @record
     */
    function DaffCompositeProductItemOption() { }
    if (false) {
        /** @type {?} */
        DaffCompositeProductItemOption.prototype.id;
        /** @type {?} */
        DaffCompositeProductItemOption.prototype.name;
        /** @type {?} */
        DaffCompositeProductItemOption.prototype.price;
        /** @type {?} */
        DaffCompositeProductItemOption.prototype.is_default;
        /** @type {?} */
        DaffCompositeProductItemOption.prototype.quantity;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * A configurable product is a product with configurable attributes. The price of a configurable product may change based on
     * the attributes chosen, so a configurable product can have a price range. An example of a configurable product is a T-shirt.
     * @record
     */
    function DaffConfigurableProduct() { }
    if (false) {
        /** @type {?} */
        DaffConfigurableProduct.prototype.configurableAttributes;
        /** @type {?} */
        DaffConfigurableProduct.prototype.variants;
    }
    /**
     * An attribute of the configurable product that the customer must choose to add the configurable product to the cart.
     * An example of an attribute would be size for clothing.
     * @record
     */
    function DaffConfigurableProductAttribute() { }
    if (false) {
        /** @type {?} */
        DaffConfigurableProductAttribute.prototype.code;
        /** @type {?} */
        DaffConfigurableProductAttribute.prototype.label;
        /** @type {?} */
        DaffConfigurableProductAttribute.prototype.values;
    }
    /**
     * A variant is one version of the configurable product with all attributes chosen. Variants exist because not all versions of every configuration of
     * the product might be in stock. For example, a shirt might have a medium, red shirt and a small,
     * green shirt in stock, but no small, red shirts. In this case there would be two variants (mediumRed, smallGreen) rather than the maximum 4 variants
     * (smallRed, mediumRed, smallGreen, mediumGreen). This ensures the customer can't add a configurable product to the cart that is not
     * in stock. However, variants don't usually need to be considered by the frontend dev, because daffodil abstacts away the concept of variants into
     * an "available attributes" selector.
     * @record
     */
    function DaffConfigurableProductVariant() { }
    if (false) {
        /** @type {?} */
        DaffConfigurableProductVariant.prototype.appliedAttributes;
        /** @type {?} */
        DaffConfigurableProductVariant.prototype.id;
        /** @type {?} */
        DaffConfigurableProductVariant.prototype.price;
        /** @type {?} */
        DaffConfigurableProductVariant.prototype.discount;
        /** @type {?|undefined} */
        DaffConfigurableProductVariant.prototype.image;
        /** @type {?} */
        DaffConfigurableProductVariant.prototype.in_stock;
    }
    /**
     * The applied attributes for a particular product variant.
     * @record
     */
    function DaffProductVariantAttributesDictionary() { }
    /**
     * The configurable option of a configurable product attribute. For example, this could be "blue" for the attribute "color" for a T-shirt.
     * @record
     */
    function DaffConfigurableProductOptionValue() { }
    if (false) {
        /** @type {?} */
        DaffConfigurableProductOptionValue.prototype.value;
        /** @type {?} */
        DaffConfigurableProductOptionValue.prototype.label;
        /** @type {?|undefined} */
        DaffConfigurableProductOptionValue.prototype.swatch;
    }
    /**
     * An optional field for the hex color code for DaffConfigurableProductOptionValues that need it.
     * @record
     */
    function DaffSwatchOption() { }
    if (false) {
        /** @type {?} */
        DaffSwatchOption.prototype.value;
        /** @type {?|undefined} */
        DaffSwatchOption.prototype.thumbnail;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * @record
     */
    function DaffProductPrices() { }
    if (false) {
        /** @type {?} */
        DaffProductPrices.prototype.discountedPrice;
        /** @type {?} */
        DaffProductPrices.prototype.discount;
        /** @type {?} */
        DaffProductPrices.prototype.originalPrice;
    }
    /**
     * @record
     */
    function DaffPriceRange() { }
    if (false) {
        /** @type {?} */
        DaffPriceRange.prototype.maxPrice;
        /** @type {?} */
        DaffPriceRange.prototype.minPrice;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * @record
     */
    function DaffCompositeConfigurationItem() { }
    if (false) {
        /** @type {?|undefined} */
        DaffCompositeConfigurationItem.prototype.qty;
        /** @type {?|undefined} */
        DaffCompositeConfigurationItem.prototype.value;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * Resolves product data for product pages, and will only resolve the url after a product request succeeds or fails. This resolver expects a url
     * of the form `some/url/{id}` where `{id}` is the product id.
     */
    var DaffProductPageResolver = /** @class */ (function () {
        function DaffProductPageResolver(platformId, store, dispatcher) {
            this.platformId = platformId;
            this.store = store;
            this.dispatcher = dispatcher;
        }
        /**
         * @param {?} route
         * @return {?}
         */
        DaffProductPageResolver.prototype.resolve = /**
         * @param {?} route
         * @return {?}
         */
        function (route) {
            this.store.dispatch(new DaffProductLoad(route.paramMap.get('id')));
            return common.isPlatformBrowser(this.platformId) ? rxjs.of(true) : this.dispatcher.pipe(effects.ofType(DaffProductActionTypes.ProductLoadSuccessAction, DaffProductActionTypes.ProductLoadFailureAction), operators.mapTo(true), operators.take(1));
        };
        DaffProductPageResolver.decorators = [
            { type: core.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */
        DaffProductPageResolver.ctorParameters = function () { return [
            { type: String, decorators: [{ type: core.Inject, args: [core.PLATFORM_ID,] }] },
            { type: store.Store },
            { type: store.ActionsSubject }
        ]; };
        /** @nocollapse */ DaffProductPageResolver.ngInjectableDef = core.ɵɵdefineInjectable({ factory: function DaffProductPageResolver_Factory() { return new DaffProductPageResolver(core.ɵɵinject(core.PLATFORM_ID), core.ɵɵinject(store.Store), core.ɵɵinject(store.ActionsSubject)); }, token: DaffProductPageResolver, providedIn: "root" });
        return DaffProductPageResolver;
    }());
    if (false) {
        /**
         * @type {?}
         * @private
         */
        DaffProductPageResolver.prototype.platformId;
        /**
         * @type {?}
         * @private
         */
        DaffProductPageResolver.prototype.store;
        /**
         * @type {?}
         * @private
         */
        DaffProductPageResolver.prototype.dispatcher;
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
     * Initial values of the product grid state.
     * @type {?}
     */
    var initialState = {
        products: [],
        loading: false,
        errors: []
    };
    /**
     * Reducer function that catches actions and changes/overwrites product grid state.
     *
     * @template T
     * @param {?=} state current State of the redux store
     * @param {?=} action a product grid action
     * @return {?} Product grid state
     */
    function daffProductGridReducer(state, action) {
        if (state === void 0) { state = initialState; }
        switch (action.type) {
            case DaffProductGridActionTypes.ProductGridLoadAction:
                return __assign({}, state, { loading: true });
            case DaffProductGridActionTypes.ProductGridLoadSuccessAction:
                return __assign({}, state, { loading: false });
            case DaffProductGridActionTypes.ProductGridLoadFailureAction:
                return __assign({}, state, { loading: false, errors: state.errors.concat(new Array(action.payload)) });
            default:
                return state;
        }
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * Initial values of the product state.
     * @type {?}
     */
    var initialState$1 = {
        selectedProductId: null,
        qty: 1,
        loading: false,
        errors: []
    };
    /**
     * Reducer function that catches actions and changes/overwrites product state.
     *
     * @template T
     * @param {?=} state current State of the redux store
     * @param {?=} action a product action
     * @return {?} product state
     */
    function daffProductReducer(state, action) {
        if (state === void 0) { state = initialState$1; }
        switch (action.type) {
            case DaffProductActionTypes.ProductLoadAction:
                return __assign({}, state, { loading: true, selectedProductId: action.payload });
            case DaffProductActionTypes.ProductLoadSuccessAction:
                return __assign({}, state, { loading: false });
            case DaffProductActionTypes.ProductLoadFailureAction:
                return __assign({}, state, { loading: false, errors: state.errors.concat(new Array(action.payload)) });
            case DaffProductActionTypes.UpdateQtyAction:
                return __assign({}, state, { qty: action.payload });
            default:
                return state;
        }
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var initialState$2 = {
        productIds: [],
        loading: false,
        errors: []
    };
    /** @type {?} */
    var resetState = Object.assign({}, initialState$2);
    /**
     * @template T
     * @param {?=} state
     * @param {?=} action
     * @return {?}
     */
    function daffBestSellersReducer(state, action) {
        if (state === void 0) { state = initialState$2; }
        switch (action.type) {
            case DaffBestSellersActionTypes.BestSellersLoadAction:
                return __assign({}, state, { loading: true });
            case DaffBestSellersActionTypes.BestSellersLoadSuccessAction:
                return __assign({}, state, { loading: false, productIds: getIds(action.payload) });
            case DaffBestSellersActionTypes.BestSellersLoadFailureAction:
                return __assign({}, state, { loading: false, errors: state.errors.concat(new Array(action.payload)) });
            case DaffBestSellersActionTypes.BestSellersResetAction:
                return __assign({}, resetState);
            default:
                return state;
        }
    }
    /**
     * @template T
     * @param {?} products
     * @return {?}
     */
    function getIds(products) {
        /** @type {?} */
        var ids = new Array();
        products.forEach((/**
         * @param {?} product
         * @return {?}
         */
        function (product) {
            ids.push(product.id);
        }));
        return ids;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var ɵ0 = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var cache;
        return (/**
         * @template T
         * @return {?}
         */
        function () {
            return cache = cache || entity.createEntityAdapter();
        });
    };
    /**
     * Product Adapter for changing/overwriting entity state.
     * @type {?}
     */
    var daffProductEntitiesAdapter = ((ɵ0))();

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * Reducer function that catches actions and changes/overwrites product entities state.
     *
     * @template T
     * @param {?=} state current State of the redux store
     * @param {?=} action ProductGrid, BestSellers, or Product actions
     * @return {?} Product entities state
     */
    function daffProductEntitiesReducer(state, action) {
        if (state === void 0) { state = daffProductEntitiesAdapter().getInitialState(); }
        /** @type {?} */
        var adapter = daffProductEntitiesAdapter();
        switch (action.type) {
            case DaffProductGridActionTypes.ProductGridLoadSuccessAction:
                return adapter.upsertMany(action.payload, state);
            case DaffBestSellersActionTypes.BestSellersLoadSuccessAction:
                return adapter.upsertMany(action.payload, state);
            case DaffProductActionTypes.ProductLoadSuccessAction:
                return adapter.upsertOne(__assign({ id: action.payload.id }, action.payload), state);
            case DaffProductGridActionTypes.ProductGridResetAction:
                return adapter.removeAll(state);
            default:
                return state;
        }
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var ɵ0$1 = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var cache;
        return (/**
         * @return {?}
         */
        function () {
            return cache = cache || entity.createEntityAdapter();
        });
    };
    /**
     * Configurable Product Applied Attributes Adapter for changing/overwriting entity state.
     * @type {?}
     */
    var daffConfigurableProductAppliedAttributesEntitiesAdapter = ((ɵ0$1))();

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * Reducer function that catches actions and changes/overwrites product entities state.
     *
     * @template T, V
     * @param {?=} state current State of the redux store
     * @param {?=} action ProductGrid, BestSellers, Product, or Configurable Product actions
     * @return {?} Product entities state
     */
    function daffConfigurableProductEntitiesReducer(state, action) {
        if (state === void 0) { state = daffConfigurableProductAppliedAttributesEntitiesAdapter().getInitialState(); }
        /** @type {?} */
        var adapter = daffConfigurableProductAppliedAttributesEntitiesAdapter();
        switch (action.type) {
            case DaffProductGridActionTypes.ProductGridLoadSuccessAction:
            case DaffBestSellersActionTypes.BestSellersLoadSuccessAction:
                return adapter.upsertMany(action.payload
                    .filter((/**
                 * @param {?} product
                 * @return {?}
                 */
                function (product) { return product.type === DaffProductTypeEnum.Configurable; }))
                    .map(buildConfigurableProductAppliedAttributesEntity), state);
            case DaffProductActionTypes.ProductLoadSuccessAction:
                if (action.payload.type === DaffProductTypeEnum.Configurable) {
                    return adapter.upsertOne(buildConfigurableProductAppliedAttributesEntity(action.payload), state);
                }
                ;
                return state;
            case DaffConfigurableProductActionTypes.ConfigurableProductApplyAttributeAction:
                return adapter.upsertOne({
                    id: action.id,
                    attributes: applyAttribute(state.entities[action.id].attributes, action.attributeId, action.attributeValue),
                }, state);
            case DaffConfigurableProductActionTypes.ConfigurableProductRemoveAttributeAction:
                return adapter.upsertOne({
                    id: action.id,
                    attributes: removeAttribute(state.entities[action.id].attributes, action.attributeId)
                }, state);
            case DaffConfigurableProductActionTypes.ConfigurableProductToggleAttributeAction:
                return adapter.upsertOne({
                    id: action.id,
                    attributes: isAttributeSelected(state.entities[action.id].attributes, action.attributeId, action.attributeValue) ?
                        removeAttribute(state.entities[action.id].attributes, action.attributeId) :
                        applyAttribute(state.entities[action.id].attributes, action.attributeId, action.attributeValue)
                }, state);
            default:
                return state;
        }
    }
    /**
     * @param {?} product
     * @return {?}
     */
    function buildConfigurableProductAppliedAttributesEntity(product) {
        return {
            id: product.id,
            attributes: []
        };
    }
    /**
     * @param {?} currentAttributes
     * @param {?} appliedAttributeCode
     * @param {?} appliedAttributeValue
     * @return {?}
     */
    function applyAttribute(currentAttributes, appliedAttributeCode, appliedAttributeValue) {
        /** @type {?} */
        var attributeIndex = currentAttributes.findIndex((/**
         * @param {?} attribute
         * @return {?}
         */
        function (attribute) { return attribute.code === appliedAttributeCode; }));
        /** @type {?} */
        var retainedAttributes = attributeIndex > -1 ? currentAttributes.slice(0, attributeIndex) : currentAttributes;
        return __spread(retainedAttributes, [
            {
                code: appliedAttributeCode,
                value: appliedAttributeValue
            }
        ]);
    }
    /**
     * @param {?} currentAttributes
     * @param {?} appliedAttributeCode
     * @return {?}
     */
    function removeAttribute(currentAttributes, appliedAttributeCode) {
        /** @type {?} */
        var index = currentAttributes.findIndex((/**
         * @param {?} attribute
         * @return {?}
         */
        function (attribute) { return attribute.code === appliedAttributeCode; }));
        return index > -1 ? currentAttributes.slice(0, index) : currentAttributes;
    }
    /**
     * @param {?} currentAttributes
     * @param {?} attributeCode
     * @param {?} attributeValue
     * @return {?}
     */
    function isAttributeSelected(currentAttributes, attributeCode, attributeValue) {
        /** @type {?} */
        var index = currentAttributes.findIndex((/**
         * @param {?} attribute
         * @return {?}
         */
        function (attribute) { return attribute.code === attributeCode; }));
        return index > -1 && currentAttributes[index].value === attributeValue;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var ɵ0$2 = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var cache;
        return (/**
         * @return {?}
         */
        function () {
            return cache = cache || entity.createEntityAdapter();
        });
    };
    /**
     * Composite Product Item Options Adapter for changing/overwriting entity state.
     * @type {?}
     */
    var daffCompositeProductAppliedOptionsEntitiesAdapter = ((ɵ0$2))();

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * Reducer function that catches actions and changes/overwrites composite product entities state.
     *
     * @template T, V
     * @param {?=} state current State of the redux store
     * @param {?=} action ProductGrid, BestSellers, Product, or Composite Product actions
     * @return {?} Product entities state
     */
    function daffCompositeProductEntitiesReducer(state, action) {
        var _a;
        if (state === void 0) { state = daffCompositeProductAppliedOptionsEntitiesAdapter().getInitialState(); }
        /** @type {?} */
        var adapter = daffCompositeProductAppliedOptionsEntitiesAdapter();
        switch (action.type) {
            case DaffProductGridActionTypes.ProductGridLoadSuccessAction:
            case DaffBestSellersActionTypes.BestSellersLoadSuccessAction:
                return adapter.upsertMany(action.payload
                    .filter((/**
                 * @param {?} product
                 * @return {?}
                 */
                function (product) { return product.type === DaffProductTypeEnum.Composite; }))
                    .map((/**
                 * @param {?} product
                 * @return {?}
                 */
                function (product) { return buildCompositeProductAppliedOptionsEntity((/** @type {?} */ ((/** @type {?} */ (product))))); })), state);
            case DaffProductActionTypes.ProductLoadSuccessAction:
                if (action.payload.type === DaffProductTypeEnum.Composite) {
                    return adapter.upsertOne(buildCompositeProductAppliedOptionsEntity((/** @type {?} */ ((/** @type {?} */ (action.payload))))), state);
                }
                ;
                return state;
            case DaffCompositeProductActionTypes.CompositeProductApplyOptionAction:
                return adapter.upsertOne({
                    id: action.id,
                    items: __assign({}, state.entities[action.id].items, (_a = {}, _a[action.itemId] = {
                        value: action.optionId,
                        qty: action.qty ? action.qty : 1
                    }, _a))
                }, state);
            default:
                return state;
        }
    }
    /**
     * @param {?} product
     * @return {?}
     */
    function buildCompositeProductAppliedOptionsEntity(product) {
        return {
            id: product.id,
            items: product.items.reduce((/**
             * @param {?} acc
             * @param {?} item
             * @return {?}
             */
            function (acc, item) {
                var _a;
                return (__assign({}, acc, (_a = {}, _a[item.id] = getDefaultOption(item), _a)));
            }), {})
        };
    }
    /**
     * Sets the default item option to the specified default option if it is in stock.
     * Does not set a default option if a default is not specified.
     * Does not set a default option but does set a default qty if the default is out of stock.
     * @param {?} item a DaffCompositeProductItem
     * @return {?}
     */
    function getDefaultOption(item) {
        /** @type {?} */
        var defaultOptionIndex = item.options.findIndex((/**
         * @param {?} option
         * @return {?}
         */
        function (option) { return option.is_default; }));
        if (defaultOptionIndex > -1) {
            return {
                value: item.options[defaultOptionIndex].in_stock ? item.options[defaultOptionIndex].id : null,
                qty: item.options[defaultOptionIndex].quantity
            };
        }
        else {
            return { value: null, qty: null };
        }
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * Returns state values from all product related reducers.
     * @type {?}
     */
    var daffProductReducers = {
        products: daffProductEntitiesReducer,
        productGrid: daffProductGridReducer,
        product: daffProductReducer,
        bestSellers: daffBestSellersReducer,
        configurableProductAttributes: daffConfigurableProductEntitiesReducer,
        compositeProductOptions: daffCompositeProductEntitiesReducer
    };

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * @record
     */
    function DaffCompositeProductEntity() { }
    if (false) {
        /** @type {?} */
        DaffCompositeProductEntity.prototype.id;
        /** @type {?} */
        DaffCompositeProductEntity.prototype.items;
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
     * @template T
     */
    function DaffProductFeatureMemoizedSelector() { }
    if (false) {
        /** @type {?} */
        DaffProductFeatureMemoizedSelector.prototype.selectProductState;
    }
    var ɵ0$3 = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var cache;
        return (/**
         * @template T
         * @return {?}
         */
        function () { return cache = cache
            ? cache
            : { selectProductState: store.createFeatureSelector('product') }; });
    };
    /** @type {?} */
    var getDaffProductFeatureSelector = ((ɵ0$3))();

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * @record
     * @template T
     */
    function DaffProductPageMemoizedSelectors() { }
    if (false) {
        /** @type {?} */
        DaffProductPageMemoizedSelectors.prototype.selectSelectedProductState;
        /** @type {?} */
        DaffProductPageMemoizedSelectors.prototype.selectSelectedProductId;
        /** @type {?} */
        DaffProductPageMemoizedSelectors.prototype.selectSelectedProductQty;
        /** @type {?} */
        DaffProductPageMemoizedSelectors.prototype.selectSelectedProductLoadingState;
        /** @type {?} */
        DaffProductPageMemoizedSelectors.prototype.selectSelectedProduct;
    }
    /** @type {?} */
    var createProductPageSelectors = (/**
     * @template T
     * @return {?}
     */
    function () {
        var selectProductState = getDaffProductFeatureSelector().selectProductState;
        /**
         * Selector for product state.
         * @type {?}
         */
        var selectSelectedProductState = store.createSelector(selectProductState, (/**
         * @param {?} state
         * @return {?}
         */
        function (state) { return state.product; }));
        /**
         * Selector for the selected product's ID.
         * @deprecated
         * @type {?}
         */
        var selectSelectedProductId = store.createSelector(selectSelectedProductState, (/**
         * @param {?} state
         * @return {?}
         */
        function (state) { return state.selectedProductId; }));
        /**
         * Selector for the quantity of the product.
         * @deprecated
         * @type {?}
         */
        var selectSelectedProductQty = store.createSelector(selectSelectedProductState, (/**
         * @param {?} state
         * @return {?}
         */
        function (state) { return state.qty; }));
        /**
         * Selector for the loading state of the selected product.
         * @type {?}
         */
        var selectSelectedProductLoadingState = store.createSelector(selectSelectedProductState, (/**
         * @param {?} state
         * @return {?}
         */
        function (state) { return state.loading; }));
        /**
         * Selects the selected product from product state and the selected product ID.
         * @deprecated use selectProduct entities selector instead.
         * @type {?}
         */
        var selectSelectedProduct = store.createSelector(selectProductState, selectSelectedProductId, (/**
         * @param {?} state
         * @param {?} id
         * @return {?}
         */
        function (state, id) { return state.products.entities[id]; }));
        return {
            selectSelectedProductState: selectSelectedProductState,
            selectSelectedProductId: selectSelectedProductId,
            selectSelectedProductQty: selectSelectedProductQty,
            selectSelectedProductLoadingState: selectSelectedProductLoadingState,
            selectSelectedProduct: selectSelectedProduct
        };
    });
    var ɵ0$4 = createProductPageSelectors;
    var ɵ1 = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var cache;
        return (/**
         * @template T
         * @return {?}
         */
        function () { return cache = cache
            ? cache
            : createProductPageSelectors(); });
    };
    /** @type {?} */
    var getDaffProductPageSelectors = ((ɵ1))();

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * @record
     * @template T
     */
    function DaffProductEntitiesMemoizedSelectors() { }
    if (false) {
        /** @type {?} */
        DaffProductEntitiesMemoizedSelectors.prototype.selectProductEntitiesState;
        /** @type {?} */
        DaffProductEntitiesMemoizedSelectors.prototype.selectProductIds;
        /** @type {?} */
        DaffProductEntitiesMemoizedSelectors.prototype.selectProductEntities;
        /** @type {?} */
        DaffProductEntitiesMemoizedSelectors.prototype.selectAllProducts;
        /** @type {?} */
        DaffProductEntitiesMemoizedSelectors.prototype.selectProductTotal;
        /** @type {?} */
        DaffProductEntitiesMemoizedSelectors.prototype.selectProduct;
        /** @type {?} */
        DaffProductEntitiesMemoizedSelectors.prototype.selectProductPrice;
        /** @type {?} */
        DaffProductEntitiesMemoizedSelectors.prototype.selectProductDiscountAmount;
        /** @type {?} */
        DaffProductEntitiesMemoizedSelectors.prototype.selectProductDiscountedPrice;
        /** @type {?} */
        DaffProductEntitiesMemoizedSelectors.prototype.selectProductDiscountPercent;
        /** @type {?} */
        DaffProductEntitiesMemoizedSelectors.prototype.selectProductHasDiscount;
        /** @type {?} */
        DaffProductEntitiesMemoizedSelectors.prototype.selectIsProductOutOfStock;
    }
    /** @type {?} */
    var createProductEntitiesSelectors = (/**
     * @template T
     * @return {?}
     */
    function () {
        var selectProductState = getDaffProductFeatureSelector().selectProductState;
        /** @type {?} */
        var adapterSelectors = daffProductEntitiesAdapter().getSelectors();
        /**
         * Product Entities State
         * @type {?}
         */
        var selectProductEntitiesState = store.createSelector(selectProductState, (/**
         * @param {?} state
         * @return {?}
         */
        function (state) { return state.products; }));
        /**
         * Selector for product IDs.
         * @type {?}
         */
        var selectProductIds = store.createSelector(selectProductEntitiesState, adapterSelectors.selectIds);
        /**
         * Selector for all product entities (see ngrx/entity).
         * @type {?}
         */
        var selectProductEntities = store.createSelector(selectProductEntitiesState, adapterSelectors.selectEntities);
        /**
         * Selector for all products on state.
         * @type {?}
         */
        var selectAllProducts = store.createSelector(selectProductEntitiesState, adapterSelectors.selectAll);
        /**
         * Selector for the total number of products.
         * @type {?}
         */
        var selectProductTotal = store.createSelector(selectProductEntitiesState, adapterSelectors.selectTotal);
        /** @type {?} */
        var selectProduct = store.createSelector(selectProductEntities, (/**
         * @param {?} products
         * @param {?} props
         * @return {?}
         */
        function (products, props) { return products[props.id]; }));
        /** @type {?} */
        var selectProductPrice = store.createSelector(selectProductEntities, (/**
         * @param {?} products
         * @param {?} props
         * @return {?}
         */
        function (products, props) {
            /** @type {?} */
            var product = selectProduct.projector(products, { id: props.id });
            //todo: use optional chaining when possible
            return product && product.price || null;
        }));
        /** @type {?} */
        var selectProductDiscountAmount = store.createSelector(selectProductEntities, (/**
         * @param {?} products
         * @param {?} props
         * @return {?}
         */
        function (products, props) {
            /** @type {?} */
            var product = selectProduct.projector(products, { id: props.id });
            //todo: use optional chaining when possible
            return (product.discount && product.discount.amount) || 0;
        }));
        /** @type {?} */
        var selectProductDiscountedPrice = store.createSelector(selectProductEntities, (/**
         * @param {?} products
         * @param {?} props
         * @return {?}
         */
        function (products, props) {
            /** @type {?} */
            var price = selectProductPrice.projector(products, { id: props.id });
            /** @type {?} */
            var discountAmount = selectProductDiscountAmount.projector(products, { id: props.id });
            return core$1.daffSubtract(price, discountAmount);
        }))
        //todo use optional chaining when possible.
        ;
        //todo use optional chaining when possible.
        /** @type {?} */
        var selectProductDiscountPercent = store.createSelector(selectProductEntities, (/**
         * @param {?} products
         * @param {?} props
         * @return {?}
         */
        function (products, props) {
            /** @type {?} */
            var product = selectProduct.projector(products, { id: props.id });
            return (product.discount && product.discount.percent) || 0;
        }));
        /** @type {?} */
        var selectProductHasDiscount = store.createSelector(selectProductEntities, (/**
         * @param {?} products
         * @param {?} props
         * @return {?}
         */
        function (products, props) {
            /** @type {?} */
            var discountAmount = selectProductDiscountAmount.projector(products, { id: props.id });
            return !!discountAmount;
        }));
        /** @type {?} */
        var selectIsProductOutOfStock = store.createSelector(selectProductEntities, (/**
         * @param {?} products
         * @param {?} props
         * @return {?}
         */
        function (products, props) {
            /** @type {?} */
            var product = selectProduct.projector(products, { id: props.id });
            return product ? !product.in_stock : null;
        }));
        return {
            selectProductEntitiesState: selectProductEntitiesState,
            selectProductIds: selectProductIds,
            selectProductEntities: selectProductEntities,
            selectAllProducts: selectAllProducts,
            selectProductTotal: selectProductTotal,
            selectProduct: selectProduct,
            selectProductPrice: selectProductPrice,
            selectProductDiscountAmount: selectProductDiscountAmount,
            selectProductDiscountedPrice: selectProductDiscountedPrice,
            selectProductDiscountPercent: selectProductDiscountPercent,
            selectProductHasDiscount: selectProductHasDiscount,
            selectIsProductOutOfStock: selectIsProductOutOfStock
        };
    });
    var ɵ0$5 = createProductEntitiesSelectors;
    var ɵ1$1 = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var cache;
        return (/**
         * @template T
         * @return {?}
         */
        function () { return cache = cache
            ? cache
            : createProductEntitiesSelectors(); });
    };
    /** @type {?} */
    var getDaffProductEntitiesSelectors = ((ɵ1$1))();

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * @record
     * @template T
     */
    function DaffBestSellersMemoizedSelectors() { }
    if (false) {
        /** @type {?} */
        DaffBestSellersMemoizedSelectors.prototype.selectBestSellersState;
        /** @type {?} */
        DaffBestSellersMemoizedSelectors.prototype.selectBestSellersLoadingState;
        /** @type {?} */
        DaffBestSellersMemoizedSelectors.prototype.selectBestSellersIdsState;
        /** @type {?} */
        DaffBestSellersMemoizedSelectors.prototype.selectBestSellersProducts;
    }
    /** @type {?} */
    var createBestSellersSelectors = (/**
     * @template T
     * @return {?}
     */
    function () {
        var selectAllProducts = getDaffProductEntitiesSelectors().selectAllProducts;
        var selectProductState = getDaffProductFeatureSelector().selectProductState;
        /**
         * Selector for Best Seller State
         * @type {?}
         */
        var selectBestSellersState = store.createSelector(selectProductState, (/**
         * @param {?} state
         * @return {?}
         */
        function (state) { return state.bestSellers; }));
        /**
         * Selector for the loading state of best selling products.
         * @type {?}
         */
        var selectBestSellersLoadingState = store.createSelector(selectBestSellersState, (/**
         * @param {?} state
         * @return {?}
         */
        function (state) { return state.loading; }));
        /**
         * Selector for the IDs of best selling products.
         * @type {?}
         */
        var selectBestSellersIdsState = store.createSelector(selectBestSellersState, (/**
         * @param {?} state
         * @return {?}
         */
        function (state) { return state.productIds; }));
        /**
         * Selector for the best selling products.
         * @type {?}
         */
        var selectBestSellersProducts = store.createSelector(selectBestSellersIdsState, selectAllProducts, (/**
         * @param {?} ids
         * @param {?} products
         * @return {?}
         */
        function (ids, products) { return products.filter((/**
         * @param {?} product
         * @return {?}
         */
        function (product) { return ids.indexOf(product.id) > -1; })); }));
        return {
            selectBestSellersState: selectBestSellersState,
            selectBestSellersLoadingState: selectBestSellersLoadingState,
            selectBestSellersIdsState: selectBestSellersIdsState,
            selectBestSellersProducts: selectBestSellersProducts
        };
    });
    var ɵ0$6 = createBestSellersSelectors;
    var ɵ1$2 = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var cache;
        return (/**
         * @template T
         * @return {?}
         */
        function () { return cache = cache
            ? cache
            : createBestSellersSelectors(); });
    };
    /** @type {?} */
    var getDaffBestSellersSelectors = ((ɵ1$2))();

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * @record
     * @template T
     */
    function DaffProductGridMemoizedSelectors() { }
    if (false) {
        /** @type {?} */
        DaffProductGridMemoizedSelectors.prototype.selectProductGridState;
        /** @type {?} */
        DaffProductGridMemoizedSelectors.prototype.selectProductGridLoadingState;
    }
    /** @type {?} */
    var createProductGridSelectors = (/**
     * @template T
     * @return {?}
     */
    function () {
        var selectProductState = getDaffProductFeatureSelector().selectProductState;
        /**
         * Selector for Product Grid state.
         * @type {?}
         */
        var selectProductGridState = store.createSelector(selectProductState, (/**
         * @param {?} state
         * @return {?}
         */
        function (state) { return state.productGrid; }));
        /**
         * Selector for product grid loading state.
         * @type {?}
         */
        var selectProductGridLoadingState = store.createSelector(selectProductGridState, (/**
         * @param {?} state
         * @return {?}
         */
        function (state) { return state.loading; }));
        return {
            selectProductGridState: selectProductGridState,
            selectProductGridLoadingState: selectProductGridLoadingState
        };
    });
    var ɵ0$7 = createProductGridSelectors;
    var ɵ1$3 = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var cache;
        return (/**
         * @template T
         * @return {?}
         */
        function () { return cache = cache
            ? cache
            : createProductGridSelectors(); });
    };
    /** @type {?} */
    var getDaffProductGridSelectors = ((ɵ1$3))();

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * @record
     */
    function DaffConfigurableProductEntitiesMemoizedSelectors() { }
    if (false) {
        /** @type {?} */
        DaffConfigurableProductEntitiesMemoizedSelectors.prototype.selectConfigurableProductAppliedAttributesEntitiesState;
        /** @type {?} */
        DaffConfigurableProductEntitiesMemoizedSelectors.prototype.selectConfigurableProductIds;
        /** @type {?} */
        DaffConfigurableProductEntitiesMemoizedSelectors.prototype.selectConfigurableProductAppliedAttributesEntities;
        /** @type {?} */
        DaffConfigurableProductEntitiesMemoizedSelectors.prototype.selectConfigurableProductTotal;
        /** @type {?} */
        DaffConfigurableProductEntitiesMemoizedSelectors.prototype.selectConfigurableProductAppliedAttributes;
        /** @type {?} */
        DaffConfigurableProductEntitiesMemoizedSelectors.prototype.selectConfigurableProductAppliedAttributesAsDictionary;
    }
    /** @type {?} */
    var createConfigurableProductAppliedAttributesEntitiesSelectors = (/**
     * @template T
     * @return {?}
     */
    function () {
        var selectProductState = getDaffProductFeatureSelector().selectProductState;
        /** @type {?} */
        var adapterSelectors = daffConfigurableProductAppliedAttributesEntitiesAdapter().getSelectors();
        /**
         * Configurable Product Entities State
         * @type {?}
         */
        var selectConfigurableProductAppliedAttributesEntitiesState = store.createSelector(selectProductState, (/**
         * @param {?} state
         * @return {?}
         */
        function (state) { return state.configurableProductAttributes; }));
        /**
         * Selector for configurable product IDs.
         * @type {?}
         */
        var selectConfigurableProductIds = store.createSelector(selectConfigurableProductAppliedAttributesEntitiesState, adapterSelectors.selectIds);
        /**
         * Selector for all configurable product applied attributes as entities (see ngrx/entity).
         * @type {?}
         */
        var selectConfigurableProductAppliedAttributesEntities = store.createSelector(selectConfigurableProductAppliedAttributesEntitiesState, adapterSelectors.selectEntities);
        /**
         * Selector for the total number of configurable products.
         * @type {?}
         */
        var selectConfigurableProductTotal = store.createSelector(selectConfigurableProductAppliedAttributesEntitiesState, adapterSelectors.selectTotal);
        /**
         * Selector for the applied attributes of a particular configurable product.
         * @type {?}
         */
        var selectConfigurableProductAppliedAttributes = store.createSelector(selectConfigurableProductAppliedAttributesEntitiesState, (/**
         * @param {?} products
         * @param {?} props
         * @return {?}
         */
        function (products, props) { return products.entities[props.id].attributes; }));
        /** @type {?} */
        var selectConfigurableProductAppliedAttributesAsDictionary = store.createSelector(selectConfigurableProductAppliedAttributesEntitiesState, (/**
         * @param {?} products
         * @param {?} props
         * @return {?}
         */
        function (products, props) { return selectConfigurableProductAppliedAttributes.projector(products, { id: props.id }).reduce((/**
         * @param {?} acc
         * @param {?} attribute
         * @return {?}
         */
        function (acc, attribute) {
            var _a;
            return (__assign({}, acc, (_a = {}, _a[attribute.code] = attribute.value, _a)));
        }), {}); }));
        return {
            selectConfigurableProductAppliedAttributesEntitiesState: selectConfigurableProductAppliedAttributesEntitiesState,
            selectConfigurableProductIds: selectConfigurableProductIds,
            selectConfigurableProductAppliedAttributesEntities: selectConfigurableProductAppliedAttributesEntities,
            selectConfigurableProductTotal: selectConfigurableProductTotal,
            selectConfigurableProductAppliedAttributes: selectConfigurableProductAppliedAttributes,
            selectConfigurableProductAppliedAttributesAsDictionary: selectConfigurableProductAppliedAttributesAsDictionary
        };
    });
    var ɵ0$8 = createConfigurableProductAppliedAttributesEntitiesSelectors;
    var ɵ1$4 = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var cache;
        return (/**
         * @template T
         * @return {?}
         */
        function () { return cache = cache
            ? cache
            : createConfigurableProductAppliedAttributesEntitiesSelectors(); });
    };
    /** @type {?} */
    var getDaffConfigurableProductEntitiesSelectors = ((ɵ1$4))();

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * @record
     */
    function DaffConfigurableProductMemoizedSelectors() { }
    if (false) {
        /** @type {?} */
        DaffConfigurableProductMemoizedSelectors.prototype.selectAllConfigurableProductAttributes;
        /** @type {?} */
        DaffConfigurableProductMemoizedSelectors.prototype.selectAllConfigurableProductVariants;
        /** @type {?} */
        DaffConfigurableProductMemoizedSelectors.prototype.selectMatchingConfigurableProductVariants;
        /** @type {?} */
        DaffConfigurableProductMemoizedSelectors.prototype.selectConfigurableProductPrices;
        /** @type {?} */
        DaffConfigurableProductMemoizedSelectors.prototype.selectConfigurableProductDiscountedPrices;
        /** @type {?} */
        DaffConfigurableProductMemoizedSelectors.prototype.selectConfigurableProductPercentDiscounts;
        /** @type {?} */
        DaffConfigurableProductMemoizedSelectors.prototype.selectConfigurableProductHasDiscount;
        /** @type {?} */
        DaffConfigurableProductMemoizedSelectors.prototype.selectConfigurableProductMinimumPrice;
        /** @type {?} */
        DaffConfigurableProductMemoizedSelectors.prototype.selectConfigurableProductMaximumPrice;
        /** @type {?} */
        DaffConfigurableProductMemoizedSelectors.prototype.selectConfigurableProductMinimumDiscountedPrice;
        /** @type {?} */
        DaffConfigurableProductMemoizedSelectors.prototype.selectConfigurableProductMaximumDiscountedPrice;
        /** @type {?} */
        DaffConfigurableProductMemoizedSelectors.prototype.selectConfigurableProductMinimumPercentDiscount;
        /** @type {?} */
        DaffConfigurableProductMemoizedSelectors.prototype.selectConfigurableProductMaximumPercentDiscount;
        /** @type {?} */
        DaffConfigurableProductMemoizedSelectors.prototype.isConfigurablePriceRanged;
        /** @type {?} */
        DaffConfigurableProductMemoizedSelectors.prototype.selectSelectableConfigurableProductAttributes;
    }
    /** @type {?} */
    var createConfigurableProductSelectors = (/**
     * @return {?}
     */
    function () {
        var _a = getDaffConfigurableProductEntitiesSelectors(), selectConfigurableProductAppliedAttributes = _a.selectConfigurableProductAppliedAttributes, selectConfigurableProductAppliedAttributesEntitiesState = _a.selectConfigurableProductAppliedAttributesEntitiesState;
        var _b = getDaffProductEntitiesSelectors(), selectProductEntities = _b.selectProductEntities, selectProduct = _b.selectProduct;
        /**
         * Selector for all variants of the product.
         * @type {?}
         */
        var selectAllConfigurableProductVariants = store.createSelector(selectProductEntities, (/**
         * @param {?} products
         * @param {?} props
         * @return {?}
         */
        function (products, props) {
            /** @type {?} */
            var product = (/** @type {?} */ (selectProduct.projector(products, { id: props.id })));
            if (!product || product.type !== DaffProductTypeEnum.Configurable) {
                return [];
            }
            return product.variants;
        }));
        /**
         * Selector for the variants of the product that match the currently applied attributes.
         * @type {?}
         */
        var selectMatchingConfigurableProductVariants = store.createSelector(selectProductEntities, selectConfigurableProductAppliedAttributesEntitiesState, (/**
         * @param {?} products
         * @param {?} appliedAttributesEntities
         * @param {?} props
         * @return {?}
         */
        function (products, appliedAttributesEntities, props) {
            /** @type {?} */
            var product = (/** @type {?} */ (selectProduct.projector(products, { id: props.id })));
            if (!product || product.type !== DaffProductTypeEnum.Configurable) {
                return [];
            }
            /** @type {?} */
            var appliedAttributes = selectConfigurableProductAppliedAttributes.projector(appliedAttributesEntities, { id: props.id });
            return product.variants.filter((/**
             * @param {?} variant
             * @return {?}
             */
            function (variant) { return isVariantAvailable(appliedAttributes, variant); }));
        }));
        /**
         * Selector for the range of price for current configuration of the configurable product.
         * @type {?}
         */
        var selectConfigurableProductPrices = store.createSelector(selectProductEntities, selectConfigurableProductAppliedAttributesEntitiesState, (/**
         * @param {?} products
         * @param {?} appliedAttributesEntities
         * @param {?} props
         * @return {?}
         */
        function (products, appliedAttributesEntities, props) {
            return selectMatchingConfigurableProductVariants.projector(products, appliedAttributesEntities, { id: props.id })
                .map((/**
             * @param {?} variant
             * @return {?}
             */
            function (variant) { return variant.price; }));
        }));
        /**
         * Selector for the range of discounts for current configuration of the configurable product.
         * @type {?}
         */
        var selectConfigurableProductDiscountedPrices = store.createSelector(selectProductEntities, selectConfigurableProductAppliedAttributesEntitiesState, (/**
         * @param {?} products
         * @param {?} appliedAttributesEntities
         * @param {?} props
         * @return {?}
         */
        function (products, appliedAttributesEntities, props) {
            return selectMatchingConfigurableProductVariants.projector(products, appliedAttributesEntities, { id: props.id })
                .map((/**
             * @param {?} variant
             * @return {?}
             */
            function (variant) { return variant.discount ? core$1.daffSubtract(variant.price, variant.discount.amount) : variant.price; }));
        }));
        /**
         * Selector for the range of percent discounts for current configuration of the configurable product.
         * @type {?}
         */
        var selectConfigurableProductPercentDiscounts = store.createSelector(selectProductEntities, selectConfigurableProductAppliedAttributesEntitiesState, (/**
         * @param {?} products
         * @param {?} appliedAttributesEntities
         * @param {?} props
         * @return {?}
         */
        function (products, appliedAttributesEntities, props) {
            return selectMatchingConfigurableProductVariants.projector(products, appliedAttributesEntities, { id: props.id })
                .map((/**
             * @param {?} variant
             * @return {?}
             */
            function (variant) { return variant.discount && variant.discount.percent; }));
        }));
        /**
         * Selector that determines whether any of the variants for the current configuration of the configurable product has a discount.
         * @type {?}
         */
        var selectConfigurableProductHasDiscount = store.createSelector(selectProductEntities, selectConfigurableProductAppliedAttributesEntitiesState, (/**
         * @param {?} products
         * @param {?} appliedAttributesEntities
         * @param {?} props
         * @return {?}
         */
        function (products, appliedAttributesEntities, props) {
            return selectMatchingConfigurableProductVariants.projector(products, appliedAttributesEntities, { id: props.id })
                .reduce((/**
             * @param {?} acc
             * @param {?} variant
             * @return {?}
             */
            function (acc, variant) { return acc || (variant.discount && variant.discount.amount > 0); }), false);
        }))
        /**
         * Selector for the minimum price in the range of configurable product variant prices.
         */
        ;
        /**
         * Selector for the minimum price in the range of configurable product variant prices.
         * @type {?}
         */
        var selectConfigurableProductMinimumPrice = store.createSelector(selectProductEntities, selectConfigurableProductAppliedAttributesEntitiesState, (/**
         * @param {?} products
         * @param {?} appliedAttributesEntities
         * @param {?} props
         * @return {?}
         */
        function (products, appliedAttributesEntities, props) { return getMinimumPrice(selectConfigurableProductPrices.projector(products, appliedAttributesEntities, { id: props.id })); }))
        /**
         * Selector for the maximum price in the range of configurable product variant prices.
         */
        ;
        /**
         * Selector for the maximum price in the range of configurable product variant prices.
         * @type {?}
         */
        var selectConfigurableProductMaximumPrice = store.createSelector(selectProductEntities, selectConfigurableProductAppliedAttributesEntitiesState, (/**
         * @param {?} products
         * @param {?} appliedAttributesEntities
         * @param {?} props
         * @return {?}
         */
        function (products, appliedAttributesEntities, props) { return getMaximumPrice(selectConfigurableProductPrices.projector(products, appliedAttributesEntities, { id: props.id })); }))
        /**
         * Selector for the minimum discounted price in the range of configurable product variants.
         */
        ;
        /**
         * Selector for the minimum discounted price in the range of configurable product variants.
         * @type {?}
         */
        var selectConfigurableProductMinimumDiscountedPrice = store.createSelector(selectProductEntities, selectConfigurableProductAppliedAttributesEntitiesState, (/**
         * @param {?} products
         * @param {?} appliedAttributesEntities
         * @param {?} props
         * @return {?}
         */
        function (products, appliedAttributesEntities, props) { return getMinimumPrice(selectConfigurableProductDiscountedPrices.projector(products, appliedAttributesEntities, { id: props.id })); }))
        /**
         * Selector for the maximum discounted price in the range of configurable product variants.
         */
        ;
        /**
         * Selector for the maximum discounted price in the range of configurable product variants.
         * @type {?}
         */
        var selectConfigurableProductMaximumDiscountedPrice = store.createSelector(selectProductEntities, selectConfigurableProductAppliedAttributesEntitiesState, (/**
         * @param {?} products
         * @param {?} appliedAttributesEntities
         * @param {?} props
         * @return {?}
         */
        function (products, appliedAttributesEntities, props) { return getMaximumPrice(selectConfigurableProductDiscountedPrices.projector(products, appliedAttributesEntities, { id: props.id })); }))
        /**
         * Selector for the minimum percent discount in the range of configurable product variants.
         */
        ;
        /**
         * Selector for the minimum percent discount in the range of configurable product variants.
         * @type {?}
         */
        var selectConfigurableProductMinimumPercentDiscount = store.createSelector(selectProductEntities, selectConfigurableProductAppliedAttributesEntitiesState, (/**
         * @param {?} products
         * @param {?} appliedAttributesEntities
         * @param {?} props
         * @return {?}
         */
        function (products, appliedAttributesEntities, props) { return getMinimumPrice(selectConfigurableProductPercentDiscounts.projector(products, appliedAttributesEntities, { id: props.id })); }))
        /**
         * Selector for the maximum percent discount in the range of configurable product variants.
         */
        ;
        /**
         * Selector for the maximum percent discount in the range of configurable product variants.
         * @type {?}
         */
        var selectConfigurableProductMaximumPercentDiscount = store.createSelector(selectProductEntities, selectConfigurableProductAppliedAttributesEntitiesState, (/**
         * @param {?} products
         * @param {?} appliedAttributesEntities
         * @param {?} props
         * @return {?}
         */
        function (products, appliedAttributesEntities, props) { return getMaximumPrice(selectConfigurableProductPercentDiscounts.projector(products, appliedAttributesEntities, { id: props.id })); }))
        /**
         * Selector for whether the configurable product variant prices have been narrowed to a single price.
         */
        ;
        /**
         * Selector for whether the configurable product variant prices have been narrowed to a single price.
         * @type {?}
         */
        var isConfigurablePriceRanged = store.createSelector(selectProductEntities, selectConfigurableProductAppliedAttributesEntitiesState, (/**
         * @param {?} products
         * @param {?} appliedAttributesEntities
         * @param {?} props
         * @return {?}
         */
        function (products, appliedAttributesEntities, props) {
            /** @type {?} */
            var minPrice = selectConfigurableProductMinimumPrice.projector(products, appliedAttributesEntities, { id: props.id });
            /** @type {?} */
            var maxPrice = selectConfigurableProductMaximumPrice.projector(products, appliedAttributesEntities, { id: props.id });
            return minPrice !== maxPrice;
        }));
        /** @type {?} */
        var selectAllConfigurableProductAttributes = store.createSelector(selectProductEntities, (/**
         * @param {?} products
         * @param {?} props
         * @return {?}
         */
        function (products, props) {
            /** @type {?} */
            var product = (/** @type {?} */ (selectProduct.projector(products, { id: props.id })));
            if (product.type !== DaffProductTypeEnum.Configurable) {
                return {};
            }
            return product.configurableAttributes.reduce((/**
             * @param {?} acc
             * @param {?} attribute
             * @return {?}
             */
            function (acc, attribute) {
                var _a;
                return (__assign({}, acc, (_a = {}, _a[attribute.code] = attribute.values.map((/**
                 * @param {?} value
                 * @return {?}
                 */
                function (value) { return value.value; })), _a)));
            }), {});
        }));
        /**
         * Selector for selectable configurable product attributes derived from the remaining variants and the order of currently applied attributes.
         * The remaining variants of the product are derived from the currently applied attributes.
         * @type {?}
         */
        var selectSelectableConfigurableProductAttributes = store.createSelector(selectProductEntities, selectConfigurableProductAppliedAttributesEntitiesState, (/**
         * @param {?} products
         * @param {?} appliedAttributesEntities
         * @param {?} props
         * @return {?}
         */
        function (products, appliedAttributesEntities, props) {
            /** @type {?} */
            var product = (/** @type {?} */ (selectProduct.projector(products, { id: props.id })));
            if (product.type !== DaffProductTypeEnum.Configurable) {
                return {};
            }
            /** @type {?} */
            var appliedAttributes = selectConfigurableProductAppliedAttributes.projector(appliedAttributesEntities, { id: props.id });
            /** @type {?} */
            var selectableAttributes = initializeSelectableAttributes(product.configurableAttributes);
            // Set which values of applied attribute codes should be set as selectable based on the order that they were selected
            /** @type {?} */
            var matchedVariants = appliedAttributes.reduce((/**
             * @param {?} matchingVariants
             * @param {?} appliedAttribute
             * @param {?} i
             * @return {?}
             */
            function (matchingVariants, appliedAttribute, i) {
                /** @type {?} */
                var filteredVariants = matchingVariants.filter((/**
                 * @param {?} variant
                 * @return {?}
                 */
                function (variant) { return isVariantAvailable(appliedAttributes.slice(0, i), variant); }));
                selectableAttributes[appliedAttribute.code] = getSelectableAttributesFromVariants(selectableAttributes, filteredVariants, appliedAttribute.code);
                return filteredVariants;
            }), product.variants).filter((/**
             * @param {?} variant
             * @return {?}
             */
            function (variant) {
                return isVariantAvailable(appliedAttributes, variant);
            }));
            // Set which values of the unapplied attribute codes should be set as selectable based on the matching variants of all
            // applied attributes.
            product.configurableAttributes.forEach((/**
             * @param {?} attribute
             * @return {?}
             */
            function (attribute) {
                if (!selectableAttributes[attribute.code].length) {
                    selectableAttributes[attribute.code] = getSelectableAttributesFromVariants(selectableAttributes, matchedVariants, attribute.code);
                }
            }));
            return selectableAttributes;
        }));
        return {
            selectAllConfigurableProductAttributes: selectAllConfigurableProductAttributes,
            selectAllConfigurableProductVariants: selectAllConfigurableProductVariants,
            selectConfigurableProductPrices: selectConfigurableProductPrices,
            selectConfigurableProductDiscountedPrices: selectConfigurableProductDiscountedPrices,
            selectConfigurableProductPercentDiscounts: selectConfigurableProductPercentDiscounts,
            selectConfigurableProductHasDiscount: selectConfigurableProductHasDiscount,
            selectConfigurableProductMinimumPrice: selectConfigurableProductMinimumPrice,
            selectConfigurableProductMaximumPrice: selectConfigurableProductMaximumPrice,
            selectConfigurableProductMinimumDiscountedPrice: selectConfigurableProductMinimumDiscountedPrice,
            selectConfigurableProductMaximumDiscountedPrice: selectConfigurableProductMaximumDiscountedPrice,
            selectConfigurableProductMinimumPercentDiscount: selectConfigurableProductMinimumPercentDiscount,
            selectConfigurableProductMaximumPercentDiscount: selectConfigurableProductMaximumPercentDiscount,
            isConfigurablePriceRanged: isConfigurablePriceRanged,
            selectMatchingConfigurableProductVariants: selectMatchingConfigurableProductVariants,
            selectSelectableConfigurableProductAttributes: selectSelectableConfigurableProductAttributes
        };
    });
    var ɵ0$9 = createConfigurableProductSelectors;
    /**
     * @param {?} selectableAttributes
     * @param {?} variants
     * @param {?} code
     * @return {?}
     */
    function getSelectableAttributesFromVariants(selectableAttributes, variants, code) {
        return variants.reduce((/**
         * @param {?} selectedAttributes
         * @param {?} variant
         * @return {?}
         */
        function (selectedAttributes, variant) {
            return isVariantAttributeMarkedAsSelectable(selectedAttributes, variant.appliedAttributes[code])
                ? selectedAttributes
                : __spread(selectedAttributes, [
                    variant.appliedAttributes[code]
                ]);
        }), selectableAttributes[code]);
    }
    var ɵ1$5 = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var cache;
        return (/**
         * @return {?}
         */
        function () { return cache = cache
            ? cache
            : createConfigurableProductSelectors(); });
    };
    /** @type {?} */
    var getDaffConfigurableProductSelectors = ((ɵ1$5))();
    /**
     * @param {?} appliedAttributes
     * @param {?} variant
     * @return {?}
     */
    function isVariantAvailable(appliedAttributes, variant) {
        return variant.in_stock &&
            appliedAttributes.reduce((/**
             * @param {?} acc
             * @param {?} attribute
             * @return {?}
             */
            function (acc, attribute) {
                return acc && attribute.value === variant.appliedAttributes[attribute.code];
            }), true);
    }
    /**
     * @param {?} prices
     * @return {?}
     */
    function getMinimumPrice(prices) {
        return prices.reduce((/**
         * @param {?} acc
         * @param {?} price
         * @return {?}
         */
        function (acc, price) { return price < acc ? price : acc; }), prices[0]);
    }
    /**
     * @param {?} prices
     * @return {?}
     */
    function getMaximumPrice(prices) {
        return prices.reduce((/**
         * @param {?} acc
         * @param {?} price
         * @return {?}
         */
        function (acc, price) { return price > acc ? price : acc; }), prices[0]);
    }
    /**
     * @param {?} attributes
     * @return {?}
     */
    function initializeSelectableAttributes(attributes) {
        return attributes.reduce((/**
         * @param {?} acc
         * @param {?} attribute
         * @return {?}
         */
        function (acc, attribute) {
            var _a;
            return (__assign({}, acc, (_a = {}, _a[attribute.code] = [], _a)));
        }), {});
    }
    /**
     * @param {?} attributeArray
     * @param {?} variantValue
     * @return {?}
     */
    function isVariantAttributeMarkedAsSelectable(attributeArray, variantValue) {
        return attributeArray.indexOf(variantValue) > -1;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * @record
     */
    function DaffCompositeProductEntitiesMemoizedSelectors() { }
    if (false) {
        /** @type {?} */
        DaffCompositeProductEntitiesMemoizedSelectors.prototype.selectCompositeProductAppliedOptionsEntitiesState;
        /** @type {?} */
        DaffCompositeProductEntitiesMemoizedSelectors.prototype.selectCompositeProductIds;
        /** @type {?} */
        DaffCompositeProductEntitiesMemoizedSelectors.prototype.selectCompositeProductAppliedOptionsEntities;
        /** @type {?} */
        DaffCompositeProductEntitiesMemoizedSelectors.prototype.selectCompositeProductTotal;
        /** @type {?} */
        DaffCompositeProductEntitiesMemoizedSelectors.prototype.selectCompositeProductAppliedOptions;
        /** @type {?} */
        DaffCompositeProductEntitiesMemoizedSelectors.prototype.selectIsCompositeProductItemRequired;
    }
    /** @type {?} */
    var createCompositeProductAppliedOptionsEntitiesSelectors = (/**
     * @template T
     * @return {?}
     */
    function () {
        var selectProductState = getDaffProductFeatureSelector().selectProductState;
        var _a = getDaffProductEntitiesSelectors(), selectProductEntities = _a.selectProductEntities, selectProduct = _a.selectProduct;
        /** @type {?} */
        var adapterSelectors = daffCompositeProductAppliedOptionsEntitiesAdapter().getSelectors();
        /**
         * Composite Product Entities State
         * @type {?}
         */
        var selectCompositeProductAppliedOptionsEntitiesState = store.createSelector(selectProductState, (/**
         * @param {?} state
         * @return {?}
         */
        function (state) { return state.compositeProductOptions; }));
        /**
         * Selector for composite product IDs.
         * @type {?}
         */
        var selectCompositeProductIds = store.createSelector(selectCompositeProductAppliedOptionsEntitiesState, adapterSelectors.selectIds);
        /**
         * Selector for all composite product applied attributes as entities (see ngrx/entity).
         * @type {?}
         */
        var selectCompositeProductAppliedOptionsEntities = store.createSelector(selectCompositeProductAppliedOptionsEntitiesState, adapterSelectors.selectEntities);
        /**
         * Selector for the total number of composite products.
         * @type {?}
         */
        var selectCompositeProductTotal = store.createSelector(selectCompositeProductAppliedOptionsEntitiesState, adapterSelectors.selectTotal);
        /**
         * Selector for the applied attributes of a particular composite product.
         * @type {?}
         */
        var selectCompositeProductAppliedOptions = store.createSelector(selectProductEntities, selectCompositeProductAppliedOptionsEntitiesState, (/**
         * @param {?} products
         * @param {?} appliedOptions
         * @param {?} props
         * @return {?}
         */
        function (products, appliedOptions, props) {
            /** @type {?} */
            var product = selectProduct.projector(products, { id: props.id });
            if (product.type !== DaffProductTypeEnum.Composite) {
                return undefined;
            }
            return ((/** @type {?} */ (product))).items.reduce((/**
             * @param {?} acc
             * @param {?} item
             * @return {?}
             */
            function (acc, item) {
                var _a;
                return (__assign({}, acc, (_a = {}, _a[item.id] = appliedOptions.entities[product.id].items[item.id].value ? __assign({}, item.options.find((/**
                 * @param {?} option
                 * @return {?}
                 */
                function (option) { return option.id === appliedOptions.entities[product.id].items[item.id].value; })), { quantity: appliedOptions.entities[product.id].items[item.id].qty }) : null, _a)));
            }), {});
        }));
        /** @type {?} */
        var selectIsCompositeProductItemRequired = store.createSelector(selectProductEntities, (/**
         * @param {?} products
         * @param {?} props
         * @return {?}
         */
        function (products, props) {
            /** @type {?} */
            var product = selectProduct.projector(products, { id: props.id });
            if (product.type !== DaffProductTypeEnum.Composite) {
                return undefined;
            }
            /** @type {?} */
            var productItem = ((/** @type {?} */ (product))).items.find((/**
             * @param {?} item
             * @return {?}
             */
            function (item) { return item.id === props.item_id; }));
            return productItem ? productItem.required : null;
        }));
        return {
            selectCompositeProductAppliedOptionsEntitiesState: selectCompositeProductAppliedOptionsEntitiesState,
            selectCompositeProductIds: selectCompositeProductIds,
            selectCompositeProductAppliedOptionsEntities: selectCompositeProductAppliedOptionsEntities,
            selectCompositeProductTotal: selectCompositeProductTotal,
            selectCompositeProductAppliedOptions: selectCompositeProductAppliedOptions,
            selectIsCompositeProductItemRequired: selectIsCompositeProductItemRequired
        };
    });
    var ɵ0$a = createCompositeProductAppliedOptionsEntitiesSelectors;
    var ɵ1$6 = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var cache;
        return (/**
         * @template T
         * @return {?}
         */
        function () { return cache = cache
            ? cache
            : createCompositeProductAppliedOptionsEntitiesSelectors(); });
    };
    /** @type {?} */
    var getDaffCompositeProductEntitiesSelectors = ((ɵ1$6))();

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * @record
     */
    function DaffCompositeProductMemoizedSelectors() { }
    if (false) {
        /**
         * Get a DaffPriceRange for a composite product based on the configuration provided excluding unselected, optional item prices.
         * @type {?}
         */
        DaffCompositeProductMemoizedSelectors.prototype.selectCompositeProductRequiredItemPricesForConfiguration;
        /**
         * Get the broadest possible DaffPriceRange for a composite product based on the configuration provided including optional item prices.
         * @type {?}
         */
        DaffCompositeProductMemoizedSelectors.prototype.selectCompositeProductOptionalItemPricesForConfiguration;
        /**
         * Get the DaffPriceRange for a composite product based on the current configuration of selected item options in redux state and
         * excluding unselected, optional item prices.
         * @type {?}
         */
        DaffCompositeProductMemoizedSelectors.prototype.selectCompositeProductPricesAsCurrentlyConfigured;
    }
    /** @type {?} */
    var createCompositeProductSelectors = (/**
     * @return {?}
     */
    function () {
        var _a = getDaffProductEntitiesSelectors(), selectProductEntities = _a.selectProductEntities, selectProduct = _a.selectProduct;
        var selectCompositeProductAppliedOptionsEntitiesState = getDaffCompositeProductEntitiesSelectors().selectCompositeProductAppliedOptionsEntitiesState;
        /** @type {?} */
        var selectCompositeProductRequiredItemPricesForConfiguration = store.createSelector(selectProductEntities, (/**
         * @param {?} products
         * @param {?} props
         * @return {?}
         */
        function (products, props) {
            /** @type {?} */
            var product = selectProduct.projector(products, { id: props.id });
            if (product.type !== DaffProductTypeEnum.Composite) {
                return undefined;
            }
            /** @type {?} */
            var appliedOptions = props.configuration ? getAppliedOptionsForConfiguration((/** @type {?} */ (product)), props.configuration) : {};
            return {
                minPrice: getMinPricesForConfiguration((/** @type {?} */ (product)), appliedOptions),
                maxPrice: getMaxPricesForConfiguration((/** @type {?} */ (product)), appliedOptions)
            };
        }));
        /** @type {?} */
        var selectCompositeProductOptionalItemPricesForConfiguration = store.createSelector(selectProductEntities, (/**
         * @param {?} products
         * @param {?} props
         * @return {?}
         */
        function (products, props) {
            /** @type {?} */
            var product = selectProduct.projector(products, { id: props.id });
            if (product.type !== DaffProductTypeEnum.Composite) {
                return undefined;
            }
            /** @type {?} */
            var appliedOptions = props.configuration ? getAppliedOptionsForConfiguration((/** @type {?} */ (product)), props.configuration) : {};
            return {
                minPrice: getMinPricesForConfiguration((/** @type {?} */ (product)), appliedOptions),
                maxPrice: getMaxPricesForConfigurationIncludingOptionalItems((/** @type {?} */ (product)), appliedOptions)
            };
        }));
        /** @type {?} */
        var selectCompositeProductPricesAsCurrentlyConfigured = store.createSelector(selectProductEntities, selectCompositeProductAppliedOptionsEntitiesState, (
        //todo use optional chaining when possible
        //todo use optional chaining when possible
        /**
         * @param {?} products
         * @param {?} appliedOptionsEntities
         * @param {?} props
         * @return {?}
         */
        function (products, appliedOptionsEntities, props) { return selectCompositeProductRequiredItemPricesForConfiguration.projector(products, {
            id: props.id,
            configuration: appliedOptionsEntities.entities[props.id] ? appliedOptionsEntities.entities[props.id].items : null
        }); }));
        return {
            selectCompositeProductRequiredItemPricesForConfiguration: selectCompositeProductRequiredItemPricesForConfiguration,
            selectCompositeProductOptionalItemPricesForConfiguration: selectCompositeProductOptionalItemPricesForConfiguration,
            selectCompositeProductPricesAsCurrentlyConfigured: selectCompositeProductPricesAsCurrentlyConfigured
        };
    });
    var ɵ0$b = createCompositeProductSelectors;
    var ɵ1$7 = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var cache;
        return (/**
         * @return {?}
         */
        function () { return cache = cache
            ? cache
            : createCompositeProductSelectors(); });
    };
    /** @type {?} */
    var getDaffCompositeProductSelectors = ((ɵ1$7))();
    /**
     * The minimum price of an item is zero if the item is optional.
     * @param {?} item DaffCompositeProductItem
     * @param {?} qty
     * @return {?}
     */
    function getMinimumRequiredCompositeItemPrice(item, qty) {
        return item.required ? core$1.daffMultiply(Math.min.apply(Math, __spread(item.options.map((/**
         * @param {?} option
         * @return {?}
         */
        function (option) { return option.price; })))), qty) : 0;
    }
    /**
     * The maximum price for an item is zero if the item is optional.
     * @param {?} item DaffCompositeProductItem
     * @param {?} qty
     * @return {?}
     */
    function getMaximumRequiredCompositeItemPrice(item, qty) {
        return item.required ? core$1.daffMultiply(Math.max.apply(Math, __spread(item.options.map((/**
         * @param {?} option
         * @return {?}
         */
        function (option) { return option.price; })))), qty) : 0;
    }
    /**
     * The minimum discounted price of an item is zero if the item is optional.
     * @param {?} item DaffCompositeProductItem
     * @param {?} qty
     * @return {?}
     */
    //todo use optional chaining when possible
    function getMinimumRequiredCompositeItemDiscountedPrice(item, qty) {
        return item.required ? core$1.daffMultiply(Math.min.apply(Math, __spread(item.options.map(getDiscountedPrice))), qty) : 0;
    }
    /**
     * The maximum discounted price of an item is zero if the item is optional.
     * @param {?} item DaffCompositeProductItem
     * @param {?} qty
     * @return {?}
     */
    //todo use optional chaining when possible
    function getMaximumRequiredCompositeItemDiscountedPrice(item, qty) {
        return item.required ? core$1.daffMultiply(Math.max.apply(Math, __spread(item.options.map(getDiscountedPrice))), qty) : 0;
    }
    /**
     * Gets the minimum prices of a composite product for the configuration provided excluding unselected, optional item prices.
     * @param {?} product a DaffCompositeProduct
     * @param {?} appliedOptions a Dictionary<DaffCompositeProductItemOption> that determines the current configuration of the composite product.
     * @return {?}
     */
    function getMinPricesForConfiguration(product, appliedOptions) {
        return {
            discountedPrice: product.items.reduce((/**
             * @param {?} acc
             * @param {?} item
             * @return {?}
             */
            function (acc, item) { return core$1.daffAdd(acc, appliedOptionHasId(appliedOptions[item.id]) ?
                core$1.daffMultiply(getDiscountedPrice(appliedOptions[item.id]), appliedOptions[item.id].quantity) :
                getMinimumRequiredCompositeItemDiscountedPrice(item, getOptionQty(appliedOptions[item.id]))); }), getDiscountedPrice(product)),
            discount: { amount: null, percent: null },
            originalPrice: product.items.reduce((/**
             * @param {?} acc
             * @param {?} item
             * @return {?}
             */
            function (acc, item) { return core$1.daffAdd(acc, appliedOptionHasId(appliedOptions[item.id]) ?
                core$1.daffMultiply(appliedOptions[item.id].price, appliedOptions[item.id].quantity) :
                getMinimumRequiredCompositeItemPrice(item, getOptionQty(appliedOptions[item.id]))); }), product.price)
        };
    }
    /**
     * Gets the maximum prices of a composite product for the configuration provided excluding unselected, optional item prices.
     * @param {?} product a DaffCompositeProduct
     * @param {?} appliedOptions a Dictionary<DaffCompositeProductItemOption> that determines the current configuration of the composite product.
     * @return {?}
     */
    function getMaxPricesForConfiguration(product, appliedOptions) {
        return {
            discountedPrice: product.items.reduce((/**
             * @param {?} acc
             * @param {?} item
             * @return {?}
             */
            function (acc, item) { return core$1.daffAdd(acc, appliedOptionHasId(appliedOptions[item.id]) ?
                core$1.daffMultiply(getDiscountedPrice(appliedOptions[item.id]), appliedOptions[item.id].quantity) :
                getMaximumRequiredCompositeItemDiscountedPrice(item, getOptionQty(appliedOptions[item.id]))); }), getDiscountedPrice(product)),
            discount: { amount: null, percent: null },
            originalPrice: product.items.reduce((/**
             * @param {?} acc
             * @param {?} item
             * @return {?}
             */
            function (acc, item) { return core$1.daffAdd(acc, appliedOptionHasId(appliedOptions[item.id]) ?
                core$1.daffMultiply(appliedOptions[item.id].price, appliedOptions[item.id].quantity) :
                getMaximumRequiredCompositeItemPrice(item, getOptionQty(appliedOptions[item.id]))); }), product.price)
        };
    }
    /**
     * @param {?} product
     * @return {?}
     */
    function getDiscountedPrice(product) {
        return product.discount ? core$1.daffSubtract(product.price, product.discount.amount) : product.price;
    }
    /**
     * Gets the maximum prices of a composite product including optional item prices.
     * @param {?} product a DaffCompositeProduct
     * @param {?} appliedOptions
     * @return {?}
     */
    function getMaxPricesForConfigurationIncludingOptionalItems(product, appliedOptions) {
        return {
            discountedPrice: ((/** @type {?} */ (product))).items.reduce((/**
             * @param {?} acc
             * @param {?} item
             * @return {?}
             */
            function (acc, item) { return core$1.daffAdd(acc, appliedOptionHasId(appliedOptions[item.id]) ?
                core$1.daffMultiply(getDiscountedPrice(appliedOptions[item.id]), appliedOptions[item.id].quantity) :
                appliedOptionHasQty(appliedOptions[item.id]) ?
                    core$1.daffMultiply(Math.max.apply(Math, __spread(item.options.map(getDiscountedPrice))), appliedOptions[item.id].quantity) : Math.max.apply(Math, __spread(item.options.map(getDiscountedPrice)))); }), getDiscountedPrice(product)),
            discount: { amount: null, percent: null },
            originalPrice: ((/** @type {?} */ (product))).items.reduce((/**
             * @param {?} acc
             * @param {?} item
             * @return {?}
             */
            function (acc, item) { return core$1.daffAdd(acc, appliedOptionHasId(appliedOptions[item.id]) ?
                core$1.daffMultiply(appliedOptions[item.id].price, appliedOptions[item.id].quantity) :
                appliedOptionHasQty(appliedOptions[item.id]) ?
                    core$1.daffMultiply(Math.max.apply(Math, __spread(item.options.map((/**
                     * @param {?} option
                     * @return {?}
                     */
                    function (option) { return option.price; })))), appliedOptions[item.id].quantity) : Math.max.apply(Math, __spread(item.options.map((/**
                 * @param {?} option
                 * @return {?}
                 */
                function (option) { return option.price; }))))); }), product.price)
        };
    }
    /**
     * Takes a product and a set of option configurations and convert it into a dictionary of the full option objects.
     * @param {?} product a DaffCompositeProduct
     * @param {?} configuration a Dictionary<DaffCompositeConfigurationItem> used to build the appliedOptions object.
     * @return {?}
     */
    function getAppliedOptionsForConfiguration(product, configuration) {
        return ((/** @type {?} */ (product))).items.reduce((/**
         * @param {?} acc
         * @param {?} item
         * @return {?}
         */
        function (acc, item) {
            var _a;
            return (__assign({}, acc, (_a = {}, _a[item.id] = configuration[item.id] ? __assign({}, item.options.find((/**
             * @param {?} option
             * @return {?}
             */
            function (option) { return option.id === configuration[item.id].value; })), { quantity: (configuration[item.id].qty === null || configuration[item.id].qty === undefined) ? 1 : configuration[item.id].qty }) : null, _a)));
        }), {});
    }
    //todo: use optional chaining when possible
    /**
     * @param {?} appliedOption
     * @return {?}
     */
    function appliedOptionHasId(appliedOption) {
        return appliedOption && !!appliedOption.id;
    }
    /**
     * @param {?} appliedOption
     * @return {?}
     */
    function getOptionQty(appliedOption) {
        return appliedOptionHasQty(appliedOption) ? appliedOption.quantity : 1;
    }
    //todo: use optional chaining when possible
    /**
     * @param {?} appliedOption
     * @return {?}
     */
    function appliedOptionHasQty(appliedOption) {
        return appliedOption && appliedOption.quantity !== null;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * @record
     * @template T
     */
    function DaffProductAllSelectors() { }
    /** @type {?} */
    var getDaffProductSelectors = (/**
     * @template T
     * @return {?}
     */
    function () {
        return __assign({}, getDaffBestSellersSelectors(), getDaffProductPageSelectors(), getDaffProductGridSelectors(), getDaffProductEntitiesSelectors(), getDaffProductFeatureSelector(), getDaffConfigurableProductEntitiesSelectors(), getDaffConfigurableProductSelectors(), getDaffCompositeProductEntitiesSelectors(), getDaffCompositeProductSelectors());
    });

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * Injection token that serves as a placeholder for any service that implements the DaffProductServiceInterface.
     * @type {?}
     */
    var DaffProductDriver = new core.InjectionToken('DaffProductDriver');

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * Effects for handling product grid actions and for triggering corresponding service requests.
     *
     * @param action$ - Redux action object
     * @param driver - A product service driver
     * @template T
     */
    var DaffProductGridEffects = /** @class */ (function () {
        function DaffProductGridEffects(actions$, driver) {
            var _this = this;
            this.actions$ = actions$;
            this.driver = driver;
            /**
             * Handles ProductGridLoadAction by making a service call for products and returning a success or failure action
             * to the action stream.
             *
             * @return An Observable of a DaffProductGridAction
             */
            this.loadAll$ = this.actions$.pipe(effects.ofType(DaffProductGridActionTypes.ProductGridLoadAction), operators.switchMap((/**
             * @param {?} action
             * @return {?}
             */
            function (action) {
                return _this.driver.getAll()
                    .pipe(operators.map((/**
                 * @param {?} resp
                 * @return {?}
                 */
                function (resp) {
                    return new DaffProductGridLoadSuccess(resp);
                })), operators.catchError((/**
                 * @param {?} error
                 * @return {?}
                 */
                function (error) {
                    return rxjs.of(new DaffProductGridLoadFailure('Failed to load product grid'));
                })));
            })));
        }
        DaffProductGridEffects.decorators = [
            { type: core.Injectable }
        ];
        /** @nocollapse */
        DaffProductGridEffects.ctorParameters = function () { return [
            { type: effects.Actions },
            { type: undefined, decorators: [{ type: core.Inject, args: [DaffProductDriver,] }] }
        ]; };
        __decorate([
            effects.Effect(),
            __metadata("design:type", rxjs.Observable)
        ], DaffProductGridEffects.prototype, "loadAll$", void 0);
        return DaffProductGridEffects;
    }());
    if (false) {
        /**
         * Handles ProductGridLoadAction by making a service call for products and returning a success or failure action
         * to the action stream.
         *
         * \@return An Observable of a DaffProductGridAction
         * @type {?}
         */
        DaffProductGridEffects.prototype.loadAll$;
        /**
         * @type {?}
         * @private
         */
        DaffProductGridEffects.prototype.actions$;
        /**
         * @type {?}
         * @private
         */
        DaffProductGridEffects.prototype.driver;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * Effects for handling product actions and for triggering corresponding service requests.
     *
     * @param action$ - Redux action object
     * @param driver - A product service driver
     * @template T
     */
    var DaffProductEffects = /** @class */ (function () {
        function DaffProductEffects(actions$, driver) {
            var _this = this;
            this.actions$ = actions$;
            this.driver = driver;
            /**
             * Handles ProductLoadAction by making a service call for a product and returning a success or
             * failure action to the action stream.
             *
             * @return An Observable of a ProductLoadAction
             */
            this.load$ = this.actions$.pipe(effects.ofType(DaffProductActionTypes.ProductLoadAction), operators.switchMap((/**
             * @param {?} action
             * @return {?}
             */
            function (action) {
                return _this.driver.get(action.payload)
                    .pipe(operators.map((/**
                 * @param {?} resp
                 * @return {?}
                 */
                function (resp) {
                    return new DaffProductLoadSuccess(resp);
                })), operators.catchError((/**
                 * @param {?} error
                 * @return {?}
                 */
                function (error) {
                    return rxjs.of(new DaffProductLoadFailure('Failed to load product'));
                })));
            })));
        }
        DaffProductEffects.decorators = [
            { type: core.Injectable }
        ];
        /** @nocollapse */
        DaffProductEffects.ctorParameters = function () { return [
            { type: effects.Actions },
            { type: undefined, decorators: [{ type: core.Inject, args: [DaffProductDriver,] }] }
        ]; };
        __decorate([
            effects.Effect(),
            __metadata("design:type", rxjs.Observable)
        ], DaffProductEffects.prototype, "load$", void 0);
        return DaffProductEffects;
    }());
    if (false) {
        /**
         * Handles ProductLoadAction by making a service call for a product and returning a success or
         * failure action to the action stream.
         *
         * \@return An Observable of a ProductLoadAction
         * @type {?}
         */
        DaffProductEffects.prototype.load$;
        /**
         * @type {?}
         * @private
         */
        DaffProductEffects.prototype.actions$;
        /**
         * @type {?}
         * @private
         */
        DaffProductEffects.prototype.driver;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * Effects for handling best seller actions and best seller service requests.
     *
     * @param action$ - Redux action object
     * @param driver - A product service driver
     * @template T
     */
    var DaffBestSellersEffects = /** @class */ (function () {
        function DaffBestSellersEffects(actions$, driver) {
            var _this = this;
            this.actions$ = actions$;
            this.driver = driver;
            /**
             * Handles BestSellersLoadAction by making a service call for best selling products and returning a success or failure action
             * to the action stream.
             *
             * @return An Observable of a BestSellersLoad action
             */
            this.loadBestSellers$ = this.actions$.pipe(effects.ofType(DaffBestSellersActionTypes.BestSellersLoadAction), operators.switchMap((/**
             * @param {?} action
             * @return {?}
             */
            function (action) {
                return _this.driver.getBestSellers()
                    .pipe(operators.map((/**
                 * @param {?} resp
                 * @return {?}
                 */
                function (resp) {
                    return new DaffBestSellersLoadSuccess(resp);
                })), operators.catchError((/**
                 * @param {?} error
                 * @return {?}
                 */
                function (error) {
                    return rxjs.of(new DaffBestSellersLoadFailure('Failed to load best selling products'));
                })));
            })));
        }
        DaffBestSellersEffects.decorators = [
            { type: core.Injectable }
        ];
        /** @nocollapse */
        DaffBestSellersEffects.ctorParameters = function () { return [
            { type: effects.Actions },
            { type: undefined, decorators: [{ type: core.Inject, args: [DaffProductDriver,] }] }
        ]; };
        __decorate([
            effects.Effect(),
            __metadata("design:type", rxjs.Observable)
        ], DaffBestSellersEffects.prototype, "loadBestSellers$", void 0);
        return DaffBestSellersEffects;
    }());
    if (false) {
        /**
         * Handles BestSellersLoadAction by making a service call for best selling products and returning a success or failure action
         * to the action stream.
         *
         * \@return An Observable of a BestSellersLoad action
         * @type {?}
         */
        DaffBestSellersEffects.prototype.loadBestSellers$;
        /**
         * @type {?}
         * @private
         */
        DaffBestSellersEffects.prototype.actions$;
        /**
         * @type {?}
         * @private
         */
        DaffBestSellersEffects.prototype.driver;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var DaffProductStateModule = /** @class */ (function () {
        function DaffProductStateModule() {
        }
        DaffProductStateModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [
                            store.StoreModule.forFeature('product', daffProductReducers),
                            effects.EffectsModule.forFeature([
                                DaffProductGridEffects,
                                DaffProductEffects,
                                DaffBestSellersEffects
                            ]),
                        ]
                    },] }
        ];
        return DaffProductStateModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var DaffProductModule = /** @class */ (function () {
        function DaffProductModule() {
        }
        DaffProductModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [
                            common.CommonModule,
                            /**
                             * Ngrx/store
                             */
                            DaffProductStateModule,
                        ]
                    },] }
        ];
        return DaffProductModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * @record
     */
    function GetAllProductsResponse() { }
    if (false) {
        /** @type {?|undefined} */
        GetAllProductsResponse.prototype.shop;
    }
    /**
     * @record
     */
    function GetAProductResponse() { }
    if (false) {
        /** @type {?} */
        GetAProductResponse.prototype.node;
    }
    /**
     * @record
     */
    function ShopGraph() { }
    if (false) {
        /** @type {?|undefined} */
        ShopGraph.prototype.products;
    }
    /**
     * @record
     */
    function ProductGraph() { }
    if (false) {
        /** @type {?} */
        ProductGraph.prototype.edges;
    }
    /**
     * @record
     */
    function ProductEdge() { }
    if (false) {
        /** @type {?} */
        ProductEdge.prototype.node;
    }
    /**
     * @record
     */
    function ProductNode() { }
    if (false) {
        /** @type {?} */
        ProductNode.prototype.id;
        /** @type {?|undefined} */
        ProductNode.prototype.title;
        /** @type {?|undefined} */
        ProductNode.prototype.price;
    }
    /**
     * @record
     */
    function Variables() { }
    if (false) {
        /** @type {?} */
        Variables.prototype.first;
    }
    ;
    /**
     * GraphQL query object for getting all products.
     * @type {?}
     */
    var GetAllProductsQuery = gql(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  query GetAllProducts($length: Int) {\n    shop {\n      products(first: $length)  {\n        edges {\n          node {\n            id\n            title\n          }\n        }\n      }\n    }\n  }\n"], ["\n  query GetAllProducts($length: Int) {\n    shop {\n      products(first: $length)  {\n        edges {\n          node {\n            id\n            title\n          }\n        }\n      }\n    }\n  }\n"])));
    /**
     * GraphQL query object for getting a product by ID.
     * @type {?}
     */
    var GetAProduct = gql(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  query GetAProduct($id: ID!){\n    node(id: $id) {\n      id\n      ... on Product {\n        title\n      }\n    }\n  }\n"], ["\n  query GetAProduct($id: ID!){\n    node(id: $id) {\n      id\n      ... on Product {\n        title\n      }\n    }\n  }\n"])));
    /**
     * Transforms a ProductNode into a different object.
     *
     * \@param node - ProductNode object
     * \@return A Product object
     * @type {?}
     */
    var DaffShopifyProductTransformer = (/**
     * @param {?} node
     * @return {?}
     */
    function (node) {
        return {
            id: node.id,
            name: node.title,
            images: []
        };
    })
    /**
     * A service for getting DaffProducts from apollo shopify product requests.
     *
     * @Param apollo
     */
    ;
    /**
     * A service for getting DaffProducts from apollo shopify product requests.
     *
     * \@Param apollo
     */
    var DaffShopifyProductService = /** @class */ (function () {
        function DaffShopifyProductService(apollo) {
            this.apollo = apollo;
            this.defaultLength = 20;
        }
        /**
         * A query for retrieving all Products as an Observable<DaffProduct[]>.
         *
         * @returns Observable<Product[]>
         */
        /**
         * A query for retrieving all Products as an Observable<DaffProduct[]>.
         *
         * @return {?} Observable<Product[]>
         */
        DaffShopifyProductService.prototype.getAll = /**
         * A query for retrieving all Products as an Observable<DaffProduct[]>.
         *
         * @return {?} Observable<Product[]>
         */
        function () {
            return this.apollo.query({
                query: GetAllProductsQuery,
                variables: {
                    length: this.defaultLength
                }
            }).pipe(operators.map((/**
             * @param {?} result
             * @return {?}
             */
            function (result) {
                return result.data.shop.products.edges.map((/**
                 * @param {?} edge
                 * @return {?}
                 */
                function (edge) { return DaffShopifyProductTransformer(edge.node); }));
            })));
        };
        //todo: add actual getBestSellers apollo call. Right now, it just makes the getAll() call
        //todo: add actual getBestSellers apollo call. Right now, it just makes the getAll() call
        /**
         * @return {?}
         */
        DaffShopifyProductService.prototype.getBestSellers = 
        //todo: add actual getBestSellers apollo call. Right now, it just makes the getAll() call
        /**
         * @return {?}
         */
        function () {
            return this.apollo.query({
                query: GetAllProductsQuery,
                variables: {
                    length: this.defaultLength
                }
            }).pipe(operators.map((/**
             * @param {?} result
             * @return {?}
             */
            function (result) {
                return result.data.shop.products.edges.map((/**
                 * @param {?} edge
                 * @return {?}
                 */
                function (edge) { return DaffShopifyProductTransformer(edge.node); }));
            })));
        };
        /**
         * A query for retrieving a particular product as an Observable<DaffProduct>.
         *
         * @param productId - A product ID
         * @returns Observable<Product>
         */
        /**
         * A query for retrieving a particular product as an Observable<DaffProduct>.
         *
         * @param {?} productId - A product ID
         * @return {?} Observable<Product>
         */
        DaffShopifyProductService.prototype.get = /**
         * A query for retrieving a particular product as an Observable<DaffProduct>.
         *
         * @param {?} productId - A product ID
         * @return {?} Observable<Product>
         */
        function (productId) {
            return this.apollo.query({
                query: GetAProduct,
                variables: {
                    id: productId
                }
            }).pipe(operators.map((/**
             * @param {?} result
             * @return {?}
             */
            function (result) { return DaffShopifyProductTransformer(result.data.node); })));
        };
        DaffShopifyProductService.decorators = [
            { type: core.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */
        DaffShopifyProductService.ctorParameters = function () { return [
            { type: apolloAngular.Apollo }
        ]; };
        /** @nocollapse */ DaffShopifyProductService.ngInjectableDef = core.ɵɵdefineInjectable({ factory: function DaffShopifyProductService_Factory() { return new DaffShopifyProductService(core.ɵɵinject(apolloAngular.Apollo)); }, token: DaffShopifyProductService, providedIn: "root" });
        return DaffShopifyProductService;
    }());
    if (false) {
        /** @type {?} */
        DaffShopifyProductService.prototype.defaultLength;
        /**
         * @type {?}
         * @private
         */
        DaffShopifyProductService.prototype.apollo;
    }
    var templateObject_1, templateObject_2;

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var DaffProductShopifyDriverModule = /** @class */ (function () {
        function DaffProductShopifyDriverModule() {
        }
        /**
         * @return {?}
         */
        DaffProductShopifyDriverModule.forRoot = /**
         * @return {?}
         */
        function () {
            return {
                ngModule: DaffProductShopifyDriverModule,
                providers: [
                    {
                        provide: DaffProductDriver,
                        useExisting: DaffShopifyProductService
                    }
                ]
            };
        };
        DaffProductShopifyDriverModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [
                            common.CommonModule
                        ]
                    },] }
        ];
        return DaffProductShopifyDriverModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * A facade for accessing state for a list of products from an application component.
     * @template T
     */
    var DaffProductGridFacade = /** @class */ (function () {
        function DaffProductGridFacade(store$1) {
            this.store = store$1;
            var _a = getDaffProductSelectors(), selectProductGridLoadingState = _a.selectProductGridLoadingState, selectAllProducts = _a.selectAllProducts;
            this.loading$ = this.store.pipe(store.select(selectProductGridLoadingState));
            this.products$ = this.store.pipe(store.select(selectAllProducts));
        }
        /**
         * Dispatches an action to the rxjs action stream.
         */
        /**
         * Dispatches an action to the rxjs action stream.
         * @param {?} action
         * @return {?}
         */
        DaffProductGridFacade.prototype.dispatch = /**
         * Dispatches an action to the rxjs action stream.
         * @param {?} action
         * @return {?}
         */
        function (action) {
            this.store.dispatch(action);
        };
        DaffProductGridFacade.decorators = [
            { type: core.Injectable, args: [{
                        providedIn: DaffProductModule
                    },] }
        ];
        /** @nocollapse */
        DaffProductGridFacade.ctorParameters = function () { return [
            { type: store.Store }
        ]; };
        /** @nocollapse */ DaffProductGridFacade.ngInjectableDef = core.ɵɵdefineInjectable({ factory: function DaffProductGridFacade_Factory() { return new DaffProductGridFacade(core.ɵɵinject(store.Store)); }, token: DaffProductGridFacade, providedIn: DaffProductModule });
        return DaffProductGridFacade;
    }());
    if (false) {
        /**
         * The loading state for retrieving a list of products.
         * @type {?}
         */
        DaffProductGridFacade.prototype.loading$;
        /**
         * The state for a list of products.
         * @type {?}
         */
        DaffProductGridFacade.prototype.products$;
        /**
         * @type {?}
         * @private
         */
        DaffProductGridFacade.prototype.store;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * A facade for getting state about a particular product.
     *
     * See the <a href="docs/api/product/DaffProductFacadeInterface">DaffProductFacadeInterface docs</a> for more details.
     * @template T
     */
    var DaffProductFacade = /** @class */ (function () {
        function DaffProductFacade(store$1) {
            this.store = store$1;
            this.selectors = getDaffProductSelectors();
            this.loading$ = this.store.pipe(store.select(this.selectors.selectSelectedProductLoadingState));
            this.product$ = this.store.pipe(store.select(this.selectors.selectSelectedProduct));
        }
        /**
         * @param {?} id
         * @return {?}
         */
        DaffProductFacade.prototype.getProduct = /**
         * @param {?} id
         * @return {?}
         */
        function (id) {
            return this.store.pipe(store.select(this.selectors.selectProduct, { id: id }));
        };
        /**
         * @param {?} id
         * @return {?}
         */
        DaffProductFacade.prototype.getPrice = /**
         * @param {?} id
         * @return {?}
         */
        function (id) {
            return this.store.pipe(store.select(this.selectors.selectProductPrice, { id: id }));
        };
        /**
         * @param {?} id
         * @return {?}
         */
        DaffProductFacade.prototype.hasDiscount = /**
         * @param {?} id
         * @return {?}
         */
        function (id) {
            return this.store.pipe(store.select(this.selectors.selectProductHasDiscount, { id: id }));
        };
        /**
         * @param {?} id
         * @return {?}
         */
        DaffProductFacade.prototype.getDiscountAmount = /**
         * @param {?} id
         * @return {?}
         */
        function (id) {
            return this.store.pipe(store.select(this.selectors.selectProductDiscountAmount, { id: id }));
        };
        /**
         * @param {?} id
         * @return {?}
         */
        DaffProductFacade.prototype.getDiscountedPrice = /**
         * @param {?} id
         * @return {?}
         */
        function (id) {
            return this.store.pipe(store.select(this.selectors.selectProductDiscountedPrice, { id: id }));
        };
        /**
         * @param {?} id
         * @return {?}
         */
        DaffProductFacade.prototype.getDiscountPercent = /**
         * @param {?} id
         * @return {?}
         */
        function (id) {
            return this.store.pipe(store.select(this.selectors.selectProductDiscountPercent, { id: id }));
        };
        /**
         * @param {?} id
         * @return {?}
         */
        DaffProductFacade.prototype.isOutOfStock = /**
         * @param {?} id
         * @return {?}
         */
        function (id) {
            return this.store.pipe(store.select(this.selectors.selectIsProductOutOfStock, { id: id }));
        };
        /**
         * Dispatches an action to the rxjs action stream.
         */
        /**
         * Dispatches an action to the rxjs action stream.
         * @param {?} action
         * @return {?}
         */
        DaffProductFacade.prototype.dispatch = /**
         * Dispatches an action to the rxjs action stream.
         * @param {?} action
         * @return {?}
         */
        function (action) {
            this.store.dispatch(action);
        };
        DaffProductFacade.decorators = [
            { type: core.Injectable, args: [{
                        providedIn: DaffProductModule
                    },] }
        ];
        /** @nocollapse */
        DaffProductFacade.ctorParameters = function () { return [
            { type: store.Store }
        ]; };
        /** @nocollapse */ DaffProductFacade.ngInjectableDef = core.ɵɵdefineInjectable({ factory: function DaffProductFacade_Factory() { return new DaffProductFacade(core.ɵɵinject(store.Store)); }, token: DaffProductFacade, providedIn: DaffProductModule });
        return DaffProductFacade;
    }());
    if (false) {
        /** @type {?} */
        DaffProductFacade.prototype.loading$;
        /** @type {?} */
        DaffProductFacade.prototype.product$;
        /**
         * @type {?}
         * @private
         */
        DaffProductFacade.prototype.selectors;
        /**
         * @type {?}
         * @private
         */
        DaffProductFacade.prototype.store;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * A facade for interacting with the configurable product state.
     * Exposes many parts of the state for easy access and allows dispatching of actions.
     *
     * See the <a href="docs/api/product/DaffConfigurableProductFacadeInterface">DaffConfigurableProductFacadeInterface docs</a> for more details.
     * @template T
     */
    var DaffConfigurableProductFacade = /** @class */ (function () {
        function DaffConfigurableProductFacade(store) {
            this.store = store;
            this.selectors = getDaffProductSelectors();
        }
        /**
         * @param {?} id
         * @return {?}
         */
        DaffConfigurableProductFacade.prototype.getAllAttributes = /**
         * @param {?} id
         * @return {?}
         */
        function (id) {
            return this.store.pipe(store.select(this.selectors.selectAllConfigurableProductAttributes, { id: id }));
        };
        /**
         * @param {?} id
         * @return {?}
         */
        DaffConfigurableProductFacade.prototype.getAllVariants = /**
         * @param {?} id
         * @return {?}
         */
        function (id) {
            return this.store.pipe(store.select(this.selectors.selectAllConfigurableProductVariants, { id: id }));
        };
        /**
         * @param {?} id
         * @return {?}
         */
        DaffConfigurableProductFacade.prototype.getAppliedAttributes = /**
         * @param {?} id
         * @return {?}
         */
        function (id) {
            return this.store.pipe(store.select(this.selectors.selectConfigurableProductAppliedAttributesAsDictionary, { id: id }));
        };
        /**
         * @param {?} id
         * @return {?}
         */
        DaffConfigurableProductFacade.prototype.getMinimumPrice = /**
         * @param {?} id
         * @return {?}
         */
        function (id) {
            return this.store.pipe(store.select(this.selectors.selectConfigurableProductMinimumPrice, { id: id }));
        };
        /**
         * @param {?} id
         * @return {?}
         */
        DaffConfigurableProductFacade.prototype.getMaximumPrice = /**
         * @param {?} id
         * @return {?}
         */
        function (id) {
            return this.store.pipe(store.select(this.selectors.selectConfigurableProductMaximumPrice, { id: id }));
        };
        /**
         * @param {?} id
         * @return {?}
         */
        DaffConfigurableProductFacade.prototype.getMinimumDiscountedPrice = /**
         * @param {?} id
         * @return {?}
         */
        function (id) {
            return this.store.pipe(store.select(this.selectors.selectConfigurableProductMinimumDiscountedPrice, { id: id }));
        };
        /**
         * @param {?} id
         * @return {?}
         */
        DaffConfigurableProductFacade.prototype.getMaximumDiscountedPrice = /**
         * @param {?} id
         * @return {?}
         */
        function (id) {
            return this.store.pipe(store.select(this.selectors.selectConfigurableProductMaximumDiscountedPrice, { id: id }));
        };
        /**
         * @param {?} id
         * @return {?}
         */
        DaffConfigurableProductFacade.prototype.getMinimumPercentDiscount = /**
         * @param {?} id
         * @return {?}
         */
        function (id) {
            return this.store.pipe(store.select(this.selectors.selectConfigurableProductMinimumPercentDiscount, { id: id }));
        };
        /**
         * @param {?} id
         * @return {?}
         */
        DaffConfigurableProductFacade.prototype.getMaximumPercentDiscount = /**
         * @param {?} id
         * @return {?}
         */
        function (id) {
            return this.store.pipe(store.select(this.selectors.selectConfigurableProductMaximumPercentDiscount, { id: id }));
        };
        /**
         * @param {?} id
         * @return {?}
         */
        DaffConfigurableProductFacade.prototype.isPriceRanged = /**
         * @param {?} id
         * @return {?}
         */
        function (id) {
            return this.store.pipe(store.select(this.selectors.isConfigurablePriceRanged, { id: id }));
        };
        /**
         * @param {?} id
         * @return {?}
         */
        DaffConfigurableProductFacade.prototype.hasDiscount = /**
         * @param {?} id
         * @return {?}
         */
        function (id) {
            return this.store.pipe(store.select(this.selectors.selectConfigurableProductHasDiscount, { id: id }));
        };
        /**
         * @param {?} id
         * @return {?}
         */
        DaffConfigurableProductFacade.prototype.getSelectableAttributes = /**
         * @param {?} id
         * @return {?}
         */
        function (id) {
            return this.store.pipe(store.select(this.selectors.selectSelectableConfigurableProductAttributes, { id: id }));
        };
        /**
         * @param {?} id
         * @return {?}
         */
        DaffConfigurableProductFacade.prototype.getMatchingVariants = /**
         * @param {?} id
         * @return {?}
         */
        function (id) {
            return this.store.pipe(store.select(this.selectors.selectMatchingConfigurableProductVariants, { id: id }));
        };
        /**
         * Dispatches an action to the rxjs action stream.
         */
        /**
         * Dispatches an action to the rxjs action stream.
         * @param {?} action
         * @return {?}
         */
        DaffConfigurableProductFacade.prototype.dispatch = /**
         * Dispatches an action to the rxjs action stream.
         * @param {?} action
         * @return {?}
         */
        function (action) {
            this.store.dispatch(action);
        };
        DaffConfigurableProductFacade.decorators = [
            { type: core.Injectable, args: [{
                        providedIn: DaffProductModule
                    },] }
        ];
        /** @nocollapse */
        DaffConfigurableProductFacade.ctorParameters = function () { return [
            { type: store.Store }
        ]; };
        /** @nocollapse */ DaffConfigurableProductFacade.ngInjectableDef = core.ɵɵdefineInjectable({ factory: function DaffConfigurableProductFacade_Factory() { return new DaffConfigurableProductFacade(core.ɵɵinject(store.Store)); }, token: DaffConfigurableProductFacade, providedIn: DaffProductModule });
        return DaffConfigurableProductFacade;
    }());
    if (false) {
        /** @type {?} */
        DaffConfigurableProductFacade.prototype.selectors;
        /**
         * @type {?}
         * @private
         */
        DaffConfigurableProductFacade.prototype.store;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * Returns whether a DaffPriceRange has a discount.
     * \@param priceRange a DaffPriceRange
     * @type {?}
     */
    var productPriceRangeHasDiscount = (/**
     * @param {?} priceRange
     * @return {?}
     */
    function (priceRange) {
        return priceRange.minPrice.originalPrice !== priceRange.minPrice.discountedPrice ||
            priceRange.maxPrice.originalPrice !== priceRange.maxPrice.discountedPrice;
    })
    /**
     * Returns whether the min and max prices of a DaffPriceRange are different.
     * @param priceRange a DaffPriceRange
     */
;
    /**
     * Returns whether the min and max prices of a DaffPriceRange are different.
     * \@param priceRange a DaffPriceRange
     * @type {?}
     */
    var productPriceRangeHasPriceRange = (/**
     * @param {?} priceRange
     * @return {?}
     */
    function (priceRange) {
        return priceRange.minPrice.originalPrice !== priceRange.maxPrice.originalPrice ||
            priceRange.minPrice.discountedPrice !== priceRange.maxPrice.discountedPrice;
    });

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * A facade for interacting with the composite product state.
     * Exposes many parts of the state for easy access and allows dispatching of actions.
     *
     * See the <a href="docs/api/product/DaffCompositeProductFacadeInterface">DaffCompositeProductFacadeInterface docs</a> for more details.
     * @template T
     */
    var DaffCompositeProductFacade = /** @class */ (function () {
        function DaffCompositeProductFacade(store) {
            this.store = store;
            this.selectors = getDaffProductSelectors();
            /**
             * Returns whether a DaffPriceRange has a discount.
             * @param priceRange a DaffPriceRange
             */
            this.hasDiscount = productPriceRangeHasDiscount;
            /**
             * Returns whether the min and max prices of a DaffPriceRange are different.
             * @param priceRange a DaffPriceRange
             */
            this.hasPriceRange = productPriceRangeHasPriceRange;
        }
        /**
         * @param {?} id
         * @param {?=} configuration
         * @return {?}
         */
        DaffCompositeProductFacade.prototype.getRequiredItemPricesForConfiguration = /**
         * @param {?} id
         * @param {?=} configuration
         * @return {?}
         */
        function (id, configuration) {
            return this.store.pipe(store.select(this.selectors.selectCompositeProductRequiredItemPricesForConfiguration, { id: id, configuration: configuration }));
        };
        /**
         * @param {?} id
         * @param {?=} configuration
         * @return {?}
         */
        DaffCompositeProductFacade.prototype.getOptionalItemPricesForConfiguration = /**
         * @param {?} id
         * @param {?=} configuration
         * @return {?}
         */
        function (id, configuration) {
            return this.store.pipe(store.select(this.selectors.selectCompositeProductOptionalItemPricesForConfiguration, { id: id, configuration: configuration }));
        };
        /**
         * @param {?} id
         * @return {?}
         */
        DaffCompositeProductFacade.prototype.getPricesAsCurrentlyConfigured = /**
         * @param {?} id
         * @return {?}
         */
        function (id) {
            return this.store.pipe(store.select(this.selectors.selectCompositeProductPricesAsCurrentlyConfigured, { id: id }));
        };
        /**
         * @param {?} id
         * @return {?}
         */
        DaffCompositeProductFacade.prototype.getAppliedOptions = /**
         * @param {?} id
         * @return {?}
         */
        function (id) {
            return this.store.pipe(store.select(this.selectors.selectCompositeProductAppliedOptions, { id: id }));
        };
        /**
         * @param {?} id
         * @param {?} item_id
         * @return {?}
         */
        DaffCompositeProductFacade.prototype.isItemRequired = /**
         * @param {?} id
         * @param {?} item_id
         * @return {?}
         */
        function (id, item_id) {
            return this.store.pipe(store.select(this.selectors.selectIsCompositeProductItemRequired, { id: id, item_id: item_id }));
        };
        /**
         * Dispatches an action to the rxjs action stream.
         */
        /**
         * Dispatches an action to the rxjs action stream.
         * @param {?} action
         * @return {?}
         */
        DaffCompositeProductFacade.prototype.dispatch = /**
         * Dispatches an action to the rxjs action stream.
         * @param {?} action
         * @return {?}
         */
        function (action) {
            this.store.dispatch(action);
        };
        DaffCompositeProductFacade.decorators = [
            { type: core.Injectable, args: [{
                        providedIn: DaffProductModule
                    },] }
        ];
        /** @nocollapse */
        DaffCompositeProductFacade.ctorParameters = function () { return [
            { type: store.Store }
        ]; };
        /** @nocollapse */ DaffCompositeProductFacade.ngInjectableDef = core.ɵɵdefineInjectable({ factory: function DaffCompositeProductFacade_Factory() { return new DaffCompositeProductFacade(core.ɵɵinject(store.Store)); }, token: DaffCompositeProductFacade, providedIn: DaffProductModule });
        return DaffCompositeProductFacade;
    }());
    if (false) {
        /** @type {?} */
        DaffCompositeProductFacade.prototype.selectors;
        /**
         * Returns whether a DaffPriceRange has a discount.
         * \@param priceRange a DaffPriceRange
         * @type {?}
         */
        DaffCompositeProductFacade.prototype.hasDiscount;
        /**
         * Returns whether the min and max prices of a DaffPriceRange are different.
         * \@param priceRange a DaffPriceRange
         * @type {?}
         */
        DaffCompositeProductFacade.prototype.hasPriceRange;
        /**
         * @type {?}
         * @private
         */
        DaffCompositeProductFacade.prototype.store;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * A facade for accessing best sellers state from an application component.
     * @template T
     */
    var DaffBestSellersFacade = /** @class */ (function () {
        function DaffBestSellersFacade(store$1) {
            this.store = store$1;
            var _a = getDaffProductSelectors(), selectBestSellersProducts = _a.selectBestSellersProducts, selectBestSellersLoadingState = _a.selectBestSellersLoadingState;
            this.loading$ = this.store.pipe(store.select(selectBestSellersLoadingState));
            this.bestSellers$ = this.store.pipe(store.select(selectBestSellersProducts));
        }
        /**
         * Dispatches an action to the rxjs action stream.
         * @param action
         */
        /**
         * Dispatches an action to the rxjs action stream.
         * @param {?} action
         * @return {?}
         */
        DaffBestSellersFacade.prototype.dispatch = /**
         * Dispatches an action to the rxjs action stream.
         * @param {?} action
         * @return {?}
         */
        function (action) {
            this.store.dispatch(action);
        };
        DaffBestSellersFacade.decorators = [
            { type: core.Injectable, args: [{
                        providedIn: DaffProductModule
                    },] }
        ];
        /** @nocollapse */
        DaffBestSellersFacade.ctorParameters = function () { return [
            { type: store.Store }
        ]; };
        /** @nocollapse */ DaffBestSellersFacade.ngInjectableDef = core.ɵɵdefineInjectable({ factory: function DaffBestSellersFacade_Factory() { return new DaffBestSellersFacade(core.ɵɵinject(store.Store)); }, token: DaffBestSellersFacade, providedIn: DaffProductModule });
        return DaffBestSellersFacade;
    }());
    if (false) {
        /**
         * The loading state for getting best selling products.
         * @type {?}
         */
        DaffBestSellersFacade.prototype.loading$;
        /**
         * Best selling products.
         * @type {?}
         */
        DaffBestSellersFacade.prototype.bestSellers$;
        /**
         * @type {?}
         * @private
         */
        DaffBestSellersFacade.prototype.store;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @enum {string} */
    var MagentoProductTypeEnum = {
        BundledProduct: 'BundleProduct',
        ConfigurableProduct: 'ConfigurableProduct',
        SimpleProduct: 'SimpleProduct',
    };
    /** @enum {string} */
    var MagentoProductStockStatusEnum = {
        InStock: 'IN_STOCK',
        OutOfStock: 'OUT_OF_STOCK',
    };
    /**
     * An object for defining what the product service requests and retrieves from a magento backend.
     * @record
     */
    function MagentoProduct() { }
    if (false) {
        /** @type {?} */
        MagentoProduct.prototype.__typename;
        /** @type {?} */
        MagentoProduct.prototype.id;
        /** @type {?} */
        MagentoProduct.prototype.name;
        /** @type {?} */
        MagentoProduct.prototype.sku;
        /** @type {?} */
        MagentoProduct.prototype.url_key;
        /** @type {?} */
        MagentoProduct.prototype.image;
        /** @type {?} */
        MagentoProduct.prototype.thumbnail;
        /** @type {?} */
        MagentoProduct.prototype.price_range;
        /** @type {?|undefined} */
        MagentoProduct.prototype.stock_status;
        /** @type {?|undefined} */
        MagentoProduct.prototype.media_gallery_entries;
        /** @type {?|undefined} */
        MagentoProduct.prototype.short_description;
        /** @type {?|undefined} */
        MagentoProduct.prototype.description;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @enum {string} */
    var MagentoPriceTypeEnum = {
        fixed: 'FIXED',
        percent: 'PERCENT',
        dynamic: 'DYNAMIC',
    };
    /**
     * @record
     */
    function MagentoBundledProduct() { }
    if (false) {
        /** @type {?} */
        MagentoBundledProduct.prototype.items;
    }
    /**
     * @record
     */
    function MagentoBundledProductItem() { }
    if (false) {
        /** @type {?} */
        MagentoBundledProductItem.prototype.required;
        /** @type {?} */
        MagentoBundledProductItem.prototype.sku;
        /** @type {?} */
        MagentoBundledProductItem.prototype.title;
        /** @type {?} */
        MagentoBundledProductItem.prototype.type;
        /** @type {?} */
        MagentoBundledProductItem.prototype.options;
        /** @type {?|undefined} */
        MagentoBundledProductItem.prototype.option_id;
        /** @type {?|undefined} */
        MagentoBundledProductItem.prototype.position;
    }
    /**
     * @record
     */
    function MagentoBundledProductItemOption() { }
    if (false) {
        /** @type {?} */
        MagentoBundledProductItemOption.prototype.id;
        /** @type {?} */
        MagentoBundledProductItemOption.prototype.label;
        /** @type {?} */
        MagentoBundledProductItemOption.prototype.price;
        /** @type {?} */
        MagentoBundledProductItemOption.prototype.quantity;
        /** @type {?|undefined} */
        MagentoBundledProductItemOption.prototype.can_change_quantity;
        /** @type {?} */
        MagentoBundledProductItemOption.prototype.is_default;
        /** @type {?|undefined} */
        MagentoBundledProductItemOption.prototype.position;
        /** @type {?|undefined} */
        MagentoBundledProductItemOption.prototype.price_type;
        /** @type {?|undefined} */
        MagentoBundledProductItemOption.prototype.product;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * @record
     */
    function MagentoConfigurableProduct() { }
    if (false) {
        /** @type {?} */
        MagentoConfigurableProduct.prototype.configurable_options;
        /** @type {?} */
        MagentoConfigurableProduct.prototype.variants;
    }
    /**
     * @record
     */
    function MagentoConfigurableProductOption() { }
    if (false) {
        /** @type {?} */
        MagentoConfigurableProductOption.prototype.attribute_code;
        /** @type {?} */
        MagentoConfigurableProductOption.prototype.attribute_id;
        /** @type {?} */
        MagentoConfigurableProductOption.prototype.id;
        /** @type {?} */
        MagentoConfigurableProductOption.prototype.label;
        /** @type {?} */
        MagentoConfigurableProductOption.prototype.position;
        /** @type {?} */
        MagentoConfigurableProductOption.prototype.product_id;
        /** @type {?} */
        MagentoConfigurableProductOption.prototype.values;
    }
    /**
     * @record
     */
    function MagentoConfigurableProductOptionsValue() { }
    if (false) {
        /** @type {?} */
        MagentoConfigurableProductOptionsValue.prototype.label;
        /** @type {?|undefined} */
        MagentoConfigurableProductOptionsValue.prototype.swatch_data;
        /** @type {?} */
        MagentoConfigurableProductOptionsValue.prototype.value_index;
    }
    /**
     * @record
     */
    function MagentoSwatchDataInterface() { }
    if (false) {
        /** @type {?} */
        MagentoSwatchDataInterface.prototype.value;
        /** @type {?} */
        MagentoSwatchDataInterface.prototype.thumbnail;
    }
    /**
     * @record
     */
    function MagentoConfigurableProductVariant() { }
    if (false) {
        /** @type {?} */
        MagentoConfigurableProductVariant.prototype.attributes;
        /** @type {?} */
        MagentoConfigurableProductVariant.prototype.product;
    }
    /**
     * @record
     */
    function MagentoConfigurableAttributeOption() { }
    if (false) {
        /** @type {?} */
        MagentoConfigurableAttributeOption.prototype.code;
        /** @type {?} */
        MagentoConfigurableAttributeOption.prototype.label;
        /** @type {?} */
        MagentoConfigurableAttributeOption.prototype.value_index;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var magentoBundledProductFragment = gql(templateObject_1$1 || (templateObject_1$1 = __makeTemplateObject(["\n  fragment magentoBundledProduct on BundleProduct {\n\t\titems {\n\t\t\toption_id\n\t\t\tposition\n\t\t\trequired\n\t\t\tsku\n\t\t\ttitle\n\t\t\ttype\n\t\t\toptions {\n\t\t\t\tcan_change_quantity\n\t\t\t\tid\n\t\t\t\tis_default\n\t\t\t\tlabel\n\t\t\t\tposition\n\t\t\t\tprice_type\n\t\t\t\tprice\n\t\t\t\tquantity\n\t\t\t\tproduct {\n\t\t\t\t\tid\n\t\t\t\t\tname\n\t\t\t\t\tsku\n\t\t\t\t\tstock_status\n\t\t\t\t\tprice_range {\n\t\t\t\t\t\tmaximum_price {\n\t\t\t\t\t\t\tregular_price {\n\t\t\t\t\t\t\t\tvalue\n\t\t\t\t\t\t\t\tcurrency\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\tdiscount {\n\t\t\t\t\t\t\t\tamount_off\n\t\t\t\t\t\t\t\tpercent_off\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t}\n\t\t}\n  }\n"], ["\n  fragment magentoBundledProduct on BundleProduct {\n\t\titems {\n\t\t\toption_id\n\t\t\tposition\n\t\t\trequired\n\t\t\tsku\n\t\t\ttitle\n\t\t\ttype\n\t\t\toptions {\n\t\t\t\tcan_change_quantity\n\t\t\t\tid\n\t\t\t\tis_default\n\t\t\t\tlabel\n\t\t\t\tposition\n\t\t\t\tprice_type\n\t\t\t\tprice\n\t\t\t\tquantity\n\t\t\t\tproduct {\n\t\t\t\t\tid\n\t\t\t\t\tname\n\t\t\t\t\tsku\n\t\t\t\t\tstock_status\n\t\t\t\t\tprice_range {\n\t\t\t\t\t\tmaximum_price {\n\t\t\t\t\t\t\tregular_price {\n\t\t\t\t\t\t\t\tvalue\n\t\t\t\t\t\t\t\tcurrency\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\tdiscount {\n\t\t\t\t\t\t\t\tamount_off\n\t\t\t\t\t\t\t\tpercent_off\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t}\n\t\t}\n  }\n"])));
    var templateObject_1$1;

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var magentoSimpleProductFragment = gql(templateObject_1$2 || (templateObject_1$2 = __makeTemplateObject(["\n  fragment magentoSimpleProduct on SimpleProduct {\n    name\n  }\n"], ["\n  fragment magentoSimpleProduct on SimpleProduct {\n    name\n  }\n"])));
    var templateObject_1$2;

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var magentoConfigurableProductFragment = gql(templateObject_1$3 || (templateObject_1$3 = __makeTemplateObject(["\n  fragment magentoConfigurableProduct on ConfigurableProduct {\n\t\tconfigurable_options {\n\t\t\tattribute_code\n\t\t\tattribute_id\n\t\t\tid\n\t\t\tlabel\n\t\t\tposition\n\t\t\tproduct_id\n\t\t\tvalues {\n\t\t\t\tlabel\n\t\t\t\tvalue_index\n\t\t\t}\n\t\t}\n\t\tvariants {\n\t\t\tattributes {\n\t\t\t\tcode\n\t\t\t\tlabel\n\t\t\t\tvalue_index\n\t\t\t}\n\t\t\tproduct {\n\t\t\t\tsku\n\t\t\t\tprice_range {\n\t\t\t\t\tmaximum_price {\n\t\t\t\t\t\tregular_price {\n\t\t\t\t\t\t\tvalue\n\t\t\t\t\t\t\tcurrency\n\t\t\t\t\t\t}\n\t\t\t\t\t\tdiscount {\n\t\t\t\t\t\t\tamount_off\n\t\t\t\t\t\t\tpercent_off\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t\tstock_status\n\t\t\t\timage {\n\t\t\t\t\turl\n\t\t\t\t\tlabel\n\t\t\t\t}\n\t\t\t}\n\t\t}\n  }\n"], ["\n  fragment magentoConfigurableProduct on ConfigurableProduct {\n\t\tconfigurable_options {\n\t\t\tattribute_code\n\t\t\tattribute_id\n\t\t\tid\n\t\t\tlabel\n\t\t\tposition\n\t\t\tproduct_id\n\t\t\tvalues {\n\t\t\t\tlabel\n\t\t\t\tvalue_index\n\t\t\t}\n\t\t}\n\t\tvariants {\n\t\t\tattributes {\n\t\t\t\tcode\n\t\t\t\tlabel\n\t\t\t\tvalue_index\n\t\t\t}\n\t\t\tproduct {\n\t\t\t\tsku\n\t\t\t\tprice_range {\n\t\t\t\t\tmaximum_price {\n\t\t\t\t\t\tregular_price {\n\t\t\t\t\t\t\tvalue\n\t\t\t\t\t\t\tcurrency\n\t\t\t\t\t\t}\n\t\t\t\t\t\tdiscount {\n\t\t\t\t\t\t\tamount_off\n\t\t\t\t\t\t\tpercent_off\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t\tstock_status\n\t\t\t\timage {\n\t\t\t\t\turl\n\t\t\t\t\tlabel\n\t\t\t\t}\n\t\t\t}\n\t\t}\n  }\n"])));
    var templateObject_1$3;

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var magentoProductFragment = gql(templateObject_1$4 || (templateObject_1$4 = __makeTemplateObject(["\n  fragment product on ProductInterface {\n\t\t__typename\n\t\tid\n\t\turl_key\n\t\tname\n\t\tsku\n\t\tstock_status\n\t\tprice_range {\n\t\t\tmaximum_price {\n\t\t\t\tregular_price {\n\t\t\t\t\tvalue\n\t\t\t\t\tcurrency\n\t\t\t\t}\n\t\t\t\tdiscount {\n\t\t\t\t\tamount_off\n\t\t\t\t\tpercent_off\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t\timage {\n\t\t\turl\n\t\t\tlabel\n\t\t}\n    thumbnail {\n\t\t\turl\n\t\t\tlabel\n\t\t}\n\t\tmedia_gallery_entries {\n\t\t\tlabel\n\t\t\tfile\n\t\t\tposition\n\t\t\tdisabled\n\t\t\tid\n\t\t}\n\t\tshort_description {\n\t\t\thtml\n\t\t}\n\t\tdescription {\n\t\t\thtml\n\t\t}\n\t\t...magentoBundledProduct\n\t\t...magentoSimpleProduct\n\t\t...magentoConfigurableProduct\n\t}\n\t", "\n\t", "\n\t", "\n"], ["\n  fragment product on ProductInterface {\n\t\t__typename\n\t\tid\n\t\turl_key\n\t\tname\n\t\tsku\n\t\tstock_status\n\t\tprice_range {\n\t\t\tmaximum_price {\n\t\t\t\tregular_price {\n\t\t\t\t\tvalue\n\t\t\t\t\tcurrency\n\t\t\t\t}\n\t\t\t\tdiscount {\n\t\t\t\t\tamount_off\n\t\t\t\t\tpercent_off\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t\timage {\n\t\t\turl\n\t\t\tlabel\n\t\t}\n    thumbnail {\n\t\t\turl\n\t\t\tlabel\n\t\t}\n\t\tmedia_gallery_entries {\n\t\t\tlabel\n\t\t\tfile\n\t\t\tposition\n\t\t\tdisabled\n\t\t\tid\n\t\t}\n\t\tshort_description {\n\t\t\thtml\n\t\t}\n\t\tdescription {\n\t\t\thtml\n\t\t}\n\t\t...magentoBundledProduct\n\t\t...magentoSimpleProduct\n\t\t...magentoConfigurableProduct\n\t}\n\t", "\n\t", "\n\t", "\n"])), magentoBundledProductFragment, magentoSimpleProductFragment, magentoConfigurableProductFragment);
    var templateObject_1$4;

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var GetProductQuery = gql(templateObject_1$5 || (templateObject_1$5 = __makeTemplateObject(["\nquery GetAProduct($sku: String!){\n\tstoreConfig {\n\t\tsecure_base_media_url\n\t}\n\tproducts(filter: {\n\t\tsku: {\n\t\t\teq: $sku\n\t\t}\n\t}){\n\t\titems {\n\t\t\t...product\n\t\t}\n\t}\n}\n", "\n"], ["\nquery GetAProduct($sku: String!){\n\tstoreConfig {\n\t\tsecure_base_media_url\n\t}\n\tproducts(filter: {\n\t\tsku: {\n\t\t\teq: $sku\n\t\t}\n\t}){\n\t\titems {\n\t\t\t...product\n\t\t}\n\t}\n}\n", "\n"])), magentoProductFragment);
    var templateObject_1$5;

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var GetAllProductsQuery$1 = gql(templateObject_1$6 || (templateObject_1$6 = __makeTemplateObject(["\nquery GetAllProducts($pageSize: Int)\n{\n\tproducts(search: \"Shirt\", pageSize: $pageSize)\n\t{\n\t\ttotal_count\n\t\titems {\n\t\t\t...product\n\t\t}\n\t\tpage_info {\n\t\t\tpage_size\n\t\t\tcurrent_page\n\t\t}\n\t}\n}\n", "\n"], ["\nquery GetAllProducts($pageSize: Int)\n{\n\tproducts(search: \"Shirt\", pageSize: $pageSize)\n\t{\n\t\ttotal_count\n\t\titems {\n\t\t\t...product\n\t\t}\n\t\tpage_info {\n\t\t\tpage_size\n\t\t\tcurrent_page\n\t\t}\n\t}\n}\n", "\n"])), magentoProductFragment);
    var templateObject_1$6;

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * Transforms the magento MagentoProduct from the magento product query into a DaffProduct.
     * @param {?} product a magento product
     * @param {?} mediaUrl
     * @return {?}
     */
    function transformMagentoSimpleProduct(product, mediaUrl) {
        return {
            type: DaffProductTypeEnum.Simple,
            id: product.sku,
            url: product.url_key,
            name: product.name,
            price: getPrice(product),
            discount: getDiscount(product),
            in_stock: product.stock_status === MagentoProductStockStatusEnum.InStock,
            images: __spread([
                { url: product.image.url, id: '0', label: product.image.label }
            ], transformMediaGalleryEntries(product, mediaUrl)),
            description: product.description.html
        };
    }
    /**
     * A function for null checking an object.
     * @param {?} product
     * @return {?}
     */
    function getPrice(product) {
        return product.price_range &&
            product.price_range.maximum_price &&
            product.price_range.maximum_price.regular_price &&
            product.price_range.maximum_price.regular_price.value !== null
            ? product.price_range.maximum_price.regular_price.value : null;
    }
    /**
     * @param {?} product
     * @return {?}
     */
    function getDiscount(product) {
        return product.price_range &&
            product.price_range.maximum_price &&
            product.price_range.maximum_price.discount
            ? {
                amount: product.price_range.maximum_price.discount.amount_off,
                percent: product.price_range.maximum_price.discount.percent_off
            } : { amount: null, percent: null };
    }
    /**
     * @param {?} product
     * @param {?} mediaUrl
     * @return {?}
     */
    function transformMediaGalleryEntries(product, mediaUrl) {
        return product.media_gallery_entries ? product.media_gallery_entries.map((/**
         * @param {?} image
         * @return {?}
         */
        function (image) {
            return {
                url: mediaUrl + 'catalog/product' + image.file,
                label: image.label,
                id: image.id.toString()
            };
        })) : [];
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * Transforms the magento MagentoProduct from the magento product query into a DaffProduct.
     * @param {?} product
     * @param {?} mediaUrl
     * @return {?}
     */
    function transformMagentoBundledProduct(product, mediaUrl) {
        return __assign({}, transformMagentoSimpleProduct(product, mediaUrl), { price: 0, discount: {
                amount: 0,
                percent: 0
            }, type: DaffProductTypeEnum.Composite, items: product.items.map(transformMagentoBundledProductItem) });
    }
    /**
     * @param {?} item
     * @return {?}
     */
    function transformMagentoBundledProductItem(item) {
        return {
            id: item.option_id.toString(),
            required: item.required,
            title: item.title,
            input_type: (/** @type {?} */ (item.type)),
            options: item.options.map(transformMagentoBundledProductItemOption)
        };
    }
    /**
     * @param {?} option
     * @return {?}
     */
    function transformMagentoBundledProductItemOption(option) {
        return {
            id: option.id.toString(),
            name: option.label,
            price: getPrice$1(option.product),
            images: [],
            discount: getDiscount$1(option.product),
            quantity: option.quantity,
            is_default: option.is_default,
            in_stock: option.product.stock_status === MagentoProductStockStatusEnum.InStock
        };
    }
    /**
     * A function for null checking an object.
     * @param {?} product
     * @return {?}
     */
    //TODO: use optional chaining after angular 9 and Typescript 3.7
    function getPrice$1(product) {
        return product.price_range &&
            product.price_range.maximum_price &&
            product.price_range.maximum_price.regular_price &&
            product.price_range.maximum_price.regular_price.value !== null
            ? product.price_range.maximum_price.regular_price.value : null;
    }
    //TODO: use optional chaining after angular 9 and Typescript 3.7
    /**
     * @param {?} product
     * @return {?}
     */
    function getDiscount$1(product) {
        return product.price_range &&
            product.price_range.maximum_price &&
            product.price_range.maximum_price.discount
            ? {
                amount: product.price_range.maximum_price.discount.amount_off,
                percent: product.price_range.maximum_price.discount.percent_off
            } : { amount: null, percent: null };
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * Transforms the magento MagentoProduct from the magento product query into a DaffProduct.
     * @param {?} product
     * @param {?} mediaUrl
     * @return {?}
     */
    function transformMagentoConfigurableProduct(product, mediaUrl) {
        return __assign({}, transformMagentoSimpleProduct(product, mediaUrl), { type: DaffProductTypeEnum.Configurable, configurableAttributes: product.configurable_options.map(transformOption), variants: product.variants.map(transformVariant) });
    }
    /**
     * @param {?} option
     * @return {?}
     */
    function transformOption(option) {
        return {
            order: option.position,
            code: option.attribute_code,
            label: option.label,
            values: option.values.map(transformOptionValue)
        };
    }
    /**
     * @param {?} value
     * @return {?}
     */
    function transformOptionValue(value) {
        return {
            value: value.value_index.toString(),
            label: value.label
        };
    }
    /**
     * @param {?} variant
     * @return {?}
     */
    function transformVariant(variant) {
        return {
            id: variant.product.sku,
            appliedAttributes: transformVariantAttributes(variant.attributes),
            price: getPrice$2(variant.product),
            discount: getDiscount$2(variant.product),
            image: {
                id: '0',
                url: variant.product.image.url,
                label: variant.product.image.label
            },
            in_stock: variant.product.stock_status === MagentoProductStockStatusEnum.InStock
        };
    }
    /**
     * @param {?} attributes
     * @return {?}
     */
    function transformVariantAttributes(attributes) {
        /** @type {?} */
        var appliedAttributes = {};
        attributes.forEach((/**
         * @param {?} attribute
         * @return {?}
         */
        function (attribute) {
            var _a;
            appliedAttributes = __assign({}, appliedAttributes, (_a = {}, _a[attribute.code] = attribute.value_index.toString(), _a));
        }));
        return appliedAttributes;
    }
    /**
     * A function for null checking an object.
     * @param {?} product
     * @return {?}
     */
    function getPrice$2(product) {
        return product.price_range &&
            product.price_range.maximum_price &&
            product.price_range.maximum_price.regular_price &&
            product.price_range.maximum_price.regular_price.value !== null
            ? product.price_range.maximum_price.regular_price.value : null;
    }
    /**
     * @param {?} product
     * @return {?}
     */
    function getDiscount$2(product) {
        return product.price_range &&
            product.price_range.maximum_price &&
            product.price_range.maximum_price.discount
            ? {
                amount: product.price_range.maximum_price.discount.amount_off,
                percent: product.price_range.maximum_price.discount.percent_off
            } : { amount: null, percent: null };
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * Transforms the magento MagentoProduct from the magento product query into a DaffProduct.
     * @param {?} product a magento product
     * @param {?=} mediaUrl
     * @return {?}
     */
    function transformMagentoProduct(product, mediaUrl) {
        switch (product.__typename) {
            case MagentoProductTypeEnum.BundledProduct:
                return transformMagentoBundledProduct((/** @type {?} */ (product)), mediaUrl);
            case MagentoProductTypeEnum.ConfigurableProduct:
                return transformMagentoConfigurableProduct((/** @type {?} */ (product)), mediaUrl);
            default:
                return transformMagentoSimpleProduct(product, mediaUrl);
        }
    }
    /**
     * Transforms many magento MagentoProducts from the magento product query into DaffProducts.
     * @param {?} products
     * @param {?=} mediaUrl
     * @return {?}
     */
    function transformManyMagentoProducts(products, mediaUrl) {
        return products.map((/**
         * @param {?} product
         * @return {?}
         */
        function (product) { return transformMagentoProduct(product, mediaUrl); }));
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * A service for making magento apollo queries for products of type, DaffProduct.
     */
    var DaffMagentoProductService = /** @class */ (function () {
        function DaffMagentoProductService(apollo) {
            this.apollo = apollo;
        }
        /**
         * Get an Observable of a DaffProduct by id.
         * @param productId a product Id
         */
        /**
         * Get an Observable of a DaffProduct by id.
         * @param {?} productId a product Id
         * @return {?}
         */
        DaffMagentoProductService.prototype.get = /**
         * Get an Observable of a DaffProduct by id.
         * @param {?} productId a product Id
         * @return {?}
         */
        function (productId) {
            return this.apollo.query({
                query: GetProductQuery,
                variables: {
                    sku: productId
                }
            }).pipe(operators.map((/**
             * @param {?} result
             * @return {?}
             */
            function (result) { return transformMagentoProduct(result.data.products.items[0], result.data.storeConfig.secure_base_media_url); })));
        };
        /**
         * Get an Observable of an array of DaffProducts.
         */
        /**
         * Get an Observable of an array of DaffProducts.
         * @return {?}
         */
        DaffMagentoProductService.prototype.getAll = /**
         * Get an Observable of an array of DaffProducts.
         * @return {?}
         */
        function () {
            return this.apollo.query({
                query: GetAllProductsQuery$1
            }).pipe(operators.map((/**
             * @param {?} result
             * @return {?}
             */
            function (result) { return transformManyMagentoProducts(result.data.products.items, result.data.storeConfig.secure_base_media_url); })));
        };
        //todo: add actual getBestSellers apollo call for Magento.
        //todo: move to a different bestsellers module.
        //todo: add actual getBestSellers apollo call for Magento.
        //todo: move to a different bestsellers module.
        /**
         * @return {?}
         */
        DaffMagentoProductService.prototype.getBestSellers = 
        //todo: add actual getBestSellers apollo call for Magento.
        //todo: move to a different bestsellers module.
        /**
         * @return {?}
         */
        function () {
            return rxjs.of(null);
        };
        DaffMagentoProductService.decorators = [
            { type: core.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */
        DaffMagentoProductService.ctorParameters = function () { return [
            { type: apolloAngular.Apollo }
        ]; };
        /** @nocollapse */ DaffMagentoProductService.ngInjectableDef = core.ɵɵdefineInjectable({ factory: function DaffMagentoProductService_Factory() { return new DaffMagentoProductService(core.ɵɵinject(apolloAngular.Apollo)); }, token: DaffMagentoProductService, providedIn: "root" });
        return DaffMagentoProductService;
    }());
    if (false) {
        /**
         * @type {?}
         * @private
         */
        DaffMagentoProductService.prototype.apollo;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var DaffProductMagentoDriverModule = /** @class */ (function () {
        function DaffProductMagentoDriverModule() {
        }
        /**
         * @return {?}
         */
        DaffProductMagentoDriverModule.forRoot = /**
         * @return {?}
         */
        function () {
            return {
                ngModule: DaffProductMagentoDriverModule,
                providers: [
                    {
                        provide: DaffProductDriver,
                        useExisting: DaffMagentoProductService
                    }
                ]
            };
        };
        DaffProductMagentoDriverModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [
                            common.CommonModule
                        ]
                    },] }
        ];
        return DaffProductMagentoDriverModule;
    }());

    exports.DaffBestSellersActionTypes = DaffBestSellersActionTypes;
    exports.DaffBestSellersFacade = DaffBestSellersFacade;
    exports.DaffBestSellersLoad = DaffBestSellersLoad;
    exports.DaffBestSellersLoadFailure = DaffBestSellersLoadFailure;
    exports.DaffBestSellersLoadSuccess = DaffBestSellersLoadSuccess;
    exports.DaffBestSellersReset = DaffBestSellersReset;
    exports.DaffCompositeProductActionTypes = DaffCompositeProductActionTypes;
    exports.DaffCompositeProductApplyOption = DaffCompositeProductApplyOption;
    exports.DaffCompositeProductFacade = DaffCompositeProductFacade;
    exports.DaffCompositeProductItemInputEnum = DaffCompositeProductItemInputEnum;
    exports.DaffConfigurableProductActionTypes = DaffConfigurableProductActionTypes;
    exports.DaffConfigurableProductApplyAttribute = DaffConfigurableProductApplyAttribute;
    exports.DaffConfigurableProductFacade = DaffConfigurableProductFacade;
    exports.DaffConfigurableProductRemoveAttribute = DaffConfigurableProductRemoveAttribute;
    exports.DaffConfigurableProductToggleAttribute = DaffConfigurableProductToggleAttribute;
    exports.DaffMagentoProductService = DaffMagentoProductService;
    exports.DaffProductActionTypes = DaffProductActionTypes;
    exports.DaffProductDriver = DaffProductDriver;
    exports.DaffProductFacade = DaffProductFacade;
    exports.DaffProductGridActionTypes = DaffProductGridActionTypes;
    exports.DaffProductGridFacade = DaffProductGridFacade;
    exports.DaffProductGridLoad = DaffProductGridLoad;
    exports.DaffProductGridLoadFailure = DaffProductGridLoadFailure;
    exports.DaffProductGridLoadSuccess = DaffProductGridLoadSuccess;
    exports.DaffProductGridReset = DaffProductGridReset;
    exports.DaffProductLoad = DaffProductLoad;
    exports.DaffProductLoadFailure = DaffProductLoadFailure;
    exports.DaffProductLoadSuccess = DaffProductLoadSuccess;
    exports.DaffProductMagentoDriverModule = DaffProductMagentoDriverModule;
    exports.DaffProductModule = DaffProductModule;
    exports.DaffProductPageResolver = DaffProductPageResolver;
    exports.DaffProductShopifyDriverModule = DaffProductShopifyDriverModule;
    exports.DaffProductTypeEnum = DaffProductTypeEnum;
    exports.DaffProductUpdateQty = DaffProductUpdateQty;
    exports.DaffShopifyProductService = DaffShopifyProductService;
    exports.GetAllProductsQuery = GetAllProductsQuery$1;
    exports.GetProductQuery = GetProductQuery;
    exports.MagentoPriceTypeEnum = MagentoPriceTypeEnum;
    exports.MagentoProductStockStatusEnum = MagentoProductStockStatusEnum;
    exports.MagentoProductTypeEnum = MagentoProductTypeEnum;
    exports.daffBestSellersReducer = daffBestSellersReducer;
    exports.daffProductEntitiesAdapter = daffProductEntitiesAdapter;
    exports.daffProductEntitiesReducer = daffProductEntitiesReducer;
    exports.daffProductGridReducer = daffProductGridReducer;
    exports.daffProductReducer = daffProductReducer;
    exports.daffProductReducers = daffProductReducers;
    exports.getDaffProductSelectors = getDaffProductSelectors;
    exports.magentoBundledProductFragment = magentoBundledProductFragment;
    exports.magentoProductFragment = magentoProductFragment;
    exports.productPriceRangeHasDiscount = productPriceRangeHasDiscount;
    exports.productPriceRangeHasPriceRange = productPriceRangeHasPriceRange;
    exports.transformMagentoProduct = transformMagentoProduct;
    exports.transformManyMagentoProducts = transformManyMagentoProducts;
    exports.ɵa = daffConfigurableProductEntitiesReducer;
    exports.ɵb = daffCompositeProductEntitiesReducer;
    exports.ɵc = DaffProductStateModule;
    exports.ɵd = DaffProductGridEffects;
    exports.ɵe = DaffProductEffects;
    exports.ɵf = DaffBestSellersEffects;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=daffodil-product.umd.js.map
