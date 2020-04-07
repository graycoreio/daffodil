import {
  Component,
  ViewEncapsulation,
  ChangeDetectionStrategy,
  HostBinding,
  ElementRef,
  Renderer2,
  Input
} from '@angular/core';

import { DaffColorable, DaffPalette, daffColorMixin } from '../../../core/colorable/colorable';

/**
 * An _elementRef and an instance of renderer2 are needed for the Colorable mixin
 */
class DaffCardBase {
  constructor(public _elementRef: ElementRef, public _renderer: Renderer2) {}
}

const _daffCardBase = daffColorMixin(DaffCardBase)

@Component({
  selector: 'daff-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class DaffCardComponent extends _daffCardBase implements DaffColorable {

  @Input() color: DaffPalette;
  @HostBinding('class.daff-card') class = true;

  constructor(private elementRef: ElementRef, private renderer: Renderer2) {
    super(elementRef, renderer);
  }
}
