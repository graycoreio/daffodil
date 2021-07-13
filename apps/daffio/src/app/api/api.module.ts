import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { DaffArticleModule } from '@daffodil/design';

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
