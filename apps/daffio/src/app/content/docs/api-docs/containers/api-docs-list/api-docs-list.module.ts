import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ApiDocsListContainer } from './api-docs-list.component';
import { ApiDocsListComponentModule } from '../../components/api-docs-list/api-docs-list.module';

@NgModule({
  imports: [
    CommonModule,
    ApiDocsListComponentModule
  ],
  declarations: [
    ApiDocsListContainer
  ],
  exports: [
    ApiDocsListContainer
  ]
})
export class ApiDocsListModule {}
