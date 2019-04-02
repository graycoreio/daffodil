import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DaffioDocsListModule } from '../../components/docs-list/docs-list.module';
import { DaffioDocsComponent } from './docs.component';

@NgModule({
  imports: [
    CommonModule,
    DaffioDocsListModule
  ],
  declarations: [
    DaffioDocsComponent
  ],
  exports: [
    DaffioDocsComponent
  ]
})
export class DaffioDocsComponentModule { }
