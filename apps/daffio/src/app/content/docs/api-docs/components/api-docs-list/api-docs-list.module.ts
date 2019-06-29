import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { DaffLinkModule } from '@daffodil/design';

import { ApiDocsListComponent } from './api-docs-list.component';

@NgModule({
  imports: [
    CommonModule,
    DaffLinkModule,
    RouterModule
  ],
  declarations: [
    ApiDocsListComponent
  ],
  exports: [
    ApiDocsListComponent
  ]
})
export class ApiDocsListComponentModule {}
