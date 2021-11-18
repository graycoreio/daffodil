import {
  Component,
  Input,
  ElementRef,
  HostBinding,
  Renderer2,
  ChangeDetectionStrategy,
} from '@angular/core';

import {
  DaffColorable,
  DaffPalette,
  daffColorMixin,
} from '../../core/colorable/public_api';
import { daffManageContainerLayoutMixin } from '../../core/manage-container-layout/public_api';

/**
 * An _elementRef is needed for the Colorable mixin
 */
class DaffNavbarBase {
  constructor(public _elementRef: ElementRef, public _renderer: Renderer2) {}
}

const _daffNavbarBase = daffManageContainerLayoutMixin(daffColorMixin(DaffNavbarBase));

/**
 * @inheritdoc
 */
@Component({
  selector: 'daff-navbar',
  styleUrls: ['./navbar.component.scss'],
  template: '<ng-content></ng-content>',
  //todo(damienwebdev): remove once decorators hit stage 3 - https://github.com/microsoft/TypeScript/issues/7342
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['color'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DaffNavbarComponent extends _daffNavbarBase implements DaffColorable {

  @Input() shadowed = false;

  /**
   * @docs-private
   */
  @HostBinding('class.daff-navbar--shadowed') get shadowClass() {
    return this.shadowed;
  };

  /**
   * @docs-private
   */
  @HostBinding('class.daff-navbar') hostClass = true;

  constructor(private elementRef: ElementRef, private renderer: Renderer2) {
    super(elementRef, renderer);
  }
}
