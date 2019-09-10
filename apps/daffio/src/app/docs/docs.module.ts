import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DaffioDocsRoutingModule } from './docs-routing.module';
import { DaffioDocViewComponent } from './shared/views/doc/doc-view.component';
import { DaffioDocViewerModule } from './shared/components/doc-viewer/doc-viewer.module';
import { DaffioDocsTemplateModule } from './shared/components/docs-template/docs-template.module';

@NgModule({
  imports: [
    CommonModule,
    DaffioDocsRoutingModule,
    DaffioDocViewerModule,
    DaffioDocsTemplateModule
  ],
  declarations: [
    DaffioDocViewComponent
  ]
})
export class DaffioDocsModule {}
