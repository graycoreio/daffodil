import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { DesignLandCodePreviewModule } from '../component/code-preview.module';
import { DesignLandExampleViewerContainer } from './example-viewer.component';

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
