import { DaffSizeAllType } from './sizeable';
import { Constructor } from '../constructor/constructor';
import { ElementRef, Renderer2 } from '@angular/core';
interface HasElementRef {
    _elementRef: ElementRef;
    _renderer: Renderer2;
}
export declare function daffSizeMixin<T extends Constructor<HasElementRef>>(Base: T, defaultSize?: DaffSizeAllType): {
    new (...args: any[]): {
        _size: DaffSizeAllType;
        size: DaffSizeAllType;
        _elementRef: ElementRef<any>;
        _renderer: Renderer2;
    };
} & T;
export {};
