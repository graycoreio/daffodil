import { Component, ChangeDetectionStrategy, Input, ElementRef, Renderer2, HostBinding } from '@angular/core';
import { daffColorMixin, DaffColorable, DaffPalette } from '../../core/colorable/colorable';

/**
 * An _elementRef and an instance of renderer2 are needed for the Colorable mixin
 */
class DaffLoadingIconBase{
  constructor(public _elementRef: ElementRef, public _renderer: Renderer2) {}
}

const _daffLoadingIconBase = daffColorMixin(DaffLoadingIconBase, 'primary') 

@Component({
  selector: 'daff-loading-icon',
  templateUrl: './loading-icon.component.html',
  styleUrls: ['./loading-icon.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DaffLoadingIconComponent extends _daffLoadingIconBase implements DaffColorable {

  @Input() color: DaffPalette;
  /**
   * The (pixel) diameter of the animation
   */
  // tslint:disable-next-line: no-inferrable-types
  @Input() diameter: number = 60;

  @HostBinding('class.daff-loading-icon') class = true;
  @HostBinding('style.max-width') get maxWidth() {
    return this.diameter + 'px';
  }

  constructor(private elementRef: ElementRef, private renderer: Renderer2) {
    super(elementRef, renderer);
  }
}
