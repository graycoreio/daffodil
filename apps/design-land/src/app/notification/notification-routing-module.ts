import { NgModule } from '@angular/core';
import {
  Routes,
  RouterModule,
} from '@angular/router';

import { DesignLandNotificationComponent } from './notification.component';

export const notificationRoutes: Routes = [
  { path: '', component: DesignLandNotificationComponent },
];

@NgModule({
  imports: [
    RouterModule.forChild(notificationRoutes),
  ],
  exports: [
    RouterModule,
  ],
})
export class DesignLandNotificationRoutingModule {}
