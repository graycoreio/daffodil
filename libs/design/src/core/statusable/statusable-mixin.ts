import { DaffStatus } from './statusable';
import { Constructor } from '../constructor/constructor';
import { ElementRef, Renderer2 } from '@angular/core';

interface HasElementRef {
  _elementRef: ElementRef;
  _renderer: Renderer2;
}

export function
  daffStatusMixin<T extends Constructor<HasElementRef>>(Base: T, defaultStatus?: DaffStatus) {
  return class extends Base {
    // TODO move this back to private in Typescript 3.1
    _status: DaffStatus;

    get status(): DaffStatus {
      return this._status;
    }

    set status(value: DaffStatus) {
      // Handles the default status
      const incomingStatus = value || defaultStatus;

      if (incomingStatus === this._status) { // Only run the dom-render if a change occurs
        return;
      }

      // Removes the old status
      if (this._status) {
        this._renderer.removeClass(this._elementRef.nativeElement, `daff-${this._status}`);
      }

      if (incomingStatus) {
        this._renderer.addClass(this._elementRef.nativeElement, `daff-${incomingStatus}`);
      }

      this._status = incomingStatus;
    }

    constructor(...args: any[]) {
      super(...args);
      this.status = defaultStatus;
    }
  };
}
