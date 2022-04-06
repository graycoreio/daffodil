import {
  ElementRef,
  Input,
  Renderer2,
} from '@angular/core';

import { Constructor } from '../constructor/constructor';
import { colorInPalette } from './color-in-palette';
import { DaffPalette } from './colorable';

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
export function
daffColorMixin<T extends Constructor<HasElementRef>>(Base: T, defaultColor?: DaffPalette) {
  class DaffColorableMixinClass extends Base {
    //TODO move this back to private in Typescript 3.1
    _color: DaffPalette;

    get color(): DaffPalette{
      return this._color;
    }
    set color(value: DaffPalette) {
      //Handle the default color
      const incomingColor = value || defaultColor;

      if(incomingColor !== undefined && !colorInPalette(incomingColor)){
        throw new TypeError(incomingColor + ' is not a valid color for the DaffPalette');
      }

      if(incomingColor !== this._color){ //Only run the dom-render if a change occurs
        //Remove the old color
        if(this._color){
          this._renderer.removeClass(this._elementRef.nativeElement, `daff-${this._color}`);
        }

        if(incomingColor){
          this._renderer.addClass(this._elementRef.nativeElement, `daff-${incomingColor}`);
        }

        this._color = incomingColor;
      }
    }

    constructor(...args: any[]) {
      super(...args);
      this.color = defaultColor;
    }
  };

  // TODO: ugly workaround for https://github.com/microsoft/TypeScript/issues/7342#issuecomment-624298133
  Input()(DaffColorableMixinClass.prototype, 'color');

  return DaffColorableMixinClass;
}
