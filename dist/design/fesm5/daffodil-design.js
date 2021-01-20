import { __extends, __spread, __values, __assign } from 'tslib';
import { Directive, HostBinding, NgModule, ContentChild, Component, ViewEncapsulation, ChangeDetectionStrategy, ElementRef, Renderer2, Input, EventEmitter, Output, Optional, Self, HostListener, ChangeDetectorRef, ViewChild, ContentChildren, forwardRef, Injectable, ɵɵdefineInjectable, ɵɵinject, NgZone } from '@angular/core';
import { CommonModule } from '@angular/common';
import { faChevronDown, faChevronUp, faChevronRight, faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { DomSanitizer } from '@angular/platform-browser';
import { NgControl, NG_VALUE_ACCESSOR, FormsModule } from '@angular/forms';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { CdkPortalOutlet, PortalModule, ComponentPortal } from '@angular/cdk/portal';
import { OverlayModule, GlobalPositionStrategy, Overlay } from '@angular/cdk/overlay';
import { filter } from 'rxjs/operators';
import { fromEvent } from 'rxjs';
import { A11yModule } from '@angular/cdk/a11y';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * In order to be colorable, our class must implement this property
 * @record
 */
function DaffColorable() { }
if (false) {
    /** @type {?} */
    DaffColorable.prototype.color;
}
/** @enum {string} */
var DaffPaletteEnum = {
    PRIMARY: 'primary',
    SECONDARY: 'secondary',
    ACCENT: 'accent',
    TERTIARY: 'tertiary',
    BLACK: 'black',
    WHITE: 'white',
    THEME: 'theme',
    THEMECONTRAST: 'theme-contrast',
};
/**
 * @record
 */
function HasElementRef() { }
if (false) {
    /** @type {?} */
    HasElementRef.prototype._elementRef;
    /** @type {?} */
    HasElementRef.prototype._renderer;
}
/**
 * This should be a trait, but typescript only supports mixins.
 * See: https://github.com/Microsoft/TypeScript/issues/311
 *
 * Turns out the material team followed the same path with the color mixin.
 * https://github.com/angular/material2/blob/master/src/lib/core/common-behaviors/color.ts
 * @template T
 * @param {?} Base
 * @param {?=} defaultColor
 * @return {?}
 */
function daffColorMixin(Base, defaultColor) {
    return /** @class */ (function (_super) {
        __extends(class_1, _super);
        function class_1() {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            var _this = _super.apply(this, __spread(args)) || this;
            _this.color = defaultColor;
            return _this;
        }
        Object.defineProperty(class_1.prototype, "color", {
            get: /**
             * @return {?}
             */
            function () { return this._color; },
            set: /**
             * @param {?} value
             * @return {?}
             */
            function (value) {
                //Handle the default color
                /** @type {?} */
                var incomingColor = value || defaultColor;
                if (incomingColor !== undefined && !colorInPalette(incomingColor)) {
                    throw new TypeError(incomingColor + ' is not a valid color for the DaffPalette');
                }
                if (incomingColor !== this._color) { //Only run the dom-render if a change occurs
                    //Remove the old color
                    if (this._color) {
                        this._renderer.removeClass(this._elementRef.nativeElement, "daff-" + this._color);
                    }
                    if (incomingColor) {
                        this._renderer.addClass(this._elementRef.nativeElement, "daff-" + incomingColor);
                    }
                    this._color = incomingColor;
                }
            },
            enumerable: true,
            configurable: true
        });
        return class_1;
    }(Base));
}
/**
 * @param {?} color
 * @return {?}
 */
function colorInPalette(color) {
    return ((/** @type {?} */ (Object))).values(DaffPaletteEnum).includes(color);
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 *
 * Prefix can be used to place content before another piece of content in components like
 * `daff-form-field`, `daff-solo-field`, and `daff-list`.
 */
var DaffPrefixDirective = /** @class */ (function () {
    function DaffPrefixDirective() {
        this.class = true;
    }
    DaffPrefixDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[daffPrefix]'
                },] }
    ];
    DaffPrefixDirective.propDecorators = {
        class: [{ type: HostBinding, args: ['class.daff-prefix',] }]
    };
    return DaffPrefixDirective;
}());
if (false) {
    /** @type {?} */
    DaffPrefixDirective.prototype.class;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 *
 * Prefix can be used to place content after another piece of content in components like
 * `daff-form-field`, `daff-solo-field`, and `daff-list`.
 */
var DaffSuffixDirective = /** @class */ (function () {
    function DaffSuffixDirective() {
        this.class = true;
    }
    DaffSuffixDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[daffSuffix]',
                },] }
    ];
    DaffSuffixDirective.propDecorators = {
        class: [{ type: HostBinding, args: ['class.daff-suffix',] }]
    };
    return DaffSuffixDirective;
}());
if (false) {
    /** @type {?} */
    DaffSuffixDirective.prototype.class;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var DaffPrefixSuffixModule = /** @class */ (function () {
    function DaffPrefixSuffixModule() {
    }
    DaffPrefixSuffixModule.decorators = [
        { type: NgModule, args: [{
                    imports: [],
                    exports: [
                        DaffPrefixDirective,
                        DaffSuffixDirective
                    ],
                    declarations: [
                        DaffPrefixDirective,
                        DaffSuffixDirective
                    ]
                },] }
    ];
    return DaffPrefixSuffixModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * A mixin for giving a component the ability to place content after another piece of content.
 * @template T
 * @param {?} Base
 * @return {?}
 */
function daffSuffixableMixin(Base) {
    var Suffixable = /** @class */ (function (_super) {
        __extends(Suffixable, _super);
        function Suffixable() {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            return _super.apply(this, __spread(args)) || this;
        }
        Suffixable.propDecorators = {
            _suffix: [{ type: ContentChild, args: [DaffSuffixDirective, { static: true },] }]
        };
        return Suffixable;
    }(Base));
    if (false) {
        /** @type {?} */
        Suffixable.prototype._suffix;
    }
    return Suffixable;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * A mixin for giving a component the ability to place content before another piece of content.
 * @template T
 * @param {?} Base
 * @return {?}
 */
function daffPrefixableMixin(Base) {
    var Prefixable = /** @class */ (function (_super) {
        __extends(Prefixable, _super);
        function Prefixable() {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            return _super.apply(this, __spread(args)) || this;
        }
        Prefixable.propDecorators = {
            _prefix: [{ type: ContentChild, args: [DaffPrefixDirective, { static: true },] }]
        };
        return Prefixable;
    }(Base));
    if (false) {
        /** @type {?} */
        Prefixable.prototype._prefix;
    }
    return Prefixable;
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
 * @record
 */
function HasElementRef$1() { }
if (false) {
    /** @type {?} */
    HasElementRef$1.prototype._elementRef;
    /** @type {?} */
    HasElementRef$1.prototype._renderer;
}
/**
 * @template T
 * @param {?} Base
 * @param {?=} defaultSize
 * @return {?}
 */
function daffSizeMixin(Base, defaultSize) {
    return /** @class */ (function (_super) {
        __extends(class_1, _super);
        function class_1() {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            var _this = _super.apply(this, __spread(args)) || this;
            _this.size = defaultSize;
            return _this;
        }
        Object.defineProperty(class_1.prototype, "size", {
            get: /**
             * @return {?}
             */
            function () { return this._size; },
            set: /**
             * @param {?} value
             * @return {?}
             */
            function (value) {
                // Handles the default size
                /** @type {?} */
                var incomingSize = value || defaultSize;
                if (incomingSize !== this._size) { //Only run the dom-render if a change occurs
                    //Remove the old size
                    if (this._size) {
                        this._renderer.removeClass(this._elementRef.nativeElement, "daff-" + this._size);
                    }
                    if (incomingSize) {
                        this._renderer.addClass(this._elementRef.nativeElement, "daff-" + incomingSize);
                    }
                    this._size = incomingSize;
                }
            },
            enumerable: true,
            configurable: true
        });
        return class_1;
    }(Base));
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * List of classes to add to DaffButtonComponent instances based on host attributes to style as different variants.
 * @type {?}
 */
var BUTTON_HOST_ATTRIBUTES = [
    'daff-button',
    'daff-stroked-button',
    'daff-raised-button',
    'daff-icon-button',
    'daff-underline-button'
];
/**
 * An _elementRef and an instance of renderer2 are needed for the button mixins
 */
var /**
 * An _elementRef and an instance of renderer2 are needed for the button mixins
 */
DaffButtonBase = /** @class */ (function () {
    function DaffButtonBase(_elementRef, _renderer) {
        this._elementRef = _elementRef;
        this._renderer = _renderer;
    }
    return DaffButtonBase;
}());
if (false) {
    /** @type {?} */
    DaffButtonBase.prototype._elementRef;
    /** @type {?} */
    DaffButtonBase.prototype._renderer;
}
/** @type {?} */
var _daffButtonBase = daffPrefixableMixin(daffSuffixableMixin(daffColorMixin(daffSizeMixin(DaffButtonBase, 'md'), 'theme-contrast')));
/** @enum {string} */
var DaffButtonTypeEnum = {
    Default: 'daff-button',
    Stroked: 'daff-stroked-button',
    Raised: 'daff-raised-button',
    Icon: 'daff-icon-button',
    Underline: 'daff-underline-button',
};
var DaffButtonComponent = /** @class */ (function (_super) {
    __extends(DaffButtonComponent, _super);
    function DaffButtonComponent(elementRef, renderer) {
        var e_1, _a;
        var _this = _super.call(this, elementRef, renderer) || this;
        _this.elementRef = elementRef;
        _this.renderer = renderer;
        try {
            for (var BUTTON_HOST_ATTRIBUTES_1 = __values(BUTTON_HOST_ATTRIBUTES), BUTTON_HOST_ATTRIBUTES_1_1 = BUTTON_HOST_ATTRIBUTES_1.next(); !BUTTON_HOST_ATTRIBUTES_1_1.done; BUTTON_HOST_ATTRIBUTES_1_1 = BUTTON_HOST_ATTRIBUTES_1.next()) {
                var attr = BUTTON_HOST_ATTRIBUTES_1_1.value;
                if (_this._hasHostAttributes(attr)) {
                    ((/** @type {?} */ (elementRef.nativeElement))).classList.add(attr);
                }
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (BUTTON_HOST_ATTRIBUTES_1_1 && !BUTTON_HOST_ATTRIBUTES_1_1.done && (_a = BUTTON_HOST_ATTRIBUTES_1.return)) _a.call(BUTTON_HOST_ATTRIBUTES_1);
            }
            finally { if (e_1) throw e_1.error; }
        }
        return _this;
    }
    /**
     * @docs-private
     */
    /**
     * \@docs-private
     * @return {?}
     */
    DaffButtonComponent.prototype.ngOnInit = /**
     * \@docs-private
     * @return {?}
     */
    function () {
        var e_2, _a;
        try {
            for (var BUTTON_HOST_ATTRIBUTES_2 = __values(BUTTON_HOST_ATTRIBUTES), BUTTON_HOST_ATTRIBUTES_2_1 = BUTTON_HOST_ATTRIBUTES_2.next(); !BUTTON_HOST_ATTRIBUTES_2_1.done; BUTTON_HOST_ATTRIBUTES_2_1 = BUTTON_HOST_ATTRIBUTES_2.next()) {
                var attr = BUTTON_HOST_ATTRIBUTES_2_1.value;
                if (this._hasHostAttributes(attr)) {
                    this.buttonType = attr;
                }
            }
        }
        catch (e_2_1) { e_2 = { error: e_2_1 }; }
        finally {
            try {
                if (BUTTON_HOST_ATTRIBUTES_2_1 && !BUTTON_HOST_ATTRIBUTES_2_1.done && (_a = BUTTON_HOST_ATTRIBUTES_2.return)) _a.call(BUTTON_HOST_ATTRIBUTES_2);
            }
            finally { if (e_2) throw e_2.error; }
        }
    };
    Object.defineProperty(DaffButtonComponent.prototype, "button", {
        /**
         * @docs-private
         */
        get: /**
         * \@docs-private
         * @return {?}
         */
        function () {
            return this.buttonType === DaffButtonTypeEnum.Default || this.buttonType === undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DaffButtonComponent.prototype, "stroked", {
        /**
         * @docs-private
         */
        get: /**
         * \@docs-private
         * @return {?}
         */
        function () {
            return this.buttonType === DaffButtonTypeEnum.Stroked;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DaffButtonComponent.prototype, "raised", {
        /**
         * @docs-private
         */
        get: /**
         * \@docs-private
         * @return {?}
         */
        function () {
            return this.buttonType === DaffButtonTypeEnum.Raised;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DaffButtonComponent.prototype, "icon", {
        /**
         * @docs-private
         */
        get: /**
         * \@docs-private
         * @return {?}
         */
        function () {
            return this.buttonType === DaffButtonTypeEnum.Icon;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DaffButtonComponent.prototype, "underline", {
        /**
         * @docs-private
         */
        get: /**
         * \@docs-private
         * @return {?}
         */
        function () {
            return this.buttonType === DaffButtonTypeEnum.Underline;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @private
     * @return {?}
     */
    DaffButtonComponent.prototype._getHostElement = /**
     * @private
     * @return {?}
     */
    function () {
        return this.elementRef.nativeElement;
    };
    /**
         * Gets whether the button has one of the given attributes.
         * */
    /**
     * Gets whether the button has one of the given attributes.
     *
     * @private
     * @param {...?} attributes
     * @return {?}
     */
    DaffButtonComponent.prototype._hasHostAttributes = /**
     * Gets whether the button has one of the given attributes.
     *
     * @private
     * @param {...?} attributes
     * @return {?}
     */
    function () {
        var _this = this;
        var attributes = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            attributes[_i] = arguments[_i];
        }
        return attributes.some((/**
         * @param {?} attribute
         * @return {?}
         */
        function (attribute) { return _this._getHostElement().hasAttribute(attribute); }));
    };
    DaffButtonComponent.decorators = [
        { type: Component, args: [{
                    // tslint:disable-next-line: component-selector
                    selector: '' +
                        'button[daff-button]' + ',' +
                        'button[daff-stroked-button]' + ',' +
                        'button[daff-raised-button]' + ',' +
                        'button[daff-icon-button]' + ',' +
                        'button[daff-underline-button]' + ',' +
                        'a[daff-button]' + ',' +
                        'a[daff-stroked-button]' + ',' +
                        'a[daff-raised-button]' + ',' +
                        'a[daff-icon-button]' + ',' +
                        'a[daff-underline-button]',
                    template: "<ng-container *ngIf=\"_prefix\">\n  <ng-content select=\"[daffPrefix]\"></ng-content>\n</ng-container>\n<div class=\"daff-button__bg\" *ngIf=\"stroked\"></div>\n<ng-content></ng-content>\n<ng-container *ngIf=\"_suffix\">\n  <ng-content select=\"[daffSuffix]\"></ng-content>\n</ng-container>",
                    encapsulation: ViewEncapsulation.None,
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    styles: [".daff-button{cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;display:inline-block;-webkit-appearance:none;-moz-appearance:none;appearance:none;border-radius:4px;position:relative;text-align:center;text-decoration:none;transition:background-color .3s,border-color .3s,box-shadow .3s,color .3s,transform .3s;will-change:background-color,border-color,box-shadow,color}.daff-button:active{transform:translateY(1px)}.daff-button[disabled]{cursor:not-allowed;transform:none}.daff-button .daff-prefix,.daff-button .daff-suffix{vertical-align:middle}.daff-button .daff-prefix{margin-right:8px}.daff-button .daff-suffix{margin-left:8px}.daff-raised-button{cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;display:inline-block;-webkit-appearance:none;-moz-appearance:none;appearance:none;border-radius:4px;position:relative;text-align:center;text-decoration:none;transition:background-color .3s,border-color .3s,box-shadow .3s,color .3s,transform .3s;will-change:background-color,border-color,box-shadow,color}.daff-raised-button:hover{transform:translateY(-1px)}.daff-raised-button:active{transform:translateY(1px)}.daff-raised-button[disabled]{cursor:not-allowed;transform:none}.daff-raised-button .daff-prefix,.daff-raised-button .daff-suffix{vertical-align:middle}.daff-raised-button .daff-prefix{margin-right:8px}.daff-raised-button .daff-suffix{margin-left:8px}.daff-icon-button{cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;display:inline-block;-webkit-appearance:none;-moz-appearance:none;appearance:none;border-radius:4px;position:relative;text-align:center;text-decoration:none;background:0 0;border:0;padding:0}.daff-icon-button.daff-sm{font-size:.75rem;line-height:2rem;height:2rem;width:2rem}.daff-icon-button.daff-md{font-size:1rem;line-height:2.5rem;height:2.5rem;width:2.5rem}.daff-icon-button.daff-lg{font-size:1.25rem;line-height:3rem;height:3rem;width:3rem}.daff-stroked-button{cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;display:inline-block;-webkit-appearance:none;-moz-appearance:none;appearance:none;border-radius:4px;position:relative;text-align:center;text-decoration:none;transition:background-color .3s,border-color .3s,box-shadow .3s,color .3s,transform .3s;will-change:background-color,border-color,box-shadow,color;background:0 0}.daff-stroked-button:active{transform:translateY(1px)}.daff-stroked-button[disabled]{cursor:not-allowed;transform:none}.daff-stroked-button .daff-prefix,.daff-stroked-button .daff-suffix{vertical-align:middle}.daff-stroked-button .daff-prefix{margin-right:8px}.daff-stroked-button .daff-suffix{margin-left:8px}.daff-stroked-button .daff-button__bg{height:100%;left:0;opacity:0;pointer-events:none;position:absolute;top:0;transition:opacity .3s;width:100%;z-index:1}.daff-underline-button{cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;display:inline-block;-webkit-appearance:none;-moz-appearance:none;appearance:none;border-radius:0;position:relative;text-align:center;background:0 0;border:0;line-height:1.25rem;overflow:hidden;text-decoration:none;vertical-align:middle}.daff-underline-button .daff-prefix,.daff-underline-button .daff-suffix{vertical-align:middle}.daff-underline-button .daff-prefix{margin-right:8px}.daff-underline-button .daff-suffix{margin-left:8px}.daff-underline-button[disabled]{cursor:not-allowed}.daff-underline-button[disabled]:active::after,.daff-underline-button[disabled]:hover::after{-webkit-animation:none;animation:none}.daff-underline-button::after{bottom:0;content:'';height:2px;left:0;opacity:1;position:absolute;width:100%}.daff-underline-button:hover::after{-webkit-animation:none;animation:none}@media (min-width:1024px){.daff-underline-button:hover::after{-webkit-animation:.7s underline-button-hover;animation:.7s underline-button-hover}}.daff-underline-button.daff-sm{font-size:.75rem;height:1.25rem;padding:0}.daff-underline-button.daff-md{font-size:1rem;height:1.5rem;padding:0 0 4px}.daff-underline-button.daff-lg{font-size:1.25rem;height:1.75rem;padding:0 0 8px}@-webkit-keyframes underline-button-hover{0%,to{transform:translateX(0)}50%{transform:translateX(100%)}51%{transform:translateX(-100%)}}@keyframes underline-button-hover{0%,to{transform:translateX(0)}50%{transform:translateX(100%)}51%{transform:translateX(-100%)}}.daff-button,.daff-raised-button,.daff-stroked-button{min-width:96px}.daff-button.daff-sm,.daff-raised-button.daff-sm,.daff-stroked-button.daff-sm{font-size:.75rem;line-height:2rem;height:2rem;padding:0 1rem}.daff-button.daff-md,.daff-raised-button.daff-md,.daff-stroked-button.daff-md{font-size:1rem;line-height:3rem;height:3rem;padding:0 1.5rem}.daff-button.daff-lg,.daff-raised-button.daff-lg,.daff-stroked-button.daff-lg{font-size:1.25rem;line-height:3.5rem;height:3.5rem;padding:0 1.5rem}"]
                }] }
    ];
    /** @nocollapse */
    DaffButtonComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: Renderer2 }
    ]; };
    DaffButtonComponent.propDecorators = {
        color: [{ type: Input }],
        size: [{ type: Input }],
        button: [{ type: HostBinding, args: ['class.daff-button',] }],
        stroked: [{ type: HostBinding, args: ['class.daff-stroked-button',] }],
        raised: [{ type: HostBinding, args: ['class.daff-raised-button',] }],
        icon: [{ type: HostBinding, args: ['class.daff-icon-button',] }],
        underline: [{ type: HostBinding, args: ['class.daff-underline-button',] }]
    };
    return DaffButtonComponent;
}(_daffButtonBase));
if (false) {
    /** @type {?} */
    DaffButtonComponent.prototype.color;
    /** @type {?} */
    DaffButtonComponent.prototype.size;
    /**
     * @type {?}
     * @private
     */
    DaffButtonComponent.prototype.buttonType;
    /**
     * @type {?}
     * @private
     */
    DaffButtonComponent.prototype.elementRef;
    /**
     * @type {?}
     * @private
     */
    DaffButtonComponent.prototype.renderer;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var DaffButtonModule = /** @class */ (function () {
    function DaffButtonModule() {
    }
    DaffButtonModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        CommonModule,
                        DaffPrefixSuffixModule
                    ],
                    declarations: [
                        DaffButtonComponent
                    ],
                    exports: [
                        DaffButtonComponent,
                        DaffPrefixSuffixModule
                    ]
                },] }
    ];
    return DaffButtonModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var DaffErrorStateMatcher = /** @class */ (function () {
    function DaffErrorStateMatcher() {
    }
    /**
     * @param {?} control
     * @param {?} formSubmitted
     * @return {?}
     */
    DaffErrorStateMatcher.prototype.isErrorState = /**
     * @param {?} control
     * @param {?} formSubmitted
     * @return {?}
     */
    function (control, formSubmitted) {
        return control.errors && (control.touched || formSubmitted);
    };
    return DaffErrorStateMatcher;
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
 *
 * The class that a form control must **implement** in order to be
 * used with the DaffFormFieldComponent.
 *
 * You may ask: "Why are you implementing an abstract class, not extending it?"
 * We do this so that the Angular DI container can match the class token. A typical
 * interface would be "more accurate" here, but since interfaces don't exist
 * in javascript, they get thrown out by the typescript compiler and cannot
 * be used for the necessary dependency injection.
 * @abstract
 */
var  /**
 *
 * The class that a form control must **implement** in order to be
 * used with the DaffFormFieldComponent.
 *
 * You may ask: "Why are you implementing an abstract class, not extending it?"
 * We do this so that the Angular DI container can match the class token. A typical
 * interface would be "more accurate" here, but since interfaces don't exist
 * in javascript, they get thrown out by the typescript compiler and cannot
 * be used for the necessary dependency injection.
 * @abstract
 */
DaffFormFieldControl = /** @class */ (function () {
    function DaffFormFieldControl() {
    }
    return DaffFormFieldControl;
}());
if (false) {
    /** @type {?} */
    DaffFormFieldControl.prototype.ngControl;
    /** @type {?} */
    DaffFormFieldControl.prototype.controlType;
    /** @type {?} */
    DaffFormFieldControl.prototype.focused;
    /**
     * @abstract
     * @param {?=} event
     * @return {?}
     */
    DaffFormFieldControl.prototype.focus = function (event) { };
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var DaffFormFieldMissingControlMessage = 'A DaffFormFieldComponent must contain a DaffFormFieldControl';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var DaffFormFieldComponent = /** @class */ (function () {
    function DaffFormFieldComponent() {
        /**
         * \@docs-private
         */
        this.faChevronDown = faChevronDown;
        /**
         * The tracking property used to determine if the parent form has been submitted,
         * and thus show an error message (even if the field hasn't been touched).
         *
         * @deprecated
         */
        // tslint:disable-next-line: no-inferrable-types
        this.formSubmitted = false;
        /**
         * Tracking property to keep a record of whether or not the
         * form field should be marked as error.
         */
        this.isError = false;
        /**
         * Tracking property to keep a record of whether or not the
         * form field should be marked as valid.
         */
        this.isValid = false;
    }
    /**
     * Keeps the state of the form field consistent with its child DaffFormControl
     *
     * TODO: consider whether or not this can be refactored to some kind of
     * observable to remove unnecessary change detection.
       *
       * @docs-private
     */
    /**
     * Keeps the state of the form field consistent with its child DaffFormControl
     *
     * TODO: consider whether or not this can be refactored to some kind of
     * observable to remove unnecessary change detection.
     *
     * \@docs-private
     * @return {?}
     */
    DaffFormFieldComponent.prototype.ngDoCheck = /**
     * Keeps the state of the form field consistent with its child DaffFormControl
     *
     * TODO: consider whether or not this can be refactored to some kind of
     * observable to remove unnecessary change detection.
     *
     * \@docs-private
     * @return {?}
     */
    function () {
        if (this._control) {
            this.isError = this._control.ngControl.errors && (this._control.ngControl.touched);
            this.isValid = !this._control.ngControl.errors && this._control.ngControl.touched;
        }
    };
    /**
     * Validate whether or not the FormField is in
     * a "usable" state.
     */
    /**
     * Validate whether or not the FormField is in
     * a "usable" state.
     * @private
     * @return {?}
     */
    DaffFormFieldComponent.prototype._validateFormControl = /**
     * Validate whether or not the FormField is in
     * a "usable" state.
     * @private
     * @return {?}
     */
    function () {
        if (!this._control) {
            throw new Error(DaffFormFieldMissingControlMessage);
        }
    };
    /**
     * Life cycle hook to verify that the form field has an acceptable
     * child control instance. Mostly useful for development-time
     * validation of usage.
       *
       * @docs-private
     */
    /**
     * Life cycle hook to verify that the form field has an acceptable
     * child control instance. Mostly useful for development-time
     * validation of usage.
     *
     * \@docs-private
     * @return {?}
     */
    DaffFormFieldComponent.prototype.ngAfterContentInit = /**
     * Life cycle hook to verify that the form field has an acceptable
     * child control instance. Mostly useful for development-time
     * validation of usage.
     *
     * \@docs-private
     * @return {?}
     */
    function () {
        this._validateFormControl();
    };
    /**
     * Life cycle hook to verify that the form field has an acceptable
     * child control instance. Mostly useful for development-time
     * validation of usage.
       *
       * @docs-private
     */
    /**
     * Life cycle hook to verify that the form field has an acceptable
     * child control instance. Mostly useful for development-time
     * validation of usage.
     *
     * \@docs-private
     * @return {?}
     */
    DaffFormFieldComponent.prototype.ngAfterContentChecked = /**
     * Life cycle hook to verify that the form field has an acceptable
     * child control instance. Mostly useful for development-time
     * validation of usage.
     *
     * \@docs-private
     * @return {?}
     */
    function () {
        this._validateFormControl();
    };
    DaffFormFieldComponent.decorators = [
        { type: Component, args: [{
                    selector: 'daff-form-field',
                    template: "<div class=\"daff-form-field__control\" [class.daff-error]=\"isError\" [class.daff-valid]=\"isValid\">\n  <ng-content></ng-content>\n  <div class=\"daff-form-field__icon\" *ngIf=\"_control.controlType=='native-select'\">\n    <fa-icon [icon]=\"faChevronDown\"></fa-icon>\n  </div>\n</div>\n<ng-content select=\"daff-error-message\"></ng-content>\n",
                    host: {
                        'class': 'daff-form-field'
                    },
                    encapsulation: ViewEncapsulation.None,
                    styles: [".daff-form-field{display:block;position:relative}.daff-form-field__control{border-radius:3px;display:inline-block;font-size:1rem;height:inherit;line-height:1.5rem;padding:10px 15px;width:100%}.daff-form-field__icon{display:inline-block;pointer-events:none;position:absolute;right:15px}"]
                }] }
    ];
    DaffFormFieldComponent.propDecorators = {
        formSubmitted: [{ type: Input }],
        _control: [{ type: ContentChild, args: [DaffFormFieldControl, { static: false },] }]
    };
    return DaffFormFieldComponent;
}());
if (false) {
    /**
     * \@docs-private
     * @type {?}
     */
    DaffFormFieldComponent.prototype.faChevronDown;
    /**
     * The tracking property used to determine if the parent form has been submitted,
     * and thus show an error message (even if the field hasn't been touched).
     *
     * @deprecated
     * @type {?}
     */
    DaffFormFieldComponent.prototype.formSubmitted;
    /**
     * The child form control that the form-field manages
     * \@docs-private
     * @type {?}
     */
    DaffFormFieldComponent.prototype._control;
    /**
     * Tracking property to keep a record of whether or not the
     * form field should be marked as error.
     * @type {?}
     */
    DaffFormFieldComponent.prototype.isError;
    /**
     * Tracking property to keep a record of whether or not the
     * form field should be marked as valid.
     * @type {?}
     */
    DaffFormFieldComponent.prototype.isValid;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var DaffErrorMessageComponent = /** @class */ (function () {
    function DaffErrorMessageComponent() {
    }
    DaffErrorMessageComponent.decorators = [
        { type: Component, args: [{
                    selector: 'daff-error-message',
                    template: '<ng-content></ng-content>',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    styles: [":host{display:block;font-size:.75rem;margin-top:5px}"]
                }] }
    ];
    return DaffErrorMessageComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var DaffErrorMessageModule = /** @class */ (function () {
    function DaffErrorMessageModule() {
    }
    DaffErrorMessageModule.decorators = [
        { type: NgModule, args: [{
                    exports: [
                        DaffErrorMessageComponent
                    ],
                    declarations: [
                        DaffErrorMessageComponent
                    ]
                },] }
    ];
    return DaffErrorMessageModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var DaffFormFieldModule = /** @class */ (function () {
    function DaffFormFieldModule() {
    }
    DaffFormFieldModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        CommonModule,
                        FontAwesomeModule,
                        DaffErrorMessageModule
                    ],
                    exports: [
                        DaffFormFieldComponent,
                        DaffErrorMessageModule
                    ],
                    declarations: [
                        DaffFormFieldComponent
                    ]
                },] }
    ];
    return DaffFormFieldModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var validateProperty = (/**
 * @param {?} object
 * @param {?} prop
 * @return {?}
 */
function (object, prop) {
    if (object[prop] === null || object[prop] === undefined || object[prop] === '') {
        throw new Error("DaffImageComponent must have a defined " + prop + " attribute.");
    }
});
var ɵ0 = validateProperty;
/** @type {?} */
var validateProperties = (/**
 * @param {?} object
 * @param {?} props
 * @return {?}
 */
function (object, props) {
    /** @type {?} */
    var invalidProps = props.filter((/**
     * @param {?} prop
     * @return {?}
     */
    function (prop) {
        try {
            validateProperty(object, prop);
        }
        catch (e) {
            return true;
        }
        return false;
    }));
    if (invalidProps.length) {
        throw new Error("DaffImageComponent must have the " + invalidProps.join(',') + " attributes defined.");
    }
});
var ɵ1 = validateProperties;
var DaffImageComponent = /** @class */ (function () {
    function DaffImageComponent(sanitizer) {
        this.sanitizer = sanitizer;
        this.load = new EventEmitter();
    }
    Object.defineProperty(DaffImageComponent.prototype, "src", {
        get: /**
         * @return {?}
         */
        function () { return this._src; },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._src = value;
            validateProperty(this, 'src');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DaffImageComponent.prototype, "alt", {
        get: /**
         * @return {?}
         */
        function () { return this._alt; },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._alt = value;
            validateProperty(this, 'alt');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DaffImageComponent.prototype, "width", {
        get: /**
         * @return {?}
         */
        function () { return this._width; },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._width = value;
            validateProperty(this, 'width');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DaffImageComponent.prototype, "height", {
        get: /**
         * @return {?}
         */
        function () { return this._height; },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._height = value;
            validateProperty(this, 'height');
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @docs-private
     */
    /**
     * \@docs-private
     * @return {?}
     */
    DaffImageComponent.prototype.ngOnInit = /**
     * \@docs-private
     * @return {?}
     */
    function () {
        validateProperties(this, ['src', 'alt', 'width', 'height']);
    };
    Object.defineProperty(DaffImageComponent.prototype, "paddingTop", {
        /**
         * @docs-private
         */
        get: /**
         * \@docs-private
         * @return {?}
         */
        function () {
            if (!this.height || !this.width) {
                return undefined;
            }
            return this.sanitizer.bypassSecurityTrustStyle('calc(' + this.height + ' / ' + this.width + ' * 100%)');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DaffImageComponent.prototype, "maxWidth", {
        /**
         * @docs-private
         */
        get: /**
         * \@docs-private
         * @return {?}
         */
        function () {
            return this.width + 'px';
        },
        enumerable: true,
        configurable: true
    });
    DaffImageComponent.decorators = [
        { type: Component, args: [{
                    selector: 'daff-image',
                    template: "<div class=\"daff-image__wrapper\" [style.paddingTop]=\"paddingTop\">\n\t<img [src]=\"src\" [alt]=\"alt\" (load)=\"load.emit\" />\n</div>",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    styles: [":host{display:inline-block;width:100%}:host img{position:absolute;left:0;top:0;height:auto;max-width:100%}.daff-image__wrapper{position:relative;height:0}"]
                }] }
    ];
    /** @nocollapse */
    DaffImageComponent.ctorParameters = function () { return [
        { type: DomSanitizer }
    ]; };
    DaffImageComponent.propDecorators = {
        src: [{ type: Input }],
        alt: [{ type: Input }],
        width: [{ type: Input }],
        height: [{ type: Input }],
        load: [{ type: Output }],
        maxWidth: [{ type: HostBinding, args: ['style.max-width',] }]
    };
    return DaffImageComponent;
}());
if (false) {
    /**
     * @type {?}
     * @private
     */
    DaffImageComponent.prototype._src;
    /**
     * @type {?}
     * @private
     */
    DaffImageComponent.prototype._alt;
    /**
     * @type {?}
     * @private
     */
    DaffImageComponent.prototype._width;
    /**
     * @type {?}
     * @private
     */
    DaffImageComponent.prototype._height;
    /** @type {?} */
    DaffImageComponent.prototype.load;
    /**
     * @type {?}
     * @private
     */
    DaffImageComponent.prototype.sanitizer;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var DaffImageModule = /** @class */ (function () {
    function DaffImageModule() {
    }
    DaffImageModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [
                        DaffImageComponent
                    ],
                    imports: [
                        CommonModule
                    ],
                    exports: [
                        DaffImageComponent
                    ]
                },] }
    ];
    return DaffImageModule;
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
 * DaffInputComponent provides the same functionality as a native `<input>` and contains custom styling and functionality.
 */
var DaffInputComponent = /** @class */ (function () {
    function DaffInputComponent(ngControl, _elementRef) {
        this.ngControl = ngControl;
        this._elementRef = _elementRef;
        this.focused = false;
    }
    /**
     * @docs-private
     */
    /**
     * \@docs-private
     * @return {?}
     */
    DaffInputComponent.prototype.focus = /**
     * \@docs-private
     * @return {?}
     */
    function () {
        this.focused = true;
    };
    /**
     * @docs-private
     */
    /**
     * \@docs-private
     * @return {?}
     */
    DaffInputComponent.prototype.blur = /**
     * \@docs-private
     * @return {?}
     */
    function () {
        this.focused = false;
    };
    /**
     * @return {?}
     */
    DaffInputComponent.prototype.onFocus = /**
     * @return {?}
     */
    function () {
        this._elementRef.nativeElement.focus();
    };
    DaffInputComponent.decorators = [
        { type: Component, args: [{
                    // tslint:disable-next-line: component-selector
                    selector: 'input[daff-input]',
                    template: '<ng-content></ng-content>',
                    providers: [
                        { provide: DaffFormFieldControl, useExisting: DaffInputComponent }
                    ],
                    styles: [":host{border:none;border-radius:4px;box-shadow:none;font-size:1rem;margin:0;padding:15px 15px 0;height:54px;width:100%;box-sizing:border-box}:host:focus{border:none;box-shadow:none;outline:0}"]
                }] }
    ];
    /** @nocollapse */
    DaffInputComponent.ctorParameters = function () { return [
        { type: NgControl, decorators: [{ type: Optional }, { type: Self }] },
        { type: ElementRef }
    ]; };
    DaffInputComponent.propDecorators = {
        formSubmitted: [{ type: Input }],
        focus: [{ type: HostListener, args: ['focus',] }],
        blur: [{ type: HostListener, args: ['blur',] }]
    };
    return DaffInputComponent;
}());
if (false) {
    /**
     * Has the form been submitted.
     * @type {?}
     */
    DaffInputComponent.prototype.formSubmitted;
    /** @type {?} */
    DaffInputComponent.prototype.focused;
    /**
     * \@docs-private
     * @type {?}
     */
    DaffInputComponent.prototype.ngControl;
    /**
     * @type {?}
     * @private
     */
    DaffInputComponent.prototype._elementRef;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var DaffInputModule = /** @class */ (function () {
    function DaffInputModule() {
    }
    DaffInputModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        CommonModule
                    ],
                    exports: [
                        DaffInputComponent
                    ],
                    declarations: [
                        DaffInputComponent
                    ]
                },] }
    ];
    return DaffInputModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var DaffNativeSelectComponent = /** @class */ (function () {
    function DaffNativeSelectComponent(ngControl, _elementRef) {
        this.ngControl = ngControl;
        this._elementRef = _elementRef;
        /**
         * \@docs-private
         */
        this.controlType = 'native-select';
        this.focused = false;
    }
    /**
     * @docs-private
     */
    /**
     * \@docs-private
     * @return {?}
     */
    DaffNativeSelectComponent.prototype.focus = /**
     * \@docs-private
     * @return {?}
     */
    function () {
        this.focused = true;
    };
    /**
     * @docs-private
     */
    /**
     * \@docs-private
     * @return {?}
     */
    DaffNativeSelectComponent.prototype.blur = /**
     * \@docs-private
     * @return {?}
     */
    function () {
        this.focused = false;
    };
    /**
     * @return {?}
     */
    DaffNativeSelectComponent.prototype.onFocus = /**
     * @return {?}
     */
    function () {
        this._elementRef.nativeElement.focus();
    };
    DaffNativeSelectComponent.decorators = [
        { type: Component, args: [{
                    // tslint:disable-next-line: component-selector
                    selector: 'select[daff-native-select]',
                    template: '<ng-content></ng-content>',
                    host: {
                        'class': 'daff-native-select'
                    },
                    encapsulation: ViewEncapsulation.None,
                    providers: [{ provide: DaffFormFieldControl, useExisting: DaffNativeSelectComponent }],
                    styles: [".daff-native-select{-webkit-appearance:none;-moz-appearance:none;appearance:none;background:padding-box;border:0;box-shadow:none;font-size:1rem;line-height:1.5rem;margin:0;min-width:45px;width:100%}.daff-native-select:focus{border:0;box-shadow:none;outline:0}"]
                }] }
    ];
    /** @nocollapse */
    DaffNativeSelectComponent.ctorParameters = function () { return [
        { type: NgControl, decorators: [{ type: Optional }, { type: Self }] },
        { type: ElementRef }
    ]; };
    DaffNativeSelectComponent.propDecorators = {
        formSubmitted: [{ type: Input }],
        focus: [{ type: HostListener, args: ['focus',] }],
        blur: [{ type: HostListener, args: ['blur',] }]
    };
    return DaffNativeSelectComponent;
}());
if (false) {
    /**
     * \@docs-private
     * @type {?}
     */
    DaffNativeSelectComponent.prototype.controlType;
    /**
     * Has the form been submitted.
     * @type {?}
     */
    DaffNativeSelectComponent.prototype.formSubmitted;
    /** @type {?} */
    DaffNativeSelectComponent.prototype.focused;
    /**
     * \@docs-private
     * @type {?}
     */
    DaffNativeSelectComponent.prototype.ngControl;
    /**
     * @type {?}
     * @private
     */
    DaffNativeSelectComponent.prototype._elementRef;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var DaffNativeSelectModule = /** @class */ (function () {
    function DaffNativeSelectModule() {
    }
    DaffNativeSelectModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        CommonModule
                    ],
                    exports: [
                        DaffNativeSelectComponent
                    ],
                    declarations: [
                        DaffNativeSelectComponent
                    ]
                },] }
    ];
    return DaffNativeSelectModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var checkboxIdNum = 0;
var DaffCheckboxComponent = /** @class */ (function () {
    function DaffCheckboxComponent(_cdRef) {
        this._cdRef = _cdRef;
        /**
         * Boolean value to determine whether or not the checkbox is checked.
         */
        this._checked = false;
        /**
         * The id of the checkbox. Must be unique. If not entered by a user then it is generated.
         */
        this.id = 'daff-checkbox-' + checkboxIdNum;
        /**
         * The aria-label of the checkbox. If not set by user then it defaults to the name of the checkbox.
         */
        //tslint:disable-next-line:no-input-rename
        this.label = name;
        /**
         * Event on whether or not the selection has changed.
         */
        this.becameChecked = new EventEmitter();
        this.becameUnchecked = new EventEmitter();
        /**
         * The role of the component. Set to "checkbox".
         * \@docs-private
         */
        this.role = 'checkbox';
        /**
         * Increments id number on new checkbox. Gurantees unique ID on generation.
         */
        checkboxIdNum++;
    }
    Object.defineProperty(DaffCheckboxComponent.prototype, "checked", {
        get: /**
         * @return {?}
         */
        function () {
            return this._checked;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            if (this._checked === value) {
                return;
            }
            if (value === true) {
                this.nativeCheckbox.nativeElement.checked = true;
                this.becameChecked.emit(this._checked);
            }
            else {
                this.nativeCheckbox.nativeElement.checked = false;
                this.becameUnchecked.emit();
            }
            this._checked = value;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @docs-private
     */
    /**
     * \@docs-private
     * @param {?} val
     * @return {?}
     */
    DaffCheckboxComponent.prototype._onChange = /**
     * \@docs-private
     * @param {?} val
     * @return {?}
     */
    function (val) {
        ((/** @type {?} */ (val.target))).checked ? this.select() : this.deselect();
    };
    ;
    Object.defineProperty(DaffCheckboxComponent.prototype, "focusClass", {
        /**
         * @docs-private
         */
        get: /**
         * \@docs-private
         * @return {?}
         */
        function () {
            return this.focused === true;
        },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(DaffCheckboxComponent.prototype, "disabledClass", {
        /**
         * @docs-private
         */
        get: /**
         * \@docs-private
         * @return {?}
         */
        function () {
            return this.disabled === true;
        },
        enumerable: true,
        configurable: true
    });
    ;
    /**
     * Sets focused to false.
     */
    /**
     * Sets focused to false.
     * @return {?}
     */
    DaffCheckboxComponent.prototype.onBlur = /**
     * Sets focused to false.
     * @return {?}
     */
    function () {
        this.focused = false;
    };
    /**
     * Sets focused to true.
     */
    /**
     * Sets focused to true.
     * @return {?}
     */
    DaffCheckboxComponent.prototype.onFocus = /**
     * Sets focused to true.
     * @return {?}
     */
    function () {
        this.focused = true;
    };
    /**
     * Sets checked to true.
    */
    /**
     * Sets checked to true.
     * @return {?}
     */
    DaffCheckboxComponent.prototype.select = /**
     * Sets checked to true.
     * @return {?}
     */
    function () {
        this.checked = true;
        this._cdRef.markForCheck();
    };
    /**
     * Sets checked to false
    */
    /**
     * Sets checked to false
     * @return {?}
     */
    DaffCheckboxComponent.prototype.deselect = /**
     * Sets checked to false
     * @return {?}
     */
    function () {
        this.checked = false;
        this._cdRef.markForCheck();
    };
    DaffCheckboxComponent.decorators = [
        { type: Component, args: [{
                    selector: 'daff-checkbox',
                    template: "<input #inputElement\ntype=\"checkbox\"\n[attr.aria-label]=\"label\"\n[attr.aria-labelledby]=\"labeledBy\"\n[attr.checked]=\"checked ? '' : null\"\n[attr.id] = \"id\"\n[attr.value]=\"value\"\n[attr.name]=\"name\"\n[attr.disabled] = \"disabled ? '' : null\" \n(change)=\"_onChange($event)\"\n(blur)=\"onBlur()\"\n(focus)=\"onFocus()\"\n/>\n<label [attr.for]=\"id\"><ng-content></ng-content></label>",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    styles: [""]
                }] }
    ];
    /** @nocollapse */
    DaffCheckboxComponent.ctorParameters = function () { return [
        { type: ChangeDetectorRef }
    ]; };
    DaffCheckboxComponent.propDecorators = {
        nativeCheckbox: [{ type: ViewChild, args: ['inputElement', { static: true, read: ElementRef },] }],
        name: [{ type: Input }],
        value: [{ type: Input }],
        checked: [{ type: Input }],
        id: [{ type: Input }],
        label: [{ type: Input, args: ['aria-label',] }],
        labeledBy: [{ type: Input, args: ['aria-labelledby',] }],
        becameChecked: [{ type: Output }],
        becameUnchecked: [{ type: Output }],
        role: [{ type: HostBinding, args: ['attr.role',] }],
        focusClass: [{ type: HostBinding, args: ['class.focused',] }],
        disabledClass: [{ type: HostBinding, args: ['class.disabled',] }]
    };
    return DaffCheckboxComponent;
}());
if (false) {
    /**
     * \@docs-private
     * @type {?}
     */
    DaffCheckboxComponent.prototype.nativeCheckbox;
    /**
     * The name of the checkbox.
     * @type {?}
     */
    DaffCheckboxComponent.prototype.name;
    /**
     * The value of the checkbox.
     * @type {?}
     */
    DaffCheckboxComponent.prototype.value;
    /**
     * Boolean value to determine whether or not the checkbox is checked.
     * @type {?}
     * @private
     */
    DaffCheckboxComponent.prototype._checked;
    /**
     * The id of the checkbox. Must be unique. If not entered by a user then it is generated.
     * @type {?}
     */
    DaffCheckboxComponent.prototype.id;
    /**
     * The aria-label of the checkbox. If not set by user then it defaults to the name of the checkbox.
     * @type {?}
     */
    DaffCheckboxComponent.prototype.label;
    /**
     * The aria-labeledby of the checkbox.
     * @type {?}
     */
    DaffCheckboxComponent.prototype.labeledBy;
    /**
     * Event on whether or not the selection has changed.
     * @type {?}
     */
    DaffCheckboxComponent.prototype.becameChecked;
    /** @type {?} */
    DaffCheckboxComponent.prototype.becameUnchecked;
    /**
     * Whether the checkbox is focused
     * @type {?}
     */
    DaffCheckboxComponent.prototype.focused;
    /**
     * Whether the checkbox is disabled.
     * @type {?}
     */
    DaffCheckboxComponent.prototype.disabled;
    /**
     * The role of the component. Set to "checkbox".
     * \@docs-private
     * @type {?}
     */
    DaffCheckboxComponent.prototype.role;
    /**
     * @type {?}
     * @private
     */
    DaffCheckboxComponent.prototype._cdRef;
    /* Skipping unhandled member: ;*/
    /* Skipping unhandled member: ;*/
    /* Skipping unhandled member: ;*/
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var DaffCheckboxSetComponent = /** @class */ (function () {
    function DaffCheckboxSetComponent() {
        /**
         * The role of the component. Set to "checkbox".
         * \@docs-private
         */
        this.role = 'group';
        this.valueList = new EventEmitter();
    }
    /**
     * @return {?}
     */
    DaffCheckboxSetComponent.prototype.getValues = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var checkboxes = this.checkboxes.toArray();
        return this.formArray.value.map((/**
         * @param {?} element
         * @param {?} index
         * @return {?}
         */
        function (element, index) {
            return element === true ? checkboxes[index].value : false;
        })).filter((/**
         * @param {?} element
         * @return {?}
         */
        function (element) { return element !== false; }));
    };
    DaffCheckboxSetComponent.decorators = [
        { type: Component, args: [{
                    selector: 'daff-checkbox-set',
                    template: "<ng-content></ng-content>",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    styles: [""]
                }] }
    ];
    DaffCheckboxSetComponent.propDecorators = {
        formArray: [{ type: Input }],
        name: [{ type: Input }],
        role: [{ type: HostBinding, args: ['attr.role',] }],
        checkboxes: [{ type: ContentChildren, args: [DaffCheckboxComponent,] }],
        valueList: [{ type: Output }]
    };
    return DaffCheckboxSetComponent;
}());
if (false) {
    /** @type {?} */
    DaffCheckboxSetComponent.prototype.formArray;
    /**
     * The name of the checkbox-set
     * @type {?}
     */
    DaffCheckboxSetComponent.prototype.name;
    /**
     * The role of the component. Set to "checkbox".
     * \@docs-private
     * @type {?}
     */
    DaffCheckboxSetComponent.prototype.role;
    /**
     * The list of checkboxes in the set.
     * \@docs-private
     * @type {?}
     */
    DaffCheckboxSetComponent.prototype.checkboxes;
    /** @type {?} */
    DaffCheckboxSetComponent.prototype.valueList;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * A directive for binding the DaffCheckboxComponent and the Control Value Accessor.
 */
var DaffCheckboxControlValueAccessorDirective = /** @class */ (function () {
    function DaffCheckboxControlValueAccessorDirective(_control, _checkbox) {
        this._control = _control;
        this._checkbox = _checkbox;
        if (this._control != null) {
            this._control.valueAccessor = this;
        }
    }
    /**
     * A lifecycle method called when the directive is initialized.
     */
    /**
     * A lifecycle method called when the directive is initialized.
     * @return {?}
     */
    DaffCheckboxControlValueAccessorDirective.prototype.ngOnInit = /**
     * A lifecycle method called when the directive is initialized.
     * @return {?}
     */
    function () {
        var _this = this;
        // See the note about `writeValue` usage.
        this.writeValue(this._control.value);
        // Watch for user events on the component to update the state
        this._checkbox.becameChecked.subscribe((/**
         * @return {?}
         */
        function () {
            _this._onChange(true);
        }));
        this._checkbox.becameUnchecked.subscribe((/**
         * @return {?}
         */
        function () {
            _this._onChange(false);
        }));
    };
    /**
     * writes a new value down into the component.
     */
    /**
     * writes a new value down into the component.
     * @param {?} value
     * @return {?}
     */
    DaffCheckboxControlValueAccessorDirective.prototype.writeValue = /**
     * writes a new value down into the component.
     * @param {?} value
     * @return {?}
     */
    function (value) {
        value = !!value;
        value === true ? this.fireSelect() : this.fireDeselect();
    };
    /**
     * Registers the change handler
     */
    /**
     * Registers the change handler
     * @param {?} fn
     * @return {?}
     */
    DaffCheckboxControlValueAccessorDirective.prototype.registerOnChange = /**
     * Registers the change handler
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this._onChange = (/**
         * @param {?} val
         * @return {?}
         */
        function (val) {
            fn(val);
        });
    };
    /**
     * Registers the touched handler
     */
    /**
     * Registers the touched handler
     * @param {?} fn
     * @return {?}
     */
    DaffCheckboxControlValueAccessorDirective.prototype.registerOnTouched = /**
     * Registers the touched handler
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this._onTouched = fn;
    };
    /**
   
     * Sets the disabled state.
     */
    /**
     * Sets the disabled state.
     * @param {?} isDisabled
     * @return {?}
     */
    DaffCheckboxControlValueAccessorDirective.prototype.setDisabledState = /**
     * Sets the disabled state.
     * @param {?} isDisabled
     * @return {?}
     */
    function (isDisabled) {
        this._checkbox.disabled = isDisabled;
    };
    /**
     * calls the child checkbox's select function
     */
    /**
     * calls the child checkbox's select function
     * @return {?}
     */
    DaffCheckboxControlValueAccessorDirective.prototype.fireSelect = /**
     * calls the child checkbox's select function
     * @return {?}
     */
    function () {
        this._checkbox.select();
    };
    /**
     * calls the child checkbox's deselect function
     */
    /**
     * calls the child checkbox's deselect function
     * @return {?}
     */
    DaffCheckboxControlValueAccessorDirective.prototype.fireDeselect = /**
     * calls the child checkbox's deselect function
     * @return {?}
     */
    function () {
        this._checkbox.deselect();
    };
    DaffCheckboxControlValueAccessorDirective.decorators = [
        { type: Directive, args: [{
                    // tslint:disable-next-line: directive-selector
                    selector: 'daff-checkbox[ngModel], daff-checkbox[formControl], daff-checkbox[formControlName]',
                },] }
    ];
    /** @nocollapse */
    DaffCheckboxControlValueAccessorDirective.ctorParameters = function () { return [
        { type: NgControl, decorators: [{ type: Optional }, { type: Self }] },
        { type: DaffCheckboxComponent }
    ]; };
    DaffCheckboxControlValueAccessorDirective.propDecorators = {
        value: [{ type: Input }],
        name: [{ type: Input }]
    };
    return DaffCheckboxControlValueAccessorDirective;
}());
if (false) {
    /** @type {?} */
    DaffCheckboxControlValueAccessorDirective.prototype._onChange;
    /** @type {?} */
    DaffCheckboxControlValueAccessorDirective.prototype._onTouched;
    /**
     * The value of the ControlValueAccessor
     * @type {?}
     */
    DaffCheckboxControlValueAccessorDirective.prototype.value;
    /**
     * The name of the ControlValueAccessor
     * @type {?}
     */
    DaffCheckboxControlValueAccessorDirective.prototype.name;
    /** @type {?} */
    DaffCheckboxControlValueAccessorDirective.prototype._control;
    /**
     * @type {?}
     * @private
     */
    DaffCheckboxControlValueAccessorDirective.prototype._checkbox;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var DaffCheckboxModule = /** @class */ (function () {
    function DaffCheckboxModule() {
    }
    DaffCheckboxModule.decorators = [
        { type: NgModule, args: [{
                    exports: [
                        DaffCheckboxComponent,
                        DaffCheckboxSetComponent,
                        DaffCheckboxControlValueAccessorDirective
                    ],
                    declarations: [
                        DaffCheckboxComponent,
                        DaffCheckboxSetComponent,
                        DaffCheckboxControlValueAccessorDirective
                    ],
                    imports: [
                        CommonModule
                    ],
                    providers: [
                        DaffCheckboxSetComponent,
                    ]
                },] }
    ];
    return DaffCheckboxModule;
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
 * An _elementRef and an instance of renderer2 are needed for the Sizeable mixin
 */
var /**
 * An _elementRef and an instance of renderer2 are needed for the Sizeable mixin
 */
DaffContainerBase = /** @class */ (function () {
    function DaffContainerBase(_elementRef, _renderer) {
        this._elementRef = _elementRef;
        this._renderer = _renderer;
    }
    return DaffContainerBase;
}());
if (false) {
    /** @type {?} */
    DaffContainerBase.prototype._elementRef;
    /** @type {?} */
    DaffContainerBase.prototype._renderer;
}
/** @type {?} */
var _daffContainerBase = daffSizeMixin(DaffContainerBase);
var DaffContainerComponent = /** @class */ (function (_super) {
    __extends(DaffContainerComponent, _super);
    function DaffContainerComponent(elementRef, renderer) {
        var _this = _super.call(this, elementRef, renderer) || this;
        _this.elementRef = elementRef;
        _this.renderer = renderer;
        /**
         * \@docs-private
         */
        _this.class = true;
        return _this;
    }
    DaffContainerComponent.decorators = [
        { type: Component, args: [{
                    selector: 'daff-container',
                    template: '<ng-content></ng-content>',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    styles: [":host{display:block;margin:0 auto;padding:0;width:100%}:host.daff-xs{max-width:640px}:host.daff-sm{max-width:800px}:host.daff-md{max-width:1040px}:host.daff-lg{max-width:1340px}:host.daff-xl{max-width:1920px}"]
                }] }
    ];
    /** @nocollapse */
    DaffContainerComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: Renderer2 }
    ]; };
    DaffContainerComponent.propDecorators = {
        size: [{ type: Input }],
        class: [{ type: HostBinding, args: ['class.daff-container',] }]
    };
    return DaffContainerComponent;
}(_daffContainerBase));
if (false) {
    /** @type {?} */
    DaffContainerComponent.prototype.size;
    /**
     * \@docs-private
     * @type {?}
     */
    DaffContainerComponent.prototype.class;
    /**
     * @type {?}
     * @private
     */
    DaffContainerComponent.prototype.elementRef;
    /**
     * @type {?}
     * @private
     */
    DaffContainerComponent.prototype.renderer;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var DaffContainerModule = /** @class */ (function () {
    function DaffContainerModule() {
    }
    DaffContainerModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        CommonModule
                    ],
                    declarations: [
                        DaffContainerComponent
                    ],
                    exports: [
                        DaffContainerComponent
                    ]
                },] }
    ];
    return DaffContainerModule;
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
 * An _elementRef and an instance of renderer2 are needed for the Colorable mixin
 */
var /**
 * An _elementRef and an instance of renderer2 are needed for the Colorable mixin
 */
DaffLoadingIconBase = /** @class */ (function () {
    function DaffLoadingIconBase(_elementRef, _renderer) {
        this._elementRef = _elementRef;
        this._renderer = _renderer;
    }
    return DaffLoadingIconBase;
}());
if (false) {
    /** @type {?} */
    DaffLoadingIconBase.prototype._elementRef;
    /** @type {?} */
    DaffLoadingIconBase.prototype._renderer;
}
/** @type {?} */
var _daffLoadingIconBase = daffColorMixin(DaffLoadingIconBase, 'primary');
var DaffLoadingIconComponent = /** @class */ (function (_super) {
    __extends(DaffLoadingIconComponent, _super);
    function DaffLoadingIconComponent(elementRef, renderer) {
        var _this = _super.call(this, elementRef, renderer) || this;
        _this.elementRef = elementRef;
        _this.renderer = renderer;
        /**
         * The (pixel) diameter of the animation
         */
        // tslint:disable-next-line: no-inferrable-types
        _this.diameter = 60;
        /**
         * \@docs-private
         */
        _this.class = true;
        return _this;
    }
    Object.defineProperty(DaffLoadingIconComponent.prototype, "maxWidth", {
        /**
         * @docs-private
         */
        get: /**
         * \@docs-private
         * @return {?}
         */
        function () {
            return this.diameter + 'px';
        },
        enumerable: true,
        configurable: true
    });
    DaffLoadingIconComponent.decorators = [
        { type: Component, args: [{
                    selector: 'daff-loading-icon',
                    template: "<svg focusable=\"false\" preserveAspectRatio=\"xMidYMid meet\" viewBox=\"0 0 100 100\">\n        <circle cx=\"50%\" cy=\"50%\" r=\"46\"></circle>\n</svg>",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    styles: [":host{display:block}circle{-webkit-animation:1s linear infinite rotation,1s linear infinite circle-animation;animation:1s linear infinite rotation,1s linear infinite circle-animation;fill:transparent;stroke-dasharray:101.15928 400;stroke-linecap:round;stroke-width:5px;transform-origin:center}@-webkit-keyframes circle-animation{0%{stroke-dasharray:101.15928 400;stroke-dashoffset:101.15928}50%{stroke-dasharray:101.15928 400;stroke-dashoffset:28.90265}75%{stroke-dasharray:101.15928 400;stroke-dashoffset:0}100%{stroke-dasharray:0 400;stroke-dashoffset:-101.15928}}@keyframes circle-animation{0%{stroke-dasharray:101.15928 400;stroke-dashoffset:101.15928}50%{stroke-dasharray:101.15928 400;stroke-dashoffset:28.90265}75%{stroke-dasharray:101.15928 400;stroke-dashoffset:0}100%{stroke-dasharray:0 400;stroke-dashoffset:-101.15928}}@-webkit-keyframes rotation{0%{transform:rotate(-90deg)}50%,50.5%{transform:rotate(0)}75%,75.5%{transform:rotate(90deg)}100%,99%{transform:rotate(144deg)}}@keyframes rotation{0%{transform:rotate(-90deg)}50%,50.5%{transform:rotate(0)}75%,75.5%{transform:rotate(90deg)}100%,99%{transform:rotate(144deg)}}"]
                }] }
    ];
    /** @nocollapse */
    DaffLoadingIconComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: Renderer2 }
    ]; };
    DaffLoadingIconComponent.propDecorators = {
        color: [{ type: Input }],
        diameter: [{ type: Input }],
        class: [{ type: HostBinding, args: ['class.daff-loading-icon',] }],
        maxWidth: [{ type: HostBinding, args: ['style.max-width',] }]
    };
    return DaffLoadingIconComponent;
}(_daffLoadingIconBase));
if (false) {
    /** @type {?} */
    DaffLoadingIconComponent.prototype.color;
    /**
     * The (pixel) diameter of the animation
     * @type {?}
     */
    DaffLoadingIconComponent.prototype.diameter;
    /**
     * \@docs-private
     * @type {?}
     */
    DaffLoadingIconComponent.prototype.class;
    /**
     * @type {?}
     * @private
     */
    DaffLoadingIconComponent.prototype.elementRef;
    /**
     * @type {?}
     * @private
     */
    DaffLoadingIconComponent.prototype.renderer;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var DaffLoadingIconModule = /** @class */ (function () {
    function DaffLoadingIconModule() {
    }
    DaffLoadingIconModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        CommonModule
                    ],
                    declarations: [
                        DaffLoadingIconComponent
                    ],
                    exports: [
                        DaffLoadingIconComponent
                    ]
                },] }
    ];
    return DaffLoadingIconModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var daffProgressIndicatorAnimation = {
    fill: trigger('fill', [
        state('*', style({ width: '{{ percentage }}%' }), { params: { percentage: 0 } }),
        transition('* <=> *', animate(1000))
    ])
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * An _elementRef and an instance of renderer2 are needed for the Colorable mixin
 */
var /**
 * An _elementRef and an instance of renderer2 are needed for the Colorable mixin
 */
DaffProgressIndicatorBase = /** @class */ (function () {
    function DaffProgressIndicatorBase(_elementRef, _renderer) {
        this._elementRef = _elementRef;
        this._renderer = _renderer;
    }
    return DaffProgressIndicatorBase;
}());
if (false) {
    /** @type {?} */
    DaffProgressIndicatorBase.prototype._elementRef;
    /** @type {?} */
    DaffProgressIndicatorBase.prototype._renderer;
}
/** @type {?} */
var _daffProgressIndicatorBase = daffColorMixin(DaffProgressIndicatorBase, 'primary');
var DaffProgressIndicatorComponent = /** @class */ (function (_super) {
    __extends(DaffProgressIndicatorComponent, _super);
    function DaffProgressIndicatorComponent(elementRef, renderer) {
        var _this = _super.call(this, elementRef, renderer) || this;
        _this.elementRef = elementRef;
        _this.renderer = renderer;
        /**
         * \@docs-private
         */
        _this.class = true;
        /**
         * The percentage completion of the progression,
         * expressed as a whole number between 0 and 100.
         *
         */
        // tslint:disable-next-line: no-inferrable-types
        _this.percentage = 0;
        /**
         * An event that emits each time the progression reaches 100%
         * and the animation is finished
         */
        _this.finished = new EventEmitter();
        return _this;
    }
    /**
     * Calculates when the progress animation is fully completed
     * @param event: AnimationEvent
     */
    /**
     * Calculates when the progress animation is fully completed
     * @param {?} event
     * @return {?}
     */
    DaffProgressIndicatorComponent.prototype.onAnimationComplete = /**
     * Calculates when the progress animation is fully completed
     * @param {?} event
     * @return {?}
     */
    function (event) {
        // @ts-ignore: @angular/animations typing error on event.toState as string
        // See: https://github.com/angular/angular/issues/26507
        if (event.toState === '100' || event.toState === 100) {
            this.finished.emit();
        }
    };
    Object.defineProperty(DaffProgressIndicatorComponent.prototype, "fillState", {
        /**
         * @docs-private
         */
        get: /**
         * \@docs-private
         * @return {?}
         */
        function () {
            return {
                value: this.percentage,
                params: {
                    percentage: this.percentage
                }
            };
        },
        enumerable: true,
        configurable: true
    });
    DaffProgressIndicatorComponent.decorators = [
        { type: Component, args: [{
                    selector: 'daff-progress-indicator',
                    template: "<div class=\"daff-progress-indicator__fill\" [@fill]=\"fillState\" (@fill.done)=\"onAnimationComplete($event)\"></div>",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    animations: [
                        daffProgressIndicatorAnimation.fill
                    ],
                    styles: [":host{display:flex;height:3px;width:100%}"]
                }] }
    ];
    /** @nocollapse */
    DaffProgressIndicatorComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: Renderer2 }
    ]; };
    DaffProgressIndicatorComponent.propDecorators = {
        class: [{ type: HostBinding, args: ['class.daff-progress-indicator',] }],
        color: [{ type: Input }],
        percentage: [{ type: Input }],
        finished: [{ type: Output }]
    };
    return DaffProgressIndicatorComponent;
}(_daffProgressIndicatorBase));
if (false) {
    /**
     * \@docs-private
     * @type {?}
     */
    DaffProgressIndicatorComponent.prototype.class;
    /**
     * The color of the progress indicator
     * See DaffColorable
     * @type {?}
     */
    DaffProgressIndicatorComponent.prototype.color;
    /**
     * The percentage completion of the progression,
     * expressed as a whole number between 0 and 100.
     *
     * @type {?}
     */
    DaffProgressIndicatorComponent.prototype.percentage;
    /**
     * An event that emits each time the progression reaches 100%
     * and the animation is finished
     * @type {?}
     */
    DaffProgressIndicatorComponent.prototype.finished;
    /**
     * @type {?}
     * @private
     */
    DaffProgressIndicatorComponent.prototype.elementRef;
    /**
     * @type {?}
     * @private
     */
    DaffProgressIndicatorComponent.prototype.renderer;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var DaffProgressIndicatorModule = /** @class */ (function () {
    function DaffProgressIndicatorModule() {
    }
    DaffProgressIndicatorModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [DaffProgressIndicatorComponent],
                    imports: [
                        CommonModule
                    ],
                    exports: [DaffProgressIndicatorComponent]
                },] }
    ];
    return DaffProgressIndicatorModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var DaffRadioSetComponent = /** @class */ (function () {
    function DaffRadioSetComponent() {
        /**
         * \@docs-private
         */
        this.role = 'radiogroup';
    }
    DaffRadioSetComponent.decorators = [
        { type: Component, args: [{
                    selector: 'daff-radio-set',
                    template: "<ng-content></ng-content>",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    styles: [""]
                }] }
    ];
    /** @nocollapse */
    DaffRadioSetComponent.ctorParameters = function () { return []; };
    DaffRadioSetComponent.propDecorators = {
        name: [{ type: Input }],
        role: [{ type: HostBinding, args: ['attr.role',] }]
    };
    return DaffRadioSetComponent;
}());
if (false) {
    /** @type {?} */
    DaffRadioSetComponent.prototype.name;
    /**
     * \@docs-private
     * @type {?}
     */
    DaffRadioSetComponent.prototype.role;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var radioUniqueId = 0;
var DaffRadioComponent = /** @class */ (function () {
    function DaffRadioComponent(radioset) {
        this.radioset = radioset;
        /**
         * \@docs-private
         */
        this.role = 'radio';
        /**
         * \@docs-private
         */
        this._checked = false;
        /**
         * The id of the radio. It is uniquely generated but can be overwritten by the user. Must be unique.
         */
        this.id = 'daff-radio-' + radioUniqueId;
        /**
         * Used for aria-label. Default to name if user does not input a label.
         */
        //tslint:disable-next-line:no-input-rename
        this.label = name;
        /**
         * Output event of selection being changed
         */
        this.selectionChange = new EventEmitter();
        this.disabled = false;
        this.focused = false;
        radioUniqueId++;
    }
    Object.defineProperty(DaffRadioComponent.prototype, "focusClass", {
        /**
         * @docs-private
         */
        get: /**
         * \@docs-private
         * @return {?}
         */
        function () {
            return this.focused === true;
        },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(DaffRadioComponent.prototype, "disabledClass", {
        /**
         * @docs-private
         */
        get: /**
         * \@docs-private
         * @return {?}
         */
        function () {
            return this.disabled === true;
        },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(DaffRadioComponent.prototype, "checked", {
        /**
           * The checked property of the radio
         */
        get: /**
         * The checked property of the radio
         * @return {?}
         */
        function () {
            return this._checked;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            if (this._checked !== value) {
                this._checked = value;
                this.selectionChange.emit(this.value);
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @docs-private
     */
    /**
     * \@docs-private
     * @return {?}
     */
    DaffRadioComponent.prototype.ngOnInit = /**
     * \@docs-private
     * @return {?}
     */
    function () {
        this.name = this.radioset ? this.radioset.name : this.name;
    };
    /**
     * updates Focus styling
     */
    /**
     * updates Focus styling
     * @return {?}
     */
    DaffRadioComponent.prototype.onFocus = /**
     * updates Focus styling
     * @return {?}
     */
    function () {
        this.focused = true;
    };
    /**
     * updates Blur styling
     */
    /**
     * updates Blur styling
     * @return {?}
     */
    DaffRadioComponent.prototype.onBlur = /**
     * updates Blur styling
     * @return {?}
     */
    function () {
        this.focused = false;
    };
    /**
     * toggles checked attribute on
     */
    /**
     * toggles checked attribute on
     * @return {?}
     */
    DaffRadioComponent.prototype.select = /**
     * toggles checked attribute on
     * @return {?}
     */
    function () {
        this.checked = true;
    };
    /**
     * toggles checked attribute off
     */
    /**
     * toggles checked attribute off
     * @return {?}
     */
    DaffRadioComponent.prototype.deselect = /**
     * toggles checked attribute off
     * @return {?}
     */
    function () {
        this.checked = false;
    };
    /**
     * @return {?}
     */
    DaffRadioComponent.prototype.onChange = /**
     * @return {?}
     */
    function () {
        this.select();
    };
    ;
    DaffRadioComponent.decorators = [
        { type: Component, args: [{
                    // tslint:disable-next-line: component-selector
                    selector: 'daff-radio',
                    template: "<input type=\"radio\" \n[attr.checked]=\"checked ? '' : null\" \n[attr.id]=\"id\" \n[attr.name]=\"name\" \n[attr.aria-label]=\"label\"\n[attr.aria-labelledby]=\"labelledby\"\n[attr.value]=\"value\"\n[attr.disabled] = \"disabled ? '' : null\" \n(change)=\"onChange()\"\n(blur)=\"onBlur()\"\n(focus)=\"onFocus()\"/>\n<label [attr.for]=\"id\">\n  <ng-content></ng-content>\n</label>",
                    providers: [
                        {
                            provide: NG_VALUE_ACCESSOR,
                            useExisting: forwardRef((/**
                             * @return {?}
                             */
                            function () { return DaffRadioComponent; })),
                            multi: true
                        }
                    ],
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    styles: [""]
                }] }
    ];
    /** @nocollapse */
    DaffRadioComponent.ctorParameters = function () { return [
        { type: DaffRadioSetComponent, decorators: [{ type: Optional }] }
    ]; };
    DaffRadioComponent.propDecorators = {
        role: [{ type: HostBinding, args: ['attr.role',] }],
        focusClass: [{ type: HostBinding, args: ['class.focused',] }],
        disabledClass: [{ type: HostBinding, args: ['class.disabled',] }],
        checked: [{ type: Input }],
        value: [{ type: Input }],
        id: [{ type: Input }],
        name: [{ type: Input }],
        label: [{ type: Input, args: ['aria-label',] }],
        labelledby: [{ type: Input, args: ['aria-labelledby',] }],
        selectionChange: [{ type: Output }]
    };
    return DaffRadioComponent;
}());
if (false) {
    /**
     * \@docs-private
     * @type {?}
     */
    DaffRadioComponent.prototype.role;
    /**
     * \@docs-private
     * @type {?}
     */
    DaffRadioComponent.prototype._checked;
    /**
     * The value of the radio
     * @type {?}
     */
    DaffRadioComponent.prototype.value;
    /**
     * The id of the radio. It is uniquely generated but can be overwritten by the user. Must be unique.
     * @type {?}
     */
    DaffRadioComponent.prototype.id;
    /**
     * Name of the Radio
     * @type {?}
     */
    DaffRadioComponent.prototype.name;
    /**
     * Used for aria-label. Default to name if user does not input a label.
     * @type {?}
     */
    DaffRadioComponent.prototype.label;
    /**
     * Used for aria-labelledby.
     * @type {?}
     */
    DaffRadioComponent.prototype.labelledby;
    /**
     * Output event of selection being changed
     * @type {?}
     */
    DaffRadioComponent.prototype.selectionChange;
    /** @type {?} */
    DaffRadioComponent.prototype.disabled;
    /** @type {?} */
    DaffRadioComponent.prototype.focused;
    /**
     * @type {?}
     * @private
     */
    DaffRadioComponent.prototype.radioset;
    /* Skipping unhandled member: ;*/
    /* Skipping unhandled member: ;*/
    /* Skipping unhandled member: ;*/
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @record
 */
function ControlAccessorPair() { }
if (false) {
    /** @type {?} */
    ControlAccessorPair.prototype.control;
    /** @type {?} */
    ControlAccessorPair.prototype.accessor;
}
var DaffRadioRegistry = /** @class */ (function () {
    function DaffRadioRegistry() {
        this._accessors = [];
    }
    /**
     * @description
     * Adds a control to the internal registry.
     */
    /**
     * \@description
     * Adds a control to the internal registry.
     * @param {?} control
     * @param {?} accessor
     * @return {?}
     */
    DaffRadioRegistry.prototype.add = /**
     * \@description
     * Adds a control to the internal registry.
     * @param {?} control
     * @param {?} accessor
     * @return {?}
     */
    function (control, accessor) {
        this._accessors.push({
            control: control,
            accessor: accessor
        });
    };
    /**
     * @description
     * Removes a control from the internal registry.
     */
    /**
     * \@description
     * Removes a control from the internal registry.
     * @param {?} accessor
     * @return {?}
     */
    DaffRadioRegistry.prototype.remove = /**
     * \@description
     * Removes a control from the internal registry.
     * @param {?} accessor
     * @return {?}
     */
    function (accessor) {
        for (var i = this._accessors.length - 1; i >= 0; --i) {
            if (this._accessors[i]['accessor'] === accessor) {
                this._accessors.splice(i, 1);
                return;
            }
        }
    };
    /**
     * @description
     * Selects a radio button.
     */
    /**
     * \@description
     * Selects a radio button.
     * @param {?} accessor
     * @return {?}
     */
    DaffRadioRegistry.prototype.select = /**
     * \@description
     * Selects a radio button.
     * @param {?} accessor
     * @return {?}
     */
    function (accessor) {
        var _this = this;
        this._accessors.forEach((/**
         * @param {?} c
         * @return {?}
         */
        function (c) {
            if (_this._isSameGroup(c, accessor) && c['accessor'] !== accessor) {
                c['accessor'].fireDeselect();
            }
        }));
    };
    /**
     * @private
     * @param {?} controlPair
     * @param {?} accessor
     * @return {?}
     */
    DaffRadioRegistry.prototype._isSameGroup = /**
     * @private
     * @param {?} controlPair
     * @param {?} accessor
     * @return {?}
     */
    function (controlPair, accessor) {
        if (!controlPair['control'].control) {
            return false;
        }
        return controlPair['control'].control.parent === accessor._control.control.parent
            && controlPair['accessor'].name === accessor.name;
    };
    DaffRadioRegistry.decorators = [
        { type: Injectable }
    ];
    return DaffRadioRegistry;
}());
if (false) {
    /**
     * @type {?}
     * @private
     */
    DaffRadioRegistry.prototype._accessors;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * ControlValueAccessor functionality for the DaffRadio
 */
var DaffRadioControlValueAccessorDirective = /** @class */ (function () {
    function DaffRadioControlValueAccessorDirective(_control, _registry, _radio) {
        this._control = _control;
        this._registry = _registry;
        this._radio = _radio;
        if (this._control != null) {
            this._control.valueAccessor = this;
        }
    }
    /**
     * @return {?}
     */
    DaffRadioControlValueAccessorDirective.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.writeValue(this._control.value);
        this._registry.add(this._control, this);
        this._radio.selectionChange.subscribe((/**
         * @param {?} value
         * @return {?}
         */
        function (value) { return value ? _this._onChange() : null; }));
    };
    /**
     *
     * writeValue function from the CVA interface
     */
    /**
     *
     * writeValue function from the CVA interface
     * @param {?} value
     * @return {?}
     */
    DaffRadioControlValueAccessorDirective.prototype.writeValue = /**
     *
     * writeValue function from the CVA interface
     * @param {?} value
     * @return {?}
     */
    function (value) {
        if (this.value === value) {
            this._onChange();
            this.fireSelect();
        }
    };
    /**
     * registerOnChange implemented from the CVA interface
     */
    /**
     * registerOnChange implemented from the CVA interface
     * @param {?} fn
     * @return {?}
     */
    DaffRadioControlValueAccessorDirective.prototype.registerOnChange = /**
     * registerOnChange implemented from the CVA interface
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        var _this = this;
        this._onChange = (/**
         * @return {?}
         */
        function () {
            fn(_this.value);
            _this._registry.select(_this);
        });
    };
    /**
     * registerOnTouch implemented from the CVA interface
     */
    /**
     * registerOnTouch implemented from the CVA interface
     * @param {?} fn
     * @return {?}
     */
    DaffRadioControlValueAccessorDirective.prototype.registerOnTouched = /**
     * registerOnTouch implemented from the CVA interface
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this._onTouched = fn;
    };
    /**
     * sets the disabled state.
     */
    /**
     * sets the disabled state.
     * @param {?} isDisabled
     * @return {?}
     */
    DaffRadioControlValueAccessorDirective.prototype.setDisabledState = /**
     * sets the disabled state.
     * @param {?} isDisabled
     * @return {?}
     */
    function (isDisabled) {
        this._radio.disabled = isDisabled;
    };
    /**
      calls select function for the radio
    */
    /**
     * calls select function for the radio
     * @return {?}
     */
    DaffRadioControlValueAccessorDirective.prototype.fireSelect = /**
     * calls select function for the radio
     * @return {?}
     */
    function () {
        this._radio.select();
    };
    /**
      calls deselect function for the radio
     */
    /**
     * calls deselect function for the radio
     * @return {?}
     */
    DaffRadioControlValueAccessorDirective.prototype.fireDeselect = /**
     * calls deselect function for the radio
     * @return {?}
     */
    function () {
        this._radio.deselect();
    };
    DaffRadioControlValueAccessorDirective.decorators = [
        { type: Directive, args: [{
                    // tslint:disable-next-line: directive-selector
                    selector: 'daff-radio[ngModel], daff-radio[formControl], daff-radio[formControlName]'
                },] }
    ];
    /** @nocollapse */
    DaffRadioControlValueAccessorDirective.ctorParameters = function () { return [
        { type: NgControl, decorators: [{ type: Optional }, { type: Self }] },
        { type: DaffRadioRegistry },
        { type: DaffRadioComponent }
    ]; };
    DaffRadioControlValueAccessorDirective.propDecorators = {
        value: [{ type: Input }],
        name: [{ type: Input }]
    };
    return DaffRadioControlValueAccessorDirective;
}());
if (false) {
    /** @type {?} */
    DaffRadioControlValueAccessorDirective.prototype._onChange;
    /** @type {?} */
    DaffRadioControlValueAccessorDirective.prototype._onTouched;
    /**
     * The value of the ControlValueAccessor
     * @type {?}
     */
    DaffRadioControlValueAccessorDirective.prototype.value;
    /**
     * The name of the ControlValueAccessor
     * @type {?}
     */
    DaffRadioControlValueAccessorDirective.prototype.name;
    /** @type {?} */
    DaffRadioControlValueAccessorDirective.prototype._control;
    /**
     * @type {?}
     * @private
     */
    DaffRadioControlValueAccessorDirective.prototype._registry;
    /**
     * @type {?}
     * @private
     */
    DaffRadioControlValueAccessorDirective.prototype._radio;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var DaffRadioModule = /** @class */ (function () {
    function DaffRadioModule() {
    }
    DaffRadioModule.decorators = [
        { type: NgModule, args: [{
                    exports: [
                        DaffRadioComponent,
                        DaffRadioSetComponent,
                        DaffRadioControlValueAccessorDirective,
                    ],
                    declarations: [
                        DaffRadioControlValueAccessorDirective,
                        DaffRadioComponent,
                        DaffRadioSetComponent
                    ],
                    imports: [
                        CommonModule
                    ],
                    providers: [
                        DaffRadioRegistry
                    ]
                },] }
    ];
    return DaffRadioModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var DaffAccordionComponent = /** @class */ (function () {
    function DaffAccordionComponent() {
    }
    DaffAccordionComponent.decorators = [
        { type: Component, args: [{
                    selector: 'daff-accordion',
                    template: "<ng-content select=\"daff-accordion-item\"></ng-content>",
                    styles: [":host{display:block;width:100%}"]
                }] }
    ];
    return DaffAccordionComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var daffAccordionAnimations = {
    openAccordion: trigger('openAccordion', [
        state('open', style({
            visibility: 'visible',
            opacity: '1',
            height: '*'
        })),
        state('void', style({
            visibility: 'hidden',
            overflow: 'hidden',
            opacity: '0',
            height: '0'
        })),
        transition('void <=> open', animate('150ms ease-in'))
    ])
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var getAnimationState = (/**
 * @param {?} open
 * @return {?}
 */
function (open) {
    if (open) {
        return 'open';
    }
    else {
        return 'void';
    }
});

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var DaffAccordionItemComponent = /** @class */ (function () {
    function DaffAccordionItemComponent() {
        /**
         * \@docs-private
         */
        this.faChevronDown = faChevronDown;
        /**
         * \@docs-private
         */
        this.faChevronUp = faChevronUp;
        /**
         * \@docs-private
         */
        this.class = true;
        /**
         * \@docs-private
         */
        this._open = false;
    }
    /**
     * @docs-private
     */
    /**
     * \@docs-private
     * @return {?}
     */
    DaffAccordionItemComponent.prototype.ngOnInit = /**
     * \@docs-private
     * @return {?}
     */
    function () {
        this._open = this.initiallyActive ? this.initiallyActive : this._open;
        this._animationState = getAnimationState(this._open);
    };
    /**
     * @return {?}
     */
    DaffAccordionItemComponent.prototype.toggleActive = /**
     * @return {?}
     */
    function () {
        this._open = !this._open;
        this._animationState = getAnimationState(this._open);
    };
    DaffAccordionItemComponent.decorators = [
        { type: Component, args: [{
                    selector: 'daff-accordion-item',
                    template: "<div class=\"daff-accordion-item__header\" (click)=\"toggleActive()\">\n  <ng-content select=\"[daffAccordionItemTitle]\"></ng-content>\n  <span [hidden]=\"_open\" daffSuffix>\n    <fa-icon [icon]=\"faChevronDown\"></fa-icon>\n  </span>\n  <span [hidden]=\"!_open\" daffSuffix>\n    <fa-icon [icon]=\"faChevronUp\"></fa-icon>\n  </span>\n</div>\n<div [@openAccordion]=\"_animationState\">\n  <ng-content></ng-content>\n</div>",
                    encapsulation: ViewEncapsulation.None,
                    animations: [
                        daffAccordionAnimations.openAccordion
                    ],
                    styles: [".daff-accordion-item{display:block;padding:15px 0;width:100%}@media (min-width:768px){.daff-accordion-item{padding:30px 0}}.daff-accordion-item__header{cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;display:flex;align-items:center;justify-content:space-between;width:100%}.daff-accordion-item__header .daff-suffix{margin:0 10px}.daff-accordion-item__title{font-weight:700;text-transform:uppercase;font-size:1rem;margin:0}.daff-accordion-item__content{padding-top:15px}@media (min-width:768px){.daff-accordion-item__content{padding-top:30px}}"]
                }] }
    ];
    DaffAccordionItemComponent.propDecorators = {
        class: [{ type: HostBinding, args: ['class.daff-accordion-item',] }],
        initiallyActive: [{ type: Input }]
    };
    return DaffAccordionItemComponent;
}());
if (false) {
    /**
     * \@docs-private
     * @type {?}
     */
    DaffAccordionItemComponent.prototype.faChevronDown;
    /**
     * \@docs-private
     * @type {?}
     */
    DaffAccordionItemComponent.prototype.faChevronUp;
    /**
     * \@docs-private
     * @type {?}
     */
    DaffAccordionItemComponent.prototype.class;
    /** @type {?} */
    DaffAccordionItemComponent.prototype.initiallyActive;
    /**
     * \@docs-private
     * @type {?}
     */
    DaffAccordionItemComponent.prototype._open;
    /**
     * \@docs-private
     * @type {?}
     */
    DaffAccordionItemComponent.prototype._animationState;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var DaffAccordionItemTitleDirective = /** @class */ (function () {
    function DaffAccordionItemTitleDirective() {
        /**
         * \@docs-private
         */
        this.class = true;
    }
    DaffAccordionItemTitleDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[daffAccordionItemTitle]',
                },] }
    ];
    DaffAccordionItemTitleDirective.propDecorators = {
        class: [{ type: HostBinding, args: ['class.daff-accordion-item__title',] }]
    };
    return DaffAccordionItemTitleDirective;
}());
if (false) {
    /**
     * \@docs-private
     * @type {?}
     */
    DaffAccordionItemTitleDirective.prototype.class;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var DaffAccordionItemContentDirective = /** @class */ (function () {
    function DaffAccordionItemContentDirective() {
        /**
         * \@docs-private
         */
        this.class = true;
    }
    DaffAccordionItemContentDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[daffAccordionItemContent]',
                },] }
    ];
    DaffAccordionItemContentDirective.propDecorators = {
        class: [{ type: HostBinding, args: ['class.daff-accordion-item__content',] }]
    };
    return DaffAccordionItemContentDirective;
}());
if (false) {
    /**
     * \@docs-private
     * @type {?}
     */
    DaffAccordionItemContentDirective.prototype.class;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var DaffAccordionModule = /** @class */ (function () {
    function DaffAccordionModule() {
    }
    DaffAccordionModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        CommonModule,
                        FontAwesomeModule,
                        DaffPrefixSuffixModule
                    ],
                    declarations: [
                        DaffAccordionComponent,
                        DaffAccordionItemComponent,
                        DaffAccordionItemTitleDirective,
                        DaffAccordionItemContentDirective
                    ],
                    exports: [
                        DaffAccordionComponent,
                        DaffAccordionItemComponent,
                        DaffAccordionItemTitleDirective,
                        DaffAccordionItemContentDirective
                    ]
                },] }
    ];
    return DaffAccordionModule;
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
 * A component for creating articles within your page.
 */
var DaffArticleComponent = /** @class */ (function () {
    function DaffArticleComponent() {
        /**
         * \@docs-private
         */
        this.class = true;
        /**
         * \@docs-private
         */
        this.role = 'article';
    }
    DaffArticleComponent.decorators = [
        { type: Component, args: [{
                    selector: 'daff-article',
                    template: '<ng-content></ng-content>',
                    encapsulation: ViewEncapsulation.None,
                    styles: [".daff-article{display:block}.daff-article__title{font-weight:700;font-size:2.25rem;line-height:1.1em;letter-spacing:-.5px}@media (min-width:768px){.daff-article__title{font-size:3rem}}.daff-article__lead{font-size:1.25rem;font-weight:400}.daff-article__lead code{font-size:1.25rem}.daff-article__meta{font-size:.75rem}.daff-article>h1,.daff-article>h2,.daff-article>h3,.daff-article>h4,.daff-article>h5,.daff-article>h6{margin-bottom:1rem}.daff-article>h2,.daff-article>h3,.daff-article>h4,.daff-article>h5,.daff-article>h6{margin-top:1.5rem}.daff-article>h1{font-weight:700;font-size:2.25rem;line-height:1.1em;letter-spacing:-.5px}@media (min-width:768px){.daff-article>h1{font-size:3rem}}.daff-article>h2{font-weight:700;font-size:1.75rem;line-height:1.1em;letter-spacing:0}@media (min-width:768px){.daff-article>h2{font-size:2.5rem}}.daff-article>h3{font-weight:700;font-size:1.5rem;line-height:1.1em;letter-spacing:0}@media (min-width:768px){.daff-article>h3{font-size:2rem}}.daff-article>h4{font-weight:700;font-size:1.25rem;line-height:1.1em;letter-spacing:0}@media (min-width:768px){.daff-article>h4{font-size:1.5rem}}.daff-article>h5{font-size:1.125rem}@media (min-width:768px){.daff-article>h5{font-size:1.25rem}}.daff-article>h6{font-size:1rem}@media (min-width:768px){.daff-article>h6{font-size:1.125rem}}.daff-article>ol,.daff-article>ul{padding-left:1rem}.daff-article>strong{font-weight:700}.daff-article>pre{display:block;border-radius:4px;font-size:.75rem;line-height:1.5em;margin:0;padding:1.5rem;overflow:auto}.daff-article>pre code{display:block;padding:0}.daff-article>code{border-radius:4px;font-size:.75rem;line-height:1.5em;padding:4px}.daff-article>hr{border:0;height:1px;margin:2rem 0}.daff-article>blockquote{font-size:1.25rem;margin:0;padding:1rem 1.5rem}.daff-article>blockquote cite{text-transform:uppercase;font-weight:700;display:block;font-size:.75rem;margin-top:16px}"]
                }] }
    ];
    DaffArticleComponent.propDecorators = {
        class: [{ type: HostBinding, args: ['class.daff-article',] }],
        role: [{ type: HostBinding, args: ['attr.role',] }]
    };
    return DaffArticleComponent;
}());
if (false) {
    /**
     * \@docs-private
     * @type {?}
     */
    DaffArticleComponent.prototype.class;
    /**
     * \@docs-private
     * @type {?}
     */
    DaffArticleComponent.prototype.role;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var DaffArticleTitleDirective = /** @class */ (function () {
    function DaffArticleTitleDirective() {
        /**
         * \@docs-private
         */
        this.class = true;
    }
    DaffArticleTitleDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[daffArticleTitle]'
                },] }
    ];
    DaffArticleTitleDirective.propDecorators = {
        class: [{ type: HostBinding, args: ['class.daff-article__title',] }]
    };
    return DaffArticleTitleDirective;
}());
if (false) {
    /**
     * \@docs-private
     * @type {?}
     */
    DaffArticleTitleDirective.prototype.class;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var DaffArticleLeadDirective = /** @class */ (function () {
    function DaffArticleLeadDirective() {
        /**
         * \@docs-private
         */
        this.class = true;
    }
    DaffArticleLeadDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[daffArticleLead]'
                },] }
    ];
    DaffArticleLeadDirective.propDecorators = {
        class: [{ type: HostBinding, args: ['class.daff-article__lead',] }]
    };
    return DaffArticleLeadDirective;
}());
if (false) {
    /**
     * \@docs-private
     * @type {?}
     */
    DaffArticleLeadDirective.prototype.class;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var DaffArticleMetaDirective = /** @class */ (function () {
    function DaffArticleMetaDirective() {
        /**
         * \@docs-private
         */
        this.class = true;
    }
    DaffArticleMetaDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[daffArticleMeta]'
                },] }
    ];
    DaffArticleMetaDirective.propDecorators = {
        class: [{ type: HostBinding, args: ['class.daff-article__meta',] }]
    };
    return DaffArticleMetaDirective;
}());
if (false) {
    /**
     * \@docs-private
     * @type {?}
     */
    DaffArticleMetaDirective.prototype.class;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var DaffArticleModule = /** @class */ (function () {
    function DaffArticleModule() {
    }
    DaffArticleModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        CommonModule
                    ],
                    declarations: [
                        DaffArticleComponent,
                        DaffArticleTitleDirective,
                        DaffArticleLeadDirective,
                        DaffArticleMetaDirective,
                    ],
                    exports: [
                        DaffArticleComponent,
                        DaffArticleTitleDirective,
                        DaffArticleLeadDirective,
                        DaffArticleMetaDirective
                    ]
                },] }
    ];
    return DaffArticleModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var animationDuration = '350ms';
/** @type {?} */
var backdropTransitionOut = 'cubic-bezier(0.4, 0.0, 1, 1)';
/** @type {?} */
var backdropTransitionIn = 'cubic-bezier(0.0, 0.0, 0.2, 1)';
/** @type {?} */
var daffBackdropAnimations = {
    fadeBackdrop: trigger('fadeBackdrop', [
        transition(':enter', [
            style({ opacity: 0 }),
            animate(animationDuration + ' ' + backdropTransitionIn, style({ opacity: 1 })),
        ]),
        transition(':leave', [
            animate(animationDuration + ' ' + backdropTransitionOut, style({ opacity: 0 }))
        ])
    ])
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var DaffBackdropComponent = /** @class */ (function () {
    function DaffBackdropComponent() {
        /**
         * Determines whether or not the backdrop is transparent.
         */
        // tslint:disable-next-line: no-inferrable-types
        this.transparent = false;
        /**
         * Boolean property that determines whether or not the
         * backdrop should fill up its containing window.
         */
        // tslint:disable-next-line: no-inferrable-types
        this.fullscreen = false;
        /**
         * Output event triggered when the backdrop is clicked.
         */
        this.backdropClicked = new EventEmitter();
    }
    /**
     * Animation hook for that controls the backdrops
     * entrance and fade animations.
     */
    /**
     * Animation hook for that controls the backdrops
     * entrance and fade animations.
     * @return {?}
     */
    DaffBackdropComponent.prototype.onBackdropClicked = /**
     * Animation hook for that controls the backdrops
     * entrance and fade animations.
     * @return {?}
     */
    function () {
        this.backdropClicked.emit();
    };
    DaffBackdropComponent.decorators = [
        { type: Component, args: [{
                    selector: 'daff-backdrop',
                    template: "<div class=\"daff-backdrop\" [class.daff-backdrop--fullscreen]=\"fullscreen\" [class.daff-backdrop--transparent]=\"transparent\"></div>\n",
                    animations: [
                        daffBackdropAnimations.fadeBackdrop
                    ],
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    styles: [":host{cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;display:block;-webkit-tap-highlight-color:transparent}.daff-backdrop{background:rgba(0,0,0,.3);height:100%;width:100%}.daff-backdrop--transparent{background:0 0}.daff-backdrop:active,.daff-backdrop:focus,.daff-backdrop:visited{outline:0}.daff-backdrop--fullscreen{position:absolute}"]
                }] }
    ];
    DaffBackdropComponent.propDecorators = {
        transparent: [{ type: Input }],
        fullscreen: [{ type: Input }],
        backdropClicked: [{ type: Output }],
        onBackdropClicked: [{ type: HostBinding, args: ['@fadeBackdrop',] }, { type: HostListener, args: ['click',] }]
    };
    return DaffBackdropComponent;
}());
if (false) {
    /**
     * Determines whether or not the backdrop is transparent.
     * @type {?}
     */
    DaffBackdropComponent.prototype.transparent;
    /**
     * Boolean property that determines whether or not the
     * backdrop should fill up its containing window.
     * @type {?}
     */
    DaffBackdropComponent.prototype.fullscreen;
    /**
     * Output event triggered when the backdrop is clicked.
     * @type {?}
     */
    DaffBackdropComponent.prototype.backdropClicked;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var DaffBackdropModule = /** @class */ (function () {
    function DaffBackdropModule() {
    }
    DaffBackdropModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        CommonModule
                    ],
                    declarations: [
                        DaffBackdropComponent
                    ],
                    exports: [
                        DaffBackdropComponent
                    ],
                    entryComponents: [
                        DaffBackdropComponent
                    ]
                },] }
    ];
    return DaffBackdropModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var DaffButtonSetComponent = /** @class */ (function () {
    function DaffButtonSetComponent() {
        /**
         * \@docs-private
         */
        this.class = true;
    }
    DaffButtonSetComponent.decorators = [
        { type: Component, args: [{
                    selector: 'daff-button-set',
                    template: '<ng-content></ng-content>',
                    encapsulation: ViewEncapsulation.None,
                    styles: [".daff-button-set{display:flex;flex-direction:column;flex-wrap:wrap}.daff-button-set>*{margin:0 0 5px}.daff-button-set>:last-child{margin:0}@media (min-width:480px){.daff-button-set{flex-direction:row}.daff-button-set>*{margin:0 5px 0 0}.daff-button-set>:last-child{margin:0}}"]
                }] }
    ];
    DaffButtonSetComponent.propDecorators = {
        class: [{ type: HostBinding, args: ['class.daff-button-set',] }]
    };
    return DaffButtonSetComponent;
}());
if (false) {
    /**
     * \@docs-private
     * @type {?}
     */
    DaffButtonSetComponent.prototype.class;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var DaffButtonSetModule = /** @class */ (function () {
    function DaffButtonSetModule() {
    }
    DaffButtonSetModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [
                        DaffButtonSetComponent
                    ],
                    exports: [
                        DaffButtonSetComponent
                    ]
                },] }
    ];
    return DaffButtonSetModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var DaffImageGalleryComponent = /** @class */ (function () {
    function DaffImageGalleryComponent() {
    }
    DaffImageGalleryComponent.decorators = [
        { type: Component, args: [{
                    selector: 'daff-image-gallery',
                    template: "<div class=\"daff-image-gallery\">\n  <div class=\"daff-image-gallery__active-image\">\n    <ng-content select=\"[daff-active-image]\"></ng-content>\n  </div>\n\n  <daff-image-list class=\"daff-image-gallery__image-list\">\n    <ng-content select=\"daff-gallery-image\"></ng-content>\n  </daff-image-list>\n</div>\n",
                    encapsulation: ViewEncapsulation.None,
                    styles: [".daff-image-gallery{display:-ms-grid;display:grid;flex-direction:column;grid-template-areas:'active-image' 'image-list';max-height:100%}@media (min-width:1024px){.daff-image-gallery{grid-template-areas:'image-list active-image';max-height:-webkit-min-content;max-height:-moz-min-content;max-height:min-content}}.daff-image-gallery__active-image{-ms-grid-row:1;-ms-grid-column:1;grid-area:active-image}.daff-image-gallery__active-image img{display:block;max-width:100%}.daff-image-gallery__image-list{-ms-grid-row:2;-ms-grid-column:1;grid-area:image-list;margin:5px 0 0;max-height:100%}@media (min-width:1024px){.daff-image-gallery__active-image{-ms-grid-row:1;-ms-grid-column:2}.daff-image-gallery__image-list{-ms-grid-row:1;-ms-grid-column:1;margin:0 25px 0 0;max-height:-webkit-fill-available}}.daff-image-gallery__daff-gallery-image img{display:block;opacity:.6;width:90px}.daff-image-gallery__daff-gallery-image--selected img{opacity:1}"]
                }] }
    ];
    return DaffImageGalleryComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var DaffGalleryImageComponent = /** @class */ (function () {
    function DaffGalleryImageComponent() {
    }
    DaffGalleryImageComponent.decorators = [
        { type: Component, args: [{
                    selector: 'daff-gallery-image',
                    template: "<div class=\"gallery-image__wrapper\">\n  <ng-content></ng-content>\n</div>",
                    host: {
                        'class': 'daff-image-gallery__daff-gallery-image',
                        '[class.daff-image-gallery__daff-gallery-image--selected]': 'selected'
                    }
                }] }
    ];
    DaffGalleryImageComponent.propDecorators = {
        selected: [{ type: Input }]
    };
    return DaffGalleryImageComponent;
}());
if (false) {
    /** @type {?} */
    DaffGalleryImageComponent.prototype.selected;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var DaffImageListComponent = /** @class */ (function () {
    function DaffImageListComponent() {
        /**
         * \@docs-private
         */
        this.class = true;
    }
    DaffImageListComponent.decorators = [
        { type: Component, args: [{
                    selector: 'daff-image-list',
                    template: '<ng-content></ng-content>',
                    encapsulation: ViewEncapsulation.None,
                    styles: [".daff-image-list{overflow:scroll;white-space:nowrap}.daff-image-list>*{cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;display:inline-block;margin:0 5px 0 0}@media (min-width:1024px){.daff-image-list>*{display:block;margin:0 0 5px}}.daff-image-list>:last-child{margin:0}::-webkit-scrollbar{height:2px;width:2px}::-webkit-scrollbar-thumb{box-shadow:inset 0 0 3px #b6b6b6;-webkit-box-shadow:inset 0 0 3px #b6b6b6}"]
                }] }
    ];
    DaffImageListComponent.propDecorators = {
        class: [{ type: HostBinding, args: ['class.daff-image-list',] }]
    };
    return DaffImageListComponent;
}());
if (false) {
    /**
     * \@docs-private
     * @type {?}
     */
    DaffImageListComponent.prototype.class;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var DaffImageListModule = /** @class */ (function () {
    function DaffImageListModule() {
    }
    DaffImageListModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        CommonModule
                    ],
                    declarations: [
                        DaffImageListComponent
                    ],
                    exports: [
                        DaffImageListComponent
                    ]
                },] }
    ];
    return DaffImageListModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var DaffImageGalleryModule = /** @class */ (function () {
    function DaffImageGalleryModule() {
    }
    DaffImageGalleryModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        CommonModule,
                        DaffImageListModule
                    ],
                    declarations: [
                        DaffImageGalleryComponent,
                        DaffGalleryImageComponent
                    ],
                    exports: [
                        DaffImageGalleryComponent,
                        DaffGalleryImageComponent
                    ]
                },] }
    ];
    return DaffImageGalleryModule;
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
 * DaffLinkSetComponent is a component for displaying a two or more links.
 */
var DaffLinkSetComponent = /** @class */ (function () {
    function DaffLinkSetComponent() {
        /**
         * \@docs-private
         */
        this.class = true;
    }
    DaffLinkSetComponent.decorators = [
        { type: Component, args: [{
                    selector: 'daff-link-set',
                    template: '<ng-content></ng-content>',
                    encapsulation: ViewEncapsulation.None,
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    styles: [".daff-link-set{display:block;margin:0;padding:0}.daff-link-set__heading{font-weight:700;display:block;font-size:1rem;line-height:1em;margin-bottom:15px;text-transform:uppercase}.daff-link-set__subheading{display:block;font-size:1rem;line-height:1.5em}.daff-link-set__item{cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;color:currentColor;display:block;font-size:1em;line-height:1.5em;text-decoration:none;transition:color 150ms}.daff-link-set__item:hover{text-decoration:underline}.daff-link-set__item[disabled]{cursor:not-allowed}.daff-link-set .daff-link-set{margin-left:10px}"]
                }] }
    ];
    DaffLinkSetComponent.propDecorators = {
        class: [{ type: HostBinding, args: ['class.daff-link-set',] }]
    };
    return DaffLinkSetComponent;
}());
if (false) {
    /**
     * \@docs-private
     * @type {?}
     */
    DaffLinkSetComponent.prototype.class;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * A directive for adding a subheading to a daff-link-set.
 */
var DaffLinkSetSubheadingDirective = /** @class */ (function () {
    function DaffLinkSetSubheadingDirective() {
        /**
         * \@docs-private
         */
        this.class = true;
    }
    DaffLinkSetSubheadingDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[daffLinkSetSubheading]'
                },] }
    ];
    DaffLinkSetSubheadingDirective.propDecorators = {
        class: [{ type: HostBinding, args: ['class.daff-link-set__subheading',] }]
    };
    return DaffLinkSetSubheadingDirective;
}());
if (false) {
    /**
     * \@docs-private
     * @type {?}
     */
    DaffLinkSetSubheadingDirective.prototype.class;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * A directive for adding a heading to a daff-link-set.
 */
var DaffLinkSetHeadingDirective = /** @class */ (function () {
    function DaffLinkSetHeadingDirective() {
        /**
         * \@docs-private
         */
        this.class = true;
    }
    DaffLinkSetHeadingDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[daffLinkSetHeading]'
                },] }
    ];
    DaffLinkSetHeadingDirective.propDecorators = {
        class: [{ type: HostBinding, args: ['class.daff-link-set__heading',] }]
    };
    return DaffLinkSetHeadingDirective;
}());
if (false) {
    /**
     * \@docs-private
     * @type {?}
     */
    DaffLinkSetHeadingDirective.prototype.class;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var DaffLinkSetItemComponent = /** @class */ (function () {
    function DaffLinkSetItemComponent() {
        /**
         * \@docs-private
         */
        this.class = true;
    }
    DaffLinkSetItemComponent.decorators = [
        { type: Component, args: [{
                    // tslint:disable-next-line: component-selector
                    selector: 'a[daff-link-set-item]',
                    template: '<ng-content></ng-content>',
                    encapsulation: ViewEncapsulation.None,
                    changeDetection: ChangeDetectionStrategy.OnPush
                }] }
    ];
    DaffLinkSetItemComponent.propDecorators = {
        class: [{ type: HostBinding, args: ['class.daff-link-set__item',] }]
    };
    return DaffLinkSetItemComponent;
}());
if (false) {
    /**
     * \@docs-private
     * @type {?}
     */
    DaffLinkSetItemComponent.prototype.class;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var DaffLinkSetModule = /** @class */ (function () {
    function DaffLinkSetModule() {
    }
    DaffLinkSetModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        CommonModule
                    ],
                    exports: [
                        DaffLinkSetComponent,
                        DaffLinkSetHeadingDirective,
                        DaffLinkSetSubheadingDirective,
                        DaffLinkSetItemComponent
                    ],
                    declarations: [
                        DaffLinkSetComponent,
                        DaffLinkSetHeadingDirective,
                        DaffLinkSetSubheadingDirective,
                        DaffLinkSetItemComponent
                    ]
                },] }
    ];
    return DaffLinkSetModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @enum {string} */
