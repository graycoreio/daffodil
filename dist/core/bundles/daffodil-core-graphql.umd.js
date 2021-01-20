(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('apollo-angular'), require('rxjs')) :
    typeof define === 'function' && define.amd ? define('@daffodil/core/graphql', ['exports', '@angular/core', 'apollo-angular', 'rxjs'], factory) :
    (global = global || self, factory((global.daffodil = global.daffodil || {}, global.daffodil.core = global.daffodil.core || {}, global.daffodil.core.graphql = {}), global.ng.core, global.apolloAngular, global.rxjs));
}(this, function (exports, core, apolloAngular, rxjs) { 'use strict';

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
    /** @type {?} */
    var getFragmentNames = (/**
     * @param {?} fragment
     * @return {?}
     */
    function (fragment) {
        return fragment.definitions.filter((/**
         * @param {?} def
         * @return {?}
         */
        function (def) {
            return def.kind === 'FragmentDefinition';
        })).map((/**
         * @param {?} def
         * @return {?}
         */
        function (def) {
            return ((/** @type {?} */ (def))).name.value;
        }));
    })
    /**
     * Builds a list of fragment names present inside the specified GraphQL document nodes.
     * Returns an empty array if no fragments have been defined or if null is passed.
     * @param fragments The created fragments.
     */
    ;
    var ɵ0 = getFragmentNames;
    /**
     * Builds a list of fragment names present inside the specified GraphQL document nodes.
     * Returns an empty array if no fragments have been defined or if null is passed.
     * \@param fragments The created fragments.
     * @type {?}
     */
    var daffGetFragmentNames = (/**
     * @param {...?} fragments
     * @return {?}
     */
    function () {
        var fragments = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            fragments[_i] = arguments[_i];
        }
        return fragments.reduce((/**
         * @param {?} acc
         * @param {?} fragment
         * @return {?}
         */
        function (acc, fragment) { return acc.concat(getFragmentNames(fragment)); }), []);
    })
    /**
     * Builds a string of fragment names that can be interpolated into a GraphQL query.
     * Each name is separated by a newline character: '\n'.
     * If an empty array is passed, an empty string is returned.
     * @param fragments A list of GraphQL documents that contain fragments.
     */
    ;
    var ɵ1 = daffGetFragmentNames;
    /**
     * Builds a string of fragment names that can be interpolated into a GraphQL query.
     * Each name is separated by a newline character: '\n'.
     * If an empty array is passed, an empty string is returned.
     * \@param fragments A list of GraphQL documents that contain fragments.
     * @type {?}
     */
    var daffBuildFragmentNameSpread = (/**
     * @param {...?} fragments
     * @return {?}
     */
    function () {
        var fragments = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            fragments[_i] = arguments[_i];
        }
        return daffGetFragmentNames.apply(void 0, __spread(fragments)).reduce((/**
         * @param {?} acc
         * @param {?} name
         * @return {?}
         */
        function (acc, name) { return acc.concat("..." + name + "\n"); }), '');
    });

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * Builds a string of fragment definitions that can be interpolated into a GraphQL query.
     * Each definition is separated by a newline character: '\n'.
     * \@param documents A list of GraphQL documents that should only contain fragments.
     * @type {?}
     */
    var daffBuildFragmentDefinition = (/**
     * @param {...?} documents
     * @return {?}
     */
    function () {
        var documents = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            documents[_i] = arguments[_i];
        }
        return documents.reduce((/**
         * @param {?} acc
         * @param {?} fragment
         * @return {?}
         */
        function (acc, fragment) { return acc.concat(fragment.loc.source.body + "\n"); }), '');
    });

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * A service that will queue mutate calls to Apollo.
     * It will not send subsequent mutate requests until the previous one has been completed.
     * This is useful for avoiding race conditions on the backend.
     * This should be used alongside Apollo.
     */
    var DaffQueuedApollo = /** @class */ (function () {
        function DaffQueuedApollo(apollo) {
            this.apollo = apollo;
            this.queue = [];
        }
        /**
         * Queue up a mutate request.
         * The request will not actually be queued until the returned observable is subscribed.
         * If the queue is empty, the request will be sent when it enters the queue.
         * Otherwise, it will be sent when it reaches the front of the queue.
         * The observable will complete after it emits once.
         * @param options Mutation options.
         */
        /**
         * Queue up a mutate request.
         * The request will not actually be queued until the returned observable is subscribed.
         * If the queue is empty, the request will be sent when it enters the queue.
         * Otherwise, it will be sent when it reaches the front of the queue.
         * The observable will complete after it emits once.
         * @template T, V
         * @param {?} options Mutation options.
         * @return {?}
         */
        DaffQueuedApollo.prototype.mutate = /**
         * Queue up a mutate request.
         * The request will not actually be queued until the returned observable is subscribed.
         * If the queue is empty, the request will be sent when it enters the queue.
         * Otherwise, it will be sent when it reaches the front of the queue.
         * The observable will complete after it emits once.
         * @template T, V
         * @param {?} options Mutation options.
         * @return {?}
         */
        function (options) {
            var _this = this;
            return new rxjs.Observable((/**
             * @param {?} subscriber
             * @return {?}
             */
            function (subscriber) { return _this.addRequestToQueue(subscriber, _this.apollo.mutate(options)); }));
        };
        /**
         * @private
         * @param {?} subscriber
         * @param {?} request
         * @return {?}
         */
        DaffQueuedApollo.prototype.addRequestToQueue = /**
         * @private
         * @param {?} subscriber
         * @param {?} request
         * @return {?}
         */
        function (subscriber, request) {
            var _this = this;
            this.queue.push((/**
             * @return {?}
             */
            function () {
                /** @type {?} */
                var sub = request.subscribe((/**
                 * @param {?} response
                 * @return {?}
                 */
                function (response) {
                    // emit the outer observable
                    subscriber.next(response);
                    subscriber.complete();
                    _this.finishRequestSubscription(sub);
                }), (/**
                 * @param {?} error
                 * @return {?}
                 */
                function (error) {
                    subscriber.error(error);
                    _this.finishRequestSubscription(sub);
                }), (/**
                 * @return {?}
                 */
                function () {
                    subscriber.complete();
                    _this.finishRequestSubscription(sub);
                }));
            }));
            // start the queue if previously empty
            if (this.queue.length === 1)
                this.queue[0]();
        };
        /**
         * @private
         * @param {?} requestSubscription
         * @return {?}
         */
        DaffQueuedApollo.prototype.finishRequestSubscription = /**
         * @private
         * @param {?} requestSubscription
         * @return {?}
         */
        function (requestSubscription) {
            requestSubscription.unsubscribe();
            // process queue
            this.queue.shift();
            // TODO: optional chaining
            if (this.queue[0])
                this.queue[0]();
        };
        DaffQueuedApollo.decorators = [
            { type: core.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */
        DaffQueuedApollo.ctorParameters = function () { return [
            { type: apolloAngular.Apollo }
        ]; };
        /** @nocollapse */ DaffQueuedApollo.ngInjectableDef = core.ɵɵdefineInjectable({ factory: function DaffQueuedApollo_Factory() { return new DaffQueuedApollo(core.ɵɵinject(apolloAngular.Apollo)); }, token: DaffQueuedApollo, providedIn: "root" });
        return DaffQueuedApollo;
    }());
    if (false) {
        /** @type {?} */
        DaffQueuedApollo.prototype.queue;
        /**
         * @type {?}
         * @private
         */
        DaffQueuedApollo.prototype.apollo;
    }

    exports.DaffQueuedApollo = DaffQueuedApollo;
    exports.daffBuildFragmentDefinition = daffBuildFragmentDefinition;
    exports.daffBuildFragmentNameSpread = daffBuildFragmentNameSpread;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=daffodil-core-graphql.umd.js.map
