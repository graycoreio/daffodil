import { DefaultNotificationExampleComponent } from './default-notification/default-notification.component';
import { DismissibleNotificationExampleComponent } from './dismissible-notification/dismissible-notification.component';
import { NotificationOrientationsExampleComponent } from './notification-orientations/notification-orientations.component';
import { NotificationStatusExampleComponent } from './notification-status/notification-status.component';

export const NOTIFICATION_EXAMPLES = [
  DefaultNotificationExampleComponent,
  DismissibleNotificationExampleComponent,
  NotificationOrientationsExampleComponent,
  NotificationStatusExampleComponent,
];
export { provideDaffDesignNotificationExamplesContent } from './provider';
