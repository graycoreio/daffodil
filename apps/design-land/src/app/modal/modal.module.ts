import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { DaffArticleModule } from '@daffodil/design/article';
import { DaffDocsExampleViewerContainer } from '@daffodil/docs-components';

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
    DaffDocsExampleViewerContainer,
  ],
})
export class DesignLandModalModule {
}
