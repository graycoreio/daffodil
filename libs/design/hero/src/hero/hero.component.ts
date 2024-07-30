import {
  Component,
  ViewEncapsulation,
  ElementRef,
  ChangeDetectionStrategy,
  HostBinding,
  Renderer2,
  SimpleChanges,
  OnChanges,
} from '@angular/core';

import {
  DaffArticleEncapsulatedDirective,
  DaffColorable,
  daffColorMixin,
  DaffCompactable,
  daffCompactableMixin,
  DaffManageContainerLayoutDirective,
  DaffTextAlignableDirective,
} from '@daffodil/design';

/**
 * An _elementRef and an instance of renderer2 are needed for the hero mixins
 */
class DaffHeroBase {
  constructor(public _elementRef: ElementRef, public _renderer: Renderer2) {}
}

const _daffHeroBase = daffColorMixin(daffCompactableMixin(DaffHeroBase));

/**
 * @inheritdoc
 */
@Component({
  selector: 'daff-hero',
  template: '<ng-content></ng-content>',
  styleUrls: ['./hero.component.scss'],
  encapsulation: ViewEncapsulation.None,
  //todo(damienwebdev): remove once decorators hit stage 3 - https://github.com/microsoft/TypeScript/issues/7342
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['color', 'compact'],
  hostDirectives: [
    { directive: DaffArticleEncapsulatedDirective },
    { directive: DaffManageContainerLayoutDirective },
    {
      directive: DaffTextAlignableDirective,
      inputs: ['textAlignment'],
    },
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DaffHeroComponent extends _daffHeroBase implements DaffColorable, DaffCompactable {
  constructor(
    private elementRef: ElementRef,
    private renderer: Renderer2,
    private textAlignable: DaffTextAlignableDirective,
  ){
    super(elementRef, renderer);

    this.textAlignable.defaultAlignment = 'left';
  }

  /**
   * @docs-private
   */
  @HostBinding('class.daff-hero') class = true;
}
