(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@ngrx/store'), require('@angular/core'), require('@ngrx/effects'), require('rxjs/operators'), require('rxjs'), require('@daffodil/navigation/driver')) :
    typeof define === 'function' && define.amd ? define('@daffodil/navigation/state', ['exports', '@ngrx/store', '@angular/core', '@ngrx/effects', 'rxjs/operators', 'rxjs', '@daffodil/navigation/driver'], factory) :
    (global = global || self, factory((global.daffodil = global.daffodil || {}, global.daffodil.navigation = global.daffodil.navigation || {}, global.daffodil.navigation.state = {}), global.store, global.ng.core, global.effects, global.rxjs.operators, global.rxjs, global.daffodil.navigation.driver));
}(this, function (exports, store, core, effects, operators, rxjs, driver) { 'use strict';

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
    var DaffNavigationActionTypes = {
        NavigationLoadAction: '[Daff-Navigation] Navigation Load Action',
        NavigationLoadSuccessAction: '[Daff-Navigation] Navigation Load Success Action',
        NavigationLoadFailureAction: '[Daff-Navigation] Navigation Load Failure Action',
    };
    var DaffNavigationLoad = /** @class */ (function () {
        function DaffNavigationLoad(payload) {
            this.payload = payload;
            this.type = DaffNavigationActionTypes.NavigationLoadAction;
        }
        return DaffNavigationLoad;
    }());
    if (false) {
        /** @type {?} */
        DaffNavigationLoad.prototype.type;
        /** @type {?} */
        DaffNavigationLoad.prototype.payload;
    }
    /**
     * @template T
     */
    var   /**
     * @template T
     */
    DaffNavigationLoadSuccess = /** @class */ (function () {
        function DaffNavigationLoadSuccess(payload) {
            this.payload = payload;
            this.type = DaffNavigationActionTypes.NavigationLoadSuccessAction;
        }
        return DaffNavigationLoadSuccess;
    }());
    if (false) {
        /** @type {?} */
        DaffNavigationLoadSuccess.prototype.type;
        /** @type {?} */
        DaffNavigationLoadSuccess.prototype.payload;
    }
    var DaffNavigationLoadFailure = /** @class */ (function () {
        function DaffNavigationLoadFailure(payload) {
            this.payload = payload;
            this.type = DaffNavigationActionTypes.NavigationLoadFailureAction;
        }
        return DaffNavigationLoadFailure;
    }());
    if (false) {
        /** @type {?} */
        DaffNavigationLoadFailure.prototype.type;
        /** @type {?} */
        DaffNavigationLoadFailure.prototype.payload;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var initialState = {
        navigationTree: null,
        loading: false,
        errors: []
    };
    /**
     * @template T
     * @param {?=} state
     * @param {?=} action
     * @return {?}
     */
    function daffNavigationReducer(state, action) {
        if (state === void 0) { state = initialState; }
        switch (action.type) {
            case DaffNavigationActionTypes.NavigationLoadAction:
                return __assign({}, state, { loading: true });
            case DaffNavigationActionTypes.NavigationLoadSuccessAction:
                return __assign({}, state, { loading: false, navigationTree: action.payload });
            case DaffNavigationActionTypes.NavigationLoadFailureAction:
                return __assign({}, state, { loading: false, errors: [action.payload] });
            default:
                return state;
        }
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var daffNavigationReducers = {
        navigation: daffNavigationReducer
    };

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var DAFF_NAVIGATION_STORE_FEATURE_KEY = 'daffNavigation';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * @record
     * @template T
     */
    function DaffNavigationMemoizedSelectors() { }
    if (false) {
        /** @type {?} */
        DaffNavigationMemoizedSelectors.prototype.selectNavigationFeatureState;
        /** @type {?} */
        DaffNavigationMemoizedSelectors.prototype.selectNavigationState;
        /** @type {?} */
        DaffNavigationMemoizedSelectors.prototype.selectNavigationTree;
        /** @type {?} */
        DaffNavigationMemoizedSelectors.prototype.selectNavigationLoading;
        /** @type {?} */
        DaffNavigationMemoizedSelectors.prototype.selectNavigationErrors;
    }
    /** @type {?} */
    var createNavigationFeatureSelectors = (/**
     * @template T
     * @return {?}
     */
    function () {
        /** @type {?} */
        var selectNavigationFeatureState = store.createFeatureSelector(DAFF_NAVIGATION_STORE_FEATURE_KEY);
        /** @type {?} */
        var selectNavigationState = store.createSelector(selectNavigationFeatureState, (/**
         * @param {?} state
         * @return {?}
         */
        function (state) { return state.navigation; }));
        /** @type {?} */
        var selectNavigationTree = store.createSelector(selectNavigationState, (/**
         * @param {?} state
         * @return {?}
         */
        function (state) { return state.navigationTree; }));
        /** @type {?} */
        var selectNavigationLoading = store.createSelector(selectNavigationState, (/**
         * @param {?} state
         * @return {?}
         */
        function (state) { return state.loading; }));
        /** @type {?} */
        var selectNavigationErrors = store.createSelector(selectNavigationState, (/**
         * @param {?} state
         * @return {?}
         */
        function (state) { return state.errors; }));
        return {
            selectNavigationFeatureState: selectNavigationFeatureState,
            selectNavigationState: selectNavigationState,
            selectNavigationTree: selectNavigationTree,
            selectNavigationLoading: selectNavigationLoading,
            selectNavigationErrors: selectNavigationErrors
        };
    });
    var ɵ0 = createNavigationFeatureSelectors;
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
            : createNavigationFeatureSelectors(); });
    };
    /** @type {?} */
    var getDaffNavigationSelectors = ((ɵ1))();

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * @template T
     */
    var DaffNavigationFacade = /** @class */ (function () {
        function DaffNavigationFacade(store$1) {
            this.store = store$1;
            var _a = getDaffNavigationSelectors(), selectNavigationTree = _a.selectNavigationTree, selectNavigationLoading = _a.selectNavigationLoading, selectNavigationErrors = _a.selectNavigationErrors;
            this.tree$ = this.store.pipe(store.select(selectNavigationTree));
            this.loading$ = this.store.pipe(store.select(selectNavigationLoading));
            this.errors$ = this.store.pipe(store.select(selectNavigationErrors));
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
        DaffNavigationFacade.prototype.dispatch = /**
         * Dispatches the given action.
         * @param {?} action action to dispatch.
         * @return {?}
         */
        function (action) {
            this.store.dispatch(action);
        };
        DaffNavigationFacade.decorators = [
            { type: core.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */
        DaffNavigationFacade.ctorParameters = function () { return [
            { type: store.Store }
        ]; };
        /** @nocollapse */ DaffNavigationFacade.ngInjectableDef = core.ɵɵdefineInjectable({ factory: function DaffNavigationFacade_Factory() { return new DaffNavigationFacade(core.ɵɵinject(store.Store)); }, token: DaffNavigationFacade, providedIn: "root" });
        return DaffNavigationFacade;
    }());
    if (false) {
        /**
         * The navigation retrieved in a single navigation call.
         * @type {?}
         */
        DaffNavigationFacade.prototype.tree$;
        /**
         * The loading state for retrieving a single navigation.
         * @type {?}
         */
        DaffNavigationFacade.prototype.loading$;
        /**
         * Errors associated with retrieving a single navigation.
         * @type {?}
         */
        DaffNavigationFacade.prototype.errors$;
        /**
         * @type {?}
         * @private
         */
        DaffNavigationFacade.prototype.store;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * @template T
     */
    var DaffNavigationEffects = /** @class */ (function () {
        function DaffNavigationEffects(actions$, driver) {
            var _this = this;
            this.actions$ = actions$;
            this.driver = driver;
            this.loadNavigation$ = this.actions$.pipe(effects.ofType(DaffNavigationActionTypes.NavigationLoadAction), operators.switchMap((/**
             * @param {?} action
             * @return {?}
             */
            function (action) {
                return _this.driver.get(action.payload)
                    .pipe(operators.map((/**
                 * @param {?} resp
                 * @return {?}
                 */
                function (resp) {
                    return new DaffNavigationLoadSuccess(resp);
                })), operators.catchError((/**
                 * @param {?} error
                 * @return {?}
                 */
                function (error) {
                    return rxjs.of(new DaffNavigationLoadFailure('Failed to load the navigation tree'));
                })));
            })));
        }
        DaffNavigationEffects.decorators = [
            { type: core.Injectable }
        ];
        /** @nocollapse */
        DaffNavigationEffects.ctorParameters = function () { return [
            { type: effects.Actions },
            { type: undefined, decorators: [{ type: core.Inject, args: [driver.DaffNavigationDriver,] }] }
        ]; };
        __decorate([
            effects.Effect(),
            __metadata("design:type", rxjs.Observable)
        ], DaffNavigationEffects.prototype, "loadNavigation$", void 0);
        return DaffNavigationEffects;
    }());
    if (false) {
        /** @type {?} */
        DaffNavigationEffects.prototype.loadNavigation$;
        /**
         * @type {?}
         * @private
         */
        DaffNavigationEffects.prototype.actions$;
        /**
         * @type {?}
         * @private
         */
        DaffNavigationEffects.prototype.driver;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var DaffNavigationStateModule = /** @class */ (function () {
        function DaffNavigationStateModule() {
        }
        DaffNavigationStateModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [
                            store.StoreModule.forFeature(DAFF_NAVIGATION_STORE_FEATURE_KEY, daffNavigationReducers),
                            effects.EffectsModule.forFeature([DaffNavigationEffects]),
                        ]
                    },] }
        ];
        return DaffNavigationStateModule;
    }());

    exports.DAFF_NAVIGATION_STORE_FEATURE_KEY = DAFF_NAVIGATION_STORE_FEATURE_KEY;
    exports.DaffNavigationActionTypes = DaffNavigationActionTypes;
    exports.DaffNavigationFacade = DaffNavigationFacade;
    exports.DaffNavigationLoad = DaffNavigationLoad;
    exports.DaffNavigationLoadFailure = DaffNavigationLoadFailure;
    exports.DaffNavigationLoadSuccess = DaffNavigationLoadSuccess;
    exports.DaffNavigationStateModule = DaffNavigationStateModule;
    exports.daffNavigationReducer = daffNavigationReducer;
    exports.daffNavigationReducers = daffNavigationReducers;
    exports.getDaffNavigationSelectors = getDaffNavigationSelectors;
    exports.initialState = initialState;
    exports.ɵa = DaffNavigationEffects;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=daffodil-navigation-state.umd.js.map
