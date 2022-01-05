import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  Renderer2,
} from '@angular/core';

import { daffArticleEncapsulatedMixin } from '../../../core/article-encapsulated/public_api';

/**
 * An _elementRef and an instance of renderer2 are needed for the link set mixins
 */
class DaffAccordionBase {
  constructor(public _elementRef: ElementRef, public _renderer: Renderer2) {}
}

const _daffAccordionBase = daffArticleEncapsulatedMixin((DaffAccordionBase));

@Component({
  selector: 'daff-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class DaffAccordionComponent extends _daffAccordionBase {
  constructor(private elementRef: ElementRef, private renderer: Renderer2) {
    super(elementRef, renderer);
  }
}
