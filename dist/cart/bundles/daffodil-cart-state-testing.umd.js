(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@daffodil/cart/state'), require('rxjs'), require('@daffodil/core/testing'), require('@daffodil/cart/testing')) :
    typeof define === 'function' && define.amd ? define('@daffodil/cart/state/testing', ['exports', '@angular/core', '@daffodil/cart/state', 'rxjs', '@daffodil/core/testing', '@daffodil/cart/testing'], factory) :
    (global = global || self, factory((global.daffodil = global.daffodil || {}, global.daffodil.cart = global.daffodil.cart || {}, global.daffodil.cart.state = global.daffodil.cart.state || {}, global.daffodil.cart.state.testing = {}), global.ng.core, global.daffodil.cart.state, global.rxjs, global.testing, global.daffodil.cart.testing));
}(this, function (exports, core, state, rxjs, testing, testing$1) { 'use strict';

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
    var MockDaffCartFacade = /** @class */ (function () {
        function MockDaffCartFacade() {
            this.cart$ = new rxjs.BehaviorSubject(null);
            this.resolved$ = new rxjs.BehaviorSubject(state.DaffCartResolveState.Default);
            this.loadingObject$ = new rxjs.BehaviorSubject(null);
            this.featureLoading$ = new rxjs.BehaviorSubject(false);
            this.featureResolving$ = new rxjs.BehaviorSubject(false);
            this.featureMutating$ = new rxjs.BehaviorSubject(false);
            this.loading$ = new rxjs.BehaviorSubject(false);
            this.resolving$ = new rxjs.BehaviorSubject(false);
            this.mutating$ = new rxjs.BehaviorSubject(false);
            this.billingAddressLoading$ = new rxjs.BehaviorSubject(false);
            this.billingAddressResolving$ = new rxjs.BehaviorSubject(false);
            this.billingAddressMutating$ = new rxjs.BehaviorSubject(false);
            this.shippingAddressLoading$ = new rxjs.BehaviorSubject(false);
            this.shippingAddressResolving$ = new rxjs.BehaviorSubject(false);
            this.shippingAddressMutating$ = new rxjs.BehaviorSubject(false);
            this.shippingInformationLoading$ = new rxjs.BehaviorSubject(false);
            this.shippingInformationResolving$ = new rxjs.BehaviorSubject(false);
            this.shippingInformationMutating$ = new rxjs.BehaviorSubject(false);
            this.shippingMethodsLoading$ = new rxjs.BehaviorSubject(false);
            this.shippingMethodsResolving$ = new rxjs.BehaviorSubject(false);
            this.paymentLoading$ = new rxjs.BehaviorSubject(false);
            this.paymentResolving$ = new rxjs.BehaviorSubject(false);
            this.paymentMutating$ = new rxjs.BehaviorSubject(false);
            this.paymentMethodsLoading$ = new rxjs.BehaviorSubject(false);
            this.paymentMethodsResolving$ = new rxjs.BehaviorSubject(false);
            this.couponLoading$ = new rxjs.BehaviorSubject(false);
            this.couponResolving$ = new rxjs.BehaviorSubject(false);
            this.couponMutating$ = new rxjs.BehaviorSubject(false);
            this.itemLoading$ = new rxjs.BehaviorSubject(false);
            this.itemAdding$ = new rxjs.BehaviorSubject(false);
            this.itemResolving$ = new rxjs.BehaviorSubject(false);
            this.itemMutating$ = new rxjs.BehaviorSubject(false);
            this.errors$ = new rxjs.BehaviorSubject(null);
            this.cartErrors$ = new rxjs.BehaviorSubject([]);
            this.itemErrors$ = new rxjs.BehaviorSubject([]);
            this.billingAddressErrors$ = new rxjs.BehaviorSubject([]);
            this.shippingAddressErrors$ = new rxjs.BehaviorSubject([]);
            this.shippingInformationErrors$ = new rxjs.BehaviorSubject([]);
            this.shippingMethodsErrors$ = new rxjs.BehaviorSubject([]);
            this.paymentErrors$ = new rxjs.BehaviorSubject([]);
            this.paymentMethodsErrors$ = new rxjs.BehaviorSubject([]);
            this.couponErrors$ = new rxjs.BehaviorSubject([]);
            this.id$ = new rxjs.BehaviorSubject(null);
            this.subtotal$ = new rxjs.BehaviorSubject(null);
            this.grandTotal$ = new rxjs.BehaviorSubject(null);
            this.subtotalExcludingTax$ = new rxjs.BehaviorSubject(null);
            this.subtotalIncludingTax$ = new rxjs.BehaviorSubject(null);
            this.subtotalWithDiscountExcludingTax$ = new rxjs.BehaviorSubject(null);
            this.subtotalWithDiscountIncludingTax$ = new rxjs.BehaviorSubject(null);
            this.discountTotals$ = new rxjs.BehaviorSubject([]);
            this.totalTax$ = new rxjs.BehaviorSubject(null);
            this.shippingTotal$ = new rxjs.BehaviorSubject(null);
            this.coupons$ = new rxjs.BehaviorSubject([]);
            this.items$ = new rxjs.BehaviorSubject([]);
            this.totalItems$ = new rxjs.BehaviorSubject(null);
            this.hasOutOfStockItems$ = new rxjs.BehaviorSubject(false);
            this.itemDictionary$ = new rxjs.BehaviorSubject({});
            this.billingAddress$ = new rxjs.BehaviorSubject(null);
            this.shippingAddress$ = new rxjs.BehaviorSubject(null);
            this.payment$ = new rxjs.BehaviorSubject(null);
            this.totals$ = new rxjs.BehaviorSubject([]);
            this.shippingInformation$ = new rxjs.BehaviorSubject(null);
            this.availableShippingMethods$ = new rxjs.BehaviorSubject([]);
            this.availablePaymentMethods$ = new rxjs.BehaviorSubject([]);
            this.paymentId$ = new rxjs.BehaviorSubject(null);
            this.isCartEmpty$ = new rxjs.BehaviorSubject(true);
            this.isBillingSameAsShipping$ = new rxjs.BehaviorSubject(false);
            this.hasBillingAddress$ = new rxjs.BehaviorSubject(false);
            this.hasShippingAddress$ = new rxjs.BehaviorSubject(false);
            this.hasShippingMethod$ = new rxjs.BehaviorSubject(false);
            this.hasPaymentMethod$ = new rxjs.BehaviorSubject(false);
            this.canPlaceOrder$ = new rxjs.BehaviorSubject(false);
            this.orderResultLoading$ = new rxjs.BehaviorSubject(false);
            this.orderResultErrors$ = new rxjs.BehaviorSubject([]);
            this.orderResult$ = new rxjs.BehaviorSubject({
                id: null,
                orderId: null,
                cartId: null,
            });
            this.orderResultId$ = new rxjs.BehaviorSubject(null);
            this.orderResultCartId$ = new rxjs.BehaviorSubject(null);
            this.hasOrderResult$ = new rxjs.BehaviorSubject(false);
        }
        /**
         * @param {?} itemId
         * @return {?}
         */
        MockDaffCartFacade.prototype.getCartItemDiscountedTotal = /**
         * @param {?} itemId
         * @return {?}
         */
        function (itemId) {
            return new rxjs.BehaviorSubject(null);
        };
        /**
         * @param {?} itemId
         * @return {?}
         */
        MockDaffCartFacade.prototype.getConfiguredCartItemAttributes = /**
         * @param {?} itemId
         * @return {?}
         */
        function (itemId) {
            return new rxjs.BehaviorSubject([]);
        };
        /**
         * @param {?} itemId
         * @return {?}
         */
        MockDaffCartFacade.prototype.getCompositeCartItemOptions = /**
         * @param {?} itemId
         * @return {?}
         */
        function (itemId) {
            return new rxjs.BehaviorSubject([]);
        };
        /**
         * @param {?} itemId
         * @return {?}
         */
        MockDaffCartFacade.prototype.isCartItemOutOfStock = /**
         * @param {?} itemId
         * @return {?}
         */
        function (itemId) {
            return new rxjs.BehaviorSubject(false);
        };
        /**
         * @param {?} itemId
         * @return {?}
         */
        MockDaffCartFacade.prototype.getCartItemState = /**
         * @param {?} itemId
         * @return {?}
         */
        function (itemId) {
            return new rxjs.BehaviorSubject(state.DaffCartItemStateEnum.Default);
        };
        /**
         * @param {?} action
         * @return {?}
         */
        MockDaffCartFacade.prototype.dispatch = /**
         * @param {?} action
         * @return {?}
         */
        function (action) { };
        ;
        MockDaffCartFacade.decorators = [
            { type: core.Injectable, args: [{ providedIn: 'root' },] }
        ];
        /** @nocollapse */ MockDaffCartFacade.ngInjectableDef = core.ɵɵdefineInjectable({ factory: function MockDaffCartFacade_Factory() { return new MockDaffCartFacade(); }, token: MockDaffCartFacade, providedIn: "root" });
        return MockDaffCartFacade;
    }());
    if (false) {
        /** @type {?} */
        MockDaffCartFacade.prototype.cart$;
        /** @type {?} */
        MockDaffCartFacade.prototype.resolved$;
        /** @type {?} */
        MockDaffCartFacade.prototype.loadingObject$;
        /** @type {?} */
        MockDaffCartFacade.prototype.featureLoading$;
        /** @type {?} */
        MockDaffCartFacade.prototype.featureResolving$;
        /** @type {?} */
        MockDaffCartFacade.prototype.featureMutating$;
        /** @type {?} */
        MockDaffCartFacade.prototype.loading$;
        /** @type {?} */
        MockDaffCartFacade.prototype.resolving$;
        /** @type {?} */
        MockDaffCartFacade.prototype.mutating$;
        /** @type {?} */
        MockDaffCartFacade.prototype.billingAddressLoading$;
        /** @type {?} */
        MockDaffCartFacade.prototype.billingAddressResolving$;
        /** @type {?} */
        MockDaffCartFacade.prototype.billingAddressMutating$;
        /** @type {?} */
        MockDaffCartFacade.prototype.shippingAddressLoading$;
        /** @type {?} */
        MockDaffCartFacade.prototype.shippingAddressResolving$;
        /** @type {?} */
        MockDaffCartFacade.prototype.shippingAddressMutating$;
        /** @type {?} */
        MockDaffCartFacade.prototype.shippingInformationLoading$;
        /** @type {?} */
        MockDaffCartFacade.prototype.shippingInformationResolving$;
        /** @type {?} */
        MockDaffCartFacade.prototype.shippingInformationMutating$;
        /** @type {?} */
        MockDaffCartFacade.prototype.shippingMethodsLoading$;
        /** @type {?} */
        MockDaffCartFacade.prototype.shippingMethodsResolving$;
        /** @type {?} */
        MockDaffCartFacade.prototype.paymentLoading$;
        /** @type {?} */
        MockDaffCartFacade.prototype.paymentResolving$;
        /** @type {?} */
        MockDaffCartFacade.prototype.paymentMutating$;
        /** @type {?} */
        MockDaffCartFacade.prototype.paymentMethodsLoading$;
        /** @type {?} */
        MockDaffCartFacade.prototype.paymentMethodsResolving$;
        /** @type {?} */
        MockDaffCartFacade.prototype.couponLoading$;
        /** @type {?} */
        MockDaffCartFacade.prototype.couponResolving$;
        /** @type {?} */
        MockDaffCartFacade.prototype.couponMutating$;
        /** @type {?} */
        MockDaffCartFacade.prototype.itemLoading$;
        /** @type {?} */
        MockDaffCartFacade.prototype.itemAdding$;
        /** @type {?} */
        MockDaffCartFacade.prototype.itemResolving$;
        /** @type {?} */
        MockDaffCartFacade.prototype.itemMutating$;
        /** @type {?} */
        MockDaffCartFacade.prototype.errors$;
        /** @type {?} */
        MockDaffCartFacade.prototype.cartErrors$;
        /** @type {?} */
        MockDaffCartFacade.prototype.itemErrors$;
        /** @type {?} */
        MockDaffCartFacade.prototype.billingAddressErrors$;
        /** @type {?} */
        MockDaffCartFacade.prototype.shippingAddressErrors$;
        /** @type {?} */
        MockDaffCartFacade.prototype.shippingInformationErrors$;
        /** @type {?} */
        MockDaffCartFacade.prototype.shippingMethodsErrors$;
        /** @type {?} */
        MockDaffCartFacade.prototype.paymentErrors$;
        /** @type {?} */
        MockDaffCartFacade.prototype.paymentMethodsErrors$;
        /** @type {?} */
        MockDaffCartFacade.prototype.couponErrors$;
        /** @type {?} */
        MockDaffCartFacade.prototype.id$;
        /** @type {?} */
        MockDaffCartFacade.prototype.subtotal$;
        /** @type {?} */
        MockDaffCartFacade.prototype.grandTotal$;
        /** @type {?} */
        MockDaffCartFacade.prototype.subtotalExcludingTax$;
        /** @type {?} */
        MockDaffCartFacade.prototype.subtotalIncludingTax$;
        /** @type {?} */
        MockDaffCartFacade.prototype.subtotalWithDiscountExcludingTax$;
        /** @type {?} */
        MockDaffCartFacade.prototype.subtotalWithDiscountIncludingTax$;
        /** @type {?} */
        MockDaffCartFacade.prototype.discountTotals$;
        /** @type {?} */
        MockDaffCartFacade.prototype.totalTax$;
        /** @type {?} */
        MockDaffCartFacade.prototype.shippingTotal$;
        /** @type {?} */
        MockDaffCartFacade.prototype.coupons$;
        /** @type {?} */
        MockDaffCartFacade.prototype.items$;
        /** @type {?} */
        MockDaffCartFacade.prototype.totalItems$;
        /** @type {?} */
        MockDaffCartFacade.prototype.hasOutOfStockItems$;
        /** @type {?} */
        MockDaffCartFacade.prototype.itemDictionary$;
        /** @type {?} */
        MockDaffCartFacade.prototype.billingAddress$;
        /** @type {?} */
        MockDaffCartFacade.prototype.shippingAddress$;
        /** @type {?} */
        MockDaffCartFacade.prototype.payment$;
        /** @type {?} */
        MockDaffCartFacade.prototype.totals$;
        /** @type {?} */
        MockDaffCartFacade.prototype.shippingInformation$;
        /** @type {?} */
        MockDaffCartFacade.prototype.availableShippingMethods$;
        /** @type {?} */
        MockDaffCartFacade.prototype.availablePaymentMethods$;
        /** @type {?} */
        MockDaffCartFacade.prototype.paymentId$;
        /** @type {?} */
        MockDaffCartFacade.prototype.isCartEmpty$;
        /** @type {?} */
        MockDaffCartFacade.prototype.isBillingSameAsShipping$;
        /** @type {?} */
        MockDaffCartFacade.prototype.hasBillingAddress$;
        /** @type {?} */
        MockDaffCartFacade.prototype.hasShippingAddress$;
        /** @type {?} */
        MockDaffCartFacade.prototype.hasShippingMethod$;
        /** @type {?} */
        MockDaffCartFacade.prototype.hasPaymentMethod$;
        /** @type {?} */
        MockDaffCartFacade.prototype.canPlaceOrder$;
        /** @type {?} */
        MockDaffCartFacade.prototype.orderResultLoading$;
        /** @type {?} */
        MockDaffCartFacade.prototype.orderResultErrors$;
        /** @type {?} */
        MockDaffCartFacade.prototype.orderResult$;
        /** @type {?} */
        MockDaffCartFacade.prototype.orderResultId$;
        /** @type {?} */
        MockDaffCartFacade.prototype.orderResultCartId$;
        /** @type {?} */
        MockDaffCartFacade.prototype.hasOrderResult$;
        /* Skipping unhandled member: ;*/
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var DaffCartTestingModule = /** @class */ (function () {
        function DaffCartTestingModule() {
        }
        DaffCartTestingModule.decorators = [
            { type: core.NgModule, args: [{
                        providers: [
                            { provide: state.DaffCartFacade, useExisting: MockDaffCartFacade }
                        ]
                    },] }
        ];
        return DaffCartTestingModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var DaffMockStatefulCartItem = /** @class */ (function (_super) {
        __extends(DaffMockStatefulCartItem, _super);
        function DaffMockStatefulCartItem() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.daffState = state.DaffCartItemStateEnum.Default;
            return _this;
        }
        return DaffMockStatefulCartItem;
    }(testing$1.DaffMockCartItem));
    if (false) {
        /** @type {?} */
        DaffMockStatefulCartItem.prototype.daffState;
    }
    var DaffStatefulCartItemFactory = /** @class */ (function (_super) {
        __extends(DaffStatefulCartItemFactory, _super);
        function DaffStatefulCartItemFactory() {
            return _super.call(this, DaffMockStatefulCartItem) || this;
        }
        DaffStatefulCartItemFactory.decorators = [
            { type: core.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */
        DaffStatefulCartItemFactory.ctorParameters = function () { return []; };
        /** @nocollapse */ DaffStatefulCartItemFactory.ngInjectableDef = core.ɵɵdefineInjectable({ factory: function DaffStatefulCartItemFactory_Factory() { return new DaffStatefulCartItemFactory(); }, token: DaffStatefulCartItemFactory, providedIn: "root" });
        return DaffStatefulCartItemFactory;
    }(testing.DaffModelFactory));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var DaffMockStatefulCompositeCartItem = /** @class */ (function (_super) {
        __extends(DaffMockStatefulCompositeCartItem, _super);
        function DaffMockStatefulCompositeCartItem() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return DaffMockStatefulCompositeCartItem;
    }(testing$1.DaffMockCompositeCartItem));
    if (false) {
        /** @type {?} */
        DaffMockStatefulCompositeCartItem.prototype.daffState;
    }
    var DaffStatefulCompositeCartItemFactory = /** @class */ (function (_super) {
        __extends(DaffStatefulCompositeCartItemFactory, _super);
        function DaffStatefulCompositeCartItemFactory() {
            return _super.call(this, DaffMockStatefulCompositeCartItem) || this;
        }
        DaffStatefulCompositeCartItemFactory.decorators = [
            { type: core.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */
        DaffStatefulCompositeCartItemFactory.ctorParameters = function () { return []; };
        /** @nocollapse */ DaffStatefulCompositeCartItemFactory.ngInjectableDef = core.ɵɵdefineInjectable({ factory: function DaffStatefulCompositeCartItemFactory_Factory() { return new DaffStatefulCompositeCartItemFactory(); }, token: DaffStatefulCompositeCartItemFactory, providedIn: "root" });
        return DaffStatefulCompositeCartItemFactory;
    }(testing.DaffModelFactory));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var DaffMockStatefulConfigurableCartItem = /** @class */ (function (_super) {
        __extends(DaffMockStatefulConfigurableCartItem, _super);
        function DaffMockStatefulConfigurableCartItem() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return DaffMockStatefulConfigurableCartItem;
    }(testing$1.DaffMockConfigurableCartItem));
    if (false) {
        /** @type {?} */
        DaffMockStatefulConfigurableCartItem.prototype.daffState;
    }
    var DaffStatefulConfigurableCartItemFactory = /** @class */ (function (_super) {
        __extends(DaffStatefulConfigurableCartItemFactory, _super);
        function DaffStatefulConfigurableCartItemFactory() {
            return _super.call(this, DaffMockStatefulConfigurableCartItem) || this;
        }
        DaffStatefulConfigurableCartItemFactory.decorators = [
            { type: core.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */
        DaffStatefulConfigurableCartItemFactory.ctorParameters = function () { return []; };
        /** @nocollapse */ DaffStatefulConfigurableCartItemFactory.ngInjectableDef = core.ɵɵdefineInjectable({ factory: function DaffStatefulConfigurableCartItemFactory_Factory() { return new DaffStatefulConfigurableCartItemFactory(); }, token: DaffStatefulConfigurableCartItemFactory, providedIn: "root" });
        return DaffStatefulConfigurableCartItemFactory;
    }(testing.DaffModelFactory));

    exports.DaffCartTestingModule = DaffCartTestingModule;
    exports.DaffMockStatefulCartItem = DaffMockStatefulCartItem;
    exports.DaffMockStatefulCompositeCartItem = DaffMockStatefulCompositeCartItem;
    exports.DaffMockStatefulConfigurableCartItem = DaffMockStatefulConfigurableCartItem;
    exports.DaffStatefulCartItemFactory = DaffStatefulCartItemFactory;
    exports.DaffStatefulCompositeCartItemFactory = DaffStatefulCompositeCartItemFactory;
    exports.DaffStatefulConfigurableCartItemFactory = DaffStatefulConfigurableCartItemFactory;
    exports.MockDaffCartFacade = MockDaffCartFacade;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=daffodil-cart-state-testing.umd.js.map
