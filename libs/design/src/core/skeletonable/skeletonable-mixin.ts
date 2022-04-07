import {
  ElementRef,
  Renderer2,
} from '@angular/core';

import { Constructor } from '../constructor/constructor';

interface HasElementRef {
  _elementRef: ElementRef;
  _renderer: Renderer2;
}

export function
daffSkeletonableMixin<T extends Constructor<HasElementRef>>(Base: T, defaultSkeleton: boolean = false) {
  return class extends Base {
    // TODO move this back to private in Typescript 3.1
    _skeleton: boolean;

    get skeleton(): boolean {
      return this._skeleton;
    }

    set skeleton(value: boolean) {
      // Handles the default skeleton
      const incomingSkeleton = value || defaultSkeleton;

      if (incomingSkeleton === this._skeleton) { // Only run the dom-render if a change occurs
        return;
      }

      if (incomingSkeleton) {
        this._renderer.addClass(this._elementRef.nativeElement, `daff-skeleton`);
      } else {
        this._renderer.removeClass(this._elementRef.nativeElement, `daff-skeleton`);
      }

      this._skeleton = incomingSkeleton;
    }

    constructor(...args: any[]) {
      super(...args);
      this.skeleton = defaultSkeleton;
    }
  };
}
