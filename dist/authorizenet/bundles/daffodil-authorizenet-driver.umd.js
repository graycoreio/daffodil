(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@daffodil/core')) :
    typeof define === 'function' && define.amd ? define('@daffodil/authorizenet/driver', ['exports', '@angular/core', '@daffodil/core'], factory) :
    (global = global || self, factory((global.daffodil = global.daffodil || {}, global.daffodil.authorizenet = global.daffodil.authorizenet || {}, global.daffodil.authorizenet.driver = {}), global.ng.core, global.core$1));
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
    /** @type {?} */
    var DaffAuthorizeNetConfigToken = new core.InjectionToken('DaffAuthorizeNetConfigToken');
    /**
     * An interface for providing \@daffodil/authorizenet with needed configurations specific to your authorizenet
     * endpoint.
     * @record
     */
    function DaffAuthorizeNetConfig() { }
    if (false) {
        /** @type {?} */
        DaffAuthorizeNetConfig.prototype.clientKey;
        /** @type {?} */
        DaffAuthorizeNetConfig.prototype.apiLoginID;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var DaffAuthorizeNetDriver = new core.InjectionToken('DaffAuthorizeNetDriver');
    /**
     * @record
     * @template T
     */
    function DaffAuthorizeNetService() { }
    if (false) {
        /**
         * @param {?} paymentTokenRequest
         * @return {?}
         */
        DaffAuthorizeNetService.prototype.generateToken = function (paymentTokenRequest) { };
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var DaffAuthorizeNetPaymentId = new core.InjectionToken('DaffAuthorizeNetPaymentId');

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * An error thrown when Accept.js has been loaded incorrectly.
     * This can be caused by the script being loaded from a local source
     * or when the browser or proxy has improperly cached an older version of the script.
     */
    var   /**
     * An error thrown when Accept.js has been loaded incorrectly.
     * This can be caused by the script being loaded from a local source
     * or when the browser or proxy has improperly cached an older version of the script.
     */
    DaffAuthorizeNetAcceptjsInvalidError = /** @class */ (function (_super) {
        __extends(DaffAuthorizeNetAcceptjsInvalidError, _super);
        function DaffAuthorizeNetAcceptjsInvalidError(message) {
            var _this = _super.call(this, message) || this;
            _this.message = message;
            _this.code = 'DAFF_AUTHORIZE_NET_ACCEPTJS_INVALID';
            return _this;
        }
        return DaffAuthorizeNetAcceptjsInvalidError;
    }(core$1.DaffInheritableError));
    if (false) {
        /** @type {?} */
        DaffAuthorizeNetAcceptjsInvalidError.prototype.code;
        /** @type {?} */
        DaffAuthorizeNetAcceptjsInvalidError.prototype.message;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * An error thrown when Accept.js has not been loaded.
     */
    var   /**
     * An error thrown when Accept.js has not been loaded.
     */
    DaffAuthorizeNetAcceptjsMissingError = /** @class */ (function (_super) {
        __extends(DaffAuthorizeNetAcceptjsMissingError, _super);
        function DaffAuthorizeNetAcceptjsMissingError(message) {
            var _this = _super.call(this, message) || this;
            _this.message = message;
            _this.code = 'DAFF_AUTHORIZE_NET_ACCEPTJS_MISSING';
            return _this;
        }
        return DaffAuthorizeNetAcceptjsMissingError;
    }(core$1.DaffInheritableError));
    if (false) {
        /** @type {?} */
        DaffAuthorizeNetAcceptjsMissingError.prototype.code;
        /** @type {?} */
        DaffAuthorizeNetAcceptjsMissingError.prototype.message;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * An error thrown when either the API Login ID or Public Client Key values are incorrect.
     */
    var   /**
     * An error thrown when either the API Login ID or Public Client Key values are incorrect.
     */
    DaffAuthorizeNetAuthFailedError = /** @class */ (function (_super) {
        __extends(DaffAuthorizeNetAuthFailedError, _super);
        function DaffAuthorizeNetAuthFailedError(message) {
            var _this = _super.call(this, message) || this;
            _this.message = message;
            _this.code = 'DAFF_AUTHORIZE_NET_AUTH_FAILED';
            return _this;
        }
        return DaffAuthorizeNetAuthFailedError;
    }(core$1.DaffInheritableError));
    if (false) {
        /** @type {?} */
        DaffAuthorizeNetAuthFailedError.prototype.code;
        /** @type {?} */
        DaffAuthorizeNetAuthFailedError.prototype.message;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * An error thrown when required information is missing from the request payload.
     */
    var   /**
     * An error thrown when required information is missing from the request payload.
     */
    DaffAuthorizeNetInputMissingError = /** @class */ (function (_super) {
        __extends(DaffAuthorizeNetInputMissingError, _super);
        function DaffAuthorizeNetInputMissingError(message) {
            var _this = _super.call(this, message) || this;
            _this.message = message;
            _this.code = 'DAFF_AUTHORIZE_NET_INPUT_MISSING';
            return _this;
        }
        return DaffAuthorizeNetInputMissingError;
    }(core$1.DaffInheritableError));
    if (false) {
        /** @type {?} */
        DaffAuthorizeNetInputMissingError.prototype.code;
        /** @type {?} */
        DaffAuthorizeNetInputMissingError.prototype.message;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * An error thrown when requests are not made over HTTPS.
     */
    var   /**
     * An error thrown when requests are not made over HTTPS.
     */
    DaffAuthorizeNetInsecureConnectionError = /** @class */ (function (_super) {
        __extends(DaffAuthorizeNetInsecureConnectionError, _super);
        function DaffAuthorizeNetInsecureConnectionError(message) {
            var _this = _super.call(this, message) || this;
            _this.message = message;
            _this.code = 'DAFF_AUTHORIZE_NET_INSECURE_CONNECTION';
            return _this;
        }
        return DaffAuthorizeNetInsecureConnectionError;
    }(core$1.DaffInheritableError));
    if (false) {
        /** @type {?} */
        DaffAuthorizeNetInsecureConnectionError.prototype.code;
        /** @type {?} */
        DaffAuthorizeNetInsecureConnectionError.prototype.message;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * An error thrown when the platform response is missing key information or malformed in an unrecoverable way.
     */
    var   /**
     * An error thrown when the platform response is missing key information or malformed in an unrecoverable way.
     */
    DaffAuthorizeNetInvalidAPIResponseError = /** @class */ (function (_super) {
        __extends(DaffAuthorizeNetInvalidAPIResponseError, _super);
        function DaffAuthorizeNetInvalidAPIResponseError(message) {
            var _this = _super.call(this, message) || this;
            _this.message = message;
            _this.code = 'DAFF_AUTHORIZE_NET_INVALID_API_RESPONSE';
            return _this;
        }
        return DaffAuthorizeNetInvalidAPIResponseError;
    }(core$1.DaffInheritableError));
    if (false) {
        /** @type {?} */
        DaffAuthorizeNetInvalidAPIResponseError.prototype.code;
        /** @type {?} */
        DaffAuthorizeNetInvalidAPIResponseError.prototype.message;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * An error thrown when the credit card cvv number is invalid.
     */
    var   /**
     * An error thrown when the credit card cvv number is invalid.
     */
    DaffAuthorizeNetInvalidCCCVVError = /** @class */ (function (_super) {
        __extends(DaffAuthorizeNetInvalidCCCVVError, _super);
        function DaffAuthorizeNetInvalidCCCVVError(message) {
            var _this = _super.call(this, message) || this;
            _this.message = message;
            _this.code = 'DAFF_AUTHORIZE_NET_INVALID_CC_CVV';
            return _this;
        }
        return DaffAuthorizeNetInvalidCCCVVError;
    }(core$1.DaffInheritableError));
    if (false) {
        /** @type {?} */
        DaffAuthorizeNetInvalidCCCVVError.prototype.code;
        /** @type {?} */
        DaffAuthorizeNetInvalidCCCVVError.prototype.message;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * An error thrown when the credit card expiration month is invalid.
     */
    var   /**
     * An error thrown when the credit card expiration month is invalid.
     */
    DaffAuthorizeNetInvalidCCExpMonthError = /** @class */ (function (_super) {
        __extends(DaffAuthorizeNetInvalidCCExpMonthError, _super);
        function DaffAuthorizeNetInvalidCCExpMonthError(message) {
            var _this = _super.call(this, message) || this;
            _this.message = message;
            _this.code = 'DAFF_AUTHORIZE_NET_INVALID_CC_EXP_MONTH';
            return _this;
        }
        return DaffAuthorizeNetInvalidCCExpMonthError;
    }(core$1.DaffInheritableError));
    if (false) {
        /** @type {?} */
        DaffAuthorizeNetInvalidCCExpMonthError.prototype.code;
        /** @type {?} */
        DaffAuthorizeNetInvalidCCExpMonthError.prototype.message;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * An error thrown when the credit card expiration year is invalid.
     */
    var   /**
     * An error thrown when the credit card expiration year is invalid.
     */
    DaffAuthorizeNetInvalidCCExpYearError = /** @class */ (function (_super) {
        __extends(DaffAuthorizeNetInvalidCCExpYearError, _super);
        function DaffAuthorizeNetInvalidCCExpYearError(message) {
            var _this = _super.call(this, message) || this;
            _this.message = message;
            _this.code = 'DAFF_AUTHORIZE_NET_INVALID_CC_EXP_YEAR';
            return _this;
        }
        return DaffAuthorizeNetInvalidCCExpYearError;
    }(core$1.DaffInheritableError));
    if (false) {
        /** @type {?} */
        DaffAuthorizeNetInvalidCCExpYearError.prototype.code;
        /** @type {?} */
        DaffAuthorizeNetInvalidCCExpYearError.prototype.message;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * An error thrown when the cardholder name is invalid.
     * It should be no more than 64 characters in length.
     */
    var   /**
     * An error thrown when the cardholder name is invalid.
     * It should be no more than 64 characters in length.
     */
    DaffAuthorizeNetInvalidCCNameError = /** @class */ (function (_super) {
        __extends(DaffAuthorizeNetInvalidCCNameError, _super);
        function DaffAuthorizeNetInvalidCCNameError(message) {
            var _this = _super.call(this, message) || this;
            _this.message = message;
            _this.code = 'DAFF_AUTHORIZE_NET_INVALID_CC_NAME';
            return _this;
        }
        return DaffAuthorizeNetInvalidCCNameError;
    }(core$1.DaffInheritableError));
    if (false) {
        /** @type {?} */
        DaffAuthorizeNetInvalidCCNameError.prototype.code;
        /** @type {?} */
        DaffAuthorizeNetInvalidCCNameError.prototype.message;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * An error thrown when the credit card number is invalid.
     */
    var   /**
     * An error thrown when the credit card number is invalid.
     */
    DaffAuthorizeNetInvalidCCNumberError = /** @class */ (function (_super) {
        __extends(DaffAuthorizeNetInvalidCCNumberError, _super);
        function DaffAuthorizeNetInvalidCCNumberError(message) {
            var _this = _super.call(this, message) || this;
            _this.message = message;
            _this.code = 'DAFF_AUTHORIZE_NET_INVALID_CC_NUMBER';
            return _this;
        }
        return DaffAuthorizeNetInvalidCCNumberError;
    }(core$1.DaffInheritableError));
    if (false) {
        /** @type {?} */
        DaffAuthorizeNetInvalidCCNumberError.prototype.code;
        /** @type {?} */
        DaffAuthorizeNetInvalidCCNumberError.prototype.message;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * An error thrown when the `clientKey` value with which the Authorize.net driver has been configured is invalid or missing.
     * @see {\@link DaffAuthorizeNetConfig}
     */
    var   /**
     * An error thrown when the `clientKey` value with which the Authorize.net driver has been configured is invalid or missing.
     * @see {\@link DaffAuthorizeNetConfig}
     */
    DaffAuthorizeNetInvalidClientKeyError = /** @class */ (function (_super) {
        __extends(DaffAuthorizeNetInvalidClientKeyError, _super);
        function DaffAuthorizeNetInvalidClientKeyError(message) {
            var _this = _super.call(this, message) || this;
            _this.message = message;
            _this.code = 'DAFF_AUTHORIZE_NET_INVALID_CLIENT_KEY';
            return _this;
        }
        return DaffAuthorizeNetInvalidClientKeyError;
    }(core$1.DaffInheritableError));
    if (false) {
        /** @type {?} */
        DaffAuthorizeNetInvalidClientKeyError.prototype.code;
        /** @type {?} */
        DaffAuthorizeNetInvalidClientKeyError.prototype.message;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * An error thrown when the `apiLoginID` value with which the Authorize.net driver has been configured is invalid or missing.
     * @see {\@link DaffAuthorizeNetConfig}
     */
    var   /**
     * An error thrown when the `apiLoginID` value with which the Authorize.net driver has been configured is invalid or missing.
     * @see {\@link DaffAuthorizeNetConfig}
     */
    DaffAuthorizeNetInvalidLoginIdError = /** @class */ (function (_super) {
        __extends(DaffAuthorizeNetInvalidLoginIdError, _super);
        function DaffAuthorizeNetInvalidLoginIdError(message) {
            var _this = _super.call(this, message) || this;
            _this.message = message;
            _this.code = 'DAFF_AUTHORIZE_NET_INVALID_LOGIN_ID';
            return _this;
        }
        return DaffAuthorizeNetInvalidLoginIdError;
    }(core$1.DaffInheritableError));
    if (false) {
        /** @type {?} */
        DaffAuthorizeNetInvalidLoginIdError.prototype.code;
        /** @type {?} */
        DaffAuthorizeNetInvalidLoginIdError.prototype.message;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * An error thrown when the postal code is invalid.
     * It should be no more than 20 characters in length.
     */
    var   /**
     * An error thrown when the postal code is invalid.
     * It should be no more than 20 characters in length.
     */
    DaffAuthorizeNetInvalidPostalCodeError = /** @class */ (function (_super) {
        __extends(DaffAuthorizeNetInvalidPostalCodeError, _super);
        function DaffAuthorizeNetInvalidPostalCodeError(message) {
            var _this = _super.call(this, message) || this;
            _this.message = message;
            _this.code = 'DAFF_AUTHORIZE_NET_INVALID_POSTAL_CODE';
            return _this;
        }
        return DaffAuthorizeNetInvalidPostalCodeError;
    }(core$1.DaffInheritableError));
    if (false) {
        /** @type {?} */
        DaffAuthorizeNetInvalidPostalCodeError.prototype.code;
        /** @type {?} */
        DaffAuthorizeNetInvalidPostalCodeError.prototype.message;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * An error thrown when the credit card expiration date is in the past.
     */
    var   /**
     * An error thrown when the credit card expiration date is in the past.
     */
    DaffAuthorizeNetPastCCExpirationError = /** @class */ (function (_super) {
        __extends(DaffAuthorizeNetPastCCExpirationError, _super);
        function DaffAuthorizeNetPastCCExpirationError(message) {
            var _this = _super.call(this, message) || this;
            _this.message = message;
            _this.code = 'DAFF_AUTHORIZE_NET_PAST_CC_EXPIRATION';
            return _this;
        }
        return DaffAuthorizeNetPastCCExpirationError;
    }(core$1.DaffInheritableError));
    if (false) {
        /** @type {?} */
        DaffAuthorizeNetPastCCExpirationError.prototype.code;
        /** @type {?} */
        DaffAuthorizeNetPastCCExpirationError.prototype.message;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var DAFF_AUTHORIZE_NET_ERROR_CODE_MAP = {
        E_WC_01: DaffAuthorizeNetAcceptjsMissingError,
        E_WC_02: DaffAuthorizeNetInsecureConnectionError,
        E_WC_03: DaffAuthorizeNetAcceptjsInvalidError,
        E_WC_04: DaffAuthorizeNetInputMissingError,
        E_WC_05: DaffAuthorizeNetInvalidCCNameError,
        E_WC_06: DaffAuthorizeNetInvalidCCExpMonthError,
        E_WC_07: DaffAuthorizeNetInvalidCCExpYearError,
        E_WC_08: DaffAuthorizeNetPastCCExpirationError,
        E_WC_10: DaffAuthorizeNetInvalidLoginIdError,
        E_WC_13: DaffAuthorizeNetAcceptjsInvalidError,
        E_WC_15: DaffAuthorizeNetInvalidCCCVVError,
        E_WC_16: DaffAuthorizeNetInvalidPostalCodeError,
        E_WC_17: DaffAuthorizeNetInvalidCCNameError,
        E_WC_18: DaffAuthorizeNetInvalidClientKeyError,
        E_WC_19: DaffAuthorizeNetInvalidLoginIdError,
        E_WC_21: DaffAuthorizeNetAuthFailedError,
        E_WC_23: DaffAuthorizeNetInputMissingError,
    };

    exports.DAFF_AUTHORIZE_NET_ERROR_CODE_MAP = DAFF_AUTHORIZE_NET_ERROR_CODE_MAP;
    exports.DaffAuthorizeNetAcceptjsInvalidError = DaffAuthorizeNetAcceptjsInvalidError;
    exports.DaffAuthorizeNetAcceptjsMissingError = DaffAuthorizeNetAcceptjsMissingError;
    exports.DaffAuthorizeNetAuthFailedError = DaffAuthorizeNetAuthFailedError;
    exports.DaffAuthorizeNetConfigToken = DaffAuthorizeNetConfigToken;
    exports.DaffAuthorizeNetDriver = DaffAuthorizeNetDriver;
    exports.DaffAuthorizeNetInputMissingError = DaffAuthorizeNetInputMissingError;
    exports.DaffAuthorizeNetInsecureConnectionError = DaffAuthorizeNetInsecureConnectionError;
    exports.DaffAuthorizeNetInvalidAPIResponseError = DaffAuthorizeNetInvalidAPIResponseError;
    exports.DaffAuthorizeNetInvalidCCCVVError = DaffAuthorizeNetInvalidCCCVVError;
    exports.DaffAuthorizeNetInvalidCCExpMonthError = DaffAuthorizeNetInvalidCCExpMonthError;
    exports.DaffAuthorizeNetInvalidCCExpYearError = DaffAuthorizeNetInvalidCCExpYearError;
    exports.DaffAuthorizeNetInvalidCCNameError = DaffAuthorizeNetInvalidCCNameError;
    exports.DaffAuthorizeNetInvalidCCNumberError = DaffAuthorizeNetInvalidCCNumberError;
    exports.DaffAuthorizeNetInvalidClientKeyError = DaffAuthorizeNetInvalidClientKeyError;
    exports.DaffAuthorizeNetInvalidLoginIdError = DaffAuthorizeNetInvalidLoginIdError;
    exports.DaffAuthorizeNetInvalidPostalCodeError = DaffAuthorizeNetInvalidPostalCodeError;
    exports.DaffAuthorizeNetPastCCExpirationError = DaffAuthorizeNetPastCCExpirationError;
    exports.DaffAuthorizeNetPaymentId = DaffAuthorizeNetPaymentId;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=daffodil-authorizenet-driver.umd.js.map
