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
const DaffPaletteEnum = {
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
    return class extends Base {
        /**
         * @return {?}
         */
        get color() { return this._color; }
        /**
         * @param {?} value
         * @return {?}
         */
        set color(value) {
            //Handle the default color
            /** @type {?} */
            const incomingColor = value || defaultColor;
            if (incomingColor !== undefined && !colorInPalette(incomingColor)) {
                throw new TypeError(incomingColor + ' is not a valid color for the DaffPalette');
            }
            if (incomingColor !== this._color) { //Only run the dom-render if a change occurs
                //Remove the old color
                if (this._color) {
                    this._renderer.removeClass(this._elementRef.nativeElement, `daff-${this._color}`);
                }
                if (incomingColor) {
                    this._renderer.addClass(this._elementRef.nativeElement, `daff-${incomingColor}`);
                }
                this._color = incomingColor;
            }
        }
        /**
         * @param {...?} args
         */
        constructor(...args) {
            super(...args);
            this.color = defaultColor;
        }
    };
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
class DaffPrefixDirective {
    constructor() {
        this.class = true;
    }
}
DaffPrefixDirective.decorators = [
    { type: Directive, args: [{
                selector: '[daffPrefix]'
            },] }
];
DaffPrefixDirective.propDecorators = {
    class: [{ type: HostBinding, args: ['class.daff-prefix',] }]
};
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
class DaffSuffixDirective {
    constructor() {
        this.class = true;
    }
}
DaffSuffixDirective.decorators = [
    { type: Directive, args: [{
                selector: '[daffSuffix]',
            },] }
];
DaffSuffixDirective.propDecorators = {
    class: [{ type: HostBinding, args: ['class.daff-suffix',] }]
};
if (false) {
    /** @type {?} */
    DaffSuffixDirective.prototype.class;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class DaffPrefixSuffixModule {
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
    class Suffixable extends Base {
        /**
         * @param {...?} args
         */
        constructor(...args) {
            super(...args);
        }
    }
    Suffixable.propDecorators = {
        _suffix: [{ type: ContentChild, args: [DaffSuffixDirective, { static: true },] }]
    };
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
    class Prefixable extends Base {
        /**
         * @param {...?} args
         */
        constructor(...args) {
            super(...args);
        }
    }
    Prefixable.propDecorators = {
        _prefix: [{ type: ContentChild, args: [DaffPrefixDirective, { static: true },] }]
    };
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
    return class extends Base {
        /**
         * @return {?}
         */
        get size() { return this._size; }
        /**
         * @param {?} value
         * @return {?}
         */
        set size(value) {
            // Handles the default size
            /** @type {?} */
            const incomingSize = value || defaultSize;
            if (incomingSize !== this._size) { //Only run the dom-render if a change occurs
                //Remove the old size
                if (this._size) {
                    this._renderer.removeClass(this._elementRef.nativeElement, `daff-${this._size}`);
                }
                if (incomingSize) {
                    this._renderer.addClass(this._elementRef.nativeElement, `daff-${incomingSize}`);
                }
                this._size = incomingSize;
            }
        }
        /**
         * @param {...?} args
         */
        constructor(...args) {
            super(...args);
            this.size = defaultSize;
        }
    };
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * List of classes to add to DaffButtonComponent instances based on host attributes to style as different variants.
 * @type {?}
 */
const BUTTON_HOST_ATTRIBUTES = [
    'daff-button',
    'daff-stroked-button',
    'daff-raised-button',
    'daff-icon-button',
    'daff-underline-button'
];
/**
 * An _elementRef and an instance of renderer2 are needed for the button mixins
 */
class DaffButtonBase {
    /**
     * @param {?} _elementRef
     * @param {?} _renderer
     */
    constructor(_elementRef, _renderer) {
        this._elementRef = _elementRef;
        this._renderer = _renderer;
    }
}
if (false) {
    /** @type {?} */
    DaffButtonBase.prototype._elementRef;
    /** @type {?} */
    DaffButtonBase.prototype._renderer;
}
/** @type {?} */
const _daffButtonBase = daffPrefixableMixin(daffSuffixableMixin(daffColorMixin(daffSizeMixin(DaffButtonBase, 'md'), 'theme-contrast')));
/** @enum {string} */
const DaffButtonTypeEnum = {
    Default: 'daff-button',
    Stroked: 'daff-stroked-button',
    Raised: 'daff-raised-button',
    Icon: 'daff-icon-button',
    Underline: 'daff-underline-button',
};
class DaffButtonComponent extends _daffButtonBase {
    /**
     * @param {?} elementRef
     * @param {?} renderer
     */
    constructor(elementRef, renderer) {
        super(elementRef, renderer);
        this.elementRef = elementRef;
        this.renderer = renderer;
        for (const attr of BUTTON_HOST_ATTRIBUTES) {
            if (this._hasHostAttributes(attr)) {
                ((/** @type {?} */ (elementRef.nativeElement))).classList.add(attr);
            }
        }
    }
    /**
     * \@docs-private
     * @return {?}
     */
    ngOnInit() {
        for (const attr of BUTTON_HOST_ATTRIBUTES) {
            if (this._hasHostAttributes(attr)) {
                this.buttonType = attr;
            }
        }
    }
    /**
     * \@docs-private
     * @return {?}
     */
    get button() {
        return this.buttonType === DaffButtonTypeEnum.Default || this.buttonType === undefined;
    }
    /**
     * \@docs-private
     * @return {?}
     */
    get stroked() {
        return this.buttonType === DaffButtonTypeEnum.Stroked;
    }
    /**
     * \@docs-private
     * @return {?}
     */
    get raised() {
        return this.buttonType === DaffButtonTypeEnum.Raised;
    }
    /**
     * \@docs-private
     * @return {?}
     */
    get icon() {
        return this.buttonType === DaffButtonTypeEnum.Icon;
    }
    /**
     * \@docs-private
     * @return {?}
     */
    get underline() {
        return this.buttonType === DaffButtonTypeEnum.Underline;
    }
    /**
     * @private
     * @return {?}
     */
    _getHostElement() {
        return this.elementRef.nativeElement;
    }
    /**
     * Gets whether the button has one of the given attributes.
     *
     * @private
     * @param {...?} attributes
     * @return {?}
     */
    _hasHostAttributes(...attributes) {
        return attributes.some((/**
         * @param {?} attribute
         * @return {?}
         */
        attribute => this._getHostElement().hasAttribute(attribute)));
    }
}
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
DaffButtonComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: Renderer2 }
];
DaffButtonComponent.propDecorators = {
    color: [{ type: Input }],
    size: [{ type: Input }],
    button: [{ type: HostBinding, args: ['class.daff-button',] }],
    stroked: [{ type: HostBinding, args: ['class.daff-stroked-button',] }],
    raised: [{ type: HostBinding, args: ['class.daff-raised-button',] }],
    icon: [{ type: HostBinding, args: ['class.daff-icon-button',] }],
    underline: [{ type: HostBinding, args: ['class.daff-underline-button',] }]
};
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
class DaffButtonModule {
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class DaffErrorStateMatcher {
    /**
     * @param {?} control
     * @param {?} formSubmitted
     * @return {?}
     */
    isErrorState(control, formSubmitted) {
        return control.errors && (control.touched || formSubmitted);
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
class DaffFormFieldControl {
}
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
const DaffFormFieldMissingControlMessage = 'A DaffFormFieldComponent must contain a DaffFormFieldControl';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class DaffFormFieldComponent {
    constructor() {
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
     * \@docs-private
     * @return {?}
     */
    ngDoCheck() {
        if (this._control) {
            this.isError = this._control.ngControl.errors && (this._control.ngControl.touched);
            this.isValid = !this._control.ngControl.errors && this._control.ngControl.touched;
        }
    }
    /**
     * Validate whether or not the FormField is in
     * a "usable" state.
     * @private
     * @return {?}
     */
    _validateFormControl() {
        if (!this._control) {
            throw new Error(DaffFormFieldMissingControlMessage);
        }
    }
    /**
     * Life cycle hook to verify that the form field has an acceptable
     * child control instance. Mostly useful for development-time
     * validation of usage.
     *
     * \@docs-private
     * @return {?}
     */
    ngAfterContentInit() {
        this._validateFormControl();
    }
    /**
     * Life cycle hook to verify that the form field has an acceptable
     * child control instance. Mostly useful for development-time
     * validation of usage.
     *
     * \@docs-private
     * @return {?}
     */
    ngAfterContentChecked() {
        this._validateFormControl();
    }
}
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
class DaffErrorMessageComponent {
}
DaffErrorMessageComponent.decorators = [
    { type: Component, args: [{
                selector: 'daff-error-message',
                template: '<ng-content></ng-content>',
                changeDetection: ChangeDetectionStrategy.OnPush,
                styles: [":host{display:block;font-size:.75rem;margin-top:5px}"]
            }] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class DaffErrorMessageModule {
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class DaffFormFieldModule {
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const validateProperty = (/**
 * @param {?} object
 * @param {?} prop
 * @return {?}
 */
(object, prop) => {
    if (object[prop] === null || object[prop] === undefined || object[prop] === '') {
        throw new Error(`DaffImageComponent must have a defined ${prop} attribute.`);
    }
});
const ɵ0 = validateProperty;
/** @type {?} */
const validateProperties = (/**
 * @param {?} object
 * @param {?} props
 * @return {?}
 */
(object, props) => {
    /** @type {?} */
    const invalidProps = props.filter((/**
     * @param {?} prop
     * @return {?}
     */
    prop => {
        try {
            validateProperty(object, prop);
        }
        catch (e) {
            return true;
        }
        return false;
    }));
    if (invalidProps.length) {
        throw new Error(`DaffImageComponent must have the ${invalidProps.join(',')} attributes defined.`);
    }
});
const ɵ1 = validateProperties;
class DaffImageComponent {
    /**
     * @param {?} sanitizer
     */
    constructor(sanitizer) {
        this.sanitizer = sanitizer;
        this.load = new EventEmitter();
    }
    /**
     * @return {?}
     */
    get src() { return this._src; }
    /**
     * @param {?} value
     * @return {?}
     */
    set src(value) {
        this._src = value;
        validateProperty(this, 'src');
    }
    /**
     * @return {?}
     */
    get alt() { return this._alt; }
    /**
     * @param {?} value
     * @return {?}
     */
    set alt(value) {
        this._alt = value;
        validateProperty(this, 'alt');
    }
    /**
     * @return {?}
     */
    get width() { return this._width; }
    /**
     * @param {?} value
     * @return {?}
     */
    set width(value) {
        this._width = value;
        validateProperty(this, 'width');
    }
    /**
     * @return {?}
     */
    get height() { return this._height; }
    /**
     * @param {?} value
     * @return {?}
     */
    set height(value) {
        this._height = value;
        validateProperty(this, 'height');
    }
    /**
     * \@docs-private
     * @return {?}
     */
    ngOnInit() {
        validateProperties(this, ['src', 'alt', 'width', 'height']);
    }
    /**
     * \@docs-private
     * @return {?}
     */
    get paddingTop() {
        if (!this.height || !this.width) {
            return undefined;
        }
        return this.sanitizer.bypassSecurityTrustStyle('calc(' + this.height + ' / ' + this.width + ' * 100%)');
    }
    /**
     * \@docs-private
     * @return {?}
     */
    get maxWidth() {
        return this.width + 'px';
    }
}
DaffImageComponent.decorators = [
    { type: Component, args: [{
                selector: 'daff-image',
                template: "<div class=\"daff-image__wrapper\" [style.paddingTop]=\"paddingTop\">\n\t<img [src]=\"src\" [alt]=\"alt\" (load)=\"load.emit\" />\n</div>",
                changeDetection: ChangeDetectionStrategy.OnPush,
                styles: [":host{display:inline-block;width:100%}:host img{position:absolute;left:0;top:0;height:auto;max-width:100%}.daff-image__wrapper{position:relative;height:0}"]
            }] }
];
/** @nocollapse */
DaffImageComponent.ctorParameters = () => [
    { type: DomSanitizer }
];
DaffImageComponent.propDecorators = {
    src: [{ type: Input }],
    alt: [{ type: Input }],
    width: [{ type: Input }],
    height: [{ type: Input }],
    load: [{ type: Output }],
    maxWidth: [{ type: HostBinding, args: ['style.max-width',] }]
};
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
class DaffImageModule {
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
class DaffInputComponent {
    /**
     * @param {?} ngControl
     * @param {?} _elementRef
     */
    constructor(ngControl, _elementRef) {
        this.ngControl = ngControl;
        this._elementRef = _elementRef;
        this.focused = false;
    }
    /**
     * \@docs-private
     * @return {?}
     */
    focus() {
        this.focused = true;
    }
    /**
     * \@docs-private
     * @return {?}
     */
    blur() {
        this.focused = false;
    }
    /**
     * @return {?}
     */
    onFocus() {
        this._elementRef.nativeElement.focus();
    }
}
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
DaffInputComponent.ctorParameters = () => [
    { type: NgControl, decorators: [{ type: Optional }, { type: Self }] },
    { type: ElementRef }
];
DaffInputComponent.propDecorators = {
    formSubmitted: [{ type: Input }],
    focus: [{ type: HostListener, args: ['focus',] }],
    blur: [{ type: HostListener, args: ['blur',] }]
};
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
class DaffInputModule {
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class DaffNativeSelectComponent {
    /**
     * @param {?} ngControl
     * @param {?} _elementRef
     */
    constructor(ngControl, _elementRef) {
        this.ngControl = ngControl;
        this._elementRef = _elementRef;
        /**
         * \@docs-private
         */
        this.controlType = 'native-select';
        this.focused = false;
    }
    /**
     * \@docs-private
     * @return {?}
     */
    focus() {
        this.focused = true;
    }
    /**
     * \@docs-private
     * @return {?}
     */
    blur() {
        this.focused = false;
    }
    /**
     * @return {?}
     */
    onFocus() {
        this._elementRef.nativeElement.focus();
    }
}
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
DaffNativeSelectComponent.ctorParameters = () => [
    { type: NgControl, decorators: [{ type: Optional }, { type: Self }] },
    { type: ElementRef }
];
DaffNativeSelectComponent.propDecorators = {
    formSubmitted: [{ type: Input }],
    focus: [{ type: HostListener, args: ['focus',] }],
    blur: [{ type: HostListener, args: ['blur',] }]
};
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
class DaffNativeSelectModule {
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
let checkboxIdNum = 0;
class DaffCheckboxComponent {
    /**
     * @param {?} _cdRef
     */
    constructor(_cdRef) {
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
    /**
     * @return {?}
     */
    get checked() {
        return this._checked;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set checked(value) {
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
    }
    /**
     * \@docs-private
     * @param {?} val
     * @return {?}
     */
    _onChange(val) {
        ((/** @type {?} */ (val.target))).checked ? this.select() : this.deselect();
    }
    ;
    /**
     * \@docs-private
     * @return {?}
     */
    get focusClass() {
        return this.focused === true;
    }
    ;
    /**
     * \@docs-private
     * @return {?}
     */
    get disabledClass() {
        return this.disabled === true;
    }
    ;
    /**
     * Sets focused to false.
     * @return {?}
     */
    onBlur() {
        this.focused = false;
    }
    /**
     * Sets focused to true.
     * @return {?}
     */
    onFocus() {
        this.focused = true;
    }
    /**
     * Sets checked to true.
     * @return {?}
     */
    select() {
        this.checked = true;
        this._cdRef.markForCheck();
    }
    /**
     * Sets checked to false
     * @return {?}
     */
    deselect() {
        this.checked = false;
        this._cdRef.markForCheck();
    }
}
DaffCheckboxComponent.decorators = [
    { type: Component, args: [{
                selector: 'daff-checkbox',
                template: "<input #inputElement\ntype=\"checkbox\"\n[attr.aria-label]=\"label\"\n[attr.aria-labelledby]=\"labeledBy\"\n[attr.checked]=\"checked ? '' : null\"\n[attr.id] = \"id\"\n[attr.value]=\"value\"\n[attr.name]=\"name\"\n[attr.disabled] = \"disabled ? '' : null\" \n(change)=\"_onChange($event)\"\n(blur)=\"onBlur()\"\n(focus)=\"onFocus()\"\n/>\n<label [attr.for]=\"id\"><ng-content></ng-content></label>",
                changeDetection: ChangeDetectionStrategy.OnPush,
                styles: [""]
            }] }
];
/** @nocollapse */
DaffCheckboxComponent.ctorParameters = () => [
    { type: ChangeDetectorRef }
];
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
class DaffCheckboxSetComponent {
    constructor() {
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
    getValues() {
        /** @type {?} */
        const checkboxes = this.checkboxes.toArray();
        return this.formArray.value.map((/**
         * @param {?} element
         * @param {?} index
         * @return {?}
         */
        (element, index) => {
            return element === true ? checkboxes[index].value : false;
        })).filter((/**
         * @param {?} element
         * @return {?}
         */
        element => element !== false));
    }
}
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
class DaffCheckboxControlValueAccessorDirective {
    /**
     * @param {?} _control
     * @param {?} _checkbox
     */
    constructor(_control, _checkbox) {
        this._control = _control;
        this._checkbox = _checkbox;
        if (this._control != null) {
            this._control.valueAccessor = this;
        }
    }
    /**
     * A lifecycle method called when the directive is initialized.
     * @return {?}
     */
    ngOnInit() {
        // See the note about `writeValue` usage.
        this.writeValue(this._control.value);
        // Watch for user events on the component to update the state
        this._checkbox.becameChecked.subscribe((/**
         * @return {?}
         */
        () => {
            this._onChange(true);
        }));
        this._checkbox.becameUnchecked.subscribe((/**
         * @return {?}
         */
        () => {
            this._onChange(false);
        }));
    }
    /**
     * writes a new value down into the component.
     * @param {?} value
     * @return {?}
     */
    writeValue(value) {
        value = !!value;
        value === true ? this.fireSelect() : this.fireDeselect();
    }
    /**
     * Registers the change handler
     * @param {?} fn
     * @return {?}
     */
    registerOnChange(fn) {
        this._onChange = (/**
         * @param {?} val
         * @return {?}
         */
        (val) => {
            fn(val);
        });
    }
    /**
     * Registers the touched handler
     * @param {?} fn
     * @return {?}
     */
    registerOnTouched(fn) {
        this._onTouched = fn;
    }
    /**
     * Sets the disabled state.
     * @param {?} isDisabled
     * @return {?}
     */
    setDisabledState(isDisabled) {
        this._checkbox.disabled = isDisabled;
    }
    /**
     * calls the child checkbox's select function
     * @return {?}
     */
    fireSelect() {
        this._checkbox.select();
    }
    /**
     * calls the child checkbox's deselect function
     * @return {?}
     */
    fireDeselect() {
        this._checkbox.deselect();
    }
}
DaffCheckboxControlValueAccessorDirective.decorators = [
    { type: Directive, args: [{
                // tslint:disable-next-line: directive-selector
                selector: 'daff-checkbox[ngModel], daff-checkbox[formControl], daff-checkbox[formControlName]',
            },] }
];
/** @nocollapse */
DaffCheckboxControlValueAccessorDirective.ctorParameters = () => [
    { type: NgControl, decorators: [{ type: Optional }, { type: Self }] },
    { type: DaffCheckboxComponent }
];
DaffCheckboxControlValueAccessorDirective.propDecorators = {
    value: [{ type: Input }],
    name: [{ type: Input }]
};
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
class DaffCheckboxModule {
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
class DaffContainerBase {
    /**
     * @param {?} _elementRef
     * @param {?} _renderer
     */
    constructor(_elementRef, _renderer) {
        this._elementRef = _elementRef;
        this._renderer = _renderer;
    }
}
if (false) {
    /** @type {?} */
    DaffContainerBase.prototype._elementRef;
    /** @type {?} */
    DaffContainerBase.prototype._renderer;
}
/** @type {?} */
const _daffContainerBase = daffSizeMixin(DaffContainerBase);
class DaffContainerComponent extends _daffContainerBase {
    /**
     * @param {?} elementRef
     * @param {?} renderer
     */
    constructor(elementRef, renderer) {
        super(elementRef, renderer);
        this.elementRef = elementRef;
        this.renderer = renderer;
        /**
         * \@docs-private
         */
        this.class = true;
    }
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
DaffContainerComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: Renderer2 }
];
DaffContainerComponent.propDecorators = {
    size: [{ type: Input }],
    class: [{ type: HostBinding, args: ['class.daff-container',] }]
};
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
class DaffContainerModule {
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
class DaffLoadingIconBase {
    /**
     * @param {?} _elementRef
     * @param {?} _renderer
     */
    constructor(_elementRef, _renderer) {
        this._elementRef = _elementRef;
        this._renderer = _renderer;
    }
}
if (false) {
    /** @type {?} */
    DaffLoadingIconBase.prototype._elementRef;
    /** @type {?} */
    DaffLoadingIconBase.prototype._renderer;
}
/** @type {?} */
const _daffLoadingIconBase = daffColorMixin(DaffLoadingIconBase, 'primary');
class DaffLoadingIconComponent extends _daffLoadingIconBase {
    /**
     * @param {?} elementRef
     * @param {?} renderer
     */
    constructor(elementRef, renderer) {
        super(elementRef, renderer);
        this.elementRef = elementRef;
        this.renderer = renderer;
        /**
         * The (pixel) diameter of the animation
         */
        // tslint:disable-next-line: no-inferrable-types
        this.diameter = 60;
        /**
         * \@docs-private
         */
        this.class = true;
    }
    /**
     * \@docs-private
     * @return {?}
     */
    get maxWidth() {
        return this.diameter + 'px';
    }
}
DaffLoadingIconComponent.decorators = [
    { type: Component, args: [{
                selector: 'daff-loading-icon',
                template: "<svg focusable=\"false\" preserveAspectRatio=\"xMidYMid meet\" viewBox=\"0 0 100 100\">\n        <circle cx=\"50%\" cy=\"50%\" r=\"46\"></circle>\n</svg>",
                changeDetection: ChangeDetectionStrategy.OnPush,
                styles: [":host{display:block}circle{-webkit-animation:1s linear infinite rotation,1s linear infinite circle-animation;animation:1s linear infinite rotation,1s linear infinite circle-animation;fill:transparent;stroke-dasharray:101.15928 400;stroke-linecap:round;stroke-width:5px;transform-origin:center}@-webkit-keyframes circle-animation{0%{stroke-dasharray:101.15928 400;stroke-dashoffset:101.15928}50%{stroke-dasharray:101.15928 400;stroke-dashoffset:28.90265}75%{stroke-dasharray:101.15928 400;stroke-dashoffset:0}100%{stroke-dasharray:0 400;stroke-dashoffset:-101.15928}}@keyframes circle-animation{0%{stroke-dasharray:101.15928 400;stroke-dashoffset:101.15928}50%{stroke-dasharray:101.15928 400;stroke-dashoffset:28.90265}75%{stroke-dasharray:101.15928 400;stroke-dashoffset:0}100%{stroke-dasharray:0 400;stroke-dashoffset:-101.15928}}@-webkit-keyframes rotation{0%{transform:rotate(-90deg)}50%,50.5%{transform:rotate(0)}75%,75.5%{transform:rotate(90deg)}100%,99%{transform:rotate(144deg)}}@keyframes rotation{0%{transform:rotate(-90deg)}50%,50.5%{transform:rotate(0)}75%,75.5%{transform:rotate(90deg)}100%,99%{transform:rotate(144deg)}}"]
            }] }
];
/** @nocollapse */
DaffLoadingIconComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: Renderer2 }
];
DaffLoadingIconComponent.propDecorators = {
    color: [{ type: Input }],
    diameter: [{ type: Input }],
    class: [{ type: HostBinding, args: ['class.daff-loading-icon',] }],
    maxWidth: [{ type: HostBinding, args: ['style.max-width',] }]
};
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
class DaffLoadingIconModule {
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const daffProgressIndicatorAnimation = {
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
class DaffProgressIndicatorBase {
    /**
     * @param {?} _elementRef
     * @param {?} _renderer
     */
    constructor(_elementRef, _renderer) {
        this._elementRef = _elementRef;
        this._renderer = _renderer;
    }
}
if (false) {
    /** @type {?} */
    DaffProgressIndicatorBase.prototype._elementRef;
    /** @type {?} */
    DaffProgressIndicatorBase.prototype._renderer;
}
/** @type {?} */
const _daffProgressIndicatorBase = daffColorMixin(DaffProgressIndicatorBase, 'primary');
class DaffProgressIndicatorComponent extends _daffProgressIndicatorBase {
    /**
     * @param {?} elementRef
     * @param {?} renderer
     */
    constructor(elementRef, renderer) {
        super(elementRef, renderer);
        this.elementRef = elementRef;
        this.renderer = renderer;
        /**
         * \@docs-private
         */
        this.class = true;
        /**
         * The percentage completion of the progression,
         * expressed as a whole number between 0 and 100.
         *
         */
        // tslint:disable-next-line: no-inferrable-types
        this.percentage = 0;
        /**
         * An event that emits each time the progression reaches 100%
         * and the animation is finished
         */
        this.finished = new EventEmitter();
    }
    /**
     * Calculates when the progress animation is fully completed
     * @param {?} event
     * @return {?}
     */
    onAnimationComplete(event) {
        // @ts-ignore: @angular/animations typing error on event.toState as string
        // See: https://github.com/angular/angular/issues/26507
        if (event.toState === '100' || event.toState === 100) {
            this.finished.emit();
        }
    }
    /**
     * \@docs-private
     * @return {?}
     */
    get fillState() {
        return {
            value: this.percentage,
            params: {
                percentage: this.percentage
            }
        };
    }
}
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
DaffProgressIndicatorComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: Renderer2 }
];
DaffProgressIndicatorComponent.propDecorators = {
    class: [{ type: HostBinding, args: ['class.daff-progress-indicator',] }],
    color: [{ type: Input }],
    percentage: [{ type: Input }],
    finished: [{ type: Output }]
};
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
class DaffProgressIndicatorModule {
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class DaffRadioSetComponent {
    constructor() {
        /**
         * \@docs-private
         */
        this.role = 'radiogroup';
    }
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
DaffRadioSetComponent.ctorParameters = () => [];
DaffRadioSetComponent.propDecorators = {
    name: [{ type: Input }],
    role: [{ type: HostBinding, args: ['attr.role',] }]
};
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
let radioUniqueId = 0;
class DaffRadioComponent {
    /**
     * @param {?} radioset
     */
    constructor(radioset) {
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
    /**
     * \@docs-private
     * @return {?}
     */
    get focusClass() {
        return this.focused === true;
    }
    ;
    /**
     * \@docs-private
     * @return {?}
     */
    get disabledClass() {
        return this.disabled === true;
    }
    ;
    /**
     * The checked property of the radio
     * @return {?}
     */
    get checked() {
        return this._checked;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set checked(value) {
        if (this._checked !== value) {
            this._checked = value;
            this.selectionChange.emit(this.value);
        }
    }
    /**
     * \@docs-private
     * @return {?}
     */
    ngOnInit() {
        this.name = this.radioset ? this.radioset.name : this.name;
    }
    /**
     * updates Focus styling
     * @return {?}
     */
    onFocus() {
        this.focused = true;
    }
    /**
     * updates Blur styling
     * @return {?}
     */
    onBlur() {
        this.focused = false;
    }
    /**
     * toggles checked attribute on
     * @return {?}
     */
    select() {
        this.checked = true;
    }
    /**
     * toggles checked attribute off
     * @return {?}
     */
    deselect() {
        this.checked = false;
    }
    /**
     * @return {?}
     */
    onChange() {
        this.select();
    }
    ;
}
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
                        () => DaffRadioComponent)),
                        multi: true
                    }
                ],
                changeDetection: ChangeDetectionStrategy.OnPush,
                styles: [""]
            }] }
];
/** @nocollapse */
DaffRadioComponent.ctorParameters = () => [
    { type: DaffRadioSetComponent, decorators: [{ type: Optional }] }
];
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
class DaffRadioRegistry {
    constructor() {
        this._accessors = [];
    }
    /**
     * \@description
     * Adds a control to the internal registry.
     * @param {?} control
     * @param {?} accessor
     * @return {?}
     */
    add(control, accessor) {
        this._accessors.push({
            control: control,
            accessor: accessor
        });
    }
    /**
     * \@description
     * Removes a control from the internal registry.
     * @param {?} accessor
     * @return {?}
     */
    remove(accessor) {
        for (let i = this._accessors.length - 1; i >= 0; --i) {
            if (this._accessors[i]['accessor'] === accessor) {
                this._accessors.splice(i, 1);
                return;
            }
        }
    }
    /**
     * \@description
     * Selects a radio button.
     * @param {?} accessor
     * @return {?}
     */
    select(accessor) {
        this._accessors.forEach((/**
         * @param {?} c
         * @return {?}
         */
        (c) => {
            if (this._isSameGroup(c, accessor) && c['accessor'] !== accessor) {
                c['accessor'].fireDeselect();
            }
        }));
    }
    /**
     * @private
     * @param {?} controlPair
     * @param {?} accessor
     * @return {?}
     */
    _isSameGroup(controlPair, accessor) {
        if (!controlPair['control'].control) {
            return false;
        }
        return controlPair['control'].control.parent === accessor._control.control.parent
            && controlPair['accessor'].name === accessor.name;
    }
}
DaffRadioRegistry.decorators = [
    { type: Injectable }
];
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
class DaffRadioControlValueAccessorDirective {
    /**
     * @param {?} _control
     * @param {?} _registry
     * @param {?} _radio
     */
    constructor(_control, _registry, _radio) {
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
    ngOnInit() {
        this.writeValue(this._control.value);
        this._registry.add(this._control, this);
        this._radio.selectionChange.subscribe((/**
         * @param {?} value
         * @return {?}
         */
        value => value ? this._onChange() : null));
    }
    /**
     *
     * writeValue function from the CVA interface
     * @param {?} value
     * @return {?}
     */
    writeValue(value) {
        if (this.value === value) {
            this._onChange();
            this.fireSelect();
        }
    }
    /**
     * registerOnChange implemented from the CVA interface
     * @param {?} fn
     * @return {?}
     */
    registerOnChange(fn) {
        this._onChange = (/**
         * @return {?}
         */
        () => {
            fn(this.value);
            this._registry.select(this);
        });
    }
    /**
     * registerOnTouch implemented from the CVA interface
     * @param {?} fn
     * @return {?}
     */
    registerOnTouched(fn) {
        this._onTouched = fn;
    }
    /**
     * sets the disabled state.
     * @param {?} isDisabled
     * @return {?}
     */
    setDisabledState(isDisabled) {
        this._radio.disabled = isDisabled;
    }
    /**
     * calls select function for the radio
     * @return {?}
     */
    fireSelect() {
        this._radio.select();
    }
    /**
     * calls deselect function for the radio
     * @return {?}
     */
    fireDeselect() {
        this._radio.deselect();
    }
}
DaffRadioControlValueAccessorDirective.decorators = [
    { type: Directive, args: [{
                // tslint:disable-next-line: directive-selector
                selector: 'daff-radio[ngModel], daff-radio[formControl], daff-radio[formControlName]'
            },] }
];
/** @nocollapse */
DaffRadioControlValueAccessorDirective.ctorParameters = () => [
    { type: NgControl, decorators: [{ type: Optional }, { type: Self }] },
    { type: DaffRadioRegistry },
    { type: DaffRadioComponent }
];
DaffRadioControlValueAccessorDirective.propDecorators = {
    value: [{ type: Input }],
    name: [{ type: Input }]
};
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
class DaffRadioModule {
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class DaffAccordionComponent {
}
DaffAccordionComponent.decorators = [
    { type: Component, args: [{
                selector: 'daff-accordion',
                template: "<ng-content select=\"daff-accordion-item\"></ng-content>",
                styles: [":host{display:block;width:100%}"]
            }] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const daffAccordionAnimations = {
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
const getAnimationState = (/**
 * @param {?} open
 * @return {?}
 */
(open) => {
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
class DaffAccordionItemComponent {
    constructor() {
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
     * \@docs-private
     * @return {?}
     */
    ngOnInit() {
        this._open = this.initiallyActive ? this.initiallyActive : this._open;
        this._animationState = getAnimationState(this._open);
    }
    /**
     * @return {?}
     */
    toggleActive() {
        this._open = !this._open;
        this._animationState = getAnimationState(this._open);
    }
}
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
class DaffAccordionItemTitleDirective {
    constructor() {
        /**
         * \@docs-private
         */
        this.class = true;
    }
}
DaffAccordionItemTitleDirective.decorators = [
    { type: Directive, args: [{
                selector: '[daffAccordionItemTitle]',
            },] }
];
DaffAccordionItemTitleDirective.propDecorators = {
    class: [{ type: HostBinding, args: ['class.daff-accordion-item__title',] }]
};
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
class DaffAccordionItemContentDirective {
    constructor() {
        /**
         * \@docs-private
         */
        this.class = true;
    }
}
DaffAccordionItemContentDirective.decorators = [
    { type: Directive, args: [{
                selector: '[daffAccordionItemContent]',
            },] }
];
DaffAccordionItemContentDirective.propDecorators = {
    class: [{ type: HostBinding, args: ['class.daff-accordion-item__content',] }]
};
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
class DaffAccordionModule {
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
class DaffArticleComponent {
    constructor() {
        /**
         * \@docs-private
         */
        this.class = true;
        /**
         * \@docs-private
         */
        this.role = 'article';
    }
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
class DaffArticleTitleDirective {
    constructor() {
        /**
         * \@docs-private
         */
        this.class = true;
    }
}
DaffArticleTitleDirective.decorators = [
    { type: Directive, args: [{
                selector: '[daffArticleTitle]'
            },] }
];
DaffArticleTitleDirective.propDecorators = {
    class: [{ type: HostBinding, args: ['class.daff-article__title',] }]
};
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
class DaffArticleLeadDirective {
    constructor() {
        /**
         * \@docs-private
         */
        this.class = true;
    }
}
DaffArticleLeadDirective.decorators = [
    { type: Directive, args: [{
                selector: '[daffArticleLead]'
            },] }
];
DaffArticleLeadDirective.propDecorators = {
    class: [{ type: HostBinding, args: ['class.daff-article__lead',] }]
};
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
class DaffArticleMetaDirective {
    constructor() {
        /**
         * \@docs-private
         */
        this.class = true;
    }
}
DaffArticleMetaDirective.decorators = [
    { type: Directive, args: [{
                selector: '[daffArticleMeta]'
            },] }
];
DaffArticleMetaDirective.propDecorators = {
    class: [{ type: HostBinding, args: ['class.daff-article__meta',] }]
};
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
class DaffArticleModule {
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const animationDuration = '350ms';
/** @type {?} */
const backdropTransitionOut = 'cubic-bezier(0.4, 0.0, 1, 1)';
/** @type {?} */
const backdropTransitionIn = 'cubic-bezier(0.0, 0.0, 0.2, 1)';
/** @type {?} */
const daffBackdropAnimations = {
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
class DaffBackdropComponent {
    constructor() {
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
     * @return {?}
     */
    onBackdropClicked() {
        this.backdropClicked.emit();
    }
}
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
class DaffBackdropModule {
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class DaffButtonSetComponent {
    constructor() {
        /**
         * \@docs-private
         */
        this.class = true;
    }
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
class DaffButtonSetModule {
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class DaffImageGalleryComponent {
}
DaffImageGalleryComponent.decorators = [
    { type: Component, args: [{
                selector: 'daff-image-gallery',
                template: "<div class=\"daff-image-gallery\">\n  <div class=\"daff-image-gallery__active-image\">\n    <ng-content select=\"[daff-active-image]\"></ng-content>\n  </div>\n\n  <daff-image-list class=\"daff-image-gallery__image-list\">\n    <ng-content select=\"daff-gallery-image\"></ng-content>\n  </daff-image-list>\n</div>\n",
                encapsulation: ViewEncapsulation.None,
                styles: [".daff-image-gallery{display:-ms-grid;display:grid;flex-direction:column;grid-template-areas:'active-image' 'image-list';max-height:100%}@media (min-width:1024px){.daff-image-gallery{grid-template-areas:'image-list active-image';max-height:-webkit-min-content;max-height:-moz-min-content;max-height:min-content}}.daff-image-gallery__active-image{-ms-grid-row:1;-ms-grid-column:1;grid-area:active-image}.daff-image-gallery__active-image img{display:block;max-width:100%}.daff-image-gallery__image-list{-ms-grid-row:2;-ms-grid-column:1;grid-area:image-list;margin:5px 0 0;max-height:100%}@media (min-width:1024px){.daff-image-gallery__active-image{-ms-grid-row:1;-ms-grid-column:2}.daff-image-gallery__image-list{-ms-grid-row:1;-ms-grid-column:1;margin:0 25px 0 0;max-height:-webkit-fill-available}}.daff-image-gallery__daff-gallery-image img{display:block;opacity:.6;width:90px}.daff-image-gallery__daff-gallery-image--selected img{opacity:1}"]
            }] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class DaffGalleryImageComponent {
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
if (false) {
    /** @type {?} */
    DaffGalleryImageComponent.prototype.selected;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class DaffImageListComponent {
    constructor() {
        /**
         * \@docs-private
         */
        this.class = true;
    }
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
class DaffImageListModule {
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class DaffImageGalleryModule {
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
class DaffLinkSetComponent {
    constructor() {
        /**
         * \@docs-private
         */
        this.class = true;
    }
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
class DaffLinkSetSubheadingDirective {
    constructor() {
        /**
         * \@docs-private
         */
        this.class = true;
    }
}
DaffLinkSetSubheadingDirective.decorators = [
    { type: Directive, args: [{
                selector: '[daffLinkSetSubheading]'
            },] }
];
DaffLinkSetSubheadingDirective.propDecorators = {
    class: [{ type: HostBinding, args: ['class.daff-link-set__subheading',] }]
};
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
class DaffLinkSetHeadingDirective {
    constructor() {
        /**
         * \@docs-private
         */
        this.class = true;
    }
}
DaffLinkSetHeadingDirective.decorators = [
    { type: Directive, args: [{
                selector: '[daffLinkSetHeading]'
            },] }
];
DaffLinkSetHeadingDirective.propDecorators = {
    class: [{ type: HostBinding, args: ['class.daff-link-set__heading',] }]
};
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
class DaffLinkSetItemComponent {
    constructor() {
        /**
         * \@docs-private
         */
        this.class = true;
    }
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
class DaffLinkSetModule {
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @enum {string} */
const DaffListModeEnum = {
    Multiline: 'multi-line',
    Link: 'link',
    Navigation: 'navigation',
};
/** @enum {string} */
const DaffListTypeEnum = {
    Default: 'daff-list',
    Nav: 'daff-nav-list',
};
class DaffListComponent {
    /**
     * @param {?} elementRef
     */
    constructor(elementRef) {
        this.elementRef = elementRef;
    }
    /**
     * \@docs-private
     * @return {?}
     */
    get list() {
        return this.listType === DaffListTypeEnum.Default;
    }
    /**
     * \@docs-private
     * @deprecated
     *
     * @return {?}
     */
    get multiline() {
        return this.mode === DaffListModeEnum.Multiline;
    }
    /**
     * \@docs-private
     * @deprecated
     *
     * @return {?}
     */
    get link() {
        return this.mode === DaffListModeEnum.Link;
    }
    /**
     * \@docs-private
     * @deprecated
     *
     * @return {?}
     */
    get navigation() {
        return this.mode === DaffListModeEnum.Navigation;
    }
    /**
     * \@docs-private
     * @return {?}
     */
    get listType() {
        return this._getHostElement().localName;
    }
    /**
     * \@docs-private
     * @return {?}
     */
    get nav() {
        return this.listType === DaffListTypeEnum.Nav;
    }
    /**
     * Sets the role for a `<daff-nav-list>` to navigation.
     * \@docs-private
     * @return {?}
     */
    get role() {
        return this.listType === DaffListTypeEnum.Nav ? 'navigation' : 'list';
    }
    ;
    /**
     * @private
     * @return {?}
     */
    _getHostElement() {
        return this.elementRef.nativeElement;
    }
}
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
DaffListComponent.ctorParameters = () => [
    { type: ElementRef }
];
DaffListComponent.propDecorators = {
    mode: [{ type: Input }],
    list: [{ type: HostBinding, args: ['class.daff-list',] }],
    multiline: [{ type: HostBinding, args: ['class.daff-list--multi-line',] }],
    link: [{ type: HostBinding, args: ['class.daff-list--link',] }],
    navigation: [{ type: HostBinding, args: ['class.daff-list--navigation',] }],
    nav: [{ type: HostBinding, args: ['class.daff-nav-list',] }],
    role: [{ type: HostBinding, args: ['attr.role',] }]
};
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
class DaffListSubheaderDirective {
    constructor() {
        /**
         * \@docs-private
         */
        this.class = true;
    }
}
DaffListSubheaderDirective.decorators = [
    { type: Directive, args: [{
                selector: '[daffListSubheader]',
            },] }
];
DaffListSubheaderDirective.propDecorators = {
    class: [{ type: HostBinding, args: ['class.daff-list__subheader',] }]
};
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
class DaffListItemComponent {
    /**
     * @param {?} elementRef
     */
    constructor(elementRef) {
        this.elementRef = elementRef;
        /**
         * \@docs-private
         */
        this.class = true;
    }
    /**
     * Sets the role for a regular `<daff-list-item>` to listitem.
     * \@docs-private
     * @return {?}
     */
    get role() {
        return this._isAnchor() ? null : 'listitem';
    }
    ;
    /**
     * @private
     * @return {?}
     */
    _getHostElement() {
        return this.elementRef.nativeElement;
    }
    /**
     * Gets whether a list item has one of the given attributes.
     * @private
     * @return {?}
     */
    _isAnchor() {
        return this.elementRef.nativeElement.localName === 'a';
    }
}
DaffListItemComponent.decorators = [
    { type: Component, args: [{
                selector: 'daff-list-item' + ',' +
                    'a[daff-list-item]',
                template: "<ng-container *ngIf=\"_prefix\">\n  <ng-content select=\"[daffPrefix]\"></ng-content>\n</ng-container>\n<div class=\"daff-list-item__content\">\n  <ng-content></ng-content>\n</div>\n<ng-container *ngIf=\"_suffix\">\n  <ng-content select=\"[daffSuffix]\"></ng-content>\n</ng-container>",
                changeDetection: ChangeDetectionStrategy.OnPush
            }] }
];
/** @nocollapse */
DaffListItemComponent.ctorParameters = () => [
    { type: ElementRef }
];
DaffListItemComponent.propDecorators = {
    class: [{ type: HostBinding, args: ['class.daff-list-item',] }],
    _prefix: [{ type: ContentChild, args: [DaffPrefixDirective, { static: false },] }],
    _suffix: [{ type: ContentChild, args: [DaffSuffixDirective, { static: false },] }],
    role: [{ type: HostBinding, args: ['attr.role',] }]
};
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
class DaffListModule {
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const daffFadeAnimations = {
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
const getAnimationState$1 = (/**
 * @param {?} open
 * @return {?}
 */
(open) => {
    return open ? 'open' : 'closed';
});

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class DaffModalComponent {
    constructor() {
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
     * @param {?} portal
     * @return {?}
     */
    attachContent(portal) {
        this._portalOutlet.attachComponentPortal(portal);
    }
    /**
     * Animation hook that controls the entrance and exit animations
     * of the modal
     * @return {?}
     */
    get fadeState() {
        return getAnimationState$1(this.open);
    }
    /**
     * Animation event that can used to hook into when
     * animations are fully completed. We use this in the DaffModalService
     * to determine when to actually remove the dynamically rendered element from the DOM
     * so that the animation does not clip as the element is removed.
     * @param {?} e
     * @return {?}
     */
    animationDone(e) {
        this.animationCompleted.emit(e);
        if (e.toState === 'closed') {
            this.closedAnimationCompleted.emit(e);
        }
    }
}
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
class DaffModalHeaderComponent {
    constructor() {
        /**
         * \@docs-private
         */
        this.class = true;
    }
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
class DaffModalTitleDirective {
    constructor() {
        /**
         * \@docs-private
         */
        this.class = true;
    }
}
DaffModalTitleDirective.decorators = [
    { type: Directive, args: [{
                selector: '[daffModalTitle]'
            },] }
];
DaffModalTitleDirective.propDecorators = {
    class: [{ type: HostBinding, args: ['class.daff-modal-title',] }]
};
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
class DaffModalContentComponent {
}
DaffModalContentComponent.decorators = [
    { type: Component, args: [{
                selector: 'daff-modal-content',
                template: '<ng-content></ng-content>',
                changeDetection: ChangeDetectionStrategy.OnPush,
                styles: [":host{display:block;margin:0 -24px;max-height:60vh;overflow:auto;padding:0 24px}"]
            }] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class DaffModalActionsComponent {
}
DaffModalActionsComponent.decorators = [
    { type: Component, args: [{
                selector: 'daff-modal-actions',
                template: '<ng-content></ng-content>',
                styles: [":host{display:block;padding-top:24px}"]
            }] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class DaffModalModule {
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class DaffModalService {
    /**
     * @param {?} overlay
     */
    constructor(overlay) {
        this.overlay = overlay;
        this._modals = [];
        this.defaultConfiguration = {};
    }
    /**
     * @private
     * @param {?} overlayRef
     * @return {?}
     */
    _attachModal(overlayRef) {
        /** @type {?} */
        const modal = overlayRef.attach(new ComponentPortal(DaffModalComponent));
        modal.instance.open = true;
        return modal;
    }
    /**
     * @private
     * @param {?} component
     * @param {?} modal
     * @return {?}
     */
    _attachModalContent(component, modal) {
        modal.instance.attachContent(new ComponentPortal(component));
    }
    /**
     * @private
     * @return {?}
     */
    _createOverlayRef() {
        return this.overlay.create({
            hasBackdrop: true,
            positionStrategy: new GlobalPositionStrategy()
                .centerHorizontally()
                .centerVertically(),
            scrollStrategy: this.overlay.scrollStrategies.block()
        });
    }
    /**
     * @private
     * @param {?} modal
     * @return {?}
     */
    _removeModal(modal) {
        /** @type {?} */
        const index = this._modals.indexOf(modal);
        if (index === -1) {
            throw new Error('The Modal that you are trying to remove does not exist.');
        }
        modal.overlay.dispose();
        this._modals = this._modals.filter((/**
         * @param {?} m
         * @return {?}
         */
        m => m !== modal));
    }
    /**
     * @param {?} component
     * @param {?=} configuration
     * @return {?}
     */
    open(component, configuration) {
        /** @type {?} */
        const config = Object.assign({}, this.defaultConfiguration, configuration);
        /** @type {?} */
        const _ref = this._createOverlayRef();
        /** @type {?} */
        const _modal = this._attachModal(_ref);
        /** @type {?} */
        const _attachedModal = this._attachModalContent(component, _modal);
        /** @type {?} */
        const modal = {
            modal: _modal,
            overlay: _ref,
        };
        this._modals.push(modal);
        _ref
            .backdropClick()
            .subscribe((/**
         * @return {?}
         */
        () => config.onBackdropClicked
            ? config.onBackdropClicked()
            : this.close(modal)));
        return modal;
    }
    /**
     * @param {?} modal
     * @return {?}
     */
    close(modal) {
        modal.modal.instance.open = false;
        modal.overlay.detachBackdrop();
        modal.modal.instance.closedAnimationCompleted.subscribe((/**
         * @param {?} e
         * @return {?}
         */
        (e) => this._removeModal(modal)));
    }
}
DaffModalService.decorators = [
    { type: Injectable, args: [{
                providedIn: DaffModalModule,
            },] }
];
/** @nocollapse */
DaffModalService.ctorParameters = () => [
    { type: Overlay }
];
/** @nocollapse */ DaffModalService.ngInjectableDef = ɵɵdefineInjectable({ factory: function DaffModalService_Factory() { return new DaffModalService(ɵɵinject(Overlay)); }, token: DaffModalService, providedIn: DaffModalModule });
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
class DaffNavbarBase {
    /**
     * @param {?} _elementRef
     * @param {?} _renderer
     */
    constructor(_elementRef, _renderer) {
        this._elementRef = _elementRef;
        this._renderer = _renderer;
    }
}
if (false) {
    /** @type {?} */
    DaffNavbarBase.prototype._elementRef;
    /** @type {?} */
    DaffNavbarBase.prototype._renderer;
}
/** @type {?} */
const _daffNavbarBase = daffColorMixin(DaffNavbarBase);
class DaffNavbarComponent extends _daffNavbarBase {
    /**
     * @param {?} elementRef
     * @param {?} renderer
     */
    constructor(elementRef, renderer) {
        super(elementRef, renderer);
        this.elementRef = elementRef;
        this.renderer = renderer;
        this.shadowed = false;
        /**
         * \@docs-private
         */
        this.hostClass = true;
    }
    /**
     * \@docs-private
     * @return {?}
     */
    get shadowClass() {
        return this.shadowed;
    }
    ;
}
DaffNavbarComponent.decorators = [
    { type: Component, args: [{
                selector: 'daff-navbar',
                template: '<ng-content></ng-content>',
                changeDetection: ChangeDetectionStrategy.OnPush,
                styles: [":host{align-items:center;display:flex;height:70px;padding:0 15px;width:100%}"]
            }] }
];
/** @nocollapse */
DaffNavbarComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: Renderer2 }
];
DaffNavbarComponent.propDecorators = {
    color: [{ type: Input }],
    shadowed: [{ type: Input }],
    shadowClass: [{ type: HostBinding, args: ['class.daff-navbar--shadowed',] }],
    hostClass: [{ type: HostBinding, args: ['class.daff-navbar',] }]
};
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
class DaffNavbarModule {
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const DaffPaginatorNumberOfPagesErrorMessage = 'The numberOfPages in the daff-paginator must not be less than 1';
/** @type {?} */
const DaffPaginatorPageOutOfRangeErrorMessage = 'The numberOfPages in the daff-paginator should not be less than the currentPage';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * An _elementRef and an instance of renderer2 are needed for the Colorable mixin
 */
class DaffPaginatorBase {
    /**
     * @param {?} _elementRef
     * @param {?} _renderer
     */
    constructor(_elementRef, _renderer) {
        this._elementRef = _elementRef;
        this._renderer = _renderer;
    }
}
if (false) {
    /** @type {?} */
    DaffPaginatorBase.prototype._elementRef;
    /** @type {?} */
    DaffPaginatorBase.prototype._renderer;
}
/** @type {?} */
const _daffPaginatorBase = daffColorMixin(DaffPaginatorBase);
/** @type {?} */
const visiblePageRange = 2;
class DaffPaginatorComponent extends _daffPaginatorBase {
    /**
     * @param {?} elementRef
     * @param {?} renderer
     */
    constructor(elementRef, renderer) {
        super(elementRef, renderer);
        this.elementRef = elementRef;
        this.renderer = renderer;
        /**
         * \@docs-private
         */
        this.class = true;
        /**
         * \@docs-private
         */
        this.role = 'navigation';
        /**
         * \@docs-private
         */
        this.faChevronRight = faChevronRight;
        /**
         * \@docs-private
         */
        this.faChevronLeft = faChevronLeft;
        /**
         * Emits when the current page changes with the new current page.
         */
        this.notifyPageChange = new EventEmitter();
        /** @type {?} */
        const ariaLabel = elementRef.nativeElement.attributes['aria-label'];
        this._paginatorId = ariaLabel ? ariaLabel.nodeValue : null;
    }
    /**
     * \@docs-private
     * @return {?}
     */
    ngOnChanges() {
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
        (x, i) => i + 2));
    }
    /**
     * Emits the previous page number through notifyPageChange Output.
     * \@docs-private
     * @return {?}
     */
    _onNotifyPrevPageChange() {
        this.notifyPageChange.emit(this.currentPage - 1);
    }
    /**
     * Emits the next page number through notifyPageChange Output.
     * \@docs-private
     * @return {?}
     */
    _onNotifyNextPageChange() {
        this.notifyPageChange.emit(this.currentPage + 1);
    }
    /**
     * Emits a pageNumber to notifyPageChange Output.
     * \@docs-private
     * @param {?} pageNumber a page number
     * @return {?}
     */
    _onNotifyPageChange(pageNumber) {
        this.notifyPageChange.emit(pageNumber);
    }
    /**
     * A simple function that determines if the given page number is the current page number.
     * \@docs-private
     * @param {?} page a page number
     * @return {?}
     */
    _isSelected(page) {
        return page === this.currentPage;
    }
    /**
     * Determines when ellipsis after the first page number should show.
     * \@docs-private
     * @return {?}
     */
    _showFirstEllipsis() {
        return this.currentPage >= visiblePageRange + 2;
    }
    /**
     * Determines when ellipsis before the final page number should show.
     * \@docs-private
     * @return {?}
     */
    _showLastEllipsis() {
        return this.currentPage < (this.numberOfPages - visiblePageRange);
    }
    /**
     * Determines if the given page number should be shown. The two additional 'or' conditionals are needed
     * so the paginator retains the same total width at the extreme page numbers (1 and numberOfPages).
     * \@docs-private
     * @param {?} pageNumber page number to check.
     * @return {?}
     */
    _showNumber(pageNumber) {
        return Math.abs(this.currentPage - pageNumber) < visiblePageRange
            || (this.currentPage <= visiblePageRange && pageNumber <= 2 * visiblePageRange)
            || (this.currentPage > this.numberOfPages - visiblePageRange && pageNumber > this.numberOfPages - 2 * visiblePageRange);
    }
    /**
     * Determines when the Previous button should be disabled.
     * \@docs-private
     * @return {?}
     */
    _disablePrev() {
        return this.currentPage === 1;
    }
    /**
     * Determines when the Next button should be disabled.
     * \@docs-private
     * @return {?}
     */
    _disableNext() {
        return this.currentPage === this.numberOfPages;
    }
}
DaffPaginatorComponent.decorators = [
    { type: Component, args: [{
                selector: 'daff-paginator',
                template: "<button type=\"button\" class=\"daff-paginator__previous\"\n  [disabled]=\"_disablePrev()\"\n  tabindex=\"0\"\n  attr.aria-label=\"Go to Previous Page of {{_paginatorId}} Paginator\"\n  (click)=\"_onNotifyPrevPageChange()\">\n  <fa-icon [icon]=\"faChevronLeft\"></fa-icon> Previous\n</button>\n\n<button type=\"button\" class=\"daff-paginator__page-link\"\n  [class.selected]=\"_isSelected(1)\"\n  tabindex=\"0\"\n  attr.aria-label=\"Go to Page 1 of {{_paginatorId}} Paginator\"\n  (click)=\"_onNotifyPageChange(1)\">\n  1\n</button>\n\n<span class=\"daff-paginator__ellipsis\" *ngIf=\"_showFirstEllipsis()\">...</span>\n\n<ng-container *ngFor=\"let pageNumber of _numberOfPagesArray\">\n  <button type=\"button\" class=\"daff-paginator__page-link\"\n    [class.selected]=\"_isSelected(pageNumber)\"\n    tabindex=\"0\"\n    attr.aria-label=\"Go to Page {{pageNumber}} of {{_paginatorId}} Paginator\"\n    aria-current=\"_isSelected(pageNumber)\"\n    *ngIf=\"_showNumber(pageNumber)\"\n    (click)=\"_onNotifyPageChange(pageNumber)\">\n    {{ pageNumber }}\n  </button>\n</ng-container>\n\n<span class=\"daff-paginator__ellipsis\" *ngIf=\"_showLastEllipsis()\">...</span>\n\n<button type=\"button\" class=\"daff-paginator__page-link\"\n  [class.selected]=\"_isSelected(numberOfPages)\"\n  tabindex=\"0\"\n  attr.aria-label=\"Go To Page {{numberOfPages}} of {{_paginatorId}} Paginator\"\n  (click)=\"_onNotifyPageChange(numberOfPages)\"\n  *ngIf=\"!(numberOfPages < 2)\">\n  {{ numberOfPages }}\n</button>\n\n<button class=\"daff-paginator__next\"\n  [disabled]=\"_disableNext()\"\n  tabindex=\"0\"\n  attr.aria-label=\"Go to Next Page of {{_paginatorId}} Paginator\"\n  (click)=\"_onNotifyNextPageChange()\">\n  Next <fa-icon [icon]=\"faChevronRight\"></fa-icon>\n</button>\n",
                changeDetection: ChangeDetectionStrategy.OnPush,
                styles: [":host{display:flex}.daff-paginator__next,.daff-paginator__previous{cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;align-items:center;-webkit-appearance:none;-moz-appearance:none;appearance:none;background:0 0;border:0;border-radius:3px;display:flex;line-height:1em;padding:5px 10px}.daff-paginator__previous fa-icon{margin-right:10px}.daff-paginator__next fa-icon{margin-left:10px}.daff-paginator__ellipsis{padding:5px 10px}.daff-paginator__page-link{cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-appearance:none;-moz-appearance:none;appearance:none;background-color:transparent;border:0;border-radius:3px;display:inline-block;margin:0 5px;padding:5px 10px;transition:background 150ms}"]
            }] }
];
/** @nocollapse */
DaffPaginatorComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: Renderer2 }
];
DaffPaginatorComponent.propDecorators = {
    class: [{ type: HostBinding, args: ['class.daff-paginator',] }],
    role: [{ type: HostBinding, args: ['attr.role',] }],
    color: [{ type: Input }],
    numberOfPages: [{ type: Input }],
    currentPage: [{ type: Input }],
    notifyPageChange: [{ type: Output }]
};
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
class DaffPaginatorModule {
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class DaffQtyDropdownComponent {
    /**
     * @param {?} renderer
     */
    constructor(renderer) {
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
        (qty) => { });
        /**
         * \@docs-private
         */
        this.onTouched = (/**
         * @return {?}
         */
        () => { });
    }
    /**
     * \@docs-private
     * @return {?}
     */
    ngOnInit() {
        this.dropdownItemCounter = Array.from(Array(this.dropdownRange), (/**
         * @param {?} x
         * @param {?} i
         * @return {?}
         */
        (x, i) => i));
        if (!this.qty) {
            this.qty = 1;
        }
    }
    /**
     * \@docs-private
     * @param {?} qty
     * @return {?}
     */
    writeValue(qty) {
        this.qty = qty;
        this.onChange(this.qty);
    }
    /**
     * \@docs-private
     * @param {?} fn
     * @return {?}
     */
    registerOnChange(fn) {
        this.onChange = fn;
    }
    /**
     * \@docs-private
     * @param {?} fn
     * @return {?}
     */
    registerOnTouched(fn) {
        this.onTouched = fn;
    }
    /**
     * \@docs-private
     * @param {?} isDisabled
     * @return {?}
     */
    setDisabledState(isDisabled) {
        if (this.inputHasBeenShown) {
            this.renderer.setProperty(document.getElementById('input_' + this.id), 'disabled', isDisabled);
        }
        else {
            this.renderer.setProperty(document.getElementById('select_' + this.id), 'disabled', isDisabled);
        }
    }
    /**
     * \@docs-private
     * @return {?}
     */
    get showQtyInputField() {
        if (!this.isQtyOutsideDropdownRange() && !this.inputHasBeenShown) {
            return false;
        }
        else {
            this.inputHasBeenShown = true;
            return true;
        }
    }
    /**
     * \@docs-private
     * @param {?} value
     * @return {?}
     */
    onChangedWrapper(value) {
        value = parseInt(value, 10);
        if (value === 10) {
            this.selectInput();
        }
        this.qtyChanged.emit(value);
        this.onChange(value);
    }
    /**
     * @private
     * @return {?}
     */
    isQtyOutsideDropdownRange() {
        return this.qty > this.dropdownRange;
    }
    /**
     * @private
     * @return {?}
     */
    selectInput() {
        /** @type {?} */
        const that = this;
        setTimeout((/**
         * @return {?}
         */
        function () {
            /** @type {?} */
            const input = (/** @type {?} */ (document.getElementById('input_' + that.id)));
            input.select();
        }));
    }
}
DaffQtyDropdownComponent.decorators = [
    { type: Component, args: [{
                selector: 'daff-qty-dropdown',
                template: "<daff-form-field class=\"daff-qty-dropdown\">\n  <select daff-native-select *ngIf=\"!showQtyInputField\" id=\"select_{{id}}\" [(ngModel)]=\"qty\" (ngModelChange)=\"onChangedWrapper(qty)\" (blur)=\"onTouched()\">\n    <option *ngFor=\"let item of dropdownItemCounter\" [value]=\"item+1\">{{ item+1 }}</option>\n    <option value=\"10\">10+</option>\n  </select>\n  <input daff-input id=\"input_{{id}}\" class=\"daff-qty-dropdown__input\" [(ngModel)]=\"qty\" (ngModelChange)=\"onChangedWrapper(qty)\" (blur)=\"onTouched()\" *ngIf=\"showQtyInputField\">\n</daff-form-field>",
                styles: [".daff-qty-dropdown__input{width:50px}"]
            }] }
];
/** @nocollapse */
DaffQtyDropdownComponent.ctorParameters = () => [
    { type: Renderer2 }
];
DaffQtyDropdownComponent.propDecorators = {
    qty: [{ type: Input }],
    id: [{ type: Input }],
    qtyChanged: [{ type: Output }]
};
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
class DaffQtyDropdownModule {
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
class DaffSidebarComponent {
    /**
     * @param {?} _elementRef
     * @param {?} _ngZone
     */
    constructor(_elementRef, _ngZone) {
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
        () => {
            fromEvent(this._elementRef.nativeElement, 'keydown').pipe(filter((/**
             * @param {?} event
             * @return {?}
             */
            event => event.key === 'Escape'))).subscribe((/**
             * @param {?} event
             * @return {?}
             */
            event => this._ngZone.run((/**
             * @return {?}
             */
            () => {
                this.escapePressed.emit();
                event.stopPropagation();
            }))));
        }));
    }
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
DaffSidebarComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: NgZone }
];
DaffSidebarComponent.propDecorators = {
    escapePressed: [{ type: Output }]
};
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
const duration = '350ms';
/** @type {?} */
const sidebarAnimateRemainTransition = 'cubic-bezier(0.4, 0.0, 0.2, 1)';
/** @type {?} */
const sidebarAnimateInTransition = 'cubic-bezier(0.0, 0.0, 0.2, 1)';
/** @type {?} */
const sidebarAnimateOutTransition = 'cubic-bezier(0.4, 0.0, 1, 1)';
/** @type {?} */
const daffSidebarAnimations = {
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
const DaffSidebarAnimationStates = {
    OPEN: 'open',
    CLOSED: 'closed',
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const getAnimationState$2 = (/**
 * @param {?} open
 * @param {?=} enabled
 * @return {?}
 */
(open, enabled = true) => {
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
class DaffSidebarViewportComponent {
    /**
     * @param {?} ref
     */
    constructor(ref) {
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
    /**
     * The mode to put the sidebar in
     * @return {?}
     */
    get mode() { return this._mode; }
    /**
     * @param {?} value
     * @return {?}
     */
    set mode(value) {
        this._mode = value;
        this._animationState = getAnimationState$2(this.opened, this.animationsEnabled);
    }
    /**
     * Property for the "opened" state of the sidebar
     * @return {?}
     */
    get opened() { return this._opened; }
    /**
     * @param {?} value
     * @return {?}
     */
    set opened(value) {
        this._opened = value;
        this._animationState = getAnimationState$2(value, this.animationsEnabled);
    }
    /**
     * \@docs-private
     * @return {?}
     */
    get animationsEnabled() {
        return (this.mode === 'over' || this.mode === 'push') ? true : false;
    }
    /**
     * \@docs-private
     * @return {?}
     */
    ngOnInit() {
        this._animationState = getAnimationState$2(this.opened, this.animationsEnabled);
    }
    /**
     * \@docs-private
     * @return {?}
     */
    ngAfterViewInit() {
        if (this.sidebar) {
            this.sidebar.escapePressed.subscribe((/**
             * @return {?}
             */
            () => {
                this.onEscape();
            }));
        }
    }
    /**
     * \@docs-private
     * @return {?}
     */
    _backdropClicked() {
        this.backdropClicked.emit();
    }
    /**
     * \@docs-private
     * @return {?}
     */
    get hasBackdrop() {
        return (this.mode === 'over' || this.mode === 'push');
    }
    /**
     * \@docs-private
     * @return {?}
     */
    onEscape() {
        if (this.hasBackdrop) {
            this.opened = false;
            this.ref.markForCheck();
        }
    }
}
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
DaffSidebarViewportComponent.ctorParameters = () => [
    { type: ChangeDetectorRef }
];
DaffSidebarViewportComponent.propDecorators = {
    sidebar: [{ type: ContentChild, args: [DaffSidebarComponent, { static: false },] }],
    mode: [{ type: Input }],
    backdropIsVisible: [{ type: Input }],
    opened: [{ type: Input }],
    backdropClicked: [{ type: Output }]
};
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
class DaffSidebarModule {
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
const DaffHeroLayoutEnum = {
    Centered: 'centered',
};
/** @enum {string} */
const DaffHeroSizeEnum = {
    Compact: 'compact',
    Small: 'small' // Small will be deprecated in v1.0.0
    ,
};
/**
 * An _elementRef and an instance of renderer2 are needed for the Colorable mixin
 */
class DaffHeroBase {
    /**
     * @param {?} _elementRef
     * @param {?} _renderer
     */
    constructor(_elementRef, _renderer) {
        this._elementRef = _elementRef;
        this._renderer = _renderer;
    }
}
if (false) {
    /** @type {?} */
    DaffHeroBase.prototype._elementRef;
    /** @type {?} */
    DaffHeroBase.prototype._renderer;
}
/** @type {?} */
const _daffHeroBase = daffColorMixin(DaffHeroBase);
class DaffHeroComponent extends _daffHeroBase {
    /**
     * @param {?} elementRef
     * @param {?} renderer
     */
    constructor(elementRef, renderer) {
        super(elementRef, renderer);
        this.elementRef = elementRef;
        this.renderer = renderer;
        /**
         * \@docs-private
         */
        this.class = true;
    }
    /**
     * Will be deprecated in v1.0.0
     * \@docs-private
     * @return {?}
     */
    get centered() {
        return this.layout === DaffHeroLayoutEnum.Centered;
    }
    /**
     * Will be deprecated in v1.0.0
     * \@docs-private
     * @return {?}
     */
    get small() {
        return this.size === DaffHeroSizeEnum.Small;
    }
    /**
     * Will be deprecated in v1.0.0
     * \@docs-private
     * @return {?}
     */
    get compact() {
        return this.size === DaffHeroSizeEnum.Compact;
    }
}
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
DaffHeroComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: Renderer2 }
];
DaffHeroComponent.propDecorators = {
    layout: [{ type: Input }],
    size: [{ type: Input }],
    color: [{ type: Input }],
    class: [{ type: HostBinding, args: ['class.daff-hero',] }],
    centered: [{ type: HostBinding, args: ['class.daff-hero--centered',] }],
    small: [{ type: HostBinding, args: ['class.daff-hero--small',] }],
    compact: [{ type: HostBinding, args: ['class.daff-hero--compact',] }]
};
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
class DaffHeroSubtitleDirective {
    constructor() {
        /**
         * \@docs-private
         */
        this.class = true;
    }
}
DaffHeroSubtitleDirective.decorators = [
    { type: Directive, args: [{
                selector: '[daffHeroSubtitle]'
            },] }
];
DaffHeroSubtitleDirective.propDecorators = {
    class: [{ type: HostBinding, args: ['class.daff-hero__subtitle',] }]
};
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
class DaffHeroTitleDirective {
    constructor() {
        /**
         * \@docs-private
         */
        this.class = true;
    }
}
DaffHeroTitleDirective.decorators = [
    { type: Directive, args: [{
                selector: '[daffHeroTitle]',
            },] }
];
DaffHeroTitleDirective.propDecorators = {
    class: [{ type: HostBinding, args: ['class.daff-hero__title',] }]
};
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
class DaffHeroModule {
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @enum {string} */
const DaffCalloutLayoutEnum = {
    Centered: 'centered',
};
/** @enum {string} */
const DaffCalloutSizeEnum = {
    Compact: 'compact',
};
/**
 * An _elementRef and an instance of renderer2 are needed for the Colorable mixin
 */
class DaffCalloutBase {
    /**
     * @param {?} _elementRef
     * @param {?} _renderer
     */
    constructor(_elementRef, _renderer) {
        this._elementRef = _elementRef;
        this._renderer = _renderer;
    }
}
if (false) {
    /** @type {?} */
    DaffCalloutBase.prototype._elementRef;
    /** @type {?} */
    DaffCalloutBase.prototype._renderer;
}
/** @type {?} */
const _daffCalloutBase = daffColorMixin(DaffCalloutBase);
class DaffCalloutComponent extends _daffCalloutBase {
    // Will be deprecated in v1.0.0
    /**
     * @param {?} elementRef
     * @param {?} renderer
     */
    constructor(elementRef, renderer) {
        super(elementRef, renderer);
        this.elementRef = elementRef;
        this.renderer = renderer;
        /**
         * \@docs-private
         */
        this.class = true;
    }
    /**
     * Will be deprecated in v1.0.0
     * \@docs-private
     * @return {?}
     */
    get centered() {
        return this.layout === DaffCalloutLayoutEnum.Centered;
    }
    /**
     * Will be deprecated in v1.0.0
     * \@docs-private
     * @return {?}
     */
    get compact() {
        return this.size === DaffCalloutSizeEnum.Compact;
    }
}
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
DaffCalloutComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: Renderer2 }
];
DaffCalloutComponent.propDecorators = {
    color: [{ type: Input }],
    layout: [{ type: Input }],
    size: [{ type: Input }],
    class: [{ type: HostBinding, args: ['class.daff-callout',] }],
    centered: [{ type: HostBinding, args: ['class.daff-callout--centered',] }],
    compact: [{ type: HostBinding, args: ['class.daff-callout--compact',] }]
};
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
class DaffCalloutTitleDirective {
    constructor() {
        /**
         * \@docs-private
         */
        this.class = true;
    }
}
DaffCalloutTitleDirective.decorators = [
    { type: Directive, args: [{
                selector: '[daffCalloutTitle]'
            },] }
];
DaffCalloutTitleDirective.propDecorators = {
    class: [{ type: HostBinding, args: ['class.daff-callout__title',] }]
};
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
class DaffCalloutSubtitleDirective {
    constructor() {
        /**
         * \@docs-private
         */
        this.class = true;
    }
}
DaffCalloutSubtitleDirective.decorators = [
    { type: Directive, args: [{
                selector: '[daffCalloutSubtitle]',
            },] }
];
DaffCalloutSubtitleDirective.propDecorators = {
    class: [{ type: HostBinding, args: ['class.daff-callout__subtitle',] }]
};
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
class DaffCalloutModule {
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @enum {string} */
const DaffFeatureModeEnum = {
    Compact: 'compact',
    Normal: 'normal',
};
class DaffFeatureComponent {
    constructor() {
        /**
         * \@docs-private
         */
        this.class = true;
        this.mode = DaffFeatureModeEnum.Normal;
    }
    /**
     * \@docs-private
     * @return {?}
     */
    get compact() {
        return this.mode === DaffFeatureModeEnum.Compact;
    }
    /**
     * \@docs-private
     * @return {?}
     */
    get normal() {
        return this.mode === DaffFeatureModeEnum.Normal;
    }
}
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
class DaffFeatureTitleDirective {
    constructor() {
        /**
         * \@docs-private
         */
        this.class = true;
    }
}
DaffFeatureTitleDirective.decorators = [
    { type: Directive, args: [{
                selector: '[daffFeatureTitle]'
            },] }
];
DaffFeatureTitleDirective.propDecorators = {
    class: [{ type: HostBinding, args: ['class.daff-feature__title',] }]
};
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
class DaffFeatureSubtitleDirective {
    constructor() {
        /**
         * \@docs-private
         */
        this.class = true;
    }
}
DaffFeatureSubtitleDirective.decorators = [
    { type: Directive, args: [{
                selector: '[daffFeatureSubtitle]'
            },] }
];
DaffFeatureSubtitleDirective.propDecorators = {
    class: [{ type: HostBinding, args: ['class.daff-feature__subtitle',] }]
};
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
class DaffFeatureIconDirective {
    constructor() {
        /**
         * \@docs-private
         */
        this.class = true;
    }
}
DaffFeatureIconDirective.decorators = [
    { type: Directive, args: [{
                selector: '[daffFeatureIcon]',
            },] }
];
DaffFeatureIconDirective.propDecorators = {
    class: [{ type: HostBinding, args: ['class.daff-feature__icon',] }]
};
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
class DaffFeatureSubheaderDirective {
    constructor() {
        /**
         * \@docs-private
         */
        this.class = true;
    }
}
DaffFeatureSubheaderDirective.decorators = [
    { type: Directive, args: [{
                selector: '[daffFeatureSubheader]',
            },] }
];
DaffFeatureSubheaderDirective.propDecorators = {
    class: [{ type: HostBinding, args: ['class.daff-feature__subheader',] }]
};
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
class DaffFeatureModule {
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
class DaffCardBase {
    /**
     * @param {?} _elementRef
     * @param {?} _renderer
     */
    constructor(_elementRef, _renderer) {
        this._elementRef = _elementRef;
        this._renderer = _renderer;
    }
}
if (false) {
    /** @type {?} */
    DaffCardBase.prototype._elementRef;
    /** @type {?} */
    DaffCardBase.prototype._renderer;
}
/** @type {?} */
const _daffCardBase = daffColorMixin(DaffCardBase);
class DaffCardComponent extends _daffCardBase {
    /**
     * @param {?} elementRef
     * @param {?} renderer
     */
    constructor(elementRef, renderer) {
        super(elementRef, renderer);
        this.elementRef = elementRef;
        this.renderer = renderer;
        /**
         * \@docs-private
         */
        this.class = true;
    }
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
DaffCardComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: Renderer2 }
];
DaffCardComponent.propDecorators = {
    color: [{ type: Input }],
    class: [{ type: HostBinding, args: ['class.daff-card',] }]
};
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
class DaffCardTitleDirective {
    constructor() {
        /**
         * \@docs-private
         */
        this.class = true;
    }
}
DaffCardTitleDirective.decorators = [
    { type: Directive, args: [{
                selector: '[daffCardTitle]'
            },] }
];
DaffCardTitleDirective.propDecorators = {
    class: [{ type: HostBinding, args: ['class.daff-card__title',] }]
};
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
class DaffCardImageDirective {
    constructor() {
        /**
         * \@docs-private
         */
        this.class = true;
    }
}
DaffCardImageDirective.decorators = [
    { type: Directive, args: [{
                selector: '[daffCardImage]'
            },] }
];
DaffCardImageDirective.propDecorators = {
    class: [{ type: HostBinding, args: ['class.daff-card__image',] }]
};
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
class DaffCardModule {
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @enum {string} */
const DaffBreakpoints = {
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
const DaffStatusEnum = {
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
