import { ComponentExample } from '@daffodil/design';

import { DefaultNotificationComponent } from './default-notification/default-notification.component';
import { DefaultNotificationModule } from './default-notification/default-notification.module';
import { DismissibleNotificationComponent } from './dismissible-notification/dismissible-notification.component';
import { DismissibleNotificationModule } from './dismissible-notification/dismissible-notification.module';
import { NotificationOrientationsComponent } from './notification-orientations/notification-orientations.component';
import { NotificationOrientationsModule } from './notification-orientations/notification-orientations.module';
import { NotificationStatusComponent } from './notification-status/notification-status.component';
import { NotificationStatusModule } from './notification-status/notification-status.module';

export const NOTIFICATION_EXAMPLES: ComponentExample[] = [
  { component: DefaultNotificationComponent, module: DefaultNotificationModule },
  { component: NotificationStatusComponent, module: NotificationStatusModule },
  { component: NotificationOrientationsComponent, module: NotificationOrientationsModule },
  { component: DismissibleNotificationComponent, module: DismissibleNotificationModule },
];
