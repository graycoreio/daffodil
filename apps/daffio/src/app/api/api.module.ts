import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { DaffArticleModule } from '@daffodil/design';

import { DaffioDocViewerModule } from '../docs/components/doc-viewer/doc-viewer.module';
import { DaffioDocsApiRoutingModule } from './api-routing.module';
import { DaffioApiListModule } from './components/api-list/api-list.module';
import { DaffioApiListPageComponent } from './pages/api-list-page/api-list-page.component';
import { DaffioApiPageComponent } from './pages/api-page/api-page.component';

@NgModule({
  imports: [
    CommonModule,
    DaffArticleModule,
    DaffioDocsApiRoutingModule,
    DaffioApiListModule,
    DaffioDocViewerModule,
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
