import {
  Component,
  ViewEncapsulation,
  Input,
  ElementRef,
  ChangeDetectionStrategy,
  HostBinding,
  Renderer2,
} from '@angular/core';

import { daffArticleEncapsulatedMixin } from '../../../core/article-encapsulated/public_api';
import {
  daffColorMixin,
  DaffColorable,
} from '../../../core/colorable/public_api';
import {
  DaffCompactable,
  daffCompactableMixin,
} from '../../../core/compactable/public_api';
import { daffManageContainerLayoutMixin } from '../../../core/manage-container-layout/public_api';
import { DaffTextAlignable } from '../../../core/text-alignable/text-alignable';
import { daffTextAlignmentMixin } from '../../../core/text-alignable/text-alignable-mixin';

/**
 * @deprecated See {@link DaffTextAlignable}
 */
export type DaffHeroLayout = 'centered' | undefined;
export enum DaffHeroLayoutEnum {
  Centered = 'centered'
}

/**
 * @deprecated See {@link DaffCompactable}
 */
export type DaffHeroSize = 'compact' | 'small' | undefined;
export enum DaffHeroSizeEnum {
  Compact = 'compact',
  Small = 'small'
}

/**
 * An _elementRef and an instance of renderer2 are needed for the hero mixins
 */
class DaffHeroBase {
  constructor(public _elementRef: ElementRef, public _renderer: Renderer2) {}
}

const _daffHeroBase = daffArticleEncapsulatedMixin(daffManageContainerLayoutMixin(daffColorMixin(daffCompactableMixin(daffTextAlignmentMixin(DaffHeroBase, 'left')))));

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
  inputs: ['color', 'compact', 'textAlignment'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DaffHeroComponent extends _daffHeroBase implements DaffColorable, DaffTextAlignable, DaffCompactable {

  /**
   * @deprecated See {@link DaffTextAlignable}
   */
  @Input() layout: DaffHeroLayout;

  /**
   * @deprecated See {@link DaffCompactable}
   */
  @Input() size: DaffHeroSize;

  constructor(private elementRef: ElementRef, private renderer: Renderer2) {
    super(elementRef, renderer);
  }

  /**
   * @docs-private
   */
  @HostBinding('class.daff-hero') class = true;

  /**
   * @deprecated See {@link DaffTextAlignable}
   */
  @HostBinding('class.daff-hero--centered') get centered() {
	  return this.layout === DaffHeroLayoutEnum.Centered;
  }

  /**
   * @deprecated See {@link DaffCompactable}
   */
  @HostBinding('class.daff-hero--compact') get compactClass() {
	  return this.size === DaffHeroSizeEnum.Compact || this.compact === true || this.size === DaffHeroSizeEnum.Small;
  }
}
