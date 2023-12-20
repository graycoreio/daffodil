import {
  Component,
  HostBinding,
  ViewEncapsulation,
  ChangeDetectionStrategy,
  ElementRef,
  Renderer2,
} from '@angular/core';

import { daffArticleEncapsulatedMixin } from '@daffodil/design';

/**
 * An _elementRef and an instance of renderer2 are needed for the link set mixins
 */
class DaffLinkSetBase {
  constructor(public _elementRef: ElementRef, public _renderer: Renderer2) {}
}

const _daffLinkSetBase = daffArticleEncapsulatedMixin((DaffLinkSetBase));

/**
 * DaffLinkSetComponent is a component for displaying a two or more links.
 */
@Component({
  selector: 'daff-link-set',
  template: '<ng-content></ng-content>',
  styleUrls: ['./link-set.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DaffLinkSetComponent extends _daffLinkSetBase {

  /**
   * @docs-private
   */
  @HostBinding('class.daff-link-set') class = true;

  constructor(private elementRef: ElementRef, private renderer: Renderer2) {
    super(elementRef, renderer);
  }
}
