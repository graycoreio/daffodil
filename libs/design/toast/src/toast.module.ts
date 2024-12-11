import { OverlayModule } from '@angular/cdk/overlay';
import { PortalModule } from '@angular/cdk/portal';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { DaffPrefixSuffixModule } from '@daffodil/design';
import { DaffButtonModule } from '@daffodil/design/button';

import { DaffToastPositionService } from './service/position.service';
import { DaffToastComponent } from './toast/toast.component';
import { DaffToastActionsDirective } from './toast-actions/toast-actions.directive';
import { DaffToastMessageDirective } from './toast-message/toast-message.directive';
import { DaffToastTitleDirective } from './toast-title/toast-title.directive';

/**
 * @deprecated in favor of {@link provideDaffToast}. Deprecated in version 0.78.0. Will be removed in version 1.0.0.
 */
@NgModule({
  imports: [
    CommonModule,
    DaffPrefixSuffixModule,
    DaffButtonModule,
    FontAwesomeModule,
    PortalModule,
    OverlayModule,
    DaffToastComponent,
    DaffToastActionsDirective,
    DaffToastTitleDirective,
    DaffToastMessageDirective,
  ],
  exports: [
    DaffToastComponent,
    DaffToastActionsDirective,
    DaffToastTitleDirective,
    DaffToastMessageDirective,
    DaffPrefixSuffixModule,
  ],
  providers: [
    DaffToastPositionService,
  ],
})
export class DaffToastModule { }
