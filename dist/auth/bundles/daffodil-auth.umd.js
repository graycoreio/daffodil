(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@ngrx/store'), require('@angular/core'), require('@angular/common'), require('@ngrx/effects'), require('rxjs/operators'), require('rxjs'), require('@daffodil/core'), require('apollo-angular'), require('graphql-tag'), require('@daffodil/driver/magento'), require('@daffodil/driver')) :
    typeof define === 'function' && define.amd ? define('@daffodil/auth', ['exports', '@ngrx/store', '@angular/core', '@angular/common', '@ngrx/effects', 'rxjs/operators', 'rxjs', '@daffodil/core', 'apollo-angular', 'graphql-tag', '@daffodil/driver/magento', '@daffodil/driver'], factory) :
    (global = global || self, factory((global.daffodil = global.daffodil || {}, global.daffodil.auth = {}), global.store, global.ng.core, global.ng.common, global.effects, global.rxjs.operators, global.rxjs, global.core$1, global.apolloAngular, global.gql, global.magento, global.driver));
}(this, function (exports, store, core, common, effects, operators, rxjs, core$1, apolloAngular, gql, magento, driver) { 'use strict';

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
    var DaffAuthActionTypes = {
        AuthGuardCheckAction: '[Daff-Auth] Auth Guard Check Action',
        AuthGuardCheckCompletionAction: '[Daff-Auth] Auth Guard Check Completion Action',
        AuthStorageFailureAction: '[Daff-Auth] Auth Storage Failure Action',
        AuthLoginAction: '[Daff-Auth] Auth Login Action',
        AuthLoginSuccessAction: '[Daff-Auth] Auth Login Success Action',
        AuthLoginFailureAction: '[Daff-Auth] Auth Login Failure Action',
        AuthLogoutAction: '[Daff-Auth] Auth Logout Action',
        AuthLogoutSuccessAction: '[Daff-Auth] Auth Logout Success Action',
        AuthLogoutFailureAction: '[Daff-Auth] Auth Logout Failure Action',
        AuthCheckAction: '[Daff-Auth] Auth Check Action',
        AuthCheckSuccessAction: '[Daff-Auth] Auth Check Success Action',
        AuthCheckFailureAction: '[Daff-Auth] Auth Check Failure Action',
        AuthRegisterAction: '[Daff-Auth] Auth Register Action',
        AuthRegisterSuccessAction: '[Daff-Auth] Auth Register Success Action',
        AuthRegisterFailureAction: '[Daff-Auth] Auth Register Failure Action',
    };
    /**
     * An action triggered by guards to initialize an auth check request.
     */
    var   /**
     * An action triggered by guards to initialize an auth check request.
     */
    DaffAuthGuardCheck = /** @class */ (function () {
        function DaffAuthGuardCheck() {
            this.type = DaffAuthActionTypes.AuthGuardCheckAction;
        }
        return DaffAuthGuardCheck;
    }());
    if (false) {
        /** @type {?} */
        DaffAuthGuardCheck.prototype.type;
    }
    /**
     * An action triggered on the completion of a guard token check.
     */
    var   /**
     * An action triggered on the completion of a guard token check.
     */
    DaffAuthGuardCheckCompletion = /** @class */ (function () {
        function DaffAuthGuardCheckCompletion(result) {
            this.result = result;
            this.type = DaffAuthActionTypes.AuthGuardCheckCompletionAction;
        }
        return DaffAuthGuardCheckCompletion;
    }());
    if (false) {
        /** @type {?} */
        DaffAuthGuardCheckCompletion.prototype.type;
        /** @type {?} */
        DaffAuthGuardCheckCompletion.prototype.result;
    }
    /*
     * An action triggered upon a failed auth storage operation.
     */
    var   /*
     * An action triggered upon a failed auth storage operation.
     */
    DaffAuthStorageFailure = /** @class */ (function () {
        function DaffAuthStorageFailure(errorMessage) {
            this.errorMessage = errorMessage;
            this.type = DaffAuthActionTypes.AuthStorageFailureAction;
        }
        return DaffAuthStorageFailure;
    }());
    if (false) {
        /** @type {?} */
        DaffAuthStorageFailure.prototype.type;
        /** @type {?} */
        DaffAuthStorageFailure.prototype.errorMessage;
    }
    /**
     * An action triggered to initialize a auth login request.
     * @template T
     */
    var   /**
     * An action triggered to initialize a auth login request.
     * @template T
     */
    DaffAuthLogin = /** @class */ (function () {
        function DaffAuthLogin(loginInfo) {
            this.loginInfo = loginInfo;
            this.type = DaffAuthActionTypes.AuthLoginAction;
        }
        return DaffAuthLogin;
    }());
    if (false) {
        /** @type {?} */
        DaffAuthLogin.prototype.type;
        /** @type {?} */
        DaffAuthLogin.prototype.loginInfo;
    }
    /**
     * An action triggered upon a successful auth login.
     *
     * @param token - the customer access token
     * @template T
     */
    var   /**
     * An action triggered upon a successful auth login.
     *
     * @param token - the customer access token
     * @template T
     */
    DaffAuthLoginSuccess = /** @class */ (function () {
        function DaffAuthLoginSuccess(auth) {
            this.auth = auth;
            this.type = DaffAuthActionTypes.AuthLoginSuccessAction;
        }
        return DaffAuthLoginSuccess;
    }());
    if (false) {
        /** @type {?} */
        DaffAuthLoginSuccess.prototype.type;
        /** @type {?} */
        DaffAuthLoginSuccess.prototype.auth;
    }
    /**
     * An action triggered upon a failed auth login request.
     *
     * @param errorMessage - an error message
     */
    var   /**
     * An action triggered upon a failed auth login request.
     *
     * @param errorMessage - an error message
     */
    DaffAuthLoginFailure = /** @class */ (function () {
        function DaffAuthLoginFailure(errorMessage) {
            this.errorMessage = errorMessage;
            this.type = DaffAuthActionTypes.AuthLoginFailureAction;
        }
        return DaffAuthLoginFailure;
    }());
    if (false) {
        /** @type {?} */
        DaffAuthLoginFailure.prototype.type;
        /** @type {?} */
        DaffAuthLoginFailure.prototype.errorMessage;
    }
    /**
     * An action triggered to initialize a logout request.
     */
    var   /**
     * An action triggered to initialize a logout request.
     */
    DaffAuthLogout = /** @class */ (function () {
        function DaffAuthLogout() {
            this.type = DaffAuthActionTypes.AuthLogoutAction;
        }
        return DaffAuthLogout;
    }());
    if (false) {
        /** @type {?} */
        DaffAuthLogout.prototype.type;
    }
    /**
     * An action triggered upon a successful logout.
     *
     * @param token - the customer access token
     */
    var   /**
     * An action triggered upon a successful logout.
     *
     * @param token - the customer access token
     */
    DaffAuthLogoutSuccess = /** @class */ (function () {
        function DaffAuthLogoutSuccess() {
            this.type = DaffAuthActionTypes.AuthLogoutSuccessAction;
        }
        return DaffAuthLogoutSuccess;
    }());
    if (false) {
        /** @type {?} */
        DaffAuthLogoutSuccess.prototype.type;
    }
    /**
     * An action triggered upon a failed logout request.
     *
     * @param errorMessage - an error message
     */
    var   /**
     * An action triggered upon a failed logout request.
     *
     * @param errorMessage - an error message
     */
    DaffAuthLogoutFailure = /** @class */ (function () {
        function DaffAuthLogoutFailure(errorMessage) {
            this.errorMessage = errorMessage;
            this.type = DaffAuthActionTypes.AuthLogoutFailureAction;
        }
        return DaffAuthLogoutFailure;
    }());
    if (false) {
        /** @type {?} */
        DaffAuthLogoutFailure.prototype.type;
        /** @type {?} */
        DaffAuthLogoutFailure.prototype.errorMessage;
    }
    /**
     * An action triggered to initialize an auth check request.
     */
    var   /**
     * An action triggered to initialize an auth check request.
     */
    DaffAuthCheck = /** @class */ (function () {
        function DaffAuthCheck() {
            this.type = DaffAuthActionTypes.AuthCheckAction;
        }
        return DaffAuthCheck;
    }());
    if (false) {
        /** @type {?} */
        DaffAuthCheck.prototype.type;
    }
    /**
     * An action triggered upon a successful auth check.
     *
     * @param token - the customer access token
     */
    var   /**
     * An action triggered upon a successful auth check.
     *
     * @param token - the customer access token
     */
    DaffAuthCheckSuccess = /** @class */ (function () {
        function DaffAuthCheckSuccess() {
            this.type = DaffAuthActionTypes.AuthCheckSuccessAction;
        }
        return DaffAuthCheckSuccess;
    }());
    if (false) {
        /** @type {?} */
        DaffAuthCheckSuccess.prototype.type;
    }
    /**
     * An action triggered upon a failed auth check request.
     *
     * @param errorMessage - an error message
     */
    var   /**
     * An action triggered upon a failed auth check request.
     *
     * @param errorMessage - an error message
     */
    DaffAuthCheckFailure = /** @class */ (function () {
        function DaffAuthCheckFailure(errorMessage) {
            this.errorMessage = errorMessage;
            this.type = DaffAuthActionTypes.AuthCheckFailureAction;
        }
        return DaffAuthCheckFailure;
    }());
    if (false) {
        /** @type {?} */
        DaffAuthCheckFailure.prototype.type;
        /** @type {?} */
        DaffAuthCheckFailure.prototype.errorMessage;
    }
    /**
     * An action triggered to initialize a auth register request.
     *
     * @param registration
     * @template T
     */
    var   /**
     * An action triggered to initialize a auth register request.
     *
     * @param registration
     * @template T
     */
    DaffAuthRegister = /** @class */ (function () {
        function DaffAuthRegister(registration) {
            this.registration = registration;
            this.type = DaffAuthActionTypes.AuthRegisterAction;
        }
        return DaffAuthRegister;
    }());
    if (false) {
        /** @type {?} */
        DaffAuthRegister.prototype.type;
        /** @type {?} */
        DaffAuthRegister.prototype.registration;
    }
    /**
     * An action triggered upon a successful auth register request.
     *
     * @param token - the customer access token
     * @template T
     */
    var   /**
     * An action triggered upon a successful auth register request.
     *
     * @param token - the customer access token
     * @template T
     */
    DaffAuthRegisterSuccess = /** @class */ (function () {
        function DaffAuthRegisterSuccess(loginInfo) {
            this.loginInfo = loginInfo;
            this.type = DaffAuthActionTypes.AuthRegisterSuccessAction;
        }
        return DaffAuthRegisterSuccess;
    }());
    if (false) {
        /** @type {?} */
        DaffAuthRegisterSuccess.prototype.type;
        /** @type {?} */
        DaffAuthRegisterSuccess.prototype.loginInfo;
    }
    /**
     * An action triggered upon a failed auth request.
     *
     * @param errorMessage - an error message
     */
    var   /**
     * An action triggered upon a failed auth request.
     *
     * @param errorMessage - an error message
     */
    DaffAuthRegisterFailure = /** @class */ (function () {
        function DaffAuthRegisterFailure(errorMessage) {
            this.errorMessage = errorMessage;
            this.type = DaffAuthActionTypes.AuthRegisterFailureAction;
        }
        return DaffAuthRegisterFailure;
    }());
    if (false) {
        /** @type {?} */
        DaffAuthRegisterFailure.prototype.type;
        /** @type {?} */
        DaffAuthRegisterFailure.prototype.errorMessage;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var daffAuthInitialState = {
        loading: false,
        errors: []
    };

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * @template T, U, S
     * @param {?=} state
     * @param {?=} action
     * @return {?}
     */
    function daffAuthReducer(state, action) {
        if (state === void 0) { state = daffAuthInitialState; }
        switch (action.type) {
            case DaffAuthActionTypes.AuthCheckAction:
                return __assign({}, state, { loading: true });
            case DaffAuthActionTypes.AuthCheckSuccessAction:
                return __assign({}, state, { loading: false });
            case DaffAuthActionTypes.AuthCheckFailureAction:
                return __assign({}, state, { loading: false, errors: [action.errorMessage] });
            default:
                return state;
        }
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var daffAuthLoginInitialState = {
        auth: null,
        loading: false,
        errors: []
    };

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * @template T, U, S
     * @param {?=} state
     * @param {?=} action
     * @return {?}
     */
    function daffAuthLoginReducer(state, action) {
        if (state === void 0) { state = daffAuthLoginInitialState; }
        switch (action.type) {
            case DaffAuthActionTypes.AuthLoginAction:
            case DaffAuthActionTypes.AuthLogoutAction:
                return __assign({}, state, { loading: true });
            case DaffAuthActionTypes.AuthLoginSuccessAction:
                return __assign({}, state, { loading: false, auth: action.auth });
            case DaffAuthActionTypes.AuthLogoutSuccessAction:
                return __assign({}, state, { auth: null, loading: false });
            case DaffAuthActionTypes.AuthLoginFailureAction:
            case DaffAuthActionTypes.AuthLogoutFailureAction:
                return __assign({}, state, { loading: false, errors: [action.errorMessage] });
            default:
                return state;
        }
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var daffAuthRegisterInitialState = {
        loading: false,
        errors: []
    };

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * @template T, U, S
     * @param {?=} state
     * @param {?=} action
     * @return {?}
     */
    function daffAuthRegisterReducer(state, action) {
        if (state === void 0) { state = daffAuthRegisterInitialState; }
        switch (action.type) {
            case DaffAuthActionTypes.AuthRegisterAction:
                return __assign({}, state, { loading: true });
            case DaffAuthActionTypes.AuthRegisterSuccessAction:
                return __assign({}, state, { loading: false });
            case DaffAuthActionTypes.AuthRegisterFailureAction:
                return __assign({}, state, { loading: false, errors: [action.errorMessage] });
            default:
                return state;
        }
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var DAFF_AUTH_STORE_FEATURE_KEY = 'daffAuth';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var daffAuthReducers = {
        auth: daffAuthReducer,
        login: daffAuthLoginReducer,
        register: daffAuthRegisterReducer
    };

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

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
            return cache = cache || store.createFeatureSelector(DAFF_AUTH_STORE_FEATURE_KEY);
        });
    };
    /**
     * Feature State Selector
     * @type {?}
     */
    var getDaffAuthFeatureStateSelector = ((ɵ0))();

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * @record
     */
    function AuthSelectors() { }
    if (false) {
        /** @type {?} */
        AuthSelectors.prototype.selectAuthState;
        /** @type {?} */
        AuthSelectors.prototype.selectAuthLoading;
        /** @type {?} */
        AuthSelectors.prototype.selectAuthErrors;
    }
    /** @type {?} */
    var createAuthSelectors = (/**
     * @template T
     * @return {?}
     */
    function () {
        /** @type {?} */
        var selectAuthState = store.createSelector(getDaffAuthFeatureStateSelector(), (/**
         * @param {?} state
         * @return {?}
         */
        function (state) { return state.auth; }));
        /** @type {?} */
        var selectAuthLoading = store.createSelector(selectAuthState, (/**
         * @param {?} state
         * @return {?}
         */
        function (state) { return state.loading; }));
        /** @type {?} */
        var selectAuthErrors = store.createSelector(selectAuthState, (/**
         * @param {?} state
         * @return {?}
         */
        function (state) { return state.errors; }));
        return {
            selectAuthState: selectAuthState,
            selectAuthLoading: selectAuthLoading,
            selectAuthErrors: selectAuthErrors,
        };
    });
    var ɵ0$1 = createAuthSelectors;
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
        function () {
            return cache = cache || createAuthSelectors();
        });
    };
    /** @type {?} */
    var getAuthSelectors = ((ɵ1))();

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * @record
     * @template T
     */
    function DaffAuthLoginSelectors() { }
    if (false) {
        /** @type {?} */
        DaffAuthLoginSelectors.prototype.selectAuthLoginState;
        /** @type {?} */
        DaffAuthLoginSelectors.prototype.selectAuthLoginLoading;
        /** @type {?} */
        DaffAuthLoginSelectors.prototype.selectAuthLoginErrors;
        /** @type {?} */
        DaffAuthLoginSelectors.prototype.selectAuthLoginToken;
        /** @type {?} */
        DaffAuthLoginSelectors.prototype.selectAuthLoginTokenValue;
    }
    /** @type {?} */
    var createLoginSelectors = (/**
     * @template T
     * @return {?}
     */
    function () {
        /** @type {?} */
        var selectAuthLoginState = store.createSelector(getDaffAuthFeatureStateSelector(), (/**
         * @param {?} state
         * @return {?}
         */
        function (state) { return state.login; }));
        /** @type {?} */
        var selectAuthLoginLoading = store.createSelector(selectAuthLoginState, (/**
         * @param {?} state
         * @return {?}
         */
        function (state) { return state.loading; }));
        /** @type {?} */
        var selectAuthLoginErrors = store.createSelector(selectAuthLoginState, (/**
         * @param {?} state
         * @return {?}
         */
        function (state) { return state.errors; }));
        /** @type {?} */
        var selectAuthLoginToken = store.createSelector(selectAuthLoginState, (/**
         * @param {?} state
         * @return {?}
         */
        function (state) { return state.auth; }));
        /** @type {?} */
        var selectAuthLoginTokenValue = store.createSelector(selectAuthLoginToken, (/**
         * @param {?} state
         * @return {?}
         */
        function (state) { return state ? state.token : null; }));
        return {
            selectAuthLoginState: selectAuthLoginState,
            selectAuthLoginLoading: selectAuthLoginLoading,
            selectAuthLoginErrors: selectAuthLoginErrors,
            selectAuthLoginToken: selectAuthLoginToken,
            selectAuthLoginTokenValue: selectAuthLoginTokenValue
        };
    });
    var ɵ0$2 = createLoginSelectors;
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
        function () {
            return cache = cache || createLoginSelectors();
        });
    };
    /** @type {?} */
    var getDaffAuthLoginSelectors = ((ɵ1$1))();

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * @record
     */
    function DaffAuthRegisterSelectors() { }
    if (false) {
        /** @type {?} */
        DaffAuthRegisterSelectors.prototype.selectAuthRegisterState;
        /** @type {?} */
        DaffAuthRegisterSelectors.prototype.selectAuthRegisterLoading;
        /** @type {?} */
        DaffAuthRegisterSelectors.prototype.selectAuthRegisterErrors;
    }
    /** @type {?} */
    var createRegisterSelectors = (/**
     * @template T
     * @return {?}
     */
    function () {
        /** @type {?} */
        var selectAuthRegisterState = store.createSelector(getDaffAuthFeatureStateSelector(), (/**
         * @param {?} state
         * @return {?}
         */
        function (state) { return state.register; }));
        /** @type {?} */
        var selectAuthRegisterLoading = store.createSelector(selectAuthRegisterState, (/**
         * @param {?} state
         * @return {?}
         */
        function (state) { return state.loading; }));
        /** @type {?} */
        var selectAuthRegisterErrors = store.createSelector(selectAuthRegisterState, (/**
         * @param {?} state
         * @return {?}
         */
        function (state) { return state.errors; }));
        return {
            selectAuthRegisterState: selectAuthRegisterState,
            selectAuthRegisterLoading: selectAuthRegisterLoading,
            selectAuthRegisterErrors: selectAuthRegisterErrors,
        };
    });
    var ɵ0$3 = createRegisterSelectors;
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
        function () {
            return cache = cache || createRegisterSelectors();
        });
    };
    /** @type {?} */
    var getDaffAuthRegisterSelectors = ((ɵ1$2))();

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * @record
     * @template T
     */
    function DaffAuthSelectors() { }
    if (false) {
        /** @type {?} */
        DaffAuthSelectors.prototype.selectAuthFeatureState;
    }
    var ɵ0$4 = /**
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
            return cache = cache || __assign({}, getAuthSelectors(), getDaffAuthLoginSelectors(), getDaffAuthRegisterSelectors(), { selectAuthFeatureState: getDaffAuthFeatureStateSelector() });
        });
    };
    /** @type {?} */
    var getDaffAuthSelectors = ((ɵ0$4))();

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * @template T
     */
    var DaffAuthFacade = /** @class */ (function () {
        function DaffAuthFacade(store$1) {
            this.store = store$1;
            var _a = getDaffAuthSelectors(), selectAuthLoginToken = _a.selectAuthLoginToken, selectAuthLoading = _a.selectAuthLoading, selectAuthErrors = _a.selectAuthErrors, selectAuthLoginLoading = _a.selectAuthLoginLoading, selectAuthLoginErrors = _a.selectAuthLoginErrors, selectAuthRegisterLoading = _a.selectAuthRegisterLoading, selectAuthRegisterErrors = _a.selectAuthRegisterErrors, selectAuthLoginTokenValue = _a.selectAuthLoginTokenValue;
            this.auth$ = this.store.pipe(store.select(selectAuthLoginToken));
            this.token$ = this.store.pipe(store.select(selectAuthLoginTokenValue));
            this.authLoading$ = this.store.pipe(store.select(selectAuthLoading));
            this.authErrors$ = this.store.pipe(store.select(selectAuthErrors));
            this.loginLoading$ = this.store.pipe(store.select(selectAuthLoginLoading));
            this.loginErrors$ = this.store.pipe(store.select(selectAuthLoginErrors));
            this.registerLoading$ = this.store.pipe(store.select(selectAuthRegisterLoading));
            this.registerErrors$ = this.store.pipe(store.select(selectAuthRegisterErrors));
        }
        /**
         * @param {?} action
         * @return {?}
         */
        DaffAuthFacade.prototype.dispatch = /**
         * @param {?} action
         * @return {?}
         */
        function (action) {
            this.store.dispatch(action);
        };
        DaffAuthFacade.decorators = [
            { type: core.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */
        DaffAuthFacade.ctorParameters = function () { return [
            { type: store.Store }
        ]; };
        /** @nocollapse */ DaffAuthFacade.ngInjectableDef = core.ɵɵdefineInjectable({ factory: function DaffAuthFacade_Factory() { return new DaffAuthFacade(core.ɵɵinject(store.Store)); }, token: DaffAuthFacade, providedIn: "root" });
        return DaffAuthFacade;
    }());
    if (false) {
        /** @type {?} */
        DaffAuthFacade.prototype.auth$;
        /** @type {?} */
        DaffAuthFacade.prototype.token$;
        /** @type {?} */
        DaffAuthFacade.prototype.authLoading$;
        /** @type {?} */
        DaffAuthFacade.prototype.authErrors$;
        /** @type {?} */
        DaffAuthFacade.prototype.loginLoading$;
        /** @type {?} */
        DaffAuthFacade.prototype.loginErrors$;
        /** @type {?} */
        DaffAuthFacade.prototype.registerLoading$;
        /** @type {?} */
        DaffAuthFacade.prototype.registerErrors$;
        /**
         * @type {?}
         * @private
         */
        DaffAuthFacade.prototype.store;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * @record
     * @template TRequest, TResponse
     */
    function DaffRegisterServiceInterface() { }
    if (false) {
        /**
         * Registers an account for the specified customer.
         *
         * @param {?} registration The account registration info.
         * @return {?} Login info.
         */
        DaffRegisterServiceInterface.prototype.register = function (registration) { };
    }
    /** @type {?} */
    var DaffRegisterDriver = new core.InjectionToken('DaffRegisterDriver');

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * @record
     * @template TRequest, TResponse
     */
    function DaffLoginServiceInterface() { }
    if (false) {
        /**
         * Logs the user in.
         *
         * @param {?} loginInfo
         * @return {?} An access token.
         */
        DaffLoginServiceInterface.prototype.login = function (loginInfo) { };
        /**
         * Logs the user out by revoking their access token.
         * @return {?}
         */
        DaffLoginServiceInterface.prototype.logout = function () { };
    }
    /** @type {?} */
    var DaffLoginDriver = new core.InjectionToken('DaffLoginDriver');

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * @record
     */
    function DaffAuthServiceInterface() { }
    if (false) {
        /**
         * Checks the validity of an auth token.
         * @return {?}
         */
        DaffAuthServiceInterface.prototype.check = function () { };
    }
    /** @type {?} */
    var DaffAuthDriver = new core.InjectionToken('DaffAuthDriver');

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var DaffAuthStorageService = /** @class */ (function () {
        function DaffAuthStorageService(storageService) {
            this.storageService = storageService;
            this.AUTH_STORAGE_TOKEN = 'DAFF_AUTH_TOKEN';
        }
        /**
         * @return {?}
         */
        DaffAuthStorageService.prototype.getAuthToken = /**
         * @return {?}
         */
        function () {
            return this.storageService.getItem(this.AUTH_STORAGE_TOKEN);
        };
        /**
         * @param {?} value
         * @return {?}
         */
        DaffAuthStorageService.prototype.setAuthToken = /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this.storageService.setItem(this.AUTH_STORAGE_TOKEN, value);
        };
        /**
         * @return {?}
         */
        DaffAuthStorageService.prototype.removeAuthToken = /**
         * @return {?}
         */
        function () {
            this.storageService.removeItem(this.AUTH_STORAGE_TOKEN);
        };
        DaffAuthStorageService.decorators = [
            { type: core.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */
        DaffAuthStorageService.ctorParameters = function () { return [
            { type: undefined, decorators: [{ type: core.Inject, args: [core$1.DaffPersistenceServiceToken,] }] }
        ]; };
        /** @nocollapse */ DaffAuthStorageService.ngInjectableDef = core.ɵɵdefineInjectable({ factory: function DaffAuthStorageService_Factory() { return new DaffAuthStorageService(core.ɵɵinject(core$1.DaffPersistenceServiceToken)); }, token: DaffAuthStorageService, providedIn: "root" });
        return DaffAuthStorageService;
    }());
    if (false) {
        /**
         * @type {?}
         * @private
         */
        DaffAuthStorageService.prototype.AUTH_STORAGE_TOKEN;
        /**
         * @type {?}
         * @private
         */
        DaffAuthStorageService.prototype.storageService;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * @template T, U, S
     */
    var DaffAuthEffects = /** @class */ (function () {
        function DaffAuthEffects(actions$, registerDriver, loginDriver, authDriver, storage) {
            var _this = this;
            this.actions$ = actions$;
            this.registerDriver = registerDriver;
            this.loginDriver = loginDriver;
            this.authDriver = authDriver;
            this.storage = storage;
            this.check$ = this.actions$.pipe(effects.ofType(DaffAuthActionTypes.AuthCheckAction), operators.switchMap((/**
             * @param {?} action
             * @return {?}
             */
            function (action) {
                return _this.checkToken().pipe(operators.mapTo(new DaffAuthCheckSuccess()), operators.catchError((/**
                 * @param {?} error
                 * @return {?}
                 */
                function (error) {
                    return rxjs.of(new DaffAuthCheckFailure('Auth token is not valid'));
                })));
            })));
            this.login$ = this.actions$.pipe(effects.ofType(DaffAuthActionTypes.AuthLoginAction), operators.switchMap((/**
             * @param {?} action
             * @return {?}
             */
            function (action) {
                return _this.loginDriver.login(action.loginInfo).pipe(operators.map((/**
                 * @param {?} resp
                 * @return {?}
                 */
                function (resp) {
                    return new DaffAuthLoginSuccess(resp);
                })), operators.catchError((/**
                 * @param {?} error
                 * @return {?}
                 */
                function (error) {
                    return rxjs.of(new DaffAuthLoginFailure('Failed to log in'));
                })));
            })));
            this.storeAuthToken$ = this.actions$.pipe(effects.ofType(DaffAuthActionTypes.AuthLoginSuccessAction), operators.tap((/**
             * @param {?} action
             * @return {?}
             */
            function (action) {
                _this.storage.setAuthToken(action.auth.token);
            })), operators.switchMapTo(rxjs.EMPTY), operators.catchError((/**
             * @param {?} error
             * @return {?}
             */
            function (error) { return rxjs.of(new DaffAuthStorageFailure('Storage of auth token has failed.')); })));
            this.logout$ = this.actions$.pipe(effects.ofType(DaffAuthActionTypes.AuthLogoutAction), operators.switchMap((/**
             * @param {?} action
             * @return {?}
             */
            function (action) {
                return _this.loginDriver.logout().pipe(operators.mapTo(new DaffAuthLogoutSuccess()), operators.catchError((/**
                 * @param {?} error
                 * @return {?}
                 */
                function (error) {
                    return rxjs.of(new DaffAuthLogoutFailure('Failed to log out'));
                })));
            })));
            this.loginAfterRegister$ = this.actions$.pipe(effects.ofType(DaffAuthActionTypes.AuthRegisterSuccessAction), operators.map((/**
             * @param {?} action
             * @return {?}
             */
            function (action) { return new DaffAuthLogin(action.loginInfo); })));
            this.register$ = this.actions$.pipe(effects.ofType(DaffAuthActionTypes.AuthRegisterAction), operators.switchMap((/**
             * @param {?} action
             * @return {?}
             */
            function (action) {
                return _this.registerDriver.register(action.registration).pipe(operators.map((/**
                 * @param {?} resp
                 * @return {?}
                 */
                function (resp) {
                    return new DaffAuthRegisterSuccess(resp);
                })), operators.catchError((/**
                 * @param {?} error
                 * @return {?}
                 */
                function (error) {
                    return rxjs.of(new DaffAuthRegisterFailure('Failed to register a new user'));
                })));
            })));
            this.guardCheck$ = this.actions$.pipe(effects.ofType(DaffAuthActionTypes.AuthGuardCheckAction), operators.switchMap((/**
             * @param {?} action
             * @return {?}
             */
            function (action) {
                return _this.checkToken().pipe(operators.mapTo(new DaffAuthGuardCheckCompletion(true)), operators.catchError((/**
                 * @param {?} error
                 * @return {?}
                 */
                function (error) {
                    return rxjs.of(new DaffAuthGuardCheckCompletion(false));
                })));
            })));
        }
        /**
         * @private
         * @return {?}
         */
        DaffAuthEffects.prototype.checkToken = /**
         * @private
         * @return {?}
         */
        function () {
            return this.authDriver.check();
        };
        DaffAuthEffects.decorators = [
            { type: core.Injectable }
        ];
        /** @nocollapse */
        DaffAuthEffects.ctorParameters = function () { return [
            { type: effects.Actions },
            { type: undefined, decorators: [{ type: core.Inject, args: [DaffRegisterDriver,] }] },
            { type: undefined, decorators: [{ type: core.Inject, args: [DaffLoginDriver,] }] },
            { type: undefined, decorators: [{ type: core.Inject, args: [DaffAuthDriver,] }] },
            { type: DaffAuthStorageService }
        ]; };
        __decorate([
            effects.Effect(),
            __metadata("design:type", rxjs.Observable)
        ], DaffAuthEffects.prototype, "check$", void 0);
        __decorate([
            effects.Effect(),
            __metadata("design:type", rxjs.Observable)
        ], DaffAuthEffects.prototype, "login$", void 0);
        __decorate([
            effects.Effect({
                dispatch: false
            }),
            __metadata("design:type", Object)
        ], DaffAuthEffects.prototype, "storeAuthToken$", void 0);
        __decorate([
            effects.Effect(),
            __metadata("design:type", rxjs.Observable)
        ], DaffAuthEffects.prototype, "logout$", void 0);
        __decorate([
            effects.Effect(),
            __metadata("design:type", rxjs.Observable)
        ], DaffAuthEffects.prototype, "loginAfterRegister$", void 0);
        __decorate([
            effects.Effect(),
            __metadata("design:type", rxjs.Observable)
        ], DaffAuthEffects.prototype, "register$", void 0);
        __decorate([
            effects.Effect(),
            __metadata("design:type", rxjs.Observable)
        ], DaffAuthEffects.prototype, "guardCheck$", void 0);
        return DaffAuthEffects;
    }());
    if (false) {
        /** @type {?} */
        DaffAuthEffects.prototype.check$;
        /** @type {?} */
        DaffAuthEffects.prototype.login$;
        /** @type {?} */
        DaffAuthEffects.prototype.storeAuthToken$;
        /** @type {?} */
        DaffAuthEffects.prototype.logout$;
        /** @type {?} */
        DaffAuthEffects.prototype.loginAfterRegister$;
        /** @type {?} */
        DaffAuthEffects.prototype.register$;
        /** @type {?} */
        DaffAuthEffects.prototype.guardCheck$;
        /**
         * @type {?}
         * @private
         */
        DaffAuthEffects.prototype.actions$;
        /**
         * @type {?}
         * @private
         */
        DaffAuthEffects.prototype.registerDriver;
        /**
         * @type {?}
         * @private
         */
        DaffAuthEffects.prototype.loginDriver;
        /**
         * @type {?}
         * @private
         */
        DaffAuthEffects.prototype.authDriver;
        /**
         * @type {?}
         * @private
         */
        DaffAuthEffects.prototype.storage;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var DaffAuthStateModule = /** @class */ (function () {
        function DaffAuthStateModule() {
        }
        DaffAuthStateModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [
                            store.StoreModule.forFeature(DAFF_AUTH_STORE_FEATURE_KEY, daffAuthReducers),
                            effects.EffectsModule.forFeature([DaffAuthEffects]),
                        ]
                    },] }
        ];
        return DaffAuthStateModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var DaffAuthModule = /** @class */ (function () {
        function DaffAuthModule() {
        }
        DaffAuthModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [
                            common.CommonModule,
                            DaffAuthStateModule
                        ],
                    },] }
        ];
        return DaffAuthModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * Transforms magento auths into an object usable by daffodil.
     */
    var DaffMagentoLoginInfoTransformerService = /** @class */ (function () {
        function DaffMagentoLoginInfoTransformerService() {
        }
        /**
         * @param {?} registration
         * @return {?}
         */
        DaffMagentoLoginInfoTransformerService.prototype.transform = /**
         * @param {?} registration
         * @return {?}
         */
        function (registration) {
            return {
                email: registration.customer.email,
                password: registration.password
            };
        };
        DaffMagentoLoginInfoTransformerService.decorators = [
            { type: core.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */ DaffMagentoLoginInfoTransformerService.ngInjectableDef = core.ɵɵdefineInjectable({ factory: function DaffMagentoLoginInfoTransformerService_Factory() { return new DaffMagentoLoginInfoTransformerService(); }, token: DaffMagentoLoginInfoTransformerService, providedIn: "root" });
        return DaffMagentoLoginInfoTransformerService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var checkTokenQuery = gql(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  query CheckToken {\n    customer {\n      id\n    }\n  }\n"], ["\n  query CheckToken {\n    customer {\n      id\n    }\n  }\n"])));
    var templateObject_1;

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var createCustomerMutation = gql(templateObject_1$1 || (templateObject_1$1 = __makeTemplateObject(["\n  mutation CreateCustomer(\n    $email: String!,\n    $password: String!,\n    $firstname: String!,\n    $lastname: String!,\n  ) {\n    createCustomer(input: {\n      firstname: $firstname,\n      lastname: $lastname,\n      email: $email,\n      password: $password\n    })\n  }\n"], ["\n  mutation CreateCustomer(\n    $email: String!,\n    $password: String!,\n    $firstname: String!,\n    $lastname: String!,\n  ) {\n    createCustomer(input: {\n      firstname: $firstname,\n      lastname: $lastname,\n      email: $email,\n      password: $password\n    })\n  }\n"])));
    var templateObject_1$1;

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var generateTokenMutation = gql(templateObject_1$2 || (templateObject_1$2 = __makeTemplateObject(["\n  mutation GenerateToken($email: String!, $password: String!) {\n    generateCustomerToken(\n      email: $email,\n      password: $password\n    ) {\n      token\n    }\n  }\n"], ["\n  mutation GenerateToken($email: String!, $password: String!) {\n    generateCustomerToken(\n      email: $email,\n      password: $password\n    ) {\n      token\n    }\n  }\n"])));
    var templateObject_1$2;

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var revokeCustomerTokenMutation = gql(templateObject_1$3 || (templateObject_1$3 = __makeTemplateObject(["\n  mutation revokeCustomerToken {\n    revokeCustomerToken {\n      result\n    }\n  }\n"], ["\n  mutation revokeCustomerToken {\n    revokeCustomerToken {\n      result\n    }\n  }\n"])));
    var templateObject_1$3;

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @enum {string} */
    var MagentoAuthGraphQlErrorCode = {
        UNAUTHORIZED: 'graphql-authorization',
        AUTHENTICATION_FAILED: 'graphql-authentication',
        BAD_INPUT: 'graphql-input',
    };

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var DaffUnauthorizedError = /** @class */ (function (_super) {
        __extends(DaffUnauthorizedError, _super);
        function DaffUnauthorizedError(message) {
            var _this = _super.call(this, message) || this;
            _this.message = message;
            _this.code = 'DAFF_AUTH_UNAUTHORIZED';
            return _this;
        }
        return DaffUnauthorizedError;
    }(core$1.DaffInheritableError));
    if (false) {
        /** @type {?} */
        DaffUnauthorizedError.prototype.code;
        /** @type {?} */
        DaffUnauthorizedError.prototype.message;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var DaffAuthenticationFailedError = /** @class */ (function (_super) {
        __extends(DaffAuthenticationFailedError, _super);
        function DaffAuthenticationFailedError(message) {
            var _this = _super.call(this, message) || this;
            _this.message = message;
            _this.code = 'DAFF_AUTH_AUTHENTICATION_FAILED';
            return _this;
        }
        return DaffAuthenticationFailedError;
    }(core$1.DaffInheritableError));
    if (false) {
        /** @type {?} */
        DaffAuthenticationFailedError.prototype.code;
        /** @type {?} */
        DaffAuthenticationFailedError.prototype.message;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var DaffAuthInvalidAPIResponseError = /** @class */ (function (_super) {
        __extends(DaffAuthInvalidAPIResponseError, _super);
        function DaffAuthInvalidAPIResponseError(message) {
            var _this = _super.call(this, message) || this;
            _this.message = message;
            _this.code = 'DAFF_AUTH_INVALID_API_RESPONSE';
            return _this;
        }
        return DaffAuthInvalidAPIResponseError;
    }(core$1.DaffInheritableError));
    if (false) {
        /** @type {?} */
        DaffAuthInvalidAPIResponseError.prototype.code;
        /** @type {?} */
        DaffAuthInvalidAPIResponseError.prototype.message;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    var _a;
    /** @type {?} */
    var DaffAuthMagentoErrorMap = (_a = {},
        _a[MagentoAuthGraphQlErrorCode.UNAUTHORIZED] = DaffUnauthorizedError,
        _a[MagentoAuthGraphQlErrorCode.AUTHENTICATION_FAILED] = DaffAuthenticationFailedError,
        _a[MagentoAuthGraphQlErrorCode.BAD_INPUT] = driver.DaffBadInputError,
        _a);

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var transformMagentoAuthError = (/**
     * @param {?} error
     * @return {?}
     */
    function (error) {
        return magento.daffTransformMagentoError(error, DaffAuthMagentoErrorMap);
    });

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var DaffMagentoRegisterService = /** @class */ (function () {
        function DaffMagentoRegisterService(apollo, loginInfoTransformer) {
            this.apollo = apollo;
            this.loginInfoTransformer = loginInfoTransformer;
        }
        /**
         * @param {?} registration
         * @return {?}
         */
        DaffMagentoRegisterService.prototype.register = /**
         * @param {?} registration
         * @return {?}
         */
        function (registration) {
            return this.apollo.mutate({
                mutation: createCustomerMutation,
                variables: {
                    email: registration.customer.email,
                    password: registration.password,
                    firstname: registration.customer.firstName,
                    lastname: registration.customer.lastName
                }
            }).pipe(operators.mapTo(this.loginInfoTransformer.transform(registration)), operators.catchError((/**
             * @param {?} err
             * @return {?}
             */
            function (err) { return rxjs.throwError(transformMagentoAuthError(err)); })));
        };
        DaffMagentoRegisterService.decorators = [
            { type: core.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */
        DaffMagentoRegisterService.ctorParameters = function () { return [
            { type: apolloAngular.Apollo },
            { type: DaffMagentoLoginInfoTransformerService }
        ]; };
        /** @nocollapse */ DaffMagentoRegisterService.ngInjectableDef = core.ɵɵdefineInjectable({ factory: function DaffMagentoRegisterService_Factory() { return new DaffMagentoRegisterService(core.ɵɵinject(apolloAngular.Apollo), core.ɵɵinject(DaffMagentoLoginInfoTransformerService)); }, token: DaffMagentoRegisterService, providedIn: "root" });
        return DaffMagentoRegisterService;
    }());
    if (false) {
        /**
         * @type {?}
         * @private
         */
        DaffMagentoRegisterService.prototype.apollo;
        /**
         * @type {?}
         * @private
         */
        DaffMagentoRegisterService.prototype.loginInfoTransformer;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * Transforms magento auths into an object usable by daffodil.
     */
    var DaffMagentoAuthTransformerService = /** @class */ (function () {
        function DaffMagentoAuthTransformerService() {
        }
        /**
         * Transforms the magento AuthNode from the magento auth query into a DaffAuthToken.
         * @param auth the auth from a magento auth query.
         */
        /**
         * Transforms the magento AuthNode from the magento auth query into a DaffAuthToken.
         * @param {?} auth the auth from a magento auth query.
         * @return {?}
         */
        DaffMagentoAuthTransformerService.prototype.transform = /**
         * Transforms the magento AuthNode from the magento auth query into a DaffAuthToken.
         * @param {?} auth the auth from a magento auth query.
         * @return {?}
         */
        function (auth) {
            return {
                token: auth.token
            };
        };
        DaffMagentoAuthTransformerService.decorators = [
            { type: core.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */ DaffMagentoAuthTransformerService.ngInjectableDef = core.ɵɵdefineInjectable({ factory: function DaffMagentoAuthTransformerService_Factory() { return new DaffMagentoAuthTransformerService(); }, token: DaffMagentoAuthTransformerService, providedIn: "root" });
        return DaffMagentoAuthTransformerService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var validateCheckTokenResponse = (/**
     * @param {?} response
     * @return {?}
     */
    function (response) {
        if (response.data.customer.id) {
            return response;
        }
        else {
            throw new DaffAuthInvalidAPIResponseError('Check token response does not contain a valid customer ID.');
        }
    });

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var validateGenerateTokenResponse = (/**
     * @param {?} response
     * @return {?}
     */
    function (response) {
        if (response.data.generateCustomerToken.token) {
            return response;
        }
        else {
            throw new DaffAuthInvalidAPIResponseError('Generate token response does not contain an auth token.');
        }
    });

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var validateRevokeTokenResponse = (/**
     * @param {?} response
     * @return {?}
     */
    function (response) {
        if (response.data.revokeCustomerToken.result) {
            return response;
        }
        else {
            throw new DaffAuthInvalidAPIResponseError('Revoke token response does not contain a successful result.');
        }
    });

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var DaffMagentoLoginService = /** @class */ (function () {
        function DaffMagentoLoginService(apollo, authTransformer) {
            this.apollo = apollo;
            this.authTransformer = authTransformer;
        }
        /**
         * @param {?} __0
         * @return {?}
         */
        DaffMagentoLoginService.prototype.login = /**
         * @param {?} __0
         * @return {?}
         */
        function (_a) {
            var _this = this;
            var email = _a.email, password = _a.password;
            return this.apollo.mutate({
                mutation: generateTokenMutation,
                variables: {
                    email: email,
                    password: password
                }
            }).pipe(operators.map(validateGenerateTokenResponse), operators.map((/**
             * @param {?} res
             * @return {?}
             */
            function (res) { return _this.authTransformer.transform(res.data.generateCustomerToken); })), operators.catchError((/**
             * @param {?} err
             * @return {?}
             */
            function (err) { return rxjs.throwError(transformMagentoAuthError(err)); })));
        };
        /**
         * @return {?}
         */
        DaffMagentoLoginService.prototype.logout = /**
         * @return {?}
         */
        function () {
            return this.apollo.mutate({ mutation: revokeCustomerTokenMutation }).pipe(operators.map(validateRevokeTokenResponse), operators.mapTo(undefined), operators.catchError((/**
             * @param {?} err
             * @return {?}
             */
            function (err) { return rxjs.throwError(transformMagentoAuthError(err)); })));
        };
        DaffMagentoLoginService.decorators = [
            { type: core.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */
        DaffMagentoLoginService.ctorParameters = function () { return [
            { type: apolloAngular.Apollo },
            { type: DaffMagentoAuthTransformerService }
        ]; };
        /** @nocollapse */ DaffMagentoLoginService.ngInjectableDef = core.ɵɵdefineInjectable({ factory: function DaffMagentoLoginService_Factory() { return new DaffMagentoLoginService(core.ɵɵinject(apolloAngular.Apollo), core.ɵɵinject(DaffMagentoAuthTransformerService)); }, token: DaffMagentoLoginService, providedIn: "root" });
        return DaffMagentoLoginService;
    }());
    if (false) {
        /**
         * @type {?}
         * @private
         */
        DaffMagentoLoginService.prototype.apollo;
        /** @type {?} */
        DaffMagentoLoginService.prototype.authTransformer;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var DaffMagentoAuthService = /** @class */ (function () {
        function DaffMagentoAuthService(apollo) {
            this.apollo = apollo;
        }
        /**
         * @return {?}
         */
        DaffMagentoAuthService.prototype.check = /**
         * @return {?}
         */
        function () {
            return this.apollo.query({ query: checkTokenQuery }).pipe(operators.map(validateCheckTokenResponse), operators.mapTo(undefined), operators.catchError((/**
             * @param {?} err
             * @return {?}
             */
            function (err) { return rxjs.throwError(transformMagentoAuthError(err)); })));
        };
        DaffMagentoAuthService.decorators = [
            { type: core.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */
        DaffMagentoAuthService.ctorParameters = function () { return [
            { type: apolloAngular.Apollo }
        ]; };
        /** @nocollapse */ DaffMagentoAuthService.ngInjectableDef = core.ɵɵdefineInjectable({ factory: function DaffMagentoAuthService_Factory() { return new DaffMagentoAuthService(core.ɵɵinject(apolloAngular.Apollo)); }, token: DaffMagentoAuthService, providedIn: "root" });
        return DaffMagentoAuthService;
    }());
    if (false) {
        /**
         * @type {?}
         * @private
         */
        DaffMagentoAuthService.prototype.apollo;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var DaffAuthMagentoDriverModule = /** @class */ (function () {
        function DaffAuthMagentoDriverModule() {
        }
        /**
         * @return {?}
         */
        DaffAuthMagentoDriverModule.forRoot = /**
         * @return {?}
         */
        function () {
            return {
                ngModule: DaffAuthMagentoDriverModule,
                providers: [
                    {
                        provide: DaffRegisterDriver,
                        useExisting: DaffMagentoRegisterService
                    },
                    {
                        provide: DaffLoginDriver,
                        useExisting: DaffMagentoLoginService
                    },
                    {
                        provide: DaffAuthDriver,
                        useExisting: DaffMagentoAuthService
                    }
                ]
            };
        };
        DaffAuthMagentoDriverModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [
                            common.CommonModule
                        ]
                    },] }
        ];
        return DaffAuthMagentoDriverModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var MemberOnlyGuard = /** @class */ (function () {
        function MemberOnlyGuard(facade, actions$) {
            this.facade = facade;
            this.actions$ = actions$;
        }
        /**
         * @return {?}
         */
        MemberOnlyGuard.prototype.canActivate = /**
         * @return {?}
         */
        function () {
            /** @type {?} */
            var ret = this.isAuthenticated();
            this.facade.dispatch(new DaffAuthGuardCheck());
            return ret;
        };
        /**
         * @return {?}
         */
        MemberOnlyGuard.prototype.isAuthenticated = /**
         * @return {?}
         */
        function () {
            return this.actions$.pipe(effects.ofType(DaffAuthActionTypes.AuthGuardCheckCompletionAction), operators.map((/**
             * @param {?} action
             * @return {?}
             */
            function (action) { return action.result; })));
        };
        MemberOnlyGuard.decorators = [
            { type: core.Injectable, args: [{
                        providedIn: 'root',
                    },] }
        ];
        /** @nocollapse */
        MemberOnlyGuard.ctorParameters = function () { return [
            { type: DaffAuthFacade },
            { type: effects.Actions }
        ]; };
        /** @nocollapse */ MemberOnlyGuard.ngInjectableDef = core.ɵɵdefineInjectable({ factory: function MemberOnlyGuard_Factory() { return new MemberOnlyGuard(core.ɵɵinject(DaffAuthFacade), core.ɵɵinject(effects.Actions)); }, token: MemberOnlyGuard, providedIn: "root" });
        return MemberOnlyGuard;
    }());
    if (false) {
        /**
         * @type {?}
         * @private
         */
        MemberOnlyGuard.prototype.facade;
        /**
         * @type {?}
         * @private
         */
        MemberOnlyGuard.prototype.actions$;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var GuestOnlyGuard = /** @class */ (function () {
        function GuestOnlyGuard(facade, memberOnlyGuard) {
            this.facade = facade;
            this.memberOnlyGuard = memberOnlyGuard;
        }
        /**
         * @return {?}
         */
        GuestOnlyGuard.prototype.canActivate = /**
         * @return {?}
         */
        function () {
            /** @type {?} */
            var ret = this.isUnauthenticated();
            this.facade.dispatch(new DaffAuthGuardCheck());
            return ret;
        };
        /**
         * @return {?}
         */
        GuestOnlyGuard.prototype.isUnauthenticated = /**
         * @return {?}
         */
        function () {
            return this.memberOnlyGuard.isAuthenticated().pipe(operators.map((/**
             * @param {?} authenticated
             * @return {?}
             */
            function (authenticated) { return !authenticated; })));
        };
        GuestOnlyGuard.decorators = [
            { type: core.Injectable, args: [{
                        providedIn: 'root',
                    },] }
        ];
        /** @nocollapse */
        GuestOnlyGuard.ctorParameters = function () { return [
            { type: DaffAuthFacade },
            { type: MemberOnlyGuard }
        ]; };
        /** @nocollapse */ GuestOnlyGuard.ngInjectableDef = core.ɵɵdefineInjectable({ factory: function GuestOnlyGuard_Factory() { return new GuestOnlyGuard(core.ɵɵinject(DaffAuthFacade), core.ɵɵinject(MemberOnlyGuard)); }, token: GuestOnlyGuard, providedIn: "root" });
        return GuestOnlyGuard;
    }());
    if (false) {
        /**
         * @type {?}
         * @private
         */
        GuestOnlyGuard.prototype.facade;
        /**
         * @type {?}
         * @private
         */
        GuestOnlyGuard.prototype.memberOnlyGuard;
    }

    exports.DAFF_AUTH_STORE_FEATURE_KEY = DAFF_AUTH_STORE_FEATURE_KEY;
    exports.DaffAuthActionTypes = DaffAuthActionTypes;
    exports.DaffAuthCheck = DaffAuthCheck;
    exports.DaffAuthCheckFailure = DaffAuthCheckFailure;
    exports.DaffAuthCheckSuccess = DaffAuthCheckSuccess;
    exports.DaffAuthDriver = DaffAuthDriver;
    exports.DaffAuthFacade = DaffAuthFacade;
    exports.DaffAuthGuardCheck = DaffAuthGuardCheck;
    exports.DaffAuthGuardCheckCompletion = DaffAuthGuardCheckCompletion;
    exports.DaffAuthInvalidAPIResponseError = DaffAuthInvalidAPIResponseError;
    exports.DaffAuthLogin = DaffAuthLogin;
    exports.DaffAuthLoginFailure = DaffAuthLoginFailure;
    exports.DaffAuthLoginSuccess = DaffAuthLoginSuccess;
    exports.DaffAuthLogout = DaffAuthLogout;
    exports.DaffAuthLogoutFailure = DaffAuthLogoutFailure;
    exports.DaffAuthLogoutSuccess = DaffAuthLogoutSuccess;
    exports.DaffAuthMagentoDriverModule = DaffAuthMagentoDriverModule;
    exports.DaffAuthModule = DaffAuthModule;
    exports.DaffAuthRegister = DaffAuthRegister;
    exports.DaffAuthRegisterFailure = DaffAuthRegisterFailure;
    exports.DaffAuthRegisterSuccess = DaffAuthRegisterSuccess;
    exports.DaffAuthStorageFailure = DaffAuthStorageFailure;
    exports.DaffAuthStorageService = DaffAuthStorageService;
    exports.DaffAuthenticationFailedError = DaffAuthenticationFailedError;
    exports.DaffLoginDriver = DaffLoginDriver;
    exports.DaffMagentoAuthService = DaffMagentoAuthService;
    exports.DaffMagentoAuthTransformerService = DaffMagentoAuthTransformerService;
    exports.DaffMagentoLoginInfoTransformerService = DaffMagentoLoginInfoTransformerService;
    exports.DaffMagentoLoginService = DaffMagentoLoginService;
    exports.DaffMagentoRegisterService = DaffMagentoRegisterService;
    exports.DaffRegisterDriver = DaffRegisterDriver;
    exports.DaffUnauthorizedError = DaffUnauthorizedError;
    exports.GuestOnlyGuard = GuestOnlyGuard;
    exports.MemberOnlyGuard = MemberOnlyGuard;
    exports.daffAuthInitialState = daffAuthInitialState;
    exports.daffAuthLoginInitialState = daffAuthLoginInitialState;
    exports.daffAuthLoginReducer = daffAuthLoginReducer;
    exports.daffAuthReducer = daffAuthReducer;
    exports.daffAuthReducers = daffAuthReducers;
    exports.daffAuthRegisterInitialState = daffAuthRegisterInitialState;
    exports.daffAuthRegisterReducer = daffAuthRegisterReducer;
    exports.getDaffAuthSelectors = getDaffAuthSelectors;
    exports.ɵa = DaffAuthStateModule;
    exports.ɵb = DaffAuthEffects;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=daffodil-auth.umd.js.map