var DaffListModeEnum = {
    Multiline: 'multi-line',
    Link: 'link',
    Navigation: 'navigation',
};
/** @enum {string} */
var DaffListTypeEnum = {
    Default: 'daff-list',
    Nav: 'daff-nav-list',
};
var DaffListComponent = /** @class */ (function () {
    function DaffListComponent(elementRef) {
        this.elementRef = elementRef;
    }
    Object.defineProperty(DaffListComponent.prototype, "list", {
        /**
         * @docs-private
         */
        get: /**
         * \@docs-private
         * @return {?}
         */
        function () {
            return this.listType === DaffListTypeEnum.Default;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DaffListComponent.prototype, "multiline", {
        /**
           * @docs-private
         * @deprecated
         * */
        get: /**
         * \@docs-private
         * @deprecated
         *
         * @return {?}
         */
        function () {
            return this.mode === DaffListModeEnum.Multiline;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DaffListComponent.prototype, "link", {
        /**
           * @docs-private
         * @deprecated
         * */
        get: /**
         * \@docs-private
         * @deprecated
         *
         * @return {?}
         */
        function () {
            return this.mode === DaffListModeEnum.Link;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DaffListComponent.prototype, "navigation", {
        /**
           * @docs-private
         * @deprecated
         * */
        get: /**
         * \@docs-private
         * @deprecated
         *
         * @return {?}
         */
        function () {
            return this.mode === DaffListModeEnum.Navigation;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DaffListComponent.prototype, "listType", {
        /**
         * @docs-private
         */
        get: /**
         * \@docs-private
         * @return {?}
         */
        function () {
            return this._getHostElement().localName;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DaffListComponent.prototype, "nav", {
        /**
         * @docs-private
         */
        get: /**
         * \@docs-private
         * @return {?}
         */
        function () {
            return this.listType === DaffListTypeEnum.Nav;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DaffListComponent.prototype, "role", {
        /**
         * Sets the role for a `<daff-nav-list>` to navigation.
           * @docs-private
         */
        get: /**
         * Sets the role for a `<daff-nav-list>` to navigation.
         * \@docs-private
         * @return {?}
         */
        function () {
            return this.listType === DaffListTypeEnum.Nav ? 'navigation' : 'list';
        },
        enumerable: true,
        configurable: true
    });
    ;
    /**
     * @private
     * @return {?}
     */
    DaffListComponent.prototype._getHostElement = /**
     * @private
     * @return {?}
     */
    function () {
        return this.elementRef.nativeElement;
    };
    DaffListComponent.decorators = [
        { type: Component, args: [{
                    selector: 'daff-list' + ',' +
                        'daff-nav-list',
                    template: '<ng-content></ng-content>',
                    encapsulation: ViewEncapsulation.None,
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    styles: [".daff-list{display:block;margin:0;padding:0}.daff-list .daff-list-item{display:flex;padding:12px 16px}.daff-list .daff-list-item__content{flex-grow:1}.daff-list .daff-list-item__content :nth-child(1){font-weight:700;font-size:1rem;line-height:1.5em;margin:0;padding:0}.daff-list .daff-list-item__content :nth-child(n+2){font-size:1rem;margin:0;padding:0}.daff-list .daff-list-item .daff-prefix,.daff-list .daff-list-item .daff-suffix{display:flex;align-items:center}.daff-list .daff-list-item .daff-prefix{margin-right:24px}.daff-list .daff-list-item .daff-suffix{margin-left:24px}.daff-list__subheader{font-weight:700;text-transform:uppercase;font-size:1rem;padding:0 0 25px}.daff-list--link a,.daff-list--navigation a{text-decoration:none}.daff-list--link a:hover,.daff-list--navigation a:hover{color:#474747}.daff-list--multi-line .daff-list-item{padding:15px 0}.daff-list--multi-line .daff-list-item:first-of-type{padding:0 0 15px}.daff-list--multi-line .daff-list-item:last-of-type{padding:15px 0 0}.daff-list--multi-line .daff-list-item__content :nth-child(1){font-weight:700;font-size:1rem;line-height:1.5rem;margin:0 0 10px;padding:0}.daff-list--multi-line .daff-list-item__content :nth-child(n+2){margin:0;padding:0}.daff-nav-list{display:block;margin:0;padding:0}.daff-nav-list .daff-list-item{display:flex;padding:12px 16px;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;outline:0;text-decoration:none}.daff-nav-list .daff-list-item__content{flex-grow:1}.daff-nav-list .daff-list-item__content :nth-child(1){font-weight:700;font-size:1rem;line-height:1.5em;margin:0;padding:0}.daff-nav-list .daff-list-item__content :nth-child(n+2){font-size:1rem;margin:0;padding:0}.daff-nav-list .daff-list-item .daff-prefix,.daff-nav-list .daff-list-item .daff-suffix{display:flex;align-items:center}.daff-nav-list .daff-list-item .daff-prefix{margin-right:24px}.daff-nav-list .daff-list-item .daff-suffix{margin-left:24px}"]
                }] }
    ];
    /** @nocollapse */
    DaffListComponent.ctorParameters = function () { return [
        { type: ElementRef }
    ]; };
    DaffListComponent.propDecorators = {
        mode: [{ type: Input }],
        list: [{ type: HostBinding, args: ['class.daff-list',] }],
        multiline: [{ type: HostBinding, args: ['class.daff-list--multi-line',] }],
        link: [{ type: HostBinding, args: ['class.daff-list--link',] }],
        navigation: [{ type: HostBinding, args: ['class.daff-list--navigation',] }],
        nav: [{ type: HostBinding, args: ['class.daff-nav-list',] }],
        role: [{ type: HostBinding, args: ['attr.role',] }]
    };
    return DaffListComponent;
}());
if (false) {
    /**
     * @deprecated
     *
     * @type {?}
     */
    DaffListComponent.prototype.mode;
    /**
     * @type {?}
     * @private
     */
    DaffListComponent.prototype.elementRef;
    /* Skipping unhandled member: ;*/
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @deprecated
 */
var DaffListSubheaderDirective = /** @class */ (function () {
    function DaffListSubheaderDirective() {
        /**
         * \@docs-private
         */
        this.class = true;
    }
    DaffListSubheaderDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[daffListSubheader]',
                },] }
    ];
    DaffListSubheaderDirective.propDecorators = {
        class: [{ type: HostBinding, args: ['class.daff-list__subheader',] }]
    };
    return DaffListSubheaderDirective;
}());
if (false) {
    /**
     * \@docs-private
     * @type {?}
     */
    DaffListSubheaderDirective.prototype.class;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var DaffListItemComponent = /** @class */ (function () {
    function DaffListItemComponent(elementRef) {
        this.elementRef = elementRef;
        /**
         * \@docs-private
         */
        this.class = true;
    }
    Object.defineProperty(DaffListItemComponent.prototype, "role", {
        /**
         * Sets the role for a regular `<daff-list-item>` to listitem.
           * @docs-private
         */
        get: /**
         * Sets the role for a regular `<daff-list-item>` to listitem.
         * \@docs-private
         * @return {?}
         */
        function () {
            return this._isAnchor() ? null : 'listitem';
        },
        enumerable: true,
        configurable: true
    });
    ;
    /**
     * @private
     * @return {?}
     */
    DaffListItemComponent.prototype._getHostElement = /**
     * @private
     * @return {?}
     */
    function () {
        return this.elementRef.nativeElement;
    };
    /** Gets whether a list item has one of the given attributes. */
    /**
     * Gets whether a list item has one of the given attributes.
     * @private
     * @return {?}
     */
    DaffListItemComponent.prototype._isAnchor = /**
     * Gets whether a list item has one of the given attributes.
     * @private
     * @return {?}
     */
    function () {
        return this.elementRef.nativeElement.localName === 'a';
    };
    DaffListItemComponent.decorators = [
        { type: Component, args: [{
                    selector: 'daff-list-item' + ',' +
                        'a[daff-list-item]',
                    template: "<ng-container *ngIf=\"_prefix\">\n  <ng-content select=\"[daffPrefix]\"></ng-content>\n</ng-container>\n<div class=\"daff-list-item__content\">\n  <ng-content></ng-content>\n</div>\n<ng-container *ngIf=\"_suffix\">\n  <ng-content select=\"[daffSuffix]\"></ng-content>\n</ng-container>",
                    changeDetection: ChangeDetectionStrategy.OnPush
                }] }
    ];
    /** @nocollapse */
    DaffListItemComponent.ctorParameters = function () { return [
        { type: ElementRef }
    ]; };
    DaffListItemComponent.propDecorators = {
        class: [{ type: HostBinding, args: ['class.daff-list-item',] }],
        _prefix: [{ type: ContentChild, args: [DaffPrefixDirective, { static: false },] }],
        _suffix: [{ type: ContentChild, args: [DaffSuffixDirective, { static: false },] }],
        role: [{ type: HostBinding, args: ['attr.role',] }]
    };
    return DaffListItemComponent;
}());
if (false) {
    /**
     * \@docs-private
     * @type {?}
     */
    DaffListItemComponent.prototype.class;
    /**
     * \@docs-private
     * @type {?}
     */
    DaffListItemComponent.prototype._prefix;
    /**
     * \@docs-private
     * @type {?}
     */
    DaffListItemComponent.prototype._suffix;
    /**
     * @type {?}
     * @private
     */
    DaffListItemComponent.prototype.elementRef;
    /* Skipping unhandled member: ;*/
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var DaffListModule = /** @class */ (function () {
    function DaffListModule() {
    }
    DaffListModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        CommonModule,
                        DaffPrefixSuffixModule
                    ],
                    declarations: [
                        DaffListComponent,
                        DaffListSubheaderDirective,
                        DaffListItemComponent
                    ],
                    exports: [
                        DaffListComponent,
                        DaffListSubheaderDirective,
                        DaffListItemComponent,
                        DaffPrefixSuffixModule
                    ]
                },] }
    ];
    return DaffListModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var daffFadeAnimations = {
    fade: trigger('fade', [
        state('open', style({ opacity: 1, })),
        state('closed', style({ opacity: 0 })),
        transition('open <=> closed', animate('400ms cubic-bezier(0.25, 0.8, 0.25, 1)')),
    ]),
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var getAnimationState$1 = (/**
 * @param {?} open
 * @return {?}
 */
function (open) {
    return open ? 'open' : 'closed';
});

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var DaffModalComponent = /** @class */ (function () {
    function DaffModalComponent() {
        /**
         * Dictates whether or not a modal is open or closed.
         */
        this.open = false;
        /**
         * Event fired when the close animation is completed.
         */
        this.animationCompleted = new EventEmitter();
        /**
         * Event fired when the close animation is completed.
         */
        this.closedAnimationCompleted = new EventEmitter();
        /**
         * Event fired when the backdrop is clicked
         * This is often used to close the modal
         */
        this.hide = new EventEmitter();
        /**
         * Hostbinding to set the default modal class on the host element
         * \@docs-private
         */
        this.modalClass = true;
    }
    /**
     * Helper method to attach portable content to modal
     */
    /**
     * Helper method to attach portable content to modal
     * @param {?} portal
     * @return {?}
     */
    DaffModalComponent.prototype.attachContent = /**
     * Helper method to attach portable content to modal
     * @param {?} portal
     * @return {?}
     */
    function (portal) {
        this._portalOutlet.attachComponentPortal(portal);
    };
    Object.defineProperty(DaffModalComponent.prototype, "fadeState", {
        /**
         * Animation hook that controls the entrance and exit animations
         * of the modal
         */
        get: /**
         * Animation hook that controls the entrance and exit animations
         * of the modal
         * @return {?}
         */
        function () {
            return getAnimationState$1(this.open);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Animation event that can used to hook into when
     * animations are fully completed. We use this in the DaffModalService
     * to determine when to actually remove the dynamically rendered element from the DOM
     * so that the animation does not clip as the element is removed.
     */
    /**
     * Animation event that can used to hook into when
     * animations are fully completed. We use this in the DaffModalService
     * to determine when to actually remove the dynamically rendered element from the DOM
     * so that the animation does not clip as the element is removed.
     * @param {?} e
     * @return {?}
     */
    DaffModalComponent.prototype.animationDone = /**
     * Animation event that can used to hook into when
     * animations are fully completed. We use this in the DaffModalService
     * to determine when to actually remove the dynamically rendered element from the DOM
     * so that the animation does not clip as the element is removed.
     * @param {?} e
     * @return {?}
     */
    function (e) {
        this.animationCompleted.emit(e);
        if (e.toState === 'closed') {
            this.closedAnimationCompleted.emit(e);
        }
    };
    DaffModalComponent.decorators = [
        { type: Component, args: [{
                    selector: 'daff-modal',
                    template: "<ng-template cdkPortalOutlet></ng-template>\n",
                    animations: [daffFadeAnimations.fade],
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    styles: [":host{display:block;border-radius:4px;height:100%;max-width:80vw;overflow:hidden;padding:24px;z-index:3}@media (min-width:480px){:host{height:auto}}"]
                }] }
    ];
    DaffModalComponent.propDecorators = {
        open: [{ type: Input }],
        _portalOutlet: [{ type: ViewChild, args: [CdkPortalOutlet, { static: true },] }],
        modalClass: [{ type: HostBinding, args: ['class.daff-modal',] }],
        fadeState: [{ type: HostBinding, args: ['@fade',] }],
        animationDone: [{ type: HostListener, args: ['@fade.done', ['$event'],] }]
    };
    return DaffModalComponent;
}());
if (false) {
    /**
     * Dictates whether or not a modal is open or closed.
     * @type {?}
     */
    DaffModalComponent.prototype.open;
    /**
     * The CDK Portal outlet used to portal content into the modal.
     * @type {?}
     * @private
     */
    DaffModalComponent.prototype._portalOutlet;
    /**
     * Event fired when the close animation is completed.
     * @type {?}
     */
    DaffModalComponent.prototype.animationCompleted;
    /**
     * Event fired when the close animation is completed.
     * @type {?}
     */
    DaffModalComponent.prototype.closedAnimationCompleted;
    /**
     * Event fired when the backdrop is clicked
     * This is often used to close the modal
     * @type {?}
     */
    DaffModalComponent.prototype.hide;
    /**
     * Hostbinding to set the default modal class on the host element
     * \@docs-private
     * @type {?}
     */
    DaffModalComponent.prototype.modalClass;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var DaffModalHeaderComponent = /** @class */ (function () {
    function DaffModalHeaderComponent() {
        /**
         * \@docs-private
         */
        this.class = true;
    }
    DaffModalHeaderComponent.decorators = [
        { type: Component, args: [{
                    selector: 'daff-modal-header',
                    template: '<ng-content></ng-content>',
                    encapsulation: ViewEncapsulation.None,
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    styles: [":host{display:block}.daff-modal-header{display:flex;align-items:center;justify-content:space-between;margin-bottom:24px}.daff-modal-header .daff-modal-title{font-weight:700;font-size:1.25rem;margin:0;padding:0}@media (min-width:480px){.daff-modal-header .daff-modal-title{font-size:1.5rem}}"]
                }] }
    ];
    DaffModalHeaderComponent.propDecorators = {
        class: [{ type: HostBinding, args: ['class.daff-modal-header',] }]
    };
    return DaffModalHeaderComponent;
}());
if (false) {
    /**
     * \@docs-private
     * @type {?}
     */
    DaffModalHeaderComponent.prototype.class;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var DaffModalTitleDirective = /** @class */ (function () {
    function DaffModalTitleDirective() {
        /**
         * \@docs-private
         */
        this.class = true;
    }
    DaffModalTitleDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[daffModalTitle]'
                },] }
    ];
    DaffModalTitleDirective.propDecorators = {
        class: [{ type: HostBinding, args: ['class.daff-modal-title',] }]
    };
    return DaffModalTitleDirective;
}());
if (false) {
    /**
     * \@docs-private
     * @type {?}
     */
    DaffModalTitleDirective.prototype.class;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var DaffModalContentComponent = /** @class */ (function () {
    function DaffModalContentComponent() {
    }
    DaffModalContentComponent.decorators = [
        { type: Component, args: [{
                    selector: 'daff-modal-content',
                    template: '<ng-content></ng-content>',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    styles: [":host{display:block;margin:0 -24px;max-height:60vh;overflow:auto;padding:0 24px}"]
                }] }
    ];
    return DaffModalContentComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var DaffModalActionsComponent = /** @class */ (function () {
    function DaffModalActionsComponent() {
    }
    DaffModalActionsComponent.decorators = [
        { type: Component, args: [{
                    selector: 'daff-modal-actions',
                    template: '<ng-content></ng-content>',
                    styles: [":host{display:block;padding-top:24px}"]
                }] }
    ];
    return DaffModalActionsComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var DaffModalModule = /** @class */ (function () {
    function DaffModalModule() {
    }
    DaffModalModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        CommonModule,
                        PortalModule,
                        OverlayModule,
                        DaffBackdropModule
                    ],
                    exports: [
                        DaffModalHeaderComponent,
                        DaffModalTitleDirective,
                        DaffModalContentComponent,
                        DaffModalActionsComponent
                    ],
                    declarations: [
                        DaffModalComponent,
                        DaffModalHeaderComponent,
                        DaffModalTitleDirective,
                        DaffModalContentComponent,
                        DaffModalActionsComponent
                    ],
                    entryComponents: [
                        DaffModalComponent
                    ]
                },] }
    ];
    return DaffModalModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var DaffModalService = /** @class */ (function () {
    function DaffModalService(overlay) {
        this.overlay = overlay;
        this._modals = [];
        this.defaultConfiguration = {};
    }
    /**
     * @private
     * @param {?} overlayRef
     * @return {?}
     */
    DaffModalService.prototype._attachModal = /**
     * @private
     * @param {?} overlayRef
     * @return {?}
     */
    function (overlayRef) {
        /** @type {?} */
        var modal = overlayRef.attach(new ComponentPortal(DaffModalComponent));
        modal.instance.open = true;
        return modal;
    };
    /**
     * @private
     * @param {?} component
     * @param {?} modal
     * @return {?}
     */
    DaffModalService.prototype._attachModalContent = /**
     * @private
     * @param {?} component
     * @param {?} modal
     * @return {?}
     */
    function (component, modal) {
        modal.instance.attachContent(new ComponentPortal(component));
    };
    /**
     * @private
     * @return {?}
     */
    DaffModalService.prototype._createOverlayRef = /**
     * @private
     * @return {?}
     */
    function () {
        return this.overlay.create({
            hasBackdrop: true,
            positionStrategy: new GlobalPositionStrategy()
                .centerHorizontally()
                .centerVertically(),
            scrollStrategy: this.overlay.scrollStrategies.block()
        });
    };
    /**
     * @private
     * @param {?} modal
     * @return {?}
     */
    DaffModalService.prototype._removeModal = /**
     * @private
     * @param {?} modal
     * @return {?}
     */
    function (modal) {
        /** @type {?} */
        var index = this._modals.indexOf(modal);
        if (index === -1) {
            throw new Error('The Modal that you are trying to remove does not exist.');
        }
        modal.overlay.dispose();
        this._modals = this._modals.filter((/**
         * @param {?} m
         * @return {?}
         */
        function (m) { return m !== modal; }));
    };
    /**
     * @param {?} component
     * @param {?=} configuration
     * @return {?}
     */
    DaffModalService.prototype.open = /**
     * @param {?} component
     * @param {?=} configuration
     * @return {?}
     */
    function (component, configuration) {
        var _this = this;
        /** @type {?} */
        var config = __assign({}, this.defaultConfiguration, configuration);
        /** @type {?} */
        var _ref = this._createOverlayRef();
        /** @type {?} */
        var _modal = this._attachModal(_ref);
        /** @type {?} */
        var _attachedModal = this._attachModalContent(component, _modal);
        /** @type {?} */
        var modal = {
            modal: _modal,
            overlay: _ref,
        };
        this._modals.push(modal);
        _ref
            .backdropClick()
            .subscribe((/**
         * @return {?}
         */
        function () {
            return config.onBackdropClicked
                ? config.onBackdropClicked()
                : _this.close(modal);
        }));
        return modal;
    };
    /**
     * @param {?} modal
     * @return {?}
     */
    DaffModalService.prototype.close = /**
     * @param {?} modal
     * @return {?}
     */
    function (modal) {
        var _this = this;
        modal.modal.instance.open = false;
        modal.overlay.detachBackdrop();
        modal.modal.instance.closedAnimationCompleted.subscribe((/**
         * @param {?} e
         * @return {?}
         */
        function (e) { return _this._removeModal(modal); }));
    };
    DaffModalService.decorators = [
        { type: Injectable, args: [{
                    providedIn: DaffModalModule,
                },] }
    ];
    /** @nocollapse */
    DaffModalService.ctorParameters = function () { return [
        { type: Overlay }
    ]; };
    /** @nocollapse */ DaffModalService.ngInjectableDef = ɵɵdefineInjectable({ factory: function DaffModalService_Factory() { return new DaffModalService(ɵɵinject(Overlay)); }, token: DaffModalService, providedIn: DaffModalModule });
    return DaffModalService;
}());
if (false) {
    /**
     * @type {?}
     * @private
     */
    DaffModalService.prototype._modals;
    /**
     * @type {?}
     * @private
     */
    DaffModalService.prototype.defaultConfiguration;
    /**
     * @type {?}
     * @private
     */
    DaffModalService.prototype.overlay;
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
 * An _elementRef is needed for the Colorable mixin
 */
var /**
 * An _elementRef is needed for the Colorable mixin
 */
DaffNavbarBase = /** @class */ (function () {
    function DaffNavbarBase(_elementRef, _renderer) {
        this._elementRef = _elementRef;
        this._renderer = _renderer;
    }
    return DaffNavbarBase;
}());
if (false) {
    /** @type {?} */
    DaffNavbarBase.prototype._elementRef;
    /** @type {?} */
    DaffNavbarBase.prototype._renderer;
}
/** @type {?} */
var _daffNavbarBase = daffColorMixin(DaffNavbarBase);
var DaffNavbarComponent = /** @class */ (function (_super) {
    __extends(DaffNavbarComponent, _super);
    function DaffNavbarComponent(elementRef, renderer) {
        var _this = _super.call(this, elementRef, renderer) || this;
        _this.elementRef = elementRef;
        _this.renderer = renderer;
        _this.shadowed = false;
        /**
         * \@docs-private
         */
        _this.hostClass = true;
        return _this;
    }
    Object.defineProperty(DaffNavbarComponent.prototype, "shadowClass", {
        /**
         * @docs-private
         */
        get: /**
         * \@docs-private
         * @return {?}
         */
        function () {
            return this.shadowed;
        },
        enumerable: true,
        configurable: true
    });
    ;
    DaffNavbarComponent.decorators = [
        { type: Component, args: [{
                    selector: 'daff-navbar',
                    template: '<ng-content></ng-content>',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    styles: [":host{align-items:center;display:flex;height:70px;padding:0 15px;width:100%}"]
                }] }
    ];
    /** @nocollapse */
    DaffNavbarComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: Renderer2 }
    ]; };
    DaffNavbarComponent.propDecorators = {
        color: [{ type: Input }],
        shadowed: [{ type: Input }],
        shadowClass: [{ type: HostBinding, args: ['class.daff-navbar--shadowed',] }],
        hostClass: [{ type: HostBinding, args: ['class.daff-navbar',] }]
    };
    return DaffNavbarComponent;
}(_daffNavbarBase));
if (false) {
    /**
     * The color of the navbar
     * @type {?}
     */
    DaffNavbarComponent.prototype.color;
    /** @type {?} */
    DaffNavbarComponent.prototype.shadowed;
    /**
     * \@docs-private
     * @type {?}
     */
    DaffNavbarComponent.prototype.hostClass;
    /**
     * @type {?}
     * @private
     */
    DaffNavbarComponent.prototype.elementRef;
    /**
     * @type {?}
     * @private
     */
    DaffNavbarComponent.prototype.renderer;
    /* Skipping unhandled member: ;*/
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var DaffNavbarModule = /** @class */ (function () {
    function DaffNavbarModule() {
    }
    DaffNavbarModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [
                        DaffNavbarComponent
                    ],
                    exports: [
                        DaffNavbarComponent
                    ]
                },] }
    ];
    return DaffNavbarModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var DaffPaginatorNumberOfPagesErrorMessage = 'The numberOfPages in the daff-paginator must not be less than 1';
/** @type {?} */
var DaffPaginatorPageOutOfRangeErrorMessage = 'The numberOfPages in the daff-paginator should not be less than the currentPage';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * An _elementRef and an instance of renderer2 are needed for the Colorable mixin
 */
var /**
 * An _elementRef and an instance of renderer2 are needed for the Colorable mixin
 */
DaffPaginatorBase = /** @class */ (function () {
    function DaffPaginatorBase(_elementRef, _renderer) {
        this._elementRef = _elementRef;
        this._renderer = _renderer;
    }
    return DaffPaginatorBase;
}());
if (false) {
    /** @type {?} */
    DaffPaginatorBase.prototype._elementRef;
    /** @type {?} */
    DaffPaginatorBase.prototype._renderer;
}
/** @type {?} */
var _daffPaginatorBase = daffColorMixin(DaffPaginatorBase);
/** @type {?} */
var visiblePageRange = 2;
var DaffPaginatorComponent = /** @class */ (function (_super) {
    __extends(DaffPaginatorComponent, _super);
    function DaffPaginatorComponent(elementRef, renderer) {
        var _this = _super.call(this, elementRef, renderer) || this;
        _this.elementRef = elementRef;
        _this.renderer = renderer;
        /**
         * \@docs-private
         */
        _this.class = true;
        /**
         * \@docs-private
         */
        _this.role = 'navigation';
        /**
         * \@docs-private
         */
        _this.faChevronRight = faChevronRight;
        /**
         * \@docs-private
         */
        _this.faChevronLeft = faChevronLeft;
        /**
         * Emits when the current page changes with the new current page.
         */
        _this.notifyPageChange = new EventEmitter();
        /** @type {?} */
        var ariaLabel = elementRef.nativeElement.attributes['aria-label'];
        _this._paginatorId = ariaLabel ? ariaLabel.nodeValue : null;
        return _this;
    }
    /**
     * @docs-private
     */
    /**
     * \@docs-private
     * @return {?}
     */
    DaffPaginatorComponent.prototype.ngOnChanges = /**
     * \@docs-private
     * @return {?}
     */
    function () {
        if (this.numberOfPages < 1) {
            throw new Error(DaffPaginatorNumberOfPagesErrorMessage);
        }
        else if (this.numberOfPages < this.currentPage) {
            throw new Error(DaffPaginatorPageOutOfRangeErrorMessage);
        }
        this._numberOfPagesArray = this.numberOfPages < 2 ? [] : Array(this.numberOfPages - 2).fill(this.numberOfPages - 2).map((/**
         * @param {?} x
         * @param {?} i
         * @return {?}
         */
        function (x, i) { return i + 2; }));
    };
    /**
     * Emits the previous page number through notifyPageChange Output.
       * @docs-private
     */
    /**
     * Emits the previous page number through notifyPageChange Output.
     * \@docs-private
     * @return {?}
     */
    DaffPaginatorComponent.prototype._onNotifyPrevPageChange = /**
     * Emits the previous page number through notifyPageChange Output.
     * \@docs-private
     * @return {?}
     */
    function () {
        this.notifyPageChange.emit(this.currentPage - 1);
    };
    /**
     * Emits the next page number through notifyPageChange Output.
       * @docs-private
     */
    /**
     * Emits the next page number through notifyPageChange Output.
     * \@docs-private
     * @return {?}
     */
    DaffPaginatorComponent.prototype._onNotifyNextPageChange = /**
     * Emits the next page number through notifyPageChange Output.
     * \@docs-private
     * @return {?}
     */
    function () {
        this.notifyPageChange.emit(this.currentPage + 1);
    };
    /**
     * Emits a pageNumber to notifyPageChange Output.
       * @docs-private
     * @param pageNumber a page number
     */
    /**
     * Emits a pageNumber to notifyPageChange Output.
     * \@docs-private
     * @param {?} pageNumber a page number
     * @return {?}
     */
    DaffPaginatorComponent.prototype._onNotifyPageChange = /**
     * Emits a pageNumber to notifyPageChange Output.
     * \@docs-private
     * @param {?} pageNumber a page number
     * @return {?}
     */
    function (pageNumber) {
        this.notifyPageChange.emit(pageNumber);
    };
    /**
     * A simple function that determines if the given page number is the current page number.
       * @docs-private
     * @param page a page number
     */
    /**
     * A simple function that determines if the given page number is the current page number.
     * \@docs-private
     * @param {?} page a page number
     * @return {?}
     */
    DaffPaginatorComponent.prototype._isSelected = /**
     * A simple function that determines if the given page number is the current page number.
     * \@docs-private
     * @param {?} page a page number
     * @return {?}
     */
    function (page) {
        return page === this.currentPage;
    };
    /**
     * Determines when ellipsis after the first page number should show.
       * @docs-private
     */
    /**
     * Determines when ellipsis after the first page number should show.
     * \@docs-private
     * @return {?}
     */
    DaffPaginatorComponent.prototype._showFirstEllipsis = /**
     * Determines when ellipsis after the first page number should show.
     * \@docs-private
     * @return {?}
     */
    function () {
        return this.currentPage >= visiblePageRange + 2;
    };
    /**
     * Determines when ellipsis before the final page number should show.
       * @docs-private
     */
    /**
     * Determines when ellipsis before the final page number should show.
     * \@docs-private
     * @return {?}
     */
    DaffPaginatorComponent.prototype._showLastEllipsis = /**
     * Determines when ellipsis before the final page number should show.
     * \@docs-private
     * @return {?}
     */
    function () {
        return this.currentPage < (this.numberOfPages - visiblePageRange);
    };
    /**
     * Determines if the given page number should be shown. The two additional 'or' conditionals are needed
     * so the paginator retains the same total width at the extreme page numbers (1 and numberOfPages).
       * @docs-private
     * @param pageNumber page number to check.
     */
    /**
     * Determines if the given page number should be shown. The two additional 'or' conditionals are needed
     * so the paginator retains the same total width at the extreme page numbers (1 and numberOfPages).
     * \@docs-private
     * @param {?} pageNumber page number to check.
     * @return {?}
     */
    DaffPaginatorComponent.prototype._showNumber = /**
     * Determines if the given page number should be shown. The two additional 'or' conditionals are needed
     * so the paginator retains the same total width at the extreme page numbers (1 and numberOfPages).
     * \@docs-private
     * @param {?} pageNumber page number to check.
     * @return {?}
     */
    function (pageNumber) {
        return Math.abs(this.currentPage - pageNumber) < visiblePageRange
            || (this.currentPage <= visiblePageRange && pageNumber <= 2 * visiblePageRange)
            || (this.currentPage > this.numberOfPages - visiblePageRange && pageNumber > this.numberOfPages - 2 * visiblePageRange);
    };
    /**
     * Determines when the Previous button should be disabled.
       * @docs-private
     */
    /**
     * Determines when the Previous button should be disabled.
     * \@docs-private
     * @return {?}
     */
    DaffPaginatorComponent.prototype._disablePrev = /**
     * Determines when the Previous button should be disabled.
     * \@docs-private
     * @return {?}
     */
    function () {
        return this.currentPage === 1;
    };
    /**
     * Determines when the Next button should be disabled.
       * @docs-private
     */
    /**
     * Determines when the Next button should be disabled.
     * \@docs-private
     * @return {?}
     */
    DaffPaginatorComponent.prototype._disableNext = /**
     * Determines when the Next button should be disabled.
     * \@docs-private
     * @return {?}
     */
    function () {
        return this.currentPage === this.numberOfPages;
    };
    DaffPaginatorComponent.decorators = [
        { type: Component, args: [{
                    selector: 'daff-paginator',
                    template: "<button type=\"button\" class=\"daff-paginator__previous\"\n  [disabled]=\"_disablePrev()\"\n  tabindex=\"0\"\n  attr.aria-label=\"Go to Previous Page of {{_paginatorId}} Paginator\"\n  (click)=\"_onNotifyPrevPageChange()\">\n  <fa-icon [icon]=\"faChevronLeft\"></fa-icon> Previous\n</button>\n\n<button type=\"button\" class=\"daff-paginator__page-link\"\n  [class.selected]=\"_isSelected(1)\"\n  tabindex=\"0\"\n  attr.aria-label=\"Go to Page 1 of {{_paginatorId}} Paginator\"\n  (click)=\"_onNotifyPageChange(1)\">\n  1\n</button>\n\n<span class=\"daff-paginator__ellipsis\" *ngIf=\"_showFirstEllipsis()\">...</span>\n\n<ng-container *ngFor=\"let pageNumber of _numberOfPagesArray\">\n  <button type=\"button\" class=\"daff-paginator__page-link\"\n    [class.selected]=\"_isSelected(pageNumber)\"\n    tabindex=\"0\"\n    attr.aria-label=\"Go to Page {{pageNumber}} of {{_paginatorId}} Paginator\"\n    aria-current=\"_isSelected(pageNumber)\"\n    *ngIf=\"_showNumber(pageNumber)\"\n    (click)=\"_onNotifyPageChange(pageNumber)\">\n    {{ pageNumber }}\n  </button>\n</ng-container>\n\n<span class=\"daff-paginator__ellipsis\" *ngIf=\"_showLastEllipsis()\">...</span>\n\n<button type=\"button\" class=\"daff-paginator__page-link\"\n  [class.selected]=\"_isSelected(numberOfPages)\"\n  tabindex=\"0\"\n  attr.aria-label=\"Go To Page {{numberOfPages}} of {{_paginatorId}} Paginator\"\n  (click)=\"_onNotifyPageChange(numberOfPages)\"\n  *ngIf=\"!(numberOfPages < 2)\">\n  {{ numberOfPages }}\n</button>\n\n<button class=\"daff-paginator__next\"\n  [disabled]=\"_disableNext()\"\n  tabindex=\"0\"\n  attr.aria-label=\"Go to Next Page of {{_paginatorId}} Paginator\"\n  (click)=\"_onNotifyNextPageChange()\">\n  Next <fa-icon [icon]=\"faChevronRight\"></fa-icon>\n</button>\n",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    styles: [":host{display:flex}.daff-paginator__next,.daff-paginator__previous{cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;align-items:center;-webkit-appearance:none;-moz-appearance:none;appearance:none;background:0 0;border:0;border-radius:3px;display:flex;line-height:1em;padding:5px 10px}.daff-paginator__previous fa-icon{margin-right:10px}.daff-paginator__next fa-icon{margin-left:10px}.daff-paginator__ellipsis{padding:5px 10px}.daff-paginator__page-link{cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-appearance:none;-moz-appearance:none;appearance:none;background-color:transparent;border:0;border-radius:3px;display:inline-block;margin:0 5px;padding:5px 10px;transition:background 150ms}"]
                }] }
    ];
    /** @nocollapse */
    DaffPaginatorComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: Renderer2 }
    ]; };
    DaffPaginatorComponent.propDecorators = {
        class: [{ type: HostBinding, args: ['class.daff-paginator',] }],
        role: [{ type: HostBinding, args: ['attr.role',] }],
        color: [{ type: Input }],
        numberOfPages: [{ type: Input }],
        currentPage: [{ type: Input }],
        notifyPageChange: [{ type: Output }]
    };
    return DaffPaginatorComponent;
}(_daffPaginatorBase));
if (false) {
    /**
     * \@docs-private
     * @type {?}
     */
    DaffPaginatorComponent.prototype.class;
    /**
     * \@docs-private
     * @type {?}
     */
    DaffPaginatorComponent.prototype.role;
    /**
     * \@docs-private
     * @type {?}
     */
    DaffPaginatorComponent.prototype.faChevronRight;
    /**
     * \@docs-private
     * @type {?}
     */
    DaffPaginatorComponent.prototype.faChevronLeft;
    /**
     * The color theme of the paginator.
     * @type {?}
     */
    DaffPaginatorComponent.prototype.color;
    /**
     * \@docs-private
     * @type {?}
     */
    DaffPaginatorComponent.prototype._paginatorId;
    /**
     * The total number of pages the paginator tracks. This number can change dynamically, but the end user is responsible for keeping numberOfPages
     * and currentPage in sync. For example, if the numberOfPages is dynamically changed to a value less than the currentPage, the paginator will break.
     * @type {?}
     */
    DaffPaginatorComponent.prototype.numberOfPages;
    /**
     * The currently selected page.
     * @type {?}
     */
    DaffPaginatorComponent.prototype.currentPage;
    /**
     * \@docs-private
     * @type {?}
     */
    DaffPaginatorComponent.prototype._numberOfPagesArray;
    /**
     * Emits when the current page changes with the new current page.
     * @type {?}
     */
    DaffPaginatorComponent.prototype.notifyPageChange;
    /**
     * @type {?}
     * @private
     */
    DaffPaginatorComponent.prototype.elementRef;
    /**
     * @type {?}
     * @private
     */
    DaffPaginatorComponent.prototype.renderer;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var DaffPaginatorModule = /** @class */ (function () {
    function DaffPaginatorModule() {
    }
    DaffPaginatorModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        CommonModule,
                        FontAwesomeModule,
                        DaffButtonModule
                    ],
                    declarations: [
                        DaffPaginatorComponent
                    ],
                    exports: [
                        DaffPaginatorComponent
                    ]
                },] }
    ];
    return DaffPaginatorModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var DaffQtyDropdownComponent = /** @class */ (function () {
    function DaffQtyDropdownComponent(renderer) {
        this.renderer = renderer;
        this.dropdownRange = 9;
        this.qtyChanged = new EventEmitter();
        /**
         * \@docs-private
         */
        this.onChange = (/**
         * @param {?} qty
         * @return {?}
         */
        function (qty) { });
        /**
         * \@docs-private
         */
        this.onTouched = (/**
         * @return {?}
         */
        function () { });
    }
    /**
     * @docs-private
     */
    /**
     * \@docs-private
     * @return {?}
     */
    DaffQtyDropdownComponent.prototype.ngOnInit = /**
     * \@docs-private
     * @return {?}
     */
    function () {
        this.dropdownItemCounter = Array.from(Array(this.dropdownRange), (/**
         * @param {?} x
         * @param {?} i
         * @return {?}
         */
        function (x, i) { return i; }));
        if (!this.qty) {
            this.qty = 1;
        }
    };
    /**
     * @docs-private
     */
    /**
     * \@docs-private
     * @param {?} qty
     * @return {?}
     */
    DaffQtyDropdownComponent.prototype.writeValue = /**
     * \@docs-private
     * @param {?} qty
     * @return {?}
     */
    function (qty) {
        this.qty = qty;
        this.onChange(this.qty);
    };
    /**
     * @docs-private
     */
    /**
     * \@docs-private
     * @param {?} fn
     * @return {?}
     */
    DaffQtyDropdownComponent.prototype.registerOnChange = /**
     * \@docs-private
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this.onChange = fn;
    };
    /**
     * @docs-private
     */
    /**
     * \@docs-private
     * @param {?} fn
     * @return {?}
     */
    DaffQtyDropdownComponent.prototype.registerOnTouched = /**
     * \@docs-private
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this.onTouched = fn;
    };
    /**
     * @docs-private
     */
    /**
     * \@docs-private
     * @param {?} isDisabled
     * @return {?}
     */
    DaffQtyDropdownComponent.prototype.setDisabledState = /**
     * \@docs-private
     * @param {?} isDisabled
     * @return {?}
     */
    function (isDisabled) {
        if (this.inputHasBeenShown) {
            this.renderer.setProperty(document.getElementById('input_' + this.id), 'disabled', isDisabled);
        }
        else {
            this.renderer.setProperty(document.getElementById('select_' + this.id), 'disabled', isDisabled);
        }
    };
    Object.defineProperty(DaffQtyDropdownComponent.prototype, "showQtyInputField", {
        /**
         * @docs-private
         */
        get: /**
         * \@docs-private
         * @return {?}
         */
        function () {
            if (!this.isQtyOutsideDropdownRange() && !this.inputHasBeenShown) {
                return false;
            }
            else {
                this.inputHasBeenShown = true;
                return true;
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @docs-private
     */
    /**
     * \@docs-private
     * @param {?} value
     * @return {?}
     */
    DaffQtyDropdownComponent.prototype.onChangedWrapper = /**
     * \@docs-private
     * @param {?} value
     * @return {?}
     */
    function (value) {
        value = parseInt(value, 10);
        if (value === 10) {
            this.selectInput();
        }
        this.qtyChanged.emit(value);
        this.onChange(value);
    };
    /**
     * @private
     * @return {?}
     */
    DaffQtyDropdownComponent.prototype.isQtyOutsideDropdownRange = /**
     * @private
     * @return {?}
     */
    function () {
        return this.qty > this.dropdownRange;
    };
    /**
     * @private
     * @return {?}
     */
    DaffQtyDropdownComponent.prototype.selectInput = /**
     * @private
     * @return {?}
     */
    function () {
        /** @type {?} */
        var that = this;
        setTimeout((/**
         * @return {?}
         */
        function () {
            /** @type {?} */
            var input = (/** @type {?} */ (document.getElementById('input_' + that.id)));
            input.select();
        }));
    };
    DaffQtyDropdownComponent.decorators = [
        { type: Component, args: [{
                    selector: 'daff-qty-dropdown',
                    template: "<daff-form-field class=\"daff-qty-dropdown\">\n  <select daff-native-select *ngIf=\"!showQtyInputField\" id=\"select_{{id}}\" [(ngModel)]=\"qty\" (ngModelChange)=\"onChangedWrapper(qty)\" (blur)=\"onTouched()\">\n    <option *ngFor=\"let item of dropdownItemCounter\" [value]=\"item+1\">{{ item+1 }}</option>\n    <option value=\"10\">10+</option>\n  </select>\n  <input daff-input id=\"input_{{id}}\" class=\"daff-qty-dropdown__input\" [(ngModel)]=\"qty\" (ngModelChange)=\"onChangedWrapper(qty)\" (blur)=\"onTouched()\" *ngIf=\"showQtyInputField\">\n</daff-form-field>",
                    styles: [".daff-qty-dropdown__input{width:50px}"]
                }] }
    ];
    /** @nocollapse */
    DaffQtyDropdownComponent.ctorParameters = function () { return [
        { type: Renderer2 }
    ]; };
    DaffQtyDropdownComponent.propDecorators = {
        qty: [{ type: Input }],
        id: [{ type: Input }],
        qtyChanged: [{ type: Output }]
    };
    return DaffQtyDropdownComponent;
}());
if (false) {
    /**
     * @type {?}
     * @private
     */
    DaffQtyDropdownComponent.prototype.dropdownRange;
    /** @type {?} */
    DaffQtyDropdownComponent.prototype.qty;
    /** @type {?} */
    DaffQtyDropdownComponent.prototype.id;
    /** @type {?} */
    DaffQtyDropdownComponent.prototype.qtyChanged;
    /**
     * \@docs-private
     * @type {?}
     */
    DaffQtyDropdownComponent.prototype.dropdownItemCounter;
    /**
     * \@docs-private
     * @type {?}
     */
    DaffQtyDropdownComponent.prototype.inputHasBeenShown;
    /**
     * \@docs-private
     * @type {?}
     */
    DaffQtyDropdownComponent.prototype.onChange;
    /**
     * \@docs-private
     * @type {?}
     */
    DaffQtyDropdownComponent.prototype.onTouched;
    /**
     * @type {?}
     * @private
     */
    DaffQtyDropdownComponent.prototype.renderer;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var DaffQtyDropdownModule = /** @class */ (function () {
    function DaffQtyDropdownModule() {
    }
    DaffQtyDropdownModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        CommonModule,
                        FormsModule,
                        DaffFormFieldModule,
                        DaffNativeSelectModule,
                        DaffInputModule
                    ],
                    declarations: [
                        DaffQtyDropdownComponent
                    ],
                    exports: [
                        DaffQtyDropdownComponent
                    ]
                },] }
    ];
    return DaffQtyDropdownModule;
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
 * DaffSidebar is heavily based upon the work done by the \@angular/material2
 * team on `mat-drawer` and `mat-sidenav`. `daff-sidebar` is intended to be
 * a simplified version (with a different design) of `mat-drawer` which
 * follows a stricter "dumb" component pattern than `mat-drawer`
 */
var DaffSidebarComponent = /** @class */ (function () {
    function DaffSidebarComponent(_elementRef, _ngZone) {
        var _this = this;
        this._elementRef = _elementRef;
        this._ngZone = _ngZone;
        /**
         * Event fired when `ESC` key is pressed when the sidebar has focus
         */
        this.escapePressed = new EventEmitter();
        /**
         * Listen to `keydown` events outside the zone so that change detection is not run every
         * time a key is pressed. Instead we re-enter the zone only if the `ESC` key is pressed.
         *
         */
        this._ngZone.runOutsideAngular((/**
         * @return {?}
         */
        function () {
            fromEvent(_this._elementRef.nativeElement, 'keydown').pipe(filter((/**
             * @param {?} event
             * @return {?}
             */
            function (event) { return event.key === 'Escape'; }))).subscribe((/**
             * @param {?} event
             * @return {?}
             */
            function (event) { return _this._ngZone.run((/**
             * @return {?}
             */
            function () {
                _this.escapePressed.emit();
                event.stopPropagation();
            })); }));
        }));
    }
    DaffSidebarComponent.decorators = [
        { type: Component, args: [{
                    selector: 'daff-sidebar',
                    template: '<ng-content></ng-content>',
                    host: {
                        'class': 'daff-sidebar'
                    },
                    encapsulation: ViewEncapsulation.None,
                    styles: [":host{display:block}.daff-sidebar{display:block;height:100%}"]
                }] }
    ];
    /** @nocollapse */
    DaffSidebarComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: NgZone }
    ]; };
    DaffSidebarComponent.propDecorators = {
        escapePressed: [{ type: Output }]
    };
    return DaffSidebarComponent;
}());
if (false) {
    /**
     * Event fired when `ESC` key is pressed when the sidebar has focus
     * @type {?}
     */
    DaffSidebarComponent.prototype.escapePressed;
    /**
     * @type {?}
     * @private
     */
    DaffSidebarComponent.prototype._elementRef;
    /**
     * @type {?}
     * @private
     */
    DaffSidebarComponent.prototype._ngZone;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var duration = '350ms';
/** @type {?} */
var sidebarAnimateRemainTransition = 'cubic-bezier(0.4, 0.0, 0.2, 1)';
/** @type {?} */
var sidebarAnimateInTransition = 'cubic-bezier(0.0, 0.0, 0.2, 1)';
/** @type {?} */
var sidebarAnimateOutTransition = 'cubic-bezier(0.4, 0.0, 1, 1)';
/** @type {?} */
var daffSidebarAnimations = {
    transformSidebar: trigger('transformSidebar', [
        // We remove the `transform` here completely, rather than setting it to zero, because:
        // 1. 3d transforms causes text to appear blurry on IE and Edge.
        state('open', style({
            'transform': 'none',
            'visibility': 'visible',
        })),
        transition('open => closed', animate(duration + ' ' + sidebarAnimateOutTransition)),
        transition('closed => open', animate(duration + ' ' + sidebarAnimateInTransition))
    ]),
    transformContent: trigger('transformContent', [
        state('closed', style({
            'transform': 'none',
        })),
        transition('open => closed', animate(duration + ' ' + sidebarAnimateOutTransition)),
        transition('closed => open', animate(duration + ' ' + sidebarAnimateInTransition))
    ])
};
/** @enum {string} */
var DaffSidebarAnimationStates = {
    OPEN: 'open',
    CLOSED: 'closed',
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var getAnimationState$2 = (/**
 * @param {?} open
 * @param {?=} enabled
 * @return {?}
 */
function (open, enabled) {
    if (enabled === void 0) { enabled = true; }
    if (!enabled) {
        return 'open';
    }
    if (open && enabled) {
        return 'open';
    }
    else {
        return 'closed';
    }
});

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var DaffSidebarViewportComponent = /** @class */ (function () {
    function DaffSidebarViewportComponent(ref) {
        this.ref = ref;
        /**
         * Internal tracking variable for the state of sidebar viewport.
         * \@docs-private
         */
        this._opened = false;
        /**
         * \@docs-private
         */
        this._mode = 'side';
        /**
         * Input state for whether or not the backdrop is
         * "visible" to the human eye
         */
        // tslint:disable-next-line: no-inferrable-types
        this.backdropIsVisible = true;
        /**
         * Event fired when the backdrop is clicked
         * This is often used to close the sidebar
         */
        this.backdropClicked = new EventEmitter();
    }
    Object.defineProperty(DaffSidebarViewportComponent.prototype, "mode", {
        /**
         * The mode to put the sidebar in
         */
        get: /**
         * The mode to put the sidebar in
         * @return {?}
         */
        function () { return this._mode; },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._mode = value;
            this._animationState = getAnimationState$2(this.opened, this.animationsEnabled);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DaffSidebarViewportComponent.prototype, "opened", {
        /**
         * Property for the "opened" state of the sidebar
         */
        get: /**
         * Property for the "opened" state of the sidebar
         * @return {?}
         */
        function () { return this._opened; },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._opened = value;
            this._animationState = getAnimationState$2(value, this.animationsEnabled);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DaffSidebarViewportComponent.prototype, "animationsEnabled", {
        /**
         * @docs-private
         */
        get: /**
         * \@docs-private
         * @return {?}
         */
        function () {
            return (this.mode === 'over' || this.mode === 'push') ? true : false;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @docs-private
     */
    /**
     * \@docs-private
     * @return {?}
     */
    DaffSidebarViewportComponent.prototype.ngOnInit = /**
     * \@docs-private
     * @return {?}
     */
    function () {
        this._animationState = getAnimationState$2(this.opened, this.animationsEnabled);
    };
    /**
     * @docs-private
     */
    /**
     * \@docs-private
     * @return {?}
     */
    DaffSidebarViewportComponent.prototype.ngAfterViewInit = /**
     * \@docs-private
     * @return {?}
     */
    function () {
        var _this = this;
        if (this.sidebar) {
            this.sidebar.escapePressed.subscribe((/**
             * @return {?}
             */
            function () {
                _this.onEscape();
            }));
        }
    };
    /**
     * @docs-private
     */
    /**
     * \@docs-private
     * @return {?}
     */
    DaffSidebarViewportComponent.prototype._backdropClicked = /**
     * \@docs-private
     * @return {?}
     */
    function () {
        this.backdropClicked.emit();
    };
    Object.defineProperty(DaffSidebarViewportComponent.prototype, "hasBackdrop", {
        /**
         * @docs-private
         */
        get: /**
         * \@docs-private
         * @return {?}
         */
        function () {
            return (this.mode === 'over' || this.mode === 'push');
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @docs-private
     */
    /**
     * \@docs-private
     * @return {?}
     */
    DaffSidebarViewportComponent.prototype.onEscape = /**
     * \@docs-private
     * @return {?}
     */
    function () {
        if (this.hasBackdrop) {
            this.opened = false;
            this.ref.markForCheck();
        }
    };
    DaffSidebarViewportComponent.decorators = [
        { type: Component, args: [{
                    selector: 'daff-sidebar-viewport',
                    template: "<div class=\"daff-sidebar-viewport {{ mode }}\">\n  <div class=\"daff-sidebar-viewport__sidebar\" [@transformSidebar]=\"_animationState\" [cdkTrapFocus]=\"opened && (mode === 'over' || mode === 'push')\">\n    <ng-content select=\"daff-sidebar\" (escapePressed)=\"onEscape($event)\"></ng-content>\n  </div>\n\n  <daff-backdrop \n  class=\"daff-sidebar-viewport__backdrop\" \n  *ngIf=\"hasBackdrop && _opened\"\n  [transparent]=\"!backdropIsVisible\" \n  (backdropClicked)=\"_backdropClicked()\"></daff-backdrop>\n\n  <div class=\"daff-sidebar-viewport__content\" [@transformContent]=\"_animationState\">\n    <ng-content></ng-content>\n  </div>\n</div>",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    animations: [
                        daffSidebarAnimations.transformSidebar,
                        daffSidebarAnimations.transformContent
                    ],
                    styles: [".daff-sidebar-viewport{display:flex;min-height:100%;position:relative;width:100%;z-index:1}.daff-sidebar-viewport__content{flex:0 1 auto;width:100%;will-change:transform;z-index:2}.daff-sidebar-viewport__sidebar{flex-shrink:0;width:250px;will-change:transform,visibility;z-index:4}.daff-sidebar-viewport__backdrop{cursor:pointer;height:100%;position:absolute;width:100%;z-index:3}.daff-sidebar-viewport.push>.daff-sidebar-viewport__sidebar{bottom:0;height:100%;left:0;position:absolute;top:0;transform:translate3d(-250px,0,0);visibility:hidden}.daff-sidebar-viewport.push>.daff-sidebar-viewport__content{transform:translate3d(250px,0,0)}.daff-sidebar-viewport.over>.daff-sidebar-viewport__sidebar{bottom:0;height:100%;left:0;position:absolute;top:0;transform:translate3d(-250px,0,0);visibility:hidden}"]
                }] }
    ];
    /** @nocollapse */
    DaffSidebarViewportComponent.ctorParameters = function () { return [
        { type: ChangeDetectorRef }
    ]; };
    DaffSidebarViewportComponent.propDecorators = {
        sidebar: [{ type: ContentChild, args: [DaffSidebarComponent, { static: false },] }],
        mode: [{ type: Input }],
        backdropIsVisible: [{ type: Input }],
        opened: [{ type: Input }],
        backdropClicked: [{ type: Output }]
    };
    return DaffSidebarViewportComponent;
}());
if (false) {
    /**
     * \@docs-private
     * @type {?}
     */
    DaffSidebarViewportComponent.prototype._animationState;
    /**
     * \@docs-private
     * @type {?}
     */
    DaffSidebarViewportComponent.prototype.sidebar;
    /**
     * Internal tracking variable for the state of sidebar viewport.
     * \@docs-private
     * @type {?}
     */
    DaffSidebarViewportComponent.prototype._opened;
    /**
     * \@docs-private
     * @type {?}
     */
    DaffSidebarViewportComponent.prototype._mode;
    /**
     * Input state for whether or not the backdrop is
     * "visible" to the human eye
     * @type {?}
     */
    DaffSidebarViewportComponent.prototype.backdropIsVisible;
    /**
     * Event fired when the backdrop is clicked
     * This is often used to close the sidebar
     * @type {?}
     */
    DaffSidebarViewportComponent.prototype.backdropClicked;
    /**
     * @type {?}
     * @private
     */
    DaffSidebarViewportComponent.prototype.ref;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var DaffSidebarModule = /** @class */ (function () {
    function DaffSidebarModule() {
    }
    DaffSidebarModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        CommonModule,
                        DaffBackdropModule,
                        A11yModule
                    ],
                    declarations: [
                        DaffSidebarComponent,
                        DaffSidebarViewportComponent
                    ],
                    exports: [
                        DaffSidebarComponent,
                        DaffSidebarViewportComponent
                    ]
                },] }
    ];
    return DaffSidebarModule;
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
/** @enum {string} */
var DaffHeroLayoutEnum = {
    Centered: 'centered',
};
/** @enum {string} */
var DaffHeroSizeEnum = {
    Compact: 'compact',
    Small: 'small' // Small will be deprecated in v1.0.0
    ,
};
/**
 * An _elementRef and an instance of renderer2 are needed for the Colorable mixin
 */
var /**
 * An _elementRef and an instance of renderer2 are needed for the Colorable mixin
 */
DaffHeroBase = /** @class */ (function () {
    function DaffHeroBase(_elementRef, _renderer) {
        this._elementRef = _elementRef;
        this._renderer = _renderer;
    }
    return DaffHeroBase;
}());
if (false) {
    /** @type {?} */
    DaffHeroBase.prototype._elementRef;
    /** @type {?} */
    DaffHeroBase.prototype._renderer;
}
/** @type {?} */
var _daffHeroBase = daffColorMixin(DaffHeroBase);
var DaffHeroComponent = /** @class */ (function (_super) {
    __extends(DaffHeroComponent, _super);
    function DaffHeroComponent(elementRef, renderer) {
        var _this = _super.call(this, elementRef, renderer) || this;
        _this.elementRef = elementRef;
        _this.renderer = renderer;
        /**
         * \@docs-private
         */
        _this.class = true;
        return _this;
    }
    Object.defineProperty(DaffHeroComponent.prototype, "centered", {
        /**
           * Will be deprecated in v1.0.0
           * @docs-private
           */
        get: /**
         * Will be deprecated in v1.0.0
         * \@docs-private
         * @return {?}
         */
        function () {
            return this.layout === DaffHeroLayoutEnum.Centered;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DaffHeroComponent.prototype, "small", {
        /**
           * Will be deprecated in v1.0.0
           * @docs-private
           */
        get: /**
         * Will be deprecated in v1.0.0
         * \@docs-private
         * @return {?}
         */
        function () {
            return this.size === DaffHeroSizeEnum.Small;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DaffHeroComponent.prototype, "compact", {
        /**
           * Will be deprecated in v1.0.0
           * @docs-private
           */
        get: /**
         * Will be deprecated in v1.0.0
         * \@docs-private
         * @return {?}
         */
        function () {
            return this.size === DaffHeroSizeEnum.Compact;
        },
        enumerable: true,
        configurable: true
    });
    DaffHeroComponent.decorators = [
        { type: Component, args: [{
                    selector: 'daff-hero',
                    template: "<ng-content select=\"[daffHeroTitle]\"></ng-content>\n<ng-content select=\"[daffHeroSubtitle]\"></ng-content>\n<ng-content></ng-content>",
                    encapsulation: ViewEncapsulation.None,
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    styles: [".daff-hero{display:block;padding:75px 25px}@media (min-width:480px){.daff-hero{padding:100px 50px}}.daff-hero__title{font-weight:700;font-size:3.25rem;line-height:1.1em;letter-spacing:-1.5px;margin:0;max-width:1040px;overflow-wrap:break-word;width:100%}@media (min-width:768px){.daff-hero__title{font-size:4rem}}.daff-hero__subtitle{font-size:1.5rem;font-weight:400;margin:15px 0 0;max-width:700px;width:100%}.daff-hero__subtitle+*{margin-top:50px}.daff-hero--centered .daff-hero__title{margin:0 auto;text-align:center}.daff-hero--centered .daff-hero__subtitle{margin:25px auto 0;text-align:center}.daff-hero--compact,.daff-hero--small{padding:50px 25px}@media (min-width:480px){.daff-hero--compact,.daff-hero--small{padding:50px}}"]
                }] }
    ];
    /** @nocollapse */
    DaffHeroComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: Renderer2 }
    ]; };
    DaffHeroComponent.propDecorators = {
        layout: [{ type: Input }],
        size: [{ type: Input }],
        color: [{ type: Input }],
        class: [{ type: HostBinding, args: ['class.daff-hero',] }],
        centered: [{ type: HostBinding, args: ['class.daff-hero--centered',] }],
        small: [{ type: HostBinding, args: ['class.daff-hero--small',] }],
        compact: [{ type: HostBinding, args: ['class.daff-hero--compact',] }]
    };
    return DaffHeroComponent;
}(_daffHeroBase));
if (false) {
    /** @type {?} */
    DaffHeroComponent.prototype.layout;
    /** @type {?} */
    DaffHeroComponent.prototype.size;
    /** @type {?} */
    DaffHeroComponent.prototype.color;
    /**
     * \@docs-private
     * @type {?}
     */
    DaffHeroComponent.prototype.class;
    /**
     * @type {?}
     * @private
     */
    DaffHeroComponent.prototype.elementRef;
    /**
     * @type {?}
     * @private
     */
    DaffHeroComponent.prototype.renderer;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var DaffHeroSubtitleDirective = /** @class */ (function () {
    function DaffHeroSubtitleDirective() {
        /**
         * \@docs-private
         */
        this.class = true;
    }
    DaffHeroSubtitleDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[daffHeroSubtitle]'
                },] }
    ];
    DaffHeroSubtitleDirective.propDecorators = {
        class: [{ type: HostBinding, args: ['class.daff-hero__subtitle',] }]
    };
    return DaffHeroSubtitleDirective;
}());
if (false) {
    /**
     * \@docs-private
     * @type {?}
     */
    DaffHeroSubtitleDirective.prototype.class;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var DaffHeroTitleDirective = /** @class */ (function () {
    function DaffHeroTitleDirective() {
        /**
         * \@docs-private
         */
        this.class = true;
    }
    DaffHeroTitleDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[daffHeroTitle]',
                },] }
    ];
    DaffHeroTitleDirective.propDecorators = {
        class: [{ type: HostBinding, args: ['class.daff-hero__title',] }]
    };
    return DaffHeroTitleDirective;
}());
if (false) {
    /**
     * \@docs-private
     * @type {?}
     */
    DaffHeroTitleDirective.prototype.class;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var DaffHeroModule = /** @class */ (function () {
    function DaffHeroModule() {
    }
    DaffHeroModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        CommonModule
                    ],
                    declarations: [
                        DaffHeroComponent,
                        DaffHeroTitleDirective,
                        DaffHeroSubtitleDirective
                    ],
                    exports: [
                        DaffHeroComponent,
                        DaffHeroTitleDirective,
                        DaffHeroSubtitleDirective
                    ]
                },] }
    ];
    return DaffHeroModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @enum {string} */
var DaffCalloutLayoutEnum = {
    Centered: 'centered',
};
/** @enum {string} */
var DaffCalloutSizeEnum = {
    Compact: 'compact',
};
/**
 * An _elementRef and an instance of renderer2 are needed for the Colorable mixin
 */
var /**
 * An _elementRef and an instance of renderer2 are needed for the Colorable mixin
 */
DaffCalloutBase = /** @class */ (function () {
    function DaffCalloutBase(_elementRef, _renderer) {
        this._elementRef = _elementRef;
        this._renderer = _renderer;
    }
    return DaffCalloutBase;
}());
if (false) {
    /** @type {?} */
    DaffCalloutBase.prototype._elementRef;
    /** @type {?} */
    DaffCalloutBase.prototype._renderer;
}
/** @type {?} */
var _daffCalloutBase = daffColorMixin(DaffCalloutBase);
var DaffCalloutComponent = /** @class */ (function (_super) {
    __extends(DaffCalloutComponent, _super);
    function DaffCalloutComponent(elementRef, renderer) {
        var _this = _super.call(this, elementRef, renderer) || this;
        _this.elementRef = elementRef;
        _this.renderer = renderer;
        /**
         * \@docs-private
         */
        _this.class = true;
        return _this;
    }
    Object.defineProperty(DaffCalloutComponent.prototype, "centered", {
        /**
           * Will be deprecated in v1.0.0
           * @docs-private
           */
        get: /**
         * Will be deprecated in v1.0.0
         * \@docs-private
         * @return {?}
         */
        function () {
            return this.layout === DaffCalloutLayoutEnum.Centered;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DaffCalloutComponent.prototype, "compact", {
        /**
           * Will be deprecated in v1.0.0
           * @docs-private
           */
        get: /**
         * Will be deprecated in v1.0.0
         * \@docs-private
         * @return {?}
         */
        function () {
            return this.size === DaffCalloutSizeEnum.Compact;
        },
        enumerable: true,
        configurable: true
    });
    DaffCalloutComponent.decorators = [
        { type: Component, args: [{
                    selector: 'daff-callout',
                    template: "<ng-content select=\"[daffCalloutTitle]\"></ng-content>\n<ng-content select=\"[daffCalloutSubtitle]\"></ng-content>\n<ng-content></ng-content>\n",
                    encapsulation: ViewEncapsulation.None,
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    styles: [".daff-callout{display:block;padding:75px 25px}@media (min-width:480px){.daff-callout{padding:100px 50px}}.daff-callout__title{font-weight:700;font-size:2.25rem;line-height:1.1em;letter-spacing:-.5px;margin:0;max-width:1040px;width:100%}@media (min-width:768px){.daff-callout__title{font-size:3rem}}.daff-callout__subtitle{font-size:1.25rem;margin:15px 0 0;max-width:600px;padding:0;width:100%}.daff-callout--centered .daff-callout__title{margin:0 auto;text-align:center}.daff-callout--centered .daff-callout__subtitle{margin:10px auto 0;text-align:center}.daff-callout--compact{padding:25px}@media (min-width:480px){.daff-callout--centered .daff-callout__subtitle{margin:25px auto 0}.daff-callout--compact{padding:25px 50px}}"]
                }] }
    ];
    /** @nocollapse */
    DaffCalloutComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: Renderer2 }
    ]; };
    DaffCalloutComponent.propDecorators = {
        color: [{ type: Input }],
        layout: [{ type: Input }],
        size: [{ type: Input }],
        class: [{ type: HostBinding, args: ['class.daff-callout',] }],
        centered: [{ type: HostBinding, args: ['class.daff-callout--centered',] }],
        compact: [{ type: HostBinding, args: ['class.daff-callout--compact',] }]
    };
    return DaffCalloutComponent;
}(_daffCalloutBase));
if (false) {
    /** @type {?} */
    DaffCalloutComponent.prototype.color;
    /** @type {?} */
    DaffCalloutComponent.prototype.layout;
    /** @type {?} */
    DaffCalloutComponent.prototype.size;
    /**
     * \@docs-private
     * @type {?}
     */
    DaffCalloutComponent.prototype.class;
    /**
     * @type {?}
     * @private
     */
    DaffCalloutComponent.prototype.elementRef;
    /**
     * @type {?}
     * @private
     */
    DaffCalloutComponent.prototype.renderer;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var DaffCalloutTitleDirective = /** @class */ (function () {
    function DaffCalloutTitleDirective() {
        /**
         * \@docs-private
         */
        this.class = true;
    }
    DaffCalloutTitleDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[daffCalloutTitle]'
                },] }
    ];
    DaffCalloutTitleDirective.propDecorators = {
        class: [{ type: HostBinding, args: ['class.daff-callout__title',] }]
    };
    return DaffCalloutTitleDirective;
}());
if (false) {
    /**
     * \@docs-private
     * @type {?}
     */
    DaffCalloutTitleDirective.prototype.class;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var DaffCalloutSubtitleDirective = /** @class */ (function () {
    function DaffCalloutSubtitleDirective() {
        /**
         * \@docs-private
         */
        this.class = true;
    }
    DaffCalloutSubtitleDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[daffCalloutSubtitle]',
                },] }
    ];
    DaffCalloutSubtitleDirective.propDecorators = {
        class: [{ type: HostBinding, args: ['class.daff-callout__subtitle',] }]
    };
    return DaffCalloutSubtitleDirective;
}());
if (false) {
    /**
     * \@docs-private
     * @type {?}
     */
    DaffCalloutSubtitleDirective.prototype.class;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var DaffCalloutModule = /** @class */ (function () {
    function DaffCalloutModule() {
    }
    DaffCalloutModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        CommonModule
                    ],
                    declarations: [
                        DaffCalloutComponent,
                        DaffCalloutTitleDirective,
                        DaffCalloutSubtitleDirective
                    ],
                    exports: [
                        DaffCalloutComponent,
                        DaffCalloutSubtitleDirective,
                        DaffCalloutTitleDirective
                    ]
                },] }
    ];
    return DaffCalloutModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @enum {string} */
