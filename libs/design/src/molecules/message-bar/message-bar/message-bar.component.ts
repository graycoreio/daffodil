import { Component, HostBinding, ElementRef, Renderer2, Input, ViewEncapsulation, ChangeDetectionStrategy } from '@angular/core';

import { 
  DaffPrefixable, 
  DaffSuffixable, 
  daffPrefixableMixin
} from '../../../core/prefix-suffix/public_api';

/**
 * An _elementRef and an instance of renderer2 are needed for the core mixins
 */
class DaffMessageBarBase {
  constructor(public _elementRef: ElementRef, public _renderer: Renderer2) {}
}

const _daffMessageBarBase = daffPrefixableMixin(DaffMessageBarBase)

@Component({
  selector: 'daff-message-bar',
  templateUrl: './message-bar.component.html',
  styleUrls: ['./message-bar.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush

})
export class DaffMessageBarComponent extends _daffMessageBarBase implements DaffPrefixable {

  @Input() flush: false;

  @HostBinding('class.daff-message-bar') class = true;
  @HostBinding('class.daff-message-bar--flush') get flushClass() {
    return this.flush;
  }
  @HostBinding('attr.tabindex') tabindex = '0';
  @HostBinding('attr.aria-live') ariaLive = 'polite';

  constructor(private elementRef: ElementRef, private renderer: Renderer2) {
    super(elementRef, renderer);
  }
}
