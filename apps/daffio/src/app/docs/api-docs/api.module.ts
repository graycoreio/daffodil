import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DaffioApiDocsListViewComponent } from './views//api-docs-list/api-docs-list-view.component';
import { DaffioDocsApiRoutingModule } from './api-routing.module';
import { DaffioApiDocModule } from './components/api-doc/api-doc.module';
import { DaffioApiDocsListModule } from './components/api-docs-list/api-docs-list.module';
import { DaffioApiDocViewComponent } from './views/api-doc-view/doc-view.component';

@NgModule({
  imports: [
    CommonModule,
    DaffioDocsApiRoutingModule,
    DaffioApiDocModule,
    DaffioApiDocsListModule,
  ],
  declarations: [
    DaffioApiDocsListViewComponent,
    DaffioApiDocViewComponent
  ]
})
export class DaffioDocsApiModule {}
