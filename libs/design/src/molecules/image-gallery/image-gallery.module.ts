import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { DaffImageListModule } from '../image-list/public_api';
import { DaffGalleryImageComponent } from './gallery-image/gallery-image.component';
import { DaffImageGalleryComponent } from './image-gallery/image-gallery.component';

@NgModule({
  imports: [
    CommonModule,
    DaffImageListModule,
  ],
  declarations: [
    DaffImageGalleryComponent,
    DaffGalleryImageComponent,
  ],
  exports: [
    DaffImageGalleryComponent,
    DaffGalleryImageComponent,
  ],
})
export class DaffImageGalleryModule { }
