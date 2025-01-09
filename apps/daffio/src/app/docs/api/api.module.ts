import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { DaffArticleModule } from '@daffodil/design/article';
import { DaffContainerModule } from '@daffodil/design/container';

import { DaffioDocsApiRoutingModule } from './api-routing.module';
import { DaffioApiListModule } from './components/api-list/api-list.module';
import { daffioDocsApiComponentProvider } from './components/doc/provider';
import { DaffioApiListPageComponent } from './pages/api-list-page/api-list-page.component';

@NgModule({
  imports: [
    CommonModule,
    DaffArticleModule,
    DaffioDocsApiRoutingModule,
    DaffioApiListModule,

    DaffContainerModule,
  ],
  declarations: [
    DaffioApiListPageComponent,
  ],
  exports: [
    DaffioApiListPageComponent,
  ],
  providers: [
    daffioDocsApiComponentProvider(),
  ],
})
export class DaffioApiModule {}
