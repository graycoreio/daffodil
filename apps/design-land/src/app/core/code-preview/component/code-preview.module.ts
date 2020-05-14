import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CodePreviewComponent } from './code-preview.component';
import { HighlightModule } from 'ngx-highlightjs';
import { DaffNavbarModule } from 'libs/design/src';



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
