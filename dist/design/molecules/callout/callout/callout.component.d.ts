import { ElementRef, Renderer2 } from '@angular/core';
import { DaffColorable, DaffPalette } from '../../../core/colorable/colorable';
export declare type DaffCalloutLayout = 'centered' | undefined;
export declare enum DaffCalloutLayoutEnum {
    Centered = "centered"
}
export declare type DaffCalloutSize = 'compact' | undefined;
export declare enum DaffCalloutSizeEnum {
    Compact = "compact"
}
/**
 * An _elementRef and an instance of renderer2 are needed for the Colorable mixin
 */
declare class DaffCalloutBase {
    _elementRef: ElementRef;
    _renderer: Renderer2;
    constructor(_elementRef: ElementRef, _renderer: Renderer2);
}
declare const _daffCalloutBase: {
    new (...args: any[]): {
        _color: DaffPalette;
        color: DaffPalette;
        _elementRef: ElementRef<any>;
        _renderer: Renderer2;
    };
} & typeof DaffCalloutBase;
export declare class DaffCalloutComponent extends _daffCalloutBase implements DaffColorable {
    private elementRef;
    private renderer;
    color: DaffPalette;
    layout: DaffCalloutLayout;
    size: DaffCalloutSize;
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
    readonly compact: boolean;
}
export {};
