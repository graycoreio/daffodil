import {
  Component,
  Input,
  ChangeDetectionStrategy,
  HostBinding,
  ElementRef,
  Renderer2,
} from '@angular/core';

import {
  DaffSizeAllType,
  DaffSizable,
} from '../../core/sizable/sizable';
import { daffSizeMixin } from '../../core/sizable/sizable-mixin';

/**
 * An _elementRef and an instance of renderer2 are needed for the Sizable mixin
 */
class DaffContainerBase{
  constructor(public _elementRef: ElementRef, public _renderer: Renderer2) {}
}

const _daffContainerBase = daffSizeMixin(DaffContainerBase);

@Component({
  selector: 'daff-container',
  styleUrls: ['./container.component.scss'],
  template: '<ng-content></ng-content>',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DaffContainerComponent extends _daffContainerBase implements DaffSizable<DaffSizeAllType> {

  @Input() size: DaffSizeAllType;

  /**
   * @docs-private
   */
  @HostBinding('class.daff-container') class = true;

  constructor(private elementRef: ElementRef, private renderer: Renderer2) {
    super(elementRef, renderer);
  }
}
