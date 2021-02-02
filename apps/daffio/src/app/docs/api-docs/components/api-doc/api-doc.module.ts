import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { DaffioDocViewerModule } from '../../../shared/components/doc-viewer/doc-viewer.module';
import { DaffioApiDocComponent } from './api-doc.component';

@NgModule({
  imports: [
    CommonModule,
    DaffioDocViewerModule,
  ],
  declarations: [
    DaffioApiDocComponent,
  ],
  exports: [
    DaffioApiDocComponent,
  ],
})
export class DaffioApiDocModule {}
