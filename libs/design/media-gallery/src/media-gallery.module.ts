import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { DaffMediaGalleryComponent } from './media-gallery/media-gallery.component';
import { DaffMediaRendererComponent } from './media-renderer/media-renderer.component';
import { DaffThumbnailDirective } from './thumbnail/thumbnail.directive';

/**
 * @deprecated in favor of {@link DAFF_MEDIA_GALLERY_COMPONENTS} Deprecated in version 0.78.0. Will be removed in version 0.81.0.
 */
@NgModule({
  imports: [
    CommonModule,
    DaffMediaGalleryComponent,
    DaffThumbnailDirective,
    DaffMediaRendererComponent,
  ],
  exports: [
    DaffMediaGalleryComponent,
    DaffThumbnailDirective,
  ],
})
export class DaffMediaGalleryModule {}
