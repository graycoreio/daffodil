import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { DaffioDocsRoutingModule } from './docs-routing.module';
import { DaffioDocViewerModule } from './shared/components/doc-viewer/doc-viewer.module';
import { DaffioDocsTemplateModule } from './shared/components/docs-template/docs-template.module';
import { DaffioDocViewComponent } from './shared/views/doc/doc-view.component';

@NgModule({
  imports: [
    CommonModule,
    DaffioDocsRoutingModule,
    DaffioDocViewerModule,
    DaffioDocsTemplateModule,
  ],
  declarations: [
    DaffioDocViewComponent,
  ],
})
export class DaffioDocsModule {}
