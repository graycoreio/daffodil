import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ApiDocsListViewComponent } from './views//api-docs-list/api-docs-list-view.component';
import { DaffioDocsApiRoutingModule } from './api-routing.module';
import { DaffioApiDocContainerModule } from './containers/api-doc/api-doc.module';
import { ApiDocsListModule } from './containers/api-docs-list/api-docs-list.module';
import { ApiDocViewComponent } from './views/api-doc/api-doc-view.component';

@NgModule({
  imports: [
    CommonModule,
    DaffioDocsApiRoutingModule,
    DaffioApiDocContainerModule,
    ApiDocsListModule
  ],
  declarations: [
    ApiDocsListViewComponent,
    ApiDocViewComponent
  ]
})
export class DaffioDocsApiModule {}
