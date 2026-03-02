import { makeEnvironmentProviders } from '@angular/core';

import { provideDaffDocsExampleContent } from '@daffodil/docs';

export const provideDaffDesignNotificationExamplesContent = () => makeEnvironmentProviders(provideDaffDocsExampleContent(
  {
    id: 'default-notification',
    component: () => import('./default-notification/default-notification.component').then(c => c.DefaultNotificationExampleComponent),
  },
  {
    id: 'dismissible-notification',
    component: () => import('./dismissible-notification/dismissible-notification.component').then(c => c.DismissibleNotificationExampleComponent),
  },
  {
    id: 'notification-orientations',
    component: () => import('./notification-orientations/notification-orientations.component').then(c => c.NotificationOrientationsExampleComponent),
  },
  {
    id: 'notification-status',
    component: () => import('./notification-status/notification-status.component').then(c => c.NotificationStatusExampleComponent),
  },
));

