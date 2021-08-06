import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { DaffArticleModule } from '@daffodil/design';

import { DaffioDocsTableOfContentsModule } from '../table-of-contents/table-of-contents.module';
import { DaffioDocViewerComponent } from './doc-viewer.component';

@NgModule({
  declarations: [
    DaffioDocViewerComponent,
  ],
  exports: [
    DaffioDocViewerComponent,
  ],
  imports: [
    CommonModule,
    DaffArticleModule,
    DaffioDocsTableOfContentsModule,
  ],
})
export class DaffioDocViewerModule { }
