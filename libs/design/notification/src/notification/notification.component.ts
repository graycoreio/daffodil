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

export type DaffNotificationOrientation = 'horizontal' | 'vertical';

enum DaffNotificationOrientationEnum {
  Horizontal = 'horizontal',
  Vertical = 'vertical',
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

  @HostBinding('class.vertical') get verticalOrientation() {
	  return this.orientation === DaffNotificationOrientationEnum.Vertical;
  }

  @HostBinding('class.horizontal') get horizontalOrientation() {
	  return this.orientation === DaffNotificationOrientationEnum.Horizontal;
  }

  /** Whether or not a notification is closable */
  @Input() @HostBinding('class.dismissable') dismissable = false;

  @Output() closeNotification: EventEmitter<void> = new EventEmitter();

  private _orientation: DaffNotificationOrientation = DaffNotificationOrientationEnum.Vertical;

  @Input()
  get orientation() {
    return this._orientation;
  }

  set orientation(value: DaffNotificationOrientation) {
    if(value === null || value === undefined || <unknown>value === '') {
      this._orientation = DaffNotificationOrientationEnum.Vertical;
    } else {
      this._orientation = value;
    }
  };

  constructor(private elementRef: ElementRef, private renderer: Renderer2) {
	  super(elementRef, renderer);
  }

  @ContentChild(DaffPrefixDirective)
    _prefix: DaffPrefixDirective;

  onCloseNotification(event: Event) {
    this.closeNotification.emit();
  }
}
