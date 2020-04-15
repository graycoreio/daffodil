import { Component, ViewEncapsulation, Input, ElementRef, ChangeDetectionStrategy, HostBinding, Renderer2 } from '@angular/core';

import { DaffColorable, DaffPalette, daffColorMixin } from '../../../core/colorable/colorable';

// DaffCalloutLayout will be deprecated in v1.0.0
export type DaffCalloutLayout = 'centered' | undefined;
export enum DaffCalloutLayoutEnum {
  Centered = 'centered'
}

// DaffCalloutSize will be deprecated in v1.0.0 and replaced with a DaffCompactable interface
export type DaffCalloutSize = 'compact' | undefined;
export enum DaffCalloutSizeEnum {
  Compact = 'compact'
}

/**
 * An _elementRef and an instance of renderer2 are needed for the Colorable mixin
 */
class DaffCalloutBase {
  constructor(public _elementRef: ElementRef, public _renderer: Renderer2) {}
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
  @Input() layout: DaffCalloutLayout; // Will be deprecated in v1.0.0
  @Input() size: DaffCalloutSize; // Will be deprecated in v1.0.0

  constructor(private elementRef: ElementRef, private renderer: Renderer2) {
    super(elementRef, renderer);
  }

  @HostBinding('class.daff-callout') class = true;

  // Will be deprecated in v1.0.0
  @HostBinding('class.daff-callout--centered') get centered() {
    return this.layout === DaffCalloutLayoutEnum.Centered;
  }

  // Will be deprecated in v1.0.0
  @HostBinding('class.daff-callout--compact') get compact() {
    return this.size === DaffCalloutSizeEnum.Compact;
  }
}
