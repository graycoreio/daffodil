/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, ViewEncapsulation, ChangeDetectionStrategy, ElementRef, Input, HostBinding, Renderer2 } from '@angular/core';
import { daffColorMixin } from '../../core/colorable/colorable';
import { daffPrefixableMixin, daffSuffixableMixin } from '../../core/prefix-suffix/public_api';
import { daffSizeMixin } from '../../core/sizeable/sizeable-mixin';
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
    tslib_1.__extends(DaffButtonComponent, _super);
    function DaffButtonComponent(elementRef, renderer) {
        var e_1, _a;
        var _this = _super.call(this, elementRef, renderer) || this;
        _this.elementRef = elementRef;
        _this.renderer = renderer;
        try {
            for (var BUTTON_HOST_ATTRIBUTES_1 = tslib_1.__values(BUTTON_HOST_ATTRIBUTES), BUTTON_HOST_ATTRIBUTES_1_1 = BUTTON_HOST_ATTRIBUTES_1.next(); !BUTTON_HOST_ATTRIBUTES_1_1.done; BUTTON_HOST_ATTRIBUTES_1_1 = BUTTON_HOST_ATTRIBUTES_1.next()) {
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
            for (var BUTTON_HOST_ATTRIBUTES_2 = tslib_1.__values(BUTTON_HOST_ATTRIBUTES), BUTTON_HOST_ATTRIBUTES_2_1 = BUTTON_HOST_ATTRIBUTES_2.next(); !BUTTON_HOST_ATTRIBUTES_2_1.done; BUTTON_HOST_ATTRIBUTES_2_1 = BUTTON_HOST_ATTRIBUTES_2.next()) {
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
export { DaffButtonComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnV0dG9uLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkYWZmb2RpbC9kZXNpZ24vIiwic291cmNlcyI6WyJhdG9tcy9idXR0b24vYnV0dG9uLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFDTCxTQUFTLEVBQVUsaUJBQWlCLEVBQUUsdUJBQXVCLEVBQzdELFVBQVUsRUFBRSxLQUFLLEVBQUUsV0FBVyxFQUFFLFNBQVMsRUFDMUMsTUFBTSxlQUFlLENBQUM7QUFFdkIsT0FBTyxFQUFFLGNBQWMsRUFBOEIsTUFBTSxnQ0FBZ0MsQ0FBQztBQUU1RixPQUFPLEVBR0wsbUJBQW1CLEVBQ25CLG1CQUFtQixFQUNwQixNQUFNLHFDQUFxQyxDQUFDO0FBRTdDLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxvQ0FBb0MsQ0FBQzs7Ozs7SUFNN0Qsc0JBQXNCLEdBQXFCO0lBQy9DLGFBQWE7SUFDYixxQkFBcUI7SUFDckIsb0JBQW9CO0lBQ3BCLGtCQUFrQjtJQUNsQix1QkFBdUI7Q0FDeEI7Ozs7QUFLRDs7OztJQUNFLHdCQUFtQixXQUF1QixFQUFTLFNBQW9CO1FBQXBELGdCQUFXLEdBQVgsV0FBVyxDQUFZO1FBQVMsY0FBUyxHQUFULFNBQVMsQ0FBVztJQUFHLENBQUM7SUFDN0UscUJBQUM7QUFBRCxDQUFDLEFBRkQsSUFFQzs7O0lBRGEscUNBQThCOztJQUFFLG1DQUEyQjs7O0lBR25FLGVBQWUsR0FBRyxtQkFBbUIsQ0FBQyxtQkFBbUIsQ0FBQyxjQUFjLENBQUMsYUFBYSxDQUFDLGNBQWMsRUFBRSxJQUFJLENBQUMsRUFBQyxnQkFBZ0IsQ0FBQyxDQUFDLENBQUM7OztJQVVwSSxTQUFVLGFBQWE7SUFDdkIsU0FBVSxxQkFBcUI7SUFDL0IsUUFBUyxvQkFBb0I7SUFDN0IsTUFBTyxrQkFBa0I7SUFDekIsV0FBWSx1QkFBdUI7O0FBR3JDO0lBb0JVLCtDQUFlO0lBT3JCLDZCQUFvQixVQUFzQixFQUFV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LHVCQUF1QixDQUFDLE1BQU07O2lCQUNoRDs7OztnQkFuRUMsVUFBVTtnQkFBc0IsU0FBUzs7O3dCQXdFdEMsS0FBSzt1QkFDUCxLQUFLO3lCQTZCSCxXQUFXLFNBQUMsbUJBQW1COzBCQU8vQixXQUFXLFNBQUMsMkJBQTJCO3lCQU92QyxXQUFXLFNBQUMsMEJBQTBCO3VCQU90QyxXQUFXLFNBQUMsd0JBQXdCOzRCQU9wQyxXQUFXLFNBQUMsNkJBQTZCOztJQWM5QywwQkFBQztDQUFBLEFBOUZELENBb0JVLGVBQWUsR0EwRXhCO1NBM0VZLG1CQUFtQjs7O0lBRzVCLG9DQUE0Qjs7SUFDOUIsbUNBQThCOzs7OztJQUU1Qix5Q0FBbUM7Ozs7O0lBRXZCLHlDQUE4Qjs7Ozs7SUFBRSx1Q0FBMkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDb21wb25lbnQsIE9uSW5pdCwgVmlld0VuY2Fwc3VsYXRpb24sIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBFbGVtZW50UmVmLCBJbnB1dCwgSG9zdEJpbmRpbmcsIFJlbmRlcmVyMlxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgZGFmZkNvbG9yTWl4aW4sIERhZmZDb2xvcmFibGUsIERhZmZQYWxldHRlIH0gZnJvbSAnLi4vLi4vY29yZS9jb2xvcmFibGUvY29sb3JhYmxlJztcblxuaW1wb3J0IHsgXG4gIERhZmZQcmVmaXhhYmxlLCBcbiAgRGFmZlN1ZmZpeGFibGUsIFxuICBkYWZmUHJlZml4YWJsZU1peGluLFxuICBkYWZmU3VmZml4YWJsZU1peGluXG59IGZyb20gJy4uLy4uL2NvcmUvcHJlZml4LXN1ZmZpeC9wdWJsaWNfYXBpJztcblxuaW1wb3J0IHsgZGFmZlNpemVNaXhpbiB9IGZyb20gJy4uLy4uL2NvcmUvc2l6ZWFibGUvc2l6ZWFibGUtbWl4aW4nO1xuaW1wb3J0IHsgRGFmZlNpemVhYmxlLCBEYWZmU2l6ZVNtYWxsVHlwZSwgRGFmZlNpemVNZWRpdW1UeXBlLCBEYWZmU2l6ZUxhcmdlVHlwZSB9IGZyb20gJy4uLy4uL2NvcmUvc2l6ZWFibGUvc2l6ZWFibGUnO1xuXG4vKipcbiogTGlzdCBvZiBjbGFzc2VzIHRvIGFkZCB0byBEYWZmQnV0dG9uQ29tcG9uZW50IGluc3RhbmNlcyBiYXNlZCBvbiBob3N0IGF0dHJpYnV0ZXMgdG8gc3R5bGUgYXMgZGlmZmVyZW50IHZhcmlhbnRzLlxuKi9cbmNvbnN0IEJVVFRPTl9IT1NUX0FUVFJJQlVURVM6IERhZmZCdXR0b25UeXBlW10gPSBbXG4gICdkYWZmLWJ1dHRvbicsXG4gICdkYWZmLXN0cm9rZWQtYnV0dG9uJyxcbiAgJ2RhZmYtcmFpc2VkLWJ1dHRvbicsXG4gICdkYWZmLWljb24tYnV0dG9uJyxcbiAgJ2RhZmYtdW5kZXJsaW5lLWJ1dHRvbidcbl07XG5cbi8qKlxuICogQW4gX2VsZW1lbnRSZWYgYW5kIGFuIGluc3RhbmNlIG9mIHJlbmRlcmVyMiBhcmUgbmVlZGVkIGZvciB0aGUgYnV0dG9uIG1peGluc1xuICovXG5jbGFzcyBEYWZmQnV0dG9uQmFzZXtcbiAgY29uc3RydWN0b3IocHVibGljIF9lbGVtZW50UmVmOiBFbGVtZW50UmVmLCBwdWJsaWMgX3JlbmRlcmVyOiBSZW5kZXJlcjIpIHt9XG59XG5cbmNvbnN0IF9kYWZmQnV0dG9uQmFzZSA9IGRhZmZQcmVmaXhhYmxlTWl4aW4oZGFmZlN1ZmZpeGFibGVNaXhpbihkYWZmQ29sb3JNaXhpbihkYWZmU2l6ZU1peGluKERhZmZCdXR0b25CYXNlLCAnbWQnKSwndGhlbWUtY29udHJhc3QnKSkpO1xuXG5leHBvcnQgdHlwZSBEYWZmQnV0dG9uVHlwZSA9ICdkYWZmLWJ1dHRvbicgfCAnZGFmZi1zdHJva2VkLWJ1dHRvbicgfCAnZGFmZi1yYWlzZWQtYnV0dG9uJyB8ICdkYWZmLWljb24tYnV0dG9uJyB8ICdkYWZmLXVuZGVybGluZS1idXR0b24nIHwgdW5kZWZpbmVkO1xuXG4vKipcbiAqIFRoZSBEYWZmU2l6ZWFibGUgdHlwZXMgdGhhdCB0aGUgRGFmZkJ1dHRvbkNvbXBvbmVudCBjYW4gaW1wbGVtZW50XG4gKi9cbmV4cG9ydCB0eXBlIERhZmZCdXR0b25TaXplID0gRGFmZlNpemVTbWFsbFR5cGUgfCBEYWZmU2l6ZU1lZGl1bVR5cGUgfCBEYWZmU2l6ZUxhcmdlVHlwZTtcblxuZW51bSBEYWZmQnV0dG9uVHlwZUVudW0ge1xuICBEZWZhdWx0ID0gJ2RhZmYtYnV0dG9uJyxcbiAgU3Ryb2tlZCA9ICdkYWZmLXN0cm9rZWQtYnV0dG9uJyxcbiAgUmFpc2VkID0gJ2RhZmYtcmFpc2VkLWJ1dHRvbicsXG4gIEljb24gPSAnZGFmZi1pY29uLWJ1dHRvbicsXG4gIFVuZGVybGluZSA9ICdkYWZmLXVuZGVybGluZS1idXR0b24nXG59XG5cbkBDb21wb25lbnQoe1xuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IGNvbXBvbmVudC1zZWxlY3RvclxuICBzZWxlY3RvcjogJycgK1xuICAgICdidXR0b25bZGFmZi1idXR0b25dJyArICcsJyArXG4gICAgJ2J1dHRvbltkYWZmLXN0cm9rZWQtYnV0dG9uXScgKyAnLCcgK1xuICAgICdidXR0b25bZGFmZi1yYWlzZWQtYnV0dG9uXScgKyAnLCcgK1xuICAgICdidXR0b25bZGFmZi1pY29uLWJ1dHRvbl0nICsgJywnICtcbiAgICAnYnV0dG9uW2RhZmYtdW5kZXJsaW5lLWJ1dHRvbl0nICsgJywnICtcbiAgICAnYVtkYWZmLWJ1dHRvbl0nICsgJywnICtcbiAgICAnYVtkYWZmLXN0cm9rZWQtYnV0dG9uXScgKyAnLCcgK1xuICAgICdhW2RhZmYtcmFpc2VkLWJ1dHRvbl0nICsgJywnICtcbiAgICAnYVtkYWZmLWljb24tYnV0dG9uXScgKyAnLCcgK1xuICAgICdhW2RhZmYtdW5kZXJsaW5lLWJ1dHRvbl0nLFxuICB0ZW1wbGF0ZVVybDogJy4vYnV0dG9uLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vYnV0dG9uLmNvbXBvbmVudC5zY3NzJ10sXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxufSlcblxuZXhwb3J0IGNsYXNzIERhZmZCdXR0b25Db21wb25lbnRcbiAgZXh0ZW5kcyBfZGFmZkJ1dHRvbkJhc2VcbiAgaW1wbGVtZW50cyBPbkluaXQsIERhZmZQcmVmaXhhYmxlLCBEYWZmU3VmZml4YWJsZSwgRGFmZkNvbG9yYWJsZSwgRGFmZlNpemVhYmxlPERhZmZCdXR0b25TaXplPiB7XG4gICAgQElucHV0KCkgY29sb3I6IERhZmZQYWxldHRlO1xuXHRcdEBJbnB1dCgpIHNpemU6IERhZmZCdXR0b25TaXplO1xuXHRcdFxuICAgIHByaXZhdGUgYnV0dG9uVHlwZTogRGFmZkJ1dHRvblR5cGU7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsIHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMikge1xuICAgICAgc3VwZXIoZWxlbWVudFJlZiwgcmVuZGVyZXIpO1xuXG4gICAgICBmb3IgKGNvbnN0IGF0dHIgb2YgQlVUVE9OX0hPU1RfQVRUUklCVVRFUykge1xuICAgICAgICBpZiAodGhpcy5faGFzSG9zdEF0dHJpYnV0ZXMoYXR0cikpIHtcbiAgICAgICAgICAoZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50IGFzIEhUTUxFbGVtZW50KS5jbGFzc0xpc3QuYWRkKGF0dHIpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG5cblx0XHQvKipcblx0XHQgKiBAZG9jcy1wcml2YXRlXG5cdFx0ICovXG4gICAgbmdPbkluaXQoKSB7XG4gICAgICBmb3IgKGNvbnN0IGF0dHIgb2YgQlVUVE9OX0hPU1RfQVRUUklCVVRFUykge1xuICAgICAgICBpZiAodGhpcy5faGFzSG9zdEF0dHJpYnV0ZXMoYXR0cikpIHtcbiAgICAgICAgICB0aGlzLmJ1dHRvblR5cGUgPSBhdHRyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG5cdFx0LyoqXG5cdFx0ICogQGRvY3MtcHJpdmF0ZVxuXHRcdCAqL1xuICAgIEBIb3N0QmluZGluZygnY2xhc3MuZGFmZi1idXR0b24nKSBnZXQgYnV0dG9uKCkge1xuICAgICAgcmV0dXJuIHRoaXMuYnV0dG9uVHlwZSA9PT0gRGFmZkJ1dHRvblR5cGVFbnVtLkRlZmF1bHQgfHwgdGhpcy5idXR0b25UeXBlID09PSB1bmRlZmluZWQ7XG4gICAgfVxuICBcblx0XHQvKipcblx0XHQgKiBAZG9jcy1wcml2YXRlXG5cdFx0ICovXG4gICAgQEhvc3RCaW5kaW5nKCdjbGFzcy5kYWZmLXN0cm9rZWQtYnV0dG9uJykgZ2V0IHN0cm9rZWQoKSB7XG4gICAgICByZXR1cm4gdGhpcy5idXR0b25UeXBlID09PSBEYWZmQnV0dG9uVHlwZUVudW0uU3Ryb2tlZDtcbiAgICB9XG5cblx0XHQvKipcblx0XHQgKiBAZG9jcy1wcml2YXRlXG5cdFx0ICovXG4gICAgQEhvc3RCaW5kaW5nKCdjbGFzcy5kYWZmLXJhaXNlZC1idXR0b24nKSBnZXQgcmFpc2VkKCkge1xuICAgICAgcmV0dXJuIHRoaXMuYnV0dG9uVHlwZSA9PT0gRGFmZkJ1dHRvblR5cGVFbnVtLlJhaXNlZDtcbiAgICB9XG4gIFxuXHRcdC8qKlxuXHRcdCAqIEBkb2NzLXByaXZhdGVcblx0XHQgKi9cbiAgICBASG9zdEJpbmRpbmcoJ2NsYXNzLmRhZmYtaWNvbi1idXR0b24nKSBnZXQgaWNvbigpIHtcbiAgICAgIHJldHVybiB0aGlzLmJ1dHRvblR5cGUgPT09IERhZmZCdXR0b25UeXBlRW51bS5JY29uO1xuICAgIH1cblxuXHRcdC8qKlxuXHRcdCAqIEBkb2NzLXByaXZhdGVcblx0XHQgKi9cbiAgICBASG9zdEJpbmRpbmcoJ2NsYXNzLmRhZmYtdW5kZXJsaW5lLWJ1dHRvbicpIGdldCB1bmRlcmxpbmUoKSB7XG4gICAgICByZXR1cm4gdGhpcy5idXR0b25UeXBlID09PSBEYWZmQnV0dG9uVHlwZUVudW0uVW5kZXJsaW5lO1xuICAgIH1cblxuICAgIHByaXZhdGUgX2dldEhvc3RFbGVtZW50KCkge1xuICAgICAgcmV0dXJuIHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50O1xuICAgIH1cbiAgXG4gICAgLyoqIFxuXHRcdCAqIEdldHMgd2hldGhlciB0aGUgYnV0dG9uIGhhcyBvbmUgb2YgdGhlIGdpdmVuIGF0dHJpYnV0ZXMuIFxuXHRcdCAqICovXG4gICAgcHJpdmF0ZSBfaGFzSG9zdEF0dHJpYnV0ZXMoLi4uYXR0cmlidXRlczogc3RyaW5nW10pIHtcbiAgICAgIHJldHVybiBhdHRyaWJ1dGVzLnNvbWUoYXR0cmlidXRlID0+IHRoaXMuX2dldEhvc3RFbGVtZW50KCkuaGFzQXR0cmlidXRlKGF0dHJpYnV0ZSkpO1xuICAgIH1cbn1cbiJdfQ==