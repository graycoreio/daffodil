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
  host: {
    'class': 'daff-notification',
    '[class.vertical]': 'verticalOrientation',
    '[class.horizontal]': 'horizontalOrientation',
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

  /**
   * @docs-private
   */
  get verticalOrientation() {
    return this.orientation === DaffNotificationOrientationEnum.Vertical;
  }

  /**
   * @docs-private
   */
  get horizontalOrientation() {
    return this.orientation === DaffNotificationOrientationEnum.Horizontal;
  }

  /** Whether or not a notification is closable */
  @Input() dismissible = false;

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