var DaffFeatureModeEnum = {
    Compact: 'compact',
    Normal: 'normal',
};
var DaffFeatureComponent = /** @class */ (function () {
    function DaffFeatureComponent() {
        /**
         * \@docs-private
         */
        this.class = true;
        this.mode = DaffFeatureModeEnum.Normal;
    }
    Object.defineProperty(DaffFeatureComponent.prototype, "compact", {
        /**
         * @docs-private
         */
        get: /**
         * \@docs-private
         * @return {?}
         */
        function () {
            return this.mode === DaffFeatureModeEnum.Compact;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DaffFeatureComponent.prototype, "normal", {
        /**
         * @docs-private
         */
        get: /**
         * \@docs-private
         * @return {?}
         */
        function () {
            return this.mode === DaffFeatureModeEnum.Normal;
        },
        enumerable: true,
        configurable: true
    });
    DaffFeatureComponent.decorators = [
        { type: Component, args: [{
                    selector: 'daff-feature',
                    template: "<ng-content select=\"[daffFeatureIcon]\"></ng-content>\n<div class=\"daff-feature__content\">\n  <ng-content select=\"[daffFeatureSubheader]\"></ng-content>\n  <ng-content select=\"[daffFeatureTitle]\"></ng-content>\n  <ng-content select=\"[daffFeatureSubtitle]\"></ng-content>\n  <ng-content></ng-content>\n</div>",
                    encapsulation: ViewEncapsulation.None,
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    styles: [".daff-feature{border-radius:10px;display:flex}.daff-feature__icon{display:inline-block;max-width:30px}.daff-feature__subheader{text-transform:uppercase;font-size:.75rem;letter-spacing:.075rem;line-height:1rem}@media (min-width:480px){.daff-feature__icon{max-width:50px}.daff-feature__subheader{font-size:.75rem}}.daff-feature__title{font-weight:700;margin:0 0 15px;padding:0}.daff-feature__subtitle{font-size:1rem;margin:0;padding:0}.daff-feature--normal{align-items:flex-start;flex-direction:column;padding:25px}.daff-feature--normal .daff-feature__icon{margin:0 0 15px}@media (min-width:480px){.daff-feature--normal{align-items:center;flex-direction:row;padding:50px}.daff-feature--normal .daff-feature__icon{margin:0 25px 0 0}}.daff-feature--normal .daff-feature__subheader{margin:0 0 15px}.daff-feature--normal .daff-feature__title{font-size:1.25rem;line-height:1.25rem}@media (min-width:480px){.daff-feature--normal .daff-feature__subheader{margin:0 0 30px}.daff-feature--normal .daff-feature__title{font-size:2rem;line-height:2rem}}.daff-feature--compact{align-items:flex-start;flex-direction:column;padding:25px}.daff-feature--compact .daff-feature__icon{margin:0 0 15px}.daff-feature--compact .daff-feature__subheader{margin:0 0 5px}.daff-feature--compact .daff-feature__title{font-size:1.25rem;line-height:1.25rem}@media (min-width:480px){.daff-feature--compact .daff-feature__title{font-size:1.5rem;line-height:1.5rem}}"]
                }] }
    ];
    DaffFeatureComponent.propDecorators = {
        class: [{ type: HostBinding, args: ['class.daff-feature',] }],
        mode: [{ type: Input }],
        compact: [{ type: HostBinding, args: ['class.daff-feature--compact',] }],
        normal: [{ type: HostBinding, args: ['class.daff-feature--normal',] }]
    };
    return DaffFeatureComponent;
}());
if (false) {
    /**
     * \@docs-private
     * @type {?}
     */
    DaffFeatureComponent.prototype.class;
    /** @type {?} */
    DaffFeatureComponent.prototype.mode;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var DaffFeatureTitleDirective = /** @class */ (function () {
    function DaffFeatureTitleDirective() {
        /**
         * \@docs-private
         */
        this.class = true;
    }
    DaffFeatureTitleDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[daffFeatureTitle]'
                },] }
    ];
    DaffFeatureTitleDirective.propDecorators = {
        class: [{ type: HostBinding, args: ['class.daff-feature__title',] }]
    };
    return DaffFeatureTitleDirective;
}());
if (false) {
    /**
     * \@docs-private
     * @type {?}
     */
    DaffFeatureTitleDirective.prototype.class;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var DaffFeatureSubtitleDirective = /** @class */ (function () {
    function DaffFeatureSubtitleDirective() {
        /**
         * \@docs-private
         */
        this.class = true;
    }
    DaffFeatureSubtitleDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[daffFeatureSubtitle]'
                },] }
    ];
    DaffFeatureSubtitleDirective.propDecorators = {
        class: [{ type: HostBinding, args: ['class.daff-feature__subtitle',] }]
    };
    return DaffFeatureSubtitleDirective;
}());
if (false) {
    /**
     * \@docs-private
     * @type {?}
     */
    DaffFeatureSubtitleDirective.prototype.class;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var DaffFeatureIconDirective = /** @class */ (function () {
    function DaffFeatureIconDirective() {
        /**
         * \@docs-private
         */
        this.class = true;
    }
    DaffFeatureIconDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[daffFeatureIcon]',
                },] }
    ];
    DaffFeatureIconDirective.propDecorators = {
        class: [{ type: HostBinding, args: ['class.daff-feature__icon',] }]
    };
    return DaffFeatureIconDirective;
}());
if (false) {
    /**
     * \@docs-private
     * @type {?}
     */
    DaffFeatureIconDirective.prototype.class;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var DaffFeatureSubheaderDirective = /** @class */ (function () {
    function DaffFeatureSubheaderDirective() {
        /**
         * \@docs-private
         */
        this.class = true;
    }
    DaffFeatureSubheaderDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[daffFeatureSubheader]',
                },] }
    ];
    DaffFeatureSubheaderDirective.propDecorators = {
        class: [{ type: HostBinding, args: ['class.daff-feature__subheader',] }]
    };
    return DaffFeatureSubheaderDirective;
}());
if (false) {
    /**
     * \@docs-private
     * @type {?}
     */
    DaffFeatureSubheaderDirective.prototype.class;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var DaffFeatureModule = /** @class */ (function () {
    function DaffFeatureModule() {
    }
    DaffFeatureModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        CommonModule
                    ],
                    declarations: [
                        DaffFeatureComponent,
                        DaffFeatureTitleDirective,
                        DaffFeatureSubtitleDirective,
                        DaffFeatureIconDirective,
                        DaffFeatureSubheaderDirective
                    ],
                    exports: [
                        DaffFeatureComponent,
                        DaffFeatureTitleDirective,
                        DaffFeatureSubtitleDirective,
                        DaffFeatureIconDirective,
                        DaffFeatureSubheaderDirective
                    ]
                },] }
    ];
    return DaffFeatureModule;
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
 * An _elementRef and an instance of renderer2 are needed for the Colorable mixin
 */
