import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { DaffButtonModule } from '@daffodil/design';
import { DaffNotificationModule } from '@daffodil/design/notification';

import { NotificationStatusComponent } from './notification-status.component';

@NgModule({
  declarations: [
    NotificationStatusComponent,
  ],
  imports: [
    CommonModule,
    DaffNotificationModule,
    DaffButtonModule,
    FontAwesomeModule,
    ReactiveFormsModule,
  ],
  exports: [
    NotificationStatusComponent,
  ],
})
export class NotificationStatusModule { }
