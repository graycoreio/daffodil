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
} from '../../../core/colorable/colorable';

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
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class DaffCardComponent extends _daffCardBase implements DaffColorable {

  @Input() color: DaffPalette;
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
