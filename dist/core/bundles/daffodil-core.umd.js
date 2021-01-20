(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common'), require('rxjs'), require('rxjs/operators')) :
    typeof define === 'function' && define.amd ? define('@daffodil/core', ['exports', '@angular/core', '@angular/common', 'rxjs', 'rxjs/operators'], factory) :
    (global = global || self, factory((global.daffodil = global.daffodil || {}, global.daffodil.core = {}), global.ng.core, global.ng.common, global.rxjs, global.rxjs.operators));
}(this, function (exports, core, common, rxjs, operators) { 'use strict';

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
     * A function to add long numbers accurately with conversions and integer math.
     * This function only guarantees correct answers when the numbers given and the result are less than
     * 16 significant figures and less than 10^11
     *
     * @param {...?} numbers
     * @return {?}
     */
    function daffAdd() {
        var numbers = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            numbers[_i] = arguments[_i];
        }
        if (numbers.length < 2)
            throw new Error('Provide at least 2 numbers for daffAdd.');
        /** @type {?} */
        var precision = Math.max.apply(Math, __spread(numbers.map(daffPrecision)));
        return numbers.reduce((/**
         * @param {?} acc
         * @param {?} number
         * @return {?}
         */
        function (acc, number) {
            return acc + Math.round(number * precision);
        }), 0) / precision;
    }
    /**
     * A function to subtract long numbers accurately with conversions and integer math.
     * This function only guarantees correct answers when the numbers given and the result are each less than
     * 16 significant figures and less than 10^11
     *
     * @param {...?} numbers
     * @return {?}
     */
    function daffSubtract() {
        var numbers = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            numbers[_i] = arguments[_i];
        }
        if (numbers.length < 2)
            throw new Error('Provide at least 2 numbers for daffSubtract.');
        /** @type {?} */
        var precision = Math.max.apply(Math, __spread(numbers.map(daffPrecision)));
        return numbers.slice(1).reduce((/**
         * @param {?} acc
         * @param {?} number
         * @return {?}
         */
        function (acc, number) { return acc - Math.round(number * precision); }), Math.round(numbers[0] * precision)) / precision;
    }
    /**
     * A function to multiply long numbers accurately with conversions and integer math.
     * This function only guarantees correct answers when the numbers given and the result are each less than 16 significant figures
     * and less than 10^11
     *
     * @param {...?} numbers
     * @return {?}
     */
    function daffMultiply() {
        var numbers = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            numbers[_i] = arguments[_i];
        }
        if (numbers.length < 2)
            throw new Error('Provide at least 2 numbers for daffMultiply.');
        /** @type {?} */
        var precision = Math.max.apply(Math, __spread(numbers.map(daffPrecision)));
        return numbers.reduce((/**
         * @param {?} acc
         * @param {?} number
         * @return {?}
         */
        function (acc, number) { return acc * Math.round(number * precision); }), 1) / Math.pow(precision, numbers.length);
    }
    /**
     * A function to divide long numbers accurately with conversions and integer math.
     * This function only guarantees correct answers when the numbers given and the result are each less than 16 significant figures
     * and less than 10^11
     *
     * @param {...?} numbers
     * @return {?}
     */
    function daffDivide() {
        var numbers = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            numbers[_i] = arguments[_i];
        }
        if (numbers.length < 2)
            throw new Error('Provide at least 2 numbers for daffDivide.');
        /** @type {?} */
        var precision = Math.max.apply(Math, __spread(numbers.map(daffPrecision)));
        return numbers.slice(1).reduce((/**
         * @param {?} acc
         * @param {?} number
         * @return {?}
         */
        function (acc, number) { return acc / Math.round(number * precision); }), Math.round(numbers[0] * precision)) * Math.pow(precision, numbers.length - 2);
    }
    /**
     * A helper function to get the number of decimal significant figures of a number.
     * This function will fail if the given number has more than 16 significant figures or
     * the value of the number is greater than 10^11
     * @param {?} number
     * @return {?}
     */
    function daffPrecision(number) {
        /** @type {?} */
        var p = 10000;
        if (number === undefined || number === null)
            return p;
        while (Math.round(number * p) / p !== number) {
            p *= 10;
        }
        return p;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * Range
     *
     * Range accepts two inputs, a `start` and an `end`
     * and returns an array filled with numbers from
     * `start` to `end`.
     *
     * \@param start
     * \@param end
     * \@return number
     * @type {?}
     */
    var range = (/**
     * @param {?} start
     * @param {?} end
     * @return {?}
     */
    function (start, end) {
        return Array.apply(null, Array(end - start + 1)).map((/**
         * @param {?} val
         * @param {?} index
         * @return {?}
         */
        function (val, index) { return index + start; }));
    });

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * Immutable Fisher-Yates Shuffle
     * https://en.wikipedia.org/wiki/Fisher%E2%80%93Yates_shuffle
     * @type {?}
     */
    var shuffle = (/**
     * @template T
     * @param {?} array
     * @return {?}
     */
    function (array) {
        /** @type {?} */
        var result = [];
        array.forEach((/**
         * @param {?} el
         * @param {?} i
         * @return {?}
         */
        function (el, i) {
            /** @type {?} */
            var s = Math.floor(Math.random() * i);
            if (s !== i) {
                result[i] = result[s];
            }
            result[s] = el;
        }));
        return result;
    });

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * Returns a random subset of an array in a random order.
     * \@param array
     * \@param length
     * @type {?}
     */
    var randomSubset = (/**
     * @template T
     * @param {?} array
     * @param {?=} length
     * @return {?}
     */
    function (array, length) {
        if (length > array.length) {
            throw new Error('Requested length is longer than array length.');
        }
        length = length ? length : Math.floor(Math.random() * array.length);
        return shuffle(array).slice(0, length);
    });

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * Returns a random slice of an array.
     * \@param array
     * @type {?}
     */
    var randomSlice = (/**
     * @template T
     * @param {?} array
     * @return {?}
     */
    function (array) {
        if (array.length === 0) {
            return [];
        }
        ;
        /** @type {?} */
        var start = Math.floor(Math.random() * Math.floor(array.length - 1));
        /** @type {?} */
        var end = start + Math.floor(Math.random() * (array.length - 1 - start));
        return array.slice(start, end);
    });

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * A class which allows you to appropriately check the inheritance of an error.
     *
     * In typescript, when you try to extend an error with a specialized error class,
     * if you try to call something like:
     *
     * ```ts
     * class MyError extends Error {}
     *
     * let myError = new MyError();
     *
     * myError instanceof MyError; // returns false
     * ```
     *
     * You will see unexpected things. This class fixes that issue as described here
     * https://github.com/microsoft/TypeScript/issues/13965
     */
    var   /**
     * A class which allows you to appropriately check the inheritance of an error.
     *
     * In typescript, when you try to extend an error with a specialized error class,
     * if you try to call something like:
     *
     * ```ts
     * class MyError extends Error {}
     *
     * let myError = new MyError();
     *
     * myError instanceof MyError; // returns false
     * ```
     *
     * You will see unexpected things. This class fixes that issue as described here
     * https://github.com/microsoft/TypeScript/issues/13965
     */
    DaffInheritableError = /** @class */ (function (_super) {
        __extends(DaffInheritableError, _super);
        function DaffInheritableError(message) {
            var _newTarget = this.constructor;
            var _this = this;
            /** @type {?} */
            var trueProto = _newTarget.prototype;
            _this = _super.call(this, message) || this;
            Object.setPrototypeOf(_this, trueProto);
            return _this;
        }
        return DaffInheritableError;
    }(Error));
    if (false) {
        /** @type {?} */
        DaffInheritableError.prototype.__proto__;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var DaffStorageServiceError = /** @class */ (function (_super) {
        __extends(DaffStorageServiceError, _super);
        function DaffStorageServiceError(message) {
            var _this = _super.call(this, message) || this;
            _this.message = message;
            _this.code = 'DAFF_STORAGE_FAILURE';
            return _this;
        }
        return DaffStorageServiceError;
    }(DaffInheritableError));
    if (false) {
        /** @type {?} */
        DaffStorageServiceError.prototype.code;
        /** @type {?} */
        DaffStorageServiceError.prototype.message;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var DaffErrorStorageService = /** @class */ (function () {
        function DaffErrorStorageService() {
        }
        /**
         * @param {?} key
         * @param {?} value
         * @return {?}
         */
        DaffErrorStorageService.prototype.setItem = /**
         * @param {?} key
         * @param {?} value
         * @return {?}
         */
        function (key, value) {
            this.throwError();
        };
        /**
         * @param {?} key
         * @return {?}
         */
        DaffErrorStorageService.prototype.getItem = /**
         * @param {?} key
         * @return {?}
         */
        function (key) {
            this.throwError();
        };
        /**
         * @param {?} key
         * @return {?}
         */
        DaffErrorStorageService.prototype.removeItem = /**
         * @param {?} key
         * @return {?}
         */
        function (key) {
            this.throwError();
        };
        /**
         * @return {?}
         */
        DaffErrorStorageService.prototype.clear = /**
         * @return {?}
         */
        function () {
            this.throwError();
        };
        /**
         * @private
         * @return {?}
         */
        DaffErrorStorageService.prototype.throwError = /**
         * @private
         * @return {?}
         */
        function () {
            throw new DaffStorageServiceError(DaffErrorStorageService.ERROR_MESSAGE);
        };
        DaffErrorStorageService.ERROR_MESSAGE = 'The DaffErrorStorageService always throws an error.';
        DaffErrorStorageService.decorators = [
            { type: core.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */ DaffErrorStorageService.ngInjectableDef = core.ɵɵdefineInjectable({ factory: function DaffErrorStorageService_Factory() { return new DaffErrorStorageService(); }, token: DaffErrorStorageService, providedIn: "root" });
        return DaffErrorStorageService;
    }());
    if (false) {
        /** @type {?} */
        DaffErrorStorageService.ERROR_MESSAGE;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * An error thrown when there is an attempt to access storage on the server and none is available.
     */
    var   /**
     * An error thrown when there is an attempt to access storage on the server and none is available.
     */
    DaffServerSideStorageError = /** @class */ (function (_super) {
        __extends(DaffServerSideStorageError, _super);
        function DaffServerSideStorageError(message) {
            var _this = _super.call(this, message) || this;
            _this.message = message;
            _this.code = 'DAFF_SERVER_STORAGE_FAILURE';
            return _this;
        }
        return DaffServerSideStorageError;
    }(DaffStorageServiceError));
    if (false) {
        /** @type {?} */
        DaffServerSideStorageError.prototype.code;
        /** @type {?} */
        DaffServerSideStorageError.prototype.message;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * A storage service meant to be loaded into SSR contexts.
     * It will always throw the {\@link DaffServerSideStorageError}.
     */
    var DaffServerErrorStorageService = /** @class */ (function () {
        function DaffServerErrorStorageService() {
        }
        /**
         * @param {?} key
         * @param {?} value
         * @return {?}
         */
        DaffServerErrorStorageService.prototype.setItem = /**
         * @param {?} key
         * @param {?} value
         * @return {?}
         */
        function (key, value) {
            this.throwError();
        };
        /**
         * @param {?} key
         * @return {?}
         */
        DaffServerErrorStorageService.prototype.getItem = /**
         * @param {?} key
         * @return {?}
         */
        function (key) {
            this.throwError();
        };
        /**
         * @param {?} key
         * @return {?}
         */
        DaffServerErrorStorageService.prototype.removeItem = /**
         * @param {?} key
         * @return {?}
         */
        function (key) {
            this.throwError();
        };
        /**
         * @return {?}
         */
        DaffServerErrorStorageService.prototype.clear = /**
         * @return {?}
         */
        function () {
            this.throwError();
        };
        /**
         * @private
         * @return {?}
         */
        DaffServerErrorStorageService.prototype.throwError = /**
         * @private
         * @return {?}
         */
        function () {
            throw new DaffServerSideStorageError(DaffServerErrorStorageService.ERROR_MESSAGE);
        };
        DaffServerErrorStorageService.ERROR_MESSAGE = 'The DaffServerErrorStorageService always throws an error.';
        DaffServerErrorStorageService.decorators = [
            { type: core.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */ DaffServerErrorStorageService.ngInjectableDef = core.ɵɵdefineInjectable({ factory: function DaffServerErrorStorageService_Factory() { return new DaffServerErrorStorageService(); }, token: DaffServerErrorStorageService, providedIn: "root" });
        return DaffServerErrorStorageService;
    }());
    if (false) {
        /** @type {?} */
        DaffServerErrorStorageService.ERROR_MESSAGE;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var DaffLocalStorageService = /** @class */ (function () {
        function DaffLocalStorageService(platformId) {
            if (!common.isPlatformBrowser(platformId)) {
                throw new Error('The DaffLocalStorageService can only be instantiated in the browser.');
            }
        }
        /**
         * Persist the given item into local storage.
         */
        /**
         * Persist the given item into local storage.
         * @param {?} key
         * @param {?} value
         * @return {?}
         */
        DaffLocalStorageService.prototype.setItem = /**
         * Persist the given item into local storage.
         * @param {?} key
         * @param {?} value
         * @return {?}
         */
        function (key, value) {
            localStorage.setItem(key, value);
        };
        /**
         * Retrieve the given item from localstorage.
         */
        /**
         * Retrieve the given item from localstorage.
         * @param {?} key
         * @return {?}
         */
        DaffLocalStorageService.prototype.getItem = /**
         * Retrieve the given item from localstorage.
         * @param {?} key
         * @return {?}
         */
        function (key) {
            return localStorage.getItem(key);
        };
        /**
         * Remove a given item from localstorage
         */
        /**
         * Remove a given item from localstorage
         * @param {?} key
         * @return {?}
         */
        DaffLocalStorageService.prototype.removeItem = /**
         * Remove a given item from localstorage
         * @param {?} key
         * @return {?}
         */
        function (key) {
            localStorage.removeItem(key);
        };
        /**
         * @return {?}
         */
        DaffLocalStorageService.prototype.clear = /**
         * @return {?}
         */
        function () {
            localStorage.clear();
        };
        DaffLocalStorageService.decorators = [
            { type: core.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */
        DaffLocalStorageService.ctorParameters = function () { return [
            { type: String, decorators: [{ type: core.Inject, args: [core.PLATFORM_ID,] }] }
        ]; };
        /** @nocollapse */ DaffLocalStorageService.ngInjectableDef = core.ɵɵdefineInjectable({ factory: function DaffLocalStorageService_Factory() { return new DaffLocalStorageService(core.ɵɵinject(core.PLATFORM_ID)); }, token: DaffLocalStorageService, providedIn: "root" });
        return DaffLocalStorageService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var DaffNoopStorageService = /** @class */ (function () {
        function DaffNoopStorageService() {
        }
        /**
         * @param {?} key
         * @param {?} value
         * @return {?}
         */
        DaffNoopStorageService.prototype.setItem = /**
         * @param {?} key
         * @param {?} value
         * @return {?}
         */
        function (key, value) { };
        ;
        /**
         * @param {?} key
         * @return {?}
         */
        DaffNoopStorageService.prototype.getItem = /**
         * @param {?} key
         * @return {?}
         */
        function (key) { };
        ;
        /**
         * @return {?}
         */
        DaffNoopStorageService.prototype.clear = /**
         * @return {?}
         */
        function () { };
        ;
        /**
         * @param {?} key
         * @return {?}
         */
        DaffNoopStorageService.prototype.removeItem = /**
         * @param {?} key
         * @return {?}
         */
        function (key) { };
        ;
        DaffNoopStorageService.decorators = [
            { type: core.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */ DaffNoopStorageService.ngInjectableDef = core.ɵɵdefineInjectable({ factory: function DaffNoopStorageService_Factory() { return new DaffNoopStorageService(); }, token: DaffNoopStorageService, providedIn: "root" });
        return DaffNoopStorageService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * @record
     */
    function DaffPersistenceService() { }
    if (false) {
        /**
         * @param {?} key
         * @param {?} value
         * @return {?}
         */
        DaffPersistenceService.prototype.setItem = function (key, value) { };
        /**
         * @param {?} key
         * @return {?}
         */
        DaffPersistenceService.prototype.getItem = function (key) { };
        /**
         * @return {?}
         */
        DaffPersistenceService.prototype.clear = function () { };
        /**
         * @param {?} key
         * @return {?}
         */
        DaffPersistenceService.prototype.removeItem = function (key) { };
    }
    /** @type {?} */
    var DaffPersistenceServiceToken = new core.InjectionToken('DaffPersistenceService', {
        providedIn: 'root',
        factory: (/**
         * @return {?}
         */
        function () { return common.isPlatformBrowser(core.inject(core.PLATFORM_ID))
            ? new DaffLocalStorageService(core.inject(core.PLATFORM_ID))
            : new DaffServerErrorStorageService(); }),
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
     * Retries failed Observables
     * @param {?} maxTries The maximum number of tries the observable will be tried
     * @param {?} ms The initial amount of time
     * @return {?}
     */
    function backoff(maxTries, ms) {
        return rxjs.pipe(operators.retryWhen((/**
         * @param {?} attempt
         * @return {?}
         */
        function (attempt) { return attempt.pipe(operators.mergeMap((/**
         * @param {?} shadowedAttempt
         * @param {?} i
         * @return {?}
         */
        function (shadowedAttempt, i) {
            if (i >= maxTries)
                return rxjs.throwError(shadowedAttempt);
            return rxjs.timer(ms * Math.pow(2, i));
        }))); })));
    }

    exports.DaffErrorStorageService = DaffErrorStorageService;
    exports.DaffInheritableError = DaffInheritableError;
    exports.DaffLocalStorageService = DaffLocalStorageService;
    exports.DaffNoopStorageService = DaffNoopStorageService;
    exports.DaffPersistenceServiceToken = DaffPersistenceServiceToken;
    exports.DaffServerErrorStorageService = DaffServerErrorStorageService;
    exports.DaffServerSideStorageError = DaffServerSideStorageError;
    exports.DaffStorageServiceError = DaffStorageServiceError;
    exports.backoff = backoff;
    exports.daffAdd = daffAdd;
    exports.daffDivide = daffDivide;
    exports.daffMultiply = daffMultiply;
    exports.daffSubtract = daffSubtract;
    exports.randomSlice = randomSlice;
    exports.randomSubset = randomSubset;
    exports.range = range;
    exports.shuffle = shuffle;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=daffodil-core.umd.js.map
