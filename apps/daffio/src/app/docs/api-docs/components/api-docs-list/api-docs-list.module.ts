import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { DaffContainerModule } from '@daffodil/design';

import { DaffioApiDocsListComponent } from './api-docs-list.component';

@NgModule({
  imports: [
    CommonModule,
    DaffContainerModule,
    RouterModule,
  ],
  declarations: [
    DaffioApiDocsListComponent,
  ],
  exports: [
    DaffioApiDocsListComponent,
  ],
})
export class DaffioApiDocsListModule {}
