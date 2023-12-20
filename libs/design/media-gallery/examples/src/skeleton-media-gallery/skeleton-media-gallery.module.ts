import { NgModule } from '@angular/core';

import { DaffImageModule } from '@daffodil/design/image';
import { DaffMediaGalleryModule } from '@daffodil/design/media-gallery';

import { SkeletonMediaGalleryComponent } from './skeleton-media-gallery.component';

@NgModule({
  declarations: [
    SkeletonMediaGalleryComponent,
  ],
  exports: [
    SkeletonMediaGalleryComponent,
  ],
  imports: [
    DaffImageModule,
    DaffMediaGalleryModule,
  ],
  providers: [],
})
export class SkeletonMediaGalleryModule { }
