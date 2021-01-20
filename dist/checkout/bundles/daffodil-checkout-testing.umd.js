(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('faker/locale/en_US'), require('@daffodil/core/testing'), require('rxjs'), require('@angular/common/http'), require('@angular/common'), require('@daffodil/checkout'), require('angular-in-memory-web-api'), require('@daffodil/product/testing')) :
    typeof define === 'function' && define.amd ? define('@daffodil/checkout/testing', ['exports', '@angular/core', 'faker/locale/en_US', '@daffodil/core/testing', 'rxjs', '@angular/common/http', '@angular/common', '@daffodil/checkout', 'angular-in-memory-web-api', '@daffodil/product/testing'], factory) :
    (global = global || self, factory((global.daffodil = global.daffodil || {}, global.daffodil.checkout = global.daffodil.checkout || {}, global.daffodil.checkout.testing = {}), global.ng.core, global.en_US, global.testing, global.rxjs, global.ng.common.http, global.ng.common, global.daffodil.checkout, global.angularInMemoryWebApi, global.testing$1));
}(this, function (exports, core, en_US, testing, rxjs, http, common, checkout, angularInMemoryWebApi, testing$1) { 'use strict';

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
     * @deprecated
     */
    var /**
     * @deprecated
     */
    MockOrderAddress = /** @class */ (function () {
        function MockOrderAddress() {
            this.address_id = en_US.random.number({ min: 1, max: 1000 });
            this.quote_id = en_US.random.number({ min: 1, max: 1000 });
            this.created_at = new Date();
            this.updated_at = new Date();
            this.customer_id = en_US.random.number({ min: 1, max: 1000 });
            this.customer_address_id = en_US.random.number({ min: 1, max: 1000 });
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
            this.region_id = en_US.random.number({ min: 1, max: 1000 });
            this.postcode = 'postcode';
            this.country_id = 'ISO';
            this.telephone = 'telephone';
            this.fax = 'fax';
            this.shipping_method = 'swallow';
            this.shipping_description = 'flight';
            this.shipping_rate = null;
        }
        return MockOrderAddress;
    }());
    if (false) {
        /** @type {?} */
        MockOrderAddress.prototype.address_id;
        /** @type {?} */
        MockOrderAddress.prototype.quote_id;
        /** @type {?} */
        MockOrderAddress.prototype.created_at;
        /** @type {?} */
        MockOrderAddress.prototype.updated_at;
        /** @type {?} */
        MockOrderAddress.prototype.customer_id;
        /** @type {?} */
        MockOrderAddress.prototype.customer_address_id;
        /** @type {?} */
        MockOrderAddress.prototype.address_type;
        /** @type {?} */
        MockOrderAddress.prototype.email;
        /** @type {?} */
        MockOrderAddress.prototype.prefix;
        /** @type {?} */
        MockOrderAddress.prototype.firstname;
        /** @type {?} */
        MockOrderAddress.prototype.middlename;
        /** @type {?} */
        MockOrderAddress.prototype.lastname;
        /** @type {?} */
        MockOrderAddress.prototype.suffix;
        /** @type {?} */
        MockOrderAddress.prototype.company;
        /** @type {?} */
        MockOrderAddress.prototype.street;
        /** @type {?} */
        MockOrderAddress.prototype.city;
        /** @type {?} */
        MockOrderAddress.prototype.state;
        /** @type {?} */
        MockOrderAddress.prototype.region;
        /** @type {?} */
        MockOrderAddress.prototype.region_id;
        /** @type {?} */
        MockOrderAddress.prototype.postcode;
        /** @type {?} */
        MockOrderAddress.prototype.country_id;
        /** @type {?} */
        MockOrderAddress.prototype.telephone;
        /** @type {?} */
        MockOrderAddress.prototype.fax;
        /** @type {?} */
        MockOrderAddress.prototype.shipping_method;
        /** @type {?} */
        MockOrderAddress.prototype.shipping_description;
        /** @type {?} */
        MockOrderAddress.prototype.shipping_rate;
    }
    /**
     * @deprecated
     */
    var DaffOrderAddressFactory = /** @class */ (function (_super) {
        __extends(DaffOrderAddressFactory, _super);
        function DaffOrderAddressFactory() {
            return _super.call(this, MockOrderAddress) || this;
        }
        DaffOrderAddressFactory.decorators = [
            { type: core.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */
        DaffOrderAddressFactory.ctorParameters = function () { return []; };
        /** @nocollapse */ DaffOrderAddressFactory.ngInjectableDef = core.ɵɵdefineInjectable({ factory: function DaffOrderAddressFactory_Factory() { return new DaffOrderAddressFactory(); }, token: DaffOrderAddressFactory, providedIn: "root" });
        return DaffOrderAddressFactory;
    }(testing.DaffModelFactory));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * @deprecated
     */
    var /**
     * @deprecated
     */
    MockOrderItem = /** @class */ (function () {
        function MockOrderItem() {
            this.item_id = en_US.random.number({ min: 1, max: 1000 });
            this.image = null;
            this.quote_id = en_US.random.number({ min: 1, max: 1000 });
            this.created_at = new Date();
            this.updated_at = new Date();
            this.product_id = en_US.random.number({ min: 1, max: 1000 });
            this.parent_item_id = en_US.random.number({ min: 1, max: 1000 });
            this.sku = 'sku';
            this.name = 'Product Name';
            this.description = 'description';
            this.weight = en_US.random.number({ min: 1, max: 1000 });
            this.qty = en_US.random.number({ min: 1, max: 100 });
            this.price = en_US.random.number({ min: 1, max: 1000 });
            this.discount_percent = en_US.random.number({ min: 1, max: 10 });
            this.discount_amount = en_US.random.number({ min: 1, max: 100 });
            this.tax_percent = en_US.random.number({ min: 1, max: 10 });
            this.tax_amount = en_US.random.number({ min: 1, max: 10 });
            this.row_total = en_US.random.number({ min: 1, max: 1000 });
            this.row_total_with_discount = en_US.random.number({ min: 1, max: 1000 });
            this.row_weight = en_US.random.number({ min: 1, max: 100 });
            this.tax_before_discount = en_US.random.number({ min: 1, max: 100 });
        }
        return MockOrderItem;
    }());
    if (false) {
        /** @type {?} */
        MockOrderItem.prototype.item_id;
        /** @type {?} */
        MockOrderItem.prototype.image;
        /** @type {?} */
        MockOrderItem.prototype.quote_id;
        /** @type {?} */
        MockOrderItem.prototype.created_at;
        /** @type {?} */
        MockOrderItem.prototype.updated_at;
        /** @type {?} */
        MockOrderItem.prototype.product_id;
        /** @type {?} */
        MockOrderItem.prototype.parent_item_id;
        /** @type {?} */
        MockOrderItem.prototype.sku;
        /** @type {?} */
        MockOrderItem.prototype.name;
        /** @type {?} */
        MockOrderItem.prototype.description;
        /** @type {?} */
        MockOrderItem.prototype.weight;
        /** @type {?} */
        MockOrderItem.prototype.qty;
        /** @type {?} */
        MockOrderItem.prototype.price;
        /** @type {?} */
        MockOrderItem.prototype.discount_percent;
        /** @type {?} */
        MockOrderItem.prototype.discount_amount;
        /** @type {?} */
        MockOrderItem.prototype.tax_percent;
        /** @type {?} */
        MockOrderItem.prototype.tax_amount;
        /** @type {?} */
        MockOrderItem.prototype.row_total;
        /** @type {?} */
        MockOrderItem.prototype.row_total_with_discount;
        /** @type {?} */
        MockOrderItem.prototype.row_weight;
        /** @type {?} */
        MockOrderItem.prototype.tax_before_discount;
    }
    /**
     * @deprecated
     */
    var DaffOrderItemFactory = /** @class */ (function (_super) {
        __extends(DaffOrderItemFactory, _super);
        function DaffOrderItemFactory() {
            return _super.call(this, MockOrderItem) || this;
        }
        DaffOrderItemFactory.decorators = [
            { type: core.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */
        DaffOrderItemFactory.ctorParameters = function () { return []; };
        /** @nocollapse */ DaffOrderItemFactory.ngInjectableDef = core.ɵɵdefineInjectable({ factory: function DaffOrderItemFactory_Factory() { return new DaffOrderItemFactory(); }, token: DaffOrderItemFactory, providedIn: "root" });
        return DaffOrderItemFactory;
    }(testing.DaffModelFactory));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * @deprecated
     */
    var /**
     * @deprecated
     */
    MockOrderPayment = /** @class */ (function () {
        function MockOrderPayment() {
            this.payment_id = en_US.random.number({ min: 1, max: 1000 });
            this.quote_id = en_US.random.number({ min: 1, max: 1000 });
            this.created_at = new Date();
            this.updated_at = new Date();
            this.method = 'card';
            this.cc_type = 'visa';
            this.cc_number_enc = en_US.random.number({ min: 1000, max: 9999 }).toString();
            this.cc_last4 = en_US.random.number({ min: 1000, max: 9999 }).toString();
            this.cc_cid_enc = en_US.random.number({ min: 1, max: 1000 }).toString();
            this.cc_owner = 'owner';
            this.cc_exp_month = 'month';
            this.cc_exp_year = 'year';
            this.cc_ss_owner = 'owner';
            this.cc_ss_start_month = 'start month';
            this.cc_ss_start_year = 'start year';
            this.po_number = 'po';
            this.cc_ss_issue = 'issue';
        }
        return MockOrderPayment;
    }());
    if (false) {
        /** @type {?} */
        MockOrderPayment.prototype.payment_id;
        /** @type {?} */
        MockOrderPayment.prototype.quote_id;
        /** @type {?} */
        MockOrderPayment.prototype.created_at;
        /** @type {?} */
        MockOrderPayment.prototype.updated_at;
        /** @type {?} */
        MockOrderPayment.prototype.method;
        /** @type {?} */
        MockOrderPayment.prototype.cc_type;
        /** @type {?} */
        MockOrderPayment.prototype.cc_number_enc;
        /** @type {?} */
        MockOrderPayment.prototype.cc_last4;
        /** @type {?} */
        MockOrderPayment.prototype.cc_cid_enc;
        /** @type {?} */
        MockOrderPayment.prototype.cc_owner;
        /** @type {?} */
        MockOrderPayment.prototype.cc_exp_month;
        /** @type {?} */
        MockOrderPayment.prototype.cc_exp_year;
        /** @type {?} */
        MockOrderPayment.prototype.cc_ss_owner;
        /** @type {?} */
        MockOrderPayment.prototype.cc_ss_start_month;
        /** @type {?} */
        MockOrderPayment.prototype.cc_ss_start_year;
        /** @type {?} */
        MockOrderPayment.prototype.po_number;
        /** @type {?} */
        MockOrderPayment.prototype.cc_ss_issue;
    }
    /**
     * @deprecated
     */
    var DaffOrderPaymentFactory = /** @class */ (function (_super) {
        __extends(DaffOrderPaymentFactory, _super);
        function DaffOrderPaymentFactory() {
            return _super.call(this, MockOrderPayment) || this;
        }
        DaffOrderPaymentFactory.decorators = [
            { type: core.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */
        DaffOrderPaymentFactory.ctorParameters = function () { return []; };
        /** @nocollapse */ DaffOrderPaymentFactory.ngInjectableDef = core.ɵɵdefineInjectable({ factory: function DaffOrderPaymentFactory_Factory() { return new DaffOrderPaymentFactory(); }, token: DaffOrderPaymentFactory, providedIn: "root" });
        return DaffOrderPaymentFactory;
    }(testing.DaffModelFactory));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * @deprecated
     */
    var /**
     * @deprecated
     */
    MockOrderShippingRate = /** @class */ (function () {
        function MockOrderShippingRate() {
            this.rate_id = en_US.random.number({ min: 1, max: 1000 });
            this.address_id = en_US.random.number({ min: 1, max: 1000 });
            this.created_at = new Date();
            this.updated_at = new Date();
            this.carrier = 'Birds Inc.';
            this.carrier_title = 'laden';
            this.code = 'code';
            this.method = 'swallow';
            this.method_description = 'efficient';
            this.price = en_US.random.number({ min: 1, max: 1000 });
            this.error_message = 'error message';
            this.method_title = 'laden';
        }
        return MockOrderShippingRate;
    }());
    if (false) {
        /** @type {?} */
        MockOrderShippingRate.prototype.rate_id;
        /** @type {?} */
        MockOrderShippingRate.prototype.address_id;
        /** @type {?} */
        MockOrderShippingRate.prototype.created_at;
        /** @type {?} */
        MockOrderShippingRate.prototype.updated_at;
        /** @type {?} */
        MockOrderShippingRate.prototype.carrier;
        /** @type {?} */
        MockOrderShippingRate.prototype.carrier_title;
        /** @type {?} */
        MockOrderShippingRate.prototype.code;
        /** @type {?} */
        MockOrderShippingRate.prototype.method;
        /** @type {?} */
        MockOrderShippingRate.prototype.method_description;
        /** @type {?} */
        MockOrderShippingRate.prototype.price;
        /** @type {?} */
        MockOrderShippingRate.prototype.error_message;
        /** @type {?} */
        MockOrderShippingRate.prototype.method_title;
    }
    /**
     * @deprecated
     */
    var DaffOrderShippingRateFactory = /** @class */ (function (_super) {
        __extends(DaffOrderShippingRateFactory, _super);
        function DaffOrderShippingRateFactory() {
            return _super.call(this, MockOrderShippingRate) || this;
        }
        DaffOrderShippingRateFactory.decorators = [
            { type: core.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */
        DaffOrderShippingRateFactory.ctorParameters = function () { return []; };
        /** @nocollapse */ DaffOrderShippingRateFactory.ngInjectableDef = core.ɵɵdefineInjectable({ factory: function DaffOrderShippingRateFactory_Factory() { return new DaffOrderShippingRateFactory(); }, token: DaffOrderShippingRateFactory, providedIn: "root" });
        return DaffOrderShippingRateFactory;
    }(testing.DaffModelFactory));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * @deprecated
     */
    var /**
     * @deprecated
     */
    MockOrder = /** @class */ (function () {
        function MockOrder() {
            this.id = en_US.random.number({ min: 1, max: 1000 });
            this.created_at = new Date();
            this.updated_at = new Date();
            this.store_to_base_rate = en_US.random.number({ min: 1, max: 1000 });
            this.grand_total = en_US.random.number({ min: 1, max: 1000 });
            this.checkout_method = 'card';
            this.customer_id = en_US.random.number({ min: 1, max: 1000 });
            this.coupon_code = en_US.random.number({ min: 1, max: 100000 }).toString();
            this.subtotal = en_US.random.number({ min: 1, max: 1000 });
            this.subtotal_with_discount = en_US.random.number({ min: 1, max: 1000 });
            this.items = [];
            this.addresses = [];
            this.payment = null;
        }
        return MockOrder;
    }());
    if (false) {
        /** @type {?} */
        MockOrder.prototype.id;
        /** @type {?} */
        MockOrder.prototype.created_at;
        /** @type {?} */
        MockOrder.prototype.updated_at;
        /** @type {?} */
        MockOrder.prototype.store_to_base_rate;
        /** @type {?} */
        MockOrder.prototype.grand_total;
        /** @type {?} */
        MockOrder.prototype.checkout_method;
        /** @type {?} */
        MockOrder.prototype.customer_id;
        /** @type {?} */
        MockOrder.prototype.coupon_code;
        /** @type {?} */
        MockOrder.prototype.subtotal;
        /** @type {?} */
        MockOrder.prototype.subtotal_with_discount;
        /** @type {?} */
        MockOrder.prototype.items;
        /** @type {?} */
        MockOrder.prototype.addresses;
        /** @type {?} */
        MockOrder.prototype.payment;
    }
    ;
    /**
     * @deprecated
     */
    var DaffOrderFactory = /** @class */ (function (_super) {
        __extends(DaffOrderFactory, _super);
        function DaffOrderFactory() {
            return _super.call(this, MockOrder) || this;
        }
        DaffOrderFactory.decorators = [
            { type: core.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */
        DaffOrderFactory.ctorParameters = function () { return []; };
        /** @nocollapse */ DaffOrderFactory.ngInjectableDef = core.ɵɵdefineInjectable({ factory: function DaffOrderFactory_Factory() { return new DaffOrderFactory(); }, token: DaffOrderFactory, providedIn: "root" });
        return DaffOrderFactory;
    }(testing.DaffModelFactory));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var MockPaymentInfo = /** @class */ (function () {
        function MockPaymentInfo() {
            this.name = 'name';
            this.cardnumber = 1234123412341234;
            this.month = 10;
            this.year = 2021;
            this.securitycode = 123;
        }
        return MockPaymentInfo;
    }());
    if (false) {
        /** @type {?} */
        MockPaymentInfo.prototype.name;
        /** @type {?} */
        MockPaymentInfo.prototype.cardnumber;
        /** @type {?} */
        MockPaymentInfo.prototype.month;
        /** @type {?} */
        MockPaymentInfo.prototype.year;
        /** @type {?} */
        MockPaymentInfo.prototype.securitycode;
    }
    var DaffPaymentFactory = /** @class */ (function (_super) {
        __extends(DaffPaymentFactory, _super);
        function DaffPaymentFactory() {
            return _super.call(this, MockPaymentInfo) || this;
        }
        DaffPaymentFactory.decorators = [
            { type: core.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */
        DaffPaymentFactory.ctorParameters = function () { return []; };
        /** @nocollapse */ DaffPaymentFactory.ngInjectableDef = core.ɵɵdefineInjectable({ factory: function DaffPaymentFactory_Factory() { return new DaffPaymentFactory(); }, token: DaffPaymentFactory, providedIn: "root" });
        return DaffPaymentFactory;
    }(testing.DaffModelFactory));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var MockShippingOption = /** @class */ (function () {
        function MockShippingOption() {
            this.id = en_US.random.number().toString();
            this.text = en_US.company.companyName() + ' ' + en_US.commerce.productAdjective() + ' Shipping';
        }
        return MockShippingOption;
    }());
    if (false) {
        /** @type {?} */
        MockShippingOption.prototype.id;
        /** @type {?} */
        MockShippingOption.prototype.text;
    }
    var DaffShippingOptionFactory = /** @class */ (function (_super) {
        __extends(DaffShippingOptionFactory, _super);
        function DaffShippingOptionFactory() {
            return _super.call(this, MockShippingOption) || this;
        }
        DaffShippingOptionFactory.decorators = [
            { type: core.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */
        DaffShippingOptionFactory.ctorParameters = function () { return []; };
        /** @nocollapse */ DaffShippingOptionFactory.ngInjectableDef = core.ɵɵdefineInjectable({ factory: function DaffShippingOptionFactory_Factory() { return new DaffShippingOptionFactory(); }, token: DaffShippingOptionFactory, providedIn: "root" });
        return DaffShippingOptionFactory;
    }(testing.DaffModelFactory));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var MockShippingRate = /** @class */ (function () {
        function MockShippingRate() {
            this.rate_id = en_US.random.number({ min: 1, max: 1000 });
            this.price = en_US.random.number({ min: 1, max: 1000 });
            this.carrier = 'Birds Inc.';
            this.code = 'code';
            this.method = 'swallow';
            this.method_description = 'efficient';
            this.method_title = 'laden';
        }
        return MockShippingRate;
    }());
    if (false) {
        /** @type {?} */
        MockShippingRate.prototype.rate_id;
        /** @type {?} */
        MockShippingRate.prototype.price;
        /** @type {?} */
        MockShippingRate.prototype.carrier;
        /** @type {?} */
        MockShippingRate.prototype.code;
        /** @type {?} */
        MockShippingRate.prototype.method;
        /** @type {?} */
        MockShippingRate.prototype.method_description;
        /** @type {?} */
        MockShippingRate.prototype.method_title;
    }
    var DaffShippingRateFactory = /** @class */ (function (_super) {
        __extends(DaffShippingRateFactory, _super);
        function DaffShippingRateFactory() {
            return _super.call(this, MockShippingRate) || this;
        }
        DaffShippingRateFactory.decorators = [
            { type: core.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */
        DaffShippingRateFactory.ctorParameters = function () { return []; };
        /** @nocollapse */ DaffShippingRateFactory.ngInjectableDef = core.ɵɵdefineInjectable({ factory: function DaffShippingRateFactory_Factory() { return new DaffShippingRateFactory(); }, token: DaffShippingRateFactory, providedIn: "root" });
        return DaffShippingRateFactory;
    }(testing.DaffModelFactory));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var DaffTestingCheckoutService = /** @class */ (function () {
        function DaffTestingCheckoutService(orderFactory, orderItemFactory) {
            this.orderFactory = orderFactory;
            this.orderItemFactory = orderItemFactory;
        }
        /**
         * @param {?} cartId
         * @return {?}
         */
        DaffTestingCheckoutService.prototype.placeOrder = /**
         * @param {?} cartId
         * @return {?}
         */
        function (cartId) {
            return rxjs.of(this.orderFactory.create({ items: [this.orderItemFactory.createMany(2)] }));
        };
        DaffTestingCheckoutService.decorators = [
            { type: core.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */
        DaffTestingCheckoutService.ctorParameters = function () { return [
            { type: DaffOrderFactory },
            { type: DaffOrderItemFactory }
        ]; };
        /** @nocollapse */ DaffTestingCheckoutService.ngInjectableDef = core.ɵɵdefineInjectable({ factory: function DaffTestingCheckoutService_Factory() { return new DaffTestingCheckoutService(core.ɵɵinject(DaffOrderFactory), core.ɵɵinject(DaffOrderItemFactory)); }, token: DaffTestingCheckoutService, providedIn: "root" });
        return DaffTestingCheckoutService;
    }());
    if (false) {
        /**
         * @type {?}
         * @private
         */
        DaffTestingCheckoutService.prototype.orderFactory;
        /**
         * @type {?}
         * @private
         */
        DaffTestingCheckoutService.prototype.orderItemFactory;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var DaffInMemoryCheckoutService = /** @class */ (function () {
        function DaffInMemoryCheckoutService(http) {
            this.http = http;
            this.url = '/api/checkout';
        }
        /**
         * @param {?} cartId
         * @return {?}
         */
        DaffInMemoryCheckoutService.prototype.placeOrder = /**
         * @param {?} cartId
         * @return {?}
         */
        function (cartId) {
            return this.http.post(this.url + '/placeOrder', { cartId: cartId });
        };
        DaffInMemoryCheckoutService.decorators = [
            { type: core.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */
        DaffInMemoryCheckoutService.ctorParameters = function () { return [
            { type: http.HttpClient }
        ]; };
        /** @nocollapse */ DaffInMemoryCheckoutService.ngInjectableDef = core.ɵɵdefineInjectable({ factory: function DaffInMemoryCheckoutService_Factory() { return new DaffInMemoryCheckoutService(core.ɵɵinject(http.HttpClient)); }, token: DaffInMemoryCheckoutService, providedIn: "root" });
        return DaffInMemoryCheckoutService;
    }());
    if (false) {
        /** @type {?} */
        DaffInMemoryCheckoutService.prototype.url;
        /**
         * @type {?}
         * @private
         */
        DaffInMemoryCheckoutService.prototype.http;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var DaffCheckoutInMemoryDriverModule = /** @class */ (function () {
        function DaffCheckoutInMemoryDriverModule() {
        }
        /**
         * @return {?}
         */
        DaffCheckoutInMemoryDriverModule.forRoot = /**
         * @return {?}
         */
        function () {
            return {
                ngModule: DaffCheckoutInMemoryDriverModule,
                providers: [
                    {
                        provide: checkout.DaffCheckoutDriver,
                        useExisting: DaffInMemoryCheckoutService
                    }
                ]
            };
        };
        DaffCheckoutInMemoryDriverModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [
                            common.CommonModule
                        ]
                    },] }
        ];
        return DaffCheckoutInMemoryDriverModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var DaffCheckoutTestingDriverModule = /** @class */ (function () {
        function DaffCheckoutTestingDriverModule() {
        }
        /**
         * @return {?}
         */
        DaffCheckoutTestingDriverModule.forRoot = /**
         * @return {?}
         */
        function () {
            return {
                ngModule: DaffCheckoutTestingDriverModule,
                providers: [
                    {
                        provide: checkout.DaffCheckoutDriver,
                        useExisting: DaffTestingCheckoutService
                    }
                ]
            };
        };
        DaffCheckoutTestingDriverModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [
                            common.CommonModule
                        ]
                    },] }
        ];
        return DaffCheckoutTestingDriverModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var DaffInMemoryBackendCheckoutService = /** @class */ (function () {
        function DaffInMemoryBackendCheckoutService(orderFactory, orderItemFactory, productImageFactory) {
            this.orderFactory = orderFactory;
            this.orderItemFactory = orderItemFactory;
            this.productImageFactory = productImageFactory;
        }
        /**
         * @param {?} reqInfo
         * @return {?}
         */
        DaffInMemoryBackendCheckoutService.prototype.post = /**
         * @param {?} reqInfo
         * @return {?}
         */
        function (reqInfo) {
            var _this = this;
            return reqInfo.utils.createResponse$((/**
             * @return {?}
             */
            function () {
                if (reqInfo.id === 'placeOrder') {
                    //should make a service call to clear cart here.
                    // this.driver.cartService.clear(reqInfo.req.body.orderId).subscribe();
                    _this.populateOrder();
                }
                return {
                    body: _this.order,
                    status: angularInMemoryWebApi.STATUS.OK
                };
            }));
        };
        /**
         * @return {?}
         */
        DaffInMemoryBackendCheckoutService.prototype.createDb = /**
         * @return {?}
         */
        function () {
            return {
                order: null
            };
        };
        /**
         * @private
         * @return {?}
         */
        DaffInMemoryBackendCheckoutService.prototype.populateOrder = /**
         * @private
         * @return {?}
         */
        function () {
            this.order = this.orderFactory.create({
                items: this.orderItemFactory.createMany(2, {
                    image: this.productImageFactory.create()
                })
            });
        };
        DaffInMemoryBackendCheckoutService.decorators = [
            { type: core.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */
        DaffInMemoryBackendCheckoutService.ctorParameters = function () { return [
            { type: DaffOrderFactory },
            { type: DaffOrderItemFactory },
            { type: testing$1.DaffProductImageFactory }
        ]; };
        /** @nocollapse */ DaffInMemoryBackendCheckoutService.ngInjectableDef = core.ɵɵdefineInjectable({ factory: function DaffInMemoryBackendCheckoutService_Factory() { return new DaffInMemoryBackendCheckoutService(core.ɵɵinject(DaffOrderFactory), core.ɵɵinject(DaffOrderItemFactory), core.ɵɵinject(testing$1.DaffProductImageFactory)); }, token: DaffInMemoryBackendCheckoutService, providedIn: "root" });
        return DaffInMemoryBackendCheckoutService;
    }());
    if (false) {
        /**
         * @type {?}
         * @private
         */
        DaffInMemoryBackendCheckoutService.prototype.order;
        /**
         * @type {?}
         * @private
         */
        DaffInMemoryBackendCheckoutService.prototype.orderFactory;
        /**
         * @type {?}
         * @private
         */
        DaffInMemoryBackendCheckoutService.prototype.orderItemFactory;
        /**
         * @type {?}
         * @private
         */
        DaffInMemoryBackendCheckoutService.prototype.productImageFactory;
    }

    exports.DaffCheckoutInMemoryDriverModule = DaffCheckoutInMemoryDriverModule;
    exports.DaffCheckoutTestingDriverModule = DaffCheckoutTestingDriverModule;
    exports.DaffInMemoryBackendCheckoutService = DaffInMemoryBackendCheckoutService;
    exports.DaffInMemoryCheckoutService = DaffInMemoryCheckoutService;
    exports.DaffOrderAddressFactory = DaffOrderAddressFactory;
    exports.DaffOrderFactory = DaffOrderFactory;
    exports.DaffOrderItemFactory = DaffOrderItemFactory;
    exports.DaffOrderPaymentFactory = DaffOrderPaymentFactory;
    exports.DaffOrderShippingRateFactory = DaffOrderShippingRateFactory;
    exports.DaffPaymentFactory = DaffPaymentFactory;
    exports.DaffShippingOptionFactory = DaffShippingOptionFactory;
    exports.DaffShippingRateFactory = DaffShippingRateFactory;
    exports.DaffTestingCheckoutService = DaffTestingCheckoutService;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=daffodil-checkout-testing.umd.js.map
