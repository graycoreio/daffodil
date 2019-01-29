import { Component, ViewEncapsulation, Input, ElementRef, ChangeDetectionStrategy } from '@angular/core';
import { DaffColorable, DaffPalette, daffColorMixin } from '../../core/colorable/colorable';

/**
 * An _elementRef is needed for the Colorable mixin
 */
export class DaffCalloutBase {
  constructor(public _elementRef: ElementRef) {}
}

const _daffCalloutBase = daffColorMixin(DaffCalloutBase)

 @Component({
  selector: 'daff-callout',
  templateUrl: './callout.component.html',
  styleUrls: ['./callout.component.scss'],
  host: {
    'class': 'daff-callout',
    '[class.daff-callout--centered]': 'layout === "centered"',
    '[class.daff-callout--small]': 'size === "small"'
  },
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class DaffCalloutComponent extends _daffCalloutBase implements DaffColorable {
  @Input() layout: string;
  @Input() size: string;
  @Input() color: DaffPalette;

  constructor(private elementRef: ElementRef) {
    super(elementRef);
  }
}