import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DaffioApiDocComponent } from './api-doc.component';
import { DaffioDocViewerModule } from '../../../shared/components/doc-viewer/doc-viewer.module';

@NgModule({
  imports: [
    CommonModule,
    DaffioDocViewerModule
  ],
  declarations: [
    DaffioApiDocComponent
  ],
  exports: [
    DaffioApiDocComponent
  ]
})
export class DaffioApiDocModule {}
