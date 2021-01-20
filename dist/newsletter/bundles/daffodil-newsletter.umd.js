(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@ngrx/store'), require('@angular/core'), require('@angular/common'), require('@ngrx/effects'), require('rxjs'), require('rxjs/operators'), require('@angular/common/http'), require('@angular/platform-browser'), require('@angular/router'), require('@daffodil/driver/hubspot')) :
    typeof define === 'function' && define.amd ? define('@daffodil/newsletter', ['exports', '@ngrx/store', '@angular/core', '@angular/common', '@ngrx/effects', 'rxjs', 'rxjs/operators', '@angular/common/http', '@angular/platform-browser', '@angular/router', '@daffodil/driver/hubspot'], factory) :
    (global = global || self, factory((global.daffodil = global.daffodil || {}, global.daffodil.newsletter = {}), global.store, global.ng.core, global.ng.common, global.effects, global.rxjs, global.rxjs.operators, global.ng.common.http, global.ng.platformBrowser, global.ng.router, global.hubspot));
}(this, function (exports, store, core, common, effects, rxjs, operators, http, platformBrowser, router, hubspot) { 'use strict';

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
    var DaffNewsletterActionTypes = {
        NewsletterSubscribeAction: '[Daff-Newsletter] Newsletter Subscribe Action',
        NewsletterCancelAction: '[Daff-Newsletter] Newsletter Cancel Action',
        NewsletterSuccessSubscribeAction: '[Daff-Newsletter] Succeeded on Newsletter Subscribe Action',
        NewsletterFailedSubscribeAction: '[Daff-Newsletter] Failed on Newsletter Subscribe Action',
        NewsletterRetry: '[Daff-Newsletter] Retrying submission',
        NewsletterReset: '[Daff-Newsletter] Reset Newsletter',
    };
    /**
     * @template T
     */
    var   /**
     * @template T
     */
    DaffNewsletterSubscribe = /** @class */ (function () {
        function DaffNewsletterSubscribe(payload) {
            this.payload = payload;
            this.type = DaffNewsletterActionTypes.NewsletterSubscribeAction;
        }
        return DaffNewsletterSubscribe;
    }());
    if (false) {
        /** @type {?} */
        DaffNewsletterSubscribe.prototype.type;
        /** @type {?} */
        DaffNewsletterSubscribe.prototype.payload;
    }
    /**
     * @template T
     */
    var   /**
     * @template T
     */
    DaffNewsletterRetry = /** @class */ (function () {
        function DaffNewsletterRetry(payload) {
            this.payload = payload;
            this.type = DaffNewsletterActionTypes.NewsletterRetry;
        }
        return DaffNewsletterRetry;
    }());
    if (false) {
        /** @type {?} */
        DaffNewsletterRetry.prototype.type;
        /** @type {?} */
        DaffNewsletterRetry.prototype.payload;
    }
    var DaffNewsletterCancel = /** @class */ (function () {
        function DaffNewsletterCancel() {
            this.type = DaffNewsletterActionTypes.NewsletterCancelAction;
        }
        return DaffNewsletterCancel;
    }());
    if (false) {
        /** @type {?} */
        DaffNewsletterCancel.prototype.type;
    }
    var DaffNewsletterFailedSubscribe = /** @class */ (function () {
        function DaffNewsletterFailedSubscribe(payload) {
            this.payload = payload;
            this.type = DaffNewsletterActionTypes.NewsletterFailedSubscribeAction;
        }
        return DaffNewsletterFailedSubscribe;
    }());
    if (false) {
        /** @type {?} */
        DaffNewsletterFailedSubscribe.prototype.type;
        /** @type {?} */
        DaffNewsletterFailedSubscribe.prototype.payload;
    }
    var DaffNewsletterSuccessSubscribe = /** @class */ (function () {
        function DaffNewsletterSuccessSubscribe() {
            this.type = DaffNewsletterActionTypes.NewsletterSuccessSubscribeAction;
        }
        return DaffNewsletterSuccessSubscribe;
    }());
    if (false) {
        /** @type {?} */
        DaffNewsletterSuccessSubscribe.prototype.type;
    }
    var DaffNewsletterReset = /** @class */ (function () {
        function DaffNewsletterReset() {
            this.type = DaffNewsletterActionTypes.NewsletterReset;
        }
        return DaffNewsletterReset;
    }());
    if (false) {
        /** @type {?} */
        DaffNewsletterReset.prototype.type;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * @record
     */
    function DaffNewsletterState() { }
    if (false) {
        /** @type {?} */
        DaffNewsletterState.prototype.success;
        /** @type {?} */
        DaffNewsletterState.prototype.loading;
        /** @type {?} */
        DaffNewsletterState.prototype.error;
    }
    /** @type {?} */
    var initialState = {
        success: false,
        loading: false,
        error: null
    };
    /**
     * @template T
     * @param {?=} state
     * @param {?=} action
     * @return {?}
     */
    function reducer(state, action) {
        if (state === void 0) { state = initialState; }
        switch (action.type) {
            case DaffNewsletterActionTypes.NewsletterRetry:
            case DaffNewsletterActionTypes.NewsletterSubscribeAction:
                return __assign({}, state, { loading: true });
            case DaffNewsletterActionTypes.NewsletterFailedSubscribeAction:
                return __assign({}, state, { loading: false, error: action.payload });
            case DaffNewsletterActionTypes.NewsletterCancelAction:
                return __assign({}, state, { loading: false });
            case DaffNewsletterActionTypes.NewsletterSuccessSubscribeAction:
                return __assign({}, state, { success: true, loading: false });
            case DaffNewsletterActionTypes.NewsletterReset:
                return __assign({}, state, initialState);
            default:
                return state;
        }
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * @record
     */
    function State() { }
    if (false) {
        /** @type {?} */
        State.prototype.newsletter;
    }
    /**
     * Feature State Selector
     * @type {?}
     */
    var selectNewsletterFeatureState = store.createFeatureSelector('newsletter');
    var ɵ0 = /**
     * @param {?} state
     * @return {?}
     */
    function (state) { return state.loading; };
    /**
     * Child key of feature state
     * @type {?}
     */
    var selectDaffNewsletterLoading = store.createSelector(selectNewsletterFeatureState, (ɵ0));
    var ɵ1 = /**
     * @param {?} state
     * @return {?}
     */
    function (state) { return state.error; };
    /** @type {?} */
    var selectDaffNewsletterError = store.createSelector(selectNewsletterFeatureState, (ɵ1));
    var ɵ2 = /**
     * @param {?} state
     * @return {?}
     */
    function (state) { return state.success; };
    /** @type {?} */
    var selectDaffNewsletterSuccess = store.createSelector(selectNewsletterFeatureState, (ɵ2));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var DaffNewsletterHubspotService = /** @class */ (function () {
        function DaffNewsletterHubspotService(hubspotService) {
            this.hubspotService = hubspotService;
        }
        /**
         * @param {?} payload
         * @return {?}
         */
        DaffNewsletterHubspotService.prototype.send = /**
         * @param {?} payload
         * @return {?}
         */
        function (payload) {
            return this.hubspotService.submit(payload);
        };
        DaffNewsletterHubspotService.decorators = [
            { type: core.Injectable }
        ];
        /** @nocollapse */
        DaffNewsletterHubspotService.ctorParameters = function () { return [
            { type: hubspot.DaffHubspotFormsService }
        ]; };
        return DaffNewsletterHubspotService;
    }());
    if (false) {
        /**
         * @type {?}
         * @private
         */
        DaffNewsletterHubspotService.prototype.hubspotService;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var DaffNewsletterDriver = new core.InjectionToken('DaffNewsletterDriver');
    /**
     * @record
     * @template T, V
     */
    function DaffNewsletterServiceInterface() { }
    if (false) {
        /**
         * @param {?} email
         * @return {?}
         */
        DaffNewsletterServiceInterface.prototype.send = function (email) { };
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var DaffNewsletterConfigToken = new core.InjectionToken('DaffNewsletterConfig');

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var DaffNewsletterHubSpotDriverModule = /** @class */ (function () {
        function DaffNewsletterHubSpotDriverModule() {
        }
        /**
         * @param {?} config
         * @return {?}
         */
        DaffNewsletterHubSpotDriverModule.forRoot = /**
         * @param {?} config
         * @return {?}
         */
        function (config) {
            return {
                ngModule: DaffNewsletterHubSpotDriverModule,
                providers: [
                    {
                        provide: DaffNewsletterDriver,
                        useClass: DaffNewsletterHubspotService,
                    },
                    {
                        provide: DaffNewsletterConfigToken,
                        useValue: config,
                    },
                    {
                        provide: hubspot.DaffHubspotFormsService,
                        useFactory: hubspot.daffHubspotFormsServiceFactory,
                        deps: [
                            http.HttpClient,
                            common.DOCUMENT,
                            router.Router,
                            platformBrowser.Title,
                            DaffNewsletterConfigToken
                        ],
                    }
                ],
            };
        };
        DaffNewsletterHubSpotDriverModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [common.CommonModule],
                    },] }
        ];
        return DaffNewsletterHubSpotDriverModule;
    }());

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
    /**
     * @template T, V
     */
    var DaffNewsletterEffects = /** @class */ (function () {
        function DaffNewsletterEffects(actions$, driver) {
            var _this = this;
            this.actions$ = actions$;
            this.driver = driver;
            this.trySubmission$ = effects.createEffect((/**
             * @return {?}
             */
            function () { return _this.actions$.pipe(effects.ofType(DaffNewsletterActionTypes.NewsletterSubscribeAction, DaffNewsletterActionTypes.NewsletterRetry, DaffNewsletterActionTypes.NewsletterCancelAction), operators.switchMap((/**
             * @param {?} action
             * @return {?}
             */
            function (action) {
                if ((action.type === DaffNewsletterActionTypes.NewsletterCancelAction)) {
                    return rxjs.of(action);
                }
                else if (action instanceof DaffNewsletterSubscribe || action instanceof DaffNewsletterRetry) {
                    return _this.driver.send(action.payload).pipe(operators.map((/**
                     * @param {?} resp
                     * @return {?}
                     */
                    function (resp) {
                        return new DaffNewsletterSuccessSubscribe();
                    })), operators.catchError((/**
                     * @param {?} error
                     * @return {?}
                     */
                    function (error) {
                        return rxjs.of(new DaffNewsletterFailedSubscribe('Failed to subscribe to newsletter'));
                    })));
                }
            })), effects.ofType(DaffNewsletterActionTypes.NewsletterFailedSubscribeAction, DaffNewsletterActionTypes.NewsletterSuccessSubscribeAction)); }));
        }
        DaffNewsletterEffects.decorators = [
            { type: core.Injectable }
        ];
        /** @nocollapse */
        DaffNewsletterEffects.ctorParameters = function () { return [
            { type: effects.Actions },
            { type: undefined, decorators: [{ type: core.Inject, args: [DaffNewsletterDriver,] }] }
        ]; };
        return DaffNewsletterEffects;
    }());
    if (false) {
        /** @type {?} */
        DaffNewsletterEffects.prototype.trySubmission$;
        /**
         * @type {?}
         * @private
         */
        DaffNewsletterEffects.prototype.actions$;
        /**
         * @type {?}
         * @private
         */
        DaffNewsletterEffects.prototype.driver;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var DaffNewsletterModule = /** @class */ (function () {
        function DaffNewsletterModule() {
        }
        DaffNewsletterModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [
                            common.CommonModule,
                            store.StoreModule.forFeature('newsletter', reducer),
                            effects.EffectsModule.forFeature([
                                DaffNewsletterEffects
                            ])
                        ]
                    },] }
        ];
        return DaffNewsletterModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var DaffNewsletterFacade = /** @class */ (function () {
        function DaffNewsletterFacade(store) {
            this.store = store;
            this.success$ = this.store.select(selectDaffNewsletterSuccess);
            this.error$ = this.store.select(selectDaffNewsletterError);
            this.loading$ = this.store.select(selectDaffNewsletterLoading);
        }
        /**
         * @param {?} action
         * @return {?}
         */
        DaffNewsletterFacade.prototype.dispatch = /**
         * @param {?} action
         * @return {?}
         */
        function (action) {
            this.store.dispatch(action);
        };
        DaffNewsletterFacade.decorators = [
            { type: core.Injectable, args: [{ providedIn: DaffNewsletterModule },] }
        ];
        /** @nocollapse */
        DaffNewsletterFacade.ctorParameters = function () { return [
            { type: store.Store }
        ]; };
        /** @nocollapse */ DaffNewsletterFacade.ngInjectableDef = core.ɵɵdefineInjectable({ factory: function DaffNewsletterFacade_Factory() { return new DaffNewsletterFacade(core.ɵɵinject(store.Store)); }, token: DaffNewsletterFacade, providedIn: DaffNewsletterModule });
        return DaffNewsletterFacade;
    }());
    if (false) {
        /** @type {?} */
        DaffNewsletterFacade.prototype.success$;
        /** @type {?} */
        DaffNewsletterFacade.prototype.error$;
        /** @type {?} */
        DaffNewsletterFacade.prototype.loading$;
        /**
         * @type {?}
         * @private
         */
        DaffNewsletterFacade.prototype.store;
    }

    exports.DaffNewsletterActionTypes = DaffNewsletterActionTypes;
    exports.DaffNewsletterCancel = DaffNewsletterCancel;
    exports.DaffNewsletterDriver = DaffNewsletterDriver;
    exports.DaffNewsletterFacade = DaffNewsletterFacade;
    exports.DaffNewsletterFailedSubscribe = DaffNewsletterFailedSubscribe;
    exports.DaffNewsletterHubSpotDriverModule = DaffNewsletterHubSpotDriverModule;
    exports.DaffNewsletterModule = DaffNewsletterModule;
    exports.DaffNewsletterReset = DaffNewsletterReset;
    exports.DaffNewsletterRetry = DaffNewsletterRetry;
    exports.DaffNewsletterSubscribe = DaffNewsletterSubscribe;
    exports.DaffNewsletterSuccessSubscribe = DaffNewsletterSuccessSubscribe;
    exports.reducer = reducer;
    exports.selectDaffNewsletterError = selectDaffNewsletterError;
    exports.selectDaffNewsletterLoading = selectDaffNewsletterLoading;
    exports.selectDaffNewsletterSuccess = selectDaffNewsletterSuccess;
    exports.ɵa = DaffNewsletterEffects;
    exports.ɵb = DaffNewsletterHubspotService;
    exports.ɵc = DaffNewsletterConfigToken;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=daffodil-newsletter.umd.js.map
