import { ElementRef, Renderer2 } from '@angular/core';
import { DaffSizeAllType, DaffSizeable } from '../../core/sizeable/sizeable';
/**
* An _elementRef and an instance of renderer2 are needed for the Sizeable mixin
*/
declare class DaffContainerBase {
    _elementRef: ElementRef;
    _renderer: Renderer2;
    constructor(_elementRef: ElementRef, _renderer: Renderer2);
}
declare const _daffContainerBase: {
    new (...args: any[]): {
        _size: DaffSizeAllType;
        size: DaffSizeAllType;
        _elementRef: ElementRef<any>;
        _renderer: Renderer2;
    };
} & typeof DaffContainerBase;
export declare class DaffContainerComponent extends _daffContainerBase implements DaffSizeable<DaffSizeAllType> {
    private elementRef;
    private renderer;
    size: DaffSizeAllType;
    /**
     * @docs-private
     */
    class: boolean;
    constructor(elementRef: ElementRef, renderer: Renderer2);
}
export {};
