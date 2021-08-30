import {
  Component,
  Input,
  ChangeDetectionStrategy,
  HostBinding,
  ElementRef,
  Renderer2,
} from '@angular/core';

import {
  daffColorMixin,
  DaffPalette,
  DaffColorable,
} from '../../core/colorable/colorable';

class DaffDecorativeIconBase{
  constructor(public _elementRef: ElementRef, public _renderer: Renderer2) {}
}

const _daffDecorativeIconBase = daffColorMixin(DaffDecorativeIconBase);

@Component({
  selector: 'daff-decorative-icon',
  template: '<ng-content></ng-content>',
  styleUrls: ['./decorative-icon.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DaffDecorativeIconComponent extends _daffDecorativeIconBase implements DaffColorable {

  @HostBinding('class.daff-decorative-icon') class = true;

  @HostBinding('attr.aria-hidden') ariaHidden = 'true';

  @Input() color: DaffPalette;

  constructor(private elementRef: ElementRef, private renderer: Renderer2) {
    super(elementRef, renderer);
  }
}
