import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ImageGalleryComponent } from './image-gallery.component';
import { DaffImageListModule } from '../image-list/image-list.module';

@NgModule({
  imports: [
    CommonModule,
    DaffImageListModule
  ],
  declarations: [
    ImageGalleryComponent
  ],
  exports: [
    ImageGalleryComponent
  ]
})
export class DaffImageGalleryModule { }
