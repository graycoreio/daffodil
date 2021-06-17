import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { DaffioDocViewerModule } from '../shared/components/doc-viewer/doc-viewer.module';
import { DaffioGuideViewerModule } from './components/guide-viewer/guide-viewer.module';
import { DaffioGuideDocsRoutingModule } from './guide-docs-routing.module';
import { DaffioGuideViewComponent } from './views/guide-view.component';

@NgModule({
  imports: [
    CommonModule,
    DaffioDocViewerModule,
    DaffioGuideViewerModule,
    DaffioGuideDocsRoutingModule,
  ],
  declarations: [
    DaffioGuideViewComponent,
  ],
})
export class DaffioGuideDocsModule {}
