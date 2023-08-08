import { OverlayModule } from '@angular/cdk/overlay';
import { PortalModule } from '@angular/cdk/portal';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import {
  DaffButtonModule,
  DaffPrefixSuffixModule,
} from '@daffodil/design';

import { DaffToastActionsDirective } from './toast-actions/toast-actions.directive';
import { DaffToastSubtitleDirective } from './toast-subtitle/toast-subtitle.directive';
import { DaffToastTemplateComponent } from './toast-template/toast-template.component';
import { DaffToastTitleDirective } from './toast-title/toast-title.directive';
import { DaffToastComponent } from './toast/toast.component';


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
    DaffToastSubtitleDirective,
    DaffToastTemplateComponent,
  ],
  exports: [
    DaffToastComponent,
    DaffToastActionsDirective,
    DaffToastTitleDirective,
    DaffToastSubtitleDirective,
    DaffPrefixSuffixModule,
  ],
})
export class DaffToastModule { }
