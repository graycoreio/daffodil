import { Component, ViewEncapsulation, Input, ElementRef, ChangeDetectionStrategy } from '@angular/core';

import { DaffPalette, daffColorMixin, DaffColorable } from '../../core/colorable/colorable';

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
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'daff-hero',
    '[class.daff-hero--centered]':'layout === "centered"',
    '[class.daff-hero--fullscreen]':'size === "fullscreen"',
    '[class.daff-hero--small]':'size === "small"'
  },
})
export class DaffHeroComponent extends _daffHeroBase implements DaffColorable {

  @Input() layout: string;
  @Input() size: string;
  @Input() color: DaffPalette;

  constructor(private elementRef: ElementRef) {
    super(elementRef);
  }
}
