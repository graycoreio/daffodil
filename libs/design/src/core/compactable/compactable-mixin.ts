import {
  ElementRef,
  Renderer2,
} from '@angular/core';

import { Constructor } from '../constructor/constructor';

export interface HasElementRef {
  _elementRef: ElementRef;
  _renderer: Renderer2;
}

export function
daffCompactableMixin<T extends Constructor<HasElementRef>>(Base: T, defaultCompact: boolean = false) {
  return class extends Base {
    // TODO move this back to private in Typescript 3.1
    _compact: boolean;

    get compact(): boolean {
      return this._compact;
    }

    set compact(value: boolean) {
      // Handles the default compact
      const incomingCompact = value || defaultCompact;

      if (incomingCompact === this._compact) { // Only run the dom-render if a change occurs
        return;
      }

      if (incomingCompact) {
        this._renderer.addClass(this._elementRef.nativeElement, `daff-compact`);
      } else {
        this._renderer.removeClass(this._elementRef.nativeElement, `daff-compact`);
      }

      this._compact = incomingCompact;
    }

    constructor(...args: any[]) {
      super(...args);
      this.compact = defaultCompact;
    }
  };
}
