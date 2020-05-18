import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HighlightModule } from 'ngx-highlightjs';
import { DaffNavbarModule } from '@daffodil/design';

import { CodePreviewComponent } from './code-preview.component';



@NgModule({
  declarations: [CodePreviewComponent],
  imports: [
    CommonModule,
    HighlightModule,
    DaffNavbarModule
  ],
  exports: [
    CodePreviewComponent
  ]
})
export class DesignLandCodePreviewModule { }
