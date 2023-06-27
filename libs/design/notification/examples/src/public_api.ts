import { ComponentExample } from '@daffodil/design';

import { DefaultNotificationComponent } from './default-notification/default-notification.component';
import { DefaultNotificationModule } from './default-notification/default-notification.module';
import { NotificationModeComponent } from './notification-mode/notification-mode.component';
import { NotificationModeModule } from './notification-mode/notification-mode.module';
import { NotificationStatusComponent } from './notification-status/notification-status.component';
import { NotificationStatusModule } from './notification-status/notification-status.module';

export const NOTIFICATION_EXAMPLES: ComponentExample[] = [
  { component: DefaultNotificationComponent, module: DefaultNotificationModule },
  { component: NotificationStatusComponent, module: NotificationStatusModule },
  { component: NotificationModeComponent, module: NotificationModeModule },
];
