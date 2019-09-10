import { Component, ViewEncapsulation, Input, ElementRef, ChangeDetectionStrategy, HostBinding } from '@angular/core';

import { DaffColorable, DaffPalette, daffColorMixin } from '../../../core/colorable/colorable';

export type DaffCalloutLayout = 'centered' | undefined;
export enum DaffCalloutLayoutEnum {
  Centered = 'centered'
}

export type DaffCalloutSize = 'compact' | undefined;
export enum DaffCalloutSizeEnum {
  Compact = 'compact'
}

/**
 * An _elementRef is needed for the Colorable mixin
 */
class DaffCalloutBase {
  constructor(public _elementRef: ElementRef) {}
}

const _daffCalloutBase = daffColorMixin(DaffCalloutBase)

 @Component({
  selector: 'daff-callout',
  templateUrl: './callout.component.html',
  styleUrls: ['./callout.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DaffCalloutComponent extends _daffCalloutBase implements DaffColorable {
  @Input() color: DaffPalette;
  @Input() layout: DaffCalloutLayout;
  @Input() size: DaffCalloutSize;

  constructor(private elementRef: ElementRef) {
    super(elementRef);
  }

  @HostBinding('class.daff-callout') class = true;

  @HostBinding('class.daff-callout--centered') get centered() {
    return this.layout === DaffCalloutLayoutEnum.Centered;
  }

  @HostBinding('class.daff-callout--compact') get compact() {
    return this.size === DaffCalloutSizeEnum.Compact;
  }
}
