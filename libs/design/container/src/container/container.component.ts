import {
  Component,
  Input,
  ChangeDetectionStrategy,
  HostBinding,
  ElementRef,
  Renderer2,
} from '@angular/core';

import {
  DaffSizeable,
  DaffSizeAllType,
  daffSizeMixin,
} from '@daffodil/design';

/**
 * An _elementRef and an instance of renderer2 are needed for the Sizeable mixin
 */
class DaffContainerBase{
  constructor(public _elementRef: ElementRef, public _renderer: Renderer2) {}
}

const _daffContainerBase = daffSizeMixin(DaffContainerBase);

/**
 * @inheritdoc
 */
@Component({
  selector: 'daff-container',
  styleUrls: ['./container.component.scss'],
  template: '<ng-content></ng-content>',
  //todo(damienwebdev): remove once decorators hit stage 3 - https://github.com/microsoft/TypeScript/issues/7342
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['size'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DaffContainerComponent extends _daffContainerBase implements DaffSizeable<DaffSizeAllType> {

  /**
   * @docs-private
   */
  @HostBinding('class.daff-container') class = true;

  constructor(private elementRef: ElementRef, private renderer: Renderer2) {
    super(elementRef, renderer);
  }
}
