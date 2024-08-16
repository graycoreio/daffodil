import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { DaffArticleModule } from '@daffodil/design/article';
import { DaffButtonModule } from '@daffodil/design/button';
import { DaffContainerModule } from '@daffodil/design/container';
import { DaffSidebarModule } from '@daffodil/design/sidebar';

import { DaffioDocViewerComponent } from './doc-viewer.component';
import { DaffioApiListChildrenComponent } from '../../api/components/api-list-children/api-list-children.component';
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
    DaffContainerModule,
    DaffioDocsTableOfContentsModule,
    DaffioApiListChildrenComponent,
    DaffSidebarModule,
    DaffButtonModule,
    FontAwesomeModule,
  ],
})
export class DaffioDocViewerModule { }
