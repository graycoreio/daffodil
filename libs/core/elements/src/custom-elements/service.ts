import { DOCUMENT } from '@angular/common';
import {
  Inject,
  Injectable,
  Injector,
  Type,
} from '@angular/core';
import { createCustomElement } from '@angular/elements';

@Injectable({
  providedIn: 'root',
})
export class DaffCustomElements {
  constructor(
    @Inject(DOCUMENT) private document: Document,
    private injector: Injector,
  ) {}

  create<T>(tag: string, component: Type<T>): void {
    if (this.document.defaultView.customElements && !this.document.defaultView.customElements.get(tag)) {
      this.document.defaultView.customElements.define(
        tag,
        createCustomElement(component, { injector: this.injector }),
      );
    }
  }
}
