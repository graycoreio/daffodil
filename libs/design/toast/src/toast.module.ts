import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { DaffPrefixSuffixModule } from '@daffodil/design';

import { DaffToastActionsDirective } from './toast-actions/toast-actions.directive';
import { DaffToastMessageDirective } from './toast-message/toast-message.directive';
import { DaffToastSubtitleDirective } from './toast-subtitle/toast-subtitle.directive';
import { DaffToastTitleDirective } from './toast-title/toast-title.directive';
import { DaffToastComponent } from './toast/toast.component';


@NgModule({
  imports: [
    CommonModule,
    DaffPrefixSuffixModule,
    FontAwesomeModule,
  ],
  declarations: [
    DaffToastComponent,
    DaffToastActionsDirective,
    DaffToastMessageDirective,
    DaffToastTitleDirective,
    DaffToastSubtitleDirective,
  ],
  exports: [
    DaffToastComponent,
    DaffToastActionsDirective,
    DaffToastMessageDirective,
    DaffToastTitleDirective,
    DaffToastSubtitleDirective,
    DaffPrefixSuffixModule,
  ],
})
export class DaffToastModule { }
