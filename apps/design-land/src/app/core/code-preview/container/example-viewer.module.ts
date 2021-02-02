import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DesignLandExampleViewerContainer } from './example-viewer.component';
import { DesignLandCodePreviewModule } from '../component/code-preview.module';

@NgModule({
  declarations: [
    DesignLandExampleViewerContainer,
  ],
  imports: [
    CommonModule,
    DesignLandCodePreviewModule,
  ],
  exports: [
    DesignLandExampleViewerContainer,
  ],
})
export class DesignLandExampleViewerModule { }
