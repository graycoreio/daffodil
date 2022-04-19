import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { CodePreviewComponent } from './code-preview.component';

@NgModule({
  declarations: [
    CodePreviewComponent,
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    CodePreviewComponent,
  ],
})
export class DesignLandCodePreviewModule { }
