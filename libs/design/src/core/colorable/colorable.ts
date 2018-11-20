import { ElementRef, Type } from "@angular/core";
import { Constructor } from '../constructor';

/**
 * In order to be colorable, our class must implement this property
 */
export interface DaffColorable {
    color: DaffPalette;
}

/**
 * These are the valid options that can be passed to a DaffColorable component
 */
export type DaffPalette = "primary" | "accent" | "black" | "white" | undefined;
export enum DaffPaletteEnum {
    PRIMARY = "primary",
    ACCENT = "accent",
    BLACK = "black",
    WHITE = "white",
}
export interface HasElementRef {
    _elementRef: ElementRef;
  }

/**
 * This should be a trait, but typescript only supports mixins.
 * See: https://github.com/Microsoft/TypeScript/issues/311
 * 
 * Turns out the material team followed the same path with the color mixin.
 * https://github.com/angular/material2/blob/master/src/lib/core/common-behaviors/color.ts
 */
export function 
    daffColorMixin<T extends Constructor<HasElementRef>>(Base: T, defaultColor? : DaffPalette) {
    return class extends Base {
        //TODO move this back to private in Typescript 3.1
        _color: DaffPalette;

        get color(): DaffPalette{return this._color;}
        set color(value: DaffPalette) {
            //Handle the default color
            const incomingColor = value || defaultColor;

            if(incomingColor !== undefined && !colorInPalette(incomingColor)){
                throw new TypeError(incomingColor + " is not a valid color for the DaffPalette");   
            }

            if(incomingColor !== this._color){ //Only run the dom-render if a change occurs
                //Remove the old color
                if(this._color){
                    this._elementRef.nativeElement.classList.remove(`daff-${this._color}`);
                }

                if(incomingColor){
                    this._elementRef.nativeElement.classList.add(`daff-${incomingColor}`);
                }

                this._color = incomingColor;
            }   
        }

        constructor(...args: any[]) {
            super(...args);
            this.color = defaultColor;
        }
    }
}

export function colorInPalette(color: string) : boolean{
    return (<any>Object).values(DaffPaletteEnum).includes(color)
}