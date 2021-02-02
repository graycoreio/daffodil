import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { DaffioDocsApiRoutingModule } from './api-routing.module';
import { DaffioApiDocModule } from './components/api-doc/api-doc.module';
import { DaffioApiDocsListModule } from './components/api-docs-list/api-docs-list.module';
import { DaffioApiDocsListViewComponent } from './views//api-docs-list/api-docs-list-view.component';
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
    DaffioApiDocViewComponent,
  ],
})
export class DaffioDocsApiModule {}
