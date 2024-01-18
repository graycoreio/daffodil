import {
  ElementRef,
  Input,
  Renderer2,
} from '@angular/core';

import { DaffSizeAllType } from './sizable';
import { Constructor } from '../constructor/constructor';

export interface HasElementRef {
  _elementRef: ElementRef;
  _renderer: Renderer2;
}

export function
daffSizeMixin<V extends DaffSizeAllType, T extends Constructor<HasElementRef> = Constructor<HasElementRef>>(Base: T, defaultSize?: V) {
  class DaffSizeMixinClass extends Base {
    //TODO move this back to private in Typescript 3.1
    _size: V;

    get size(): V{
      return this._size;
    }
    set size(value: V) {
      // Handles the default size
      const incomingSize = value || defaultSize;

      if(incomingSize !== this._size){ //Only run the dom-render if a change occurs
        //Remove the old size
        if(this._size){
          this._renderer.removeClass(this._elementRef.nativeElement, `daff-${this._size}`);
        }

        if(incomingSize){
          this._renderer.addClass(this._elementRef.nativeElement, `daff-${incomingSize}`);
        }

        this._size = incomingSize;
      }
    }

    constructor(...args: any[]) {
      super(...args);
      this.size = defaultSize;
    }
  };

  // TODO: ugly workaround for https://github.com/microsoft/TypeScript/issues/7342#issuecomment-624298133
  Input()(DaffSizeMixinClass.prototype, 'size');

  return DaffSizeMixinClass;
}
