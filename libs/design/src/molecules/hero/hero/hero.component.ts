import { Component, ViewEncapsulation, Input, ElementRef, ChangeDetectionStrategy, HostBinding, Renderer2 } from '@angular/core';

import { DaffPalette, daffColorMixin, DaffColorable } from '../../../core/colorable/colorable';

export type DaffHeroLayout = 'centered' | undefined;
export enum DaffHeroLayoutEnum {
  Centered = 'centered'
}

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

const _daffHeroBase = daffColorMixin(DaffHeroBase)

@Component({
  selector: 'daff-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DaffHeroComponent extends _daffHeroBase implements DaffColorable {
  
  @Input() layout: DaffHeroLayout;
  @Input() size: DaffHeroSize;
  @Input() color: DaffPalette;

  constructor(private elementRef: ElementRef, private renderer: Renderer2) {
    super(elementRef, renderer);
  }

  @HostBinding('class.daff-hero') class = true;

  @HostBinding('class.daff-hero--centered') get centered() {
    return this.layout === DaffHeroLayoutEnum.Centered;
  }

  @HostBinding('class.daff-hero--small') get small() {
    return this.size === DaffHeroSizeEnum.Small;
  }

  @HostBinding('class.daff-hero--compact') get compact() {
    return this.size === DaffHeroSizeEnum.Compact;
  }
}
