import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { DaffButtonModule } from '@daffodil/design/button';
import { DaffNotificationModule } from '@daffodil/design/notification';

import { NotificationWithActionsComponent } from './notification-with-actions.component';

@NgModule({
  declarations: [
    NotificationWithActionsComponent,
  ],
  imports: [
    CommonModule,
    DaffNotificationModule,
    FontAwesomeModule,
    DaffButtonModule,
  ],
  exports: [
    NotificationWithActionsComponent,
  ],
})
export class NotificationWithActionsModule { }
