import {
  Component,
  ViewEncapsulation,
  ChangeDetectionStrategy,
  HostBinding,
  ElementRef,
  Renderer2,
  Input,
} from '@angular/core';

import {
  DaffColorable,
  DaffPalette,
  daffColorMixin,
} from '../../../core/colorable/public_api';

/**
 * An _elementRef and an instance of renderer2 are needed for the Colorable mixin
 */
class DaffCardBase {
  constructor(public _elementRef: ElementRef, public _renderer: Renderer2) {}
}

const _daffCardBase = daffColorMixin(DaffCardBase);

/**
 * @inheritdoc
 */
@Component({
  selector: '' +
    'daff-card' + ',' +
    'a[daff-card]',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  encapsulation: ViewEncapsulation.None,
  //todo(damienwebdev): remove once decorators hit stage 3 - https://github.com/microsoft/TypeScript/issues/7342
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['color'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class DaffCardComponent extends _daffCardBase implements DaffColorable {

  @Input() raised = false;

  /**
   * @docs-private
   */
  @HostBinding('class.daff-card') class = true;

  @HostBinding('class.daff-card--raised') get raisedClass() {
    return this.raised;
  }

  constructor(private elementRef: ElementRef, private renderer: Renderer2) {
    super(elementRef, renderer);
  }
}
