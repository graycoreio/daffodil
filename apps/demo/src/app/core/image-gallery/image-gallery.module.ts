import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DaffImageGalleryModule } from '@daffodil/design';

import { DemoImageGalleryStateModule } from './image-gallery.state.module';
import { ImageGalleryComponent } from './components/image-gallery.component';

@NgModule({
  imports: [
    CommonModule,
    DemoImageGalleryStateModule,
    DaffImageGalleryModule,
  ],
  declarations: [
    ImageGalleryComponent
  ],
  exports: [
    ImageGalleryComponent
  ]
})
export class ImageGalleryModule { }
