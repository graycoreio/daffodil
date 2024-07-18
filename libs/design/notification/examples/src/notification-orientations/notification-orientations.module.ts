import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { DaffButtonModule } from '@daffodil/design/button';
import { DaffNotificationModule } from '@daffodil/design/notification';

import { NotificationOrientationsComponent } from './notification-orientations.component';

@NgModule({
  declarations: [
    NotificationOrientationsComponent,
  ],
  imports: [
    CommonModule,
    DaffNotificationModule,
    DaffButtonModule,
    FontAwesomeModule,
    ReactiveFormsModule,
  ],
  exports: [
    NotificationOrientationsComponent,
  ],
})
export class NotificationOrientationsModule { }
