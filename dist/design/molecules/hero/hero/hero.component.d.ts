import { ElementRef, Renderer2 } from '@angular/core';
import { DaffPalette, DaffColorable } from '../../../core/colorable/colorable';
export declare type DaffHeroLayout = 'centered' | undefined;
export declare enum DaffHeroLayoutEnum {
    Centered = "centered"
}
export declare type DaffHeroSize = 'compact' | 'small' | undefined;
export declare enum DaffHeroSizeEnum {
    Compact = "compact",
    Small = "small"
}
/**
 * An _elementRef and an instance of renderer2 are needed for the Colorable mixin
 */
declare class DaffHeroBase {
    _elementRef: ElementRef;
    _renderer: Renderer2;
    constructor(_elementRef: ElementRef, _renderer: Renderer2);
}
declare const _daffHeroBase: {
    new (...args: any[]): {
        _color: DaffPalette;
        color: DaffPalette;
        _elementRef: ElementRef<any>;
        _renderer: Renderer2;
    };
} & typeof DaffHeroBase;
export declare class DaffHeroComponent extends _daffHeroBase implements DaffColorable {
    private elementRef;
    private renderer;
    layout: DaffHeroLayout;
    size: DaffHeroSize;
    color: DaffPalette;
    constructor(elementRef: ElementRef, renderer: Renderer2);
    /**
       * @docs-private
       */
    class: boolean;
    /**
       * Will be deprecated in v1.0.0
       * @docs-private
       */
    readonly centered: boolean;
    /**
       * Will be deprecated in v1.0.0
       * @docs-private
       */
    readonly small: boolean;
    /**
       * Will be deprecated in v1.0.0
       * @docs-private
       */
    readonly compact: boolean;
}
export {};
