import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DaffioDocsListComponent } from '../../components/docs-list/docs-list.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    DaffioDocsListComponent
  ],
  exports: [
    DaffioDocsListComponent
  ]
})
export class DaffioDocsListModule { }
