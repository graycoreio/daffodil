import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { DaffTreeModule } from '@daffodil/design/tree';

import { DaffioDocsPackagesListComponent } from './packages-list.component';

@NgModule({
  declarations: [
    DaffioDocsPackagesListComponent,
  ],
  exports: [
    DaffioDocsPackagesListComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    DaffTreeModule,
  ],
})
export class DaffioDocsPackagesListComponentModule { }
