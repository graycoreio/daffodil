import {
  ElementRef,
  Renderer2,
} from '@angular/core';

import { Constructor } from '../constructor/constructor';

export interface HasElementRef {
	_elementRef: ElementRef;
	_renderer: Renderer2;
}

/**
 * A mixin for giving a component the ability to prevent article styles from cascading down.
 */
export function
daffArticleEncapsulatedMixin<T extends Constructor<HasElementRef>>(Base: T) {
  return class extends Base {
    constructor(...args: any[]) {
      super(...args);
      this._renderer.addClass(this._elementRef.nativeElement, `daff-ae`);
    }
  };
}
