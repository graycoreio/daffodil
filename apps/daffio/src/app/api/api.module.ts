import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { DaffArticleModule } from '@daffodil/design/article';
import { DaffContainerModule } from '@daffodil/design/container';

import { DaffioDocsApiRoutingModule } from './api-routing.module';
import { DaffioApiListModule } from './components/api-list/api-list.module';
import { DaffioApiListPageComponent } from './pages/api-list-page/api-list-page.component';
import { DaffioApiPageComponent } from './pages/api-page/api-page.component';
import { DaffioDocsSidebarComponentModule } from '../core/sidebar/components/docs-sidebar/docs-sidebar.module';
import { DaffioDocViewerModule } from '../docs/components/doc-viewer/doc-viewer.module';
import { DaffioDocsPackagesSidebarComponentModule } from '../guides/components/packages-sidebar/packages-sidebar.module';

@NgModule({
  imports: [
    CommonModule,
    DaffArticleModule,
    DaffioDocsApiRoutingModule,
    DaffioApiListModule,
    DaffioDocViewerModule,
    DaffioDocsSidebarComponentModule,
    DaffioDocsPackagesSidebarComponentModule,

    DaffContainerModule,
  ],
  declarations: [
    DaffioApiListPageComponent,
    DaffioApiPageComponent,
  ],
  exports: [
    DaffioApiListPageComponent,
    DaffioApiPageComponent,
  ],
})
export class DaffioApiModule {}
