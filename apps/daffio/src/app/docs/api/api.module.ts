import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { DaffArticleModule } from '@daffodil/design/article';
import { DaffContainerModule } from '@daffodil/design/container';

import { DaffioDocsApiRoutingModule } from './api-routing.module';
import { provideDaffioDocsApiContentComponent } from './components/api-content/api-content.provider';
import { DaffioApiListComponent } from './components/api-list/api-list.component';
import { DaffioApiListPageComponent } from './pages/api-list-page/api-list-page.component';
import { daffioDocsApiRolesProvider } from './roles/api-roles.provider';

@NgModule({
  imports: [
    CommonModule,
    DaffArticleModule,
    DaffioDocsApiRoutingModule,
    DaffioApiListComponent,

    DaffContainerModule,
  ],
  declarations: [
    DaffioApiListPageComponent,
  ],
  exports: [
    DaffioApiListPageComponent,
  ],
  providers: [
    provideDaffioDocsApiContentComponent(),
    ...daffioDocsApiRolesProvider(),
  ],
})
export class DaffioApiModule {}
