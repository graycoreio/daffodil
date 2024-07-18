import {
  Component,
  ViewEncapsulation,
  ElementRef,
  ChangeDetectionStrategy,
  HostBinding,
  Renderer2,
} from '@angular/core';

import {
  DaffArticleEncapsulatedDirective,
  DaffColorable,
  daffColorMixin,
  DaffCompactable,
  daffCompactableMixin,
  DaffManageContainerLayoutDirective,
  DaffTextAlignable,
  daffTextAlignmentMixin,
} from '@daffodil/design';

/**
 * An _elementRef and an instance of renderer2 are needed for the Colorable mixin
 */
class DaffCalloutBase {
  constructor(public _elementRef: ElementRef, public _renderer: Renderer2) {}
}

const _daffCalloutBase = daffColorMixin(daffCompactableMixin(daffTextAlignmentMixin(DaffCalloutBase, 'left')));

/**
 * @inheritdoc
 */
@Component({
  selector: 'daff-callout',
  template: '<ng-content></ng-content>',
  styleUrls: ['./callout.component.scss'],
  encapsulation: ViewEncapsulation.None,
  //todo(damienwebdev): remove once decorators hit stage 3 - https://github.com/microsoft/TypeScript/issues/7342
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['color', 'compact', 'textAlignment'],
  hostDirectives: [
    { directive: DaffArticleEncapsulatedDirective },
    { directive: DaffManageContainerLayoutDirective },
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DaffCalloutComponent extends _daffCalloutBase implements DaffColorable, DaffTextAlignable, DaffCompactable {
  constructor(private elementRef: ElementRef, private renderer: Renderer2) {
    super(elementRef, renderer);
  }

  /**
   * @docs-private
   */
  @HostBinding('class.daff-callout') class = true;
}
