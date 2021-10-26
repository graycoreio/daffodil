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
  DaffCompactable,
  daffCompactableMixin,
} from '../../../core/compactable/public_api';
import { DaffTextAlignable } from '../../../core/text-alignable/text-alignable';
import { daffTextAlignmentMixin } from '../../../core/text-alignable/text-alignable-mixin';

/**
 * @deprecated See {@link DaffTextAlignable}
 */
export type DaffCalloutLayout = 'centered' | undefined;
export enum DaffCalloutLayoutEnum {
  Centered = 'centered'
}

/**
 * @deprecated See {@link DaffCompactable}
 */
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

const _daffCalloutBase = daffColorMixin(daffCompactableMixin(daffTextAlignmentMixin(DaffCalloutBase, 'left')));

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
  inputs: ['color', 'compact', 'textAlignment'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DaffCalloutComponent extends _daffCalloutBase implements DaffColorable, DaffTextAlignable, DaffCompactable {
  /**
   * @deprecated See {@link DaffTextAlignable}
   */
  @Input() layout: DaffCalloutLayout;

  /**
   * @deprecated See {@link DaffCompactable}
   */
  @Input() size: DaffCalloutSize;

  constructor(private elementRef: ElementRef, private renderer: Renderer2) {
    super(elementRef, renderer);
  }

  /**
   * @docs-private
   */
	@HostBinding('class.daff-callout') class = true;

	/**
	 * @deprecated See {@link DaffTextAlignable}
	 */
	@HostBinding('class.daff-callout--centered') get centered() {
	  return this.layout === DaffCalloutLayoutEnum.Centered;
	}

	/**
	 * @deprecated See {@link DaffCompactable}
	 */
	@HostBinding('class.daff-callout--compact') get compactClass() {
	  return this.size === DaffCalloutSizeEnum.Compact;
	}
}
