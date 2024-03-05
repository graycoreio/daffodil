import { OverlayModule } from '@angular/cdk/overlay';
import { PortalModule } from '@angular/cdk/portal';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { DaffPrefixSuffixModule } from '@daffodil/design';
import { DaffButtonModule } from '@daffodil/design/button';

import { DaffToastPositionService } from './service/position.service';
import { DaffToastTemplateComponent } from './toast/toast-template.component';
import { DaffToastComponent } from './toast/toast.component';
import { DaffToastActionsDirective } from './toast-actions/toast-actions.directive';
import { DaffToastMessageDirective } from './toast-message/toast-message.directive';
import { DaffToastTitleDirective } from './toast-title/toast-title.directive';


@NgModule({
  imports: [
    CommonModule,
    DaffPrefixSuffixModule,
    DaffButtonModule,
    FontAwesomeModule,
    PortalModule,
    OverlayModule,
  ],
  declarations: [
    DaffToastComponent,
    DaffToastActionsDirective,
    DaffToastTitleDirective,
    DaffToastMessageDirective,
    DaffToastTemplateComponent,
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
