import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DaffNavbarModule } from '@daffodil/design';

import { CodePreviewComponent } from './code-preview.component';



@NgModule({
  declarations: [CodePreviewComponent],
  imports: [
    CommonModule,
    DaffNavbarModule
  ],
  exports: [
    CodePreviewComponent
  ]
})
export class DesignLandCodePreviewModule { }
