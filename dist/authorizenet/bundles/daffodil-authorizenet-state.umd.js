(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@ngrx/store'), require('@angular/core'), require('@ngrx/effects'), require('rxjs/operators'), require('rxjs'), require('@daffodil/cart/state'), require('@daffodil/core'), require('@daffodil/core/state'), require('@daffodil/authorizenet'), require('@daffodil/authorizenet/driver')) :
    typeof define === 'function' && define.amd ? define('@daffodil/authorizenet/state', ['exports', '@ngrx/store', '@angular/core', '@ngrx/effects', 'rxjs/operators', 'rxjs', '@daffodil/cart/state', '@daffodil/core', '@daffodil/core/state', '@daffodil/authorizenet', '@daffodil/authorizenet/driver'], factory) :
    (global = global || self, factory((global.daffodil = global.daffodil || {}, global.daffodil.authorizenet = global.daffodil.authorizenet || {}, global.daffodil.authorizenet.state = {}), global.store, global.ng.core, global.effects, global.rxjs.operators, global.rxjs, global.state, global.core$1, global.state$1, global.daffodil.authorizenet, global.daffodil.authorizenet.driver));
}(this, function (exports, store, core, effects, operators, rxjs, state, core$1, state$1, authorizenet, driver) { 'use strict';

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
    var DaffAuthorizeNetActionTypes = {
        UpdatePaymentAction: '[Daff-Authorize-Net] Update Payment',
        UpdatePaymentSuccessAction: '[Daff-Authorize-Net] Update Payment Success',
        UpdatePaymentFailureAction: '[Daff-Authorize-Net] Update Payment Failure',
        LoadAcceptJsAction: '[Daff-Authorize-Net] Load Accept Js',
        LoadAcceptJsSuccessAction: '[Daff-Authorize-Net] Load Accept Js Success',
        LoadAcceptJsFailureAction: '[Daff-Authorize-Net] Load Accept Js Failure',
    };
    /**
     * An action triggered to initialize a generate token request.
     *
     * @param payload - An DaffAuthorizeNetRequestData object.
     * @template T, V
     */
    var   /**
     * An action triggered to initialize a generate token request.
     *
     * @param payload - An DaffAuthorizeNetRequestData object.
     * @template T, V
     */
    DaffAuthorizeNetUpdatePayment = /** @class */ (function () {
        function DaffAuthorizeNetUpdatePayment(tokenRequest, address) {
            this.tokenRequest = tokenRequest;
            this.address = address;
            this.type = DaffAuthorizeNetActionTypes.UpdatePaymentAction;
        }
        return DaffAuthorizeNetUpdatePayment;
    }());
    if (false) {
        /** @type {?} */
        DaffAuthorizeNetUpdatePayment.prototype.type;
        /** @type {?} */
        DaffAuthorizeNetUpdatePayment.prototype.tokenRequest;
        /** @type {?} */
        DaffAuthorizeNetUpdatePayment.prototype.address;
    }
    /**
     * An action triggered upon successfully updating the payment method.
     *
     * @param payload - A string that is the payment nonce for a credit card.
     */
    var   /**
     * An action triggered upon successfully updating the payment method.
     *
     * @param payload - A string that is the payment nonce for a credit card.
     */
    DaffAuthorizeNetUpdatePaymentSuccess = /** @class */ (function () {
        function DaffAuthorizeNetUpdatePaymentSuccess() {
            this.type = DaffAuthorizeNetActionTypes.UpdatePaymentSuccessAction;
        }
        return DaffAuthorizeNetUpdatePaymentSuccess;
    }());
    if (false) {
        /** @type {?} */
        DaffAuthorizeNetUpdatePaymentSuccess.prototype.type;
    }
    /**
     * An action triggered upon failing to update the payment method.
     *
     * @param payload - A string that is an error message.
     */
    var   /**
     * An action triggered upon failing to update the payment method.
     *
     * @param payload - A string that is an error message.
     */
    DaffAuthorizeNetUpdatePaymentFailure = /** @class */ (function () {
        function DaffAuthorizeNetUpdatePaymentFailure(payload) {
            this.payload = payload;
            this.type = DaffAuthorizeNetActionTypes.UpdatePaymentFailureAction;
        }
        return DaffAuthorizeNetUpdatePaymentFailure;
    }());
    if (false) {
        /** @type {?} */
        DaffAuthorizeNetUpdatePaymentFailure.prototype.type;
        /** @type {?} */
        DaffAuthorizeNetUpdatePaymentFailure.prototype.payload;
    }
    var DaffLoadAcceptJs = /** @class */ (function () {
        function DaffLoadAcceptJs() {
            this.type = DaffAuthorizeNetActionTypes.LoadAcceptJsAction;
        }
        return DaffLoadAcceptJs;
    }());
    if (false) {
        /** @type {?} */
        DaffLoadAcceptJs.prototype.type;
    }
    /**
     * Indicates that the AcceptJs library has loaded successfully.
     */
    var   /**
     * Indicates that the AcceptJs library has loaded successfully.
     */
    DaffLoadAcceptJsSuccess = /** @class */ (function () {
        function DaffLoadAcceptJsSuccess() {
            this.type = DaffAuthorizeNetActionTypes.LoadAcceptJsSuccessAction;
        }
        return DaffLoadAcceptJsSuccess;
    }());
    if (false) {
        /** @type {?} */
        DaffLoadAcceptJsSuccess.prototype.type;
    }
    /**
     * Indicates that the AcceptJs library has failed to load
     */
    var   /**
     * Indicates that the AcceptJs library has failed to load
     */
    DaffLoadAcceptJsFailure = /** @class */ (function () {
        function DaffLoadAcceptJsFailure(payload) {
            this.payload = payload;
            this.type = DaffAuthorizeNetActionTypes.LoadAcceptJsFailureAction;
        }
        ;
        return DaffLoadAcceptJsFailure;
    }());
    if (false) {
        /** @type {?} */
        DaffLoadAcceptJsFailure.prototype.type;
        /** @type {?} */
        DaffLoadAcceptJsFailure.prototype.payload;
        /* Skipping unhandled member: ;*/
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var DAFF_AUTHORIZENET_STORE_FEATURE_KEY = 'daffAuthorizenet';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * @record
     */
    function DaffAuthorizeNetMemoizedSelectors() { }
    if (false) {
        /** @type {?} */
        DaffAuthorizeNetMemoizedSelectors.prototype.selectAuthorizeNetFeatureState;
        /** @type {?} */
        DaffAuthorizeNetMemoizedSelectors.prototype.selectAuthorizeNetState;
        /** @type {?} */
        DaffAuthorizeNetMemoizedSelectors.prototype.selectLoading;
        /** @type {?} */
        DaffAuthorizeNetMemoizedSelectors.prototype.selectPaymentError;
        /** @type {?} */
        DaffAuthorizeNetMemoizedSelectors.prototype.selectAcceptJsLoadError;
        /** @type {?} */
        DaffAuthorizeNetMemoizedSelectors.prototype.selectIsAcceptJsLoaded;
    }
    /** @type {?} */
    var createAuthorizeNetSelectors = (/**
     * @return {?}
     */
    function () {
        /**
         * AuthorizeNet Feature State
         * @type {?}
         */
        var selectAuthorizeNetFeatureState = store.createFeatureSelector(DAFF_AUTHORIZENET_STORE_FEATURE_KEY);
        /**
         * AuthorizeNet State
         * @type {?}
         */
        var selectAuthorizeNetState = store.createSelector(selectAuthorizeNetFeatureState, (/**
         * @param {?} state
         * @return {?}
         */
        function (state) { return state.authorizeNet; }));
        /**
         * AuthorizeNet loading state
         * @type {?}
         */
        var selectLoading = store.createSelector(selectAuthorizeNetState, (/**
         * @param {?} state
         * @return {?}
         */
        function (state) { return state.loading; }));
        /**
         * AuthorizeNet payment error
         * @type {?}
         */
        var selectPaymentError = store.createSelector(selectAuthorizeNetState, (/**
         * @param {?} state
         * @return {?}
         */
        function (state) { return state.paymentError; }));
        /**
         * AcceptJs load error
         * @type {?}
         */
        var selectAcceptJsLoadError = store.createSelector(selectAuthorizeNetState, (/**
         * @param {?} state
         * @return {?}
         */
        function (state) { return state.acceptJsLoadError; }));
        /**
         * AcceptJs is loaded
         * @type {?}
         */
        var selectIsAcceptJsLoaded = store.createSelector(selectAuthorizeNetState, (/**
         * @param {?} state
         * @return {?}
         */
        function (state) { return state.isAcceptLoaded; }));
        return {
            selectAuthorizeNetFeatureState: selectAuthorizeNetFeatureState,
            selectAuthorizeNetState: selectAuthorizeNetState,
            selectLoading: selectLoading,
            selectPaymentError: selectPaymentError,
            selectAcceptJsLoadError: selectAcceptJsLoadError,
            selectIsAcceptJsLoaded: selectIsAcceptJsLoaded
        };
    });
    var ɵ0 = createAuthorizeNetSelectors;
    var ɵ1 = /**
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
            : createAuthorizeNetSelectors(); });
    };
    /** @type {?} */
    var daffAuthorizeNetSelectors = ((ɵ1))();

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var DaffAuthorizeNetFacade = /** @class */ (function () {
        function DaffAuthorizeNetFacade(store$1) {
            this.store = store$1;
            var _a = daffAuthorizeNetSelectors(), selectIsAcceptJsLoaded = _a.selectIsAcceptJsLoaded, selectLoading = _a.selectLoading, selectPaymentError = _a.selectPaymentError, selectAcceptJsLoadError = _a.selectAcceptJsLoadError;
            this.isAcceptJsLoaded$ = this.store.pipe(store.select(selectIsAcceptJsLoaded));
            this.loading$ = this.store.pipe(store.select(selectLoading));
            this.paymentError$ = this.store.pipe(store.select(selectPaymentError));
            this.acceptJsLoadError$ = this.store.pipe(store.select(selectAcceptJsLoadError));
        }
        /**
         * @param {?} action
         * @return {?}
         */
        DaffAuthorizeNetFacade.prototype.dispatch = /**
         * @param {?} action
         * @return {?}
         */
        function (action) {
            this.store.dispatch(action);
        };
        DaffAuthorizeNetFacade.decorators = [
            { type: core.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */
        DaffAuthorizeNetFacade.ctorParameters = function () { return [
            { type: store.Store }
        ]; };
        /** @nocollapse */ DaffAuthorizeNetFacade.ngInjectableDef = core.ɵɵdefineInjectable({ factory: function DaffAuthorizeNetFacade_Factory() { return new DaffAuthorizeNetFacade(core.ɵɵinject(store.Store)); }, token: DaffAuthorizeNetFacade, providedIn: "root" });
        return DaffAuthorizeNetFacade;
    }());
    if (false) {
        /** @type {?} */
        DaffAuthorizeNetFacade.prototype.isAcceptJsLoaded$;
        /** @type {?} */
        DaffAuthorizeNetFacade.prototype.loading$;
        /** @type {?} */
        DaffAuthorizeNetFacade.prototype.paymentError$;
        /** @type {?} */
        DaffAuthorizeNetFacade.prototype.acceptJsLoadError$;
        /**
         * @type {?}
         * @private
         */
        DaffAuthorizeNetFacade.prototype.store;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var initialState = {
        isAcceptLoaded: false,
        paymentError: null,
        acceptJsLoadError: null,
        loading: false
    };
    /**
     * @template T
     * @param {?=} state
     * @param {?=} action
     * @return {?}
     */
    function daffAuthorizeNetReducer(state, action) {
        if (state === void 0) { state = initialState; }
        switch (action.type) {
            case DaffAuthorizeNetActionTypes.UpdatePaymentAction:
                return __assign({}, state, { loading: true });
            case DaffAuthorizeNetActionTypes.UpdatePaymentSuccessAction:
                return __assign({}, state, { loading: false, paymentError: null });
            case DaffAuthorizeNetActionTypes.UpdatePaymentFailureAction:
                return __assign({}, state, { loading: false, paymentError: action.payload });
            case DaffAuthorizeNetActionTypes.LoadAcceptJsSuccessAction:
                return __assign({}, state, { isAcceptLoaded: true, acceptJsLoadError: null });
            case DaffAuthorizeNetActionTypes.LoadAcceptJsFailureAction:
                return __assign({}, state, { loading: false, acceptJsLoadError: action.payload });
            default:
                return state;
        }
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var daffAuthorizeNetReducers = {
        authorizeNet: daffAuthorizeNetReducer
    };

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * @template T
     */
    var DaffAuthorizeNetEffects = /** @class */ (function () {
        function DaffAuthorizeNetEffects(actions$, driver, authorizeNetPaymentId, errorMatcher, acceptJsLoadingService) {
            var _this = this;
            this.actions$ = actions$;
            this.driver = driver;
            this.authorizeNetPaymentId = authorizeNetPaymentId;
            this.errorMatcher = errorMatcher;
            this.acceptJsLoadingService = acceptJsLoadingService;
            this.updatePayment$ = this.actions$.pipe(effects.ofType(DaffAuthorizeNetActionTypes.UpdatePaymentAction), operators.switchMap((/**
             * @param {?} action
             * @return {?}
             */
            function (action) {
                return _this.driver.generateToken(action.tokenRequest).pipe(operators.map((/**
                 * @param {?} resp
                 * @return {?}
                 */
                function (resp) { return new state.DaffCartPaymentUpdateWithBilling({
                    method: _this.authorizeNetPaymentId,
                    payment_info: resp
                }, action.address); })), operators.catchError((/**
                 * @param {?} error
                 * @return {?}
                 */
                function (error) {
                    return rxjs.of(new DaffAuthorizeNetUpdatePaymentFailure(_this.errorMatcher(error)));
                })));
            })));
            this.updatePaymentSuccessSubstream$ = this.actions$.pipe(state$1.substream([DaffAuthorizeNetActionTypes.UpdatePaymentAction, state.DaffCartPaymentActionTypes.CartPaymentUpdateWithBillingSuccessAction], state.DaffCartPaymentActionTypes.CartPaymentUpdateWithBillingFailureAction), operators.mapTo(new DaffAuthorizeNetUpdatePaymentSuccess()));
            this.updatePaymentFailureSubstream$ = this.actions$.pipe(state$1.substream([DaffAuthorizeNetActionTypes.UpdatePaymentAction, state.DaffCartPaymentActionTypes.CartPaymentUpdateWithBillingFailureAction], state.DaffCartPaymentActionTypes.CartPaymentUpdateWithBillingSuccessAction), operators.map((/**
             * @param {?} __0
             * @return {?}
             */
            function (_a) {
                var _b = __read(_a, 2), updatePaymentAction = _b[0], updatePaymentFailureAction = _b[1];
                return new DaffAuthorizeNetUpdatePaymentFailure(_this.errorMatcher(updatePaymentFailureAction.payload));
            })));
            this.loadAcceptJs$ = (/**
             * @param {?=} maxTries
             * @param {?=} ms
             * @return {?}
             */
            function (maxTries, ms) {
                if (maxTries === void 0) { maxTries = 10; }
                if (ms === void 0) { ms = 10; }
                return _this.actions$.pipe(effects.ofType(DaffAuthorizeNetActionTypes.LoadAcceptJsAction), operators.tap((/**
                 * @param {?} action
                 * @return {?}
                 */
                function (action) { return _this.acceptJsLoadingService.load(); })), operators.switchMap((/**
                 * @return {?}
                 */
                function () { return rxjs.of(null).pipe(operators.map((/**
                 * @return {?}
                 */
                function () { return _this.acceptJsLoadingService.getAccept(); })), core$1.backoff(maxTries, ms), operators.mapTo(new DaffLoadAcceptJsSuccess()), operators.catchError((/**
                 * @param {?} error
                 * @return {?}
                 */
                function (error) { return rxjs.of(new DaffLoadAcceptJsFailure(_this.errorMatcher(error))); }))); })));
            });
        }
        DaffAuthorizeNetEffects.decorators = [
            { type: core.Injectable }
        ];
        /** @nocollapse */
        DaffAuthorizeNetEffects.ctorParameters = function () { return [
            { type: effects.Actions },
            { type: undefined, decorators: [{ type: core.Inject, args: [driver.DaffAuthorizeNetDriver,] }] },
            { type: String, decorators: [{ type: core.Inject, args: [driver.DaffAuthorizeNetPaymentId,] }] },
            { type: Function, decorators: [{ type: core.Inject, args: [authorizenet.DAFF_AUTHORIZENET_ERROR_MATCHER,] }] },
            { type: authorizenet.DaffAcceptJsLoadingService }
        ]; };
        __decorate([
            effects.Effect(),
            __metadata("design:type", rxjs.Observable)
        ], DaffAuthorizeNetEffects.prototype, "updatePayment$", void 0);
        __decorate([
            effects.Effect(),
            __metadata("design:type", rxjs.Observable)
        ], DaffAuthorizeNetEffects.prototype, "updatePaymentSuccessSubstream$", void 0);
        __decorate([
            effects.Effect(),
            __metadata("design:type", rxjs.Observable)
        ], DaffAuthorizeNetEffects.prototype, "updatePaymentFailureSubstream$", void 0);
        __decorate([
            effects.Effect(),
            __metadata("design:type", Object)
        ], DaffAuthorizeNetEffects.prototype, "loadAcceptJs$", void 0);
        return DaffAuthorizeNetEffects;
    }());
    if (false) {
        /** @type {?} */
        DaffAuthorizeNetEffects.prototype.updatePayment$;
        /** @type {?} */
        DaffAuthorizeNetEffects.prototype.updatePaymentSuccessSubstream$;
        /** @type {?} */
        DaffAuthorizeNetEffects.prototype.updatePaymentFailureSubstream$;
        /** @type {?} */
        DaffAuthorizeNetEffects.prototype.loadAcceptJs$;
        /**
         * @type {?}
         * @private
         */
        DaffAuthorizeNetEffects.prototype.actions$;
        /**
         * @type {?}
         * @private
         */
        DaffAuthorizeNetEffects.prototype.driver;
        /**
         * @type {?}
         * @private
         */
        DaffAuthorizeNetEffects.prototype.authorizeNetPaymentId;
        /**
         * @type {?}
         * @private
         */
        DaffAuthorizeNetEffects.prototype.errorMatcher;
        /**
         * @type {?}
         * @private
         */
        DaffAuthorizeNetEffects.prototype.acceptJsLoadingService;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var DaffAuthorizeNetStateModule = /** @class */ (function () {
        function DaffAuthorizeNetStateModule() {
        }
        DaffAuthorizeNetStateModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [
                            store.StoreModule.forFeature(DAFF_AUTHORIZENET_STORE_FEATURE_KEY, daffAuthorizeNetReducers),
                            effects.EffectsModule.forFeature([DaffAuthorizeNetEffects]),
                        ]
                    },] }
        ];
        return DaffAuthorizeNetStateModule;
    }());

    exports.DAFF_AUTHORIZENET_STORE_FEATURE_KEY = DAFF_AUTHORIZENET_STORE_FEATURE_KEY;
    exports.DaffAuthorizeNetActionTypes = DaffAuthorizeNetActionTypes;
    exports.DaffAuthorizeNetFacade = DaffAuthorizeNetFacade;
    exports.DaffAuthorizeNetStateModule = DaffAuthorizeNetStateModule;
    exports.DaffAuthorizeNetUpdatePayment = DaffAuthorizeNetUpdatePayment;
    exports.DaffAuthorizeNetUpdatePaymentFailure = DaffAuthorizeNetUpdatePaymentFailure;
    exports.DaffAuthorizeNetUpdatePaymentSuccess = DaffAuthorizeNetUpdatePaymentSuccess;
    exports.DaffLoadAcceptJs = DaffLoadAcceptJs;
    exports.DaffLoadAcceptJsFailure = DaffLoadAcceptJsFailure;
    exports.DaffLoadAcceptJsSuccess = DaffLoadAcceptJsSuccess;
    exports.daffAuthorizeNetReducer = daffAuthorizeNetReducer;
    exports.daffAuthorizeNetReducers = daffAuthorizeNetReducers;
    exports.daffAuthorizeNetSelectors = daffAuthorizeNetSelectors;
    exports.ɵa = DaffAuthorizeNetEffects;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=daffodil-authorizenet-state.umd.js.map
