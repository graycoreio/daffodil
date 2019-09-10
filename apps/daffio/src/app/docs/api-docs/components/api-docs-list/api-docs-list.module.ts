import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { DaffLinkModule, DaffContainerModule } from '@daffodil/design';
import { DaffioApiDocsListComponent } from './api-docs-list.component';

@NgModule({
  imports: [
    CommonModule,
    DaffLinkModule,
    DaffContainerModule,
    RouterModule
  ],
  declarations: [
    DaffioApiDocsListComponent
  ],
  exports: [
    DaffioApiDocsListComponent
  ]
})
export class DaffioApiDocsListModule {}
