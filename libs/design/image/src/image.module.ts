import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { DaffImageComponent } from './image/image.component';

/**
 * @deprecated in favor of {@link DAFF_IMAGE_COMPONENTS}
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
