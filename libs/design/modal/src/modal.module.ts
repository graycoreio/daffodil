import { OverlayModule } from '@angular/cdk/overlay';
import { PortalModule } from '@angular/cdk/portal';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { DaffButtonModule } from '@daffodil/design/button';

import { DaffModalComponent } from './modal/modal.component';
import { DaffModalActionsComponent } from './modal-actions/modal-actions.component';
import { DaffModalCloseDirective } from './modal-close/modal-close.directive';
import { DaffModalContentComponent } from './modal-content/modal-content.component';
import { DaffModalHeaderComponent } from './modal-header/modal-header.component';
import { DaffModalTitleDirective } from './modal-title/modal-title.directive';
import { DaffModalService } from './service/modal.service';

/**
 * @deprecated in favor of {@link DAFF_MODAL_COMPONENTS} Deprecated in version 0.78.0. Will be removed in version 0.81.0.
 */
@NgModule({
  imports: [
    CommonModule,
    PortalModule,
    OverlayModule,
    DaffButtonModule,
    FontAwesomeModule,

    DaffModalComponent,
    DaffModalHeaderComponent,
    DaffModalTitleDirective,
    DaffModalContentComponent,
    DaffModalActionsComponent,
    DaffModalCloseDirective,
  ],
  exports: [
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
