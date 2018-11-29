import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DaffImageGalleryComponent } from './image-gallery/image-gallery.component';
import { DaffGalleryImageComponent } from './gallery-image/gallery-image.component';
import { DaffImageListModule } from '../image-list/public_api';

@NgModule({
  imports: [
    CommonModule,
    DaffImageListModule
  ],
  declarations: [
    DaffImageGalleryComponent,
    DaffGalleryImageComponent
  ],
  exports: [
    DaffImageGalleryComponent,
    DaffGalleryImageComponent
  ]
})
export class DaffImageGalleryModule { }
