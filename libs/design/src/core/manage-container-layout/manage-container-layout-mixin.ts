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
 * A mixin for giving a component the ability to manage a DaffContainerComponent's layout.
 * It passes predetermined layout styles down to the container. In order for a component to
 * do this, it must implement this mixin.
 */
export function
daffManageContainerLayoutMixin<T extends Constructor<HasElementRef>>(Base: T) {
  return class extends Base {
    constructor(...args: any[]) {
      super(...args);
      this._renderer.addClass(this._elementRef.nativeElement, `daff-manage-container-layout`);
    }
  };
}
