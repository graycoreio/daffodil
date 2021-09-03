import {
  Component,
  ChangeDetectionStrategy,
  Input,
  ElementRef,
  Renderer2,
  HostBinding,
} from '@angular/core';

import {
  daffColorMixin,
  DaffColorable,
  DaffPalette,
} from '../../core/colorable/public_api';

/**
 * An _elementRef and an instance of renderer2 are needed for the Colorable mixin
 */
class DaffLoadingIconBase{
  constructor(public _elementRef: ElementRef, public _renderer: Renderer2) {}
}

const _daffLoadingIconBase = daffColorMixin(DaffLoadingIconBase, 'primary');

/**
 * @inheritdoc
 */
@Component({
  selector: 'daff-loading-icon',
  templateUrl: './loading-icon.component.html',
  styleUrls: ['./loading-icon.component.scss'],
  //todo(damienwebdev): remove once decorators hit stage 3 - https://github.com/microsoft/TypeScript/issues/7342
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['color'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DaffLoadingIconComponent extends _daffLoadingIconBase implements DaffColorable {

  /**
   * The (pixel) diameter of the animation
   */
  // eslint-disable-next-line @typescript-eslint/no-inferrable-types
  @Input() diameter: number = 60;

	/**
	 * @docs-private
	 */
	@HostBinding('class.daff-loading-icon') class = true;
	/**
	 * @docs-private
	 */
  @HostBinding('style.max-width') get maxWidth() {
	  return this.diameter + 'px';
	}

  constructor(private elementRef: ElementRef, private renderer: Renderer2) {
    super(elementRef, renderer);
  }
}
