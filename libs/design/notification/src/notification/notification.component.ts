/* eslint-disable quote-props */
import {
  Component,
  Input,
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
  DaffPrefixDirective,
  DaffStatusableDirective,
  DaffStatusEnum,
} from '@daffodil/design';

import {
  DaffNotificationOrientation,
  DaffNotificationOrientationEnum,
} from '../helpers/notification-orientation';
import { DaffNotificationActionsDirective } from '../notification-actions/notification-actions.directive';

/**
 * Notifications provide contextual feedback or information related to user actions within a page's content.
 *
 * Use [Toast](/libs/design/toast/README.md) for app-level alerts.
 *
 * @example
 * ```html
 * <daff-notification>
 *  <fa-icon daffPrefix [icon]="faExclamation"></fa-icon>
 *  <div daffNotificationTitle>Payment Failed</div>
 *  <div daffNotificationMessage>We were unable to process your payment for order #12345. Please update your payment details and try again.</div>
 *  <div daffNotificationActions>
 *    <button daff-button>Update payment</button>
 *    <button daff-button>Contact support</button>
 *  </div>
 * </daff-notification>
 * ```
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
  host: {
    'class': 'daff-notification',
    '[class.vertical]': 'orientation === "vertical"',
    '[class.horizontal]': 'orientation === "horizontal"',
    '[class.dismissible]': 'dismissible',
    'tabindex': '0',
    '[attr.role]': 'role',
  },
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    FaIconComponent,
    DaffPrefixDirective,
  ],
})
export class DaffNotificationComponent {
  /**
   * @docs-private
   */
  faTimes = faTimes;

  /**
   * @docs-private
   */
  @ContentChild(DaffPrefixDirective) _prefix: DaffPrefixDirective;

  /**
   * @docs-private
   */
  @ContentChild(DaffNotificationActionsDirective) _actions: DaffNotificationActionsDirective;

  /**
   * @docs-private
   *
   * Sets role to alert when `status="warn"` or `status="critical"`.
   * Sets role to status on all other instances.
   */
  get role() {
    return this.statusDirective.status === DaffStatusEnum.Warn || this.statusDirective.status === DaffStatusEnum.Critical ? 'alert' : 'status';
  };

  /** Whether the notification can be dismissed by the user.
   * Displays a close icon if `true`.
   */
  @Input() dismissible = false;

  constructor(private statusDirective: DaffStatusableDirective) {}

  /**
   * The orientation of a notification.
   */
  @Input({ transform: (value: DaffNotificationOrientation | null | undefined) => value || DaffNotificationOrientationEnum.Vertical })
  orientation: DaffNotificationOrientation = 'vertical';

  /**
   * Emits when the notification is closed.
   */
  @Output() closeNotification: EventEmitter<void> = new EventEmitter();

  /**
   * @docs-private
   *
   * Internal handler for the close icon click.
   */
  onCloseNotification(event: Event) {
    this.closeNotification.emit();
  }
}
