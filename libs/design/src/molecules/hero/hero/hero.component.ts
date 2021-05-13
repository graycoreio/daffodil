import {
  Component,
  ViewEncapsulation,
  Input,
  ElementRef,
  ChangeDetectionStrategy,
  HostBinding,
  Renderer2,
} from '@angular/core';

import {
  DaffPalette,
  daffColorMixin,
  DaffColorable,
} from '../../../core/colorable/colorable';
import {
  DaffTextAlignable,
  DaffTextAlignment,
} from '../../../core/text-alignable/text-alignable';
import { daffTextAlignmentMixin } from '../../../core/text-alignable/text-alignable-mixin';

// DaffHeroLayout will be deprecated in v1.0.0
export type DaffHeroLayout = 'centered' | undefined;
export enum DaffHeroLayoutEnum {
  Centered = 'centered'
}

// DaffHeroSize will be deprecated in v1.0.0 and replaced with a DaffCompactable interface
export type DaffHeroSize = 'compact' | 'small' | undefined;
export enum DaffHeroSizeEnum {
  Compact = 'compact',
  Small = 'small' // Small will be deprecated in v1.0.0
}

/**
 * An _elementRef and an instance of renderer2 are needed for the Colorable mixin
 */
class DaffHeroBase {
  constructor(public _elementRef: ElementRef, public _renderer: Renderer2) {}
}

const _daffHeroBase = daffColorMixin(daffTextAlignmentMixin(DaffHeroBase));

@Component({
  selector: 'daff-hero',
  template: '<ng-content></ng-content>',
  styleUrls: ['./hero.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DaffHeroComponent extends _daffHeroBase implements DaffColorable, DaffTextAlignable {

  @Input() layout: DaffHeroLayout; // Will be deprecated in v1.0.0
  @Input() size: DaffHeroSize; // Will be deprecated in v1.0.0
  @Input() color: DaffPalette;

  /**
   * Controls text alignment for component-specific UI
   */
  @Input() textAlignment: DaffTextAlignment;

  constructor(private elementRef: ElementRef, private renderer: Renderer2) {
    super(elementRef, renderer);
  }

  /**
   * @docs-private
   */
	@HostBinding('class.daff-hero') class = true;

	/**
	 * Will be deprecated in v1.0.0
	 *
	 * @docs-private
	 */
	@HostBinding('class.daff-hero--centered') get centered() {
	  return this.layout === DaffHeroLayoutEnum.Centered;
	}

	/**
	 * Will be deprecated in v1.0.0
	 *
	 * @docs-private
	 */
	@HostBinding('class.daff-hero--small') get small() {
	  return this.size === DaffHeroSizeEnum.Small;
	}

	/**
	 * Will be deprecated in v1.0.0
	 *
	 * @docs-private
	 */
	@HostBinding('class.daff-hero--compact') get compact() {
	  return this.size === DaffHeroSizeEnum.Compact;
	}
}
