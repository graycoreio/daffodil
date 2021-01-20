(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@daffodil/core')) :
    typeof define === 'function' && define.amd ? define('@daffodil/cart/driver', ['exports', '@angular/core', '@daffodil/core'], factory) :
    (global = global || self, factory((global.daffodil = global.daffodil || {}, global.daffodil.cart = global.daffodil.cart || {}, global.daffodil.cart.driver = {}), global.ng.core, global.core$1));
}(this, function (exports, core, core$1) { 'use strict';

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
     * The interface responsible for managing a customer's cart.
     * @record
     * @template T
     */
    function DaffCartServiceInterface() { }
    if (false) {
        /**
         * Retrieve a cart
         * @param {?} id
         * @return {?}
         */
        DaffCartServiceInterface.prototype.get = function (id) { };
        /**
         * Creates a cart.
         * @return {?}
         */
        DaffCartServiceInterface.prototype.create = function () { };
        /**
         * @deprecated
         * Prefer DaffCartItemServiceInterface.add
         *
         * Add an item to the cart.
         * @param {?} productId
         * @param {?} qty
         * @return {?}
         */
        DaffCartServiceInterface.prototype.addToCart = function (productId, qty) { };
        /**
         * Remove all items from a cart.
         * @param {?} id
         * @return {?}
         */
        DaffCartServiceInterface.prototype.clear = function (id) { };
    }
    /** @type {?} */
    var DaffCartDriver = new core.InjectionToken('DaffCartDriver');

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * The interface responsible for managing the billing address of a cart.
     * @record
     * @template T, V
     */
    function DaffCartBillingAddressServiceInterface() { }
    if (false) {
        /**
         * Retrieve the billing address of a cart
         * @param {?} cartId
         * @return {?}
         */
        DaffCartBillingAddressServiceInterface.prototype.get = function (cartId) { };
        /**
         * Update the billing address of a cart
         * @param {?} cartId
         * @param {?} address
         * @return {?}
         */
        DaffCartBillingAddressServiceInterface.prototype.update = function (cartId, address) { };
    }
    /** @type {?} */
    var DaffCartBillingAddressDriver = new core.InjectionToken('DaffCartBillingAddressDriver');

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * The interface responsible for managing the address of a cart.
     * @record
     * @template T, V
     */
    function DaffCartAddressServiceInterface() { }
    if (false) {
        /**
         * Update the billing and shipping address of a cart
         * @param {?} cartId
         * @param {?} address
         * @return {?}
         */
        DaffCartAddressServiceInterface.prototype.update = function (cartId, address) { };
    }
    /** @type {?} */
    var DaffCartAddressDriver = new core.InjectionToken('DaffCartAddressDriver');

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * The interface responsible for applying a coupon to a cart.
     * @record
     * @template T, V
     */
    function DaffCartCouponServiceInterface() { }
    if (false) {
        /**
         * Apply a coupon to the cart and return a partial of the cart.
         * @param {?} cartId
         * @param {?} coupon
         * @return {?}
         */
        DaffCartCouponServiceInterface.prototype.apply = function (cartId, coupon) { };
        /**
         * List coupon codes applied to a cart.
         * @param {?} cartId
         * @return {?}
         */
        DaffCartCouponServiceInterface.prototype.list = function (cartId) { };
        /**
         * Remove a coupon from the cart and return a partial of the cart.
         * @param {?} cartId
         * @param {?} coupon
         * @return {?}
         */
        DaffCartCouponServiceInterface.prototype.remove = function (cartId, coupon) { };
        /**
         * Remove all coupons from the cart and return a partial of the cart.
         * @param {?} cartId
         * @return {?}
         */
        DaffCartCouponServiceInterface.prototype.removeAll = function (cartId) { };
    }
    /** @type {?} */
    var DaffCartCouponDriver = new core.InjectionToken('DaffCartCouponDriver');

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * The interface responsible for managing the items of a cart.
     * @record
     * @template T, U, V
     */
    function DaffCartItemServiceInterface() { }
    if (false) {
        /**
         * List all of the available items of a cart
         * @param {?} cartId
         * @return {?}
         */
        DaffCartItemServiceInterface.prototype.list = function (cartId) { };
        /**
         * Get a specific cart item of a cart.
         * @param {?} cartId
         * @param {?} item_id
         * @return {?}
         */
        DaffCartItemServiceInterface.prototype.get = function (cartId, item_id) { };
        /**
         * Add something to a cart.
         * @param {?} id
         * @param {?} product
         * @return {?}
         */
        DaffCartItemServiceInterface.prototype.add = function (id, product) { };
        /**
         * Update an existing item in a cart
         * @param {?} cartId
         * @param {?} itemId
         * @param {?} changes
         * @return {?}
         */
        DaffCartItemServiceInterface.prototype.update = function (cartId, itemId, changes) { };
        /**
         * Remove an item from a cart.
         * @param {?} cartId
         * @param {?} itemId
         * @return {?}
         */
        DaffCartItemServiceInterface.prototype.delete = function (cartId, itemId) { };
    }
    /** @type {?} */
    var DaffCartItemDriver = new core.InjectionToken('DaffCartItemDriver');

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * The interface responsible for retrieving the available payment methods of a cart.
     * @record
     * @template T
     */
    function DaffCartPaymentMethodsServiceInterface() { }
    if (false) {
        /**
         * List the available payment methods of a cart.
         * @param {?} cartId
         * @return {?}
         */
        DaffCartPaymentMethodsServiceInterface.prototype.list = function (cartId) { };
    }
    /** @type {?} */
    var DaffCartPaymentMethodsDriver = new core.InjectionToken('DaffCartPaymentMethodsDriver');

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * The interface responsible for managing the selected payment method of a cart.
     * @record
     * @template T, V, R
     */
    function DaffCartPaymentServiceInterface() { }
    if (false) {
        /**
         * Get the currently applied payment method of a cart.
         * @param {?} cartId
         * @return {?}
         */
        DaffCartPaymentServiceInterface.prototype.get = function (cartId) { };
        /**
         * Update the payment method applied to a cart.
         * @param {?} cartId
         * @param {?} payment
         * @return {?}
         */
        DaffCartPaymentServiceInterface.prototype.update = function (cartId, payment) { };
        /**
         * Update the billing address and payment method applied to a cart.
         * @param {?} cartId
         * @param {?} payment
         * @param {?} address
         * @return {?}
         */
        DaffCartPaymentServiceInterface.prototype.updateWithBilling = function (cartId, payment, address) { };
        /**
         * Remove the payment method applied to a cart.
         * @param {?} cartId
         * @return {?}
         */
        DaffCartPaymentServiceInterface.prototype.remove = function (cartId) { };
    }
    /** @type {?} */
    var DaffCartPaymentDriver = new core.InjectionToken('DaffCartPaymentDriver');

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * The interface responsible for managing the shipping address of a cart.
     * @record
     * @template T, V
     */
    function DaffCartShippingAddressServiceInterface() { }
    if (false) {
        /**
         * Retrieve the shipping address of a cart.
         * @param {?} cartId
         * @return {?}
         */
        DaffCartShippingAddressServiceInterface.prototype.get = function (cartId) { };
        /**
         * Update the shipping address of a cart.
         * @param {?} cartId
         * @param {?} address
         * @return {?}
         */
        DaffCartShippingAddressServiceInterface.prototype.update = function (cartId, address) { };
    }
    /** @type {?} */
    var DaffCartShippingAddressDriver = new core.InjectionToken('DaffCartShippingAddressDriver');

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * The interface responsible for mediating the interaction of the shipping
     * information of a cart with a given platform.
     * @record
     * @template T, V
     */
    function DaffCartShippingInformationServiceInterface() { }
    if (false) {
        /**
         * Get the currently selected shipping method of a cart.
         * @param {?} cartId
         * @return {?}
         */
        DaffCartShippingInformationServiceInterface.prototype.get = function (cartId) { };
        /**
         * Update the currently selected shipping method of a cart.
         * @param {?} cartId
         * @param {?} shippingInfo
         * @return {?}
         */
        DaffCartShippingInformationServiceInterface.prototype.update = function (cartId, shippingInfo) { };
        /**
         * Remove the currently selected shipping method from a cart.
         * @param {?} cartId
         * @param {?=} id
         * @return {?}
         */
        DaffCartShippingInformationServiceInterface.prototype.delete = function (cartId, id) { };
    }
    /** @type {?} */
    var DaffCartShippingInformationDriver = new core.InjectionToken('DaffCartShippingInformationDriver');

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * The interface responsible for retrieving the available shipping methods of a cart.
     * @record
     * @template T
     */
    function DaffCartShippingMethodsServiceInterface() { }
    if (false) {
        /**
         * List the available shipping methods for a cart.
         * @param {?} cartId
         * @return {?}
         */
        DaffCartShippingMethodsServiceInterface.prototype.list = function (cartId) { };
    }
    /** @type {?} */
    var DaffCartShippingMethodsDriver = new core.InjectionToken('DaffCartShippingMethodsDriver');

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * The interface responsible for placing an order for the customer's cart.
     * @record
     * @template T, V, R
     */
    function DaffCartOrderServiceInterface() { }
    if (false) {
        /**
         * Place an order and return the order ID.
         * @param {?} id
         * @param {?=} payment
         * @return {?}
         */
        DaffCartOrderServiceInterface.prototype.placeOrder = function (id, payment) { };
    }
    /** @type {?} */
    var DaffCartOrderDriver = new core.InjectionToken('DaffCartOrderDriver');

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @enum {string} */
    var DaffCartDriverErrorCodes = {
        CART_NOT_FOUND: 'DAFF_CART_NOT_FOUND',
        PRODUCT_NOT_FOUND: 'DAFF_PRODUCT_NOT_FOUND',
        PRODUCT_OUT_OF_STOCK: 'DAFF_PRODUCT_OUT_OF_STOCK',
        INVALID_COUPON_CODE: 'DAFF_INVALID_COUPON_CODE',
        INVALID_COUNTRY: 'DAFF_INVALID_COUNTRY',
        INVALID_REGION: 'DAFF_INVALID_REGION',
        INVALID_API_RESPONSE: 'DAFF_INVALID_API_RESPONSE',
        EXPIRED_PAYMENT_METHOD: 'DAFF_EXPIRED_PAYMENT_METHOD',
    };

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * An error thrown when a cart driver call is sent with a cart identifier
     * that cannot be found by the platform.
     */
    var   /**
     * An error thrown when a cart driver call is sent with a cart identifier
     * that cannot be found by the platform.
     */
    DaffCartNotFoundError = /** @class */ (function (_super) {
        __extends(DaffCartNotFoundError, _super);
        function DaffCartNotFoundError(message) {
            var _this = _super.call(this, message) || this;
            _this.code = DaffCartDriverErrorCodes.CART_NOT_FOUND;
            return _this;
        }
        return DaffCartNotFoundError;
    }(core$1.DaffInheritableError));
    if (false) {
        /** @type {?} */
        DaffCartNotFoundError.prototype.code;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * An error thrown when the payment token used for the payment method update has expired.
     * This happens when the a place order request happens too long after payment update.
     * The payment must be updated again before an order can be placed.
     */
    var   /**
     * An error thrown when the payment token used for the payment method update has expired.
     * This happens when the a place order request happens too long after payment update.
     * The payment must be updated again before an order can be placed.
     */
    DaffCartExpiredPaymentTokenError = /** @class */ (function (_super) {
        __extends(DaffCartExpiredPaymentTokenError, _super);
        function DaffCartExpiredPaymentTokenError(message) {
            var _this = _super.call(this, message) || this;
            _this.message = message;
            _this.code = DaffCartDriverErrorCodes.EXPIRED_PAYMENT_METHOD;
            return _this;
        }
        return DaffCartExpiredPaymentTokenError;
    }(core$1.DaffInheritableError));
    if (false) {
        /** @type {?} */
        DaffCartExpiredPaymentTokenError.prototype.code;
        /** @type {?} */
        DaffCartExpiredPaymentTokenError.prototype.message;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * An error thrown when the platform's API response is missing required information
     * or malformed in an unrecoverable way.
     */
    var   /**
     * An error thrown when the platform's API response is missing required information
     * or malformed in an unrecoverable way.
     */
    DaffCartInvalidAPIResponseError = /** @class */ (function (_super) {
        __extends(DaffCartInvalidAPIResponseError, _super);
        function DaffCartInvalidAPIResponseError(message) {
            var _this = _super.call(this, message) || this;
            _this.message = message;
            _this.code = DaffCartDriverErrorCodes.INVALID_API_RESPONSE;
            return _this;
        }
        return DaffCartInvalidAPIResponseError;
    }(core$1.DaffInheritableError));
    if (false) {
        /** @type {?} */
        DaffCartInvalidAPIResponseError.prototype.code;
        /** @type {?} */
        DaffCartInvalidAPIResponseError.prototype.message;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * An error thrown when the specified country is invalid for the specified address
     * or missing where it is required.
     */
    var   /**
     * An error thrown when the specified country is invalid for the specified address
     * or missing where it is required.
     */
    DaffInvalidCountryError = /** @class */ (function (_super) {
        __extends(DaffInvalidCountryError, _super);
        function DaffInvalidCountryError(message) {
            var _this = _super.call(this, message) || this;
            _this.code = DaffCartDriverErrorCodes.INVALID_COUNTRY;
            return _this;
        }
        return DaffInvalidCountryError;
    }(core$1.DaffInheritableError));
    if (false) {
        /** @type {?} */
        DaffInvalidCountryError.prototype.code;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * An error thrown when the specified coupon code cannot be applied to the cart.
     * Either the coupon code does not exist or the required conditions are not met.
     */
    var   /**
     * An error thrown when the specified coupon code cannot be applied to the cart.
     * Either the coupon code does not exist or the required conditions are not met.
     */
    DaffInvalidCouponCodeError = /** @class */ (function (_super) {
        __extends(DaffInvalidCouponCodeError, _super);
        function DaffInvalidCouponCodeError(message) {
            var _this = _super.call(this, message) || this;
            _this.code = DaffCartDriverErrorCodes.INVALID_COUPON_CODE;
            return _this;
        }
        return DaffInvalidCouponCodeError;
    }(core$1.DaffInheritableError));
    if (false) {
        /** @type {?} */
        DaffInvalidCouponCodeError.prototype.code;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * An error thrown when the specified region is invalid for the specified address
     * or missing where it is required.
     */
    var   /**
     * An error thrown when the specified region is invalid for the specified address
     * or missing where it is required.
     */
    DaffInvalidRegionError = /** @class */ (function (_super) {
        __extends(DaffInvalidRegionError, _super);
        function DaffInvalidRegionError(message) {
            var _this = _super.call(this, message) || this;
            _this.code = DaffCartDriverErrorCodes.INVALID_REGION;
            return _this;
        }
        return DaffInvalidRegionError;
    }(core$1.DaffInheritableError));
    if (false) {
        /** @type {?} */
        DaffInvalidRegionError.prototype.code;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * An error thrown when an add to cart request is sent
     * for a product that cannot be found.
     */
    var   /**
     * An error thrown when an add to cart request is sent
     * for a product that cannot be found.
     */
    DaffProductNotFoundError = /** @class */ (function (_super) {
        __extends(DaffProductNotFoundError, _super);
        function DaffProductNotFoundError(message) {
            var _this = _super.call(this, message) || this;
            _this.code = DaffCartDriverErrorCodes.PRODUCT_NOT_FOUND;
            return _this;
        }
        return DaffProductNotFoundError;
    }(core$1.DaffInheritableError));
    if (false) {
        /** @type {?} */
        DaffProductNotFoundError.prototype.code;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * An error thrown when a cart item's requested quantity
     * exceeds that allowed by the platform for the specified product.
     */
    var   /**
     * An error thrown when a cart item's requested quantity
     * exceeds that allowed by the platform for the specified product.
     */
    DaffProductOutOfStockError = /** @class */ (function (_super) {
        __extends(DaffProductOutOfStockError, _super);
        function DaffProductOutOfStockError(message) {
            var _this = _super.call(this, message) || this;
            _this.code = DaffCartDriverErrorCodes.PRODUCT_OUT_OF_STOCK;
            return _this;
        }
        return DaffProductOutOfStockError;
    }(core$1.DaffInheritableError));
    if (false) {
        /** @type {?} */
        DaffProductOutOfStockError.prototype.code;
    }

    var _a;
    /**
     * A mapping from error codes to error class constructors.
     * @type {?}
     */
    var DaffCartDriverErrorMap = (_a = {},
        _a[DaffCartDriverErrorCodes.CART_NOT_FOUND] = DaffCartNotFoundError,
        _a[DaffCartDriverErrorCodes.PRODUCT_NOT_FOUND] = DaffProductNotFoundError,
        _a[DaffCartDriverErrorCodes.PRODUCT_OUT_OF_STOCK] = DaffProductOutOfStockError,
        _a[DaffCartDriverErrorCodes.INVALID_COUPON_CODE] = DaffInvalidCouponCodeError,
        _a[DaffCartDriverErrorCodes.INVALID_COUNTRY] = DaffInvalidCountryError,
        _a[DaffCartDriverErrorCodes.INVALID_REGION] = DaffInvalidRegionError,
        _a[DaffCartDriverErrorCodes.INVALID_API_RESPONSE] = DaffCartInvalidAPIResponseError,
        _a[DaffCartDriverErrorCodes.EXPIRED_PAYMENT_METHOD] = DaffCartExpiredPaymentTokenError,
        _a);

    exports.DaffCartAddressDriver = DaffCartAddressDriver;
    exports.DaffCartBillingAddressDriver = DaffCartBillingAddressDriver;
    exports.DaffCartCouponDriver = DaffCartCouponDriver;
    exports.DaffCartDriver = DaffCartDriver;
    exports.DaffCartDriverErrorCodes = DaffCartDriverErrorCodes;
    exports.DaffCartDriverErrorMap = DaffCartDriverErrorMap;
    exports.DaffCartExpiredPaymentTokenError = DaffCartExpiredPaymentTokenError;
    exports.DaffCartInvalidAPIResponseError = DaffCartInvalidAPIResponseError;
    exports.DaffCartItemDriver = DaffCartItemDriver;
    exports.DaffCartNotFoundError = DaffCartNotFoundError;
    exports.DaffCartOrderDriver = DaffCartOrderDriver;
    exports.DaffCartPaymentDriver = DaffCartPaymentDriver;
    exports.DaffCartPaymentMethodsDriver = DaffCartPaymentMethodsDriver;
    exports.DaffCartShippingAddressDriver = DaffCartShippingAddressDriver;
    exports.DaffCartShippingInformationDriver = DaffCartShippingInformationDriver;
    exports.DaffCartShippingMethodsDriver = DaffCartShippingMethodsDriver;
    exports.DaffInvalidCountryError = DaffInvalidCountryError;
    exports.DaffInvalidCouponCodeError = DaffInvalidCouponCodeError;
    exports.DaffInvalidRegionError = DaffInvalidRegionError;
    exports.DaffProductNotFoundError = DaffProductNotFoundError;
    exports.DaffProductOutOfStockError = DaffProductOutOfStockError;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=daffodil-cart-driver.umd.js.map
