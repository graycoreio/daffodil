import { ElementRef, Renderer2 } from '@angular/core';
import { Constructor } from '../constructor/constructor';
/**
 * In order to be colorable, our class must implement this property
 */
export interface DaffColorable {
    color: DaffPalette;
}
/**
 * These are the valid options that can be passed to a DaffColorable component
 */
export declare type DaffPalette = 'primary' | 'secondary' | 'accent' | 'tertiary' | //TODO: damienwebdev Deprecate accent
'black' | 'white' | 'theme' | 'theme-contrast' | undefined;
interface HasElementRef {
    _elementRef: ElementRef;
    _renderer: Renderer2;
}
/**
 * This should be a trait, but typescript only supports mixins.
 * See: https://github.com/Microsoft/TypeScript/issues/311
 *
 * Turns out the material team followed the same path with the color mixin.
 * https://github.com/angular/material2/blob/master/src/lib/core/common-behaviors/color.ts
 */
export declare function daffColorMixin<T extends Constructor<HasElementRef>>(Base: T, defaultColor?: DaffPalette): {
    new (...args: any[]): {
        _color: DaffPalette;
        color: DaffPalette;
        _elementRef: ElementRef<any>;
        _renderer: Renderer2;
    };
} & T;
export declare function colorInPalette(color: string): boolean;
export {};
