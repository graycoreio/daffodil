import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DaffioDocsTemplateComponent } from './docs-template.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [
    DaffioDocsTemplateComponent
  ],
  exports: [
    DaffioDocsTemplateComponent 
  ]
})
export class DaffioDocsTemplateModule {}
