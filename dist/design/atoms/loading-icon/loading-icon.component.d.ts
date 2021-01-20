import { ElementRef, Renderer2 } from '@angular/core';
import { DaffColorable, DaffPalette } from '../../core/colorable/colorable';
/**
 * An _elementRef and an instance of renderer2 are needed for the Colorable mixin
 */
declare class DaffLoadingIconBase {
    _elementRef: ElementRef;
    _renderer: Renderer2;
    constructor(_elementRef: ElementRef, _renderer: Renderer2);
}
declare const _daffLoadingIconBase: {
    new (...args: any[]): {
        _color: DaffPalette;
        color: DaffPalette;
        _elementRef: ElementRef<any>;
        _renderer: Renderer2;
    };
} & typeof DaffLoadingIconBase;
export declare class DaffLoadingIconComponent extends _daffLoadingIconBase implements DaffColorable {
    private elementRef;
    private renderer;
    color: DaffPalette;
    /**
     * The (pixel) diameter of the animation
     */
    diameter: number;
    /**
     * @docs-private
     */
    class: boolean;
    /**
     * @docs-private
     */
    readonly maxWidth: string;
    constructor(elementRef: ElementRef, renderer: Renderer2);
}
export {};
