import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { DaffArticleModule } from '@daffodil/design/article';

import { DaffioDocViewerComponent } from './doc-viewer.component';
import { DaffioDocsTableOfContentsModule } from '../table-of-contents/table-of-contents.module';

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
