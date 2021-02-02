import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { DaffImageGalleryModule } from '@daffodil/design';

import { ImageGalleryComponent } from './components/image-gallery.component';
import { DemoImageGalleryStateModule } from './image-gallery.state.module';

@NgModule({
  imports: [
    CommonModule,
    DemoImageGalleryStateModule,
    DaffImageGalleryModule,
  ],
  declarations: [
    ImageGalleryComponent,
  ],
  exports: [
    ImageGalleryComponent,
  ],
})
export class ImageGalleryModule { }
