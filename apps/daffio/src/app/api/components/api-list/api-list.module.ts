import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { DaffContainerModule } from '@daffodil/design/container';

import { DaffioApiListComponent } from './api-list.component';

@NgModule({
  imports: [
    CommonModule,
    DaffContainerModule,
    RouterModule,
  ],
  declarations: [
    DaffioApiListComponent,
  ],
  exports: [
    DaffioApiListComponent,
  ],
})
export class DaffioApiListModule {}
