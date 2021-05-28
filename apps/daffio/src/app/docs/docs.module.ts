import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { DaffioDocsRoutingModule } from './docs-routing.module';
import { DaffioDocViewerModule } from './shared/components/doc-viewer/doc-viewer.module';
import { DaffioGuideViewerModule } from './guide-docs/components/guide-viewer/guide-viewer.module';
import { DaffioGuideViewComponent } from './guide-docs/views/guide-view.component';

@NgModule({
  imports: [
    CommonModule,
    DaffioDocsRoutingModule,
    DaffioDocViewerModule,
    DaffioGuideViewerModule,
  ],
  declarations: [
    DaffioGuideViewComponent,
  ],
})
export class DaffioDocsModule {}
