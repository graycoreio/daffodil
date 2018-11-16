import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ImageGalleryComponent } from './image-gallery.component';
import { DaffImageListModule } from '../image-list/image-list.module';
import { DaffGalleryImageModule } from '../gallery-image/public_api';

@NgModule({
  imports: [
    CommonModule,
    DaffImageListModule,
    DaffGalleryImageModule
  ],
  declarations: [
    ImageGalleryComponent
  ],
  exports: [
    ImageGalleryComponent,
    DaffGalleryImageModule
  ]
})
export class DaffImageGalleryModule { }
