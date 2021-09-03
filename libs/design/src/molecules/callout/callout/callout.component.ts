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
  DaffColorable,
  daffColorMixin,
} from '../../../core/colorable/public_api';
import {
  DaffTextAlignable,
  DaffTextAlignment,
} from '../../../core/text-alignable/text-alignable';
import { daffTextAlignmentMixin } from '../../../core/text-alignable/text-alignable-mixin';

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

const _daffCalloutBase = daffColorMixin(daffTextAlignmentMixin(DaffCalloutBase));

/**
 * @inheritdoc
 */
@Component({
  selector: 'daff-callout',
  template: '<ng-content></ng-content>',
  styleUrls: ['./callout.component.scss'],
  encapsulation: ViewEncapsulation.None,
  //todo(damienwebdev): remove once decorators hit stage 3 - https://github.com/microsoft/TypeScript/issues/7342
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['color', 'textAlignment'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DaffCalloutComponent extends _daffCalloutBase implements DaffColorable, DaffTextAlignable {
  @Input() layout: DaffCalloutLayout; // Will be deprecated in v1.0.0
  @Input() size: DaffCalloutSize; // Will be deprecated in v1.0.0

  constructor(private elementRef: ElementRef, private renderer: Renderer2) {
    super(elementRef, renderer);
  }

  /**
   * @docs-private
   */
	@HostBinding('class.daff-callout') class = true;

	/**
	 * Will be deprecated in v1.0.0
	 *
	 * @docs-private
	 */
	@HostBinding('class.daff-callout--centered') get centered() {
	  return this.layout === DaffCalloutLayoutEnum.Centered;
	}

	/**
	 * Will be deprecated in v1.0.0
	 *
	 * @docs-private
	 */
	@HostBinding('class.daff-callout--compact') get compact() {
	  return this.size === DaffCalloutSizeEnum.Compact;
	}
}
