import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { DaffPrefixSuffixModule } from '@daffodil/design';

import { DaffNotificationComponent } from './notification/notification.component';
import { DaffNotificationActionsDirective } from './notification-actions/notification-actions.directive';
import { DaffNotificationMessageDirective } from './notification-message/notification-message.directive';
import { DaffNotificationSubtitleDirective } from './notification-subtitle/notification-subtitle.directive';
import { DaffNotificationTitleDirective } from './notification-title/notification-title.directive';

/**
 * @deprecated in favor of {@link DAFF_NOTIFICATION_COMPONENTS}. Deprecated in version 0.78.0. Will be removed in version 1.0.0.
 */
@NgModule({
  imports: [
    CommonModule,
    DaffPrefixSuffixModule,
    FontAwesomeModule,
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
