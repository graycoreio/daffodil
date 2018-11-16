import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DaffGalleryImageComponent } from './gallery-image.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    DaffGalleryImageComponent
  ],
  exports: [
    DaffGalleryImageComponent
  ]
})
export class DaffGalleryImageModule { }
