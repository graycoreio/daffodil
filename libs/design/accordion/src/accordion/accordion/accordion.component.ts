import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  Renderer2,
} from '@angular/core';

import { daffArticleEncapsulatedMixin } from '@daffodil/design';

/**
 * An _elementRef and an instance of renderer2 are needed for the link set mixins
 */
class DaffAccordionBase {
  constructor(public _elementRef: ElementRef, public _renderer: Renderer2) {}
}

const _daffAccordionBase = daffArticleEncapsulatedMixin((DaffAccordionBase));

@Component({
  selector: 'daff-accordion',
  template: '<ng-content></ng-content>',
  styles: [`
    :host {
      display: block;
    }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class DaffAccordionComponent extends _daffAccordionBase {
  constructor(private elementRef: ElementRef, private renderer: Renderer2) {
    super(elementRef, renderer);
  }
}
