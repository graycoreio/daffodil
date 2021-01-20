(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('faker/locale/en_US'), require('@daffodil/cart'), require('@daffodil/core/testing'), require('@daffodil/product/testing')) :
    typeof define === 'function' && define.amd ? define('@daffodil/cart/testing', ['exports', '@angular/core', 'faker/locale/en_US', '@daffodil/cart', '@daffodil/core/testing', '@daffodil/product/testing'], factory) :
    (global = global || self, factory((global.daffodil = global.daffodil || {}, global.daffodil.cart = global.daffodil.cart || {}, global.daffodil.cart.testing = {}), global.ng.core, global.en_US, global.daffodil.cart, global.testing, global.testing$1));
}(this, function (exports, core, en_US, cart, testing, testing$1) { 'use strict';

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
    var MockCart = /** @class */ (function () {
        function MockCart() {
            this.id = en_US.random.number({ min: 1, max: 1000 });
            this.subtotal = 10000;
            this.grand_total = 15000;
            this.coupons = [];
            this.items = [];
            this.billing_address = null;
            this.shipping_address = null;
            this.shipping_information = null;
            this.totals = [
                {
                    name: cart.DaffCartTotalTypeEnum.grandTotal,
                    value: 1050,
                    label: 'Grand Total'
                },
                {
                    name: cart.DaffCartTotalTypeEnum.subtotalExcludingTax,
                    value: 900,
                    label: 'Subtotal Excluding Tax'
                },
                {
                    name: cart.DaffCartTotalTypeEnum.subtotalIncludingTax,
                    value: 950,
                    label: 'Subtotal Including Tax'
                },
                {
                    name: cart.DaffCartTotalTypeEnum.subtotalWithDiscountExcludingTax,
                    value: 850,
                    label: ''
                },
                {
                    name: cart.DaffCartTotalTypeEnum.subtotalWithDiscountIncludingTax,
                    value: 900,
                    label: ''
                },
                {
                    name: cart.DaffCartTotalTypeEnum.tax,
                    value: 50,
                    label: ''
                },
                {
                    name: cart.DaffCartTotalTypeEnum.discount,
                    value: 50,
                    label: ''
                },
                {
                    name: cart.DaffCartTotalTypeEnum.shipping,
                    value: 50,
                    label: 'Shipping'
                }
            ];
            this.payment = null;
            this.available_shipping_methods = [];
            this.available_payment_methods = [];
            this.extra_attributes = {};
        }
        return MockCart;
    }());
    if (false) {
        /** @type {?} */
        MockCart.prototype.id;
        /** @type {?} */
        MockCart.prototype.subtotal;
        /** @type {?} */
        MockCart.prototype.grand_total;
        /** @type {?} */
        MockCart.prototype.coupons;
        /** @type {?} */
        MockCart.prototype.items;
        /** @type {?} */
        MockCart.prototype.billing_address;
        /** @type {?} */
        MockCart.prototype.shipping_address;
        /** @type {?} */
        MockCart.prototype.shipping_information;
        /** @type {?} */
        MockCart.prototype.totals;
        /** @type {?} */
        MockCart.prototype.payment;
        /** @type {?} */
        MockCart.prototype.available_shipping_methods;
        /** @type {?} */
        MockCart.prototype.available_payment_methods;
        /** @type {?} */
        MockCart.prototype.extra_attributes;
    }
    ;
    var DaffCartFactory = /** @class */ (function (_super) {
        __extends(DaffCartFactory, _super);
        function DaffCartFactory() {
            return _super.call(this, MockCart) || this;
        }
        DaffCartFactory.decorators = [
            { type: core.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */
        DaffCartFactory.ctorParameters = function () { return []; };
        /** @nocollapse */ DaffCartFactory.ngInjectableDef = core.ɵɵdefineInjectable({ factory: function DaffCartFactory_Factory() { return new DaffCartFactory(); }, token: DaffCartFactory, providedIn: "root" });
        return DaffCartFactory;
    }(testing.DaffModelFactory));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var DaffMockCartItem = /** @class */ (function () {
        function DaffMockCartItem() {
            this.item_id = en_US.random.number({ min: 1, max: 1000 });
            this.type = cart.DaffCartItemInputType.Simple;
            this.product_id = String(en_US.random.number({ min: 1, max: 1000 }));
            this.parent_item_id = en_US.random.number({ min: 1, max: 1000 });
            this.image = (/** @type {?} */ (new testing$1.DaffProductImageFactory().create()));
            this.sku = 'sku';
            this.name = 'Product Name';
            this.qty = en_US.random.number({ min: 1, max: 100 });
            this.price = en_US.random.number({ min: 1, max: 1500 });
            this.row_total = this.qty * this.price;
            this.total_discount = en_US.random.number({ min: 0, max: this.price - 1 });
            this.in_stock = true;
        }
        return DaffMockCartItem;
    }());
    if (false) {
        /** @type {?} */
        DaffMockCartItem.prototype.item_id;
        /** @type {?} */
        DaffMockCartItem.prototype.type;
        /** @type {?} */
        DaffMockCartItem.prototype.product_id;
        /** @type {?} */
        DaffMockCartItem.prototype.parent_item_id;
        /** @type {?} */
        DaffMockCartItem.prototype.image;
        /** @type {?} */
        DaffMockCartItem.prototype.sku;
        /** @type {?} */
        DaffMockCartItem.prototype.name;
        /** @type {?} */
        DaffMockCartItem.prototype.qty;
        /** @type {?} */
        DaffMockCartItem.prototype.price;
        /** @type {?} */
        DaffMockCartItem.prototype.row_total;
        /** @type {?} */
        DaffMockCartItem.prototype.total_discount;
        /** @type {?} */
        DaffMockCartItem.prototype.in_stock;
    }
    var DaffCartItemFactory = /** @class */ (function (_super) {
        __extends(DaffCartItemFactory, _super);
        function DaffCartItemFactory() {
            return _super.call(this, DaffMockCartItem) || this;
        }
        DaffCartItemFactory.decorators = [
            { type: core.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */
        DaffCartItemFactory.ctorParameters = function () { return []; };
        /** @nocollapse */ DaffCartItemFactory.ngInjectableDef = core.ɵɵdefineInjectable({ factory: function DaffCartItemFactory_Factory() { return new DaffCartItemFactory(); }, token: DaffCartItemFactory, providedIn: "root" });
        return DaffCartItemFactory;
    }(testing.DaffModelFactory));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var DaffMockConfigurableCartItem = /** @class */ (function (_super) {
        __extends(DaffMockConfigurableCartItem, _super);
        function DaffMockConfigurableCartItem() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.type = cart.DaffCartItemInputType.Configurable;
            _this.attributes = [
                {
                    attribute_label: 'Color',
                    value_label: 'Red'
                },
                {
                    attribute_label: 'Size',
                    value_label: 'M'
                }
            ];
            return _this;
        }
        return DaffMockConfigurableCartItem;
    }(DaffMockCartItem));
    if (false) {
        /** @type {?} */
        DaffMockConfigurableCartItem.prototype.type;
        /** @type {?} */
        DaffMockConfigurableCartItem.prototype.attributes;
    }
    var DaffConfigurableCartItemFactory = /** @class */ (function (_super) {
        __extends(DaffConfigurableCartItemFactory, _super);
        function DaffConfigurableCartItemFactory() {
            return _super.call(this, DaffMockConfigurableCartItem) || this;
        }
        DaffConfigurableCartItemFactory.decorators = [
            { type: core.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */
        DaffConfigurableCartItemFactory.ctorParameters = function () { return []; };
        /** @nocollapse */ DaffConfigurableCartItemFactory.ngInjectableDef = core.ɵɵdefineInjectable({ factory: function DaffConfigurableCartItemFactory_Factory() { return new DaffConfigurableCartItemFactory(); }, token: DaffConfigurableCartItemFactory, providedIn: "root" });
        return DaffConfigurableCartItemFactory;
    }(testing.DaffModelFactory));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var DaffMockCompositeCartItem = /** @class */ (function (_super) {
        __extends(DaffMockCompositeCartItem, _super);
        function DaffMockCompositeCartItem() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.type = cart.DaffCartItemInputType.Composite;
            _this.options = [
                {
                    option_id: en_US.random.number(1000).toString(),
                    option_label: en_US.random.word(),
                    value_label: en_US.random.word()
                },
                {
                    option_id: en_US.random.number(1000).toString(),
                    option_label: en_US.random.word(),
                    value_label: en_US.random.word()
                }
            ];
            return _this;
        }
        return DaffMockCompositeCartItem;
    }(DaffMockCartItem));
    if (false) {
        /** @type {?} */
        DaffMockCompositeCartItem.prototype.type;
        /** @type {?} */
        DaffMockCompositeCartItem.prototype.options;
    }
    var DaffCompositeCartItemFactory = /** @class */ (function (_super) {
        __extends(DaffCompositeCartItemFactory, _super);
        function DaffCompositeCartItemFactory() {
            return _super.call(this, DaffMockCompositeCartItem) || this;
        }
        DaffCompositeCartItemFactory.decorators = [
            { type: core.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */
        DaffCompositeCartItemFactory.ctorParameters = function () { return []; };
        /** @nocollapse */ DaffCompositeCartItemFactory.ngInjectableDef = core.ɵɵdefineInjectable({ factory: function DaffCompositeCartItemFactory_Factory() { return new DaffCompositeCartItemFactory(); }, token: DaffCompositeCartItemFactory, providedIn: "root" });
        return DaffCompositeCartItemFactory;
    }(testing.DaffModelFactory));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var MockCartAddress = /** @class */ (function () {
        function MockCartAddress() {
            this.address_id = en_US.random.number({ min: 1, max: 1000 });
            this.address_type = 'apartment';
            this.email = 'email@email.com';
            this.prefix = 'prefix';
            this.firstname = 'first';
            this.middlename = 'middle';
            this.lastname = 'last';
            this.suffix = 'suffix';
            this.company = 'company';
            this.street = 'street';
            this.city = 'city';
            this.state = 'state';
            this.region = 'region';
            this.postcode = 'postcode';
            this.country_id = 'ISO';
            this.telephone = '+1 (123)-123-1234';
        }
        return MockCartAddress;
    }());
    if (false) {
        /** @type {?} */
        MockCartAddress.prototype.address_id;
        /** @type {?} */
        MockCartAddress.prototype.address_type;
        /** @type {?} */
        MockCartAddress.prototype.email;
        /** @type {?} */
        MockCartAddress.prototype.prefix;
        /** @type {?} */
        MockCartAddress.prototype.firstname;
        /** @type {?} */
        MockCartAddress.prototype.middlename;
        /** @type {?} */
        MockCartAddress.prototype.lastname;
        /** @type {?} */
        MockCartAddress.prototype.suffix;
        /** @type {?} */
        MockCartAddress.prototype.company;
        /** @type {?} */
        MockCartAddress.prototype.street;
        /** @type {?} */
        MockCartAddress.prototype.city;
        /** @type {?} */
        MockCartAddress.prototype.state;
        /** @type {?} */
        MockCartAddress.prototype.region;
        /** @type {?} */
        MockCartAddress.prototype.postcode;
        /** @type {?} */
        MockCartAddress.prototype.country_id;
        /** @type {?} */
        MockCartAddress.prototype.telephone;
    }
    var DaffCartAddressFactory = /** @class */ (function (_super) {
        __extends(DaffCartAddressFactory, _super);
        function DaffCartAddressFactory() {
            return _super.call(this, MockCartAddress) || this;
        }
        DaffCartAddressFactory.decorators = [
            { type: core.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */
        DaffCartAddressFactory.ctorParameters = function () { return []; };
        /** @nocollapse */ DaffCartAddressFactory.ngInjectableDef = core.ɵɵdefineInjectable({ factory: function DaffCartAddressFactory_Factory() { return new DaffCartAddressFactory(); }, token: DaffCartAddressFactory, providedIn: "root" });
        return DaffCartAddressFactory;
    }(testing.DaffModelFactory));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var MockCartPayment = /** @class */ (function () {
        function MockCartPayment() {
            this.method = 'credit-card';
        }
        return MockCartPayment;
    }());
    if (false) {
        /** @type {?} */
        MockCartPayment.prototype.method;
    }
    var DaffCartPaymentFactory = /** @class */ (function (_super) {
        __extends(DaffCartPaymentFactory, _super);
        function DaffCartPaymentFactory() {
            return _super.call(this, MockCartPayment) || this;
        }
        DaffCartPaymentFactory.decorators = [
            { type: core.Injectable, args: [{
                        providedIn: 'root',
                    },] }
        ];
        /** @nocollapse */
        DaffCartPaymentFactory.ctorParameters = function () { return []; };
        /** @nocollapse */ DaffCartPaymentFactory.ngInjectableDef = core.ɵɵdefineInjectable({ factory: function DaffCartPaymentFactory_Factory() { return new DaffCartPaymentFactory(); }, token: DaffCartPaymentFactory, providedIn: "root" });
        return DaffCartPaymentFactory;
    }(testing.DaffModelFactory));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var MockCartShippingRate = /** @class */ (function () {
        function MockCartShippingRate() {
            this.id = en_US.random.number({ min: 1, max: 1000 });
            this.carrier = 'Birds Inc.';
            this.carrier_title = 'laden';
            this.method_code = en_US.random.word();
            this.method_title = 'swallow';
            this.method_description = 'efficient';
            this.price = en_US.random.number({ min: 1, max: 1500 });
        }
        return MockCartShippingRate;
    }());
    if (false) {
        /** @type {?} */
        MockCartShippingRate.prototype.id;
        /** @type {?} */
        MockCartShippingRate.prototype.carrier;
        /** @type {?} */
        MockCartShippingRate.prototype.carrier_title;
        /** @type {?} */
        MockCartShippingRate.prototype.method_code;
        /** @type {?} */
        MockCartShippingRate.prototype.method_title;
        /** @type {?} */
        MockCartShippingRate.prototype.method_description;
        /** @type {?} */
        MockCartShippingRate.prototype.price;
    }
    var DaffCartShippingRateFactory = /** @class */ (function (_super) {
        __extends(DaffCartShippingRateFactory, _super);
        function DaffCartShippingRateFactory() {
            return _super.call(this, MockCartShippingRate) || this;
        }
        DaffCartShippingRateFactory.decorators = [
            { type: core.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */
        DaffCartShippingRateFactory.ctorParameters = function () { return []; };
        /** @nocollapse */ DaffCartShippingRateFactory.ngInjectableDef = core.ɵɵdefineInjectable({ factory: function DaffCartShippingRateFactory_Factory() { return new DaffCartShippingRateFactory(); }, token: DaffCartShippingRateFactory, providedIn: "root" });
        return DaffCartShippingRateFactory;
    }(testing.DaffModelFactory));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var MockDaffCartCoupon = /** @class */ (function () {
        function MockDaffCartCoupon() {
            this.coupon_id = en_US.random.number({ min: 1, max: 1000 });
            this.code = en_US.random.alphaNumeric(20);
            this.description = en_US.random.words(5);
        }
        return MockDaffCartCoupon;
    }());
    if (false) {
        /** @type {?} */
        MockDaffCartCoupon.prototype.coupon_id;
        /** @type {?} */
        MockDaffCartCoupon.prototype.code;
        /** @type {?} */
        MockDaffCartCoupon.prototype.description;
    }
    ;
    var DaffCartCouponFactory = /** @class */ (function (_super) {
        __extends(DaffCartCouponFactory, _super);
        function DaffCartCouponFactory() {
            return _super.call(this, MockDaffCartCoupon) || this;
        }
        DaffCartCouponFactory.decorators = [
            { type: core.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */
        DaffCartCouponFactory.ctorParameters = function () { return []; };
        /** @nocollapse */ DaffCartCouponFactory.ngInjectableDef = core.ɵɵdefineInjectable({ factory: function DaffCartCouponFactory_Factory() { return new DaffCartCouponFactory(); }, token: DaffCartCouponFactory, providedIn: "root" });
        return DaffCartCouponFactory;
    }(testing.DaffModelFactory));

    exports.DaffCartAddressFactory = DaffCartAddressFactory;
    exports.DaffCartCouponFactory = DaffCartCouponFactory;
    exports.DaffCartFactory = DaffCartFactory;
    exports.DaffCartItemFactory = DaffCartItemFactory;
    exports.DaffCartPaymentFactory = DaffCartPaymentFactory;
    exports.DaffCartShippingRateFactory = DaffCartShippingRateFactory;
    exports.DaffCompositeCartItemFactory = DaffCompositeCartItemFactory;
    exports.DaffConfigurableCartItemFactory = DaffConfigurableCartItemFactory;
    exports.DaffMockCartItem = DaffMockCartItem;
    exports.DaffMockCompositeCartItem = DaffMockCompositeCartItem;
    exports.DaffMockConfigurableCartItem = DaffMockConfigurableCartItem;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=daffodil-cart-testing.umd.js.map
