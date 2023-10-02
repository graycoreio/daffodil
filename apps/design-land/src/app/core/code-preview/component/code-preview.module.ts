import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { CodePreviewComponent } from './code-preview.component';

@NgModule({
  imports: [
    CommonModule,
  ],
  exports: [
    CodePreviewComponent,
  ],
  declarations: [
    CodePreviewComponent,
  ],
})
export class DesignLandCodePreviewModule { }
