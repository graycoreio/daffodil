import { Component, ViewEncapsulation, Input, ElementRef, ChangeDetectionStrategy } from '@angular/core';

import { DaffPalette, daffColorMixin, DaffColorable } from '../../../core/colorable/colorable';

export type DaffHeroLayout = "centered" | undefined;
export enum DaffHeroLayoutEnum {
  Centered = "centered"
}

export type DaffHeroSize = "fullscreen" | "small" | undefined;
export enum DaffHeroSizeEnum {
  Fullscreen = "fullscreen",
  Small = "small"
}

/**
 * An _elementRef is needed for the Colorable mixin
 */
export class DaffHeroBase {
  constructor(public _elementRef: ElementRef) {}
}

const _daffHeroBase = daffColorMixin(DaffHeroBase)

@Component({
  selector: 'daff-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss'],
  host: {
    'class': 'daff-hero',
    '[class.daff-hero--centered]':'layout === "' + DaffHeroLayoutEnum.Centered + '"',
    '[class.daff-hero--fullscreen]':'size === "' + DaffHeroSizeEnum.Fullscreen + '"',
    '[class.daff-hero--small]':'size === "' + DaffHeroSizeEnum.Small + '"'
  },
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
}
