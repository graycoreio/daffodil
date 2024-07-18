import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { DaffButtonModule } from '@daffodil/design/button';
import { DaffNotificationModule } from '@daffodil/design/notification';

import { DismissibleNotificationComponent } from './dismissible-notification.component';

@NgModule({
  declarations: [
    DismissibleNotificationComponent,
  ],
  imports: [
    CommonModule,
    DaffNotificationModule,
    FontAwesomeModule,
    DaffButtonModule,
  ],
  exports: [
    DismissibleNotificationComponent,
  ],
})
export class DismissibleNotificationModule { }
