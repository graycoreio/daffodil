import { DaffPrefixSuffixModule } from '@daffodil/design';

import { DaffNotificationComponent } from './notification/notification.component';
import { DaffNotificationActionsDirective } from './notification-actions/notification-actions.directive';
import { DaffNotificationMessageDirective } from './notification-message/notification-message.directive';
import { DaffNotificationSubtitleDirective } from './notification-subtitle/notification-subtitle.directive';
import { DaffNotificationTitleDirective } from './notification-title/notification-title.directive';

export const DAFF_NOTIFICATION_COMPONENTS = <const> [
  DaffNotificationComponent,
  DaffNotificationActionsDirective,
  DaffNotificationMessageDirective,
  DaffNotificationTitleDirective,
  DaffNotificationSubtitleDirective,
  DaffPrefixSuffixModule,
];
