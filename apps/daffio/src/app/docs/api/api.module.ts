import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { DaffArticleModule } from '@daffodil/design/article';
import { DaffContainerModule } from '@daffodil/design/container';

import { DaffioDocsApiRoutingModule } from './api-routing.module';
import { daffioDocsApiContentComponentProvider } from './components/api-content/api-content.provider';
import { DaffioApiListModule } from './components/api-list/api-list.module';
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
    daffioDocsApiContentComponentProvider(),
  ],
})
export class DaffioApiModule {}
