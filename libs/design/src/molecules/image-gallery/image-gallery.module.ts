import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ImageGalleryComponent } from './image-gallery/image-gallery.component';
import { GalleryImageComponent } from './gallery-image/gallery-image.component';
import { SelectedGalleryImageComponent } from './selected-gallery-image/selected-gallery-image.component';
import { DaffImageListModule } from '../image-list/public_api';

@NgModule({
  imports: [
    CommonModule,
    DaffImageListModule
  ],
  declarations: [
    ImageGalleryComponent,
    GalleryImageComponent,
    SelectedGalleryImageComponent
  ],
  exports: [
    ImageGalleryComponent,
    GalleryImageComponent,
    SelectedGalleryImageComponent
  ]
})
export class DaffImageGalleryModule { }
