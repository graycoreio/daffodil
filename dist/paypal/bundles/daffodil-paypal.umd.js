(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common'), require('rxjs/operators'), require('apollo-angular'), require('graphql-tag'), require('rxjs'), require('@ngrx/effects'), require('@ngrx/store')) :
    typeof define === 'function' && define.amd ? define('@daffodil/paypal', ['exports', '@angular/core', '@angular/common', 'rxjs/operators', 'apollo-angular', 'graphql-tag', 'rxjs', '@ngrx/effects', '@ngrx/store'], factory) :
    (global = global || self, factory((global.daffodil = global.daffodil || {}, global.daffodil.paypal = {}), global.ng.core, global.ng.common, global.rxjs.operators, global.apolloAngular, global.gql, global.rxjs, global.effects, global.store));
}(this, function (exports, core, common, operators, apolloAngular, gql, rxjs, effects, store) { 'use strict';

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
    var DaffPaypalActionTypes = {
        GeneratePaypalExpressTokenAction: '[Daff Paypal] Generate Express Token Action',
        GeneratePaypalExpressTokenSuccessAction: '[Daff Paypal] Generate Express Token Success Action',
        GeneratePaypalExpressTokenFailureAction: '[Daff Paypal] Generate Express Token Failure Action',
    };
    /**
     * @template T
     */
    var   /**
     * @template T
     */
    DaffGeneratePaypalExpressToken = /** @class */ (function () {
        function DaffGeneratePaypalExpressToken(payload) {
            this.payload = payload;
            this.type = DaffPaypalActionTypes.GeneratePaypalExpressTokenAction;
        }
        return DaffGeneratePaypalExpressToken;
    }());
    if (false) {
        /** @type {?} */
        DaffGeneratePaypalExpressToken.prototype.type;
        /** @type {?} */
        DaffGeneratePaypalExpressToken.prototype.payload;
    }
    /**
     * @template T
     */
    var   /**
     * @template T
     */
    DaffGeneratePaypalExpressTokenSuccess = /** @class */ (function () {
        function DaffGeneratePaypalExpressTokenSuccess(payload) {
            this.payload = payload;
            this.type = DaffPaypalActionTypes.GeneratePaypalExpressTokenSuccessAction;
        }
        return DaffGeneratePaypalExpressTokenSuccess;
    }());
    if (false) {
        /** @type {?} */
        DaffGeneratePaypalExpressTokenSuccess.prototype.type;
        /** @type {?} */
        DaffGeneratePaypalExpressTokenSuccess.prototype.payload;
    }
    var DaffGeneratePaypalExpressTokenFailure = /** @class */ (function () {
        function DaffGeneratePaypalExpressTokenFailure(payload) {
            this.payload = payload;
            this.type = DaffPaypalActionTypes.GeneratePaypalExpressTokenFailureAction;
        }
        return DaffGeneratePaypalExpressTokenFailure;
    }());
    if (false) {
        /** @type {?} */
        DaffGeneratePaypalExpressTokenFailure.prototype.type;
        /** @type {?} */
        DaffGeneratePaypalExpressTokenFailure.prototype.payload;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var DaffPaypalTransformer = new core.InjectionToken('DaffPaypalTransformer');

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var DaffPaypalDriver = new core.InjectionToken('DaffPaypalDriver');

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var DaffPaypalConfig = new core.InjectionToken('DaffPaypalConfig');

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var GenerateTokenMutation = gql(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n\tmutation GenerateToken($input: MagentoPaypalTokenRequest) {\n\t\tcreatePaypalExpressToken(input: $input) {\n\t\t\ttoken\n\t\t\tpaypal_urls {\n\t\t\t\tstart\n\t\t\t\tedit\n\t\t\t}\n\t\t}\n\t}\n"], ["\n\tmutation GenerateToken($input: MagentoPaypalTokenRequest) {\n\t\tcreatePaypalExpressToken(input: $input) {\n\t\t\ttoken\n\t\t\tpaypal_urls {\n\t\t\t\tstart\n\t\t\t\tedit\n\t\t\t}\n\t\t}\n\t}\n"])));
    var templateObject_1;

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var DaffMagentoPaypalService = /** @class */ (function () {
        function DaffMagentoPaypalService(apollo, transformer, config) {
            this.apollo = apollo;
            this.transformer = transformer;
            this.config = config;
        }
        /**
         * @param {?} tokenRequest
         * @return {?}
         */
        DaffMagentoPaypalService.prototype.generateToken = /**
         * @param {?} tokenRequest
         * @return {?}
         */
        function (tokenRequest) {
            var _this = this;
            return this.apollo.mutate({
                mutation: GenerateTokenMutation,
                variables: {
                    input: this.transformer.transformOut(tokenRequest, this.config)
                }
            }).pipe(operators.map((/**
             * @param {?} result
             * @return {?}
             */
            function (result) {
                return _this.transformer.transformIn(result.data.createPaypalExpressToken);
            })));
        };
        DaffMagentoPaypalService.decorators = [
            { type: core.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */
        DaffMagentoPaypalService.ctorParameters = function () { return [
            { type: apolloAngular.Apollo },
            { type: undefined, decorators: [{ type: core.Inject, args: [DaffPaypalTransformer,] }] },
            { type: undefined, decorators: [{ type: core.Inject, args: [DaffPaypalConfig,] }] }
        ]; };
        /** @nocollapse */ DaffMagentoPaypalService.ngInjectableDef = core.ɵɵdefineInjectable({ factory: function DaffMagentoPaypalService_Factory() { return new DaffMagentoPaypalService(core.ɵɵinject(apolloAngular.Apollo), core.ɵɵinject(DaffPaypalTransformer), core.ɵɵinject(DaffPaypalConfig)); }, token: DaffMagentoPaypalService, providedIn: "root" });
        return DaffMagentoPaypalService;
    }());
    if (false) {
        /**
         * @type {?}
         * @private
         */
        DaffMagentoPaypalService.prototype.apollo;
        /**
         * @type {?}
         * @private
         */
        DaffMagentoPaypalService.prototype.transformer;
        /**
         * @type {?}
         * @private
         */
        DaffMagentoPaypalService.prototype.config;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var DaffMagentoPaypalTransformerService = /** @class */ (function () {
        function DaffMagentoPaypalTransformerService() {
        }
        /**
         * @param {?} tokenRequest
         * @param {?} config
         * @return {?}
         */
        DaffMagentoPaypalTransformerService.prototype.transformOut = /**
         * @param {?} tokenRequest
         * @param {?} config
         * @return {?}
         */
        function (tokenRequest, config) {
            return {
                cart_id: tokenRequest.cartId,
                code: config.code ? config.code : 'paypal_express',
                urls: {
                    cancel_url: config.cancel_url,
                    return_url: config.return_url,
                    pending_url: config.pending_url,
                    success_url: config.success_url
                },
                express_button: config.express_button ? config.express_button : false,
                use_paypal_credit: config.use_paypal_credit ? config.use_paypal_credit : false
            };
        };
        /**
         * @param {?} tokenResponse
         * @return {?}
         */
        DaffMagentoPaypalTransformerService.prototype.transformIn = /**
         * @param {?} tokenResponse
         * @return {?}
         */
        function (tokenResponse) {
            return {
                token: tokenResponse.token,
                urls: {
                    start: tokenResponse.paypal_urls.start,
                    edit: tokenResponse.paypal_urls.edit
                }
            };
        };
        DaffMagentoPaypalTransformerService.decorators = [
            { type: core.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */ DaffMagentoPaypalTransformerService.ngInjectableDef = core.ɵɵdefineInjectable({ factory: function DaffMagentoPaypalTransformerService_Factory() { return new DaffMagentoPaypalTransformerService(); }, token: DaffMagentoPaypalTransformerService, providedIn: "root" });
        return DaffMagentoPaypalTransformerService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var DaffPaypalMagentoDriverModule = /** @class */ (function () {
        function DaffPaypalMagentoDriverModule() {
        }
        /**
         * @return {?}
         */
        DaffPaypalMagentoDriverModule.forRoot = /**
         * @return {?}
         */
        function () {
            return {
                ngModule: DaffPaypalMagentoDriverModule,
                providers: [
                    {
                        provide: DaffPaypalDriver,
                        useExisting: DaffMagentoPaypalService
                    },
                    {
                        provide: DaffPaypalTransformer,
                        useExisting: DaffMagentoPaypalTransformerService
                    }
                ]
            };
        };
        DaffPaypalMagentoDriverModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [
                            common.CommonModule
                        ]
                    },] }
        ];
        return DaffPaypalMagentoDriverModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * @template T, V
     */
    var DaffPaypalEffects = /** @class */ (function () {
        function DaffPaypalEffects(actions$, driver) {
            var _this = this;
            this.actions$ = actions$;
            this.driver = driver;
            this.generatePaypalExpressToken$ = effects.createEffect((/**
             * @return {?}
             */
            function () { return _this.actions$.pipe(effects.ofType(DaffPaypalActionTypes.GeneratePaypalExpressTokenAction), operators.switchMap((/**
             * @param {?} action
             * @return {?}
             */
            function (action) {
                return _this.driver.generateToken(action.payload).pipe(operators.map((/**
                 * @param {?} resp
                 * @return {?}
                 */
                function (resp) {
                    return new DaffGeneratePaypalExpressTokenSuccess(resp);
                })), operators.catchError((/**
                 * @param {?} error
                 * @return {?}
                 */
                function (error) {
                    return rxjs.of(new DaffGeneratePaypalExpressTokenFailure('Failed to retrieve token'));
                })));
            }))); }));
        }
        DaffPaypalEffects.decorators = [
            { type: core.Injectable }
        ];
        /** @nocollapse */
        DaffPaypalEffects.ctorParameters = function () { return [
            { type: effects.Actions },
            { type: undefined, decorators: [{ type: core.Inject, args: [DaffPaypalDriver,] }] }
        ]; };
        return DaffPaypalEffects;
    }());
    if (false) {
        /** @type {?} */
        DaffPaypalEffects.prototype.generatePaypalExpressToken$;
        /**
         * @type {?}
         * @private
         */
        DaffPaypalEffects.prototype.actions$;
        /**
         * @type {?}
         * @private
         */
        DaffPaypalEffects.prototype.driver;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var initialState = {
        paypalTokenResponse: null,
        loading: false,
        error: null
    };
    /**
     * @template T, V
     * @param {?=} state
     * @param {?=} action
     * @return {?}
     */
    function daffPaypalReducer(state, action) {
        if (state === void 0) { state = initialState; }
        switch (action.type) {
            case DaffPaypalActionTypes.GeneratePaypalExpressTokenAction:
                return __assign({}, state, { loading: true });
            case DaffPaypalActionTypes.GeneratePaypalExpressTokenSuccessAction:
                return __assign({}, state, { paypalTokenResponse: action.payload, loading: false, error: null });
            case DaffPaypalActionTypes.GeneratePaypalExpressTokenFailureAction:
                return __assign({}, state, { error: action.payload, loading: false, paypalTokenResponse: null });
            default:
                return state;
        }
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var daffPaypalReducers = {
        paypal: daffPaypalReducer
    };

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var DaffPaypalStateModule = /** @class */ (function () {
        function DaffPaypalStateModule() {
        }
        DaffPaypalStateModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [
                            store.StoreModule.forFeature('paypal', daffPaypalReducers),
                            effects.EffectsModule.forFeature([DaffPaypalEffects])
                        ]
                    },] }
        ];
        return DaffPaypalStateModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var DaffPaypalModule = /** @class */ (function () {
        function DaffPaypalModule() {
        }
        DaffPaypalModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [
                            common.CommonModule,
                            DaffPaypalStateModule
                        ]
                    },] }
        ];
        return DaffPaypalModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * @record
     * @template T
     */
    function DaffPaypalMemoizedSelectors() { }
    if (false) {
        /** @type {?} */
        DaffPaypalMemoizedSelectors.prototype.selectPaypalFeatureState;
        /** @type {?} */
        DaffPaypalMemoizedSelectors.prototype.selectPaypalState;
        /** @type {?} */
        DaffPaypalMemoizedSelectors.prototype.selectPaypalTokenResponse;
        /** @type {?} */
        DaffPaypalMemoizedSelectors.prototype.selectPaypalLoading;
        /** @type {?} */
        DaffPaypalMemoizedSelectors.prototype.selectPaypalError;
        /** @type {?} */
        DaffPaypalMemoizedSelectors.prototype.selectPaypalToken;
        /** @type {?} */
        DaffPaypalMemoizedSelectors.prototype.selectPaypalStartUrl;
        /** @type {?} */
        DaffPaypalMemoizedSelectors.prototype.selectPaypalEditUrl;
    }
    /** @type {?} */
    var createPaypalSelectors = (/**
     * @template T
     * @return {?}
     */
    function () {
        /**
         * Paypal Feature State
         * @type {?}
         */
        var selectPaypalFeatureState = store.createFeatureSelector('paypal');
        /**
         * Paypal State
         * @type {?}
         */
        var selectPaypalState = store.createSelector(selectPaypalFeatureState, (/**
         * @param {?} state
         * @return {?}
         */
        function (state) { return state.paypal; }));
        /** @type {?} */
        var selectPaypalTokenResponse = store.createSelector(selectPaypalState, (/**
         * @param {?} state
         * @return {?}
         */
        function (state) { return state.paypalTokenResponse; }));
        /** @type {?} */
        var selectPaypalLoading = store.createSelector(selectPaypalState, (/**
         * @param {?} state
         * @return {?}
         */
        function (state) { return state.loading; }));
        /** @type {?} */
        var selectPaypalError = store.createSelector(selectPaypalState, (/**
         * @param {?} state
         * @return {?}
         */
        function (state) { return state.error; }));
        /** @type {?} */
        var selectPaypalToken = store.createSelector(selectPaypalTokenResponse, (/**
         * @param {?} state
         * @return {?}
         */
        function (state) { return state.token; }));
        /** @type {?} */
        var selectPaypalStartUrl = store.createSelector(selectPaypalTokenResponse, (/**
         * @param {?} state
         * @return {?}
         */
        function (state) { return state.urls.start; }));
        /** @type {?} */
        var selectPaypalEditUrl = store.createSelector(selectPaypalTokenResponse, (/**
         * @param {?} state
         * @return {?}
         */
        function (state) { return state.urls.edit; }));
        return {
            selectPaypalFeatureState: selectPaypalFeatureState,
            selectPaypalState: selectPaypalState,
            selectPaypalTokenResponse: selectPaypalTokenResponse,
            selectPaypalLoading: selectPaypalLoading,
            selectPaypalError: selectPaypalError,
            selectPaypalToken: selectPaypalToken,
            selectPaypalStartUrl: selectPaypalStartUrl,
            selectPaypalEditUrl: selectPaypalEditUrl
        };
    });
    var ɵ0 = createPaypalSelectors;
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
        function () { return cache = cache
            ? cache
            : createPaypalSelectors(); });
    };
    /** @type {?} */
    var getDaffPaypalSelectors = ((ɵ1))();

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * @template T
     */
    var DaffPaypalFacade = /** @class */ (function () {
        function DaffPaypalFacade(store$1) {
            this.store = store$1;
            var _a = getDaffPaypalSelectors(), selectPaypalTokenResponse = _a.selectPaypalTokenResponse, selectPaypalToken = _a.selectPaypalToken, selectPaypalStartUrl = _a.selectPaypalStartUrl, selectPaypalEditUrl = _a.selectPaypalEditUrl, selectPaypalLoading = _a.selectPaypalLoading, selectPaypalError = _a.selectPaypalError;
            this.paypalTokenResponse$ = this.store.pipe(store.select(selectPaypalTokenResponse));
            this.paypalToken$ = this.store.pipe(store.select(selectPaypalToken));
            this.paypalStartUrl$ = this.store.pipe(store.select(selectPaypalStartUrl));
            this.paypalEditUrl$ = this.store.pipe(store.select(selectPaypalEditUrl));
            this.loading$ = this.store.pipe(store.select(selectPaypalLoading));
            this.error$ = this.store.pipe(store.select(selectPaypalError));
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
        DaffPaypalFacade.prototype.dispatch = /**
         * Dispatches the given action.
         * @param {?} action action to dispatch.
         * @return {?}
         */
        function (action) {
            this.store.dispatch(action);
        };
        DaffPaypalFacade.decorators = [
            { type: core.Injectable, args: [{
                        providedIn: DaffPaypalModule
                    },] }
        ];
        /** @nocollapse */
        DaffPaypalFacade.ctorParameters = function () { return [
            { type: store.Store }
        ]; };
        /** @nocollapse */ DaffPaypalFacade.ngInjectableDef = core.ɵɵdefineInjectable({ factory: function DaffPaypalFacade_Factory() { return new DaffPaypalFacade(core.ɵɵinject(store.Store)); }, token: DaffPaypalFacade, providedIn: DaffPaypalModule });
        return DaffPaypalFacade;
    }());
    if (false) {
        /**
         * The entire DaffPaypalTokenResponse object.
         * @type {?}
         */
        DaffPaypalFacade.prototype.paypalTokenResponse$;
        /**
         * The paypal token nonce.
         * @type {?}
         */
        DaffPaypalFacade.prototype.paypalToken$;
        /**
         * A URL for the PayPal login page.
         * @type {?}
         */
        DaffPaypalFacade.prototype.paypalStartUrl$;
        /**
         * A PayPal URL that allows a customer to edit their checkout details.
         * @type {?}
         */
        DaffPaypalFacade.prototype.paypalEditUrl$;
        /**
         * The loading state for retrieving a single paypal.
         * @type {?}
         */
        DaffPaypalFacade.prototype.loading$;
        /**
         * Errors associated with retrieving a single paypal.
         * @type {?}
         */
        DaffPaypalFacade.prototype.error$;
        /**
         * @type {?}
         * @private
         */
        DaffPaypalFacade.prototype.store;
    }

    exports.DaffGeneratePaypalExpressToken = DaffGeneratePaypalExpressToken;
    exports.DaffGeneratePaypalExpressTokenFailure = DaffGeneratePaypalExpressTokenFailure;
    exports.DaffGeneratePaypalExpressTokenSuccess = DaffGeneratePaypalExpressTokenSuccess;
    exports.DaffPaypalActionTypes = DaffPaypalActionTypes;
    exports.DaffPaypalConfig = DaffPaypalConfig;
    exports.DaffPaypalDriver = DaffPaypalDriver;
    exports.DaffPaypalEffects = DaffPaypalEffects;
    exports.DaffPaypalFacade = DaffPaypalFacade;
    exports.DaffPaypalMagentoDriverModule = DaffPaypalMagentoDriverModule;
    exports.DaffPaypalModule = DaffPaypalModule;
    exports.DaffPaypalStateModule = DaffPaypalStateModule;
    exports.DaffPaypalTransformer = DaffPaypalTransformer;
    exports.GenerateTokenMutation = GenerateTokenMutation;
    exports.daffPaypalReducer = daffPaypalReducer;
    exports.daffPaypalReducers = daffPaypalReducers;
    exports.getDaffPaypalSelectors = getDaffPaypalSelectors;
    exports.ɵa = DaffMagentoPaypalService;
    exports.ɵc = DaffMagentoPaypalTransformerService;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=daffodil-paypal.umd.js.map
