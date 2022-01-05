import {
  Component,
  ElementRef,
  Renderer2,
} from '@angular/core';

import { daffArticleEncapsulatedMixin } from '@daffodil/design';

/**
 * An _elementRef and an instance of renderer2 are needed for the link set mixins
 */
class DesignLandArticleEncapsulatedBase {
  constructor(public _elementRef: ElementRef, public _renderer: Renderer2) {}
}

const _designLandArticleEncapsulatedBase = daffArticleEncapsulatedMixin((DesignLandArticleEncapsulatedBase));

@Component({
  selector: 'design-land-article-encapsulated',
  template: '<ng-content></ng-content>',
})
export class DesignLandArticleEncapsulatedComponent extends _designLandArticleEncapsulatedBase {
  constructor(private elementRef: ElementRef, private renderer: Renderer2) {
    super(elementRef, renderer);
  }
}
