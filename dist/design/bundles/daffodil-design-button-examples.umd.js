(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@fortawesome/free-solid-svg-icons'), require('@angular/common'), require('@daffodil/design'), require('@fortawesome/angular-fontawesome')) :
    typeof define === 'function' && define.amd ? define('@daffodil/design/button/examples', ['exports', '@angular/core', '@fortawesome/free-solid-svg-icons', '@angular/common', '@daffodil/design', '@fortawesome/angular-fontawesome'], factory) :
    (global = global || self, factory((global.daffodil = global.daffodil || {}, global.daffodil.design = global.daffodil.design || {}, global.daffodil.design.button = global.daffodil.design.button || {}, global.daffodil.design.button.examples = {}), global.ng.core, global.freeSolidSvgIcons, global.ng.common, global.daffodil.design, global.angularFontawesome));
}(this, function (exports, core, freeSolidSvgIcons, common, design, angularFontawesome) { 'use strict';

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
    var BasicButtonComponent = /** @class */ (function () {
        function BasicButtonComponent() {
            this.faChevronLeft = freeSolidSvgIcons.faChevronLeft;
            this.faChevronRight = freeSolidSvgIcons.faChevronRight;
        }
        BasicButtonComponent.decorators = [
            { type: core.Component, args: [{
                        // tslint:disable-next-line:component-selector
                        selector: 'basic-button',
                        template: "<button daff-button>Default</button>\n<button daff-button color=\"primary\">Primary</button>\n<button daff-button color=\"secondary\">Secondary</button>\n<button daff-button color=\"tertiary\">Tertiary</button>\n<button daff-button color=\"black\">Black</button>\n<button daff-button color=\"white\">White</button>\n<button daff-button color=\"theme\">Theme</button>\n<button daff-button color=\"theme-contrast\">Theme Contrast</button>\n<button daff-button><fa-icon [icon]=\"faChevronLeft\" daffPrefix></fa-icon>Button</button>\n<button daff-button><fa-icon [icon]=\"faChevronRight\" daffSuffix></fa-icon>Button</button>\n<button daff-button disabled>Disabled</button>\n<a href=\"#\" daff-button>Link</a>",
                        styles: ["\n    button[daff-button],\n    a[daff-button] {\n      margin-right: 8px;\n    } \n  "]
                    }] }
        ];
        return BasicButtonComponent;
    }());
    if (false) {
        /** @type {?} */
        BasicButtonComponent.prototype.faChevronLeft;
        /** @type {?} */
        BasicButtonComponent.prototype.faChevronRight;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var IconButtonComponent = /** @class */ (function () {
        function IconButtonComponent() {
            this.faPlus = freeSolidSvgIcons.faPlus;
        }
        IconButtonComponent.decorators = [
            { type: core.Component, args: [{
                        // tslint:disable-next-line:component-selector
                        selector: 'icon-button',
                        template: "<button daff-icon-button><fa-icon [icon]=\"faPlus\"></fa-icon></button>\n<button daff-icon-button color=\"primary\"><fa-icon [icon]=\"faPlus\"></fa-icon></button>\n<button daff-icon-button color=\"secondary\"><fa-icon [icon]=\"faPlus\"></fa-icon></button>\n<button daff-icon-button color=\"tertiary\"><fa-icon [icon]=\"faPlus\"></fa-icon></button>\n<button daff-icon-button color=\"black\"><fa-icon [icon]=\"faPlus\"></fa-icon></button>\n<button daff-icon-button color=\"white\"><fa-icon [icon]=\"faPlus\"></fa-icon></button>\n<button daff-icon-button color=\"theme\"><fa-icon [icon]=\"faPlus\"></fa-icon></button>\n<button daff-icon-button color=\"theme-contrast\"><fa-icon [icon]=\"faPlus\"></fa-icon></button>\n<button daff-icon-button disabled><fa-icon [icon]=\"faPlus\"></fa-icon></button>"
                    }] }
        ];
        return IconButtonComponent;
    }());
    if (false) {
        /** @type {?} */
        IconButtonComponent.prototype.faPlus;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var RaisedButtonComponent = /** @class */ (function () {
        function RaisedButtonComponent() {
            this.faChevronLeft = freeSolidSvgIcons.faChevronLeft;
            this.faChevronRight = freeSolidSvgIcons.faChevronRight;
        }
        RaisedButtonComponent.decorators = [
            { type: core.Component, args: [{
                        // tslint:disable-next-line:component-selector
                        selector: 'raised-button',
                        template: "<button daff-raised-button>Default</button>\n<button daff-raised-button color=\"primary\">Primary</button>\n<button daff-raised-button color=\"secondary\">Secondary</button>\n<button daff-raised-button color=\"tertiary\">Tertiary</button>\n<button daff-raised-button color=\"black\">Black</button>\n<button daff-raised-button color=\"white\">White</button>\n<button daff-raised-button color=\"theme\">Theme</button>\n<button daff-raised-button color=\"theme-contrast\">Theme Contrast</button>\n<button daff-raised-button><fa-icon [icon]=\"faChevronLeft\" daffPrefix></fa-icon>Button</button>\n<button daff-raised-button><fa-icon [icon]=\"faChevronRight\" daffSuffix></fa-icon>Button</button>\n<button daff-raised-button disabled>Disabled</button>\n<a href=\"#\" daff-raised-button>Link</a>",
                        styles: ["\n    button[daff-raised-button],\n    a[daff-raised-button] {\n      margin-right: 8px;\n    } \n  "]
                    }] }
        ];
        return RaisedButtonComponent;
    }());
    if (false) {
        /** @type {?} */
        RaisedButtonComponent.prototype.faChevronLeft;
        /** @type {?} */
        RaisedButtonComponent.prototype.faChevronRight;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var SizeableButtonComponent = /** @class */ (function () {
        function SizeableButtonComponent() {
            this.faPlus = freeSolidSvgIcons.faPlus;
        }
        SizeableButtonComponent.decorators = [
            { type: core.Component, args: [{
                        // tslint:disable-next-line:component-selector
                        selector: 'sizeable-button',
                        template: "<h4>Small Buttons</h4>\n\n<button daff-button size=\"sm\">Small Button</button>\n<button daff-raised-button size=\"sm\">Small Raised Button</button>\n<button daff-stroked-button size=\"sm\">Small Stroked Button</button>\n\n<button daff-underline-button size=\"sm\">Small Underline Button</button>\n<button daff-icon-button size=\"sm\"><fa-icon [icon]=\"faPlus\"></fa-icon></button>\n\n<h4>Medium Buttons (Default)</h4>\n\n<button daff-button size=\"md\">Medium Button</button>\n<button daff-raised-button size=\"md\">Medium Raised Button</button>\n<button daff-stroked-button size=\"md\">Medium Stroked Button</button>\n\n<button daff-underline-button size=\"md\">Medium Underline Button</button>\n<button daff-icon-button size=\"md\"><fa-icon [icon]=\"faPlus\"></fa-icon></button>\n\n<h4>Large Buttons</h4>\n\n<button daff-button size=\"lg\">Large Button</button>\n<button daff-raised-button size=\"lg\">Large Raised Button</button>\n<button daff-stroked-button size=\"lg\">Large Stroked Button</button>\n\n\n<button daff-underline-button size=\"lg\">Large Underline Button</button>\n<button daff-icon-button size=\"lg\"><fa-icon [icon]=\"faPlus\"></fa-icon></button>",
                        styles: ["\n    button {\n      margin-right: 8px;\n    } \n  "]
                    }] }
        ];
        return SizeableButtonComponent;
    }());
    if (false) {
        /** @type {?} */
        SizeableButtonComponent.prototype.faPlus;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var StrokedButtonComponent = /** @class */ (function () {
        function StrokedButtonComponent() {
            this.faChevronLeft = freeSolidSvgIcons.faChevronLeft;
            this.faChevronRight = freeSolidSvgIcons.faChevronRight;
        }
        StrokedButtonComponent.decorators = [
            { type: core.Component, args: [{
                        // tslint:disable-next-line:component-selector
                        selector: 'stroked-button',
                        template: "<button daff-stroked-button>Default</button>\n<button daff-stroked-button color=\"primary\">Primary</button>\n<button daff-stroked-button color=\"secondary\">Secondary</button>\n<button daff-stroked-button color=\"tertiary\">Tertiary</button>\n<button daff-stroked-button color=\"black\">Black</button>\n<button daff-stroked-button color=\"white\">White</button>\n<button daff-stroked-button color=\"theme\">Theme</button>\n<button daff-stroked-button color=\"theme-contrast\">Theme Contrast</button>\n<button daff-stroked-button><fa-icon [icon]=\"faChevronLeft\" daffPrefix></fa-icon>Button</button>\n<button daff-stroked-button><fa-icon [icon]=\"faChevronRight\" daffSuffix></fa-icon>Button</button>\n<button daff-stroked-button disabled>Disabled</button>\n<a href=\"#\" daff-stroked-button>Link</a>",
                        styles: ["\n    button[daff-stroked-button],\n    a[daff-stroked-button] {\n      margin-right: 8px;\n    } \n  "]
                    }] }
        ];
        return StrokedButtonComponent;
    }());
    if (false) {
        /** @type {?} */
        StrokedButtonComponent.prototype.faChevronLeft;
        /** @type {?} */
        StrokedButtonComponent.prototype.faChevronRight;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var UnderlineButtonComponent = /** @class */ (function () {
        function UnderlineButtonComponent() {
            this.faChevronLeft = freeSolidSvgIcons.faChevronLeft;
            this.faChevronRight = freeSolidSvgIcons.faChevronRight;
        }
        UnderlineButtonComponent.decorators = [
            { type: core.Component, args: [{
                        // tslint:disable-next-line:component-selector
                        selector: 'underline-button',
                        template: "<button daff-underline-button>Default</button>\n<button daff-underline-button color=\"primary\">Primary</button>\n<button daff-underline-button color=\"secondary\">Secondary</button>\n<button daff-underline-button color=\"tertiary\">Tertiary</button>\n<button daff-underline-button color=\"black\">Black</button>\n<button daff-underline-button color=\"white\">White</button>\n<button daff-underline-button color=\"theme\">Theme</button>\n<button daff-underline-button color=\"theme-contrast\">Theme Contrast</button>\n<button daff-underline-button><fa-icon [icon]=\"faChevronLeft\" daffPrefix></fa-icon>Button</button>\n<button daff-underline-button><fa-icon [icon]=\"faChevronRight\" daffSuffix></fa-icon>Button</button>\n<button daff-underline-button disabled>Disabled</button>\n<a href=\"#\" daff-underline-button>Link</a>",
                        styles: ["\n    button[daff-underline-button],\n    a[daff-underline-button] {\n      margin-right: 8px;\n    } \n  "]
                    }] }
        ];
        return UnderlineButtonComponent;
    }());
    if (false) {
        /** @type {?} */
        UnderlineButtonComponent.prototype.faChevronLeft;
        /** @type {?} */
        UnderlineButtonComponent.prototype.faChevronRight;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var BasicButtonModule = /** @class */ (function () {
        function BasicButtonModule() {
        }
        BasicButtonModule.decorators = [
            { type: core.NgModule, args: [{
                        declarations: [
                            BasicButtonComponent
                        ],
                        exports: [
                            BasicButtonComponent
                        ],
                        imports: [
                            design.DaffButtonModule,
                            angularFontawesome.FontAwesomeModule
                        ]
                    },] }
        ];
        return BasicButtonModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var IconButtonModule = /** @class */ (function () {
        function IconButtonModule() {
        }
        IconButtonModule.decorators = [
            { type: core.NgModule, args: [{
                        declarations: [
                            IconButtonComponent
                        ],
                        exports: [
                            IconButtonComponent
                        ],
                        imports: [
                            design.DaffButtonModule,
                            angularFontawesome.FontAwesomeModule
                        ]
                    },] }
        ];
        return IconButtonModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var RaisedButtonModule = /** @class */ (function () {
        function RaisedButtonModule() {
        }
        RaisedButtonModule.decorators = [
            { type: core.NgModule, args: [{
                        declarations: [
                            RaisedButtonComponent
                        ],
                        exports: [
                            RaisedButtonComponent
                        ],
                        imports: [
                            design.DaffButtonModule,
                            angularFontawesome.FontAwesomeModule
                        ]
                    },] }
        ];
        return RaisedButtonModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var SizeableButtonModule = /** @class */ (function () {
        function SizeableButtonModule() {
        }
        SizeableButtonModule.decorators = [
            { type: core.NgModule, args: [{
                        declarations: [
                            SizeableButtonComponent
                        ],
                        exports: [
                            SizeableButtonComponent
                        ],
                        imports: [
                            design.DaffButtonModule,
                            angularFontawesome.FontAwesomeModule
                        ]
                    },] }
        ];
        return SizeableButtonModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var StrokedButtonModule = /** @class */ (function () {
        function StrokedButtonModule() {
        }
        StrokedButtonModule.decorators = [
            { type: core.NgModule, args: [{
                        declarations: [
                            StrokedButtonComponent
                        ],
                        exports: [
                            StrokedButtonComponent
                        ],
                        imports: [
                            design.DaffButtonModule,
                            angularFontawesome.FontAwesomeModule
                        ]
                    },] }
        ];
        return StrokedButtonModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var UnderlineButtonModule = /** @class */ (function () {
        function UnderlineButtonModule() {
        }
        UnderlineButtonModule.decorators = [
            { type: core.NgModule, args: [{
                        declarations: [
                            UnderlineButtonComponent
                        ],
                        exports: [
                            UnderlineButtonComponent
                        ],
                        imports: [
                            design.DaffButtonModule,
                            angularFontawesome.FontAwesomeModule
                        ]
                    },] }
        ];
        return UnderlineButtonModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var BUTTON_EXAMPLES = [
        BasicButtonComponent,
        IconButtonComponent,
        RaisedButtonComponent,
        SizeableButtonComponent,
        StrokedButtonComponent,
        UnderlineButtonComponent
    ];

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var ButtonExamplesModule = /** @class */ (function () {
        function ButtonExamplesModule() {
        }
        ButtonExamplesModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [
                            common.CommonModule,
                            BasicButtonModule,
                            IconButtonModule,
                            RaisedButtonModule,
                            SizeableButtonModule,
                            StrokedButtonModule,
                            UnderlineButtonModule
                        ],
                        entryComponents: __spread(BUTTON_EXAMPLES)
                    },] }
        ];
        return ButtonExamplesModule;
    }());

    exports.BUTTON_EXAMPLES = BUTTON_EXAMPLES;
    exports.BasicButtonComponent = BasicButtonComponent;
    exports.ButtonExamplesModule = ButtonExamplesModule;
    exports.IconButtonComponent = IconButtonComponent;
    exports.RaisedButtonComponent = RaisedButtonComponent;
    exports.SizeableButtonComponent = SizeableButtonComponent;
    exports.StrokedButtonComponent = StrokedButtonComponent;
    exports.UnderlineButtonComponent = UnderlineButtonComponent;
    exports.ɵa = BasicButtonModule;
    exports.ɵb = IconButtonModule;
    exports.ɵc = RaisedButtonModule;
    exports.ɵd = SizeableButtonModule;
    exports.ɵe = StrokedButtonModule;
    exports.ɵf = UnderlineButtonModule;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=daffodil-design-button-examples.umd.js.map
