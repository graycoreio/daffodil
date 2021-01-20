(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@ngrx/store'), require('@angular/common'), require('@ngrx/effects'), require('rxjs/operators'), require('rxjs')) :
    typeof define === 'function' && define.amd ? define('@daffodil/checkout', ['exports', '@angular/core', '@ngrx/store', '@angular/common', '@ngrx/effects', 'rxjs/operators', 'rxjs'], factory) :
    (global = global || self, factory((global.daffodil = global.daffodil || {}, global.daffodil.checkout = {}), global.ng.core, global.store, global.ng.common, global.effects, global.rxjs.operators, global.rxjs));
}(this, function (exports, core, store, common, effects, operators, rxjs) { 'use strict';

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
    var DaffShippingActionTypes = {
        UpdateShippingAddressAction: '[Shipping] Update Shipping Address Action',
        SelectShippingOptionAction: '[Shipping] Select Shipping Option Action',
    };
    var DaffUpdateShippingAddress = /** @class */ (function () {
        function DaffUpdateShippingAddress(payload) {
            this.payload = payload;
            this.type = DaffShippingActionTypes.UpdateShippingAddressAction;
        }
        return DaffUpdateShippingAddress;
    }());
    if (false) {
        /** @type {?} */
        DaffUpdateShippingAddress.prototype.type;
        /** @type {?} */
        DaffUpdateShippingAddress.prototype.payload;
    }
    var DaffSelectShippingOption = /** @class */ (function () {
        function DaffSelectShippingOption(payload) {
            this.payload = payload;
            this.type = DaffShippingActionTypes.SelectShippingOptionAction;
        }
        return DaffSelectShippingOption;
    }());
    if (false) {
        /** @type {?} */
        DaffSelectShippingOption.prototype.type;
        /** @type {?} */
        DaffSelectShippingOption.prototype.payload;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * Shipping Feature State
     * @type {?}
     */
    var selectShippingFeatureState = store.createFeatureSelector('shipping');
    var ɵ0 = /**
     * @param {?} state
     * @return {?}
     */
    function (state) { return state.shipping; };
    /**
     * Shipping State
     * @type {?}
     */
    var selectShippingState = store.createSelector(selectShippingFeatureState, (ɵ0));
    var ɵ1 = /**
     * @param {?} state
     * @return {?}
     */
    function (state) { return state.shippingAddress; };
    /** @type {?} */
    var selectShippingAddress = store.createSelector(selectShippingState, (ɵ1));
    var ɵ2 = /**
     * @param {?} state
     * @return {?}
     */
    function (state) { return state.selectedShippingOptionId; };
    /** @type {?} */
    var selectShippingOptionId = store.createSelector(selectShippingState, (ɵ2));
    var ɵ3 = /**
     * @param {?} state
     * @return {?}
     */
    function (state) { return !!state; };
    /** @type {?} */
    var selectIsShippingAddressValid = store.createSelector(selectShippingAddress, (ɵ3));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var ShippingContainer = /** @class */ (function () {
        function ShippingContainer(store) {
            this.store = store;
        }
        /**
         * @return {?}
         */
        ShippingContainer.prototype.ngOnInit = /**
         * @return {?}
         */
        function () {
            this.shippingAddress$ = this.store.pipe(store.select(selectShippingAddress));
            this.selectedShippingOptionId$ = this.store.pipe(store.select(selectShippingOptionId));
            this.isShippingAddressValid$ = this.store.pipe(store.select(selectIsShippingAddressValid));
        };
        /**
         * @param {?} address
         * @return {?}
         */
        ShippingContainer.prototype.updateShippingAddress = /**
         * @param {?} address
         * @return {?}
         */
        function (address) {
            this.store.dispatch(new DaffUpdateShippingAddress(address));
        };
        /**
         * @param {?} optionId
         * @return {?}
         */
        ShippingContainer.prototype.selectShippingOption = /**
         * @param {?} optionId
         * @return {?}
         */
        function (optionId) {
            this.store.dispatch(new DaffSelectShippingOption(optionId));
        };
        ShippingContainer.decorators = [
            { type: core.Component, args: [{
                        selector: '[shipping-container]',
                        template: '<ng-content></ng-content>',
                        exportAs: 'ShippingContainer'
                    }] }
        ];
        /** @nocollapse */
        ShippingContainer.ctorParameters = function () { return [
            { type: store.Store }
        ]; };
        return ShippingContainer;
    }());
    if (false) {
        /** @type {?} */
        ShippingContainer.prototype.shippingAddress$;
        /** @type {?} */
        ShippingContainer.prototype.selectedShippingOptionId$;
        /** @type {?} */
        ShippingContainer.prototype.isShippingAddressValid$;
        /** @type {?} */
        ShippingContainer.prototype.isShippingOptionSelected$;
        /**
         * @type {?}
         * @private
         */
        ShippingContainer.prototype.store;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * Order Feature State
     * @deprecated
     * @type {?}
     */
    var selectOrderFeatureState = store.createFeatureSelector('order');
    var ɵ0$1 = /**
     * @param {?} state
     * @return {?}
     */
    function (state) { return state.order; };
    /**
     * Order State
     * @deprecated
     * @type {?}
     */
    var selectOrderState = store.createSelector(selectOrderFeatureState, (ɵ0$1))
    /**
     * @deprecated
     */
;
    var ɵ1$1 = /**
     * @param {?} state
     * @return {?}
     */
    function (state) { return state.order; };
    /**
     * @deprecated
     * @type {?}
     */
    var selectOrder = store.createSelector(selectOrderState, (ɵ1$1))
    /**
     * @deprecated
     */
;
    var ɵ2$1 = /**
     * @param {?} state
     * @return {?}
     */
    function (state) { return state.loading; };
    /**
     * @deprecated
     * @type {?}
     */
    var selectLoading = store.createSelector(selectOrderState, (ɵ2$1))
    /**
     * @deprecated
     */
;
    var ɵ3$1 = /**
     * @param {?} state
     * @return {?}
     */
    function (state) { return state.errors; };
    /**
     * @deprecated
     * @type {?}
     */
    var selectErrors = store.createSelector(selectOrderState, (ɵ3$1));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * @deprecated
     */
    var OrderContainer = /** @class */ (function () {
        function OrderContainer(store) {
            this.store = store;
        }
        /**
         * @return {?}
         */
        OrderContainer.prototype.ngOnInit = /**
         * @return {?}
         */
        function () {
            this.order$ = this.store.pipe(store.select(selectOrder));
            this.loading$ = this.store.pipe(store.select(selectLoading));
        };
        OrderContainer.decorators = [
            { type: core.Component, args: [{
                        selector: '[order-container]',
                        template: '<ng-content></ng-content>',
                        exportAs: 'OrderContainer'
                    }] }
        ];
        /** @nocollapse */
        OrderContainer.ctorParameters = function () { return [
            { type: store.Store }
        ]; };
        return OrderContainer;
    }());
    if (false) {
        /** @type {?} */
        OrderContainer.prototype.order$;
        /** @type {?} */
        OrderContainer.prototype.loading$;
        /**
         * @type {?}
         * @private
         */
        OrderContainer.prototype.store;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @enum {string} */
    var DaffPaymentActionTypes = {
        UpdatePaymentInfoAction: '[Payment] Update Payment Info Action',
    };
    var DaffUpdatePaymentInfo = /** @class */ (function () {
        function DaffUpdatePaymentInfo(payload) {
            this.payload = payload;
            this.type = DaffPaymentActionTypes.UpdatePaymentInfoAction;
        }
        return DaffUpdatePaymentInfo;
    }());
    if (false) {
        /** @type {?} */
        DaffUpdatePaymentInfo.prototype.type;
        /** @type {?} */
        DaffUpdatePaymentInfo.prototype.payload;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var initialState = {
        paymentInfo: null
    };
    /**
     * @param {?=} state
     * @param {?=} action
     * @return {?}
     */
    function daffPaymentReducer(state, action) {
        if (state === void 0) { state = initialState; }
        switch (action.type) {
            case DaffPaymentActionTypes.UpdatePaymentInfoAction:
                return __assign({}, state, { paymentInfo: action.payload });
            default:
                return state;
        }
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var daffPaymentReducers = {
        payment: daffPaymentReducer
    };

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var DaffPaymentStateModule = /** @class */ (function () {
        function DaffPaymentStateModule() {
        }
        DaffPaymentStateModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [
                            store.StoreModule.forFeature('payment', daffPaymentReducers)
                        ]
                    },] }
        ];
        return DaffPaymentStateModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var DaffPaymentModule = /** @class */ (function () {
        function DaffPaymentModule() {
        }
        DaffPaymentModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [
                            common.CommonModule,
                            /**
                             * Ngrx/store
                             */
                            DaffPaymentStateModule,
                        ]
                    },] }
        ];
        return DaffPaymentModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * Payment Feature State
     * @type {?}
     */
    var selectPaymentFeatureState = store.createFeatureSelector('payment');
    var ɵ0$2 = /**
     * @param {?} state
     * @return {?}
     */
    function (state) { return state.payment; };
    /**
     * Payment State
     * @type {?}
     */
    var selectPaymentState = store.createSelector(selectPaymentFeatureState, (ɵ0$2));
    var ɵ1$2 = /**
     * @param {?} state
     * @return {?}
     */
    function (state) { return state.paymentInfo; };
    /** @type {?} */
    var selectPaymentInfo = store.createSelector(selectPaymentState, (ɵ1$2));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * A facade for accessing state for customer payment information.
     */
    var DaffPaymentFacade = /** @class */ (function () {
        function DaffPaymentFacade(store$1) {
            this.store = store$1;
            this.paymentInfo$ = this.store.pipe(store.select(selectPaymentInfo));
        }
        /**
         * Dispatches the given action.
         * @param action action to dispatch.
         */
        /**
         * Dispatches the given action.
         * @param {?} action action to dispatch.
         * @return {?}
         */
        DaffPaymentFacade.prototype.dispatch = /**
         * Dispatches the given action.
         * @param {?} action action to dispatch.
         * @return {?}
         */
        function (action) {
            this.store.dispatch(action);
        };
        DaffPaymentFacade.decorators = [
            { type: core.Injectable, args: [{
                        providedIn: DaffPaymentModule
                    },] }
        ];
        /** @nocollapse */
        DaffPaymentFacade.ctorParameters = function () { return [
            { type: store.Store }
        ]; };
        /** @nocollapse */ DaffPaymentFacade.ngInjectableDef = core.ɵɵdefineInjectable({ factory: function DaffPaymentFacade_Factory() { return new DaffPaymentFacade(core.ɵɵinject(store.Store)); }, token: DaffPaymentFacade, providedIn: DaffPaymentModule });
        return DaffPaymentFacade;
    }());
    if (false) {
        /**
         * The payment information for a customer.
         * @type {?}
         */
        DaffPaymentFacade.prototype.paymentInfo$;
        /**
         * @type {?}
         * @private
         */
        DaffPaymentFacade.prototype.store;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var DaffPaymentDriver = new core.InjectionToken('DaffPaymentDriver');

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var DaffOrderDriver = new core.InjectionToken('DaffOrderDriver');
    /**
     * Query order objects accessible by the logged-in user.
     * @deprecated
     * @record
     * @template T
     */
    function DaffOrderServiceInterface() { }
    if (false) {
        /**
         * Get an order object with the specified order ID.
         * @param {?} orderId
         * @return {?}
         */
        DaffOrderServiceInterface.prototype.get = function (orderId) { };
        /**
         * List all order objects for the logged-in user.
         * @return {?}
         */
        DaffOrderServiceInterface.prototype.list = function () { };
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var DaffPaymentTransformer = new core.InjectionToken('DaffPaymentTransformer');

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @enum {string} */
    var DaffBillingActionTypes = {
        UpdateBillingAddressAction: '[Billing] Update Billing Address Action',
        UpdatePaymentInfoAction: '[Billing] Update Payment Info Action',
        ToggleBillingAddressIsShippingAddressAction: '[Billing] Billing Address Is Shipping Address Action',
    };
    var DaffUpdateBillingAddress = /** @class */ (function () {
        function DaffUpdateBillingAddress(payload) {
            this.payload = payload;
            this.type = DaffBillingActionTypes.UpdateBillingAddressAction;
        }
        return DaffUpdateBillingAddress;
    }());
    if (false) {
        /** @type {?} */
        DaffUpdateBillingAddress.prototype.type;
        /** @type {?} */
        DaffUpdateBillingAddress.prototype.payload;
    }
    var DaffUpdatePaymentInfo$1 = /** @class */ (function () {
        function DaffUpdatePaymentInfo(payload) {
            this.payload = payload;
            this.type = DaffBillingActionTypes.UpdatePaymentInfoAction;
        }
        return DaffUpdatePaymentInfo;
    }());
    if (false) {
        /** @type {?} */
        DaffUpdatePaymentInfo$1.prototype.type;
        /** @type {?} */
        DaffUpdatePaymentInfo$1.prototype.payload;
    }
    var DaffToggleBillingAddressIsShippingAddress = /** @class */ (function () {
        function DaffToggleBillingAddressIsShippingAddress() {
            this.type = DaffBillingActionTypes.ToggleBillingAddressIsShippingAddressAction;
        }
        return DaffToggleBillingAddressIsShippingAddress;
    }());
    if (false) {
        /** @type {?} */
        DaffToggleBillingAddressIsShippingAddress.prototype.type;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * Billing Feature State
     * @type {?}
     */
    var selectBillingFeatureState = store.createFeatureSelector('billing');
    var ɵ0$3 = /**
     * @param {?} state
     * @return {?}
     */
    function (state) { return state.billing; };
    /**
     * Billing State
     * @type {?}
     */
    var selectBillingState = store.createSelector(selectBillingFeatureState, (ɵ0$3));
    var ɵ1$3 = /**
     * @param {?} state
     * @return {?}
     */
    function (state) { return state.billingAddress; };
    /** @type {?} */
    var selectBillingAddress = store.createSelector(selectBillingState, (ɵ1$3));
    var ɵ2$2 = /**
     * @param {?} state
     * @return {?}
     */
    function (state) { return state.billingAddressIsShippingAddress; };
    /** @type {?} */
    var selectBillingAddressIsShippingAddress = store.createSelector(selectBillingState, (ɵ2$2));
    var ɵ3$2 = /**
     * @param {?} state
     * @return {?}
     */
    function (state) { return state.paymentInfo; };
    /** @type {?} */
    var selectPaymentInfo$1 = store.createSelector(selectBillingState, (ɵ3$2));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var initialState$1 = {
        billingAddress: null,
        billingAddressIsShippingAddress: false,
        paymentInfo: null
    };
    /**
     * @param {?=} state
     * @param {?=} action
     * @return {?}
     */
    function daffBillingReducer(state, action) {
        if (state === void 0) { state = initialState$1; }
        switch (action.type) {
            case DaffBillingActionTypes.UpdateBillingAddressAction:
                return __assign({}, state, { billingAddress: action.payload });
            case DaffBillingActionTypes.ToggleBillingAddressIsShippingAddressAction:
                return __assign({}, state, { billingAddress: null, billingAddressIsShippingAddress: !state.billingAddressIsShippingAddress });
            case DaffBillingActionTypes.UpdatePaymentInfoAction:
                return __assign({}, state, { paymentInfo: action.payload });
            default:
                return state;
        }
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var daffBillingReducers = {
        billing: daffBillingReducer
    };

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var DaffBillingStateModule = /** @class */ (function () {
        function DaffBillingStateModule() {
        }
        DaffBillingStateModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [
                            store.StoreModule.forFeature('billing', daffBillingReducers)
                        ]
                    },] }
        ];
        return DaffBillingStateModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var BillingContainer = /** @class */ (function () {
        function BillingContainer(store) {
            this.store = store;
        }
        /**
         * @return {?}
         */
        BillingContainer.prototype.ngOnInit = /**
         * @return {?}
         */
        function () {
            this.billingAddress$ = this.store.pipe(store.select(selectBillingAddress));
            this.billingAddressIsShippingAddress$ = this.store.pipe(store.select(selectBillingAddressIsShippingAddress));
            this.paymentInfo$ = this.store.pipe(store.select(selectPaymentInfo$1));
        };
        /**
         * @param {?} address
         * @return {?}
         */
        BillingContainer.prototype.updateBillingAddress = /**
         * @param {?} address
         * @return {?}
         */
        function (address) {
            this.store.dispatch(new DaffUpdateBillingAddress(address));
        };
        /**
         * @return {?}
         */
        BillingContainer.prototype.toggleBillingAddressIsShippingAddress = /**
         * @return {?}
         */
        function () {
            this.store.dispatch(new DaffToggleBillingAddressIsShippingAddress());
        };
        /**
         * @param {?} info
         * @return {?}
         */
        BillingContainer.prototype.updatePaymentInfo = /**
         * @param {?} info
         * @return {?}
         */
        function (info) {
            this.store.dispatch(new DaffUpdatePaymentInfo$1(info));
        };
        BillingContainer.decorators = [
            { type: core.Component, args: [{
                        selector: '[billing-container]',
                        template: '<ng-content></ng-content>',
                        exportAs: 'BillingContainer'
                    }] }
        ];
        /** @nocollapse */
        BillingContainer.ctorParameters = function () { return [
            { type: store.Store }
        ]; };
        return BillingContainer;
    }());
    if (false) {
        /** @type {?} */
        BillingContainer.prototype.billingAddress$;
        /** @type {?} */
        BillingContainer.prototype.billingAddressIsShippingAddress$;
        /** @type {?} */
        BillingContainer.prototype.paymentInfo$;
        /**
         * @type {?}
         * @private
         */
        BillingContainer.prototype.store;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var DaffBillingModule = /** @class */ (function () {
        function DaffBillingModule() {
        }
        DaffBillingModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [
                            common.CommonModule,
                            /**
                             * Ngrx/store
                             */
                            DaffBillingStateModule,
                        ],
                        declarations: [
                            BillingContainer
                        ],
                        exports: [
                            BillingContainer
                        ]
                    },] }
        ];
        return DaffBillingModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * A facade for accessing state for the billing information of a customer
     */
    var DaffBillingFacade = /** @class */ (function () {
        function DaffBillingFacade(store$1) {
            this.store = store$1;
            this.billingAddress$ = this.store.pipe(store.select(selectBillingAddress));
            this.billingAddressIsShippingAddress$ = this.store.pipe(store.select(selectBillingAddressIsShippingAddress));
            this.paymentInfo$ = this.store.pipe(store.select(selectPaymentInfo$1));
        }
        /**
         * Dispatches the given action.
         * @param action action to dispatch.
         */
        /**
         * Dispatches the given action.
         * @param {?} action action to dispatch.
         * @return {?}
         */
        DaffBillingFacade.prototype.dispatch = /**
         * Dispatches the given action.
         * @param {?} action action to dispatch.
         * @return {?}
         */
        function (action) {
            this.store.dispatch(action);
        };
        DaffBillingFacade.decorators = [
            { type: core.Injectable, args: [{
                        providedIn: DaffBillingModule
                    },] }
        ];
        /** @nocollapse */
        DaffBillingFacade.ctorParameters = function () { return [
            { type: store.Store }
        ]; };
        /** @nocollapse */ DaffBillingFacade.ngInjectableDef = core.ɵɵdefineInjectable({ factory: function DaffBillingFacade_Factory() { return new DaffBillingFacade(core.ɵɵinject(store.Store)); }, token: DaffBillingFacade, providedIn: DaffBillingModule });
        return DaffBillingFacade;
    }());
    if (false) {
        /**
         * The billing address for a customer.
         * @type {?}
         */
        DaffBillingFacade.prototype.billingAddress$;
        /**
         * Whether or not the billing address is the same as the shipping address.
         * @type {?}
         */
        DaffBillingFacade.prototype.billingAddressIsShippingAddress$;
        /**
         * The payment information for a customer.
         * @type {?}
         */
        DaffBillingFacade.prototype.paymentInfo$;
        /**
         * @type {?}
         * @private
         */
        DaffBillingFacade.prototype.store;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var initialState$2 = {
        shippingAddress: null,
        selectedShippingOptionId: null
    };
    /**
     * @param {?=} state
     * @param {?=} action
     * @return {?}
     */
    function daffShippingReducer(state, action) {
        if (state === void 0) { state = initialState$2; }
        switch (action.type) {
            case DaffShippingActionTypes.UpdateShippingAddressAction:
                return __assign({}, state, { shippingAddress: action.payload });
            case DaffShippingActionTypes.SelectShippingOptionAction:
                return __assign({}, state, { selectedShippingOptionId: action.payload });
            default:
                return state;
        }
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var daffShippingReducers = {
        shipping: daffShippingReducer
    };

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var DaffShippingStateModule = /** @class */ (function () {
        function DaffShippingStateModule() {
        }
        DaffShippingStateModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [
                            store.StoreModule.forFeature('shipping', daffShippingReducers)
                        ]
                    },] }
        ];
        return DaffShippingStateModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var DaffShippingModule = /** @class */ (function () {
        function DaffShippingModule() {
        }
        DaffShippingModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [
                            common.CommonModule,
                            /**
                             * Ngrx/store
                             */
                            DaffShippingStateModule,
                        ],
                        declarations: [
                            ShippingContainer
                        ],
                        exports: [
                            ShippingContainer
                        ]
                    },] }
        ];
        return DaffShippingModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * A facade for accessing state for shipping information.
     */
    var DaffShippingFacade = /** @class */ (function () {
        function DaffShippingFacade(store$1) {
            this.store = store$1;
            this.shippingAddress$ = this.store.pipe(store.select(selectShippingAddress));
            this.selectedShippingOptionId$ = this.store.pipe(store.select(selectShippingOptionId));
            this.isShippingAddressValid$ = this.store.pipe(store.select(selectIsShippingAddressValid));
        }
        /**
         * Dispatches the given action.
         * @param action action to dispatch.
         */
        /**
         * Dispatches the given action.
         * @param {?} action action to dispatch.
         * @return {?}
         */
        DaffShippingFacade.prototype.dispatch = /**
         * Dispatches the given action.
         * @param {?} action action to dispatch.
         * @return {?}
         */
        function (action) {
            this.store.dispatch(action);
        };
        DaffShippingFacade.decorators = [
            { type: core.Injectable, args: [{
                        providedIn: DaffShippingModule
                    },] }
        ];
        /** @nocollapse */
        DaffShippingFacade.ctorParameters = function () { return [
            { type: store.Store }
        ]; };
        /** @nocollapse */ DaffShippingFacade.ngInjectableDef = core.ɵɵdefineInjectable({ factory: function DaffShippingFacade_Factory() { return new DaffShippingFacade(core.ɵɵinject(store.Store)); }, token: DaffShippingFacade, providedIn: DaffShippingModule });
        return DaffShippingFacade;
    }());
    if (false) {
        /**
         * The shipping address for the customer.
         * @type {?}
         */
        DaffShippingFacade.prototype.shippingAddress$;
        /**
         * The selected shipping option id.
         * @type {?}
         */
        DaffShippingFacade.prototype.selectedShippingOptionId$;
        /**
         * Is the shipping address valid.
         * @type {?}
         */
        DaffShippingFacade.prototype.isShippingAddressValid$;
        /**
         * @type {?}
         * @private
         */
        DaffShippingFacade.prototype.store;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @enum {string} */
    var DaffOrderActionTypes = {
        PlaceOrderAction: '[Order] Place Order Action',
        PlaceOrderSuccessAction: '[Order] Place Order Success Action',
        PlaceOrderFailureAction: '[Order] Place Order Failure Action',
    };
    /** @enum {string} */
    var OrderActionTypes = {
        PlaceOrderAction: '[Order] Place Order Action',
        PlaceOrderSuccessAction: '[Order] Place Order Success Action',
        PlaceOrderFailureAction: '[Order] Place Order Failure Action',
    };
    /**
     * @deprecated
     */
    var   /**
     * @deprecated
     */
    PlaceOrder = /** @class */ (function () {
        function PlaceOrder(payload) {
            this.payload = payload;
            this.type = DaffOrderActionTypes.PlaceOrderAction;
        }
        return PlaceOrder;
    }());
    if (false) {
        /** @type {?} */
        PlaceOrder.prototype.type;
        /** @type {?} */
        PlaceOrder.prototype.payload;
    }
    /**
     * @deprecated
     */
    var   /**
     * @deprecated
     */
    DaffPlaceOrder = /** @class */ (function () {
        function DaffPlaceOrder(payload) {
            this.payload = payload;
            this.type = DaffOrderActionTypes.PlaceOrderAction;
        }
        return DaffPlaceOrder;
    }());
    if (false) {
        /** @type {?} */
        DaffPlaceOrder.prototype.type;
        /** @type {?} */
        DaffPlaceOrder.prototype.payload;
    }
    /**
     * @deprecated
     */
    var   /**
     * @deprecated
     */
    DaffPlaceOrderSuccess = /** @class */ (function () {
        function DaffPlaceOrderSuccess(payload) {
            this.payload = payload;
            this.type = DaffOrderActionTypes.PlaceOrderSuccessAction;
        }
        return DaffPlaceOrderSuccess;
    }());
    if (false) {
        /** @type {?} */
        DaffPlaceOrderSuccess.prototype.type;
        /** @type {?} */
        DaffPlaceOrderSuccess.prototype.payload;
    }
    /**
     * @deprecated
     */
    var   /**
     * @deprecated
     */
    DaffPlaceOrderFailure = /** @class */ (function () {
        function DaffPlaceOrderFailure(payload) {
            this.payload = payload;
            this.type = DaffOrderActionTypes.PlaceOrderFailureAction;
        }
        return DaffPlaceOrderFailure;
    }());
    if (false) {
        /** @type {?} */
        DaffPlaceOrderFailure.prototype.type;
        /** @type {?} */
        DaffPlaceOrderFailure.prototype.payload;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * @deprecated
     * @type {?}
     */
    var initialState$3 = {
        order: null,
        loading: false,
        errors: []
    };
    /**
     * @deprecated
     * @param {?=} state
     * @param {?=} action
     * @return {?}
     */
    function daffOrderReducer(state, action) {
        if (state === void 0) { state = initialState$3; }
        switch (action.type) {
            case DaffOrderActionTypes.PlaceOrderAction:
                return __assign({}, state, { loading: true });
            case DaffOrderActionTypes.PlaceOrderSuccessAction:
                return __assign({}, state, { order: action.payload, loading: false });
            case DaffOrderActionTypes.PlaceOrderFailureAction:
                return __assign({}, state, { errors: [action.payload], loading: false });
            default:
                return state;
        }
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * @deprecated
     * @type {?}
     */
    var daffOrderReducers = {
        order: daffOrderReducer
    };

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var DaffCheckoutDriver = new core.InjectionToken('DaffCheckoutDriver');

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * @deprecated
     */
    var OrderEffects = /** @class */ (function () {
        function OrderEffects(actions$, checkoutDriver) {
            var _this = this;
            this.actions$ = actions$;
            this.checkoutDriver = checkoutDriver;
            this.onPlaceOrder$ = this.actions$.pipe(effects.ofType(DaffOrderActionTypes.PlaceOrderAction), operators.switchMap((/**
             * @param {?} action
             * @return {?}
             */
            function (action) {
                return _this.checkoutDriver.placeOrder(action.payload.id.toString())
                    .pipe(operators.map((/**
                 * @param {?} resp
                 * @return {?}
                 */
                function (resp) {
                    return new DaffPlaceOrderSuccess(resp);
                })), operators.catchError((/**
                 * @param {?} error
                 * @return {?}
                 */
                function (error) {
                    return rxjs.of(new DaffPlaceOrderFailure('Failed to place order'));
                })));
            })));
        }
        OrderEffects.decorators = [
            { type: core.Injectable }
        ];
        /** @nocollapse */
        OrderEffects.ctorParameters = function () { return [
            { type: effects.Actions },
            { type: undefined, decorators: [{ type: core.Inject, args: [DaffCheckoutDriver,] }] }
        ]; };
        __decorate([
            effects.Effect(),
            __metadata("design:type", rxjs.Observable)
        ], OrderEffects.prototype, "onPlaceOrder$", void 0);
        return OrderEffects;
    }());
    if (false) {
        /** @type {?} */
        OrderEffects.prototype.onPlaceOrder$;
        /**
         * @type {?}
         * @private
         */
        OrderEffects.prototype.actions$;
        /**
         * @type {?}
         * @private
         */
        OrderEffects.prototype.checkoutDriver;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * @deprecated
     */
    var DaffOrderStateModule = /** @class */ (function () {
        function DaffOrderStateModule() {
        }
        DaffOrderStateModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [
                            store.StoreModule.forFeature('order', daffOrderReducers),
                            effects.EffectsModule.forFeature([
                                OrderEffects
                            ])
                        ]
                    },] }
        ];
        return DaffOrderStateModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * @deprecated
     */
    var DaffOrderModule = /** @class */ (function () {
        function DaffOrderModule() {
        }
        DaffOrderModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [
                            common.CommonModule,
                            /**
                             * Ngrx/store
                             */
                            DaffOrderStateModule,
                        ],
                        declarations: [
                            OrderContainer
                        ],
                        exports: [
                            OrderContainer
                        ]
                    },] }
        ];
        return DaffOrderModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * A facade for accessing state for the currently selected category.
     */
    /**
     * @deprecated
     */
    var DaffOrderFacade = /** @class */ (function () {
        function DaffOrderFacade(store$1) {
            this.store = store$1;
            this.order$ = this.store.pipe(store.select(selectOrder));
            this.loading$ = this.store.pipe(store.select(selectLoading));
            this.errors$ = this.store.pipe(store.select(selectErrors));
        }
        /**
         * Dispatches the given action.
         * @param action action to dispatch.
         */
        /**
         * Dispatches the given action.
         * @param {?} action action to dispatch.
         * @return {?}
         */
        DaffOrderFacade.prototype.dispatch = /**
         * Dispatches the given action.
         * @param {?} action action to dispatch.
         * @return {?}
         */
        function (action) {
            this.store.dispatch(action);
        };
        DaffOrderFacade.decorators = [
            { type: core.Injectable, args: [{
                        providedIn: DaffOrderModule
                    },] }
        ];
        /** @nocollapse */
        DaffOrderFacade.ctorParameters = function () { return [
            { type: store.Store }
        ]; };
        /** @nocollapse */ DaffOrderFacade.ngInjectableDef = core.ɵɵdefineInjectable({ factory: function DaffOrderFacade_Factory() { return new DaffOrderFacade(core.ɵɵinject(store.Store)); }, token: DaffOrderFacade, providedIn: DaffOrderModule });
        return DaffOrderFacade;
    }());
    if (false) {
        /**
         * The current order.
         * @type {?}
         */
        DaffOrderFacade.prototype.order$;
        /**
         * The loading state for the current order.
         * @type {?}
         */
        DaffOrderFacade.prototype.loading$;
        /**
         * Any errors involved in loading the order.
         * @type {?}
         */
        DaffOrderFacade.prototype.errors$;
        /**
         * @type {?}
         * @private
         */
        DaffOrderFacade.prototype.store;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var StateCheckoutModule = /** @class */ (function () {
        function StateCheckoutModule() {
        }
        StateCheckoutModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [
                            common.CommonModule,
                            DaffShippingModule,
                            DaffPaymentModule,
                            DaffBillingModule,
                            DaffOrderModule
                        ],
                        exports: [
                            DaffShippingModule,
                            DaffPaymentModule,
                            DaffBillingModule,
                            DaffOrderModule
                        ]
                    },] }
        ];
        return StateCheckoutModule;
    }());

    exports.DaffBillingActionTypes = DaffBillingActionTypes;
    exports.DaffBillingFacade = DaffBillingFacade;
    exports.DaffBillingModule = DaffBillingModule;
    exports.DaffCheckoutDriver = DaffCheckoutDriver;
    exports.DaffOrderActionTypes = DaffOrderActionTypes;
    exports.DaffOrderDriver = DaffOrderDriver;
    exports.DaffOrderFacade = DaffOrderFacade;
    exports.DaffOrderModule = DaffOrderModule;
    exports.DaffPaymentActionTypes = DaffPaymentActionTypes;
    exports.DaffPaymentDriver = DaffPaymentDriver;
    exports.DaffPaymentFacade = DaffPaymentFacade;
    exports.DaffPaymentTransformer = DaffPaymentTransformer;
    exports.DaffPlaceOrder = DaffPlaceOrder;
    exports.DaffPlaceOrderFailure = DaffPlaceOrderFailure;
    exports.DaffPlaceOrderSuccess = DaffPlaceOrderSuccess;
    exports.DaffSelectShippingOption = DaffSelectShippingOption;
    exports.DaffShippingActionTypes = DaffShippingActionTypes;
    exports.DaffShippingFacade = DaffShippingFacade;
    exports.DaffShippingModule = DaffShippingModule;
    exports.DaffToggleBillingAddressIsShippingAddress = DaffToggleBillingAddressIsShippingAddress;
    exports.DaffUpdateBillingAddress = DaffUpdateBillingAddress;
    exports.DaffUpdatePaymentInfo = DaffUpdatePaymentInfo;
    exports.DaffUpdateShippingAddress = DaffUpdateShippingAddress;
    exports.OrderActionTypes = OrderActionTypes;
    exports.OrderContainer = OrderContainer;
    exports.PlaceOrder = PlaceOrder;
    exports.ShippingContainer = ShippingContainer;
    exports.StateCheckoutModule = StateCheckoutModule;
    exports.daffBillingReducer = daffBillingReducer;
    exports.daffBillingReducers = daffBillingReducers;
    exports.daffOrderReducer = daffOrderReducer;
    exports.daffOrderReducers = daffOrderReducers;
    exports.daffPaymentReducers = daffPaymentReducers;
    exports.daffShippingReducer = daffShippingReducer;
    exports.daffShippingReducers = daffShippingReducers;
    exports.selectBillingAddress = selectBillingAddress;
    exports.selectBillingAddressIsShippingAddress = selectBillingAddressIsShippingAddress;
    exports.selectBillingFeatureState = selectBillingFeatureState;
    exports.selectBillingState = selectBillingState;
    exports.selectErrors = selectErrors;
    exports.selectIsShippingAddressValid = selectIsShippingAddressValid;
    exports.selectLoading = selectLoading;
    exports.selectOrder = selectOrder;
    exports.selectOrderFeatureState = selectOrderFeatureState;
    exports.selectOrderState = selectOrderState;
    exports.selectPaymentFeatureState = selectPaymentFeatureState;
    exports.selectPaymentInfo = selectPaymentInfo;
    exports.selectPaymentState = selectPaymentState;
    exports.selectShippingAddress = selectShippingAddress;
    exports.selectShippingFeatureState = selectShippingFeatureState;
    exports.selectShippingOptionId = selectShippingOptionId;
    exports.selectShippingState = selectShippingState;
    exports.ɵa = DaffPaymentModule;
    exports.ɵb = DaffPaymentStateModule;
    exports.ɵc = daffPaymentReducer;
    exports.ɵe = DaffBillingStateModule;
    exports.ɵf = BillingContainer;
    exports.ɵg = DaffShippingStateModule;
    exports.ɵh = DaffOrderStateModule;
    exports.ɵi = OrderEffects;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=daffodil-checkout.umd.js.map
