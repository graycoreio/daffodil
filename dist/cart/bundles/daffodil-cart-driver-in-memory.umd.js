(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common/http'), require('rxjs'), require('rxjs/operators'), require('@daffodil/cart/driver'), require('@angular/common'), require('angular-in-memory-web-api'), require('@daffodil/cart/testing')) :
    typeof define === 'function' && define.amd ? define('@daffodil/cart/driver/in-memory', ['exports', '@angular/core', '@angular/common/http', 'rxjs', 'rxjs/operators', '@daffodil/cart/driver', '@angular/common', 'angular-in-memory-web-api', '@daffodil/cart/testing'], factory) :
    (global = global || self, factory((global.daffodil = global.daffodil || {}, global.daffodil.cart = global.daffodil.cart || {}, global.daffodil.cart.driver = global.daffodil.cart.driver || {}, global.daffodil.cart.driver['in-memory'] = {}), global.ng.core, global.ng.common.http, global.rxjs, global.rxjs.operators, global.daffodil.cart.driver, global.ng.common, global.angularInMemoryWebApi, global.daffodil.cart.testing));
}(this, function (exports, core, http, rxjs, operators, driver, common, angularInMemoryWebApi, testing) { 'use strict';

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
    var DaffInMemoryCartService = /** @class */ (function () {
        function DaffInMemoryCartService(http) {
            this.http = http;
            this.url = '/api/cart';
        }
        /**
         * @param {?} cartId
         * @return {?}
         */
        DaffInMemoryCartService.prototype.get = /**
         * @param {?} cartId
         * @return {?}
         */
        function (cartId) {
            return this.http.get(this.url + "/" + cartId).pipe(operators.catchError((/**
             * @param {?} error
             * @return {?}
             */
            function (error) { return rxjs.throwError(driver.DaffCartNotFoundError); })), operators.map((/**
             * @param {?} result
             * @return {?}
             */
            function (result) { return result; })));
        };
        /**
         * @param {?} productId
         * @param {?} qty
         * @return {?}
         */
        DaffInMemoryCartService.prototype.addToCart = /**
         * @param {?} productId
         * @param {?} qty
         * @return {?}
         */
        function (productId, qty) {
            return this.http.post(this.url + '/addToCart', { productId: productId, qty: qty });
        };
        /**
         * @param {?} cartId
         * @return {?}
         */
        DaffInMemoryCartService.prototype.clear = /**
         * @param {?} cartId
         * @return {?}
         */
        function (cartId) {
            return this.http.post(this.url + "/" + cartId + "/clear", {});
        };
        /**
         * @return {?}
         */
        DaffInMemoryCartService.prototype.create = /**
         * @return {?}
         */
        function () {
            return this.http.post(this.url, {});
        };
        DaffInMemoryCartService.decorators = [
            { type: core.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */
        DaffInMemoryCartService.ctorParameters = function () { return [
            { type: http.HttpClient }
        ]; };
        /** @nocollapse */ DaffInMemoryCartService.ngInjectableDef = core.ɵɵdefineInjectable({ factory: function DaffInMemoryCartService_Factory() { return new DaffInMemoryCartService(core.ɵɵinject(http.HttpClient)); }, token: DaffInMemoryCartService, providedIn: "root" });
        return DaffInMemoryCartService;
    }());
    if (false) {
        /** @type {?} */
        DaffInMemoryCartService.prototype.url;
        /**
         * @type {?}
         * @private
         */
        DaffInMemoryCartService.prototype.http;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var DaffInMemoryCartItemService = /** @class */ (function () {
        function DaffInMemoryCartItemService(http) {
            this.http = http;
            this.url = '/api/cart-items';
        }
        /**
         * @param {?} cartId
         * @return {?}
         */
        DaffInMemoryCartItemService.prototype.list = /**
         * @param {?} cartId
         * @return {?}
         */
        function (cartId) {
            return this.http.get(this.url + "/" + cartId + "/");
        };
        /**
         * @param {?} cartId
         * @param {?} itemId
         * @return {?}
         */
        DaffInMemoryCartItemService.prototype.get = /**
         * @param {?} cartId
         * @param {?} itemId
         * @return {?}
         */
        function (cartId, itemId) {
            return this.http.get(this.url + "/" + cartId + "/" + itemId);
        };
        /**
         * @param {?} cartId
         * @param {?} input
         * @return {?}
         */
        DaffInMemoryCartItemService.prototype.add = /**
         * @param {?} cartId
         * @param {?} input
         * @return {?}
         */
        function (cartId, input) {
            return this.http.post(this.url + "/" + cartId + "/", input);
        };
        /**
         * @param {?} cartId
         * @param {?} itemId
         * @param {?} item
         * @return {?}
         */
        DaffInMemoryCartItemService.prototype.update = /**
         * @param {?} cartId
         * @param {?} itemId
         * @param {?} item
         * @return {?}
         */
        function (cartId, itemId, item) {
            return this.http.put(this.url + "/" + cartId + "/" + itemId, item);
        };
        /**
         * @param {?} cartId
         * @param {?} itemId
         * @return {?}
         */
        DaffInMemoryCartItemService.prototype.delete = /**
         * @param {?} cartId
         * @param {?} itemId
         * @return {?}
         */
        function (cartId, itemId) {
            return this.http.delete(this.url + "/" + cartId + "/" + itemId);
        };
        DaffInMemoryCartItemService.decorators = [
            { type: core.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */
        DaffInMemoryCartItemService.ctorParameters = function () { return [
            { type: http.HttpClient }
        ]; };
        /** @nocollapse */ DaffInMemoryCartItemService.ngInjectableDef = core.ɵɵdefineInjectable({ factory: function DaffInMemoryCartItemService_Factory() { return new DaffInMemoryCartItemService(core.ɵɵinject(http.HttpClient)); }, token: DaffInMemoryCartItemService, providedIn: "root" });
        return DaffInMemoryCartItemService;
    }());
    if (false) {
        /** @type {?} */
        DaffInMemoryCartItemService.prototype.url;
        /**
         * @type {?}
         * @private
         */
        DaffInMemoryCartItemService.prototype.http;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var DaffInMemoryCartBillingAddressService = /** @class */ (function () {
        function DaffInMemoryCartBillingAddressService(http) {
            this.http = http;
            this.url = '/api/cart-billing-address';
        }
        /**
         * @param {?} cartId
         * @return {?}
         */
        DaffInMemoryCartBillingAddressService.prototype.get = /**
         * @param {?} cartId
         * @return {?}
         */
        function (cartId) {
            return this.http.get(this.url + "/" + cartId);
        };
        /**
         * @param {?} cartId
         * @param {?} address
         * @return {?}
         */
        DaffInMemoryCartBillingAddressService.prototype.update = /**
         * @param {?} cartId
         * @param {?} address
         * @return {?}
         */
        function (cartId, address) {
            return this.http.put(this.url + "/" + cartId, address);
        };
        DaffInMemoryCartBillingAddressService.decorators = [
            { type: core.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */
        DaffInMemoryCartBillingAddressService.ctorParameters = function () { return [
            { type: http.HttpClient }
        ]; };
        /** @nocollapse */ DaffInMemoryCartBillingAddressService.ngInjectableDef = core.ɵɵdefineInjectable({ factory: function DaffInMemoryCartBillingAddressService_Factory() { return new DaffInMemoryCartBillingAddressService(core.ɵɵinject(http.HttpClient)); }, token: DaffInMemoryCartBillingAddressService, providedIn: "root" });
        return DaffInMemoryCartBillingAddressService;
    }());
    if (false) {
        /** @type {?} */
        DaffInMemoryCartBillingAddressService.prototype.url;
        /**
         * @type {?}
         * @private
         */
        DaffInMemoryCartBillingAddressService.prototype.http;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var DaffInMemoryCartPaymentService = /** @class */ (function () {
        function DaffInMemoryCartPaymentService(http) {
            this.http = http;
            this.url = '/api/cart-payment';
        }
        /**
         * @param {?} cartId
         * @return {?}
         */
        DaffInMemoryCartPaymentService.prototype.get = /**
         * @param {?} cartId
         * @return {?}
         */
        function (cartId) {
            return this.http.get(this.url + "/" + cartId);
        };
        /**
         * @param {?} cartId
         * @param {?} payment
         * @return {?}
         */
        DaffInMemoryCartPaymentService.prototype.update = /**
         * @param {?} cartId
         * @param {?} payment
         * @return {?}
         */
        function (cartId, payment) {
            return this.http.put(this.url + "/" + cartId, { payment: payment });
        };
        /**
         * @param {?} cartId
         * @param {?} payment
         * @param {?} address
         * @return {?}
         */
        DaffInMemoryCartPaymentService.prototype.updateWithBilling = /**
         * @param {?} cartId
         * @param {?} payment
         * @param {?} address
         * @return {?}
         */
        function (cartId, payment, address) {
            return this.http.put(this.url + "/" + cartId, { payment: payment, address: address });
        };
        /**
         * @param {?} cartId
         * @return {?}
         */
        DaffInMemoryCartPaymentService.prototype.remove = /**
         * @param {?} cartId
         * @return {?}
         */
        function (cartId) {
            return this.http.delete(this.url + "/" + cartId);
        };
        DaffInMemoryCartPaymentService.decorators = [
            { type: core.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */
        DaffInMemoryCartPaymentService.ctorParameters = function () { return [
            { type: http.HttpClient }
        ]; };
        /** @nocollapse */ DaffInMemoryCartPaymentService.ngInjectableDef = core.ɵɵdefineInjectable({ factory: function DaffInMemoryCartPaymentService_Factory() { return new DaffInMemoryCartPaymentService(core.ɵɵinject(http.HttpClient)); }, token: DaffInMemoryCartPaymentService, providedIn: "root" });
        return DaffInMemoryCartPaymentService;
    }());
    if (false) {
        /** @type {?} */
        DaffInMemoryCartPaymentService.prototype.url;
        /**
         * @type {?}
         * @private
         */
        DaffInMemoryCartPaymentService.prototype.http;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var DaffInMemoryCartPaymentMethodsService = /** @class */ (function () {
        function DaffInMemoryCartPaymentMethodsService(http) {
            this.http = http;
            this.url = '/api/cart-payment-methods';
        }
        /**
         * @param {?} cartId
         * @return {?}
         */
        DaffInMemoryCartPaymentMethodsService.prototype.list = /**
         * @param {?} cartId
         * @return {?}
         */
        function (cartId) {
            return this.http.get(this.url + "/" + cartId);
        };
        DaffInMemoryCartPaymentMethodsService.decorators = [
            { type: core.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */
        DaffInMemoryCartPaymentMethodsService.ctorParameters = function () { return [
            { type: http.HttpClient }
        ]; };
        /** @nocollapse */ DaffInMemoryCartPaymentMethodsService.ngInjectableDef = core.ɵɵdefineInjectable({ factory: function DaffInMemoryCartPaymentMethodsService_Factory() { return new DaffInMemoryCartPaymentMethodsService(core.ɵɵinject(http.HttpClient)); }, token: DaffInMemoryCartPaymentMethodsService, providedIn: "root" });
        return DaffInMemoryCartPaymentMethodsService;
    }());
    if (false) {
        /** @type {?} */
        DaffInMemoryCartPaymentMethodsService.prototype.url;
        /**
         * @type {?}
         * @private
         */
        DaffInMemoryCartPaymentMethodsService.prototype.http;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var DaffInMemoryCartShippingAddressService = /** @class */ (function () {
        function DaffInMemoryCartShippingAddressService(http) {
            this.http = http;
            this.url = '/api/cart-shipping-address';
        }
        /**
         * @param {?} cartId
         * @return {?}
         */
        DaffInMemoryCartShippingAddressService.prototype.get = /**
         * @param {?} cartId
         * @return {?}
         */
        function (cartId) {
            return this.http.get(this.url + "/" + cartId);
        };
        /**
         * @param {?} cartId
         * @param {?} address
         * @return {?}
         */
        DaffInMemoryCartShippingAddressService.prototype.update = /**
         * @param {?} cartId
         * @param {?} address
         * @return {?}
         */
        function (cartId, address) {
            return this.http.put(this.url + "/" + cartId, address);
        };
        DaffInMemoryCartShippingAddressService.decorators = [
            { type: core.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */
        DaffInMemoryCartShippingAddressService.ctorParameters = function () { return [
            { type: http.HttpClient }
        ]; };
        /** @nocollapse */ DaffInMemoryCartShippingAddressService.ngInjectableDef = core.ɵɵdefineInjectable({ factory: function DaffInMemoryCartShippingAddressService_Factory() { return new DaffInMemoryCartShippingAddressService(core.ɵɵinject(http.HttpClient)); }, token: DaffInMemoryCartShippingAddressService, providedIn: "root" });
        return DaffInMemoryCartShippingAddressService;
    }());
    if (false) {
        /** @type {?} */
        DaffInMemoryCartShippingAddressService.prototype.url;
        /**
         * @type {?}
         * @private
         */
        DaffInMemoryCartShippingAddressService.prototype.http;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var DaffInMemoryCartShippingInformationService = /** @class */ (function () {
        function DaffInMemoryCartShippingInformationService(http) {
            this.http = http;
            this.url = '/api/cart-shipping-information';
        }
        /**
         * @param {?} cartId
         * @return {?}
         */
        DaffInMemoryCartShippingInformationService.prototype.get = /**
         * @param {?} cartId
         * @return {?}
         */
        function (cartId) {
            return this.http.get(this.url + "/" + cartId);
        };
        /**
         * @param {?} cartId
         * @param {?} info
         * @return {?}
         */
        DaffInMemoryCartShippingInformationService.prototype.update = /**
         * @param {?} cartId
         * @param {?} info
         * @return {?}
         */
        function (cartId, info) {
            return this.http.put(this.url + "/" + cartId, info);
        };
        /**
         * @param {?} cartId
         * @return {?}
         */
        DaffInMemoryCartShippingInformationService.prototype.delete = /**
         * @param {?} cartId
         * @return {?}
         */
        function (cartId) {
            return this.http.delete(this.url + "/" + cartId);
        };
        DaffInMemoryCartShippingInformationService.decorators = [
            { type: core.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */
        DaffInMemoryCartShippingInformationService.ctorParameters = function () { return [
            { type: http.HttpClient }
        ]; };
        /** @nocollapse */ DaffInMemoryCartShippingInformationService.ngInjectableDef = core.ɵɵdefineInjectable({ factory: function DaffInMemoryCartShippingInformationService_Factory() { return new DaffInMemoryCartShippingInformationService(core.ɵɵinject(http.HttpClient)); }, token: DaffInMemoryCartShippingInformationService, providedIn: "root" });
        return DaffInMemoryCartShippingInformationService;
    }());
    if (false) {
        /** @type {?} */
        DaffInMemoryCartShippingInformationService.prototype.url;
        /**
         * @type {?}
         * @private
         */
        DaffInMemoryCartShippingInformationService.prototype.http;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var DaffInMemoryCartShippingMethodsService = /** @class */ (function () {
        function DaffInMemoryCartShippingMethodsService(http) {
            this.http = http;
            this.url = '/api/cart-shipping-methods';
        }
        /**
         * @param {?} cartId
         * @return {?}
         */
        DaffInMemoryCartShippingMethodsService.prototype.list = /**
         * @param {?} cartId
         * @return {?}
         */
        function (cartId) {
            return this.http.get(this.url + "/" + cartId);
        };
        DaffInMemoryCartShippingMethodsService.decorators = [
            { type: core.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */
        DaffInMemoryCartShippingMethodsService.ctorParameters = function () { return [
            { type: http.HttpClient }
        ]; };
        /** @nocollapse */ DaffInMemoryCartShippingMethodsService.ngInjectableDef = core.ɵɵdefineInjectable({ factory: function DaffInMemoryCartShippingMethodsService_Factory() { return new DaffInMemoryCartShippingMethodsService(core.ɵɵinject(http.HttpClient)); }, token: DaffInMemoryCartShippingMethodsService, providedIn: "root" });
        return DaffInMemoryCartShippingMethodsService;
    }());
    if (false) {
        /** @type {?} */
        DaffInMemoryCartShippingMethodsService.prototype.url;
        /**
         * @type {?}
         * @private
         */
        DaffInMemoryCartShippingMethodsService.prototype.http;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var DaffInMemoryCartOrderService = /** @class */ (function () {
        function DaffInMemoryCartOrderService(http) {
            this.http = http;
            this.url = '/api/cart-order';
        }
        /**
         * @param {?} cartId
         * @param {?=} payment
         * @return {?}
         */
        DaffInMemoryCartOrderService.prototype.placeOrder = /**
         * @param {?} cartId
         * @param {?=} payment
         * @return {?}
         */
        function (cartId, payment) {
            return this.http.post(this.url + "/" + cartId + "/", { payment: payment });
        };
        DaffInMemoryCartOrderService.decorators = [
            { type: core.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */
        DaffInMemoryCartOrderService.ctorParameters = function () { return [
            { type: http.HttpClient }
        ]; };
        /** @nocollapse */ DaffInMemoryCartOrderService.ngInjectableDef = core.ɵɵdefineInjectable({ factory: function DaffInMemoryCartOrderService_Factory() { return new DaffInMemoryCartOrderService(core.ɵɵinject(http.HttpClient)); }, token: DaffInMemoryCartOrderService, providedIn: "root" });
        return DaffInMemoryCartOrderService;
    }());
    if (false) {
        /** @type {?} */
        DaffInMemoryCartOrderService.prototype.url;
        /**
         * @type {?}
         * @private
         */
        DaffInMemoryCartOrderService.prototype.http;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var DaffInMemoryCartCouponService = /** @class */ (function () {
        function DaffInMemoryCartCouponService(http) {
            this.http = http;
            this.url = '/api/cart-coupon';
        }
        /**
         * @param {?} cartId
         * @return {?}
         */
        DaffInMemoryCartCouponService.prototype.list = /**
         * @param {?} cartId
         * @return {?}
         */
        function (cartId) {
            return this.http.get(this.url + "/" + cartId + "/");
        };
        /**
         * @param {?} cartId
         * @param {?} coupon
         * @return {?}
         */
        DaffInMemoryCartCouponService.prototype.apply = /**
         * @param {?} cartId
         * @param {?} coupon
         * @return {?}
         */
        function (cartId, coupon) {
            return this.http.post(this.url + "/" + cartId + "/", coupon);
        };
        /**
         * @param {?} cartId
         * @param {?} coupon
         * @return {?}
         */
        DaffInMemoryCartCouponService.prototype.remove = /**
         * @param {?} cartId
         * @param {?} coupon
         * @return {?}
         */
        function (cartId, coupon) {
            return this.http.delete(this.url + "/" + cartId + "/" + coupon.code);
        };
        /**
         * @param {?} cartId
         * @return {?}
         */
        DaffInMemoryCartCouponService.prototype.removeAll = /**
         * @param {?} cartId
         * @return {?}
         */
        function (cartId) {
            return this.http.delete(this.url + "/" + cartId + "/");
        };
        DaffInMemoryCartCouponService.decorators = [
            { type: core.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */
        DaffInMemoryCartCouponService.ctorParameters = function () { return [
            { type: http.HttpClient }
        ]; };
        /** @nocollapse */ DaffInMemoryCartCouponService.ngInjectableDef = core.ɵɵdefineInjectable({ factory: function DaffInMemoryCartCouponService_Factory() { return new DaffInMemoryCartCouponService(core.ɵɵinject(http.HttpClient)); }, token: DaffInMemoryCartCouponService, providedIn: "root" });
        return DaffInMemoryCartCouponService;
    }());
    if (false) {
        /** @type {?} */
        DaffInMemoryCartCouponService.prototype.url;
        /**
         * @type {?}
         * @private
         */
        DaffInMemoryCartCouponService.prototype.http;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var DaffInMemoryCartAddressService = /** @class */ (function () {
        function DaffInMemoryCartAddressService(http) {
            this.http = http;
            this.url = '/api/cart-address';
        }
        /**
         * @param {?} cartId
         * @param {?} address
         * @return {?}
         */
        DaffInMemoryCartAddressService.prototype.update = /**
         * @param {?} cartId
         * @param {?} address
         * @return {?}
         */
        function (cartId, address) {
            return this.http.put(this.url + "/" + cartId, address);
        };
        DaffInMemoryCartAddressService.decorators = [
            { type: core.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */
        DaffInMemoryCartAddressService.ctorParameters = function () { return [
            { type: http.HttpClient }
        ]; };
        /** @nocollapse */ DaffInMemoryCartAddressService.ngInjectableDef = core.ɵɵdefineInjectable({ factory: function DaffInMemoryCartAddressService_Factory() { return new DaffInMemoryCartAddressService(core.ɵɵinject(http.HttpClient)); }, token: DaffInMemoryCartAddressService, providedIn: "root" });
        return DaffInMemoryCartAddressService;
    }());
    if (false) {
        /** @type {?} */
        DaffInMemoryCartAddressService.prototype.url;
        /**
         * @type {?}
         * @private
         */
        DaffInMemoryCartAddressService.prototype.http;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var DaffCartInMemoryDriverModule = /** @class */ (function () {
        function DaffCartInMemoryDriverModule() {
        }
        /**
         * @return {?}
         */
        DaffCartInMemoryDriverModule.forRoot = /**
         * @return {?}
         */
        function () {
            return {
                ngModule: DaffCartInMemoryDriverModule,
                providers: [
                    {
                        provide: driver.DaffCartDriver,
                        useExisting: DaffInMemoryCartService
                    },
                    {
                        provide: driver.DaffCartAddressDriver,
                        useExisting: DaffInMemoryCartAddressService
                    },
                    {
                        provide: driver.DaffCartBillingAddressDriver,
                        useExisting: DaffInMemoryCartBillingAddressService
                    },
                    {
                        provide: driver.DaffCartItemDriver,
                        useExisting: DaffInMemoryCartItemService
                    },
                    {
                        provide: driver.DaffCartPaymentDriver,
                        useExisting: DaffInMemoryCartPaymentService
                    },
                    {
                        provide: driver.DaffCartPaymentMethodsDriver,
                        useExisting: DaffInMemoryCartPaymentMethodsService
                    },
                    {
                        provide: driver.DaffCartShippingAddressDriver,
                        useExisting: DaffInMemoryCartShippingAddressService
                    },
                    {
                        provide: driver.DaffCartShippingInformationDriver,
                        useExisting: DaffInMemoryCartShippingInformationService
                    },
                    {
                        provide: driver.DaffCartShippingMethodsDriver,
                        useExisting: DaffInMemoryCartShippingMethodsService
                    },
                    {
                        provide: driver.DaffCartOrderDriver,
                        useExisting: DaffInMemoryCartOrderService
                    },
                    {
                        provide: driver.DaffCartCouponDriver,
                        useExisting: DaffInMemoryCartCouponService
                    }
                ]
            };
        };
        DaffCartInMemoryDriverModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [
                            common.CommonModule
                        ]
                    },] }
        ];
        return DaffCartInMemoryDriverModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var DaffInMemoryBackendCartService = /** @class */ (function () {
        function DaffInMemoryBackendCartService(cartFactory) {
            this.cartFactory = cartFactory;
        }
        /**
         * @param {?} reqInfo
         * @return {?}
         */
        DaffInMemoryBackendCartService.prototype.get = /**
         * @param {?} reqInfo
         * @return {?}
         */
        function (reqInfo) {
            /** @type {?} */
            var cart = this.getCart(reqInfo);
            return reqInfo.utils.createResponse$((/**
             * @return {?}
             */
            function () { return ({
                body: cart,
                status: cart ? angularInMemoryWebApi.STATUS.OK : angularInMemoryWebApi.STATUS.NOT_FOUND
            }); }));
        };
        /**
         * @param {?} reqInfo
         * @return {?}
         */
        DaffInMemoryBackendCartService.prototype.post = /**
         * @param {?} reqInfo
         * @return {?}
         */
        function (reqInfo) {
            var _this = this;
            return reqInfo.utils.createResponse$((/**
             * @return {?}
             */
            function () {
                /** @type {?} */
                var body;
                /** @type {?} */
                var action = _this.getAction(reqInfo);
                if (reqInfo.id === 'addToCart') {
                    // deprecated
                    body = {};
                }
                else if (action === 'clear') {
                    body = _this.clear(reqInfo);
                }
                else {
                    body = _this.create(reqInfo);
                }
                return {
                    body: body,
                    status: angularInMemoryWebApi.STATUS.OK
                };
            }));
        };
        /**
         * Gets whatever follows the cart ID section of the request URL.
         */
        /**
         * Gets whatever follows the cart ID section of the request URL.
         * @private
         * @param {?} reqInfo
         * @return {?}
         */
        DaffInMemoryBackendCartService.prototype.getAction = /**
         * Gets whatever follows the cart ID section of the request URL.
         * @private
         * @param {?} reqInfo
         * @return {?}
         */
        function (reqInfo) {
            return reqInfo.url.replace("/" + reqInfo.resourceUrl + reqInfo.id + "/", '');
        };
        /**
         * @private
         * @param {?} reqInfo
         * @return {?}
         */
        DaffInMemoryBackendCartService.prototype.clear = /**
         * @private
         * @param {?} reqInfo
         * @return {?}
         */
        function (reqInfo) {
            /** @type {?} */
            var cart = this.getCart(reqInfo);
            cart.items = [];
            return cart;
        };
        /**
         * @private
         * @param {?} reqInfo
         * @return {?}
         */
        DaffInMemoryBackendCartService.prototype.create = /**
         * @private
         * @param {?} reqInfo
         * @return {?}
         */
        function (reqInfo) {
            /** @type {?} */
            var cart = this.cartFactory.create();
            reqInfo.collection.push(cart);
            return {
                id: cart.id
            };
        };
        /**
         * @private
         * @param {?} reqInfo
         * @return {?}
         */
        DaffInMemoryBackendCartService.prototype.getCart = /**
         * @private
         * @param {?} reqInfo
         * @return {?}
         */
        function (reqInfo) {
            return reqInfo.utils.findById(reqInfo.collection, reqInfo.id);
        };
        DaffInMemoryBackendCartService.decorators = [
            { type: core.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */
        DaffInMemoryBackendCartService.ctorParameters = function () { return [
            { type: testing.DaffCartFactory }
        ]; };
        /** @nocollapse */ DaffInMemoryBackendCartService.ngInjectableDef = core.ɵɵdefineInjectable({ factory: function DaffInMemoryBackendCartService_Factory() { return new DaffInMemoryBackendCartService(core.ɵɵinject(testing.DaffCartFactory)); }, token: DaffInMemoryBackendCartService, providedIn: "root" });
        return DaffInMemoryBackendCartService;
    }());
    if (false) {
        /**
         * @type {?}
         * @private
         */
        DaffInMemoryBackendCartService.prototype.cartFactory;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var DaffInMemoryBackendCartItemsService = /** @class */ (function () {
        function DaffInMemoryBackendCartItemsService(cartItemFactory) {
            this.cartItemFactory = cartItemFactory;
        }
        /**
         * @param {?} reqInfo
         * @return {?}
         */
        DaffInMemoryBackendCartItemsService.prototype.get = /**
         * @param {?} reqInfo
         * @return {?}
         */
        function (reqInfo) {
            var _this = this;
            return reqInfo.utils.createResponse$((/**
             * @return {?}
             */
            function () {
                /** @type {?} */
                var body;
                /** @type {?} */
                var action = _this.getAction(reqInfo);
                if (action) {
                    body = _this.getItem(reqInfo, action);
                }
                else {
                    body = _this.listItems(reqInfo);
                }
                return {
                    body: body,
                    status: angularInMemoryWebApi.STATUS.OK
                };
            }));
        };
        /**
         * @param {?} reqInfo
         * @return {?}
         */
        DaffInMemoryBackendCartItemsService.prototype.put = /**
         * @param {?} reqInfo
         * @return {?}
         */
        function (reqInfo) {
            var _this = this;
            return reqInfo.utils.createResponse$((/**
             * @return {?}
             */
            function () { return ({
                body: _this.updateItem(reqInfo, _this.getAction(reqInfo)),
                status: angularInMemoryWebApi.STATUS.OK
            }); }));
        };
        /**
         * @param {?} reqInfo
         * @return {?}
         */
        DaffInMemoryBackendCartItemsService.prototype.post = /**
         * @param {?} reqInfo
         * @return {?}
         */
        function (reqInfo) {
            var _this = this;
            return reqInfo.utils.createResponse$((/**
             * @return {?}
             */
            function () { return ({
                body: _this.addItem(reqInfo),
                status: angularInMemoryWebApi.STATUS.OK
            }); }));
        };
        /**
         * @param {?} reqInfo
         * @return {?}
         */
        DaffInMemoryBackendCartItemsService.prototype.delete = /**
         * @param {?} reqInfo
         * @return {?}
         */
        function (reqInfo) {
            var _this = this;
            return reqInfo.utils.createResponse$((/**
             * @return {?}
             */
            function () { return ({
                body: _this.deleteItem(reqInfo, _this.getAction(reqInfo)),
                status: angularInMemoryWebApi.STATUS.OK
            }); }));
        };
        /**
         * Gets whatever follows the cart ID section of the request URL.
         */
        /**
         * Gets whatever follows the cart ID section of the request URL.
         * @private
         * @param {?} reqInfo
         * @return {?}
         */
        DaffInMemoryBackendCartItemsService.prototype.getAction = /**
         * Gets whatever follows the cart ID section of the request URL.
         * @private
         * @param {?} reqInfo
         * @return {?}
         */
        function (reqInfo) {
            return reqInfo.url.replace("/" + reqInfo.resourceUrl + reqInfo.id + "/", '');
        };
        /**
         * @private
         * @param {?} reqInfo
         * @return {?}
         */
        DaffInMemoryBackendCartItemsService.prototype.getCart = /**
         * @private
         * @param {?} reqInfo
         * @return {?}
         */
        function (reqInfo) {
            return reqInfo.utils.findById(reqInfo.collection, Number(reqInfo.id));
        };
        /**
         * @private
         * @param {?} itemInput
         * @return {?}
         */
        DaffInMemoryBackendCartItemsService.prototype.transformItemInput = /**
         * @private
         * @param {?} itemInput
         * @return {?}
         */
        function (itemInput) {
            return __assign({}, this.cartItemFactory.create(), itemInput, { product_id: itemInput.productId });
        };
        /**
         * @private
         * @param {?} reqInfo
         * @return {?}
         */
        DaffInMemoryBackendCartItemsService.prototype.listItems = /**
         * @private
         * @param {?} reqInfo
         * @return {?}
         */
        function (reqInfo) {
            return this.getCart(reqInfo).items;
        };
        /**
         * @private
         * @param {?} reqInfo
         * @param {?} itemId
         * @return {?}
         */
        DaffInMemoryBackendCartItemsService.prototype.getItem = /**
         * @private
         * @param {?} reqInfo
         * @param {?} itemId
         * @return {?}
         */
        function (reqInfo, itemId) {
            /** @type {?} */
            var cart = this.getCart(reqInfo);
            return cart.items.find((/**
             * @param {?} __0
             * @return {?}
             */
            function (_a) {
                var item_id = _a.item_id;
                return String(item_id) === String(itemId);
            }));
        };
        /**
         * @private
         * @param {?} reqInfo
         * @param {?} itemId
         * @return {?}
         */
        DaffInMemoryBackendCartItemsService.prototype.updateItem = /**
         * @private
         * @param {?} reqInfo
         * @param {?} itemId
         * @return {?}
         */
        function (reqInfo, itemId) {
            /** @type {?} */
            var cart = this.getCart(reqInfo);
            /** @type {?} */
            var item = reqInfo.utils.getJsonBody(reqInfo.req);
            /** @type {?} */
            var itemIndex = cart.items.findIndex((/**
             * @param {?} __0
             * @return {?}
             */
            function (_a) {
                var item_id = _a.item_id;
                return String(itemId) === String(item_id);
            }));
            cart.items[itemIndex] = __assign({}, cart.items[itemIndex], item);
            cart.items = Object.assign([], cart.items);
            return cart;
        };
        /**
         * @private
         * @param {?} reqInfo
         * @return {?}
         */
        DaffInMemoryBackendCartItemsService.prototype.addItem = /**
         * @private
         * @param {?} reqInfo
         * @return {?}
         */
        function (reqInfo) {
            /** @type {?} */
            var cart = this.getCart(reqInfo);
            /** @type {?} */
            var itemInput = reqInfo.utils.getJsonBody(reqInfo.req);
            /** @type {?} */
            var existingCartItemIndex = cart.items.findIndex((/**
             * @param {?} item
             * @return {?}
             */
            function (item) { return item.product_id === itemInput.productId; }));
            if (existingCartItemIndex > -1) {
                cart.items[existingCartItemIndex].qty = cart.items[existingCartItemIndex].qty + itemInput.qty;
            }
            else {
                cart.items.push(this.transformItemInput(itemInput));
            }
            cart.items = Object.assign([], cart.items);
            return cart;
        };
        /**
         * @private
         * @param {?} reqInfo
         * @param {?} itemId
         * @return {?}
         */
        DaffInMemoryBackendCartItemsService.prototype.deleteItem = /**
         * @private
         * @param {?} reqInfo
         * @param {?} itemId
         * @return {?}
         */
        function (reqInfo, itemId) {
            /** @type {?} */
            var cart = this.getCart(reqInfo);
            /** @type {?} */
            var itemIndex = cart.items.findIndex((/**
             * @param {?} __0
             * @return {?}
             */
            function (_a) {
                var item_id = _a.item_id;
                return String(itemId) === String(item_id);
            }));
            cart.items.splice(itemIndex, 1);
            cart.items = Object.assign([], cart.items);
            return cart;
        };
        DaffInMemoryBackendCartItemsService.decorators = [
            { type: core.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */
        DaffInMemoryBackendCartItemsService.ctorParameters = function () { return [
            { type: testing.DaffCartItemFactory }
        ]; };
        /** @nocollapse */ DaffInMemoryBackendCartItemsService.ngInjectableDef = core.ɵɵdefineInjectable({ factory: function DaffInMemoryBackendCartItemsService_Factory() { return new DaffInMemoryBackendCartItemsService(core.ɵɵinject(testing.DaffCartItemFactory)); }, token: DaffInMemoryBackendCartItemsService, providedIn: "root" });
        return DaffInMemoryBackendCartItemsService;
    }());
    if (false) {
        /**
         * @type {?}
         * @private
         */
        DaffInMemoryBackendCartItemsService.prototype.cartItemFactory;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var DaffInMemoryBackendCartOrderService = /** @class */ (function () {
        function DaffInMemoryBackendCartOrderService() {
        }
        /**
         * @param {?} reqInfo
         * @return {?}
         */
        DaffInMemoryBackendCartOrderService.prototype.post = /**
         * @param {?} reqInfo
         * @return {?}
         */
        function (reqInfo) {
            var _this = this;
            return reqInfo.utils.createResponse$((/**
             * @return {?}
             */
            function () { return ({
                body: _this.placeOrder(reqInfo),
                status: angularInMemoryWebApi.STATUS.OK
            }); }));
        };
        /**
         * @private
         * @param {?} reqInfo
         * @return {?}
         */
        DaffInMemoryBackendCartOrderService.prototype.placeOrder = /**
         * @private
         * @param {?} reqInfo
         * @return {?}
         */
        function (reqInfo) {
            return {
                id: '8235422034',
                cartId: '89fdsa8sadf',
                orderId: '8235422034',
            };
        };
        DaffInMemoryBackendCartOrderService.decorators = [
            { type: core.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */ DaffInMemoryBackendCartOrderService.ngInjectableDef = core.ɵɵdefineInjectable({ factory: function DaffInMemoryBackendCartOrderService_Factory() { return new DaffInMemoryBackendCartOrderService(); }, token: DaffInMemoryBackendCartOrderService, providedIn: "root" });
        return DaffInMemoryBackendCartOrderService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var DaffInMemoryBackendCartCouponService = /** @class */ (function () {
        function DaffInMemoryBackendCartCouponService() {
        }
        /**
         * @param {?} reqInfo
         * @return {?}
         */
        DaffInMemoryBackendCartCouponService.prototype.get = /**
         * @param {?} reqInfo
         * @return {?}
         */
        function (reqInfo) {
            var _this = this;
            return reqInfo.utils.createResponse$((/**
             * @return {?}
             */
            function () { return ({
                body: _this.listCoupons(reqInfo),
                status: angularInMemoryWebApi.STATUS.OK
            }); }));
        };
        /**
         * @param {?} reqInfo
         * @return {?}
         */
        DaffInMemoryBackendCartCouponService.prototype.post = /**
         * @param {?} reqInfo
         * @return {?}
         */
        function (reqInfo) {
            var _this = this;
            return reqInfo.utils.createResponse$((/**
             * @return {?}
             */
            function () { return ({
                body: _this.applyCoupon(reqInfo),
                status: angularInMemoryWebApi.STATUS.OK
            }); }));
        };
        /**
         * @param {?} reqInfo
         * @return {?}
         */
        DaffInMemoryBackendCartCouponService.prototype.delete = /**
         * @param {?} reqInfo
         * @return {?}
         */
        function (reqInfo) {
            var _this = this;
            return reqInfo.utils.createResponse$((/**
             * @return {?}
             */
            function () {
                /** @type {?} */
                var body;
                /** @type {?} */
                var action = _this.getAction(reqInfo);
                if (action) {
                    body = _this.removeCoupon(reqInfo, action);
                }
                else {
                    body = _this.removeAllCoupons(reqInfo);
                }
                return {
                    body: body,
                    status: angularInMemoryWebApi.STATUS.OK
                };
            }));
        };
        /**
         * Gets whatever follows the cart ID section of the request URL.
         */
        /**
         * Gets whatever follows the cart ID section of the request URL.
         * @private
         * @param {?} reqInfo
         * @return {?}
         */
        DaffInMemoryBackendCartCouponService.prototype.getAction = /**
         * Gets whatever follows the cart ID section of the request URL.
         * @private
         * @param {?} reqInfo
         * @return {?}
         */
        function (reqInfo) {
            return reqInfo.url.replace("/" + reqInfo.resourceUrl + reqInfo.id + "/", '');
        };
        /**
         * @private
         * @param {?} reqInfo
         * @return {?}
         */
        DaffInMemoryBackendCartCouponService.prototype.getCart = /**
         * @private
         * @param {?} reqInfo
         * @return {?}
         */
        function (reqInfo) {
            return reqInfo.utils.findById(reqInfo.collection, Number(reqInfo.id));
        };
        /**
         * @private
         * @param {?} reqInfo
         * @return {?}
         */
        DaffInMemoryBackendCartCouponService.prototype.listCoupons = /**
         * @private
         * @param {?} reqInfo
         * @return {?}
         */
        function (reqInfo) {
            return this.getCart(reqInfo).coupons;
        };
        /**
         * @private
         * @param {?} reqInfo
         * @return {?}
         */
        DaffInMemoryBackendCartCouponService.prototype.applyCoupon = /**
         * @private
         * @param {?} reqInfo
         * @return {?}
         */
        function (reqInfo) {
            /** @type {?} */
            var cart = this.getCart(reqInfo);
            /** @type {?} */
            var coupon = reqInfo.utils.getJsonBody(reqInfo.req);
            cart.coupons.push(coupon);
            return cart;
        };
        /**
         * @private
         * @param {?} reqInfo
         * @param {?} couponCode
         * @return {?}
         */
        DaffInMemoryBackendCartCouponService.prototype.removeCoupon = /**
         * @private
         * @param {?} reqInfo
         * @param {?} couponCode
         * @return {?}
         */
        function (reqInfo, couponCode) {
            /** @type {?} */
            var cart = this.getCart(reqInfo);
            cart.coupons = cart.coupons.filter((/**
             * @param {?} __0
             * @return {?}
             */
            function (_a) {
                var code = _a.code;
                return code !== couponCode;
            }));
            return cart;
        };
        /**
         * @private
         * @param {?} reqInfo
         * @return {?}
         */
        DaffInMemoryBackendCartCouponService.prototype.removeAllCoupons = /**
         * @private
         * @param {?} reqInfo
         * @return {?}
         */
        function (reqInfo) {
            /** @type {?} */
            var cart = this.getCart(reqInfo);
            cart.coupons = [];
            return cart;
        };
        DaffInMemoryBackendCartCouponService.decorators = [
            { type: core.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */ DaffInMemoryBackendCartCouponService.ngInjectableDef = core.ɵɵdefineInjectable({ factory: function DaffInMemoryBackendCartCouponService_Factory() { return new DaffInMemoryBackendCartCouponService(); }, token: DaffInMemoryBackendCartCouponService, providedIn: "root" });
        return DaffInMemoryBackendCartCouponService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var DaffInMemoryBackendCartAddressService = /** @class */ (function () {
        function DaffInMemoryBackendCartAddressService() {
        }
        /**
         * @param {?} reqInfo
         * @return {?}
         */
        DaffInMemoryBackendCartAddressService.prototype.put = /**
         * @param {?} reqInfo
         * @return {?}
         */
        function (reqInfo) {
            var _this = this;
            return reqInfo.utils.createResponse$((/**
             * @return {?}
             */
            function () { return ({
                body: _this.updateAddress(reqInfo),
                status: angularInMemoryWebApi.STATUS.OK
            }); }));
        };
        /**
         * @private
         * @param {?} reqInfo
         * @return {?}
         */
        DaffInMemoryBackendCartAddressService.prototype.getCart = /**
         * @private
         * @param {?} reqInfo
         * @return {?}
         */
        function (reqInfo) {
            return reqInfo.utils.findById(reqInfo.collection, Number(reqInfo.id));
        };
        /**
         * @private
         * @param {?} reqInfo
         * @return {?}
         */
        DaffInMemoryBackendCartAddressService.prototype.updateAddress = /**
         * @private
         * @param {?} reqInfo
         * @return {?}
         */
        function (reqInfo) {
            /** @type {?} */
            var cart = this.getCart(reqInfo);
            /** @type {?} */
            var address = reqInfo.utils.getJsonBody(reqInfo.req);
            cart.billing_address = address;
            cart.shipping_address = address;
            return cart;
        };
        DaffInMemoryBackendCartAddressService.decorators = [
            { type: core.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */ DaffInMemoryBackendCartAddressService.ngInjectableDef = core.ɵɵdefineInjectable({ factory: function DaffInMemoryBackendCartAddressService_Factory() { return new DaffInMemoryBackendCartAddressService(); }, token: DaffInMemoryBackendCartAddressService, providedIn: "root" });
        return DaffInMemoryBackendCartAddressService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var DaffInMemoryBackendCartShippingAddressService = /** @class */ (function () {
        function DaffInMemoryBackendCartShippingAddressService() {
        }
        /**
         * @param {?} reqInfo
         * @return {?}
         */
        DaffInMemoryBackendCartShippingAddressService.prototype.get = /**
         * @param {?} reqInfo
         * @return {?}
         */
        function (reqInfo) {
            var _this = this;
            return reqInfo.utils.createResponse$((/**
             * @return {?}
             */
            function () { return ({
                body: _this.getShippingAddress(reqInfo),
                status: angularInMemoryWebApi.STATUS.OK
            }); }));
        };
        /**
         * @param {?} reqInfo
         * @return {?}
         */
        DaffInMemoryBackendCartShippingAddressService.prototype.put = /**
         * @param {?} reqInfo
         * @return {?}
         */
        function (reqInfo) {
            var _this = this;
            return reqInfo.utils.createResponse$((/**
             * @return {?}
             */
            function () { return ({
                body: _this.updateShippingAddress(reqInfo),
                status: angularInMemoryWebApi.STATUS.OK
            }); }));
        };
        /**
         * @private
         * @param {?} reqInfo
         * @return {?}
         */
        DaffInMemoryBackendCartShippingAddressService.prototype.getCart = /**
         * @private
         * @param {?} reqInfo
         * @return {?}
         */
        function (reqInfo) {
            return reqInfo.utils.findById(reqInfo.collection, Number(reqInfo.id));
        };
        /**
         * @private
         * @param {?} reqInfo
         * @return {?}
         */
        DaffInMemoryBackendCartShippingAddressService.prototype.getShippingAddress = /**
         * @private
         * @param {?} reqInfo
         * @return {?}
         */
        function (reqInfo) {
            return this.getCart(reqInfo).shipping_address;
        };
        /**
         * @private
         * @param {?} reqInfo
         * @return {?}
         */
        DaffInMemoryBackendCartShippingAddressService.prototype.updateShippingAddress = /**
         * @private
         * @param {?} reqInfo
         * @return {?}
         */
        function (reqInfo) {
            /** @type {?} */
            var cart = this.getCart(reqInfo);
            /** @type {?} */
            var address = reqInfo.utils.getJsonBody(reqInfo.req);
            cart.shipping_address = address;
            return cart;
        };
        DaffInMemoryBackendCartShippingAddressService.decorators = [
            { type: core.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */ DaffInMemoryBackendCartShippingAddressService.ngInjectableDef = core.ɵɵdefineInjectable({ factory: function DaffInMemoryBackendCartShippingAddressService_Factory() { return new DaffInMemoryBackendCartShippingAddressService(); }, token: DaffInMemoryBackendCartShippingAddressService, providedIn: "root" });
        return DaffInMemoryBackendCartShippingAddressService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var DaffInMemoryBackendCartBillingAddressService = /** @class */ (function () {
        function DaffInMemoryBackendCartBillingAddressService() {
        }
        /**
         * @param {?} reqInfo
         * @return {?}
         */
        DaffInMemoryBackendCartBillingAddressService.prototype.get = /**
         * @param {?} reqInfo
         * @return {?}
         */
        function (reqInfo) {
            var _this = this;
            return reqInfo.utils.createResponse$((/**
             * @return {?}
             */
            function () { return ({
                body: _this.getBillingAddress(reqInfo),
                status: angularInMemoryWebApi.STATUS.OK
            }); }));
        };
        /**
         * @param {?} reqInfo
         * @return {?}
         */
        DaffInMemoryBackendCartBillingAddressService.prototype.put = /**
         * @param {?} reqInfo
         * @return {?}
         */
        function (reqInfo) {
            var _this = this;
            return reqInfo.utils.createResponse$((/**
             * @return {?}
             */
            function () { return ({
                body: _this.updateBillingAddress(reqInfo),
                status: angularInMemoryWebApi.STATUS.OK
            }); }));
        };
        /**
         * @private
         * @param {?} reqInfo
         * @return {?}
         */
        DaffInMemoryBackendCartBillingAddressService.prototype.getCart = /**
         * @private
         * @param {?} reqInfo
         * @return {?}
         */
        function (reqInfo) {
            return reqInfo.utils.findById(reqInfo.collection, Number(reqInfo.id));
        };
        /**
         * @private
         * @param {?} reqInfo
         * @return {?}
         */
        DaffInMemoryBackendCartBillingAddressService.prototype.getBillingAddress = /**
         * @private
         * @param {?} reqInfo
         * @return {?}
         */
        function (reqInfo) {
            return this.getCart(reqInfo).billing_address;
        };
        /**
         * @private
         * @param {?} reqInfo
         * @return {?}
         */
        DaffInMemoryBackendCartBillingAddressService.prototype.updateBillingAddress = /**
         * @private
         * @param {?} reqInfo
         * @return {?}
         */
        function (reqInfo) {
            /** @type {?} */
            var cart = this.getCart(reqInfo);
            /** @type {?} */
            var address = reqInfo.utils.getJsonBody(reqInfo.req);
            cart.billing_address = address;
            return cart;
        };
        DaffInMemoryBackendCartBillingAddressService.decorators = [
            { type: core.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */ DaffInMemoryBackendCartBillingAddressService.ngInjectableDef = core.ɵɵdefineInjectable({ factory: function DaffInMemoryBackendCartBillingAddressService_Factory() { return new DaffInMemoryBackendCartBillingAddressService(); }, token: DaffInMemoryBackendCartBillingAddressService, providedIn: "root" });
        return DaffInMemoryBackendCartBillingAddressService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var DaffInMemoryBackendCartPaymentMethodsService = /** @class */ (function () {
        function DaffInMemoryBackendCartPaymentMethodsService() {
        }
        /**
         * @param {?} reqInfo
         * @return {?}
         */
        DaffInMemoryBackendCartPaymentMethodsService.prototype.get = /**
         * @param {?} reqInfo
         * @return {?}
         */
        function (reqInfo) {
            var _this = this;
            return reqInfo.utils.createResponse$((/**
             * @return {?}
             */
            function () { return ({
                body: _this.listPaymentMethods(reqInfo),
                status: angularInMemoryWebApi.STATUS.OK
            }); }));
        };
        /**
         * @private
         * @param {?} reqInfo
         * @return {?}
         */
        DaffInMemoryBackendCartPaymentMethodsService.prototype.getCart = /**
         * @private
         * @param {?} reqInfo
         * @return {?}
         */
        function (reqInfo) {
            return reqInfo.utils.findById(reqInfo.collection, Number(reqInfo.id));
        };
        /**
         * @private
         * @param {?} reqInfo
         * @return {?}
         */
        DaffInMemoryBackendCartPaymentMethodsService.prototype.listPaymentMethods = /**
         * @private
         * @param {?} reqInfo
         * @return {?}
         */
        function (reqInfo) {
            return this.getCart(reqInfo).available_payment_methods;
        };
        DaffInMemoryBackendCartPaymentMethodsService.decorators = [
            { type: core.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */ DaffInMemoryBackendCartPaymentMethodsService.ngInjectableDef = core.ɵɵdefineInjectable({ factory: function DaffInMemoryBackendCartPaymentMethodsService_Factory() { return new DaffInMemoryBackendCartPaymentMethodsService(); }, token: DaffInMemoryBackendCartPaymentMethodsService, providedIn: "root" });
        return DaffInMemoryBackendCartPaymentMethodsService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var DaffInMemoryBackendCartShippingMethodsService = /** @class */ (function () {
        function DaffInMemoryBackendCartShippingMethodsService() {
        }
        /**
         * @param {?} reqInfo
         * @return {?}
         */
        DaffInMemoryBackendCartShippingMethodsService.prototype.get = /**
         * @param {?} reqInfo
         * @return {?}
         */
        function (reqInfo) {
            var _this = this;
            return reqInfo.utils.createResponse$((/**
             * @return {?}
             */
            function () { return ({
                body: _this.listShippingMethods(reqInfo),
                status: angularInMemoryWebApi.STATUS.OK
            }); }));
        };
        /**
         * @private
         * @param {?} reqInfo
         * @return {?}
         */
        DaffInMemoryBackendCartShippingMethodsService.prototype.getCart = /**
         * @private
         * @param {?} reqInfo
         * @return {?}
         */
        function (reqInfo) {
            return reqInfo.utils.findById(reqInfo.collection, Number(reqInfo.id));
        };
        /**
         * @private
         * @param {?} reqInfo
         * @return {?}
         */
        DaffInMemoryBackendCartShippingMethodsService.prototype.listShippingMethods = /**
         * @private
         * @param {?} reqInfo
         * @return {?}
         */
        function (reqInfo) {
            return this.getCart(reqInfo).available_shipping_methods;
        };
        DaffInMemoryBackendCartShippingMethodsService.decorators = [
            { type: core.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */ DaffInMemoryBackendCartShippingMethodsService.ngInjectableDef = core.ɵɵdefineInjectable({ factory: function DaffInMemoryBackendCartShippingMethodsService_Factory() { return new DaffInMemoryBackendCartShippingMethodsService(); }, token: DaffInMemoryBackendCartShippingMethodsService, providedIn: "root" });
        return DaffInMemoryBackendCartShippingMethodsService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var DaffInMemoryBackendCartPaymentService = /** @class */ (function () {
        function DaffInMemoryBackendCartPaymentService() {
        }
        /**
         * @param {?} reqInfo
         * @return {?}
         */
        DaffInMemoryBackendCartPaymentService.prototype.get = /**
         * @param {?} reqInfo
         * @return {?}
         */
        function (reqInfo) {
            var _this = this;
            return reqInfo.utils.createResponse$((/**
             * @return {?}
             */
            function () { return ({
                body: _this.getPayment(reqInfo),
                status: angularInMemoryWebApi.STATUS.OK
            }); }));
        };
        /**
         * @param {?} reqInfo
         * @return {?}
         */
        DaffInMemoryBackendCartPaymentService.prototype.put = /**
         * @param {?} reqInfo
         * @return {?}
         */
        function (reqInfo) {
            var _this = this;
            return reqInfo.utils.createResponse$((/**
             * @return {?}
             */
            function () { return ({
                body: _this.updatePayment(reqInfo),
                status: angularInMemoryWebApi.STATUS.OK
            }); }));
        };
        /**
         * @param {?} reqInfo
         * @return {?}
         */
        DaffInMemoryBackendCartPaymentService.prototype.delete = /**
         * @param {?} reqInfo
         * @return {?}
         */
        function (reqInfo) {
            var _this = this;
            return reqInfo.utils.createResponse$((/**
             * @return {?}
             */
            function () { return ({
                body: _this.removePayment(reqInfo),
                status: angularInMemoryWebApi.STATUS.OK
            }); }));
        };
        /**
         * @private
         * @param {?} reqInfo
         * @return {?}
         */
        DaffInMemoryBackendCartPaymentService.prototype.getCart = /**
         * @private
         * @param {?} reqInfo
         * @return {?}
         */
        function (reqInfo) {
            return reqInfo.utils.findById(reqInfo.collection, Number(reqInfo.id));
        };
        /**
         * @private
         * @param {?} reqInfo
         * @return {?}
         */
        DaffInMemoryBackendCartPaymentService.prototype.getPayment = /**
         * @private
         * @param {?} reqInfo
         * @return {?}
         */
        function (reqInfo) {
            return this.getCart(reqInfo).payment;
        };
        /**
         * @private
         * @param {?} reqInfo
         * @return {?}
         */
        DaffInMemoryBackendCartPaymentService.prototype.updatePayment = /**
         * @private
         * @param {?} reqInfo
         * @return {?}
         */
        function (reqInfo) {
            /** @type {?} */
            var cart = this.getCart(reqInfo);
            var _a = reqInfo.utils.getJsonBody(reqInfo.req), payment = _a.payment, address = _a.address;
            cart.payment = payment;
            if (address)
                cart.billing_address = address;
            return cart;
        };
        /**
         * @private
         * @param {?} reqInfo
         * @return {?}
         */
        DaffInMemoryBackendCartPaymentService.prototype.removePayment = /**
         * @private
         * @param {?} reqInfo
         * @return {?}
         */
        function (reqInfo) {
            /** @type {?} */
            var cart = this.getCart(reqInfo);
            cart.payment = null;
            return cart;
        };
        DaffInMemoryBackendCartPaymentService.decorators = [
            { type: core.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */ DaffInMemoryBackendCartPaymentService.ngInjectableDef = core.ɵɵdefineInjectable({ factory: function DaffInMemoryBackendCartPaymentService_Factory() { return new DaffInMemoryBackendCartPaymentService(); }, token: DaffInMemoryBackendCartPaymentService, providedIn: "root" });
        return DaffInMemoryBackendCartPaymentService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var DaffInMemoryBackendCartShippingInformationService = /** @class */ (function () {
        function DaffInMemoryBackendCartShippingInformationService() {
        }
        /**
         * @param {?} reqInfo
         * @return {?}
         */
        DaffInMemoryBackendCartShippingInformationService.prototype.get = /**
         * @param {?} reqInfo
         * @return {?}
         */
        function (reqInfo) {
            var _this = this;
            return reqInfo.utils.createResponse$((/**
             * @return {?}
             */
            function () { return ({
                body: _this.getShippingInformation(reqInfo),
                status: angularInMemoryWebApi.STATUS.OK
            }); }));
        };
        /**
         * @param {?} reqInfo
         * @return {?}
         */
        DaffInMemoryBackendCartShippingInformationService.prototype.put = /**
         * @param {?} reqInfo
         * @return {?}
         */
        function (reqInfo) {
            var _this = this;
            return reqInfo.utils.createResponse$((/**
             * @return {?}
             */
            function () { return ({
                body: _this.updateShippingInformation(reqInfo),
                status: angularInMemoryWebApi.STATUS.OK
            }); }));
        };
        /**
         * @param {?} reqInfo
         * @return {?}
         */
        DaffInMemoryBackendCartShippingInformationService.prototype.delete = /**
         * @param {?} reqInfo
         * @return {?}
         */
        function (reqInfo) {
            var _this = this;
            return reqInfo.utils.createResponse$((/**
             * @return {?}
             */
            function () { return ({
                body: _this.removeShippingInformation(reqInfo),
                status: angularInMemoryWebApi.STATUS.OK
            }); }));
        };
        /**
         * @private
         * @param {?} reqInfo
         * @return {?}
         */
        DaffInMemoryBackendCartShippingInformationService.prototype.getCart = /**
         * @private
         * @param {?} reqInfo
         * @return {?}
         */
        function (reqInfo) {
            return reqInfo.utils.findById(reqInfo.collection, Number(reqInfo.id));
        };
        /**
         * @private
         * @param {?} reqInfo
         * @return {?}
         */
        DaffInMemoryBackendCartShippingInformationService.prototype.getShippingInformation = /**
         * @private
         * @param {?} reqInfo
         * @return {?}
         */
        function (reqInfo) {
            return this.getCart(reqInfo).shipping_information;
        };
        /**
         * @private
         * @param {?} reqInfo
         * @return {?}
         */
        DaffInMemoryBackendCartShippingInformationService.prototype.updateShippingInformation = /**
         * @private
         * @param {?} reqInfo
         * @return {?}
         */
        function (reqInfo) {
            /** @type {?} */
            var cart = this.getCart(reqInfo);
            /** @type {?} */
            var shippingInformation = reqInfo.utils.getJsonBody(reqInfo.req);
            cart.shipping_information = shippingInformation;
            return cart;
        };
        /**
         * @private
         * @param {?} reqInfo
         * @return {?}
         */
        DaffInMemoryBackendCartShippingInformationService.prototype.removeShippingInformation = /**
         * @private
         * @param {?} reqInfo
         * @return {?}
         */
        function (reqInfo) {
            /** @type {?} */
            var cart = this.getCart(reqInfo);
            cart.shipping_information = null;
            return cart;
        };
        DaffInMemoryBackendCartShippingInformationService.decorators = [
            { type: core.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */ DaffInMemoryBackendCartShippingInformationService.ngInjectableDef = core.ɵɵdefineInjectable({ factory: function DaffInMemoryBackendCartShippingInformationService_Factory() { return new DaffInMemoryBackendCartShippingInformationService(); }, token: DaffInMemoryBackendCartShippingInformationService, providedIn: "root" });
        return DaffInMemoryBackendCartShippingInformationService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * The root cart in-memory backend.
     * Creates the database and delegates requests to child backends.
     */
    var DaffInMemoryBackendCartRootService = /** @class */ (function () {
        function DaffInMemoryBackendCartRootService(cartService, cartItemsService, cartOrderService, cartCouponService, cartAddressService, cartShippingAddressService, cartBillingAddressService, cartPaymentMethodsService, cartShippingMethodsService, cartPaymentService, cartShippingInformationService) {
            this.cartService = cartService;
            this.cartItemsService = cartItemsService;
            this.cartOrderService = cartOrderService;
            this.cartCouponService = cartCouponService;
            this.cartAddressService = cartAddressService;
            this.cartShippingAddressService = cartShippingAddressService;
            this.cartBillingAddressService = cartBillingAddressService;
            this.cartPaymentMethodsService = cartPaymentMethodsService;
            this.cartShippingMethodsService = cartShippingMethodsService;
            this.cartPaymentService = cartPaymentService;
            this.cartShippingInformationService = cartShippingInformationService;
            this.carts = [];
        }
        /**
         * @param {?} reqInfo
         * @return {?}
         */
        DaffInMemoryBackendCartRootService.prototype.createDb = /**
         * @param {?} reqInfo
         * @return {?}
         */
        function (reqInfo) {
            if (reqInfo) {
                /** @type {?} */
                var seedData = reqInfo.utils.getJsonBody(reqInfo.req).carts;
                if (seedData) {
                    this.carts = seedData;
                }
            }
            return {
                cart: this.carts
            };
        };
        /**
         * @param {?} reqInfo
         * @return {?}
         */
        DaffInMemoryBackendCartRootService.prototype.get = /**
         * @param {?} reqInfo
         * @return {?}
         */
        function (reqInfo) {
            return this.delegateRequest(reqInfo);
        };
        /**
         * @param {?} reqInfo
         * @return {?}
         */
        DaffInMemoryBackendCartRootService.prototype.post = /**
         * @param {?} reqInfo
         * @return {?}
         */
        function (reqInfo) {
            return this.delegateRequest(reqInfo);
        };
        /**
         * @param {?} reqInfo
         * @return {?}
         */
        DaffInMemoryBackendCartRootService.prototype.put = /**
         * @param {?} reqInfo
         * @return {?}
         */
        function (reqInfo) {
            return this.delegateRequest(reqInfo);
        };
        /**
         * @param {?} reqInfo
         * @return {?}
         */
        DaffInMemoryBackendCartRootService.prototype.delete = /**
         * @param {?} reqInfo
         * @return {?}
         */
        function (reqInfo) {
            return this.delegateRequest(reqInfo);
        };
        /**
         * @private
         * @param {?} reqInfo
         * @return {?}
         */
        DaffInMemoryBackendCartRootService.prototype.delegateRequest = /**
         * @private
         * @param {?} reqInfo
         * @return {?}
         */
        function (reqInfo) {
            reqInfo.collection = this.carts;
            switch (reqInfo.collectionName) {
                case 'cart':
                    return this.cartService[reqInfo.method](reqInfo);
                case 'cart-items':
                    return this.cartItemsService[reqInfo.method](reqInfo);
                case 'cart-order':
                    return this.cartOrderService[reqInfo.method](reqInfo);
                case 'cart-coupon':
                    return this.cartCouponService[reqInfo.method](reqInfo);
                case 'cart-address':
                    return this.cartAddressService[reqInfo.method](reqInfo);
                case 'cart-shipping-address':
                    return this.cartShippingAddressService[reqInfo.method](reqInfo);
                case 'cart-billing-address':
                    return this.cartBillingAddressService[reqInfo.method](reqInfo);
                case 'cart-payment-methods':
                    return this.cartPaymentMethodsService[reqInfo.method](reqInfo);
                case 'cart-shipping-methods':
                    return this.cartShippingMethodsService[reqInfo.method](reqInfo);
                case 'cart-payment':
                    return this.cartPaymentService[reqInfo.method](reqInfo);
                case 'cart-shipping-information':
                    return this.cartShippingInformationService[reqInfo.method](reqInfo);
                default:
                    return reqInfo.utils.createResponse$((/**
                     * @return {?}
                     */
                    function () { return ({
                        body: {},
                        status: angularInMemoryWebApi.STATUS.OK
                    }); }));
            }
        };
        /**
         * The collections that the root service manages.
         * Useful for a higher-level backend that delegates to this one based on collection name.
         */
        DaffInMemoryBackendCartRootService.COLLECTION_NAMES = [
            'cart',
            'cart-items',
            'cart-order',
            'cart-coupon',
            'cart-address',
            'cart-shipping-address',
            'cart-billing-address',
            'cart-payment-methods',
            'cart-shipping-methods',
            'cart-payment',
            'cart-shipping-information',
        ];
        DaffInMemoryBackendCartRootService.decorators = [
            { type: core.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */
        DaffInMemoryBackendCartRootService.ctorParameters = function () { return [
            { type: DaffInMemoryBackendCartService },
            { type: DaffInMemoryBackendCartItemsService },
            { type: DaffInMemoryBackendCartOrderService },
            { type: DaffInMemoryBackendCartCouponService },
            { type: DaffInMemoryBackendCartAddressService },
            { type: DaffInMemoryBackendCartShippingAddressService },
            { type: DaffInMemoryBackendCartBillingAddressService },
            { type: DaffInMemoryBackendCartPaymentMethodsService },
            { type: DaffInMemoryBackendCartShippingMethodsService },
            { type: DaffInMemoryBackendCartPaymentService },
            { type: DaffInMemoryBackendCartShippingInformationService }
        ]; };
        /** @nocollapse */ DaffInMemoryBackendCartRootService.ngInjectableDef = core.ɵɵdefineInjectable({ factory: function DaffInMemoryBackendCartRootService_Factory() { return new DaffInMemoryBackendCartRootService(core.ɵɵinject(DaffInMemoryBackendCartService), core.ɵɵinject(DaffInMemoryBackendCartItemsService), core.ɵɵinject(DaffInMemoryBackendCartOrderService), core.ɵɵinject(DaffInMemoryBackendCartCouponService), core.ɵɵinject(DaffInMemoryBackendCartAddressService), core.ɵɵinject(DaffInMemoryBackendCartShippingAddressService), core.ɵɵinject(DaffInMemoryBackendCartBillingAddressService), core.ɵɵinject(DaffInMemoryBackendCartPaymentMethodsService), core.ɵɵinject(DaffInMemoryBackendCartShippingMethodsService), core.ɵɵinject(DaffInMemoryBackendCartPaymentService), core.ɵɵinject(DaffInMemoryBackendCartShippingInformationService)); }, token: DaffInMemoryBackendCartRootService, providedIn: "root" });
        return DaffInMemoryBackendCartRootService;
    }());
    if (false) {
        /**
         * The collections that the root service manages.
         * Useful for a higher-level backend that delegates to this one based on collection name.
         * @type {?}
         */
        DaffInMemoryBackendCartRootService.COLLECTION_NAMES;
        /** @type {?} */
        DaffInMemoryBackendCartRootService.prototype.carts;
        /**
         * @type {?}
         * @private
         */
        DaffInMemoryBackendCartRootService.prototype.cartService;
        /**
         * @type {?}
         * @private
         */
        DaffInMemoryBackendCartRootService.prototype.cartItemsService;
        /**
         * @type {?}
         * @private
         */
        DaffInMemoryBackendCartRootService.prototype.cartOrderService;
        /**
         * @type {?}
         * @private
         */
        DaffInMemoryBackendCartRootService.prototype.cartCouponService;
        /**
         * @type {?}
         * @private
         */
        DaffInMemoryBackendCartRootService.prototype.cartAddressService;
        /**
         * @type {?}
         * @private
         */
        DaffInMemoryBackendCartRootService.prototype.cartShippingAddressService;
        /**
         * @type {?}
         * @private
         */
        DaffInMemoryBackendCartRootService.prototype.cartBillingAddressService;
        /**
         * @type {?}
         * @private
         */
        DaffInMemoryBackendCartRootService.prototype.cartPaymentMethodsService;
        /**
         * @type {?}
         * @private
         */
        DaffInMemoryBackendCartRootService.prototype.cartShippingMethodsService;
        /**
         * @type {?}
         * @private
         */
        DaffInMemoryBackendCartRootService.prototype.cartPaymentService;
        /**
         * @type {?}
         * @private
         */
        DaffInMemoryBackendCartRootService.prototype.cartShippingInformationService;
    }

    exports.DaffCartInMemoryDriverModule = DaffCartInMemoryDriverModule;
    exports.DaffInMemoryBackendCartAddressService = DaffInMemoryBackendCartAddressService;
    exports.DaffInMemoryBackendCartBillingAddressService = DaffInMemoryBackendCartBillingAddressService;
    exports.DaffInMemoryBackendCartCouponService = DaffInMemoryBackendCartCouponService;
    exports.DaffInMemoryBackendCartItemsService = DaffInMemoryBackendCartItemsService;
    exports.DaffInMemoryBackendCartOrderService = DaffInMemoryBackendCartOrderService;
    exports.DaffInMemoryBackendCartPaymentMethodsService = DaffInMemoryBackendCartPaymentMethodsService;
    exports.DaffInMemoryBackendCartPaymentService = DaffInMemoryBackendCartPaymentService;
    exports.DaffInMemoryBackendCartRootService = DaffInMemoryBackendCartRootService;
    exports.DaffInMemoryBackendCartService = DaffInMemoryBackendCartService;
    exports.DaffInMemoryBackendCartShippingAddressService = DaffInMemoryBackendCartShippingAddressService;
    exports.DaffInMemoryBackendCartShippingInformationService = DaffInMemoryBackendCartShippingInformationService;
    exports.DaffInMemoryBackendCartShippingMethodsService = DaffInMemoryBackendCartShippingMethodsService;
    exports.DaffInMemoryCartBillingAddressService = DaffInMemoryCartBillingAddressService;
    exports.DaffInMemoryCartCouponService = DaffInMemoryCartCouponService;
    exports.DaffInMemoryCartItemService = DaffInMemoryCartItemService;
    exports.DaffInMemoryCartOrderService = DaffInMemoryCartOrderService;
    exports.DaffInMemoryCartPaymentMethodsService = DaffInMemoryCartPaymentMethodsService;
    exports.DaffInMemoryCartPaymentService = DaffInMemoryCartPaymentService;
    exports.DaffInMemoryCartService = DaffInMemoryCartService;
    exports.DaffInMemoryCartShippingAddressService = DaffInMemoryCartShippingAddressService;
    exports.DaffInMemoryCartShippingInformationService = DaffInMemoryCartShippingInformationService;
    exports.DaffInMemoryCartShippingMethodsService = DaffInMemoryCartShippingMethodsService;
    exports.ɵa = DaffInMemoryCartAddressService;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=daffodil-cart-driver-in-memory.umd.js.map
