import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { DaffImageComponent } from './image/image.component';

/**
 * @deprecated in favor of {@link DAFF_IMAGE_COMPONENTS} Deprecated in version 0.78.0. Will be removed in version 0.81.0.
 * */
@NgModule({
  imports: [
    CommonModule,
    DaffImageComponent,
  ],
  exports: [
    DaffImageComponent,
  ],
})
export class DaffImageModule { }
