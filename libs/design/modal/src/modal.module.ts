import { OverlayModule } from '@angular/cdk/overlay';
import { PortalModule } from '@angular/cdk/portal';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { DaffModalComponent } from './modal/modal.component';
import { DaffModalActionsComponent } from './modal-actions/modal-actions.component';
import { DaffModalCloseDirective } from './modal-close/modal-close.directive';
import { DaffModalContentComponent } from './modal-content/modal-content.component';
import { DaffModalHeaderComponent } from './modal-header/modal-header.component';
import { DaffModalTitleDirective } from './modal-title/modal-title.directive';
import { DaffModalService } from './service/modal.service';

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
    DaffModalCloseDirective,
  ],
  declarations: [
    DaffModalComponent,
    DaffModalHeaderComponent,
    DaffModalTitleDirective,
    DaffModalContentComponent,
    DaffModalActionsComponent,
    DaffModalCloseDirective,
  ],
  providers: [
    DaffModalService,
  ],
})
export class DaffModalModule { }
