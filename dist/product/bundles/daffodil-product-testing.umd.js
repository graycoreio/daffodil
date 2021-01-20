(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('faker/locale/en_US'), require('@daffodil/product'), require('@daffodil/core/testing'), require('angular-in-memory-web-api'), require('rxjs'), require('@angular/common/http'), require('@angular/common')) :
    typeof define === 'function' && define.amd ? define('@daffodil/product/testing', ['exports', '@angular/core', 'faker/locale/en_US', '@daffodil/product', '@daffodil/core/testing', 'angular-in-memory-web-api', 'rxjs', '@angular/common/http', '@angular/common'], factory) :
    (global = global || self, factory((global.daffodil = global.daffodil || {}, global.daffodil.product = global.daffodil.product || {}, global.daffodil.product.testing = {}), global.ng.core, global.en_US, global.daffodil.product, global.testing, global.angularInMemoryWebApi, global.rxjs, global.ng.common.http, global.ng.common));
}(this, function (exports, core, en_US, product, testing, angularInMemoryWebApi, rxjs, http, common) { 'use strict';

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
     * Mocked DaffProduct object.
     */
    var /**
     * Mocked DaffProduct object.
     */
    MockProduct = /** @class */ (function () {
        function MockProduct() {
            this.stubPrice = en_US.random.number({ min: 1, max: 1500 });
            this.stubDiscount = en_US.random.number({ min: 0, max: this.stubPrice - 1 });
            this.type = product.DaffProductTypeEnum.Simple;
            this.id = en_US.random.number({ min: 1, max: 10000 }).toString();
            this.url = en_US.random.alphaNumeric(16);
            this.price = this.stubPrice;
            this.in_stock = true;
            this.discount = {
                amount: this.stubDiscount,
                percent: Math.floor((this.stubDiscount / this.stubPrice) * 100)
            };
            this.images = [];
            this.name = en_US.commerce.productName();
            this.brand = en_US.company.companyName();
            this.description = 'Lorem ipsum dolor sit amet, accumsan ullamcorper ei eam. Sint appetere ocurreret no per, et cum lorem disputationi. Sit ut magna delenit, assum vidisse vocibus sed ut. In aperiri malorum accusamus sea, novum mediocritatem ius at. Duo agam probo honestatis ut. Nec regione splendide cu, unum graeco vivendum in duo.';
        }
        return MockProduct;
    }());
    if (false) {
        /**
         * @type {?}
         * @private
         */
        MockProduct.prototype.stubPrice;
        /**
         * @type {?}
         * @private
         */
        MockProduct.prototype.stubDiscount;
        /** @type {?} */
        MockProduct.prototype.type;
        /** @type {?} */
        MockProduct.prototype.id;
        /** @type {?} */
        MockProduct.prototype.url;
        /** @type {?} */
        MockProduct.prototype.price;
        /** @type {?} */
        MockProduct.prototype.in_stock;
        /** @type {?} */
        MockProduct.prototype.discount;
        /** @type {?} */
        MockProduct.prototype.images;
        /** @type {?} */
        MockProduct.prototype.name;
        /** @type {?} */
        MockProduct.prototype.brand;
        /** @type {?} */
        MockProduct.prototype.description;
    }
    /**
     * Factory for creating DaffProducts.
     */
    var DaffProductFactory = /** @class */ (function (_super) {
        __extends(DaffProductFactory, _super);
        function DaffProductFactory() {
            return _super.call(this, MockProduct) || this;
        }
        DaffProductFactory.decorators = [
            { type: core.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */
        DaffProductFactory.ctorParameters = function () { return []; };
        /** @nocollapse */ DaffProductFactory.ngInjectableDef = core.ɵɵdefineInjectable({ factory: function DaffProductFactory_Factory() { return new DaffProductFactory(); }, token: DaffProductFactory, providedIn: "root" });
        return DaffProductFactory;
    }(testing.DaffModelFactory));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * Mocked DaffCompositeProduct object.
     */
    var /**
     * Mocked DaffCompositeProduct object.
     */
    MockCompositeProduct = /** @class */ (function () {
        function MockCompositeProduct() {
            this.stubPrice = en_US.random.number({ min: 1, max: 1500 });
            this.stubDiscount = en_US.random.number({ min: 0, max: this.stubPrice - 1 });
            this.type = product.DaffProductTypeEnum.Composite;
            this.id = en_US.random.number({ min: 1, max: 10000 }).toString();
            this.url = en_US.random.alphaNumeric(16);
            this.price = this.stubPrice;
            this.images = [];
            this.discount = {
                amount: this.stubDiscount,
                percent: this.stubDiscount / this.stubPrice
            };
            this.in_stock = true;
            this.name = en_US.commerce.productName();
            this.brand = en_US.company.companyName();
            this.description = 'Lorem ipsum dolor sit amet, accumsan ullamcorper ei eam. Sint appetere ocurreret no per, et cum lorem disputationi. Sit ut magna delenit, assum vidisse vocibus sed ut. In aperiri malorum accusamus sea, novum mediocritatem ius at. Duo agam probo honestatis ut. Nec regione splendide cu, unum graeco vivendum in duo.';
            this.items = [
                {
                    id: en_US.random.alphaNumeric(10),
                    required: en_US.random.boolean(),
                    title: en_US.commerce.productName(),
                    input_type: product.DaffCompositeProductItemInputEnum.select,
                    options: [
                        {
                            id: en_US.random.alphaNumeric(10),
                            name: en_US.commerce.productMaterial(),
                            price: en_US.random.number({ min: 1, max: 100 }),
                            images: [],
                            discount: {
                                amount: 0,
                                percent: 0
                            },
                            quantity: en_US.random.number({ min: 1, max: 9 }),
                            is_default: true,
                            in_stock: true
                        },
                        {
                            id: en_US.random.alphaNumeric(10),
                            name: en_US.commerce.productMaterial(),
                            price: en_US.random.number({ min: 1, max: 100 }),
                            images: [],
                            discount: {
                                amount: 0,
                                percent: 0
                            },
                            quantity: en_US.random.number({ min: 1, max: 9 }),
                            is_default: false,
                            in_stock: true
                        }
                    ]
                },
                {
                    id: en_US.random.alphaNumeric(10),
                    required: en_US.random.boolean(),
                    title: en_US.commerce.productName(),
                    input_type: product.DaffCompositeProductItemInputEnum.select,
                    options: [
                        {
                            id: en_US.random.alphaNumeric(10),
                            name: en_US.commerce.productMaterial(),
                            price: en_US.random.number({ min: 1, max: 100 }),
                            images: [],
                            discount: {
                                amount: 0,
                                percent: 0
                            },
                            quantity: en_US.random.number({ min: 1, max: 9 }),
                            is_default: true,
                            in_stock: true
                        },
                        {
                            id: en_US.random.alphaNumeric(10),
                            name: en_US.commerce.productMaterial(),
                            price: en_US.random.number({ min: 1, max: 100 }),
                            images: [],
                            discount: {
                                amount: 0,
                                percent: 0
                            },
                            quantity: en_US.random.number({ min: 1, max: 9 }),
                            is_default: false,
                            in_stock: true
                        }
                    ]
                }
            ];
        }
        return MockCompositeProduct;
    }());
    if (false) {
        /**
         * @type {?}
         * @private
         */
        MockCompositeProduct.prototype.stubPrice;
        /**
         * @type {?}
         * @private
         */
        MockCompositeProduct.prototype.stubDiscount;
        /** @type {?} */
        MockCompositeProduct.prototype.type;
        /** @type {?} */
        MockCompositeProduct.prototype.id;
        /** @type {?} */
        MockCompositeProduct.prototype.url;
        /** @type {?} */
        MockCompositeProduct.prototype.price;
        /** @type {?} */
        MockCompositeProduct.prototype.images;
        /** @type {?} */
        MockCompositeProduct.prototype.discount;
        /** @type {?} */
        MockCompositeProduct.prototype.in_stock;
        /** @type {?} */
        MockCompositeProduct.prototype.name;
        /** @type {?} */
        MockCompositeProduct.prototype.brand;
        /** @type {?} */
        MockCompositeProduct.prototype.description;
        /** @type {?} */
        MockCompositeProduct.prototype.items;
    }
    /**
     * Factory for creating DaffCompositeProducts.
     */
    var DaffCompositeProductFactory = /** @class */ (function (_super) {
        __extends(DaffCompositeProductFactory, _super);
        function DaffCompositeProductFactory() {
            return _super.call(this, MockCompositeProduct) || this;
        }
        DaffCompositeProductFactory.decorators = [
            { type: core.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */
        DaffCompositeProductFactory.ctorParameters = function () { return []; };
        /** @nocollapse */ DaffCompositeProductFactory.ngInjectableDef = core.ɵɵdefineInjectable({ factory: function DaffCompositeProductFactory_Factory() { return new DaffCompositeProductFactory(); }, token: DaffCompositeProductFactory, providedIn: "root" });
        return DaffCompositeProductFactory;
    }(testing.DaffModelFactory));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * Mocked DaffConfigurableProduct object.
     */
    var /**
     * Mocked DaffConfigurableProduct object.
     */
    MockConfigurableProduct = /** @class */ (function () {
        function MockConfigurableProduct() {
            this.stubPriceVariant1 = en_US.random.number({ min: 1, max: 1500 });
            this.stubDiscountVariant1 = en_US.random.number({ min: 0, max: this.stubPriceVariant1 - 1 });
            this.stubPriceVariant2 = en_US.random.number({ min: 1, max: 1500 });
            this.stubDiscountVariant2 = en_US.random.number({ min: 0, max: this.stubPriceVariant2 - 1 });
            this.stubPriceVariant3 = en_US.random.number({ min: 1, max: 1500 });
            this.stubDiscountVariant3 = en_US.random.number({ min: 0, max: this.stubPriceVariant3 - 1 });
            this.type = product.DaffProductTypeEnum.Configurable;
            this.id = en_US.random.number({ min: 1, max: 10000 }).toString();
            this.url = en_US.random.alphaNumeric(16);
            this.price = en_US.random.number({ min: 1, max: 1500 });
            this.images = [];
            this.name = en_US.commerce.productName();
            this.brand = en_US.company.companyName();
            this.description = 'Lorem ipsum dolor sit amet, accumsan ullamcorper ei eam. Sint appetere ocurreret no per, et cum lorem disputationi. Sit ut magna delenit, assum vidisse vocibus sed ut. In aperiri malorum accusamus sea, novum mediocritatem ius at. Duo agam probo honestatis ut. Nec regione splendide cu, unum graeco vivendum in duo.';
            this.in_stock = true;
            this.configurableAttributes = [
                {
                    code: 'color',
                    label: 'Color',
                    order: 0,
                    values: [
                        {
                            value: '0',
                            label: 'Blue',
                            swatch: {
                                value: '#0000FF',
                                thumbnail: null
                            }
                        },
                        {
                            value: '1',
                            label: 'Yellow',
                            swatch: {
                                value: '#FFFF00',
                                thumbnail: null
                            }
                        },
                        {
                            value: '2',
                            label: 'Red',
                            swatch: {
                                value: '#FF0000',
                                thumbnail: null
                            }
                        }
                    ]
                },
                {
                    code: 'size',
                    label: 'Size',
                    order: 1,
                    values: [
                        {
                            value: '0',
                            label: 'Small',
                            swatch: null
                        },
                        {
                            value: '1',
                            label: 'Medium',
                            swatch: null
                        },
                        {
                            value: '2',
                            label: 'Large',
                            swatch: null
                        }
                    ]
                },
                {
                    code: 'material',
                    label: 'Material',
                    order: 2,
                    values: [
                        {
                            value: '0',
                            label: 'Cotton',
                            swatch: null
                        },
                        {
                            value: '1',
                            label: 'Polyester',
                            swatch: null
                        },
                        {
                            value: '2',
                            label: 'Spandex',
                            swatch: null
                        }
                    ]
                }
            ];
            this.variants = [
                {
                    appliedAttributes: {
                        color: '0',
                        size: '0',
                        material: '0'
                    },
                    price: this.stubPriceVariant1,
                    discount: {
                        amount: this.stubDiscountVariant1,
                        percent: Math.floor((this.stubDiscountVariant1 / this.stubPriceVariant1) * 100)
                    },
                    id: en_US.random.alphaNumeric(16),
                    in_stock: true
                },
                {
                    appliedAttributes: {
                        color: '0',
                        size: '1',
                        material: '0'
                    },
                    price: this.stubPriceVariant1,
                    discount: {
                        amount: this.stubDiscountVariant1,
                        percent: Math.floor((this.stubDiscountVariant1 / this.stubPriceVariant1) * 100)
                    },
                    id: en_US.random.alphaNumeric(16),
                    in_stock: true
                },
                {
                    appliedAttributes: {
                        color: '0',
                        size: '1',
                        material: '2'
                    },
                    price: this.stubPriceVariant3,
                    discount: {
                        amount: this.stubDiscountVariant3,
                        percent: Math.floor((this.stubDiscountVariant3 / this.stubPriceVariant3) * 100)
                    },
                    id: en_US.random.alphaNumeric(16),
                    in_stock: true
                },
                {
                    appliedAttributes: {
                        color: '0',
                        size: '2',
                        material: '0'
                    },
                    price: this.stubPriceVariant1,
                    discount: {
                        amount: this.stubDiscountVariant1,
                        percent: Math.floor((this.stubDiscountVariant1 / this.stubPriceVariant1) * 100)
                    },
                    id: en_US.random.alphaNumeric(16),
                    in_stock: true
                },
                {
                    appliedAttributes: {
                        color: '1',
                        size: '0',
                        material: '0'
                    },
                    price: this.stubPriceVariant1,
                    discount: {
                        amount: this.stubDiscountVariant1,
                        percent: Math.floor((this.stubDiscountVariant1 / this.stubPriceVariant1) * 100)
                    },
                    id: en_US.random.alphaNumeric(16),
                    in_stock: true
                },
                {
                    appliedAttributes: {
                        color: '1',
                        size: '0',
                        material: '2'
                    },
                    price: this.stubPriceVariant3,
                    discount: {
                        amount: this.stubDiscountVariant3,
                        percent: Math.floor((this.stubDiscountVariant3 / this.stubPriceVariant3) * 100)
                    },
                    id: en_US.random.alphaNumeric(16),
                    in_stock: true
                },
                {
                    appliedAttributes: {
                        color: '1',
                        size: '2',
                        material: '0'
                    },
                    price: this.stubPriceVariant1,
                    discount: {
                        amount: this.stubDiscountVariant1,
                        percent: Math.floor((this.stubDiscountVariant1 / this.stubPriceVariant1) * 100)
                    },
                    id: en_US.random.alphaNumeric(16),
                    in_stock: true
                },
                {
                    appliedAttributes: {
                        color: '1',
                        size: '2',
                        material: '1'
                    },
                    price: this.stubPriceVariant2,
                    discount: {
                        amount: this.stubDiscountVariant2,
                        percent: Math.floor((this.stubDiscountVariant2 / this.stubPriceVariant2) * 100)
                    },
                    id: en_US.random.alphaNumeric(16),
                    in_stock: true
                },
                {
                    appliedAttributes: {
                        color: '2',
                        size: '0',
                        material: '0'
                    },
                    price: this.stubPriceVariant3,
                    discount: {
                        amount: this.stubDiscountVariant3,
                        percent: Math.floor((this.stubDiscountVariant3 / this.stubPriceVariant3) * 100)
                    },
                    id: en_US.random.alphaNumeric(16),
                    in_stock: true
                },
                {
                    appliedAttributes: {
                        color: '2',
                        size: '2',
                        material: '0'
                    },
                    price: this.stubPriceVariant1,
                    discount: {
                        amount: this.stubDiscountVariant1,
                        percent: Math.floor((this.stubDiscountVariant1 / this.stubPriceVariant1) * 100)
                    },
                    id: en_US.random.alphaNumeric(16),
                    in_stock: true
                }
            ];
        }
        return MockConfigurableProduct;
    }());
    if (false) {
        /**
         * @type {?}
         * @private
         */
        MockConfigurableProduct.prototype.stubPriceVariant1;
        /**
         * @type {?}
         * @private
         */
        MockConfigurableProduct.prototype.stubDiscountVariant1;
        /**
         * @type {?}
         * @private
         */
        MockConfigurableProduct.prototype.stubPriceVariant2;
        /**
         * @type {?}
         * @private
         */
        MockConfigurableProduct.prototype.stubDiscountVariant2;
        /**
         * @type {?}
         * @private
         */
        MockConfigurableProduct.prototype.stubPriceVariant3;
        /**
         * @type {?}
         * @private
         */
        MockConfigurableProduct.prototype.stubDiscountVariant3;
        /** @type {?} */
        MockConfigurableProduct.prototype.type;
        /** @type {?} */
        MockConfigurableProduct.prototype.id;
        /** @type {?} */
        MockConfigurableProduct.prototype.url;
        /** @type {?} */
        MockConfigurableProduct.prototype.price;
        /** @type {?} */
        MockConfigurableProduct.prototype.images;
        /** @type {?} */
        MockConfigurableProduct.prototype.name;
        /** @type {?} */
        MockConfigurableProduct.prototype.brand;
        /** @type {?} */
        MockConfigurableProduct.prototype.description;
        /** @type {?} */
        MockConfigurableProduct.prototype.in_stock;
        /** @type {?} */
        MockConfigurableProduct.prototype.configurableAttributes;
        /** @type {?} */
        MockConfigurableProduct.prototype.variants;
    }
    /**
     * Factory for creating DaffConfigurableProducts.
     */
    var DaffConfigurableProductFactory = /** @class */ (function (_super) {
        __extends(DaffConfigurableProductFactory, _super);
        function DaffConfigurableProductFactory() {
            return _super.call(this, MockConfigurableProduct) || this;
        }
        DaffConfigurableProductFactory.decorators = [
            { type: core.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */
        DaffConfigurableProductFactory.ctorParameters = function () { return []; };
        /** @nocollapse */ DaffConfigurableProductFactory.ngInjectableDef = core.ɵɵdefineInjectable({ factory: function DaffConfigurableProductFactory_Factory() { return new DaffConfigurableProductFactory(); }, token: DaffConfigurableProductFactory, providedIn: "root" });
        return DaffConfigurableProductFactory;
    }(testing.DaffModelFactory));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var productImageUrlsList = [
        '/assets/products/0.jpg',
        '/assets/products/1.jpg',
        '/assets/products/2.jpg',
        '/assets/products/3.jpg',
        '/assets/products/4.jpg',
        '/assets/products/5.jpg',
        '/assets/products/6.jpg',
        '/assets/products/7.jpg',
        '/assets/products/8.jpg',
        '/assets/products/9.jpg',
        '/assets/products/10.jpg',
        '/assets/products/11.jpg',
        '/assets/products/12.jpg',
        '/assets/products/13.jpg',
        '/assets/products/14.jpg',
        '/assets/products/15.jpg',
        '/assets/products/16.jpg',
        '/assets/products/17.jpg',
        '/assets/products/18.jpg',
        '/assets/products/19.jpg',
        '/assets/products/20.jpg',
        '/assets/products/21.jpg',
        '/assets/products/22.jpg',
        '/assets/products/23.jpg',
        '/assets/products/24.jpg',
        '/assets/products/25.jpg',
        '/assets/products/26.jpg',
        '/assets/products/27.jpg',
        '/assets/products/28.jpg',
        '/assets/products/29.jpg',
        '/assets/products/30.jpg',
        '/assets/products/31.jpg',
        '/assets/products/32.jpg',
        '/assets/products/33.jpg',
        '/assets/products/34.jpg',
        '/assets/products/35.jpg',
        '/assets/products/36.jpg',
        '/assets/products/37.jpg',
        '/assets/products/38.jpg',
        '/assets/products/39.jpg',
        '/assets/products/40.jpg',
        '/assets/products/41.jpg',
        '/assets/products/42.jpg',
        '/assets/products/43.jpg',
        '/assets/products/44.jpg',
        '/assets/products/45.jpg',
        '/assets/products/46.jpg',
        '/assets/products/47.jpg',
        '/assets/products/48.jpg',
        '/assets/products/49.jpg',
        '/assets/products/50.jpg',
        '/assets/products/51.jpg',
        '/assets/products/52.jpg',
        '/assets/products/53.jpg',
        '/assets/products/54.jpg',
        '/assets/products/55.jpg',
        '/assets/products/56.jpg',
        '/assets/products/57.jpg',
        '/assets/products/58.jpg',
        '/assets/products/59.jpg',
        '/assets/products/60.jpg',
        '/assets/products/61.jpg',
        '/assets/products/62.jpg',
        '/assets/products/63.jpg',
        '/assets/products/64.jpg',
        '/assets/products/65.jpg',
        '/assets/products/66.jpg',
        '/assets/products/67.jpg',
        '/assets/products/68.jpg',
        '/assets/products/69.jpg',
        '/assets/products/70.jpg',
        '/assets/products/71.jpg',
        '/assets/products/72.jpg',
        '/assets/products/73.jpg',
        '/assets/products/74.jpg',
        '/assets/products/75.jpg',
        '/assets/products/76.jpg',
        '/assets/products/77.jpg',
        '/assets/products/78.jpg',
        '/assets/products/79.jpg',
        '/assets/products/80.jpg',
        '/assets/products/81.jpg',
        '/assets/products/82.jpg',
        '/assets/products/83.jpg',
        '/assets/products/84.jpg',
        '/assets/products/85.jpg',
        '/assets/products/86.jpg',
        '/assets/products/87.jpg',
        '/assets/products/88.jpg',
        '/assets/products/89.jpg',
        '/assets/products/90.jpg',
        '/assets/products/91.jpg',
        '/assets/products/92.jpg',
        '/assets/products/93.jpg',
        '/assets/products/94.jpg',
        '/assets/products/95.jpg',
        '/assets/products/96.jpg',
        '/assets/products/97.jpg',
        '/assets/products/98.jpg',
        '/assets/products/99.jpg',
        '/assets/products/100.jpg'
    ];
    /**
     * Mocked DaffProductImage object.
     */
    var /**
     * Mocked DaffProductImage object.
     */
    MockProductImage = /** @class */ (function () {
        function MockProductImage() {
            this.id = en_US.random.number({ min: 1, max: 10000 }).toString();
            this.url = productImageUrlsList[en_US.random.number(productImageUrlsList.length - 1)];
            this.label = en_US.lorem.sentence();
        }
        return MockProductImage;
    }());
    if (false) {
        /** @type {?} */
        MockProductImage.prototype.id;
        /** @type {?} */
        MockProductImage.prototype.url;
        /** @type {?} */
        MockProductImage.prototype.label;
    }
    /**
     * A factory for creating DaffProductImage.
     */
    var DaffProductImageFactory = /** @class */ (function (_super) {
        __extends(DaffProductImageFactory, _super);
        function DaffProductImageFactory() {
            return _super.call(this, MockProductImage) || this;
        }
        DaffProductImageFactory.decorators = [
            { type: core.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */
        DaffProductImageFactory.ctorParameters = function () { return []; };
        /** @nocollapse */ DaffProductImageFactory.ngInjectableDef = core.ɵɵdefineInjectable({ factory: function DaffProductImageFactory_Factory() { return new DaffProductImageFactory(); }, token: DaffProductImageFactory, providedIn: "root" });
        return DaffProductImageFactory;
    }(testing.DaffModelFactory));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * An in-memory service that stubs out the backend services for getting products.
     *
     * \@Param productFactory: DaffProductFactory instance
     * \@Param productImageFactory: DaffProductImageFactory instance
     * \@Param products: An array of Products
     */
    var DaffInMemoryBackendProductService = /** @class */ (function () {
        function DaffInMemoryBackendProductService(productFactory, productImageFactory) {
            this.productFactory = productFactory;
            this.productImageFactory = productImageFactory;
            this.products = [
                this.productFactory.create({ id: '1001', images: this.productImageFactory.createMany(5) }),
                this.productFactory.create({ id: '1002', images: this.productImageFactory.createMany(5) }),
                this.productFactory.create({ id: '1003', images: this.productImageFactory.createMany(5) }),
                this.productFactory.create({ id: '1004', images: this.productImageFactory.createMany(5) }),
                this.productFactory.create({ id: '1005', images: this.productImageFactory.createMany(5) }),
                this.productFactory.create({ id: '1006', images: this.productImageFactory.createMany(5) }),
                this.productFactory.create({ id: '1007', images: this.productImageFactory.createMany(5) }),
                this.productFactory.create({ id: '1008', images: this.productImageFactory.createMany(5) }),
                this.productFactory.create({ id: '1009', images: this.productImageFactory.createMany(5) }),
                this.productFactory.create({ id: '1010', images: this.productImageFactory.createMany(5) }),
                this.productFactory.create({ id: '1011', images: this.productImageFactory.createMany(5) }),
                this.productFactory.create({ id: '1012', images: this.productImageFactory.createMany(5) }),
                this.productFactory.create({ id: '1013', images: this.productImageFactory.createMany(5) }),
                this.productFactory.create({ id: '1014', images: this.productImageFactory.createMany(5) }),
                this.productFactory.create({ id: '1015', images: this.productImageFactory.createMany(5) }),
                this.productFactory.create({ id: '1016', images: this.productImageFactory.createMany(5) }),
                this.productFactory.create({ id: '1017', images: this.productImageFactory.createMany(5) }),
                this.productFactory.create({ id: '1018', images: this.productImageFactory.createMany(5) }),
                this.productFactory.create({ id: '1019', images: this.productImageFactory.createMany(5) }),
                this.productFactory.create({ id: '1020', images: this.productImageFactory.createMany(5) }),
                this.productFactory.create({ id: '1021', images: this.productImageFactory.createMany(5) }),
                this.productFactory.create({ id: '1022', images: this.productImageFactory.createMany(5) }),
                this.productFactory.create({ id: '1023', images: this.productImageFactory.createMany(5) }),
                this.productFactory.create({ id: '1024', images: this.productImageFactory.createMany(5) }),
                this.productFactory.create({ id: '1025', images: this.productImageFactory.createMany(5) }),
                this.productFactory.create({ id: '1026', images: this.productImageFactory.createMany(5) }),
                this.productFactory.create({ id: '1027', images: this.productImageFactory.createMany(5) }),
                this.productFactory.create({ id: '1028', images: this.productImageFactory.createMany(5) }),
                this.productFactory.create({ id: '1029', images: this.productImageFactory.createMany(5) }),
                this.productFactory.create({ id: '1030', images: this.productImageFactory.createMany(5) }),
                this.productFactory.create({ id: '1031', images: this.productImageFactory.createMany(5) }),
                this.productFactory.create({ id: '1032', images: this.productImageFactory.createMany(5) }),
                this.productFactory.create({ id: '1033', images: this.productImageFactory.createMany(5) }),
                this.productFactory.create({ id: '1034', images: this.productImageFactory.createMany(5) }),
                this.productFactory.create({ id: '1035', images: this.productImageFactory.createMany(5) })
            ];
        }
        /**
         * Automatically called as part of the InMemoryDbService to parse incoming urls to match the InMemory backend urls.
         *
         * @param url initial url
         * @param utils utility to parse url
         * @returns ParsedRequestUrl
         */
        /**
         * Automatically called as part of the InMemoryDbService to parse incoming urls to match the InMemory backend urls.
         *
         * @param {?} url initial url
         * @param {?} utils utility to parse url
         * @return {?} ParsedRequestUrl
         */
        DaffInMemoryBackendProductService.prototype.parseRequestUrl = /**
         * Automatically called as part of the InMemoryDbService to parse incoming urls to match the InMemory backend urls.
         *
         * @param {?} url initial url
         * @param {?} utils utility to parse url
         * @return {?} ParsedRequestUrl
         */
        function (url, utils) {
            return utils.parseRequestUrl(url);
        };
        /**
         * Creates a fake database of products for the product inmemory backend service.
         *
         * @returns A fake database of an array of products
         */
        /**
         * Creates a fake database of products for the product inmemory backend service.
         *
         * @return {?} A fake database of an array of products
         */
        DaffInMemoryBackendProductService.prototype.createDb = /**
         * Creates a fake database of products for the product inmemory backend service.
         *
         * @return {?} A fake database of an array of products
         */
        function () {
            return {
                products: this.products
            };
        };
        /**
         * Returns products based on the url given.
         *
         * @param reqInfo request object
         * @returns An http response object
         */
        /**
         * Returns products based on the url given.
         *
         * @param {?} reqInfo request object
         * @return {?} An http response object
         */
        DaffInMemoryBackendProductService.prototype.get = /**
         * Returns products based on the url given.
         *
         * @param {?} reqInfo request object
         * @return {?} An http response object
         */
        function (reqInfo) {
            var _this = this;
            if (reqInfo.id === 'best-sellers') {
                return reqInfo.utils.createResponse$((/**
                 * @return {?}
                 */
                function () {
                    return {
                        body: _this.products.slice(0, 4),
                        status: angularInMemoryWebApi.STATUS.OK
                    };
                }));
            }
            return undefined;
        };
        DaffInMemoryBackendProductService.decorators = [
            { type: core.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */
        DaffInMemoryBackendProductService.ctorParameters = function () { return [
            { type: DaffProductFactory },
            { type: DaffProductImageFactory }
        ]; };
        /** @nocollapse */ DaffInMemoryBackendProductService.ngInjectableDef = core.ɵɵdefineInjectable({ factory: function DaffInMemoryBackendProductService_Factory() { return new DaffInMemoryBackendProductService(core.ɵɵinject(DaffProductFactory), core.ɵɵinject(DaffProductImageFactory)); }, token: DaffInMemoryBackendProductService, providedIn: "root" });
        return DaffInMemoryBackendProductService;
    }());
    if (false) {
        /** @type {?} */
        DaffInMemoryBackendProductService.prototype.products;
        /**
         * @type {?}
         * @private
         */
        DaffInMemoryBackendProductService.prototype.productFactory;
        /**
         * @type {?}
         * @private
         */
        DaffInMemoryBackendProductService.prototype.productImageFactory;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * The product testing driver to mock the backend product service.
     *
     * @param productFactory - A DaffProductFactory instance
     * @param productImageFactory - A DaffProductImageFactory instance
     */
    var DaffTestingProductService = /** @class */ (function () {
        function DaffTestingProductService(productFactory, productImageFactory) {
            this.productFactory = productFactory;
            this.productImageFactory = productImageFactory;
        }
        /**
         * Get all products as DaffProduct[].
         *
         * @returns An Observable of Product[]
         */
        /**
         * Get all products as DaffProduct[].
         *
         * @return {?} An Observable of Product[]
         */
        DaffTestingProductService.prototype.getAll = /**
         * Get all products as DaffProduct[].
         *
         * @return {?} An Observable of Product[]
         */
        function () {
            return rxjs.of([
                this.productFactory.create({ images: this.productImageFactory.createMany(5) }),
                this.productFactory.create({ images: this.productImageFactory.createMany(5) }),
                this.productFactory.create({ images: this.productImageFactory.createMany(5) }),
                this.productFactory.create({ images: this.productImageFactory.createMany(5) }),
                this.productFactory.create({ images: this.productImageFactory.createMany(5) })
            ]);
        };
        /**
         * Get all best selling products.
         *
         * @returns An Observable of Product[]
         */
        /**
         * Get all best selling products.
         *
         * @return {?} An Observable of Product[]
         */
        DaffTestingProductService.prototype.getBestSellers = /**
         * Get all best selling products.
         *
         * @return {?} An Observable of Product[]
         */
        function () {
            return rxjs.of([
                this.productFactory.create({ images: this.productImageFactory.createMany(5) }),
                this.productFactory.create({ images: this.productImageFactory.createMany(5) }),
                this.productFactory.create({ images: this.productImageFactory.createMany(5) }),
                this.productFactory.create({ images: this.productImageFactory.createMany(5) })
            ]);
        };
        /**
         * Get product by ID
         *
         * @param productId product ID
         * @returns An Observable of a Product
         */
        /**
         * Get product by ID
         *
         * @param {?} productId product ID
         * @return {?} An Observable of a Product
         */
        DaffTestingProductService.prototype.get = /**
         * Get product by ID
         *
         * @param {?} productId product ID
         * @return {?} An Observable of a Product
         */
        function (productId) {
            return rxjs.of(this.productFactory.create({ images: this.productImageFactory.createMany(5) }));
        };
        DaffTestingProductService.decorators = [
            { type: core.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */
        DaffTestingProductService.ctorParameters = function () { return [
            { type: DaffProductFactory },
            { type: DaffProductImageFactory }
        ]; };
        /** @nocollapse */ DaffTestingProductService.ngInjectableDef = core.ɵɵdefineInjectable({ factory: function DaffTestingProductService_Factory() { return new DaffTestingProductService(core.ɵɵinject(DaffProductFactory), core.ɵɵinject(DaffProductImageFactory)); }, token: DaffTestingProductService, providedIn: "root" });
        return DaffTestingProductService;
    }());
    if (false) {
        /**
         * @type {?}
         * @private
         */
        DaffTestingProductService.prototype.productFactory;
        /**
         * @type {?}
         * @private
         */
        DaffTestingProductService.prototype.productImageFactory;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * The product inmemory driver to mock the product backend service.
     *
     * \@Param HttpClient
     */
    var DaffInMemoryProductService = /** @class */ (function () {
        function DaffInMemoryProductService(http) {
            this.http = http;
            this.url = '/api/products/';
        }
        /**
         * Gets all products.
         *
         * @returns An Observable of DaffProduct[]
         */
        /**
         * Gets all products.
         *
         * @return {?} An Observable of DaffProduct[]
         */
        DaffInMemoryProductService.prototype.getAll = /**
         * Gets all products.
         *
         * @return {?} An Observable of DaffProduct[]
         */
        function () {
            return this.http.get(this.url);
        };
        /**
         * Gets all best selling products.
         *
         * @returns An Observable of DaffProduct[]
         */
        /**
         * Gets all best selling products.
         *
         * @return {?} An Observable of DaffProduct[]
         */
        DaffInMemoryProductService.prototype.getBestSellers = /**
         * Gets all best selling products.
         *
         * @return {?} An Observable of DaffProduct[]
         */
        function () {
            return this.http.get(this.url + 'best-sellers');
        };
        /**
         * Get a product by ID.
         *
         * @param productId string - product ID
         * @returns An Observable of a DaffProduct
         */
        /**
         * Get a product by ID.
         *
         * @param {?} productId string - product ID
         * @return {?} An Observable of a DaffProduct
         */
        DaffInMemoryProductService.prototype.get = /**
         * Get a product by ID.
         *
         * @param {?} productId string - product ID
         * @return {?} An Observable of a DaffProduct
         */
        function (productId) {
            return this.http.get(this.url + productId);
        };
        DaffInMemoryProductService.decorators = [
            { type: core.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */
        DaffInMemoryProductService.ctorParameters = function () { return [
            { type: http.HttpClient }
        ]; };
        /** @nocollapse */ DaffInMemoryProductService.ngInjectableDef = core.ɵɵdefineInjectable({ factory: function DaffInMemoryProductService_Factory() { return new DaffInMemoryProductService(core.ɵɵinject(http.HttpClient)); }, token: DaffInMemoryProductService, providedIn: "root" });
        return DaffInMemoryProductService;
    }());
    if (false) {
        /** @type {?} */
        DaffInMemoryProductService.prototype.url;
        /**
         * @type {?}
         * @private
         */
        DaffInMemoryProductService.prototype.http;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * Module for providing the DaffInMemoryProductService driver to your application.
     */
    var DaffProductInMemoryDriverModule = /** @class */ (function () {
        function DaffProductInMemoryDriverModule() {
        }
        /**
         * @return {?}
         */
        DaffProductInMemoryDriverModule.forRoot = /**
         * @return {?}
         */
        function () {
            return {
                ngModule: DaffProductInMemoryDriverModule,
                providers: [
                    {
                        provide: product.DaffProductDriver,
                        useExisting: DaffInMemoryProductService
                    }
                ]
            };
        };
        DaffProductInMemoryDriverModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [
                            common.CommonModule
                        ]
                    },] }
        ];
        return DaffProductInMemoryDriverModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * Module for providing DaffProductTestingService driver as the backend product service to your application.
     */
    var DaffProductTestingDriverModule = /** @class */ (function () {
        function DaffProductTestingDriverModule() {
        }
        /**
         * @return {?}
         */
        DaffProductTestingDriverModule.forRoot = /**
         * @return {?}
         */
        function () {
            return {
                ngModule: DaffProductTestingDriverModule,
                providers: [
                    {
                        provide: product.DaffProductDriver,
                        useExisting: DaffTestingProductService
                    }
                ]
            };
        };
        DaffProductTestingDriverModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [
                            common.CommonModule
                        ]
                    },] }
        ];
        return DaffProductTestingDriverModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var MockDaffProductFacade = /** @class */ (function () {
        function MockDaffProductFacade() {
            this.loading$ = new rxjs.BehaviorSubject(false);
            /**
             * @deprecated use getProduct instead.
             */
            this.product$ = new rxjs.BehaviorSubject(null);
        }
        /**
         * @param {?} id
         * @return {?}
         */
        MockDaffProductFacade.prototype.getProduct = /**
         * @param {?} id
         * @return {?}
         */
        function (id) {
            return new rxjs.BehaviorSubject(null);
        };
        /**
         * @param {?} id
         * @return {?}
         */
        MockDaffProductFacade.prototype.getPrice = /**
         * @param {?} id
         * @return {?}
         */
        function (id) {
            return new rxjs.BehaviorSubject(null);
        };
        /**
         * @param {?} id
         * @return {?}
         */
        MockDaffProductFacade.prototype.hasDiscount = /**
         * @param {?} id
         * @return {?}
         */
        function (id) {
            return new rxjs.BehaviorSubject(false);
        };
        /**
         * @param {?} id
         * @return {?}
         */
        MockDaffProductFacade.prototype.getDiscountAmount = /**
         * @param {?} id
         * @return {?}
         */
        function (id) {
            return new rxjs.BehaviorSubject(null);
        };
        /**
         * @param {?} id
         * @return {?}
         */
        MockDaffProductFacade.prototype.getDiscountedPrice = /**
         * @param {?} id
         * @return {?}
         */
        function (id) {
            return new rxjs.BehaviorSubject(null);
        };
        /**
         * @param {?} id
         * @return {?}
         */
        MockDaffProductFacade.prototype.getDiscountPercent = /**
         * @param {?} id
         * @return {?}
         */
        function (id) {
            return new rxjs.BehaviorSubject(null);
        };
        /**
         * @param {?} id
         * @return {?}
         */
        MockDaffProductFacade.prototype.isOutOfStock = /**
         * @param {?} id
         * @return {?}
         */
        function (id) {
            return new rxjs.BehaviorSubject(false);
        };
        /**
         * @param {?} action
         * @return {?}
         */
        MockDaffProductFacade.prototype.dispatch = /**
         * @param {?} action
         * @return {?}
         */
        function (action) { };
        ;
        MockDaffProductFacade.decorators = [
            { type: core.Injectable, args: [{ providedIn: 'root' },] }
        ];
        /** @nocollapse */ MockDaffProductFacade.ngInjectableDef = core.ɵɵdefineInjectable({ factory: function MockDaffProductFacade_Factory() { return new MockDaffProductFacade(); }, token: MockDaffProductFacade, providedIn: "root" });
        return MockDaffProductFacade;
    }());
    if (false) {
        /** @type {?} */
        MockDaffProductFacade.prototype.loading$;
        /**
         * @deprecated use getProduct instead.
         * @type {?}
         */
        MockDaffProductFacade.prototype.product$;
        /* Skipping unhandled member: ;*/
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var MockDaffProductGridFacade = /** @class */ (function () {
        function MockDaffProductGridFacade() {
            this.loading$ = new rxjs.BehaviorSubject(false);
            this.products$ = new rxjs.BehaviorSubject([]);
        }
        /**
         * @param {?} action
         * @return {?}
         */
        MockDaffProductGridFacade.prototype.dispatch = /**
         * @param {?} action
         * @return {?}
         */
        function (action) { };
        ;
        MockDaffProductGridFacade.decorators = [
            { type: core.Injectable, args: [{ providedIn: 'root' },] }
        ];
        /** @nocollapse */ MockDaffProductGridFacade.ngInjectableDef = core.ɵɵdefineInjectable({ factory: function MockDaffProductGridFacade_Factory() { return new MockDaffProductGridFacade(); }, token: MockDaffProductGridFacade, providedIn: "root" });
        return MockDaffProductGridFacade;
    }());
    if (false) {
        /** @type {?} */
        MockDaffProductGridFacade.prototype.loading$;
        /** @type {?} */
        MockDaffProductGridFacade.prototype.products$;
        /* Skipping unhandled member: ;*/
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var MockDaffConfigurableProductFacade = /** @class */ (function () {
        function MockDaffConfigurableProductFacade() {
        }
        /**
         * @param {?} id
         * @return {?}
         */
        MockDaffConfigurableProductFacade.prototype.getAllAttributes = /**
         * @param {?} id
         * @return {?}
         */
        function (id) {
            return new rxjs.BehaviorSubject({});
        };
        ;
        /**
         * @param {?} id
         * @return {?}
         */
        MockDaffConfigurableProductFacade.prototype.getAllVariants = /**
         * @param {?} id
         * @return {?}
         */
        function (id) {
            return new rxjs.BehaviorSubject([]);
        };
        ;
        /**
         * @param {?} id
         * @return {?}
         */
        MockDaffConfigurableProductFacade.prototype.getAppliedAttributes = /**
         * @param {?} id
         * @return {?}
         */
        function (id) {
            return new rxjs.BehaviorSubject({});
        };
        ;
        /**
         * @param {?} id
         * @return {?}
         */
        MockDaffConfigurableProductFacade.prototype.getMinimumPrice = /**
         * @param {?} id
         * @return {?}
         */
        function (id) {
            return new rxjs.BehaviorSubject(null);
        };
        ;
        /**
         * @param {?} id
         * @return {?}
         */
        MockDaffConfigurableProductFacade.prototype.getMaximumPrice = /**
         * @param {?} id
         * @return {?}
         */
        function (id) {
            return new rxjs.BehaviorSubject(null);
        };
        ;
        /**
         * @param {?} id
         * @return {?}
         */
        MockDaffConfigurableProductFacade.prototype.getMinimumDiscountedPrice = /**
         * @param {?} id
         * @return {?}
         */
        function (id) {
            return new rxjs.BehaviorSubject(null);
        };
        ;
        /**
         * @param {?} id
         * @return {?}
         */
        MockDaffConfigurableProductFacade.prototype.getMaximumDiscountedPrice = /**
         * @param {?} id
         * @return {?}
         */
        function (id) {
            return new rxjs.BehaviorSubject(null);
        };
        ;
        /**
         * @param {?} id
         * @return {?}
         */
        MockDaffConfigurableProductFacade.prototype.getMinimumPercentDiscount = /**
         * @param {?} id
         * @return {?}
         */
        function (id) {
            return new rxjs.BehaviorSubject(null);
        };
        ;
        /**
         * @param {?} id
         * @return {?}
         */
        MockDaffConfigurableProductFacade.prototype.getMaximumPercentDiscount = /**
         * @param {?} id
         * @return {?}
         */
        function (id) {
            return new rxjs.BehaviorSubject(null);
        };
        ;
        /**
         * @param {?} id
         * @return {?}
         */
        MockDaffConfigurableProductFacade.prototype.isPriceRanged = /**
         * @param {?} id
         * @return {?}
         */
        function (id) {
            return new rxjs.BehaviorSubject(null);
        };
        ;
        /**
         * @param {?} id
         * @return {?}
         */
        MockDaffConfigurableProductFacade.prototype.hasDiscount = /**
         * @param {?} id
         * @return {?}
         */
        function (id) {
            return new rxjs.BehaviorSubject(null);
        };
        ;
        /**
         * @param {?} id
         * @return {?}
         */
        MockDaffConfigurableProductFacade.prototype.getSelectableAttributes = /**
         * @param {?} id
         * @return {?}
         */
        function (id) {
            return new rxjs.BehaviorSubject({});
        };
        ;
        /**
         * @param {?} id
         * @return {?}
         */
        MockDaffConfigurableProductFacade.prototype.getMatchingVariants = /**
         * @param {?} id
         * @return {?}
         */
        function (id) {
            return new rxjs.BehaviorSubject([]);
        };
        ;
        /**
         * @param {?} action
         * @return {?}
         */
        MockDaffConfigurableProductFacade.prototype.dispatch = /**
         * @param {?} action
         * @return {?}
         */
        function (action) { };
        ;
        MockDaffConfigurableProductFacade.decorators = [
            { type: core.Injectable, args: [{ providedIn: 'root' },] }
        ];
        /** @nocollapse */ MockDaffConfigurableProductFacade.ngInjectableDef = core.ɵɵdefineInjectable({ factory: function MockDaffConfigurableProductFacade_Factory() { return new MockDaffConfigurableProductFacade(); }, token: MockDaffConfigurableProductFacade, providedIn: "root" });
        return MockDaffConfigurableProductFacade;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var MockDaffCompositeProductFacade = /** @class */ (function () {
        function MockDaffCompositeProductFacade() {
        }
        /**
         * @param {?} id
         * @param {?=} configuration
         * @return {?}
         */
        MockDaffCompositeProductFacade.prototype.getRequiredItemPricesForConfiguration = /**
         * @param {?} id
         * @param {?=} configuration
         * @return {?}
         */
        function (id, configuration) {
            return new rxjs.BehaviorSubject(null);
        };
        /**
         * @param {?} id
         * @param {?=} configuration
         * @return {?}
         */
        MockDaffCompositeProductFacade.prototype.getOptionalItemPricesForConfiguration = /**
         * @param {?} id
         * @param {?=} configuration
         * @return {?}
         */
        function (id, configuration) {
            return new rxjs.BehaviorSubject(null);
        };
        /**
         * @param {?} id
         * @return {?}
         */
        MockDaffCompositeProductFacade.prototype.getPricesAsCurrentlyConfigured = /**
         * @param {?} id
         * @return {?}
         */
        function (id) {
            return new rxjs.BehaviorSubject(null);
        };
        /**
         * @param {?} id
         * @return {?}
         */
        MockDaffCompositeProductFacade.prototype.getAppliedOptions = /**
         * @param {?} id
         * @return {?}
         */
        function (id) {
            return new rxjs.BehaviorSubject({});
        };
        /**
         * @param {?} id
         * @param {?} item_id
         * @return {?}
         */
        MockDaffCompositeProductFacade.prototype.isItemRequired = /**
         * @param {?} id
         * @param {?} item_id
         * @return {?}
         */
        function (id, item_id) {
            return new rxjs.BehaviorSubject(false);
        };
        /**
         * @param {?} action
         * @return {?}
         */
        MockDaffCompositeProductFacade.prototype.dispatch = /**
         * @param {?} action
         * @return {?}
         */
        function (action) { };
        ;
        /**
         * @param {?} priceRange
         * @return {?}
         */
        MockDaffCompositeProductFacade.prototype.hasDiscount = /**
         * @param {?} priceRange
         * @return {?}
         */
        function (priceRange) {
            return false;
        };
        ;
        /**
         * @param {?} priceRange
         * @return {?}
         */
        MockDaffCompositeProductFacade.prototype.hasPriceRange = /**
         * @param {?} priceRange
         * @return {?}
         */
        function (priceRange) {
            return false;
        };
        ;
        MockDaffCompositeProductFacade.decorators = [
            { type: core.Injectable, args: [{ providedIn: 'root' },] }
        ];
        /** @nocollapse */ MockDaffCompositeProductFacade.ngInjectableDef = core.ɵɵdefineInjectable({ factory: function MockDaffCompositeProductFacade_Factory() { return new MockDaffCompositeProductFacade(); }, token: MockDaffCompositeProductFacade, providedIn: "root" });
        return MockDaffCompositeProductFacade;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var MockDaffBestSellersFacade = /** @class */ (function () {
        function MockDaffBestSellersFacade() {
            this.loading$ = new rxjs.BehaviorSubject(false);
            this.bestSellers$ = new rxjs.BehaviorSubject([]);
        }
        /**
         * @param {?} action
         * @return {?}
         */
        MockDaffBestSellersFacade.prototype.dispatch = /**
         * @param {?} action
         * @return {?}
         */
        function (action) { };
        MockDaffBestSellersFacade.decorators = [
            { type: core.Injectable, args: [{ providedIn: 'root' },] }
        ];
        /** @nocollapse */ MockDaffBestSellersFacade.ngInjectableDef = core.ɵɵdefineInjectable({ factory: function MockDaffBestSellersFacade_Factory() { return new MockDaffBestSellersFacade(); }, token: MockDaffBestSellersFacade, providedIn: "root" });
        return MockDaffBestSellersFacade;
    }());
    if (false) {
        /** @type {?} */
        MockDaffBestSellersFacade.prototype.loading$;
        /** @type {?} */
        MockDaffBestSellersFacade.prototype.bestSellers$;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var DaffProductTestingModule = /** @class */ (function () {
        function DaffProductTestingModule() {
        }
        DaffProductTestingModule.decorators = [
            { type: core.NgModule, args: [{
                        providers: [
                            { provide: product.DaffProductFacade, useExisting: MockDaffProductFacade },
                            { provide: product.DaffProductGridFacade, useExisting: MockDaffProductGridFacade },
                            { provide: product.DaffConfigurableProductFacade, useExisting: MockDaffConfigurableProductFacade },
                            { provide: product.DaffCompositeProductFacade, useExisting: MockDaffCompositeProductFacade },
                            { provide: product.DaffBestSellersFacade, useExisting: MockDaffBestSellersFacade },
                        ]
                    },] }
        ];
        return DaffProductTestingModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var MockMagentoCoreProduct = /** @class */ (function () {
        function MockMagentoCoreProduct() {
            this.__typename = product.MagentoProductTypeEnum.SimpleProduct;
            this.id = en_US.random.number({ min: 1, max: 1000 });
            this.url_key = en_US.random.alphaNumeric(16);
            this.name = en_US.random.word();
            this.sku = en_US.random.alphaNumeric(16);
            this.stock_status = product.MagentoProductStockStatusEnum.InStock;
            this.image = {
                __typename: 'ProductImage',
                label: en_US.random.words(3),
                url: en_US.image.imageUrl()
            };
            this.thumbnail = {
                __typename: 'ProductImage',
                label: en_US.random.words(3),
                url: en_US.image.imageUrl()
            };
            this.description = {
                __typename: 'ComplexTextValue',
                html: en_US.random.words(5)
            };
            this.price_range = {
                __typename: 'PriceRange',
                maximum_price: {
                    __typename: 'ProductPrice',
                    regular_price: {
                        __typename: 'Money',
                        value: en_US.random.number({ min: 100, max: 1000 }),
                        currency: null
                    },
                    discount: {
                        __typename: 'ProductDiscount',
                        amount_off: en_US.random.number({ min: 1, max: 99 }),
                        percent_off: en_US.random.number({ min: 1, max: 99 })
                    }
                }
            };
            this.short_description = {
                __typename: 'ComplexTextValue',
                html: en_US.random.words(3)
            };
            this.media_gallery_entries = [];
        }
        return MockMagentoCoreProduct;
    }());
    if (false) {
        /** @type {?} */
        MockMagentoCoreProduct.prototype.__typename;
        /** @type {?} */
        MockMagentoCoreProduct.prototype.id;
        /** @type {?} */
        MockMagentoCoreProduct.prototype.url_key;
        /** @type {?} */
        MockMagentoCoreProduct.prototype.name;
        /** @type {?} */
        MockMagentoCoreProduct.prototype.sku;
        /** @type {?} */
        MockMagentoCoreProduct.prototype.stock_status;
        /** @type {?} */
        MockMagentoCoreProduct.prototype.image;
        /** @type {?} */
        MockMagentoCoreProduct.prototype.thumbnail;
        /** @type {?} */
        MockMagentoCoreProduct.prototype.description;
        /** @type {?} */
        MockMagentoCoreProduct.prototype.price_range;
        /** @type {?} */
        MockMagentoCoreProduct.prototype.short_description;
        /** @type {?} */
        MockMagentoCoreProduct.prototype.media_gallery_entries;
    }
    var MagentoCoreProductFactory = /** @class */ (function (_super) {
        __extends(MagentoCoreProductFactory, _super);
        function MagentoCoreProductFactory() {
            return _super.call(this, MockMagentoCoreProduct) || this;
        }
        MagentoCoreProductFactory.decorators = [
            { type: core.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */
        MagentoCoreProductFactory.ctorParameters = function () { return []; };
        /** @nocollapse */ MagentoCoreProductFactory.ngInjectableDef = core.ɵɵdefineInjectable({ factory: function MagentoCoreProductFactory_Factory() { return new MagentoCoreProductFactory(); }, token: MagentoCoreProductFactory, providedIn: "root" });
        return MagentoCoreProductFactory;
    }(testing.DaffModelFactory));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var MockMagentoSimpleProduct = /** @class */ (function (_super) {
        __extends(MockMagentoSimpleProduct, _super);
        function MockMagentoSimpleProduct() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.__typename = product.MagentoProductTypeEnum.SimpleProduct;
            return _this;
        }
        return MockMagentoSimpleProduct;
    }(MockMagentoCoreProduct));
    if (false) {
        /** @type {?} */
        MockMagentoSimpleProduct.prototype.__typename;
    }
    var MagentoSimpleProductFactory = /** @class */ (function (_super) {
        __extends(MagentoSimpleProductFactory, _super);
        function MagentoSimpleProductFactory() {
            return _super.call(this, MockMagentoSimpleProduct) || this;
        }
        MagentoSimpleProductFactory.decorators = [
            { type: core.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */
        MagentoSimpleProductFactory.ctorParameters = function () { return []; };
        /** @nocollapse */ MagentoSimpleProductFactory.ngInjectableDef = core.ɵɵdefineInjectable({ factory: function MagentoSimpleProductFactory_Factory() { return new MagentoSimpleProductFactory(); }, token: MagentoSimpleProductFactory, providedIn: "root" });
        return MagentoSimpleProductFactory;
    }(testing.DaffModelFactory));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var MockMagentoBundledProduct = /** @class */ (function (_super) {
        __extends(MockMagentoBundledProduct, _super);
        function MockMagentoBundledProduct() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.__typename = product.MagentoProductTypeEnum.BundledProduct;
            _this.items = [];
            return _this;
        }
        return MockMagentoBundledProduct;
    }(MockMagentoCoreProduct));
    if (false) {
        /** @type {?} */
        MockMagentoBundledProduct.prototype.__typename;
        /** @type {?} */
        MockMagentoBundledProduct.prototype.items;
    }
    var MagentoBundledProductFactory = /** @class */ (function (_super) {
        __extends(MagentoBundledProductFactory, _super);
        function MagentoBundledProductFactory() {
            return _super.call(this, MockMagentoBundledProduct) || this;
        }
        MagentoBundledProductFactory.decorators = [
            { type: core.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */
        MagentoBundledProductFactory.ctorParameters = function () { return []; };
        /** @nocollapse */ MagentoBundledProductFactory.ngInjectableDef = core.ɵɵdefineInjectable({ factory: function MagentoBundledProductFactory_Factory() { return new MagentoBundledProductFactory(); }, token: MagentoBundledProductFactory, providedIn: "root" });
        return MagentoBundledProductFactory;
    }(testing.DaffModelFactory));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var MockMagentoConfigurableProduct = /** @class */ (function (_super) {
        __extends(MockMagentoConfigurableProduct, _super);
        function MockMagentoConfigurableProduct() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.priceVariant1 = en_US.random.number({ min: 1, max: 1000 });
            _this.discountVariant1 = en_US.random.number({ min: 0, max: _this.priceVariant1 - 1 });
            _this.priceVariant2 = en_US.random.number({ min: 1, max: 1000 });
            _this.discountVariant2 = en_US.random.number({ min: 0, max: _this.priceVariant2 - 1 });
            _this.priceVariant3 = en_US.random.number({ min: 1, max: 1000 });
            _this.discountVariant3 = en_US.random.number({ min: 0, max: _this.priceVariant3 - 1 });
            _this.__typename = product.MagentoProductTypeEnum.ConfigurableProduct;
            _this.configurable_options = [
                {
                    attribute_code: 'color',
                    attribute_id: en_US.random.alphaNumeric(12),
                    id: en_US.random.alphaNumeric(12),
                    label: 'Color',
                    position: 0,
                    product_id: en_US.random.number({ min: 1, max: 1000 }),
                    values: [
                        {
                            label: 'Blue',
                            value_index: 0
                        },
                        {
                            label: 'Yellow',
                            value_index: 1
                        },
                        {
                            label: 'Red',
                            value_index: 2
                        }
                    ]
                }
            ];
            _this.variants = [
                {
                    attributes: [
                        {
                            code: 'color',
                            label: 'Blue',
                            value_index: 0
                        }
                    ],
                    product: {
                        __typename: product.MagentoProductTypeEnum.SimpleProduct,
                        id: en_US.random.number({ min: 1, max: 1000 }),
                        url_key: en_US.random.alphaNumeric(16),
                        name: en_US.random.word(),
                        sku: en_US.random.alphaNumeric(16),
                        stock_status: product.MagentoProductStockStatusEnum.InStock,
                        image: {
                            __typename: 'ProductImage',
                            label: en_US.random.words(3),
                            url: en_US.image.imageUrl()
                        },
                        thumbnail: {
                            __typename: 'ProductImage',
                            label: en_US.random.words(3),
                            url: en_US.image.imageUrl()
                        },
                        price_range: {
                            __typename: 'PriceRange',
                            maximum_price: {
                                __typename: 'ProductPrice',
                                regular_price: {
                                    __typename: 'Money',
                                    value: _this.priceVariant1,
                                    currency: null
                                },
                                discount: {
                                    __typename: 'ProductDiscount',
                                    amount_off: _this.discountVariant1,
                                    percent_off: _this.discountVariant1 / _this.priceVariant1
                                }
                            }
                        }
                    }
                },
                {
                    attributes: [
                        {
                            code: 'color',
                            label: 'Yellow',
                            value_index: 1
                        }
                    ],
                    product: {
                        __typename: product.MagentoProductTypeEnum.SimpleProduct,
                        id: en_US.random.number({ min: 1, max: 1000 }),
                        url_key: en_US.random.alphaNumeric(16),
                        name: en_US.random.word(),
                        sku: en_US.random.alphaNumeric(16),
                        stock_status: product.MagentoProductStockStatusEnum.InStock,
                        image: {
                            __typename: 'ProductImage',
                            label: en_US.random.words(3),
                            url: en_US.image.imageUrl()
                        },
                        thumbnail: {
                            __typename: 'ProductImage',
                            label: en_US.random.words(3),
                            url: en_US.image.imageUrl()
                        },
                        price_range: {
                            __typename: 'PriceRange',
                            maximum_price: {
                                __typename: 'ProductPrice',
                                regular_price: {
                                    __typename: 'Money',
                                    value: _this.priceVariant2,
                                    currency: null
                                },
                                discount: {
                                    amount_off: _this.discountVariant2,
                                    percent_off: _this.discountVariant2 / _this.priceVariant2
                                }
                            }
                        }
                    }
                },
                {
                    attributes: [
                        {
                            code: 'color',
                            label: 'Red',
                            value_index: 2
                        }
                    ],
                    product: {
                        __typename: product.MagentoProductTypeEnum.SimpleProduct,
                        id: en_US.random.number({ min: 1, max: 1000 }),
                        url_key: en_US.random.alphaNumeric(16),
                        name: en_US.random.word(),
                        sku: en_US.random.alphaNumeric(16),
                        stock_status: product.MagentoProductStockStatusEnum.InStock,
                        image: {
                            __typename: 'ProductImage',
                            label: en_US.random.words(3),
                            url: en_US.image.imageUrl()
                        },
                        thumbnail: {
                            __typename: 'ProductImage',
                            label: en_US.random.words(3),
                            url: en_US.image.imageUrl()
                        },
                        price_range: {
                            __typename: 'PriceRange',
                            maximum_price: {
                                __typename: 'ProductPrice',
                                regular_price: {
                                    __typename: 'Money',
                                    value: _this.priceVariant3,
                                    currency: null
                                },
                                discount: {
                                    amount_off: _this.discountVariant3,
                                    percent_off: _this.discountVariant3 / _this.priceVariant3
                                }
                            }
                        }
                    }
                }
            ];
            return _this;
        }
        return MockMagentoConfigurableProduct;
    }(MockMagentoCoreProduct));
    if (false) {
        /**
         * @type {?}
         * @private
         */
        MockMagentoConfigurableProduct.prototype.priceVariant1;
        /**
         * @type {?}
         * @private
         */
        MockMagentoConfigurableProduct.prototype.discountVariant1;
        /**
         * @type {?}
         * @private
         */
        MockMagentoConfigurableProduct.prototype.priceVariant2;
        /**
         * @type {?}
         * @private
         */
        MockMagentoConfigurableProduct.prototype.discountVariant2;
        /**
         * @type {?}
         * @private
         */
        MockMagentoConfigurableProduct.prototype.priceVariant3;
        /**
         * @type {?}
         * @private
         */
        MockMagentoConfigurableProduct.prototype.discountVariant3;
        /** @type {?} */
        MockMagentoConfigurableProduct.prototype.__typename;
        /** @type {?} */
        MockMagentoConfigurableProduct.prototype.configurable_options;
        /** @type {?} */
        MockMagentoConfigurableProduct.prototype.variants;
    }
    var MagentoConfigurableProductFactory = /** @class */ (function (_super) {
        __extends(MagentoConfigurableProductFactory, _super);
        function MagentoConfigurableProductFactory() {
            return _super.call(this, MockMagentoConfigurableProduct) || this;
        }
        MagentoConfigurableProductFactory.decorators = [
            { type: core.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */
        MagentoConfigurableProductFactory.ctorParameters = function () { return []; };
        /** @nocollapse */ MagentoConfigurableProductFactory.ngInjectableDef = core.ɵɵdefineInjectable({ factory: function MagentoConfigurableProductFactory_Factory() { return new MagentoConfigurableProductFactory(); }, token: MagentoConfigurableProductFactory, providedIn: "root" });
        return MagentoConfigurableProductFactory;
    }(testing.DaffModelFactory));

    exports.DaffCompositeProductFactory = DaffCompositeProductFactory;
    exports.DaffConfigurableProductFactory = DaffConfigurableProductFactory;
    exports.DaffInMemoryBackendProductService = DaffInMemoryBackendProductService;
    exports.DaffInMemoryProductService = DaffInMemoryProductService;
    exports.DaffProductFactory = DaffProductFactory;
    exports.DaffProductImageFactory = DaffProductImageFactory;
    exports.DaffProductInMemoryDriverModule = DaffProductInMemoryDriverModule;
    exports.DaffProductTestingDriverModule = DaffProductTestingDriverModule;
    exports.DaffProductTestingModule = DaffProductTestingModule;
    exports.DaffTestingProductService = DaffTestingProductService;
    exports.MagentoBundledProductFactory = MagentoBundledProductFactory;
    exports.MagentoConfigurableProductFactory = MagentoConfigurableProductFactory;
    exports.MagentoProductFactory = MagentoSimpleProductFactory;
    exports.MagentoSimpleProductFactory = MagentoSimpleProductFactory;
    exports.MockDaffBestSellersFacade = MockDaffBestSellersFacade;
    exports.MockDaffCompositeProductFacade = MockDaffCompositeProductFacade;
    exports.MockDaffConfigurableProductFacade = MockDaffConfigurableProductFacade;
    exports.MockDaffProductFacade = MockDaffProductFacade;
    exports.MockDaffProductGridFacade = MockDaffProductGridFacade;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=daffodil-product-testing.umd.js.map
