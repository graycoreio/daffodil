import { OnInit, ElementRef, Renderer2 } from '@angular/core';
import { DaffColorable, DaffPalette } from '../../core/colorable/colorable';
import { DaffPrefixable, DaffSuffixable } from '../../core/prefix-suffix/public_api';
import { DaffSizeable, DaffSizeSmallType, DaffSizeMediumType, DaffSizeLargeType } from '../../core/sizeable/sizeable';
/**
 * An _elementRef and an instance of renderer2 are needed for the button mixins
 */
declare class DaffButtonBase {
    _elementRef: ElementRef;
    _renderer: Renderer2;
    constructor(_elementRef: ElementRef, _renderer: Renderer2);
}
declare const _daffButtonBase: {
    new (...args: any[]): {
        _prefix: import("../../core/prefix-suffix/prefix.directive").DaffPrefixDirective;
    };
} & {
    new (...args: any[]): {
        _suffix: import("../../core/prefix-suffix/suffix.directive").DaffSuffixDirective;
    };
} & {
    new (...args: any[]): {
        _color: DaffPalette;
        color: DaffPalette;
        _elementRef: ElementRef<any>;
        _renderer: Renderer2;
    };
} & {
    new (...args: any[]): {
        _size: import("../../core/sizeable/sizeable").DaffSizeAllType;
        size: import("../../core/sizeable/sizeable").DaffSizeAllType;
        _elementRef: ElementRef<any>;
        _renderer: Renderer2;
    };
} & typeof DaffButtonBase;
export declare type DaffButtonType = 'daff-button' | 'daff-stroked-button' | 'daff-raised-button' | 'daff-icon-button' | 'daff-underline-button' | undefined;
/**
 * The DaffSizeable types that the DaffButtonComponent can implement
 */
export declare type DaffButtonSize = DaffSizeSmallType | DaffSizeMediumType | DaffSizeLargeType;
export declare class DaffButtonComponent extends _daffButtonBase implements OnInit, DaffPrefixable, DaffSuffixable, DaffColorable, DaffSizeable<DaffButtonSize> {
    private elementRef;
    private renderer;
    color: DaffPalette;
    size: DaffButtonSize;
    private buttonType;
    constructor(elementRef: ElementRef, renderer: Renderer2);
    /**
     * @docs-private
     */
    ngOnInit(): void;
    /**
     * @docs-private
     */
    readonly button: boolean;
    /**
     * @docs-private
     */
    readonly stroked: boolean;
    /**
     * @docs-private
     */
    readonly raised: boolean;
    /**
     * @docs-private
     */
    readonly icon: boolean;
    /**
     * @docs-private
     */
    readonly underline: boolean;
    private _getHostElement;
    /**
         * Gets whether the button has one of the given attributes.
         * */
    private _hasHostAttributes;
}
export {};