var /**
 * An _elementRef and an instance of renderer2 are needed for the Colorable mixin
 */
DaffCardBase = /** @class */ (function () {
    function DaffCardBase(_elementRef, _renderer) {
        this._elementRef = _elementRef;
        this._renderer = _renderer;
    }
    return DaffCardBase;
}());
if (false) {
    /** @type {?} */
    DaffCardBase.prototype._elementRef;
    /** @type {?} */
    DaffCardBase.prototype._renderer;
}
/** @type {?} */
var _daffCardBase = daffColorMixin(DaffCardBase);
var DaffCardComponent = /** @class */ (function (_super) {
    __extends(DaffCardComponent, _super);
    function DaffCardComponent(elementRef, renderer) {
        var _this = _super.call(this, elementRef, renderer) || this;
        _this.elementRef = elementRef;
        _this.renderer = renderer;
        /**
         * \@docs-private
         */
        _this.class = true;
        return _this;
    }
    DaffCardComponent.decorators = [
        { type: Component, args: [{
                    selector: 'daff-card',
                    template: "<ng-content select=\"[daffCardImage]\"></ng-content>\n<div class=\"daff-card__content\">\n  <ng-content select=\"[daffCardTitle]\"></ng-content>\n  <ng-content></ng-content>\n</div>",
                    encapsulation: ViewEncapsulation.None,
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    styles: [".daff-card{display:flex;flex-direction:column;border-radius:8px}.daff-card__image{display:block;border-top-left-radius:inherit;border-top-right-radius:inherit;width:100%}.daff-card__content{padding:24px;border-bottom-left-radius:inherit;border-bottom-right-radius:inherit}.daff-card__content:first-child{border-top:0}.daff-card__content p{margin:0;padding:0}.daff-card__title{font-weight:700;font-size:1.25rem;line-height:1.1em;letter-spacing:0;margin-bottom:8px}@media (min-width:768px){.daff-card__title{font-size:1.5rem}}"]
                }] }
    ];
    /** @nocollapse */
    DaffCardComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: Renderer2 }
    ]; };
    DaffCardComponent.propDecorators = {
        color: [{ type: Input }],
        class: [{ type: HostBinding, args: ['class.daff-card',] }]
    };
    return DaffCardComponent;
}(_daffCardBase));
if (false) {
    /** @type {?} */
    DaffCardComponent.prototype.color;
    /**
     * \@docs-private
     * @type {?}
     */
    DaffCardComponent.prototype.class;
    /**
     * @type {?}
     * @private
     */
    DaffCardComponent.prototype.elementRef;
    /**
     * @type {?}
     * @private
     */
    DaffCardComponent.prototype.renderer;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var DaffCardTitleDirective = /** @class */ (function () {
    function DaffCardTitleDirective() {
        /**
         * \@docs-private
         */
        this.class = true;
    }
    DaffCardTitleDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[daffCardTitle]'
                },] }
    ];
    DaffCardTitleDirective.propDecorators = {
        class: [{ type: HostBinding, args: ['class.daff-card__title',] }]
    };
    return DaffCardTitleDirective;
}());
if (false) {
    /**
     * \@docs-private
     * @type {?}
     */
    DaffCardTitleDirective.prototype.class;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var DaffCardImageDirective = /** @class */ (function () {
    function DaffCardImageDirective() {
        /**
         * \@docs-private
         */
        this.class = true;
    }
    DaffCardImageDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[daffCardImage]'
                },] }
    ];
    DaffCardImageDirective.propDecorators = {
        class: [{ type: HostBinding, args: ['class.daff-card__image',] }]
    };
    return DaffCardImageDirective;
}());
if (false) {
    /**
     * \@docs-private
     * @type {?}
     */
    DaffCardImageDirective.prototype.class;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var DaffCardModule = /** @class */ (function () {
    function DaffCardModule() {
    }
    DaffCardModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        CommonModule
                    ],
                    declarations: [
                        DaffCardComponent,
                        DaffCardTitleDirective,
                        DaffCardImageDirective
                    ],
                    exports: [
                        DaffCardComponent,
                        DaffCardTitleDirective,
                        DaffCardImageDirective
                    ]
                },] }
    ];
    return DaffCardModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @enum {string} */
