import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { DaffioDocsTemplateComponent } from './docs-template.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
  ],
  declarations: [
    DaffioDocsTemplateComponent,
  ],
  exports: [
    DaffioDocsTemplateComponent,
  ],
})
export class DaffioDocsTemplateModule {}
