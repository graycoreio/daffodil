import { Component, Input, ElementRef, HostBinding, Renderer2, ChangeDetectionStrategy } from '@angular/core';
import { DaffColorable, DaffPalette, daffColorMixin } from '../../core/colorable/colorable';

/**
 * An _elementRef is needed for the Colorable mixin
 */
class DaffNavbarBase {
  constructor(public _elementRef: ElementRef, public _renderer: Renderer2) {}
}

const _daffNavbarBase = daffColorMixin(DaffNavbarBase)

@Component({
  selector: 'daff-navbar',
  styleUrls: ['./navbar.component.scss'],
  template: '<ng-content></ng-content>',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DaffNavbarComponent extends _daffNavbarBase implements DaffColorable {

  /**
   * The color of the navbar
   */
  @Input() color: DaffPalette;

  @Input() shadowed: boolean = false;

  @HostBinding('class.daff-navbar--shadowed') get shadowClass() {
    return this.shadowed;
  };

  @HostBinding('class.daff-navbar') hostClass = true;

  constructor(private elementRef: ElementRef, private renderer: Renderer2) {
    super(elementRef, renderer);
  }
}
