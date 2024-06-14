import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { DaffImageModule } from '@daffodil/design/image';
import { DaffMediaGalleryModule } from '@daffodil/design/media-gallery';

import { ImageGalleryComponent } from './components/image-gallery.component';
import { DemoImageGalleryStateModule } from './image-gallery.state.module';

@NgModule({
  imports: [
    CommonModule,
    DemoImageGalleryStateModule,
    DaffMediaGalleryModule,
    DaffImageModule,
  ],
  declarations: [
    ImageGalleryComponent,
  ],
  exports: [
    ImageGalleryComponent,
  ],
})
export class ImageGalleryModule { }
