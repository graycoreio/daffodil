import { Component, ViewEncapsulation, Input, ElementRef, ChangeDetectionStrategy, HostBinding } from '@angular/core';

import { DaffPalette, daffColorMixin, DaffColorable } from '../../../core/colorable/colorable';

export type DaffHeroLayout = 'centered' | undefined;
export enum DaffHeroLayoutEnum {
  Centered = 'centered'
}

export type DaffHeroSize = 'fullscreen' | 'small' | undefined;
export enum DaffHeroSizeEnum {
  Fullscreen = 'fullscreen',
  Small = "small"
}

/**
 * An _elementRef is needed for the Colorable mixin
 */
class DaffHeroBase {
  constructor(public _elementRef: ElementRef) {}
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

  constructor(private elementRef: ElementRef) {
    super(elementRef);
  }

  @HostBinding('class.daff-hero') class = true;

  @HostBinding('class.daff-hero--centered') get centered() {
    return this.layout === DaffHeroLayoutEnum.Centered;
  }

  @HostBinding('class.daff-hero--fullscreen') get fullscreen() {
    return this.size === DaffHeroSizeEnum.Fullscreen;
  }

  @HostBinding('class.daff-hero--small') get small() {
    return this.size === DaffHeroSizeEnum.Small;
  }
}