var DaffBreakpoints = {
    DESKTOP: '(min-width: 1920px)',
    LAPTOP: '(min-width: 1440px)',
    SMALL_LAPTOP: '(min-width: 1200px)',
    BIG_TABLET: '(min-width: 1024px)',
    TABLET: '(min-width: 768px)',
    MOBILE: '(min-width: 480px)',
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * A basic constructor type useful for mixins
 * See https://blog.mariusschulz.com/2017/05/26/typescript-2-2-mixin-classes
 * for a really good explanation of why mixins are useful.
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @record
 */
function DaffStatusable() { }
if (false) {
    /** @type {?} */
    DaffStatusable.prototype.status;
}
/** @enum {string} */
var DaffStatusEnum = {
    Warn: 'warn',
    Error: 'error',
    Success: 'success',
};

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

export { DaffAccordionComponent, DaffAccordionItemComponent, DaffAccordionItemContentDirective, DaffAccordionItemTitleDirective, DaffAccordionModule, DaffArticleComponent, DaffArticleLeadDirective, DaffArticleMetaDirective, DaffArticleModule, DaffArticleTitleDirective, DaffBackdropComponent, DaffBackdropModule, DaffBreakpoints, DaffButtonComponent, DaffButtonModule, DaffButtonSetComponent, DaffButtonSetModule, DaffCalloutComponent, DaffCalloutLayoutEnum, DaffCalloutModule, DaffCalloutSizeEnum, DaffCalloutSubtitleDirective, DaffCalloutTitleDirective, DaffCardComponent, DaffCardImageDirective, DaffCardModule, DaffCardTitleDirective, DaffCheckboxComponent, DaffCheckboxModule, DaffCheckboxSetComponent, DaffContainerComponent, DaffContainerModule, DaffErrorStateMatcher, DaffFeatureComponent, DaffFeatureIconDirective, DaffFeatureModeEnum, DaffFeatureModule, DaffFeatureSubheaderDirective, DaffFeatureSubtitleDirective, DaffFeatureTitleDirective, DaffFormFieldComponent, DaffFormFieldControl, DaffFormFieldModule, DaffGalleryImageComponent, DaffHeroComponent, DaffHeroLayoutEnum, DaffHeroModule, DaffHeroSizeEnum, DaffHeroSubtitleDirective, DaffHeroTitleDirective, DaffImageComponent, DaffImageGalleryComponent, DaffImageGalleryModule, DaffImageListComponent, DaffImageListModule, DaffImageModule, DaffInputComponent, DaffInputModule, DaffLinkSetComponent, DaffLinkSetHeadingDirective, DaffLinkSetItemComponent, DaffLinkSetModule, DaffLinkSetSubheadingDirective, DaffListComponent, DaffListItemComponent, DaffListModeEnum, DaffListModule, DaffListSubheaderDirective, DaffLoadingIconComponent, DaffLoadingIconModule, DaffModalComponent, DaffModalModule, DaffModalService, DaffNativeSelectComponent, DaffNativeSelectModule, DaffNavbarComponent, DaffNavbarModule, DaffPaginatorComponent, DaffPaginatorModule, DaffPrefixDirective, DaffPrefixSuffixModule, DaffProgressIndicatorComponent, DaffProgressIndicatorModule, DaffQtyDropdownComponent, DaffQtyDropdownModule, DaffRadioComponent, DaffRadioModule, DaffRadioSetComponent, DaffSidebarComponent, DaffSidebarModule, DaffSidebarViewportComponent, DaffStatusEnum, DaffSuffixDirective, colorInPalette, daffColorMixin, daffPrefixableMixin, daffSuffixableMixin, DaffErrorMessageModule as ɵa, DaffErrorMessageComponent as ɵb, DaffCheckboxControlValueAccessorDirective as ɵc, daffProgressIndicatorAnimation as ɵd, DaffRadioControlValueAccessorDirective as ɵe, DaffRadioRegistry as ɵf, daffAccordionAnimations as ɵg, daffBackdropAnimations as ɵh, daffFadeAnimations as ɵi, DaffModalHeaderComponent as ɵj, DaffModalTitleDirective as ɵk, DaffModalContentComponent as ɵl, DaffModalActionsComponent as ɵm, daffSidebarAnimations as ɵn };
//# sourceMappingURL=daffodil-design.js.map
