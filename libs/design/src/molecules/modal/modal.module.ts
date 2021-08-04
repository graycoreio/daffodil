import { OverlayModule } from '@angular/cdk/overlay';
import { PortalModule } from '@angular/cdk/portal';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { DaffModalActionsComponent } from './modal-actions/modal-actions.component';
import { DaffModalContentComponent } from './modal-content/modal-content.component';
import { DaffModalHeaderComponent } from './modal-header/modal-header.component';
import { DaffModalTitleDirective } from './modal-title/modal-title.directive';
import { DaffModalComponent } from './modal/modal.component';

@NgModule({
  imports: [
    CommonModule,
    PortalModule,
    OverlayModule,
  ],
  exports: [
    DaffModalHeaderComponent,
    DaffModalTitleDirective,
    DaffModalContentComponent,
    DaffModalActionsComponent,
  ],
  declarations: [
    DaffModalComponent,
    DaffModalHeaderComponent,
    DaffModalTitleDirective,
    DaffModalContentComponent,
    DaffModalActionsComponent,
  ],
})
export class DaffModalModule { }
