import { Component, Input, ChangeDetectionStrategy, HostBinding, ElementRef, Renderer2 } from '@angular/core';
import { DaffSizeAllType, DaffSizeable, DaffSizeableEnum } from '../../core/sizeable/sizeable';
import { daffSizeMixin } from '../../core/sizeable/sizeable-mixin';

/**
* An _elementRef and an instance of renderer2 are needed for the Sizeable mixin
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
export class DaffContainerComponent extends _daffContainerBase implements DaffSizeable<DaffSizeAllType> {

  @Input() size: DaffSizeAllType;

  @HostBinding('class.daff-container') class = true;

  constructor(private elementRef: ElementRef, private renderer: Renderer2) {
    super(elementRef, renderer);
  }
}