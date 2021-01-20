import { ElementRef, Renderer2 } from '@angular/core';
import { DaffColorable, DaffPalette } from '../../core/colorable/colorable';
/**
 * An _elementRef is needed for the Colorable mixin
 */
declare class DaffNavbarBase {
    _elementRef: ElementRef;
    _renderer: Renderer2;
    constructor(_elementRef: ElementRef, _renderer: Renderer2);
}
declare const _daffNavbarBase: {
    new (...args: any[]): {
        _color: DaffPalette;
        color: DaffPalette;
        _elementRef: ElementRef<any>;
        _renderer: Renderer2;
    };
} & typeof DaffNavbarBase;
export declare class DaffNavbarComponent extends _daffNavbarBase implements DaffColorable {
    private elementRef;
    private renderer;
    /**
     * The color of the navbar
     */
    color: DaffPalette;
    shadowed: boolean;
    /**
     * @docs-private
     */
    readonly shadowClass: boolean;
    /**
     * @docs-private
     */
    hostClass: boolean;
    constructor(elementRef: ElementRef, renderer: Renderer2);
}
export {};
