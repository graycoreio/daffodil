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
  DaffManageContainerLayoutDirective,
  daffColorMixin,
} from '@daffodil/design';

/**
 * An _elementRef is needed for the Colorable mixin
 */
class DaffNavbarBase {
  constructor(public _elementRef: ElementRef, public _renderer: Renderer2) {}
}

const _daffNavbarBase = daffColorMixin(DaffNavbarBase);

/**
 * @inheritdoc
 */
@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'nav[daff-navbar]',
  styleUrls: ['./navbar.component.scss'],
  template: '<ng-content></ng-content>',
  //todo(damienwebdev): remove once decorators hit stage 3 - https://github.com/microsoft/TypeScript/issues/7342
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['color'],
  hostDirectives: [{
    directive: DaffManageContainerLayoutDirective,
  }],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DaffNavbarComponent extends _daffNavbarBase implements DaffColorable {

  @Input() raised = false;

  /**
   * @docs-private
   */
  @HostBinding('class.daff-navbar--raised') get raisedClass() {
    return this.raised;
  };

  /**
   * @docs-private
   */
  @HostBinding('class.daff-navbar') hostClass = true;

  constructor(private elementRef: ElementRef, private renderer: Renderer2) {
    super(elementRef, renderer);
  }
}
