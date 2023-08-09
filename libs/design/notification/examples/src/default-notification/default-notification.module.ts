import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { DaffButtonModule } from '@daffodil/design';
import { DaffNotificationModule } from '@daffodil/design/notification';

import { DefaultNotificationComponent } from './default-notification.component';

@NgModule({
  declarations: [
    DefaultNotificationComponent,
  ],
  imports: [
    CommonModule,
    DaffNotificationModule,
    FontAwesomeModule,
    DaffButtonModule,
  ],
  exports: [
    DefaultNotificationComponent,
  ],
})
export class DefaultNotificationModule { }
