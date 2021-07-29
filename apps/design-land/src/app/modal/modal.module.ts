import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { DaffArticleModule } from '@daffodil/design';

import { DesignLandExampleViewerModule } from '../core/code-preview/container/example-viewer.module';
import { DesignLandModalRoutingModule } from './modal-routing.module';
import { DesignLandModalComponent } from './modal.component';

@NgModule({
  declarations: [
    DesignLandModalComponent,
  ],
  imports: [
    CommonModule,
    DaffArticleModule,
    DesignLandModalRoutingModule,
    DesignLandExampleViewerModule,
  ],
})
export class DesignLandModalModule {
}
