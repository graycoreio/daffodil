import { NgIf } from '@angular/common';
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
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

import {
  DaffArticleEncapsulatedDirective,
  DaffPrefixable,
  DaffPrefixDirective,
  DaffPrefixSuffixModule,
  DaffStatusableDirective,
  DaffStatusEnum,
} from '@daffodil/design';

import { DaffNotificationActionsDirective } from '../notification-actions/notification-actions.directive';

export type DaffNotificationOrientation = 'horizontal' | 'vertical';

enum DaffNotificationOrientationEnum {
  Horizontal = 'horizontal',
  Vertical = 'vertical',
}

/**
 * DaffNotificationComponent provides a way to display and communicate
 * information related to user actions within a page's content.
 */
@Component({
  selector: 'daff-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss'],
  hostDirectives: [
    { directive: DaffArticleEncapsulatedDirective },
    {
      directive: DaffStatusableDirective,
      inputs: ['status'],
    },
  ],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    NgIf,
    FaIconComponent,
    DaffPrefixSuffixModule,
  ],
})
export class DaffNotificationComponent implements DaffPrefixable {
  faTimes = faTimes;

  @ContentChild(DaffPrefixDirective) _prefix: DaffPrefixDirective;

  @ContentChild(DaffNotificationActionsDirective) _actions: DaffNotificationActionsDirective;

  @HostBinding('class.daff-notification') class = true;

  @HostBinding('attr.tabindex') tabindex = '0';

  /**
   * Sets role to alert when `status="warn"` or `status="critical"`.
   * Sets role to status on all other instances.
   */
  @HostBinding('attr.role') get role() {
    return this.statusDirective.status === DaffStatusEnum.Warn || this.statusDirective.status === DaffStatusEnum.Critical ? 'alert' : 'status';
  };

  @HostBinding('class.vertical') get verticalOrientation() {
    return this.orientation === DaffNotificationOrientationEnum.Vertical;
  }

  @HostBinding('class.horizontal') get horizontalOrientation() {
    return this.orientation === DaffNotificationOrientationEnum.Horizontal;
  }

  /** Whether or not a notification is closable */
  @Input() @HostBinding('class.dismissible') dismissible = false;

  constructor(private statusDirective: DaffStatusableDirective) {}

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

  /**
   * Output event triggered when the close icon is clicked.
   */
  @Output() closeNotification: EventEmitter<void> = new EventEmitter();

  onCloseNotification(event: Event) {
    this.closeNotification.emit();
  }
}
