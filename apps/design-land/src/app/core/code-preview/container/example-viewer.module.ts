import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DesignLandExampleViewer } from './example-viewer.component';
import { DesignLandCodePreviewModule } from '../component/code-preview.module';

@NgModule({
  declarations: [
    DesignLandExampleViewer
  ],
  imports: [
    CommonModule,
    DesignLandCodePreviewModule
  ],
  exports: [
    DesignLandExampleViewer
  ]
})
export class DesignLandExampleViewerModule { }
