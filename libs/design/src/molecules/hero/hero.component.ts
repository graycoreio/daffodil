import { Component, ViewEncapsulation, Input, ElementRef, ChangeDetectionStrategy } from '@angular/core';

import { DaffPalette, daffColorMixin, DaffColorable } from '../../core/colorable/colorable';

/**
 * An _elementRef is needed for the Colorable mixin
 */
export class DaffCalloutBase {
  constructor(public _elementRef: ElementRef) {}
}

const _daffCalloutBase = daffColorMixin(DaffCalloutBase)

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
export class DaffHeroComponent extends _daffCalloutBase implements DaffColorable {

  @Input() layout: string;
  @Input() size: string;
  @Input() color: DaffPalette;

  constructor(private elementRef: ElementRef) {
    super(elementRef);
  }
}
