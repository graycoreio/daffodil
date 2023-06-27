import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { DaffPrefixSuffixModule } from '@daffodil/design';

import { DaffNotificationActionsDirective } from './notification-actions/notification-actions.directive';
import { DaffNotificationMessageDirective } from './notification-message/notification-message.directive';
import { DaffNotificationSubtitleDirective } from './notification-subtitle/notification-subtitle.directive';
import { DaffNotificationTitleDirective } from './notification-title/notification-title.directive';
import { DaffNotificationComponent } from './notification/notification.component';


@NgModule({
  imports: [
    CommonModule,
    DaffPrefixSuffixModule,
    FontAwesomeModule,
  ],
  declarations: [
    DaffNotificationComponent,
    DaffNotificationActionsDirective,
    DaffNotificationMessageDirective,
    DaffNotificationTitleDirective,
    DaffNotificationSubtitleDirective,
  ],
  exports: [
    DaffNotificationComponent,
    DaffNotificationActionsDirective,
    DaffNotificationMessageDirective,
    DaffNotificationTitleDirective,
    DaffNotificationSubtitleDirective,
    DaffPrefixSuffixModule,
  ],
})
export class DaffNotificationModule { }
