import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { DaffButtonModule } from '@daffodil/design';
import { DaffNotificationModule } from '@daffodil/design/notification';

import { NotificationModeComponent } from './notification-mode.component';

@NgModule({
  declarations: [
    NotificationModeComponent,
  ],
  imports: [
    CommonModule,
    DaffNotificationModule,
    DaffButtonModule,
    FontAwesomeModule,
    ReactiveFormsModule,
  ],
  exports: [
    NotificationModeComponent,
  ],
})
export class NotificationModeModule { }
