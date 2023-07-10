import { ComponentExample } from '@daffodil/design';

import { DefaultNotificationComponent } from './default-notification/default-notification.component';
import { DefaultNotificationModule } from './default-notification/default-notification.module';
import { DismissableNotificationComponent } from './dismissable-notification/dismissable-notification.component';
import { DismissableNotificationModule } from './dismissable-notification/dismissable-notification.module';
import { NotificationOrientationsComponent } from './notification-orientations/notification-orientations.component';
import { NotificationOrientationsModule } from './notification-orientations/notification-orientations.module';
import { NotificationStatusComponent } from './notification-status/notification-status.component';
import { NotificationStatusModule } from './notification-status/notification-status.module';

export const NOTIFICATION_EXAMPLES: ComponentExample[] = [
  { component: DefaultNotificationComponent, module: DefaultNotificationModule },
  { component: NotificationStatusComponent, module: NotificationStatusModule },
  { component: NotificationOrientationsComponent, module: NotificationOrientationsModule },
  { component: DismissableNotificationComponent, module: DismissableNotificationModule },
];
