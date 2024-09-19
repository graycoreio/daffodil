import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { DaffArticleModule } from '@daffodil/design/article';
import { DAFF_BREADCRUMB_COMPONENTS } from '@daffodil/design/breadcrumb';
import { DaffButtonModule } from '@daffodil/design/button';
import { DaffContainerModule } from '@daffodil/design/container';
import { DaffSidebarModule } from '@daffodil/design/sidebar';

import { DaffioDocViewerComponent } from './doc-viewer.component';
import { DaffioApiPackageComponent } from '../../api/components/api-package/api-package.component';
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
    DaffioApiPackageComponent,
    DaffSidebarModule,
    DaffButtonModule,
    ...DAFF_BREADCRUMB_COMPONENTS,
    FontAwesomeModule,
    RouterLink,
  ],
})
export class DaffioDocViewerModule { }
