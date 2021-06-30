import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { DaffContainerModule } from '@daffodil/design';

import { DaffioDocViewerModule } from '../../../shared/components/doc-viewer/doc-viewer.module';
import { DaffioGuideTableOfContentsModule } from '../table-of-contents/table-of-contents.module';
import { DaffioGuideViewerComponent } from './guide-viewer.component';

@NgModule({
  declarations: [
    DaffioGuideViewerComponent,
  ],
  exports: [
    DaffioGuideViewerComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    DaffioDocViewerModule,
    DaffContainerModule,
    DaffioGuideTableOfContentsModule,
  ],
})
export class DaffioGuideViewerModule { }
