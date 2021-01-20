import { ElementRef, Renderer2 } from '@angular/core';
import { DaffColorable, DaffPalette } from '../../../core/colorable/colorable';
/**
 * An _elementRef and an instance of renderer2 are needed for the Colorable mixin
 */
declare class DaffCardBase {
    _elementRef: ElementRef;
    _renderer: Renderer2;
    constructor(_elementRef: ElementRef, _renderer: Renderer2);
}
declare const _daffCardBase: {
    new (...args: any[]): {
        _color: DaffPalette;
        color: DaffPalette;
        _elementRef: ElementRef<any>;
        _renderer: Renderer2;
    };
} & typeof DaffCardBase;
export declare class DaffCardComponent extends _daffCardBase implements DaffColorable {
    private elementRef;
    private renderer;
    color: DaffPalette;
    /**
     * @docs-private
     */
    class: boolean;
    constructor(elementRef: ElementRef, renderer: Renderer2);
}
export {};
