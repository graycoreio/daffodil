import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { DaffContainerModule } from '@daffodil/design/container';

import { DaffioApiListComponent } from './api-list.component';
import { DaffioApiListChildrenComponent } from '../api-list-children/api-list-children.component';

@NgModule({
  imports: [
    CommonModule,
    DaffContainerModule,
    DaffioApiListChildrenComponent,
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
