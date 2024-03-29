import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { DaffMediaGalleryComponent } from './media-gallery/media-gallery.component';
import { DaffMediaRendererComponent } from './media-renderer/media-renderer.component';
import { DaffThumbnailDirective } from './thumbnail/thumbnail.directive';

@NgModule({
  declarations: [
    DaffMediaGalleryComponent,
    DaffThumbnailDirective,
    DaffMediaRendererComponent,
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    DaffThumbnailDirective,
    DaffMediaGalleryComponent,
  ],
})
export class DaffMediaGalleryModule {}
