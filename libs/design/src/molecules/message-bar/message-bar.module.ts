import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DaffMessageBarComponent } from './message-bar/message-bar.component';
import { DaffPrefixSuffixModule } from '../../core/prefix-suffix/prefix-suffix.module';
import { DaffMessageBarDismissalDirective } from './message-bar-dismissal/message-bar-dismissal.directive';
import { DaffMessageBarActionsDirective } from './message-bar-actions/message-bar-actions.directive';
import { DaffMessageBarMessageDirective } from './message-bar-message/message-bar-message.directive';

@NgModule({
  imports: [
    CommonModule,

    DaffPrefixSuffixModule
  ],
  declarations: [
    DaffMessageBarComponent,
    DaffMessageBarActionsDirective,
    DaffMessageBarDismissalDirective,
    DaffMessageBarMessageDirective
  ],
  exports: [
    DaffMessageBarComponent,
    DaffMessageBarActionsDirective,
    DaffMessageBarDismissalDirective,
    DaffMessageBarMessageDirective,
    DaffPrefixSuffixModule
  ]
})
export class DaffMessageBarModule { }
