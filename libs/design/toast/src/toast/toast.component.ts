import {
  Component,
  Input,
  ElementRef,
  Renderer2,
  HostBinding,
  ContentChild,
  ViewEncapsulation,
  ChangeDetectionStrategy,
  Output,
  EventEmitter,
  HostListener,
} from '@angular/core';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

import {
  daffArticleEncapsulatedMixin,
  DaffPrefixable,
  DaffPrefixDirective,
  DaffStatusable,
  daffStatusMixin,
} from '@daffodil/design';

/**
 * An _elementRef is needed for the core mixins
 */
class DaffToastBase {
  constructor(public _elementRef: ElementRef, public _renderer: Renderer2) {}
}

const _daffToastBase = daffArticleEncapsulatedMixin(daffStatusMixin(DaffToastBase));

export type DaffToastHorizontalPosition = 'left' | 'right' | 'center';
export type DaffToastVerticalPosition = 'top' | 'bottom';

/**
 * DaffToastComponent provides a way to display and
 * communicate information for user actions or system updates.
 */
@Component({
  selector: 'daff-toast',
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.scss'],
  // todo(damienwebdev): remove once decorators hit stage 3 - https://github.com/microsoft/TypeScript/issues/7342
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['status'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DaffToastComponent
  extends _daffToastBase
  implements DaffPrefixable, DaffStatusable {
  faTimes = faTimes;

  @HostBinding('class.daff-toast') class = true;

  @HostBinding('attr.tabindex') tabindex = '0';
  @HostBinding('attr.aria-live') ariaLive = 'polite';

  @HostListener('keydown.escape', ['$event']) onKeydownHandler(event: KeyboardEvent) {
    if(this.dismissable){
      this.onCloseToast(event);
    }
  }

  /** Whether or not a toast is closable */
  @Input() dismissable = true;

  /** The duration (in milliseconds) that a toast is visible before it's dismissed. */
  @Input() duration: number;

  @Output() closeToast: EventEmitter<void> = new EventEmitter();

  constructor(private elementRef: ElementRef, private renderer: Renderer2) {
	  super(elementRef, renderer);
  }

  @ContentChild(DaffPrefixDirective)
  _prefix: DaffPrefixDirective;

  onCloseToast(event: Event) {
    this.closeToast.emit();
  }
}
