(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('faker/locale/en_US'), require('@daffodil/core/testing'), require('@daffodil/driver/magento/testing'), require('@daffodil/cart/driver/magento'), require('@daffodil/product/testing')) :
    typeof define === 'function' && define.amd ? define('@daffodil/cart/driver/magento/testing', ['exports', '@angular/core', 'faker/locale/en_US', '@daffodil/core/testing', '@daffodil/driver/magento/testing', '@daffodil/cart/driver/magento', '@daffodil/product/testing'], factory) :
    (global = global || self, factory((global.daffodil = global.daffodil || {}, global.daffodil.cart = global.daffodil.cart || {}, global.daffodil.cart.driver = global.daffodil.cart.driver || {}, global.daffodil.cart.driver.magento = global.daffodil.cart.driver.magento || {}, global.daffodil.cart.driver.magento.testing = {}), global.ng.core, global.en_US, global.testing, global.testing$1, global.daffodil.cart.driver.magento, global.testing$2));
}(this, function (exports, core, en_US, testing, testing$1, magento, testing$2) { 'use strict';

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
    var MockMagentoCartAddress = /** @class */ (function () {
        function MockMagentoCartAddress() {
            this.__typename = 'BillingCartAddress';
            this.region = {
                __typename: 'CartAddressRegion',
                code: en_US.address.stateAbbr(),
                label: en_US.address.state()
            };
            this.country = {
                __typename: 'CartAddressCountry',
                code: en_US.address.countryCode(),
                label: en_US.address.country()
            };
            this.street = [en_US.address.streetAddress()];
            this.company = en_US.company.companyName();
            this.telephone = en_US.phone.phoneNumber();
            this.postcode = en_US.address.zipCode();
            this.city = en_US.address.city();
            this.firstname = en_US.name.firstName();
            this.lastname = en_US.name.lastName();
            this.email = en_US.internet.email();
        }
        return MockMagentoCartAddress;
    }());
    if (false) {
        /** @type {?} */
        MockMagentoCartAddress.prototype.__typename;
        /** @type {?} */
        MockMagentoCartAddress.prototype.region;
        /** @type {?} */
        MockMagentoCartAddress.prototype.country;
        /** @type {?} */
        MockMagentoCartAddress.prototype.street;
        /** @type {?} */
        MockMagentoCartAddress.prototype.company;
        /** @type {?} */
        MockMagentoCartAddress.prototype.telephone;
        /** @type {?} */
        MockMagentoCartAddress.prototype.postcode;
        /** @type {?} */
        MockMagentoCartAddress.prototype.city;
        /** @type {?} */
        MockMagentoCartAddress.prototype.firstname;
        /** @type {?} */
        MockMagentoCartAddress.prototype.lastname;
        /** @type {?} */
        MockMagentoCartAddress.prototype.email;
    }
    var MagentoCartAddressFactory = /** @class */ (function (_super) {
        __extends(MagentoCartAddressFactory, _super);
        function MagentoCartAddressFactory() {
            return _super.call(this, MockMagentoCartAddress) || this;
        }
        MagentoCartAddressFactory.decorators = [
            { type: core.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */
        MagentoCartAddressFactory.ctorParameters = function () { return []; };
        /** @nocollapse */ MagentoCartAddressFactory.ngInjectableDef = core.ɵɵdefineInjectable({ factory: function MagentoCartAddressFactory_Factory() { return new MagentoCartAddressFactory(); }, token: MagentoCartAddressFactory, providedIn: "root" });
        return MagentoCartAddressFactory;
    }(testing.DaffModelFactory));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var MockMagentoCartAddressInput = /** @class */ (function () {
        function MockMagentoCartAddressInput() {
            this.region = en_US.address.stateAbbr();
            this.country_code = en_US.address.countryCode();
            this.street = [en_US.address.streetAddress()];
            this.company = en_US.company.companyName();
            this.telephone = en_US.phone.phoneNumber();
            this.postcode = en_US.address.zipCode();
            this.city = en_US.address.city();
            this.firstname = en_US.name.firstName();
            this.lastname = en_US.name.lastName();
            this.save_in_address_book = en_US.random.boolean();
        }
        return MockMagentoCartAddressInput;
    }());
    if (false) {
        /** @type {?} */
        MockMagentoCartAddressInput.prototype.region;
        /** @type {?} */
        MockMagentoCartAddressInput.prototype.country_code;
        /** @type {?} */
        MockMagentoCartAddressInput.prototype.street;
        /** @type {?} */
        MockMagentoCartAddressInput.prototype.company;
        /** @type {?} */
        MockMagentoCartAddressInput.prototype.telephone;
        /** @type {?} */
        MockMagentoCartAddressInput.prototype.postcode;
        /** @type {?} */
        MockMagentoCartAddressInput.prototype.city;
        /** @type {?} */
        MockMagentoCartAddressInput.prototype.firstname;
        /** @type {?} */
        MockMagentoCartAddressInput.prototype.lastname;
        /** @type {?} */
        MockMagentoCartAddressInput.prototype.save_in_address_book;
    }
    var MagentoCartAddressInputFactory = /** @class */ (function (_super) {
        __extends(MagentoCartAddressInputFactory, _super);
        function MagentoCartAddressInputFactory() {
            return _super.call(this, MockMagentoCartAddressInput) || this;
        }
        MagentoCartAddressInputFactory.decorators = [
            { type: core.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */
        MagentoCartAddressInputFactory.ctorParameters = function () { return []; };
        /** @nocollapse */ MagentoCartAddressInputFactory.ngInjectableDef = core.ɵɵdefineInjectable({ factory: function MagentoCartAddressInputFactory_Factory() { return new MagentoCartAddressInputFactory(); }, token: MagentoCartAddressInputFactory, providedIn: "root" });
        return MagentoCartAddressInputFactory;
    }(testing.DaffModelFactory));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var MockMagentoCartCoupon = /** @class */ (function () {
        function MockMagentoCartCoupon() {
            this.code = en_US.random.alphaNumeric(20);
        }
        return MockMagentoCartCoupon;
    }());
    if (false) {
        /** @type {?} */
        MockMagentoCartCoupon.prototype.code;
    }
    ;
    var MagentoCartCouponFactory = /** @class */ (function (_super) {
        __extends(MagentoCartCouponFactory, _super);
        function MagentoCartCouponFactory() {
            return _super.call(this, MockMagentoCartCoupon) || this;
        }
        MagentoCartCouponFactory.decorators = [
            { type: core.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */
        MagentoCartCouponFactory.ctorParameters = function () { return []; };
        /** @nocollapse */ MagentoCartCouponFactory.ngInjectableDef = core.ɵɵdefineInjectable({ factory: function MagentoCartCouponFactory_Factory() { return new MagentoCartCouponFactory(); }, token: MagentoCartCouponFactory, providedIn: "root" });
        return MagentoCartCouponFactory;
    }(testing.DaffModelFactory));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var MockMagentoCartPaymentMethod = /** @class */ (function () {
        function MockMagentoCartPaymentMethod() {
            this.code = en_US.random.word();
            this.title = en_US.random.word();
            this.purchase_order_number = en_US.random.word();
        }
        return MockMagentoCartPaymentMethod;
    }());
    if (false) {
        /** @type {?} */
        MockMagentoCartPaymentMethod.prototype.code;
        /** @type {?} */
        MockMagentoCartPaymentMethod.prototype.title;
        /** @type {?} */
        MockMagentoCartPaymentMethod.prototype.purchase_order_number;
    }
    var MagentoCartPaymentMethodFactory = /** @class */ (function (_super) {
        __extends(MagentoCartPaymentMethodFactory, _super);
        function MagentoCartPaymentMethodFactory() {
            return _super.call(this, MockMagentoCartPaymentMethod) || this;
        }
        MagentoCartPaymentMethodFactory.decorators = [
            { type: core.Injectable, args: [{
                        providedIn: 'root',
                    },] }
        ];
        /** @nocollapse */
        MagentoCartPaymentMethodFactory.ctorParameters = function () { return []; };
        /** @nocollapse */ MagentoCartPaymentMethodFactory.ngInjectableDef = core.ɵɵdefineInjectable({ factory: function MagentoCartPaymentMethodFactory_Factory() { return new MagentoCartPaymentMethodFactory(); }, token: MagentoCartPaymentMethodFactory, providedIn: "root" });
        return MagentoCartPaymentMethodFactory;
    }(testing.DaffModelFactory));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var MockCartShippingMethod = /** @class */ (function () {
        function MockCartShippingMethod() {
            this.carrier_code = en_US.random.word();
            this.carrier_title = en_US.random.words(2);
            this.method_title = en_US.random.words(2);
            this.method_code = en_US.random.word();
            this.amount = this.money();
        }
        /**
         * @private
         * @return {?}
         */
        MockCartShippingMethod.prototype.money = /**
         * @private
         * @return {?}
         */
        function () {
            return (new testing$1.MagentoMoneyFactory()).create();
        };
        return MockCartShippingMethod;
    }());
    if (false) {
        /** @type {?} */
        MockCartShippingMethod.prototype.carrier_code;
        /** @type {?} */
        MockCartShippingMethod.prototype.carrier_title;
        /** @type {?} */
        MockCartShippingMethod.prototype.method_title;
        /** @type {?} */
        MockCartShippingMethod.prototype.method_code;
        /** @type {?} */
        MockCartShippingMethod.prototype.amount;
    }
    var MagentoCartShippingMethodFactory = /** @class */ (function (_super) {
        __extends(MagentoCartShippingMethodFactory, _super);
        function MagentoCartShippingMethodFactory() {
            return _super.call(this, MockCartShippingMethod) || this;
        }
        MagentoCartShippingMethodFactory.decorators = [
            { type: core.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */
        MagentoCartShippingMethodFactory.ctorParameters = function () { return []; };
        /** @nocollapse */ MagentoCartShippingMethodFactory.ngInjectableDef = core.ɵɵdefineInjectable({ factory: function MagentoCartShippingMethodFactory_Factory() { return new MagentoCartShippingMethodFactory(); }, token: MagentoCartShippingMethodFactory, providedIn: "root" });
        return MagentoCartShippingMethodFactory;
    }(testing.DaffModelFactory));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var MockMagentoCart = /** @class */ (function () {
        function MockMagentoCart() {
            this.__typename = 'Cart';
            this.id = en_US.random.number({ min: 1, max: 1000 });
            this.prices = {
                __typename: 'CartPrices',
                subtotal_excluding_tax: this.money(),
                grand_total: this.money(),
                subtotal_including_tax: this.money(),
                subtotal_with_discount_excluding_tax: this.money(),
                applied_taxes: [{
                        __typename: 'AppliedTax',
                        amount: this.money(),
                        label: 'tax'
                    }],
                discounts: [{
                        __typename: 'Discount',
                        amount: this.money(),
                        label: 'discount'
                    }]
            };
            this.applied_coupons = [];
            this.items = [];
            this.billing_address = null;
            this.shipping_addresses = [];
            this.available_payment_methods = [];
            this.selected_payment_method = null;
            this.email = en_US.internet.email();
        }
        /**
         * @private
         * @return {?}
         */
        MockMagentoCart.prototype.money = /**
         * @private
         * @return {?}
         */
        function () {
            return (new testing$1.MagentoMoneyFactory()).create();
        };
        return MockMagentoCart;
    }());
    if (false) {
        /** @type {?} */
        MockMagentoCart.prototype.__typename;
        /** @type {?} */
        MockMagentoCart.prototype.id;
        /** @type {?} */
        MockMagentoCart.prototype.prices;
        /** @type {?} */
        MockMagentoCart.prototype.applied_coupons;
        /** @type {?} */
        MockMagentoCart.prototype.items;
        /** @type {?} */
        MockMagentoCart.prototype.billing_address;
        /** @type {?} */
        MockMagentoCart.prototype.shipping_addresses;
        /** @type {?} */
        MockMagentoCart.prototype.available_payment_methods;
        /** @type {?} */
        MockMagentoCart.prototype.selected_payment_method;
        /** @type {?} */
        MockMagentoCart.prototype.email;
    }
    ;
    var MagentoCartFactory = /** @class */ (function (_super) {
        __extends(MagentoCartFactory, _super);
        function MagentoCartFactory() {
            return _super.call(this, MockMagentoCart) || this;
        }
        MagentoCartFactory.decorators = [
            { type: core.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */
        MagentoCartFactory.ctorParameters = function () { return []; };
        /** @nocollapse */ MagentoCartFactory.ngInjectableDef = core.ɵɵdefineInjectable({ factory: function MagentoCartFactory_Factory() { return new MagentoCartFactory(); }, token: MagentoCartFactory, providedIn: "root" });
        return MagentoCartFactory;
    }(testing.DaffModelFactory));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var MockMagentoCartItem = /** @class */ (function () {
        function MockMagentoCartItem() {
            this.__typename = magento.MagentoCartItemTypeEnum.Simple;
            this.id = en_US.random.number({ min: 1, max: 1000 });
            this.prices = {
                __typename: 'CartItemPrices',
                price: this.money(),
                row_total: this.money(),
                row_total_including_tax: this.money(),
                total_item_discount: this.money()
            };
            this.product = this.createProduct();
            this.quantity = en_US.random.number({ min: 1, max: 20 });
        }
        /**
         * @private
         * @return {?}
         */
        MockMagentoCartItem.prototype.createProduct = /**
         * @private
         * @return {?}
         */
        function () {
            return (new testing$2.MagentoProductFactory()).create();
        };
        /**
         * @private
         * @return {?}
         */
        MockMagentoCartItem.prototype.money = /**
         * @private
         * @return {?}
         */
        function () {
            return (new testing$1.MagentoMoneyFactory()).create();
        };
        return MockMagentoCartItem;
    }());
    if (false) {
        /** @type {?} */
        MockMagentoCartItem.prototype.__typename;
        /** @type {?} */
        MockMagentoCartItem.prototype.id;
        /** @type {?} */
        MockMagentoCartItem.prototype.prices;
        /** @type {?} */
        MockMagentoCartItem.prototype.product;
        /** @type {?} */
        MockMagentoCartItem.prototype.quantity;
    }
    var MagentoCartItemFactory = /** @class */ (function (_super) {
        __extends(MagentoCartItemFactory, _super);
        function MagentoCartItemFactory() {
            return _super.call(this, MockMagentoCartItem) || this;
        }
        MagentoCartItemFactory.decorators = [
            { type: core.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */
        MagentoCartItemFactory.ctorParameters = function () { return []; };
        /** @nocollapse */ MagentoCartItemFactory.ngInjectableDef = core.ɵɵdefineInjectable({ factory: function MagentoCartItemFactory_Factory() { return new MagentoCartItemFactory(); }, token: MagentoCartItemFactory, providedIn: "root" });
        return MagentoCartItemFactory;
    }(testing.DaffModelFactory));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var MockMagentoBundleCartItem = /** @class */ (function (_super) {
        __extends(MockMagentoBundleCartItem, _super);
        function MockMagentoBundleCartItem() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.__typename = magento.MagentoCartItemTypeEnum.Bundle;
            _this.bundle_options = [
                {
                    id: en_US.random.number({ min: 1, max: 1000 }),
                    type: 'radio',
                    label: en_US.random.word(),
                    price: en_US.random.number({ min: 1, max: 99 }),
                    quantity: 1,
                    values: [{
                            id: en_US.random.number({ min: 1, max: 1000 }),
                            label: en_US.random.word(),
                            price: en_US.random.number({ min: 1, max: 99 }),
                            quantity: 1
                        }]
                }
            ];
            return _this;
        }
        return MockMagentoBundleCartItem;
    }(MockMagentoCartItem));
    if (false) {
        /** @type {?} */
        MockMagentoBundleCartItem.prototype.__typename;
        /** @type {?} */
        MockMagentoBundleCartItem.prototype.bundle_options;
    }
    var MagentoBundleCartItemFactory = /** @class */ (function (_super) {
        __extends(MagentoBundleCartItemFactory, _super);
        function MagentoBundleCartItemFactory() {
            return _super.call(this, MockMagentoBundleCartItem) || this;
        }
        MagentoBundleCartItemFactory.decorators = [
            { type: core.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */
        MagentoBundleCartItemFactory.ctorParameters = function () { return []; };
        /** @nocollapse */ MagentoBundleCartItemFactory.ngInjectableDef = core.ɵɵdefineInjectable({ factory: function MagentoBundleCartItemFactory_Factory() { return new MagentoBundleCartItemFactory(); }, token: MagentoBundleCartItemFactory, providedIn: "root" });
        return MagentoBundleCartItemFactory;
    }(testing.DaffModelFactory));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var MockMagentoConfigurableCartItem = /** @class */ (function (_super) {
        __extends(MockMagentoConfigurableCartItem, _super);
        function MockMagentoConfigurableCartItem() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.__typename = magento.MagentoCartItemTypeEnum.Configurable;
            _this.configurable_options = [
                {
                    option_label: 'Color',
                    value_label: 'Red'
                },
                {
                    option_label: 'Size',
                    value_label: 'M'
                },
            ];
            return _this;
        }
        return MockMagentoConfigurableCartItem;
    }(MockMagentoCartItem));
    if (false) {
        /** @type {?} */
        MockMagentoConfigurableCartItem.prototype.__typename;
        /** @type {?} */
        MockMagentoConfigurableCartItem.prototype.configurable_options;
    }
    var MagentoConfigurableCartItemFactory = /** @class */ (function (_super) {
        __extends(MagentoConfigurableCartItemFactory, _super);
        function MagentoConfigurableCartItemFactory() {
            return _super.call(this, MockMagentoConfigurableCartItem) || this;
        }
        MagentoConfigurableCartItemFactory.decorators = [
            { type: core.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */
        MagentoConfigurableCartItemFactory.ctorParameters = function () { return []; };
        /** @nocollapse */ MagentoConfigurableCartItemFactory.ngInjectableDef = core.ɵɵdefineInjectable({ factory: function MagentoConfigurableCartItemFactory_Factory() { return new MagentoConfigurableCartItemFactory(); }, token: MagentoConfigurableCartItemFactory, providedIn: "root" });
        return MagentoConfigurableCartItemFactory;
    }(testing.DaffModelFactory));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var MockMagentoShippingAddress = /** @class */ (function (_super) {
        __extends(MockMagentoShippingAddress, _super);
        function MockMagentoShippingAddress() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.__typename = 'ShippingCartAddress';
            _this.available_shipping_methods = [];
            _this.selected_shipping_method = null;
            return _this;
        }
        return MockMagentoShippingAddress;
    }(MockMagentoCartAddress));
    if (false) {
        /** @type {?} */
        MockMagentoShippingAddress.prototype.__typename;
        /** @type {?} */
        MockMagentoShippingAddress.prototype.available_shipping_methods;
        /** @type {?} */
        MockMagentoShippingAddress.prototype.selected_shipping_method;
    }
    var MagentoShippingAddressFactory = /** @class */ (function (_super) {
        __extends(MagentoShippingAddressFactory, _super);
        function MagentoShippingAddressFactory() {
            return _super.call(this, MockMagentoShippingAddress) || this;
        }
        MagentoShippingAddressFactory.decorators = [
            { type: core.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */
        MagentoShippingAddressFactory.ctorParameters = function () { return []; };
        /** @nocollapse */ MagentoShippingAddressFactory.ngInjectableDef = core.ɵɵdefineInjectable({ factory: function MagentoShippingAddressFactory_Factory() { return new MagentoShippingAddressFactory(); }, token: MagentoShippingAddressFactory, providedIn: "root" });
        return MagentoShippingAddressFactory;
    }(testing.DaffModelFactory));

    exports.MagentoBundleCartItemFactory = MagentoBundleCartItemFactory;
    exports.MagentoCartAddressFactory = MagentoCartAddressFactory;
    exports.MagentoCartAddressInputFactory = MagentoCartAddressInputFactory;
    exports.MagentoCartCouponFactory = MagentoCartCouponFactory;
    exports.MagentoCartFactory = MagentoCartFactory;
    exports.MagentoCartItemFactory = MagentoCartItemFactory;
    exports.MagentoCartPaymentMethodFactory = MagentoCartPaymentMethodFactory;
    exports.MagentoCartShippingMethodFactory = MagentoCartShippingMethodFactory;
    exports.MagentoConfigurableCartItemFactory = MagentoConfigurableCartItemFactory;
    exports.MagentoShippingAddressFactory = MagentoShippingAddressFactory;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=daffodil-cart-driver-magento-testing.umd.js.map
