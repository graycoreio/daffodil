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
class DaffNotificationBase {
  constructor(public _elementRef: ElementRef, public _renderer: Renderer2) {}
}

const _daffNotificationBase = daffArticleEncapsulatedMixin(daffStatusMixin(DaffNotificationBase));

export type DaffNotificationMode = 'inline' | 'toast';

enum DaffNotificationModeEnum {
  Inline = 'inline',
  Toast = 'toast',
}

/**
 * DaffNotificationComponent provides a way to display and
 * communicate information for user actions or system updates.
 */
@Component({
  selector: 'daff-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss'],
  // todo(damienwebdev): remove once decorators hit stage 3 - https://github.com/microsoft/TypeScript/issues/7342
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['status'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DaffNotificationComponent
  extends _daffNotificationBase
  implements DaffPrefixable, DaffStatusable {
  faTimes = faTimes;

  @HostBinding('class.daff-notification') class = true;

  @HostBinding('attr.tabindex') tabindex = '0';
  @HostBinding('attr.aria-live') ariaLive = 'polite';

  @HostBinding('class.toast') get toastMode() {
	  return this.mode === DaffNotificationModeEnum.Toast;
  }

  @HostBinding('class.inline') get inlineMode() {
	  return this.mode === DaffNotificationModeEnum.Inline;
  }

  /**
   * Whether or not a notification is closable
   */
  @Input() dismissable = true;

  /**
   * The duration (in seconds) that a notification is visible
   */
  @Input() duration: number;

  @Output() closeNotification: EventEmitter<void> = new EventEmitter();

  /**
   * The mode to layout the content within a notification
   */
  @Input() mode: DaffNotificationMode = DaffNotificationModeEnum.Toast;

  constructor(private elementRef: ElementRef, private renderer: Renderer2) {
	  super(elementRef, renderer);
  }

  @ContentChild(DaffPrefixDirective)
  _prefix: DaffPrefixDirective;

  onCloseNotification(event: Event) {
    this.closeNotification.emit();
  }
}
