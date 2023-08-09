import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { DaffButtonModule } from '@daffodil/design';
import { DaffNotificationModule } from '@daffodil/design/notification';

import { DismissableNotificationComponent } from './dismissable-notification.component';

@NgModule({
  declarations: [
    DismissableNotificationComponent,
  ],
  imports: [
    CommonModule,
    DaffNotificationModule,
    FontAwesomeModule,
    DaffButtonModule,
  ],
  exports: [
    DismissableNotificationComponent,
  ],
})
export class DismissableNotificationModule { }
