import {
  ElementRef,
  Input,
  Renderer2,
} from '@angular/core';

import { Constructor } from '../constructor/constructor';
import { DaffTextAlignment } from './text-alignable';

interface HasElementRef {
  _elementRef: ElementRef;
  _renderer: Renderer2;
}

export function
daffTextAlignmentMixin<T extends Constructor<HasElementRef>>(Base: T, defaultTextAlignment?: DaffTextAlignment) {
  class DaffTextAlignableMixin extends Base {
    // TODO move this back to private in Typescript 3.1
    _textAlignment: DaffTextAlignment;

    /**
     * Controls text alignment for component-specific UI
     */
    @Input()
    get textAlignment(): DaffTextAlignment {
      return this._textAlignment;
    }
    set textAlignment(value: DaffTextAlignment) {
      // Handles the default text alignment
      const incomingTextAlignment = value || defaultTextAlignment;

      if (incomingTextAlignment === this._textAlignment) { // Only run the dom-render if a change occurs
        return;
      }

      // Removes the old text alignment
      if (this._textAlignment) {
        this._renderer.removeClass(this._elementRef.nativeElement, `daff-${this._textAlignment}`);
      }

      if (incomingTextAlignment) {
        this._renderer.addClass(this._elementRef.nativeElement, `daff-${incomingTextAlignment}`);
      }

      this._textAlignment = incomingTextAlignment;
    }

    constructor(...args: any[]) {
      super(...args);
      this.textAlignment = defaultTextAlignment;
    }
  };
  return DaffTextAlignableMixin;
}
